---
title: Add an eyebrow slot to the default (titled) Hero variant
target_repo: poukai-inc/poukai-ui
suggested_resolution: minor
status: drafted
ds_issue:
target_version:
created: 2026-06-14
resolved:
---

# DS Proposal: `<Hero>` eyebrow alongside title (default variant)

**Status**: drafted (consumer-side proposal, awaiting Arian's gate to open the issue on `poukai-inc/poukai-ui`)
**Owner**: Arian (founder) · Author: pouk-ai-designer (refresh); originally pouk-ai-engineer via OMC review fan-out
**Last updated**: 2026-06-14
**Companion site compositions that drive this**:
- [`meta/compositions/pages/onboarding.md`](../../compositions/pages/onboarding.md) §2 Section 2 — **live driving case (final-state push, FSP-4.2)**: Arian has decided to restore the eyebrow "How we work together" above the `/onboarding` Hero while keeping a single clean `<h1>`. This is the first *funnel* page (not just `/404`) to need the shape.
- [`meta/compositions/pages/404.md`](../../compositions/pages/404.md) §2 Section 2 — original driving case (`/404` Hero, `eyebrow="404"`).
**Spec context**: [`meta/specs/pages/onboarding.md`](../../specs/pages/onboarding.md) §4 IA item 2 (eyebrow: "Onboarding" or "How we work together" — content-drafter's call); [`meta/specs/pages/404.md`](../../specs/pages/404.md) §4 IA item 2 + §5.
**DS version observed**: `@poukai-inc/ui@2.11.2` (gap confirmed against `meta/ds-snapshot/llms-full.txt` — Hero default variant still has no eyebrow slot; `variant="no-title"` is the only eyebrow path and it emits no `<h1>`). The original 2026-05-18 filing observed `0.15.0`; the gap has persisted across the major-version line — the proposal was never filed as a GitHub issue.
**Sibling proposal**: [`hero-no-title-variant.md`](./hero-no-title-variant.md) — opened the no-title doorway variant; this proposal addresses the *opposite* gap (eyebrow-with-title-present).
**Tracked**: not yet filed in `poukai-inc/poukai-ui`. Open the issue per `meta/workflow.md` (steps 2+) only at Arian's gate.

---

## 0. Framing

This proposal speaks from the **composition need**, per the designer agent's DS-gap protocol. It does **not** prescribe the DS API shape — that's `@poukai-inc/poukai-ui` maintainers' decision space.

**Refresh note (2026-06-14, final-state push).** The proposal was first authored for `/404`, where the eyebrow is drafter-optional and the page reads cleanly without it — so it was "forward-looking, not blocking." That posture has changed: Arian has now decided to **restore the eyebrow "How we work together" on the `/onboarding` Hero** (a funnel page), keeping a single clean `<h1>`. The need is now an explicit founder decision on a shipping funnel page, not a speculative `/404` nicety. The recurring nature of the need (see §1) strengthens the case for the DS surface over a per-page site workaround.

---

## 1. The composition gap

`<Hero>` at `@poukai-inc/ui@0.15.0` exposes a discriminated-union prop type ([`molecules/Hero/Hero.d.ts`](https://github.com/poukai-inc/poukai-ui)):

```typescript
export type HeroDefaultProps = HeroShared & {
    variant?: "default" | undefined;
    title: ReactNode;             // required
    titleAs?: "h1" | "h2";
    status?: ReactNode;            // slot above title
    eyebrow?: never;               // <-- forbidden in default variant
};

export type HeroNoTitleProps = HeroShared & {
    variant: "no-title";
    eyebrow?: ReactNode;           // <-- only valid here
    title?: never;
    titleAs?: never;
    status?: never;
};
```

The discriminator is load-bearing: `eyebrow` and `title` are mutually exclusive at the type level. The DS contract is "if you want an eyebrow, drop the title; if you want a title, drop the eyebrow." The composition (`/about` and `/404` are the live cases) wants the third option — **eyebrow above title, both present, single `<h1>` preserved**.

### Where this need appears (in priority order)

1. **`/onboarding` (active, final-state push, FSP-4.2)** — Arian has decided to restore the eyebrow **"How we work together"** above the Hero, keeping exactly one `<h1>` (the Hero title "What saying yes actually looks like"; spec §8 single-`<h1>` AC). The DS forbids the combination on the default variant. The page ships now via the §2 interim (the `<Eyebrow>` DS atom placed above the Hero); it adopts `<Hero eyebrow="…" title="…" />` when this proposal lands.
2. **`/404`** — content draft v1.1 §2 ships `heroEyebrow: "404"` AND `heroTitle: "This page doesn't exist."`. Spec §6 + §8 ACs require exactly one `<h1>`. P0 shipped without the eyebrow.
3. **Other funnel titled-Hero pages (recurring need — not speculative).** `/engagements`, `/roles`, `/why-ai`, `/principles`, and `/about` all render `<Hero title lede>` with no eyebrow today (`src/pages/*.astro`), and `engagements.astro` already documents the same constraint in a header comment ("the DS titled `<Hero>` excludes an eyebrow slot … mirroring `/roles` and `/why-ai`"). None of these pages *require* a Hero eyebrow today — but the page-function-label register is one a future editorial pass could want on any of them (e.g. an "Engagements" / "Field notes" structural label above the title). `/engagements` and `/onboarding` already carry an `<Eyebrow variant="muted">` lead-in *inside their jump-nav* — so the eyebrow register is in active use one section below the Hero; the only gap is the Hero slot itself. **A recurring, multi-page register, not a one-off.**
4. **Cross-consumer (speculative)** — any DS consumer that wants an editorial-band Hero with both a page-function eyebrow and a load-bearing `<h1>`.

### What the composition wants from the DS

A single Hero invocation, default variant, that ships:

```
<Hero size="intimate"
      align="center"
      eyebrow="404"                            // page-function label (≤4 chars/words)
      title="This page doesn't exist."         // page <h1>
      lede="The link is broken, or the URL was typed wrong. Try the nav above, or return home."
      cta={<Button asChild size="compact"><a href="/">Return to pouk.ai →</a></Button>}
/>
```

Rendered shape: eyebrow band at `--fs-micro` `--fg-muted` uppercase-tracked → title (h1) at `--fs-tagline-intimate` → lede → cta. The eyebrow sits where `status` would sit in the current default variant — the slot is reusable, only the prop name changes.

The proposal **does not** prescribe:

- Whether eyebrow renders above or beside `status` if both are passed.
- Whether eyebrow is rendered as a `<p>`, `<span>`, or a DS-specific eyebrow primitive.
- The exact typographic register (DS picks against existing eyebrow conventions on RoleCard / Principle).

---

## 2. The site-side interim (recommended bridge — `<Eyebrow>` DS atom, no token shadowing)

There are two distinct site-side ways to render an eyebrow above the Hero. They are **not** equivalent, and the original filing only considered the worse one.

**Rejected interim — hand-rolled CSS (`.not-found-eyebrow`).** Render a `<p>` before the Hero and re-author the eyebrow register in `site.css`:

```css
/* DO NOT DO THIS — shadows DS eyebrow tokens in site CSS */
.not-found-eyebrow { font-size: var(--fs-micro); color: var(--fg-muted); letter-spacing: 0.06em; text-transform: uppercase; … }
```

This is structurally cheap but **not durable** — it duplicates the DS's eyebrow register in site CSS, which is exactly the token-shadowing the standards doc forbids ("Never: new color values, new type sizes, new spacing tokens" in `site.css`), and it drifts if the DS revises eyebrow scale.

**Recommended interim — the `<Eyebrow>` DS atom, placed above the Hero.** The DS ships a first-class `<Eyebrow>` atom (`@poukai-inc/ui` atoms; snapshot lines 430–440) that owns the *entire* eyebrow register — `--font-sans`, `--fs-meta`, weight 500, `--tracking-eyebrow` 0.06em, `--lh-meta`, `variant="muted"` → `--fg-muted`, `margin: 0` (the consumer owns spacing to the next sibling). It is **already imported and used site-side** — `engagements.astro` renders `<Eyebrow variant="muted">` for its ladder-index lead-in, and the `/onboarding` composition already uses it for the phase-index lead-in. Placing one above the Hero is the same move:

```jsx
<Eyebrow as="p" variant="muted">How we work together</Eyebrow>
<Hero size="display" title="…" lede="…" />
```

The only site-side concern is **placement + one spacing token** between the eyebrow and the Hero (`--space-2`, 8px — the DS's own eyebrow→title gap, per snapshot line 119 and the Section header contract line 529). No CSS shadowing: the atom owns shape; the site owns composition. This stays cleanly inside the masterplan boundary (shape lives in DS; the site composes templates) — it composes an existing DS atom rather than re-authoring its visuals.

**Why the interim is still inferior to the DS slot.** The atom-above-Hero approach is *correct* and *boundary-clean*, but it is not the DS's intended Hero rhythm: the Hero molecule owns the eyebrow→title→lede vertical rhythm internally for `variant="no-title"`, and a sibling `<Eyebrow>` above the Hero re-implements that one gap site-side (a single `--space-2`, applied per page). It also won't participate in the Hero's `entrance="stagger"` choreography (the eyebrow would be outside the staggered group). For one or two pages this is negligible; as a recurring multi-page register (§1), the gap belongs in the Hero. The interim ships `/onboarding` today (proposal → DS PR → publish → bump is async); the DS slot replaces it when it lands.

---

## 3. Why this is a DS surface, not a consumer surface

The eyebrow register is **DS vocabulary**, not page composition. The DS already ships eyebrow rendering inside `RoleCard` and `Principle` molecules, and inside `<Hero variant="no-title">`. The shape "eyebrow at `--fs-micro` `--fg-muted` uppercase-tracked above body content" is canonical brand register. Forcing each consumer to re-author the eyebrow in scoped CSS:

1. Duplicates the typography decision across consumers.
2. Risks register drift the next time DS revises eyebrow scale.
3. Breaks the "DS owns visual vocabulary, site owns composition" contract.
4. Forces a one-shot CSS file for each consuming page — three pages today (`/`, `/about`, `/404`-future) and a `RoleCard`-style eyebrow that doesn't compose cleanly.

The right surface is `<Hero eyebrow="…" title="…" />` in default variant. The DS owns the eyebrow's typography, position, and spacing; the consumer owns whether to pass the prop.

---

## 4. Suggested API shapes (DS picks)

The DS picks the API; these are illustrative.

**Option A — eyebrow as new optional slot in default variant**:

```typescript
export type HeroDefaultProps = HeroShared & {
    variant?: "default" | undefined;
    eyebrow?: ReactNode;          // <-- NEW: optional structural label above title
    title: ReactNode;
    titleAs?: "h1" | "h2";
    status?: ReactNode;
};
```

Rendered order: `eyebrow` (if present) → `status` (if present) → `title` → `lede` → `cta`. Backwards-compatible: existing consumers don't pass `eyebrow` and see no change.

**Option B — eyebrow + status as mutually exclusive in default variant**:

```typescript
type HeroDefaultProps = HeroShared & (
  | { variant?: "default"; title: ReactNode; eyebrow?: ReactNode; status?: never; ... }
  | { variant?: "default"; title: ReactNode; status?: ReactNode; eyebrow?: never; ... }
);
```

Preserves the "one element above the title" rule. /` ships `status`, `/404` ships `eyebrow`, `/about` ships neither — and the DS picks which one renders. Trade-off: forces a runtime decision in the consumer.

**Option C — third variant `variant="titled-with-eyebrow"`**:

```typescript
export type HeroEyebrowTitleProps = HeroShared & {
    variant: "titled-with-eyebrow";
    eyebrow: ReactNode;
    title: ReactNode;
    titleAs?: "h1" | "h2";
    status?: never;
};
```

Most explicit; widens the discriminator. Heaviest API surface.

Drafter's bias: **Option A** — it's the smallest backwards-compatible widen, eyebrow becomes an optional slot in default variant, no new variant to discover, no runtime decision in the consumer. The DS may pick differently.

---

## 5. Accessibility contract

The DS must preserve:

- Exactly one `<h1>` in default variant (title slot). Eyebrow renders as a non-heading element (`<p>` or `<span>`).
- Heading hierarchy stays untouched: no eyebrow elevates to `<h2>` or `<h3>`.
- `prefers-reduced-motion: reduce` — eyebrow inherits the existing Hero motion gate (already DS-owned via `tokens.css`).
- WCAG SC 1.3.1 + 2.4.6 (heading + label semantics) — eyebrow is structural label, not heading. DS owns the semantic role.

---

## 6. Out of scope

- Eyebrow rendering inside `variant="no-title"` (already shipped).
- Eyebrow on RoleCard / Principle molecules (already shipped via different surfaces; the consumer pattern is `Role 01` / `Principle i.` — different register).
- An eyebrow link affordance (eyebrow-as-anchor). The DS may or may not admit this; the consumer doesn't need it today.
- A "deprecate `status` in favor of `eyebrow`" path. Both serve different jobs (status = StatusBadge availability, eyebrow = page-function label). Keep both.

---

## 7. Open questions for `@poukai-inc/poukai-ui` maintainers

- Does `eyebrow` belong as an optional slot in default variant, or as a third discriminated variant?
- If both `eyebrow` and `status` are accepted in default variant, what's the render order? Does `status` win the slot above the title and `eyebrow` go above status? Or are they mutually exclusive?
- What's the eyebrow's typographic contract — does it inherit the same `--fs-micro` `--fg-muted` register the no-title variant uses, or does it adopt a `--fs-eyebrow-display` for default-variant Hero specifically?
- Is the eyebrow accessible as `aria-describedby` on the title, or is it free-standing?

---

## 8. Adoption sequence

0. **Arian's gate** — flip `status: drafted → issue-opened` and open the issue on `poukai-inc/poukai-ui` per `meta/workflow.md` (steps 2+). Until then the proposal is a durable record only; `/onboarding` ships on the §2 interim.
1. `@poukai-inc/poukai-ui` accepts the proposal (any of options A/B/C, or a fourth shape).
2. DS publishes a minor bump.
3. Site repo's ds-bump workflow opens the bump PR per `.github/workflows/ds-bump.yml`.
4. **`/onboarding` migrates first**: the §2 interim (`<Eyebrow>` atom above the Hero) is replaced by `<Hero eyebrow="How we work together" title="…" lede="…" />`. Update `meta/compositions/pages/onboarding.md` §2 Section 2 to lock the eyebrow onto the DS slot and retire the interim note.
5. `meta/content/drafts/pages/404.md` content drafter ratifies whether to keep eyebrow "404" (now possible) or retire it. If kept, `/404` migrates the same way; update `meta/compositions/pages/404.md` §2.
6. The canonical-funnel routes (`/`, `/why-ai`, `/roles`, `/engagements`, `/principles`, `/about`) need no migration — they don't consume a Hero eyebrow today, and the prop addition is backwards-compatible. They become eligible for one if a future editorial pass wants the register.
