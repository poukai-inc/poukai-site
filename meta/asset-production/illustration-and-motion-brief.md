# Direction brief: illustrations & animated graphs for pouk.ai

**Type**: Direction brief / external-resource handoff — NOT a spec amendment. This document *proposes*; Arian and Claude Design *execute*.
**Status**: DRAFT for Arian review. Nothing here is approved, commissioned, or scheduled.
**Owner**: Arian (founder, sole approver) · Author: pouk-ai-designer
**Handoff target**: "Claude Design" (external asset-production resource). This brief is written to stand alone — Claude Design should be able to start producing assets from these descriptions without reading the rest of the repo.
**Last updated**: 2026-06-16
**Branch context**: `explore/raise-the-ceiling`

**Reads on (the established direction this brief BUILDS on, never contradicts):**
- `meta/assessments/imagery-illustration-direction.md` — the visual system: typographic-first editorial restraint; the feather is the canonical Pouākai motif; the eagle engraving (D-17) is a demoted, deferred, optional single anchor; the do-NOT list (§5).
- `meta/specs/features/feather-motif-policy.md` — the brand-usage contract: **max one deliberate feather per page beyond the Wordmark**; inline `currentColor` SVG; `aria-hidden`; **static — no hover, no scroll-trigger, no drift, no flap**.
- `meta/masterplan.md` §4.3 + `meta/standards/technical-requirements.md` R-078 / R-079 — the client-JS posture (the load-bearing constraint for "animated graphs," explained in Part B §0).
- `meta/ds-snapshot/llms-full.txt` — what `@poukai-inc/ui` ships today.
- `meta/assessments/creative-exploration.md` — the "restrained AND striking" bar: strike via composition, scale, and rhythm — never via imagery noise or hype.

**DS version referenced**: `@poukai-inc/ui` per the committed snapshot (`Hero illustration` slot added 0.15.0; `Stat` / `StatsSection` ship; **no chart, graph, sparkline, gauge, donut, or animated-counter primitive exists** — confirmed below).

---

## 0. The one-paragraph read (for Claude Design)

pouk.ai is technical consulting for teams shipping with AI. Its brand is *typographic-first editorial restraint* — Anthropic / Stripe Press / Lex register. The page is the artwork; type does the work; imagery is rare, monochrome, and earned. There is exactly **one** figurative vocabulary on the whole site — **the Pouākai feather** (the isotype already in the wordmark, drawn as a flat `currentColor` line). A larger expression of that same vocabulary — a **vintage-engraving Pouākai eagle** — is a deferred, optional, single anchor that has not yet been produced. **Nothing on this site uses stock photography, flat-vector SaaS spot art, AI-mesh gradients, isometric robots, or Corporate Memphis.** Every asset you produce must read as *authored restraint*, the opposite of "we added a graphic here." This brief proposes a small, disciplined set of illustrations (Part A) and a careful approach to animated data graphs (Part B) where the headline tension is that the site ships almost no client-side JavaScript — so most "animated graph" ideas must be reconceived as *static-but-rich* graphics, with an optional CSS-only entrance reveal, never a JS-driven count-up or scroll-triggered draw.

**The bar, in one line:** if an asset could appear on any generic AI-consultancy landing page, it is wrong for this one. The strike comes from *spareness at scale*, not from quantity or motion.

---

## 0A. The shared visual register (read before producing ANY asset)

Every illustration in Part A and every static graphic in Part B obeys this register. This is non-negotiable house style.

