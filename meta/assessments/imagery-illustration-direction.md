# Assessment: Imagery & illustration direction — unstalling the visual program

**Status**: PROPOSAL — Arian approval required before any build, asset commission, or spend.
**Owner**: Arian (founder, sole approver) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**DS version referenced**: `@poukai-inc/ui` per `meta/ds-snapshot/llms-full.txt` (Hero `illustration` slot added 0.15.0; `Portrait`, `Image`, `Figure`, `Logo` all shipping)
**Reads / supersedes-in-direction**: `meta/assessments/ds-capability-vs-usage.md`, `meta/assessments/sales-content-gaps.md`, `meta/proposals/home-illustration-and-title-softening.md`, `meta/proposals/about-illustration-v2.md`, `meta/decisions/2026-05-17-home-illustration-and-density.md` (D-17 deferral), `meta/asset-production/pouakai-engraving-prompt.md`, `meta/asset-production/engagements-writing-graphics-prompt.md`, `meta/proposals/ds-wordmark-feather-flush-left.md`.
**Scope**: Direction-setting only. No code, no DS authoring, no copy. This document recommends; Arian decides.

---

## 0. The one-paragraph read

The imagery program did not stall because the *direction* was wrong. It stalled because the entire program was bolted to **one heroic, hard-to-produce asset** — a vintage-engraving Pouākai eagle — and that single asset has refused to converge across three AI-generation passes (rev-3, rev-4, rev-5 in `pouakai-engraving-prompt.md`), each defeated by the model defaulting to predator-eagle clichés the brand register can't carry (D-17, deferred 2026-05-17). Meanwhile the namesake bird is **already in the brand, already abstracted, already respectful, and already shipping**: the **feather isotype in the Wordmark** (`[feather] POUKAI`, resolved via DS PR #22 → 0.3.1). The knot that stalled everything — "how does the Pouākai inform the visual language without a literal eagle and without Māori motif?" — was quietly cut a year ago by the feather. This document proposes a **visual system, not a piece of art**: a restrained editorial vocabulary built in three layers (typographic OG cards → the feather as a recurring quiet mark → at most one or two real commissioned/photographic anchors), where ~80% is **composable now** from CSS/SVG/type with zero new asset spend and zero Lighthouse risk, and the heavy-production tail (the eagle, founder portrait) is **deferred-but-unblocked** rather than blocking the whole program. The moat is restraint; the failure mode is "the illustration performs." This system is engineered so nothing performs.

---

## 1. The visual system (the proposal in three sentences)

> **pouk.ai's visual language is *typographic-first editorial restraint* in the Anthropic / Stripe Press / Lex register: the page is the artwork, type does the work, and imagery is rare, monochrome-or-near, and earned.** The one recurring figurative element is the **Pouākai feather** — already the Wordmark's isotype — promoted from "logo detail" to a sparingly-reused quiet mark (section divider, OG corner, 404, eventual section accent), rendered in `currentColor` so it costs nothing and inverts for dark mode for free. Everything heavier — a full engraving eagle, editorial photography — is a **single, optional, deferred anchor** reserved for one or two high-value surfaces (a `/writing` essay, `/about`), never a per-page decoration program.

**Why this register and not the alternatives:**

- **vs. stock photography** — disqualified by the brand. Photography reads as "agency," contradicts operator-first, and the sales audit (`sales-content-gaps.md` §5) already bans logo soup and testimonial walls in the same spirit. The *one* photographic exception is the founder portrait on `/about`, gated on its own trigger (`about-illustration-v2.md`).
- **vs. AI-slop gradients / 3D / abstract blobs / flat-vector SaaS spot art** — these are *exactly what pouk.ai sells against*. The brand's entire positioning is "not another AI advisor"; an AI-mesh-gradient hero would be self-refuting. Explicitly banned in `engagements-writing-graphics-prompt.md` §0 and re-banned in section 5 below.
- **vs. a per-page bespoke illustration program (the Every model)** — beautiful, but it is a *production treadmill* the brand stage can't sustain, and the one time we tried (the eagle) it stalled for a month. The Every model only works when illustration is cheap to produce on cadence; ours is not. We borrow Every's *principle* (bespoke imagery reads as authorship) and apply it to the **one feather we already own**, not to a new drawing per page.

**The restraint-AND-striking bar.** Striking, here, is not "more imagery" — it is *the confidence to use almost none*. A single feather hairline under a section heading, or one large monochrome anchor on the one page that earns it, lands harder against a backdrop of disciplined type than a page full of spot art ever could. The strike is the contrast, not the quantity.

