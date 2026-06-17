# Spec: Feather-as-motif policy (brand/usage)

**Surfaces affected**: site-wide brand-usage rule — Wordmark (existing), optional per-page feather mark, `/404`, OG-card corners, eventual section-divider companions. Governs *where the figurative Pouākai vocabulary may appear and how often*.
**Status**: PROPOSAL — In review (Arian approval required; this is the central imagery decision — everything downstream follows from it)
**Owner**: Arian (founder, sole brand approver) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Source assessment**: `meta/assessments/imagery-illustration-direction.md` §3 (the Pouākai motif resolved — three tiers), §1 (visual system), §5 (the do-not list).
**Companion / superseded-in-priority**: `meta/specs/pages/home-amendment-illustration-and-density.md` (D-17 eagle deferral — this policy *formalizes* that deferral as a demotion, not a failure), `meta/asset-production/pouakai-engraving-prompt.md` (eagle prompt — preserved; this policy changes its *priority*, not its content), `meta/specs/features/og-cards.md` (feather corner mark), `meta/specs/features/feather-motif-policy.md` references in the `/` and `/why-ai` raise-the-ceiling amendments.
**Masterplan reference**: §2A (brand-mark geometry / Wordmark / isotype live in the DS; site-specific illustration lives in the site; picking an illustration style is site-owned, escalate to DS only if it implies a token). **Standards**: R-079 (zero-JS / CSS-only motion — zero-JS portion struck per D-25), R-031 (decorative SVG `aria-hidden` — binding), R-030 (reduced-motion — binding), R-015 (HTML weight — advisory per D-25).
> Superseded by D-25 (2026-06-16 JS revocation): client JS permitted; Lighthouse/HTML-weight advisory. a11y + reduced-motion remain binding. (R-079's zero-JS clause and R-015's weight gate no longer bind; R-031 aria-hidden and R-030 reduced-motion are retained. The feather staying static remains a brand-restraint choice.)

---

## 1. Purpose

The imagery program stalled for a month because it was bolted to one heroic, hard-to-produce asset — a vintage-engraving Pouākai eagle that never converged across three generation passes (D-17 deferral). Meanwhile the namesake bird is *already in the brand, already abstracted, already respectful, already shipping*: the **feather isotype in the Wordmark** (`[feather] POUKAI`). This policy cuts the knot by naming the **feather as the canonical Pouākai motif** and demoting the eagle to an optional, deferred, *unblocked* single anchor. The structural effect: the whole composable-now visual tier (feather usages, OG cards) ships independently of the eagle, and the eagle stops being a blocker and becomes a someday-upgrade. This spec is the brand-usage contract that every page spec, composition, and OG-card decision defers to for "may a figurative mark appear here, and how often."

## 2. Audience

- **Primary**: `pouk-ai-designer` (composes the feather into recipes within these limits) and `pouk-ai-engineer` (extracts the feather SVG, places it per composition). Arian is the sole brand approver of this policy.
- **Secondary**: every page spec / amendment that touches a figurative element (`/`, `/why-ai`, `/principles`, `/404`, OG cards) — they cite this policy rather than re-deciding feather usage locally.

## 3. Success criteria

- **Behavior**: A visitor moving across the site encounters the feather as a quiet, consistent, recognizable mark — never as decoration that performs, never more than once-deliberately per page beyond the Wordmark. The brand reads as *authored restraint*, the opposite of stock imagery.
- **Signal**: Qualitatively — the site reads "considered" and "finished" without reading "illustrated"; no page feels like it sprouted a generic bird SVG. The feather is felt as part of the brand, not noticed as an asset.
- **Failure mode**: The feather proliferates into decoration (multiple per page, a watermark, an inline glyph sprinkle), or the eagle returns as a per-page program (production treadmill + predator-cliché minefield), or any Māori surface ornament appears (load-bearing cultural line crossed). Any of these makes the brand cheaper, not richer.

