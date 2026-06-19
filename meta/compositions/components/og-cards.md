# Composition (component): OG share cards — typographic per-page + per-essay

**Type**: Reusable component composition (the OG-card system)
**Status**: PROPOSAL — awaiting Arian approval. The prompt pack is already authored (`meta/asset-production/engagements-writing-graphics-prompt.md`); this composition specifies the *layout recipe + wiring contract* the cards must satisfy.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Governing direction**: `meta/assessments/imagery-illustration-direction.md` §2 (OG cards are the two highest-leverage image moves, both composable now) + §4.2 (PNG 1200×630 format/weight). Reads on `meta/asset-production/engagements-writing-graphics-prompt.md` (the paste-ready prompts) and `meta/standards/technical-requirements.md` R-037 (the OG contract).
**DS version targeted**: N/A for the card raster itself (OG cards are flat PNGs, not DS components). The cards *match* the DS token palette + type but are exported as static rasters.
**Consuming surface**: `BaseLayout.astro` `ogImage` prop (per-page + per-essay); `public/og.png` fallback.

---

> **Lane note.** OG cards are *substance* (assets in `public/`, wired by the engineer) more than *composition*. The asset-production prompts already exist and are Arian's to run / hand to Claude Design. **This composition's job is the bridge**: the layout recipe each card obeys (type scale, hierarchy, feather corner, safe area), the weight budget, and the wiring contract — so the generated rasters are on-brand and the engineer wires them correctly against R-037. It does not re-draft the generation prompts (those live in the asset-production pack) and it does not author copy.

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — Cards are typographic compositions, not illustrations.** Type does the work; the only permitted imagery is the wordmark lockup + (optionally) the feather corner mark. No scene, no illustration, no gradient (imagery §1, asset-pack §0). This is the moat.
- **A2 — Three card templates: A (`/engagements` page), B (`/writing` index), C (per-essay TEMPLATE — load-bearing).** Plus the existing `public/og.png` fallback for every other route. Per-page cards for the core marketing routes (`/`, `/why-ai`, `/roles`, `/principles`, `/about`, `/onboarding`) are a *fast-follow* using the same A-template grammar — not blocking, listed in §5.
- **A3 — 1200×630 PNG, sRGB, flat (no transparency).** Mandated by R-037 ("`og:image` must reference an existing 1200×630 PNG in `public/`") and the OG-consumer reality (Slack/X/iMessage want PNG/JPEG). Exempt from the site's AVIF/WebP preference because OG is a different delivery context (imagery §4.2).
- **A4 — Feather corner is the OG-card expression of the feather-mark system.** Per `meta/compositions/components/feather-mark.md` §4.4 — the `mark`-size feather (~40–56px scaled into the raster) in a corner, single-color ink or muted. Optional per card; one feather max.

## 1. Intent

Every time someone pastes a pouk.ai link into Slack, X, or iMessage, the unfurl is a brand impression. Today they all unfurl to the generic `public/og.png`. The OG-card system turns each share into an on-brand, screenshot-able typographic card — and for essays, the per-essay card is *proof-of-thinking made shareable*: a sourced CLAIM + STAT that someone could screenshot straight into a slide (imagery §2, writing.md §6.1 "non-negotiable"). The cards should read at thumbnail size (~300px in a feed), carry the same museum-restraint type the site does, and never look like an ad. The strike is the same as the rest of the brand: spare type, one accent moment, lots of whitespace, the wordmark quiet in a corner. The per-essay STAT block is the single highest-leverage element on the whole imagery program — design it so the corner crops cleanly into someone else's deck.

## 2. The shared grammar (every card obeys)

All three templates share one layout grammar, so the set reads as a system:

- **Canvas**: 1200×630px, solid `#FBFBFD` (Paper / `--bg`). No gradient, no texture, no photo.
- **Safe area**: all load-bearing text within a ~80px inner margin (social crops are aggressive). Nothing critical in the outer 80px frame.
- **Type**: Geist (sans — labels, body, wordmark, the CLAIM when set in sans) + Instrument Serif (serif, **italic only** — emphasis/headline accents; never the body face). Headlines large, tight leading, generous margin.
- **Palette** (exact hex, from the asset-pack §0 table — these mirror the DS tokens):
  - Paper `#FBFBFD` (bg) · Ink `#1D1D1F` (`--fg`, primary type) · Muted `#6E6E73` (`--fg-muted`, secondary/caption) · Hairline `#D2D2D7` (`--hairline`, rules).
  - **Accent: ONE moment per card, maximum** — a single word, a single hairline, or the stat numeral, in `#FF9F0A` (orange) or an alt (`#B46100` deep amber / `#C0452C` terracotta). Everything else is ink/muted on paper. This is the restraint discipline; two accent moments is a violation.
