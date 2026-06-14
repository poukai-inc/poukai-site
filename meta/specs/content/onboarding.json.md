# Spec: `onboarding.json` content data

**File**: `src/content/onboarding.json`
**Consumed by**: `src/pages/onboarding.astro` (see `meta/specs/pages/onboarding.md`)
**Status**: Approved (2026-06-14) — authored under the final-state push; decisions locked.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Masterplan reference**: Section 4.1 (site layout), 4.4 (long-form content as data), 2A (shape/substance — site-owned routes/copy)
**Page spec**: `meta/specs/pages/onboarding.md` (Approved)
**Decisions consumed**: FS-OB-1 (pricing COMPRESSED — categorical-only, no figures/day-rates anywhere) — resolved via Arian's approval of `meta/specs/final-state-strategy.md` on 2026-06-14. This file inherits the `/engagements` categorical-only discipline (`engagements.json.md` §4 / proposal §7(a)).

---

## 1. Purpose

`onboarding.json` is the typed source of truth for the four engagement **phases** rendered as the structural spine of `/onboarding` — Discovery → Scoping → Build → Handoff. Storing the substance as data (a) keeps copy edits out of JSX, (b) makes the page's shape obvious from one folder per masterplan §4.4, and (c) gives `pouk-ai-engineer` a single import that maps cleanly onto four phase sections with no per-phase conditional logic. It mirrors `failure-modes.json` discipline (a fixed-length ordered array of numbered sections) and inherits `engagements.json`'s **categorical-only** rule (no figures, anywhere). The phases are the operational sibling of the `/engagements` rungs: `/engagements` answers *how the relationship is shaped commercially*; `/onboarding` answers *how the work actually runs*. The schema is small on purpose — one shape per phase, no phase-specific exceptions.

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who reads this spec to author `onboarding.json` and the `onboarding.astro` template's phase section (likely the `/why-ai` `FailureMode`-register pattern — numbered section: index + title + prose).
- **Secondary**: Arian, who edits the file directly when phase framing changes; and `pouk-ai-content`, who drafts the phase prose against the OUTCOMES in §5 before it lands here.

## 3. Success criteria

- **Behavior**: The engineer authors `onboarding.json` strictly to this schema; the page template iterates `phases[]` to render four phase sections in fixed order with consistent typography and no per-phase branches. Arian can update any phase's copy by editing this file alone and re-deploying.
- **Signal**: Zero per-phase conditionals in the page template. Zero hardcoded phase strings in `.astro`/`.tsx`. Anchor IDs match `id` slugs exactly. **No figure appears anywhere in the file.**
- **Failure mode**: The schema permits a per-phase exception (a `price`, a `dayRate`, a `startsAt`, a numeral) that breaks the FS-OB-1 categorical-only contract, or lets phases blur because the `body`/`deliverable` fields are too vague to distinguish a phase. A single dollar figure breaks the brand guardrail; two phases reading as the same unit of work is the §5 blur failure.

## 4. Schema

**Opinionated call: a fixed-length ordered array of four phase objects (Discovery → Scoping → Build → Handoff), no top-level wrapper.** Defended in one paragraph: the four phases are read as one ascending arc (the engagement's lifecycle), exactly like `failure-modes.json` is read as one taxonomy and `engagements.json` as one climb. An array gives the engineer a single iteration; the order *is* the arc, so the engineer must not re-sort at render time. Hero copy, the optional pricing-posture line, and the end-CTA copy are **not** in this array — they live as page-template prose or a tiny separate wrapper (engineer's call, consistent with how `/why-ai` keeps non-failure-mode prose out of `failure-modes.json`). This keeps the array a clean "four phases" shape with no mixed concerns.

Top-level shape: an **array of four phase objects**, ordered Discovery → Scoping → Build → Handoff. Order is significant.

