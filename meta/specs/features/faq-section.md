# Spec: FAQSection (`/engagements` + `/onboarding`)

**Surfaces affected**: `/engagements`, `/onboarding`. No other page.
**Status**: PROPOSAL — In review (Arian approval required; question set defined here, answer copy is content's lane)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Source assessment**: `meta/assessments/ds-capability-vs-usage.md` §2 #6 (FAQSection / Disclosure — objection-handling, zero-JS, gated on PM/content deciding the Q&A pairs are worth surfacing).
**Companion specs**: `meta/specs/pages/engagements.md` + `engagements-amendment-raise-the-ceiling.md` §4.4, `meta/specs/pages/onboarding.md`, `meta/specs/features/contact-flow.md` (end CTA the FAQ precedes).
**Masterplan reference**: §4.3 (zero-JS contract). **Standards**: R-009/R-078 (zero-JS / no hydration), R-028 (focus-visible), R-026 (heading order).

---

## 1. Purpose

`/engagements` and `/onboarding` both answer implicit buyer questions in prose. A scanning operator — the brand's actual reader — often wants to jump straight to "how long does this take / what do you need from me / how does it start," and prose makes them hunt. A small FAQ rendered as native `<details>/<summary>` lets that reader self-serve the answer, costs zero JS, and reads as operator-practical rather than marketing fluff — *if* the questions are real objections and the answers stay declarative. This spec decides the Q&A pairs worth surfacing on each page, fixes the zero-JS mechanism, and sets the answer register. The PM call (resolving sales-gap / ds-capability open question #4/#6): **yes, surface these as an FAQ — they are operator-practical and on-brand**, scoped to these two evaluation/onboarding pages only (not the doorway, not the trust-loop pages, not `/why-ai`).

## 2. Audience

- **Primary**: A late-funnel scanning prospect on `/engagements` or `/onboarding` who has one or two specific procedural questions standing between them and writing the email, and wants the answer without reading the whole page.
- **Secondary**: `pouk-ai-content` (drafts the answers against §4 outcomes) and `pouk-ai-designer` (places the block; confirms native-`<details>` composition).

## 3. Success criteria

- **Behavior**: A reader with a procedural objection expands the matching question, gets a direct declarative answer, and proceeds to the end CTA with the objection cleared — rather than bouncing because the answer wasn't obvious.
- **Signal**: Qualitatively — inbound emails arrive with *fewer* of these procedural questions (they were answered on-page) and more substance ("we've read how you start; here's our workflow"). The FAQ removes friction, it doesn't generate it.
- **Failure mode**: The FAQ reads as marketing filler (vague, self-promotional answers), reintroduces sales pressure ("Book now to learn more!"), bloats into a dozen questions nobody asked, or — worst — ships as a hydrated accordion island, breaking the zero-JS contract. An FAQ that answers questions no real operator has is theatre and should not ship.

## 4. The question sets (the PM decision)

Each question is a **real procedural objection** a late-funnel operator holds. Answers are **content's lane** — this spec fixes the questions and the answer *outcome* (what each answer must accomplish and the register it holds), never the final words.

### 4.1 `/engagements` — four questions

1. **"How do we start — what's the first step?"** Answer outcome: name the low-commitment entry (Discovery / Pilot) and that the reader does not commit to a full Build on day one. Reinforces the climb-not-shelf framing. Categorical, no figures.
2. **"Do I have to commit to the whole ladder?"** Answer outcome: no — any archetype can enter at any rung; most relationships start at Discovery or Pilot and grow. De-risks the "is this a big contract?" fear.
3. **"What do you need from us to begin?"** Answer outcome: name what pouk.ai needs from the buyer's side to start (a problem to point at, a point of contact, access in time) — concrete, operator-practical, sets expectations.
4. **"How does pricing work?"** Answer outcome: **categorical only (§7(a))** — "scoped per engagement, written into a transparent SOW, no published tiers" — and explicitly **no figures**. This question is the one most likely to leak a number; the answer must hold the categorical line absolutely. (This is the page's safety valve for the pricing curiosity that would otherwise push a reader to email just to ask.)

### 4.2 `/onboarding` — four questions

1. **"How long does an engagement take?"** Answer outcome: categorical duration framing per phase (e.g., "Discovery is a week or two; the full arc depends on scope") — no day-rates, no fixed totals. Reassures without over-promising.
2. **"What will my team have to do?"** Answer outcome: name the buyer-side involvement across phases (access, a point of contact, review at checkpoints) — sets the "this is a partnership, not a black box" expectation.
3. **"What do we own when it's over?"** Answer outcome: echo the Handoff phase — documentation, a live walkthrough, systems the in-house team can run (the `/about` "not decks" posture), plus the day-30 check-in. De-risks the "will we be stranded?" fear.
4. **"Is Discovery paid?"** Answer outcome: yes, and *why* — paid Discovery is scoped, accountable work, not free spec work; it handles the "are you just selling me a sales call?" suspicion. Categorical, no figure.

**Question-set discipline**: exactly **four** per page (a scanning aid, not an encyclopedia). A question only earns a slot if it is a real objection a serious prospect holds *and* its answer is genuinely useful on-page. Adding a fifth needs Arian's call.

## 5. Answer register (content requirements)

- **Declarative, not promotional.** Each answer states the fact and stops. No "we'd love to," no "reach out to learn more," no upsell inside the answer.
- **Categorical only.** No figures, day-rates, percentages, or fixed timelines presented as commitments (binds both pages; absolute on `/engagements` per §7(a) and `/onboarding` per FS-OB-1).
- **Operator-first, brand-voice.** Same restraint as the rest of the site — no marketing-speak, no fake-plurality team "we," no exclamation, no urgency.
- **Short.** An FAQ answer is two to four sentences. If an answer needs a paragraph, it belongs in the page body, not the FAQ.
- **No CTA inside an answer.** The page's end CTA (via `contact-flow.md`) is the single conversion affordance; the FAQ precedes it and does not duplicate it.

## 6. Acceptance criteria

- [ ] A `FAQSection` renders on `/engagements` (after the four rungs + summit Statement, before/near the end CTA per `engagements-amendment-raise-the-ceiling.md` §4.4) and on `/onboarding` (after the four phases, before the end CTA). Verifier: DOM shows the block in the specified window on each page.
- [ ] The block is **native `<details>/<summary>`** — **zero client-side JS**, no hydration, no accordion island. Verifier: built-HTML grep shows `<details>` elements; no new `<script>` tag and no `client:*` directive (R-009/R-078). Each item is independently expandable/collapsible via the browser default.
- [ ] Each page surfaces exactly the **four questions named in §4** for that page (no more, no fewer, without Arian's sign-off). Verifier (Arian): question set matches §4.1 / §4.2.
- [ ] Every answer holds the §5 register: declarative, categorical (no figures), operator-first, short, no embedded CTA. Verifier (Arian): answer copy reviewed against §5; grep confirms no numerals in answers.
- [ ] `<summary>` elements have a visible `:focus-visible` focus ring using `--accent` (R-028) and are keyboard-operable (Enter/Space toggles). Verifier: keyboard tab-through + axe.
- [ ] Heading order is preserved — the FAQ section heading is the correct level under the page `<h1>`, and `<summary>` text does not introduce a skipped heading level (R-026). Verifier: axe heading-order + manual outline.
- [ ] axe-core 0 violations on both pages with the FAQ present; color contrast on summary/answer text meets WCAG AA (R-027). Verifier: axe run.
- [ ] Lighthouse mobile holds 100/100/100/100 (Perf ≥ 95 per R-013) on both pages. Verifier: lighthouse-ci.
- [ ] Answer copy is tracked via the content drafts (`meta/content/drafts/pages/engagements.md`, `…/onboarding.md`) carrying `status: Approved`.

## 7. Open questions / dependencies

- **DS dependency — confirm native-`<details>` composition.** ds-capability §1b lists `Disclosure`/`Accordion`/`FAQItem`/`FAQSection` in the DS as native-`<details>`, zero-JS. The engineer/designer confirms the page composes the FAQ with the zero-JS DS register (or plain semantic `<details>` if cleaner) — **no hydrated DS island**. `<NEEDS: confirm the DS FAQ register renders as zero-JS native <details>; if any variant requires hydration, use plain semantic <details> instead>`. No DS *authoring* needed (PM does not author the DS API).
- **Answer copy — content's lane.** Drafted against §4/§5; Arian approves.
- **Placement — designer's call** within the windows fixed in §6 (after rungs+Statement on `/engagements`; after the four phases on `/onboarding`).
- **Coupling.** `/engagements` FAQ is coupled to that page's raise-the-ceiling amendment (§4.4); `/onboarding` FAQ can land with the `/onboarding` build (its spec is already Approved). Both depend on `contact-flow.md` only insofar as the FAQ sits *before* that end CTA, not inside it.

## 8. Out of scope

- An FAQ on any other page — explicitly **not** `/` (doorway stays a doorway), **not** `/why-ai` (the argument is the page; an FAQ would fragment it), **not** `/principles` or `/about` (trust-loop pages carry no procedural sales content), **not** `/roles` (self-identification, not procedure).
- More than four questions per page without Arian's sign-off.
- Any figure, day-rate, or fixed-timeline commitment in an answer (categorical-only).
- A search box, filtering, "was this helpful?" voting, or any stateful/JS FAQ feature (zero-JS contract).
- A site-wide / standalone `/faq` route (objection-handling lives in-context on the two pages where the objections arise).
- A CTA inside any answer.
- Final answer copy and visual composition (content / designer lanes).
