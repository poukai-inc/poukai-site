# Technical Requirements — pouk.ai marketing site

**Status**: Approved
**Last updated**: 2026-06-14
**Author**: pouk-ai-reviewer
**Decision authority**: Arian (founder)
**Decisions resolved**: see `meta/decisions/launch-readiness.md` (D-14 through D-22, resolved 2026-05-13)
**Supersedes**: nothing yet — first engineering standard for the repo.

---

> **REVERSAL NOTICE — 2026-06-16 (ratified founder decision, Arian).**
> The **zero-JS / client-JS-posture contract is fully revoked**, and the **hard performance gates coupled to it are decoupled**.
> - **Client-side JS is permitted anywhere, for any reason.** No whitelist, no `// hydration:` justification requirement, no reviewer sign-off for hydration. The JS-budget ceiling no longer blocks merge.
> - **Performance is now ADVISORY, not a merge gate.** Lighthouse scores, Core Web Vitals (LCP/INP/CLS), and HTML weight are still measured, reported, and worth watching — but a perf regression or shipping JS does **not** block a merge and does **not** fail review on its own.
> - **Accessibility and reduced-motion remain fully BINDING.** WCAG 2.1 AA (R-024–R-033), axe-core zero-violations (R-029, R-057), and `prefers-reduced-motion` (R-030, R-053) are untouched by this reversal and still produce a BLOCK on violation. Revoking the JS posture does not touch a11y.
> - Affected rules below are marked **REVOKED 2026-06-16** (JS-posture rules) or reworded to **ADVISORY** (perf gates). Rule IDs are preserved — not deleted — so cross-repo citations (e.g. other docs referencing R-079) still resolve and the history stays legible.

---

## 1. Purpose

This document is the catalog of testable, non-functional requirements that every change to `poukai-inc/pouk.ai` must satisfy before merge. It promotes the standards embedded in `meta/masterplan.md` and `meta/architecture.md` prose into first-class, numbered requirements that reviews can cite (e.g. "violates R-014").

The masterplan remains the strategic narrative — the *why*. This document is the operational checklist — the *what must be true*. Where the two overlap, the masterplan wins on intent and this document wins on test specificity. Where this document references a masterplan section, that section stays authoritative for the underlying decision.

This document is Approved. The open questions O-001 through O-009 that gated promotion from Draft were resolved on 2026-05-13 via `meta/decisions/launch-readiness.md` (D-14 through D-22). Two new open questions (O-011, O-012) cover deployment shape for the tools that decision pass selected; those are infrastructure choices, not standards holes. Section 6 lists the resolved set and the new open questions.

---

## 2. Scope

**In scope**: the `poukai-inc/pouk.ai` repo only — the Astro site (which has replaced the former single-file `index.html`). Covers all thirteen shipped routes (see the route inventory below), `BaseLayout.astro`, content JSON files, the `src/content/writing/*.md` essay corpus, build pipeline, Vercel deploy (`vercel.json` headers + rewrites), and the `.npmrc` / GitHub Packages consumption of `@poukai-inc/ui`.

**Route inventory (13 routes, as shipped 2026-06-14).** The standard's per-route requirements apply across this full inventory, not the original four. Routes are classed as **marketing** (full marketing-page bar: unique title/description, OG/Twitter, JSON-LD where the PM spec calls for it, sitemap entry) or **utility/legal** (functional pages that carry the technical bar — performance, a11y, security, headers — but are exempt from the marketing JSON-LD obligation and from PM-spec/composition governance; see the utility-page note below).