---

## 2. Per-surface map — where imagery earns its place

Tied to the two wave-1 audits. "Composable now" = buildable from type/CSS/SVG/existing assets inside the DS, zero new commission. "Needs production" = real asset spend (AI-curated, commissioned, or photographic) gated on Arian.

| Surface | Recommendation | Vehicle (DS primitive) | Earns it because | Build class |
|---|---|---|---|---|
| **`/` home hero** | **Hold the eagle; keep type-only for now.** Optionally add the **feather mark** above the StatusBadge (the colophon move, illustration-proposal Option C) as the *interim* figurative beat. | `Hero` (existing); feather as inline SVG in the `status`-adjacent slot or `Hero illustration` slot at small scale | The home audit (`sales-content-gaps.md` §3) says **do not** add proof/clutter to the doorway — it must stay a doorway. A small feather respects that; a full eagle risks "performing." | Composable now (feather) / Needs production (eagle, deferred) |
| **`/writing/[slug]` per-essay OG** | **Ship the typographic OG template (Asset C).** Highest-leverage image on the whole site. | `BaseLayout` `ogImage` prop; PNG in `public/` | `sales-content-gaps.md` #4 + `writing.md` §6.1 "non-negotiable": the screenshot-able sourced-stat card is the funnel's shareability unit. An essay's CLAIM+STAT card is *proof-of-thinking made shareable*. | Composable now (typographic, no illustration) |
| **`/writing` index OG + `/engagements` OG** | **Ship both typographic OG cards (Assets A, B).** | `BaseLayout` `ogImage` | Per-page OG lifts every social/Slack/iMessage unfurl from the generic `og.png` to an on-brand card. Cheap conversion surface. | Composable now |
| **`/about` founder portrait** | **Keep the parked trigger.** The page already has a `Portrait` band wired (`AboutBand.tsx`, `about.json`). When a trigger fires (`about-illustration-v2.md` §3 — first engagement, prospect feedback, or quarterly review), land a real cinematic portrait. | `Hero bleed="full" illustration={<Portrait>}` (already built) | `sales-content-gaps.md` §3 `/about`: the operator page is where the buyer asks "who am I emailing?" One real portrait is the answer; it is also the page's single sanctioned photographic exception. | Needs production (photo) — but **unblocked**, infra is already in place |
| **Section dividers / accents (any editorial page)** | **Promote the feather to a hairline-companion mark** — a small `currentColor` feather sigil that can sit beside a `Divider` or above a section eyebrow on `/why-ai`, `/principles`, `/engagements`. Deploy *sparingly* (max one per page), as section-rhythm punctuation, not decoration. | inline SVG + `Divider` (DS); or `Image`/`Icon`-register sizing | Pairs with the DS-capability audit's #2 (surface-band rhythm) — the feather gives the scroll a *quiet figurative spine* without a single new color or a commission. | Composable now (feather SVG exists in Wordmark geometry) |
| **`/404`** | **The feather, alone, large-ish, muted.** A lost feather. | inline SVG, `aria-hidden` | A 404 is the one page where a single quiet figurative mark is purely delightful and risk-free — no conversion job to corrupt. | Composable now |
| **`/why-ai` stats moment** | **Type-only. No imagery.** The cited-stat rigor *is* the visual weight. | `StatsSection` (audit #3) | `sales-content-gaps.md` §3: the numbers are the page's strength. An image here dilutes proof. | Text-only stays correct |
| **`/roles`** | **Type-only** (the Lucide role-icon slot is icons-as-affordance, not imagery — out of this doc's scope). | `RoleCard` icon well | Self-identification is carried by copy + the existing icon wells. No editorial image earns a place. | Text-only stays correct |
| **`/principles`** | **Type-only**, optionally the feather divider (above). | — | Trust-loop character page; restraint *is* the message. No sales image here (`sales-content-gaps.md` §5 — no pressure on character pages). | Text-only stays correct |
| **`og.png` fallback** | **Keep.** It is the correct default; per-page cards override it where they exist. | `public/og.png` (exists) | Already shipping, on-contract (R-037). | Done |

**Where an image lifts conversion (the audit tie):** only **two** image moves move the sales needle, and both are composable now — (1) the **per-essay OG card** (`sales-content-gaps.md` #4, the cheapest proof-gate to clear) and (2) **per-page OG cards** for unfurl quality. The founder portrait (#5-adjacent) is the third, gated. Every other surface is correctly text-first; adding imagery there would *cost* the brand, not lift it.

---

## 3. The Pouākai motif question — resolved

This is the knot. Here is the cut.

**The brand already has its Pouākai motif, and it is correct: the feather isotype in the Wordmark.**

The feather is the resolution because it satisfies every constraint that the literal eagle could not reliably satisfy:

1. **It abstracts the namesake without depicting the bird.** A feather *is* the eagle, one step removed — the part for the whole. It carries "Pouākai — a hunter that worked by altitude and timing" (`about.json`) without a single beak, talon, or predatory posture. The eagle-engraving program kept failing precisely because a *whole bird* reanimates the predator clichés (rev-3/4/5 notes); a feather has no posture to get wrong.
2. **It honors the no-Māori-visual-motif constraint by construction.** A single feather in flat `currentColor` line is iconographically *neutral* — it is not koru, not kowhaiwhai, not tā moko, not whakairo, not taniko. There is no surface ornament to slip into. The `about.json` Pouākai paragraph's load-bearing promise — "no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin" — is *kept* by a feather and *at risk* with any rendered eagle (which invites totemic framing, exactly the rev-4 failure mode).
3. **It is already shipping, already approved, already on every page** (Wordmark in `SiteShell`, resolved via DS PR #22). Promoting it from "logo detail" to "recurring quiet mark" is the lowest-risk visual move available — it extends something Arian already approved rather than introducing a new vocabulary.
4. **It renders in `currentColor`** — costs ~0 bytes beyond an inline SVG, inverts for dark mode automatically (DS dark-mode token tier), and never triggers a Lighthouse image-weight concern.

**The ruling, three tiers:**

- **Tier 1 (canonical, now): the feather is the motif.** It is the one recurring figurative element. Use it sparingly — Wordmark (already), an optional home colophon mark, a section-divider companion, the 404, OG-card corners. Max one *deliberate* feather moment per page beyond the Wordmark.
- **Tier 2 (optional, deferred, unblocked): the engraving eagle as a single anchor.** The eagle is **not retired** — it stays as a *possible future single hero/anchor* on one surface (most likely `/` or a flagship essay), to be produced when (a) a generation pass finally converges OR (b) Arian commissions a human engraver. It is demoted from "the imagery program" to "one optional anchor." Crucially: **the feather already covers the namesake job, so the eagle is now a nice-to-have, not a blocker.** This is the structural change that unstalls everything.
- **Tier 3 (banned): the literal eagle as recurring decoration, and any Māori surface ornament — ever.** No eagle per-page program (production treadmill + cliché risk). No koru/kowhaiwhai/tā moko/whakairo/taniko, in any asset, full stop.

**One-vocabulary rule, restated:** the site carries *one* figurative vocabulary. Under this proposal that vocabulary is **the feather** (with the eagle as the same vocabulary's larger-scale expression, since the feather is the eagle's part). This is *consistent* with the prior one-vocabulary lock (`about-illustration-v2.md` §4) — we are not introducing a second vocabulary, we are naming the feather as the vocabulary's everyday form and the eagle as its rare ceremonial form.

---

## 4. Production & performance path

### 4.1 What ships how

| Asset | Register | Format | Where it lives | Build class |
|---|---|---|---|---|
| Feather mark (small) | flat `currentColor` line SVG, derived from the Wordmark isotype geometry | inline SVG (so `currentColor` + reduced-motion are free) | `src/` (inlined per use) | **Composable now** — geometry already exists in `brand/poukai-logo.svg` / Wordmark; an engineer extracts the isotype path. No commission. |
| Per-essay OG template (Asset C) | typographic, CLAIM + sourced STAT | PNG 1200×630, sRGB, flat | `public/og-writing-<slug>.png` | **Composable now** — Claude-Design typographic card per `engagements-writing-graphics-prompt.md` §2C |
| `/writing` index OG (Asset B) | typographic | PNG 1200×630 | `public/og-writing.png` | **Composable now** |
| `/engagements` OG (Asset A) | typographic | PNG 1200×630 | `public/og-engagements.png` | **Composable now** |
| Founder portrait | cinematic editorial photo | AVIF/WebP/JPEG via `Portrait` srcset | `public/about-portrait.*` (placeholder JPG exists) | **Needs production** (photo) — gated, infra wired |
| Engraving eagle (anchor) | vintage engraving, `currentColor` | SVG ≤8KB gzip, transparent | `public/illustrations/pouakai.min.svg` | **Needs production** — deferred, unblocked. Per `pouakai-engraving-prompt.md` when it converges. |

### 4.2 Format & weight budget (respects `technical-requirements.md`)

- **Photography / raster editorial** → `Portrait` (DS) emits `<picture>` with **AVIF > WebP > JPEG** and a 4-width srcset, aspect-locked for zero CLS (R-021). This is the *only* correct vehicle for the founder portrait. (DS `Portrait` spec.)
- **OG share cards** → **PNG 1200×630** is mandated by R-037 (`og:image` must be an existing 1200×630 PNG in `public/`). These are exempt from AVIF/WebP because OG consumers (Slack, Twitter/X, iMessage) want PNG/JPEG; flat PNG at this size compresses small (`og.png` is 66.6KB today — well within budget for a static `public/` asset, not in the critical path).
- **Feather / eagle line art** → **inline SVG in `currentColor`**, SVGO-minified, eagle ≤8KB gzip (engraving prompt §1). Inline (not `<img src>`) so it inherits `--fg`, inverts in dark mode, and carries `aria-hidden="true"` with zero extra requests.
- **General imagery** → R-022 prefers `astro:assets` for repo-sourced images; `public/` is correct for OG cards and favicons (static, no processing).

### 4.3 Lighthouse / zero-JS / CLS — how this ships without breaking the gates

- **Zero-JS contract (R-009/R-078/R-079) is untouched.** Every asset in this system is *static*: inline SVG, `<picture>`, `<img>`. No hydration, no `client:*`, no JS-driven motion. The DS `illustration` slot renders server-side. The only motion any of this could carry is the DS `Hero entrance="stagger"` (illustration = stagger index 4, 600ms via `--dur-slow` + `--easing`), which is **already CSS-only and already gated** by the `:root !important` `prefers-reduced-motion` block (R-030). No new motion is proposed. The feather and eagle are **static** — no hover, no scroll-trigger, no fade.
- **No intersection-triggered reveals.** None of the proposed imagery earns the hydration cost of a scroll-reveal. The zero-JS posture wins; imagery enters statically.
- **LCP < 2.5s (R-014).** The only above-the-fold image risk is a home hero illustration. Mitigation: (a) the feather is a tiny inline SVG, near-free; (b) if the eagle ever lands on `/`, the DS `Hero illustration` column is hidden below 768px (`--hero-illustration-max`, DS spec) so mobile LCP is text, and the SVG ≤8KB inlines without a network round-trip. The founder portrait on `/about` is below the hero fold and uses `Portrait loading="eager" fetchPriority="high"` only if it becomes the LCP element (DS `Portrait` API).
- **CLS < 0.1 (R-014, R-021).** Every vehicle reserves its box before paint: `Portrait` aspect-locks at render; `Image` writes `aspect-ratio` inline; inline SVGs carry intrinsic `viewBox`. No layout shift.
- **HTML-weight gate on `/` (R-015, ≤110% of legacy).** Inlining a small feather SVG is byte-cheap; the eagle, if it ever lands, is ≤8KB gzip and must be measured against R-015 before merge. Flagged as a build-time check, not a blocker for the composable-now tier.
- **Per-essay OG cards** are referenced via `<meta og:image>` only — they are *never fetched by the page itself*, so they have **zero** impact on page weight, LCP, or Lighthouse. Pure upside.

### 4.4 Where assets live (per masterplan)

OG cards and favicons → `public/`. Processed editorial imagery → `src/assets/` via `astro:assets` (R-022). Brand-source working files (the eagle master, portrait raws) → gitignored `/brand/` (R-069). The shipped feather geometry already lives in the DS Wordmark; the site-side inline copy is extracted into a small site SVG component.

---

## 5. The "do NOT" list (imagery that would cheapen the brand)

Honest and non-negotiable. Any asset that hits one of these is worse than no asset.

1. **No AI-slop hero imagery** — no mesh gradients, no iridescent 3D blobs, no "abstract AI neural-network" art, no generative-looking spot illustration. This is the single cliché pouk.ai sells against; using it is self-refuting.
2. **No stock photography** — no laptop-on-desk, no diverse-team-pointing-at-screen, no city-skyline-at-dusk. The only sanctioned photo on the entire site is the founder portrait on `/about`, gated.
3. **No flat-vector SaaS spot illustration** — no isometric robots, no friendly-blob characters, no "person climbing steps with a checkmark," no Corporate Memphis. Off-vocabulary by definition.
4. **No Māori surface ornament, ever** — no koru, kowhaiwhai, tā moko, whakairo, taniko. The Pouākai is a one-line origin reference plus an abstracted feather; the line is never crossed into cultural visual appropriation. This is load-bearing (`about.json`), not stylistic.
5. **No literal eagle as recurring decoration** — the eagle, if it ever ships, is *one anchor on one surface*, never a per-page bird. A bird on every page is both a production treadmill and a predator-cliché minefield (the exact rev-4 failure).
6. **No second illustration vocabulary** — one feather/eagle line register. No mixing engraving with flat-vector, no photo-plus-illustration collage, no introducing a new style "just for `/writing`."
7. **No decorative imagery on conversion-critical or character pages** — `/why-ai` stats stay type-only (the numbers are the visual); `/principles` and `/about` carry no sales imagery (`sales-content-gaps.md` §5). The home doorway stays a doorway.
8. **No icon-as-decoration sprawl** — Lucide glyphs are affordances (role wells, link cues) at 16–24px per DS contract, never scattered as ornament. (Out of this doc's lane but stated for completeness.)
9. **No motion on imagery** — no parallax, no Ken Burns, no scroll-driven illustration reveals, no auto-playing anything. Static. The only motion permitted is the pre-existing DS Hero entrance stagger, already reduced-motion-gated.
10. **No fabricated proof imagery** — no fake screenshots, no invented dashboards, no logo wall, no manufactured "case study" graphics. Categorical-only posture holds in pixels as it does in prose (`sales-content-gaps.md` §5).

---

## 6. What this unstalls, and the recommended sequence

**Why this is the unstall:** the program was 100% blocked on a 0%-converged eagle. By (a) naming the **feather** as the canonical motif (Tier 1, composable now) and (b) demoting the eagle to an optional deferred anchor (Tier 2), the *entire composable-now tier ships independently of the eagle*. The eagle stops being a blocker and becomes a someday-upgrade.

Recommended order (all gated on Arian approval of this direction):

1. **Now, zero spend, highest leverage:** per-essay OG template + `/writing` + `/engagements` OG cards (Assets A/B/C — already prompt-ready in `engagements-writing-graphics-prompt.md`). Lifts conversion (`sales-content-gaps.md` #4) with no illustration risk.
2. **Now, zero spend:** extract the **feather mark** as a site SVG; deploy on `/404` (delight, risk-free) and as the optional home colophon. Validate the "feather as recurring mark" register in production before spreading it.
3. **After feather validates:** feather-as-section-divider on one editorial page (likely `/principles` or `/why-ai`), paired with the DS-capability audit's surface-band rhythm work. One per page, max.
4. **Gated, unblocked:** founder portrait on `/about` when an `about-illustration-v2.md` trigger fires (infra already wired).
5. **Deferred, unblocked, optional:** the engraving eagle as a single anchor — resume only if a generation pass converges or Arian commissions a human engraver. No longer blocks anything.

---

## 7. Open questions for Arian

1. **Feather-as-motif ruling** — do you accept Tier 1 (the feather is the canonical Pouākai motif, the eagle demoted to optional deferred anchor)? This is the central decision; everything else follows from it.
2. **Home colophon feather** — want the small feather mark above the home StatusBadge as the interim figurative beat, or keep `/` strictly type-only until/unless the eagle ever lands?
3. **OG card go-ahead** — approve running Assets A/B/C now (zero illustration risk, conversion upside)? This is the cheapest, highest-leverage move and needs only your "go."
4. **Eagle disposition** — formally demote the eagle to "optional deferred anchor" (recommended), or keep trying to converge it as a near-term hero (the path that stalled)?
5. **Founder portrait** — leave parked on its existing triggers, or has a trigger effectively fired (e.g. first engagement, prospect "who am I emailing" feedback) that re-opens `about-illustration-v2.md` now?

---

## 8. Out of scope

- Authoring composition recipes for any approved surface — those follow on approval, per page, under `meta/compositions/`.
- Authoring DS-side proposals — the DS already ships every primitive this system needs (`Hero illustration`, `Portrait`, `Image`, `Figure`, `Logo`). No DS gap is surfaced.
- The actual OG-card generation prompts — already authored in `meta/asset-production/engagements-writing-graphics-prompt.md`; this doc approves the *direction*, not re-drafts the prompts.
- The eagle generation prompt — preserved as-is in `meta/asset-production/pouakai-engraving-prompt.md`; this doc changes its *priority* (deferred anchor), not its content.
- Founder portrait sourcing, photographer selection, fee — Arian's lane (`about-illustration-v2.md` §5).
- Lucide icon picks for `/roles` — affordance-layer, governed by the page composition, not this imagery doc.
- Copy, final wording, route changes, masterplan deltas.
