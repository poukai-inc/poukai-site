# Spec: `engagements.json` content data

**File**: `src/content/engagements.json`
**Consumed by**: `src/pages/engagements.astro` (see `meta/specs/pages/engagements.md`)
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-31
**Masterplan reference**: Section 4.1 (site layout), 4.4 (long-form content as data), 2A (shape/substance, site-owned routes/nav/copy)
**Proposal reference**: `meta/proposals/conversion-pivot-and-writing-engine.md` — §2.2 (the upsell ladder), §7(a) (categorical pricing only — no figures), §7(b) (per-rung CTAs, reversing roles.md D-08 for `/engagements`)
**Decisions consumed (Arian-ratified 2026-05-31)**: §7(a) categorical-only — no figures; §7(b) per-rung CTAs; per-rung `mailto:hello@pouk.ai?subject=<Rung>` CTA mechanic.

---

## 1. Purpose

`engagements.json` is the typed source of truth for the four engagement-shape rungs rendered on `/engagements` — Discovery → Pilot → Build → Retainer. Storing the substance as data (a) keeps copy edits out of JSX, (b) makes the page's shape obvious from one folder per masterplan section 4.4, and (c) gives `pouk-ai-engineer` a single import that maps cleanly onto four rung cards with no per-rung conditional logic. The schema is small on purpose — one shape per rung, no rung-specific exceptions. It mirrors `roles.json` discipline with exactly two deliberate divergences, both documented in section 4: a split `delivers` / `deRisks` prose pair (where `roles.json` carries a single `body`), and a per-rung `cta` object (which `roles.json` forbids per D-08, reversed here for `/engagements` only per §7(b)).

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who reads this spec to author `engagements.json` and to write the `engagements.astro` page template that iterates the array into four rung cards.
- **Secondary**: Arian, who edits the file directly when rung copy changes.

## 3. Success criteria

- **Behavior**: The engineer authors `engagements.json` strictly to this schema; the page template iterates the array and produces four rung cards in fixed order with no per-rung conditional logic. Arian can update any rung's copy by editing this file alone and re-deploying. Each rung's CTA `href` carries that rung's name into the inbound email subject line with no JS.
- **Signal**: Zero per-rung branches in the page template. Zero hardcoded rung strings in `.astro` or `.tsx` files. Anchor IDs match `id` slugs exactly. Each `cta.href` resolves to `mailto:hello@pouk.ai?subject=<Rung>` with the rung named.
- **Failure mode**: The schema permits per-rung exceptions (an optional figure field, a `price`, a `startsAt`, a second CTA) that pull one rung away from the canonical shape, or admits a number anywhere. A single figure breaks the §7(a) categorical-only contract; a per-rung exception breaks the shape discipline. If three rungs render one way and the fourth renders another, the schema failed.

## 4. Schema

Top-level shape: an **array of four rung objects**, ordered Discovery → Pilot → Build → Retainer. Order is significant — it determines render order and encodes the climb (rungs you ascend, not options on a shelf). No top-level wrapper object; the file is the array.

