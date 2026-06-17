---
feature: vs-alternatives
surface: /why-ai
status: Approved
version: 1.0
lastUpdated: 2026-06-16
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/why-ai-amendment-raise-the-ceiling.md (§4.5 — vs-alternatives section; §6 — placement resolved into /why-ai, not a route, not /engagements)
relatedSpec: meta/assessments/sales-content-gaps.md §4 #2 (placement) + §3 (closes the DIY objection the /roles Builder card opens)
compositionReference: none yet (designer chooses the vehicle — FailureMode-style register or short prose — why-ai-amendment §4.5)
---

# Content: vs-alternatives (`/why-ai`)

**Surface**: `/why-ai`, new IA beat 12 — after the `whereWorks` body + `discoveryIntro` prose, before the discovery-questions `<blockquote>` (amendment §2 item 12 / §4.5 corrected placement).
**Status**: Approved — Arian approved all four open Qs as recommended (Q1 Sharpest heading, Q2 keep the in-house generosity line, Q3 keep the named tool stack, Q4 placement confirmed) on 2026-06-16. All four §7 questions resolved below. Cleared for designer composition + engineer build.
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-16
**Governing spec**: `meta/specs/pages/why-ai-amendment-raise-the-ceiling.md` §4.5 (honest trade-off framing) + §4.5a (content-data shape) + §6 (placement resolution)

The one explicit differentiation surface on the site, and the payoff for the destination homepage's `See when to hire us, and when not to →` link (review F-101). The load-bearing bet: it wins **by candor, not by dunking**. The register is "X is the right call when…; pouk.ai is the right call when…", categorical and generous to every alternative. The named failure mode — "vs-alternatives slides into dunking" — is worse than omitting the section. Every line below is written against that, and against the absolute no-invented-metrics guardrail.

**House style — em-dashes retained (ratified).** `/why-ai` uses em-dashes deliberately (OMC-V4; see `why-ai.astro` decisions). The zero-em-dash rule was a HOME-cycle-only constraint and does **not** apply here. This section uses em-dashes so it reads as one voice with the rest of the page.

**This section is the fuller comparison the homepage compresses.** The Approved `home-destination-sections.md` §2 Section 4 differentiation preview (~44 words: build-yourself / generic-agency / in-house, each sometimes right, pouk.ai earns its place when the integration is the hard part and it must keep running after the demo) is the homepage teaser; this section is its full pay-off — three named beats, each with its own honest "right when…" condition, materially richer than the preview, and it must not read as a paraphrase of the same 44 words.

---

## 1. Drafting notes

- **Audience read**: a `/why-ai` reader actively forming the *category* judgment — silently weighing pouk.ai against the three things they could do instead. They are technical or technical-adjacent, have shipped before, and have probably already half-decided "I'll just do this with Lovable myself." They will trust the section only if it is honest enough to tell them when *not* to hire pouk.ai.
- **Outcome read** (from §4.5):
  - Name the three real alternatives a buyer weighs: **DIY (with Lovable / Claude / etc.)**, **a generic AI agency**, **hiring in-house** — and for each, when that choice is *right* and when pouk.ai is right.
  - Honest trade-off register; **not** a comparison table, **not** competitor-bashing, no named-competitor logos, no pejoratives.
  - **Categorical only — zero figures.** No "3× faster," no cost claims, no fabricated comparison numbers. Positioning prose only. Adds **no** cited stats, therefore **no** new References entries (the D-01 round-trip stays complete).
  - Explicitly closes the DIY-self objection the `/roles` Builder card invites.
- **Voice anchor**: agent §4.2 (operator-first — the reader can build; respect that), §4.4 (no marketing-speak — and the section-specific drift to guard is *dunking*, which reads as insecurity), §4.6 (concrete over abstract — name the actual condition under which DIY wins, e.g. "the workflow is simple and you have the time," not "for smaller needs"). The generosity is the brand move: a brand confident enough to send you elsewhere reads as the one worth hiring.
- **Assumptions** (flag for Arian):
  - **A1 — three alternatives, parallel structure.** Each gets a two-part beat: *"[Alternative] is the right call when …"* then *"pouk.ai is the right call when …"*. Parallel structure makes the section scan as honest assessment, not a sales funnel. The composition vehicle (FailureMode-style rungs or prose) is the designer's call (§4.5); copy is written to survive either.
  - **A2 — one short lead-in framing line** sets the candor posture before the three beats, so the reader reads the comparisons as genuinely two-sided. Without it, three "pouk.ai is right when" clauses in a row could still read as a pitch.
  - **A3 — one short closing line** lands the through-line (the common condition under which pouk.ai is the answer: the integration/shipping/keeping-it-running is the hard part) and hands off to the discovery questions that follow.
  - **A4 — the DIY beat carries the `/roles` Builder objection.** Per §4.5, a reader who thought "then why not DIY with Lovable myself?" gets the candid answer here. The DIY beat is the most important of the three and is written to be unmistakably generous about when DIY is correct.

