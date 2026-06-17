---
feature: contact-flow
status: Approved
version: 1.0
lastUpdated: 2026-06-14
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/features/contact-flow.md
relatedSpec: meta/specs/pages/onboarding.md (consumes this feature's end-CTA contract)
compositionReference: none yet (designer composes the secondary affordance beside the primary mailto after this draft lands — contact-flow.md §9)
backlogItem: FSP-3.1
revisionHistory:
  - version: 1.0
    date: 2026-06-14
    summary: v1.0 — Arian ratified all open questions; status → Approved.
  - version: 0.1
    date: 2026-06-14
    summary: First draft. Secondary booking-line copy for the six governed conversion points + footer, per contact-flow.md §4/§5. Core line offered in 3 options with a recommendation. mailto: primary stays untouched (FS-CF-1, locked). All copy DRAFT — awaiting Arian approval.
---

# Content: Contact flow — secondary booking-line copy (FSP-3.1)

**Feature**: `contact-flow` (the dual conversion mechanism)
**Dataset**: none — this feature governs CTA *treatment and placement*, not a content corpus (`contact-flow.md` §6). The copy below lands in each affected page's existing content source; the canonical booking URL is defined once as a shared value (engineer's call, §6).
**Status**: Approved — Arian ratified all open questions on 2026-06-14 (v1.0). Shipped copy traces to this Approved source (closes review finding F-102).
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-14 (v1.0)
**Governing spec**: `meta/specs/features/contact-flow.md` (§4 placement, §5 treatment discipline)
**Composition reference**: none yet. Per `contact-flow.md` §9, `pouk-ai-designer` composes how the secondary booking affordance sits beside the primary `mailto:` at each point. Composition-fit flags for that pass are in §6.

This draft delivers **only the quiet secondary booking line** — the "or grab a time →" affordance that sits *beside* the primary `mailto:` CTA at each governed conversion point. The single load-bearing constraint (FS-CF-1, locked): **`mailto:` stays primary everywhere; booking is a clearly subordinate secondary, never a peer-weight, never urgent, never forced.** Every line below is written so it cannot out-shout the email path even if a composition slips.

This draft does **not** restate or revise the primary `mailto:` copy at any surface — that copy is already approved in each page's content draft (`home.md`, `why-ai.json`, `engagements.md`, etc.). The booking line is additive.

---

## 1. Drafting notes

- **Audience read**: a ready-to-talk prospect already standing at a funnel exit. Two readiness states share the moment — the "let me write a few lines" reader (already served by `mailto:`) and the "let's just talk" reader (the booking line is for them). The booking line must be *findable* by the second reader without *recruiting* the first.
- **Outcome read** (from spec §4 + §5):
  - A second, optional path is present at each governed point (`/` Hero, `/why-ai` end, `/roles` end, `/engagements` end, `/onboarding` end, footer). `mailto:` stays primary; booking is subordinate (§5, AC).
  - No urgency, no scarcity, no exclamation, no "book now," no "limited slots," no countdown (§5 — hard).
  - One primary, one quiet secondary — never a wall of buttons (§5).
  - The booking link is a plain `<a href>` to the canonical `cal.pouk.ai` URL — copy carries no widget/embed language (§5; booking happens on `cal.pouk.ai`, linked to). [Note: the old zero-JS rationale here is superseded by D-25 (2026-06-16 JS revocation) — client JS is permitted; the plain-link treatment now stands as a design choice, not a contract requirement. a11y + reduced-motion remain binding.]
  - Trust-loop exclusion is absolute: **no booking line on `/principles` or `/about`** (§4, §10). This draft authors no booking copy for those surfaces.