| Route | Class | Notes |
| --- | --- | --- |
| `/` | marketing | Organization JSON-LD required (R-038). |
| `/why-ai` | marketing | Article JSON-LD; `og:type=article` (R-037). |
| `/roles` | marketing | WebPage JSON-LD. |
| `/principles` | marketing | WebPage JSON-LD. |
| `/engagements` | marketing | WebPage JSON-LD. |
| `/about` | marketing | Person JSON-LD. |
| `/writing` | marketing | CollectionPage JSON-LD; index of the essay corpus. |
| `/writing/[slug]` | marketing | Article JSON-LD; `og:type=article` (R-037); per-essay OG image optional. |
| `/onboarding` | marketing | HowTo JSON-LD (engineer's call per `meta/specs/pages/onboarding.md` §9); footer-utility + funnel cross-links only (not primary nav, FS-OB-2). Approved PM spec: `meta/specs/pages/onboarding.md`. |
| `/privacy` | utility/legal | Google OAuth verification asset (#122). JSON-LD-exempt. |
| `/terms` | utility/legal | OAuth verification asset (#122). JSON-LD-exempt. |
| `/scheduling` | utility/legal | Public description of cal.pouk.ai. JSON-LD-exempt (a `WebPage`/`SoftwareApplication` block is permitted but not required). |
| `/404` | system | `noindex,follow`, no canonical, no JSON-LD, excluded from sitemap (R-007, `meta/specs/pages/404.md` §6). |

**Utility/legal page posture.** `/privacy`, `/terms`, and `/scheduling` exist to satisfy the Google OAuth verification requirements for the `cal.pouk.ai` Calendar integration (#122), not to convert prospects. They carry the full technical bar — accessibility (R-024–R-033, BINDING), security headers (R-042–R-046, BINDING), self-hosted fonts (R-017), and the now-ADVISORY perf signals (Lighthouse R-013, Core Web Vitals R-014); the former client-JS budget (R-009/R-010) was revoked 2026-06-16 and no longer applies anywhere — and the SEO basics every indexable page needs: a unique `<title>` (R-034), a `<meta name="description">` within the R-035 length bound, a canonical (R-036), OG/Twitter tags (R-037), and a sitemap entry (R-039). They are **exempt from R-038's JSON-LD obligation** (no PM spec requires structured data on them) and from PM-spec/composition governance (they ship without a `meta/specs/pages/*.md` or `meta/compositions/pages/*.md` by design — the reviewer does not raise their absence as a finding). This resolves the prior ambiguity (audit S-3): a utility page without JSON-LD is the *verified correct state*, not a gap.

**Out of scope**: the `@poukai-inc/ui` package itself (lives in `poukai-inc/poukai-ui`, has its own quality bars in masterplan section 3.3 and its own `size-limit` budgets). Brand-source assets in `/brand/`. The `meta/` project-memory tree. Future product surfaces (`*-app` repos) — including the `/admin` path, which `vercel.json` reverse-proxies to `poukai-inc/pouk.ai-app` and which is excluded from this site's sitemap.

**Audience**: `pouk-ai-engineer` (must satisfy these to ship), `pouk-ai-reviewer` (cites these in review findings), `pouk-ai-pm` (writes specs that respect these as the baseline), Arian (decides when a requirement should change).

---

## 3. Requirements

Every requirement follows the form:

> `**R-NNN (HARD|SOFT)** — <statement>. Verification: <how>. Source: <upstream authority>.`

HARD = merge blocker. The reviewer must recommend BLOCK if a HARD requirement is unmet.
SOFT = should be true, exceptions allowed with documented rationale in the PR description. The reviewer raises as REQUEST_CHANGES, not BLOCK.

Requirements are numbered consecutively across all sub-topics so a future review can cite `R-042` unambiguously. Once a requirement is published it does not get renumbered; if retired it stays in the list marked `(retired)`.

---

### 3.1 Stack & build constraints

**R-001 (HARD)** — The site is built with Astro. No other site-generator framework (Next.js, Remix, SvelteKit, Hugo, etc.) is permitted in this repo. Verification: `astro.config.mjs` exists at repo root; `astro` is a direct dependency in `package.json`. Source: `meta/masterplan.md` section 1 ("Stack") and section 4.2.

**R-002 (HARD)** — `@astrojs/react` is the integration used to render `@poukai-inc/ui` components to static HTML at build time. No other React renderer integration (`@astrojs/preact`, `@astrojs/solid-js`) may render DS components. Verification: `@astrojs/react` listed in `astro.config.mjs` integrations array. Source: `meta/masterplan.md` section 4.2.

**R-003 (HARD)** — `pnpm` is the package manager. `npm` and `yarn` lockfiles must not appear in the repo. Verification: `pnpm-lock.yaml` is present, `package-lock.json` and `yarn.lock` are absent (and listed in `.gitignore` as a defensive measure). Source: `meta/masterplan.md` section 5.1 and 5.2 ("Install command: `pnpm install --frozen-lockfile`").

**R-004 (HARD)** — Node 20 LTS is the build target. The `engines` field in `package.json` pins Node to `>=20 <21`; CI / Vercel use Node 20. Verification: `package.json` `engines.node`, Vercel project setting matches. Source: `meta/masterplan.md` section 5.2.

**R-005 (HARD)** — `@poukai-inc/ui` is consumed via GitHub Packages from `npm.pkg.github.com`, never via a path import or git URL in the site repo's committed manifests. Verification: `.npmrc` at repo root contains `@poukai-inc:registry=https://npm.pkg.github.com` and the auth-token line referencing `${NPM_TOKEN}`; `package.json` lists `@poukai-inc/ui` with a version specifier (not a `file:` or `link:` protocol); grep of the repo finds zero relative or workspace imports of DS source. Source: `meta/masterplan.md` section 5.1 and section 5.2.

**R-006 (HARD)** — Vercel is the deploy target. Build command `pnpm build`, output dir `dist`, install command `pnpm install --frozen-lockfile`, env var `NPM_TOKEN` configured as a Vercel secret. Verification: `vercel.json` (or Vercel project settings, evidenced by a successful preview deploy) match these values. Source: `meta/masterplan.md` section 5.2.

**R-007 (HARD)** — The shipped route set is the thirteen routes enumerated in the §2 route inventory: the nine **marketing** routes (`/`, `/why-ai`, `/roles`, `/principles`, `/engagements`, `/about`, `/writing`, `/writing/[slug]`, `/onboarding`), the three **utility/legal** routes (`/privacy`, `/terms`, `/scheduling`), and the `/404` **system** route (excluded from sitemap, `noindex`, no canonical, no JSON-LD per `meta/specs/pages/404.md` §6). Marketing routes ship only with an approved PM spec in `meta/specs/pages/`; utility/legal routes ship without a PM spec by design (§2 utility-page posture) but require a one-line rationale tying them to their driver (e.g. Google OAuth verification #122). No *additional* route beyond this inventory ships without either an approved PM spec (marketing) or a documented utility rationale (utility/legal). Verification: directory listing of `src/pages/`; reviewer rejects new marketing routes without a spec and new utility routes without a rationale. Source: `meta/masterplan.md` section 1 ("Scope") and section 4.1; `meta/specs/pages/about.md`; `meta/specs/pages/engagements.md`; `meta/specs/pages/writing.md`; `meta/specs/pages/404.md`; `meta/specs/pages/onboarding.md`; #122 (OAuth verification assets — `/privacy`, `/terms`, `/scheduling`). (Revised 2026-06-14: route inventory grown from 5 to 12 to match shipped reality; closes audit finding S-0. Revised 2026-06-14: route count 12→13 with addition of `/onboarding` marketing route; closes FSP-X.2 / R-007 amendment per `meta/specs/pages/onboarding.md` §9.)

**R-008 (SOFT)** — Astro integrations are limited to `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/check`, and `astro-compress` unless a PR justifies an addition with a one-line rationale. Verification: `astro.config.mjs` integrations match; new integrations called out in PR description. Source: `meta/masterplan.md` section 4.2.

---

### 3.2 Client JS budget and discipline

**SECTION-LEVEL REVOKED 2026-06-16 (founder decision).** This section formerly governed a client-JS *budget and discipline* — a whitelist of permitted JS, a third-party-payload ceiling, and a forbid-render-blocking rule. That posture is fully revoked: **client-side JS is now permitted anywhere, for any reason, with no whitelist, no payload ceiling as a merge gate, and no `// hydration:` justification requirement.** The individual rules below are retained by ID for citation legibility, each marked with what it used to require and what (if anything) survives as advisory. The privacy/accessibility properties these rules were partly defending live on independently in section 3.4 (a11y, BINDING) and section 3.6 (security headers / CSP, BINDING).

The original posture (zero client JS on `/`) was relaxed on 2026-05-13 by decisions D-15 (Matomo on every page) and D-16 (Bugsink on every page), and was then **fully revoked on 2026-06-16** (see the reversal notice at the top of this document). See section 5 (Rationale) for the full history.

**R-009 (REVOKED 2026-06-16, founder decision)** — Formerly **HARD**: client JS on any page was restricted to a closed whitelist (first-party analytics, error reporting, justified `@poukai-inc/ui` islands, Vercel Web Analytics, the `<ClientRouter />` runtime), and any other client JS required an Arian-approved standards revision. **This restriction is no longer enforced.** Client-side JS is permitted anywhere, for any reason — no whitelist, no per-script sign-off. What survives: nothing from this rule is binding. Performance impact of any JS shipped is tracked under the now-ADVISORY perf rules (R-013/R-014/R-015); accessibility obligations on anything interactive that JS introduces remain BINDING under section 3.4 (notably R-028 focus-visible, R-030 reduced-motion, R-029 axe).

> *Historical text of the former R-009, retained for reference:* Client JS was limited to: (a) first-party analytics (Matomo tracker, per R-060); (b) first-party error reporting (Bugsink / Sentry-compatible browser SDK, per R-061); (c) `@poukai-inc/ui` islands explicitly hydrated with an inline `// hydration: <reason>` comment on the same line or the line above; (d) Vercel Web Analytics (`@vercel/analytics/astro`), gated on the build-time `VERCEL=1` env var so the script is emitted only on Vercel deploys (its `/_vercel/insights/script.js` URL 404s elsewhere). Vercel Analytics is cookieless, served same-origin on Vercel deploys, and complements (a) by capturing Vercel-side request signals Matomo cannot; (e) Astro's `<ClientRouter />` view-transitions runtime (`astro:transitions`), rendered site-wide in `BaseLayout.astro`. This is first-party Astro framework JS served same-origin from `/_astro/*`; it is admitted because (i) it ships from the site's own origin and is gzip-small relative to the third-party budget, (ii) it degrades gracefully (Firefox no-animation fallback) and the transition it drives is gated by `prefers-reduced-motion` per R-030, and (iii) it does not hydrate page content — it intercepts navigation only. No other client JS shipped without an explicit standards revision approved by Arian. (End of historical R-009 text — this whitelist is revoked; client JS is now unrestricted.)

**R-010 (REVOKED 2026-06-16, founder decision)** — Formerly **HARD**: total third-party JS payload on any page was capped at ≤ 75 kB gzipped, with the `client-js-budget.mjs` CI job failing the deploy above the ceiling. **This budget ceiling is no longer a merge gate.** JS payload (first- or third-party) no longer blocks merge. What survives: nothing binding — payload size is now an ADVISORY input to the perf signals in R-013/R-014/R-015, which are themselves advisory. The `client-js-budget` CI job, if retained, is informational only and must not fail a build.

> *Historical text of the former R-010, retained for reference:* Total third-party JS payload on any page is ≤ 75 kB gzipped. Matomo's tracker (~25 kB) plus Bugsink's browser SDK (~40 kB) plus Vercel Web Analytics (~1.5 kB; same-origin on Vercel deploys but counted against the budget for prudence) together baseline at ~66.5 kB; the 75 kB ceiling forced a hard conversation if a fourth tool was proposed. (End of historical R-010 text — this ceiling is no longer a merge gate.)

**R-011 (REVOKED as a gate 2026-06-16, founder decision; survives as ADVISORY)** — Formerly **HARD**: every third-party `<script>` was required to be `defer`/`async` and non-render-blocking, with inline third-party logic forbidden. **This is no longer a merge gate** — render-blocking or eagerly-loaded JS no longer blocks merge. What survives: deferring non-critical scripts and avoiding render-blocking JS remain **ADVISORY** good practice, surfaced as a NIT at most, because they help the (now-advisory) perf signals in R-013/R-014. No page fails review for shipping a render-blocking or inline script. (Note: this rule never bore on a11y or security; the no-`'unsafe-inline'` CSP obligation lives independently and BINDING in R-046.)

**R-012 (HARD)** — In jurisdictions that require it, no third-party JS executes before user consent. Matomo's cookieless tracking mode is the launch configuration and is permitted to fire on page load. Bugsink's browser SDK is treated as essential operational telemetry and may also fire on page load, with PII scrubbing configured on the server side. If Matomo's cookie-mode is enabled in a future standards revision, this requirement must be tightened with a consent-gate flow — flagged as a future revision in section 6. Verification: confirm Matomo configuration on the preview deploy uses cookieless mode (no `_pk_*` cookies set); confirm Bugsink scrubs IP and form data on ingest. Source: `meta/decisions/launch-readiness.md` D-15 and D-16; [GDPR Art. 7 and ePrivacy Directive Art. 5(3)] as the upstream legal references; [Matomo cookieless tracking docs] as the configuration reference.

**R-078 (REVOKED 2026-06-16, founder decision)** — Formerly **HARD**: Astro hydration directives (`client:load`, `client:idle`, `client:visible`, `client:media`, `client:only`) were forbidden by default, and any use required an inline `// hydration: <reason>` comment that the reviewer independently verified as load-bearing. **This restriction is no longer enforced.** Hydration directives are permitted anywhere, for any reason — no justification comment required, no reviewer sign-off. The parallel inline-comment discipline for first-party analytics/error-reporting script tags (`// analytics: matomo`, `// error-reporting: bugsink`) is likewise no longer required. What survives: nothing from this rule is binding; anything a hydrated island renders that is interactive still owes the BINDING a11y obligations in section 3.4 (R-028 focus-visible, R-029 axe, R-030 reduced-motion). (Continued the hydration discipline formerly at the old R-010; that lineage is now revoked along with this rule.)

**R-079 (REVOKED 2026-06-16, founder decision)** — Formerly **HARD**: components imported from `@poukai-inc/ui` had to render through Astro's server renderer (not hydrated), and any animation in them had to be CSS-only keyframes, not JS-driven. **This restriction is no longer enforced.** DS components may be hydrated and may use JS-driven animation. What survives: nothing from this rule is binding, **with one exception that is unchanged because it is an a11y obligation, not a JS-posture one** — any animation, CSS- or JS-driven, must still honour `prefers-reduced-motion` per R-030 (BINDING). (Preserved the rule formerly at the old R-011; that lineage is now revoked along with this rule. Note: other repo docs cite R-079 by number — the ID is retained here so those citations still resolve.)

**R-080 (REVOKED 2026-06-16, founder decision)** — Formerly **HARD**: no service worker could be registered, on the rationale that a SW runtime fought the (now-revoked) JS budget. **This restriction is no longer enforced** — a service worker may be registered. What survives: nothing binding. A SW that intercepts navigation or caches assets should be reviewed for correctness and for not breaking the BINDING a11y/security obligations, but its mere presence is no longer a finding. Source of the reversal: the 2026-06-16 founder decision supersedes `meta/decisions/launch-readiness.md` D-18.

---

### 3.3 Performance

**R-013 (ADVISORY since 2026-06-16, founder decision; formerly HARD)** — **Target (not a gate):** every page should aim for strong Lighthouse mobile scores — Performance ≥ 95 remains the watch-target, with the A11y category tracked separately and BINDING (see below). **The Lighthouse *Performance/Best-Practices/SEO* scores no longer block a merge.** A perf, BP, or SEO-score regression on its own does not fail review; the reviewer reports the numbers and may raise a NIT or REQUEST_CHANGES if a drop is large and unexplained, but never BLOCK on the score alone. **Carve-out — Accessibility is NOT relaxed:** the Lighthouse Accessibility category and, more importantly, the underlying WCAG AA / axe obligations (R-024, R-029, R-057) remain BINDING and continue to produce a BLOCK on violation; "Lighthouse is advisory" applies to Performance, never to a11y. Verification: `lighthouse-ci` still runs and reports against preview deploys, but its Performance/BP/SEO thresholds are informational; if CI is configured to assert them, those assertions must be non-blocking (warn, not fail). Source: 2026-06-16 founder decision (decouples the perf gate from the now-revoked zero-JS posture), superseding the `meta/decisions/launch-readiness.md` D-14 framing; `meta/masterplan.md` section 1 (Quality bar — now an aspiration for perf, still binding for a11y).

**R-014 (ADVISORY since 2026-06-16, founder decision; formerly HARD)** — **Target (not a gate):** Core Web Vitals on mobile — LCP < 2.5s, CLS < 0.1, INP < 200ms (Lighthouse mobile preset, Moto G4 / slow-4G simulation) — remain the values worth watching and measuring. **They no longer block a merge.** A CWV regression does not fail review on its own; the reviewer reports the vitals and may raise a NIT/REQUEST_CHANGES on a notable regression, but never BLOCK. Note: CLS in particular still tends to be governed by the BINDING a11y/layout rules that prevent layout shift (R-021 explicit image dimensions), which are unaffected by this reversal. Verification: extracted from the `lighthouse-ci` JSON output and reported; not asserted as a blocking threshold. Source: 2026-06-16 founder decision; [web.dev/vitals](https://web.dev/articles/vitals) remains the upstream reference for the target values.

**R-015 (ADVISORY since 2026-06-16, founder decision; formerly HARD)** — **Target (not a gate):** HTML weight on `/` (gzipped) staying near the legacy `index.html` baseline (~+10%) is still a healthy thing to watch. **The HTML-weight budget no longer blocks a merge** — exceeding it does not fail review or CI. What survives: the `html-weight` CI job, if retained, is informational only and must not fail a build; a large unexplained weight jump may be raised as a NIT. Verification: `gzip -c | wc -c` measurement reported in the preview-deploy thread; not asserted as a gate. Source: 2026-06-16 founder decision, decoupling the weight budget from the revoked zero-JS posture; supersedes the `meta/masterplan.md` section 6.1 parity-matrix treatment of HTML weight as a hard launch row (the PM is cascading the masterplan update in parallel).

**R-016 (SOFT)** — `@poukai-inc/ui`'s ESM full bundle stays ≤ 18 kB and `tokens.css` stays ≤ 4 kB, measured at the package level. Because these are package-side budgets enforced by the DS repo's `size-limit`, the site repo's responsibility is to fail loudly if the consumed package exceeds them (e.g. by a regression check on `pnpm pack` size). Verification: optional `size-check` script in `package.json` or surfaced via DS package's own CI; not enforced by site CI but the reviewer flags an unexplained jump. Source: `meta/masterplan.md` section 3.3 (size-limit budgets).

**R-017 (HARD)** — Webfonts are self-hosted via `@poukai-inc/ui/fonts/*` (no Google Fonts CDN, no Adobe Fonts, no other third-party font host) on every route. Verification: grep built HTML for `fonts.googleapis.com`, `fonts.gstatic.com`, `use.typekit.net` — zero matches. Source: `meta/masterplan.md` section 2A ("Self-hosted webfonts (`.woff2` files in `tokens/fonts/`)"), section 8 risks ("preload Geist Regular + Instrument Serif Regular in `BaseLayout`; subset to Latin").

**R-018 (HARD)** — Primary fonts are preloaded in `BaseLayout.astro`: Geist Regular and Instrument Serif Regular, both as `.woff2`, both with `crossorigin` attribute. Verification: `<link rel="preload" as="font" type="font/woff2" crossorigin>` present in the built `<head>` of every page. Source: `meta/masterplan.md` section 8 risks (Lighthouse 100 mitigation) and `meta/masterplan.md` section 2A action-point row "`BaseLayout.astro` (`<head>`, JSON-LD, font preload)".

**R-019 (HARD)** — Every webfont declaration uses `font-display: swap`. No `font-display: block`, no missing `font-display`. Verification: grep `@font-face` blocks in the served CSS; every block contains `font-display: swap`. Source: `meta/masterplan.md` section 8 risks ("`font-display: swap` already in tokens"); `meta/architecture.md` "Decision rules" ("New font — measure CLS before adding").

**R-020 (HARD)** — Fonts are subset to Latin (Latin Basic + Latin-1 Supplement at minimum). No CJK, Cyrillic, or full-Unicode font payloads ship on the marketing site. Verification: file size of each `.woff2` consistent with Latin subset (rule-of-thumb: a Latin subset of a body face is typically < 40 kB; full Unicode is hundreds of kB). Source: `meta/masterplan.md` section 8 risks ("subset to Latin").

**R-021 (HARD)** — All `<img>` elements have explicit `width` and `height` attributes (or are constrained via CSS aspect-ratio set before paint) to prevent CLS. Verification: grep `<img` in built HTML — every match has `width=` and `height=` attributes. Source: `meta/architecture.md` "Motion" section + universal accessibility / performance bar; aligns with Lighthouse Best-Practices "image-aspect-ratio" audit.

**R-022 (SOFT)** — Images use `astro:assets` for build-time optimization where the source file is in the repo (`public/` excepted for static assets like `og.png` and favicons). Verification: code review — illustrative imagery imported via `import img from '...'` and rendered with `<Image>`. Source: `meta/masterplan.md` section 4.1 (`public/` for static, implied `src/assets/` for processed); Astro docs as the reference for `astro:assets`.

**R-023 (ADVISORY since 2026-06-16, founder decision; formerly HARD)** — **Target (not a gate):** avoiding render-blocking third-party requests in the critical path is still good practice and supports the advisory perf signals. **It no longer blocks a merge** — a render-blocking third-party request does not fail review on its own (a NIT/REQUEST_CHANGES at most). Note: keeping third-party origins off the critical path is also a *security/privacy* preference, and the BINDING controls there are unchanged — the CSP in R-046 still governs which origins may be contacted, and R-050 still requires a documented rationale + table entry for any new runtime third-party origin. So "render-blocking is advisory" relaxes the *performance* concern, not the *origin-allowlist* concern. Verification: reported from the Network panel / Lighthouse "render-blocking-resources" audit; not asserted as a gate. Source: 2026-06-16 founder decision; `meta/masterplan.md` section 1 (Quality bar — perf now aspirational).

---

### 3.4 Accessibility

**R-024 (HARD)** — Every page conforms to WCAG 2.1 Level AA. Verification: Lighthouse Accessibility = 100 (R-013) **plus** a clean axe-core run against the preview deploy (R-029). Source: `meta/masterplan.md` section 1 (Quality bar); [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/) as the upstream specification.

**R-025 (HARD)** — Semantic landmarks are present on every page: exactly one `<header>`, exactly one `<main>`, at least one `<nav>` where navigation exists, exactly one `<footer>`. Page-internal sectioning uses `<section>`, `<article>` semantically — not `<div>` containers when a semantic element fits. Verification: axe-core "region" and "landmark-one-main" rules pass; reviewer eyeballs the rendered HTML outline. Source: `meta/architecture.md` "Accessibility" section ("`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` semantics throughout"); WCAG 2.1 SC 1.3.1 (Info and Relationships).

**R-026 (HARD)** — Heading hierarchy on every page starts with exactly one `<h1>` and never skips a level (no `<h1>` → `<h3>`). Verification: axe-core "heading-order" rule passes; manual outline check during review. Source: `meta/architecture.md` "Accessibility" section ("One `<h1>`"); WCAG 2.1 SC 1.3.1 and SC 2.4.6 (Headings and Labels).

**R-027 (HARD)** — Color contrast against `#FFFFFF` meets WCAG AA: ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI components. The existing token palette (`--fg` at 16.7:1, `--fg-muted` at 5.0:1) is the canonical reference; any new color token must demonstrate AA compliance in its PR. Verification: axe-core "color-contrast" rule passes; for any new token, a contrast measurement is included in the PR description. Source: `meta/architecture.md` "Accessibility" section ("Primary text 16.7:1, muted 5.0:1"); WCAG 2.1 SC 1.4.3 (Contrast Minimum).

**R-028 (HARD)** — Every interactive element (`<a>`, `<button>`, `<input>`, `<summary>`, anything with `tabindex`) has a visible focus indicator using `:focus-visible` (not `:focus`) styling. The focus ring uses the `--accent` token. No `outline: none` without an explicit replacement. Verification: keyboard-tab through each page; axe-core "focus-order-semantics" rule passes. Source: `meta/architecture.md` "Accessibility" section ("`:focus-visible` (not `:focus`) — keyboard ring, no mouse-click ring"); WCAG 2.1 SC 2.4.7 (Focus Visible).

**R-029 (HARD)** — Axe-core reports zero violations on every preview deploy. CI runs `@axe-core/playwright` (or equivalent) against each of the twelve routes in the §2 inventory and fails the deploy on any violation. Verification: CI output, archived per deploy. Source: `meta/masterplan.md` section 6.1 ("Axe a11y — `@axe-core/playwright` — 0 violations").

**R-030 (HARD)** — Every animation (entrance staggers, status-dot pulse, hover transitions, scroll-triggered reveals) is gated by an `@media (prefers-reduced-motion: reduce)` block that disables or neutralizes it. The reduced-motion block is the only place `!important` is permitted in CSS, per the existing a11y exception. Verification: grep for `@keyframes` and `transition:` — every animated property has a corresponding `prefers-reduced-motion` exit; manual check by toggling the OS setting on preview. Source: `meta/architecture.md` "Motion" section ("both gated by `@media (prefers-reduced-motion: reduce)`"); WCAG 2.1 SC 2.3.3 (Animation from Interactions).

**R-031 (HARD)** — Every `<img>` has either meaningful `alt` text or an explicit `alt=""` declaring the image decorative. Decorative SVGs use `aria-hidden="true"`. No image is silently missing an `alt` attribute. Verification: axe-core "image-alt" rule passes; grep `<img` and `<svg` in built HTML. Source: `meta/architecture.md` "Accessibility" section ("`aria-hidden="true"` on the decorative brand-logo SVG"); WCAG 2.1 SC 1.1.1 (Non-text Content).

**R-032 (HARD)** — ARIA attributes are used only when semantic HTML cannot carry the meaning. No redundant `role` attributes on elements that already imply their role (`<nav role="navigation">`, `<button role="button">`). Verification: axe-core "aria-allowed-attr" and "aria-required-attr" rules pass; manual review. Source: WCAG 2.1 SC 4.1.2 (Name, Role, Value); [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) ("first rule of ARIA").

**R-033 (HARD)** — The brand wordmark is paired with an accessible text fallback (e.g., `<span class="visuallyhidden">pouk.ai</span>`) so screen readers announce the brand name. The decorative SVG itself is `aria-hidden="true"`. Verification: read the rendered DOM of `<Wordmark>` output; toggle a screen reader on preview. Source: `meta/architecture.md` "Accessibility" section ("paired with `<span class="visuallyhidden">POUKAI</span>`").

---

### 3.5 SEO

**R-034 (HARD)** — Every route has a unique `<title>` element in `<head>`. No two routes share a title; no route ships without one. Verification: fetch each route, parse `<title>`; check uniqueness. Source: WCAG 2.1 SC 2.4.2 (Page Titled); Lighthouse SEO "document-title" audit.

**R-035 (HARD)** — Every route has a `<meta name="description">` tag, between 70 and 160 characters, written for the page's specific intent (not boilerplate copied across routes). Verification: parse `<meta name="description">` per route; check length and uniqueness. Source: Lighthouse SEO "meta-description" audit.

**R-036 (HARD)** — Every route has a `<link rel="canonical">` pointing to its own absolute URL on `pouk.ai`. Verification: parse `<link rel="canonical">` per route. Source: Lighthouse SEO "canonical" audit; aligns with `meta/backlog.md` "Blockers for launch" (canonical references).

**R-037 (HARD)** — Every route emits OG and Twitter card meta: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`. `og:image` must reference an existing 1200×630 PNG in `public/`. Verification: parse the eight required meta tags per route. Source: `meta/backlog.md` "Blockers for launch" ("Referenced by `<meta property="og:image">` and Twitter card"); [Open Graph Protocol](https://ogp.me/) as the upstream spec.

**R-038 (HARD)** — JSON-LD structured data is present on routes where the governing PM spec requires it. The home route (`/`) ships an `Organization` JSON-LD block at minimum, matching the data already present in the legacy `index.html`. Verification: parse `<script type="application/ld+json">` from each route; validate the JSON; compare `/` against the current production page per masterplan section 6.1 ("JSON-LD — manual JSON validate — identical to current page"). Source: `meta/masterplan.md` section 6.1.

**R-039 (HARD)** — `sitemap.xml` is generated by `@astrojs/sitemap` and lists every public route. Verification: fetch `/sitemap.xml` (or the `@astrojs/sitemap` index `/sitemap-index.xml`, which is what `robots.txt` references) from the preview deploy; confirm all indexable routes appear — the eight marketing routes plus the three utility/legal routes — and that `/404` and `/admin*` are excluded (R-007, astro.config sitemap filter); confirm no `noindex` or staging URLs leak. Source: `meta/masterplan.md` section 4.2 ("`@astrojs/sitemap` — Lighthouse SEO 100"); `meta/backlog.md` "Blockers for launch".

**R-040 (HARD)** — `robots.txt` is present at the site root, allows crawling of all indexable routes by default, and references the sitemap at the exact URL `@astrojs/sitemap` emits (`/sitemap-index.xml`). Verification: fetch `/robots.txt`. Source: `meta/backlog.md` "Blockers for launch" (the exact body is given there).

**R-041 (SOFT)** — Internal linking between routes follows the prospect-funnel order described in `meta/backlog.md` (Why AI → Roles → Principles → contact). The site nav and footer reflect this order. Verification: read the nav structure on each page; confirm consistent ordering. Source: `meta/backlog.md` "Why AI page" section ("Nav order in the eventual site nav: `Why AI → Roles → Principles → contact` mirrors the prospect funnel").

---

### 3.6 Security & headers

**R-042 (HARD)** — `vercel.json` ships an HSTS header on every response: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. Verification: `curl -I https://<preview-url>/ | grep -i strict-transport-security` returns the exact header value. Source: `meta/backlog.md` "Blockers for launch" ("HSTS"); [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/) → HSTS recommendation; [hstspreload.org](https://hstspreload.org/) submission requires `max-age >= 31536000`, `includeSubDomains`, and `preload`.

**R-043 (HARD)** — `vercel.json` ships `X-Content-Type-Options: nosniff` on every response. Verification: `curl -I` check. Source: `meta/backlog.md` "Blockers for launch"; OWASP A05:2021 (Security Misconfiguration); MDN reference.

**R-044 (HARD)** — `vercel.json` ships `Referrer-Policy: strict-origin-when-cross-origin` on every response. Verification: `curl -I` check. Source: `meta/backlog.md` "Blockers for launch"; OWASP Secure Headers Project.

**R-045 (HARD)** — `vercel.json` ships `Permissions-Policy: geolocation=(), microphone=(), camera=(), browsing-topics=()` on every response. (Confirms the site never asks for sensor/device permission and opts out of the Topics API.) The trailing directive is `browsing-topics=()`, **not** the older `interest-cohort=()`: `interest-cohort` was the opt-out for Chrome's now-discontinued FLoC; the shipping Topics API that replaced FLoC reads the `browsing-topics` permission instead, so `browsing-topics=()` is the directive that actually opts a 2026-era browser out of interest-based topic computation. The literal value the CI `security-headers-check.mjs` job asserts is the `browsing-topics` form. Verification: `curl -I` check; `security-headers-check.mjs` asserts the catch-all rule's `Permissions-Policy` value. Source: `meta/backlog.md` "Blockers for launch"; [permissionspolicy.com](https://www.permissionspolicy.com/) as the syntax reference; [Chrome Topics API — opt-out via `browsing-topics`](https://developer.chrome.com/docs/privacy-sandbox/topics/) as the successor reference. (Revised 2026-06-14: literal updated `interest-cohort=()` → `browsing-topics=()` to match shipped reality and the current spec; closes audit finding S-5. Approved by Arian 2026-06-14.)

**R-082 (HARD)** — `vercel.json` ships `X-Frame-Options: DENY` on every response, paired with `frame-ancestors 'none'` in the CSP (R-046). The two are belt-and-suspenders clickjacking defense: `frame-ancestors` is the modern CSP-native control and supersedes `X-Frame-Options` in browsers that honor it, but `X-Frame-Options: DENY` is retained as a cheap fallback for any framing context that doesn't evaluate CSP. The marketing site is never legitimately embedded in a frame, so a blanket `DENY` carries no functional cost. Verification: `curl -I` returns `X-Frame-Options: DENY`; `security-headers-check.mjs` may assert it. Source: [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/) → X-Frame-Options / Clickjacking Defense Cheat Sheet; MDN reference. (Added 2026-06-14: sanctions the shipped `X-Frame-Options: DENY` header, previously undocumented; closes audit finding S-7.)

**R-046 (HARD)** — A Content-Security-Policy header ships on every non-`/admin` response (the `/admin` path is a reverse-proxied product surface, out of scope per §2, and is deliberately excluded via the `/((?!admin).*)` source matcher). The shipped policy is the documented baseline:

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self';
form-action 'self' <buttondown-origin>; frame-ancestors 'none'; upgrade-insecure-requests
```

This requirement was upgraded from "no CSP on launch" (SOFT) to "CSP required" (HARD) on 2026-06-14. **Rationale:** the original R-046 deferred CSP until "a form, third-party embed, or other XSS surface enters the picture." Both triggers have now landed — the `/writing` Buttondown subscribe `<form>` and the Matomo tracker — so the deferral condition is satisfied and a CSP is the correct posture, not premature hardening. Shipping it now (audit finding S-6) is sanctioned, not drift.

Policy obligations the reviewer enforces:
- **No `'unsafe-inline'` in `script-src`.** Inline `<script type="application/ld+json">` (JSON-LD) and `<script type="application/json">` (the Matomo config block) are **data, not script**, and are not subject to `script-src` — so `script-src 'self'` is sufficient and no hash/nonce is needed for them. This is the mechanism R-046's predecessor anticipated; it is satisfied because the executable Matomo bootstrap lives in the same-origin `/matomo.js` file (R-011), not inline.
- **`form-action`** must list the site origin (`'self'`) plus the exact origin the live subscribe form POSTs to. **FLAG (S-6, engineer-verifying, not resolved here):** `vercel.json` currently allows `form-action 'self' https://buttondown.com`, but the `/writing` form posts to `PUBLIC_BUTTONDOWN_ENDPOINT`, whose host may be `https://buttondown.email`. If the runtime endpoint host does not match the `form-action` allowlist, the browser **blocks the subscribe POST** and the email-capture feature silently fails. The engineer must confirm the live endpoint host and align the `form-action` value to it (and update R-050's runtime-origin list to match) before the email line ships. This is a verification action, not a standards decision.
- **Matomo / Bugsink hosts:** if either tool is deployed off-origin (cloud shape, O-011/O-012), its host must be added to `script-src`, `connect-src`, and `img-src` (Matomo also beacons images). Self-hosted same-origin (the reviewer's default) needs no CSP change — `'self'` already covers it. See `public/matomo.js` residual-CSP note.

Verification: `curl -I https://<preview-url>/` returns a `Content-Security-Policy` header matching the baseline above; `security-headers-check.mjs` asserts CSP presence and the no-`'unsafe-inline'` rule in the `vercel.json` non-`admin` rule; runtime devtools confirms no CSP violations are reported on any route (including a successful subscribe POST once the `form-action` host is confirmed). Source: `meta/backlog.md` CR-2 (Matomo CSP-compatibility), CR-5 (JSON-LD inline-escape); [W3C CSP Level 3](https://www.w3.org/TR/CSP3/); `meta/decisions/launch-readiness.md` D-17 (superseded by this revision). (Revised 2026-06-14: SOFT "no CSP" → HARD "CSP required"; closes audit finding S-6 except the flagged `form-action` host verification, which stays open for the engineer.)

**R-047 (HARD)** — DNS-level email authentication is configured before the first prospect email goes out: SPF, DKIM, DMARC records on `pouk.ai`, plus a CAA record limiting cert issuance to Let's Encrypt (or whoever Vercel uses). This is a deploy-blocking gate for the moment the domain alias swaps, not for individual PRs. Verification: `dig TXT pouk.ai` returns SPF + DMARC; DKIM selectors return TXT records; `dig CAA pouk.ai` returns a restricting set. Source: `meta/backlog.md` "DNS + email" ("Add MX, SPF, DKIM, DMARC, CAA records — must be live before first prospect email goes out"); RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC), RFC 8659 (CAA).

**R-048 (HARD)** — No secrets, tokens, credentials, or API keys are committed to the repo. `NPM_TOKEN` is only configured as a Vercel project env var and a developer's local `~/.npmrc` (or `.npmrc` in a gitignored sibling parent), never in the repo's tracked `.npmrc`. Verification: `git log -p` grep for likely secret patterns (`sk-`, `ghp_`, `npm_`, AWS access key prefixes); `gitleaks` or equivalent in CI. Source: `meta/masterplan.md` section 5.1; OWASP A02:2021 (Cryptographic Failures); reviewer agent definition section 5 ("Security: No secrets, tokens, or credentials committed").

**R-049 (HARD)** — `pnpm audit --prod` reports zero high or critical vulnerabilities at merge time. Moderate findings are allowed but must be acknowledged in the PR description. Verification: CI runs `pnpm audit --prod --audit-level=high` and fails on any output. Source: universal supply-chain hygiene; [npm audit docs](https://docs.npmjs.com/cli/v10/commands/npm-audit) as the model.

**R-050 (HARD)** — No new third-party origin is contacted at runtime (analytics, fonts, embeds, CDN scripts) without a one-line rationale in the PR description and a corresponding update to this document. The **documented runtime third-party origins** as of 2026-06-14 are:

| Origin | Purpose | Trigger | CSP directive | Notes |
| --- | --- | --- | --- | --- |
| `<buttondown-origin>` (e.g. `buttondown.com` / `buttondown.email`) | Email-capture form POST target on `/writing` | User submits the subscribe form | `form-action` | **Exact host unconfirmed — see R-046 flag (S-6).** Only contacted on form submit, never on load. |
| Matomo host (O-011) | First-party analytics tracker + beacon | Page load (deferred) | `script-src`, `connect-src`, `img-src` | Self-hosted same-origin is the default → no third-party origin at all. Only becomes a third-party origin under the cloud shape. |
| Bugsink host (O-012) | Error-reporting ingest | Page load (deferred) + on error | `script-src`, `connect-src` | Currently dark (R-061). Self-hosted same-origin default. |
| `_vercel/insights/*` (Vercel Web Analytics) | Request-signal analytics | Page load on Vercel deploys | same-origin on Vercel | Served same-origin on Vercel; not a cross-origin contact there. |

Any origin not on this list contacted at runtime is a finding. Verification: diff the Network panel between `main` and the PR's preview deploy against this table; any new row requires a PR rationale + a table update here. Source: reviewer agent definition section 5 ("Security: No new third-party domains hit at runtime without a documented reason"). (Revised 2026-06-14: added the documented-origins table; Buttondown admitted as the email-form POST target per S-6, pending host confirmation.)

**R-081 (SOFT now; HARD once `hello@pouk.ai` (or equivalent) is live)** — A `.well-known/security.txt` file at `/.well-known/security.txt` advertises a security contact (`security@pouk.ai` or `hello@pouk.ai`), an optional PGP key, and a disclosure policy. Required fields per RFC 9116: `Contact:` (email or URL), `Expires:` (ISO 8601 date, ≤ 1 year out). Recommended fields: `Encryption:`, `Preferred-Languages:`, `Policy:`. While `hello@pouk.ai` is not yet live, this requirement is SOFT and the reviewer raises absence as a NIT; once mailbox routing lands (R-047 prerequisite), this requirement promotes to HARD automatically. The work item lives in `meta/backlog.md` per `meta/decisions/launch-readiness.md` D-21. Verification: `curl https://pouk.ai/.well-known/security.txt` returns 200 with valid `Contact:` and non-expired `Expires:` fields. Source: [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116); `meta/decisions/launch-readiness.md` D-21.

---

### 3.7 Browser support

**R-051 (HARD)** — Supported browsers: Chrome, Safari, Firefox, Edge — last two stable versions, mobile and desktop. No graceful-degradation contract for older browsers; the site is allowed to break on IE 11, Chrome 90, Safari 14, etc. Verification: BrowserStack or local device check at the start of each release; documented as the support matrix in `README.md`. Source: `meta/architecture.md` "Constraints" ("Modern evergreen browsers only (Chrome / Safari / Firefox / Edge, last 2 versions)"); `meta/masterplan.md` section 1 ("Modern evergreen only" framing).

**R-052 (HARD)** — Layout is mobile-first responsive and renders cleanly down to 320px viewport width. No horizontal scroll, no overflow-clipped content, at 320px on iOS Safari's smallest target. Verification: DevTools viewport at 320×568; manual check on a real device. Source: `meta/backlog.md` "Nice-to-haves" ("Real-device check at 320px width") promoted here to HARD because the masterplan's quality bar applies to mobile.

**R-053 (SOFT)** — Reduced-motion users see a functional, animation-free site (R-030 covers the rule; R-053 covers the visual outcome). The lack of motion must not break layout or hide content. Verification: toggle `prefers-reduced-motion` in DevTools and verify each page renders fully. Source: `meta/architecture.md` "Motion" section; WCAG 2.1 SC 2.3.3.

---

### 3.8 Build & deploy gates

**R-054 (HARD)** — `pnpm build` exits 0 on `main` and on every PR's HEAD. A red build blocks merge. Verification: CI runs `pnpm install --frozen-lockfile && pnpm build`. Source: `meta/masterplan.md` section 5.2 (build command).

**R-055 (HARD)** — `astro check` (via `@astrojs/check`) reports zero TypeScript errors. Verification: CI runs `pnpm astro check` (or it's wired into `pnpm build`). Source: `meta/masterplan.md` section 4.2 ("`@astrojs/check` — typecheck on build").

**R-056 (PARTIALLY REVOKED 2026-06-16, founder decision)** — `lighthouse-ci` still runs against the Vercel preview deploy for every PR across the §2 route inventory, and the reviewer still cites the numbers in the "Build & metrics" block. **What changed:** the **Performance, Best-Practices, and SEO** category thresholds are now ADVISORY — they no longer block deploy/merge and must be configured as non-blocking (warn) assertions, consistent with R-013/R-023. **What survives BINDING:** the **Accessibility** category remains a hard assertion (Accessibility = 100), paired with the axe-core gate in R-057; an a11y miss still blocks. (SEO field-correctness obligations such as unique titles, descriptions, canonical, and sitemap continue to be enforced by their own HARD rules R-034–R-040 — those are markup-correctness gates, not Lighthouse-score gates, and are untouched.) Verification: `.lighthouserc.json` asserts the Accessibility category as blocking and treats Performance/BP/SEO scores as informational; CI artifact archived. Source: 2026-06-16 founder decision (decouples the Lighthouse perf gate); a11y assertion retained per `meta/masterplan.md` section 1 and section 6.1.

**R-057 (HARD)** — `@axe-core/playwright` (or equivalent axe-core runner) runs against every preview deploy for every PR and reports zero violations on every route. Verification: CI artifact archive contains the axe JSON. Source: `meta/masterplan.md` section 6.1.

**R-058 (HARD when tests exist on changed files)** — `pnpm test` exits 0 if any test files exist in the repo; if a test file exists and is red, merge is blocked. When tests exist on the changed files, line coverage on those changed files must be ≥ 80%. Every new component ships with a smoke test. If no tests exist on the changed files, the coverage threshold does not apply for that PR — but the reviewer surfaces the absence as a NIT so the gap stays visible. Verification: CI runs `pnpm test`; coverage report is parsed and the changed-files threshold checked. Source: `meta/decisions/launch-readiness.md` D-20; universal engineering quality.

**R-059 (HARD)** — Before the `pouk.ai` domain alias swaps from the legacy holding page to the new Astro project, the preview deploy must pass every check in the masterplan section 6.1 parity matrix (visual diff "indistinguishable" on `/`, Lighthouse 100/100/100/100, axe 0 violations, JSON-LD identical to current page, HTML weight `/` ≤ current page +10%, `prefers-reduced-motion` all animation off). This is a launch gate, not a per-PR gate. Verification: a launch-readiness review documents each row of the matrix with a measurement and a verdict. Source: `meta/masterplan.md` section 6.1 and section 6.2.

---

### 3.9 Observability

**R-060 (HARD)** — Analytics provider is Matomo. The Matomo tracker runs on every page including `/`. Tracker is configured in cookieless mode at launch (no `_pk_*` cookies set); IPs are anonymized before storage. Matomo's HTTP API may also be hit server-side for first-party event recording where useful. The deployment shape — self-hosted on poukai-inc infrastructure vs. Matomo Cloud (paid SaaS) — is a remaining infrastructure decision tracked at O-011 in section 6; the tool pick is locked. Verification: parse `BaseLayout.astro` for the Matomo tracker tag annotated `// analytics: matomo`; confirm on the preview deploy that no `_pk_*` cookies are set on first paint; confirm Matomo's tracker file gzips to ≤ 30 kB (sub-budget within R-010). Source: `meta/decisions/launch-readiness.md` D-15; [Matomo cookieless tracking documentation] as the configuration reference. **Launch-readiness flag (2026-06-14, audit S-8):** Matomo is presently *dark in production* — `BaseLayout.astro` emits the tracker only when `PUBLIC_MATOMO_URL` + `PUBLIC_MATOMO_SITE_ID` are set, and they are not yet configured (O-011 open). The code is correct (env-gated, no third-party leak); the requirement is *unmet in prod* pending the O-011 infra decision. This is an Arian/infra item, not an engineering defect, but R-060 ("runs on every page") is not satisfied until the env vars are set before the domain-alias swap (R-059 launch gate).

**R-061 (HARD)** — Error reporting tool is Bugsink (Sentry-compatible, self-hostable). The Sentry-protocol browser SDK and server SDK are both active. The client SDK runs on every page including `/`. Server-side ingest scrubs IP addresses and form data before storage. The deployment shape — self-hosted vs. Bugsink Cloud — is a remaining infrastructure decision tracked at O-012 in section 6; the tool pick is locked. The SDK tag in `BaseLayout.astro` is annotated `// error-reporting: bugsink`. Verification: parse `BaseLayout.astro` for the Bugsink SDK tag with the inline justification comment; confirm the SDK file gzips to ≤ 45 kB (sub-budget within R-010); confirm Bugsink ingest config scrubs PII. Source: `meta/decisions/launch-readiness.md` D-16; [Bugsink documentation] and [Sentry browser SDK docs] as the configuration references. **Amendment 2026-05-31 (#90):** the client SDK tag is currently NOT present in `BaseLayout.astro`. The prior stub inline-imported the SDK from a third-party CDN (`browser.sentry-cdn.com`), violating R-011 (third-party logic must load from its own same-origin file) and R-050 (no new third-party runtime origin); it was inert (no DSN) and removed. Until O-012 resolves the deploy shape, the verification "parse for the SDK tag" is satisfied vacuously (no tag, no DSN). When re-added it MUST be a self-hosted, same-origin `<script src>` per R-061/R-062 — never an inline CDN import. **Launch-readiness flag (2026-06-14, audit S-8):** like R-060, R-061 is *unmet in prod* — the client SDK is dark pending the O-012 deploy-shape decision. Arian/infra item; must be wired (self-hosted) before the R-059 launch gate for the "runs on every page" requirement to hold.

**R-062 (ADVISORY since 2026-06-16, founder decision; formerly HARD)** — **Target (not a gate):** analytics/observability/telemetry tools should still fire after meaningful paint (deferred), not block the critical path. **This is no longer a merge gate** — eager telemetry loading does not fail review on its own. What survives BINDING is independent of this rule: telemetry must still obey the consent/cookieless and PII-scrubbing obligations (R-012, R-060, R-061) and the origin-allowlist obligations (R-046 CSP, R-050) — none of those are relaxed by this reversal. Verification: deferral reported from the Network panel / Lighthouse; not asserted as a gate. Source: 2026-06-16 founder decision (decouples the critical-path perf concern); privacy/security obligations remain per R-012/R-046/R-050/R-060/R-061.

---

### 3.10 Dependency & supply chain policy

**R-063 (HARD)** — Every new dependency (direct or dev) requires a one-line rationale in the PR description: what it does, why an existing tool can't, and the license. Verification: reviewer reads the PR description; rejects PRs that add dependencies without a rationale. Source: universal supply-chain hygiene; aligns with reviewer agent definition section 5 ("Security: New dependencies are minimal, maintained, MIT/Apache/ISC licensed").

**R-064 (HARD)** — All dependencies (direct and transitive, dev and prod) must be licensed under MIT, Apache-2.0, ISC, or BSD-2/3-Clause. GPL, AGPL, LGPL, BSL, CC-BY-NC, "Commons Clause", and unlicensed packages are forbidden. Verification: `pnpm licenses list` (or `license-checker`) in CI; flag any non-permissive license. Source: universal supply-chain hygiene; matches reviewer agent definition section 5.

**R-065 (HARD)** — Production dependencies in `package.json` are pinned to exact versions (no `^`, no `~`, no ranges) for reproducibility. Dev dependencies may use caret ranges. Verification: parse `package.json`'s `dependencies` object — every value matches `\d+\.\d+\.\d+(-[\w.]+)?` with no leading operator. Source: universal reproducibility; aligns with `meta/masterplan.md` section 5.2 ("`pnpm install --frozen-lockfile`").

**R-066 (HARD)** — `pnpm-lock.yaml` is committed to the repo and stays in sync with `package.json`. CI fails on a stale lockfile. Verification: `pnpm install --frozen-lockfile` in CI exits 0. Source: `meta/masterplan.md` section 5.2.

**R-067 (SOFT)** — Deprecated packages (per `npm`'s deprecation registry) are not added; existing deprecated transitives are tracked in the PR description with a plan to remove. Verification: `pnpm outdated --long` or `npm deprecated` check in CI. Source: universal supply-chain hygiene.

**R-068 (SOFT)** — Automated minor/patch dependency updates via Renovate or Dependabot, with human review on major updates. Verification: `.github/renovate.json` or `.github/dependabot.yml` present. Source: universal supply-chain hygiene.

---

### 3.11 Repository hygiene

**R-069 (HARD)** — `.gitignore` excludes: `/brand` (brand source assets), `.env*` (local env files), `dist/`, `.astro/`, `.vercel/`, `node_modules/`, OS files (`.DS_Store`, `Thumbs.db`), and editor folders (`.idea/`, `.vscode/` unless explicitly shared). Verification: file content check. Source: `meta/architecture.md` "File layout" ("Brand source assets live in a `brand/` folder … but are **gitignored**"); universal repo hygiene.

**R-070 (SOFT)** — Branch naming: `feature/<slug>` for new work, `fix/<slug>` for bugfixes, `chore/<slug>` for tooling. `main` is the long-lived default. Reviewer prefers this convention but does not block on a non-matching name. Verification: reviewer reads the branch name at PR-open time and notes drift as a NIT. Source: `meta/decisions/launch-readiness.md` D-22; reviewer judgment.

**R-071 (HARD)** — No force-push to `main`. No force-push to a branch with an open PR unless the PR author owns the branch and the rebase is non-destructive. Verification: branch protection rules on GitHub. Source: universal git hygiene; matches reviewer agent definition section 9 ("Don't merge, push, deploy, or commit code changes").

**R-072 (SOFT)** — Commit messages follow Conventional Commits form: `type: subject`, where `type` is one of `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `ci`. Subject is imperative mood, ≤ 72 chars; optional body explains *why* not *what*. Reviewer requests changes when commits drift from this form but does not block merge on it. Verification: reviewer reads `git log` during review. Source: `meta/decisions/launch-readiness.md` D-19; reviewer judgment.

**R-073 (HARD)** — No `console.log`, no `debugger`, no commented-out experiments, no `TODO` without a tracking issue, no dead imports in the merged code. Verification: ESLint rules `no-console`, `no-debugger`; reviewer manual scan. Source: reviewer agent definition section 5 ("Maintainability: No dead code, no commented-out experiments, no `console.log`").

---

### 3.12 Content data contract

**R-074 (HARD)** — Every file in `src/content/*.json` (per `meta/masterplan.md` section 4.1: `roles.json`, `principles.json`, `failure-modes.json`, and any future content files) validates against a published Zod schema located at `src/content/_schemas/<name>.ts`. The build fails if a content file fails its schema. Verification: a build-time script (or Astro content collection) loads each JSON, parses it through the schema, and exits non-zero on failure. Source: `meta/masterplan.md` section 4.4 ("Long-form content as data … typed JSON in `src/content/`"); universal data-contract hygiene.

**R-075 (HARD)** — Schema files in `src/content/_schemas/` export a named Zod schema (e.g., `export const RolesSchema = z.array(z.object({...}))`) and a TypeScript type derived from it (`export type Role = z.infer<typeof RoleSchema>`). Page templates that consume the JSON import the type and rely on it, not on `any` or `unknown`. Verification: grep for `as any` in `src/pages/`; should be zero. Source: universal type-safety hygiene; aligns with R-055 (`astro check` clean).

**R-076 (HARD)** — Content JSON is the only place copy lives. Page templates and components do not contain hard-coded copy strings (the brand wordmark is excepted, since it's rendered via `<Wordmark>` from the DS). Verification: reviewer reads each `.astro` file in `src/pages/`; any inline copy literal is a finding. Source: reviewer agent definition section 5 ("Maintainability: Copy lives in `src/content/*.json`, not JSX literals"); `meta/masterplan.md` section 4.4.

**R-077 (SOFT)** — Content JSON does not contain HTML markup. If a content item needs rich formatting (line breaks, emphasis), either (a) the JSON exposes structured fields the template renders into HTML, or (b) the content moves to MDX in a future Astro content collection. Verification: grep for `<` characters inside JSON string values. Source: `meta/masterplan.md` section 4.4 (MDX is the planned escape hatch).

---

## 4. Verification & enforcement

**Per-PR verification matrix.** Every PR runs:

| Gate | Tool | Requirements covered |
| --- | --- | --- |
| Lint | ESLint `no-console`, `no-debugger` (`pnpm lint`, `--max-warnings=0`) — **CI-enforced** via `lint` job | R-073 |
| Type check | `astro check` | R-055 |
| Build | `pnpm build` | R-054 |
| Lighthouse — **Accessibility (BINDING)** | `lighthouse-ci` on preview asserts Accessibility = 100 (blocking) | R-024, R-056 (a11y carve-out) |
| Lighthouse — Perf/BP/SEO **(ADVISORY)** | `lighthouse-ci` reports Performance/BP/SEO scores as informational (warn, non-blocking) — **does not block merge** as of 2026-06-16 | R-013, R-014, R-015, R-023, R-056 |
| Axe-core **(BINDING)** | `@axe-core/playwright` on preview — 0 violations, blocking | R-024–R-033, R-057 |
| Client-JS **(REVOKED 2026-06-16)** | Former third-party JS budget gate. `client-js-budget.mjs`, if retained, is **informational only and must not fail a build**. Client JS is unrestricted. | R-009, R-010, R-011, R-078, R-079, R-080 (all revoked); R-012 survives BINDING |
| HTML weight **(ADVISORY)** | `html-weight-check.mjs`, if retained, is **informational only and must not fail a build** as of 2026-06-16 | R-015 |
| Test coverage | `pnpm test` + coverage report on changed files (≥ 80% when tests exist) | R-058 |
| Security headers (config) | `node .github/scripts/security-headers-check.mjs` — asserts the required header keys (HSTS, nosniff, Referrer-Policy, Permissions-Policy incl. `browsing-topics=()`, X-Frame-Options, CSP with no `'unsafe-inline'` in `script-src`) in the `vercel.json` catch-all + non-`admin` rules — **CI-enforced** via `security-headers` job | R-042–R-046, R-082 |
| Security headers (runtime) | `curl -I` on Vercel preview deploy URL — deploy-time check; Astro local preview does not emit Vercel edge headers. Includes a devtools/curl check that the `/writing` subscribe POST is not CSP-blocked (R-046 `form-action` host match, S-6) | R-042–R-046, R-082 |
| security.txt | `curl /.well-known/security.txt` (SOFT until R-047 lands) | R-081 |
| Dependency audit | `pnpm audit --prod --audit-level=high` | R-049 |
| License check | `pnpm licenses list` (or `license-checker`) | R-064 |
| Lockfile freshness | `pnpm install --frozen-lockfile` | R-066 |
| Content schemas | Build-time Zod validation | R-074, R-075 |
| Secret scan | `gitleaks` or `trufflehog` | R-048 |

**Per-launch verification (one-time, before domain alias swap).** Runs the parity matrix from `meta/masterplan.md` section 6.1 (R-059) plus a manual a11y walk with a screen reader and the 320px real-device check (R-052).

**Per-review verification (reviewer's job).** The reviewer's `meta/reviews/` document cites specific R-NNN identifiers in each finding. A finding without an R-NNN citation (or without an upstream-authority citation when no R-NNN applies) should be re-stated or downgraded.

**Tooling that doesn't exist yet.** Several gates above (Zod content schemas, lighthouse-ci config, axe-core runner, license check) will be added by the engineer in Phase 2 of the masterplan. Until those land, the corresponding requirements are *aspirational* for CI but *enforced manually* by the reviewer reading the diff. The reviewer flags missing automation as a finding rather than waiving the requirement.

---

## 5. Rationale and change log

### 5.1 Rationale — the 2026-05-13 posture shift

The original draft of this document held two related positions: (a) Lighthouse Performance at 100, no exceptions; (b) zero client JS on `/`. Both were means to an end. The end is fast, private, accessible, owned. The 2026-05-13 decision pass (`meta/decisions/launch-readiness.md` D-14 through D-22) changed the means and preserved the end. Three shifts deserve explanation in this document because they're the ones most likely to surprise a future reviewer reading R-009, R-010, or R-013 against the masterplan's older "no JS unless strictly necessary" framing.

**Performance band relaxed from 100 to ≥ 95 (R-013, R-056).** Lighthouse Performance is sensitive to third-party JS payload, even when deferred. Matomo's tracker (~25 kB gzipped) plus Bugsink's browser SDK (~40 kB gzipped) together baseline at ~65 kB of post-paint JS that the audit measures. Holding Performance at exactly 100 with that baseline forces a constant fight against single-run flake without materially improving the user experience. Relaxing the band to ≥ 95 absorbs that baseline honestly while keeping the bar visibly tight. A11y, Best Practices, and SEO stay at 100 because they're deterministic — they measure properties of the markup, not properties of the JS budget — and there's no reason to lower a bar that the JS-budget shift doesn't touch.

**Zero-JS-on-`/` posture shift (R-009, section 3.2 rewrite).** The brand competes by owning its stack. Matomo (analytics) and Bugsink (error reporting) are first-party, self-hostable, privacy-respecting tools chosen explicitly to avoid the alternative — Google Analytics, Sentry SaaS, third-party SDKs that quietly grow the surface area you don't control. Loading them on every page including `/` is the cost of owning the operational telemetry rather than borrowing it. The new R-009 makes that explicit, the new R-010 puts a hard ceiling on what "first-party JS" is allowed to grow into, and the new R-011 enforces that the JS the site does ship doesn't block the meaningful paint.

**Third-party JS ceiling at 75 kB gzipped (R-010).** Matomo + Bugsink together are ~65 kB. The 75 kB ceiling leaves ~10 kB of headroom — enough to absorb minor SDK version bumps, not enough to absorb a third tool without an explicit standards revision. The number is calibrated to force a conversation rather than enable drift. The user-facing performance bars (R-014 Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms; R-015 HTML weight) stay HARD; if the third-party JS budget makes meeting them harder, that's an engineer problem to solve (deferred loading, partial hydration discipline, server-side event recording where the tracker would otherwise fire), not a standards problem to lower.

> **NOTE (2026-06-16):** The three sub-sections above (Performance band, Zero-JS posture, Third-party JS ceiling) are now **historical**. The zero-JS posture and the JS budget were fully revoked, and the perf bars they reference (R-013/R-014/R-015) were converted from HARD to ADVISORY, by the 2026-06-16 founder decision. See section 5.1a immediately below for the current rationale; the text above is retained to explain the 2026-05-13 intermediate state.

### 5.1a Rationale — the 2026-06-16 full revocation

On 2026-06-16 Arian ratified a clean reversal: the zero-JS / client-JS-posture contract is **fully removed**, and the hard performance gates that were coupled to it are **decoupled**. Three things to record for a future reviewer:

**Why a reversal and not a deletion.** The JS-posture and perf-gate rules (R-009, R-010, R-011, R-013, R-014, R-015, R-023, R-056, R-062, R-078, R-079, R-080) are cited by number across the repo and in prior reviews. Striking the rule numbers would orphan those citations. Instead each rule keeps its ID and is annotated with what it used to require and what (if anything) survives — so `R-079` still resolves and the history stays legible.

**What the reversal touches and what it deliberately does not.** The decision is scoped to the *JS posture* and the *perf-as-a-gate* coupling. It does **not** touch accessibility: WCAG 2.1 AA, axe-core zero-violations, and `prefers-reduced-motion` remain fully BINDING and still produce a BLOCK. Nor does it touch security (CSP, headers, origin allowlist, secrets), dependency policy, browser support, build correctness, SEO markup correctness, or the content-data contract. Performance survives as something measured and reported — a perf regression is still worth a NIT or a conversation — but it is no longer a reason to block a merge, and shipping JS is no longer a finding.

**Why decouple perf from the JS posture at all.** The Lighthouse-100 and HTML-weight gates existed largely to *defend* the zero-JS posture — they were the enforcement teeth that made "no client JS" measurable. With the posture removed, keeping those as merge-blocking gates would re-impose the constraint through the back door and punish the engineer for shipping the JS the founder has now explicitly permitted. Demoting them to advisory keeps the signal (we still watch LCP/INP/CLS and the scores) without the contradiction.

### 5.2 Change log

| Date | Author | Change |
| --- | --- | --- |
| 2026-06-16 | pouk-ai-reviewer | **Full revocation of the zero-JS / client-JS-posture contract and decoupling of the hard performance gates** — ratified founder decision (Arian). Added the reversal notice at the top of the document. **REVOKED (struck, no longer enforced):** R-009 (client-JS whitelist), R-010 (75 kB third-party JS budget gate), R-078 (hydration directives forbidden / `// hydration:` justification), R-079 (DS components SSR-only + CSS-only animation), R-080 (no service worker). Client-side JS is now permitted anywhere, for any reason, with no whitelist and no reviewer sign-off. **CONVERTED HARD → ADVISORY (still measured/reported, no longer merge-blocking):** R-013 (Lighthouse Perf/BP/SEO scores), R-014 (Core Web Vitals), R-015 (HTML-weight budget), R-023 (no render-blocking third-party — perf aspect), R-062 (telemetry-after-paint — perf aspect). R-011 converted to ADVISORY (defer/non-render-blocking now NIT-level). **R-056 partially revoked:** Lighthouse Perf/BP/SEO assertions now non-blocking; the **Accessibility category assertion stays BINDING**. **Explicitly UNCHANGED / still BINDING:** all of section 3.4 accessibility (R-024–R-033), axe-core zero-violations (R-029, R-057), `prefers-reduced-motion` (R-030, R-053), R-012 consent/cookieless, security headers + CSP (R-042–R-046, R-082), origin allowlist (R-050), and all build-correctness / dependency / SEO-markup / content-contract rules. Updated the §2 utility-page posture line and the §4 verification matrix (Lighthouse split into BINDING a11y row + ADVISORY perf row; client-JS and HTML-weight jobs marked informational-only). Rule IDs preserved for cross-repo citation legibility. **Cascade flagged for PM/Arian:** `meta/masterplan.md` (section 1 quality bar, section 4.3 hydration discipline, section 6.1 parity matrix — Lighthouse 100 + HTML-weight rows) and any page specs that cite the zero-JS posture or the Lighthouse/weight gates need the parallel update the PM is handling. |
| 2026-05-13 | pouk-ai-reviewer | Initial Draft. R-001 through R-077 published. Status: Draft. |
| 2026-05-13 | pouk-ai-reviewer | Promoted Draft → Approved via `meta/decisions/launch-readiness.md` D-14 through D-22. Rewrote section 3.2 (Zero-JS contract → Client JS budget and discipline); R-009/R-010/R-011/R-012 replaced; old R-010 hydration discipline → R-078, old R-011 DS-SSR rule → R-079. Updated R-013 (Lighthouse Perf ≥ 95, A11y/BP/SEO = 100), R-046 (no CSP on launch), R-056 (lighthouse-ci thresholds), R-058 (test coverage ≥ 80% on changed files when tests exist), R-060 (Matomo locked), R-061 (Bugsink locked), R-062 (defer discipline for first-party tools), R-070 (branch naming SOFT, reviewer-NIT only), R-072 (Conventional Commits SOFT). Added R-080 (no service worker), R-081 (security.txt, SOFT until email lands). Closed O-001 through O-009; left O-010 noted as resolved; added O-011 (Matomo deployment shape) and O-012 (Bugsink deployment shape). |
| 2026-06-14 | pouk-ai-reviewer | **Reconciled the standard to shipped reality after the 2026-06-14 current-state gap audit** (`meta/reviews/2026-06-14-current-state-gap-audit.md`); Arian-approved. **§2 scope + R-007 (S-0):** route inventory grown 5 → 12; added the route table classifying each route as marketing / utility-legal / system; classified `/privacy`, `/terms`, `/scheduling` as utility/legal pages that carry the technical bar but are JSON-LD-exempt and PM-spec-exempt (resolves S-3). **R-045 (S-5):** Permissions-Policy literal updated `interest-cohort=()` → `browsing-topics=()` to match shipped and the current Topics-API spec. **R-046 (S-6):** upgraded SOFT "no CSP on launch" → HARD "CSP required"; documented the shipped baseline policy and the no-`'unsafe-inline'` rule; supersedes D-17; **flagged (unresolved, engineer-verifying)** the `form-action` host risk (CSP allows `buttondown.com` but form may POST to `buttondown.email` → blocked subscribe POST). **R-050 (S-6):** added the documented runtime-third-party-origins table (Buttondown, Matomo, Bugsink, Vercel). **R-082 (new, S-7):** sanctions the shipped `X-Frame-Options: DENY` header. **R-009 (S-10):** added clause (e) admitting Astro `<ClientRouter />` as sanctioned first-party client JS (same-origin, reduced-motion-gated, navigation-only) with an INP watch-list; explicit call = sanction, not remove. **R-056:** Lighthouse route list aligned to the 12-route inventory. **R-060 / R-061 (S-8):** added launch-readiness flags noting Matomo + Bugsink are dark in prod pending O-011/O-012 (Arian/infra item, not code). Updated the verification matrix security-headers rows. Open Arian-only items remain flagged inline (form-action host confirmation; O-011/O-012 go-live). |
| 2026-05-19 | pouk-ai-engineer | Promoted four declared requirements from aspirational to **CI-enforced** (closes OMC-CI1–CI4). Added `lint` CI job: ESLint 9 flat config (`eslint.config.js`), `no-console: error`, `no-debugger: error`, `@typescript-eslint/no-unused-vars: warn`, `@typescript-eslint/no-explicit-any: warn`, scoped to `src/**/*.{ts,tsx,astro}`; `pnpm lint --max-warnings=0` gates every PR (R-073). Added `client-js-budget` CI job: `.github/scripts/client-js-budget.mjs` walks `dist/**/*.html`, sums gzipped third-party script payload, fails if any page exceeds 75 kB (R-010). Added `html-weight` CI job: `.github/scripts/html-weight-check.mjs` compares gzipped HTML per route against `.github/baselines/html-weight.json` (baseline committed 2026-05-19); fails if any route exceeds 110% of baseline (R-015). Added `security-headers` CI job: `.github/scripts/security-headers-check.mjs` reads `vercel.json` and asserts all four required header keys are present in the catch-all rule (R-042–R-045); runtime `curl -I` check documented as a separate deploy-time step. Updated verification matrix to distinguish CI-enforced gates from deploy-time checks. |

---

## 6. Open questions

### 6.1 Open

Items still needing resolution. None block the standards document from being Approved; they are infrastructure/verification choices, not standards holes.

- **O-013 — Buttondown `form-action` host confirmation (R-046, R-050; audit S-6).** The shipped CSP allows `form-action 'self' https://buttondown.com`, but the `/writing` subscribe form posts to `PUBLIC_BUTTONDOWN_ENDPOINT`, whose host may be `buttondown.email`. If they don't match, the browser blocks the subscribe POST and the email feature silently fails. **Engineer action** (not an Arian policy call): confirm the live endpoint host, align the `vercel.json` `form-action` value and R-050's origins table to it, and verify a successful POST on a preview deploy before the email line ships.
- **O-014 — Observability go-live before the alias swap (R-060, R-061; audit S-8).** Matomo and Bugsink are both dark in production (env-gated / removed) pending O-011 and O-012. R-060/R-061 ("runs on every page") are unmet until the deploy shapes are chosen and the env vars / self-hosted SDK are wired. **Arian/infra item**, gated by the R-059 launch gate — must be resolved before the domain alias swaps, not per-PR.
- **O-011 — Matomo deployment shape (R-060).** Self-hosted on poukai-inc infrastructure vs. Matomo Cloud (paid SaaS). Reviewer default: self-hosted matches the brand's "owns the stack" posture and avoids a third-party data-flow on every page load. Cloud is faster to launch and offloads ops. The decision affects R-061 indirectly (if Matomo is cloud-hosted the tracker file is served from a third-party origin; the JS-budget rules R-009/R-010/R-011 that formerly governed that case were revoked 2026-06-16, so the remaining live constraints are the BINDING origin-allowlist rules — R-046 CSP and R-050 runtime-origin table — plus the consent/cookieless rule R-012).
- **O-012 — Bugsink deployment shape (R-061).** Self-hosted vs. Bugsink Cloud. Reviewer default: self-hosted, same rationale as O-011. The R-009/R-010/R-011 JS-budget caveat for the cloud shape was revoked 2026-06-16; the live constraints are now R-046 (CSP origin allowlist), R-050 (runtime-origin table), and R-012 (PII scrubbing / consent). **2026-05-31 (#90):** the inert CDN-importing client SDK stub was removed from `BaseLayout.astro`. Note: the historical reason it was flagged (R-011 forbade inline third-party imports) is now revoked; the still-live reason to wire the re-added SDK as a self-hosted same-origin `<script src>` is the **security** posture (R-046 CSP `script-src 'self'`, R-050 origin allowlist), not the former JS budget. Re-wiring the client SDK remains part of closing O-012.

A future revision watch-list (not gating approval, just flagged for the reviewer to track):

- If Matomo's cookie mode is enabled in a future configuration change (currently cookieless per D-15 and R-060), R-012 must be tightened with a consent-gate flow before the change ships.
- If a third operational tool (beyond Matomo and Bugsink) is proposed, R-010's 75 kB ceiling will be hit — that's by design and forces a standards revision rather than allowing drift.

### 6.2 Resolved (closed via decisions doc)

All items O-001 through O-009 were resolved on 2026-05-13 via `meta/decisions/launch-readiness.md`. See section 5.1 (Rationale) and 5.2 (Change log) for resolution detail per requirement.

- **O-001 — Lighthouse threshold band.** Resolved by D-14 → R-013, R-056. Performance ≥ 95, A11y/BP/SEO = 100, HARD on every page.
- **O-002 — Analytics provider.** Resolved by D-15 → R-060. Matomo, every page including `/`, cookieless at launch.
- **O-003 — Error reporting tool.** Resolved by D-16 → R-061. Bugsink, client + server SDK, every page including `/`.
- **O-004 — CSP strategy.** Resolved by D-17 → R-046 (no CSP on launch; add when a form or non-first-party embed appears). **Superseded 2026-06-14:** the deferral trigger (a form + Matomo) landed, so R-046 was upgraded to HARD "CSP required" and now documents the shipped baseline policy. D-17's "no CSP" stance is historical.
- **O-005 — Service worker.** Resolved by D-18 → R-080. None registered.
- **O-006 — Conventional Commits.** Resolved by D-19 → R-072. SOFT; reviewer requests changes on drift but does not block.
- **O-007 — Test coverage threshold.** Resolved by D-20 → R-058. ≥ 80% on changed files when tests exist; absence surfaced as NIT.
- **O-008 — `.well-known/security.txt`.** Resolved by D-21 → R-081. SOFT now, HARD once `hello@pouk.ai` is live; task tracked in `meta/backlog.md`.
- **O-009 — Branch naming.** Resolved by D-22 → R-070. SOFT; reviewer prefers convention but does not block.
- **O-010 — PM specs missing.** Resolved 2026-05-13: PM specs for `meta/specs/pages/*.md` and `meta/specs/content/*.md` landed on the same date as this revision. Future review findings deferring to "the governing PM spec" can now cite a real spec file.

---

## 7. Suspected masterplan updates

Items where reading the masterplan against this standard surfaced wording that should probably be revised (not by this document — flag for the PM/Arian):

- **`meta/masterplan.md` section 6.1 "HTML weight (`/`)"** — measured against `wc -c` on the built file, but the production page is gzipped on the wire. R-015 specifies gzipped bytes; the masterplan should match or explicitly say "uncompressed".
- **`meta/masterplan.md` section 4.2** — lists four integrations but doesn't mention how `lighthouse-ci`, axe-core, or content-schema validation are integrated. The masterplan is silent on the CI shape; this document fills it in via section 4 (Verification). The masterplan could either point at this document or absorb the CI architecture as a new sub-section.
- **`meta/masterplan.md` section 7 ("Open questions")** — item 1 says "ship `banner.png` as the OG image" until `og.png` exists. R-037 here requires a 1200×630 OG image. `banner.png` may or may not be 1200×630; the engineer should verify dimensions before merging the BaseLayout, or the masterplan should be updated to acknowledge that the launch-blocker `og.png` from `meta/backlog.md` is the only acceptable artifact.
- **`meta/architecture.md` "Constraints"** — describes the current single-file `index.html` reality ("Pure HTML5 + CSS. **No JavaScript. No build step. No frameworks.**"). Once Phase 2 lands, that paragraph will be historically true but operationally false. Recommend annotating that file with a "Note: superseded by `meta/masterplan.md` once Astro migration lands" header, or rewriting it to describe the Astro architecture.

---

## 8. References

- `meta/masterplan.md` — strategic decisions, taxonomy, release sequence. Especially sections 1, 2A, 4.2, 4.3, 4.4, 5.1, 5.2, 6.1, 6.2, 8.
- `meta/architecture.md` — current single-file reality, design-token contract, motion / a11y rules.
- `meta/backlog.md` — launch blockers (security headers, DNS, OG image), approved page copy.
- `meta/decisions/launch-readiness.md` — D-14 through D-22 (resolved 2026-05-13) drive the section 3.2 rewrite and the R-013/R-046/R-058/R-060/R-061/R-070/R-072/R-080/R-081 changes.
- `.claude/agents/pouk-ai-reviewer.md` — reviewer's own working contract, especially section 5 (universal quality checks) and section 9 (hard "no" list).
- [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116) — `security.txt` format (cited under R-081).
- [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/) — accessibility upstream specification (cited under R-024, R-025, R-026, R-027, R-028, R-030, R-031, R-032, R-053).
- [web.dev — Web Vitals](https://web.dev/articles/vitals) — Core Web Vitals "Good" thresholds (cited under R-014).
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/) — security header recommendations (cited under R-042, R-043, R-044).
- [Open Graph Protocol](https://ogp.me/) — OG meta tag specification (cited under R-037).
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) — ARIA usage rules (cited under R-032).
- [permissionspolicy.com](https://www.permissionspolicy.com/) — Permissions-Policy syntax reference (cited under R-045).
- [hstspreload.org](https://hstspreload.org/) — HSTS preload requirements (cited under R-042).
- RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC), RFC 8659 (CAA) — email auth (cited under R-047).
- [W3C CSP Level 3](https://www.w3.org/TR/CSP3/) — Content Security Policy spec (cited under R-046).
