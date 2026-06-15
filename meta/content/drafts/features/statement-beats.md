---
feature: statement-beats
surfaces: ["/", "/why-ai", "/engagements"]
status: Draft
version: 0.1
lastUpdated: 2026-06-15
owner: Arian (founder)
author: pouk-ai-content
governingSpecs:
  - meta/specs/pages/home-amendment-raise-the-ceiling.md (§4.2 — home thesis-beat placement ruling: conviction lives in the lede, no Statement section on /)
  - meta/specs/pages/why-ai-amendment-raise-the-ceiling.md (§4.4 — thesis Statement pivot, a PROMOTION of the existing tail line)
  - meta/specs/pages/engagements-amendment-raise-the-ceiling.md (§4.2 — summit Statement after the four rungs)
compositionReference: none yet (designer composes the Statement beats after this draft lands — why-ai/engagements amendments §5)
---

# Content: Statement beats (`/` · `/why-ai` · `/engagements`)

**Surfaces**: `/` (lede-carried conviction, no separate Statement — IA lock), `/why-ai` (pivot Statement — promotion of existing tail line), `/engagements` (summit Statement)
**Status**: Draft — Arian word-level approval required; nothing lands until he flips status to `Approved`. The three amendments name the Statement *placement + intent*; the *words* are this draft's deliverable.
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-15

The `Statement` molecule is the site's once-per-page italic-serif conviction beat at `--fs-statement`. This draft delivers the single line each page raises its voice for. The hard discipline carried from all three amendments: a Statement **names a conviction the reader already felt**; it never sells beyond it, never adds a stat, never carries a CTA, never gets attribution or quote marks. It is the page's one raised-voice moment, not a header.

---

## 1. Drafting notes

- **Audience read**: the same operator the rest of the funnel addresses, at the moment a page asks them to *feel* its through-line rather than read it. On `/` they are at the front door; on `/why-ai` they have just absorbed five failure modes; on `/engagements` they have just climbed four rungs. The Statement is what they carry away.
- **Outcome read** (from the three amendments):
  - `/` — no Statement section (IA lock, home-amendment §4.2). The conviction *pouk.ai is a technical partner that ships, not an advisor that decks* is carried by the existing tagline + lede at display scale. Content adds no sentence. This draft **confirms** that ruling and records the conviction line as the existing lede, with the display-hero check in §6.
  - `/why-ai` — one Statement at the pivot from "what's broken" to "what the leaders do." It must land the load-bearing order-of-operations conviction: *diagnosis precedes build; that sequencing is the discipline and the reader's de-risking.* It is a **promotion** of the page's existing tail line ("The diagnosis comes before the build. That is the order pouk.ai works in." — `why-ai.json` `whereWorks.closing`), not a new claim.
  - `/engagements` — one summit Statement after the Retainer rung, before the end CTA. It restates the load-bearing thesis *the four rungs are one relationship that deepens, not four products on a shelf*, as a felt conclusion after the climb. No figures (categorical-only §7(a) is absolute on this page).
- **Voice anchor**: agent §4.1 (direct — one idea, lead with the noun), §4.6 (implied confidence over claimed — "we do this every week" beats "we are confident"; a Statement asserts, it does not promise), §4.4 (no marketing-speak — "transform / unlock" would instantly break the beat into a hero promise, the named failure mode on every page).
- **Assumptions** (flag for Arian):
  - **A1 — `/why-ai` promotes the existing line, lightly sharpened.** The amendment says "promote that existing conviction," not "author a new claim." I recommend the existing two-sentence line collapsed to one italic-serif beat (a Statement is one line, not two sentences). The collapse is the only change; the conviction is verbatim. See §2 and §5.
  - **A2 — when `/why-ai`'s line is promoted to the Statement beat, the tail prose must still read cleanly without it** (amendment §4.4, same discipline as the D-05 stat extraction). I propose the replacement tail sentence in §2 so the engineer doesn't leave a dangling reference. This is a coupled micro-edit, flagged for Arian.
  - **A3 — `/engagements` reuses the page's own load-bearing phrase** ("not four products on a shelf"), already approved in the hero lede (`engagements.md` draft §2). The summit Statement is the *payoff* of a phrase the page opened with — a deliberate bookend, not a repeat-for-repeat's-sake. See §5 risk note.
  - **A4 — `/` adds nothing.** Per the IA lock this draft is a confirmation, not a new line. If Arian later re-opens the IA for an explicit `/` Statement, that is a separate spec; the candidate line is parked in §5 for the record only, not proposed for build.

