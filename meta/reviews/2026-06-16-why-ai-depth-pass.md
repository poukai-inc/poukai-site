# Review: /why-ai full depth-pass (5 deltas — raise-the-ceiling)

**Diff range**: working tree vs `HEAD` (`efa4d32`) on `explore/raise-the-ceiling`
**Author**: pouk-ai-engineer
**Reviewer**: pouk-ai-reviewer
**Date**: 2026-06-16
**Recommendation**: PASS-WITH-NITS (recommend APPROVE on the /why-ai deltas; one out-of-scope ride-along to split out — see F-101 below)
**Governing spec(s)**: `meta/specs/pages/why-ai-amendment-raise-the-ceiling.md` (§2 render order, §4.1–§4.6 ACs, §3 failure modes) over base `meta/specs/pages/why-ai.md`
**Composition**: `meta/compositions/pages/why-ai.md` (In review 2026-06-16)
**Approved copy**: `meta/content/drafts/features/vs-alternatives.md` (Approved 2026-06-16); `meta/content/drafts/features/statement-beats.md` /why-ai pivot line + coupled closing
**Standards**: `meta/standards/technical-requirements.md` — R-009, R-013, R-024/R-025/R-026, R-030, R-037, R-074, R-076, R-079
**Masterplan references**: §2A (repo boundaries), §4.3 (hydration discipline), §4.4 (long-form content as data)

---

## Summary

