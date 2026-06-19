---
feature: og-cards
surfaces: ["/why-ai", "/engagements", "/writing", "/writing/[slug]", "/", "/roles", "/principles", "/about", "/onboarding"]
status: Draft
version: 0.1
lastUpdated: 2026-06-15
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/features/og-cards.md (§4 per-surface card requirements; §5 ACs)
compositionReference: meta/compositions/components/og-cards.md (Templates A/B/C — layout recipe; OG-4 = final card copy is content's lane)
assetPrompts: meta/asset-production/engagements-writing-graphics-prompt.md (Assets A/B/C — generation prompts; not re-drafted here)
---

# Content: OG card copy (per-page + per-essay claim/stat lines)

**Surfaces**: P0 — `/why-ai`, `/engagements`, `/writing` (index), `/writing/[slug]` (per-essay template, worked example = the launch essay). Fast-follow — `/`, `/roles`, `/principles`, `/about`, `/onboarding`.
**Status**: Draft — Arian word-level approval required (this closes composition OQ **OG-4**, "final card copy").
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-15
**Governing spec**: `meta/specs/features/og-cards.md` §4 (per-surface content outcome) · **Composition**: `meta/compositions/components/og-cards.md` (the layout grammar each card obeys; the `Draft:` anchors there are what this draft confirms/replaces)

The OG card is the unfurl impression when a pouk.ai link is pasted into Slack / LinkedIn / X / iMessage. This draft owns the **words on each card** — the claim line, the per-essay claim + stat, the headline/subhead. The visual recipe (type scale, accent, feather corner, safe area) is the designer's (composition doc). Two hard guardrails carried from the spec: **every per-essay/per-page stat must be a real sourced figure that already appears in the page/essay** (never a card-only invented number); and **`/engagements` carries no figures** (categorical-only §7(a) binds the card too).

Cards must read at ~300px thumbnail — so each claim line is short, front-loaded, and legible small.

---

## 1. Drafting notes

- **Audience read**: the downstream sharer + recipient who forms a snap "considered vs. generic" judgment from the unfurl; and the peer who screenshots an essay's stat card into a deck (the virality unit). They decide whether to click in under a second.
- **Outcome read** (from §4): each card names *that page's* claim — `/why-ai` previews the deployment-gap thesis (optionally anchored by a real on-page stat), `/engagements` previews the ladder-as-relationship framing (no figures), `/writing` index names the corpus as the operator's notes, the per-essay card carries the essay's canonical claim + one sourced stat.
- **Voice anchor**: agent §4.1 (direct — the claim, nothing else), §4.4 (no marketing-speak — a card that reads like an ad is self-refuting for a brand that sells against slop), §4.6 (concrete — the stat numeral, the named thesis, never "AI solutions"). The card register is "an operator stating a sourced claim," never an ad.
- **Assumptions** (flag for Arian):
  - **A1 — card claim lines reuse on-page copy**, not fresh marketing lines. The `/engagements` card lifts the hero title; the per-essay card lifts the essay's `ogClaim`; `/why-ai` lifts the page thesis + an existing cited stat. This keeps cards honest (nothing on a card the page doesn't say) and on the no-fabrication line.
  - **A2 — `/why-ai` card uses the 95% MIT NANDA stat OR the 12–18% Gartner ROI stat** — both real, both already on-page-adjacent (95% is the launch essay's stat and the strongest single number; 12–18% is the `why-ai.json` headline ROI figure). I recommend **95%** for the card (it's the loudest, most screenshot-able real figure in the corpus) but flag the choice for Arian. Either is sourced and real; neither is invented.
  - **A3 — per-essay card = the launch essay as the worked example.** The template (Template C) is load-bearing; the launch essay (`why-ai-pilots-stall-at-integration`) is the first instance. Its `ogClaim` and stat are already Approved in that essay's draft — this draft restates them in card-slot form.
  - **A4 — fast-follow per-page cards (`/`, `/roles`, `/principles`, `/about`, `/onboarding`) are drafted here but marked fast-follow**, not P0 — the shared `public/og.png` fallback is correct until each is produced (§4.4). Drafting them now means the words are ready when the cards are generated.

---

## 2. Copy — P0 cards (the three the spec prioritizes)

Each card: 1200×630, flat Paper field, wordmark `pouk.ai` bottom-left (typographic, lowercase, period), optional feather corner top-right (gated on OG-2 / feather policy). Copy = the load-bearing slots only.

### Card A — `/engagements` (`public/og-engagements.png`) — NO FIGURES

