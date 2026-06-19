# Assessment: Creative exploration — raise the ceiling without raising the volume

**Status**: PROPOSAL — Arian approval required before any spec amendment, composition revision, or build.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**DS version assessed**: `@poukai-inc/ui@2.17.0` (`meta/ds-snapshot/llms.txt`); primitive APIs read from `meta/ds-snapshot/llms-full.txt`.
**Reads on**: `meta/assessments/ds-capability-vs-usage.md` (dormant DS power, §2 ranking), `meta/assessments/sales-content-gaps.md` (proof/desire/differentiation gaps + the categorical-only hard constraint).
**Scope**: Analysis + bolder composition directions for the 3 highest-leverage pages. No code. No DS authoring. No final copy. Every `Draft:` line is a visual anchor only.

---

## 0. The brief, restated as a design problem

Arian's read: every live page defaulted to the *quiet* option at every fork — muted links over buttons, no eyebrow, no hero CTA, motion off, a single flat plane. Each choice is individually defensible; **the sum reads drab.** The bar is not "louder." The bar is **restrained AND striking** — the Apple / Linear / Stripe register, where the page is verbally spare and visually *confident*. Confidence, in that register, is produced by **composition, rhythm, and typographic scale**, not by color, imagery, or hype.

So this document treats "striking" as a craft problem with four levers the DS already ships and the site never pulls:

1. **Scale tension** — `Hero size="display"` (the DS default, used nowhere) versus the body. A page that opens at display scale and drops to body is dramatic *because* of the interval. Every page currently opens intimate or near-intimate, so there is no interval.
2. **Surface-band rhythm** — `--surface-section` recessed bands give a scroll a *spine*. The site uses zero. One recessed band per page is the tasteful floor and it is the single biggest "this page has depth" lever available with no new token and no color.
3. **The thesis beat** — `Statement` (italic-serif, once per page, 28–44px, `--fs-statement`). A page that states its conviction once, at a scale between `h2` and the hero, reads as *authored*. Idle on every page.
4. **Earned entrance** — `Hero entrance="stagger"` is CSS-only, zero-JS, reduced-motion-gated. It ships on `/` and nowhere else. Used *where it earns* (the doorway, the diagnosis open), it is the difference between "rendered" and "arrives."