## 4. The ruling — three tiers (the policy)

### Tier 1 — Canonical, now: the feather IS the motif
- The feather is the **one recurring figurative element**. It satisfies every constraint the literal eagle could not: it abstracts the namesake without depicting the bird (part-for-whole, no beak/talon/predatory posture to get wrong); it honors the no-Māori-visual-motif constraint *by construction* (a single `currentColor` feather is iconographically neutral — not koru, kowhaiwhai, tā moko, whakairo, or taniko); it already ships in the Wordmark; it renders in `currentColor` at ~0 added bytes and inverts for dark mode for free.
- **Sanctioned feather slots** (each optional, each governed by the max-one rule below): the Wordmark (already, exempt from the per-page count — it is brand chrome, not a deliberate page mark); an optional home colophon mark above the StatusBadge (`/` amendment §4.3, opt-in); a section-divider companion on one editorial page (`/why-ai` or `/principles`); the `/404` mark (large-ish, muted, alone — risk-free delight); OG-card corners (`features/og-cards.md` §4.5).

### Tier 2 — Optional, deferred, unblocked: the eagle as a single anchor
- The eagle is **not retired** — it remains a *possible future single hero/anchor* on **one** surface (most likely `/` or a flagship essay), produced if and when (a) a generation pass converges or (b) Arian commissions a human engraver. It is demoted from "the imagery program" to "one optional anchor." Because the feather already covers the namesake job, the eagle is now a nice-to-have, never a blocker. Its prompt pack (`pouakai-engraving-prompt.md`) is preserved unchanged; only its *priority* drops.

### Tier 3 — Banned, ever
- The **literal eagle as recurring per-page decoration** (treadmill + cliché risk).
- **Any Māori surface ornament** — koru, kowhaiwhai, tā moko, whakairo, taniko — in any asset, full stop. This is load-bearing cultural respect (`about.json`), not a stylistic preference.
- A **second figurative vocabulary** (no flat-vector spot art, no isometric robots, no Corporate Memphis, no AI-mesh gradients, no stock photography except the single gated `/about` founder portrait, which is governed by its own spec — not this one).

