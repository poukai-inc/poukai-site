/*
 * matomo.js — same-origin Matomo bootstrap loader.
 *
 * Loaded by BaseLayout (only when PUBLIC_MATOMO_URL + PUBLIC_MATOMO_SITE_ID are
 * set) as a first-party <script src="/matomo.js">. Because it is served from
 * pouk.ai itself, it satisfies the site CSP (`script-src 'self'`) WITHOUT an
 * inline hash or nonce — replacing the prior inline `set:html` bootstrap that
 * `script-src 'self'` would have blocked outright (backlog CR-2).
 *
 * Configuration is read from the inert `<script type="application/json"
 * id="matomo-config">` block BaseLayout emits. A JSON data block is not an
 * executable script, so it is not subject to `script-src`.
 *
 * RESIDUAL CSP WORK (tracked under A-SEC-1 / O-011): the Matomo *host* this
 * loader injects (`cfg.url + 'matomo.js'`) and beacons to (`matomo.php`) must
 * be reachable under the site CSP. When O-011 picks the deploy shape:
 *   - Self-hosted same-origin (recommended, e.g. reverse-proxied under pouk.ai)
 *     → no CSP change needed; 'self' already covers it.
 *   - External Matomo host → add that origin to `script-src`, `connect-src`,
 *     and `img-src` in the vercel.json catch-all CSP (the `(?!admin)` rule).
 */
(function () {
  "use strict";
  var cfgEl = document.getElementById("matomo-config");
  if (!cfgEl) return;

  var cfg;
  try {
    cfg = JSON.parse(cfgEl.textContent || "{}");
  } catch (err) {
    return;
  }
  if (!cfg.url || !cfg.siteId) return;

  // Normalise to a trailing slash so `url + 'matomo.php'` is well-formed.
  var u = cfg.url.charAt(cfg.url.length - 1) === "/" ? cfg.url : cfg.url + "/";

  var _paq = (window._paq = window._paq || []);
  _paq.push(["disableCookies"]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", String(cfg.siteId)]);

  var d = document;
  var g = d.createElement("script");
  var s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = u + "matomo.js";
  s.parentNode.insertBefore(g, s);
})();