- **Voice anchor**: agent §4.1 (direct — the line is short, no throat-clearing), §4.2 (operator-first — "grab a time" is how an operator talks about a calendar, not "schedule a consultation"), §4.4 (no marketing-speak — the banned list plus the spec's own anti-urgency rule), §4.6 (implied confidence — the line offers a slot, it doesn't sell one). The register target is the existing `/why-ai` end-CTA secondary line ("Or read about the four shapes…") — a quiet *or*-clause that points at an alternative without competing.
- **Assumptions** (flagged for Arian to accept or override):
  - **A1 — one canonical line, lightly varied per surface.** The core secondary line ("Or grab a time →") is the same everywhere so the dual-path pattern reads as one consistent affordance (the §3 *inconsistent-treatment* failure mode). Per-surface micro-variations (§2) only adjust the connector word where the surrounding sentence demands it; the *verb* ("grab a time") is constant. Constancy is the anti-inconsistency discipline.
  - **A2 — the booking URL is `https://cal.pouk.ai`** (FS-CF-2, locked to a single canonical URL at v1; no archetype/rung routing until the deferred fast-follow). Content owns the *label*; the engineer wires the href once as a shared value (§6, R-076).
  - **A3 — the line is an `<a>` styled as a quiet/secondary `<Button>` variant or a plain inline link** — designer's call (§5 reuses existing DS). Copy works in either treatment; it is grammatically self-contained as a standalone link and reads cleanly as a trailing *or*-clause.
  - **A4 — "→" trailing arrow is retained** to match the site's established affordance grammar (the `/` "Here's why →", `/why-ai` "Roles →", `/engagements` ladder index). The arrow is the site's consistent "this goes somewhere" cue; dropping it on the booking line would make booking read as *less* of a live destination than the email, which is the wrong kind of subordination (subordinate in *weight*, not in *legitimacy*).

---

## 2. Copy

The core secondary line is one string, reused at every governed point. Below: the recommended core line, then the per-surface placement and any micro-variation. Each surface entry maps to a `contact-flow.md` §4 row.

### Core secondary line (recommended — see §5 for the 3-option set)

- **Label**: `Or grab a time →`
- **Href**: `https://cal.pouk.ai` *(canonical, FS-CF-2; engineer wires as a shared value, §6)*
- **Treatment**: quiet/secondary — subordinate to the primary `mailto:` at every point (§5, AC). Designer composes the visual weight.

This is the default line everywhere. The per-surface notes below adjust only the framing word when the surrounding copy needs it; the verb phrase `grab a time` is constant.

### Surface: `/` Hero CTA (spec §4 row 1 — doorway; title is the primary anchor)

- **Primary (unchanged, from `home.md`)**: `hello@pouk.ai` → `mailto:hello@pouk.ai`
- **Secondary booking line**: `Or grab a time →` → `https://cal.pouk.ai`
- **Placement note**: sits below/after the primary email CTA, subordinate to *both* the title and the email per the home illustration amendment ("title is primary anchor"). This is the most restraint-sensitive surface — the doorway. If the designer judges even the quiet line breaks the holding-page restraint, the footer booking link (always present) is the fallback reach and the Hero secondary can be dropped here — flag in §6. PM lists `/` Hero as governed (§4 row 1), so default is *present, quiet*.

### Surface: `/why-ai` end CTA (spec §4 row 2 — after the discovery-questions block)

- **Primary (unchanged, from `why-ai.json` `endCta.primary`)**: `Want to start that conversation?` → `hello@pouk.ai`
- **Existing secondary (unchanged)**: `Or read about the four shapes of help pouk.ai delivers:` → `Roles →` (`/roles`)
- **Booking line (new third affordance — see §6 Flag 1)**: `Or grab a time →` → `https://cal.pouk.ai`
- **Placement note**: `/why-ai` already carries a secondary *navigational* line (to `/roles`). Adding the booking line makes three affordances in the block. **This brushes against §5's "never more than two at a conversion point."** The §5 rule governs *conversion* affordances (email + booking); the existing `Roles →` is a *navigational* hand-off, not a conversion CTA. Read that way, the conversion block still holds one primary + one secondary. Flagged for Arian + designer in §6/§7 — the resolution is a designer/PM placement call (e.g., booking line pairs with the email; the `Roles →` line stays a separate read-on hand-off), not a copy change.

### Surface: `/roles` universal end CTA (spec §4 row 3 — single end CTA per D-08; role rides as opening line)