---

## 2. Copy

Section heading + lead-in + three trade-off beats + closing handoff. IA beat 12, on `--bg` (no band — the page's one fill band is the stats opener).

### Block: Section heading (spec §4.5 — new beat)

- **Heading (H2)**: `When to hire pouk.ai — and when not to`

*(The "and when not to" is the candor signal up front. It promises the reader the section is two-sided before they read a word of it. Alternatives in §5.)*

### Block: Lead-in (A2 — sets the candor posture)

- **Lead-in**: `pouk.ai isn't the right answer for every AI problem. Most teams weigh three other options first — doing it themselves, hiring a generic AI agency, or building an in-house team. Here's the honest read on when each of those is the better call, and when it isn't.`

### Beat 1: DIY — with Lovable, Claude, and the modern tool stack (A4 — closes the `/roles` Builder objection)

- **Right when**: `Doing it yourself is the right call when the workflow is simple, the stakes of getting it wrong are low, and you have the time and the appetite to learn the tools. The modern stack — Lovable, Claude, Supabase — genuinely collapses what used to take a dev team months into days. If you can describe the thing precisely and it lives in one system, build it yourself. You'll learn more, and you won't need anyone.`
- **pouk.ai when**: `pouk.ai is the right call when the hard part isn't building the thing — it's wiring it into the systems you already run, getting the data where it needs to be, and keeping it working after the demo. That's the seam where DIY pilots stall: not the model, the integration. When shipping it and supporting it matters more than standing it up, that's the work pouk.ai does.`

### Beat 2: A generic AI agency

- **Right when**: `A generic AI agency is the right call when you need volume, breadth, or a known commodity delivered to spec — a batch of content, a standard chatbot, a horizontal AI layer rolled out wide. If the work is well-understood and the value is in throughput, an agency built for throughput will serve you well.`
- **pouk.ai when**: `pouk.ai is the right call when the work is specific to your business and the diagnosis matters more than the deliverable — when you need someone to figure out which failure mode you're actually in before anyone builds, then engineer the fix at the intersection of your domain and the tooling. The depth is the point, not the breadth.`

### Beat 3: Hiring in-house

- **Right when**: `Hiring in-house is the right call when AI is core to your product, the work is permanent, and you can attract and keep the talent. If you'll be building and running AI systems for years, owning that capability beats renting it — and a strong in-house team is the best outcome there is.`
- **pouk.ai when**: `pouk.ai is the right call when you need the work done well before that team exists — or when the job is to build the system and hand it over so your team can run it without being on the hook to have hired for it first. Good engagements end with your people owning the result, not depending on pouk.ai.`

### Block: Closing handoff (A3 — lands the through-line, hands to discovery questions)

- **Closing**: `The pattern underneath all three: pouk.ai earns its place when the integration is the hard part and the work has to keep running after handoff. If that's the shape of your problem, the diagnosis starts with a few questions.`

*(The closing names the common condition once, then hands directly into the discovery-questions blockquote that follows in the IA. It avoids restating each beat — it abstracts them. This sentence is the through-line the homepage preview compresses to ~44 words; here it lands as the conclusion the three full beats earn, not as the whole argument — so the section reads as the richer pay-off the homepage teaser promised, not a paraphrase of it.)*

---

## 3. Page-level SEO copy

**None.** This is a body section on `/why-ai`; it carries no `<title>`, meta, or OG of its own. The `/why-ai` page meta is unchanged by this section, and — critically — this section **adds no cited stats and therefore no new References entries** (the D-01 round-trip stays complete, per §4.5 guardrail). The `/why-ai` OG-card claim line is drafted in `meta/content/drafts/features/og-cards.md`.

- **Heading hierarchy**: the section heading `When to hire pouk.ai — and when not to` is an **H2**, peer to the other `/why-ai` section headings ("Why projects fail — the five failure modes", "What the leaders do differently", "Where pouk.ai works — business knowledge meets AI tooling" — the real shipped `whereWorks.heading`), descending cleanly from the single page H1. The three alternative names (DIY / agency / in-house) are **not** headings — they are labels or rung titles within the section (designer's vehicle call); if the designer renders them as a heading level, they are **H3** under the section H2, never skipping a level. Flagged in §6.

---

## 4. Voice rationale

- **Heading "When to hire pouk.ai — and when not to"** — the "and when not to" is the entire posture in four words. A reader scanning headings learns, before reading, that this section will tell them when to walk away — which is exactly what earns the trust the section needs. A bare "How pouk.ai compares" would signal a comparison table, the named failure mode.
- **Lead-in "pouk.ai isn't the right answer for every AI problem"** — opening on the limitation, not the pitch, is the candor move; it inoculates every "pouk.ai is right when" clause that follows against reading as sales. "Most teams weigh three other options first" names the alternatives as legitimate defaults, not strawmen.
- **DIY "If you can describe the thing precisely and it lives in one system, build it yourself"** — the most generous line in the section, and deliberately so: it tells a capable reader to *not hire pouk.ai* under a real, common condition. "You'll learn more, and you won't need anyone" is the candor turned all the way up — it's the opposite of a sales pitch, which is what makes the next clause credible. This is the line that closes the `/roles` Builder objection: the reader who thought "why not DIY?" gets told *yes, do that — here's exactly when*.
- **DIY "the hard part isn't building the thing — it's wiring it into the systems you already run"** — the pouk.ai condition stated as a category fact, not a brag. "That's the seam where DIY pilots stall: not the model, the integration" reuses the launch essay's exact thesis ("pilots stall at integration, not at the model"), so the differentiation rhymes with the proof already on the site — without a number, without citing the essay inline.
- **Agency "if the work is well-understood and the value is in throughput, an agency built for throughput will serve you well"** — generous and accurate; an agency is genuinely better at volume. "The depth is the point, not the breadth" is the one-line pouk.ai differentiator against agencies, stated without disparaging agencies (breadth is a virtue, just a different one).
- **In-house "a strong in-house team is the best outcome there is"** — the most counterintuitive generosity: telling a buyer that hiring beats hiring you, when that's true. It's credible precisely because it's against interest. The pouk.ai condition ("done well before that team exists … hand it over so your team can run it") reframes pouk.ai as the bridge *to* in-house, not the competitor *of* it — which inherits the `/about` and `/onboarding` "systems an in-house team can run, not lock-in" posture.
- **Closing "earns its place when the integration is the hard part and the work has to keep running after handoff"** — abstracts all three beats into one condition, so the section concludes on a single memorable criterion rather than a recap. "Earns its place" is implied-confidence register (§4.6), not claimed superiority. Hands to the discovery questions without a CTA.
- **No numerals, anywhere** — the section is positioning prose only. The temptation (every comparison section reaches for "X% faster / cheaper") is the exact failure the guardrail names; the section wins on the honesty of the conditions, not on fabricated math.
- **No named-competitor pejoratives** — "Lovable, Claude, Supabase" appear only as the DIY *tool stack the reader would use* (named generously, as capable tools — consistent with `roles.json` Builder), never as competitors being beaten. "Generic AI agency" and "in-house team" are categories, not named firms. Nothing here would embarrass pouk.ai if a competitor read it.

---

## 5. Headline alternatives

High-stakes line: the section heading.

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `When pouk.ai is the right call` | Clear, names the section's job, on-voice. | Only one-sided — loses the "and when not to" candor signal that makes the section trustworthy. |
| Sharpest (recommended) | `When to hire pouk.ai — and when not to` | The candor posture is in the heading itself; a heading-scanner learns the section is two-sided before reading. | Slightly longer; the em-dash second clause must not wrap awkwardly at small viewports (designer check). |
| Weirdest | `Reasons not to hire pouk.ai` | Maximum candor, very arresting; the anti-pitch heading. | Risks reading as falsely modest / a reverse-psychology trick if the body doesn't fully deliver the generosity; also under-promises the pouk.ai-is-right half. Holstered. |

*(No alternatives offered for the three beats themselves — their structure is fixed by §4.5's "right when / pouk.ai when" parallelism; word-level edits are Arian's in review.)*

---

## 6. Composition-fit flags

For the designer's vehicle choice (§4.5: FailureMode-style register **or** short prose).

- **Flag 1 — vehicle parity across three beats.** Each beat is a two-part unit (alternative-right / pouk.ai-right). If the designer uses the `FailureMode` rung register, each beat is one rung with two prose sentences; if prose, each is a short paragraph pair. Copy survives either — each clause is grammatically self-contained.
- **Flag 2 — beat length.** Beat 1 (DIY) is the longest (it carries the `/roles` objection and runs ~4 sentences across the two parts). Beats 2–3 are tighter. If the chosen vehicle wants visual parity, the DIY beat is the one to size for; the trim candidate is the DIY "Right when" final sentence ("You'll learn more, and you won't need anyone") — but it's the candor peak, so trimming it costs the most. Flagged, not recommended.
- **Flag 3 — heading levels.** Section heading is H2. If the three alternative names render as headings, they are H3 (no skipped level). If they render as inline labels / rung titles (the `FailureMode`-style index does this), they are not headings and the outline stays clean. Designer's call; either is valid.
- **Flag 4 — no Stat atoms, no superscripts.** The section must render **zero** `Stat` atoms and **zero** cited-source superscripts (the D-01 round-trip guardrail, §4.5). Copy contains no figures; the designer must not introduce a stat treatment here. Flagged so the depth pass doesn't reflexively add a band/stat to "balance" the page — this section stays on `--bg`, type-only.

---

## 7. Open questions for Arian — RESOLVED (2026-06-16)

All four resolved at `Approved`. Recorded here so a future revision sees the decision and its reason.

- **Q1 — section heading. RESOLVED: Sharpest.** Heading is `When to hire pouk.ai — and when not to`. This pays off the shipped homepage link `See when to hire us, and when not to →` (`home.json`) verbatim-in-spirit: a reader who clicks "and when not to" lands on a heading that delivers the two-sided "when to / when not to" promise (closes F-101 / amendment §4.5 link-reciprocity AC). The em-dash second clause is on the page's house style (OMC-V4). A bare "How pouk.ai compares" would have failed the AC.
- **Q2 — in-house generosity line. RESOLVED: keep.** `a strong in-house team is the best outcome there is` ships as written. The against-interest candor is exactly what makes the section credible; dialing it to "a great outcome" would soften the one line that earns the reader's trust. Confirmed comfortable shipping.
- **Q3 — DIY tool naming. RESOLVED: keep.** `Lovable, Claude, Supabase` stay, named as the capable DIY tool stack (consistent with the `/roles` Builder card and `/about`), never as competitors being beaten. They ground the DIY option concretely and generously. Not genericized.
- **Q4 — placement. RESOLVED: confirmed.** Section stays on `/why-ai`, inserted after `whereWorks.body` + `whereWorks.discoveryIntro` and before the discovery-questions `<blockquote>` (amendment §2 item 12 / §4.5a). Not `/engagements`, not a new route. No revisit of amendment §6.

**Remaining non-content dependency (not blocking content `Approved`):** the §4.5a designer adjacency flag — whether `whereWorks.discoveryIntro` still reads as a clean lead-in once this section sits between it and the questions, or whether `discoveryIntro` repositions to immediately precede the blockquote. That is a composition call for `pouk-ai-designer`; it only routes back to content if it forces a copy change.

---

## 8. Out of scope

- Any figure, percentage, cost, time, or fabricated comparison number (categorical-only, §4.5 — absolute). This draft contains zero numerals by design.
- A comparison table, feature grid, "us vs. them" matrix, or named-competitor logos (the named failure mode).
- New cited stats / new References entries (the D-01 round-trip stays complete — §4.5).
- A `Stat` atom, a `--surface-section` band, or any stat treatment in this section (stays type-only on `--bg`).
- A new route for vs-alternatives, or re-homing it to `/engagements` (resolved against — amendment §6).
- `Quote` / `TestimonialBlock` (gated on real permissioned quotes — not proposed).
- The composition vehicle, heading levels as rendered, spacing — `pouk-ai-designer`'s lane.
- Wiring into `src/content/why-ai.json` or the `why-ai.astro` template — the engineer applies approved copy.