- **Headline (Instrument Serif italic, ink)**: `How the work starts, and how it grows.`
- **Ladder labels (Geist, ascending bottom-to-top)**: `Discovery` · `Pilot` · `Build` · `Partnership`
- **Accent (one only)**: the top label `Partnership` OR a single hairline, in `#FF9F0A`. Nothing else colored.

*(Headline = the page hero title verbatim. The four ascending labels carry the ladder-as-relationship framing visually; "Partnership" (not "Retainer") as the top label reads as a relationship summit, not a product tier — matches the `engagements.json` eyebrow `The partnership`. Zero figures, holding §7(a). No "starts at," no tier badges, no checkmarks — the ascent reads as a climb, never a menu.)*

### Card B — `/writing` index (`public/og-writing.png`)

- **Headline (Instrument Serif italic, ink)**: `Notes from the work.`
- **Subhead (Geist, muted)**: `Essays on shipping AI in production — useful whether or not you ever work with pouk.ai.`
- **Accent (at most one)**: a single short hairline under the headline, optional.

*(Headline = the `/writing` page hero title verbatim. Subhead compresses the page lede's "useful whether or not you ever work with pouk.ai" — the corpus-as-operator-notes framing, no pitch. The composition's `Draft:` subhead said "Essays on shipping AI in production — useful whether or not you ever work with pouk.ai"; confirmed verbatim, it's already in voice.)*

### Card C — per-essay TEMPLATE, worked example: the launch essay (`public/og-writing-why-ai-pilots-stall-at-integration.png`)

- **CLAIM (large, ink, 1–2 lines)**: `Pilots stall at integration, not at the model.`
- **STAT block (the screenshot unit)**:
  - **Numeral (largest element, ink or `#FF9F0A` accent)**: `95%`
  - **Caption (Geist, muted, one line)**: `of enterprise GenAI pilots showed no measurable P&L impact`
  - **Source (small, muted)**: `MIT NANDA, The GenAI Divide, 2025`
- **Accent (one only)**: the `95%` numeral is the natural accent home.

*(CLAIM = the essay's `ogClaim` verbatim ("Pilots stall at integration, not at the model.") — the punchy social hook, distinct from the longer in-essay claim. The stat is the **real, sourced figure that appears in the essay body** (MIT NANDA, 95%) — never a card-only number. Caption is trimmed from the essay's `statsRow` caption to fit one card line; the source is verbatim. This card is the swappable template — future essays re-typeset CLAIM + STAT from their own frontmatter `ogClaim` + a real in-essay stat.)*

**Per-essay template slot contract (for future essays, so the words stay on-guardrail):**
- **CLAIM slot** = the essay's `ogClaim` frontmatter (≤100 chars, the punchy hook — not the longer `claim`).
- **STAT numeral + caption + source** = a stat that **actually appears, sourced, in the essay body**. If an essay carries no stat, the card ships CLAIM-only (the STAT block is optional per spec §4.1). **Never** populate the STAT slot with a number the essay doesn't source.

---

## 3. Copy — `/why-ai` per-page card (P0-adjacent; spec §4.2)

The spec lists `/why-ai` among the P0 cards (§5 AC: `/why-ai`, `/engagements`, `/writing` reference their own cards). Uses Template C grammar (CLAIM + STAT).

### Card — `/why-ai` (`public/og-why-ai.png`)

- **CLAIM (large, ink)**: `Why AI projects fail — and what to do about it.`
- **STAT block (recommended: the 95% — see A2 / Q1)**:
  - **Numeral**: `95%`
  - **Caption**: `of enterprise GenAI pilots showed no measurable P&L impact`
  - **Source**: `MIT NANDA, The GenAI Divide, 2025`
- **Alternative STAT (the on-page Gartner figure)**:
  - **Numeral**: `12–18%`
  - **Caption**: `of companies deploying AI capture meaningful ROI`
  - **Source**: `Gartner, 2026`
- **Accent (one only)**: the stat numeral.

*(CLAIM = the `/why-ai` page H1 verbatim. Both stat options are real, sourced, and already in the corpus — 95% is the launch essay's MIT NANDA figure (the loudest, most screenshot-able), 12–18% is the `why-ai.json` `statsRow` Gartner ROI figure (the page's own headline number). Recommendation: **95%** for maximum thumbnail impact; **12–18%** if Arian wants the card stat to be a figure *literally on the `/why-ai` page itself* rather than in a linked essay. Both pass the no-invented-number guardrail. See Q1.)*

---

## 4. Copy — fast-follow per-page cards (§4.4 — drafted, marked fast-follow)

