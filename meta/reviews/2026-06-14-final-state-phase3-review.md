# Review: Final-state Phase 3 — contact-flow dual CTA + `/onboarding`

**Diff range**: `HEAD (8758109)`..working-tree (uncommitted)
**Author**: pouk-ai-engineer
**Reviewer**: pouk-ai-reviewer
**Date**: 2026-06-14
**Recommendation**: APPROVE (with two REQUEST_CHANGES items the engineer should clear pre-merge, and CI metrics still to validate on the preview deploy)
**Governing spec(s)**: `meta/specs/features/contact-flow.md` (Approved), `meta/specs/pages/onboarding.md` (Approved), `meta/specs/content/onboarding.json.md` (Approved)
**Composition(s)**: `meta/compositions/components/booking-affordance.md` (PROPOSAL), `meta/compositions/pages/onboarding.md` (PROPOSAL)
**Content drafts**: `meta/content/drafts/features/contact-flow.md` (Draft v0.1), `meta/content/drafts/pages/onboarding.md` (Draft v0.1)
**Standard**: `meta/standards/technical-requirements.md` (Approved)
**Masterplan references**: §2A (decision authority — site-owned routes/CTAs), §4.1 (layout), §4.3 (client-JS posture), §4.4 (content as data), §6.1 (parity matrix)

---

## Summary

Phase 3 ships the `contact-flow` dual-conversion mechanism across the five governed funnel points plus the global footer, and the new `/onboarding` marketing route (13th route). The build is GREEN (13 pages, 1.66s), `astro check` is clean (exit 0), and the unit suite passes (5/5). Every one of the eight locked decisions is honored in the shipped code: the `mailto:` Button-pair on `/` Hero, muted-link booking on the four Context-B end CTAs, the global footer "Book a time" utility link, a single `BOOKING_URL` source of truth, the hard trust-loop/off-funnel exclusions, zero added client JS, and the categorical-only `/onboarding` page with `og:type=website`, HowTo JSON-LD (no price/offers), trailing-slash canonical, and a clean H1→H2→H3 outline. Route plumbing (sitemap + four CI lists + R-007 → 13) is complete. **No BLOCKER findings.** Two REQUEST_CHANGES items remain: (1) the governing content drafts are still `Draft`, not `Approved` — shipped copy currently traces to un-ratified drafts; (2) the `/onboarding` Hero drops the spec/composition-specified eyebrow with a DS-constraint justification that is defensible but is a silent divergence from the composition that Arian should ratify. Runtime Lighthouse/axe are NOT VERIFIED locally and must pass on the preview deploy.

## Spec parity

### `meta/specs/features/contact-flow.md` §8

- [x] AC1: both `mailto:` and `cal.pouk.ai` affordances render at each governed point — `/` Hero (`HomeHero.tsx:80-86`, rendered `dist/index.html`), `/why-ai` end (`why-ai.astro:160-165`), `/roles` end (`roles.astro:66-71`), `/engagements` end (`engagements.astro:78-90`), `/onboarding` end (`onboarding.astro:129-133`). Verified in built HTML.
- [x] AC2: `mailto:` primary, booking subordinate. `/` uses `variant="secondary"` Button (DS subordination); Context-B pages use `class="booking-link"` muted link beside the full-weight `EmailLink`/inline `<a>`. Verified rendered.
- [x] AC3: no booking on `/principles` or `/about` body — `grep` of both `.astro` and built HTML shows zero `booking-link` class; the only `cal.pouk.ai` ref on each is the global footer utility link (correct per §4 row 7).
- [x] AC4: no booking on `/privacy`/`/terms`; `/scheduling`'s `cal.pouk.ai` link is the app-explainer field in `scheduling.json` (governed by `pages/scheduling.md`), not a funnel CTA.
- [x] AC5: `/engagements` per-rung CTAs stay `mailto:?subject=` only — `grep` of `EngagementsLadder.tsx` finds zero `BOOKING_URL`/`cal.pouk.ai`. No per-card booking in `RolesGrid.tsx` (D-08 holds).
- [x] AC6: booking is a plain `<a>` / `<Button asChild><a>` — no widget/island/modal; no `client:*` added (diff grep clean).
- [~] AC7: booking URL resolves — `https://cal.pouk.ai` is the live app per #122. NOT independently re-verified this pass (no runtime fetch); low risk.
- [x] AC8: no urgency/scarcity/exclamation — labels are `Or grab a time →`, `Or skip the email and grab a time →`, `Book a time`. Compliant.
- [x] AC9: footer exposes both `mailto:` and `cal.pouk.ai` in utility tier — `ShellWrapper.tsx:46-54` via `<Footer email + links[]>`; rendered with `rel="noopener noreferrer"`.
- [x] AC10: booking URL defined once — `src/lib/booking.ts` exports `BOOKING_URL`; all five consumers import it. Zero hardcoded `cal.pouk.ai` booking literals outside `booking.ts` (the `index.astro:17` and test-file refs are comments/assertions, not live hrefs). PRAISE P-001.
- [ ] AC11 (Lighthouse/axe/zero-added-JS): zero added JS verified (only first-party `ClientRouter`, sanctioned R-009e). Lighthouse + axe NOT VERIFIED locally — CI must validate.
- [~] AC12: CTA copy sources from content — true for `/`, `/why-ai`, `/roles`, `/engagements` (labels in their content JSON). **Exception**: `/onboarding` end-CTA lead prose and booking label are hardcoded in `onboarding.astro:124-132`, not in a content JSON file. See F-102.