- **Wordmark lockup**: `pouk.ai` in Geist, bottom-left (consistent across the whole set), muted `#6E6E73`. This is the typographic wordmark text, NOT the DS `<Wordmark>` SVG (the card is a flat raster) — but it must match the wordmark's casing (`pouk.ai`, lowercase, period).
- **Feather corner (optional, A4)**: a `mark`-size feather (~40–56px) in a corner — recommended top-right, opposite the wordmark, so the two brand marks bracket the card diagonally. Single-color ink `#1D1D1F` or muted `#6E6E73`. One feather max; it is the card's allowed feather-per-"page" (feather-mark §5). If the accent moment is already spent and a colored feather would be a second accent, keep the feather ink/muted (never accent-colored).
- **Thumbnail test**: the headline must be legible and the hierarchy must hold at ~300px wide. No fine print as load-bearing.

## 3. The three templates

### Template A — `/engagements` page OG card

- **Primary element**: a vertical ascending "ladder" of four short labels reading bottom-to-top to suggest a climb — **Discovery / Pilot / Build / Partnership** — left-aligned Geist ink, each line stepping slightly rightward and/or growing subtly in weight as it ascends (the eye reads upward progression). A thin `#D2D2D7` hairline or a single small `→`/`↑` may mark the sequence.
- **Headline**: a quiet Instrument Serif *italic* line, ink — `Draft: "How the work starts, and how it grows."` (matches the page Hero title).
- **Type scale (target, within the 80px safe area)**: headline ~64–80px Instrument Serif italic; ladder labels ~36–44px Geist; wordmark ~28px muted.
- **Accent**: ONE only — the top rung label ("Partnership") OR a single hairline may be `#FF9F0A`. Nothing else colored.
- **Hard exclusions** (categorical-only, asset-pack §0/3): NO prices, "starts at", tier/pricing badges, "most popular", checkmarks, comparison-table styling, urgency, exclamation. The ascent reads as a *climb*, never a menu. This is the same sequence-not-shelf discipline the `/engagements` page composition defends.
- **File**: `public/og-engagements.png`.

### Template B — `/writing` index OG card

- **Primary element**: a single restrained Instrument Serif *italic* headline, ink — `Draft: "Notes from the work."` — centered or left-aligned.
- **Subhead**: one muted Geist line — `Draft: "Essays on shipping AI in production — useful whether or not you ever work with pouk.ai."`
- **Type scale**: headline ~72–88px Instrument Serif italic; subhead ~24–28px Geist muted; wordmark ~28px muted.
- **Accent**: at most ONE — a single short `#FF9F0A` hairline under the headline (optional). Otherwise pure ink/muted.
- **Hard exclusions**: NO photo, gradient, illustration-scene, icon clutter, "blog"/"subscribe" badges, fake article-thumbnail grid, 3D, drop shadow. Calm editorial restraint, lots of whitespace.
- **File**: `public/og-writing.png`.

### Template C — Per-essay card (TEMPLATE — load-bearing)

The reusable shareability unit. The variable slots are the **CLAIM line** and an optional **STAT block**. Every future essay re-typesets this template.

