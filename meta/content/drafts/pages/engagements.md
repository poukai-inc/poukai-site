---
route: /engagements
status: Approved
version: 0.3
lastUpdated: 2026-05-31
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/engagements.md
contentDataSpec: meta/specs/content/engagements.json.md
compositionReference: none yet (designer composes after this draft lands — engagements.md §9)
revisionHistory:
  - version: 0.1
    date: 2026-05-31
    summary: First draft. Eyebrow = bare rung name per the then-locked engagements.json.md §4 schema; Q1 flagged the visible eyebrow/title name-repeat for Arian.
  - version: 0.2
    date: 2026-05-31
    driver: Arian resolved Q1 — DIFFERENTIATE eyebrow from title (kill the name-repeat). Eyebrow becomes a stage/ascent marker; title keeps the rung name. PM is updating engagements.json.md §4 in parallel (eyebrow def = stage marker, distinct from title).
    changes:
      - Eyebrows changed from bare rung name to stage markers. §5d adds two labelled option sets (numeric ladder / descriptive); recommendation marked.
      - Rung blocks (§2) updated to the recommended descriptive eyebrows.
      - A2 assumption rewritten; §6 Flag 3 rewritten (name-repeat resolved → eyebrow/title now distinct strings); Q1 closed.
      - Q2 (Retainer CTA "Talk about a Retainer") and Q3 ("quietly rotting") CLOSED — both approved by Arian, no copy change.
  - version: 0.3
    date: 2026-05-31
    driver: Arian selected eyebrow Option B (descriptive), plain version. Declined the Build→"The system" swap — "The build" stays, mild echo accepted.
    changes:
      - §5d LOCKED to Option B ("The entry point" / "The proof" / "The build" / "The partnership"). Option A and the "The system" alternative retired (preserved for the record).
      - §2 rung eyebrow annotations changed from "recommended descriptive set" to "Option B, LOCKED".
      - Q1a (Build echo) CLOSED — resolved-keep. The eyebrow set is now the shipping copy the engineer authors into engagements.json.
---

# Content: Engagements (`/engagements`)

**Route**: `/engagements`
**Status**: Draft
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-05-31 (v0.3)
**Governing spec**: `meta/specs/pages/engagements.md` (section 5 content requirements)
**Content-data spec**: `meta/specs/content/engagements.json.md` (the binding field contract — array of 4 rung objects, categorical-only, per-rung `cta`)
**Composition reference**: none yet. Per `engagements.md` §9, `pouk-ai-designer` composes the ladder into `meta/compositions/pages/engagements.md` after this draft lands. Composition-fit flags for that pass are in §6.

This is the content draft for the page the conversion-pivot proposal promoted (`conversion-pivot-and-writing-engine.md` §2.2, §7(a)–(c)). The load-bearing copy bet is the **categorical-only contract** (§7(a)) and the **per-rung CTA voice restraint** (§7(b)) — the page must read as the operator describing how serious work starts and grows, never as a pricing menu. Every line below is written against that single failure mode.

**v0.2 (2026-05-31) — eyebrow differentiation.** Arian resolved Q1: the eyebrow no longer repeats the rung name. The **eyebrow is now a stage/ascent marker** (it signals where the rung sits on the climb) and the **title keeps the bare rung name** (`Discovery` / `Pilot` / `Build` / `Retainer`). PM is updating `engagements.json.md` §4 in parallel so the schema's `eyebrow` field def becomes "stage marker, distinct from title." Q2 (Retainer CTA label) and Q3 ("quietly rotting") were approved unchanged.

**v0.3 (2026-05-31) — eyebrow set LOCKED.** Arian selected **Option B (descriptive), plain version**: `The entry point` / `The proof` / `The build` / `The partnership`. The Build→`The system` swap was declined; `The build` stays and its mild echo with the title is accepted (Q1a closed, resolved-keep). §5d records the lock; §2 carries the shipping eyebrows. This is the copy the engineer authors into `engagements.json`'s `eyebrow` fields once Arian flips status to `Approved`.

---

## 1. Drafting notes

