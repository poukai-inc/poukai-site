#!/usr/bin/env node
/**
 * security-headers-check.mjs — R-042–R-045 config-correctness gate
 *
 * Reads vercel.json and asserts the headers array contains an entry with
 * source: "/(.*)" carrying all four required security header keys.
 *
 * Required headers (HARD — R-042–R-045):
 *   Strict-Transport-Security   (R-042)
 *   X-Content-Type-Options      (R-043)
 *   Referrer-Policy             (R-044)
 *   Permissions-Policy          (R-045)
 *
 * Optional header (warn-only — not yet in standards; note for future amendment):
 *   X-Frame-Options             (present in vercel.json; not yet an R-NNN requirement)
 *
 * NOTE: This is a config-correctness check, not a runtime check. It catches
 * accidental edits to vercel.json that remove a required header. Runtime
 * verification ("curl -I" on the preview deploy URL) must happen separately
 * at deploy time — Astro's local preview server does NOT emit Vercel's
 * response headers; those are injected by Vercel's edge at runtime only.
 * See meta/standards/technical-requirements.md R-042–R-045 for the curl
 * verification protocol that runs against the live Vercel preview URL.
 *
 * Usage:
 *   node .github/scripts/security-headers-check.mjs
 *
 * Exits non-zero if any required header is missing from vercel.json.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");
const VERCEL_JSON_PATH = resolve(REPO_ROOT, "vercel.json");

// R-042–R-045 HARD: these four keys must be present in the catch-all header rule.
const REQUIRED_HEADERS = [
  "Strict-Transport-Security",   // R-042
  "X-Content-Type-Options",      // R-043
  "Referrer-Policy",             // R-044
  "Permissions-Policy",          // R-045
];

// Warn-only: present in vercel.json but not yet formalised as an R-NNN requirement.
// Future amendment to technical-requirements.md should add X-Frame-Options: DENY
// as a HARD requirement. Tracked here for visibility.
const WARN_ONLY_HEADERS = [
  "X-Frame-Options",
];

function main() {
  if (!existsSync(VERCEL_JSON_PATH)) {
    console.error(`::error::vercel.json not found at ${VERCEL_JSON_PATH}.`);
    process.exit(1);
  }

  let config;
  try {
    config = JSON.parse(readFileSync(VERCEL_JSON_PATH, "utf8"));
  } catch (err) {
    console.error(`::error::Failed to parse vercel.json: ${err.message}`);
    process.exit(1);
  }

  if (!Array.isArray(config.headers)) {
    console.error("::error::vercel.json has no `headers` array. R-042–R-045 require security headers configured in vercel.json.");
    process.exit(1);
  }

  // Find the catch-all rule: source "/(.*)" covers every route.
  // We accept both "/(.*)" and "/" as valid catch-all patterns.
  const catchAllRule = config.headers.find(
    (rule) => rule.source === "/(.*)" || rule.source === "/"
  );

  if (!catchAllRule) {
    console.error(
      '::error::No catch-all header rule found in vercel.json (expected source: "/(.*)").' +
      " R-042–R-045 require a catch-all rule covering all routes."
    );
    process.exit(1);
  }

  const presentKeys = new Set(
    (catchAllRule.headers || []).map((h) => h.key)
  );

  const missing = REQUIRED_HEADERS.filter((k) => !presentKeys.has(k));
  const missingWarn = WARN_ONLY_HEADERS.filter((k) => !presentKeys.has(k));

  // Report present required headers.
  console.log("Security headers present in vercel.json catch-all rule:");
  for (const h of catchAllRule.headers || []) {
    const isRequired = REQUIRED_HEADERS.includes(h.key);
    const isWarn = WARN_ONLY_HEADERS.includes(h.key);
    const tag = isRequired ? " [REQUIRED]" : isWarn ? " [warn-only]" : "";
    console.log(`  ${h.key}: ${h.value}${tag}`);
  }

  // Warn-only gaps (informational).
  if (missingWarn.length > 0) {
    for (const k of missingWarn) {
      console.warn(`  [warn] ${k} is absent from vercel.json. Not yet a HARD requirement; flagged for future standards amendment.`);
    }
  }

  // Hard failures.
  if (missing.length > 0) {
    console.error("");
    console.error(`::error::${missing.length} required security header(s) missing from vercel.json:`);
    for (const k of missing) {
      const rNum = {
        "Strict-Transport-Security": "R-042",
        "X-Content-Type-Options": "R-043",
        "Referrer-Policy": "R-044",
        "Permissions-Policy": "R-045",
      }[k] || "R-???";
      console.error(`  - ${k} (${rNum} HARD)`);
    }
    console.error("");
    console.error(
      "Add the missing header(s) to the catch-all rule in vercel.json under" +
      ' `source: "/(.*)"` and verify with `curl -I` on the Vercel preview URL.'
    );
    process.exit(1);
  }

  // Content-Security-Policy (Decision 2026-05-31, supersedes D-17): must be
  // present in some header rule. It lives in a non-catch-all rule scoped to
  // exclude /admin (the proxied app), so scan every rule rather than only the
  // catch-all. See meta/decisions/2026-05-31-introduce-csp.md.
  const allKeys = new Set(
    config.headers.flatMap((rule) => (rule.headers || []).map((h) => h.key))
  );
  if (!allKeys.has("Content-Security-Policy")) {
    console.error("");
    console.error(
      "::error::Content-Security-Policy missing from vercel.json. Required since" +
      " Decision 2026-05-31 (supersedes D-17). Add it to a header rule scoped to" +
      ' exclude /admin (source "/((?!admin).*)").'
    );
    process.exit(1);
  }

  console.log("");
  console.log("All required security headers present in vercel.json (R-042–R-045 + CSP gate passed).");
  console.log("");
  console.log(
    "NOTE: This is a config-correctness check only. Runtime verification" +
    " (curl -I on the Vercel preview URL) must be performed at deploy time."
  );
  process.exit(0);
}

main();
