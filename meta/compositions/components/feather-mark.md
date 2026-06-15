# Composition (component): Feather mark

**Type**: Reusable component composition (used across multiple surfaces)
**Status**: PROPOSAL — "raise the ceiling" / feather-as-motif. Awaiting Arian approval (this is the central imagery decision — imagery-direction §7 Q1).
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Governing direction**: `meta/assessments/imagery-illustration-direction.md` §3 (Tier 1 ruling — "the feather IS the motif") + §2 per-surface map + §4 production/perf path.
**DS version targeted**: `@poukai-inc/ui@2.17.0` (`meta/ds-snapshot/llms-full.txt` is the binding reference).
**Consuming compositions**: `meta/compositions/pages/404.md` (the canonical first home — a lost feather), `meta/compositions/pages/home.md` (optional colophon, Delta 3), `meta/compositions/pages/why-ai.md` §3 (optional divider companion, deferred), and the OG-card corner mark (`meta/compositions/components/og-cards.md`).

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The feather is a site-side inline SVG, NOT a DS primitive.** The feather *geometry* lives inside the DS `<Wordmark>` (the isotype paths cluster at viewBox x=140–200 per `meta/proposals/ds-wordmark-feather-flush-left.md`). But the DS rule is explicit: **"Do NOT use `<Wordmark>` as a watermark."** So the recurring quiet mark is a *separate, site-side inline SVG* whose path is extracted from the Wordmark isotype geometry — not the `<Wordmark>` primitive scaled down, and not a new DS component. This keeps the DS contract intact (no second Wordmark, no watermark misuse) and keeps the feather in the site's lane (a site asset, like the deferred eagle). See §6.
- **A2 — `currentColor`, inline, decorative, static.** The feather renders in `currentColor` (resolves to `--fg`; inverts for dark mode for free), inlined (so it inherits color and carries no extra network request), `aria-hidden="true"` (purely decorative — it duplicates the brand the Wordmark already names), and **fully static** (no animation, no hover, no scroll trigger). Near-zero bytes, zero JS, zero CLS, zero Lighthouse risk (imagery §4.3).
- **A3 — Max one deliberate feather per page, beyond the Wordmark.** The `<Wordmark>` already carries the isotype on every page. The recurring mark is *one additional* feather moment per page, used sparingly as punctuation, never as decoration sprawl (imagery §3 Tier 1, §5 do-not #5). A page may have zero; it must not have two.
- **A4 — Strike via contrast, not quantity.** A single feather lands hard *because* the site is otherwise type-only. The mark earns its place as a quiet figurative spine, not as ornament (imagery §1, §3).

---

## 1. Intent

The feather is the brand's one recurring figurative element — the Pouākai abstracted to its part-for-whole, already shipping inside the Wordmark, now promoted to a sparing, deliberate quiet mark. The reader should register it the way you register a colophon or a printer's flower: a small, considered, monochrome sigil that says "this brand chose to draw this," not "this page needs an image." It is the resolution to the year-long eagle stall — it carries the namesake without depicting the bird (no posture to get wrong, no predator cliché, no Māori-ornament risk by construction), at near-zero cost, inverting for dark mode for free. Everywhere it appears it obeys the same discipline: one per page, `currentColor`, static, decorative, small. The strike is the contrast against disciplined type, never the quantity.

## 2. The mark itself

- **Geometry source**: the feather isotype path from the DS Wordmark (viewBox `0 0 1184 290`, isotype cluster at x≈140–200). The engineer extracts the isotype path into a small standalone SVG with its own tight `viewBox` (cropped to the feather, not the full wordmark box). **Path geometry changes require Arian's approval (ADR-0011)** — the site-side extraction must trace the shipped isotype faithfully, not redraw it. If extraction is non-trivial, this is the one place a small DS export (an isotype-only asset) might be cleaner — flagged in §6 as a possible DS convenience, not a gap.
- **Color**: `currentColor` only. Resolves to `--fg` (`#1D1D1F` light / the dark-mode `--fg` when dark mode ships). **Never** `--accent`, never multi-color, never a fill other than the inherited text color. Monochrome by register, not by styling choice.
- **Rendering**: **inline `<svg>`** (not `<img src>`), so it (a) inherits `currentColor`, (b) inverts in dark mode automatically, (c) carries no extra HTTP request, (d) embeds its own intrinsic `viewBox` for CLS-safe sizing. SVGO-minified.
- **A11y**: `aria-hidden="true"` on the root `<svg>`. No `<title>`, no `role`, no `alt`. It is decorative — it conveys no information the page text doesn't already carry. (Contrast `<Portrait>`, which the DS forbids from being decorative; the feather is the opposite case — never meaningful.)
- **Weight**: target ≤2KB inline (far smaller than the deferred eagle's ≤8KB budget — the feather is a single simple shape). Byte-cheap against the `/` HTML-weight gate (R-015); negligible elsewhere.

## 3. Sizing scale

Three sizes, all expressed via the SVG's rendered height (width auto from the locked aspect ratio). These are *layout* dimensions, not `--space-N` rhythm values and not `--icon-*` values (the feather is neither spacing nor an affordance icon — it is an editorial mark). The engineer sets the height in the site-side CSS; the three rungs below are the only sanctioned sizes:

| Size | Rendered height | Where |
|---|---|---|
| **sigil** | ~20–24px | Home colophon (above the StatusBadge); divider companion beside a `<Divider>` on an editorial page. The quietest rung — reads as punctuation. |
| **mark** | ~40–56px | OG-card corner (scaled into the 1200×630 raster at export — see og-cards composition). Mid rung. |
| **anchor** | ~96–140px | `/404` only — a single larger, muted feather as the page's one delightful figurative beat. The loudest the feather ever goes (and still far quieter than the deferred eagle). |

No rung above `anchor`. A feather larger than ~140px starts to read as "imagery," which is the eagle's deferred job, not the feather's. The feather stays a *mark*; the eagle (if it ever lands) is the *illustration*.

## 4. Placement recipes (per consuming surface)

### 4.1 `/404` — the lost feather (canonical first home)

- **Size**: `anchor` (~96–140px).
- **Placement**: above the Hero title block, centered with the Hero text column (the `/404` Hero is `align="center"` per the 404 composition §2). It is the page's one figurative beat — a single muted feather, slightly larger, sitting above "This page doesn't exist."
- **Color**: `currentColor` → `--fg`, optionally rendered at reduced opacity (a muted feather reads as "lost"). If reduced opacity is wanted, apply via `opacity` on the inline SVG (a CSS property, not a new token) — designer recommendation: ~0.4–0.5 opacity for the "lost / faded" register. Confirm in Open Question F2.
- **Why it earns it**: a 404 is the one page with no conversion job to corrupt (imagery §2) — a single quiet figurative mark is purely delightful and risk-free. This is the **validation surface**: ship the feather here first (imagery §6 sequence), confirm the register reads in production, then spread it.
- **Note**: the existing `/404` composition is Approved without a feather. Adopting `anchor` here is a **revision** to `meta/compositions/pages/404.md` §2 (which currently says "No illustration slot — v1 register only"). That clause was written before the feather-as-motif ruling. Adopting the feather is a deliberate scoped exception (a decorative inline mark, not the eagle illustration slot) and needs an Arian-approved 404 revision — flagged in Open Question F3, NOT silently assumed.

### 4.2 `/` home — the colophon (optional, Delta 3 of the home revision)

- **Size**: `sigil` (~20–24px).
- **Placement**: directly above the `<StatusBadge>` in the Hero's `status` register — a small mark introducing the doorway. It is NOT in the `Hero illustration` slot (that stays deferred for the eagle). It is a small inline sigil above the status line, inside the Hero's status-adjacent vertical flow.
- **Color**: `currentColor` → `--fg`, full opacity (the doorway feather is *present*, not *lost* — distinct register from `/404`).
- **Why it earns it**: the home audit forbids adding proof/clutter to the doorway (sales-content-gaps §3), but a single small feather respects that — it is the "felt finish" the deferred eagle was meant to deliver, at near-zero cost (imagery §2). One deliberate mark, the brand's chosen sigil.
- **Motion interaction with the stagger**: the home Hero runs `entrance="stagger"`. The colophon feather is **static** — it does not animate as a stagger slot (it is not in a DS-managed slot; it is a site-side sigil above the status). It is simply present on first paint, above the staggering status/title/lede/CTA. Designer recommendation: leave it static (a feather that fades in would draw the wrong kind of attention to a colophon). Confirm in Open Question F2.
- **Status**: this is `home.md` Delta 3 (optional, additive). Ship Delta 1+2 with or without it.

### 4.3 Editorial divider companion (deferred — `/why-ai` / `/principles`)

- **Size**: `sigil` (~20–24px).
- **Placement**: beside or above a DS `<Divider>`, or above a section eyebrow, as section-rhythm punctuation — at most one per page. On `/why-ai`, the candidate slot is above the Statement's hairline (why-ai composition §3). On `/principles`, above the principle list's lead.
- **Color**: `currentColor` → `--fg`, full opacity.
- **Why it earns it**: pairs with the surface-band rhythm work (ds-capability #2) — the feather gives the scroll a quiet figurative spine without a color or a commission (imagery §2).
- **Status**: **DEFERRED.** Per imagery §6 sequence, validate the feather on `/404` first, then consider divider use on one editorial page. NOT proposed in this pass. Recorded so a future revision has the recipe. Max one per page; never on a band's own surface (it sits on `--bg`, beside the rule).

### 4.4 OG-card corner mark (see og-cards composition)

- **Size**: `mark` (~40–56px, scaled into the raster at export).
- **Placement**: a corner of the 1200×630 OG card, paired with the `pouk.ai` wordmark lockup. Rendered into the PNG at export time (the OG card is a flat raster, not a live SVG — imagery §4.2). Single-color ink `#1D1D1F` or muted `#6E6E73` per the card's palette.
- **Status**: composed in `meta/compositions/components/og-cards.md` §corner. Listed here for the cross-surface inventory.

## 5. Cross-surface discipline (rules that span every use)

- **One per page, beyond the Wordmark.** The Wordmark's isotype does not count against the budget; the recurring mark is one additional feather. Zero is fine; two is a violation.
- **Always `currentColor`, always static, always `aria-hidden`.** No exceptions across surfaces. No hover state, no scroll trigger, no entrance animation, no parallax, no flap, no drift (imagery §5 do-not #9). `prefers-reduced-motion` is trivially satisfied — there is no motion to gate.
- **Three sizes only** (`sigil` / `mark` / `anchor`). No arbitrary heights.
- **Never `--accent`, never multi-color, never a band fill.** The feather is monochrome ink on the page canvas, beside or above content — never a background, never colored.
- **Never the eagle, never Māori ornament.** The feather is the everyday form of the one vocabulary; the eagle is its rare deferred ceremonial form (imagery §3 Tier 2). No second vocabulary, ever (imagery §5 do-not #6).

## 6. DS gaps surfaced

**None — pure-site.** The feather is a site-side inline SVG extracted from the *already-shipped* Wordmark isotype geometry. It is deliberately **not** a DS primitive and **not** the `<Wordmark>` primitive reused (DS forbids Wordmark-as-watermark). No DS API is needed; no DS proposal is filed.

**Possible DS convenience (NOT a gap, flagged for awareness):** if extracting the isotype path from the Wordmark SVG proves fiddly or risks drifting from the shipped geometry (ADR-0011 governs the path), the DS *could* one day export an isotype-only asset for clean reuse. That would be a convenience, not a requirement — the site can extract the path itself today. Do not file a proposal unless the extraction actually fights the engineer; recorded here only so the option is on the record. The decision belongs to Arian.

## 7. Open questions for Arian

1. **F1 — Accept the feather-as-motif ruling?** This is the central imagery decision (imagery §7 Q1): the feather is the canonical Pouākai motif, the eagle demoted to optional deferred anchor. Everything in this composition follows from a yes. (Recommendation: yes — it cuts the year-long eagle stall and ships at near-zero cost.)
2. **F2 — Opacity / motion register.** `/404` feather: full `--fg` or muted (~0.4–0.5 opacity, the "lost" read)? Home colophon: static (recommended) confirmed? (Recommendations: `/404` muted; home colophon static.)
3. **F3 — `/404` revision.** Adopting the `anchor` feather on `/404` revises the Approved `404.md` §2 ("no illustration, v1 register only"). Confirm the scoped exception (a decorative inline mark, not the eagle slot), which lets me revise `404.md`. (Recommendation: yes — `/404` is the risk-free validation surface.)
4. **F4 — Home colophon (Delta 3).** Ship the `sigil` feather above the home StatusBadge, or keep `/` strictly type-only until the eagle lands? (Recommendation: ship it — it is the cheapest "felt finish" available.)
5. **F5 — Geometry extraction.** Confirm the engineer extracts the isotype path site-side (vs. requesting a DS isotype export). (Recommendation: extract site-side; only escalate to DS if extraction drifts from the ADR-0011 geometry.)

This composition reaches `Approved` once F1 is a yes and F2–F5 have Arian's calls. The divider companion (4.3) stays deferred regardless.

## 8. Out of scope

- **The eagle.** Tier 2 deferred anchor (imagery §3) — its production prompt is preserved in `meta/asset-production/pouakai-engraving-prompt.md`; this composition changes nothing about it. The feather is not the eagle.
- **The `Hero illustration` slot.** Reserved for the eagle (home §6.2 / D-17). The colophon feather is a small sigil above the status, not the illustration column.
- **Dark-mode token values.** The feather inverts for free via `currentColor`; dark mode itself is not shipped and out of scope.
- **The OG-card raster layout.** Composed in `meta/compositions/components/og-cards.md`; this doc only specifies the corner mark's size + register.
- **DS-side authoring.** No gap, no proposal. The possible isotype-export convenience is Arian's call, not a designer deliverable.
- **Māori motif, second vocabulary, animated feather.** Permanently out (imagery §5).
