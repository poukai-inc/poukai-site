---
route: /onboarding
status: Approved
version: 1.0
lastUpdated: 2026-06-14
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/onboarding.md
contentDataSpec: meta/specs/content/onboarding.json.md
coupledFeatureSpec: meta/specs/features/contact-flow.md (end-CTA dual mechanism)
endCtaDraft: meta/content/drafts/features/contact-flow.md (the secondary booking line for the /onboarding end CTA)
compositionReference: none yet (designer composes after this draft lands — onboarding.md §9; PM expects the /why-ai FailureMode-register pattern)
backlogItem: FSP-4.1
revisionHistory:
  - version: 1.0
    date: 2026-06-14
    summary: v1.0 — Arian ratified all open questions; status → Approved.
  - version: 0.1
    date: 2026-06-14
    summary: First draft. Hero + four phase bodies/deliverables (Discovery → Scoping → Build → Handoff) + phase-index lead + end-CTA lead + page meta. Audience-flipped to prospect-facing. Pricing COMPRESSED into Scoping (FS-OB-1, no numerals). "Seamless" not used. All copy DRAFT — awaiting Arian approval.
---

# Content: Onboarding (`/onboarding`)

**Route**: `/onboarding`
**Status**: Approved — Arian ratified all open questions on 2026-06-14 (v1.0). Shipped copy traces to this Approved source (closes review finding F-102).
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-14 (v1.0)
**Governing spec**: `meta/specs/pages/onboarding.md` (§5 content requirements)
**Content-data spec**: `meta/specs/content/onboarding.json.md` (binding field contract — array of 4 phase objects, categorical-only, §5 per-phase OUTCOMES)
**Coupled feature spec**: `meta/specs/features/contact-flow.md` (the end CTA's dual mechanism; the booking line is drafted in `meta/content/drafts/features/contact-flow.md`)
**Composition reference**: none yet. Per `onboarding.md` §9, `pouk-ai-designer` composes the four phases into `meta/compositions/pages/onboarding.md` — PM expects reuse of the `/why-ai` `FailureMode`-register pattern (index + title + prose). Composition-fit flags for that pass are in §6.

This is the content draft for the funnel's **operational-reassurance stage**. The single load-bearing bet (`onboarding.md` §5, §3): **the audience flip.** The source material addresses a fellow consultant ("you, structuring your engagement"); this page addresses a *prospect* ("here's how an engagement with pouk.ai runs once you say yes"). Same four-phase bones, prospect-facing voice. If the copy slips into consultant-advice register, the page fails. The second bet is **concreteness** — named deliverables (Discovery Brief, Statement of Work), the paid Discovery, the day-30 check-in — because specificity *is* the reassurance; "we discover then build" is not evidence. Every line below is written against those two failure modes plus the categorical-only pricing rule (FS-OB-1, no numerals).

The four phase bodies and deliverables map field-for-field onto `onboarding.json.md` §4 schema. The engineer authors `src/content/onboarding.json` from this draft once Arian approves; hero, phase-index, and end-CTA copy live as page-template prose (engineer's call per `onboarding.json.md` §4/§9).

---

## 1. Drafting notes

- **Audience read**: a late-funnel prospect (founder / operator / engineering leader) seriously considering hiring pouk.ai, holding one last objection — *"if I say yes, will this be a chaotic, unscoped, unaccountable engagement?"* They've likely read `/why-ai` + `/roles` + `/engagements`. They are evaluating *operational risk*, not whether AI matters. Secondary: a referrer who wants a single linkable "here's how they run an engagement" URL (or a phase anchor) to reassure a skeptical exec or procurement contact.
- **Outcome read** (from `onboarding.md` §5 + `onboarding.json.md` §5 per-phase OUTCOMES):
  - **Audience flip** is load-bearing — prospect-facing throughout, never consultant-advice register (§3, §5).
  - **Each phase concrete, not abstract** — named deliverable, the paid-Discovery posture, the layered build, the day-30 check-in (§5). Specificity is the differentiation.
  - **Reuse the funnel's vocabulary** — Discovery echoes the `/why-ai` four discovery questions; Build echoes the `/why-ai` leaders pattern (start small, measure, expand); Handoff echoes the `/about` "systems an in-house team can run, not decks" posture; phases align with `/engagements` rungs without being redundant (`/engagements` = commercial shape; `/onboarding` = operational run).
  - **Pricing COMPRESSED** — categorical only, "transparent SOW, milestone-based payments", **no numerals**, folded into the Scoping `body` (FS-OB-1). No day-rates, no 50/50, no currency anywhere on the page or in the JSON.
  - **"First client" section retires entirely** — consultant-self-talk; does not appear.
  - **Tone: engaging, faster than `/about`; closer to `/roles`'s diagnostic-and-invitational tempo.** Brand-voice contract holds (no marketing-speak, no fake-plurality "we"-as-team, no aphorisms). **The word "seamless" is not used** — seamlessness is shown through specificity (named phases, named owners, day-30 check-in), not claimed (§5, AC).
  - **One quiet end CTA** via `contact-flow` (email + booking). No phase-level CTAs, no urgency (§5, §10).
- **Voice anchor**: agent §4.2 (operator-first — assume the reader has run a release; don't explain "SOW" or "production"), §4.4 (no marketing-speak; the banned list plus the spec's "seamless" ban), §4.6 (concrete artifacts over abstractions — "a 2–4 page Discovery Brief naming the workflow, the data risk, the named owner, and the 90-day metric", not "an actionable assessment"). Matches the `engagements.json` `delivers`/`deRisks` register and the `/why-ai` "the diagnosis comes before the build" cadence.
- **Assumptions** (flagged for Arian to accept or override):
  - **A1 — `body` authored as a single prose block per phase** (one to four sentences, within the 80–700 char bound), with the named `deliverable` as a separate field (`onboarding.json.md` §4). If the DS phase recipe renders one prose block and folds `deliverable` into `body`, the copy survives — each `body` is written to read cleanly with or without a trailing deliverable line. Composition call, not substance (§6).
  - **A2 — non-price method figures are retained** (the four discovery questions' "90-day" metric, the "day-30 check-in", "first 1–2 weeks") — these describe *method/checkpoints*, not cost, and are explicitly on-register (`onboarding.json.md` §4 pricing rule, AC). Zero *cost* figures appear.
  - **A3 — `duration` cues are authored as optional categorical time-windows** ("1–2 weeks" for Discovery) where they sharpen the arc, omitted where they'd imply a fixed timeline the engagement doesn't promise. Recommended set in §2; Arian can drop any or all (the field is optional).
  - **A4 — the hero eyebrow is `How we work together`** (the spec offers "Onboarding" or "How we work together" as the content-drafter's call). Rationale in §4. Alternatives in §5.
  - **A5 — the Scoping phase carries the *entire* pricing posture for the page** (FS-OB-1 — folded into Scoping `body`, not a standalone block). No other phase mentions price, terms, or payment. This concentrates the one commercial line where a reader evaluating scope-and-cost risk is already reading.

---

## 2. Copy

Page order: Hero → phase index → four phase sections (fixed order Discovery → Scoping → Build → Handoff) → end CTA. The four phases read from `src/content/onboarding.json` (engineer authors from this draft once approved). Phase copy is labelled by `id` and maps field-for-field onto `onboarding.json.md` §4.

### Block: Hero (spec §4 IA item 2 — frames the page as *what saying yes looks like*)

- **Eyebrow**: `How we work together` *(content-drafter's call per spec §4 IA item 2; alternatives in §5)*
- **Title**: `What saying yes actually looks like`
- **Lede**: `Saying yes to pouk.ai starts a four-phase engagement: discovery, scoping, build, handoff. Here's what the first six weeks actually look like — the deliverables you get, who owns what, and how the work lands with your team instead of stalling at a demo.`

*(Lede is 2 sentences. Sentence 1: names the four phases and frames the page as the consequence of saying yes. Sentence 2: pre-loads the three reassurances the phases pay off — named deliverables, named owners, lands-not-stalls — and quietly echoes the `/engagements` Build de-risk ("stalling at the demo") for funnel continuity. Hero-title and lede alternatives in §5; this is the recommended pick. The spec's `Draft:` lede direction is honored and extended.)*

### Block: Phase index (spec §4 IA item 3 — a one-line jump nav; reinforces the sequence)

A one-line typographic jump nav. Not a DS molecule. Copy:

- **Lead-in (optional, designer's call whether to render)**: `The four phases:`
- **Links**: `Discovery → Scoping → Build → Handoff` — each word links to its anchor (`#discovery`, `#scoping`, `#build`, `#handoff`).

*(The arrows carry the sequence — these are phases you move through, not options you pick. Mirrors the `/engagements` ladder index discipline. If the designer renders a plain inline list, the arrows stay; they are the "you move through these" cue.)*

### Phase: `discovery` (`onboarding.json.md` §5 OUTCOME — starts with diagnosis, not a build; paid first step; Discovery Brief; the four questions)

- **index**: `1`
- **id**: `discovery`
- **title**: `Discovery`
- **duration**: `1–2 weeks` *(optional categorical window; no price)*
- **body**: `Every engagement starts with diagnosis, not a build. In the first one to two weeks, pouk.ai works with your team to answer four questions: which workflow you're trying to improve and what it costs you today, who owns the data behind it and what shape that data is in, who inside the company will own the result after launch, and what success looks like in 90 days. Discovery is a real, scoped, paid first step — not free spec work, and not a sales call in a different jacket. You leave with a written diagnosis whether or not we build anything together.`
- **deliverable**: `Discovery Brief`

### Phase: `scoping` (`onboarding.json.md` §5 OUTCOME — Discovery Brief → SOW; legible boundaries; categorical pricing, no numerals)

- **index**: `2`
- **id**: `scoping`
- **title**: `Scoping`
- **duration**: *(omit — see §6 Flag 2 / §7 Q3; scoping length varies with the build)*
- **body**: `Scoping turns the Discovery Brief into a Statement of Work — the document that makes the engagement legible before anyone commits. The SOW names the deliverables, states plainly what's out of scope, sets the milestones the work is measured against, and lays out when data access has to be in place for each one. Pricing is part of that document, not a separate negotiation: a transparent SOW with milestone-based payments, so you always know what you're paying for and what it produces. Nothing in the build is a surprise, because the boundaries were written down first.`
- **deliverable**: `Statement of Work`

### Phase: `build` (`onboarding.json.md` §5 OUTCOME — shipping inside the prospect's stack; layered delivery; quality metrics from day one; a working production system)

- **index**: `3`
- **id**: `build`
- **title**: `Build`
- **duration**: *(omit — varies by scope; the milestones in the SOW carry the timeline)*
- **body**: `The build happens inside your stack, in layers. pouk.ai prototypes on sample data first to prove the approach, then integrates against your real data, then tests and iterates against the success metric set in Discovery — which is tracked from the first day, not measured after the fact. You see working software at each layer, not a status deck describing one. What you end up with is a system running in production and wired into your tools, built so your in-house team can run it.`
- **deliverable**: `A working production system`

### Phase: `handoff` (`onboarding.json.md` §5 OUTCOME — what the in-house team owns; documentation; live walkthrough; day-30 check-in; built to run, not lock-in)

- **index**: `4`
- **id**: `handoff`
- **title**: `Handoff`
- **duration**: *(omit; the day-30 check-in in the body carries the only time anchor that matters here)*
- **body**: `Handoff is the point of the whole engagement: your team owns the system, not pouk.ai. You get documentation written for the people who'll run it, a live walkthrough rather than a screen recording to file away, and a scheduled day-30 check-in once it's been running on its own. The work is built for you to run, not to keep you dependent. And the day-30 check-in is usually where the next piece of work starts — once a system is earning, the question shifts from "does this work?" to "what's next?"`
- **deliverable**: `A live walkthrough and a day-30 check-in`

### Block: End CTA (spec §4 IA item 9 — single closing block via `contact-flow`; wording differentiated from `/engagements`, `/roles`, `/principles`)

A single quiet closing block. The dual contact mechanism (email primary + booking secondary) is governed by `contact-flow.md`; the secondary booking line is drafted in `meta/content/drafts/features/contact-flow.md` (`/onboarding` surface). This draft owns the **lead line** and the primary email.

- **Lead**: `Now you know how the work runs. When you're ready to talk it through, the first move is an email — name the workflow you'd want to start with, and we'll pick up at Discovery.`
- **Email label**: `hello@pouk.ai`
- **Primary href**: `mailto:hello@pouk.ai`
- **Secondary booking line** (from `contact-flow.md` draft, `/onboarding` surface — recommended micro-variation): `Or skip the email and grab a time →` → `https://cal.pouk.ai`

*(The lead's job: close the operational-reassurance arc ("Now you know how the work runs") and invite a phase-named conversation ("we'll pick up at Discovery"), which is exactly the §3 signal — prospects converting with a phase named. Differentiation audit in §4.)*

---

## 3. Page-level SEO copy

- **`<title>`**: `Onboarding — pouk.ai` (20 chars; function-named per spec §6. Front-loads the page noun; brand follows. Well under the 60-char cap. The alternative `How we work — pouk.ai` is offered in §5.)
- **`<meta name="description">`**: `How an engagement with pouk.ai runs: a four-phase method — discovery, scoping, build, handoff — with named deliverables and a day-30 check-in.` (139 chars; under the 155 cap. Names the four-phase method in the first 100 chars, declarative, no CTA verb, no figures. "day-30" is a method checkpoint, not a price — on-register per AC.)
- **OG title**: `What saying yes to pouk.ai actually looks like` (matches the hero H1 register; punchier than the function-named `<title>` for the share context, still in voice; 46 chars.)
- **OG description**: `Discovery, scoping, build, handoff. The four phases of a pouk.ai engagement, from the prospect's side: named deliverables, named owners, a system your team can run.` (159 chars; under the 200 OG cap. No figures.)
- **Canonical**: `https://pouk.ai/onboarding/` (trailing-slash per spec §6).
- **OG image**: reuses `public/og.png` (no `/onboarding`-specific card at v1, per spec §6).
- **JSON-LD**: engineer's call — `Article`, `HowTo`, or none (spec §9). If `HowTo`, **no `price`/`offers` fields** (categorical-only, FS-OB-1). Recorded as an engineer build decision, not content's lane.
- **Heading hierarchy**: exactly one H1 — the Hero title (`What saying yes actually looks like`). Each phase title (`Discovery` / `Scoping` / `Build` / `Handoff`) is an H2; the eyebrow, phase index, and end CTA are not headings. The four phase H2s descend cleanly from the single H1. No level skipped (spec AC: "exactly one `<h1>`; phases render as `<h2>`/section headings, no skipped levels"). The phase *index* (IA item 3) is a navigational line, not a heading. Confirmed clean: H1 → four H2s.

---

## 4. Voice rationale

One clause per significant line so a future revision argues against a reason.

- **Hero eyebrow — `How we work together`** — chosen over the bare `Onboarding` because "onboarding" is a SaaS-product word (it implies a self-serve setup flow), and this page is the opposite: a description of a high-touch engagement. "How we work together" is prospect-facing and relational, and it sets up the audience-flip in three words before the title lands. ("Onboarding" stays the `<title>` and route noun for SEO/wayfinding — see §3; the on-page eyebrow does the warmer job.)
- **Hero title — `What saying yes actually looks like`** — the spec frames the page as "what saying yes looks like." "Actually" is the load-bearing word: it signals this is the real operating model, not a brochure (the §3 *process-brochure* failure mode answered in the title itself). It addresses the prospect's actual objection (unscoped chaos) by promising specifics. Chosen over a process-label title ("Our process", "How an engagement works") because those read as a brochure heading; "what saying yes looks like" puts the reader's *decision* at the center, which is the audience-flip.
- **Hero lede — "Here's what the first six weeks actually look like"** — lifts the spec's own lede direction and the founder brief's "first six weeks" framing. "The deliverables you get, who owns what, and how the work lands with your team instead of stalling at a demo" pre-states the three reassurances the four phases pay off, so the reader knows what the page will prove before they scroll. "Stalling at a demo" deliberately echoes the `/engagements` Build de-risk and the `/why-ai` deployment gap — funnel continuity rewards the reader who came down the funnel.
- **Discovery `body` — "starts with diagnosis, not a build"** — the phrase is the page's thesis in five words and inherits the `/why-ai` "the diagnosis comes before the build" line almost verbatim (continuity). The four questions are the `/why-ai` four discovery questions in the reader's vocabulary (reuse-the-vocabulary outcome). "Not free spec work, and not a sales call in a different jacket" is the paid-Discovery posture made concrete and a little sharp — it names and dismisses two things the reader has probably been burned by. "You leave with a written diagnosis whether or not we build" lifts the exact de-risk from the `/engagements` Discovery rung, so the two surfaces agree.
- **Discovery `deliverable` — `Discovery Brief`** — named artifact (the concreteness that does the reassurance work, §5). Distinct from every other phase's deliverable.
- **Scoping `body` — "the document that makes the engagement legible before anyone commits"** — "legible" is the precise word for what a nervous prospect wants from a SOW (they can *read* the boundaries). The pricing line — "a transparent SOW with milestone-based payments, so you always know what you're paying for and what it produces" — is the **entire pricing posture for the page**, categorical-only, zero numerals (FS-OB-1). It's folded into Scoping `body` exactly as the spec requires, placed where a reader evaluating scope-and-cost risk is already reading. "Nothing in the build is a surprise, because the boundaries were written down first" is the de-risk (scope dispute / balloon) made literal.
- **Scoping `deliverable` — `Statement of Work`** — named artifact; distinct. (Full name, not "SOW", on first encounter in the deliverable label; the `body` uses "Statement of Work" then "SOW" — operator audience knows the acronym, agent §4.3.)
- **Build `body` — "in layers… prototypes on sample data first… then real data… then tests and iterates"** — the layered-delivery specificity is the differentiation (the §3 *process-brochure* failure answered with concreteness). "Tracked from the first day, not measured after the fact" echoes the `/why-ai` leaders pattern ("measurement from day one"). "Working software at each layer, not a status deck describing one" inherits the `about.json` and `/engagements` Build "system, not a deck" posture — the brand's core differentiator at the phase level. The de-risk (a demo, not a deployment) is removed by "running in production and wired into your tools."
- **Build `deliverable` — `A working production system`** — named outcome; distinct; matches the `/engagements` Build rung's "system that works in production" language.
- **Handoff `body` — "your team owns the system, not pouk.ai"** — the ownership-without-lock-in promise stated first, because it's the fear this phase removes (they'll ship it and disappear). "A live walkthrough rather than a screen recording to file away" is a concrete, slightly pointed specific — it names the lazy alternative the reader has seen. The day-30 check-in is named twice (deliverable + the natural-next-engagement beat) because it's the single most distinctive checkpoint and the §5 signal phrase ("your day-30 check-in is exactly what our last vendor lacked"). "Built for you to run, not to keep you dependent" inherits the `/about` "systems an in-house team can run, not decks" posture.
- **Handoff `deliverable` — `A live walkthrough and a day-30 check-in`** — named checkpoints; distinct from the three artifact deliverables (this phase delivers *ownership + a checkpoint*, which is the right asymmetry — Handoff isn't another artifact, it's the transfer).
- **End-CTA lead — "Now you know how the work runs. When you're ready to talk it through…"** — closes the operational-reassurance arc explicitly and invites a phase-named conversation ("we'll pick up at Discovery"), which is the §3 conversion signal. Differentiated from the other end CTAs by the audit below.

**Blur-guard check** (`onboarding.json.md` §5 + AC — each phase a distinct unit of work and a distinct removed fear):

| Phase | Distinct unit of work | Distinct fear removed | Deliverable |
|---|---|---|---|
| Discovery | A written diagnosis before any build | Buying a build blind | Discovery Brief |
| Scoping | A legible SOW + categorical pricing | Scope balloon / not knowing what you're paying for | Statement of Work |
| Build | Layered shipping into production, metrics from day one | A demo, not a deployment | A working production system |
| Handoff | Transfer of ownership + a scheduled check-in | They ship it and disappear | A live walkthrough and a day-30 check-in |

No two phases share a unit of work, a removed fear, or a deliverable. Blur guard passes.

**End-CTA differentiation audit** (spec AC — wording differentiated from `/engagements`, `/roles`, `/principles`):

| Surface | End-CTA lead |
|---|---|
| `/why-ai` | "Want to start that conversation?" |
| `/engagements` | "Not sure which rung is yours? Say where your problem sits and we'll find the right place to start." |
| `/principles` | (conclusion) "…the rest is a conversation." |
| `/about` | "For inbound work," |
| `/onboarding` (this draft) | "Now you know how the work runs. When you're ready to talk it through, the first move is an email — name the workflow you'd want to start with, and we'll pick up at Discovery." |

The `/onboarding` end CTA is the only one framed around *having seen the operating model* ("Now you know how the work runs") and the only one that invites picking up *at a named phase* ("at Discovery"). It can't be confused with the others.

---

## 5. Headline alternatives

High-stakes lines: hero eyebrow, hero title, hero lede. Recommendation marked.

### Hero eyebrow

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Onboarding` | Matches the route and `<title>`; zero ambiguity. | "Onboarding" reads as SaaS self-serve setup; under-sells a high-touch engagement; flat. |
| Sharpest (recommended) | `How we work together` | Prospect-facing and relational; sets up the audience-flip in three words. | Slightly longer than a one-word eyebrow; the mono micro-label register absorbs it. |
| Weirdest | `The first six weeks` | Concrete, time-anchored, intriguing. | Commits to a "six weeks" frame the engagement doesn't strictly promise (Build/Handoff vary); reads better in the lede than as a standing eyebrow. |

### Hero title

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `How an engagement works` | Clear, conventional, names the subject. | Reads as a process-brochure heading — the exact §3 failure mode. Generic. |
| Sharpest (recommended) | `What saying yes actually looks like` | Puts the reader's decision at the center (the audience-flip); "actually" answers the unscoped-chaos objection in the title. | "Saying yes" assumes the reader is close to deciding — correct for late-funnel, slightly presumptuous for a cold deep-link. Mitigated: this is a late-funnel page by design (spec §2). |
| Weirdest | `No surprises after the contract` | Leads with the precise fear removed (unscoped chaos); very operator. | "Contract" foregrounds the commercial/legal frame the page deliberately soft-pedals (FS-OB-1 keeps pricing compressed); risks reading defensive. Rejected unless Arian wants the fear named up front. |

### Hero lede (opening sentence)

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `pouk.ai runs every engagement in four phases: discovery, scoping, build, and handoff.` | Definitional; names the four immediately. | Process-brochure register ("runs every engagement in four phases") without the prospect-facing "saying yes" framing. Rejected — it's the §3 abstract-process failure. |
| Sharpest (recommended) | `Saying yes to pouk.ai starts a four-phase engagement: discovery, scoping, build, handoff.` | Names the four phases *and* frames the page as the consequence of the reader's decision (audience-flip in the first clause). Honors the spec's lede direction. | None material — it leads with the reader's action ("saying yes"), not the method. |
| Weirdest | `Most engagements that go wrong went wrong before the first line of code — in how they were scoped.` | Diagnostic hook (matches `/roles` tempo); names the failure the method prevents. | Doesn't name the four phases up front; opens on a negative; better as a mid-page line than the lede. Strong candidate if Arian wants a sharper diagnostic open. |

---

## 6. Composition-fit flags

For the designer's pass (`meta/compositions/pages/onboarding.md`; PM expects the `/why-ai` `FailureMode`-register pattern — index + title + prose).

- **Flag 1 — `body` + `deliverable` as one block or two.** Each phase carries a prose `body` and a named `deliverable`. If the chosen molecule (likely the `/why-ai` `FailureMode` register) renders a single prose block, the engineer either (a) exposes a second slot for `deliverable` or (b) folds `deliverable` into `body` (same pattern as `engagements.json`'s `delivers`/`deRisks` note, `onboarding.json.md` §9). Copy survives either: each `body` reads cleanly as a standalone block, and the `deliverable` is a self-contained noun phrase that drops in as a trailing "Deliverable: …" line or label without rewriting. Confirm against the DS recipe choice.
- **Flag 2 — Discovery `body` length.** Discovery `body` is ~560 chars / 4 sentences (the four discovery questions push it long) — within the 700-char `body` bound (`onboarding.json.md` §6) but the longest of the four, and longer than a typical `/why-ai` `FailureMode` prose block. If the phase card is sized tighter, the trim candidate is the four-question enumeration — it could compress to "four questions: the workflow and its cost, the data and its owner, the post-launch owner, and the 90-day success metric." Not recommended (the full questions are the `/why-ai` echo and the concreteness), but available. Flagged so the designer sizes for it.
- **Flag 3 — `duration` rendered or not, and only on Discovery.** This draft authors `duration` only on Discovery ("1–2 weeks") and omits it on Scoping/Build/Handoff (those vary by scope; the SOW milestones carry the timeline). If the DS recipe renders a `duration` slot per phase, three of four phases will be empty — the designer should confirm the slot degrades cleanly when absent, or Arian decides whether to author windows for all four (§7 Q3). The asymmetry is intentional: only Discovery has a reliably bounded window.
- **Flag 4 — phase index redundancy with a visual sequence.** The phase index uses arrows (`Discovery → Scoping → Build → Handoff`) to carry sequence. If the designer renders an explicit visual progression across the four phase sections, the arrows in the index may become redundant — designer's call whether to keep both. Copy doesn't depend on the visual; it just shouldn't fight it. (Same flag pattern as `/engagements`.)

---

## 7. Open questions for Arian

**All resolved — Arian ratified 2026-06-14 (v1.0). Recorded below; shipped copy matches.**

- **Q1 — hero eyebrow: `How we work together` vs. `Onboarding`.** **RESOLVED — `How we work together`** (the on-page eyebrow). `Onboarding` stays the `<title>`/route noun. **Note: the eyebrow TEXT is approved; rendering it on the titled Hero is PENDING a DS-correct mechanism** — the default Hero has no eyebrow slot, and the designer is assessing how to render an eyebrow on a titled Hero. Text approved; rendering pending DS.
- **Q2 — hero title: `What saying yes actually looks like`.** **RESOLVED — keep `What saying yes actually looks like`.**
- **Q3 — `duration` cues.** **RESOLVED — keep the asymmetry.** Discovery shows `1–2 weeks`; Scoping/Build/Handoff omit `duration` (those vary by scope; the SOW milestones carry the timeline).
- **Q4 — `/onboarding` end-CTA booking line.** **RESOLVED — `Or skip the email and grab a time →`** (the gentle late-funnel micro-variation, still subordinate, no urgency). Cross-ref `meta/content/drafts/features/contact-flow.md` §2 (`/onboarding` surface) / §7 Q3 — one approval covers both.
- **Q5 — sharpness of two specific lines.** **RESOLVED — keep both.** "Not a sales call in a different jacket" (Discovery) and "a live walkthrough rather than a screen recording to file away" (Handoff) both stay as drafted.

---

## 8. Out of scope

- **Any dollar figure, day-rate, currency symbol, "starts at", "from", range, or numeric price** anywhere on the page or in the JSON (FS-OB-1, hard). This draft contains zero cost figures by design. The only numerals are method/checkpoint figures ("1–2 weeks", "90 days", "day-30") — explicitly on-register per `onboarding.json.md` §4/AC.
- **The source's "first client" / consultant-self-talk content and the source day-rate/payment numerals ($800–$2,500/day, 50/50)** — retired entirely (spec §5, FS-OB-1).
- **The literal word "seamless"** — not used (spec §5, AC). Seamlessness is shown through specificity, not claimed.
- **The `onboarding.json` file itself** — the engineer authors `src/content/onboarding.json` from this draft once Arian approves, validated by the Zod schema (`onboarding.json.md` §8). This draft is the source for `body`, `deliverable`, `duration`; `index`, `id`, `title` are locked by the content-data spec.
- **The end CTA's dual-mechanism *treatment*** (how the booking secondary sits beside the primary email) — governed by `contact-flow.md`; the booking line copy is in `meta/content/drafts/features/contact-flow.md`. This draft owns the end-CTA *lead line* and the primary email only.
- **A standalone pricing block** — FS-OB-1 folds the categorical pricing posture into the Scoping `body`; no separate block, no `pricing` field (`onboarding.json.md` §10).
- **Per-phase CTAs, phase sub-routes, a scheduling embed / contact form, a fifth phase** — out of scope per spec §10 and `onboarding.json.md` §10.
- **The `/engagements → /onboarding` hand-off link copy** — cross-surface edit owned by PM/engineer (spec §8 cross-surface AC); if the `/engagements` end-of-page hand-off needs copy, that's a revision to the `/engagements` content draft, not this file.
- **Composition, phase-section layout, the visual sequence, the DS recipe choice** — `pouk-ai-designer`'s lane (§6 flags hand these off).
- **JSON-LD type and field values, canonical wiring, sitemap/footer-utility placement, the R-007 route-count amendment** — engineer/PM lanes (spec §6/§9).