---

## 2. Copy

### Surface: `/` — conviction carried by the lede (spec: home-amendment §4.2; NO Statement section)

**No `Statement` primitive ships on `/`.** The IA lock (single Hero, no further sections) forbids a body Statement. The raise-the-ceiling conviction is carried by the **existing tagline + lede at display scale** — the display rendering *is* how the existing conviction lands harder.

- **Conviction line of record (unchanged, existing copy)**:
  - Tagline (H1): `Technical consulting for teams shipping with AI.`
  - Lede sentence 1: `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.`
- **The felt assertion both visitors leave with**: *pouk.ai is a technical partner that ships, not an advisor that decks.* Carried by "builds … for operators who'd rather ship than speculate" — no added line. Confirmed; see §6 for the display-scale check.

### Surface: `/why-ai` — pivot Statement (spec: why-ai-amendment §4.4)

Placement: between the five failure modes and "What the leaders do differently" (IA beat 7), on `--bg`, italic-serif at `--fs-statement`.

- **Statement (recommended)**: `The diagnosis comes before the build. That is the order pouk.ai works in.`

*(This is the existing `why-ai.json` `whereWorks.closing` line, promoted verbatim to the pivot. It is already the page's most quotable sentence; the move is to raise its voice at the structural pivot rather than let it close quietly in the tail. Two short sentences here read as one conviction beat — the second sentence is the turn that makes it pouk.ai's, not a general maxim. Alternatives, including a single-sentence collapse, in §5.)*

- **Coupled tail-prose edit (A2 — flag for Arian).** If the line is promoted out of `whereWorks.closing`, the tail must not dangle. The current tail closes:
  - *(current)* `… They need a partner who can diagnose which failure mode the work is in and fix it — at the intersection of business knowledge and AI tooling.` → then the discovery questions → then `The diagnosis comes before the build. That is the order pouk.ai works in.`
  - **Proposed**: the discovery-questions block now closes the section on its existing intro/closing without the promoted sentence. Replace `whereWorks.closing` with a non-conviction handoff that doesn't re-make the Statement's point: `Those four answers decide what — if anything — gets built.`

*(Rationale: the tail still needs a sentence to land the discovery-questions block, but it must not restate the order-of-operations conviction now living in the Statement, or the page makes the same point twice. "Those four answers decide what gets built" keeps the diagnosis-first logic implicit without competing with the raised-voice beat. If Arian prefers, the tail can simply end on the last discovery question with no closing line — see §5.)*

### Surface: `/engagements` — summit Statement (spec: engagements-amendment §4.2)

Placement: between the Retainer rung and the end CTA (new IA beat between base §4 items 7 and 8), on `--bg` (no band), italic-serif at `--fs-statement`. **No figures.**

- **Statement (recommended)**: `Four rungs, one relationship. It starts wherever your problem sits, and it grows from there.`

