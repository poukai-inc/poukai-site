---
route: /roles
status: Draft
version: 0.1
lastUpdated: 2026-06-15
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/roles.md (§5 — four roles mutually distinguishable; hiredBy = precise hiring trigger)
featureSpec: meta/specs/features/outcome-language-pass.md (the copy-direction this draft applies)
contentDataSpec: meta/specs/content/roles.json.md (binding field contract — array of 4 role objects; schema UNCHANGED by this pass)
compositionReference: src/components composes RoleCard directly; no meta/compositions/pages/roles.md
revisionHistory:
  - version: 0.1
    date: 2026-06-15
    summary: >
      First canonical content draft for /roles, created to carry the outcome-language pass
      (features/outcome-language-pass.md). Revises each role `body` (and where it sharpens the
      trigger, `hiredBy`) from PROCESS language ("Builds custom solutions…") to FELT-OUTCOME
      language ("the prototype you've been describing in meetings, real and in your hands").
      Categorical only — HARD guardrail: zero invented metrics. Schema unchanged. The four roles
      stay mutually distinguishable on the outcome dimension. All copy DRAFT — Arian approval.
---

# Content: Roles (`/roles`) — outcome-language pass

**Route**: `/roles`
**Status**: Draft — Arian word-level approval required.
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-15 (v0.1)
**Governing spec**: `meta/specs/pages/roles.md` (§5 — the four roles stay mutually distinguishable; `hiredBy` stays a precise hiring trigger)
**Feature spec (the direction)**: `meta/specs/features/outcome-language-pass.md` (process → felt-outcome; categorical only; no invented metrics)
**Content-data spec**: `meta/specs/content/roles.json.md` (array of 4 role objects; **schema unchanged** — this is a string-content revision of `body` / `hiredBy` only)

This is the first canonical `/roles` content draft, created to carry the **outcome-language pass**. The current `roles.json` describes each role by **what pouk.ai does** ("Builds custom solutions…", "Redesigns how work gets done…"). This pass shifts every role to **what the reader gets** — the outcome they buy in that mode — so the page reads less like a capabilities list and more like a description of the reader's better day. The load-bearing bet and the single line not to cross (carried verbatim from the feature spec): **the instant a felt-outcome line acquires fabricated specificity — "saves 10 hours a week," "cuts costs 30%" — the pass has failed.** Categorical only. Every revised line below contains zero invented numbers, and the four roles stay distinguishable on the *outcome* dimension, not just the activity dimension.

---

## 1. Drafting notes

- **Audience read**: a problem-aware operator running the self-identification exercise — "which of these is *my* situation?" They arrived from `/why-ai` (they accept the deployment gap) or cold, and they're trying to match a felt pain to a mode of help. They convert when a card describes *their* better day, not pouk.ai's activity list.
- **Outcome read** (from `outcome-language-pass.md` §4 + `roles.md` §5):
  - Each role `body` reads as the *outcome the reader buys* in that mode, not the *activity* pouk.ai performs. Builder ≠ "builds custom solutions" → Builder = "the prototype you've been describing in meetings, real and in your hands."
  - `hiredBy` stays a **precise hiring trigger** (the moment that makes a reader say "that's me") — sharpened toward the felt situation where it helps, but it remains a trigger, not a benefit restatement (`roles.md` §5).
  - The four roles stay **mutually distinguishable on the outcome dimension** — no two cards read as the same outcome.
  - Categorical only — zero figures, zero invented metrics, zero "X% faster." No marketing-speak fluff ("transform," "unlock," "supercharge").
  - **Schema unchanged** — `id`, `eyebrow`, `title`, `icon` are locked; only `body` and `hiredBy` string content shifts register.