```jsonc
[
  {
    "id": "string — kebab-case rung slug. Required. Used directly as the anchor ID on /engagements (e.g., 'discovery' → '#discovery'). Must be unique across the array. Allowed values: 'discovery' | 'pilot' | 'build' | 'retainer'. No other values without a backlog update.",
    "eyebrow": "string — short STAGE / ASCENT MARKER above the rung title. Required. Plain text only. Per the 2026-05-31 resolution (meta/specs/pages/engagements.md), the eyebrow signals the rung's POSITION IN THE CLIMB and MUST be differentiated from the title — it does NOT repeat the rung name. The actual words are drafted by pouk-ai-content (two option sets under consideration: numeric 'Rung 01–04' vs. a descriptive ascent cue); this spec fixes the field's role and constraints, not its wording. MUST NOT equal the rung's title. NO figures/currency (§7(a)) — categorical-only still holds. Maps 1:1 to the rung's id by position in the climb.",
    "title": "string — the bare rung name. Required. Plain text. One word, no article prefix. Allowed values: 'Discovery' | 'Pilot' | 'Build' | 'Retainer'. Sentence-case capitalization.",
    "delivers": "string — what this rung delivers, in WORK terms. Required. Plain text or lightweight markdown (bold/italic only — no headings, lists, or links). Typically one to three sentences. Maps to the rung card's primary prose block. NO figures, NO currency, NO 'starts at', NO ranges (§7(a)). Source: meta/specs/pages/engagements.md §5.",
    "deRisks": "string — what fear this rung removes for the buyer. Required. Plain text. Exactly one sentence. Maps to the rung card's 'de-risks' line. NO figures/price language. Source: meta/specs/pages/engagements.md §5.",
    "cta": {
      "label": "string — the per-rung CTA copy (§7(b)). Required. Plain text. Operator-first register: a quiet 'start here' invitation, no urgency, no scarcity ('limited slots'), no exclamation. Final wording Arian-approved.",
      "href": "string — mailto target with the rung pre-named in the subject line. Required. LOCKED shape: 'mailto:hello@pouk.ai?subject=<Rung>' where <Rung> is the rung's title (e.g., 'mailto:hello@pouk.ai?subject=Discovery'). No scheduling/booking URL, no contact-form URL — mailto only."
    }
  }
]
```

**Two deliberate divergences from `roles.json` — documented so the schema discipline is not read as a regression:**

