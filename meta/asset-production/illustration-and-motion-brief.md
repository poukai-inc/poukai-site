# Direction brief: illustrations & animated graphs for pouk.ai

**Type**: Direction brief / external-resource handoff — NOT a spec amendment. This document *proposes*; Arian and Claude Design *execute*.
**Status**: DRAFT for Arian review. Nothing here is approved, commissioned, or scheduled.
**Owner**: Arian (founder, sole approver) · Author: pouk-ai-designer
**Handoff target**: "Claude Design" (external asset-production resource). This brief is written to stand alone — Claude Design should be able to start producing assets from these descriptions without reading the rest of the repo.
**Last updated**: 2026-06-16
**Branch context**: `explore/raise-the-ceiling`

> **Part B revised 2026-06-16 following the zero-JS revocation (D-25, `meta/decisions/2026-06-16-revoke-zero-js.md`) — JS animation now permitted; static-first is a taste preference, not a constraint.** Part A is largely unaffected (the feather is static by its own brand policy, not the JS contract). What still binds everywhere: `prefers-reduced-motion` (all motion collapses to a static end-state), WCAG AA / axe-clean for anything interactive, and focus-visible. Performance (Lighthouse / Core Web Vitals / HTML weight) is now **advisory**, so heavy libraries are *allowed* — their weight is a taste/quality call, not a merge gate.

**Reads on (the established direction this brief BUILDS on, never contradicts):**
- `meta/assessments/imagery-illustration-direction.md` — the visual system: typographic-first editorial restraint; the feather is the canonical Pouākai motif; the eagle engraving (D-17) is a demoted, deferred, optional single anchor; the do-NOT list (§5).
- `meta/specs/features/feather-motif-policy.md` — the brand-usage contract: **max one deliberate feather per page beyond the Wordmark**; inline `currentColor` SVG; `aria-hidden`; **static — no hover, no scroll-trigger, no drift, no flap**.
- `meta/decisions/2026-06-16-revoke-zero-js.md` (D-25) — the **full revocation** of the client-JS / zero-JS contract. This is what changed Part B: JS animation is now permitted everywhere (see §B.0). `meta/masterplan.md` §4.3 carries the dated REVOKED note; `meta/standards/technical-requirements.md` R-009/R-078/R-079 are struck and R-013 + the HTML-weight gate are now advisory. What survived as binding: a11y (WCAG AA / axe), `prefers-reduced-motion`, focus-visible, CSP/origin-allowlist.
- `meta/ds-snapshot/llms-full.txt` — what `@poukai-inc/ui` ships today.
- `meta/assessments/creative-exploration.md` — the "restrained AND striking" bar: strike via composition, scale, and rhythm — never via imagery noise or hype.

**DS version referenced**: `@poukai-inc/ui` per the committed snapshot (`Hero illustration` slot added 0.15.0; `Stat` / `StatsSection` ship; **no chart, graph, sparkline, gauge, donut, or animated-counter primitive exists** — confirmed below).

---

## 0. The one-paragraph read (for Claude Design)

pouk.ai is technical consulting for teams shipping with AI. Its brand is *typographic-first editorial restraint* — Anthropic / Stripe Press / Lex register. The page is the artwork; type does the work; imagery is rare, monochrome, and earned. There is exactly **one** figurative vocabulary on the whole site — **the Pouākai feather** (the isotype already in the wordmark, drawn as a flat `currentColor` line). A larger expression of that same vocabulary — a **vintage-engraving Pouākai eagle** — is a deferred, optional, single anchor that has not yet been produced. **Nothing on this site uses stock photography, flat-vector SaaS spot art, AI-mesh gradients, isometric robots, or Corporate Memphis.** Every asset you produce must read as *authored restraint*, the opposite of "we added a graphic here." This brief proposes a small, disciplined set of illustrations (Part A) and a careful approach to animated data graphs (Part B). As of D-25 (2026-06-16) the full range of motion is technically on the table — static SVG, CSS-only entrances, and JS-driven motion (count-ups, scroll-triggered draws, charting libraries, `requestAnimationFrame`, GSAP/Motion). The headline tension is therefore no longer *what is allowed* but *what this restrained brand should choose*: for a typographic-first editorial register, **static-first remains the default taste call**, and JS-driven motion must earn its place by serving hierarchy, storytelling, or feedback — never decoration. Where JS genuinely adds reader value (e.g. a scroll-triggered deficit-bar draw that reveals the gap exactly as the reader arrives at it), it is now a legitimate, motivated option rather than a banned one.

