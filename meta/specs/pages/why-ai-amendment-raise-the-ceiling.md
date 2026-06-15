# Amendment: Why AI — Raise the Ceiling (depth + thesis Statement + vs-alternatives)

**Route**: `/why-ai`
**Status**: PROPOSAL — In review (Arian per-page approval required; nothing ships without sign-off)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Amends**: [`meta/specs/pages/why-ai.md`](./why-ai.md) (Approved) — authoritative for everything not delta'd here. All IA items 1–14 and ACs in the base spec stand except where this amendment inserts beats or refactors hand-rolled markup into DS organisms.
**Source assessments**: `meta/assessments/creative-exploration.md` §2 (Direction W-A "The diagnosis lands", signature moment, W-B band budget), `meta/assessments/ds-capability-vs-usage.md` §2 #2/#3/#4 (surface-band rhythm, `StatsSection`/`FailureModeList` refactor, `Statement` thesis beat), `meta/assessments/sales-content-gaps.md` §4 #2 (vs-alternatives placement, honest trade-off framing).
**Masterplan reference**: §2A (repo boundaries), §4.4 (long-form content as data), §6 (cutover).
**Companion content-data spec**: `meta/specs/content/failure-modes.json.md` (Approved) — unchanged by this amendment (the refactor is a render/organism change, not a data-shape change).

---

## 1. Amendment scope

`/why-ai` is the strongest persuasion page on the site and the flattest in execution — one `--bg` plane top to bottom, every "by the numbers" moment hand-rolled, no editorial spine. This amendment gives the argument depth and a stated conviction, and adds the one explicit differentiation surface the sales audit calls for, all pure-site (DS organisms the page should already be using; no new tokens, no new DS primitive, no fabricated proof). Five delta's:

1. **Hero stagger.** Add `entrance="stagger"` to the (already `display`-default) Hero so the diagnosis page *arrives*. (Creative W-A beat 1.)
2. **Recessed stats band (W-A).** Replace the hand-rolled `<div class="stats-row">` opener with `StatsSection fill dividers` — the page's first depth event, the "by the numbers" moment recessed into the page like a quoted exhibit. (ds-capability #2 + #3.)
3. **DS-organism refactor.** Wrap the five `FailureMode` molecules in `FailureModeList` (named landmark region) instead of the hand-rolled flat column. (ds-capability #3.)
4. **Thesis `Statement` pivot.** Promote the page's existing tail conviction line ("the diagnosis comes before the build — the order pouk.ai works in") to a `Statement` molecule at the pivot from "what's broken" to "what the leaders do." Once per page, italic-serif, at `--fs-statement`. (ds-capability #4 / creative W-A signature moment.)
5. **vs-alternatives section (sales-gap #2).** A new differentiation beat — honest trade-off framing (DIY / agency / in-house hire vs. pouk.ai), categorical, no competitor-bashing — folded into `/why-ai` (resolved placement; **not** a new route). See §4.5 and the resolution note in §6.

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
10. Section heading "The consulting angle" — unchanged.
11. Consulting angle prose — unchanged.
12. **vs-alternatives section (NEW beat).** Inserted after the consulting angle (item 11) and before the discovery questions (item 13 in base = item 14 here). Honest trade-off framing. (§4.5)
13. Discovery questions inline italic `<blockquote>` — unchanged (D-04).
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

Additive to base §8. The base ACs (route, IA 1–14, superscript round-trip, sticky TOC CSS-only, discovery blockquote, stats extraction, Lighthouse, zero-JS, reduced-motion) all still apply except where revised below.

### 4.1 Hero stagger
- [ ] The Hero renders with `entrance="stagger"`; choreography is CSS-only and collapses under `prefers-reduced-motion: reduce` via the DS `:root !important` block (R-030). Verifier: props inspection + reduced-motion toggle on preview. No JS added (zero-JS contract holds).

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
- [ ] A single differentiation section renders after the consulting angle and before the discovery questions (IA beat 12). It frames the three alternatives a buyer actually weighs — **DIY (with Lovable/Claude/etc.), a generic AI agency, hiring in-house** — and names, for each, when that choice is *right* and when pouk.ai is right. Verifier: the section names all three alternatives and gives each an honest "right when…" framing.
- [ ] **Honest trade-off register, not a comparison table, not competitor-bashing.** No named-competitor logos, no feature-grid "us vs. them" matrix, no pejorative characterization of the alternatives. The register is categorical and generous ("DIY is right when the workflow is simple and you have the time; pouk.ai is right when the integration is the hard part and shipping-and-supporting matters"). Verifier (Arian): the section would not embarrass pouk.ai if a competitor read it; it wins by candor.
- [ ] **Categorical only — no invented metrics.** The section carries no figures, no "3× faster", no cost claims, no fabricated comparison numbers. It is positioning prose only. It adds **no** cited stats and therefore **no** new References entries (the D-01 round-trip stays complete). Verifier: grep confirms no new `Stat` atoms and no new superscripts in this section.
- [ ] The section answers the open DIY objection the `/roles` Builder card invites (sales-gap §3 `/roles`) — a reader who thought "then why not DIY with Lovable myself?" gets pouk.ai's candid answer here. Verifier (Arian): the DIY-self objection is explicitly addressed.
- [ ] **Composition vehicle is the designer's call** — likely the `FailureMode`/rung register or a short prose block; **no new DS primitive is anticipated** (pure-site). If the section surfaces a need existing primitives don't cover, that is a site-side need filed by Arian's decision, not a PM-authored DS API. `<NEEDS: confirm an existing register (FailureMode-style or prose) carries the trade-off framing; else a ds-side request>`.

### 4.6 Quality (unchanged bars, re-asserted for the new beats)
- [ ] Lighthouse mobile holds 100/100/100/100 (Perf ≥ 95 per R-013). Verifier: lighthouse-ci on preview.
- [ ] **Zero client-side JS** — the band, Statement, FailureModeList, and vs-alternatives section are all static server-rendered DS organisms / prose; the only motion is the CSS-only Hero stagger. Verifier: built-HTML `<script>` grep maps only to the sanctioned first-party set (R-009).
- [ ] axe-core 0 violations; the new `StatsSection`/`FailureModeList` landmarks do not duplicate or break the single-`<main>` / heading-order contract (R-025/R-026). Verifier: axe run on preview.

---

## 5. Open questions / dependencies

- **W-A vs W-B band budget — Arian's call (non-blocking; default W-A).** W-A ships **one** recessed band (the stats opener). W-B would add a *second* `fill` band on the quartile leaders stats (non-adjacent, with the failure modes between), making the page read as a framed argument — the site's centerpiece. Recommendation: **ship W-A; hold W-B as a fast-follow** if the page should anchor the site. If Arian elects W-B now, beat 9's quartile `StatsSection` flips to `fill`; everything else holds.
- **DS dependency — none.** `StatsSection`, `FailureModeList`, `Statement`, `Hero entrance="stagger"` all ship in `@poukai-inc/ui@2.17.0` (assessment-confirmed). No DS proposal needed.
- **Statement copy — Arian / content.** The pivot line is a *promotion* of existing tail prose; final wording is Arian's. Blocking `Approved` only on Arian confirming the line (or supplying a replacement).
- **vs-alternatives copy — content's lane against §4.5 outcomes.** The honest-trade-off framing and the categorical/no-metrics guardrail are the load-bearing copy bets; Arian verifies against §4.5 before it lands.
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
- Scroll-triggered reveals on the stats or failure modes (costs JS, competes with the reader — creative W-A §; zero-JS holds).
- Color, new tokens, imagery (the cited-stat rigor is the page's visual weight; imagery-direction §2 keeps `/why-ai` type-only).
- Editing `failure-modes.json` shape (render-only refactor).
- Final copy and visual composition (content / designer lanes).