Five deltas land on `/why-ai`: Hero `entrance="stagger"`; the hand-rolled opening `.stats-row` refactored to `<StatsSection fill dividers>` (the page's one `--surface-section` band); the five `FailureMode`s wrapped in `<FailureModeList heading lede>`; a `<Statement>` thesis pivot with a coupled `whereWorks.closing` edit; and a new vs-alternatives differentiation section rendered as `<PrincipleList>` + three `<Principle>`s inside the `whereWorks` block, with `discoveryIntro` repositioned. Schema + JSON extended with `statement` and `vsAlternatives` keys. I verified the built `dist/why-ai/index.html`, the running dev server, the diff, the schema, lint, tests, and typecheck independently — I did not rely on the engineer's summary. The /why-ai work is faithful to spec, composition, and the Approved copy, **verbatim**, and clean on every hard gate I could check locally. The only blocker-class concern is process, not the page: an unrelated `src/content/roles.json` copy rewrite is staged in the same working tree with no governing spec/draft cited and is outside this review's 5-delta scope (F-101). Lighthouse and axe require CI (no local tooling); everything else passes.

## Spec parity (`why-ai-amendment-raise-the-ceiling.md` §4)

### §4.1 Hero stagger
- [x] Hero renders `entrance="stagger"`, DS-default `size="display"` retained — `why-ai.astro:89`. CSS-only choreography; reduced-motion collapse is DS-owned (`:root !important` block, ds-snapshot L154). Zero JS added. Verified: built HTML `<script>` set is JSON-LD + ClientRouter only.

### §4.2 Recessed stats band (W-A)
- [x] Opening stats render via `<StatsSection fill dividers>` replacing `<div class="stats-row">` — `why-ai.astro:113-117`. Diff confirms the hand-rolled wrapper is gone (Section 3 now ends on the `pivot` `<p>`).
- [x] Stat content unchanged — same four figures (12–18% / 85% / 15% / $300B), same `source` strings, same superscript round-trip. JSON `openingArgument.statsRow` untouched.
- [x] **Page's only `fill` band — definitively verified.** The fill class is `.poukai_SVfaGq{background:var(--surface-section)}`. It is **applied exactly once** in built `dist/` (the opening StatsSection) and once in the running dev server's body (the second dev occurrence is the inlined CSS rule *definition*, not a second application — confirmed by line inspection). The quartile StatsSection carries `poukai_B9Kv1X poukai_RXha5X` **without** `SVfaGq`. One band. W-A floor honored.

### §4.3 FailureModeList refactor
- [x] Five `FailureMode`s wrapped in `<FailureModeList heading lede>` — `why-ai.astro:125-145`. Standalone `<h2>`+`<p>` moved into the organism; flat `.failure-modes-section` div gone.
- [x] Anchors retained (`#data-readiness`, `#wrong-use-case`, `#integration`, `#governance`, `#change-management`) on per-mode `<section id aria-label>` wrappers — confirmed in built HTML section list. Per-mode `.stats-row` inline stats preserved (not converted to nested StatsSection — correct, avoids extra bands).
- [x] Same five modes, same order (sorted by `index`), content from `failure-modes.json` unchanged (render-only refactor).

### §4.4 Thesis Statement pivot
- [x] Exactly one `<Statement>` on the page — `why-ai.astro:150`, between `FailureModeList` and the leaders `<h2>`. Built-HTML order: FailureModeList → Statement → "What the leaders do differently" (positions 15696 → 20660 → 20730). On `--bg`, not adjacent to the fill band. `hairline={false}` default (DS default; matches composition A4).
- [x] Conviction line is a promotion, no new claim, no stat/attribution/quotes. Statement emits no heading element (DS `Statement` is not a heading — ds-snapshot L406; built HTML shows no extra `<h>` at the pivot).
- [x] Tail prose reads cleanly with the line removed: `whereWorks.closing` is now the approved non-conviction handoff `Those four answers decide what — if anything — gets built.` `pivot` ("This is the gap pouk.ai works in.") still leads the band cleanly.

### §4.5 / §4.5a vs-alternatives
- [x] Single differentiation section after `whereWorks.body`, before the discovery blockquote (IA beat 12 corrected) — `why-ai.astro:179-197`. Built-HTML order: WHEREWORKS_BODY → VS_H2 → VS beats → VS_CLOSING → DISCOVERY_INTRO → DISCOVERY_Q1 → WHEREWORKS_CLOSING. Exactly the §2 item 12 / §4.5a sequence.
- [x] Names all three alternatives (DIY / generic AI agency / in-house) each with honest "right when / pouk.ai when" framing.
- [x] Categorical only — no figures, no Stat atoms, no superscripts in the section (programmatically verified: 0 `Stat`, 0 `<sup>`/footnote-ref in the VS region). Adds no References entries.
- [x] DIY-self objection addressed (the `/roles` Builder reciprocal). F-101 link reciprocity: `<h2>` is `When to hire pouk.ai — and when not to`, answering the homepage link "See when to hire us, and when not to →" (`home.json:35-36`) on register — not a bare "How pouk.ai compares."
- [x] Must-not-duplicate: introduces the DIY/agency/in-house comparison present nowhere else; does not re-list failure modes or paraphrase `whereWorks` fit prose.
- [x] No comparison-table read: 0 `<table>`, 0 grid, no check/cross iconography, no fill band in the VS region. Single-column `<ol>` of three `<Principle>`s (PrincipleList is `<ol>`-based — ds-snapshot L395-398). Engagements no-band precedent honored.
- [x] Composition vehicle: `PrincipleList` + `Principle` — the designer's elected vehicle (composition §2 Section 9 / §6). No new DS primitive. Both ship in `@poukai-inc/ui@2.17.0`.
- [x] Content-data shape (§4.5a): `vsAlternatives` key added to JSON + `whyAiSchema` with `heading`, `leadIn`, `alternatives.length(3){name,rightWhen,poukaiWhen}`, `closing`; no stat/citation field. Distinct from `whereWorks.closing` (not collapsed). `discoveryIntro` repositioned to immediately precede the blockquote without orphaning `whereWorks.closing` (A6 elected).

### §4.6 Quality
- [ ] Lighthouse mobile 100/100/100 + Perf ≥ 95 — **NOT VERIFIED locally** (no `.lighthouserc`/runner invoked here). CI must validate (R-013).
- [x] Zero client-side JS — built `<script>` set is JSON-LD + ClientRouter (R-009 clause e, sanctioned). No `client:*`, no scroll-reveal, no stat count-up. Only motion is the CSS Hero stagger (R-079 holds).
- [ ] axe-core 0 violations — **NOT VERIFIED locally** (no axe/pa11y binary in `node_modules`). CI must validate (R-029). Manual outline check is clean (below).
- [x] Heading hierarchy (R-026): one `<h1>`, then `<h2>`×5 in order (FailureModeList / leaders / whereWorks / vs-alternatives / References), `<h3>`×8 (5 FailureMode titles + 3 Principle titles). VS region shows exactly three `<h3>`: "Doing it yourself", "A generic AI agency", "Hiring in-house". No skipped level. Statement and both StatsSections emit no heading.

## Composition parity (`compositions/pages/why-ai.md`)

- [x] DS primitives match §2 (Hero stagger, StatsSection fill/no-fill, FailureModeList, Statement, PrincipleList+Principle) — no improvised substitutions.
- [x] Section order matches §2 / §3 cross-section rhythm exactly (verified against built-HTML positions).
- [x] Band placement: one fill band (opening), quartile + Statement + vs-alternatives all on `--bg` (A7).
- [x] Icon picks (§5): none — type-only page preserved; FailureMode Arabic indices, Principle Roman numerals, no Lucide glyphs.
- [x] Motion (§4): one CSS-only Hero entrance, nothing on scroll; `prefers-reduced-motion` DS-owned. Respected.
- [x] Mobile collapse: PrincipleList is single-column `<ol>` at all widths (no grid to collapse); StatsSection stacks; TOC hidden < 1024px. Composition §"Mobile collapse" honored structurally.
- [x] discoveryIntro adjacency resolution (§2 Section 10 / A6): elected and implemented.
- [x] Sticky TOC scoped to failure-mode anchors only — no vs-alternatives entry (composition §8). Confirmed `why-ai.astro:260-267`.

## Content trace (verbatim)

Programmatic substring match of `why-ai.json` against the Approved drafts:
- [x] vs-alternatives `heading`, `leadIn`, all three `{rightWhen, poukaiWhen}`, and `closing` — **all match `vs-alternatives.md` §2 verbatim**.
- [x] Statement `Diagnosis before the build — the order pouk.ai works in.` — the approved Sharpest line (`statement-beats.md` §2/§5).
- [x] `whereWorks.closing` `Those four answers decide what — if anything — gets built.` — the approved coupled tail edit.
- Em-dashes are correct here (OMC-V4 ratified for /why-ai); not flagged.

## Masterplan & boundary compliance

- [x] No imports from `poukai-ui/` source — only `@poukai-inc/ui` package imports (`why-ai.astro:31-40`).
- [x] No site-side primitives duplicating DS responsibility — the refactor *removes* hand-rolled markup in favor of DS organisms.
- [x] No new design tokens, fonts, or color values — all spacing/surface is DS-organism-internal or published `--space-N`/`--surface-section`.
- [x] No hydration directives added (R-079 / R-009).
- [x] No new routes — vs-alternatives is a section on `/why-ai`, not a route (resolved §6).
- [x] R-074/R-076: all copy in `why-ai.json`, validated by `whyAiSchema`; no JSX copy literals introduced.

## Build & metrics

- Build (`pnpm build`): **GREEN** — 13 pages in 1.81s, exit 0.
- TypeScript (`pnpm exec astro check`): **clean** — 0 errors, 0 warnings, 0 hints (49 files).
- Lint (`pnpm lint`, eslint `--max-warnings=0`): **clean** — no issues.
- Tests (`pnpm test`, vitest): **25 passed (4 files)**. (Note: all four suites are `Home*` component tests; there is no /why-ai render test — see F-203.)
- Built HTML `<script>` set: JSON-LD + ClientRouter only — within R-009.
- HTML weight on `/why-ai`: 29.2 kB pre-compression, ~6.1 kB saved on compression (~35 kB raw / compresses well). Within the page-weight envelope; CI HTML-weight gate (R-015) should still assert.
- `--surface-section` fill band applications: **1** (dist authoritative).
- References round-trip (D-01): 4 `ref-` ids ↔ 4 `cite-` ids, unchanged. `references.length(4)` and the citation `superRefine` intact.
- Lighthouse / axe: **NOT VERIFIED — CI must validate** (no local runner/binary).

## Code quality

- [x] Semantic HTML, correct heading hierarchy, per-mode landmark sections retained.
- [x] Typed Astro frontmatter; `whyAiSchema.parse` at the top; explicit destructure.
- [x] No `!important`, no deep selector nesting introduced (no new CSS in this diff).
- [x] Section comments are clear and cite the governing §; 2-space indentation.
- [x] No `console.log`, no dead code, no commented-out experiments.

## Security & supply chain

- New dependencies: **none**. Imports are additional named exports from the already-present `@poukai-inc/ui`.
- Lockfile delta: none in this diff.
- Secrets/tokens: none committed.

## Findings

### BLOCK
None on the /why-ai deltas.

### REQUEST_CHANGES
- **F-101 — Out-of-scope `roles.json` rewrite riding along** (`src/content/roles.json`): all four role cards (`body` + `hiredBy`) are rewritten in the same working tree. This is **not one of the five /why-ai deltas** and is not covered by the governing spec/composition for this review. It also has no cited governing spec or Approved content draft in the task framing. Recommend: split this into its own commit/review with its own content-draft trace before merge, or have Arian confirm it is in-scope and point to the Approved `/roles` copy draft. The copy reads on-voice, but content parity is not mine to assume — it needs a draft trace (precedence source #3). Not a page-break; flagged as process drift, not a /why-ai defect.

### NIT
- **F-201 — `statement-beats.md` is still `status: Draft`** (`meta/content/drafts/features/statement-beats.md:4`): the specific /why-ai line and coupled closing carry an inline `[APPROVED by Arian 2026-06-16 … Cleared for build]` annotation (L58) and are independently ratified by the Approved amendment §4.4 and the Approved `vs-alternatives.md` sibling, so the shipped copy *is* traceably approved. But the draft's top-level status contradicting its own inline approval is a hygiene smell. Recommend flipping the draft header to `Approved` (or `Partially approved — /why-ai line ratified`) so a future reviewer isn't forced to reconcile it. Content's lane.
- **F-202 — Composition status is `In review`, not `Approved`** (`meta/compositions/pages/why-ai.md:4`): the build implements it faithfully and the amendment is Approved, but per the pipeline a page-implementing change should ship against an `Approved` composition. The composition's §7 Q1–Q3 are answered by the shipped JSON (closing dropped-then-replaced = Q1; W-A = Q2; discoveryIntro reposition = Q3). Recommend Arian close §7 and flip to `Approved` to keep the paper trail tight. Non-blocking.
- **F-203 — No /why-ai render test** (`src/`): the only vitest suites are `Home*`. The /why-ai deltas (one-band invariant, render order, no-Stat-in-vs-alternatives) are exactly the kind of regressions a small render assertion would catch cheaply. R-058 only requires coverage on changed files *when tests exist* for them, so this is not a gate — but a single test asserting "exactly one `--surface-section` application" would lock the W-A floor against future drift. Engineer's call.

### PRAISE
- The one-band invariant is implemented with real discipline: `fill` on the opening StatsSection only, quartile StatsSection deliberately transparent, and the per-mode inline stats correctly left as `.stats-row` rather than nested StatsSections that would have painted extra bands. This is the single most error-prone part of the spec and it is exactly right.
- The vehicle choice (`PrincipleList`, an `<ol>`) makes the "no comparison-table / no dunking" guardrail structural, not merely behavioral — there is nowhere for a grid or a check/cross column to live. Good defense against the §3 failure mode.
- Verbatim copy fidelity to the Approved draft across a large block of prose, including the coupled `whereWorks.closing` edit applied atomically with the Statement promotion — no dangling reference left behind.

## Open questions

- **OQ-A (Arian)** — Is the `roles.json` rewrite (F-101) intended to ship in this release, and if so, which Approved content draft governs it? If it is a separate workstream, it should be unstaged/split from the /why-ai depth-pass merge.
- **OQ-B (Arian)** — Confirm Lighthouse (R-013) and axe (R-029) pass on the preview deploy; both are NOT VERIFIED locally (no runner/binary present). These are the only two §4.6 ACs I could not close.

## Recommendation

**PASS-WITH-NITS on the /why-ai depth pass — recommend APPROVE for merge of the five deltas, contingent on (1) CI confirming Lighthouse + axe (OQ-B), and (2) resolving the out-of-scope `roles.json` ride-along (F-101) — either split it out or supply its content-draft trace.** The five deltas are faithful to the Approved amendment, the composition, and the Approved copy verbatim; the one-band W-A invariant, render order, heading hierarchy, zero-JS contract, and D-01 round-trip all verify clean against the built output and the running server; build, lint, typecheck, and tests are green. Nothing on `/why-ai` blocks. The only reason this is not an unqualified APPROVE is the unrelated `roles.json` change sitting in the same tree without a governing draft and the two CI-only metrics I cannot run locally — none of which is a defect in the page under review. The verdict is a recommendation; the merge decision is Arian's.