- **Audience read**: an Evaluation-stage operator who already agreed there's a deployment gap (`/why-ai`) and matched themselves to an archetype (`/roles`, say Automator), and is now asking "what does working together actually look like — how much do I commit on day one, and how does it grow?" They want the *shape* of the relationship legible before they email. Secondary: a referrer who wants a single linkable "here's how we'd work" URL (or a rung anchor) to attach to an intro.
- **Outcome read** (from spec §5):
  - Hero lede communicates (a) four shapes of one deepening relationship, not four products on a shelf; (b) orthogonal to the `/roles` archetypes — any archetype, any rung; (c) you don't commit to a full build on day one.
  - Categorical only — every rung described by what it *delivers* and what it *de-risks*, in work terms. Zero figures, zero currency, zero "starts at", zero ranges, zero durations-as-price, anywhere on the page or meta surfaces (§7(a), locked).
  - Each rung claims a distinct unit of work and a distinct removed fear — no two rungs read as the same commitment (the §3 blur failure mode).
  - Per-rung CTA reads as a quiet "start here" — no urgency, no scarcity, no exclamation, no stacked buttons. The rung name rides into the email subject via `mailto:hello@pouk.ai?subject=<Rung>`.
  - The ladder reads as a climb, not a shelf. End CTA stays muted for the undecided reader.
