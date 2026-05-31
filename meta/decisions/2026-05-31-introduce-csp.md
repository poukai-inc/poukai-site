# Decision: introduce a Content-Security-Policy header

**Date:** 2026-05-31
**Status:** Locked
**Supersedes:** D-17 (shipped without a CSP)
**Issue:** [#87](https://github.com/poukai-inc/poukai-site/issues/87) (audit A-SEC-1, 2026-05-30)

## Context

D-17 ratified shipping without a `Content-Security-Policy`. Since then `BaseLayout.astro`
gained two `set:html` inline-script injections (Matomo, Bugsink — both env-gated, currently
unset) and an env-gated runtime third-party CDN fetch (`browser.sentry-cdn.com`). #88 closed
the env-var string-breakout, but with no CSP a future bad env var or a compromised CDN would
execute arbitrary JS with no second line of defence. D-17's own re-open trigger ("if/when a CSP
is introduced") is met.

## Decision

Ship an enforcing CSP on all marketing routes. The policy is derived from the **actual emitted
output** of a production build, not a guess — every route emits only same-origin resources plus
a CSP-exempt `application/ld+json` data block.

```
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
upgrade-insecure-requests
```

No `'unsafe-inline'`, no `'unsafe-eval'`, no hashes/nonces needed.

### Why each source is sufficient (verified against `dist/`)

- **script-src 'self'** — the only `<script src>` is Astro's `ClientRouter` chunk under
  `/_astro/` (same-origin). Vercel Web Analytics (Vercel builds only) emits
  `<script src="/_vercel/insights/script.js">` — also same-origin. JSON-LD is
  `<script type="application/ld+json">`, a non-executable data block that CSP `script-src`
  does not govern. Zero inline executable scripts, zero inline event handlers.
- **style-src 'self'** — DS ships `tokens.css` + `styles.css`; site ships `site.css`. All bundled
  to `/_astro/` (same-origin). Zero `<style>` blocks, zero inline `style=` attributes in `dist/`.
- **font-src 'self'** — woff2 faces bundled to `/_astro/`.
- **img-src 'self' data:** — favicons, apple-touch-icon, `/about-portrait.jpg`, `og.png` all
  same-origin; `data:` retained for any inlined data URIs.
- **connect-src 'self'** — `ClientRouter` prefetch + Vercel Analytics beacon both hit
  same-origin paths (`/_vercel/insights/*`).
- **frame-ancestors 'none'** — modern equivalent of the existing `X-Frame-Options: DENY`
  (kept for defence-in-depth + legacy support).

### `/admin` is excluded

The CSP rule source is `"/((?!admin).*)"`, **not** `/(.*)`. The repo's `vercel.json` `rewrites`
proxy `/admin` → `https://pouk-ai-app.vercel.app/admin` (a separate SPA served under the pouk.ai
origin). A marketing-scoped `script-src 'self'` would break that app's own scripts/API calls.
The other security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
Permissions-Policy) remain on the global `/(.*)` rule — those are safe for the proxied app.

## Amendment required before enabling Matomo / Bugsink (O-011 / O-012)

This CSP is scoped to the **current** emitted output. Enabling either analytics surface requires
amending the policy in the SAME change that sets the env vars, or the feature silently breaks:

- **Matomo** (`PUBLIC_MATOMO_URL` + `PUBLIC_MATOMO_SITE_ID`): the tracker is an inline `set:html`
  script → needs a `script-src` hash (preferred) or the Matomo host; `matomo.js` loads from the
  Matomo host → add it to `script-src`; tracking beacons → add the host to `connect-src`.
- **Bugsink** (`PUBLIC_BUGSINK_DSN`): SDK dynamic-imports from `https://browser.sentry-cdn.com`
  → add to `script-src` (and prefer self-hosting per audit A-SEC-3 / #90); error ingest endpoint
  → add the DSN host to `connect-src`. The bootstrap is an inline `set:html` script → needs a
  hash too.

## Verification

- `node` parses `vercel.json`; two header rules present, CSP scoped to `/((?!admin).*)`.
- Production build inventoried: all `<script src>` / styles / fonts / images are same-origin;
  no inline styles, no inline event handlers, no external hosts. Policy matches reality with no
  `'unsafe-*'`.
- Runtime header verification (curl -I against the Vercel preview) is a deploy-time check —
  confirm the header lands on `/` and is absent on `/admin` after deploy.
