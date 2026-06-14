# Current-State Gap Audit — all pages vs. Technical Requirements

**Type**: Current-state gap audit (read-only; no code changed)
**Reviewer**: pouk-ai-reviewer
**Date**: 2026-06-14
**Standard of record**: `meta/standards/technical-requirements.md` (Approved, last updated 2026-05-19)
**Scope**: every route in `src/pages/` — `/`, `/why-ai`, `/roles`, `/principles`, `/engagements`, `/about`, `/writing`, `/writing/[slug]`, `/privacy`, `/terms`, `/scheduling`, `/404`
**Method**: static read of the `.astro` page files, `BaseLayout.astro`, `src/content/*.json`, `src/content/writing/*.md`, `src/content/_schemas/*.ts`, `src/content.config.ts`, `astro.config.mjs`, `vercel.json`, `public/`, `.lighthouserc.json`, `public/matomo.js`. **No build, Lighthouse, or axe run was performed** — all runtime metrics below are marked `NOT VERIFIED — CI must validate`.

Severity legend: **BLOCKER** (violates a HARD requirement / would block merge today) · **HIGH** (HARD requirement at material risk, or SOFT requirement clearly unmet with user impact) · **MEDIUM** (SOFT requirement unmet, or HARD requirement unverifiable without runtime) · **LOW** (NIT-grade; tidy-up, dead fields, consistency).

A note on the standard's own scope: `technical-requirements.md` §2 still scopes itself to "the four canonical routes" and R-007 to five routes + 404. The site has since grown to 12 routes (engagements, writing ×2, privacy, terms, scheduling). **The standard itself is stale relative to the shipped surface.** That is finding S-0 and the single highest-leverage fix in this audit, because several requirements (R-007, R-037, R-038, R-039, R-041) are written against a route list that no longer matches reality, which makes "compliance" ambiguous for half the site.

---

## 1. Systemic issues (affect multiple pages)

### S-0 — The standard's route scope is stale (governance gap)
`technical-requirements.md` §2 and R-007 enumerate 4–5 canonical routes + 404. Shipped surface is 12 routes. Until the standard is revised, every per-route requirement on the new pages is enforced "by analogy" rather than by citation. **This is a standards-revision item for Arian, not an engineering fix** — but it gates the clarity of everything below. Recommend revising §2 scope and R-007's route list, and deciding explicitly whether `/privacy`, `/terms`, `/scheduling` are "utility pages" exempt from the marketing-page SEO bar (they currently behave as if exempt — see S-3).
Maps to: R-007, §2 scope.

