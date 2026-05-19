#!/usr/bin/env node
/**
 * html-weight-check.mjs — R-015 gate
 *
 * Verifies that the gzipped HTML weight of each route does not exceed 110% of
 * the committed baseline in .github/baselines/html-weight.json.
 *
 * R-015 (HARD): HTML weight on any route after gzip is ≤ 110% of the baseline
 * committed to the repo. A regression > 10% blocks merge. The masterplan
 * section 6.1 ("HTML weight `/` ≤ current page +10%") is the upstream source.
 *
 * BASELINE UPDATE PROTOCOL
 * ─────────────────────────
 * Baselines are updated by hand in a dedicated PR, never auto-updated in the
 * same PR as a content or feature change. This keeps weight regressions visible
 * in code review.
 *
 * To regenerate after intentional HTML growth:
 *   1. Run `pnpm build` locally.
 *   2. For each route, measure: gzip -c dist/{route}/index.html | wc -c
 *      (or: gzip -c dist/404.html | wc -c for the 404 route)
 *   3. Update .github/baselines/html-weight.json with the new byte counts.
 *   4. Open a standalone PR titled "chore: update html-weight baseline to vX.Y.Z"
 *      citing R-015 and including the per-route delta table from this script.
 *   5. Reviewer verifies the growth is intentional and approvable.
 *
 * Usage:
 *   node .github/scripts/html-weight-check.mjs
 *
 * Expects: dist/ directory at repo root (produced by `pnpm build`).
 * Exits non-zero if any route exceeds 110% of its baseline.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");
const DIST_DIR = resolve(REPO_ROOT, "dist");
const BASELINE_PATH = resolve(REPO_ROOT, ".github/baselines/html-weight.json");

// R-015 HARD: ≤ 110% of baseline.
const CEILING_RATIO = 1.1;

/**
 * Gzip a Buffer and return the compressed byte length.
 * @param {Buffer} buf
 * @returns {Promise<number>}
 */
function gzipSize(buf) {
  return new Promise((resolve, reject) => {
    zlib.gzip(buf, { level: 9 }, (err, result) => {
      if (err) reject(err);
      else resolve(result.byteLength);
    });
  });
}

/**
 * Resolve a route string to a dist/ HTML file path.
 * @param {string} route  e.g. "/", "/why-ai", "/404"
 * @returns {string}
 */
function routeToDistPath(route) {
  if (route === "/404") {
    return resolve(DIST_DIR, "404.html");
  }
  if (route === "/") {
    return resolve(DIST_DIR, "index.html");
  }
  // Strip leading slash, append /index.html.
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return resolve(DIST_DIR, clean, "index.html");
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error(`::error::dist/ not found at ${DIST_DIR}. Run \`pnpm build\` first.`);
    process.exit(1);
  }

  if (!existsSync(BASELINE_PATH)) {
    console.error(`::error::Baseline file not found at ${BASELINE_PATH}. Commit .github/baselines/html-weight.json.`);
    process.exit(1);
  }

  let baseline;
  try {
    baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  } catch (err) {
    console.error(`::error::Failed to parse baseline JSON: ${err.message}`);
    process.exit(1);
  }

  const routes = baseline.routes;
  if (!routes || typeof routes !== "object") {
    console.error("::error::Baseline JSON missing `routes` object.");
    process.exit(1);
  }

  let anyFailed = false;
  const rows = [];

  for (const [route, baselineBytes] of Object.entries(routes)) {
    const htmlPath = routeToDistPath(route);

    if (!existsSync(htmlPath)) {
      console.error(`::error::Expected HTML file not found: ${htmlPath} (route: ${route})`);
      anyFailed = true;
      rows.push({
        route,
        baselineBytes,
        currentBytes: null,
        ratio: null,
        ceiling: Math.round(baselineBytes * CEILING_RATIO),
        status: "MISSING",
      });
      continue;
    }

    const content = readFileSync(htmlPath);
    const currentBytes = await gzipSize(content);
    const ratio = currentBytes / baselineBytes;
    const ceiling = Math.round(baselineBytes * CEILING_RATIO);
    const passed = ratio <= CEILING_RATIO;
    const status = passed ? "PASS" : "FAIL";

    if (!passed) {
      anyFailed = true;
      console.error(
        `::error::${route} HTML weight regression: ${currentBytes} B gzipped vs baseline ${baselineBytes} B ` +
          `(${(ratio * 100).toFixed(1)}% — limit 110%)`
      );
    }

    rows.push({ route, baselineBytes, currentBytes, ratio, ceiling, status });
  }

  // Markdown summary table (informational — useful as a PR comment body).
  console.log("\nHTML weight summary (R-015, limit 110% of baseline per route):");
  console.log("");
  console.log(
    "| Route | Baseline (gz) | Current (gz) | Ceiling (gz) | Delta | Result |"
  );
  console.log(
    "|-------|--------------|-------------|-------------|-------|--------|"
  );
  for (const row of rows) {
    const current = row.currentBytes != null ? `${row.currentBytes} B` : "MISSING";
    const delta =
      row.ratio != null
        ? `${row.ratio >= 1 ? "+" : ""}${((row.ratio - 1) * 100).toFixed(1)}%`
        : "—";
    console.log(
      `| ${row.route} | ${row.baselineBytes} B | ${current} | ${row.ceiling} B | ${delta} | ${row.status} |`
    );
  }
  console.log("");

  if (anyFailed) {
    console.error("R-015 HARD gate failed. HTML weight regression exceeds 110% of baseline.");
    console.error("");
    console.error(
      "To fix: reduce HTML output size, or update the baseline in a dedicated PR" +
        " (.github/baselines/html-weight.json) per the baseline update protocol in this script."
    );
    process.exit(1);
  }

  console.log("All routes pass the HTML weight gate (R-015).");
  process.exit(0);
}

main().catch((err) => {
  console.error("Unexpected error in html-weight-check:", err);
  process.exit(1);
});
