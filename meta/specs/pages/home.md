# Spec: Home

**Route**: `/`
**Status**: In review (re-specced to 5-beat IA per direction A2; awaiting Arian approval)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-19
**Masterplan reference**: §4.1 (repo/site layout), §2A (decision authority). See §9 — masterplan home/IA language is stale doorway-thesis and needs Arian's ratification.
**Upstream direction**: [`meta/direction/home-direction.md`](../../direction/home-direction.md) — "Raise the Ceiling" **+ Amendment A2 (FINAL/LOCKED, 2026-06-19)**, APPROVED by Arian. **A2 governs where it conflicts with the original body.** §12.A2 records the 5 LOCKED decisions this spec builds on; the §12 (pre-A2) decisions carry forward except where A2 supersedes.
**A3 LAYER (2026-06-20, APPROVED — see [`home-amendment-artifact-anchor.md`](./home-amendment-artifact-anchor.md), In review)**: direction Amendment A3 (§24 = option (a), the real artifact exhibit) re-specs this page from the A2 **5-beat** IA to a **6-beat** IA by inserting a real engineering-artifact exhibit (a non-type visual object) between Statement and Why-us, recasting Why-us (table→number-led exhibit), What-we-do (3-equal grid→asymmetric), and Convert (plain band→designed typographic close), and leaning into the Hero glyph (craft only). **A3 governs where it conflicts with this spec; this spec remains authoritative for everything A3 does not delta.** A3 carries forward the A2 Method drop, closed eagle, two-band rhythm + merge-guard, cited-metric mandate + binding citation (source = MIT NANDA), and the Hero glyph content lock. New binding dependency: the artifact must be REAL (no fake → no artifact beat).
**Binding decision**: [D-25](../../decisions/2026-06-16-revoke-zero-js.md) — client JS permitted; Lighthouse + HTML weight advisory; **WCAG AA + axe-0-violations + `prefers-reduced-motion` are HARD, merge-blocking**.
**Carried-forward locks**: D-11 (lede hand-off shape), D-12 (status line byte-identical), D-13 (funnel nav order), D-17 (Pouākai eagle stays CLOSED — confirmed by A2 OQ-A2-2), contact-flow FS-CF-1 (`mailto:` primary + booking secondary), feather-motif-policy.