- **Voice anchor**: agent §4.2 (operator-first — the reader can build; "the prototype you've been describing in meetings" respects that they already know what they want), §4.4 (no marketing-speak — felt-outcome must stay concrete, not aspirational; "running itself" is operator-felt, "unlock potential" is banned), §4.6 (concrete artifacts over abstractions — "real and in your hands," not "an actionable deliverable"). Mirrors the `/engagements` `delivers`/`deRisks` felt register and the `/about` "systems that run in production, not reports" posture.
- **Assumptions** (flag for Arian):
  - **A1 — `eyebrow`, `title`, `icon` are LOCKED** (schema + the existing `roles.json`): `The Builder`/`Builder`/`hammer`, `The Automator`/`Automator`/`workflow`, `The Educator`/`Educator`/`graduation-cap`, `The Creator`/`Creator`/`clapperboard`. This pass does **not** touch them. Only `body` and `hiredBy` change.
  - **A2 — the named tools stay** (Lovable, Claude, Supabase, GPT, Salesforce) — they ground the roles concretely and are consistent with `/about` and the vs-alternatives draft. They are tool names, not metrics. Retained.
  - **A3 — `body` keeps the role's distinct mechanism visible** even while leading with outcome — Builder is bespoke software, Automator is systems/wiring, Educator is adoption/behavior, Creator is creative-workflow speed. The outcome shift must not blur what each role actually *is* (the §5 mutual-distinguishability guardrail).
  - **A4 — `hiredBy` is sharpened only where it tightens the trigger.** Where the existing `hiredBy` is already a precise trigger, I keep it close to verbatim; where it can name the felt moment more sharply, I revise. Each stays a *who/when*, not a *what-you-get*.

---

## 2. Copy

Page reads from `src/content/roles.json` (engineer authors the revised `body`/`hiredBy` from this draft once approved). Each role labelled by `id`, mapping field-for-field onto `roles.json.md`. **Before** = the current shipped line (for the diff); **After** = the felt-outcome revision (the shipping copy).

### Role: `builder` (LOCKED: eyebrow `The Builder` · title `Builder` · icon `hammer`)

- **body — Before**: `Builds custom solutions when off-the-shelf tools fall short — dashboards, internal tools, client-facing products. Modern tools (Lovable, Claude, Supabase) collapsed what used to take a dev team six months into days or weeks.`
- **body — After (recommended)**: `The dashboard, internal tool, or client-facing product you've been describing in meetings — real, working, and in your hands, instead of on a roadmap. When off-the-shelf software almost fits but never quite does, this is the bespoke thing built around how you actually work. Modern tools (Lovable, Claude, Supabase) collapsed what used to take a dev team six months into days or weeks.`
- **hiredBy — Before**: `Founders needing prototypes, product leads testing ideas fast, teams unlocking budget with a proof-of-concept.`
- **hiredBy — After (recommended, lightly sharpened)**: `Founders who need the prototype now, product leads testing an idea before it ages, teams that need a working proof-of-concept to free the budget.`

### Role: `automator` (LOCKED: eyebrow `The Automator` · title `Automator` · icon `workflow`)

- **body — Before**: `Redesigns how work gets done by wiring together the right tools and turning scattered tasks into self-running systems — connecting an LLM, like GPT, to Salesforce, eliminating manual data entry, building 24/7 outreach sequences. Their edge is systems thinking, not technical complexity.`
- **body — After (recommended)**: `The manual, repetitive work nobody wants to own — running itself, quietly, in the background. Scattered tasks get wired into one self-running system: an LLM like GPT connected to Salesforce, the data entry that ate afternoons gone, outreach that runs around the clock without anyone minding it. The edge is systems thinking, not technical complexity.`
- **hiredBy — Before**: `Ops leaders cutting manual work, sales teams drowning in admin, small businesses scaling without headcount.`
- **hiredBy — After (recommended, lightly sharpened)**: `Ops leaders tired of the manual workaround, sales teams drowning in admin instead of selling, small businesses that need to grow without adding headcount.`

### Role: `educator` (LOCKED: eyebrow `The Educator` · title `Educator` · icon `graduation-cap`)

