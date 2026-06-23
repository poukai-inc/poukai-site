# Home — Creative Direction: Raise the Ceiling

**Type**: Direction / proposal (Web/Creative Director → Arian for approval)
**Author**: pouk-ai-director
**Date**: 2026-06-19
**Status**: APPROVED by Arian 2026-06-19 — all 5 open questions resolved (see §12). Direction is now actionable; PM to re-spec. Not a spec itself — no acceptance criteria, no final copy.

> **AMENDMENT A3 (2026-06-19, APPROVED — Arian signed off on §24 = option (a), 2026-06-20): "Give the page a real visual anchor."** Arian chose **§24 option (a) — the real artifact exhibit** as the page's visual anchor; §§25–28 are therefore live. **One OPEN dependency carried forward:** the artifact's real source material is not yet identified — content must source genuine, publishable fragment candidates and Arian must confirm one before the artifact beat is built (binding anti-fabrication condition, §24/§30: no fabricated artifact ships; if no real fragment can be published, the beat falls back to a non-artifact treatment rather than faking one). A design-taste audit of the LIVE 5-beat page (the one A2 specced) found it *tasteful but flat / under-designed*; Arian agrees with all findings. The root cause is structural, not cosmetic: **the page is one medium — type on near-white — roughly six times over, with no real visual object below the Hero except the deficit bar. The "soft middle," "quiet close," and "table reads like a doc" are all symptoms of one missing thing: the page has no real figurative/visual anchor.** A3 (§§23–30 below) resolves the structural call and directs the fixes. **The one decision needing Arian's sign-off is §24 (the visual anchor — recommend a real artifact exhibit); §§25–28 follow on his nod.** Where A3 conflicts with A2 or the original body, A3 governs. A3 does **not** reverse the Method drop, the closed eagle, the two-band rhythm, or the cited-metric mandate — it adds a visual anchor and recasts the existing beats to carry real design weight. **Begin reading at §23.**