```jsonc
[
  {
    "index": "number — the phase ordinal. Required. Integer 1–4. Must match array index + 1 (phases[0].index === 1). Drives the visible phase number (the arc) and FailureMode-style index rendering.",
    "id": "string — kebab-case phase slug. Required. Unique. Used directly as the anchor ID on /onboarding (e.g., 'discovery' → '#discovery'). Allowed values: 'discovery' | 'scoping' | 'build' | 'handoff'. No other values without a backlog update.",
    "title": "string — the bare phase name. Required. Plain text. One word, sentence-case, no article prefix. One of 'Discovery' | 'Scoping' | 'Build' | 'Handoff'.",
    "duration": "string — OPTIONAL categorical duration cue (e.g., '1–2 weeks', '2–6 weeks'). NO dollar figure, NO currency, NO price — a time-window only (FS-OB-1). May be omitted; if present, plain text.",
    "body": "string | string[] — the phase prose, prospect-facing. Required. Plain text or lightweight markdown (bold/italic only — no headings, lists, or links). One to four sentences (or an array of 1–3 short paragraphs). Tells what pouk.ai does in this phase, from the prospect's standpoint. Source: meta/specs/pages/onboarding.md §5 + meta/backlog.md NPP-1 (reframed, not ported). NO figures/price language.",
    "deliverable": "string — OPTIONAL but RECOMMENDED. The named artifact or checkpoint this phase produces (e.g., 'Discovery Brief', 'Statement of Work', 'a working production system', 'a live walkthrough + day-30 check-in'). Plain text. This is the concreteness that does the reassurance work (§5). NO figures."
  }
]
```

**One pricing rule, binding every field (FS-OB-1):** no `price`, no `dayRate`, no `startsAt`, no `range`, no currency symbol, no numeric price in `body`, `deliverable`, `duration`, `title`, or anywhere else in the file. The only numerals permitted are the `index` ordinal (1–4), categorical time-windows in `duration` (e.g., "1–2 weeks"), and any *non-price* figure intrinsic to the prose (e.g., "a day-30 check-in", "a 90-day success metric") — these describe method/checkpoints, not cost, and are on-register. A *cost* figure is a schema regression and a brand break.

**Note on the pricing posture:** per FS-OB-1, pricing is expressed categorically only — "transparent SOW, milestone-based payments" — and folded into the **Scoping** phase `body`, **not** a standalone block or field. There is no `pricing` field in this schema; the categorical statement lives in `phases[1].body` (Scoping). If Arian ever reverses FS-OB-1 to publish figures, that requires a re-spec here and a re-reconciliation with `/engagements` §10 — it is not a field this schema anticipates.

## 5. Per-phase content-requirement OUTCOMES (what each section must accomplish)

This section defines what each phase's prose must *accomplish* — not the words. `pouk-ai-content` drafts the prose against these outcomes; the categorical-only and audience-flip rules from `pages/onboarding.md` §5 bind throughout (prospect-facing voice, brand-voice contract, the word "seamless" likely banned — show seamlessness through specificity, don't claim it).

- **Phase 1 — Discovery** (`#discovery`). Must establish that the engagement *starts with diagnosis, not a build*, and that Discovery is a real, scoped, paid first step (not free spec work). Must name the **Discovery Brief** as the deliverable and surface the four discovery questions (echoing `/why-ai`: the target workflow + its unit cost, the data reality, the named owner, the 90-day success metric). De-risks: committing to a build before the problem is understood. Distinct from every other phase on *what is delivered* (a written diagnosis) and *what fear it removes* (buying a build blind).
- **Phase 2 — Scoping** (`#scoping`). Must turn the Discovery Brief into a **Statement of Work** and make the engagement's boundaries legible: defined deliverables, explicit out-of-scope, milestones, and — per FS-OB-1 — a **categorical** payment posture ("transparent SOW, milestone-based payments", **no numerals**). De-risks: scope disputes and ambiguity. Distinct: the deliverable is the SOW; the fear removed is "this will balloon / I won't know what I'm paying for."
- **Phase 3 — Build** (`#build`). Must show what shipping looks like *inside the prospect's stack* — layered delivery (prototype on sample data first, then real-data integration, then testing/iteration), with quality metrics tracked from day one. Echoes the `/why-ai` leaders pattern (start small, measure, expand) and the `/about` "systems an in-house team can run, not decks" posture. De-risks: the deployment gap `/why-ai` diagnoses (an AI that never reaches production / never gets used). Distinct: the deliverable is a working production system; the fear removed is "we'll get a demo, not a deployment."
- **Phase 4 — Handoff** (`#handoff`). Must establish what the prospect's **in-house team owns** when the engagement ends — documentation, a live walkthrough (not a screen recording), and a scheduled **day-30 check-in**. Must convey that pouk.ai builds for the client to run, not for lock-in, and that the day-30 check-in is where a natural next engagement often begins. De-risks: a shipped system decaying, stalling, or being abandoned after the consultant leaves. Distinct: the deliverable is ownership + the check-in; the fear removed is "they'll ship it and disappear."