- **Voice anchor**: agent §4.2 (operator-first — assume the reader has shipped, hired, run a release; don't explain "pilot" or "production"), §4.4 (no marketing-speak — the banned list is a hard gate, and "menu energy" is the specific drift to defend against here), §4.6 (concrete artifacts over abstractions — "a written read of which failure mode you're in", not "an actionable assessment"). Mirrors the restraint of `roles.json` `body`/`hiredBy` and the `/why-ai` "the diagnosis comes before the build" register.
- **Assumptions** (flagged for Arian to accept or override):
  - **A1 — `delivers` and `deRisks` authored as the split pair** (the content-data spec default), not folded into a single `body`. If the DS rung recipe renders one prose block, the engineer folds them per `engagements.json.md` §8 — that's a composition call, not a substance change. Copy below works in either shape.
  - **A2 — `eyebrow` is a stage/ascent marker, distinct from the title** (resolved by Arian in v0.2). The title carries the bare rung name (`Discovery` / `Pilot` / `Build` / `Retainer`); the eyebrow signals *where on the climb* the rung sits, so the card no longer shows the rung name twice. The recommended descriptive set (`The entry point` / `The proof` / `The build` / `The partnership`) is in §5d; the numeric-ladder alternative (`Rung 01`…`Rung 04`) is there too. PM is updating `engagements.json.md` §4 to match. See §5d, §6 Flag 3.
  - **A3 — the hero leans on the `/roles` ↔ `/engagements` orthogonality explicitly** (any archetype, any rung), because the spec names it as a required hero outcome and because a reader arriving from `/roles#automator` needs to know the ladder isn't a *fifth* archetype.
  - **A4 — `delivers` runs one to two sentences per rung** (within the 60–600 char bound); `deRisks` is exactly one sentence (40–280 char bound), opening with a verb of removal ("Lets you…", "Proves…", "Puts…", "Keeps…") so the four de-risk lines scan as a parallel set.

---

## 2. Copy

The page is hero → ladder index → four rung cards (fixed order) → end CTA. The four rung cards read from `src/content/engagements.json` (the engineer authors that file from this draft once approved). Rung copy below is labelled by `id` and maps field-for-field onto the `engagements.json.md` §4 schema.

### Block: Hero (spec §5 — hero outcomes a, b, c)

- **Eyebrow**: `Engagements`
- **Title**: `How the work starts, and how it grows`
- **Lede**: `Work with pouk.ai starts small and deepens. Discovery, Pilot, Build, Retainer — four shapes of one relationship, not four products on a shelf. Any kind of work can start at any rung, so you don't have to commit to a full build on day one.`

*(Lede is 3 sentences. Sentence 1: the shape thesis. Sentence 2: names the four rungs and kills the menu reading. Sentence 3: carries the orthogonality (any archetype, any rung) and the no-day-one-commitment outcome together. Hero-title alternatives in §5; this is the recommended pick.)*

### Block: Ladder index (spec §4 IA item 3 — reinforces sequence)

A one-line typographic jump nav. Not a DS molecule. Copy:

- **Lead-in (optional, designer's call whether to render)**: `The climb:`
- **Links**: `Discovery → Pilot → Build → Retainer` — each word links to its anchor (`#discovery`, `#pilot`, `#build`, `#retainer`).

*(The arrows between the rungs do the sequence work — these are steps you ascend, not options on a shelf. If the designer renders the index as a plain inline list, the arrows stay; they are the "climb" cue, not decoration.)*

### Rung: `discovery` (spec §5 — implicit question "Can you even diagnose my situation?")

- **id**: `discovery`
- **eyebrow**: `The entry point` *(stage marker — Option B, LOCKED, §5d)*
- **title**: `Discovery`
- **delivers**: `A short, focused diagnosis of where your AI work actually stands — which of the five failure modes you're in, and a written read of the workflow, the data behind it, and what a fix would take. You leave with the diagnosis whether or not we build anything together.`
- **deRisks**: `Lets you understand the problem before committing to a build, so the first thing you buy is clarity, not a bet.`
- **cta.label**: `Start with Discovery`
- **cta.href**: `mailto:hello@pouk.ai?subject=Discovery` *(locked shape — engineer wires; content owns the label only)*

### Rung: `pilot` (spec §5 — implicit question "Prove it on one workflow before I commit")

- **id**: `pilot`
- **eyebrow**: `The proof` *(stage marker — Option B, LOCKED, §5d)*
- **title**: `Pilot`
- **delivers**: `A working result on one scoped workflow — built, measured against a baseline you set up front, and put in front of the team that would actually use it. One team, one process, real signal.`
- **deRisks**: `Proves the approach on a single workflow before you roll it out anywhere else, so a full rollout rides on evidence instead of a pitch.`
- **cta.label**: `Start with a Pilot`
- **cta.href**: `mailto:hello@pouk.ai?subject=Pilot`

### Rung: `build` (spec §5 — implicit question "Ship the real system into production")

- **id**: `build`
- **eyebrow**: `The build` *(stage marker — Option B, LOCKED, §5d; mild echo with title accepted — Q1a resolved-keep)*
- **title**: `Build`
- **delivers**: `The real system, engineered and shipped into production — wired into your stack, documented, and handed over so an in-house team can run it. A system that works in production, not a deck that describes one.`
- **deRisks**: `Closes the gap between "we launched an AI pilot" and "AI is delivering measurable value," so the work lands in production instead of stalling at the demo.`
- **cta.label**: `Start a Build`
- **cta.href**: `mailto:hello@pouk.ai?subject=Build`

### Rung: `retainer` (spec §5 — implicit question "Keep it running and evolving")

- **id**: `retainer`
- **eyebrow**: `The partnership` *(stage marker — Option B, LOCKED, §5d)*
- **title**: `Retainer`
- **delivers**: `Ongoing operation and iteration of what's shipped — monitoring, tuning, and extending the system as the business changes and the tools move underneath it. The relationship that keeps the work paying off after handoff.`
- **deRisks**: `Keeps a shipped system from decaying or stalling once the build is done, so it goes on earning instead of quietly rotting.`
- **cta.label**: `Talk about a Retainer`
- **cta.href**: `mailto:hello@pouk.ai?subject=Retainer`

### Block: End CTA (spec §4 IA item 8 — the undecided-but-ready reader)

A single muted line + email. Differentiated in wording from the `/roles`, `/principles`, `/why-ai`, and `/about` end CTAs (see §4 voice rationale for the differentiation audit).

- **Lead**: `Not sure which rung is yours? Say where your problem sits and we'll find the right place to start.`
- **Email label**: `hello@pouk.ai`
- **Href**: `mailto:hello@pouk.ai` *(no `?subject=` — the undecided reader hasn't picked a rung; the universal path stays bare)*

---

## 3. Page-level SEO copy

- **`<title>`**: `Engagements — pouk.ai` (21 chars; function-named per spec §6 / AC). Front-loads the page noun; brand follows. Well under the 60-char cap.
- **`<meta name="description">`**: `How work with pouk.ai starts and grows: Discovery, Pilot, Build, Retainer — four shapes of one relationship, not a price list.` (124 chars; under the 155 cap. Names the ladder, no figures, declarative, no CTA verb. The "not a price list" clause does double duty: it's honest and it pre-empts the pricing-menu read for anyone landing cold from a commercial-intent search.)
- **OG title**: `How the work starts, and how it grows — pouk.ai` (matches the hero H1 register; punchier than the function-named `<title>` for the share context, still in voice.)
- **OG description**: `Discovery, Pilot, Build, Retainer — four shapes of one relationship. Start wherever your problem sits; you don't commit to a full build on day one.` (146 chars; under the 200 OG cap. No figures.)
- **Canonical**: `https://pouk.ai/engagements`
- **OG image**: reuses `public/og.png` (no `/engagements`-specific card at v1, per spec §6).
- **JSON-LD**: none at v1 (spec §6 — deliberately omitted; `schema.org/Offer` expects a price, which §7(a) forbids. Recorded as intentional, not an oversight.)
- **Heading hierarchy**: exactly one H1 — the Hero title (`How the work starts, and how it grows`). Each rung title (`Discovery` / `Pilot` / `Build` / `Retainer`) is an H2; the eyebrow stage marker, the ladder index, and the end CTA are not headings. The four rung H2s descend cleanly from the single H1. No level skipped. **Flag for the designer**: the rung *eyebrow* (now a stage marker — `The entry point`, etc.) renders as a non-heading label and the rung *title* carries the H2, so the heading outline is H1 → four H2s. (The v0.2 differentiation removes the prior eyebrow/title name-repeat, so the eyebrow no longer reads as a duplicate of the H2 text.) See §6.

---

## 4. Voice rationale

One clause per significant line so a future revision argues against a reason, not a vibe.

- **Hero title — `How the work starts, and how it grows`** — chosen over a noun-label title ("Engagements", "How we work") because the spec's load-bearing job is to kill the menu reading, and a *verb* framing ("starts… grows") encodes the climb the way a noun can't. "The work" (not "our engagements", not "our services") keeps the focus on the reader's work, not pouk.ai's catalogue. Comma-plus-"and" is a deliberate two-beat — within agent §4.1's two-clause limit.
- **Hero lede — "four shapes of one relationship, not four products on a shelf"** — lifts the proposal's own reconciliation line ("ladder, not menu") into reader-facing copy. The explicit negation ("not four products on a shelf") is the single most load-bearing phrase on the page; it does the anti-menu work in the reader's first five seconds. "Any kind of work can start at any rung" carries the orthogonality without naming the archetypes (a reader who didn't come from `/roles` doesn't need the cross-reference; a reader who did recognizes it).
- **Eyebrow stage markers — `The entry point` / `The proof` / `The build` / `The partnership`** (v0.2) — the eyebrow now names *what the rung is for in the relationship*, not the rung's own name (the title does that). Read as a set, the four markers tell the climb story on their own: you enter, you prove, you build, you partner. That's the "ladder, not menu" thesis carried at the eyebrow level — a menu would label tiers ("Basic / Pro"); these label *stages of a deepening relationship*. The definite article ("The …") matches the editorial register of the `roles.json` eyebrows ("The Builder") while pointing at a phase rather than a persona. The one watch-item is Build, where the stage marker "The build" sits next to the title "Build" — see §5d note; the descriptive set is recommended *with* that echo called out, and the numeric set (`Rung 03`) is the alternative that sidesteps it entirely.
- **Discovery `delivers` — "which of the five failure modes you're in, and a written read…"** — ties the rung to `/why-ai`'s five failure modes and four discovery questions (the reader may have just read it). "A written read" is a concrete artifact (agent §4.6), not "an assessment" or "a deliverable." The second sentence ("you leave with the diagnosis whether or not we build") is the de-risk made literal — it's what makes Discovery a genuinely low-commitment entry, not a sales call in disguise.
- **Discovery `deRisks` — "the first thing you buy is clarity, not a bet"** — "buy" is the only commercial verb on the page, and it's deployed precisely to say the purchase is *understanding*, not a wager. Defensible because it reframes commitment downward, the opposite of menu-energy.
- **Pilot `delivers` — "one team, one process, real signal"** — mirrors the `/why-ai` leaders pattern ("start with one team, measure, adjust, then expand") in the reader's vocabulary. The triple is a rhythm device that also names the scope precisely: a Pilot is *not* a Build, and "one … one … real signal" makes the smaller unit of work unmistakable (the anti-blur discipline).
- **Pilot `deRisks` — "a full rollout rides on evidence instead of a pitch"** — names the fear (an expensive rollout on an unproven approach) and removes it with the land-and-expand logic. "Instead of a pitch" is a quiet operator-first jab at the deck-builder competitor without naming them.
- **Build `delivers` — "a system that works in production, not a deck that describes one"** — directly inherits the `about.json` posture ("systems an in-house team can run, not decks"). The production/deck contrast is the brand's core differentiator stated at the rung level. "Handed over so an in-house team can run it" is the ownership-without-lock-in promise operators look for.
- **Build `deRisks` — closes the gap between "we launched an AI pilot" and "AI is delivering measurable value"** — quotes the `/why-ai` deployment-gap framing almost verbatim, because Build is the rung that *closes the gap `/why-ai` diagnoses*. The continuity rewards a reader who came down the funnel.
- **Retainer `delivers` — "as the business changes and the tools move underneath it"** — names the real reason a retainer exists for AI work specifically (the tools change weekly — see `/principles` Momentum and Intellectual Curiosity), distinguishing it from a generic maintenance contract.
- **Retainer `deRisks` — "go on earning instead of quietly rotting"** — "quietly rotting" is the sharpest verb on the page; it earns its place because decay-after-handoff is the precise fear and a softer verb ("declining", "degrading") would blur it. Flagged in §7 Q3 as the one line where Arian may want to dial the register.
- **Per-rung CTA labels — `Start with Discovery` / `Start with a Pilot` / `Start a Build` / `Talk about a Retainer`** — all four are quiet "start here" invitations, no urgency, no scarcity, no exclamation, no "now"/"today" (the locked `engagements.json.md` §5 constraints). The verb shifts deliberately: "Start with" for the entry rungs (Discovery, Pilot — the small first step), "Start a" for Build (the committed build), and "Talk about" for Retainer (an ongoing relationship is a conversation, not a checkout). The rung name is in every label so it survives being read aloud and rides into the email subject. All within the 8–60 char bound.
- **End CTA — "Not sure which rung is yours? Say where your problem sits…"** — differentiated from the other four end CTAs by the audit below; it speaks only to the *undecided* reader (the per-rung CTAs already caught the decided ones). "Say where your problem sits" echoes the hero's "wherever your problem sits" and keeps the whole page consistent: the reader is invited to describe a problem, not pick a tier.

**End-CTA differentiation audit** (spec AC — wording must differ from `/roles` and `/principles`; checked against all live end CTAs):

| Surface | End-CTA lead (live/drafted) |
|---|---|
| `/why-ai` | "Want to start that conversation?" |
| `/principles` | (conclusion) "…the rest is a conversation." |
| `/about` | "For inbound work," |
| `/engagements` (this draft) | "Not sure which rung is yours? Say where your problem sits and we'll find the right place to start." |

The `/engagements` end CTA is the only one framed around *rung indecision* — it can't be confused with the others, and it does the specific job IA item 8 names (catch the ready-but-undecided reader).

---

## 5. Headline alternatives

High-stakes lines: hero title and hero lede. Three options each, recommendation marked.

### Hero title

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `How we work together` | Clear, conventional, zero menu-energy. | Generic; loses the *climb*/deepening that is the whole point. Reads like a process page, not a ladder. |
| Sharpest (recommended) | `How the work starts, and how it grows` | A verb framing that encodes the climb (starts → grows) and keeps focus on the reader's work. | Slightly longer than a one-line title at small viewports; the serif clamp absorbs it. |
| Weirdest | `Start small. Climb if it's working.` | High-attitude, two-beat, very operator. | The imperative ("Climb") tips toward sales energy and could read as pushy — the exact register the page must avoid. Rejected unless Arian wants more edge. |

### Hero lede (opening sentence)

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `pouk.ai works in four engagement shapes: Discovery, Pilot, Build, and Retainer.` | Definitional, names the four immediately. | Reads as a menu intro — "four shapes" without the "one relationship" framing is exactly the failure mode. Rejected. |
| Sharpest (recommended) | `Work with pouk.ai starts small and deepens.` | Five words; the shape thesis up front; "deepens" sets up the climb before the rungs are named. | None material — it leads with the verb and the reader's relationship, not the catalogue. |
| Weirdest | `Most relationships here start at Discovery or Pilot — and grow from there.` | Leads with the social-proof default ("most start small"), which lowers activation energy immediately. | Implies volume/track record the brand doesn't claim numerically; slightly presumptuous on a cold visit. Strong candidate for a later revision once there's a track record to lean on. |

### 5d. Eyebrow stage markers — LOCKED to Option B (v0.3 — Arian selected, plain version)

The eyebrow is a **stage/ascent marker** distinct from the rung name (the title carries the name). **Arian selected Option B (descriptive), plain version** (v0.3). The Build→`The system` swap was *declined* — `The build` stays, the mild echo accepted. The option sets are preserved below for the record; Option B is the locked, shipping set.

| Rung (title) | Option A — numeric ladder (not chosen) | **Option B — descriptive (LOCKED, shipping)** |
|---|---|---|
| Discovery | `Rung 01` | **`The entry point`** |
| Pilot | `Rung 02` | **`The proof`** |
| Build | `Rung 03` | **`The build`** |
| Retainer | `Rung 04` | **`The partnership`** |

**LOCKED: `The entry point` / `The proof` / `The build` / `The partnership`.** This is what `§2` ships and what the engineer authors into `engagements.json`'s `eyebrow` fields. All four are operator-voice, ≤4 words, matching the `roles.json` "The Builder"-style eyebrow register and the `engagements.json.md` `eyebrow` constraints (plain text, no figures).

- **Why B over A (record).** The numeric ladder (`Rung 01`…) makes the climb unmistakable but does work the **ladder index already does** (`Discovery → Pilot → Build → Retainer` with arrows, §2), so the eyebrows would carry redundant information — and bare ordinals risk the exact reading the page must avoid (a numbered list of tiers is *menu energy*: "Rung 01 / Rung 02" scans like "Tier 1 / Tier 2"). Option B spends the eyebrow on what nothing else on the page says — *what each rung is for in the relationship*. Read as a set (entry point → proof → build → partnership), it tells the deepening story on its own, reinforcing "ladder, not menu."
- **Build echo — resolved-keep (Q1a closed).** The Build eyebrow `The build` sits above the title `Build` — a mild echo (not the full name-repeat that v0.2 removed). Arian accepted the echo and declined the `The system` swap. Rationale on the record: the parallel structure across the four markers is worth more than avoiding one repeated word, and the eyebrow and title render in different registers (mono micro-label vs. serif title), so the repeat barely registers. No change. The `The system` alternative is retired, not pending.

---

## 6. Composition-fit flags

For the designer's pass (`meta/compositions/pages/engagements.md`).

- **Flag 1 — dual prose register per rung.** Each rung carries a `delivers` block (1–2 sentences) and a `deRisks` line (1 sentence). If the rung composes inside the existing `RoleCard` (single `body`), the designer/engineer either (a) exposes a second prose slot or (b) folds `deRisks` into `body` as a final sentence. Copy is written to survive either: the `deRisks` line is grammatically self-contained and reads cleanly as a body's closing sentence. Confirm against the `<NEEDS: RoleCard CTA-slot + dual-prose tolerance>` open item in `engagements.md` §9.
- **Flag 2 — `delivers` length.** Discovery and Build `delivers` are 2 sentences (~45–50 words). If the rung card is sized for a single-sentence body (like `roles.json` bodies, which run 1–3 sentences), these fit; but verify the de-risk line + 2-sentence delivers + CTA don't overflow the card at small viewports. If they do, the second `delivers` sentence is the trim candidate in each (it's the reinforcing line, not the load-bearing one).
- **Flag 3 — eyebrow stage marker vs. title (v0.2).** The eyebrow and title are now **distinct strings**: eyebrow is a stage marker (`The entry point`, etc.), title is the rung name (`Discovery`, etc.). The prior name-repeat is resolved (Arian's Q1, now closed). Two designer notes: (1) the rung *title* carries the H2; the *eyebrow* renders as a non-heading label (mono micro-label register, the way `RoleCard` eyebrow does) — so the outline stays H1 → four H2s. (2) On the Build rung, the descriptive eyebrow `The build` sits above the title `Build` — a soft echo, called out in §5d with two alternatives (`The system`, or numeric for that rung) if the designer or Arian wants it gone. Not a blocker; flagged so the echo is a conscious choice.
- **Flag 4 — the climb as a visual.** The ladder index copy uses arrows (`Discovery → Pilot → Build → Retainer`) to carry sequence. If the designer renders an explicit visual ascent/connection between the four cards (per the `engagements.md` §9 designer question), the arrows in the index may become redundant — designer's call whether to keep both. Copy doesn't depend on the visual; it just shouldn't fight it.

---

## 7. Open questions for Arian

Tight list. Q1–Q3 closed in v0.2; one new sub-decision (Q1a) and the standing composition flag (Q4) remain.

- **Q1 — eyebrow = title repetition. CLOSED (v0.2).** Arian resolved: differentiate. Eyebrow is now a stage marker; title keeps the rung name. PM updates `engagements.json.md` §4 in parallel. Recommended set (Option B, descriptive) is in §5d and is what §2 ships.
  - **Q1a — Build eyebrow echo. CLOSED (v0.3, resolved-keep).** Arian kept `The build` and declined the `The system` swap — the mild echo with the title is accepted. No change; the `The system` alternative is retired.
- **Q2 — "Talk about a Retainer" CTA label. CLOSED (v0.2, approved).** Kept as-is — the deliberate parallel-break (a retainer is a conversation, not a checkout). No change.
- **Q3 — "quietly rotting" in the Retainer de-risk. CLOSED (v0.2, approved).** Kept as-is. No change.
- **Q4 — hero lede length in the DS Hero.** The recommended lede is 3 sentences (~45 words), within the DS `<Hero>` 1–3-sentence cap. If the designer's composition wants a 2-sentence lede, the cut is sentence 1 folded into sentence 2 (`Work with pouk.ai starts small and deepens — Discovery, Pilot, Build, Retainer, four shapes of one relationship, not four products on a shelf.`). Not recommended (it loses the clean "not a shelf" beat), but available. No action needed unless composition forces it.

---

## 8. Out of scope

- **Any figure, currency, "starts at", range, or duration-as-price** (§7(a)). The page is categorical-only. This draft contains zero numbers by design.
- **The `engagements.json` file itself** — the engineer authors `src/content/engagements.json` from this draft once Arian approves the copy. This draft is the source for `eyebrow` (now an authored stage marker, §5d), `delivers`, `deRisks`, and `cta.label`; the `id`, `title`, and `cta.href` are locked by the content-data spec. (The `eyebrow` field def is being updated by PM in `engagements.json.md` §4 to "stage marker, distinct from title" — until that lands, the §5d copy is the content recommendation, not yet schema-locked.)
- **The `mailto:` subject mechanic** (`?subject=<Rung>`) — locked by `engagements.json.md` §4/§6; content owns the CTA *label* only, not the href.
- **Nav order, the `/roles → /engagements` hand-off link copy, and the roles.md §10 / D-08 reconciliation** — cross-surface edits owned by PM/engineer per `engagements.md` §9. If the `/roles` end-of-page hand-off needs copy, that's a revision to the `/roles` content draft, not this file.
- **Composition, card layout, the visual climb, icon picks** — `pouk-ai-designer`'s lane (§6 flags hand these off).
- **A fifth rung, per-rung sub-routes, booking/scheduling, contact forms** — out of scope per spec §10.