> **AMENDMENT A2 (2026-06-19, FINAL — Arian signed off WITH OVERRIDES): "Resolve the glyph clash, end the flatness."** After the 6-beat page shipped, Arian gave two critiques of the live build: (1) the Hero's "The Signal" glyph literally pre-announces the same five-stage pipeline (OBSERVE→MODEL→PLAN→ACT→SHIP) that the "How we work" section explains two beats later — conceptual redundancy; (2) the page reads plain — almost all type on `--bg` with one glyph, no variety of section or media types. **Amendment A2 (§§13–21 below) is the revised, APPROVED direction. Where A2 conflicts with the original body of this doc, A2 governs.** Arian reviewed the A2 proposal and **overrode its two core moves** — see §12.A2 (the LOCKED decisions) and the rewritten §§13–21. The net result: **the page drops from six beats to five.** The "How we work" / Method section is **removed**; the "The Signal" pipeline glyph **stays in the Hero, unchanged**, and is the page's sole pipeline statement; the eagle stays closed (D-17); the Hero carries **no feather anchor** (removed earlier at Arian's request); the page gains **two recessed bands** (Why us + Convert) and a **single cited deficit metric** at the head of the Why-us exhibit. A2 supersedes: §3 (the 6-beat schema → now 5), §4 Beat 3 (How we work — deleted), §4 Beat 1's feather/continuity notes, §6's "glyph paid off by the method," and the §4/§6 one-band assumption. The thesis (§0), the honesty posture, the anti-slop floor, the Statement, the Hero glyph keep, and the motion/a11y grammar all carry forward unchanged.
**Route**: `/`
**Reads on**: current build (`src/pages/index.astro` + `src/components/Home*.tsx`, `src/content/home.json`), `meta/compositions/pages/home.md` (destination revision), `meta/specs/pages/home*.md`, `meta/compositions/components/feather-mark.md`, D-25 (JS revocation), and the `@poukai-inc/ui@2.17.0` constitution (`dist/llms-full.txt`).
**Downstream**: this hands the PM a directional starting point to re-spec, the designer the feeling/bar, content the voice/emotional target. It does not write their artifacts.

---

## 0. The one-line thesis

**The homepage should feel like reading a senior engineer's commit message, not a startup's pitch deck.** Spare, exact, and load-bearing — every line earns its place, and the page proves it ships by *showing the system*, not by claiming outcomes.

What a visitor should leave feeling: *"This person clearly ships. I want them on my hardest problem."* — not *"nice site."*

---

## 1. Honest read of the page as it stands

The current build is the "destination" revision: Hero (`size="display"`, `entrance="stagger"`, plus the new **"The Signal"** pipeline illustration) → Statement → "Why pouk.ai, specifically" prose → ClosingCta band → footer. It is genuinely tasteful. It clears the "another Astro starter" bar. But it does **not** clear the ceiling, and here is where it is flat:

| Section | What it is | Honest verdict |
|---|---|---|
| **Hero** | Display tagline, italic `AI`, status badge, dual CTA, "The Signal" SVG glyph | **The strongest thing on the site.** The first 60px of serif + the observe→ship glyph is a real signature moment. Keep, sharpen, do not touch the copy. |
| **Statement** | One italic-serif conviction line on bare canvas | **Earns its place.** This is the authored voice. The one raised-voice beat. Keep. |
| **Differentiation** ("Why pouk.ai, specifically") | ~44-word prose paragraph + inline `/why-ai` link | **The flat one.** It *tells* you the hard part is integration and keeping it running — then asks you to click away to see the argument. It asserts differentiation and shows none. This is the page's weakest beat and the site's weakest axis (PROOF). |
| **ClosingCta** | Recessed band, dual CTA | **Correct, doing its job.** Keep. |

**The core problem in one sentence:** the page is a confident *voice* with no *evidence*. It says "we ship and keep it running" three different ways (lede, Statement, Differentiation) and never once demonstrates it. For an audience of engineering leaders, *assertion without artifact reads as marketing* — the exact thing the brand claims to be the opposite of. The site's own composition notes flag this (`sales-content-gaps §1`: PROOF/DIFFERENTIATION is the weakest gap). The prior IA couldn't fix it because it was operating under the now-revoked doorway thesis and zero-JS contract. **Both constraints are gone (D-25). The ceiling moved; the page didn't.**

The second, smaller miss: **the page is motionless below the Hero.** D-25 permits scroll motion with reduced-motion honored. Right now the display Hero staggers in beautifully and then the rest of the page is inert. That's a missed opportunity for *quiet* continuity — not animation for its own sake, but the same restraint extended downward.

---

## 2. The strategic move

**Replace the one flat "tell" section with a sequence that *shows the work* — then keep everything else.** Concretely: keep the present → assert spine, but between "assert" and "convert," give the engineering-leader visitor two pieces of evidence they can't get from prose:

1. **How pouk.ai works** — the operating method, made concrete (the observe→ship pipeline from the Hero glyph, expanded into named stages). This converts the signature *illustration* into a structural *argument*. The glyph stops being decoration and becomes the page's spine.
2. **What pouk.ai actually does** — the three disciplines (builds / automations / advisory) as honest, scannable substance, not a feature-card grid of adjectives.

The differentiation argument (DIY vs agency vs in-house) stays — but it moves from a dead paragraph into a posture that can carry the honest trade-off, and still routes the deep version to `/why-ai`.

**The narrative arc becomes: ANNOUNCE → ASSERT → HOW WE WORK → WHAT WE DO → WHY US → CONVERT.** Six beats, still spare, each earning its place. The page gets *more substantial* without getting *more salesy* — because every added beat is a system or a fact, never a promise.

This is the difference between a doorway with a nice tagline and a **front room that proves competence before it asks for anything**.

---

## 3. Content Hierarchy schema (the spine)

```
/  (Home)
│
├─ ANNOUNCE ─────────── who/what/available  [primary anchor: the tagline]
│     ├─ status: availability (StatusBadge, the one on the page)
│     ├─ h1: "Technical consulting for teams shipping with AI."
│     ├─ lede: positioning → problem → hand-off to /why-ai
│     ├─ action: mailto (primary) · booking (secondary)
│     └─ signal: "The Signal" pipeline glyph  ← becomes load-bearing
│
├─ ASSERT ───────────── the one conviction  [editorial scale, no heading]
│     └─ statement: "Most teams can build now. Few can ship it and keep it running."
│
├─ HOW WE WORK ───────── the operating method  [h2 #1 — the new proof]
│     └─ five stages: observe → model → plan → act → ship
│        (the Hero glyph, named and explained — system as argument)
│
├─ WHAT WE DO ────────── the three disciplines  [h2 #2 — honest substance]
│     ├─ custom AI builds
│     ├─ automations
│     └─ advisory engagements
│
├─ WHY US ────────────── the honest trade-off  [h2 #3 — differentiation, earned]
│     └─ DIY / agency / in-house → "when each is right, when we are"
│        → routes the full comparison to /why-ai
│
└─ CONVERT ───────────── the exit  [h2 #4 — the page's ONE band]
      └─ availability restate · mailto (primary) · booking (secondary)
```

**Hierarchy discipline:** one `<h1>` (Hero). The Statement emits no heading (DS rule). Four `<h2>`s, all at one level, no skips (R-026). Still exactly **one** `--surface-section` band on the page — and I am moving where it lives (see §5). Still exactly **one** availability `StatusBadge` (Hero). Still **one** `Statement`.

---

## 4. Final section list

Order = render order. Status is relative to the current build.

### 1. Hero — ANNOUNCE  · **KEEP (sharpen)**
- **Job**: Answer "what is this, is it alive, can I reach them" in the first screen. The credential is the restraint and the typography.
- **Narrative beat**: Announce.
- **Why**: It's the strongest asset on the site. The 60px italic serif + "The Signal" glyph is the signature. **Do not touch the copy or the glyph.** The only sharpening: make the glyph's five stages (observe→model→plan→act→ship) *visually rhyme* with the new HOW WE WORK section below, so the eye recognizes the spine when it arrives there. This is a designer-level continuity note, not a Hero change.
- **DS**: `Hero` (`size="display"`, `entrance="stagger"`), `StatusBadge status="available"`, two `Button`s (`asChild`, `size="md"`; primary mailto + secondary booking), inline `<a>` lede hand-off. Illustration slot carries the site-side "The Signal" SVG (`aria-hidden`). All shipping today. **No DS gap.**

### 2. Statement — ASSERT  · **KEEP (unchanged)**
- **Job**: The one thing the brand most wants believed, said once, at editorial scale.
- **Narrative beat**: Assert.
- **Why**: This is the authored voice; removing it would make the page a list. It is the hinge between "here we are" and "here's the proof."
- **DS**: `Statement` (`hairline={false}`, `as="p"`). The only `Statement` on the page. Emits no heading. Shipping today. **No DS gap.**

### 3. How we work — THE METHOD  · **NEW** (replaces the flat differentiation tell, part 1)
- **Job**: Show the operating system. Make "we ship and keep it running" *structural*, not rhetorical. An engineering leader recognizes a real method when they see its stages named honestly.
- **Narrative beat**: Proof-by-process. This is where the page stops talking and starts demonstrating.
- **Why new**: The Hero already draws this pipeline. Right now it's decoration the eye slides past. Named and explained as five stages, it becomes the page's intellectual spine — and the single most "this person ships" moment after the Hero. It is proof that costs zero fabrication: it's just *how the work is actually done*, stated plainly.
- **DS**: `StepsSection` (organism: `Section` + `Stepper`) is the purpose-built "how it works" primitive. Five stages map to the observe→ship glyph. Carries the page's **first `<h2>`**. On `--bg`, no band.
  - **Watch:** `StepsSection`/`Stepper` is documented for the "3-step row" marketing pattern. Five stages may want a quieter, more editorial rhythm than a chunky 3-up stepper. If the Stepper's visual register reads too "SaaS onboarding," the fallback is a `Section` + a hand-composed editorial list (`Eyebrow numeral` + `Heading as="h3"` + `Text`) styled to echo the glyph's hairline-and-node language. Designer's call at composition time.
  - `<NEEDS: confirm StepsSection/Stepper renders cleanly at 5 stages in a low-density editorial register (not a 3-up onboarding row). If the Stepper forces a marketing-onboarding look at n=5, this is a DS register gap worth a note to maintainers — flag, don't invent.>`

### 4. What we do — THE DISCIPLINES  · **NEW** (replaces the flat differentiation tell, part 2)
- **Job**: Make the three deliverables (builds / automations / advisory) concrete and scannable — the substance behind the tagline's noun phrase. Today these three words appear once, buried in the lede, and never recur. An operator deciding whether to email needs to see *which* of these maps to their problem.
- **Narrative beat**: Substance. What you'd actually be buying.
- **Why new**: The brand sells three distinct things; the page treats them as one undifferentiated blur. Naming them with one honest line each is the cheapest, highest-integrity proof on the page.
- **DS** — *two real options, I recommend the first:*
  - **Recommended — `FeatureGrid` with `columns={3}` + three `FeatureCard`s, but disciplined.** The composition history rightly fears the "3 equal cards = generic SaaS landing page" failure mode. The fix is not to ban the grid; it's to make the cards *honest* — no invented icons, no adjective-soup body, no "Powerful. Scalable. Fast." Each card: discipline name + one plain sentence of what it actually is + (optional) a quiet `→` link only if a sub-page exists. Carries the page's **second `<h2>`**. On `--bg`.
  - **Alternative (if the grid still reads generic) — `Section` + a `MetaList` or three `Principle` blocks** in an editorial stacked rhythm. Lower "SaaS" risk, less scannable. Use only if the disciplined grid still trips the failure mode in review.
  - **Anti-slop guardrail (binding on whichever wins):** no decorative icons chosen for vibe, no three-word feature headlines, no gradient cards, no equal-weight visual filler. If a card can't say something true and specific, it doesn't ship.
  - `FeatureGrid` and `FeatureCard` both ship in 2.17.0. **No DS gap.**

### 5. Why us — THE HONEST TRADE-OFF  · **KEEP the content, UPGRADE the form**
- **Job**: Give the still-undecided visitor one concrete, honest reason pouk.ai beats the three things they're actually weighing — DIY, a generic agency, in-house hire. Route the full argument to `/why-ai`.
- **Narrative beat**: Differentiation, earned by candor.
- **Why upgrade**: Today this is the flat paragraph. The honesty of the argument ("each is the right call sometimes") is the brand's best differentiation move — candor *is* the credential. But a wall of prose hides it. Give it a structure that makes the trade-off *visible* at a glance.
- **DS** — *I recommend the lightweight option:*
  - **Recommended — `Section` (h2) + a compact `ComparisonTable`** with three columns (DIY / Agency / In-house / pouk.ai) and 2–3 honest rows ("right when…", "the risk…"), then the inline `/why-ai` link. The DS ships `ComparisonTable` as a real organism; a *small, honest* comparison is the most credible form this argument can take for an engineering audience — they read tables, not paragraphs.
  - **Alternative (quieter) — keep it prose, but as `Section` + `Pull`** (sans variant) to lift the one-line honest verdict out of the paragraph so it lands. Lower density; less proof.
  - **Guardrail:** the table must be *honest* — pouk.ai does not win every row. The "each is the right call sometimes" candor is the whole point. A comparison table that makes the competitor look stupid reads as marketing and kills the credibility. If we can't make it honest, fall back to the `Pull` form.
  - Carries the page's **third `<h2>`**. On `--bg`.
  - `ComparisonTable` / `Pull` / `Section` all ship in 2.17.0. **No DS gap.** `<NEEDS: confirm ComparisonTable degrades to a readable stacked layout on mobile without horizontal scroll — it's specced for dense pricing matrices; a 4-col honest comparison at 375px is the risk. If it forces horizontal scroll, fall back to the Pull form.>`

### 6. Convert — THE EXIT  · **KEEP (move the band here — already there)**
- **Job**: End on a conversion. Restate availability, offer both paths, no scrolling back to the Hero.
- **Narrative beat**: Convert.
- **Why**: Correct as built. This carries the page's **fourth `<h2>`** and the **one `--surface-section` band**. The band still belongs here — it is the terminal beat, and now it has *more page above it to earn the landing*.
- **DS**: `CTASection surface="recessed"`, two `Button`s (mailto primary + booking secondary). Shipping today. **No DS gap.**

### 7. Footer — `SiteShell` chrome  · **KEEP (unchanged)**

### Explicitly NOT added (the anti-slop floor)
No logo / "trusted by" bar (no real logos to show — a fake one is the fastest credibility death). No `TestimonialBlock`/`Quote` (no real attributed customers yet; a fabricated quote violates the whole thesis). No animated stat counters. No `StatsSection` with invented numbers (the only honest stat — "most AI projects fail" — lives on `/why-ai` with its citation; do not reproduce it here uncited, per `sales-content-gaps §3`). No newsletter. No pricing tiers. No FAQ. **The rule: every new beat is a system or a fact pouk.ai can stand behind today. The moment a section needs a number or a name we don't have, it doesn't ship.**

---

## 5. What changed vs. the current build — explicit calls

| Current section | Call | Rationale |
|---|---|---|
| **Hero** | **Keep, sharpen continuity only** | Strongest asset. Copy + glyph locked. Make the glyph rhyme with the new method section. |
| **Statement** | **Keep unchanged** | The authored voice. The hinge. |
| **Differentiation (prose)** | **Dissolved into three earned beats** (How we work / What we do / Why us) | This was the flat tell. It asserted differentiation and showed none. Split into proof-of-method, proof-of-substance, and an honest comparison — the differentiation argument *survives and gets stronger*, it just stops being a dead paragraph. |
| **ClosingCta** | **Keep** | Correct. Now earns its landing with more page above it. |

**The `--surface-section` band stays singular and stays at the close.** Adding HOW/WHAT/WHY on `--bg` keeps the page's restraint floor intact: one band, at the end, as the "act now" signal. No new bands. This is non-negotiable — the moment a middle section grabs a band, the page starts reading as a stack of marketing modules (the named failure mode).

---

## 6. Creative & motion direction

**The feeling:** a precise instrument. Lots of air. One typographic event (the Hero). One raised-voice line (the Statement). Then evidence delivered with the same restraint — hairlines, mono labels, generous whitespace, never a card that shouts. The page should read like it was *engineered*, because that is the product.

**Density:** deliberately low, even with three new sections. The strike is the *interval* — 64px (`--space-16`) turns between beats, each section doing one job. If a section needs two jobs, it's two sections or it's cut. Resist the urge to fill the new sections; their power is that they're spare *and* substantive.

**Typographic voice:** Instrument Serif for the display + Statement + section titles (editorial weight). Geist for body + chrome. Geist Mono for labels — and lean into mono for the HOW WE WORK stage labels (observe / model / plan / act / ship) to echo the glyph's `--font-mono` caption. Mono = "reference / label / system." That's the brand's technical register; use it as the connective tissue between the Hero glyph and the method section.

**The Pouākai motif:** the **feather-as-motif** ruling (`feather-mark.md`) stands — the eagle stays deferred, the feather is the everyday mark. On home, at most **one** deliberate feather (the `sigil`-size colophon above the StatusBadge, if Arian greenlights Delta 3). It is the brand's chosen sigil, not decoration. **"The Signal" pipeline glyph is the home's figurative anchor** — the system-as-bird abstraction. These two (feather colophon + signal glyph) are the *only* figurative elements; nothing else gets imagery. Never the literal eagle, never Māori ornament.

**The signature moment — sharpened, not moved:** it stays **the first 60px of serif + the observe→ship glyph**, now *paid off* by the HOW WE WORK section. The glyph was a beautiful loose end; the method section ties it to the argument. That payoff — "oh, that diagram in the hero is the actual method" — is the new delight. One signature, set up in the Hero, resolved on scroll.

**Motion intent (the D-25 freedom, spent with discipline):**
- **Keep** the Hero `entrance="stagger"` (the one entrance event).
- **Add** a single, quiet, *consistent* scroll-reveal grammar to the three new sections + Statement: a short fade + 8–12px rise as each beat enters, once, `--dur-slow` (600ms), `--easing`. Not parallax, not staggered children, not anything that "performs." The same restraint as the type, extended to the scroll. The reward for scrolling is *calm continuity*, not spectacle.
- **The Signal glyph's** existing CSS signal-pulse stays. It is the one ambient motion on the page and it's on-brand (a system with a heartbeat).
- **Binding:** every bit of this collapses fully under `prefers-reduced-motion: reduce` (D-25 hard constraint, DS `:root !important` block). The reduced-motion experience is the static page, fully legible, losing nothing but the entrances. Axe-clean, WCAG AA, keyboard-correct on every interactive surface — non-negotiable.
- **Anti-slop motion guardrails:** no scroll-jacking, no number count-ups, no horizontal scroll sections, no element that moves on hover except DS-native link/button affordances, no "draw-on" SVG animation of the glyph (it pulses; it does not perform).

---

## 7. Positioning throughline & conversion path

**Throughline (the sentence the whole page serves):** *"We are the engineers who ship the AI work and keep it running — and we'll tell you honestly when you don't need us."* Every beat serves it: Hero announces the discipline, Statement asserts the gap, HOW proves the method, WHAT proves the substance, WHY proves the candor, CONVERT asks. The candor (WHY US naming when *not* to hire pouk.ai) is the strongest anti-"generic AI advisor" move on the page — a generic advisor never tells you not to buy.

**Conversion path:** unchanged and deliberate — `mailto:` is primary, booking is the quiet secondary, appearing exactly twice (Hero + CONVERT). The email address *is* the label. No form, no widget, no third CTA register, no urgency, no scarcity. The new middle sections lower the bar to emailing by answering "do they do my thing, and are they any good" *before* the ask — so the CONVERT beat meets a more-convinced reader.

---

## 8. References (web research deliberately not run)

I am deliberately **not** anchoring this to scraped competitor sites. The brand's whole thesis is anti-pattern-matching ("don't read as another AI advisor"), and the strongest reference is internal: **the page should read like a great commit message or a clean architecture doc** — the artifacts this audience already trusts. The aesthetic touchstones the DS already encodes (Apple-canvas restraint, editorial serif display, hairline structure, mono-as-reference) are the right north; chasing Linear/Vercel/Anthropic landing tropes would pull toward the generic-SaaS failure mode the composition history correctly fears. If Arian wants external references to react against, I'll pull a tight set — but I'd rather defend taste from first principles than cargo-cult a trend.

---

## 9. DS capability summary (what I'm composing with — all real in 2.17.0)

`Hero` · `StatusBadge` · `Button` · `Statement` · `StepsSection`/`Stepper` · `FeatureGrid`/`FeatureCard` · `ComparisonTable` · `Pull` · `Section` · `Eyebrow` · `Heading` · `Text` · `MetaList` · `CTASection` · `SiteShell`/`Footer`. Plus the site-side inline SVGs: "The Signal" glyph (shipping) and the optional feather colophon.

**DS gaps flagged (not invented):**
1. `<NEEDS: StepsSection/Stepper at n=5 in a low-density editorial register>` — confirm it doesn't force a 3-up onboarding look. Fallback is a hand-composed `Section` list.
2. `<NEEDS: ComparisonTable mobile degradation at ~375px for a 4-column honest comparison>` — confirm no forced horizontal scroll. Fallback is the `Pull` form.

Neither blocks the direction; both are register/responsive confirmations for the designer + DS maintainers, not new components.

---

## 10. Open questions for Arian

1. **Biggest call — do you want PROOF on the homepage at all, or is `/` deliberately a doorway that hands proof to `/why-ai`?** My strong recommendation: the doorway thesis is obsolete (D-25 + the destination revision already broke it). The homepage is the one page everyone sees; making them click to `/why-ai` to learn you're credible loses the visitors who won't click. **I recommend proof on home.** If you'd rather keep `/` lean and load `/why-ai`, say so and I'll cut HOW/WHAT/WHY back to a single upgraded WHY beat.
2. **HOW WE WORK is the centerpiece — are the five stages (observe → model → plan → act → ship) genuinely how you work, or aspirational?** This section's entire value is that it's *true*. If the real method is different (or fewer stages), it must reflect reality. Direction is worthless if the proof is invented.
3. **WHY US comparison table — comfortable being publicly honest that DIY/agency/in-house are sometimes the right call?** That candor is the strongest move on the page, but it's a positioning commitment. Confirm or I drop to the quieter `Pull` form.
4. **Motion** — green-light the single quiet scroll-reveal grammar (fade + small rise, reduced-motion safe)? Or keep the page static below the Hero?
5. **Feather colophon (Delta 3)** — ship the `sigil` feather above the StatusBadge now, or hold? (Recommendation: ship — cheapest "felt finish" available.)

---

## 12. Arian's decisions (2026-06-19) — all §10 questions resolved

All five resolved in line with the director's recommendation:

1. **Proof on home — YES.** The doorway thesis is retired; `/` carries proof. Build the HOW WE WORK / WHAT WE DO / WHY US beats. (Triggers a masterplan + home-spec re-spec by the PM — the doorway language is now stale.)
2. **The method is real — observe → model → plan → act → ship is accurate as-is.** Ship the five stages as the HOW WE WORK spine; not aspirational.
3. **WHY US — honest comparison approved.** Ship the candid DIY / agency / in-house / pouk.ai `ComparisonTable` where pouk.ai does NOT win every row. Candor is the credential. (Pull fallback only if the table can't degrade cleanly on mobile.)
4. **Motion — quiet scroll-reveal approved.** One consistent fade + 8–12px rise, once, ~600ms, on the new beats + Statement. No parallax/stagger/spectacle. Fully collapses under `prefers-reduced-motion`. Hero stagger + Signal pulse stay.
5. **Feather colophon (Delta 3) — ship now.** Sigil-size feather above the Hero StatusBadge. Brand's everyday sigil, not the literal eagle.

**Next step:** route to `pouk-ai-pm` to re-spec the homepage (IA, content-requirement outcomes, content-data shape, acceptance criteria) against this approved direction, and to re-spec the masterplan/home doorway language per decision 1. Then content → designer → engineer.

---

## 11. What I deliberately did NOT do

- **Did not write copy.** The Statement line, the five stage descriptions, the discipline sentences, the comparison rows — all content's lane. I set the emotional target (proof, candor, restraint) and the slot intent.
- **Did not write acceptance criteria or an IA render contract.** That's the PM's re-spec. I gave the spine (§3) and the section jobs (§4); the PM turns them into engineer-checkable specs.
- **Did not pick exact compositions / spacing / which `FeatureCard` props.** That's the designer. I named the DS primitives and the bar; the designer composes.
- **Did not invent DS components.** Every primitive named ships in 2.17.0; the two uncertainties are flagged `<NEEDS:>` for the designer/DS, not assumed.
- **Did not touch the Hero copy or "The Signal" glyph.** They're the ceiling; I'm raising the rest to meet them.
- **Did not edit the masterplan or any decision record.** If you approve proof-on-home (Q1), the doorway-thesis language in the masterplan and home spec needs the PM to re-spec through the normal path. I'm flagging it, not changing it.

---
---

# AMENDMENT A2 — Resolve the glyph clash, end the flatness (FINAL)

**Type**: Direction amendment (Web/Creative Director → Arian) — **APPROVED WITH OVERRIDES**
**Author**: pouk-ai-director
**Date**: 2026-06-19
**Status**: **FINAL / LOCKED.** Arian reviewed the A2 proposal and overrode its two core moves (the glyph relocation and the eagle re-open). This section now records his decisions and is rewritten to be authoritative, not proposing. Actionable now: the PM re-specs the affected beats; the designer re-composes; content sources the one binding citation the Why-us metric requires.
**Supersedes within this doc**: §3 (the 6-beat schema → now **5 beats**); §4 Beat 3 (How we work / Method — **deleted**); §4 Beat 1's feather-colophon + glyph-continuity notes; §6 "the signature moment is the serif + the glyph, paid off by the method"; and the §4/§6 "every middle beat on bare `--bg`, one band only" assumption. Everything else in §§0–12 stands (thesis, honesty posture, anti-slop floor, Statement, Hero glyph, motion/a11y grammar).
**Reads on**: the live build (`HomeHeroIllustration.tsx` = "The Signal" with labeled OBSERVE→…→SHIP nodes + "pipeline · 5 stages" caption — **kept in the Hero**; `HomeMethod.tsx` = the same five stages as an `<ol>` — **to be removed**; `HomeDisciplines` = transparent 3-up; `HomeComparison` = semantic table; `HomeClosingCta` = recessed band), `meta/asset-production/illustration-and-motion-brief.md` (the engraving/feather register, the B.1/B.2 deficit-bar graph vocabulary, the do-NOT list), `pouakai-engraving-prompt.md` (D-17 eagle — **stays closed**).

---

## 12.A2 — Arian's decisions (2026-06-19) — LOCKED

The five A2 open questions are closed. Arian overrode the director's two core recommendations; record, do not re-litigate.

1. **OQ-A2-1 — Relocate the pipeline diagram Hero→Method: NO (overridden).** The diagram does **not** move. "The Signal" pipeline glyph **stays in the Hero, exactly as it is** — it is the page's pipeline statement. Redundancy is resolved instead by **dropping the "How we work" / Method section entirely.** There is no separate Method list re-explaining the glyph. (The feather colophon was already removed from the Hero earlier at Arian's request; it is **not** reintroduced.)
2. **OQ-A2-2 — Re-open the eagle (D-17): NO (overridden).** No eagle, not even gated. **D-17 stays closed.** The Hero's right column is "The Signal" glyph, unchanged. No new figurative anchor is added to the Hero.
3. **OQ-A2-3 — Two recessed bands: YES.** Why us + Convert both recessed, with the merge-guard: they must never read as a single slab; Why-us-only fallback if they merge at composition review.
4. **OQ-A2-4 — Cited deficit metric at the Why-us head: YES, ADD IT.** A single monochrome deficit / deployment-gap mark **plus a real, attributable figure** at the head of the Why-us exhibit. **The citation is binding: content must source a genuine, attributable number; fabrication is banned** (see §17).
5. **OQ-A2-5 — Masterplan/decision-record touch:** on this sign-off, the PM re-specs and flags the decision-record + masterplan notes through the normal path; the director does not edit them (see §20).

**Net structural result: the page is now FIVE beats** — Hero (glyph) → Statement → What we do → Why us (recessed band + cited deficit mark + comparison) → Convert (recessed band). HowWeWork/Method is gone. The sections below are rewritten around this.

---

## 13. The two critiques, named precisely

**Critique 1 — conceptual redundancy.** The original direction (§6) bet that "The Signal" glyph in the Hero would be *paid off* by the How-we-work section. In the build that bet inverted: the glyph is not a teasing abstraction, it is a **fully-labeled, captioned exposition** — five named nodes (`OBSERVE 01 … SHIP 05`), caption `pipeline · 5 stages`. It *delivers* the method; it doesn't set it up. So the How-we-work `<ol>` two beats later re-stated, in weaker prose, a diagram the reader had already fully read. One idea, told twice. **Arian's resolution: the glyph is the better telling — keep it in the Hero and delete the second telling.** The redundancy is removed by subtraction, not relocation.

**Critique 2 — flatness.** The page is almost entirely **type on `--bg`** — six beats, one medium, one glyph, one closing band. Restraint without *variation* reads as monotony, not discipline. There is no change of object-type or surface rhythm to let the eye rest, then engage, then rest. The page only rests.

The honest tension after the override: dropping the Method beat is the right redundancy fix, but it **also removes the one beat A2 had earmarked as the page's "technical exhibit"** — so the flatness fix can no longer lean on a mid-page diagram. §15–§17 re-derive the variety story from what remains: the Hero glyph (kept), the two recessed bands, and the cited metric exhibit. §15 is explicit about whether five beats now reads thin and where the page must earn its variety.

---

## 14. Redundancy resolution — the LOCKED decision

**Decision (Arian, locked): DROP the "How we work" / Method section. Keep "The Signal" glyph in the Hero, unchanged. The glyph is the page's sole pipeline statement.**

The clash was one idea told twice. Of the two tellings, the glyph is the stronger — it is a built, animated, signature asset that says the whole pipeline (observe→ship) in one wordless object, and it is the strongest thing on the site. The Method `<ol>` was the weaker, redundant restatement. **So the page keeps the strong telling and deletes the weak one.** This is subtraction — the highest-leverage creative move available — and it is exactly right here: the page gets *shorter and sharper*, the glyph stops being spoiled by a downstream re-run because there is no downstream re-run, and the Hero keeps its signature intact.

**Concretely:**
- **`HomeMethod` / Beat 3 is removed** from the page. The `howWeWork` content block and its slot come out of the IA (engineer/PM lane to wire the removal).
- **The Hero is unchanged** — "The Signal" glyph stays in the right column as-is, with its labels, caption, and CSS signal-pulse. No feather anchor, no eagle, no abstraction pass. The glyph *is* the figurative + system object on the page, and it now carries that job without competing against a redundant list.
- **The "glyph rhymes with the method" continuity intent is retired** — there is no method section to rhyme with. The glyph simply states the pipeline; that is enough.

What the page loses by this subtraction: the per-stage *descriptions* (the one-sentence "what each stage does" copy). That detail now lives nowhere on home. **This is acceptable and on-thesis** — the home page is not the place to expand the method into prose; the glyph communicates the shape of the work, and a visitor who wants the depth is already routed to `/why-ai` (the lede hand-off + the Why-us link). If Arian later wants the method *explained* in words, that is a `/why-ai` or a future `/how-we-work` page move, not a home beat. (Noted as residual, §19.)

---

## 15. The section-type & media palette — ending the flatness on FIVE beats

The fix for Critique 2 is still *a palette of distinct object-types*, not "add images" — but it must now be derived **without** the Method "technical exhibit" beat, which the override removed. Holding the anti-slop register (`asset-production` do-NOT list: monochrome, engraving/feather/draftsman-hairline only, no stock, no SaaS spot-art, no mesh gradients, no second illustrative style), the five beats are:

1. **Hero — figurative-system anchor + display type.** "The Signal" glyph (kept) + the display serif tagline. Media family: *system diagram as identity object.* The glyph is simultaneously the page's figurative mark and its pipeline statement — it now does both jobs alone, which is why keeping it intact matters. This is the page's strongest visual moment and its first engage.
2. **Statement — pure typographic event.** Unchanged. One editorial-scale italic line on bare canvas. Media family: *type-as-art.* A deliberate full rest.
3. **What we do — the disciplined editorial grid.** Transparent 3-up, no icons. Media family: *typographic columns.* A second quiet rest — scannable, low-density.
4. **Why us — the metric + comparison exhibit, on a recessed band.** The honest comparison, now framed as an *exhibit*: a recessed surface (§16), headed by a **single monochrome deficit/deployment-gap mark + a real cited figure** (§17), then the four-column honest table. Media family: *framed quantitative + comparison exhibit.* This is the page's second — and now most important — engage peak.
5. **Convert — the conversion band.** Unchanged. Recessed band, dual CTA. Media family: *surface event.*

**The rhythm this produces (eye rests vs. engages):**

> **Hero (glyph + serif — the strongest engage, the eye traces the pipeline)** → *rest* → **Statement (one line — full stop, maximum air)** → *rest* → **Disciplines (quiet columns — low-density scan)** → *accelerate into a frame* → **Why us (recessed band + the cited deficit mark + the comparison — the eye re-engages inside a framed surface with the page's one number)** → **Convert (the band — resolve, act).**

**Honest assessment — does five beats read thin?** Partly, yes, and I will not hand-wave it. The override removed the page's planned *mid-page* engage peak (the Method diagram). What remains has its two strongest visual moments at the **top** (Hero glyph) and **bottom** (Why-us exhibit + Convert band), with a soft middle — Statement and Disciplines are both deliberate rests, back to back. That is a real risk: **two rests in a row in the middle can read as a sag**, not as composed breathing room. The page no longer has a visual peak between the Hero and the Why-us band.

**Where the page now earns its variety — and the levers if the middle sags:**
- **The two recessed bands** (Why us + Convert) are now the primary surface-rhythm device — the main thing breaking the all-`--bg` monotony. This is why OQ-A2-3 mattered; with Method gone, the bands carry more of the variety load.
- **The Why-us metric exhibit** is now the page's single richest object below the Hero — the one number, the one deficit mark, the framed comparison. It must be composed to *land as an exhibit*, not as another text block on a slightly different background. This is where the designer should spend the most weight.
- **The Hero glyph** is the page's signature and its one "engineered object" — keeping it intact (the override) is what prevents the page from being pure type top to bottom.
- **The lever for the soft middle (named, not invented):** if composition review shows the Statement→Disciplines stretch sagging, the fix is **to give the Disciplines beat more visual weight** — not a new illustration vocabulary (banned), but composition: larger discipline names at editorial scale, a hairline structure (e.g. `Divider`-separated rows or numbered disciplines in the mono register), generous asymmetry — so it reads as a *composed* beat rather than a plain 3-up. The designer owns the exact move; the direction is: *the Disciplines beat is allowed to carry more typographic presence to bridge the gap the Method left.* **Do NOT** fill the gap by reintroducing Method, inventing a second illustration, or banding a third section.

So: five beats is leaner than six, with a genuine risk of a soft middle. The variety is real but front- and back-loaded. The page earns "spare and composed" rather than "spare and flat" through the two bands + the metric exhibit + the kept glyph — and the designer holds the lever (Disciplines weight) if the middle needs shoring up.

---

## 16. Surface rhythm — two recessed bands (LOCKED)

**Decision (Arian, locked): exactly TWO recessed `--surface-section` bands — Why us and Convert — and nowhere else.** This supersedes the original one-band restraint floor. With the Method beat gone, the bands carry more of the anti-flatness load (§15): a single band at the very end would leave the page all-`--bg` until the reader has scrolled through Hero, Statement, and Disciplines. Recessing **Why us** turns the comparison into a framed exhibit and gives the page its mid-to-late surface event. Two bands is still deeply restrained — it is *rhythm*, not accretion.

**Guardrails (binding — the merge-guard Arian carried over):**
- **Both bands recessed; they must never read as one merged slab.** In the 5-beat IA, Why us (Beat 4) and Convert (Beat 5) are adjacent. Keep them visually distinct: the `--bg` they emerge from is gone between them, so the separation must come from (a) full `--space-16` air + the Convert band's `--hairline` top rule + clearly different content registers (exhibit vs. CTA), and (b) **the Why-us-only fallback** — if at composition review the two recessed beats still read as a single long slab, **Why us keeps the band and Convert drops to `--bg`.** Total stays at most two; the page keeps its mid-page surface event regardless. The designer makes this adjacency call at composition time.
- **No third band, ever.** Hero, Statement, Disciplines stay on `--bg`. A fourth beat wanting a band means the page is becoming a module stack — refuse it.
- **Recessed (`--surface-section`), never elevated/floating cards.** No drop shadows, no card chrome, no gradient fills. A recessed band is a quiet change of ground, not a box.

---

## 17. The cited deficit metric at the Why-us head (LOCKED — citation is binding)

**Decision (Arian, locked): ADD a single monochrome deficit / deployment-gap mark plus a real, attributable figure at the head of the Why-us exhibit.** This is the page's one quantitative moment and a real piece of the anti-flatness fix — it gives the Why-us band a visual object (a mark, not just text) and a concrete reason the honest comparison matters.

**The citation requirement is HARD and binding — restate it for content and the reviewer:**
- **The number must be real and attributable.** It must be a genuine, published, citable figure (e.g. a deployment-gap / AI-project-failure statistic with a named source and year, of the same provenance as the `/why-ai` figures: Gartner 2026, PwC 2026, etc.). **Fabrication, rounding the source doesn't support, uncited "industry" numbers, or inventing a home-specific metric are all banned** — they trip the §3 "the proof is fabricated" failure mode, which is worse than no metric.
- **No number, no mark.** If content cannot source an attributable figure that genuinely belongs at the head of the home Why-us beat, the deficit mark **does not ship** and the Why-us exhibit is the comparison table alone. The metric is mandated *conditional on a real citation existing*; the citation is not optional and not waivable. (This is the one place the LOCKED "add it" and the binding anti-slop floor must be reconciled: Arian has said add it; the floor says only if cited. Both hold — content sources the citation, or the mark is dropped. Content + Arian own closing this; flagged as the one true dependency, §19/§20.)
- **The mark itself** is the established `/why-ai` B.1 vocabulary: a **single** monochrome (`currentColor`) deficit form — one filled-vs-empty bar where the empty space *is* the argument — not a dashboard, not multiple bars, not a chart with axes/legends. Static-first; an optional CSS-only render-time entrance is permitted and must collapse to the full static mark under `prefers-reduced-motion` (§18). The source attribution renders as visible micro-caption text (mono register), not a hidden footnote — the credibility *is* the visible citation.

This metric is now a structural part of the page (not the original A2 "default skip"), because Arian moved it from conditional-extra to mandated-with-citation. It is the page's richest below-the-Hero object and must be composed to land as an exhibit.

---

## 18. Motion, accessibility, and the anti-slop floor (carried forward)

The kept and new media inherit the existing binding constraints — no exceptions:

- **"The Signal" glyph is unchanged** — it keeps its CSS-only signal-pulse (the one ambient "heartbeat" motion) and the Hero's existing `entrance="stagger"` arrival. No new motion, no draw-on, no change. It stays in the Hero exactly as built.
- **The Why-us deficit mark** is static-first; an optional CSS-only **render-time** entrance (the bar fills 0→final) is permitted, gated by `prefers-reduced-motion: reduce` → collapses to the full static mark. **No scroll-driven JS, no count-up of the number** (that would need a JS island and breaks the contract; the number renders at its final value). The Why-us section keeps the standard one-shot scroll-reveal (fade + 8–12px rise, 600ms, once, as a unit).
- **The two recessed bands carry no motion of their own** beyond that standard reveal; the Convert band is static (terminus).
- **Hard, binding (D-25):** every motion collapses under `prefers-reduced-motion: reduce` to the static finished state; axe 0 violations; WCAG AA; keyboard-correct. Reduced-motion experience = the fully static page (glyph present + pulsing-off, bands present, mark at full fill, number at final value, nothing animating).
- **Anti-slop floor (unchanged, binding):** monochrome only; the brand accent never appears at rest; one illustrative vocabulary (the glyph's hairline/mono draftsman hand + the deficit mark in the same register; no eagle, no feather on this page, no second style); no stock, no SaaS spot-art, no mesh/AI gradients, no icons in the Disciplines grid, **no third band**, **no fabricated proof** (the §17 citation is the live instance of this), no Māori surface ornament.

---

## 19. What changed vs. the original direction (A2 deltas, FINAL)

| Element | Original direction | A2 FINAL (Arian, locked) | Why |
|---|---|---|---|
| **"How we work" / Method beat** | Beat 3 — five-stage `<ol>` | **DELETED.** Page drops 6→5 beats. | Redundancy fix by subtraction: the glyph already states the pipeline; the list was the weaker second telling. |
| **"The Signal" pipeline glyph** | Stays in Hero; "paid off" by Method | **Stays in Hero, unchanged — the page's sole pipeline statement.** | The stronger of the two tellings; no downstream re-run to spoil it now. |
| **Hero right column** | The glyph | **The glyph, unchanged.** No eagle, no feather anchor. | Override: D-17 stays closed; feather was already removed earlier. The glyph carries the figurative + system job alone. |
| **D-17 eagle** | Deferred | **Stays CLOSED** (override of the A2-proposal re-open). | Arian: no eagle, not even gated. |
| **Feather colophon on Hero** | Greenlit (§12 dec. 5) | **Removed** (earlier, at Arian's request) — not reintroduced. | No feather anchor on this page. |
| **Surface bands** | Exactly one, at Convert | **Exactly two — Why us + Convert — never a merged slab; Why-us-only fallback.** | Bands now carry more anti-flatness load (Method gone); recessing Why-us frames the exhibit + adds the mid-late surface event. |
| **Quantitative exhibit** | (not in original) | **MANDATED: one cited deficit mark + a real attributable figure at the Why-us head; citation binding; no number → no mark.** | Override moved it from "default skip" to "add it." Reconciled with the no-fabrication floor by the binding-citation requirement. |
| **Media / variety story** | All type on `--bg`, one glyph | **Five media families across five beats; variety front/back-loaded (Hero glyph + two bands + metric exhibit); soft-middle risk named; Disciplines-weight is the lever.** | Restraint must be composed, not flat — re-derived without the Method exhibit. |

Everything not in this table (and not in §12.A2) is unchanged from §§0–12.

---

## 20. Status & handoff (A2 closed)

All five A2 open questions are **closed and recorded in §12.A2.** This amendment is final and actionable. Handoff:

- **→ PM (`pouk-ai-pm`):** re-spec the home page to the **5-beat IA** — remove the How-we-work/Method beat and its `howWeWork` content block; keep the Hero (glyph) and Statement unchanged; revise the surface-rhythm acceptance criteria from "exactly one band" to **"exactly two recessed bands (Why us + Convert), never a merged slab, Why-us-only fallback"**; add the Why-us **cited-deficit-mark** requirement with the **binding citation AC** (real attributable figure with named source + year, or the mark does not ship). Flag the decision-record + masterplan/spec notes (the prior "one band" floor and the now-removed Method beat) through the normal path; **do not edit the masterplan or decision records directly** — the director doesn't either.
- **→ Content (`pouk-ai-content`):** the one true dependency — **source the real, attributable Why-us figure** (provenance matching the `/why-ai` stats; named source + year). If none genuinely belongs on home, say so; the mark is then dropped (per §17). The five `howWeWork` stage descriptions are retired from home (no longer needed).
- **→ Designer (`pouk-ai-designer`):** re-compose to five beats; make the **Why-us recessed exhibit** the richest below-Hero object (the deficit mark + comparison framed as one exhibit); hold the **merge-guard** (Why-us-only fallback if the two bands slab together); and hold the **Disciplines-weight lever** in reserve if the Statement→Disciplines middle sags at review (composition only — no new illustration vocabulary).

---

## 21. DS gaps surfaced by A2 (FINAL)

**None that block the direction.** Removing the Method beat is a deletion (no DS need). The two recessed bands use `--surface-section` (published): `CTASection surface="recessed"` already carries Convert; the Why-us beat wraps its `Section`/table/mark in a recessed surface — a composition concern (site-side wrapper, or a future `Section surface="recessed"` prop matching `CTASection`'s). The deficit mark is a site-side inline SVG in the established `/why-ai` B.1 vocabulary — no DS primitive (the DS ships no chart primitive by design; a single monochrome SVG mark is correct, not a chart component). **One awareness-only flag (not a blocker):** if recessed *non-CTA* sections recur across pages, a `Section surface="recessed"` enhancement would be a clean DS addition; **default: do not escalate; a site-side recessed wrapper is fine for this one page.**

---

## 22. Residual risk for Arian (post-override)

Recorded plainly so the override's trade-offs are visible, not buried:

- **Soft middle (the main one).** Dropping Method removed the page's mid-page engage peak; Statement and Disciplines are now two rests in a row. The page's strong visual moments are front (Hero glyph) and back (Why-us exhibit + bands), with a quiet stretch between. The Disciplines-weight lever (§15) is the in-budget fix if review confirms a sag — but if the middle still reads thin after that, the honest options are (a) accept a leaner, top-and-tail-weighted page, or (b) a *future* decision to add back a non-redundant middle beat (e.g. a short proof/credentials beat) — **not** a reversal of the Method drop. Flagging now so it isn't a surprise at composition review.
- **The method depth now lives nowhere on home.** The per-stage descriptions are gone; home communicates the pipeline only as the wordless glyph. Intentional and on-thesis (depth is a `/why-ai` job), but if the glyph alone reads as under-explained to a first-time visitor, the answer is a stronger lede hand-off to `/why-ai`, not a Method beat back on home.
- **The cited metric is a hard dependency, not a nice-to-have.** Arian mandated the mark; the anti-slop floor forbids an uncited number. These reconcile *only* if content sources a real attributable figure. If it can't, the mark is dropped and the Why-us band leans entirely on the comparison table for its exhibit weight — which slightly thins the page's one quantitative moment. Worth Arian knowing the metric's presence is contingent on a real citation surviving.

---
---

# AMENDMENT A3 — Give the page a real visual anchor

**Type**: Direction amendment (Web/Creative Director → Arian for sign-off)
**Author**: pouk-ai-director
**Date**: 2026-06-19
**Status**: APPROVED (2026-06-20) — Arian signed off on **§24 = option (a), the real artifact exhibit**. §§25–28 live. OPEN dependency: artifact source material not yet identified — content sources real candidates, Arian confirms one before the artifact beat ships (binding anti-fabrication, §30). Cascade now: PM re-specs → content sources artifact + confirms citation → designer re-composes → engineer builds.
**Supersedes within this doc**: §15's "five media families / front-and-back-loaded" variety story and its "Disciplines-weight is the only lever" claim; the §15/§22 "soft middle" treated as an accept-or-defer risk (A3 *fixes* it); A2's framing of the Why-us beat as a recessed *table* (A3 recasts it as an *exhibit*). Carries forward and does **not** touch: the Method drop (A2 §14), the closed eagle (§12.A2 dec. 2), the two-band rhythm (§16), the cited-metric mandate + binding citation (§17), the Hero glyph keep (§14), the thesis (§0), the honesty content, the anti-slop floor, and the motion/a11y grammar (§18).
**Reads on**: the design-taste audit of the live 5-beat build (findings agreed in full by Arian), the live components (`HomeHero` + `HomeHeroIllustration` = "The Signal" glyph; `HomeStatement`; `HomeDisciplines` = transparent 3-equal grid; `HomeComparison` = 4-column hairline-per-row table + deficit context; `HomeClosingCta` = recessed band), `meta/asset-production/illustration-and-motion-brief.md`, the `@poukai-inc/ui@2.17.0` constitution.

---

## 23. The audit, named precisely — and why it's structural, not cosmetic

The live 5-beat page is *tasteful but flat*. Every prior fix attempt (spacing, the second band, the deficit number, the Disciplines-weight lever in §15) was treating symptoms. The audit found the root cause and Arian agrees: **the page is one medium — editorial type on near-white — repeated beat after beat, with no real visual object below the Hero except a single thin deficit bar.** 

The three things the audit called out are all downstream of that one absence:
- **"Soft middle"** — because there is no visual object between the Statement and the Why-us beat; A2 already flagged this (§22) and could only offer "add typographic weight," which is more of the same medium.
- **"Quiet close"** — because the Convert band is a band of *type*, not a designed moment.
- **"Table reads like a doc"** — because a 4-column text grid with a hairline on every row is literally a document table; it is the spec-sheet / generated-content tell.

**The correct diagnosis is structural: the page has no real figurative or visual anchor.** You cannot space-tune your way out of "one medium six times." A3's central move is therefore not a tweak — it is to **commit to one real visual object below the Hero**, and then recast the existing beats to carry genuine design weight around it. This is the 70% lift; everything else in A3 is the supporting 30%.

What stays sacred (the audit and I agree — do not touch): the restraint, the honest comparison *content*, the real citation, the serif+mono register, the monochrome discipline, accent-never-at-rest, and the Hero "Signal" glyph as the signature — which A3 says to **lean into** (bigger, more crafted), not remove.

---

## 24. THE UNLOCK — commit to one real visual moment below the Hero (Arian's call)

This is the one decision that needs Arian's sign-off. Three real options; I present all three and recommend the first decisively.

### Option (a) — A real artifact exhibit  ·  **RECOMMENDED**

**One genuine, minimal engineering artifact — a real code / architecture / config / PR fragment — rendered as an actual element with true syntax and true content.** Not a fake-screenshot `<div>`, not a mocked dashboard, not invented terminal chrome. A real, small, honest artifact: e.g. a tight, readable code or config fragment that a senior engineer would recognize as *real work*, set in Geist Mono on a recessed surface, monochrome, with the brand's hairline discipline.

**Why this is the right answer, not just an available one:**
- **It IS the brand thesis made visible.** §0 says the page should "read like a senior engineer's commit message." An artifact exhibit is that thesis as an *object* instead of a claim. It is the single most on-brand way to add a visual moment.
- **It is proof and visual in one object.** It simultaneously fixes the "no visual anchor" structural problem AND deepens the page's proof axis (the site's historically weakest axis). Photography would add a visual but no proof; a chart would add proof but feel SaaS. The artifact does both.
- **Engineers trust artifacts over imagery.** The audience reads code and config for a living. A real fragment earns credibility that no illustration can; a *fake* one would destroy it (hence the anti-fabrication floor below).
- **It sidesteps the eagle entirely.** No production-convergence dependency, no commission, no cultural-sensitivity surface. It is buildable now from real material.
- **It introduces no new illustrative vocabulary.** Mono type on a recessed surface is already the page's register (the glyph caption, the comparison cells, the Convert band are all in this family). The artifact is the *same hand* at a new scale — it reads as "the same site," not a bolted-on graphic.

**The binding anti-fabrication condition (hard, non-negotiable):** the artifact must be **genuinely real** — real syntax that parses, real content pouk.ai can stand behind, drawn from actual work or a true representative pattern. **No invented dashboards, no fake metrics in the code, no decorative terminal/browser chrome dressing it up as a screenshot, no lorem-ipsum-with-syntax-highlighting.** A fabricated artifact is worse than no artifact — it trips the §3 "the proof is fabricated" failure mode on the exact axis (engineering credibility) the artifact exists to win. If a real, shippable fragment cannot be sourced, this option is not taken (fall to (b) or (c)); it does not ship with a fake.

**What it depicts (intent, not spec):** a small, self-contained fragment that shows *how pouk.ai thinks*, not a product feature — the shape of a real integration, a real automation's core, a config that encodes a real decision. Short enough to read at a glance, real enough to be unfaithful to fake. The *feeling*: "oh — they actually ship this." Content + Arian source the real material; the designer composes its presentation; this direction sets only that it must be real, minimal, monochrome-mono, and on a recessed surface.

### Option (b) — Reopen the eagle engraving  ·  alternative, not recommended

The strongest *pure-brand* answer, and worth restating honestly: **the prior blocks on the eagle were production convergence, not lack of desire.** Three AI-generation passes failed to a predator cliché — that is a production problem, not a verdict that the eagle is wrong. A one-time **commission** (a real engraver) would sidestep the generation failure entirely and give the Hero/page a genuinely memorable, unrepeatable brand mark. It is not a dead end; it is a spend-and-commission decision Arian has twice declined.

I am surfacing it as the alternative because the audit's root cause ("no visual anchor") is exactly what the eagle was originally meant to solve, and intellectual honesty requires naming it. **I do not recommend it over (a)** for this page: it adds a visual but not *proof*, it carries cost and lead time, and it does not advance the engineering-credibility axis the way the artifact does. If Arian wants the brand mark for the *site* (Hero, cross-page), commission the eagle as a separate brand initiative — but the *home page's* visual-anchor problem is better solved by (a).

### Option (c) — Accept the flat ceiling  ·  honest option

Ship the page as-is: clean, credible, restrained — *not* memorable. This is a legitimate choice. The page does not embarrass the brand; it competes on substance and loses nothing functionally. The cost is purely ceiling: it stays a tasteful template rather than a page someone remembers. If Arian's read is that the home page should be a quiet, trustworthy doorway and the memorable moments belong elsewhere, (c) is defensible and I will hold the bar there honestly rather than pad the page.

### Recommendation

**Take (a) — the real artifact exhibit.** It resolves the structural root cause, advances proof, is fully on-brand, is buildable now, and needs no eagle and no fabrication. It is the 70% of the lift. (b) is the right move only if Arian wants a brand mark for the whole site and will commission it; (c) is the honest fallback if neither. **The rest of A3 (§§25–28) assumes (a); if Arian picks (b) or (c), §§25, 27–28 still apply and §26 (the artifact's mid-page placement) is dropped.**

---

## 25. Recast the Why-us comparison from a TABLE into an EXHIBIT

The 4-column text table with a hairline on every row is the audit's "spec-sheet" tell — the generated-doc look. **Keep the content and the citation; change the form entirely.** This is about design weight, not substance.

- **The number is the section's hero.** The deficit figure (the real, MIT NANDA-cited deployment-gap number) renders at **true display scale** — the biggest single number on the page, the section's headline, not a caption above a table. It is the page's one number; A2 said make it loud and A3 makes that literal: display-scale, the eye's first stop in the beat.
- **The honest cut becomes a tighter 2-axis layout, not a 4-column grid.** Recast the comparison as **pouk.ai vs. the alternatives** — a sparser, more legible opposition (one axis the alternatives, one axis the honest dimensions) rather than a dense 4-wide text matrix. Fewer cells, bigger type, more air.
- **Negative space and sparse dividers replace per-row hairlines.** The current hairline-on-every-row is what makes it read as a table/doc. Direct: rhythm from whitespace and at most a few structural dividers — one idea presented, not a document to scan. The honest content survives; it is just *composed* instead of *tabulated*.
- **Fewer words, bigger type.** The cells are already short sentences; tighten further so the comparison reads as a *stance* (here's the honest cut) rather than a reference table.

**Beat intent shifts**: from "a table that proves we're honest" to "an exhibit whose one big number and one clean opposition make the honest cut *land*." Same honesty, same citation — recast as the page's quantitative + positional engage peak. Stays on its recessed band (§16). The honesty guardrail still binds: pouk.ai does not win every axis; the 2-axis form must not re-tilt the candor (no "featured pouk.ai column" styling).

---

## 26. Break the soft middle (the Method-removal gap) — two moves

A2 left the Statement→Disciplines stretch as two rests in a row and could only offer "more type weight." A3 fixes it structurally:

- **(i) Make What-we-do ASYMMETRIC.** Drop the 3-equal-cards layout (itself a mild SaaS tell). Recast as a **lead discipline + two** (or 2+1) — one discipline carries more weight (scale, span, position), the other two subordinate. This gives the beat an internal focal point and a composed rhythm instead of three identical columns. Still transparent, still icon-less, still honest one-sentence bodies — but *designed*, not gridded. (This is the in-medium half of the fix.)
- **(ii) Place the artifact exhibit BETWEEN Statement and Why-us** — *if option (a) is chosen.* This is the real fix: the artifact becomes the **mid-page engage peak the Method removal left empty.** The rhythm problem A2 couldn't solve in one medium is solved by introducing the one new medium exactly where the page sags. Order becomes: Hero (glyph) → Statement → **Artifact exhibit (mid-page peak)** → What we do (asymmetric) → Why us (exhibit, recessed) → Convert.

If Arian picks (b) or (c) in §24, only move (i) applies and the middle stays softer (named again in §30).

---

## 27. Own the two quiet moments

- **The deficit number at display scale** (covered in §25) — the page's one number, made loud. This is half of "own the quiet moments."
- **Recast the Convert close as a real typographic moment, not a plain band.** Today it is a recessed band carrying type. Direct: the closing line should be a *designed* editorial moment — the page's last serif beat at real scale, composed (not just a heading + two buttons on a tint). It is the final note; it should feel authored, like the Statement's louder sibling, not like a generic CTA strip. Same dual-CTA contract, same recessed surface (§16) — but the heading earns display-adjacent weight and deliberate composition so the page *closes* rather than just ends. The band stays; the *moment* gets crafted.

---

## 28. Lean into the Hero glyph (don't touch the content — raise the craft)

The audit says keep the glyph as the signature; A3 says **lean in.** It is the page's one already-real visual object and its strongest asset. Direction: it may be made **bigger and/or more crafted** — more presence, finer hairline detail, more deliberate composition in the Hero's right column — so it reads unmistakably as a *signature*, not a small decorative diagram. **No content change** (the OBSERVE→SHIP labels, the caption, the signal-pulse all stay per A2 §14); this is a craft/scale call for the designer within the locked content. The glyph and the artifact exhibit (§24a) are the same hand — hairline + mono, monochrome — so the page reads as one authored object with two real visual moments (Hero glyph; artifact), bracketing the recast exhibits below.

---

## 29. The revised media palette & rhythm (with the anchor)

**Five beats, six on (a) — now with two genuine non-type visual objects and three recast beats carrying real design weight:**

1. **Hero** — the "Signal" glyph, *leaned into* (bigger/more crafted) + display serif. Media: *system glyph as signature.* First engage, now stronger.
2. **Statement** — unchanged. *Type-as-art.* The deliberate rest.
3. **Artifact exhibit** *(if §24a)* — the real code/config/PR fragment on a recessed-or-distinct surface, mono. Media: *real engineering artifact.* **The mid-page engage peak** — the new medium, exactly where the page sagged.
4. **What we do** — *asymmetric* (lead + two). Media: *composed typographic block* (no longer a 3-equal grid). A designed beat, not a rest.
5. **Why us** — the *exhibit*: display-scale number + 2-axis honest cut + negative space, on a recessed band. Media: *quantitative + positional exhibit.* The richest below-anchor object.
6. **Convert** — recast as a *designed typographic close* on the recessed band. Media: *authored editorial close.*

**Rhythm — no longer top-and-tail-weighted:**
> **Hero (glyph — strong engage)** → *rest* → **Statement (full stop)** → **Artifact (the eye meets a real object — the new mid-page peak)** → **What we do (asymmetric — composed, holds attention)** → *accelerate into a frame* → **Why us (recessed exhibit, the big number + the honest cut)** → **Convert (the authored close on a band).**

The soft middle is gone because there is a real visual object in it. The "one medium six times" problem is gone because there are now two non-type objects (glyph, artifact) and three beats recast from "type on white" into composed exhibits. The variety is *distributed*, not front/back-loaded. Still monochrome, still restrained, still one illustrative hand.

*(If §24 resolves to (b): the eagle is the Hero/site anchor, the mid-page stays type, and the rhythm keeps a softer middle — move 26(i) still helps. If (c): no anchor; the page is the honest flat ceiling and §§25, 27 still raise the two exhibits' craft within one medium.)*

---

## 30. DS gaps, motion/a11y, residual risk, and handoff

### DS gap — the artifact exhibit (the one real flag)

`@poukai-inc/ui@2.17.0` ships **no code-block / syntax / artifact primitive** (confirmed against the constitution: there is `Text`, `Section`, mono tokens, recessed surfaces, but no `<CodeBlock>`/`<Pre>`/syntax-display organism). So the artifact exhibit is **either** (1) a **site-side element** — a real `<pre>`/`<code>` block, mono, monochrome, on a DS recessed surface (`Section`/`--surface-section`), styled with the published tokens; **or** (2) a small **DS proposal** for a first-class `CodeExhibit`/`Artifact` primitive if Arian judges code/artifact display will recur across pages (it plausibly will — `/why-ai`, a future case-study or `/roles` page could reuse it).

**My read:** ship it **site-side first** (option 1) — it is a real `<pre><code>` on a recessed surface with mono tokens and the hairline discipline; no DS dependency, buildable now, no invented component. **Flag to maintainers (awareness, not a blocker):** if a code/artifact exhibit recurs, promote it to a DS `Artifact`/`CodeExhibit` primitive then — do not invent the API now. Syntax *coloring* must respect the floor: monochrome (weight/italic/opacity for emphasis), **the accent never at rest** — no rainbow syntax theme; the artifact reads as engraved code, not an IDE screenshot. This is a real, named DS gap with a clean site-side answer; per my lane I flag it, I do not author the DS API.

### Motion & accessibility (binding, carried forward — D-25)

- **The artifact is static.** No typing animation, no cursor blink, no scroll-draw. It may take the section's standard one-shot scroll-reveal (fade + 8–12px rise, once, 600ms, as a unit). It is real code, presented; it does not *perform*.
- **Accessibility:** the artifact is **meaningful content if it carries real information** — render as real, selectable `<pre><code>` text (not an image of code), readable by screen readers, sufficient contrast (monochrome on the recessed surface must clear WCAG AA), keyboard-irrelevant (non-interactive) but legible. If any part is decorative chrome, that part is `aria-hidden` — but the floor says no decorative chrome, so in practice the whole block is real text.
- **Why-us display number, asymmetric disciplines, Convert close, leaned-in glyph:** all inherit the existing grammar — one-shot reveals, reduced-motion collapses to the static finished state, axe 0, WCAG AA, accent never at rest. The glyph keeps its existing CSS signal-pulse only (no new motion from "leaning in" — it's scale/craft, not animation).
- **Hard, no exception:** every motion collapses under `prefers-reduced-motion: reduce`; axe 0 violations; WCAG AA; keyboard-correct.

### Residual risk for Arian

- **The artifact must be real, and that's a sourcing dependency.** Like the cited metric, option (a) is contingent on real material existing. If pouk.ai cannot publish a genuine fragment (confidentiality, or nothing representative is shippable), (a) cannot ship honestly — fall to (b) or (c). **Do not let "we need a visual" pressure a fabricated artifact onto the page.** Worth confirming up front that a real, publishable fragment exists before committing to (a).
- **Code on a marketing home page is a craft risk.** Done well it's the most on-brand object possible; done carelessly it reads as a dev-tool landing page. The mitigation is *minimalism and realness* — one small fragment, beautifully set, not a wall of code. The designer carries this; flagging that the bar is high.
- **If (b) or (c):** the middle stays softer than ideal (only 26(i) applies); the page is more "clean and credible" than "memorable." Honest and acceptable if that's Arian's chosen ceiling.

### Handoff (on Arian's sign-off of §24)

- **→ PM:** re-spec the home IA to insert the artifact-exhibit beat (between Statement and Why-us, if (a)); change the Why-us AC from "comparison table" to "exhibit — display-scale cited number + 2-axis honest cut + sparse dividers"; change What-we-do from "3-equal grid" to "asymmetric (lead + two)"; add the Convert "designed typographic close" intent; add the "lean into the glyph" craft note; add the **binding artifact-realness AC** (real syntax + real content, no fabrication, or the beat doesn't ship) alongside the existing binding-citation AC. Flag the decision-record/masterplan notes through the normal path; do not edit them directly.
- **→ Content:** source/confirm the **real artifact material** (the one true new dependency for (a)) and re-confirm the MIT NANDA deficit citation. Tighten the comparison to fewer words / bigger-type register.
- **→ Designer:** compose the artifact exhibit (minimal, mono, monochrome, recessed — the highest-craft object on the page); recast Why-us as the number-led exhibit; make What-we-do asymmetric; craft the Convert close; lean the glyph bigger/finer within its locked content. Hold the merge-guard on the two bands (A2 §16).
- **→ DS maintainers:** awareness-only flag — a recurring `Artifact`/`CodeExhibit` primitive if code display spreads beyond home; not needed now (site-side `<pre><code>` is correct for one page).

§24 is the proposal for Arian. §§25–28 are actionable on his nod. I did not write specs, compositions, copy, or code; I set the structural call, the beat intents, the media palette, the rhythm, and the one real DS flag.