- **body — Before**: `Focuses on adoption — helping teams actually use AI, not just talk about it. The blocker is rarely tech; it's behavior. Educators deliver AI audits, hands-on training with real workflows, and prompt libraries teams can use immediately.`
- **body — After (recommended)**: `The tools you already bought, finally getting used — by the team, on real work, instead of sitting idle behind a login. The blocker is rarely the tech; it's behavior, and that's what this mode moves. You get an honest audit of where AI actually fits, hands-on training on the team's own workflows, and prompt libraries people reach for the same week.`
- **hiredBy — Before**: `HR/L&D teams rolling out AI org-wide, leadership closing the gap between "we bought the tools" and "people use them."`
- **hiredBy — After (recommended, kept close — already a precise trigger)**: `HR and L&D teams rolling out AI org-wide, leadership stuck on the gap between "we bought the tools" and "people actually use them."`

### Role: `creator` (LOCKED: eyebrow `The Creator` · title `Creator` · icon `clapperboard`)

- **body — Before**: `Streamlines creative workflows that are time and cost intensive. Creators don't run full-service agencies. They identify where concept iteration, motion graphics, post-production, and other parts of the creative process get faster and cheaper with the right tools.`
- **body — After (recommended)**: `The creative work that used to swallow weeks and budget — concept iteration, motion graphics, post-production — moving at a pace that fits the deadline you actually have. This isn't a full-service agency. It's a precise read of where the right tools make a creative process faster and cheaper, applied to the parts that are bleeding time.`
- **hiredBy — Before**: `Chief Marketing / Chief Creative Officers who are feeling their budgets constrain and their timelines accelerate.`
- **hiredBy — After (recommended, lightly sharpened)**: `Chief Marketing and Chief Creative Officers caught between shrinking budgets and accelerating timelines, who need the creative output without the headcount.`

---

## 3. Page-level SEO copy

This pass revises `body`/`hiredBy` only — it does **not** change the `/roles` page-level SEO (`<title>`, meta, OG, H1), which is owned by the (existing/separate) `/roles` page meta and is unchanged here. The `/roles` OG card copy is drafted separately in `meta/content/drafts/features/og-cards.md` §4.

- **Heading hierarchy**: unchanged by this pass. The page H1 and the four role `title`s (the H2s, if rendered as headings in the card) are untouched — only the card *body* prose shifts register. No heading-level change.

*(If Arian wants this draft to also become the canonical record for the `/roles` page meta — currently there's no `meta/content/drafts/pages/roles.md` other than this one — flag in Q4 and I'll fold the page meta in as a v0.2. For this pass, scope is the outcome-language register only.)*

---

## 4. Voice rationale

