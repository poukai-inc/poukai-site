# Spec: Outcome-language pass (`/roles` + `/engagements`)

**Surfaces affected**: `/roles` (role `body` / `hiredBy` register), `/engagements` (rung `delivers` / `deRisks` register). No other page.
**Status**: PROPOSAL — In review (Arian approval required; content-direction spec, no copy authored here)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Source assessment**: `meta/assessments/sales-content-gaps.md` §4 #3 (outcome-first language pass — buildable now, no evidence required, categorical, hard guardrail: no invented metrics).
**Companion specs**: `meta/specs/pages/roles.md` (Approved), `meta/specs/pages/engagements.md` (Approved) + `engagements-amendment-raise-the-ceiling.md` §4.3, `meta/specs/content/roles.json.md` + `meta/specs/content/engagements.json.md` (Approved — schemas unchanged by this pass).
**Masterplan reference**: §2A (copy is site-owned; final words are Arian's).

---

## 1. Purpose

The two most commercial pages on the site describe the work in terms of *what it is* far more than *what the buyer gets*. `/roles` says a role "Builds custom solutions…"; `/engagements` says a rung delivers "a working result on one scoped workflow." Both are accurate and both under-sell, because they describe **process**, not **felt outcome**. This spec is a copy-direction pass — not a structural or schema change — that shifts the register on these two pages from process language to felt-outcome language, lifting DESIRE across the funnel's two highest-intent surfaces. It exists as a single feature spec (rather than two page-amendment fragments) because the *direction and the hard guardrail are identical on both pages*, and a content drafter should read one canonical statement of "what 'outcome language' means here and where the line is."

## 2. Audience

- **Primary**: `pouk-ai-content`, who applies this register when (re)drafting the `/roles` role copy and the `/engagements` rung copy. This spec is their direction; Arian is the final approver of every line.
- **Secondary**: `pouk-ai-designer`, who should know the copy register is shifting (felt-outcome lines may run slightly longer or land with more emphasis) without a structural change — composition density is unaffected.

## 3. Success criteria

- **Behavior**: A reader of a `/roles` card or an `/engagements` rung leaves able to picture *their own situation improved* — "the thing that was eating my week, handled" — not just able to recite what pouk.ai does. DESIRE is lifted; the page reads less like a capabilities list and more like a description of the reader's better day.
- **Signal**: Qualitatively — inbound emails describe a desired *outcome* in the reader's own words ("we want the onboarding flow to just run itself"), echoing the page's felt-outcome framing, rather than parroting a capability label. When analytics arrive, no direct metric — this is a desire/quality lift, read through inbound tone.
- **Failure mode (the hard one)**: A felt-outcome line acquires **fabricated specificity** — "saves 10 hours a week," "cuts costs 30%," "ships in 2 weeks" — none of which pouk.ai has measured or can stand behind. The instant an invented number appears, the categorical-only posture is broken and this pass has failed and become off-brand hype. A softer failure: the register over-corrects into marketing-speak ("transform your business," "unlock your potential") — felt-outcome must stay operator-first and concrete, not aspirational fluff.

## 4. Content requirements (the direction)

Outcomes the revised copy must hit. **No final copy here** — direction + the guardrail.

- **Shift from process to felt outcome.** The before/after register (illustrative direction only, not final copy):
  - *Process (current):* "Proves the approach on a single workflow."
  - *Felt outcome (direction):* "The one workflow that's been eating a day a week — running itself, proven before you commit to more."
  The felt-outcome version names *the reader's pain relieved*, in concrete operator terms, without a number.
- **Categorical specificity, never numeric specificity.** "A day a week" used as a *category of pain* a reader recognizes is fine **only if it is framed as the reader's situation, not a measured pouk.ai result** — and the safer default is to name the *kind* of work ("the manual reconciliation nobody wants to own") rather than any duration. **When in doubt, drop the quantity.** The hard line: zero fabricated metrics as *claims about pouk.ai's results*.
- **`/roles` application.** Each role's `body` (and where it sharpens the trigger, the `hiredBy` line) reads as the *outcome the reader buys* in that mode, not the *activity* pouk.ai performs. Builder ≠ "builds custom solutions" → Builder = "the prototype you've been describing in meetings, real and in your hands." The four roles stay mutually distinguishable (roles.md §5) on the outcome dimension, not just the activity dimension. `hiredBy` stays a precise hiring trigger (roles.md §5 unchanged).
- **`/engagements` application.** Each rung's `delivers`/`deRisks` reads in felt-outcome terms per `engagements-amendment-raise-the-ceiling.md` §4.3 — what the buyer *gets* and *stops worrying about* — categorical, no figures (the §7(a) contract is absolute on this page). The four rungs stay mutually distinguishable (engagements.md §5).
- **Operator-first, not aspirational.** Felt-outcome ≠ inspirational. "Running itself" is operator-felt; "unlock transformation" is marketing-speak and banned. The brand competes by being concrete.
- **No structural or schema change.** This is a register shift inside the existing `roles.json` / `engagements.json` string fields. No new field, no new section, no new card.

## 5. Acceptance criteria

- [ ] `/roles` role copy and `/engagements` rung copy read in felt-outcome register (per §4), evidenced by the content drafts at `meta/content/drafts/pages/roles.md` and `…/engagements.md` carrying `status: Approved`. (Content-draft approval is the tracked artifact per the PM DoD.)
- [ ] **No invented metric** appears in any role or rung outcome claim — zero figures, percentages, durations, or cost claims presented as pouk.ai results. Verifier: grep the drafts for numerals in outcome lines + Arian review. The `engagements.json` categorical-only schema validation continues to pass unchanged.
- [ ] **No marketing-speak fluff** ("transform," "unlock," "revolutionize," "seamless," "supercharge") enters the copy. Verifier (Arian): operator-first register held.
- [ ] The four roles remain mutually distinguishable on the outcome dimension; the four rungs remain mutually distinguishable on delivered-outcome / de-risked dimension (roles.md §5, engagements.md §5). Verifier (Arian): no two cards/rungs read as the same outcome.
- [ ] `roles.json` and `engagements.json` **schemas are unchanged** — this is a string-content revision only, no new field. Verifier: content-data specs untouched; schema validation green.
- [ ] `hiredBy` lines on `/roles` stay precise hiring triggers (roles.md §5). Verifier (Arian).
- [ ] No structural / IA / composition change is required by this pass. Verifier: page specs' IA sections unchanged.

## 6. Open questions / dependencies

- **DS dependency — none.** Copy-content only.
- **Sequencing.** This pass is buildable now (no evidence gate). It can land independently of the other raise-the-ceiling moves, but on `/engagements` it is coupled to that page's amendment (§4.3) — apply together to avoid two content passes on the same file.
- **Content drafts — the deliverable.** `pouk-ai-content` authors against §4; Arian approves against §5. No DS, no designer dependency.
- **Guardrail ownership.** The no-invented-metrics line is the load-bearing constraint; if a real, measured, permissioned result ever exists, *that* is a separate GATED move (sales-gap §4 #7), not this pass — this pass stays categorical regardless.

## 7. Out of scope

- Any page other than `/roles` and `/engagements`. (`/why-ai` stays cited-stat rigor; `/onboarding` is categorical method language per its own spec; trust-loop pages carry no sales-outcome language.)
- Real/measured metrics (GATED — sales-gap §4 #7; a different, evidence-gated move).
- Structural, IA, schema, or composition changes.
- New roles or rungs.
- Final copy (content's lane; Arian approves).
