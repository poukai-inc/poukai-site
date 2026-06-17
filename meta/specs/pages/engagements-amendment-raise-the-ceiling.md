# Amendment: Engagements — Raise the Ceiling (summit Statement + hero stagger + outcome language)

**Route**: `/engagements`
**Status**: PROPOSAL — In review (Arian per-page approval required; nothing ships without sign-off)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Amends**: [`meta/specs/pages/engagements.md`](./engagements.md) (Approved 2026-05-31) — authoritative for everything not delta'd here. The categorical-only contract (§7(a)), the per-rung CTA mechanic (§7(b)), the no-band/no-comparison-table discipline (§3), and the four-rung ladder (§2.2) all stand.
**Source assessments**: `meta/assessments/creative-exploration.md` §3 (Direction E-A "The climb arrives", signature moment, E-B rejected), `meta/assessments/ds-capability-vs-usage.md` §2 #4 (`Statement`), `meta/assessments/sales-content-gaps.md` §4 #3 (outcome-first language pass).
**Companion specs**: `meta/specs/content/engagements.json.md` (Approved — content-data shape; unchanged by this amendment), `meta/specs/features/contact-flow.md` (Approved — end CTA), `meta/specs/features/faq-section.md` (this amendment — the FAQ beat).
**Masterplan reference**: §2A, §4.4.

---

## 1. Amendment scope

`/engagements` is the most thoughtfully composed page on the site — the climb mechanic is genuinely good. It is also slightly inert: the relationship is *described* and then the page quietly stops. This amendment gives the climb a summit and a felt outcome, all pure-site, all respecting the page's defining constraints (categorical-only, no figures, single column not a grid, link-not-button per rung, no surface band). Four delta's:

1. **Hero stagger (E-A).** Add `entrance="stagger"` to the (already `display`-default) Hero — reversing the §7 Q4 static recommendation. On an evaluation page about a relationship that builds in stages, the stagger reads as the page *composing itself*. (Creative E-A.)
2. **Summit `Statement` (E-A).** Insert one `Statement` beat between the Retainer rung and the end CTA — restating the load-bearing "four shapes of one relationship, not four products on a shelf" thesis at editorial scale, *after* the reader has climbed all four rungs, so the abstraction lands as a felt conclusion. Once per page, on `--bg` (no band). (ds-capability #4 / creative E-A signature moment.)
3. **Outcome-language pass (sales-gap #3).** A copy-direction shift on the rung `delivers`/`deRisks` fields: from process terms ("a working result on one scoped workflow") to felt-outcome terms ("the workflow that was eating a day a week, running itself") — categorical, **no invented metrics**. (sales-gap §4 #3; shared direction with `/roles` — see `features/outcome-language-pass.md`.)
4. **FAQSection (ds-capability #6).** A small native `<details>` objection-handling block answering the implicit buyer questions a scanning operator has (timeline, what pouk.ai needs from them, how a rung starts). Native `<details>` remains the recommended default (no hydration needed), but per D-25 client JS is permitted if a richer accordion is later wanted. Spec'd centrally in `features/faq-section.md`; this amendment places it and names the `/engagements` question set.

Everything else stands: the four rungs in fixed order, anchors (`#discovery`/`#pilot`/`#build`/`#retainer`), the ladder index, per-rung `mailto:?subject=<Rung>` CTAs (§7(b)), the categorical-only contract (§7(a)), the dual-mechanism end CTA.

---

## 2. What stays locked (off-limits)

- **Categorical-only — no figures (§7(a)).** The outcome-language pass (§4.3) must not introduce a single number. This is the page's defining constraint and the hard guardrail on the whole amendment.
- **No `--surface-section` band on this page (engagements.md §3).** The Statement is *typographic* depth, not *surface* depth — it sits on `--bg`. A recessed band here would invite the comparison-table read the page exists to avoid. The band lever stays holstered on `/engagements` (the one page where that is correct).
- **Single column, not a grid; link-not-button per rung.** The climb composition is correct and untouched.
- **No scroll reveals on the rungs (engagements.md §4).** A reveal competes with the reader's climb pace.
- **E-B is rejected.** A `StatsSection` / ceiling-stat moment on this page is killed explicitly — any stat breaks the categorical-only contract (creative §3 E-B). Do not build.

---

## 3. Updated success criteria (delta against base §3)

Base framing (incl. the four named failure modes) carries over. Added:

- **The climb concludes (new).** After climbing Discovery → Pilot → Build → Retainer, the reader hits one italic-serif line that names the whole ascent as one deepening relationship — the page now *concludes* instead of trailing off into a quiet email line. The "felt ceiling" the sales audit says the page is missing, delivered without a number or a sales push.
- **The work is felt, not just described (new).** A reader leaves wanting the *outcome* each rung produces, not just understanding the *process* — desire lifted via categorical felt-outcome language, with zero fabricated specificity.
- **Failure mode added — "the Statement over-claims."** If the summit line reads as a promise ("we will transform your business") rather than a restatement of the climb the reader just made, it breaks the operator-first restraint. It names what the reader felt; it does not sell beyond it.
- **Failure mode sharpened — "outcome language invents a number."** The single line not to cross (carried from sales-gap §4 #3): the instant a felt-outcome line acquires fabricated specificity ("saves 10 hours a week"), the categorical-only contract is broken and the move has failed.

---

## 4. New / revised acceptance criteria

Additive to base §8. All base ACs (route, IA 1–9, four rungs fixed order, anchors, per-rung CTAs, categorical-pricing ACs, dual end CTA) still apply.
> Superseded by D-25 (2026-06-16 JS revocation): the base "Lighthouse" + "zero-JS" ACs are now advisory / permitted respectively — client JS permitted, Lighthouse advisory. a11y + reduced-motion remain binding.

### 4.1 Hero stagger (reverses §7 Q4)
- [ ] The Hero renders with `entrance="stagger"` (DS-default `display` size retained). Collapses under `prefers-reduced-motion` via the DS block (R-030). Verifier: props inspection + reduced-motion toggle. (Per D-25, "zero JS added" is no longer a gate — the stagger may remain CSS-only by choice; JS is permitted.)
- [ ] No rung-level or scroll-triggered motion is introduced (engagements.md §4 holds). Verifier: only the Hero carries `entrance`.

### 4.2 Summit Statement
- [ ] Exactly **one** `Statement` molecule renders, between the Retainer rung and the end CTA (new IA beat between base §4 items 7 and 8). It renders italic-serif at `--fs-statement` on `--bg` (no band). Verifier: DOM shows one `Statement` after the fourth rung and before the end CTA; no `--surface-section` band anywhere on the page.
- [ ] **Conviction outcome the Statement must land (content's lane; placement + intent fixed here).** The line restates the page's load-bearing thesis — *the four rungs are one relationship that starts small and deepens, not four products on a shelf* — as a felt conclusion after the climb. No figures, no CTA energy, no attribution. Final wording is Arian's / content's. Verifier (Arian): the line reads as the payoff the escalation built toward, not as a hero promise.

### 4.3 Outcome-language pass (categorical, no metrics)
- [ ] Each rung's `delivers` / `deRisks` copy reads in **felt-outcome** terms (what the buyer gets / stops worrying about) rather than purely process terms — per `features/outcome-language-pass.md`. Verifier (Arian): each rung's framing answers "what's different for me after this rung" in operator terms.
- [ ] **No invented metrics — hard guardrail.** No figure, percentage, time-saving, cost, or fabricated specificity appears in any rung copy, the Statement, the hero, or the FAQ. Categorical only (§7(a)). Verifier: grep + Arian review confirms zero numerals in outcome claims; the `engagements.json` categorical-only schema validation (content-data spec) still passes unchanged.
- [ ] The outcome-language pass is a **copy-direction revision within the existing `engagements.json` shape** — no schema change, no new field. Verifier: `engagements.json.md` contract unchanged; only `delivers`/`deRisks` string *content* shifts register.

### 4.4 FAQSection (placement; spec'd in features/faq-section.md)
- [ ] A `FAQSection` renders on `/engagements`, after the four rungs and the summit Statement, before (or folded near) the end CTA — exact placement is the designer's call within that window. Verifier: DOM shows a `FAQSection`/native `<details>` block in the specified window.
- [ ] The FAQ uses **native `<details>/<summary>`** as the recommended default (no hydration required). Verifier: built-HTML shows `<details>` elements. Per D-25 the prior "no `<script>`/`client:` directive" prohibition (cited R-009/R-078) no longer gates this — client JS is permitted; native `<details>` is a sensible baseline by choice, not by mandate.
> Superseded by D-25 (2026-06-16 JS revocation): zero-JS prohibition (R-009/R-078) lifted; client JS permitted. a11y (axe-core 0 violations, `:focus-visible`) + reduced-motion remain binding.
- [ ] The `/engagements` question set matches `features/faq-section.md` §4 (the four questions named there for this page); answers satisfy the outcome direction in that spec (declarative, categorical, no figures, no sales push). Verifier (Arian): the shipped Q&A pairs match the named set and the answer register.

### 4.5 Quality (re-asserted)
> Superseded by D-25 (2026-06-16 JS revocation): Lighthouse advisory (R-013), not blocking. a11y + reduced-motion remain binding.
- [ ] Lighthouse mobile tracked as advisory (R-013 framing); not a merge gate. Verifier: lighthouse-ci (situational awareness only).
- [ ] axe-core 0 violations; the `<details>` FAQ elements have visible `:focus-visible` rings on `<summary>` (R-028) and meet heading-order (R-026). Verifier: axe + keyboard tab-through.

---

## 5. Open questions / dependencies

- **Ratified-decision reversal — Arian's call (BLOCKING `Approved`).** Adding `entrance="stagger"` reverses engagements.md §7 Q4's static-hero recommendation. See §7.
- **DS dependency — none.** `entrance="stagger"`, `Statement`, and the `FAQSection`/`<details>` register all ship in `@poukai-inc/ui@2.17.0` (assessment-confirmed). No DS proposal. (FAQ confirms native-`<details>` reuse in `features/faq-section.md`.)
- **Statement copy — Arian / content.** Blocking `Approved` only on Arian confirming the summit line (or a replacement).
- **Outcome-language copy — content's lane against `features/outcome-language-pass.md`.** Arian verifies the categorical/no-metrics guardrail before it lands in `engagements.json`.
- **FAQ question set + answers — `features/faq-section.md` (this pass) + content drafts.** The question set is named there; answers are content's lane.
- **Composition.** `meta/compositions/pages/engagements.md` (Approved) moves to `Pending revision` on `Approved` of this amendment — `pouk-ai-designer` adds the stagger, the summit Statement beat, and the FAQ placement to the recipe. PM defers placement specifics.
- **Content-data spec — unchanged.** `engagements.json.md` (Approved) is untouched; the outcome pass is copy-content within the existing shape.

## 6. Out of scope

- Any figure / metric on the page (categorical-only §7(a)) — including in the outcome-language pass and the FAQ.
- A `--surface-section` band on `/engagements` (engagements.md §3 — invites the comparison-table read).
- E-B (a ceiling-stat `StatsSection`) — rejected (§2, creative §3).
- `Quote`/`TestimonialBlock` (GATED on real permissioned quotes — sales-gap §5).
- Scroll-triggered reveals on rungs (engagements.md §4).
- A fifth rung; per-rung sub-routes; a scheduling embed (all base §10).
- Changing the `engagements.json` schema (copy-content revision only).
- Final copy and visual composition (content / designer lanes).

## 7. Ratified-decision reversal — Arian must re-ratify

This amendment **reverses a ratified decision** and cannot reach `Approved` until Arian confirms:

- **RR-3 — Hero stagger on `/engagements`.** Reverse engagements.md §7 Q4's "hero static, recommended off" by turning `entrance="stagger"` on. The original objection ("a doorway flourish on an evaluation page") is reasonable; the counter is that the brief's whole finding is "motion-off defaulted to drab," and on a staged-relationship page the stagger reads as the page composing itself. Low risk: CSS-only, reduced-motion-gated, trivially revertible. Recommendation: **reverse — stagger on.**

If Arian declines RR-3, the Statement, outcome-language pass, and FAQSection still stand on their own (none depends on the stagger); only §4.1 is dropped.