### `meta/specs/pages/onboarding.md` §8

- [x] Route renders at `/onboarding/` (trailing-slash) — `dist/onboarding/index.html`, sitemap `<loc>https://pouk.ai/onboarding/</loc>`.
- [x] IA units present and ordered (hero → phase index → 4 phases → end CTA → footer) — `onboarding.astro:78-134`.
- [x] Four phases in order Discovery → Scoping → Build → Handoff — array + schema-enforced order.
- [x] Anchor IDs match `id` slugs — `<section id={phase.id}>` (`onboarding.astro:103`), built H3s confirm `#discovery/#scoping/#build/#handoff`.
- [x] Phase index renders four anchor links to phase anchors — `onboarding.astro:86-93`, `<nav aria-label="Engagement phases">`.
- [~] Deep-link anchors scroll above fold — structurally correct (`id` on each `<section>`); visual above-fold-post-scroll NOT runtime-verified.
- [x] Exactly one `<h1>`; phases as `<h2>`/section headings, no skipped levels — built outline H1→H2→4×H3. Clean.
- [x] Prospect-facing copy; no "first client" section — verified in `onboarding.json` bodies.
- [x] Each phase names a concrete deliverable — Discovery Brief / SOW / working production system / live walkthrough + day-30 check-in.
- [x] No dollar figure/day-rate/currency/numeric price anywhere — `grep` of built HTML finds zero price tokens; schema `noPriceLanguage` refine guards it.
- [x] "seamless" absent — `grep` clean.
- [x] Brand-voice: no fake-plurality team "we", no aphorisms — bodies read operator-first.
- [x] `/engagements` → `/onboarding` hand-off present — `engagements.astro:87-90`, rendered "How we work together →".
- [x] End CTA via contact-flow, wording differentiated — "Now you know how the work runs…" distinct from the other four (audit table in content draft §4).
- [x] `/onboarding` in footer utility tier (not primary nav) + sitemap — `ShellWrapper.tsx:50`; `currentRoute={undefined}` so no nav item is current.
- [x] Content in `src/content/onboarding.json`, Zod-validated, 4 phases, fixed order, no price fields — `_schemas/onboarding.ts`.
- [ ] Lighthouse mobile / axe — NOT VERIFIED locally; CI must validate.
- [x] No client JS beyond sitewide BaseLayout posture — only `ClientRouter` (R-009e).
- [x] `prefers-reduced-motion` — no composition-authored motion on the page; DS hover transitions gated by the `tokens.css` `:root !important` block.
- [x] axe route added to all four CI lists — confirmed 1 occurrence each in `ci.yml`, `.lighthouserc.json`, `tab-order.spec.ts`, `visual.spec.ts`.
- [x] title/description/canonical correct — `onboarding.astro:42-46`; canonical `https://pouk.ai/onboarding/`.

### `meta/specs/content/onboarding.json.md` §8

- [x] File exists, array length 4, required fields present, `index` 1–4 in order, `id`/`title` canonical order — schema `superRefine` enforces all; build parses clean.
- [x] No price field; categorical pricing posture in `phases[1].body` (Scoping) — "transparent SOW, milestone-based payments", no numerals.
- [x] `body`/`deliverable` mutually distinct (blur guard) — schema enforces deliverable uniqueness; bodies distinct per content draft §4 blur table.
- [x] Validated by Zod at `_schemas/onboarding.ts`; page imports the parsed result, no `as any`.
- [x] No per-phase `cta`/`image`/`icon`/`featured`; field lengths within bounds.