- **Primary (unchanged)**: the universal `mailto:hello@pouk.ai` end CTA (role/archetype as the email's opening line).
- **Secondary booking line**: `Or grab a time →` → `https://cal.pouk.ai`
- **Placement note**: in the *same* end-CTA block as the primary (D-08's "no per-card CTA" holds — **no booking link on individual `RoleCard`s**, §4 row 3 / AC). One primary + one quiet secondary in the single universal block.

### Surface: `/engagements` end CTA (spec §4 row 5 — the undecided-but-ready reader)

- **Primary (unchanged, from `engagements.md` end CTA)**: `Not sure which rung is yours? Say where your problem sits and we'll find the right place to start.` → `mailto:hello@pouk.ai` (no `?subject=`)
- **Secondary booking line**: `Or grab a time →` → `https://cal.pouk.ai`
- **Per-rung note (AC enforcement, no copy)**: per-rung CTAs stay `mailto:hello@pouk.ai?subject=<Rung>` **only** — **no per-rung booking link** (§4 row 4 / §10). Booking appears only here, at the end CTA. This draft authors no per-rung booking copy.

### Surface: `/onboarding` end CTA (spec §4 row 6 — late-funnel, highest readiness)

- **Primary (from `onboarding.md` draft §2 end CTA)**: `When you're ready to talk it through, the first move is an email.` → `mailto:hello@pouk.ai`
- **Secondary booking line (micro-variation — recommended for this surface only)**: `Or skip the email and grab a time →` → `https://cal.pouk.ai`
- **Placement note**: this is the one surface where FS-CF-1 explicitly notes the booking path is *most valuable* (highest readiness) — and explicitly **declines** to make it primary ("`mailto:` primary everywhere"). The micro-variation `Or skip the email and grab a time →` is *slightly* more inviting than the bare core line, because a reader who has read all four phases is the most likely to want the synchronous path — but it stays an *or*-clause, subordinate, no urgency. If Arian prefers uniformity over the late-funnel nudge, the bare core line (`Or grab a time →`) ships here too. Recommendation: the micro-variation, because the page's whole job is operational reassurance and "skip the email" matches the reassured reader's readiness without pushing. Flagged in §7 Q3.

### Surface: `SiteShell` footer (spec §4 row 7 — utility tier, lowest weight, global)

- **Primary (unchanged, from `home.md` footer)**: `hello@pouk.ai` → `mailto:hello@pouk.ai`
- **Secondary booking link (micro-variation — utility register)**: `Book a time` → `https://cal.pouk.ai`
- **Placement note**: the footer is the **lowest-weight** treatment (§4 row 7, "utility tier"). The trailing arrow and the *or*-connector both drop here — footer links are bare utility labels (matching `© 2026 pouk.ai · hello@pouk.ai`), not in-sentence affordances. `Book a time` is the plainest possible utility label: a bare verb-phrase, no urgency, parallel to the bare `hello@pouk.ai` beside it. (Note: `Book a time` is not `Book now` — no urgency word; §5 compliant.) Both links reachable globally per AC.

### Surfaces with NO booking line (hard exclusion — authored as `None.`)

- **`/principles`**: `None.` Trust-loop page — `mailto:`-only (§4, §10). No booking copy authored.
- **`/about`**: `None.` Trust-loop page — `mailto:`-only (§4, §10). No booking copy authored.
- **`/privacy`, `/terms`**: `None.` Off-funnel (§4, §10).
- **`/scheduling`**: `None.` from this draft. `/scheduling`'s hero CTA links to `cal.pouk.ai` **as the app explainer**, governed by `pages/scheduling.md`, *not* as a funnel booking CTA (§4 / AC). Not this feature's lane.

---

## 3. Page-level SEO copy

None. This feature authors CTA-affordance labels only — no page titles, meta descriptions, or OG copy. Page-level SEO for each affected route lives in that route's own content draft. `None.`

---

## 4. Voice rationale

One clause per significant choice so a future revision argues against a reason.

- **Core line — `Or grab a time →`** — chosen over the obvious "Book a call" / "Schedule a meeting" because (a) `grab a time` is operator-register (agent §4.2 — how someone who runs a calendar actually talks), (b) the leading `Or` makes it a subordinate *alternative* to the primary email rather than a competing call-to-arms, structurally encoding the "secondary, never peer-weight" discipline (§5) into the grammar itself, and (c) it carries zero urgency/scarcity (§5, hard) — no "now", no "today", no exclamation. "A time," not "a call" or "a meeting," keeps it the lightest-commitment framing (you're grabbing a slot, not committing to a formal call).
- **The leading `Or`** — does double duty: it signals *alternative-not-replacement* (FS-CF-1: beside, never replace) and it makes the line read as the second clause of a two-path offer, which is exactly the primary/secondary relationship §5 demands. A line that opened "Grab a time →" with no `Or` would read as a co-equal first option; the `Or` subordinates it for free.
- **The trailing `→`** — matches the site's established affordance grammar (`Here's why →`, `Roles →`). Keeps booking a *legitimate live destination* (subordinate in weight, not in legitimacy — A4). Dropping it would make booking read as a lesser-quality option than email, the wrong subordination.
- **`/onboarding` micro-variation — `Or skip the email and grab a time →`** — "skip the email" names the synchronous path's actual benefit for the most-ready reader (no async round-trip) without urgency or scarcity. Justified only on the late-funnel surface where readiness is highest (§4 row 6 note). Still an *or*-clause, still subordinate.
- **Footer micro-variation — `Book a time`** — the footer is a utility row of bare labels, not in-sentence affordances; `Or grab a time →` would read oddly stripped of its sentence context. `Book a time` is the plain utility parallel to `hello@pouk.ai`. Deliberately **not** `Book now` (urgency word, §5-banned) — `Book a time` is a neutral destination label.
- **No urgency / scarcity / exclamation anywhere** — direct compliance with §5 and the §3 *booking over-push* failure mode. The line never says "limited slots", "book now", "today", or carries a "!". The whole point is that the booking path is *available*, not *demanded*.

**Cross-surface consistency check** (§3 *inconsistent-treatment* failure mode): the verb phrase `grab a time` is constant at the four in-sentence surfaces (`/`, `/why-ai`, `/roles`, `/engagements`); `/onboarding` extends it ("skip the email and grab a time"); the footer is the only register-shift (bare utility label `Book a time`). One affordance, one voice, two principled register adaptations (late-funnel nudge + utility footer). No surface invents its own treatment.

---

## 5. Headline alternatives — the core secondary line

The core line is the one high-stakes string (it repeats across five surfaces). Three options, recommendation marked.

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Or book a time →` | Conventional, unambiguous, zero urgency. Everyone understands "book a time." | "Book" is faintly more transactional/formal than "grab"; reads a touch more like a vendor calendar than an operator conversation. Acceptable, slightly off-register. |
| Sharpest (recommended) | `Or grab a time →` | Operator-register; `grab` is casual-confident, lowest-commitment framing; the `Or` subordinates it structurally; matches the site's existing *or*-clause secondary pattern (`/why-ai`). | "Grab" is the most informal word; on the doorway (`/`) a reviewer might want the marginally more formal "book". Mitigated by the footer using `Book a time` already, so both registers coexist intentionally. |
| Weirdest | `Or just talk to us →` | Most human; frames booking as a conversation, not a calendar transaction; lowest friction emotionally. | "Talk to us" implies fake plurality ("us"/"we-as-team") — collides with the `/about` voiceContract ban on implied-we and the brand's no-fake-plurality rule. Also doesn't name the *action* (booking a slot). Rejected on the plurality ground unless Arian wants the warmer register and accepts a rephrase ("Or just book a time to talk →"). |

**Recommendation: `Or grab a time →`** at the four in-sentence surfaces, `Book a time` at the footer, `Or skip the email and grab a time →` at `/onboarding`. If Arian prefers strict uniformity, `Or grab a time →` ships at all five in-sentence/end surfaces and `Book a time` at the footer.

---

## 6. Composition-fit flags

For the designer's pass (the secondary affordance beside the primary `mailto:` at each point — `contact-flow.md` §9).

- **Flag 1 — `/why-ai` three-affordance block.** `/why-ai`'s end CTA already carries a primary email line *and* an existing secondary navigational line (`Roles →`). Adding the booking line makes three links in the block. §5 says "never more than two [conversion affordances] at a conversion point." The `Roles →` line is *navigational* (a read-on hand-off), not a *conversion* affordance, so the conversion pair (email + booking) still holds — but the designer must compose the block so the three reads don't stack into a wall (the §3 *friction-increase* failure). PM/designer call: e.g., booking sits with the email as the conversion pair; `Roles →` stays visually distinct as the read-on line. **No copy change available to resolve this — it's a placement/weight decision.** Flagged to Arian in §7 Q2.
- **Flag 2 — doorway restraint on `/`.** The Hero secondary booking line is the most restraint-sensitive placement. The booking line must stay subordinate to *both* the title (primary anchor) and the email CTA. If the quiet line still breaks the holding-page restraint in composition, the footer booking link is the always-present fallback and the Hero secondary can be dropped (designer + Arian call). Default: present, quiet.
- **Flag 3 — booking line as `<Button>` secondary variant vs. inline link.** §5 expects reuse of the existing `<Button>` (a quiet/secondary variant). If no quiet-secondary `<Button>` variant exists, that's a DS proposal Arian files — *not* a copy change. The copy works as either a quiet button or a plain inline `<a>`; it's grammatically self-contained.
- **Flag 4 — footer two-link utility tier.** The footer gains a second utility link (`Book a time` alongside `hello@pouk.ai`). The designer composes the footer so both sit in the utility tier at the lowest weight (AC: both reachable globally). The current footer line is `© 2026 pouk.ai · hello@pouk.ai`; where `Book a time` slots in (a third middle-dot segment, or a separate utility row) is a designer call, not a copy call.

---

## 7. Open questions for Arian

**All resolved — Arian ratified 2026-06-14 (v1.0). Recorded below; shipped copy matches.**

- **Q1 — core line: `grab` vs. `book`.** **RESOLVED — keep the split.** `Or grab a time →` in-sentence (the four in-sentence surfaces + `/onboarding`); `Book a time` in the footer. The split is intentional register adaptation (operator in-sentence, bare utility label in the footer), not inconsistency.
- **Q2 — `/why-ai` three-affordance block.** **RESOLVED — ADD booking.** Email + booking is the conversion pair at `/why-ai`'s end CTA; the existing `Roles →` line stays a separate navigational hand-off, not a third conversion affordance. §5's "never more than two conversion affordances" holds (the conversion pair is two). Designer composes the block so booking pairs with the email and `Roles →` stays visually distinct as the read-on line (§6 Flag 1).
- **Q3 — `/onboarding` micro-variation.** **RESOLVED — use the micro-variation.** `/onboarding` end CTA ships `Or skip the email and grab a time →` (the gentle late-funnel nudge, still subordinate, no urgency). Cross-referenced in `pages/onboarding.md` §2 / §7 Q4.
- **Q4 — `/` Hero booking line: present or footer-only?** **RESOLVED — present (quiet).** The `/` Hero secondary booking line is PRESENT but quiet, subordinate to both the title (primary anchor) and the email CTA, per §4 default.
- **Register split — RESOLVED.** Secondary `<Button>` beside the email `<Button>` on the `/` Hero; muted link beside the email link on the other funnel pages. (Designer composes the exact variant; copy works in either treatment per A3 / §6 Flag 3.)

---

## 8. Out of scope

- **Any change to the primary `mailto:` copy** at any surface — already approved per each page's content draft; the booking line is purely additive.
- **A booking line on `/principles` or `/about`** — trust-loop exclusion, hard rule (§4, §10). Authored as `None.` in §2.
- **A booking line on `/privacy`, `/terms`** and the `/scheduling` *app* CTA — off-funnel / different lane (`pages/scheduling.md`). `None.` here.
- **Per-rung booking links on `/engagements`** and **per-card booking links on `/roles`** — §4 / §10 / D-08. Booking appears only at end CTAs.
- **The booking URL value and the shared-constant mechanism** — engineer's call (§6, R-076). Content owns the *label*; href is `https://cal.pouk.ai` (FS-CF-2, locked single URL at v1).
- **Booking-context routing** (archetype/rung in the booking URL) — deferred to a fast-follow (FS-CF-2). v1 is one canonical URL.
- **Any embedded `cal.com` widget / iframe / island / modal copy** — booking happens on `cal.pouk.ai`, linked to (§5, §10). No widget language authored.
> Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding. (The link-not-embed treatment stays as a design choice, not a JS-contract requirement.)
- **Visual weight, button variant, footer slot, the beside-the-primary composition** — `pouk-ai-designer`'s lane (§6 hands these off).
