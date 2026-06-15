---
feature: faq-section
surfaces: ["/engagements", "/onboarding"]
status: Draft
version: 0.1
lastUpdated: 2026-06-15
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/features/faq-section.md (§4 question sets — PM-fixed; §5 answer register)
coupledSpecs:
  - meta/specs/pages/engagements-amendment-raise-the-ceiling.md §4.4 (placement on /engagements)
  - meta/specs/pages/onboarding.md (placement on /onboarding)
  - meta/specs/features/contact-flow.md (the end CTA the FAQ precedes)
compositionReference: none yet (designer places + confirms native-<details> composition — faq-section.md §6/§7)
---

# Content: FAQSection answers (`/engagements` + `/onboarding`)

**Surfaces**: `/engagements` (4 questions, after the rungs + summit Statement, before/near the end CTA) and `/onboarding` (4 questions, after the four phases, before the end CTA). **No other page.**
**Status**: Draft — Arian word-level approval required.
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-15
**Governing spec**: `meta/specs/features/faq-section.md` — §4 fixes the eight questions (PM decision); §5 fixes the answer register. This draft delivers the **answers** (content's lane).

**Question count: 8 total — exactly 4 per page** (the question-set discipline; a fifth needs Arian's sign-off). The mechanism is native `<details>/<summary>`, zero-JS — that is the engineer's contract, not content's; this draft owns only the question labels (verbatim from §4) and the answers.

The load-bearing register (§5): **declarative, categorical (no figures), operator-first, short (2–4 sentences), no CTA inside any answer.** The pricing question on `/engagements` and the "Is Discovery paid?" question on `/onboarding` are the two most likely to leak a number — both answers hold the categorical line absolutely.

---

## 1. Drafting notes

- **Audience read**: a late-funnel scanning operator with one or two specific procedural questions standing between them and the email — "how long, what do you need from me, how does it start, how does pricing work." They want the answer without re-reading the page. They roll their eyes at marketing FAQ filler.
- **Outcome read** (from §4 answer outcomes + §5 register): each answer states the fact and stops; clears the objection so the reader proceeds to the end CTA; never reintroduces sales pressure; never carries a figure presented as a commitment.
- **Voice anchor**: agent §4.1 (direct — state it, stop), §4.2 (operator-first — don't explain "SOW," "Discovery," "production"), §4.4 (no marketing-speak — and no "we'd love to" / "reach out to learn more," which §5 bans explicitly), §4.6 (concrete — name the artifact / the checkpoint, not "a great experience").
- **Assumptions** (flag for Arian):
  - **A1 — `<summary>` text = the question verbatim from §4**, phrased as the reader would ask it (first person where §4 uses it). The questions are PM-fixed; I keep them as the visible summary text so the scanning reader recognizes their own question.
  - **A2 — answers run 2–4 sentences**, per §5. Where 2 sentences fully clear the objection, I stop at 2 (shorter is more operator-credible than padding to 4).
  - **A3 — answers reuse funnel vocabulary** (the five failure modes, the rungs, the SOW, the day-30 check-in) so the FAQ agrees with the page body and the rest of the site, rather than restating it in fresh words that could drift.
  - **A4 — no answer contains a CTA or a numeral.** The only "numbers" that could appear are categorical method windows ("a week or two") which §4.2 explicitly permits on `/onboarding` as non-price duration framing; I keep even those soft and non-committal, and use **zero** on `/engagements` (where §7(a) is absolute).

---

## 2. Copy — `/engagements` (4 questions, per spec §4.1)

Placement: after the four rungs and the summit Statement, before/near the end CTA (designer's call within that window). Each item is a `<summary>` (the question) + answer prose.

### FAQ 1 — "How do we start — what's the first step?"

> **Answer**: Most relationships start at Discovery or a Pilot — a small, scoped first step, not a full build. You point at a problem, pouk.ai diagnoses where it actually stands, and you decide what happens next from there. You don't commit to building anything on day one.

*(§4.1 outcome: names the low-commitment entry, reinforces climb-not-shelf, no day-one full-Build commitment. No figures.)*

### FAQ 2 — "Do I have to commit to the whole ladder?"

> **Answer**: No. The four rungs are one relationship, not a package you buy all at once — any kind of work can enter at any rung, and most start at Discovery or Pilot and grow only if the work earns it. You climb as far as the results justify, and no further.

*(§4.1 outcome: no — any archetype, any rung; de-risks "is this a big contract?" Reuses the hero's "any kind of work can start at any rung" and "ladder not shelf" thesis.)*

### FAQ 3 — "What do you need from us to begin?"

> **Answer**: Three things: a real problem to point at, one person on your side who owns the outcome, and access to the relevant systems and data when the work reaches them. Discovery can start with the first two; the access matters once there's something to build. The clearer the problem, the faster the diagnosis.

*(§4.1 outcome: names what pouk.ai needs from the buyer — concrete, operator-practical, sets expectations. Echoes the `/why-ai` discovery questions, "who owns the data" / "who champions this.")*

### FAQ 4 — "How does pricing work?" (the categorical safety valve)

> **Answer**: Pricing is scoped per engagement and written into a transparent Statement of Work — what the work delivers, what it costs, and the milestones it's measured against, all in one document. There are no published tiers and no day-rate menu, because the right scope depends on the problem. You see the full shape before you commit to anything.

*(§4.1 outcome: categorical only — "scoped per engagement, transparent SOW, no published tiers" — and **no figures**. This is the page's pricing safety valve: it answers the curiosity that would otherwise push a reader to email just to ask, without leaking a number. "No day-rate menu" doubles as the anti-pricing-menu posture the whole page defends.)*

---

## 3. Copy — `/onboarding` (4 questions, per spec §4.2)

Placement: after the four phases, before the end CTA. Same `<summary>` + answer shape.

### FAQ 1 — "How long does an engagement take?"

> **Answer**: It depends on scope, so there's no fixed total — but the shape is consistent. Discovery is usually a week or two; scoping is quick once the diagnosis is in hand; the build is as long as the milestones in the Statement of Work require. The SOW sets the timeline you can hold the work to, before the build starts.

*(§4.2 outcome: categorical duration framing per phase, no day-rates, no fixed totals; reassures without over-promising. "A week or two" is a soft method window, on-register per §4.2 — not a price, not a commitment.)*

### FAQ 2 — "What will my team have to do?"

> **Answer**: This is a partnership, not a black box. Your side gives access to the relevant systems, one point of contact who owns the outcome, and review at the milestone checkpoints — enough involvement to keep the work pointed at the real problem, not so much that it becomes a second job. The heavier the integration, the more that access matters early.

*(§4.2 outcome: names buyer-side involvement across phases; sets the "partnership, not a black box" expectation. Reuses the access / point-of-contact / checkpoint vocabulary from the `/onboarding` phases.)*

### FAQ 3 — "What do we own when it's over?"

> **Answer**: Everything. You get the system running in production and wired into your stack, documentation written for the people who'll run it, and a live walkthrough rather than a recording to file away. Handoff is built so your in-house team can run the work without staying dependent on pouk.ai — plus a scheduled day-30 check-in once it's been running on its own.

*(§4.2 outcome: echoes the Handoff phase — documentation, live walkthrough, systems the team can run, the day-30 check-in; the `/about` "not decks / not lock-in" posture. De-risks "will we be stranded?" "day-30" is a method checkpoint, not a price.)*

### FAQ 4 — "Is Discovery paid?" (the "are you just selling me a sales call?" valve)

> **Answer**: Yes — and that's deliberate. Discovery is scoped, accountable work that ends with a written diagnosis, not free spec work and not a sales call in a different jacket. You pay for clarity about the problem, and you leave with that diagnosis whether or not we build anything together.

*(§4.2 outcome: yes, and *why* — paid Discovery is scoped accountable work; handles the "are you just selling me a sales call?" suspicion. Categorical, no figure. Reuses the `/onboarding` Discovery `body` posture verbatim in spirit — "not a sales call in a different jacket," "you leave with a written diagnosis whether or not we build.")*

---

## 4. Page-level SEO copy

**None.** FAQ answers are body copy. They carry no `<title>`, meta, or OG of their own.

**One SEO-adjacent note (engineer's lane, flagged for completeness, not content's call)**: a native-`<details>` FAQ is eligible for `FAQPage` JSON-LD. If the engineer elects to emit it, the Q&A pairs must match this draft **verbatim** (Google penalizes JSON-LD that diverges from visible content), and on `/engagements` the `FAQPage` must carry **no `price`/`offers`** field (categorical-only §7(a)). Recorded as a flag; whether to emit `FAQPage` is the engineer's/PM's decision, not this draft's.

- **Heading hierarchy**: the FAQ section heading (e.g., `Questions`, or `Common questions` — designer's label call) is an **H2** on each page, peer to the rung/phase section structure, descending from the page H1. Each `<summary>` is **not** a heading — `<summary>` text must not introduce a heading level (R-026). So the outline stays: page H1 → section H2s (rungs/phases) → FAQ H2 → `<summary>` items (non-heading). Flagged in §6.

---

## 5. Voice rationale

- **Answers state the fact and stop** — every answer is 2–4 sentences and ends on the cleared objection, never on an invitation. This is the §5 "declarative, not promotional" rule made literal: a scanning operator trusts an answer that doesn't try to sell them at the end of it.
- **`/engagements` FAQ 4 "no published tiers and no day-rate menu"** — the single most important answer on the page for the categorical-only contract. It satisfies pricing curiosity (so the reader doesn't email just to ask a number) while refusing to leak one, and "no day-rate menu" actively reinforces the anti-menu thesis rather than just dodging. "You see the full shape before you commit" reframes the absence of a price tag as transparency, not evasion.
- **`/onboarding` FAQ 1 "there's no fixed total — but the shape is consistent"** — answers "how long" honestly (it varies) without either over-promising a timeline or being uselessly vague. The per-phase soft windows ("a week or two") are the §4.2-permitted method framing; "the SOW sets the timeline you can hold the work to" gives the reader the real answer (the timeline is in the document) without inventing one here.
- **`/onboarding` FAQ 4 "not a sales call in a different jacket"** — reuses the exact `/onboarding` Discovery `body` line, so the FAQ and the page body agree word-for-word on the most suspicion-laden point. Consistency is credibility; a different phrasing here would read as marketing re-spin.
- **Funnel-vocabulary reuse throughout** — "the five failure modes" isn't named but its diagnostic logic is; the rungs, the SOW, the day-30 check-in, "running in production," "an in-house team can run it" all appear because the FAQ must sound like the same operator who wrote the page, not a help-desk macro. §4.3 reuse is the anti-drift discipline.
- **No CTA, no urgency, no "we'd love to," in any answer** — §5 bans these explicitly; the end CTA (via `contact-flow.md`) is the single conversion affordance and the FAQ precedes it. Every answer was checked against the banned set.
- **No numerals on `/engagements`; only soft method windows on `/onboarding`** — `/engagements` §7(a) is absolute (zero figures, verified); `/onboarding` carries only categorical method windows ("a week or two," "day-30"), never a price, day-rate, or fixed total, per §4.2.

---

## 6. Composition-fit flags

For the designer's pass (placement + native-`<details>` confirmation, faq-section.md §6/§7).

- **Flag 1 — answer length parity.** Answers run 2–4 sentences. The longest (`/onboarding` FAQ 3, "What do we own") is ~4 sentences; the shortest (`/engagements` FAQ 1) is 3. If the `<details>` open-state wants tighter parity, the trim candidates are the final reinforcing sentence in the longer answers — but each is written to read complete at its current length.
- **Flag 2 — `<summary>` text length.** The questions are short enough to render on one line in the collapsed state at most viewports. `/onboarding` FAQ 1 ("How long does an engagement take?") and `/engagements` FAQ 3 ("What do you need from us to begin?") are the longest summaries; confirm they don't wrap awkwardly against the disclosure caret at narrow widths.
- **Flag 3 — heading levels (R-026).** FAQ section heading is H2; `<summary>` items are not headings. The designer/engineer must not let `<summary>` introduce a skipped heading level. Confirmed clean if the section heading is the only added heading.
- **Flag 4 — zero-JS native `<details>` (engineer contract, flagged not owned).** This draft's answers assume the browser-default expand/collapse; no answer depends on JS behavior, animation, or a "show more." If the DS FAQ register requires hydration, the spec mandates plain semantic `<details>` instead (faq-section.md §7). Content is agnostic; flagged so the answers aren't composed into a hydrated island.

---

## 7. Open questions for Arian

- **Q1 — `/engagements` FAQ 4 pricing answer.** This is the page's pricing safety valve. Confirm the categorical framing ("scoped per engagement, transparent SOW, no published tiers, no day-rate menu") holds the line you want — recommended as drafted. This is the one answer most worth your eyes.
- **Q2 — FAQ section heading label.** Designer will place the block; the heading text is content-adjacent. Recommended: `Common questions` (operator-plain, not "FAQ" which reads slightly SaaS). Confirm, or prefer `Questions` / `FAQ`.
- **Q3 — `/onboarding` soft windows.** Confirm "Discovery is usually a week or two" stays (recommended — it's the §4.2-permitted method framing and genuinely useful), or drop all duration cues to be maximally non-committal.
- **Q4 — `FAQPage` JSON-LD (route to engineer, flagged here).** If you want the FAQ to be search-eligible, the engineer emits `FAQPage` JSON-LD matching these Q&A verbatim, with no price field on `/engagements`. Not content's call; flagged so it's a conscious decision, not an oversight.

---

## 8. Out of scope

- A fifth question on either page (the four-per-page discipline; needs Arian's sign-off — §4).
- Any figure, day-rate, percentage, or fixed-timeline commitment in an answer (categorical-only; absolute on `/engagements`). Soft categorical method windows on `/onboarding` only, per §4.2.
- A CTA inside any answer (§5 — the end CTA is the single conversion affordance).
- An FAQ on any other page — not `/`, `/why-ai`, `/roles`, `/principles`, or `/about` (§8).
- A site-wide `/faq` route, a search box, filtering, or "was this helpful?" voting (zero-JS / scope — §8).
- The native-`<details>` mechanism, hydration posture, focus-ring styling, placement within the window — engineer/designer lanes (faq-section.md §6/§7).
- `FAQPage` JSON-LD authoring — engineer's call (flagged Q4); if emitted, must match this draft verbatim.
- Wiring answers into the page templates — the engineer applies approved copy.