*(The line names the whole ascent the reader just made — Discovery → Pilot → Build → Retainer — as one deepening relationship, landing the "not four products on a shelf" thesis as a felt conclusion rather than a hero promise. It carries zero figures, zero CTA energy, no attribution. "It starts wherever your problem sits" echoes the hero lede and the end CTA, closing the page's loop. Alternatives in §5.)*

---

## 3. Page-level SEO copy

**None.** Statement beats are body copy; they carry no `<title>`, meta, or OG surface of their own. Page-level SEO for `/`, `/why-ai`, and `/engagements` is owned by those pages' content drafts and is unchanged by this feature. (The `/why-ai` and `/engagements` OG *card* claim lines are drafted separately in `meta/content/drafts/features/og-cards.md`.)

---

## 4. Voice rationale

- **`/` carries conviction in the lede, not a Statement** — the IA lock is authoritative; forcing a Statement onto `/` would break the single-Hero front-door discipline the whole page is built on. "Operators who'd rather ship than speculate" already does the ship-not-deck work in the reader's first read; display scale amplifies it without a new word. Adding a line would be volume, not confidence — the exact failure ("the door shouts") the amendment names.
- **`/why-ai` promotes rather than invents** — the amendment is explicit: this is a promotion, not a new claim, and the existing line is already the page's best sentence. Promoting it honors the brand's no-fabrication posture (nothing new is asserted) and rewards the structure (the conviction now lands at the pivot, where the argument turns, instead of trailing off at the foot). "That is the order pouk.ai works in" is the load-bearing half — it converts a general maxim into a statement of *this* practice's discipline, which is what makes it conviction and not a fortune-cookie line.
- **`/why-ai` tail replacement keeps the section clean** — promoting a sentence out of prose leaves a hole; "Those four answers decide what gets built" fills it without re-stating the moved conviction, the same hygiene the D-05 stat extraction required. Flagged because it's a coupled edit, not just an addition.
- **`/engagements` bookends its own thesis** — opening the page on "not four products on a shelf" and closing on "four rungs, one relationship" is a deliberate frame: the reader meets the thesis as a claim and leaves with it as something they've now experienced (they climbed the rungs in between). "It grows from there" is operator-felt, not aspirational — it names the deepening without a "transform your business" promise (the named "Statement over-claims" failure mode). Zero figures, holding the categorical-only line absolutely.
- **All three avoid the promise register** — none uses a future-tense "we will," none names an outcome pouk.ai hasn't measured, none carries a CTA verb. A Statement asserts what is true about how pouk.ai works (§4.6 implied confidence); the moment it predicts the reader's result, it becomes a hero banner and fails.

---

## 5. Headline alternatives

### `/why-ai` pivot Statement

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `The diagnosis comes before the build. That is the order pouk.ai works in.` | The existing line, promoted verbatim — zero new claim, already the page's most quotable sentence. **Recommended.** | Two sentences where a Statement is often one; the designer should confirm `--fs-statement` holds a two-sentence beat without crowding. |
| Sharpest | `Diagnosis before build — the order pouk.ai works in.` | Single line, em-dash turn; tighter at display scale, reads as one breath. | Loses the period-stop rhythm of the original; "the order pouk.ai works in" leans on the dash rather than a full second sentence — slightly less declarative. |
| Weirdest | `Everyone can build now. Almost no one diagnoses first.` | Reframes the conviction as a category observation (the AI-tooling-is-cheap, judgment-is-scarce thesis); very operator. | Drifts from the *promotion* the amendment asked for into a *new* claim — out of the stated scope; would need Arian to authorize a fresh line over a promotion. |

### `/engagements` summit Statement

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Four shapes of one relationship — not four products on a shelf.` | Restates the hero thesis almost verbatim as the conclusion; unmistakable, on-spec. | Near-verbatim repeat of the hero lede; reads as an echo rather than a payoff — a Statement should *land* the thesis, not just re-say it. |
| Sharpest (recommended) | `Four rungs, one relationship. It starts wherever your problem sits, and it grows from there.` | Names the ascent as a relationship and closes the page's loop ("wherever your problem sits" ↔ hero + end CTA) — the thesis felt, not repeated. | "Four rungs" assumes the reader climbed them — correct after the four cards, slightly opaque if the beat were ever read in isolation. |
| Weirdest | `You don't buy a tier here. You start a relationship and let it earn the next rung.` | High-conviction, directly kills the menu read; "let it earn the next rung" is pure operator. | "Let it earn" verges on a promise about results; risks the "Statement over-claims" failure mode the amendment names. Holstered unless Arian wants more edge. |

### `/` Statement — PARKED, not proposed (IA lock)

Recorded only in case Arian re-opens the IA (out of scope here). If a `/` Statement ever ships: `Most teams can build now. Few can ship and keep it running.` — the ship-not-deck conviction as a category line. **Not for build this cycle.**

---

## 6. Display hero confirmation (`/` — spec task 6)

The raise-the-ceiling reversal on `/` is **scale, not words** (home-amendment §4.1: "No new copy required … the conviction is carried by the existing tagline/lede at display scale"). Reviewing the existing copy at display scale:

- **Tagline (H1)** — `Technical consulting for teams shipping with AI.` (8 words, italic `AI`). **Confirmed unchanged.** At display scale the 8-word line is the front-door presence; the italic `AI` becomes the typographic event the amendment wants. No micro-tightening recommended — every word is load-bearing and the line is already short enough to render large without wrapping awkwardly. Shortening it would weaken the category claim ("technical consulting … shipping with AI" is the whole positioning).
- **Lede (3 sentences)** — `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate. Most AI projects fail to deliver. Here's why →`. **Confirmed unchanged.** At display scale the interval between the large serif tagline and the body lede is the "restrained-and-striking" target; the lede stays at body register and does not need shortening. The D-11 hand-off ("Here's why →") is locked.
- **One micro-watch for the designer (not a copy change)**: at display scale, lede sentence 1 is the longest single line (≈22 words). If the display title pushes the lede measure wider, sentence 1 may wrap to 3 lines on a 13–14" laptop. This is a composition concern (line-length / measure), not a copy concern — flagged for the designer's display-scale capture, not a reason to cut words. See §7.

**Recommendation: ship `/` display hero with copy verbatim.** No change.

---

## 7. Composition-fit flags

- **`/why-ai` two-sentence Statement.** The recommended line is two short sentences. Confirm `--fs-statement` (display-scale italic serif) holds two sentences on one or two lines without reading as a paragraph. If it strains, the single-sentence "Sharpest" alternative (`Diagnosis before build — the order pouk.ai works in.`) is the drop-in.
- **`/engagements` two-sentence summit.** Same check — the recommended line is two sentences. If `--fs-statement` wants one, the first sentence alone (`Four rungs, one relationship.`) can stand as the Statement with the second folded into the end-CTA lead. Not recommended (loses "it grows from there"), but available.
- **`/` lede measure at display scale.** Per §6, lede sentence 1 may wrap longer against a display title — designer's line-length call on the display-scale capture, not a copy edit. Copy does not depend on the measure.
- **`/why-ai` tail-prose coupling.** The Statement promotion requires the coupled tail edit (§2, A2). The engineer must apply both together (remove the line from `whereWorks.closing`, insert the Statement at the pivot, replace the closing) or the page states the conviction twice. Flagged as a two-part edit, not an addition.

---

## 8. Open questions for Arian

- **Q1 — `/why-ai` Statement: promote verbatim (two sentences) or collapse to one?** Recommended: promote verbatim (Safest). The Sharpest single-sentence collapse is available if the designer reports the two-sentence beat crowds `--fs-statement`. Your call on register.
- **Q2 — `/why-ai` coupled tail edit.** Approve the replacement closing `Those four answers decide what gets built.` (or elect "end on the last discovery question, no closing line"). One of the two is needed so the tail doesn't dangle once the conviction line moves up. **Blocking the `/why-ai` Statement landing cleanly.**
- **Q3 — `/engagements` summit: confirm the bookend.** The recommended line deliberately echoes the hero's "not four products on a shelf" thesis as a payoff. Confirm you want the bookend (recommended) vs. a non-echoing close. If you'd rather the summit not reuse hero vocabulary, the Weirdest option is the alternative.
- **Q4 — `/` adds nothing: confirm.** Confirm the home conviction stays lede-carried with no Statement (per the IA lock). The parked `/` line in §5 is for the record only unless you re-open the IA.

---

## 9. Out of scope

- A `Statement` *section* on `/` (IA lock — home-amendment §6). The parked line in §5 is not a build proposal.
- Any figure in any of the three lines (categorical-only on `/engagements` is absolute; `/why-ai`'s cited stats live in the stats band, not the Statement; `/` carries none).
- The `Statement` molecule's visual treatment, placement spacing, and `--fs-statement` rendering — `pouk-ai-designer`'s lane.
- The OG-card claim lines for `/why-ai` and `/engagements` — drafted in `meta/content/drafts/features/og-cards.md`.
- Re-opening D-11 (the `/` lede hand-off) or the `/why-ai` cited-stats / References round-trip (D-01).
- Wiring any of these into `src/content/*.json` or page templates — the engineer applies the approved copy.
