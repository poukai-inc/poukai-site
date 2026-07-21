/*
 * reveal-gate.js — same-origin section-reveal gating script.
 *
 * Runs synchronously before first paint (loaded via <script src> with no
 * defer/async, in the same <head> position the prior inline script occupied)
 * so the .reveal-on class is set before the stylesheet is applied, preventing
 * a flash where [data-reveal] elements are briefly visible then hidden by the
 * CSS gate.
 *
 * Adds class="reveal-on" to <html> ONLY when:
 *   (a) this script executes (JS is enabled), AND
 *   (b) prefers-reduced-motion: no-preference (motion is allowed).
 *
 * Without .reveal-on the CSS gate is never active — [data-reveal] elements
 * have no hidden state and are fully visible. This covers:
 *   - JS disabled: script never runs → no class → content always visible.
 *   - prefers-reduced-motion: reduce → condition false → no class → visible.
 *
 * Externalized from an inline `<script is:inline>` (CR-4): the production CSP
 * (vercel.json — `script-src 'self'`, no unsafe-inline/nonce/hash) blocks
 * inline executable scripts outright. Serving this logic from a first-party
 * same-origin file satisfies `script-src 'self'` without weakening the CSP —
 * the same externalization pattern used for the Matomo bootstrap (see
 * public/matomo.js).
 *
 * The reveal observer logic lives in src/scripts/reveal.ts (loaded separately,
 * deferred, at the end of <body>).
 */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    document.documentElement.classList.add("reveal-on");
  }
})();