- **Primary element (CLAIM)**: the essay's claim as a large headline, ink, Geist (or Instrument Serif italic for the emphasis clause), 1–2 lines, tight leading, left-aligned, legible at thumbnail. Worked example: `Draft: "Why AI pilots stall at integration."`
- **STAT block (optional, the highest-leverage element)**: a single large numeral, ink, with a one-line muted caption and an attributed source. Worked example: numeral `"95%"` · caption `"of enterprise GenAI pilots show no measurable P&L impact"` · source `"MIT NANDA, 2025"`. The numeral large; the source small + muted. **Design it so someone could screenshot just that corner into a slide** — this is the proof-of-thinking share unit.
- **Type scale**: CLAIM ~56–72px; STAT numeral ~88–120px (the loudest element on the card); STAT caption ~22–26px muted; source ~18px muted; wordmark ~28px muted. Optional `pouk.ai/writing` URL line, muted.
- **Accent**: ONE only — the STAT numeral OR a single hairline may be `#FF9F0A`. Nothing else colored. (If the card has a STAT, the numeral is the natural accent home.)
- **Swappable-slot clarity**: deliver the layout so CLAIM and STAT are *obviously* the swappable slots — the same template re-typesets per essay. Sources must look real and cite-able (categorical-only in pixels — imagery §5 do-not #10: no fabricated proof imagery; the stat must be a real sourced figure, exactly like `/why-ai`'s cited stats).
- **Hard exclusions**: NO photo, gradient/mesh, 3D, drop shadow, stock/spot illustration, author headshot, "NEW"/"BLOG" badges, social-icon row, clickbait, exclamation. The card reads as an operator stating a sourced claim, never an ad.
- **File**: `public/og-writing-<slug>.png` (one per essay; the launch essay is the worked example).

## 4. Weight budget & wiring (the engineer contract)

- **Weight (R-037 + imagery §4.2/§4.3)**: each card is a flat PNG 1200×630 sRGB. Flat type-on-paper at this size compresses small (the existing `public/og.png` is ~66.6KB — within budget for a static `public/` asset). **Critically: OG cards are referenced via `<meta og:image>` only — they are never fetched by the page itself**, so they have no impact on page weight, LCP, or advisory performance tracking (imagery §4.3). The R-015 HTML-weight tracking on `/` (now advisory) is untouched regardless. Target ≤150KB per card as a courtesy ceiling for the share consumer; not a hard gate (no page renders them inline).
> Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding.
- **Wiring (R-037, the eight required tags)**: each card is referenced via the `ogImage` prop in the page front-matter / essay frontmatter, resolving to an **absolute https URL** (`https://pouk.ai/og-engagements.png`). It must satisfy all eight R-037 tags (`og:image` + `twitter:image` both point to the card; `twitter:card=summary_large_image`). Falls back to `public/og.png` when `ogImage` is unset. Per-essay cards are wired from the `writing.json` `ogImage` field (writing.md §9 fast-follow).
- **Format exemption**: these stay PNG (not AVIF/WebP) — OG consumers want PNG/JPEG; this is the one sanctioned raster exemption from the site's format-negotiation preference (imagery §4.2).
- **Location**: `public/` (static, no `astro:assets` processing — OG cards and favicons are the correct `public/` residents per imagery §4.4 / R-022).

## 5. Per-page card fast-follow (not blocking)

Templates A/B/C are the P0 set (imagery §2 — the two highest-leverage image moves). The remaining marketing routes can each get a per-page card later, reusing **Template A's grammar** (Paper bg, one accent, wordmark bottom-left, optional feather top-right):

- `/` — the tagline `"Technical consulting for teams shipping with AI."` with the italic `AI`, as a card.
- `/why-ai` — a CLAIM+STAT card (Template C grammar) using the page's strongest cited stat.
- `/roles`, `/principles`, `/about`, `/onboarding` — headline + one-line subhead (Template B grammar).

These lift every unfurl from the generic fallback to an on-brand card (imagery §2 "cheap conversion surface"), but they are **fast-follow, not part of this P0 batch**. Listed so the system's reach is on the record. Confirm scope in Open Question OG-3.

## 6. DS gaps surfaced

**None.** OG cards are flat rasters in `public/`, not DS components — there is no DS API to extend. The feather corner is the existing site-side feather-mark (no DS primitive — feather-mark §6). The cards *match* the DS palette + type but are not built from DS primitives. No DS proposal.

## 7. Open questions for Arian

1. **OG-1 — Run the P0 cards (A/B/C)?** The prompts are authored (`engagements-writing-graphics-prompt.md`); this needs only your "go" to generate (imagery §7 Q3 — the cheapest, highest-leverage move). (Recommendation: yes — zero illustration risk, conversion upside.)
2. **OG-2 — Feather corner on the cards?** Include the `mark`-size feather top-right (recommended — brackets the card with the bottom-left wordmark and ties the cards to the feather-as-motif system), or keep the cards pure-type with only the wordmark? (Recommendation: include it, ink/muted, gated on the feather-mark ruling F1.)
3. **OG-3 — Per-page card fast-follow scope (§5).** Approve the per-page cards as a fast-follow now, or hold until the P0 set validates in production? (Recommendation: ship P0 first, then fast-follow.)
4. **OG-4 — Final card copy.** The CLAIM/headline/STAT text in §3 are `Draft:` anchors matching existing page copy. Confirm or supply final wording (the STAT source must be a real cited figure). (Final word is yours / content's.)

This composition reaches `Approved` once OG-1 is a yes and OG-2/OG-4 have Arian's calls. OG-3 (fast-follow) can stay deferred.

## 8. Out of scope

- **The generation prompts.** Already authored in `meta/asset-production/engagements-writing-graphics-prompt.md`; this composition specifies the layout recipe + wiring, not the prompts. Running them is Arian's lane.
- **Final card copy.** CLAIM/STAT/headline wording and the cited STAT source are content/PM's lane (OG-4). This composition anchors them with `Draft:` lines.
- **The `og.png` fallback.** Already shipping, on-contract (R-037). Unchanged.
- **The `BaseLayout.astro` `ogImage` wiring mechanics.** Engineer's lane (how the prop resolves, the absolute-URL construction, the per-essay frontmatter field). This composition states the contract (absolute https, 1200×630 PNG, eight R-037 tags); the engineer implements it.
- **Asset D (the `/engagements` ascent illustration).** Deferred per the asset-pack §4 — recommend NOT generating a new illustration; reuse the deferred eagle if `/engagements` ever earns a hero image. Out of this OG-card composition.
- **DS-side authoring.** No gap, no proposal.