**Blur guard:** if any two phases' `body` + `deliverable` could fit the same point in an engagement's lifecycle, the copy is wrong. Each phase claims a distinct unit of work and a distinct removed fear (mirrors the `engagements.json` rung-distinctness rule).

**Retired content (not in this file):** the source's "first client" / consultant-self-talk section and the source's specific day-rates ($800–$2,500/day) and 50/50 payment numerals do **not** appear — per `pages/onboarding.md` §5 and FS-OB-1.

## 6. Validation and constraints

- Array length: **exactly 4**. Adding a fifth phase requires a `pages/onboarding.md` + backlog update and a re-spec.
- `index`: integers 1, 2, 3, 4 — in that order. `phases[i].index === i + 1`.
- `id`: canonical values `discovery`, `scoping`, `build`, `handoff` — in that order, matching `/^[a-z]+(?:-[a-z]+)*$/`. No other values. Unique.
- `id` ordering: array order matches the canonical arc — Discovery, Scoping, Build, Handoff. Engineer must not re-sort at render time; the order encodes the lifecycle.
- `title`: exact match for one of `"Discovery"`, `"Scoping"`, `"Build"`, `"Handoff"`. One word. Sentence-case. No article prefix, no punctuation.
- `duration`: optional; if present, 4–24 characters, plain text, a categorical time-window only. **No figure/currency/price.**
- `body`: 80–700 characters (per paragraph if an array; total ≤ ~900). Plain text or markdown bold/italic only. No links, headings, or lists. **No dollar figure, currency symbol, numeric price, "starts at", "from", "day rate", or range** (FS-OB-1). Must describe a distinct unit of work (the §5 blur guard).
- `deliverable`: optional but recommended; if present, 6–80 characters, plain text. **No price language.** Must name a distinct artifact/checkpoint — no two phases share a deliverable.
- **No pricing field exists** — no `price`, `dayRate`, `startsAt`, `range`, `floor`. The categorical pricing posture lives inside `phases[1].body` (Scoping), not a field.
- **No additional fields** beyond those in §4 (no `image`, `featured`, `icon`, `cta` — `/onboarding` has one *page-level* end CTA via `contact-flow`, not per-phase CTAs; per-phase CTAs are explicitly out of scope per `pages/onboarding.md` §10).

## 7. Anchor-slug derivation

The anchor on `/onboarding` for a given phase is exactly `#${id}`. No transformation. The engineer must not re-derive the slug from `title` — that introduces a second source of truth. The phase index (`pages/onboarding.md` §4 IA item 3) links each entry to `#${id}`.

| `index` | `id` (JSON) | `title` | Anchor on `/onboarding` |
| --- | --- | --- | --- |
| 1 | `discovery` | Discovery | `#discovery` |
| 2 | `scoping` | Scoping | `#scoping` |
| 3 | `build` | Build | `#build` |
| 4 | `handoff` | Handoff | `#handoff` |

### Example entry (shape only — prose is `pouk-ai-content`'s, against §5 OUTCOMES)

```jsonc
{
  "index": 1,
  "id": "discovery",
  "title": "Discovery",
  "duration": "1–2 weeks",
  "body": "<what the first weeks with the prospect's team look like — diagnosis before build, the four discovery questions — prospect-facing, no figures>",
  "deliverable": "Discovery Brief"
}
```

## 8. Acceptance criteria