### The max-one rule
- **At most one *deliberate* feather moment per page, beyond the Wordmark.** The Wordmark's feather (in the SiteShell) does not count toward the limit; any additional feather (colophon, divider, 404, etc.) is the one allowed deliberate mark. A page may also have zero — the feather is never required.
- The feather is **static**: no hover, no scroll-trigger, no flap, no drift, no parallax. (R-079 / imagery §5 #9.)

## 5. Content / asset requirements

- **Render**: inline SVG in `currentColor`, derived from the existing Wordmark isotype geometry (the engineer extracts the isotype path into a small site SVG; geometry already exists in `brand/poukai-logo.svg` / the DS Wordmark — no commission). SVGO-minified.
- **Accessibility**: decorative feather marks carry `aria-hidden="true"` (R-031); if a feather ever conveys meaning (it should not), it carries a `<title>`.
- **Dark mode**: `currentColor` inverts for free; no separate asset.
- **Weight**: a small inline feather is byte-cheap; weight is tracked against R-015 as **advisory**, not a merge gate (the eagle, if it ever lands, is ≤8KB gzip and is measured against R-015 for awareness — but the eagle is out of this policy's build scope). [R-015 HTML-weight gate converted to advisory per D-25.]
- **The eagle asset, if/when produced**: vintage-engraving register, `currentColor`, SVG ≤8KB gzip, transparent — per `pouakai-engraving-prompt.md`; subject to a separate per-surface spec at that time, not authorized by this policy.

## 6. Acceptance criteria

- [ ] **The feather is the only recurring figurative vocabulary on the site.** No flat-vector spot art, no isometric/character illustration, no AI-mesh gradient, no stock photography (except the separately-gated `/about` portrait), no second illustration style anywhere. Verifier (Arian): site-wide imagery review against the imagery §5 do-not list.
- [ ] **Max one deliberate feather per page beyond the Wordmark.** No page renders two or more deliberate feather marks (the Wordmark is exempt). Verifier: DOM/asset review per page — at most one non-Wordmark feather.
- [ ] **Every deliberate feather is inline `currentColor` SVG, `aria-hidden="true"`, and static (no motion — a brand-restraint choice, and reduced-motion-safe by being static).** Verifier: built-HTML grep — feather SVGs are inline, carry `aria-hidden`, carry no animation. [The former "no JS / no `client:*`/`<script>` (R-079)" zero-JS clause is superseded by D-25 — client JS is permitted; the feather staying static is retained as a brand decision, not a JS gate. R-030 reduced-motion remains binding.]
- [ ] **No literal eagle ships as recurring decoration**, and **no Māori surface ornament ships in any asset**. Verifier (Arian): asset review — zero per-page eagles; zero koru/kowhaiwhai/tā moko/whakairo/taniko.
- [ ] The eagle is recorded as a **demoted optional deferred anchor**, not retired and not a blocker — `pouakai-engraving-prompt.md` preserved; D-17 deferral re-framed as a demotion. Verifier: this policy + the home-illustration amendment cross-reference each other; no spec treats the eagle as blocking.
- [ ] Each page/feature spec that uses a feather **cites this policy** rather than re-deciding usage locally (`/` §4.3, `/404`, `og-cards.md` §4.5, any editorial-divider use). Verifier: cross-reference check.
- [ ] Lighthouse / weight from any feather mark is tracked as **advisory** (R-013/R-015), not a merge gate. Verifier: lighthouse-ci + weight on preview, for situational awareness. [Lighthouse + HTML-weight converted blocking → advisory per D-25; a11y + reduced-motion remain binding.]

## 7. Open questions / dependencies

- **Central brand ruling — Arian's call (BLOCKING everything downstream).** Tier 1 (feather = canonical motif; eagle demoted) is the central decision; the `/` feather colophon, the OG feather corner, the `/404` mark, and any editorial-divider feather all follow from it. Confirm the three-tier ruling and the max-one rule.
- **DS dependency — none for the feather.** The isotype geometry already ships in the Wordmark; the site-side inline copy is an engineer extraction, not a DS change (masterplan §2A — site-specific illustration is site-owned; escalate to DS only if it implies a token, which a `currentColor` path does not).
- **Feather SVG extraction — engineer.** Extract the isotype path into a small site SVG component; SVGO-minify. Prerequisite for any Tier-1 deployment.
- **Per-surface feather placement — designer, within this policy.** Which editorial page gets the divider feather (`/why-ai` vs `/principles`), whether `/` opts in the colophon — composition calls bounded by the max-one rule. imagery §6 recommends validating the feather on `/404` (risk-free) first, then the colophon, then one editorial divider.
- **Eagle disposition — Arian (recorded, non-blocking).** Formally demote (recommended) vs. keep chasing convergence as a near-term hero (the path that stalled). This policy assumes demotion; Arian can override.
- **Founder portrait — out of scope here.** The single gated `/about` photographic exception is governed by `about-illustration-v2.md` / the `/about` spec, not this policy.

## 8. Out of scope

- The `/about` founder portrait (separate gated spec).
- The eagle's per-surface deployment spec (authored only if/when the asset converges — not authorized here).
- The eagle generation prompt content (preserved as-is in `pouakai-engraving-prompt.md`; this policy changes only its priority).
- DS-side Wordmark/isotype changes (DS lane; this policy consumes the shipped isotype geometry).
- Lucide role icons / affordance glyphs (affordance layer, not figurative imagery — governed by page compositions).
- OG-card *content* (governed by `features/og-cards.md`; this policy governs only the optional feather corner mark on them).
- Final asset production and visual composition (asset-production / designer lanes).
