# DS Proposal: `<Hero size="intimate">` rhythm scaling — proportional vertical gaps

**Target**: `@poukai-inc/ui` `<Hero>` molecule
**Status**: Draft (consumer-side authored, follow-on to #39)
**Proposing consumer**: pouk.ai site
**Proposing date**: 2026-05-17
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) §2 + §6.1 after live audit on 2026-05-17 of `@poukai-inc/ui@0.7.0` consumption.

---

## Problem

[poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) (shipped via `@poukai-inc/ui@0.7.0`) added `<Hero size>` prop with `display` (default) and `intimate` variants. At `size="intimate"`, the title font-size token swaps from `--fs-tagline` (clamp 36–68px) to `--fs-tagline-intimate` (clamp 32–52px) — title visual mass drops ~25%.

**But the internal Hero rhythm (vertical gaps between status / title / lede / CTA) is held constant**. The DS proposal we authored for #39 explicitly said: *"The Hero's internal rhythm tokens (`--space-6` status→title, `--space-8` title→lede) remain unchanged at `'intimate'`."* That was our call, and on live audit it's wrong.

At `display`-scale title (~60-68px desktop), `--space-6` (24px) status→title + `--space-8` (32px) title→lede read proportionally — the gaps are ~35% / ~47% of the title's vertical mass. At `intimate`-scale title (~52px max), those same gaps are now ~46% / ~62% of title mass — **disproportionately generous, the eyebrow and lede feel orphaned from the title**.

Arian's reaction during live audit at `localhost:4321` on 2026-05-17: *"spacing between eyebrow, title and description looking too big."*

---

## Proposed API

**No new public API.** This is an internal Hero CSS adjustment — at `size="intimate"`, the rhythm tokens consumed by Hero shrink one rung on the DS spacing scale:

| Gap | At `size="display"` (current) | At `size="intimate"` (proposed) |
|---|---|---|
| status → title (status `margin-bottom`) | `--space-6` (24px) | `--space-4` (16px) |
| title → lede (title `margin-bottom`, desktop) | `--space-8` (32px) | `--space-6` (24px) |
| title → lede (title `margin-bottom`, mobile <768px) | `--space-6` (24px) | `--space-4` (16px) |

CTA `margin-top` (`--space-8`) is **untouched** by this proposal — the affordance-to-text gap reads correctly at both sizes per the live audit.

---

## Behavior

- DS Hero adds rhythm-scaling rules conditioned on the `sizeIntimate` variant class (currently `.poukai_vLmWYk` per the 0.7.0 compiled output).
- At `display` (default): rhythm unchanged from 0.7.0 — zero regression for existing consumers.
- At `intimate`: rhythm shrinks per the table above.

CSS sketch:
```css
.sizeIntimate .status { margin-bottom: var(--space-4); }
.sizeIntimate .title  { margin-bottom: var(--space-4); }

@media (min-width: 768px) {
  .sizeIntimate .title { margin-bottom: var(--space-6); }
}
```

---

## Cross-page applicability

Universal. Any consumer that uses `<Hero size="intimate">` benefits. No consumer is forced to.

---

## Token compliance

All new values resolve to existing DS spacing tokens (`--space-4`, `--space-6`). **No new tokens needed.** Internal Hero CSS change only.

---

## Accessibility

No accessibility impact. Rhythm change does not affect tab order, focus indicators, contrast, or motion. The page's text hierarchy is preserved.

---

## Motion / hydration

No motion implications. No hydration implications. R-079 zero-JS contract preserved.

---

## Trade-offs

1. **Per-variant rhythm hardcoded in DS.** Future consumers wanting a different rhythm at `intimate` cannot override without going outside the contract. **Mitigated by**: the DS team's discipline is exactly to opinionate on rhythm; if a consumer needs different rhythm, they need a different size variant or a `<Hero>` follow-up proposal.
2. **Internal-only change, no API addition.** Cannot be feature-flagged. Mitigated by: it's a strictly tighter rhythm under a non-default variant; impact is bounded.
3. **Original #39 proposal locked rhythm.** This proposal explicitly reverses that lock. Recording the reason here so the audit trail is clean: the lock was authored before live audit revealed the disproportion.

---

## Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Exact gap values**: `--space-4`/`--space-6` is the consumer's recommendation. The maintainers' typographic intuition may pick different rungs (`--space-3`/`--space-6`? `--space-4`/`--space-8`?).
2. **Mobile rhythm**: should the mobile gap (`--space-4` proposed) compress further at very narrow viewports (<375px)? Likely not — `--space-4` (16px) is already the minimum that reads as deliberate.
3. **CTA gap (`--space-8`) at intimate**: keep unchanged as the consumer suggests, or also scale? Consumer's live audit on 2026-05-17 reported the CTA gap reads correctly at intimate; the maintainers may have a different read.
4. **Future variants**: if a future `size` variant (e.g., `display-loud` or `compact`) lands, does this rhythm-scaling pattern generalize? Maintainers' call.
5. **Should this be its own proposal or fold into a #39-follow-up?** Filed as separate proposal here for audit clarity; maintainers may bundle.

---

## Adoption plan

1. `@poukai-inc/poukai-ui` maintainers accept proposal (or counter-propose with different gap values).
2. DS patch release (no API change → patch, not minor) shipping the rhythm scaling. Per ADR-0003, this is a behavior tweak under an existing non-default variant — patch bump appropriate (`0.7.x`).
3. pouk.ai site bumps DS dep.
4. pouk.ai composition `meta/compositions/pages/home.md` §6.1 amended: note that rhythm at intimate is now scaled internally; no consumer change needed (zero site-side work to adopt).
5. Engineer verifies the rhythm renders right on live audit (`localhost:4321`) and confirms Arian's "too big" reaction is resolved.

---

## Out of scope

- Changing the `display`-variant rhythm. The 0.7.0 default rhythm is the brand-canonical pattern for display-scale Heroes and stays untouched.
- Exposing the rhythm tokens as Hero props. Composition layer should not opinionate on internal Hero rhythm per the existing contract.
- Adding a CTA-gap scaling at intimate. The live audit reported the CTA gap reads correctly; revisit if a future audit disagrees.
- Per-page rhythm overrides. If a specific page wants tighter rhythm than what the DS opinionates, it's a new spec, not this proposal.

---

## Audit trail

Original consumer-side ask (this proposal at #39 authoring):

> *"The Hero's internal rhythm tokens (`--space-6` status→title, `--space-8` title→lede) remain unchanged at `'intimate'`."*

Live audit at `localhost:4321` after 0.7.0 consumption on 2026-05-17, Arian:

> *"I see spacing between eyebrow, title and description looking too big."*

This proposal reconciles the two by tightening rhythm at the intimate variant only.