- **Builder body — "the dashboard, internal tool, or client-facing product you've been describing in meetings — real, working, and in your hands"** — leads with the artifact the reader already wants and names the felt gap (it's been *described*, not *built*). "In your hands, instead of on a roadmap" is the outcome made concrete (§4.6) — it's the thing existing, not the activity of building it. The mechanism (bespoke software when off-the-shelf almost-fits) stays visible so Builder ≠ Automator. The tool line is kept verbatim — it's concrete and earns its place.
- **Builder hiredBy — "the prototype now," "before it ages," "to free the budget"** — each clause names the *moment* (the felt urgency) rather than the role ("founders needing prototypes" → "founders who need the prototype now"). "Free the budget" is the precise hiring trigger the original "unlocking budget" gestured at, made sharper — and "unlocking" is on the banned list, so the revision also removes a marketing-speak word.
- **Automator body — "the manual, repetitive work nobody wants to own — running itself, quietly, in the background"** — "running itself" is the canonical felt-outcome example from the feature spec; "nobody wants to own" names the recognizable category of pain without a number (the spec's preferred move — name the *kind* of work, not a duration). "The data entry that ate afternoons gone" is felt and categorical (no "10 hours"). The mechanism (wiring tools into one system) stays, distinguishing it from Builder's bespoke-product mode.
- **Automator hiredBy — "tired of the manual workaround," "drowning in admin instead of selling"** — sharpens the trigger to the felt state ("ops leaders cutting manual work" → "ops leaders tired of the manual workaround"). "Instead of selling" names what the admin is stealing — the operator-felt cost, no metric.
- **Educator body — "the tools you already bought, finally getting used … instead of sitting idle behind a login"** — the felt outcome for adoption work is *the existing investment paying off*, which is exactly the buyer's pain (shelfware). "Behind a login" is the concrete image of the waste. The mechanism (audit + training + prompt libraries) stays, and "people reach for the same week" is felt immediacy without inventing an adoption percentage.
- **Educator hiredBy — kept close to verbatim** — the existing trigger ("the gap between 'we bought the tools' and 'people use them'") is already one of the sharpest hiring triggers on the page; I only tightened "people use them" → "people actually use them" to match the body. Per A4, don't fix what's already precise.
- **Creator body — "the creative work that used to swallow weeks and budget … moving at a pace that fits the deadline you actually have"** — leads with the felt relief (the time/budget bleed stopped) and names the specific creative stages (concept iteration, motion graphics, post-production) so the mode stays concrete and distinct. "This isn't a full-service agency" keeps the original's important boundary (Creator ≠ agency). "The parts that are bleeding time" is categorical pain, no number.
- **Creator hiredBy — "caught between shrinking budgets and accelerating timelines … without the headcount"** — keeps the original's precise CMO/CCO trigger and the felt vise (budget down, timeline up), adding "without the headcount" — the operator-felt constraint that makes this mode the answer.
- **Mutual distinguishability held** — Builder = a bespoke thing exists; Automator = manual work runs itself; Educator = bought tools get used; Creator = creative work stops bleeding time. Four distinct outcomes, no overlap (the §5 guardrail).
- **Zero invented metrics, zero banned fluff** — every "before/after" was checked: no figures, no "transform/unlock/supercharge/seamless." "Unlocking budget" (banned "unlock") in the old Builder `hiredBy` is removed in the revision — the pass also cleans one pre-existing fluff word.

**Outcome-distinguishability matrix** (`outcome-language-pass.md` §5 AC — no two roles read as the same outcome):

| Role | Felt outcome the reader buys | Distinct mechanism | hiredBy trigger |
|---|---|---|---|
| Builder | The bespoke product you described, now real | Custom software where off-the-shelf almost-fits | Need the prototype now / free the budget |
| Automator | The manual work running itself | Wiring tools into one self-running system | Tired of the workaround / admin stealing the day |
| Educator | The tools you bought, finally used | Audit + training + prompt libraries (behavior) | Shelfware gap: bought ≠ used |
| Creator | Creative work that stops bleeding time/budget | Right tools applied to the slow creative stages | Budget down, timeline up, no headcount |

No two rows share an outcome, a mechanism, or a trigger. Distinguishability passes.

---

## 5. Headline alternatives

High-stakes lines: the four role `body` opening clauses (the felt-outcome hook is the load-bearing word of each card).

### Builder body opener

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Custom software, built around how you actually work — when off-the-shelf tools fall short.` | Outcome-leaning but still close to the activity; low risk. | Keeps "built" front and center — less felt than the recommended; under-shifts the register. |
| Sharpest (recommended) | `The dashboard, internal tool, or client-facing product you've been describing in meetings — real, working, and in your hands.` | Leads with the artifact the reader already wants; names the described-not-built gap. | Slightly longer; designer should confirm the `RoleCard` body holds it. |
| Weirdest | `You've described it in three meetings. This is the version that exists.` | High-attitude, very operator, arresting. | Drops the concrete artifact list (dashboard/tool/product) that keeps Builder distinct; could read as glib. Holstered. |

### Automator body opener

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Scattered, repetitive tasks wired into one self-running system.` | Clear outcome, concrete mechanism, short. | Less felt — describes the system, not the relief. |
| Sharpest (recommended) | `The manual, repetitive work nobody wants to own — running itself, quietly, in the background.` | "Running itself" is the spec's canonical felt-outcome; "nobody wants to own" names the pain categorically. | "Quietly, in the background" is two soft modifiers — designer/Arian may trim to "running itself, in the background." |
| Weirdest | `The afternoon you keep losing to data entry — handed back to you.` | Maximum felt-relief, very concrete. | "The afternoon" edges toward an implied duration; safer to keep it categorical (the recommended line does). Holstered to stay clear of the metric line. |

*(Educator and Creator openers: the recommended lines in §2 are the single proposed versions — their structure follows the same lead-with-the-relief pattern; word-level edits are Arian's in review. Offered on request.)*

---

## 6. Composition-fit flags

For the `RoleCard` composition (composed directly in `src/components`; no `meta/compositions/pages/roles.md`).

- **Flag 1 — body length.** The revised `body` lines run 2–3 sentences (~45–55 words), comparable to or slightly longer than the current bodies. The `RoleCard` already holds the current 2–3-sentence bodies; verify the Builder and Educator revisions (the longest) don't overflow the card at small viewports. Trim candidate in each is the third sentence (the mechanism/tool line), which is reinforcing, not the felt-outcome hook — but cutting it risks blurring the role's distinct mechanism. Flagged.
- **Flag 2 — `hiredBy` length.** Revised `hiredBy` lines are comparable to the originals (three parallel clauses). No length concern expected; confirm at the card's `hiredBy` slot width.
- **Flag 3 — no schema/structure change.** This pass changes only `body` and `hiredBy` string content. `eyebrow`, `title`, `icon`, card order, and the `RoleCard` recipe are untouched (the spec's "no structural / composition change" AC). The designer has nothing to recompose — flagged as a no-op for composition, recorded so the diff is understood as copy-only.

---

## 7. Open questions for Arian

- **Q1 — register confirm.** The pass shifts every `body` from activity-lead to outcome-lead. Confirm the felt-outcome register is what you want across all four (recommended), or flag any role you'd rather keep closer to the current activity description.
- **Q2 — Automator "running itself, quietly, in the background."** Two soft modifiers ("quietly," "in the background"). Keep both (recommended — they paint the unattended-system feel), or trim to "running itself, in the background"?
- **Q3 — `hiredBy` sharpening.** I revised three of four `hiredBy` triggers and kept Educator's near-verbatim (already precise). Confirm the sharpened triggers still read as *who/when* hiring triggers, not benefit restatements (the `roles.md` §5 guardrail). Particularly: Builder's "to free the budget" (replaces the banned "unlocking budget").
- **Q4 — scope: does this draft become the canonical `/roles` page record?** This is currently the only `meta/content/drafts/pages/roles.md`. If you want it to also carry the `/roles` page meta (`<title>`, hero, end CTA) as the canonical record, say so and I'll fold those in as v0.2. For this pass, scope is the outcome-language register on `body`/`hiredBy` only.

---

## 8. Out of scope

- **Any invented metric** — zero figures, percentages, durations, or cost claims as pouk.ai results (the hard guardrail). This draft contains zero such numbers by design.
- **Marketing-speak fluff** — "transform / unlock / supercharge / seamless" banned; the pass also removes the pre-existing "unlocking budget" from Builder `hiredBy`.
- **`eyebrow`, `title`, `icon`, card order, the `roles.json` schema** — locked by the content-data spec; this pass touches `body` and `hiredBy` strings only.
- **The `/roles` page-level meta, hero, end CTA, the `/roles → /engagements` hand-off link** — not in this pass's scope (Q4 offers to fold them in as a v0.2 if Arian wants a canonical page record).
- **A fifth role, role re-ordering, the Lucide glyph picks** — out (site/designer lanes; `roles.md` §10).
- **The `RoleCard` composition / layout** — `pouk-ai-designer`'s lane (this pass is copy-only, no recompose needed — §6 Flag 3).
- **Wiring into `src/content/roles.json`** — the engineer applies approved `body`/`hiredBy` copy.
