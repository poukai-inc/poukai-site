# Spec: Onboarding

**Route**: `/onboarding`
**Status**: Approved — decisions locked, ready for content + designer (2026-06-14). Arian approved the full final-state push and locked this page's open product decisions (see §9 RESOLVED). Remaining items are downstream build dependencies, not open questions. NEW route. Specced-in-backlog as NPP-1 (2026-05-19); this is its first real page spec.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved; §9 decisions flipped OPEN → RESOLVED)
**Decisions log**: FS-OB-1 (pricing → COMPRESS, no numerals — "transparent SOW, milestone-based payments", matching `/engagements` categorical-only), FS-OB-2 (nav placement → footer-utility tier + funnel cross-links, NOT primary nav) — both resolved via Arian's approval of `meta/specs/final-state-strategy.md` on 2026-06-14.
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout), 4.4 (long-form content as data). **Masterplan delta**: takes the route count 12→13; R-007 amendment owed (see §9 and `final-state-strategy.md` §7.2).
**Strategy reference**: `meta/specs/final-state-strategy.md` §1.3 (journey), §3.1 (new-page rationale), §6.2 (underperformance: no operational-reassurance stage), §8 Phase 4 (rollout).
**Source content**: `meta/backlog.md` NPP-1 (2026-05-19) — the four-phase framework (verbatim source) + the founder's audience-flip brief. The page is a *reframe*, not a port.
**Coupled feature spec**: `meta/specs/features/contact-flow.md` (owns the end CTA's dual contact mechanism).

---

## 1. Purpose

`/onboarding` is the funnel's **operational-reassurance stage**. A serious prospect at the bottom of the funnel — agreed there's a problem (`/why-ai`), found their archetype (`/roles`), understood the engagement shapes (`/engagements`) — holds one last objection before they write: *"if I say yes, will this be a chaotic, unscoped, unaccountable engagement?"* The site is currently silent on it. `/onboarding` answers it by showing pouk.ai's actual operating model — a four-phase engagement (Discovery → Scoping → Build → Handoff) with named deliverables, named owners, and a day-30 check-in — reframed from the prospect's standpoint: *"here's what the first six weeks of working with pouk.ai actually look like."* It converts method into evidence and de-risks the commitment. The conversion event is the same as the rest of the funnel: a qualified conversation (email or booking), now arriving from a prospect who has seen *how the work runs*.

## 2. Audience

- **Primary**: A late-funnel prospect (founder / operator / engineering leader) who is seriously considering hiring pouk.ai and wants to know how the engagement actually runs before committing. They have likely read `/why-ai` + `/roles` + `/engagements`. They are evaluating operational risk, not whether AI matters.
- **Secondary**: A returning referrer or prospect who wants a single linkable "here's how they run an engagement" URL to reassure a stakeholder (a skeptical exec, a procurement contact). The operational-credibility equivalent of a `/roles#anchor` or `/engagements#rung` deep link.

## 3. Success criteria

- **Behavior**: The visitor reads the four phases, recognizes a structured, accountable method (not improvisation), and converts (email or booking) with materially lower perceived risk — often referencing a phase ("we'd want to start with your Discovery"). They leave understanding the engagement has shape, owners, and checkpoints.
- **Signal**: Qualitatively — inbound emails reference the onboarding method ("your day-30 check-in is exactly what our last vendor lacked"; "we like that Discovery is paid and scoped"). Referrers send the URL to de-risk an intro. When analytics arrive: scroll depth across the four phases and conversion-click-through from `/onboarding` are the read-outs.
- **Failure modes**:
  - **Reads as generic consultant advice.** The page sounds like the source article (advice *to* a consultant) instead of a description of *how pouk.ai works for the prospect*. The audience-flip is load-bearing (§5); if it slips, the page fails.
  - **Reads as a process brochure.** Phases described abstractly ("we discover, we scope, we build, we hand off") without the concrete specificity (named deliverables, the paid Discovery, the day-30 check-in) that makes them evidence. Specificity is the differentiation.
  - **Pricing mis-step.** A dollar-figure / day-rate appears, contradicting the `/engagements` categorical-only posture and inviting tier-shopping (see §5 pricing decision).
  - **CTA over-push.** Phase-level CTAs or urgency — off-register. One quiet end CTA (via `contact-flow`), like the rest of the funnel.

## 4. Information architecture

**Opinionated call: one page, four phase sections, with anchor IDs (`#discovery`, `#scoping`, `#build`, `#handoff`). Not four routes.** The four phases are read as one sequence — the page's job is to show the *arc* of an engagement, which fragments if split. This mirrors the `/why-ai` (`FailureMode` sequence) and `/engagements` (rung sequence) IA discipline. PM expects the phase sections to reuse the `/why-ai` `FailureMode`-register pattern (numbered section: index + title + prose), so no new DS molecule is anticipated.

1. `SiteShell` — top nav + hairline footer. Nav order per the final IA (`Why AI · Roles · Engagements · Principles · About`). **`/onboarding` is not a primary-nav item** (footer-utility + funnel cross-links — §9 decision); so no nav item is marked current (or the engineer marks none current, consistent with off-nav pages).
2. `Hero` — eyebrow ("Onboarding" or "How we work together" — content-drafter's call), title, lede framing the page as *what saying yes looks like* — the first six weeks, in concrete terms, from the prospect's standpoint.
3. **Phase index (recommended)** — a one-line jump nav listing the four phases in order, each linking to its anchor. Typographic; reinforces the sequence (these are phases you move through, not options).
4. **Phase — Discovery** (`#discovery`). What pouk.ai does in the first 1–2 weeks with the prospect's team; the paid-discovery posture; the Discovery Brief deliverable; the four discovery questions (echoing `/why-ai`).
5. **Phase — Scoping** (`#scoping`). The SOW pouk.ai writes from the Discovery Brief; what the SOW defines (deliverables, explicit out-of-scope, milestones, payment structure, data-access timeline).
6. **Phase — Build** (`#build`). What shipping looks like inside the prospect's stack — layered delivery, prototype-on-sample-data first, real-data integration, testing/iteration, quality metrics from day one.
7. **Phase — Handoff** (`#handoff`). What the prospect's in-house team owns when the engagement ends — documentation, live walkthrough, the day-30 check-in (and how the next engagement begins there).
8. **(Optional) Pricing posture** — if Arian ratifies a pricing presence, a single categorical block (no figures) on how pouk.ai structures price (transparent SOW, milestone-based payments). See §5 decision; PM lean is to fold this into Scoping rather than a standalone block.
9. **End CTA** — a single closing block via `features/contact-flow.md` (email + booking). Differentiated wording from `/engagements`, `/roles`, `/principles` end CTAs.
10. `SiteShell` footer.

## 5. Content requirements

Substance drafted by `pouk-ai-content` after this spec lands, against `meta/backlog.md` NPP-1 source + founder brief. Outcomes:

- **The audience flip is the load-bearing move.** The source addresses a fellow consultant ("you, structuring your engagement"). The page addresses a *prospect* ("here's how an engagement with pouk.ai runs once you say yes"). Same four-phase bones, prospect-facing voice. This is the same prospect-audience contract that governs `/why-ai` and `/principles`. If the copy slips into consultant-advice register, the page fails (§3).
- **Each phase is concrete, not abstract.** Named deliverables (Discovery Brief, SOW), the paid-Discovery posture, the layered build, the day-30 check-in. Specificity *is* the reassurance — "we discover then build" is not evidence; "the first two weeks produce a 2–4 page Discovery Brief naming the workflow, the data risk, the named owner, and the 90-day success metric" is.
- **Reuse the funnel's existing vocabulary.** Discovery echoes the `/why-ai` four discovery questions; Build echoes the `/why-ai` leaders pattern (start small, measure, expand); Handoff echoes the `/about` "systems an in-house team can run, not decks" posture; the phases align with the `/engagements` rungs (Discovery↔Discovery, Pilot↔early Build, Build↔Build, Retainer↔post-Handoff). The page should feel continuous with `/engagements`, not redundant: `/engagements` is the *commercial shape*; `/onboarding` is the *operational run*.
- **Pricing — RESOLVED: COMPRESS, no figures (FS-OB-1, Arian 2026-06-14).** The source's specific day-rates ($800–$2,500/day) and payment terms (50/50) do **not** appear. Pricing is expressed categorically only — "transparent SOW, milestone-based payments", no numerals — folded into the **Scoping** phase `body` (not a standalone block). Rationale: naming day-rates invites tier-shopping and contradicts the `/engagements` §7(a) categorical-only posture; this keeps `/onboarding` and `/engagements` consistent (no re-reconciliation of `/engagements` §10 needed — the figures option was not taken).
- **The "first client" section retires entirely.** It's consultant-self-talk (network-leverage advice). Does not translate to a prospect page. Per the founder brief.
- **Tone: engaging, faster than `/about` v2.1.** Closer to `/roles`'s diagnostic-and-invitational tempo. Brand-voice contract holds (no marketing-speak, no fake-plurality "we"-as-team, no aphorisms). **The literal word "seamless" is likely banned** (too marketing-flavored per the founder brief) — show seamlessness through specificity (named phases, named owners, day-30 check-in), don't claim it.
- **One quiet end CTA.** No phase-level CTAs, no urgency, no stacked buttons. The end CTA offers the dual contact mechanism via `contact-flow`.

`Draft:` lede direction (illustration only — Arian/content write the final): "Saying yes to pouk.ai starts a four-phase engagement: discovery, scoping, build, handoff. Here's what the first six weeks actually look like." Direction only.

## 6. Content data shape

The four phases are stored in `src/content/onboarding.json`, shaped like `failure-modes.json` / `engagements.json` — a top-level **array of four phase objects** in fixed order (Discovery → Scoping → Build → Handoff). The full content-data spec is owed at `meta/specs/content/onboarding.json.md` (PM authors next, before engineer build — see §9). Recommended shape (formalized in that spec):

```jsonc
[
  {
    "id": "string — kebab-case phase slug; the anchor (e.g., 'discovery' → '#discovery'). Unique. One of 'discovery' | 'scoping' | 'build' | 'handoff'.",
    "index": "number — 1..4, the phase number; render order is significant (the arc).",
    "title": "string — bare phase name. Required.",
    "duration": "string — categorical duration cue (e.g., '1–2 weeks'); NO price. Optional.",
    "body": "string | string[] — prospect-facing prose for the phase. Plain text or lightweight markdown (bold/italic only). NO dollar figures.",
    "deliverable": "string — the named artifact this phase produces (Discovery Brief, SOW, …). Optional but recommended — it is the concreteness that does the reassurance work."
  }
]
```

Hero copy, optional pricing-posture block, and end-CTA copy live as page-template prose or in a small top-level wrapper (engineer's call, consistent with how `/why-ai` keeps non-failure-mode prose). No figures anywhere in the JSON (categorical-only, matching `/engagements`). Page-level meta: `<title>` function-named (`Onboarding — pouk.ai` or `How we work — pouk.ai`); brand-voice `<meta description>` ≤155 chars naming the four-phase method, no figures; OG reuses `public/og.png`; canonical `https://pouk.ai/onboarding/` (trailing-slash); JSON-LD optional (`Article`/`HowTo` candidate — engineer's call; if `HowTo`, no price fields).

## 7. User flow

- **Entry**: From `/engagements` end-of-page hand-off ("here's what saying yes looks like →" — the new cross-link); from a referrer DM linking the page (or a phase anchor) to de-risk an intro; from the footer utility tier; from a `/writing` essay's internal-link spine where the essay lands on a late-funnel reader. Rarely a cold first touch — this is late-funnel.
- **Read path**: Hero (frames the six weeks) → scan phase index → read Discovery + Scoping (the commitment-shaping phases) → register Build + Handoff (proof of accountability) → end CTA. A cold deep-link reader reads sequentially.
- **Exit / conversion**: End CTA → `mailto:hello@pouk.ai` or `cal.pouk.ai` booking (via `contact-flow`), often with a phase named. Secondary: back into the funnel via top nav, or to the trust loop (`/principles` / `/about`) for a reader who wants the character read before converting.

## 8. Acceptance criteria

Structural:

- [ ] Route renders at `/onboarding` (served as `/onboarding/`, trailing-slash).
- [ ] All IA units in §4 (items 1–10) are present and ordered as specified.
- [ ] Four phase sections render in order Discovery → Scoping → Build → Handoff.
- [ ] Each phase has an anchor ID matching its `id` slug — `#discovery`, `#scoping`, `#build`, `#handoff`.
- [ ] Phase index (IA item 3) renders four links, each to its phase anchor.
- [ ] Deep-link anchors (`/onboarding#scoping`, etc.) scroll to the corresponding phase, visible above the fold post-scroll.
- [ ] Exactly one `<h1>` (the Hero title); phases render as `<h2>`/section headings (no skipped levels).

Content / register:

- [ ] The copy addresses the **prospect** ("how an engagement with pouk.ai runs"), not a fellow consultant. The "first client" section does not appear.
- [ ] Each phase names a concrete deliverable or checkpoint (Discovery Brief, SOW, layered build, day-30 check-in) — not abstract process language.
- [ ] **No dollar figure, day-rate, currency symbol, or numeric price appears anywhere** on the page or in the JSON, unless Arian has explicitly ratified publishing figures (§5 decision). If compressed: a categorical price-posture statement (transparent SOW, milestone payments) with no numerals.
- [ ] The literal word "seamless" does not appear (unless Arian overrides §5).
- [ ] Brand-voice contract holds: no marketing-speak, no fake-plurality "we"-as-team, no aphorisms.

Cross-surface / conversion:

- [ ] `/engagements` exposes an end-of-page hand-off link to `/onboarding` (the new hand-off; lands with this page).
- [ ] The end CTA is governed by `features/contact-flow.md` (email + booking), with wording differentiated from `/engagements`, `/roles`, `/principles`.
- [ ] `/onboarding` appears in the footer utility tier (not primary nav) and in `sitemap.xml`.
- [ ] Content lives in `src/content/onboarding.json` validated by a Zod schema (R-074/R-076); four phase objects, fixed order, no price fields.

Quality:

> Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse advisory, not blocking. a11y (axe-core 0 violations) + reduced-motion remain binding.

- [ ] Lighthouse mobile tracked as advisory (target A11y = 100; Perf/BP/SEO for situational awareness). Not a merge gate.
- [ ] Client-side JS is permitted per D-25; the page may stay at the sitewide `BaseLayout` posture by choice, but no JS prohibition applies.
- [ ] `prefers-reduced-motion` honored on any composition motion (CSS or JS-driven).
- [ ] axe-core 0 violations; route added to the axe / tab-order / visual CI route lists (lhci remains as an advisory run).
- [ ] `<title>`, `<meta description>`, canonical (trailing-slash) correct.

Process:

- [ ] Spec section 5 outcomes met by the shipped copy (Arian-verified).
- [ ] This spec is `Approved` before engineer build.
- [ ] `meta/specs/content/onboarding.json.md` is authored and `Approved` before build (§9).
- [ ] R-007 route inventory amended for the 12→13 route count (§9).

## 9. Decisions (RESOLVED) + dependencies

**RESOLVED (Arian-ratified 2026-06-14, via approval of `final-state-strategy.md`):**

- **FS-OB-1 — Pricing display → COMPRESS, no numerals. LOCKED.** No dollar figures, day-rates, or numeric prices appear on the page or in the JSON. Pricing is expressed categorically only — "transparent SOW, milestone-based payments" — folded into the Scoping phase (not a standalone block). Rationale: publishing day-rates contradicts the `/engagements` §7(a) categorical-only posture the site committed to and invites tier-shopping. This keeps `/onboarding` and `/engagements` consistent; **no re-reconciliation of `/engagements` §10 is needed** (the figures option was not taken). §5's pricing outcome and §6's "no figures in JSON" constraint already reflect this; §8 ACs enforce it.
- **FS-OB-2 — Nav placement → footer-utility tier + funnel cross-links, NOT primary nav. LOCKED.** `/onboarding` is reached from the `SiteShell` footer utility row and from the `/engagements → /onboarding` hand-off (and `/writing` spine), not from the five-item primary nav. Rationale: primary nav stays at five items; `/onboarding` is a late-funnel deep-read, not a top-nav destination — same posture that keeps `/writing` out of primary nav. Reflected in §4 IA item 1 and §8 cross-surface ACs.
- **JSON-LD type — engineer's call (unchanged).** `Article`, `HowTo`, or none. Not a PM/Arian product decision; if `HowTo`, no price fields (categorical-only, consistent with FS-OB-1). Recorded as an engineer build decision, not a blocker.

**Handoffs / dependencies:**

- **`features/contact-flow.md`** must be `Approved` (or at least its end-CTA contract settled) before this page's end CTA can be built — `/onboarding`'s CTA consumes it.
- **`meta/specs/content/onboarding.json.md`** — PM authors next; `Approved` before build.
- **Content draft** (`pouk-ai-content`) — authors against §5 after this spec + the content-data spec land.
- **Composition** (`pouk-ai-designer`) — translates the four phases into a recipe in `meta/compositions/pages/onboarding.md`; likely reuses the `/why-ai` `FailureMode`-register pattern. Files a DS proposal only if a new phase molecule is needed (PM expects reuse; no DS block anticipated).
- **R-007 amendment** — route count 12→13; engineer authors the requirement text; PM flags here.
- **Flow-spec v1.3** — `flows/visitor-to-conversation.md` admits `/onboarding` as a late-funnel surface + the `/engagements → /onboarding` hand-off (PM, Phase 2 of the rollout). Recommended before this page's flow record is coherent.

## 10. Out of scope

- **Dollar figures / day-rates** unless Arian explicitly ratifies (§5). Categorical-only by default, matching `/engagements`.
- **The "first client" / consultant-self-talk content** from the source. Retired.
- **Per-phase sub-routes** (`/onboarding/discovery`, etc.). Anchor-based for v1.
- **Phase-level CTAs.** One quiet end CTA via `contact-flow`; no per-phase buttons, no urgency.
- **A scheduling embed or contact form on the page.** The end CTA offers `mailto:` + a link to `cal.pouk.ai` (governed by `contact-flow`); no embedded widget — a brand-restraint choice. (Per D-25 the prior "zero-JS, R-009" rationale is superseded — client JS is permitted; the embed stays out by design, not by JS prohibition.)
- **Folding `/enterprise`'s 7 production pillars in as a separate route.** The strongest production-grade content may inform the Build/Handoff phases (§ `final-state-strategy.md` §7.1), but `/onboarding` does not spawn `/enterprise`.
- **Authoring the DS phase-section component API.** Site-side need only; DS API is `@poukai-inc/poukai-ui` maintainers' domain.
- **Final copy and visual composition.** Content and designer lanes respectively.
- **A separate primary-nav slot.** Footer-utility + funnel cross-links per §9 (Arian may override).