Lower priority; the shared `public/og.png` fallback is correct until each is produced (§4.4). Drafted now so the words are ready. Template B grammar (headline + one-line subhead) unless noted; `/` uses Template A grammar (tagline card).

### `/` (`public/og.png` replacement, eventual — `public/og-home.png`)

- **Headline (Instrument Serif italic, ink; italic `AI`)**: `Technical consulting for teams shipping with AI.`
- **Accent**: the italic `AI` may carry the one accent, or stay ink. One only.

*(The tagline verbatim — the brand's front door as a card. Composition §5 names this exact line.)*

### `/roles` (`public/og-roles.png`)

- **Headline (Instrument Serif italic, ink)**: `Four ways pouk.ai shows up.`
- **Subhead (Geist, muted)**: `Builder, Automator, Educator, Creator — the shape of help, matched to the work.`

*(Headline names the page's self-identification job; subhead lists the four archetypes so a `/roles` share previews the matching exercise. No figures.)*

### `/principles` (`public/og-principles.png`)

- **Headline (Instrument Serif italic, ink)**: `How pouk.ai works.`
- **Subhead (Geist, muted)**: `The principles behind the work — diagnosis before build, systems that ship and keep running.`

*(Subhead compresses the principles' through-line into the brand's two load-bearing convictions; no figures. Final subhead should be checked against the live `/principles` copy at build — flagged Q3.)*

### `/about` (`public/og-about.png`)

- **Headline (Instrument Serif italic, ink)**: `pouk.ai builds AI that ships.`
- **Subhead (Geist, muted)**: `Custom AI builds. Automations. Advisory engagements.`

*(Both lines lifted verbatim from `about.json` `band.displayStatement` + `supportingLine` — the page's own opener as a card. No figures.)*

### `/onboarding` (`public/og-onboarding.png`)

- **Headline (Instrument Serif italic, ink)**: `What saying yes actually looks like.`
- **Subhead (Geist, muted)**: `Discovery, scoping, build, handoff — the four phases of a pouk.ai engagement.`

*(Headline = the `/onboarding` hero title verbatim; subhead names the four phases. No figures, no day-rates — categorical, matching the page.)*

---

## 5. Page-level SEO copy

The card is the `og:image`. This draft owns the **image's words**, not the `<meta>` text. The `og:title` / `og:description` / `twitter:*` text per route is owned by each page's content draft and is unchanged here. Two consistency notes:

- The card CLAIM and the route's `og:title` should **agree in spirit** (a recipient who reads the card then sees the title shouldn't feel a mismatch). They need not be byte-identical — the card is punchier by design. Where I lifted the card line from the page H1 (most cards), they already agree.
- **No card carries a CTA, a URL-as-claim, or a price.** The wordmark `pouk.ai` (and optional `pouk.ai/writing` URL line on essay cards) is the only locator; it is not a CTA.

---

## 6. Voice rationale

- **Cards reuse on-page copy, not new marketing lines** — the strongest guarantee that no card claims something the page doesn't deliver (the spec's "fabricates a stat the essay doesn't source" failure mode, applied to claims too). Every headline above traces to an existing page H1, hero title, or approved frontmatter line.
- **`/engagements` card is figure-free and reads as a climb** — "Partnership" as the top ascending label, the hero title as the headline, zero numbers: the card carries the ladder-as-relationship framing into the unfurl without a single tier or price, holding §7(a) in pixels exactly as the page holds it in prose. A card with a price would betray the whole page.
- **Per-essay STAT = a real sourced figure** — 95% MIT NANDA is the launch essay's load-bearing, sourced, screenshot-able number; reproducing it on the card (with the source visible) makes the card the "proof-of-thinking made shareable" unit the spec wants. The source line is non-negotiable: a stat without its source on the card is the slop the brand sells against.
- **`/writing` index "useful whether or not you ever work with pouk.ai"** — the anti-pitch line is the corpus's whole posture; putting it on the share card signals "operator notes, not content marketing" before the recipient clicks, which is the conversion move (it earns the click by not asking for it).
- **No card reads as an ad** — no exclamation, no "NEW," no urgency, no social-icon row, no badges (the composition's hard exclusions, restated as a copy discipline). The register is a sourced claim stated plainly — the same restraint as the rest of the site.
- **Fast-follow cards lift page H1s / openers verbatim** — `/about` uses `about.json`'s own display statement; `/onboarding` uses its hero title; `/` uses the tagline. No new copy invented for cards that don't yet need it — the words are ready, sourced from approved page copy.

---

## 7. Headline alternatives

High-stakes line: the `/why-ai` card stat choice (the loudest element). Claim lines are lifts from approved page copy, so no alternatives are offered for those — word-level edits are Arian's in review.

### `/why-ai` card STAT

| Option | Stat | Source | Rationale | Risk |
|---|---|---|---|---|
| Recommended | `95%` — of enterprise GenAI pilots showed no measurable P&L impact | MIT NANDA, 2025 | The loudest, most screenshot-able real figure in the whole corpus; maximum thumbnail impact; ties the page to the launch essay's proof. | The 95% lives in the *essay*, not literally on the `/why-ai` page body — a purist might want the card stat to appear on the exact page it fronts. |
| Alternative | `12–18%` — of companies deploying AI capture meaningful ROI | Gartner, 2026 | The figure literally on the `/why-ai` page (`statsRow`); tightest page-to-card fidelity. | A range reads slightly less punchy at thumbnail than a single bold `95%`. |
| Rejected | any composite / rounded "~90%" or invented number | — | — | Fabrication — violates the no-card-only-numbers guardrail. Never. |

---

## 8. Composition-fit flags

For the designer (composition `meta/compositions/components/og-cards.md`).

- **Flag 1 — claim-line length at thumbnail.** The longest CLAIM (`/why-ai`: "Why AI projects fail — and what to do about it.") must hold its hierarchy at ~300px. If it crowds the STAT block, the trim candidate is dropping "— and what to do about it" to just "Why AI projects fail." (still the page's thesis). Designer's call on the type scale.
- **Flag 2 — per-essay caption length.** The card caption ("of enterprise GenAI pilots showed no measurable P&L impact") is trimmed from the essay's fuller `statsRow` caption to fit one card line. If it still wraps past one line at the card type scale, trim to "of enterprise GenAI pilots showed no P&L impact." (drops "measurable" — but "measurable" is load-bearing precision; flagged, not recommended).
- **Flag 3 — `/engagements` accent must not become a figure.** The one accent moment on the engagements card is the top label or a hairline — never a number (there are none). Flagged so the designer doesn't reach for a stat to fill the accent slot.
- **Flag 4 — feather corner gated.** The optional feather corner mark (composition A4 / OG-2) is gated on the feather-motif policy approval. Copy is feather-agnostic; flagged so the corner is a conscious add, not a default.

---

## 9. Open questions for Arian

- **Q1 — `/why-ai` card stat: `95%` (MIT NANDA) or `12–18%` (Gartner)?** Recommended: **95%** (loudest, most screenshot-able). Alternative: **12–18%** (the figure literally on the `/why-ai` page). Both real and sourced. **The one card decision most worth your call.**
- **Q2 — P0 scope confirm (composition OG-1/OG-3).** This draft supplies copy for the three P0 cards (A/B/C) + the `/why-ai` card. The fast-follow per-page cards (§4) are drafted but not P0. Confirm you want copy locked for P0 only now, with fast-follow held.
- **Q3 — `/principles` fast-follow subhead.** The drafted `/principles` subhead is a compression I should check against the live `/principles` page copy before it's final. If you greenlight the fast-follow cards, I'll verify the subhead against `principles-page.json` / `principles.json` in a revision. Flagged as the one fast-follow line not lifted verbatim from existing copy.
- **Q4 — per-essay automation (composition OG-1 note / engineer's lane).** Whether per-essay cards are hand-generated or build-time templated is an engineer/asset call. Content's contribution: the slot contract in §2 (CLAIM = `ogClaim`; STAT = a real in-essay sourced figure). No content decision needed; flagged for awareness.

---

## 10. Out of scope

- The card **artwork / generation** — Assets A/B/C prompts already authored (`engagements-writing-graphics-prompt.md`); running them is Arian's / asset-production's lane.
- The card **layout recipe** (type scale, accent placement, safe area, feather corner) — `pouk-ai-designer`'s composition.
- Any **invented stat or claim** on a card (categorical-only / proof-integrity — absolute).
- Any **figure on the `/engagements` card** (categorical-only §7(a)).
- Photography, illustration, mesh gradient, AI-slop, or a literal eagle on any card (imagery do-not list; the feather corner is the only sanctioned mark, optional).
- The `<meta>` `og:title`/`og:description`/`twitter:*` **text** per route — owned by each page's content draft (unchanged here).
- The `BaseLayout.astro` `ogImage` wiring, absolute-URL construction, per-essay frontmatter resolution — engineer's lane.
- Dynamic/personalized OG images per referrer — out (§ out-of-scope).