- **Color**: monochrome only. Line and fill use `currentColor` — i.e. the page's foreground ink (`#1d1d1f` in light, near-white in dark). There is exactly one accent in the brand (`#0071e3`) and it is **never** used in a resting state — only on link-hover underlines and focus rings. **Do not introduce the accent into any illustration or graph.** No second color, no gradient, no tint ramp, no shading washes beyond what a one-ink engraving would carry (hatching/stipple is fine; a gray fill wash is not).
- **Line language**: the established register is **vintage engraving / woodcut** — fine hatching, stipple, confident contour line, the feel of a 19th-century natural-history plate or a Stripe-Press / WSJ-hedcut illustration. This is the ONLY illustrative style on the site. Do not introduce a second style (no flat vector, no soft-gradient "modern" illustration, no 3D, no photographic) to sit beside it.
- **Weight**: assets ship as **inline SVG** wherever they are `currentColor` line art (so they inherit ink color, invert for dark mode for free, and add ~0 network cost). Target ≤ 8 KB gzipped for any single SVG; the eagle anchor in particular is capped at ≤ 8 KB gzipped per the engraving prompt.
- **Motion default**: **static.** The feather is static by policy. Illustrations are static. The only motion any of these may carry is a *CSS-only entrance reveal* (see Part B §0) and only where this brief explicitly proposes it — never hover, never parallax, never Ken Burns, never auto-play.
- **Cultural line (load-bearing, never crossed)**: the Pouākai is a one-line Māori-myth origin reference plus an abstracted feather. **No Māori surface ornament — ever.** No koru, kowhaiwhai, tā moko, whakairo, or taniko, in any asset, full stop. A single feather or a single naturalistic eagle in engraving register is iconographically neutral and stays on the right side of this line; any decorative cultural pattern crosses it.

---

# PART A — ILLUSTRATIONS

Five proposals, ranked by leverage in §A.6. Each names exact placement, what it depicts, the slot it consumes, accessibility, responsive behavior, and how it stays on the right side of "authored restraint, not stock-image noise." Two of these revive the deferred Pouākai engraving (D-17); the rest are net-new and lighter.

---

## A.1 — `/` home hero: the Pouākai engraving anchor (REVIVES D-17)