- [ ] File exists at `src/content/onboarding.json`.
- [ ] File is a JSON array of length 4.
- [ ] Each object has the required fields `index`, `id`, `title`, `body`; `duration` and `deliverable` are present where authored (optional).
- [ ] `index` values are 1, 2, 3, 4 in array order (`phases[i].index === i + 1`).
- [ ] `id` values are exactly `discovery`, `scoping`, `build`, `handoff` — in that order, no others.
- [ ] `title` values are exactly `"Discovery"`, `"Scoping"`, `"Build"`, `"Handoff"` — one word, no article prefix.
- [ ] **No dollar figure, currency symbol, numeric price, "starts at", "from", "day rate", or price range appears in any field** (FS-OB-1). The only numerals are the `index` ordinal, categorical time-windows in `duration`, and non-price method figures in prose (e.g., "day-30 check-in", "90-day metric").
- [ ] **No `pricing`/`price`/`dayRate`/`startsAt`/`range` field is present.** The categorical pricing posture ("transparent SOW, milestone-based payments") lives in `phases[1].body` (Scoping).
- [ ] `body` values are mutually distinct units of work; `deliverable` values (where present) are mutually distinct artifacts/checkpoints. No two phases read as the same point in the lifecycle (§5 blur guard).
- [ ] `body` content matches the `pouk-ai-content` draft approved against `pages/onboarding.md` §5 + this spec's §5 OUTCOMES (any divergence is Arian-approved).
- [ ] No "first client" / consultant-self-talk content and no source day-rate numerals appear.
- [ ] Field lengths fall within the bounds in §6.
- [ ] No per-phase `cta`/`image`/`icon`/`featured` field is present.
- [ ] Anchors on `/onboarding` match `#${id}` exactly.
- [ ] Validated by a Zod schema at `src/content/_schemas/onboarding.ts` (R-074/R-075); the page template imports the derived type, no `as any` (R-075/R-076).

## 9. Open questions / dependencies

The granularity and pricing decisions are **locked** (FS-OB-1 — categorical-only, Arian-ratified 2026-06-14). Remaining dependencies:

- **DS phase-section recipe.** PM expects the phase section reuses the `/why-ai` `FailureMode`-register pattern (index + title + prose). Confirm `FailureMode` (or the chosen molecule) accepts the `body` + optional `deliverable` content without a new slot; if the molecule renders one prose block, `deliverable` may fold into `body` (a composition/DS call, not a content-substance call — same pattern as `engagements.json`'s `delivers`/`deRisks` note). Either shape is categorical-only. If a genuinely new molecule is needed, Arian files a `meta/proposals/ds-side/` request — PM does not author the DS API (masterplan §2A).
- **Hero / pricing-posture / end-CTA storage — out of scope of this array.** Hero copy and the end-CTA copy live as page-template prose or a tiny wrapper (engineer's call, per §4). The categorical pricing posture lives in `phases[1].body`, not a separate field or block. The end CTA's dual-mechanism treatment is governed by `features/contact-flow.md`, not this content file.
- **Content draft (`pouk-ai-content`).** Authors the four phase bodies + deliverables against §5 OUTCOMES, after `pages/onboarding.md` and this spec are both `Approved` (both are). Arian verifies against §5 before the copy lands here.
- **JSON-LD storage — not here.** If the page uses `Article`/`HowTo` JSON-LD (engineer's call per `pages/onboarding.md` §9), it is page-template metadata, not a field in `onboarding.json`. If `HowTo`, no `price`/`offers` fields (categorical-only).

## 10. Out of scope

- **Any pricing field** — `price`, `dayRate`, `startsAt`, `range`, `floor`, or numeric cost (FS-OB-1). Pricing is categorical-only and lives in the Scoping `body` as prose.
- **A fifth phase** (e.g., a separate "Pilot" or "Support" phase). Four is fixed; the Pilot/Retainer shapes live on `/engagements` as rungs, not here as phases.
- **Per-phase CTAs** (`cta` field). `/onboarding` has one page-level end CTA via `contact-flow`; no per-phase buttons.
- **Per-phase imagery / icon / illustration fields** (`image`, `icon`). The phase section is typographic (the `FailureMode` register).
- **The source's "first client" section and specific day-rate/payment numerals.** Retired per `pages/onboarding.md` §5 + FS-OB-1.
- **Hero, pricing-posture-block, and end-CTA copy** as array fields. Page-template prose / `contact-flow` respectively.
- **Translation / i18n fields** (e.g., `body.en`). English-only at launch.
