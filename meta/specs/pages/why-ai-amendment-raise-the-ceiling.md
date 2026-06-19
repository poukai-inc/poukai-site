# Amendment: Why AI — Raise the Ceiling (depth + thesis Statement + vs-alternatives)

**Route**: `/why-ai`
**Status**: Approved — Arian ratified the FULL depth pass (all 5 deltas: Hero stagger, stats band, FailureModeList refactor, Statement pivot, vs-alternatives) on 2026-06-16. vs-alternatives is release-coupled to the destination homepage (F-101).
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-15
**Branch context**: `explore/raise-the-ceiling`
**Amends**: [`meta/specs/pages/why-ai.md`](./why-ai.md) (Approved) — authoritative for everything not delta'd here. All IA items 1–14 and ACs in the base spec stand except where this amendment inserts beats or refactors hand-rolled markup into DS organisms.
**Source assessments**: `meta/assessments/creative-exploration.md` §2 (Direction W-A "The diagnosis lands", signature moment, W-B band budget), `meta/assessments/ds-capability-vs-usage.md` §2 #2/#3/#4 (surface-band rhythm, `StatsSection`/`FailureModeList` refactor, `Statement` thesis beat), `meta/assessments/sales-content-gaps.md` §4 #2 (vs-alternatives placement, honest trade-off framing).
**Masterplan reference**: §2A (repo boundaries), §4.4 (long-form content as data), §6 (cutover).
**Companion content-data spec**: `meta/specs/content/failure-modes.json.md` (Approved) — unchanged by this amendment (the refactor is a render/organism change, not a data-shape change).

> **Superseded by the 2026-06-16 JS revocation (D-25, `meta/decisions/2026-06-16-revoke-zero-js.md`).** This amendment's "zero client-side JS" ACs (§8: the Hero-stagger no-JS clause, the "Zero client-side JS" `<script>`-grep AC, the Lighthouse 100/100/100/100 AC) and the "no scroll-triggered reveals (costs JS, breaks zero-JS)" out-of-scope item are no longer binding. Client JS is now permitted without restriction; Lighthouse is advisory, not gating. The reduced-motion and axe accessibility ACs DO survive and remain binding. Clauses left in place pending a full ACs rewrite; do not block a JS-introducing change on them.

---

## 1. Amendment scope

`/why-ai` is the strongest persuasion page on the site and the flattest in execution — one `--bg` plane top to bottom, every "by the numbers" moment hand-rolled, no editorial spine. This amendment gives the argument depth and a stated conviction, and adds the one explicit differentiation surface the sales audit calls for, all pure-site (DS organisms the page should already be using; no new tokens, no new DS primitive, no fabricated proof). Five delta's:

1. **Hero stagger.** Add `entrance="stagger"` to the (already `display`-default) Hero so the diagnosis page *arrives*. (Creative W-A beat 1.)
2. **Recessed stats band (W-A).** Replace the hand-rolled `<div class="stats-row">` opener with `StatsSection fill dividers` — the page's first depth event, the "by the numbers" moment recessed into the page like a quoted exhibit. (ds-capability #2 + #3.)
3. **DS-organism refactor.** Wrap the five `FailureMode` molecules in `FailureModeList` (named landmark region) instead of the hand-rolled flat column. (ds-capability #3.)
4. **Thesis `Statement` pivot.** Promote the page's existing tail conviction line ("the diagnosis comes before the build — the order pouk.ai works in") to a `Statement` molecule at the pivot from "what's broken" to "what the leaders do." Once per page, italic-serif, at `--fs-statement`. (ds-capability #4 / creative W-A signature moment.)
5. **vs-alternatives section (sales-gap #2).** A new differentiation beat — honest trade-off framing (DIY / agency / in-house hire vs. pouk.ai), categorical, no competitor-bashing — folded into `/why-ai` (resolved placement; **not** a new route). See §4.5, §4.5a (content-data shape), and the resolution note in §6. **This delta is the payoff for the destination homepage's "See when to hire us, and when not to →" link (review F-101); it is the one delta forced into the homepage release — see §5 release-coupling.**

> **2026-06-15 F-101 pass (delta against this amendment's own first cut).** This amendment's vs-alternatives slice was sharpened for the destination release: (a) the placement was corrected to the **real shipped section keys** — there is no `consulting-angle` key; the beat sits inside/around `whereWorks` (§2 item 12, §4.5 correction note, §4.5a); (b) a **link-reciprocity AC** was added so the section answers the homepage link verbatim (§4.5); (c) a **no-comparison-table AC** was added applying the `/engagements` restraint precedent (§4.5); (d) a **content-data-shape** sub-section was added (§4.5a, R-076); (e) a **release-coupling** dependency was added (§5). The other four deltas (§4.1–§4.4) are unchanged by this pass.

Everything else in the base spec — the cited stats and superscript/References round-trip (D-01), the sticky TOC (D-02), the discovery-questions blockquote (D-04), the stats extraction to `failure-modes.json` (D-05), the "Last reviewed" footer (D-03), the dual end-CTA — stands.

---

## 2. Information architecture (revised render order — delta against base §4)

The base spec's IA items 1–14 are the baseline. This amendment revises the render of items 4, 6, inserts two new beats, and refactors hand-rolled wrappers into DS organisms. Revised order:

1. `SiteShell` — unchanged (Why AI marked current).
2. `Hero` — **now `entrance="stagger"`** (DS-default `display` size retained; status/eyebrow still omitted — this is not the availability surface). Beats: eyebrow "Why AI", thesis title, lede.
3. Sticky right-rail TOC (desktop ≥ 1024px) — unchanged (CSS-only, D-02).
4. Opening argument prose + inline cited stats — prose unchanged; the headline stats that were hand-rolled into `.stats-row` now render via **`StatsSection fill dividers`** (the recessed band — see §4.2). This is the page's **one** `fill` band.
5. Section heading "Why projects fail — the five failure modes" — unchanged `<h2>`.
6. **`FailureModeList`** wrapping the five `FailureMode` molecules (same content, same anchors `#data-readiness` … `#change-management`, now inside a named landmark organism). (§4.3)
7. **`Statement` — thesis pivot (NEW beat).** Inserted between the failure modes (item 6) and "What the leaders do differently" (item 8). Sits on `--bg` (no band — the page's one band is the stats opener; never two adjacent). (§4.4)
8. Section heading "What the leaders do differently" — unchanged.
9. Leaders pattern + quartile stats — **render the quartile stats as a transparent `StatsSection` (no `fill`)** so the page does not carry two recessed bands (honors "never stack `--surface-section` adjacent; max 5 bands" by using exactly one fill band, beat 4). Content unchanged.
10. Section heading "Where pouk.ai works" — unchanged. *(Render note: the base spec §4 called this "The consulting angle"; the shipped page renders it as the `whereWorks` block — heading + body + `discoveryIntro` — per `why-ai.json` / `why-ai.astro`. Same beat, current key. The vs-alternatives placement below anchors to the **real shipped keys**, not the base spec's superseded label.)*
11. `whereWorks` prose — heading, `body`, and `discoveryIntro` — unchanged.
12. **vs-alternatives section (NEW beat).** Inserted **after the `whereWorks` `body`/`discoveryIntro` prose (real key: `whereWorks`) and before the discovery-questions `<blockquote>`** (real key: `whereWorks.questions`, rendered as the inline italic `<ol>`). In base-spec IA terms this sits after item 10 (consulting angle / now `whereWorks`) and before item 11 (discovery questions). Honest trade-off framing. (§4.5)
13. Discovery questions inline italic `<blockquote>` (`whereWorks.questions`) — unchanged (D-04).
14. End CTA (dual: `mailto:` + booking per `contact-flow.md`) — unchanged.
15. References — unchanged (D-01 round-trip holds; the vs-alternatives section carries **no** new cited stats, so it adds no References entries — see §4.5 guardrail).
16. "Last reviewed" footer line — unchanged (D-03).

**Surface-band budget (W-A floor):** exactly **one** `fill` band on the page (beat 4, the stats opener). The quartile stats (beat 9) and the vs-alternatives section (beat 12) stay on `--bg`. **W-B (two bands) is NOT specified here** — it is recorded in §5 as a fast-follow option Arian can elect if `/why-ai` should read as the site's centerpiece; default is W-A's single band.

---

## 3. Updated success criteria (delta against base §3)

Base framing carries over. Added dimensions:

- **The argument reads as a case, not an essay (new).** With one recessed exhibit (the stats band), one stated conviction (the Statement), and an arrival (the stagger), the page stops reading as a well-set essay and starts reading as a built case. The reader should feel a spine to the scroll.
- **Differentiation is now explicit (new).** A reader silently comparing pouk.ai to DIY / agency / in-house hire finds the comparison named and honestly framed, and leaves unable to default to "I'll just do this with Lovable myself" without having seen pouk.ai's candid answer to that.
- **Failure mode added — "the page performs."** If the band, the Statement, or the stagger read as decoration rather than as clarifying the argument, the move was applied wrong. Depth here must *serve the case* (the recessed band reads as a quoted exhibit; the Statement reads as conviction), never as visual flourish.
- **Failure mode added — "vs-alternatives slides into dunking."** If the differentiation section reads as a competitor-bashing comparison table or a "why everyone else is bad" screed, it breaks the brand's candor-not-dunking posture and is worse than omitting it. The register is "DIY is right when…; pouk.ai is right when…", categorical, generous to the alternatives.

---

## 4. New / revised acceptance criteria

Additive to base §8. The base ACs (route, IA 1–14, superscript round-trip, sticky TOC CSS-only, discovery blockquote, stats extraction, reduced-motion, axe a11y) all still apply except where revised below. (Per D-25 the base spec's Lighthouse and zero-JS ACs are no longer binding — Lighthouse is advisory and client JS is permitted; see §4.6 and the base spec §8.)

### 4.1 Hero stagger
- [ ] The Hero renders with `entrance="stagger"`; choreography collapses under `prefers-reduced-motion: reduce` via the DS `:root !important` block (R-030). Verifier: props inspection + reduced-motion toggle on preview.
  > Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding. The old "No JS added (zero-JS contract holds)" clause is dropped; the reduced-motion collapse remains binding.

### 4.2 Recessed stats band (W-A)
- [ ] The opening headline stats render inside a **`StatsSection`** with the recessed `--surface-section` band (`fill`) and hairline `dividers` between the headline stats — replacing the hand-rolled `<div class="stats-row">`. Verifier: grep `src/pages/why-ai.astro` shows no hand-rolled `.stats-row` wrapper around these stats; the section renders as a `StatsSection` organism with a recessed surface; landmark + `aria-labelledby` present.
- [ ] The stats *content* is unchanged — the same headline figures (12–18%, 85%, 15%, $300B) with the same cited sources and superscript round-trip (D-01). No fabricated or altered numbers. Verifier: visual + References round-trip check.
- [ ] This is the page's **only** `fill` band. Verifier: grep confirms exactly one recessed `--surface-section` band on the page; the quartile stats (beat 9) render as a transparent `StatsSection` (no fill).

### 4.3 FailureModeList refactor
- [ ] The five `FailureMode` molecules render inside a `FailureModeList` organism (named region landmark) instead of a hand-rolled flat column. Same five modes, same order, same anchors (`#data-readiness`, `#wrong-use-case`, `#integration`, `#governance`, `#change-management`), same body content, same extracted `stats` (500% on FM2, 61% on FM5, per D-05). Verifier: DOM shows a single landmark region wrapping five `FailureMode`s; anchors resolve; content parity vs. current build.

### 4.4 Thesis Statement pivot
- [ ] Exactly **one** `Statement` molecule renders on the page, at the pivot between the failure modes and the leaders section (IA beat 7). It renders italic-serif at `--fs-statement` on `--bg` (no band). Verifier: DOM shows one `Statement`; it sits between `FailureModeList` and the "What the leaders do differently" heading; not adjacent to the `fill` stats band.
- [ ] **Conviction outcome the Statement must land (content's lane; placement + intent fixed here).** The line asserts pouk.ai's load-bearing order-of-operations conviction: *diagnosis precedes build; that sequencing is the practice's discipline and the reader's de-risking.* The page's existing tail prose already states this ("the diagnosis comes before the build — the order pouk.ai works in"); the move is to **promote that existing conviction to the `Statement` beat**, not to author a new claim. No new stat, no attribution, no quotation marks. Final wording is Arian's / content's. Verifier (Arian): the shipped line is the page's one raised-voice moment and reads as conviction, not as a header.
- [ ] If the conviction line is promoted out of the tail prose, the tail prose must still read cleanly with the line removed (same discipline as the D-05 stat extraction). Verifier (Arian): the consulting-angle / leaders prose is not left with a dangling reference to the moved sentence.

### 4.5 vs-alternatives section (sales-gap #2)

> **Placement correction (2026-06-15, F-101 pass).** The original §4.5 / §6 placed this section "after the consulting angle." The shipped page (`why-ai.astro` + `src/content/_schemas/why-ai.ts`) has **no `consulting-angle` key** — that beat is the `whereWorks` block ("Where pouk.ai works": `heading` + `body` + `discoveryIntro` + `questions` + `closing`). The corrected placement is: **after `whereWorks.body` + `whereWorks.discoveryIntro`, before the `whereWorks.questions` discovery `<blockquote>`** (and therefore before `whereWorks.closing`). See §2 item 12 and §4.5a (content-data shape). All ACs below read against the real keys.

- [ ] A single differentiation section renders after the `whereWorks` body/discovery-intro prose and before the discovery-questions `<blockquote>` (IA beat 12, corrected). It frames the three alternatives a buyer actually weighs — **DIY (with Lovable/Claude/etc.), a generic AI agency, hiring in-house** — and names, for each, when that choice is *right* and when pouk.ai is right. Verifier: the section names all three alternatives and gives each an honest "right when…" framing.
- [ ] **Honest trade-off register, not a comparison table, not competitor-bashing.** No named-competitor logos, no feature-grid "us vs. them" matrix, no pejorative characterization of the alternatives. The register is categorical and generous ("DIY is right when the workflow is simple and you have the time; pouk.ai is right when the integration is the hard part and shipping-and-supporting matters"). Verifier (Arian): the section would not embarrass pouk.ai if a competitor read it; it wins by candor.
- [ ] **Categorical only — no invented metrics.** The section carries no figures, no "3× faster", no cost claims, no fabricated comparison numbers. It is positioning prose only. It adds **no** cited stats and therefore **no** new References entries (the D-01 round-trip stays complete). Verifier: grep confirms no new `Stat` atoms and no new superscripts in this section.
- [ ] The section answers the open DIY objection the `/roles` Builder card invites (sales-gap §3 `/roles`) — a reader who thought "then why not DIY with Lovable myself?" gets pouk.ai's candid answer here. Verifier (Arian): the DIY-self objection is explicitly addressed.
- [ ] **Link-target reciprocity (F-101 — load-bearing for this release).** The shipped homepage differentiation preview links to `/why-ai` with the text **"See when to hire us, and when not to →"** (`src/content/home.json`, Approved `home-destination-sections.md` §2 Section 4). This section is the **payoff** for that link. Its `<h2>` and content must answer that exact promise — name when to hire pouk.ai *and* when not to (i.e., the honest "right when… / pouk.ai when…" two-sided framing). Verifier (Arian): a reader who clicks the homepage link lands on a section whose heading and content deliver the two-sided "when to / when not to" comparison the link advertised — the F-101 promise gap is closed. Verifier (engineer): the `/why-ai` section `<h2>` is on the candor register of the content draft's recommended heading (`When to hire pouk.ai — and when not to`, or Arian's elected alternative from `vs-alternatives.md` §5); a bare "How pouk.ai compares" does **not** satisfy this AC.
- [ ] **Must not duplicate `failureModes` or `whereWorks`.** This section is a *differentiation* beat (pouk.ai vs. the three alternatives a buyer weighs), not a restatement of the five failure modes (the category diagnosis) nor of `whereWorks` (where pouk.ai is a fit, one-sided). Verifier (Arian): the section introduces the DIY / agency / in-house comparison that appears nowhere else on the page; it does not re-list the failure modes or paraphrase the `whereWorks` "where we fit" prose. `whereWorks` answers "is this for me?"; vs-alternatives answers "why you and not the obvious alternatives?".
- [ ] **No comparison-table read (engagements precedent applied).** Apply the same restraint `/engagements` enforces against the "pricing menu / comparison table" failure (`engagements.md` §3; `engagements-amendment-raise-the-ceiling.md` §90 — no `--surface-section` band, no grid that invites a tabular read). This section renders on `--bg` (no band), as a single-column sequence of categorical trade-off beats — **not** a side-by-side us-vs-them matrix, feature grid, or check/cross table. Verifier: no `<table>`, no multi-column feature-grid layout, no check/cross iconography, no `--surface-section` band on this section. The three alternatives read as a vertical sequence (designer's vehicle), categorical prose only.
- [ ] **Composition vehicle is the designer's call** — likely the `FailureMode`/rung register or a short prose block; **no new DS primitive is anticipated** (pure-site). If the section surfaces a need existing primitives don't cover, that is a site-side need filed by Arian's decision, not a PM-authored DS API. `<NEEDS: confirm an existing register (FailureMode-style or prose) carries the trade-off framing; else a ds-side request>`.

### 4.5a vs-alternatives content-data shape (R-076 JSON-sourced)

`/why-ai` sources **all** copy from `src/content/why-ai.json`, validated by `src/content/_schemas/why-ai.ts` (R-076 HARD, R-074 HARD). This section adds copy, so it adds a key to that JSON and a branch to the Zod schema. PM specifies the *shape and constraints*; the engineer authors the actual `.ts`/`.json` (not the PM's lane).

- [ ] A new top-level key (recommended name: `vsAlternatives`) is added to `why-ai.json` and `whyAiSchema`, sequenced in the render between the `whereWorks` discovery-intro prose and the `whereWorks.questions` blockquote (see §2 item 12 placement note). Shape the schema to carry:
  - `heading` — `string` — the section `<h2>` (satisfies the §4.5 link-reciprocity AC).
  - `leadIn` — `string` — the one candor-posture framing line (content draft §2 A2).
  - `alternatives` — array, **exactly 3** (`.length(3)`) — each `{ name: string, rightWhen: string, poukaiWhen: string }` for DIY / agency / in-house, in that order (content draft §2 beats 1–3).
  - `closing` — `string` — the through-line handoff line (content draft §2 A3). **Note:** this is distinct from the existing `whereWorks.closing`; do not collapse them.
- [ ] **No stat/citation fields.** The `vsAlternatives` schema branch carries **no** `stats`, `value`, `caption`, `source`, or `citation` field — the section is categorical-only and adds no References entries (the D-01 round-trip stays complete; the existing `references.length(4)` and the `openingArgument` citation `superRefine` are untouched). Verifier: the schema branch has no numeric/citation field; grep confirms no new `Stat` atom or superscript renders in this section.
- [ ] **Placement does not split a rendered prose unit.** Because the discovery questions render from `whereWorks.questions` and `whereWorks.closing` follows them, the engineer inserts the `vsAlternatives` render between `whereWorks.discoveryIntro` and the `whereWorks.questions` `<blockquote>` without orphaning `whereWorks.closing`. Verifier: the rendered order is `whereWorks.body` → `whereWorks.discoveryIntro` → **vsAlternatives section** → discovery `<blockquote>` → `whereWorks.closing`; no prose line is left dangling. `<NEEDS: Arian/engineer confirm whereWorks.discoveryIntro still reads cleanly as a lead-in to vs-alternatives rather than to the questions, OR the discoveryIntro is repositioned to immediately precede the blockquote — flagged §5.>`

### 4.6 Quality (unchanged bars, re-asserted for the new beats)
- [ ] ~~Lighthouse mobile holds 100/100/100/100 (Perf ≥ 95 per R-013).~~ ~~**Zero client-side JS** — built-HTML `<script>` grep maps only to the sanctioned first-party set (R-009).~~
  > Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding. Lighthouse (citation R-013 preserved) is now advisory, not gating; the zero-JS `<script>`-grep gate (citation R-009 preserved) is revoked — client-side JS is permitted on this page. The band, Statement, FailureModeList, and vs-alternatives section may still be static server-rendered DS organisms by engineering preference, but that is no longer a merge gate.
- [ ] axe-core 0 violations; the new `StatsSection`/`FailureModeList` landmarks do not duplicate or break the single-`<main>` / heading-order contract (R-025/R-026). Verifier: axe run on preview.
- [ ] **Heading hierarchy (vs-alternatives).** The section `<h2>` is a peer to the other `/why-ai` section headings ("Why projects fail…", "What the leaders do differently", "Where pouk.ai works"), descending from the single page `<h1>`; no level is skipped (R-026). The three alternative names (DIY / agency / in-house) are **not** their own headings unless rendered as `<h3>` under the section `<h2>` — if the designer's vehicle uses a `FailureMode`-style index/label, they are not headings at all (content draft §3 / §6 Flag 3). Verifier: axe + outline check — H1 → H2 (vs-alternatives), with H3 only if the vehicle uses heading-level sub-labels.

---

## 5. Open questions / dependencies

- **W-A vs W-B band budget — Arian's call (non-blocking; default W-A).** W-A ships **one** recessed band (the stats opener). W-B would add a *second* `fill` band on the quartile leaders stats (non-adjacent, with the failure modes between), making the page read as a framed argument — the site's centerpiece. Recommendation: **ship W-A; hold W-B as a fast-follow** if the page should anchor the site. If Arian elects W-B now, beat 9's quartile `StatsSection` flips to `fill`; everything else holds.
- **DS dependency — none.** `StatsSection`, `FailureModeList`, `Statement`, `Hero entrance="stagger"` all ship in `@poukai-inc/ui@2.17.0` (assessment-confirmed). No DS proposal needed.
- **Statement copy — Arian / content.** The pivot line is a *promotion* of existing tail prose; final wording is Arian's. Blocking `Approved` only on Arian confirming the line (or supplying a replacement).
- **vs-alternatives copy — content's lane against §4.5 outcomes.** The honest-trade-off framing and the categorical/no-metrics guardrail are the load-bearing copy bets; Arian verifies against §4.5 before it lands.
- **F-101 release coupling — Arian's call (this is the reason vs-alternatives is now in-scope for the destination release).** The destination homepage shipped a differentiation preview that links to `/why-ai` with "See when to hire us, and when not to →" (review `meta/reviews/2026-06-15-home-destination-sections.md` F-101 / OQ-A). That link currently lands on a `/why-ai` with no such section — an under-delivered promise. **PM recommendation: ship the vs-alternatives section (§4.5 + §4.5a, the corrected placement) in the SAME release as the destination homepage**, so the link pays off on day one. The other four "raise the ceiling" deltas (Hero stagger §4.1, recessed stats band §4.2, FailureModeList refactor §4.3, Statement pivot §4.4) are a separable depth pass and can land in the same release or as a fast-follow — **vs-alternatives is the only delta F-101 forces into the homepage release.** Verifier (Arian): elect (a) full amendment ships with the homepage, or (b) **vs-alternatives ships with the homepage; §4.1–§4.4 fast-follow** (recommended — closes F-101 with the minimum cut), or (c) soften the homepage link instead (rejected by PM — the candor link is the strongest line on the page; weakening it to match a thin `/why-ai` is the wrong direction).
- **Content promotion — `vs-alternatives.md` must reach `Approved` before build.** The content draft `meta/content/drafts/features/vs-alternatives.md` is still `Draft` (status line + F-101 upstream note). Per the pipeline, content is `Approved` before designer/engineer build. **Blocking dependency:** Arian must (1) resolve the draft's open questions (§7 Q1 heading, Q2 in-house generosity line, Q3 DIY tool naming, Q4 placement-confirm) and flip the draft to `Approved`, and (2) approve this amendment's vs-alternatives slice. The section cannot reach `Built` until both are `Approved`. Note: the draft's §6 Flag 3 (heading levels) and its no-Stat/no-band flags are already mirrored as ACs in §4.5/§4.5a/§4.6 here — content and spec are in agreement; the only gap is the still-`Draft` status and the four word-level Q's.
- **Designer dependency — `whereWorks.discoveryIntro` adjacency.** Flagged in §4.5a: confirm `whereWorks.discoveryIntro` still reads as a lead-in once vs-alternatives is inserted between it and the questions blockquote, or reposition `discoveryIntro` to sit immediately before the questions. This is a composition decision for `pouk-ai-designer` to resolve in `meta/compositions/pages/why-ai.md`; Arian arbitrates if it forces a copy change (which would route back to content).
- **Composition.** `/why-ai` has **no composition doc today** (built spec-direct, like `/`). This amendment's depth moves warrant one — `pouk-ai-designer` authors `meta/compositions/pages/why-ai.md` with the band rhythm, the Statement placement, the FailureModeList wrap, and the vs-alternatives vehicle. Flagged as owed before engineer build of the depth pass.
- **Content-data spec — unchanged.** `failure-modes.json.md` (Approved) is untouched; the refactor is render-side.

## 6. Resolution note — vs-alternatives placement (sales-gap §7 open question)

The sales audit left "fold vs-alternatives into `/engagements` or `/why-ai`, or make it a route?" open for Arian. **PM resolution: fold into `/why-ai`, not a new route, not `/engagements`.** Rationale:

- **Not a route.** Adding a route needs Arian + a masterplan update; the 8-page IA was retired for good reasons (`final-state-strategy.md` §7.1). A differentiation argument does not warrant its own surface.
- **`/why-ai` over `/engagements`.** `/why-ai` is the page where the buyer is forming the *category* judgment and is most actively comparing approaches (DIY/agency/in-house); the differentiation lands where the comparison is already happening. `/engagements` answers "what shape does the work take" — a buyer there has already chosen pouk.ai-as-category and is evaluating commitment; a vs-alternatives section there would re-open a settled question and risk the "pricing menu / comparison table" failure that page guards against (engagements.md §3). Placing it on `/why-ai` also directly closes the DIY objection the `/roles` Builder card opens (sales-gap §3).
- **One amendment, one home.** Recording the placement here (not on `/engagements`) keeps the differentiation content in a single canonical location.

If Arian prefers `/engagements` or a route, this amendment's §4.5 is lifted out and re-homed; the outcomes (honest trade-off, categorical, no dunking) travel with it unchanged.

## 7. Out of scope

- A new route for vs-alternatives (resolved against — §6).
- W-B (two bands) as the default (held as a fast-follow — §5).
- Any fabricated metric, invented testimonial, `Quote`/`TestimonialBlock` (GATED on real permissioned quotes per sales-gap §5 — not proposed).
- Scroll-triggered reveals on the stats or failure modes — held out as a restraint/editorial call (they compete with the reader — creative W-A §), not a technical prohibition. (The earlier "costs JS… zero-JS holds" rationale no longer applies: D-25 permits client-side JS. Out of scope here by design choice; reduced-motion still binds if any reveal is ever added.)
  > Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding.
- Color, new tokens, imagery (the cited-stat rigor is the page's visual weight; imagery-direction §2 keeps `/why-ai` type-only).
- Editing `failure-modes.json` shape (render-only refactor).
- Final copy and visual composition (content / designer lanes).
