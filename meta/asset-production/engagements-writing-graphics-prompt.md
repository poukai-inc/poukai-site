# Claude Design prompt pack — `/engagements` + `/writing` graphics

**Target tool**: Claude Design (image/graphic generation)
**Primary output**: an OpenGraph share-card system (1200×630 PNG) for the two new pages and the `/writing` essay template — the share unit `/writing`'s shareability thesis depends on (spec `writing.md` §6.1, "non-negotiable")
**Secondary (flagged, optional)**: a `/engagements` ascent treatment — only as a reuse/extension of the existing Pouākai vocabulary
**Consumers**: `BaseLayout.astro` `ogImage` prop (per-page + per-essay), `public/og.png` fallback
**Status**: Draft — for Arian to run / hand to Claude Design
**Prior art**: `meta/asset-production/pouakai-engraving-prompt.md` (the brand's one illustration vocabulary), `meta/proposals/about-illustration-v2.md` §4 (one-vocabulary rule)

---

## 0. Brand non-negotiables — read before generating anything

These are the moat. A graphic that violates any of them is worse than no graphic.

1. **Typography-first.** pouk.ai has held its entire brand on type across six pages. Graphics are rare and earned. These OG cards are **typographic compositions**, not illustrated scenes. Type does the work; the only imagery permitted is the wordmark/isotype.
2. **One illustration vocabulary.** The site carries exactly ONE illustration register — the **vintage-engraving Pouākai** (Haast's eagle, monochrome ink). Introducing a second visual vocabulary (gradients, 3D, flat-vector SaaS spot illustration, abstract blobs) is a documented brand violation. If a card needs imagery beyond type + wordmark, it uses the engraving Pouākai or nothing.
3. **No marketing-speak, no menu energy.** `/engagements` is "shape, not price; ladder, not menu." NO prices, NO "starts at", NO tier badges, NO "most popular", NO urgency/scarcity, NO exclamation. Operator-first, refined, quiet.
4. **No Māori surface ornament.** The Pouākai name is a one-line origin reference only. NEVER apply koru, kowhaiwhai, tā moko, whakairo, or taniko motifs. The bird's gravitas comes from posture and engraving register, never tribal-art clipart.

### Palette (exact hex — use only these)
| Token | Hex | Use |
|---|---|---|
| Paper (bg) | `#FBFBFD` | card background — default |
| Ink (fg) | `#1D1D1F` | primary type |
| Muted | `#6E6E73` | secondary type, captions |
| Hairline | `#D2D2D7` | thin rules, dividers |
| Accent — orange | `#FF9F0A` | one accent moment per card, max |
| Accent — deep amber | `#B46100` | alt accent (on light) |
| Accent — terracotta | `#C0452C` | alt accent |
| Peach tints | `#FFD6A0`, `#FFF7E6` | rare soft fill, never dominant |

**Accent discipline:** one accent element per card maximum (a single word, a rule, or the stat). Everything else is ink/muted on paper. The brand is restraint.

### Type
- **Geist** — sans; all UI/body/labels/wordmark text. Weights 400/500.
- **Instrument Serif** — serif, used **italic** for emphasis/headline accents only. Never as the body face.
- Headlines: large, tight leading, generous margin. Let whitespace carry weight.

### Format / safe areas (all OG cards)
- **1200×630 px**, PNG, sRGB, flat (no transparency for OG).
- Keep all text within a ~80px inner margin (social crops are aggressive).
- Wordmark `pouk.ai` lockup bottom-left or top-left, consistent across the set.
- Must read at thumbnail size (≈300px wide in a feed) — headline legible, no fine print as load-bearing.

---

## 1. Scope — what to generate

| Asset | Dims | Priority | Notes |
|---|---|---|---|
| **A. `/engagements` page OG card** | 1200×630 | P0 | The four-rung ascent, typographic |
| **B. `/writing` index OG card** | 1200×630 | P0 | "Notes from the work", restrained |
| **C. Per-essay OG card — TEMPLATE** | 1200×630 | **P0 (load-bearing)** | The reusable shareability unit; every future essay uses it. Generate against the launch essay as the worked example |
| **D. `/engagements` ascent hero illustration** | SVG | P2 — flagged, optional | ONLY as a Pouākai reuse/extension. See §4. Recommend defer |

---

## 2. Paste-ready prompts

### A — `/engagements` page OG card

```
Create a 1200×630 px OpenGraph share card, flat sRGB PNG, for a technical AI
consultancy named pouk.ai. This is a TYPOGRAPHIC composition, not an illustration.

Background: solid #FBFBFD (near-white paper). No gradient, no texture, no photo.

Layout: a vertical ascending "ladder" of four short labels reading bottom-to-top
to suggest a climb — "Discovery", "Pilot", "Build", "Partnership" — each on its
own line, left-aligned, in Geist sans, ink #1D1D1F, with the lines stepping
slightly rightward and/or growing subtly in weight as they ascend, so the eye
reads upward progression. A thin #D2D2D7 hairline or a single small "→"/"↑"
connective may mark the sequence. Above or beside the ladder, a quiet headline
in Instrument Serif italic, ink #1D1D1F: "How the work starts, and how it grows."
The wordmark "pouk.ai" in Geist, bottom-left, muted #6E6E73.

Use ONE accent moment only: the top rung label OR a single hairline may be
#FF9F0A orange. Everything else is ink/muted on paper. Generous whitespace,
tight leading, refined and calm.

Hard exclusions: NO prices, dollar amounts, "starts at", tier/pricing badges,
"most popular", checkmarks, or comparison-table styling. NO icons-as-decoration,
NO 3D, NO gradients/mesh, NO drop shadows, NO stock illustration, NO abstract
blobs, NO generic SaaS spot art. NO exclamation marks or urgency. Quiet,
operator-first, museum-restraint typography only.
```

### B — `/writing` index OG card

```
Create a 1200×630 px OpenGraph share card, flat sRGB PNG, for pouk.ai's essays
index. TYPOGRAPHIC composition only.

Background: solid #FBFBFD. Centered or left-aligned, a single restrained
headline in Instrument Serif italic, ink #1D1D1F: "Notes from the work." A
one-line muted subhead in Geist, #6E6E73: "Essays on shipping AI in production —
useful whether or not you ever work with pouk.ai." Wordmark "pouk.ai" in Geist,
bottom-left, muted.

At most ONE accent: a single short #FF9F0A orange hairline rule under the
headline, optional. Otherwise pure ink/muted on paper.

Hard exclusions: NO photo, NO gradient, NO illustration, NO icon clutter, NO
"blog"/"subscribe" badges, NO grid of fake article thumbnails, NO 3D, NO drop
shadow. Calm editorial restraint, lots of whitespace.
```

### C — Per-essay OG card TEMPLATE (load-bearing — worked against the launch essay)

```
Create a 1200×630 px OpenGraph share card, flat sRGB PNG, for a single essay on
pouk.ai. TYPOGRAPHIC composition — this is a reusable TEMPLATE; the variable
slots are the CLAIM line and an optional STAT block.

Background: solid #FBFBFD.

Primary element: the essay's CLAIM as a large headline, ink #1D1D1F, set in Geist
(or Instrument Serif italic for the emphasis clause) — for this worked example use:
"Why AI pilots stall at integration." Keep it to 1–2 lines, tight leading,
left-aligned, large enough to read at thumbnail size.

Optional STAT block (screenshot-able share unit): a single large numeral in
ink #1D1D1F with a one-line muted #6E6E73 caption and an attributed source — for
this example: value "95%", caption "of enterprise GenAI pilots show no
measurable P&L impact", source "MIT NANDA, 2025". Set the numeral large; the
source small and muted. This stat block is the highest-leverage element — design
it so someone could screenshot just that corner into a slide.

Wordmark "pouk.ai" bottom-left in Geist, muted. Optionally a small "pouk.ai/
writing" URL line, muted.

Accent: at most ONE — the numeral "95%" OR a single hairline may use #FF9F0A
orange. Nothing else colored.

Hard exclusions: NO photo, NO gradient/mesh, NO 3D, NO drop shadow, NO stock or
spot illustration, NO author headshot, NO "NEW"/"BLOG" badges, NO social-icon
row, NO clickbait styling, NO exclamation. The card must read as an operator
stating a sourced claim, never as an ad. Sources must look real and cite-able.

Deliver it as a clearly-structured layout where CLAIM and STAT are obviously the
swappable slots, so the same template can be re-typeset for future essays.
```

---

## 3. Acceptance rubric (score each candidate)

- [ ] Reads at thumbnail (~300px) — headline legible, hierarchy holds
- [ ] Palette only from §0 table; **one** accent moment max
- [ ] Geist + Instrument Serif only; serif used italic, never as body
- [ ] Wordmark present, consistent position across the set
- [ ] `/engagements`: zero price/tier/menu signals; the ascent reads as a climb
- [ ] Essay template: CLAIM + STAT are obvious swappable slots; stat is screenshot-able and sourced
- [ ] No second illustration vocabulary; no Māori ornament; no SaaS-illustration clichés
- [ ] "Present, not performing" — quiet, refined, operator-first

---

## 4. Asset D — `/engagements` ascent illustration (P2, flagged — recommend DEFER)

**Recommendation: do NOT generate a new illustration for `/engagements`.** The
"climb / ascent" metaphor the page needs is *already* the brand's existing
asset: the **soaring Pouākai ascending a thermal** (per `pouakai-engraving-
prompt.md`). The eagle gaining altitude IS the ladder-climb. If `/engagements`
ever earns a hero illustration, it should **reuse that single engraving** (once
it ships on `/`), not introduce a new vocabulary — per the one-vocabulary rule
(`about-illustration-v2.md` §4).

If Arian still wants a bespoke ascent graphic, brief it as an **extension of the
Pouākai engraving** — same monochrome ink / `currentColor` / transparent SVG /
right-facing soaring posture / Kittl-vectorized pipeline as the precedent pack —
NOT a Claude-Design raster illustration. That keeps it in the one vocabulary.
Until then: type-only `/engagements`, consistent with the live site.

---

## 5. Delivery / wiring

- Export each OG card as PNG, place in `public/` (e.g. `public/og-engagements.png`,
  `public/og-writing.png`, `public/og-writing-<slug>.png`).
- Wire via the `ogImage` prop in the page front-matter / essay frontmatter
  (`writing.json.md` `ogImage` field). Absolute https URL required
  (`https://pouk.ai/og-...png`). Falls back to `public/og.png` when unset.
- Per-essay cards are the fast-follow the spec flagged (`writing.md` §9); the
  template (Asset C) is what makes that fast-follow cheap.
```