### S-1 — `og:type` is hardcoded `website` for every route, including article pages — BLOCKER
`BaseLayout.astro:180` emits `<meta property="og:type" content="website" />` unconditionally. `/why-ai` and every `/writing/[slug]` ship `Article` JSON-LD but advertise `og:type=website` to scrapers. R-037 requires `og:type` to be present (it is) but the Open Graph spec it cites ([ogp.me](https://ogp.me/)) treats `article` as a distinct type with its own required/optional properties; an article page declaring `website` is a correctness defect, not a cosmetic one. There is no prop to override `og:type`.
Maps to: R-037 (HARD). Affects: `/why-ai`, `/writing/[slug]`. Severity: **BLOCKER** (HARD SEO requirement, factually wrong tag on content pages).

### S-2 — Per-essay OG image plumbed but the lever is never pulled; `ogClaim` is dead data — MEDIUM
`BaseLayout` accepts `ogImage`, and `/writing/[slug].astro:96,117` forwards `e.ogImage`. But the one shipped essay (`why-ai-pilots-stall-at-integration.md`) sets **`ogClaim`** (a string) and no `ogImage`. The schema (`content.config.ts:135-136`) declares both `ogClaim` and `ogImage` as optional, and **nothing in any template reads `ogClaim`**. Result: every essay falls back to the site `/og.png`, and `ogClaim` is unused content data. Either the OG-card generation was planned and never built, or `ogClaim` is dead. R-077 (SOFT) and the maintainability bar (no dead fields) both bite.
Maps to: R-037 (HARD — OG image present via fallback, so not a blocker), R-077 (SOFT), maintainability. Affects: `/writing/[slug]`. Severity: **MEDIUM**.

### S-3 — Utility pages (`/privacy`, `/terms`, `/scheduling`) ship no JSON-LD and no spec/composition — MEDIUM
These three pages were added for Google OAuth verification (#122). They pass `title`/`description`/`canonical`/OG via BaseLayout, but pass **no `jsonLd` prop** (BaseLayout makes it optional, so this is silent). R-038 only requires JSON-LD "where the governing PM spec requires it," and these pages have no PM spec by design (stated in their frontmatter). So this is **not a BLOCKER** — but it is a governance hole: there is no written decision that these pages are JSON-LD-exempt, and R-038's "where the spec requires it" can't be evaluated against a non-existent spec. The standard (S-0) should explicitly classify utility pages. Until it does, this is a MEDIUM consistency/governance gap, not a violation.
Maps to: R-038 (HARD, conditionally), R-039 (sitemap — see S-4), §2/R-007 scope. Affects: `/privacy`, `/terms`, `/scheduling`. Severity: **MEDIUM**.

### S-4 — Sitemap robustness depends on a brittle `endsWith` filter — LOW/MEDIUM
`astro.config.mjs` excludes `/404` and `/admin` from the sitemap via `page.endsWith("/404/")` etc. With `build.format: "directory"` every URL is trailing-slashed, so this works today. But (a) `robots.txt` points at `https://pouk.ai/sitemap-index.xml` while `@astrojs/sitemap` emits `sitemap-index.xml` — verify the filename matches at runtime (R-040 requires robots to reference the real sitemap); (b) the filter is string-fragile and will silently fail to exclude a future `/admin`-prefixed page that doesn't match the exact patterns. R-039 (all public routes present) and R-040 (robots references the sitemap) are **NOT VERIFIED** without a built `dist/`.
Maps to: R-039 (HARD), R-040 (HARD). Affects: all routes. Severity: **MEDIUM** (unverified HARD requirement) — drop to LOW if a built sitemap is confirmed correct in CI.

### S-5 — Permissions-Policy header text drifts from R-045's literal value — HIGH
`vercel.json` ships `Permissions-Policy: geolocation=(), microphone=(), camera=(), browsing-topics=()`. R-045 specifies the value **ending in `interest-cohort=()`**, not `browsing-topics=()`. `browsing-topics` is the current Topics-API successor to FLoC's `interest-cohort` and is arguably the *more correct* directive in 2026 — but the standard as written says `interest-cohort=()`, so the shipped header does not match the requirement verbatim. This is a real divergence that a CI `security-headers-check.mjs` asserting the literal R-045 string would flag (or, worse, the check was loosened to pass). Either the header is wrong or the standard is stale; given S-0, the standard is the likelier stale party — but **the reviewer cannot waive a HARD requirement; this needs Arian's call.**
Maps to: R-045 (HARD). Affects: all routes (catch-all header). Severity: **HIGH**.

### S-6 — A Content-Security-Policy now ships, but R-046 says "no CSP on launch" — HIGH (positive drift, undocumented)
`vercel.json` ships a full CSP (`default-src 'self'; script-src 'self'; …; form-action 'self' https://buttondown.com; …`) on every non-`/admin` route. R-046 (SOFT) explicitly states "No Content-Security-Policy header ships on launch … `curl -I` returns no `Content-Security-Policy` header — and that absence is itself the verified state." The engineer shipped a CSP anyway (a *good* security posture, prompted by the Buttondown form and Matomo). **This is desirable drift, but it directly contradicts an Approved SOFT requirement with zero standards-doc update.** Two concrete risks inside the CSP:
  - **Form-action host mismatch (potential BLOCKER for the email feature):** CSP allows `form-action 'self' https://buttondown.com`, but `/writing/index.astro:68` posts to `PUBLIC_BUTTONDOWN_ENDPOINT`. Buttondown's documented form endpoint is on `buttondown.email` (and historically `buttondown.com`). If the env var resolves to `buttondown.email`, the CSP will **block the subscribe POST**. NOT VERIFIED — depends on the env value. Must be confirmed before the email line ships.
  - **JSON-LD under `script-src 'self'`:** the inline `<script type="application/ld+json">` is type-`application/ld+json` (data, not script) and the Matomo config is `application/json` (also data), so `script-src 'self'` does not block them — this is handled correctly (BaseLayout comments confirm the reasoning). Good.
Maps to: R-046 (SOFT), R-009/R-050 (Buttondown is a new runtime third-party origin via form-action — needs a documented rationale + standards update). Affects: all routes (CSP), `/writing` (form-action). Severity: **HIGH** (standards contradiction + unverified form-action that could break the subscribe feature).

### S-7 — `X-Frame-Options: DENY` ships but is unspecified by the standard — LOW
`vercel.json` adds `X-Frame-Options: DENY` (and the CSP adds `frame-ancestors 'none'`). Neither is required by R-042–R-046. Harmless and good, but it's another header the standard doesn't mention — reinforces S-0/S-6 that `vercel.json` has outrun the documented security posture. NIT-grade.
Maps to: R-042–R-046 (none mandate it). Affects: all routes. Severity: **LOW**.

### S-8 — Observability is entirely env-var-gated and effectively dark — HIGH (risk), not a per-PR blocker
R-060 (Matomo on **every page**, HARD) and R-061 (Bugsink client SDK, HARD) are both presently un-shipped:
  - Matomo emits **nothing** unless `PUBLIC_MATOMO_URL` + `PUBLIC_MATOMO_SITE_ID` are set (`BaseLayout.astro:138-140,256`). The frontmatter TODO confirms the endpoint is not configured (O-011 open).
  - Bugsink client SDK was removed 2026-05-31 (#90) and not re-added (O-012 open). BaseLayout documents this correctly.
The code is *correct* (no R-011/R-050 violation; the removal was the right call). But R-060/R-061 are HARD "runs on every page" requirements that are currently **unmet in production** pending infra decisions. This is a launch-readiness risk (the site ships with no analytics and no error reporting), not a code defect. Flagging so it doesn't get lost during the final-state push.
Maps to: R-060 (HARD), R-061 (HARD), O-011, O-012. Affects: all routes. Severity: **HIGH** (launch risk).

### S-9 — Vercel Web Analytics adds a third telemetry script against the R-010 budget — LOW
`BaseLayout.astro:42,288` renders `<Analytics />` gated on `VERCEL=1`. R-009(d)/R-010 admit it but count it (~1.5 kB) toward the 75 kB third-party ceiling. With Matomo + Bugsink currently dark, the live budget is tiny; but once both land, the budget math (R-010: ~66.5 kB baseline, ~8 kB headroom) leaves no room for a fourth tool. No violation today; noting for budget tracking. NOT VERIFIED — needs the client-js-budget CI job on a built `dist/`.
Maps to: R-009 (HARD), R-010 (HARD). Affects: all routes (on Vercel). Severity: **LOW**.

### S-10 — `ClientRouter` (view transitions) ships site-wide; verify it stays inside the JS budget — MEDIUM
`BaseLayout.astro:28,277` imports and renders Astro's `<ClientRouter />` on every page. This is **client JS** (the Astro view-transitions runtime), and it is *first-party Astro framework JS*, not one of the four whitelisted buckets in R-009 (analytics / error-reporting / DS island / Vercel Analytics). R-009's whitelist does not name "Astro ClientRouter." Two consequences: (1) it's arguably an undocumented addition to the client-JS surface that R-009 forbids "without an explicit standards revision"; (2) its weight counts toward nothing currently measured because the budget script targets *third-party* scripts, so it slips between R-009 (whitelist) and R-010 (third-party only). The motion is correctly gated by `prefers-reduced-motion` (R-030, BaseLayout comment + site.css). But the standard never sanctioned shipping the router runtime on a static marketing site, and it's the largest first-party JS payload on the site.
Maps to: R-009 (HARD — whitelist), R-078 (hydration discipline spirit), R-014 (INP/LCP risk). Affects: all routes. Severity: **MEDIUM** (needs an explicit standards decision: sanction ClientRouter or remove it).

### S-11 — Lighthouse/axe/build/budget gates are all UNVERIFIED in this audit — informational
This audit did not run `pnpm build`, `lighthouse-ci`, `@axe-core/playwright`, the client-js-budget script, the html-weight script, or `curl -I`. Every requirement that depends on runtime (R-013, R-014, R-015, R-023, R-029, R-042–R-045 runtime, R-049, R-056, R-057, R-064, R-066) is **NOT VERIFIED — CI must validate**. The `.lighthouserc.json` correctly lists all 12 routes with the right thresholds (Perf ≥ 0.95, A11y/BP/SEO = 1.0), which is a good sign the gates exist; their *results* are unconfirmed here.
Maps to: §4 verification matrix. Affects: all routes. Severity: informational.

### S-12 — Heading-order bridging is inconsistent across sibling pages — LOW
`/roles`, `/principles`, `/writing` each insert an `<h2 class="visually-hidden">` to bridge the `h1` (Hero) → `h3` (DS card) gap and satisfy axe heading-order (R-026). `/engagements` does **not** (its `FeatureCard` titles are `h2` per the frontmatter note, descending cleanly). `/scheduling` uses real `h2`/`h3`. This is fine *if* each card component's actual heading level matches the comment — but it's an assumption this static read can't confirm (the DS components are read-only/out of scope). R-026 is HARD and axe-verified, so a mismatch would surface in CI — but the inconsistency means the safety net differs per page. NOT VERIFIED without axe.
Maps to: R-026 (HARD). Affects: `/roles`, `/principles`, `/writing`, `/engagements`. Severity: **LOW** (consistency; CI is the real check).

### S-13 — `referencesNote` constant duplicated as a hardcoded string in `/writing/[slug]` — LOW
`/writing/[slug].astro:40-41` hardcodes `REFERENCES_NOTE = "Source URLs cleaned from email click-trackers…"` as a template literal, and `/why-ai` sources the equivalent `referencesNote` from JSON. R-076 (HARD) says copy lives in content JSON, "the brand wordmark excepted." This is a copy string in a template. Arguably it's a structural/boilerplate constant rather than page copy, but it's reader-visible prose and it duplicates a string that elsewhere lives in JSON — a defensible R-076 finding.
Maps to: R-076 (HARD). Affects: `/writing/[slug]`. Severity: **LOW** (borderline; reviewer judgment — flag, don't block).

---

## 2. Per-page findings

### `/` (index) — `index.astro`, `home.json`, `_schemas/home.ts`
- **LOW (R-035)** — `home.json` meta description is "Custom AI builds. Automations. Advisory engagements. hello@pouk.ai." Wait — that's `about.json`. The home description is governed by `home.ts` (`max(160)`); content not shown here but length-bounded by schema. Verify it's in the 70–160 window (schema only caps the max, not the min — see cross-cutting note below). NOT VERIFIED for the 70-char floor.
- **PRAISE** — Cleanest page on the site: single Hero, copy fully sourced from `home.json`, Organization JSON-LD typed via `home.ts` with `sameAs`/`email`. Matches the spec's "no body sections" rule exactly. No client JS of its own.
- Inherits: S-1 (n/a — home is `website`, correct), S-5, S-6, S-8, S-9, S-10.

### `/why-ai` — `why-ai.astro`, `why-ai.json`, `_schemas/why-ai.ts`
- **BLOCKER (R-037)** — `og:type=website` but the page ships `Article` JSON-LD. See S-1.
- **MEDIUM (R-035)** — `why-ai.ts` allows `description` up to **220 chars** (`max(220)`), but R-035 caps meta descriptions at **160**. The schema permits a value that violates R-035. The shipped value isn't in this file, but the schema is the wrong bound. NOT VERIFIED whether the live string exceeds 160.
- **PRAISE** — Strong content-integrity engineering: the `superRefine` cross-check that every `openingArgument.stats[].citation` resolves to a real `references[].index` (why-ai.ts:115-126) prevents dead footnote anchors shipping green. This is exactly the testable-content-contract the standard wants (R-074).
- **LOW (R-026)** — Real `<h2>`s used throughout (no sr-only bridge needed); heading order looks clean (h1 Hero → h2 sections). Confirm via axe (S-12).
- Inherits: S-5, S-6, S-8, S-9, S-10, S-11.

### `/roles` — `roles.astro`, `roles-page.json` + `roles.json` collection, `_schemas/roles-page.ts` + `content.config.ts`
- **PRAISE** — Icon set constrained by enum (`content.config.ts:22`, `z.enum(["hammer","workflow","graduation-cap","clapperboard"])`) so an invalid icon fails the build. Lucide-in-React isolated to `RolesGrid.tsx` and rendered static (R-079 honored, documented inline).
- **LOW (R-026)** — Relies on sr-only `<h2>` bridge (roles.astro:58) to h3 RoleCards. Correct pattern; confirm card level via axe (S-12).
- **MEDIUM (R-035)** — `roles-page.json` description is 158 chars — within bound but right at the edge; fine. JSON-LD is `WebPage` (acceptable; R-038 only mandates Organization on `/`).
- Inherits: S-1 (n/a — WebPage/website fine), S-5, S-6, S-8, S-9, S-10.

### `/principles` — `principles.astro`, `principles-page.json` + `principles.json`, `_schemas/principles.ts` + `_schemas/principles-page.ts`
- **MEDIUM (R-074 / data integrity)** — `principles.json` is imported and parsed directly (not via a content collection) because it's a single object. The schema file `_schemas/principles.ts` is only **364 bytes** — verify it actually validates the ten-principle array shape (count, anchors, numerals) rather than a loose `z.object`. The page asserts ten anchors in its frontmatter comment but the schema may not enforce `.length(10)` or anchor-enum. NOT VERIFIED (schema body not deeply inspected); flagged because a thin schema is a silent-drift risk.
- **LOW (R-026)** — sr-only `<h2>` bridge present (principles.astro:55). Good.
- Inherits: S-1 (n/a), S-5, S-6, S-8, S-9, S-10.

### `/engagements` — `engagements.astro`, `engagements-page.json` + `engagements.json`, `_schemas/engagements-page.ts` + `content.config.ts`
- **PRAISE** — The strongest schema in the repo: `content.config.ts:36-80` enforces categorical-only copy (no figures/currency/"starts at") via a `noFigures` refine, locks `cta.href` to `mailto:hello@pouk.ai?subject=<Rung>` with a regex *and* a cross-field refine that the subject equals the title, and forbids the eyebrow equalling the title. This is testable-requirement engineering done right.
- **LOW (R-076)** — `engagements-page.json` has an `eyebrow: "Engagements"` but the page frontmatter (engagements.astro:26-30) explains the DS Hero has no eyebrow slot, so the eyebrow is **never rendered** — dead content field. Same pattern as writing-page (see below). Tidy-up.
- **LOW (R-026)** — No sr-only bridge; FeatureCard titles claimed to be `h2`. Inconsistent with siblings (S-12); correct *if* the DS renders h2. Confirm via axe.
- Inherits: S-1 (n/a), S-5, S-6, S-8, S-9, S-10.

### `/about` — `about.astro`, `about.json`, `_schemas/about.ts`
- **MEDIUM (R-021 / R-031 / CLS)** — The portrait is the LCP asset. `about.json` supplies `alt`, `aspect: "1:1"`, `width: 1024`, and a caption, and BaseLayout preloads it (`portraitPreload`). But the actual `<img>`/`<picture>` is inside `AboutBand.tsx` (a site component, read-only here) — this audit **cannot confirm** the rendered `<img>` carries explicit `width`+`height` attributes (R-021 HARD) or that the preload `as="image" type="image/jpeg"` matches the served format. The frontmatter mentions "AVIF/WebP negotiation happens at the `<picture>` level," which means the preloaded JPEG may not be the format actually painted — a known LCP-preload pitfall (preloading a resource the browser then doesn't use). NOT VERIFIED; HIGH-risk-if-wrong, MEDIUM as flagged.
- **MEDIUM (R-038 / S-1)** — Ships `Person` JSON-LD (good, founder), `og:type=website` (fine for a profile page, though `profile` is the OG-spec type — minor). The Person JSON-LD `url` is `https://pouk.ai/about/` — consistent with canonical. OK.
- **PRAISE** — The Pouākai section copy (about.json:27) is exactly the respectful, abstracted, no-Māori-visual-motif framing the brand contract (reviewer §7) requires, and says so explicitly in the copy. Defends the brand-origin constraint well.
- Inherits: S-5, S-6, S-8, S-9, S-10.

### `/writing` (index) — `writing/index.astro`, `writing-page.json`, `_schemas/writing-page.ts`
- **HIGH (R-046 / R-050 / form-action)** — The Buttondown subscribe form (`writing/index.astro:68`) posts to `PUBLIC_BUTTONDOWN_ENDPOINT`; CSP `form-action` allows `https://buttondown.com`. If the endpoint is on `buttondown.email`, the POST is **CSP-blocked** and the email feature silently fails. See S-6. NOT VERIFIED (env-dependent). This is the one finding most likely to break a shipped feature.
- **LOW (R-076)** — `writing-page.json` defines `hero.eyebrow: "Writing"` but `index.astro:56` renders `<Hero title lede>` only — **eyebrow never rendered** (dead field, same as engagements). The schema (`writing-page.ts:16`) even requires it. Tidy-up.
- **LOW (R-028 / a11y)** — The form uses a `visually-hidden` `<label for="bd-email">` (good). Confirm the DS `<Input>` actually emits `id="bd-email"` so the label associates (R-028/labelling). NOT VERIFIED (DS internal).
- **PRAISE** — Native zero-JS `<form action>` instead of the hydration-requiring DS `<Form>` molecule — correct call for the JS budget (R-009). RSS-alone fallback when the endpoint is unset is a clean degradation.
- Inherits: S-1 (CollectionPage JSON-LD + website OG — fine), S-5, S-6, S-8, S-9, S-10.

### `/writing/[slug]` — `writing/[slug].astro`, `content/writing/*.md`, `content.config.ts` writing schema
- **BLOCKER (R-037)** — `og:type=website` on `Article` pages. See S-1. Most acute here: these are the share-optimized pages.
- **MEDIUM (R-037 / S-2)** — Per-essay `ogImage` plumbed but unused; `ogClaim` is dead data. See S-2.
- **LOW (R-076 / S-13)** — `REFERENCES_NOTE` hardcoded in the template. See S-13.
- **PRAISE** — The build-time guard that throws if an essay body contains inline Markdown (`[slug].astro:68-84`) — because bodies are pure prose rendered as literal `<p>` text — is excellent defensive engineering: it keeps the "no MDX" constraint honest instead of trusting authors, and fails the build (R-054) rather than shipping literal `[text](url)` to readers.
- **LOW (R-035)** — Writing schema caps `description` at 155 (`content.config.ts:119`); the shipped essay's description is ~150 — fine, and the floor (70) is unenforced (see cross-cutting). Page `<title>` is `${title} — pouk.ai`; uniqueness OK.
- Inherits: S-5, S-6, S-8, S-9, S-10.

### `/writing/rss.xml` — `writing/rss.xml.ts`
- **LOW (informational)** — Not an HTML route; R-013/R-024/etc. don't apply. Feed is generated from the same `writing` collection (single source of truth), absolute links resolved manually. Clean. Verify the RSS URL (`/writing/rss.xml`) is either in or deliberately out of the sitemap. No findings.

### `/privacy` — `privacy.astro`, `privacy.json`, `_schemas/legal.ts`
- **MEDIUM (R-038 / S-3)** — No JSON-LD. Acceptable for a utility page but unclassified by the standard. See S-3.
- **MEDIUM (R-035)** — `legal.ts` caps `meta.description` at **200** (`legal.ts:43`), exceeding R-035's 160 ceiling. The shipped privacy description is ~170 chars — **over the R-035 160 limit.** This is a real R-035 miss if utility pages are in scope (S-0 governs whether they are). NOT VERIFIED for exact length, but the schema bound proves it's permitted.
- **PRAISE** — Content-as-data done well for legal prose: `legal.ts` models sections as ordered `blocks` (paragraph | bullet-list) + a labelled `links` array, so required outbound links (Google API Services User Data Policy, Limited Use) render without inline HTML in copy (R-077 honored). The policy content itself is thorough and OAuth-verification-appropriate.
- Inherits: S-5, S-6, S-7.

### `/terms` — `terms.astro`, `terms.json`, `_schemas/legal.ts`
- **MEDIUM (R-038 / S-3)** — No JSON-LD; utility page, see S-3.
- **LOW (R-035)** — `terms.json` description is ~120 chars, within 160. OK. (Same 200-cap schema risk as privacy, but this instance is fine.)
- Inherits: S-3, S-5, S-6, S-7.

### `/scheduling` — `scheduling.astro`, `scheduling.json`, `_schemas/scheduling.ts`
- **MEDIUM (R-038 / S-3)** — No JSON-LD. A `SoftwareApplication` or `WebPage` block would suit this product-description page; utility-page classification (S-0) decides whether it's required.
- **MEDIUM (R-035)** — `scheduling.ts` caps description at **200** (`scheduling.ts:23`); shipped value is ~180 chars — **over R-035's 160.** Same as privacy.
- **LOW (R-025 / semantics)** — This is the one page that hand-rolls its full structure (`<article><header><h1>…`) instead of using the DS `<Hero>`. The CTA `<a class="scheduling-hero__cta" href="https://cal.pouk.ai" rel="noopener">` is an external link with `rel="noopener"` but **no `target="_blank"`** (noopener is only meaningful with `_blank`) — harmless, minor. Heading order (h1 → h2 → h3) is clean and uses real semantic elements.
- **LOW (R-009 / external link)** — Links to `cal.pouk.ai` (subdomain). CSP `connect-src 'self'` doesn't affect a plain anchor navigation, so no issue.
- Inherits: S-5, S-6, S-7.

### `/404` — `404.astro`, `not-found.json`, `_schemas/not-found.ts`
- **PRAISE** — Exemplary crawler-contract discipline: `robots="noindex,follow"`, `omitCanonicalLink`, no JSON-LD, excluded from sitemap (astro.config filter), and every one of those is documented inline against `meta/specs/pages/404.md §6`. The `not-found.ts` schema pins exactly 3 suggestion rows (`.length(3)`). This is the gold standard for how a route should map to its spec.
- **LOW (R-026)** — h1 (NotFoundHero) → suggestions are a `<nav><ul>` of links, no heading-level skip. Clean.
- Inherits: S-5, S-6 (CSP applies), S-10 (ClientRouter ships here too).

---

## 3. Prioritized fix list (for the final-state push)

Ordered by severity then leverage. Items marked **[Arian decision]** are standards/governance calls the engineer cannot make alone (reviewer recommends; Arian decides).

**Tier 1 — BLOCKER / feature-breaking (fix before the final-state merge):**
1. **og:type per page type (S-1).** Add an `ogType` prop to `BaseLayout` (default `website`), pass `article` from `/why-ai` and `/writing/[slug]`. Unblocks R-037 on all content pages. *(BLOCKER, R-037)*
2. **Buttondown form-action host (S-6).** Confirm `PUBLIC_BUTTONDOWN_ENDPOINT`'s host and make the CSP `form-action` allowlist match it exactly (likely `buttondown.email`). Otherwise the subscribe POST is CSP-blocked. Verify on a preview deploy with `curl`/devtools. *(HIGH, R-046/R-050; feature-breaking)*

**Tier 2 — HIGH (standards reconciliation + launch risk):**
3. **[Arian decision] Reconcile `vercel.json` security posture with the standard (S-5, S-6, S-7).** Decide whether `interest-cohort=()` should become `browsing-topics=()` in R-045, whether R-046 should flip to "CSP ships at launch," and document `X-Frame-Options`. Then update `technical-requirements.md` and ensure `security-headers-check.mjs` asserts the agreed values. *(HIGH, R-045/R-046)*
4. **[Arian decision] Observability go-live (S-8).** Resolve O-011 (Matomo deploy shape) and O-012 (Bugsink), set the env vars / re-add the self-hosted Bugsink SDK, so R-060/R-061 ("every page") are actually met before the alias swap. *(HIGH, R-060/R-061)*

**Tier 3 — MEDIUM (scope, verification, correctness):**
5. **[Arian decision] Revise standard scope to 12 routes (S-0).** Update §2 and R-007; explicitly classify `/privacy`, `/terms`, `/scheduling` as utility pages and state their SEO/JSON-LD exemptions (or requirements). This resolves S-3 and clarifies S-4. *(MEDIUM, R-007/§2)*
6. **Tighten meta-description schema bounds to R-035 (S-3 instances + per-page R-035).** `why-ai.ts` (max 220), `legal.ts` (max 200), `scheduling.ts` (max 200) all permit descriptions over the 160 ceiling, and privacy/scheduling appear to ship over 160. Lower the schema `max` to 160 and add a `min(70)` floor across all meta-description schemas so R-035 is build-enforced, not just CI-spot-checked. *(MEDIUM, R-035)*
7. **[Arian decision] ClientRouter sanction (S-10).** Decide whether the Astro view-transitions runtime is sanctioned client JS; if yes, add it to R-009's whitelist; if no, remove `<ClientRouter />`. Either way, make sure the budget script accounts for it. *(MEDIUM, R-009)*
8. **About portrait LCP correctness (R-021 + S-2).** Confirm `AboutBand`'s `<img>` carries explicit `width`/`height` and that the preloaded format matches the painted format (avoid preloading an unused JPEG when AVIF/WebP is served). *(MEDIUM, R-021/R-014)*
9. **Per-essay OG decision (S-2).** Either build the per-essay OG-card pipeline (use `ogImage`/`ogClaim`) or delete `ogClaim` from the schema and markdown as dead data. *(MEDIUM, R-037/R-077)*
10. **Verify `principles.ts` actually constrains the principle array (S-2/principles).** Ensure it enforces count, anchors, numerals — not a loose object. *(MEDIUM, R-074)*

**Tier 4 — LOW (consistency / tidy-up):**
11. Remove dead `eyebrow` fields from `writing-page.json` and `engagements-page.json` (never rendered) — or render them. *(LOW, R-076)*
12. Move `REFERENCES_NOTE` out of `/writing/[slug].astro` into content data, matching `/why-ai`'s `referencesNote`. *(LOW, R-076)*
13. Standardize heading-bridge approach across card pages (S-12) once axe confirms each DS card's heading level. *(LOW, R-026)*
14. `/scheduling` CTA: drop the misleading `rel="noopener"` (no `target="_blank"`) or add `target="_blank"`. *(LOW)*
15. Confirm `robots.txt` sitemap filename matches the emitted `@astrojs/sitemap` output, and harden the sitemap exclude filter against future `/admin*` paths (S-4). *(LOW, R-039/R-040)*

**Runtime verification gate (must run in CI, not assertable from this static read):** Lighthouse 12-route run (R-013/R-014/R-056), axe 12-route run (R-029/R-057), `client-js-budget.mjs` + `html-weight-check.mjs` on built `dist/` (R-010/R-015), `security-headers-check.mjs` + `curl -I` on preview (R-042–R-045), `pnpm audit --prod` (R-049), license check (R-064), lockfile freshness (R-066). All currently **NOT VERIFIED**.

---

## Open questions for Arian
- **O-A1 (S-0):** Are `/privacy`, `/terms`, `/scheduling` formally "utility pages" exempt from the marketing-page SEO/JSON-LD bar? The standard must say so for R-037/R-038/R-035 to be evaluable on them.
- **O-A2 (S-5):** Should R-045 be updated to `browsing-topics=()` (the modern directive the code already ships), or should the header revert to the literal `interest-cohort=()` the standard mandates?
- **O-A3 (S-6):** R-046 says "no CSP on launch," but a CSP ships today. Confirm the standard should flip to "CSP required," and that the `form-action` host matches the live Buttondown endpoint.
- **O-A4 (S-10):** Is Astro's `ClientRouter` sanctioned client JS? It is currently the largest first-party JS payload and is not in R-009's whitelist.
- **O-A5 (S-8):** What is the go-live plan for Matomo (O-011) and Bugsink (O-012) so the HARD "every page" observability requirements are met before the domain alias swap?