## Composition parity

### `meta/compositions/pages/onboarding.md`

- [x] DS primitives match §2: `<Hero size="display">`, typographic phase-index `<nav>` with `<Link variant="quiet">`, `<FailureModeList>` + `<FailureMode>`, `<Section size="tight">`, `<EmailLink>` + booking `<a>`. No improvised substitutions.
- [x] Section order matches the composition (hero → index → 4 phases → end CTA).
- [x] `deliverable` folds into `<FailureMode>` children as `<strong>`-led closing line (A2); `duration` as muted lead-in (A3) — `onboarding.astro:105-113`.
- [x] Icon picks match §5 — none (typographic register). Confirmed no Lucide imports.
- [x] Motion §4 — zero composition motion; reduced-motion satisfied trivially.
- [ ] **Hero eyebrow divergence.** Composition §2 Section 2 specifies `eyebrow="Onboarding"` / "How we work together"; content draft §2 authors `How we work together`. The shipped Hero **omits the eyebrow** (`onboarding.astro:73-82`), justified inline as a DS constraint (default Hero variant has no eyebrow slot; eyebrow only on `variant="no-title"`). The composition also assumed `variant="no-title"` was not in play. This is a defensible read of the DS (snapshot line 366: eyebrow is `no-title`-only, which has no `<h1>`), but it is a silent divergence from the composition's stated recipe. See F-101.

### `meta/compositions/components/booking-affordance.md`

- [x] Context A (button-beside-button) on `/` only — `HomeHero.tsx:78-86`. Confirmed the only booking `<Button>` site-wide.
- [x] Context B (muted link) on `/why-ai`, `/roles`, `/engagements`, `/onboarding` — confirmed rendered.
- [x] Order: `mailto:` primary first, booking second — every surface.
- [x] Footer utility tier via `<Footer links[]>` — resolves the §6 *conditional* DS gap (the secondary-link-row IS a free `<a>` slot; `FooterLink[]` accepts arbitrary href + `external`). No DS proposal needed. PRAISE P-002.

## Masterplan & boundary compliance

- [x] No imports from `poukai-ui/` source — all DS imports are from `@poukai-inc/ui` (R-005).
- [x] No site-side primitives duplicating DS responsibility — `.booking-link`/`.phase-deliverable`/`.phase-duration` are token-applying classes, not new primitives.
- [x] No new design tokens/fonts/colors — composition confirms existing-token applications only (not re-verified against `site.css` diff this pass, but no token files changed in the diff).
- [x] No `client:*` directives added — diff grep clean (R-078).
- [x] No new route outside the masterplan inventory beyond `/onboarding`, which has an Approved PM spec and an R-007 amendment (12→13).
- [x] No DS-source workspace path leak.

## Build & metrics

- Build (`pnpm build`): **GREEN** — 13 pages, 1.66s, observed this session.
- TypeScript (`astro check`): **clean** — exit 0, observed this session.
- Unit tests (`pnpm test`): **5 passed** — `HomeHero.test.tsx` covers the button-pair (2 anchors, mailto primary + booking secondary).
- Lighthouse mobile: **NOT VERIFIED — CI must validate** (R-013/R-056: Perf ≥ 95, A11y/BP/SEO = 100 on all 13 routes incl. `/onboarding`).
- Axe violations: **NOT VERIFIED locally — CI must validate** (R-029/R-057, route now in the axe list).
- HTML weight on `/`: not re-measured this pass; `/` HTML only gained one secondary Button anchor — negligible. `/onboarding` gzips ~ within band (compressor reports 15.86% reduction, comparable to peers).
- og:type on `/onboarding`: **`website`** (parsed exactly from built HTML) — not Article. Correct.
- JSON-LD on `/onboarding`: HowTo with `step[]`; **no `price`/`offers`/`dayRate` fields** (grep clean). FS-OB-1 honored in structured data.

## Code quality

