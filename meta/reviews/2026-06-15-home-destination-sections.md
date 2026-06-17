# Review: explore/raise-the-ceiling — home destination sections (`/`)

**Diff range**: working tree (uncommitted) on `explore/raise-the-ceiling` vs `HEAD`
**Author**: pouk-ai-engineer
**Reviewer**: pouk-ai-reviewer
**Date**: 2026-06-15
**Recommendation**: PASS-WITH-NITS (one P1 cross-page sequencing finding for Arian's call; not a code defect)
**Governing spec(s)**: `meta/specs/pages/home-amendment-destination.md` (Approved — RR-1/RR-2/RR-3 ratified 2026-06-15)
**Approved copy**: `meta/content/drafts/pages/home-destination-sections.md` §2 (Approved 2026-06-15)
**Composition**: `meta/compositions/pages/home.md` §2 Sections 3/4/5 (PROPOSAL — destination revision)
**Standards**: `meta/standards/technical-requirements.md` (R-026, R-074/R-075/R-076, R-079, R-013, R-073)
**Masterplan references**: §4.1 (site layout), §4.3 (client-JS posture), §6.1 (HTML-weight gate)

---

## Summary

The engineer added three sections below the locked display Hero on `/` — a conviction `Statement`, a "Why pouk.ai, specifically" differentiation preview, and a closing `CTASection` — plus a Zod-schema extension, three JSON content blocks, and three per-section React wrapper components with smoke tests. The build is green, `astro check` is clean, all 25 component tests pass, and the rendered `/` HTML matches the §5 render contract exactly: one `<h1>`, two `<h2>`s, Statement emits no heading, exactly one `--surface-section` band (the close), zero hydration directives, and all copy traces verbatim to the Approved draft §2. This is a careful, standards-literate build with no P0/code defects. The single finding worth Arian's attention is **cross-page**, not in this diff: the differentiation link promises a "when to hire / when not to" comparison on `/why-ai` that does not yet exist there (the `vs-alternatives` content is still Draft and the `/why-ai` amendment is still a PROPOSAL). The link is not broken, but it currently under-delivers on its own promise. That is a sequencing call, not a reason to block this code.

## Spec parity

Against `meta/specs/pages/home-amendment-destination.md` §6 acceptance criteria:

- [x] §6 — Route renders at `/` with the §5 IA regions present and in order. Verified in `dist/index.html`: Hero → Statement → differentiation → closing CTASection → footer.
- [x] §6 — Hero renders first at display scale with dual CTA per contact-flow; verbal content byte-identical (`home.json` hero block unchanged; `HomeHero.tsx` only flipped `size`/Button rung per RR-1/RR-2). `Currently taking conversations for Q3.` present once.
- [x] §6 — Exactly one `Statement` below the Hero; no CTA, no stat, no attribution. Verified: DOM is `<p>Most teams can build now. Few can ship it and keep it running.</p>`, no quote marks, no heading, no byline.
- [~] §6 — "Why pouk.ai" renders as a **preview** (materially shorter than `/why-ai`'s vs-alternatives **and links to it**). Preview is materially shorter (45-word body vs a full section) ✓ and links to `/why-ai` ✓ — but the *target section does not yet exist on `/why-ai`* (see F-101). The "preview compresses-and-links" half holds; the "links to it" half resolves to a page without "it."
- [x] §6 — Closing conversion section renders the contact-flow dual CTA; `mailto:` primary + `cal.pouk.ai` secondary. Verified: `anchors[0]` = `mailto:hello@pouk.ai`, `anchors[1]` = `https://cal.pouk.ai`, both `size="md"`, secondary carries `variant="secondary"`.
- [x] §6 — No banned element renders. Scanned built HTML: no logo bar, no testimonial/`Quote`/`blockquote`, no carousel, no pricing, no `Stat` band, no newsletter, no scheduling embed, no second `StatusBadge`. (Two grep hits — `data-stat`, `home-stat` — confirmed false positives: `data-status=available` on the single Hero StatusBadge, and the `home-statement-gap` wrapper class.)
- [x] §6 — At most one `--surface-section` band. **Definitively verified**: of 3 `<section>` elements, exactly one (`poukai_M3n8vL` = `background:var(--surface-section);border-top:hairline`) carries the band — the closing CTASection. A full-DOM scan against all 10 band-painting DS classes returns exactly 1 element. Statement + differentiation on `--bg`.
- [x] §6 — Zero added client-side JS (R-079). No `client:*` directive, no `<script>` in the new components, no `useState`/`useEffect`/handlers. Built `/` has only `<script type=application/ld+json>` (data) and the first-party same-origin ClientRouter runtime (R-009(e), sanctioned). Booking is a plain `<a href>`.
- [NOT VERIFIED] §6 — Lighthouse mobile (Perf ≥ 95, A11y/BP/SEO = 100) + axe 0 violations. Not run locally (one dev server is already bound; no preview deploy). CI (`.lighthouserc.json` includes `/`; axe runs all public routes) must validate. No reason to expect a regression: zero added JS, clean landmarks, clean heading order.
- [x] §6 — HTML-weight gate. Built `/` is 5,673 bytes gzipped (15,706 raw, post astro-compress). Well within the +25% destination envelope; a destination homepage at <6 kB gzipped is excellent.
- [x] §6 — `prefers-reduced-motion`. No new motion introduced by any added section (no entrance, no scroll reveal). Hero stagger / badge pulse remain DS-gated. Trivially satisfied.
- [x] §6 — One-theme lock; no toggle, no dark-only asset.
- [x] §6 — No new design token. The only site-side CSS rule (`.home-statement-gap { padding-block: var(--space-16) }`) uses a published token (`--space-16: 4rem`, confirmed in built CSS). Everything else is DS classes.
- [x] §6 — Content-approval artifact. All seven section strings match the Approved draft §2 verbatim (programmatic diff: 7/7 MATCH).
- [x] §6 — OG unchanged. `home.json` meta block untouched; no OG surface added by these sections (copy draft §3 confirms none).

## Composition parity

Against `meta/compositions/pages/home.md` §2 Sections 3/4/5:

- [x] DS primitives match: `Statement` (S3), `Section as="section" size="default"` (S4), `CTASection surface="recessed" size="default" align="center" headingAs="h2"` (S5). No improvised substitutions; `ContactBlock` correctly *not* used (composition rejected it).
- [x] Section order matches the composition / §5 render contract.
- [x] Spacing tokens match: `--space-16` gap above/below Statement (S3 "load-bearing interval"); `Section size="default"` and `CTASection size="default"` carry their own `--space-16`; no manual spacer between S4 and S5 (composition anti-pattern honored — no margin added).
- [x] Statement: `hairline={false}` (bare-canvas turn, not a banner) ✓; `as="p"` default (not blockquote) ✓; on `--bg` ✓.
- [x] Closing CTA: both Buttons `size="md"` (matches composition §2 S5 and the display-register revert), exactly two actions, `mailto:` primary / booking secondary, no second StatusBadge ✓.
- [x] Motion: none on any added section, `prefers-reduced-motion` trivially satisfied ✓.
- [NIT] Icon/arrow pick: composition §2 S4 specifies the `→` as the literal `&rarr;` entity (matching the Hero lede hand-off register, not a Lucide `ArrowRight`). The shipped copy uses the raw `→` character in JSON, which renders to the identical glyph in the DOM (confirmed `→` present in built HTML) and is **not** a Lucide icon — so the editorial intent (R12 register, no SVG icon) is honored. The literal-entity vs literal-character distinction is cosmetic at the source level only. See F-201.

## Masterplan & boundary compliance

- [x] No imports from `poukai-ui/` source — components import from the published `@poukai-inc/ui` package only.
- [x] No site-side primitives duplicating `@poukai-inc/ui` — the three wrappers are substance carriers (assemble props into DS slots), zero shape.
- [x] No new design tokens, fonts, or color values — only `--space-16` (published) used site-side.
- [x] No hydration directives added (`client:*`) — verified by grep and by built-HTML inspection.
- [x] No new routes — `/` only; nav unchanged.
- [x] No DS-source workspace-path imports.

## Build & metrics

- Build (`pnpm build`): GREEN — 13 pages built, exit 0.
- `astro check` (R-055): clean — 0 errors, 0 warnings, 0 hints (49 files).
- `pnpm test` (R-058): GREEN — 25/25 (HomeStatement 4, HomeDifferentiation 6, HomeClosingCta 10, HomeHero 5). Every new component ships a smoke test.
- Lighthouse mobile / axe: NOT VERIFIED locally — CI must validate (`.lighthouserc.json` enumerates `/`; axe runs all public routes).
- HTML weight `/`: 5,673 bytes gzipped — within budget.
- Local env note: build/check emit `Unsupported engine` (Node v22 in sandbox vs pinned `>=20 <21`) and an `.npmrc NPM_TOKEN` warning. Both are local-sandbox artifacts, not repo defects — `package.json` `engines` is correctly pinned (R-004) and CI uses Node 20. No finding.

## Code quality

- [x] Semantic HTML / heading hierarchy: one `<h1>`, two `<h2>`s, no skip (R-026). Landmarks correct: 1 `<header>`, 1 `<main>`, 1 `<footer>`, 1 `<nav>` (R-025).
- [x] Typed frontmatter + explicit prop interfaces on all three components; Zod schema extended and `homeSchema.parse()` enforced at build (R-074/R-075). No `as any`.
- [x] No `!important`; the one site-side selector is a single class, zero nesting.
- [x] No images added — N/A for `astro:assets`.
- [x] Section comments present and accurate (index.astro header documents the IA, heading hierarchy, zero-JS, one-band, contact-flow wiring).
- [x] No `console.log`, no `debugger`, no `TODO`, no dead imports, no commented-out experiments (R-073). 2-space indentation. Immutable (props in, JSX out).
- [PRAISE] The component header comments cite the exact governing clause for each decision (`hairline={false}` → "bare-canvas turn"; `ContactBlock` rejection rationale; OQ-1 band placement). This is the documentation standard the repo should hold to — a future engineer can trace every prop to its authority.
- [PRAISE] `BOOKING_URL` reused from `src/lib/booking.ts` in the closing CTA (single canonical URL, FS-CF-2) rather than re-literalizing `https://cal.pouk.ai`. Correct DRY against the contact-flow contract.

## Security & supply chain

- New dependencies: None. `package.json`/`pnpm-lock.yaml` deltas in the broader branch are unrelated to these three sections.
- Lockfile delta: not touched by this change.
- Secrets / tokens: none committed (R-048). The `.npmrc NPM_TOKEN` is an env reference, not a committed secret.

## Findings

### P0 / BLOCK
None.

### P1 / REQUEST_CHANGES (Arian's call — cross-page sequencing, not a code defect)
- **F-101 — Differentiation link promises a `/why-ai` section that does not exist yet** (`src/content/home.json:35`, link text `See when to hire us, and when not to →` → `/why-ai`). The Approved copy draft (§2, A2) and spec §6 frame this as a *preview that compresses-and-links* `/why-ai`'s `vs-alternatives` section. But `/why-ai` currently ships keys `openingArgument / pivot / failureModes / leaders / whereWorks / endCta` — there is **no vs-alternatives / "when to hire, when not to" section**. The nearest content (`whereWorks` = "Where pouk.ai works") is not the two-sided candor comparison the link text explicitly promises ("and when **not** to"). Upstream, `vs-alternatives.md` is still `Draft` and `why-ai-amendment-raise-the-ceiling.md` is `PROPOSAL — In review`. **Consequence**: a reader who clicks the homepage's most candor-forward link lands on a page that does not pay off the promise — the exact "duplicates/disappoints the funnel" risk the destination spec guards against, inverted. The link is *not broken* (`/why-ai` is a valid 200), so this is not a P0. **Recommended resolution (pick one, Arian decides):** (a) sequence the `/why-ai` vs-alternatives section to land in the same release as this homepage change, or (b) soften the link text to a promise `/why-ai` already keeps today (e.g. the draft's stated fallback `Read the honest comparison →` still over-promises; something closer to "See where pouk.ai fits →" matches `whereWorks`), or (c) ship as-is on Arian's explicit acceptance that the homepage previews ahead of the destination, with the `/why-ai` section as a committed fast-follow. This is a PM/content-sequencing decision; surfacing it, not resolving it, is the reviewer's lane.

### P2 / NIT
- **F-201 — Arrow is a literal character, composition specifies the `&rarr;` entity** (`src/content/home.json:35`, `differentiation.link.text` and `closingCta.bookingLabel`). Composition §2 S4 calls for the `→` as the `&rarr;` HTML entity. The JSON stores the raw `→` glyph, which renders identically and is correctly **not** a Lucide icon — so the editorial intent (inherits prose metrics, no SVG) is fully honored. Cosmetic source-level note only; no rendered-output difference. No change required unless the team wants source consistency with the Hero lede.
- **F-202 — Differentiation body is 45 words vs the ~40 draft target** (`src/content/home.json:33`). The copy draft §6 Flag 1 anticipated ~44 and recommended keeping it; it ships at 45. Still materially shorter than a full `/why-ai` section, so the "preview" AC holds. Within the author's own tolerance; flagged only because the draft named a number. No change required.

### PRAISE
- See "Code quality" — clause-cited component headers and `BOOKING_URL` reuse. Two genuine examples; not manufactured.

## Open questions

- **OQ-A (for Arian) — F-101 sequencing.** Does the `/why-ai` vs-alternatives section land with this homepage change, or does the homepage preview ship ahead of it as a committed fast-follow? The code is correct either way; this is a release-coordination and "does-the-link-keep-its-promise" call that only Arian can make.
- **OQ-B — Lighthouse/axe.** Local verification was not possible (dev server already bound, no preview deploy). CI must confirm Perf ≥ 95 / A11y = 100 / BP = 100 / SEO = 100 and axe 0 violations on `/` before promotion. No code reason to expect a miss.

## Recommendation

**PASS-WITH-NITS.** The build is clean, the render contract is satisfied to the letter (one H1 / two H2s / no-heading Statement, exactly one verified `--surface-section` band, zero added JS, all copy verbatim from the Approved draft, no banned element, correct landmarks), tests are green, and boundary discipline is intact. There is no P0 and no code defect. The one substantive issue (F-101) is a cross-page promise gap — the differentiation link advertises a `/why-ai` comparison that page does not yet carry — which is a PM/content sequencing decision for Arian, not a blocker on this diff. Recommend Arian: (1) decide F-101 sequencing before this reaches users, and (2) let CI confirm the Lighthouse/axe gates (OQ-B). The two NITs (F-201 arrow source style, F-202 one word over target) are optional. Subject to F-101 and the CI gate, this is mergeable.
