#!/usr/bin/env node
/*
 * csp-compat-check.mjs — assert the built HTML is compatible with the CSP that
 * vercel.json ships (backlog CR-4).
 *
 * The problem this closes: lhci / axe / Playwright all run against `pnpm
 * preview`, which serves dist/ WITHOUT the vercel.json response headers. So a
 * change that emits an inline <script> or inline style — which the production
 * CSP (`script-src 'self'; style-src 'self'`, no 'unsafe-inline'/nonce) would
 * block — ships green and only breaks in prod.
 *
 * This is a static gate: it parses the CSP out of vercel.json and scans every
 * built HTML file (dist, recursively) for constructs that CSP would refuse,
 * failing the build before the regression can ship. No live headers needed.
 *
 * What counts as a violation (only when the relevant directive lacks
 * 'unsafe-inline' / a nonce / a hash source):
 *   - script-src: an inline <script> with no src and an executable type
 *     (default, "text/javascript", "module"). Data blocks
 *     (application/json, application/ld+json) are NOT executable → allowed.
 *   - style-src:  an inline <style> element, or any `style="..."` attribute.
 *
 * Usage: node .github/scripts/csp-compat-check.mjs  (run after `pnpm build`)
 */

import { readFileSync } from "node:fs";
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");

/* ---------- parse the CSP from vercel.json ---------- */

const vercel = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
const cspHeader = (vercel.headers ?? [])
  .flatMap((rule) => rule.headers ?? [])
  .find((h) => h.key.toLowerCase() === "content-security-policy");

if (!cspHeader) {
  console.log("csp-compat: no Content-Security-Policy in vercel.json — nothing to check.");
  process.exit(0);
}

const directives = Object.fromEntries(
  cspHeader.value
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => {
      const [name, ...sources] = d.split(/\s+/);
      return [name.toLowerCase(), sources];
    })
);

// A directive "allows inline" if it carries 'unsafe-inline', a nonce, or a hash.
const allowsInline = (sources = []) =>
  sources.some(
    (s) =>
      s === "'unsafe-inline'" ||
      s.startsWith("'nonce-") ||
      s.startsWith("'sha256-") ||
      s.startsWith("'sha384-") ||
      s.startsWith("'sha512-")
  );

const scriptSrc = directives["script-src"] ?? directives["default-src"];
const styleSrc = directives["style-src"] ?? directives["default-src"];
const enforceNoInlineScript = scriptSrc && !allowsInline(scriptSrc);
const enforceNoInlineStyle = styleSrc && !allowsInline(styleSrc);

/* ---------- collect dist HTML ---------- */

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

const EXECUTABLE_TYPES = new Set(["", "text/javascript", "application/javascript", "module"]);

const violations = [];

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);

  if (enforceNoInlineScript) {
    // Every <script ...>...</script> open tag. Inline = no src attribute.
    const scriptTags = html.matchAll(/<script\b([^>]*)>/gi);
    for (const m of scriptTags) {
      const attrs = m[1];
      if (/\bsrc\s*=/.test(attrs)) continue; // external — covered by 'self'
      const typeMatch = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i);
      const type = (typeMatch?.[1] ?? "").toLowerCase();
      if (EXECUTABLE_TYPES.has(type)) {
        violations.push(`${rel}: inline <script${type ? ` type="${type}"` : ""}> — blocked by script-src '${scriptSrc.join(" ")}'`);
      }
    }
  }

  if (enforceNoInlineStyle) {
    if (/<style\b[^>]*>/i.test(html)) {
      violations.push(`${rel}: inline <style> element — blocked by style-src '${styleSrc.join(" ")}'`);
    }
    if (/\sstyle\s*=\s*["']/i.test(html)) {
      violations.push(`${rel}: inline style="..." attribute — blocked by style-src '${styleSrc.join(" ")}'`);
    }
  }
}

/* ---------- report ---------- */

if (violations.length > 0) {
  console.error("✗ csp-compat: built HTML contains constructs the vercel.json CSP would block:\n");
  // De-dupe (the same inline pattern repeats across every page).
  for (const v of [...new Set(violations)]) console.error(`  ${v}`);
  console.error(
    `\n${violations.length} occurrence(s). Fix: move inline JS to a first-party <script src> (script-src 'self'),` +
      ` move inline styles into a stylesheet, or add a nonce/hash to the relevant CSP directive.`
  );
  process.exit(1);
}

console.log("✓ csp-compat: built HTML is compatible with the vercel.json CSP.");