- Semantic HTML / heading hierarchy: clean H1→H2→H3 on `/onboarding`; each phase wrapped in `<section id>` with `aria-label`; phase index is a labelled `<nav>`. Good.
- Typed frontmatter / explicit interfaces: `onboardingSchema.parse()` gives a typed array; `HomeHeroProps` extended with `bookingLabel`. No `as any` in page templates.
- One typing smell: `currentRoute={undefined as unknown as string}` (`onboarding.astro:69`) double-casts to satisfy the prop type for an off-nav page. Functionally correct (no nav item marked current) but the cast is a NIT — see F-201.
- No `!important`, no deep selectors, 2-space indentation, section comments present and genuinely useful (the file header enumerates every honored decision). No `console.log`/dead code in the diff.

## Security & supply chain

- New dependencies: **none.** `src/lib/booking.ts` is a one-line first-party constant; `<Footer>` is an existing `@poukai-inc/ui` export.
- Lockfile delta: none in the diff.
- Secrets/tokens: none committed.
- New runtime third-party origin: none — `cal.pouk.ai` is a link target (navigation), not a runtime fetch; not a CSP `connect-src`/`script-src` concern (R-050 unaffected). The footer/end-CTA anchors carry `rel="noopener noreferrer"` where `external`.

## Findings

### BLOCK
None.

### REQUEST_CHANGES
- **F-101 — `/onboarding` Hero eyebrow silently dropped vs. composition** (`onboarding.astro:73-82`): the Approved spec §4 IA item 2 and the composition §2 both specify an eyebrow ("Onboarding" / "How we work together"); the content draft authors it. The build omits it, justified by a real DS constraint (eyebrow renders only on `Hero variant="no-title"`, which emits no `<h1>` — snapshot line 366). The engineer's call preserves the single-`<h1>` AC, so it is defensible, but it is a divergence from the composition recipe that should be ratified, not assumed. Suggested fix: either (a) Arian/designer confirm "eyebrow carried by `<title>` + `FailureModeList` eyebrow is acceptable" and the composition is annotated, or (b) the eyebrow renders via the DS-correct mechanism if one exists in the installed version. Surfaces a designer/DS question — recommend resolution before merge or an explicit Arian waiver.
- **F-102 — Governing content drafts are still `Draft`, not `Approved`; `/onboarding` chrome copy is hardcoded** (`meta/content/drafts/features/contact-flow.md` front-matter `status: Draft`; `meta/content/drafts/pages/onboarding.md` `status: Draft`; `onboarding.astro:124-132`): per the reviewer content-trace rule, shipped copy should trace to an `Approved` draft. Both drafts are v0.1 awaiting Arian. The phase bodies (in `onboarding.json`) and CTA labels match the drafts verbatim, so this is a status/process gap, not a substance divergence — but the open questions in each draft (contact-flow Q1-Q4: `grab` vs `book`, the `/why-ai` three-affordance block, the `/onboarding` micro-variation; onboarding Q1-Q5) are unresolved, and the build has pre-committed to the *recommended* option for each (`grab a time`, three-affordance block, "skip the email" micro-variation). Additionally, the `/onboarding` end-CTA lead and booking label live as JSX literals (`onboarding.astro`), not content JSON — a soft R-076/`contact-flow` AC12 drift the spec permits ("page-template prose, engineer's call") but worth noting for consistency with the other four surfaces, which source labels from JSON. Suggested fix: Arian flips both drafts to `Approved` (ratifying the recommended options the build assumes), or the engineer adjusts to whatever Arian decides on the open questions.

### NIT
- **F-201 — `currentRoute={undefined as unknown as string}` double-cast** (`onboarding.astro:69`): functional but a type smell. If `BaseLayout`'s `currentRoute` prop were typed `string | undefined`, the cast would be unnecessary. Engineer's call; not blocking.
- **F-202 — Footer booking link label lacks an external-destination cue** (`ShellWrapper.tsx:52`): DS guidance (snapshot line 1429) says do not pass `external: true` without a label communicating the external destination (e.g. `GitHub ↗`). "Book a time" is a clear action but gives no off-site signal. Minor; the `target="_blank"` + a11y `(opens in new tab)` span (if the DS emits it) mitigates. Consider a trailing `↗` if Arian wants strict DS-convention adherence — but note the booking-affordance composition deliberately strips the arrow in the footer utility register, so this is a genuine tension between two approved sources; flag, don't force.