1. **`delivers` + `deRisks` as two prose fields** (vs. `roles.json`'s single `body`). Each rung must claim a distinct unit of work (`delivers`) *and* remove a distinct fear (`deRisks`) — see section 5. If the DS rung recipe ultimately renders one prose block, these MAY be authored as a single `body` field instead; that is a composition/DS call (`engagements.md` §4 DS-recipe note), not a content-substance call. The categorical-only constraint binds whichever shape lands. This spec assumes the split pair as the default.
2. **A per-rung `cta` object** (vs. `roles.json` D-08, which forbids any per-role `cta`). It exists here because §7(b) reverses D-08 **scoped to `/engagements` only** — `/roles` retains its no-per-card-CTA rule. The `cta` is the engagement-shape equivalent of the `/roles` "role as opening line" mechanic: the rung name rides into the conversation via the `mailto:` subject.

**No pricing field, ever.** No `price`, no `startsAt`, no `range`, no `floor`, no figure of any kind on any rung — not in `delivers`, not in `deRisks`, not in `cta.label`, not anywhere (§7(a)). This is the surviving clause of roles.md §10 and the load-bearing brand guardrail. Adding a pricing field is a schema regression and a brand break.

## 5. Validation and constraints

Engineer enforces these at build (via `@astrojs/check` typecheck or a small zod schema in the page-template import; implementation detail).

- Array length: **exactly 4**. Adding a fifth rung requires a proposal update (the ladder is fixed at four per proposal §2.2) and a re-spec.
- `id` field: unique across the array; matches `/^[a-z]+(?:-[a-z]+)*$/`; one of the four allowed values in section 4.
- `id` ordering: the array order must match the canonical climb — Discovery, Pilot, Build, Retainer. The engineer must not re-sort the array at render time; the order encodes the ascending sequence.
- `eyebrow`: a stage/ascent marker, distinct from the title (2026-05-31 resolution — `engagements.md`). **MUST NOT equal the rung's `title`** (case-insensitive) — the eyebrow no longer repeats the rung name; it marks the rung's position in the climb. **MUST NOT contain a figure, currency symbol, or numeric price** (§7(a) — categorical-only). 2–24 characters, plain text. The four eyebrows must be mutually distinct and map 1:1 to the rungs by climb position. Final wording is pouk-ai-content's (numeric 'Rung 01'-style or descriptive ascent cue); this rule binds whichever option set lands.
- `title`: exact match for one of `"Discovery"`, `"Pilot"`, `"Build"`, `"Retainer"`. One word. No article prefix. No punctuation.
- `delivers`: 60–600 characters. Plain text or markdown bold/italic only. No links. **No figure, currency symbol, numeric price, "starts at", "from", or range** (§7(a)). Must describe a distinct unit of work — no two rungs' `delivers` may read as the same deliverable (the §3 / `engagements.md` §3 blur failure mode).
- `deRisks`: 40–280 characters. Plain text. A single sentence — no semicolons that split into multiple clauses. **No figure/price language.** Must remove a distinct fear — no two rungs' `deRisks` may read as the same removed fear.
- `cta.label`: 8–60 characters. Plain text. No urgency, no scarcity ("limited slots", "only N spots"), no exclamation mark, no "now"/"today" pressure language. One CTA per rung — no stacked or multiple CTAs.
- `cta.href`: exact shape `mailto:hello@pouk.ai?subject=<Rung>` where `<Rung>` is the rung's `title` verbatim (`Discovery` | `Pilot` | `Build` | `Retainer`). Must pair 1:1 with the rung's `id`. No `?body=` prefill at v1, no scheduling/booking domain, no query params other than `subject`. A `subject` not matching the rung's title is a validation failure.
- **The per-rung CTA voice bar is load-bearing** (§7(b) is the most menu-energy move on the site). The `cta.label` register is the same operator-first restraint the rest of the site holds — "this is how a Pilot starts," not "Book your Pilot now." Voice is Arian-verified, not engineer-checkable, but the no-urgency / no-scarcity / no-exclamation constraints above are.
- **No additional fields are permitted.** In particular, no `price`, no `startsAt`, no `range`, no `floor`, no `image`, no `featured`, no second `cta`, no `icon` unless a later DS/designer call introduces one through this spec (per §6 / `engagements.md` §4 — not assumed at v1).

## 6. Anchor-slug derivation

The anchor on `/engagements` for a given rung is exactly `#${id}`. No transformation. The engineer must not re-derive the slug from `title` or `eyebrow` — that introduces a second source of truth. The anchor is **unaffected** by the 2026-05-31 eyebrow resolution: it derives from `id` only. The ladder index (`engagements.md` §4 IA item 3) links each entry to `#${id}`.

| `id` (JSON) | Anchor on `/engagements` | `cta.href` |
| --- | --- | --- |
| `discovery` | `#discovery` | `mailto:hello@pouk.ai?subject=Discovery` |
| `pilot` | `#pilot` | `mailto:hello@pouk.ai?subject=Pilot` |
| `build` | `#build` | `mailto:hello@pouk.ai?subject=Build` |
| `retainer` | `#retainer` | `mailto:hello@pouk.ai?subject=Retainer` |

### Example entry (shape only — eyebrow words are placeholders for pouk-ai-content)

Illustrates the post-2026-05-31 shape: `eyebrow` is a stage marker **differentiated from** `title`. The `<eyebrow>` placeholder stands in for whichever option set content lands (numeric `Rung 01` or a descriptive ascent cue) — it must not be the word "Discovery".

```jsonc
{
  "id": "discovery",
  "eyebrow": "<stage marker — e.g. 'Rung 01' or a descriptive ascent cue; NOT 'Discovery'>",
  "title": "Discovery",
  "delivers": "<what Discovery delivers, in work terms — no figures>",
  "deRisks": "<the one fear Discovery removes — one sentence, no figures>",
  "cta": {
    "label": "<quiet 'start here' invitation — operator-first, no urgency>",
    "href": "mailto:hello@pouk.ai?subject=Discovery"
  }
}
```

## 7. Acceptance criteria

- [ ] File exists at `src/content/engagements.json`.
- [ ] File is a JSON array of length 4.
- [ ] Each object has all five required keys: `id`, `eyebrow`, `title`, `delivers`, `deRisks`, `cta` (with `cta.label` and `cta.href`).
- [ ] `id` values are exactly `discovery`, `pilot`, `build`, `retainer` — no others.
- [ ] Array order is Discovery, Pilot, Build, Retainer.
- [ ] Each `eyebrow` is a stage/ascent marker that **does not equal its rung's `title`** (case-insensitive) and contains no figure/currency (2026-05-31 resolution); the four eyebrows are mutually distinct and map 1:1 to the rungs by climb position.
- [ ] `title` values are exactly `"Discovery"`, `"Pilot"`, `"Build"`, `"Retainer"` — one word, no article prefix.
- [ ] `cta.href` values are exactly `mailto:hello@pouk.ai?subject=Discovery` / `…?subject=Pilot` / `…?subject=Build` / `…?subject=Retainer` and pair 1:1 with the matching `id`.
- [ ] **No figure, currency symbol, numeric price, "starts at", "from", or range appears in any field** — `delivers`, `deRisks`, `cta.label`, `eyebrow`, or `title` (§7(a)).
- [ ] `delivers` values are mutually distinct units of work; `deRisks` values are mutually distinct removed fears. No two rungs read as the same commitment.
- [ ] `cta.label` carries no urgency, scarcity, exclamation, or "now"/"today" pressure language; exactly one CTA per rung.
- [ ] `delivers` and `deRisks` content matches the `pouk-ai-content` draft approved against `engagements.md` §5 (any divergence is Arian-approved).
- [ ] Field lengths fall within the bounds in section 5.
- [ ] Anchors on `/engagements` match `#${id}` exactly.
- [ ] **No pricing field is present on any rung** (no `price`, `startsAt`, `range`, `floor`).
- [ ] No optional / per-rung-exception fields are present beyond the documented `cta` divergence (no `image`, no `featured`, no second `cta`).

## 8. Open questions / dependencies

The granularity (§7a), CTA (§7b), and CTA-mechanic decisions are **locked** (Arian-ratified 2026-05-31). Remaining dependencies:

- **`delivers` / `deRisks` single-vs-split shape — DS/designer call.** If the DS rung recipe renders one prose block, the two fields fold into a single `body` (`engagements.md` §4 DS-recipe note). This spec defaults to the split pair; the engineer reconciles with the `RoleCard` CTA-slot + dual-prose-block confirmation tracked in `engagements.md` §9 (`<NEEDS: confirm RoleCard CTA-slot + dual-prose tolerance>`). Either shape is categorical-only.
- **DS rung recipe / CTA slot.** `roles.json`'s D-08 forbids a `RoleCard` CTA slot; this page needs one. Whether `RoleCard` already exposes an optional CTA slot is the open DS confirmation in `engagements.md` §9. If it does not, Arian decides whether to file a `meta/proposals/ds-side/` recipe request — PM does not author the DS API (masterplan §2A).
- **`Service`/`Offer` JSON-LD deliberately omitted at v1.** `schema.org/Offer` expects a `price`; authoring engagement schema without price fields is the deliberate consequence of §7(a). Recorded as an intentional omission (see `engagements.md` §6 / §9), not a schema gap to fill here.

## 9. Out of scope

- **Any pricing field** — `price`, `startsAt`, `range`, `floor`, or numeric anchor (§7(a)). Pricing disclosure is a separate, un-taken decision.
- **A fifth rung** (e.g., Audit, Workshop). Four is fixed per proposal §2.2.
- **A `?body=` prefill or a second query param on `cta.href`.** `?subject=<Rung>` only at v1; a body prefill is a future call recorded in `engagements.md` §9.
- **A per-rung scheduling/booking URL** (Calendly, etc.) in `cta.href`. `mailto:` only.
- **A second CTA per rung, or a per-rung icon/illustration field.** Single CTA, no `icon`, no `image` at v1.
- **Translation / i18n fields** (e.g., `delivers.en`). English-only at launch.