- **Placement**: `/` (home), inside the `Hero` block, consuming the DS `Hero` **`illustration` slot** (the slot exists since 0.15.0 and is currently empty/deferred). Text sits left; the engraving sits right on screens ≥ 768px; below 768px the illustration column is hidden entirely (DS behavior — do not fight it).
- **What it depicts**: a single Pouākai eagle in **vintage-engraving register** — naturalistic, dignified, in flight or perched-and-alert, rendered as a one-ink line-and-hatching plate. **Critically: not a predator cliché.** The three prior AI-generation passes (rev-3/4/5, see `pouakai-engraving-prompt.md`) all failed by defaulting to a snarling, talons-out, heraldic-predator eagle — that is exactly the failure mode to avoid. The brief register is *natural-history plate*, not *sports-team logo*: the bird as a studied specimen, calm authority, altitude and patience (the about-page line is "a hunter that worked by altitude and timing"), never aggression. Read the full prompt pack in `meta/asset-production/pouakai-engraving-prompt.md` — this brief does not re-author it; it only re-prioritizes it as an optional anchor.
- **Register / style / size / facing**: engraving/woodcut, monochrome `currentColor`, fits within `--hero-illustration-max` (25rem / 400px column). Facing: toward the text column (i.e. the bird looks *into* the page, not off the edge) so the composition pulls the eye back to the words. Single mark, no scene, no background, transparent.
- **Slot consumed**: the `Hero illustration` slot (one per page; this is the home page's single deliberate figurative anchor and it is the eagle, not the feather — see A.2 for the either/or).
- **Accessibility**: **decorative** → `aria-hidden="true"`. The hero's meaning is carried entirely by the title + lede; the bird adds presence, not information.
- **Responsive**: hidden below 768px (DS-enforced — mobile LCP stays text-only, which is correct). On desktop the column is aspect-stable so there is zero layout shift.
- **Motion**: when the hero runs `entrance="stagger"`, the illustration is the **fifth and last** stagger slot (index 4, 600ms via `--dur-slow` + `--easing`) — it arrives *after* the words, which is the correct hierarchy: read the brand, then meet the bird. This is the pre-existing, CSS-only, reduced-motion-gated DS entrance — not a new animation. **Static thereafter** (no flap, no drift).
- **On the right side of restraint**: one mark, one page, monochrome, no scene. This is the single most "finished" the doorway can read without adding a word or a section. It is the opposite of stock imagery precisely because it is *authored* and *singular*.
- **D-17 reconciliation**: **this REVIVES the deferred eagle.** It does not change the eagle's status as "optional, gated on convergence." If a generation pass finally converges (or Arian commissions a human engraver), this is its home. Until then, `/` ships text-only or with the feather colophon (A.2) as the interim beat. **Recommend producing this only if Arian re-opens the eagle; otherwise it stays deferred and A.2 covers the home figurative beat.**

---

## A.2 — `/` home hero: the feather colophon (interim, net-new placement of an existing mark)

- **Placement**: `/` (home), a small feather mark positioned **above the StatusBadge** (the "Currently taking conversations for Q3." pill) at the top of the hero block — a colophon move. This is the *interim* figurative beat for the home page **if** the eagle (A.1) stays deferred.
- **What it depicts**: the Pouākai feather — the same isotype geometry already in the wordmark — drawn as a single flat `currentColor` line, small (icon-to-small scale, roughly 20–32px tall), upright or gently angled.
- **Register / size / facing**: flat line (a feather has no engraving-hatching requirement; it can be a clean contour). Monochrome `currentColor`. Small. Quiet.
- **Slot consumed**: the **feather colophon slot** under the feather-motif policy. This is the home page's *one deliberate feather beyond the wordmark*. **A.1 (eagle) and A.2 (feather) are mutually exclusive on `/`** — the page gets at most one deliberate figurative mark. If the eagle lands, the colophon is dropped; if the eagle stays deferred, the colophon is the home beat.
- **Accessibility**: decorative → `aria-hidden="true"`.
- **Responsive**: shows at all widths (it is tiny and byte-cheap); never affects LCP.
- **Motion**: **static, by policy.** No entrance, no hover, no drift. (The feather-motif policy explicitly bans feather motion.)
- **On the right side of restraint**: a single hairline feather above a status pill reads as a maker's mark, not decoration. It is felt, not noticed.
- **D-17 reconciliation**: **net-new placement of an already-shipping mark** (the wordmark isotype). Does not touch the eagle. This is the low-risk, zero-spend interim the imagery assessment recommends validating first.

---

## A.3 — `/404`: the lost feather (net-new placement)

- **Placement**: `/404` page, a single feather mark, larger than the colophon, set alone above or beside the "page not found" copy, muted.
- **What it depicts**: one Pouākai feather, the same geometry as A.2 but at a larger, more deliberate scale (a "lost feather" — a feather that has drifted down). Flat `currentColor` line.
- **Register / size / facing**: flat line, monochrome, larger-ish (the 404 is the one page where a single quiet figurative mark is purely delightful and risk-free — no conversion job to corrupt). Slight rotation to suggest it has fallen is acceptable; it is still static.
- **Slot consumed**: the `/404` feather slot (one deliberate feather, within policy).
- **Accessibility**: decorative → `aria-hidden="true"`.
- **Responsive**: shows at all widths; scale down gracefully on mobile. No LCP concern (404 is not indexed/ranked).
- **Motion**: static.
- **On the right side of restraint**: a 404 is the safest possible canvas for a single quiet mark. This is the *recommended first place to validate the "feather as recurring mark" register in production* before spreading it anywhere with a conversion job.
- **D-17 reconciliation**: net-new; feather only; does not touch the eagle.

---

## A.4 — One editorial section-divider feather (net-new, ONE page only)

- **Placement**: a single feather, used **once**, as a hairline companion above a section eyebrow or beside a `Divider` on **one** editorial page — recommended `/principles` (a character page where restraint *is* the message) OR `/why-ai` (the diagnosis page). **Pick one page, not both.** This is a per-page composition call bounded by the max-one rule; recommend `/principles` because it carries no conversion job and validates the divider register without any sales risk.
- **What it depicts**: the same feather geometry as A.2/A.3, small, as section-rhythm punctuation — a quiet figurative spine for the scroll.
- **Register / size / facing**: flat `currentColor` line, small, sits in the type rhythm (companion to a `Divider` hairline, not a standalone band).
- **Slot consumed**: that page's one deliberate feather.
- **Accessibility**: decorative → `aria-hidden="true"`.
- **Responsive**: shows at all widths; tiny.
- **Motion**: static.
- **On the right side of restraint**: max one per page, used as punctuation, never decoration. The moment it appears twice on a page or starts feeling like a watermark, it is wrong.
- **D-17 reconciliation**: net-new; feather only.
- **Sequencing note**: deploy this **after** the `/404` feather has validated the register in production (per the imagery assessment's recommended order). Do not roll the divider out across multiple pages — one page, evaluate, stop.

---

## A.5 — `/about` founder portrait (the single photographic exception — GATED, net-new, NOT engraving register)

- **Placement**: `/about`, the existing `Portrait` band (infrastructure already wired in the page). One real cinematic founder portrait.
- **What it depicts**: a real photograph of the founder — editorial, cinematic, operator-first (not a stock headshot, not a "team pointing at a screen").
- **Register**: **this is the ONE sanctioned exception to the monochrome-engraving rule** — it is real photography, governed by its own gated spec (`about-illustration-v2.md`), not by this brief. It does *not* count as a second illustrative style because it is photography of a real person on the one page that asks "who am I emailing?", not decorative illustration.
- **Slot consumed**: the `/about` `Portrait` slot. (Does not interact with the feather count — it is photography, a separate vocabulary governed by its own spec.)
- **Accessibility**: **meaningful** → real `alt` text naming the founder; not `aria-hidden`.
- **Responsive**: `Portrait` emits `<picture>` with AVIF > WebP > JPEG and a 4-width srcset, aspect-locked (zero CLS). If it becomes the LCP element, it is eager / high-priority loaded.
- **Motion**: static (no Ken Burns).
- **On the right side of restraint**: exactly one photo on the entire site, on the page that earns it, gated on a trigger (first engagement / prospect feedback / quarterly review).
- **D-17 reconciliation**: unrelated to the eagle; this is the parked photographic exception. **Listed here only for completeness — it is GATED and governed by its own spec; do not produce it on the strength of this brief.**

---

## A.6 — Illustration priority ranking

| Rank | Illustration | Risk | Spend | Why this order |
|---|---|---|---|---|
| 1 | **A.3 `/404` feather** | Lowest | ~0 (extract from wordmark) | Risk-free canvas; validates the "feather as recurring mark" register in production before spreading it. |
| 2 | **A.2 `/` colophon feather** | Low | ~0 | The interim home figurative beat; one prop placement of an existing mark. Validate after A.3. |
| 3 | **A.4 one editorial divider feather** | Low | ~0 | One page only, after A.3 validates. Recommend `/principles`. |
| 4 | **A.1 `/` eagle engraving** | High (production) | High (convergence or commission) | The flagship anchor, but DEFERRED — only if Arian re-opens the eagle. Mutually exclusive with A.2 on `/`. |
| 5 | **A.5 `/about` portrait** | Gated | Photo shoot | Governed by its own spec; produce only when a trigger fires. |

---

# PART B — ANIMATED GRAPHS

This is the section to read most carefully, because the honest answer is uncomfortable: **the site's engineering posture makes most "animated graph" ideas either impossible without a JavaScript exception, or unnecessary because a static graphic delivers the same value at zero cost.** §0 explains the constraint plainly; the proposals follow with an explicit feasibility tag on each.

---

## B.0 — The load-bearing constraint (read first)

Two facts govern everything in Part B:

**Fact 1 — there is no chart primitive in the design system.** `@poukai-inc/ui` ships `Stat` (a typographic numeral + caption — explicitly "no chart, no animation," "no animated counters") and `StatsSection` (a band that frames Stats — explicitly: *"Do NOT use for interactive data, tabular data, progress indicators, chart replacements, or count-up animations"*). There is **no** bar-chart, line-chart, donut, gauge, sparkline, or counter component. The only motion-bearing primitives in the whole DS are `StatusBadge` (a CSS pulse) and `Skeleton`/`Spinner` (loaders) — none is a data-viz primitive. So any graph is a *new site-side asset* (an SVG), not a DS component. Building a new chart *component* would be a DS proposal (out of this brief's lane); building a *static SVG graphic* the engineer drops in is fine.

**Fact 2 — the site ships almost no client JavaScript, and what it ships is whitelisted.** The masterplan retired the literal "zero JS on `/`" rule, but the standard (R-009 / R-078 / R-079, all HARD) now permits client JS on any page **only** for: first-party analytics (Matomo), first-party error reporting (Bugsink), Vercel Web Analytics, the Astro `<ClientRouter />` navigation runtime, and **`@poukai-inc/ui` islands explicitly hydrated with a justifying `// hydration:` comment that the reviewer independently verifies is load-bearing.** R-079 further requires that any animation in DS components be **CSS-only keyframes, never JS-driven.** A marketing-page chart animation is *not* on the whitelist. So:

> **Any animated graph that needs JavaScript at runtime — a count-up, an IntersectionObserver-triggered draw, a charting library, a `requestAnimationFrame` loop — BREAKS the R-009/R-078/R-079 contract.** It cannot ship without either (i) a masterplan-level exception that Arian explicitly approves and the reviewer signs off (a sanctioned same-origin JS island with a `// hydration:` justification), or (ii) being reconceived as a static-or-CSS-only graphic.

**The two zero-JS-compatible techniques available to you:**
- **(a) Pure static SVG.** A pre-drawn graphic — bars at their final heights, an arc filled to its final sweep, a counter showing its final number. No motion. Ships as inline SVG, byte-cheap, works everywhere, zero JS, zero reduced-motion concern. **This is the default and the recommendation for every proposal below.**
- **(b) Static SVG + a CSS-only entrance reveal.** The same static graphic, with a one-shot CSS `@keyframes` entrance (a bar grows from 0 to its final height, an arc sweeps to its final angle, a line draws via `stroke-dasharray`/`stroke-dashoffset`) that fires *on initial render* — no JS, no scroll trigger. **Browser-support caveat:** a render-time CSS entrance is universally supported and safe. A *scroll-driven* CSS entrance (`animation-timeline: view()`) is the only way to get a "reveal as it scrolls into view" effect without JS, but it has **partial browser support** (Chromium-shipping; Safari and Firefox lag / require flags as of 2026) and degrades to either always-animated or static depending on fallback — so it must degrade to the static end-state, never to a broken/blank state. **Recommendation: if you want a reveal, use a render-time CSS entrance, not scroll-driven, unless Arian accepts the support caveat for a progressive enhancement that degrades to static.**

**The non-negotiable reduced-motion rule for every animated item:** every CSS entrance must be gated by `prefers-reduced-motion: reduce` and must **collapse to the static final end-state** (the bars at full height, the arc fully swept, the number at its final value) — never to a blank or mid-animation state. The DS already enforces this globally via a `:root !important` block in `tokens.css` that clamps animation durations to ~0; your CSS must be written so that clamping leaves the *finished* graphic visible. (This mirrors the `Skeleton` note in the DS: reduced-motion must declare the correct resting state, not just kill the animation.)

**One more hard constraint inherited from the sales posture:** **categorical-only / no fabricated precision.** Every number in a graph must be a *real, cited* figure that already exists in the content. Do not invent data points, do not add decimals the source doesn't have, do not draw a trend line through points that aren't sourced. The real figures available are listed per proposal.

---

## B.1 — `/why-ai` opening stats: the deployment-gap bar set (the obvious, highest-value home)

- **Placement**: `/why-ai`, the **opening headline stats band** — currently a `<StatsSection fill dividers>` rendering four `Stat` atoms (`12–18%`, `85%`, `15%`, `$300B`). This is the page's one recessed `--surface-section` "by the numbers" exhibit. A graphic here would sit *with* or *just below* that band, or replace the bare numerals with numerals-plus-form.
- **What it visualizes (REAL cited figures only)**:
  - `12–18%` of companies deploying AI capture meaningful ROI (Gartner, 2026).
  - `85%` of AI projects fail to meet business goals (Gartner, 2026).
  - `15%` of AI decision-makers report positive profitability impact (PwC, 2026).
  - (`$300B` AI venture funding in Q1 2026 — this is a *magnitude*, not a proportion; keep it as a numeral, do not bar-chart it. See "what NOT to do.")
- **Visual form**: a **proportion/deficit graphic** for the three percentage figures. The strongest honest form is a *filled-vs-empty bar* (or a single 100%-track with a small filled segment) that makes the *gap* viscerally legible — e.g. for "12–18% capture ROI," a bar where a thin sliver is inked and the vast majority is empty hairline outline. The empty space IS the argument. Monochrome: inked segment = `currentColor` solid (or dense hatching), remainder = hairline outline only. Three small bars, one per figure, aligned to the three `Stat` numerals, reinforcing the numbers rather than competing with them.
- **Feasibility tag**: **STATIC-FIRST (recommended) → optional CSS-only entrance.**
  - **Static (recommended):** ship the three bars pre-drawn at their final fill. Inline SVG, `currentColor`, zero JS, byte-cheap. Delivers ~95% of the value — the *spareness of the inked sliver against the empty track* is the whole point, and that lands with no motion.
  - **CSS-only entrance (optional, on render):** each bar's inked segment grows from 0 to its final width via a render-time `@keyframes`, `--dur-slow` (600ms) + `--easing`, staggered to echo the hero stagger. Gated by `prefers-reduced-motion` → collapses to full-fill static. **No scroll trigger** (that would need JS or the partially-supported `animation-timeline: view()`).
- **Reduced-motion behavior**: collapses to the bars at full final fill. Always legible.
- **Why it earns its place / restraint**: the stats are already the page's strength; a *deficit bar* doesn't decorate them, it *clarifies the gap* — which is the page's entire thesis ("the deployment gap is enormous"). It is editorial, not dashboard-y, because it is monochrome, hairline, and shows one idea (the gap), not a data table.
- **NOT recommended in JS form**: a count-up of "85%" ticking from 0 → 85 would need JS (a `// hydration:` island Arian must approve). It adds drama but no information and breaks the contract. Recommend the static deficit bar instead.

---

## B.2 — `/why-ai` quartile leaders: the "ceiling" multiplier graphic

- **Placement**: `/why-ai`, the **"What the leaders do differently"** section, where three quartile-leader stats currently render as a `<StatsSection dividers>` (no `fill`, on `--bg`): `1.7×` revenue growth, `3.6×` three-year TSR, `2.7×` return on invested capital (top-quartile AI deployers vs. laggards).
- **What it visualizes (REAL cited figures only)**: the three multipliers above — each is a *leader-vs-laggard ratio*. The honest form shows a baseline (laggard = 1×) and the leader bar at the multiple.
- **Visual form**: three small **paired bars** (or a baseline-tick + a taller leader bar) per metric — a short `1×` reference and a taller `1.7× / 3.6× / 2.7×` bar — so the *multiple* is legible as height, not just read as a numeral. Monochrome; leader bar inked, baseline a hairline tick. This is the "here's the ceiling" exhibit that pairs with B.1's "here's the gap."
- **Feasibility tag**: **STATIC-FIRST (recommended) → optional CSS-only entrance** (same technique as B.1: render-time bar-grow, reduced-motion → static).
- **Reduced-motion behavior**: bars at full final height.
- **Why it earns its place / restraint**: it makes the *desire* concrete (this is what the top quartile achieves) without a single fabricated number. It is the natural visual bookend to B.1 — gap, then ceiling. Keep it on `--bg` (no second recessed band — the page budgets exactly one `fill` band, already used by B.1).
- **Caveat**: only build B.2 if B.1 ships — two unrelated bar graphics on one page without the gap/ceiling framing would read as chart clutter. They work *as a pair* or not at all.

---

## B.3 — `/` home: a single quiet "build vs. ship" graphic (LOWEST priority, likely SKIP)

- **Placement**: `/` home, near the `Statement` ("Most teams can build now. Few can ship it and keep it running.") or the "Why pouk.ai, specifically" block.
- **What it visualizes**: there is **no cited numeric figure on the home page** — the home content is categorical (the Statement and differentiation copy carry no stats). So any home "graph" would either (a) fabricate a number (banned) or (b) be a non-numeric diagram (e.g. a "build → ship → keep running" progression). A non-numeric diagram is really an illustration, not a graph.
- **Visual form**: at most a tiny non-numeric process mark (three nodes: build · ship · run, with the last two emphasized). Monochrome line.
- **Feasibility tag**: **STATIC ONLY** (no numbers, so no count-up question; no motion proposed).
- **Reduced-motion behavior**: N/A (static).
- **Recommendation**: **SKIP unless Arian specifically wants a home visual.** The home page is a doorway; its spec bans sections below the hero, and a diagram risks "the home page sprouted a graphic." The home figurative beat is already covered by the feather colophon (A.2) or the eagle (A.1). A home graph is the weakest proposal in this brief and is listed mainly to record it as considered-and-likely-killed.

---

## B.4 — Animated-graph priority & feasibility summary

| Rank | Graph | Placement | Feasibility | Recommendation |
|---|---|---|---|---|
| 1 | **B.1 deployment-gap deficit bars** | `/why-ai` opening stats | STATIC-FIRST; optional CSS-only render-time entrance; reduced-motion → static | **Build static. Add CSS entrance only if it earns it.** Highest value — clarifies the page's core thesis. No JS. |
| 2 | **B.2 quartile-leader multiplier bars** | `/why-ai` leaders section | STATIC-FIRST; optional CSS-only entrance; reduced-motion → static | **Build only as the pair to B.1.** The "ceiling" bookend to B.1's "gap." No JS. |
| — | **B.3 home build/ship diagram** | `/` home | STATIC ONLY | **Skip** unless Arian asks. Weakest proposal; home is a doorway. |
| ✗ | **Any count-up / scroll-draw / charting-lib version** | anywhere | **NEEDS JS — breaks R-009/R-078/R-079** | **Do not build** without an explicit Arian-approved, reviewer-verified `// hydration:` island exception (a masterplan-level decision). The static forms above deliver the value at zero cost. |

---

# What NOT to do (binding for both parts)

1. **No AI-purple / iridescent data-viz gradients.** No mesh gradients, no neon, no "AI" color story. Monochrome `currentColor` only. The brand's single accent (`#0071e3`) never appears at rest and never in a graphic.
2. **No dashboard / chart clutter.** This is a marketing essay, not an analytics product. No axes-with-gridlines, no legends, no tooltips, no multi-series charts, no data tables dressed as graphics. One idea per graphic (a gap; a multiple), shown in the sparest possible monochrome form.
3. **No fabricated precision.** Every number is a real, cited figure that already exists in the content (12–18%, 85%, 15%, $300B; 1.7×, 3.6×, 2.7×). No invented data points, no fake decimals, no trend lines through unsourced points, no made-up case-study graphics. Do not bar-chart `$300B` (it is a magnitude, not a proportion — keep it a numeral).
4. **No second illustrative style.** One vocabulary: the engraving/feather register. No flat-vector spot art, no isometric robots, no Corporate Memphis, no soft-gradient "modern" illustration, no 3D, no stock photography (the one gated `/about` portrait is the sole photographic exception, governed by its own spec). A graph and an illustration on the same site must read as the same hand.
5. **No motion-for-show.** Every animation must communicate hierarchy, storytelling, or feedback — never decoration. A bar that grows to reveal a *gap* communicates; a number that ticks up just to be flashy does not. If an animation would add drama but no information, ship it static.
6. **No JS to get motion.** No count-ups, no IntersectionObserver draws, no charting libraries, no `requestAnimationFrame`. All motion is CSS-only, render-time, reduced-motion-gated. JS-driven motion requires an Arian-approved masterplan-level exception and is not assumed by this brief.
7. **No Māori surface ornament, ever** — no koru, kowhaiwhai, tā moko, whakairo, taniko. Load-bearing cultural respect, not a style preference.
8. **No predator-eagle cliché** in the engraving — no snarl, no talons-out heraldic pose, no sports-logo aggression. Natural-history-plate dignity only (this is what killed three prior generation passes).
9. **No feather proliferation.** Max one deliberate feather per page beyond the wordmark; feathers are static (no hover, drift, flap, parallax). The moment a page has two, or a feather becomes a watermark, it is wrong.
10. **No reduced-motion blank states.** Every CSS entrance must collapse to the finished graphic under `prefers-reduced-motion`, never to a blank or mid-animation frame.

---

# Top 2–3 priorities (highest leverage, lowest risk)

1. **A.3 — the `/404` feather** (illustration). Lowest risk, ~zero spend, validates the recurring-feather register on the one page with no conversion job. Do this first.
2. **B.1 — the `/why-ai` deployment-gap deficit bars, static** (graph). Highest-value graphic on the site: it clarifies the page's core thesis (the gap), uses only real cited figures, ships as zero-JS inline SVG, and reads editorial rather than dashboard. Build static; add the optional CSS entrance only if it earns it.
3. **A.2 — the `/` feather colophon** (illustration). The interim home figurative beat at ~zero spend; one placement of the existing wordmark mark. (Mutually exclusive with the deferred eagle A.1 on `/`.)

Everything else — B.2 (only as B.1's pair), A.4 (one editorial page, after A.3 validates), the deferred eagle (A.1, only if Arian re-opens it), the gated portrait (A.5) — is a fast-follow or deferred, not a day-one ask.

---

## File path

This brief: `/Users/arianzargaran/Desktop/poukai org/poukai-site/meta/asset-production/illustration-and-motion-brief.md`