### PRAISE
- **P-001 — Single-source `BOOKING_URL`** (`src/lib/booking.ts`): exactly the R-076-spirit shared constant the spec asked for; all five consumers import it, zero hardcoded booking literals. A future URL change is one line.
- **P-002 — Footer migrated to the DS `<Footer>` organism** (`ShellWrapper.tsx:44-55`): replacing the hand-rolled `<p>` link list with `<Footer links[] linksLabel>` is the correct DS-native move, gives the footer nav a proper `<nav aria-label>` landmark, and cleanly resolves the booking-affordance §6 conditional DS gap (the secondary-link row accepts arbitrary anchors). Improves a11y landmark structure beyond what the diff strictly required.

## Open questions

- Lighthouse and axe-core were not run locally (no preview deploy this session). The 13-route gates (R-013/R-029/R-056/R-057) must be confirmed GREEN on the Vercel preview — particularly axe on the new `/onboarding` `<nav aria-label="Engagement phases">` + `<FailureMode>` register, and Perf ≥ 95 with the added footer `<nav>` on every page.
- F-101: is the dropped Hero eyebrow an acceptable composition divergence (Arian/designer call)?
- F-102: will Arian flip the two content drafts to `Approved` as-shipped (ratifying the recommended options), or do any open questions (contact-flow Q1-Q4, onboarding Q1-Q5) change the shipped copy?

## Per-decision verdict (locked decisions 1–8)

1. **Register split** — PASS. `/` Hero = secondary `<Button variant="secondary">` beside email Button (`HomeHero.tsx:83-85`); `/why-ai`, `/roles`, `/engagements`, `/onboarding` = muted `<a class="booking-link">` (not button) beside the email link. Confirmed in built HTML.
2. **Copy** — PASS. `Or grab a time →` in-sentence (home/why-ai/roles/engagements); `Or skip the email and grab a time →` on `/onboarding`; `Book a time` in footer; `mailto:` remains primary everywhere. (Copy still `Draft` — see F-102.)
3. **`/` Hero present-but-quiet; `/why-ai` adds booking + keeps `Roles →`** — PASS. `/why-ai` renders the email+booking conversion pair on line 1 and `Roles →` as a separate navigational line 2 (built HTML confirms).
4. **Single `BOOKING_URL`** — PASS. `src/lib/booking.ts`; no hardcoded duplicate (only the `/scheduling` app-link, a separate governed field, and test assertions).
5. **Hard exclusions** — PASS. No body booking on `/principles`, `/about`, `/privacy`, `/terms`, `/scheduling`; no per-rung booking on `/engagements`; no per-card booking on `/roles`. (The global footer "Book a time" appears on all pages by design — contact-flow §4 row 7 — which is correct, not a violation.)
6. **Zero-JS** — PASS. Booking affordances are plain `<a>` / `<Button asChild><a>`; no widget/island/modal; no `client:*` added; `/onboarding` ships only the sanctioned first-party `ClientRouter` (R-009e).
7. **`/onboarding` specifics** — PASS. `og:type=website` (parsed exactly), HowTo JSON-LD with no price/offers, categorical pricing (no figures — grep clean), footer-utility (not primary nav, `currentRoute=undefined`), `/why-ai` numbered-section register (`FailureModeList`/`FailureMode`), clean H1→H2→H3, trailing-slash canonical. (Eyebrow divergence is F-101, REQUEST_CHANGES, not a fail of this decision's enumerated items.)
8. **Route plumbing** — PASS. `/onboarding` in sitemap + all four CI route lists (axe/lhci/tab-order/visual); R-007 amended to 13 routes (`technical-requirements.md` §2 table + R-007 text).

## Recommendation

**APPROVE**, conditional on clearing two REQUEST_CHANGES process items and CI confirming the runtime gates. The engineering is clean: all eight locked decisions are honored in the shipped artifact, the build/typecheck/unit tests are green, boundary discipline holds, no new dependencies or third-party origins, and the two genuinely good moves (single-sourced `BOOKING_URL`, DS-native `<Footer>` migration) raise the bar. There are **no BLOCKER findings**. Before merge: (1) Arian flips the two content drafts to `Approved` so the shipped copy traces to a ratified source and the drafts' open questions are closed (F-102); (2) Arian/designer ratify the `/onboarding` Hero eyebrow omission or the engineer restores it via a DS-correct mechanism (F-101). And the preview deploy must show Lighthouse ≥ 95 / 100 / 100 / 100 and axe 0 across all 13 routes (NOT VERIFIED locally). The verdict is a recommendation; the merge decision is Arian's.