**The guardrail that makes this safe**: the `sales-content-gaps.md` categorical-only posture is absolute — no fabricated metrics, no invented testimonials, no borrowed logos. That means the credibility primitives `Quote` / `TestimonialBlock` are **GATED** (real permissioned quotes don't exist yet). Every direction below therefore raises ambition through *the brand's own voice at higher craft*, not through proof it doesn't have. That constraint is a gift: it forces the strike to come from composition, which is exactly the register the brief asks for.

**How to read each direction**: each names the section order, the DS primitive per beat, the motion choreography (with `prefers-reduced-motion` behavior), the restraint rule it still obeys, and an explicit **DELTA vs. the current safe composition**. One **signature moment** per page is called out — the single beat that makes the page memorable.

---

## 1. `/` — Home (the doorway)

### Current safe composition (the baseline)
`meta/compositions/pages/home.md` (Approved). `<Hero size="intimate">` (DS default `display` deliberately rejected), `entrance="stagger"` on, status badge, two `size="compact"` Buttons (mailto + booking), one flat `--bg` plane, footer. No body sections (spec §10 bans them — correctly). The page is ~610px tall at 1440×900; the footer sits at the fold. It reads *finished and quiet* — but the intimate hero gives the brand no front-door *presence*. The doorway is well-set; it does not announce.

**Hard constraint inherited**: spec §10 forbids any section below the Hero on `/`. So the strike must happen **inside the Hero block**, not by adding sections. This is the tightest canvas of the three pages, and the most important to get right.

### Direction H-A — "Display doorway" (RECOMMENDED)
The single highest-leverage, lowest-risk move on the whole site: **flip the Hero from `size="intimate"` to `size="display"`.** Nothing else about the page changes structurally.

- **Section order**: unchanged. SiteShell → Hero → footer. No new sections (honors spec §10).
- **Primitives per beat**:
  - `<Hero size="display" entrance="stagger">` — title at `--fs-tagline` (36–68px) instead of `--fs-tagline-intimate` (32–52px). The 8-word tagline "Technical consulting for teams shipping with *AI*." lands at display scale with the `<em>AI</em>` Instrument-Serif accent now genuinely *large* — the typographic moment the intimate scale flattens.
  - Status `<StatusBadge status="available">` unchanged (auto-pulse, one per page).
  - CTA pair: step the primary `<Button>` back up from `size="compact"` to `size="md"` so it stays proportional to the now-larger title; keep booking secondary at `compact` or `md` to match. (This reverses the `/`-composition's 2026-05-17 step-down, which was made *because* the title had shrunk — at display scale the original rationale inverts.)
- **Motion**: `entrance="stagger"` already on — status (0ms) / title (150ms, +12px rise) / lede (300ms) / CTA (450ms), ~1.05s, CSS keyframes only. At display scale the title's rise reads with more authority because it travels a larger glyph. **`prefers-reduced-motion: reduce`**: disabled via the DS `:root !important` block; no exception.
- **Why still on-brand**: `size="display"` is *the DS default for marketing pages* — choosing it is choosing the canonical register, not an escalation. Verbally nothing changes (same 8 words). Restraint rule honored: **one Hero, one h1, one StatusBadge, zero added sections** (spec §10). The page stays a doorway; the door is just rendered at full height.
- **DELTA vs. safe**: today's intimate hero treats the homepage like a *principle list* (the low-density register `intimate` was designed for). Display scale treats it like what it is — the brand's front door. The interval between a 60px serif tagline and the 18px lede *is* the confidence the brief asks for. Zero new primitives; this is a one-prop change plus a proportional CTA-size revert.

### Direction H-B — "Display doorway + the bird earns its slot"
H-A, plus finally consume the long-deferred `Hero illustration` slot (shipped in DS 0.15.0; the `/` composition §6.2 reserved it but Arian deferred the asset).

- **Section order**: unchanged.
- **Primitives per beat**: `<Hero size="display" entrance="stagger" illustration={<PouakaiEngraving aria-hidden="true" />}>`. The DS slot switches the Hero to two-column at `--bp-md` (text left at `--hero-max`, illustration right at `--hero-illustration-max` 25rem), collapses to stacked below 768px. At `entrance="stagger"` the illustration is the **fifth stagger slot** (index 4, 600ms) — it arrives last, after the words, which is the correct hierarchy: read the brand, *then* meet the bird.
- **Motion**: same stagger; illustration fades/rises in as slot 5. Static thereafter (no flap, no drift). **Reduced-motion**: the whole stagger collapses via the DS block; the bird simply appears.
- **Why still on-brand**: the engraving register (monochrome `--fg`, single chosen mark) is the opposite of stock imagery — it is *authored restraint*. One mark, one page. Honors the constraint "striking via composition, not imagery noise."
- **DELTA vs. safe**: a two-column display hero with a single engraving is the most *finished* the doorway can read without adding a word or a section. **Gated on the asset** Arian deferred — so this is H-A's optional successor, not a substitute. Recommend H-A now, H-B when the asset lands.

### Signature moment — `/`
**The first 60px of serif.** A first-time visitor arriving from a LinkedIn post should land on a tagline rendered at full display scale with the italic `AI` as a genuine typographic event — then watch the lede and CTA stagger in beneath it. That single interval (display title → body lede) is the page's whole strike, and it costs one prop. Memorable because it is *spare and large at once* — the exact restrained-and-striking target.

### Home: pure-site vs. DS-gated
- **H-A**: 100% pure-site. `size="display"` and `entrance="stagger"` both ship in DS today; the CTA-size revert is a prop change. **No DS gap. No new spec — but it reverses two ratified clauses in `home.md` (§2 size, §2 CTA scale), so it needs an Arian-approved composition revision.**
- **H-B**: pure-site composition; **gated on the Pouākai asset** (production owned by Arian), not on the DS. The `illustration` slot already shipped.

---

## 2. `/why-ai` — the diagnosis (the strongest persuasion page, flattest execution)

### Current safe composition (the baseline)
`src/pages/why-ai.astro`. Plain `<Hero title lede>` (no `size`, so DS default `display` — but no `entrance`, no eyebrow, no status). Then a **hand-rolled** single flat column: `<div class="stats-row">` wrappers around bare `<Stat>` atoms (the DS ships `StatsSection` for exactly this), five `<FailureMode>`s, a leaders list, a quartile `<Stat>` row, discovery `<blockquote>`, dual end-CTA, references, a CSS-only sticky TOC. It is the most *argued* page on the site and visually the **flattest** — one `--bg` plane from top to bottom, every "by the numbers" moment hand-built, no thesis beat, no surface rhythm. The page proves the category brilliantly and reads like a well-set essay with no editorial spine.

### Direction W-A — "The diagnosis lands" (RECOMMENDED)
Give the argument a scroll spine with **one recessed stats band** and **one thesis Statement**, and adopt the DS organisms the page hand-rolls. This is `ds-capability-vs-usage.md` items #2, #3, #4 composed together on the page they were ranked for.

- **Section order** (render order):
  1. `<Hero entrance="stagger">` — keep DS-default `display` size (a diagnosis *should* open loud); add the staggered entrance so the page **arrives**. Status/eyebrow still omitted (this is not the availability surface).
  2. Opening argument prose + inline cited stats (unchanged — the footnote-superscript citation craft is already excellent).
  3. **`<StatsSection fill dividers>`** replacing the hand-rolled `.stats-row`. `fill` paints the `--surface-section` recessed band; `dividers` adds hairlines between the 3 headline stats. This is the page's **first depth event** — the argument's "by the numbers" moment recessed into the page like a quoted exhibit. (Refactor: same `<Stat>` content, correct landmark + `aria-labelledby`, less bespoke CSS — `ds-capability` #3.)
  4. `<FailureModeList heading=… >` wrapping the five `<FailureMode>`s (the DS organism; gives a named region landmark, currently hand-rolled).
  5. **`<Statement>`** — the page's thesis beat, placed at the pivot from "here is what's broken" to "here is what the leaders do." `Draft:` *"The diagnosis comes before the build. That is the order pouk.ai works in."* (this conviction line already exists in the page's tail prose — promote it to a `Statement` at `--fs-statement`, italic-serif, once per page). This is the editorial spine the page lacks.
  6. "What the leaders do differently" + quartile `<Stat>` row (the desire engine — keep, optionally also a `StatsSection` *without* `fill` to avoid two adjacent bands).
  7. Where-pouk-works + discovery `<blockquote>` + dual end-CTA + references + TOC (all unchanged).
- **Layout / surface rhythm**: exactly **one** `fill` band (the headline `StatsSection`, beat 3). The quartile stats stay on `--bg` (transparent `StatsSection`) so the two stat moments don't both recess — honors "never stack `--surface-section` adjacent, max 5 bands" by using *one*. Section gaps stay on the published `--space-N` scale.
- **Motion**: `Hero entrance="stagger"` on initial render (CSS-only, ~1.05s). **No scroll-triggered reveals** on the stats or failure modes — an `IntersectionObserver` reveal would (a) cost JS, breaking the zero-JS contract, and (b) animate the argument at a pace that competes with the reader. The depth comes from the *static recessed band*, not from motion. **`prefers-reduced-motion`**: the hero stagger collapses via the DS `:root !important` block; nothing else animates.
- **Why still on-brand**: every move is a DS organism used as documented (`StatsSection` "owns the by-the-numbers editorial moment on landing pages"; `Statement` "use sparingly, once per page"). The restraint rules honored: **one Statement, one fill band, zero fabricated proof** (the stats are the existing *cited third-party* figures — categorical-only intact). No new copy beyond promoting an existing conviction sentence to a Statement.
- **DELTA vs. safe**: today the page is one flat plane of hand-rolled rows. W-A gives it a *recessed exhibit* (the stats band), a *stated conviction* (the Statement), and an *arrival* (the stagger) — three depth events on the page that most deserves them, all with primitives the page should already be using. The argument stops reading as an essay and starts reading as a **case**.

### Direction W-B — "Two-exhibit diagnosis" (bolder, watch the band budget)
W-A, but make the **quartile leaders stats** a *second* `StatsSection fill` band so the page has two recessed exhibits: "here's the gap" (failure stats) and "here's the ceiling" (leader stats) — bookending the failure modes.

- **Section order**: as W-A, but beat 6's quartile stats also get `fill`, with the five failure modes (on `--bg`) sandwiched between the two recessed bands.
- **Why still on-brand**: still ≤5 bands; the two `fill` bands are *not adjacent* (failure modes sit between them on `--bg`) — honors the "never stack adjacent" rule precisely. Two bands is the documented editorial pattern, not an escalation.
- **DELTA vs. W-A**: the page reads as a *framed argument* — problem-exhibit, evidence, ceiling-exhibit. More striking; slightly higher risk of feeling "designed." **Recommend W-A as the floor and W-B only if Arian wants the page to feel like the site's centerpiece.** The two-band rhythm is the closest the site gets to the Stripe "every scroll-stop is a considered surface" feel without a single new token.

### Signature moment — `/why-ai`
**The Statement at the pivot.** After the reader has absorbed the failure modes and before the leaders section, the page stops and says, once, in large italic serif: the order is diagnosis-then-build. One sentence, no attribution, at `--fs-statement`. It is the moment the page stops *reporting* and starts *asserting* — the brand's conviction made typographic. Memorable because it is the one place the page raises its voice, and it does so in a whisper at scale.

### Why-ai: pure-site vs. DS-gated
- **W-A and W-B**: 100% pure-site. `StatsSection`, `FailureModeList`, `Statement`, `Hero entrance="stagger"` all ship in DS today. No DS gap.
- **Spec touch**: promoting an existing conviction sentence to a `Statement` is a *placement* change, not new copy — but it should be ratified in the PM spec / content draft so the sentence's canonical home is recorded. **Needs a `why-ai` composition doc** (none exists today — the page was built spec-direct, like `/` was) plus Arian sign-off on the Statement copy.

---

## 3. `/engagements` — the ladder (already the most composed; raise the ceiling, keep the climb)

### Current safe composition (the baseline)
`meta/compositions/pages/engagements.md` (Approved) + `src/pages/engagements.astro`. Plain `<Hero title lede>` (DS-default `display`, **no `entrance`** — composition §7 Q4 left it static, recommended off). Typographic ladder-index. Four `<FeatureCard variant="bordered">` rungs in a single column with an escalating `--space-12`→`--space-16` band gap, escalating icons, descriptive stage-marker eyebrows. `<Link variant="default">` per rung (not Button — deliberate). Dual end-CTA. This is the **most thoughtfully composed page on the site** — the climb mechanic is genuinely good. Its restraint is correct. What it lacks is a *ceiling* — a moment that makes the deepening relationship *felt* rather than only legible. It is excellent and slightly inert.

### Direction E-A — "The climb arrives" (RECOMMENDED, smallest delta)
Two surgical additions that respect every existing composition decision: **stagger the hero** and **close with a thesis Statement** that names the relationship the ladder describes.

- **Section order**: SiteShell → Hero → ladder index → 4 rungs → **[new] Statement** → end CTA → footer. One inserted beat.
- **Primitives per beat**:
  - `<Hero size="display" entrance="stagger">` — reverse §7 Q4's static recommendation. Rationale shift: the brief's whole point is that "motion off" defaulted to drab. The stagger here is not a "doorway flourish" (the §7 Q4 objection) — at display scale on an evaluation page it reads as the page *composing itself*, which suits a page about a relationship that builds in stages. Low risk: CSS-only, reduced-motion-gated.
  - Rungs unchanged (the climb composition is correct — do not touch the single-column stack, the gap escalation, the icons, the `<Link>` CTAs).
  - **`<Statement>`** between the Retainer rung and the end CTA. `Draft:` *"Four shapes of one relationship — it starts small, and it deepens."* This restates the load-bearing "not four products on a shelf" thesis at editorial scale, *after* the reader has climbed all four rungs — so the abstraction lands as a felt conclusion, not a hero promise. Sits on `--bg` (no band) with the page's existing largest gap above it.
- **Layout / surface rhythm**: unchanged from the Approved composition. **No `--surface-section` band on this page** — the Approved composition deliberately reserves bands to avoid the "comparison table" read (engagements.md §3). E-A honors that: the Statement is *typographic* depth, not *surface* depth. This is the one page where the band lever is correctly left holstered.
- **Motion**: `Hero entrance="stagger"` on initial render. No scroll reveals on the rungs (engagements.md §4 already locks this out, correctly — a reveal would compete with the reader's climb pace). **`prefers-reduced-motion`**: hero stagger collapses via the DS block; the Statement is static.
- **Why still on-brand**: the Statement is "once per page, used sparingly" (DS rule). The climb mechanic — the page's whole identity — is untouched. Restraint rules honored: **single column not a grid, no figures/currency, link-not-button per rung, one Statement, no band** (preserving the no-comparison-table discipline). The stagger is the only behavioral change and it is zero-JS.
- **DELTA vs. safe**: today the ladder is legible but ends on a quiet email line — the relationship is *described* and then the page just stops. E-A gives the climb a **summit**: a stated conviction at the top of the ascent, then the catch-all CTA. The page now *concludes* instead of trailing off.

### Direction E-B — "The climb arrives + a stated ceiling stat" (bolder)
E-A, plus a single `StatsSection` (transparent, **no `fill`** to preserve the no-band discipline) is **NOT recommended** — flagged here only to be killed explicitly: the page is categorical-only with *no figures anywhere* (engagements.md §3, spec §7(a), schema-enforced). Any stat moment would break the page's defining constraint. **E-B is rejected. Do not build.** The ceiling on this page must be *verbal* (the Statement), never numeric. Recorded so the option is on the record as considered-and-killed, per the categorical-only posture.

### Signature moment — `/engagements`
**The summit Statement.** After climbing Discovery → Pilot → Build → Retainer through four escalating cards, the reader hits one italic-serif line at `--fs-statement` that names the whole climb as one deepening relationship. It is the payoff the escalation has been building toward — the "felt ceiling" the `sales-content-gaps.md` audit says the page is missing, delivered without a single number or a sales push. Memorable because the layout has *taught* the reader the climb, and the Statement *names* what they just felt.

### Engagements: pure-site vs. DS-gated
- **E-A**: 100% pure-site. `entrance="stagger"` and `Statement` ship today. **Reverses §7 Q4 (hero static) and inserts one beat** — needs an Arian-approved composition revision + Statement copy sign-off.
- **E-B**: rejected (categorical-only). No build.

---

## 4. Cross-page summary

| Page | Recommended direction | Signature moment | Pure-site or gated | Reverses a ratified decision? |
|---|---|---|---|---|
| `/` | **H-A — Display doorway** (`size="display"` + proportional CTA) | First 60px of serif: the tagline at full display scale, staggering in | Pure-site | Yes — `home.md` §2 size + CTA scale |
| `/why-ai` | **W-A — The diagnosis lands** (`StatsSection fill` band + `Statement` pivot + hero stagger + DS-organism refactor) | The Statement at the pivot: "diagnosis before build," once, at `--fs-statement` | Pure-site | No (page has no composition doc yet — needs one) |
| `/engagements` | **E-A — The climb arrives** (hero stagger + summit `Statement`) | The summit Statement: the climb named as one deepening relationship | Pure-site | Yes — `engagements.md` §7 Q4 (hero static) |

### The through-line
All three recommendations strike through the **same three levers**: display-scale tension, the `Statement` thesis beat, and earned `entrance="stagger"`. Only `/why-ai` adds the fourth (surface-band rhythm) because it is the one page where a recessed exhibit *clarifies the argument* rather than decorating it. `/` can't take a band (spec §10 bans sections); `/engagements` shouldn't (it would invite the comparison-table read). That discipline — using each lever only where it earns — is itself the restraint guardrail the brief demands.

### What is deliberately NOT proposed (kept explicit)
- **No `Quote` / `TestimonialBlock` anywhere.** GATED on real permissioned quotes (`sales-content-gaps.md` #5, hard categorical-only constraint). The highest-impact credibility lever stays parked until real evidence exists. Composing against placeholder quotes would be the exact off-brand move the audit forbids.
- **No color, no stock imagery, no hype copy, no new tokens.** Every strike is scale, rhythm, surface-tier, or motion the DS already ships.
- **No new routes, no sections on `/`, no figures on `/engagements`.** Each would break a standing spec/brand rule.
- **No scroll-triggered reveals.** They cost JS (breaks zero-JS) and compete with the reader. All motion is CSS-only `entrance` on initial render, reduced-motion-gated.

### DS gaps surfaced
**None.** Every primitive named — `Hero size="display"`, `Hero entrance="stagger"`, `Hero illustration`, `StatsSection`, `FailureModeList`, `Statement` — ships in `@poukai-inc/ui@2.17.0` today. No DS proposal is needed for any recommended direction. (The one DS-adjacent dependency, the Pouākai asset for H-B, is an *asset-production* gate owned by Arian, not a DS-API gap.)

### If approved — next artefacts (not built here)
1. **`/` composition revision** — H-A: `size="display"` + proportional CTA revert. Reverses `home.md` §2 deltas; needs Arian sign-off on reversing the 2026-05-17 intimate decision.
2. **`/why-ai` composition (new)** — W-A: author the missing composition doc with the `StatsSection`/`FailureModeList`/`Statement` recipe; route the Statement copy to content/PM for the "diagnosis before build" line's canonical home.
3. **`/engagements` composition revision** — E-A: reverse §7 Q4 (hero stagger on), insert the summit `Statement` beat; Statement copy sign-off.
4. **(Deferred) `/` H-B** — when the Pouākai engraving asset lands, consume the `Hero illustration` slot.

---

## 5. Open questions for Arian

1. **`/` — reverse intimate?** H-A reverses the 2026-05-17 decision to run `<Hero size="intimate">`. That decision was made to fit the footer at the fold; display scale will push the footer ~80px lower. Is "footer at the fold" still a hard target, or does front-door *presence* win? (Designer recommendation: presence wins — `display` is the DS default and the single highest-leverage strike on the site.)
2. **`/why-ai` — one band or two?** W-A (one recessed stats band) is the floor; W-B (two non-adjacent bands framing the failure modes) is the centerpiece read. Which ambition level? (Recommendation: ship W-A, hold W-B as a fast follow if the page should feel like the site's anchor.)
3. **`/engagements` — stagger the hero?** This reverses §7 Q4's static recommendation. The original objection ("doorway flourish on an evaluation page") is reasonable; the brief's counter is "motion-off defaulted to drab." (Recommendation: stagger on — it reads as the page composing itself, fitting a staged relationship. Easy to revert.)
4. **Statement copy** — all three Statements above are `Draft:` placeholders promoting existing conviction lines. Final wording is yours / content's. Confirm the lines or supply replacements before any of these reach `Approved`.
5. **Scope/sequence** — this is a PROPOSAL. Confirm which directions to convert into composition revisions, and in what order. Nothing builds until you approve and set priority.

## 6. Out of scope
- Final copy (Statements are visual anchors only).
- The other pages (`/roles`, `/principles`, `/about`, `/onboarding`, `/writing`) — the same levers (display scale, Statement, band rhythm, Byline/Quote when proof lands) apply, but this pass covers the three highest-leverage surfaces only.
- DS-side authoring (none needed).
- The Pouākai asset production (Arian's lane).
- Any GATED proof move (`Quote`, `/work`, real metrics) — parked per `sales-content-gaps.md` §4.