> **REVISION 2026-06-19 — 5-beat IA (supersedes this spec's own prior 6-beat revision).** Direction Amendment A2 (LOCKED) is the delta. The two structural changes vs. the version that shipped:
> 1. **The "How we work" / Method beat is REMOVED** — its IA region, its `howWeWork` content block, and its schema block all come out. This is the redundancy fix (A2 §14): the Hero's "The Signal" glyph already states the observe→ship pipeline; the Method list was the weaker second telling. The glyph stays in the Hero, unchanged, as the page's sole pipeline statement.
> 2. **Surface rhythm goes from one band to TWO recessed bands** (Why us + Convert) with a merge-guard, AND the **Why us beat gains a cited deficit/deployment-gap mark** at its head (A2 §§16–17). The citation is binding (real, attributable figure, or the mark does not ship).
> The Hero (glyph included), Statement, What we do (Disciplines), the honesty posture, the anti-slop floor, and the motion/a11y grammar all carry forward. **No feather colophon** (removed earlier at Arian's request — A2 §12.A2; do NOT re-add). **No eagle** (D-17 closed).
>
> **This spec supersedes** the prior doorway-era `home.md` content and consolidates/retires the three prior amendments. On approval, annotate them superseded — retained for record, not for build:
> - `home-amendment-destination.md` (Approved) — proof-on-home re-open is the baseline here; its section set is replaced by this spec's 5-beat arc.
> - `home-amendment-raise-the-ceiling.md` (PROPOSAL) — RR-1/RR-2 (display Hero + proportional CTA) carried forward; its "no Statement section" ruling was already superseded.
> - `home-amendment-illustration-and-density.md` (Approved) — Hero density/illustration ACs non-load-bearing here (display Hero per RR-1; eagle deferred per D-17). **The feather colophon greenlit in direction §12 decision 5 was subsequently removed at Arian's request (A2 §12.A2) and does NOT ship.**

---

## 1. Purpose

`/` is the one page everyone sees, and it must prove competence before it asks for anything. The approved direction retires the doorway thesis (direction §12 decision 1): `/` is no longer a hand-off whose only job is to route to `/why-ai`. It is now a **front room** — a page a visitor can read top to bottom and leave thinking *"this person clearly ships; I want them on my hardest problem."* It solves the site's weakest axis (PROOF/DIFFERENTIATION): the prior doorway asserted that pouk.ai ships and keeps things running three different ways and demonstrated none of it. This spec replaces that flat "tell" with a sequence that *shows the work* — the three things pouk.ai actually delivers and an honest, cited comparison against the alternatives — while keeping the Hero (with its "The Signal" pipeline glyph) and Statement that already clear the bar. The page gets more substantial without getting more salesy, because every beat is a system or a fact pouk.ai can stand behind today, never a promise. The A2 revision tightens this further by **subtraction**: the redundant Method beat (which re-explained the Hero glyph in weaker prose) is cut, and the page's evidence weight is concentrated into the Why-us exhibit — a single recessed band carrying one real cited figure plus an honest four-way comparison.

## 2. Audience

- **Primary**: An engineering leader, founder, or operator at a growing company evaluating whether to hire a technical partner for AI work. They are skeptical of AI advisory, they read commit messages and architecture docs for a living, and assertion-without-artifact reads to them as marketing. They need to see *the deliverables and an honest, evidenced trade-off* before they will email — and they will not click into a sub-page to find out whether pouk.ai is credible. (The operating pipeline is communicated wordlessly by the Hero glyph; this audience reads a diagram faster than a prose method list.)
- **Secondary**: (a) A returning prospect / referrer / past contact doing a fast "is this alive and still reachable" check — the Hero + status must still answer that in under 20 seconds; the longer page must not slow them down. (b) A casual referral arrival from LinkedIn/X who should leave able to describe pouk.ai in one sentence ("they're the engineers who ship the AI work and keep it running, and they'll tell you when you don't need them").

## 3. Success criteria

- **Behavior**: A first-time visitor lands on the display Hero (whose glyph already states the pipeline), keeps scrolling, and the scroll is rewarded with a short confident argument — substance (the disciplines), then a framed, cited, honest comparison — ending in a conversion affordance. They convert on `/` itself (open `mailto:hello@pouk.ai` or click the booking link) **or** enter the funnel with higher conviction than the doorway produced. A returning visitor still gets the fast re-orientation (Hero + status) without friction.
- **Signal** (qualitative pre-analytics): direct visitors scroll past the fold (the doorway never invited a scroll); `mailto:` / booking clicks originate from `/` itself, not only downstream; referrers forward the link saying it reads *more finished, not more salesy*. When analytics arrive: scroll-depth past the Hero, on-`/` conversion clicks, and the `/`→`/why-ai` vs `/`→deeper split.
- **Failure modes** (any one means the page is broken even if it renders):
  - **"It became a generic SaaS landing page."** The single worst outcome. If `/` grows a fake logo wall, testimonial cards, an animated stat counter, a "Get started free" pattern, or adjective-soup feature cards, the brand's whole "not another AI advisor" position dies on its own front page.
  - **"The proof is fabricated."** Any invented metric, placeholder quote, or borrowed logo. The proof's entire value is that it is *true*. **The Why-us deficit metric is the live instance of this floor**: if the number is invented, rounded beyond what the source supports, cited to an unnamed "industry" source, or a home-specific metric pouk.ai made up, the page is broken. A fabricated artifact is worse than no artifact — and the mark is *conditional on a real citation existing* (see §5, §8).
  - **"The comparison is dishonest."** The Why-us table where pouk.ai wins every row reads as marketing and kills the credibility the candor was meant to earn (direction §12 decision 3 guardrail).
  - **"The two bands merged into one slab."** If the recessed Why-us band and the recessed Convert band read as a single continuous grey block, the surface rhythm collapses into a generic "dark CTA footer region" and the Why-us exhibit loses its framing. The bands must read as two distinct surface events (see §4, §8).
  - **"The destination buries the conversion."** A conversion pushed below scrolls of prose with no closing affordance.
  - **"Restraint reversed into volume."** The page got more substantial by getting louder/denser instead of by composition and interval. The strike must come from scale, air, and one stated conviction — never from quantity of sections.

## 4. Information architecture

Render order. The narrative arc is **ANNOUNCE → ASSERT → WHAT WE DO → WHY US → CONVERT** — five beats (A2 §12.A2 / §15). DS components are those the director named in direction §4/§9/§21; all ship at `@poukai-inc/ui@2.17.0` unless flagged `<NEEDS:>`. The designer owns the composition recipe (band placement, spacing, exact primitive variants, the deficit-mark composition); this spec fixes section jobs, order, surface rhythm, and the binding constraints.

1. **`SiteShell` chrome** — top nav (funnel order, D-13) + hairline footer (copyright + `mailto:` + booking per contact-flow footer tier). Unchanged.

2. **Hero — ANNOUNCE** — answers "what is this, is it alive, can I reach them" in the first screen; carries the single `<h1>`, the one `StatusBadge` (`status="available"`), the dual CTA (`mailto:` primary + booking secondary), the D-11 lede hand-off, and "The Signal" pipeline glyph (`aria-hidden`) in the right column. **Copy and glyph are LOCKED — do not touch.** The glyph is the page's *sole* pipeline statement (A2 §14). DS: `Hero size="display" entrance="stagger"`, `StatusBadge`, two `Button`s (`asChild`), inline `<a>`. **No feather colophon** (removed at Arian's request — A2 §12.A2; do not re-add). **No eagle** (D-17 closed). On `--bg`. No DS gap.

3. **Statement — ASSERT** — the page's one raised-voice beat; the single felt conviction at editorial scale, said once, so the page reads as authored, not as a list. **Unchanged.** DS: `Statement` (`hairline={false}`, `as="p"`), the only `Statement` on the page, emits no heading. On `--bg`. No DS gap.

4. **What we do — THE DISCIPLINES** (`<h2>` #1) — makes the three deliverables concrete and scannable: **builds / automations / advisory** — the substance behind the tagline, so an operator can see which maps to their problem. On `--bg`. DS: `FeatureGrid columns={3}` + three `FeatureCard`s, **disciplined** (anti-slop guardrail, §5). Fallback if the grid reads generic in review: `Section` + `MetaList` or three `Principle` blocks in an editorial stack. No DS gap. **Note (A2 §15 lever):** if composition review shows the Statement→Disciplines middle sagging (two rests in a row now that Method is gone), this beat is *allowed to carry more typographic presence* — larger discipline names, hairline structure, mono numerals — to bridge the gap. Composition-only; no new illustration vocabulary, no band here.

5. **Why us — THE HONEST TRADE-OFF + CITED DEFICIT MARK** (`<h2>` #2) — the page's richest below-Hero object and its one quantitative moment. **Recessed onto a `--surface-section` band** (band #1 of 2). At its head: a **single monochrome deficit / deployment-gap mark + a real, attributable cited figure** (binding citation — see §5, §8); below it, the honest four-way comparison (DIY / Agency / In-house / pouk.ai) where **pouk.ai does not win every row** (direction §12 decision 3), ending in the inline `/why-ai` link. DS: a recessed `Section` (site-side `--surface-section` wrapper, or future `Section surface="recessed"` — A2 §21) containing a site-side semantic `<table>` + a site-side inline-SVG deficit mark + a visible mono micro-caption citation. `<NEEDS: confirm the comparison degrades to a readable stacked layout at ~375px without forced horizontal scroll for a 4-column honest comparison>` — fallback is `Section` + `Pull` (sans) lifting the one-line honest verdict. See §9. (The DS `ComparisonTable` organism is a pricing-matrix shape with no documented mobile stack; a site-side semantic table is the correct vehicle — composition §2 Beat 5.)

6. **Convert — THE EXIT** (`<h2>` #3) — ends on a conversion: restate availability, offer both paths, no scroll-back to the Hero. **Recessed `--surface-section` band** (band #2 of 2). DS: `CTASection surface="recessed"`, two `Button`s (`mailto:` primary + booking secondary). No DS gap.

7. **`SiteShell` footer** — page terminator; global reachability. Unchanged.

**Hierarchy discipline (R-026):** exactly one `<h1>` (Hero). Statement emits no heading. **Exactly three `<h2>`s** — What we do, Why us, Convert — in that DOM order, all at one level, no skips (the Method `<h2>` is gone). The FeatureCards may emit `<h3>`s beneath the What-we-do `<h2>`; the comparison's column/row heads are table semantics (`<th>`), **not** document headings. Exactly **two** `--surface-section` bands (Why us + Convert — see surface-rhythm rule below). Exactly **one** `StatusBadge` (Hero). Exactly **one** `Statement`.

**Surface rhythm (the hard restraint floor — supersedes the prior "exactly one band" rule):** the page carries **exactly TWO recessed `--surface-section` bands — Why us (Beat 5) and Convert (Beat 6) — and no others** (A2 §16). Hero, Statement, and What we do all sit on `--bg`. The two bands are adjacent in the IA and **must never read as a single merged slab** (§3 failure mode): separation comes from full `--space-16` air between them, the Convert band's own `--hairline` top rule, and clearly different content registers (a framed quantitative+comparison exhibit vs. a CTA). **No third band, ever** — a fourth beat wanting a band means the page is becoming a module stack; refuse it. **Merge-guard / Why-us-only fallback:** if at composition review the two recessed beats still read as one continuous slab, **Why us keeps the band and Convert drops to `--bg`** (total stays at most two; the page keeps its mid-late surface event regardless). The designer makes this adjacency call at composition time (§9).

## 5. Content requirements

Outcomes per section. No final copy — `Draft:` examples anchor direction only; Arian approves all copy. The binding posture across every beat: **categorical-only / no fabricated proof** — the moment a section needs a number or a name pouk.ai does not have today, it does not ship.

- **Hero (ANNOUNCE) — LOCKED.** Copy and "The Signal" glyph carry forward verbatim. Status line byte-identical (D-12). Lede ends in the D-11 integrated hand-off to `/why-ai`. No new copy. (The five-stage pipeline lives only here, as the wordless glyph; there is no prose method beat — A2 §14.)
- **Statement (ASSERT) — unchanged.** The one conviction line, said once, no CTA/stat/attribution. `Draft (current, ships as-is unless Arian revises):` "Most teams can build now. Few can ship it and keep it running."
- **What we do (3 discipline one-liners).** Each of builds / automations / advisory must deliver: the discipline name + one plain, specific, *true* sentence of what it actually is (not adjectives), + an optional quiet `→` link only if a real sub-page exists. The outcome: an operator can self-route to the one that maps to their problem. **Anti-slop guardrail (binding):** no decorative/vibe icons, no three-word feature headlines, no gradient cards, no equal-weight filler. If a card can't say something true and specific, it doesn't ship.
- **Why us — the cited deficit metric (BINDING citation requirement).** At the head of the Why-us exhibit, one quantitative line + monochrome deficit/deployment-gap mark. Content must achieve: a single **real, attributable, published figure** about the AI deployment / project-failure gap — *named source + year* (same provenance bar as the `/why-ai` figures, e.g. Gartner 2026, PwC 2026), rendered with a **visible micro-caption** in the mono register that states the source and year (the credibility *is* the visible citation — **not** a hidden footnote, not a tooltip). The figure must frame *why the honest comparison matters* (the gap between building and shipping/keeping-it-running). **The citation is binding and not waivable:** **no real attributable figure → the deficit mark and the metric line do NOT ship, and the Why-us exhibit is the comparison table alone.** Fabrication, rounding beyond what the source supports, uncited "industry" numbers, or a home-invented metric are all banned (they trip the §3 "the proof is fabricated" failure mode, which is worse than no metric). **This is the one true content dependency of the revision** — content sources the figure, or the mark is dropped (Arian + content own closing this; §9).
- **Why us (honest comparison rows).** Columns: DIY / Agency / In-house / pouk.ai. 2–3 rows, each framed as an honest trade-off (e.g. a "right when…" row and a "the risk…" row). Each row must achieve: a candid statement of when each option is genuinely the right call, where **pouk.ai does not win every row** — at least one cell must concede a competitor is the better choice in some situation. The **honesty constraint is load-bearing**: a table that makes the alternatives look stupid fails the section. Ends with the inline `/why-ai` link to the full comparison; this beat is a *compression* of `/why-ai`'s `vs-alternatives`, never a reproduction. `Draft (shape only):` pouk.ai row "right when: the integration is the hard part and it has to keep running after the demo"; DIY row "right when: the scope is small and bounded and you have the in-house time." Content owns final rows and the honesty audit.
- **Convert (CONVERT) — reuse existing register.** Restate availability in the existing status-line register (no new urgency, no scarcity), dual CTA per contact-flow. `mailto:` is the primary label (the email address *is* the label); booking is the quiet secondary. Recommend reusing the existing availability framing over a distinct second scarcity signal.

## 6. Content data shape

`src/content/home.json`, validated by `src/content/_schemas/home.ts` (R-076 + R-074 HARD). The `meta`, `hero`, `statement`, `disciplines`, `closingCta`, and `jsonLd` blocks carry forward. **Two changes vs. the shipped schema:** (a) the `howWeWork` block is **removed** entirely (Method beat dropped — A2 §14); (b) the `comparison` block **gains an optional `metric` sub-block** (the cited deficit mark — A2 §17). The shape below is the contract `home.ts` must validate — field names are the recommendation; the engineer/DS finalize exact prop mapping at composition time.

```json
{
  "meta": { "title": "string", "description": "string ≤160", "canonical": "url" },

  "hero": {
    "status": "string — byte-identical to current status line (D-12)",
    "title": { "before": "string", "em": "string — italic AI", "after": "string" },
    "lede": {
      "sentence1": "string", "sentence2": "string",
      "anchor": { "text": "string", "href": "string — /why-ai (D-11)" }
    },
    "cta": { "label": "string — mailto label", "href": "string — mailto:" },
    "bookingLabel": "string — secondary booking line"
  },

  "statement": { "text": "string — one conviction line, no attribution" },

  "disciplines": {
    "heading": "string — page's first <h2> (e.g. 'What we do')",
    "items": [
      {
        "id": "string — slug: builds|automations|advisory",
        "name": "string — discipline name",
        "description": "string — one true, specific sentence (no adjective soup)",
        "link": { "text": "string", "href": "string" } // OPTIONAL — only if a real sub-page exists
      }
    ]
    // constraint: items array length === 3
  },

  "comparison": {
    "heading": "string — page's second <h2> (e.g. 'Why pouk.ai')",

    // OPTIONAL cited deficit mark at the head of the exhibit (A2 §17).
    // The WHOLE metric object is OMITTED if content cannot source a real attributable
    // figure → the mark does not ship and the comparison table stands alone (binding, §5/§8).
    // When present, ALL of value + label + source + year are REQUIRED (no partial citation).
    "metric": {                       // OPTIONAL — omit entirely if no real citation
      "value": "string — the figure as it renders, e.g. '95%' / '88%' (real, source-supported)",
      "label": "string — what the figure measures, e.g. 'of enterprise AI pilots never reach production'",
      "source": "string — named, attributable publisher, e.g. 'Gartner' / 'PwC' (NO 'industry'/anon)",
      "year": "string|number — publication year, e.g. 2026"
      // micro-caption renders source + year VISIBLY (mono register), not a hidden footnote.
      // constraint: if `metric` is present, value/label/source/year are ALL required and non-empty.
    },

    "columns": ["string — 'DIY'", "string — 'Agency'", "string — 'In-house'", "string — 'pouk.ai'"],
    "rows": [
      {
        "label": "string — row dimension, e.g. 'Right when…' / 'The risk…'",
        "cells": ["string — DIY cell", "string — Agency cell", "string — In-house cell", "string — pouk.ai cell"]
      }
    ],
    // constraint: 2–3 rows; each row.cells length === columns length;
    // honesty: NOT every pouk.ai cell may be the winning cell (Arian/content-verified, not schema-enforceable)
    "link": { "text": "string", "href": "string — /why-ai" }
  },

  "closingCta": {
    "heading": "string — page's third <h2>",
    "body": "string OPTIONAL — availability restate, no new urgency",
    "ctaLabel": "string", "ctaHref": "string — mailto:",
    "bookingLabel": "string — secondary booking"
  },

  "jsonLd": { "...Organization JSON-LD unchanged (R-037 + masterplan §6.2)" }
}
```

Notes for the schema author (`src/content/_schemas/home.ts` changes — engineer's lane, against this shape):
- **Remove** the entire `howWeWork` block from the schema (the `z.object({ heading, stages: z.array(...).length(5) })` — Method beat dropped).
- `disciplines.items` length 3 with an id enum (unchanged).
- `comparison.rows` each `cells.length === columns.length`; 2–3 rows (unchanged).
- **Add** `comparison.metric` as an **optional** object; when present, `value`, `label`, `source`, `year` are **all required and non-empty** (`z.object({...}).optional()` — an all-or-nothing citation; a partial/empty citation must fail validation). This is the schema-side half of the binding-citation AC: the *presence* of a complete citation is enforceable; the *truthfulness/attributability* of the figure is human-verified (content draft `Approved` + Arian), not Zod-enforceable.
- The honesty constraint on `comparison.rows` is human-verified (content draft `Approved` + Arian), not Zod-enforceable.

## 7. User flow

- **Entry**: direct (`pouk.ai` typed); LinkedIn/X profile or post; founder DM / email signature; search; nav from another route via `SiteShell` wordmark.
- **Read path**: status (alive?) + "The Signal" glyph (how they work, wordlessly) → display tagline (`<h1>`) → lede + D-11 hand-off → Statement (the turn) → WHAT WE DO (which discipline is mine) → WHY US (the cited gap + honest trade-off — do I even need them, and is the problem real) → CONVERT (the ask). The page lowers the bar to emailing by answering "do they do my thing, and are they any good" *before* the ask. The two recessed bands (Why us + Convert) accelerate the eye into the page's evidence peak and then the conversion.
- **Exit / conversion**: primary is `mailto:hello@pouk.ai`; booking is the quiet secondary, appearing exactly twice (Hero + CONVERT). Two routes into `/why-ai` (the D-11 lede hand-off + the WHY US link) are acceptable on a longer page. No form, no widget, no third CTA register, no urgency/scarcity.

## 8. Acceptance criteria

Engineer-checkable. D-25 governs: a11y + reduced-motion are HARD; Lighthouse/HTML-weight advisory. Do not re-introduce zero-JS / Lighthouse-as-gate language.

- [ ] Route renders at `/` with the §4 IA regions present and in order: SiteShell → Hero → Statement → What we do → Why us → Convert → footer. **No "How we work" / Method region renders anywhere** (removed — A2 §14). Verifier: DOM review.
- [ ] **Heading hierarchy (R-026):** exactly one `<h1>` (Hero title); **exactly three `<h2>`s**, in DOM order — **What we do, Why us, Convert**; no skipped levels (any `<h3>` only directly under a `<h2>`). Statement emits no heading element. The comparison's column/row labels are `<th>` table semantics, not document headings. Verifier: heading-order audit of built HTML (must count exactly 1×h1 + 3×h2).
- [ ] **Exactly TWO `--surface-section` recessed bands on the page — Why us and Convert — and no others.** Hero, Statement, and What we do all render on `--bg`. No third band renders (binding floor — A2 §16). Verifier: built-CSS review counting `--surface-section` regions (must equal exactly 2, unless the Why-us-only fallback below is taken).
- [ ] **The two bands do not read as one merged slab.** At composition/visual review the Why-us band and the Convert band are visually distinct surface events (separated by `--space-16` air, the Convert band's `--hairline` top rule, and different content registers). **Merge-guard / Why-us-only fallback:** if review finds they merge into a single continuous slab, Convert drops to `--bg` and Why us keeps the band (total then = exactly 1 band, at Why us; Convert never keeps a band while Why us drops). Verifier: visual review at desktop + mobile; record which configuration shipped (two-band or Why-us-only).
- [ ] Exactly one `StatusBadge` (Hero, `status="available"`), exactly one `Statement` molecule (ASSERT, no CTA/stat/attribution), exactly one `<h1>`.
- [ ] Hero renders at `size="display" entrance="stagger"` with the dual CTA (`mailto:` primary + booking secondary). Hero verbal content + "The Signal" glyph (right column, `aria-hidden`, with its labels/caption/CSS signal-pulse) are byte-identical to the locked content (copy + glyph LOCKED). Status line byte-identical (D-12). Lede ends in the D-11 `/why-ai` hand-off. Verifier: DOM + asset diff.
- [ ] **No feather colophon and no eagle render in the Hero (or anywhere on `/`).** The feather colophon greenlit in direction §12 decision 5 was removed at Arian's request (A2 §12.A2) and must not be re-added; D-17 keeps the eagle closed. The Hero right column is "The Signal" glyph only. Verifier: DOM + asset review.
- [ ] What we do renders exactly three disciplines (builds / automations / advisory), each a name + one sentence; no decorative icons, no three-word headlines, no gradient cards (anti-slop guardrail). Verifier: DOM + visual review.
- [ ] **Why us — cited deficit metric (binding citation):** EITHER (a) the deficit/deployment-gap mark renders at the head of the Why-us exhibit as a single monochrome (`currentColor`) inline-SVG mark (one filled-vs-empty form, not a chart/dashboard/multi-bar/axes/legend) **with a visible mono-register micro-caption stating a named source + year** (not a hidden footnote / tooltip), and `comparison.metric` is present and complete in `home.json`; **OR** (b) `comparison.metric` is omitted and **no mark renders at all** — the comparison table stands alone. There is no third state. **No uncited, anonymous-"industry", fabricated, or unsupported-rounding number renders — ever.** Verifier: DOM + content-data check + the content draft's sourced-citation audit (Arian-verified).
- [ ] **Why us comparison** renders columns DIY / Agency / In-house / pouk.ai and 2–3 honest rows, ending in the inline `/why-ai` link; the section is a compression of `/why-ai`'s vs-alternatives, not a reproduction (materially shorter + links out). Verifier: DOM + content review.
- [ ] **Why us comparison is a semantic `<table>`** with `<th scope="col">` on the four alternatives and `<th scope="row">` (or per-cell `headers`) on the row dimensions, and a `<caption>` or accessible name. It must **degrade with NO horizontal scroll at 375px** (reflow to a readable stacked-by-alternative layout). axe-clean (`th-has-data-cells`, `td-headers-attr`/`scope-attr-valid`), WCAG AA. **Pull-form fallback:** if it cannot degrade cleanly at 375px, fall back to `Section` + `Pull` (sans) lifting the one-line honest verdict (flag to designer, §9). Verifier: 375px capture (no horizontal scroll) + axe run + table-semantics review.
- [ ] **No fabricated proof renders**: no logo wall / "trusted by" strip, no `Quote`/`TestimonialBlock`, no animated stat counter / number count-up, no `Stat` band, no invented or uncited metrics (the §5 Why-us figure is the only number and is bound by the citation AC above), no newsletter, no pricing tiers, no FAQ. Verifier: DOM review against this list.
- [ ] **Scroll-reveal grammar**: the below-hero beats (Statement, What we do, Why us) each reveal once on scroll with a single consistent fade + 8–12px rise, ~600ms (`--dur-slow`), `--easing`; no parallax, no staggered children, no count-ups (including the deficit figure — it renders at final value), no horizontal-scroll sections, no hover-move beyond DS-native link/button affordances, no draw-on of the glyph. The Hero `entrance="stagger"` and the Signal-glyph CSS pulse stay and are the only other motion. The deficit mark may use an optional CSS-only render-time fill (0→final) that collapses to the full static mark under reduced-motion; no scroll-driven JS on it. (Convert band reveal is optional per composition; default static — designer's call.) Verifier: motion review.
- [ ] **`prefers-reduced-motion: reduce` collapses ALL motion** (scroll-reveal, Hero stagger, Signal pulse, the deficit-mark fill if used) to a fully static, fully legible page: glyph present and pulse-off, both bands present, deficit mark at full fill, figure at final value, nothing animating (HARD, D-25). Verifier: reduced-motion capture.
- [ ] **axe-core: 0 violations on `/`; WCAG AA met** (HARD, D-25). Every interactive surface keyboard-accessible and screen-reader-correct; the comparison table passes table-a11y rules. Verifier: axe run + keyboard pass.
- [ ] Content data conforms to the §6 schema; `home.json` validates against `home.ts`; **the `howWeWork` block is removed from both `home.json` and `home.ts`**; the legacy `differentiation` block remains removed; `comparison.metric` is present-and-complete or absent (no partial citation).
- [ ] `<title>`, `<meta description>`, OG, and JSON-LD render with `/`-appropriate values (canonical `https://pouk.ai/`).
- [ ] Lighthouse mobile + HTML weight tracked as advisory only (not a merge gate, D-25).
- [ ] §5 content outcomes met by shipped copy, evidenced by the `/` content draft carrying `status: Approved` (the tracked-approval artifact, PM DoD §7) — including (a) the honesty audit on the Why-us rows and (b) the **sourced-citation audit on the Why-us figure** (a named, attributable, real source + year exists, OR the metric is dropped) — both Arian-verified.

## 9. Open questions / dependencies

- **DS `<NEEDS:>` #1 (Method/Stepper) — RETIRED.** The Method beat is removed (A2 §14), so the `StepsSection`/`Stepper`-at-n=5 question no longer exists. No action.
- **DS `<NEEDS:>` #2 — comparison mobile degradation at ~375px.** Confirm the site-side semantic comparison `<table>` degrades to a readable stacked-by-alternative layout without forced horizontal scroll at 375px. If it cannot, fall back to `Section` + `Pull` (sans) lifting the one-line honest verdict. (The DS `ComparisonTable` organism is a pricing-matrix shape with no documented mobile stack — composition §2 Beat 5 resolved this to a site-side table; not a DS gap to escalate unless the honest-comparison pattern recurs across pages — A2 §21.) Designer/engineer confirm; not blocking the spec.
- **DS awareness-only (A2 §21) — recessed non-CTA `Section`.** The Why-us band needs a recessed surface; `CTASection surface="recessed"` already carries Convert, but Why-us is a `Section`, not a CTA. A site-side `--surface-section` wrapper is fine for this one page. If recessed *non-CTA* sections recur, a `Section surface="recessed"` enhancement would be a clean DS addition — **do not escalate now**; Arian decides if/when. PM does not author the DS proposal.
- **Content drafts needing `Approved` before `Built`** (route to `pouk-ai-content` on spec approval): the three discipline one-liners; the Why-us comparison rows (with the honesty audit); **the Why-us cited deficit figure + its source/year (the one true dependency — content sources a real attributable figure or the mark is dropped, §5)**; the Convert availability line. The Statement and Hero copy carry forward. **The five `howWeWork` stage descriptions are retired** (no longer needed on home — A2 §20). No section reaches `Built` on unapproved copy (PM DoD §7).
- **Composition dependency** (`pouk-ai-designer`): revise `meta/compositions/pages/home.md` from the 6-beat recipe into the **5-beat** recipe — **remove the How-we-work/Method beat**; place the **two recessed bands** (Why us + Convert) with the merge-guard (Why-us-only fallback if they slab); compose the **Why-us exhibit** as the richest below-Hero object (deficit mark + visible mono citation caption + the comparison framed as one exhibit); the disciplines vehicle (grid vs editorial stack) and the comparison vehicle (table vs Pull per `<NEEDS:>` #2); the scroll-reveal grammar; and hold the **Disciplines-weight lever** in reserve if the Statement→Disciplines middle sags at review (composition only — no new illustration vocabulary). **No feather colophon.** Includes a 13–14" + 375px capture confirming the page reads as restrained-destination (not SaaS-landing) and the two bands do not merge.
- **Schema dependency** (engineer's lane, against §6): `src/content/_schemas/home.ts` **drops the `howWeWork` block** and **adds the optional all-or-nothing `comparison.metric` object** (value/label/source/year all required when present); `disciplines` / `comparison` / `differentiation`-removal otherwise as already shipped. `src/content/home.json` drops its `howWeWork` block and adds `comparison.metric` (or omits it pending the citation).
- **Stale masterplan / cross-spec language — flag for Arian, do NOT edit.** (a) `meta/masterplan.md` and `flows/visitor-to-conversation.md` still carry doorway-thesis framing contradicted by the approved direction (direction §12 decision 1) — `flows/visitor-to-conversation.md` needs a one-line note that `/` now carries on-page proof + a conversion exit; any masterplan cross-reference implying `/` is a hand-off needs the same. (b) **The prior restraint floor "exactly one `--surface-section` band on home" is now "exactly two recessed bands (Why us + Convert)" (A2 §16)** — wherever the masterplan or spec set states the one-band rule for home, it must be updated. **Flagged for Arian to ratify through the normal path; PM does not edit the masterplan or decision records.**
- **Cross-spec supersession annotations owed on approval** (PM): mark `home-amendment-destination.md`, `home-amendment-raise-the-ceiling.md`, and `home-amendment-illustration-and-density.md` as superseded/consolidated by this spec; add the `flows/visitor-to-conversation.md` one-line note above.
- **Decision-record candidates — FLAGGED for Arian to ratify (PM does not author the record).** Two A2 changes are decision-worthy and should be ratified (Arian authors a dated decision entry, or confirms direction §12.A2 is sufficient authority): **(1) the surface-rhythm floor change for home — one band → two recessed bands** (Why us + Convert, with merge-guard); **(2) the removal of the "How we work" / Method beat** from the home IA (the redundancy-by-subtraction fix). The current standing authority for both is direction Amendment A2 §12.A2 (LOCKED, APPROVED by Arian). The proof-on-home reframe + the original five §12 decisions remain the prior authority.

## 10. Out of scope

- Adding any beat beyond the five in §4 (a roles preview, an engagements/ladder preview, a founder/about preview, a FAQ on `/`, a stats band, **and specifically NOT re-adding the removed "How we work" / Method beat** — the glyph is the sole pipeline statement; if the method ever needs prose, it is a `/why-ai` or future page, not a home beat, A2 §14/§22). Each duplicates a downstream page or breaks the minimum-set restraint floor; reconsider only on Arian's explicit ask.
- Adding a **third `--surface-section` band** (the floor is exactly two — Why us + Convert; A2 §16). Recessing Hero, Statement, or What we do.
- Any GATED proof move — `Quote`/`TestimonialBlock`, a logo wall, a case-study teaser, a real-metric stat band — until real permissioned evidence exists, and even then a *wall* never ships on the front page.
- Reproducing a downstream page's body on `/` (the Why-us beat compresses-and-links `/why-ai`; it does not reproduce the full vs-alternatives beats).
- Touching the Hero copy, "The Signal" glyph (right column, kept unchanged), D-11, D-12, D-13, or the contact-flow CTA contract.
- The Pouākai eagle illustration (D-17 stays CLOSED); the feather colophon (removed at Arian's request — A2 §12.A2; not reintroduced); any figurative element beyond the Signal glyph + the single Why-us deficit mark; Māori ornament; the literal eagle.
- The deficit mark as anything other than a single monochrome filled-vs-empty form: no dashboard, no multi-bar chart, no axes/legend, no second metric, no count-up of the figure.
- Color, new design tokens, a theme toggle / dark mode, parallax or any motion beyond the §8 scroll-reveal grammar (+ the optional CSS-only deficit-mark fill), per-visitor/per-referrer personalization, A/B copy variants.
- Authoring final copy, composition recipes, or DS component APIs (content / designer / DS lanes).
- The OG card content for `/` (governed by `features/og-cards.md`).
- Editing the masterplan or any decision record (flagged in §9 for Arian).
