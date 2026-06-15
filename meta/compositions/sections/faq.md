# Composition (section): FAQ — zero-JS objection-handling

**Type**: Reusable section composition (used on `/engagements` and `/onboarding`)
**Status**: PROPOSAL — awaiting Arian approval. **Gated on PM/content** supplying the Q&A pairs (ds-capability #6 — this is a content decision before it is a composition).
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Governing direction**: `meta/assessments/ds-capability-vs-usage.md` #6 (Disclosure / FAQSection for objection-handling). Reads on the zero-JS contract (R-009 / R-079) and motion-accessibility standard.
**DS version targeted**: `@poukai-inc/ui@2.17.0` (`meta/ds-snapshot/llms-full.txt` is the binding reference).
**Consuming compositions**: `meta/compositions/pages/engagements.md` (objection-handling after the rung ladder), `meta/compositions/pages/onboarding.md` (process FAQ).

---

> **CRITICAL DS FINDING — the DS `FAQSection` / `FAQItem` / `Accordion` require hydration; this composition uses `Disclosure` instead.** Per `meta/ds-snapshot/llms-full.txt`: `Accordion` is "built on `@radix-ui/react-accordion`," and both `FAQItem` and `FAQSection` "depend on the `Accordion` molecule (`@radix-ui/react-accordion`)" — they wire `aria-expanded`/`aria-controls`/`role="region"` and the keyboard model through Radix, which is a React runtime that **must be hydrated** (`client:*`). That breaks the zero-JS contract (R-079: DS components are server-rendered, not hydrated; R-009: client JS is whitelisted to analytics/error-reporting/ClientRouter only). **`<Disclosure>` is the zero-JS primitive** — its root is a **native `<details>`** with native `<summary>` semantics, "No manual ARIA needed," and chevron rotation via CSS `transition` (reduced-motion handled by the global token clamp). **This composition therefore builds the FAQ from `<Disclosure>` rows inside a site-side `<Section>`-register wrapper — NOT from `FAQSection`.** See §6 for the full reasoning and the one DS-gap this surfaces (a zero-JS section-framed FAQ organism does not exist).

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — FAQ rows are `<Disclosure>` (native `<details>`), one per Q&A pair.** Zero JS, zero hydration, native keyboard + screen-reader semantics. The `summary` prop is the question; the `children` is the answer (`<Prose>` or a plain `<p>`).
- **A2 — The section frame is composed site-side, not via `FAQSection`.** A `<section aria-labelledby>` wrapper with a heading + optional lede, holding the `<Disclosure>` list. This mirrors what `FAQSection` does structurally (Section + collapsible group) but without the Radix `Accordion` engine. The visual register matches the DS `Section` conventions (left-aligned, `--space-N` rhythm).
- **A3 — One question open at a time is NOT enforced.** Native `<details>` has no "single-open" group behavior without JS (that is exactly what Radix `Accordion type="single"` provides, and exactly the JS we are refusing). Multiple `<Disclosure>`s may be open simultaneously — which is the correct, friction-free behavior for an objection-handling FAQ anyway (a scanning operator opens the two they care about; closing the others for them is paternalistic and costs JS). All rows default closed.
- **A4 — Declarative copy only.** FAQs are operator-practical, not marketing fluff (ds-capability #6 restraint check) — questions are real buyer questions, answers are declarative. No urgency, no upsell.

---

## 1. Intent

A scanning operator on `/engagements` or `/onboarding` has two or three real questions — "how does pricing actually work," "what's the timeline," "what do you need from me" — and the page answers them in prose today. The FAQ lets that operator *jump* to their question without reading the whole page, at zero JS cost, in the brand's calm declarative register. It should read as an operator answering practical questions plainly, never as a marketing FAQ padded with softball questions. The rows are quiet (a question, a chevron, an answer that expands inline), the whole block is one named region, and nothing animates beyond the DS-internal chevron rotation. The restraint guardrail: declarative copy, real questions, native `<details>` (no hydration), and the block is *supplementary* — it never competes with the page's primary mechanic (the rung ladder on `/engagements`, the phase arc on `/onboarding`).

## 2. Section composition

### The section frame (site-side)

- **DS primitive(s)**: a site-side `<section aria-labelledby="faq-title">` wrapper. Inside it: a heading (`<h2>` — or `<h3>` if nested under an existing `<h2>`), an optional lede `<p>`, and the `<Disclosure>` list. **Not `FAQSection`** (Radix — see the critical finding above). The wrapper reuses DS `Section`-register spacing tokens; if a future zero-JS `Section` frame primitive is wanted, see §6.
- **Heading**: `<h2>` "Common questions" (or page-specific). On `/engagements` it descends from the Hero `<h1>`; on `/onboarding` likewise. If the FAQ sits under another `<h2>`, the heading drops to `<h3>` and the Disclosure summaries stay at their default register.
- **Layout / spacing**: block padding `--space-16` (matching DS `Section size="default"`) or `--space-12` (`tight`). The heading→list gap is `--space-8`. The list itself uses `<Disclosure divider>` rows (see below) so the hairlines do the row separation — no inter-row `--space` needed beyond the divider rule.

### The FAQ rows

- **DS primitive(s)**: `<Disclosure>` (molecule), one per Q&A pair. Native `<details>`.
- **Props (substantive)**:
  ```
  <section aria-labelledby="faq-title">
    <h2 id="faq-title">Common questions</h2>     {/* or h3 if nested; site-side heading */}

    <Disclosure summary={faq[0].question} divider>
      <p>{faq[0].answer}</p>                       {/* or <Prose> for multi-paragraph answers */}
    </Disclosure>
    <Disclosure summary={faq[1].question} divider>
      <p>{faq[1].answer}</p>
    </Disclosure>
    <Disclosure summary={faq[2].question} divider>
      <p>{faq[2].answer}</p>
    </Disclosure>
  </section>
  ```
  - `summary` (required string) — the question. Rendered inside `<summary>` alongside the DS chevron Icon (lucide `ChevronDown`).
  - `divider` (boolean) — adds a `--hairline` top rule on each row, giving the list its quiet separation. Recommended on for a list context (DS example c is exactly this list-divider pattern).
  - `tone="default"` — the question label at full `--fg`. (`tone="muted"` is available but the question is the affordance; keep it full-weight.)
  - **No `open` / `onOpenChange`** — those are the *controlled* (React-state) path, which would require hydration. Use the **uncontrolled** native `<details>` form only. `defaultOpen` is permitted (uncontrolled) but the recommendation is all-closed by default (A3).
- **Layout / spacing**: `<Disclosure>` owns its internal rhythm (`--space-3` / `--space-4`, `--radius-1`, DS-internal). The `divider` rule is `--hairline-w` (1px) `--hairline`. Rows stack with no extra gap — the divider is the separation.
- **Motion**: the chevron rotates 180° on open via `transition: transform var(--dur-fast) var(--easing)` — **DS-internal, CSS-only**. The `<details>` open/close itself is the browser's native disclosure (instant content reveal; native `<details>` does not animate height without JS, and we are not adding JS). **Reduced-motion**: the chevron transition is gated by the global `tokens.css` `:root !important` block — no per-component override (DS: "Reduced-motion handled by the global token clamp"). No height-collapse animation exists to gate (that would be the Radix `Accordion.Content` path we are refusing).
- **Content slot**: `src/content/<page>.json[faq]` — an array of `{ question, answer }`. The engineer iterates; no per-row conditional logic. **Gated on PM/content authoring the pairs** (ds-capability #6, Open Question FAQ-1).
- **Brand notes**:
  - The block is **supplementary**, placed after the page's primary mechanic — on `/engagements`, below the End CTA's catch-all OR between the rungs and the summit Statement (Open Question FAQ-2 — placement); on `/onboarding`, after the phase arc. It must not compete with the climb / the phase arc.
  - **One question per row, declarative answer.** No multi-question rows, no nested disclosures (DS: "Do NOT nest Disclosures inside Disclosures").
  - Questions are real buyer questions (pricing shape, timeline, what's needed from the client), not marketing softballs. Answers stay categorical-only on `/engagements` (no figures — spec §7(a)); pricing answers describe *shape*, never a number.

## 3. Register & count

- **2–5 rows.** Below 2, it is not a list — render the single Q&A as inline prose, not a Disclosure (DS: Disclosure is for "standalone collapsible content"; a one-item FAQ has no list meaning). Above 5, the page is hiding too much in collapse — surface the rest as prose or split the concern.
- **All-sans, DS register.** The question (summary) is Geist at the DS Disclosure default; the answer is `--fs-body`. No Instrument Serif on the summary (it is UI chrome, not editorial heading text — same rule the `/404` list obeys).
- **Closed by default.** The reader chooses what to open. No `defaultOpen` unless one question is so universal it earns being pre-opened (rare; default off).

## 4. Motion choreography (section-level)

- **Fires on initial render**: nothing. Rows are closed, static.
- **Fires on interaction**: the chevron rotation (`--dur-fast` / `--easing`, DS-internal CSS) on open/close. The content reveal is the browser's native `<details>` toggle (instant, no animation).
- **Fires on scroll**: nothing. No reveal, no observer.
- **Fires never (locked out)**: any Radix `Accordion` height-collapse animation (that path requires hydration — refused), any JS-driven single-open enforcement, any scroll-triggered reveal.
- **`prefers-reduced-motion: reduce`**: the chevron transition is disabled via the DS global `:root !important` block. No exception, no per-component rule needed.

## 5. Icon picks

None chosen by this composition — the only glyph is the DS-internal chevron (`ChevronDown`, `--icon-sm`) that `<Disclosure>` renders automatically. No question-prefix icons, no answer icons. Type + the one DS chevron.

## 6. DS gaps surfaced

**One soft gap — surfaced, not blocking; a zero-JS path exists.**

**The gap**: the DS's *section-framed FAQ organism* (`FAQSection`) and its row (`FAQItem`) are **Radix-hydration-bound** (`@radix-ui/react-accordion`). On a zero-JS site (R-009 / R-079), they are **unusable as shipped** — adopting them would force a `client:*` directive, which the standards forbid. So the DS has a section-framed FAQ, but not a *zero-JS* one.

**The workaround we ship (the recommendation)**: compose the FAQ from `<Disclosure>` (native `<details>`, zero-JS) inside a site-side `<section aria-labelledby>` frame. This delivers the same reader outcome (named region, collapsible Q&A, native a11y, CSS-only chevron) without the Radix engine. The only thing lost is JS-enforced "single open at a time," which is not wanted anyway (A3). **This is a complete, on-contract solution — the gap does not block the FAQ.**

**The DS-gap proposal (optional, Arian's call to route)**: a **zero-JS `DisclosureGroup` / native-`<details>` `FAQSection` variant** — a section-framed organism that wraps `<Disclosure>` rows (native `<details>`) the way `FAQSection` wraps `FAQItem`, giving consumers the landmark + heading + lede frame without pulling in Radix. Framed from the composition need: *"a zero-JS marketing site wants the `FAQSection` ergonomics (Section frame + collapsible Q&A list) but cannot pay the Radix hydration cost; the existing `<Disclosure>` already proves native `<details>` is the DS's zero-JS disclosure primitive — wrap it in a Section frame."* This is a convenience that would let the site drop its hand-rolled section wrapper; it is **not** required to ship the FAQ. If Arian wants it, the draft lands in `meta/proposals/ds-side/zero-js-faq-section.md` describing the gap (not the API). **Recommendation: ship the `<Disclosure>` composition now; file the proposal only if a second consumer makes the hand-rolled frame annoying.** Drafting the DS API is out of this composition's lane.

## 7. Open questions for Arian

1. **FAQ-1 — Q&A pairs (gating, content/PM).** This composition is a recipe; the questions and answers are content's lane (ds-capability #6). Confirm that an FAQ is wanted on `/engagements` and/or `/onboarding`, and route the Q&A authoring to PM/content. Composing against placeholder questions is a code smell — this composition does not invent the pairs. (Recommendation: yes for `/onboarding` process questions; `/engagements` only if the rung prose leaves real questions unanswered.)
2. **FAQ-2 — Placement on `/engagements`.** Below the End CTA, or between the Retainer rung and the summit Statement? (Recommendation: below the End CTA — the FAQ is supplementary; it should not interrupt the climb→summit→catch-all arc. On `/onboarding`, after the phase arc.)
3. **FAQ-3 — Adopt the `<Disclosure>` workaround, or wait for a zero-JS DS FAQ organism?** (Recommendation: adopt the workaround now — it is on-contract and complete. File the DS proposal only if a second consumer makes the hand-rolled frame worth eliminating.)
4. **FAQ-4 — Count + default-open.** 2–5 rows, all closed by default (recommended). Confirm, or pre-open one universal question.

This composition reaches `Approved` once FAQ-1 (the content gate) is resolved and FAQ-2/3 have Arian's calls. Until the Q&A pairs exist, it stays in `In review`.

## 8. Out of scope

- **The Q&A copy.** Content/PM's lane (FAQ-1). This composition specifies the *shape*, not the questions or answers.
- **`FAQSection` / `FAQItem` / `Accordion` adoption.** Refused on this site for the zero-JS reason above. If the site ever admits a hydration island for a genuine interactive surface, the DS organisms become available — but that is a standards conversation (R-009 revision), not a composition decision.
- **Single-open enforcement.** Requires JS; not wanted (A3).
- **DS-side proposal authoring.** §6 records the optional gap; drafting the DS API is `@poukai-inc/poukai-ui` maintainers' lane. Arian decides whether to route it.
- **JSON-LD `FAQPage` structured data.** A potential SEO win (an FAQ can emit `FAQPage` JSON-LD), but structured-data scope is PM/engineer's lane (R-038), not this composition. Flagged for PM as a possible follow-on.
- **Other surfaces.** FAQ on `/why-ai` / `/roles` / `/principles` is not proposed — those pages answer their questions in prose and do not need a collapse affordance.