**The bar, in one line:** if an asset could appear on any generic AI-consultancy landing page, it is wrong for this one. The strike comes from *spareness at scale*, not from quantity or motion.

---

## 0A. The shared visual register (read before producing ANY asset)

Every illustration in Part A and every static graphic in Part B obeys this register. This is non-negotiable house style.

- **Color**: monochrome only. Line and fill use `currentColor` — i.e. the page's foreground ink (`#1d1d1f` in light, near-white in dark). There is exactly one accent in the brand (`#0071e3`) and it is **never** used in a resting state — only on link-hover underlines and focus rings. **Do not introduce the accent into any illustration or graph.** No second color, no gradient, no tint ramp, no shading washes beyond what a one-ink engraving would carry (hatching/stipple is fine; a gray fill wash is not).
- **Line language**: the established register is **vintage engraving / woodcut** — fine hatching, stipple, confident contour line, the feel of a 19th-century natural-history plate or a Stripe-Press / WSJ-hedcut illustration. This is the ONLY illustrative style on the site. Do not introduce a second style (no flat vector, no soft-gradient "modern" illustration, no 3D, no photographic) to sit beside it.
- **Weight**: assets ship as **inline SVG** wherever they are `currentColor` line art (so they inherit ink color, invert for dark mode for free, and add ~0 network cost). Target ≤ 8 KB gzipped for any single SVG; the eagle anchor in particular is capped at ≤ 8 KB gzipped per the engraving prompt.
- **Motion default**: **static — by taste, not by contract.** The feather is static by brand policy (the feather-motif spec, independent of the JS posture). Illustrations are static. Since D-25, motion is technically permitted, but the editorial register means the only motion any of these *should* carry is a one-shot entrance reveal where this brief explicitly proposes it (CSS-only for the simple cases; JS only where it's genuinely motivated — see Part B §B.0) — never hover, never parallax, never Ken Burns, never auto-play, never gratuitous. Whatever the technique, it gates on `prefers-reduced-motion` and collapses to the static end-state.
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

This is the section to read most carefully — but the framing changed on 2026-06-16. The old honest answer ("most animated-graph ideas are impossible without a JS exception") is **obsolete**: D-25 fully revoked the zero-JS contract, so every animation technique is now available. The new honest answer is a *taste* question: for a typographic-first editorial brand, what motion actually earns its place? §B.0 explains what changed and what still binds; the proposals follow, each re-presented with the full option range (static SVG / CSS-only entrance / JS-driven motion) and a design recommendation.

---

## B.0 — What changed, and what still governs (read first)

**This section was rewritten on 2026-06-16.** The previous version said animated graphs were near-impossible because the site shipped almost no client JS and any runtime animation broke the R-009/R-078/R-079 contract. **That contract is gone (D-25, full revocation).** Below is the current reality.

**What changed (D-25):**
- **Client-side JS is now permitted anywhere, for any reason** — no whitelist, no `// hydration:` justification, no per-page budget, no reviewer sign-off for hydration. R-009 / R-078 / R-079 are struck.
- That means **the full motion toolbox is on the table for graphs**: JS count-ups, `IntersectionObserver` scroll-triggered draws, charting libraries (Recharts, visx, D3, Chart.js, etc.), `requestAnimationFrame` loops, and animation libraries (GSAP, Motion/Framer Motion). None of these requires an exception anymore.
- **Performance is now advisory.** Lighthouse, Core Web Vitals, and HTML/JS weight are tracked but **do not gate a PR or the cutover.** So a heavy charting library is *allowed*. Its weight is now a **taste/quality call** — does the payload justify what it buys for a restrained marketing essay? — not a contract violation.

**What still binds (untouched by D-25) — every animated graph must honor these:**
- **`prefers-reduced-motion: reduce`.** All motion — CSS *or* JS-driven — must collapse to the **static final end-state** (bars at full height, arc fully swept, number at its final value), never a blank or mid-animation frame. For JS, this means reading the media query and either skipping the animation and rendering the end-state, or honoring the DS's global reduced-motion clamp. A JS count-up that ignores reduced-motion is a hard a11y failure, not a taste miss.
- **Accessibility (WCAG AA, axe-clean).** Anything interactive (a chart with tooltips, a hover-able series, a focusable control) owes keyboard access, focus-visible states, and screen-reader-correct semantics. A purely decorative animated graphic should be `aria-hidden` with its real figures stated in adjacent text; an *informative* chart must expose its data to assistive tech (a visually-hidden table or proper ARIA).
- **CSP / origin-allowlist.** Any third-party charting/animation dependency must be self-hosted / first-party-bundled to respect the origin allowlist — no arbitrary CDN script tags.

**Fact 1 — there is still no chart primitive in the design system (unchanged, verified against `meta/ds-snapshot/llms-full.txt`).** `@poukai-inc/ui` ships `Stat` (a typographic numeral + caption — explicitly "no animated counters") and `StatsSection` (explicitly: *"Do NOT use for interactive data, tabular data, progress indicators, chart replacements, or count-up animations"*). There is **no** bar-chart, line-chart, donut, gauge, sparkline, or counter component. So any graph remains a **new site-side asset** — either an inline SVG the engineer drops in, or a new charting *dependency* the engineer adds — **not a DS component.** Building a new chart *component in the DS* would still be a DS proposal (out of this brief's lane); shipping a site-side SVG or adding a site-side dependency is the engineer's lane and is now unconstrained by the JS posture. (Note: D-25 does not relax the "max one StatusBadge per page" or the "DS components' own animation is CSS-only" component rules — those are DS-internal contracts. It only frees *site-side* JS.)

**The three techniques now available to you (was two):**
- **(a) Pure static SVG.** A pre-drawn graphic — bars at their final heights, an arc filled to its final sweep, a number at its final value. No motion, no reduced-motion concern, byte-cheap, works everywhere. **Still the default taste call for this brand.**
- **(b) Static SVG + a CSS-only entrance reveal.** The same graphic with a one-shot render-time `@keyframes` entrance (a bar grows from 0 via width/`transform`, a line draws via `stroke-dasharray`/`stroke-dashoffset`), `--dur-slow` (600ms) + `--easing`. Render-time CSS entrances are universally supported. *Scroll-driven* CSS (`animation-timeline: view()`) is still only partially supported (2026) — but you no longer need it for scroll reveals, because JS is now available (technique c).
- **(c) JS-driven motion (NEW — now permitted).** Count-ups (numeral ticks 0 → 85%), `IntersectionObserver` scroll-triggered draws (the graphic animates *as the reader scrolls it into view*), or a full charting library. This is the technique that was previously banned. It is now a legitimate option **where it serves the reader** — most credibly a scroll-triggered reveal that times the storytelling beat (the gap "opens" exactly when the reader reaches it). Use it sparingly; a count-up purely for drama is still a taste miss (see "What NOT to do" #5/#6).

**Categorical-only / no fabricated precision (unchanged — a sales-posture constraint, not a JS one).** Every number in a graph must be a *real, cited* figure that already exists in the content. No invented data points, no decimals the source lacks, no trend lines through unsourced points. The real figures available are listed per proposal. (This survives D-25 untouched — it was never about JS.)

---

## B.1 — `/why-ai` opening stats: the deployment-gap bar set (the obvious, highest-value home)

- **Placement**: `/why-ai`, the **opening headline stats band** — currently a `<StatsSection fill dividers>` rendering four `Stat` atoms (`12–18%`, `85%`, `15%`, `$300B`). This is the page's one recessed `--surface-section` "by the numbers" exhibit. A graphic here would sit *with* or *just below* that band, or replace the bare numerals with numerals-plus-form.
- **What it visualizes (REAL cited figures only)**:
  - `12–18%` of companies deploying AI capture meaningful ROI (Gartner, 2026).
  - `85%` of AI projects fail to meet business goals (Gartner, 2026).
  - `15%` of AI decision-makers report positive profitability impact (PwC, 2026).
  - (`$300B` AI venture funding in Q1 2026 — this is a *magnitude*, not a proportion; keep it as a numeral, do not bar-chart it. See "what NOT to do.")
- **Visual form**: a **proportion/deficit graphic** for the three percentage figures. The strongest honest form is a *filled-vs-empty bar* (or a single 100%-track with a small filled segment) that makes the *gap* viscerally legible — e.g. for "12–18% capture ROI," a bar where a thin sliver is inked and the vast majority is empty hairline outline. The empty space IS the argument. Monochrome: inked segment = `currentColor` solid (or dense hatching), remainder = hairline outline only. Three small bars, one per figure, aligned to the three `Stat` numerals, reinforcing the numbers rather than competing with them.
- **Option range (all three now available post-D-25):**
  - **(a) Static SVG:** ship the three bars pre-drawn at their final fill. Inline SVG, `currentColor`, byte-cheap. Delivers ~90% of the value — the *spareness of the inked sliver against the empty track* is the whole point, and that lands with no motion.
  - **(b) CSS-only render-time entrance:** each bar's inked segment grows from 0 to its final width via a render-time `@keyframes`, `--dur-slow` (600ms) + `--easing`, staggered. Fires on load regardless of viewport position.
  - **(c) JS scroll-triggered draw (now permitted):** an `IntersectionObserver` fires the bar-grow the moment the band scrolls into view — so the *gap opens exactly as the reader arrives at it*. Same end-state as (a)/(b); the JS only controls *when* it plays.
- **DESIGN RECOMMENDATION — (c) the JS scroll-triggered draw, with (a) static as the safe fallback.** This is the one place in the brief where JS-driven motion is genuinely *motivated*, not decorative: the page's entire thesis is "the deployment gap is enormous," and a deficit bar that *draws the empty space open the instant the reader reaches it* turns a static fact into a felt one — the storytelling beat and the motion beat coincide. That is hierarchy and storytelling, not flash. Pre-D-25 this was ruled out as contract-breaking; **I now recommend it.** Implementation must (i) honor `prefers-reduced-motion` → render the finished bars immediately, (ii) carry the real figures in adjacent `Stat` text / visually-hidden labels so the SVG can stay `aria-hidden`, (iii) be lightweight (a few lines of `IntersectionObserver` + CSS class toggle — no charting library needed for three bars). If Arian prefers maximum restraint, (a) static still delivers the core argument and is a defensible call.
- **Reduced-motion behavior**: collapses to the bars at full final fill, rendered immediately. Always legible regardless of technique.
- **Why it earns its place / restraint**: the stats are already the page's strength; a *deficit bar* doesn't decorate them, it *clarifies the gap*. Monochrome, hairline, one idea (the gap) — editorial, not dashboard-y. The scroll-triggered draw is restrained *because* it is one motivated motion tied to the page's core claim, not motion sprinkled for life.
- **Still NOT recommended: a number count-up** (e.g. "85%" ticking 0 → 85). It is now *permitted*, but it adds drama without information — the figure is the same at every frame but the final one. Prefer the deficit-bar draw, which animates the *argument* (the gap), not just a numeral.

---

## B.2 — `/why-ai` quartile leaders: the "ceiling" multiplier graphic

- **Placement**: `/why-ai`, the **"What the leaders do differently"** section, where three quartile-leader stats currently render as a `<StatsSection dividers>` (no `fill`, on `--bg`): `1.7×` revenue growth, `3.6×` three-year TSR, `2.7×` return on invested capital (top-quartile AI deployers vs. laggards).
- **What it visualizes (REAL cited figures only)**: the three multipliers above — each is a *leader-vs-laggard ratio*. The honest form shows a baseline (laggard = 1×) and the leader bar at the multiple.
- **Visual form**: three small **paired bars** (or a baseline-tick + a taller leader bar) per metric — a short `1×` reference and a taller `1.7× / 3.6× / 2.7×` bar — so the *multiple* is legible as height, not just read as a numeral. Monochrome; leader bar inked, baseline a hairline tick. This is the "here's the ceiling" exhibit that pairs with B.1's "here's the gap."
- **Option range:** same three as B.1 — (a) static paired bars, (b) CSS render-time grow, (c) JS scroll-triggered draw.
- **DESIGN RECOMMENDATION — match B.1's technique exactly, whatever Arian picks there.** B.1 (the gap) and B.2 (the ceiling) are a deliberate visual pair; they must move the same way or not at all. If B.1 ships as a JS scroll-triggered draw, B.2 does too (the leader bar rises past the laggard baseline as it enters view — a clean "here's the ceiling" beat). If B.1 ships static, B.2 ships static. **Do not let the two graphics use different motion treatments** — mismatched motion on a paired exhibit reads as inconsistency, not restraint. Same reduced-motion and `aria-hidden` requirements as B.1.
- **Reduced-motion behavior**: bars at full final height, rendered immediately.
- **Why it earns its place / restraint**: it makes the *desire* concrete (this is what the top quartile achieves) without a single fabricated number. It is the natural visual bookend to B.1 — gap, then ceiling. Keep it on `--bg` (no second recessed band — the page budgets exactly one `fill` band, already used by B.1).
- **Caveat**: only build B.2 if B.1 ships — two unrelated bar graphics on one page without the gap/ceiling framing would read as chart clutter. They work *as a pair* or not at all.

---

## B.3 — `/` home: a single quiet "build vs. ship" graphic (LOWEST priority, likely SKIP)

- **Placement**: `/` home, near the `Statement` ("Most teams can build now. Few can ship it and keep it running.") or the "Why pouk.ai, specifically" block.
- **What it visualizes**: there is **no cited numeric figure on the home page** — the home content is categorical (the Statement and differentiation copy carry no stats). So any home "graph" would either (a) fabricate a number (banned) or (b) be a non-numeric diagram (e.g. a "build → ship → keep running" progression). A non-numeric diagram is really an illustration, not a graph.
- **Visual form**: at most a tiny non-numeric process mark (three nodes: build · ship · run, with the last two emphasized). Monochrome line.
- **Option range:** (a) static line diagram, (b) CSS render-time entrance (the build → ship → run nodes draw in sequence), (c) JS scroll-triggered or staged reveal. All three are now technically permitted (D-25). But there are **no numbers here**, so the count-up question never arises — and a non-numeric process diagram is really an illustration, governed by Part A's static register.
- **Reduced-motion behavior**: collapses to the finished diagram (if any entrance is used at all).
- **DESIGN RECOMMENDATION — still SKIP, and if built, keep it static.** D-25 does not change this verdict: the constraint here was never the JS posture, it was *the home page is a doorway*. Its spec bans sections below the hero, and a diagram risks "the home page sprouted a graphic." The home figurative beat is already covered by the feather colophon (A.2) or the eagle (A.1). Adding motion to a graphic that shouldn't exist doesn't rescue it. If Arian specifically wants a home visual, ship it static (Part A register) — JS motion on the doorway would actively work against the page's calm. This remains the weakest proposal in the brief; listed to record it as considered-and-likely-killed.

---

## B.4 — Animated-graph priority & feasibility summary

All techniques (static / CSS / JS) are permitted post-D-25; the column below is the **recommended** treatment, a taste call. Every option collapses to a static end-state under `prefers-reduced-motion`.

| Rank | Graph | Placement | Recommended treatment | Recommendation |
|---|---|---|---|---|
| 1 | **B.1 deployment-gap deficit bars** | `/why-ai` opening stats | **JS scroll-triggered draw** (a/b are valid fallbacks) | **Build it; recommend the scroll-triggered draw** — the one genuinely motivated JS motion in the brief: the gap opens as the reader arrives. Static is a defensible restraint fallback. Highest value — clarifies the page's core thesis. |
| 2 | **B.2 quartile-leader multiplier bars** | `/why-ai` leaders section | **Match B.1 exactly** | **Build only as the pair to B.1, with the same motion treatment.** The "ceiling" bookend to B.1's "gap." Never mismatch the two. |
| — | **B.3 home build/ship diagram** | `/` home | **Static (if built at all)** | **Skip** unless Arian asks. Weakest proposal; home is a doorway. JS motion would work against the page's calm. |
| ✓ | **Count-up / charting-library versions** | anywhere | Permitted, not recommended | Now *allowed* (D-25), but a count-up animates a numeral, not an argument, and a charting library is overweight for ≤3 monochrome bars. Taste miss, not a contract breach — see "What NOT to do" #5/#6. |

---

# What NOT to do (binding for both parts)

1. **No AI-purple / iridescent data-viz gradients.** No mesh gradients, no neon, no "AI" color story. Monochrome `currentColor` only. The brand's single accent (`#0071e3`) never appears at rest and never in a graphic.
2. **No dashboard / chart clutter.** This is a marketing essay, not an analytics product. No axes-with-gridlines, no legends, no tooltips, no multi-series charts, no data tables dressed as graphics. One idea per graphic (a gap; a multiple), shown in the sparest possible monochrome form.
3. **No fabricated precision.** Every number is a real, cited figure that already exists in the content (12–18%, 85%, 15%, $300B; 1.7×, 3.6×, 2.7×). No invented data points, no fake decimals, no trend lines through unsourced points, no made-up case-study graphics. Do not bar-chart `$300B` (it is a magnitude, not a proportion — keep it a numeral).
4. **No second illustrative style.** One vocabulary: the engraving/feather register. No flat-vector spot art, no isometric robots, no Corporate Memphis, no soft-gradient "modern" illustration, no 3D, no stock photography (the one gated `/about` portrait is the sole photographic exception, governed by its own spec). A graph and an illustration on the same site must read as the same hand.
5. **No motion-for-show.** Every animation must communicate hierarchy, storytelling, or feedback — never decoration. A bar that grows to reveal a *gap* communicates; a number that ticks up just to be flashy does not. If an animation would add drama but no information, ship it static.
6. **No gratuitous motion — but JS is allowed (changed 2026-06-16, D-25).** JS-driven motion (count-ups, `IntersectionObserver` draws, charting libraries, `requestAnimationFrame`, GSAP/Motion) is **no longer banned** — the zero-JS contract was revoked. The guardrail is now *taste*, not *contract*: every animation must be **motivated** (it serves hierarchy, storytelling, or feedback — like B.1's deficit bar drawing the gap open as the reader arrives), must be **`prefers-reduced-motion`-gated and collapse to the static end-state**, and must not be **gratuitous** (a numeral ticking up just to feel alive animates nothing the reader needs). Anything interactive also owes axe-clean / focus-visible / keyboard access. When in doubt for this restrained brand, ship static — but that is a taste preference now, not a rule.
7. **No Māori surface ornament, ever** — no koru, kowhaiwhai, tā moko, whakairo, taniko. Load-bearing cultural respect, not a style preference.
8. **No predator-eagle cliché** in the engraving — no snarl, no talons-out heraldic pose, no sports-logo aggression. Natural-history-plate dignity only (this is what killed three prior generation passes).
9. **No feather proliferation.** Max one deliberate feather per page beyond the wordmark; feathers are static (no hover, drift, flap, parallax). The moment a page has two, or a feather becomes a watermark, it is wrong.
10. **No reduced-motion blank states.** Every CSS entrance must collapse to the finished graphic under `prefers-reduced-motion`, never to a blank or mid-animation frame.

---

# Top 2–3 priorities (highest leverage, lowest risk)

1. **A.3 — the `/404` feather** (illustration). Lowest risk, ~zero spend, validates the recurring-feather register on the one page with no conversion job. Do this first.
2. **B.1 — the `/why-ai` deployment-gap deficit bars** (graph). Highest-value graphic on the site: it clarifies the page's core thesis (the gap) using only real cited figures, and reads editorial rather than dashboard. **Recommended treatment: a JS scroll-triggered draw** (now permitted post-D-25) so the gap opens as the reader arrives — the one genuinely motivated JS motion in this brief. Static SVG is a defensible restraint fallback. Either way it gates on `prefers-reduced-motion` and stays `aria-hidden` with figures in adjacent text.
3. **A.2 — the `/` feather colophon** (illustration). The interim home figurative beat at ~zero spend; one placement of the existing wordmark mark. (Mutually exclusive with the deferred eagle A.1 on `/`.)

Everything else — B.2 (only as B.1's pair), A.4 (one editorial page, after A.3 validates), the deferred eagle (A.1, only if Arian re-opens it), the gated portrait (A.5) — is a fast-follow or deferred, not a day-one ask.

---

## File path

This brief: `/Users/arianzargaran/Desktop/poukai org/poukai-site/meta/asset-production/illustration-and-motion-brief.md`
