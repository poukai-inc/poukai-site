---
route: /
status: In review
version: 3.0
lastUpdated: 2026-06-19
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/home.md (Approved 2026-06-19 — the 5-beat IA revision; supersedes the 6-beat destination spec)
upstreamDirection: meta/direction/home-direction.md ("Raise the Ceiling" + Amendment A2, APPROVED 2026-06-19 — A2 governs where it conflicts)
compositionReference: meta/compositions/pages/home.md (Approved 2026-06-19 — currently the 6-beat recipe; designer revises to 5-beat per spec §9 after this draft lands)
relatedDrafts:
  - meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md (Approved — the MIT NANDA 95% figure reused at the Why-us head is sourced and provenance-vetted here)
  - meta/content/drafts/features/vs-alternatives.md (Approved — the full /why-ai comparison this draft's table compresses; the per-alternative honest positions are sourced from it)
  - meta/content/drafts/features/contact-flow.md (Approved — governs the dual-CTA copy register)
  - src/content/why-ai.json (the live /why-ai provenance bar: Gartner 2026, PwC 2026, CT Labs 2026 — the citation standard this draft's Why-us figure matches)
constraints:
  - ZERO em-dashes (—) and zero en-dash separators in all visible copy. Periods, commas, or hyphens only. (HOME-cycle house style; the /why-ai source uses em-dashes as ITS house style — converted to commas/periods here.)
  - Categorical-only / no fabricated proof. The ONE number on the page is the cited Why-us deficit figure; it carries a named source + year or it does not ship (spec §5, §3 "the proof is fabricated" failure mode).
  - One copy register across all beats, matching the Approved /home.md Hero + Statement voice.
revisionHistory:
  - version: 1.0
    date: 2026-05-16
    summary: Ratification-after-the-fact of shipped doorway /. R05/R14/R27/R32 closed.
  - version: 1.1
    date: 2026-05-18
    summary: Atomic migration with /about ship. Doorway IA still in force.
  - version: 2.0
    date: 2026-06-19
    summary: 6-beat destination (ANNOUNCE → ASSERT → HOW WE WORK → WHAT WE DO → WHY US → CONVERT). Added the method, disciplines, and comparison beats.
  - version: 3.0
    date: 2026-06-19
    driver: meta/specs/pages/home.md (re-specced to the 5-beat IA per direction Amendment A2, APPROVED 2026-06-19).
    summary: >
      Re-specced from 6 beats to 5. TWO structural changes: (1) the "How we work" / Method
      beat is REMOVED entirely (the Hero "The Signal" glyph is now the page's sole pipeline
      statement — A2 §14); the five howWeWork stage descriptions are RETIRED from home.
      (2) the Why us beat gains a CITED DEFICIT METRIC at its head (A2 §17) — a single real,
      attributable figure about the AI deployment / project-failure gap, rendered with a
      visible mono micro-caption. Status reset to In review.
    changes:
      - REMOVED — How we work beat + the five stage descriptions (retired from home; glyph carries the pipeline wordlessly — A2 §14).
      - NEW — Why us deficit metric: the MIT NANDA "GenAI Divide" 95% figure (real, attributable, source + year), reused from the Approved /writing essay (compression, not invention). Frames WHY building ≠ shipping.
      - CARRIED — What we do (3 disciplines), Why us comparison (4 cols, 3 rows, pouk.ai does NOT win every row), Convert. Re-confirmed against the 5-beat arc; lightly re-anchored.
      - LOCKED forward — Hero (status D-12, title, lede with D-11 hand-off, CTA), Statement, footer, page meta.
decisionsHonoured:
  - D-11 (integrated lede-extension link to /why-ai) — Hero lede unchanged; the hand-off survives. Why us adds a SECOND /why-ai route, acceptable on a longer page (spec §7).
  - D-12 (status line byte-identical) — status badge unchanged.
  - D-13 (funnel nav order) — chrome unchanged.
  - D-17 (Pouākai eagle stays CLOSED) — no eagle authored or implied.
  - contact-flow FS-CF-1 (mailto primary + booking secondary) — held in Hero + Convert.
---

# Content: Home (`/`) — 5-beat revision

**Route**: `/`
**Status**: In review (5-beat revision; awaiting Arian's word-by-word approval + the §6/§7 sign-offs)
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-19 (v3.0)
**Governing spec**: `meta/specs/pages/home.md` §5 (content requirements), §6 (content-data shape) — the 5-beat IA revision (2026-06-19)
**Upstream direction**: `meta/direction/home-direction.md` Amendment A2 §§14–17 (the LOCKED 5-beat decisions)
**Composition reference**: `meta/compositions/pages/home.md` (Approved as the 6-beat recipe; designer revises to 5 beats per spec §9 against these real lengths).

This revision turns the Approved 6-beat destination home (`v2.0`) into the **5-beat** home (spec, 2026-06-19). Two structural moves drive the change, both LOCKED upstream (A2 §12.A2):

1. **The "How we work" / Method beat is GONE.** The Hero's "The Signal" glyph already states the observe → ship pipeline; the prose method list was the weaker second telling. It is removed, and the five stage descriptions are **retired from home** (A2 §14). No method copy is authored here.
2. **The Why us beat gains a cited deficit metric at its head** (A2 §17): a single real, attributable figure about the AI deployment / project-failure gap, with a visible mono-register citation. The citation is **binding** — a real source or the mark does not ship.

The thesis is unchanged (direction §0): **the page should read like a senior engineer's commit message, not a pitch deck.** Spare, exact, true.

---

## What is LOCKED (carried forward verbatim — do NOT rewrite)

| Beat | Locked element | Source of record |
|---|---|---|
| Hero | Status line (D-12, byte-identical), title (italic `AI`), lede sentences 1–2, D-11 `/why-ai` hand-off, CTA label + href, booking secondary | `home.json` `hero` + `HomeHero.tsx` |
| Statement | The one conviction line | `home.json` `statement` |
| Footer | Copyright + `mailto:` line | `SiteShell` chrome |
| Page meta | `<title>`, `<meta description>`, OG, canonical, JSON-LD | `home.json` `meta` + `jsonLd` |

The Hero "The Signal" glyph is the page's sole pipeline statement (A2 §14). It is NOT content's lane (a site-side SVG); reproduced nowhere in copy.

## What is NEW / CHANGED in this revision

- **Removed**: the How we work beat and its five stage descriptions (no copy here; retired — A2 §14).
- **New**: the Why us cited deficit metric (the one number on the page) + its visible citation caption.
- **Carried + re-confirmed**: What we do (3 disciplines), Why us comparison (4 columns, 3 rows, pouk.ai does not win every row), Convert. Unchanged in copy from v2.0 except the Statement→What-we-do adjacency (Statement now precedes What we do directly, no Method between).

---

## 1. Drafting notes

- **Audience read** (spec §2): an engineering leader, founder, or operator who reads commit messages and architecture docs for a living. Assertion without artifact reads to them as marketing. They will not click into a sub-page to find out whether pouk.ai is credible. The below-Hero beats must *show the work* on `/` itself: the actual deliverables, one honest number about why this is hard, and an honest trade-off. The pipeline is communicated wordlessly by the Hero glyph (this audience reads a diagram faster than a prose method list) — so no method prose is needed or wanted.
- **Outcome read** (spec §5):
  - **What we do** — builds / automations / advisory, each a name + one true, specific sentence (not adjectives). An operator self-routes to the one that maps to their problem. Anti-slop guardrail binding.
  - **Why us — deficit metric** — one real, attributable, published figure about the deployment gap (building ≠ shipping/keeping-running), named source + year, rendered as a visible mono micro-caption. Frames why the honest comparison matters. Binding: real citation, or the mark drops.
  - **Why us — comparison** — a 4-column honest comparison (DIY / Agency / In-house / pouk.ai), 2-3 rows, where pouk.ai does **not** win every row. The honesty is load-bearing. Compresses-and-links `/why-ai`, never reproduces it.
  - **Convert** — restate availability in the existing status register, dual CTA, no new urgency or scarcity.
- **Voice anchor**: agent §4.1 (direct — lead with the noun, one idea per sentence), §4.2 (operator-first — the reader can build; respect it), §4.4 (no marketing-speak — the section-specific drift to guard is the "generic SaaS landing page" register), §4.6 (concrete artifacts over abstractions, implied confidence over claimed). The register target is the Approved Hero lede and the Approved `vs-alternatives.md` candor posture. One voice across every beat.
- **Assumptions** (flag for Arian to accept or override):
  - **A1 — zero em-dashes across all new copy.** The `/why-ai` source uses em-dashes as ITS house style; `/` is the zero-dash surface. Where a `/why-ai` source line used a dash, I use a period or comma here.
  - **A2 — the Why-us figure is the MIT NANDA "GenAI Divide" 95%, reused from the Approved /writing essay.** This is the one true dependency of the revision. It is real, attributable (MIT NANDA, *The GenAI Divide: State of AI in Business 2025*), already provenance-vetted in this repo (`meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md`, Approved), and it is the single most on-point figure for this beat: it measures the *deployment/integration gap* specifically (95% of enterprise generative-AI pilots delivered no measurable P&L impact, because the barrier is integration and learning, not model quality). Reusing it is **compression, not invention** — exactly the spec's instruction. See §2 Why us + the sourced-citation audit in §6. **No rounding, no anonymizing**: it renders as `95%`, sourced `MIT NANDA, 2025`. (Considered and not chosen: the /why-ai page's Gartner 2026 "85% of AI projects fail to meet business goals" and "12-18% capture meaningful ROI", and PwC 2026 "15% positive profitability impact". All are real and on the /why-ai provenance bar, but they measure *ROI/business-goal* failure broadly; the MIT figure is tighter to THIS beat's argument — building vs. shipping/keeping-running — because its own published cause is the integration gap. Listed as live fallbacks in §5 if Arian prefers the Gartner figure for cross-page consistency with /why-ai.)
  - **A3 — the Why us table compresses `vs-alternatives.md`, it does not paraphrase it.** Each pouk.ai cell is a short categorical clause drawn from the Approved per-alternative positions; the *full* "right when / pouk.ai when" beats stay on `/why-ai`. The table is materially shorter (cells, not paragraphs) and links out.
  - **A4 — the honesty constraint is satisfied by the "Right when" row + the pouk.ai "The risk" cell.** In "Right when", the DIY / Agency / In-house cells each name a real situation where that option is genuinely the better call; in "The risk", the pouk.ai cell concedes its own downside. See §6 honesty audit.
  - **A5 — Convert reuses the existing availability register, no new scarcity.** The status line `Currently taking conversations for Q3.` is the page's one availability signal. The Convert beat restates availability in the closing register without a second scarcity cue (spec §5 + contact-flow). Recommend reusing the v2.0-Approved closing pair verbatim.
  - **A6 — heading levels (5-beat).** One `<h1>` (Hero, unchanged). Statement emits no heading. **Exactly three `<h2>`s**: What we do, Why us, Convert (the Method `<h2>` is gone). The disciplines may emit `<h3>` card titles under their `<h2>`; descends cleanly, no skip (spec §4 hierarchy discipline; R-026). The deficit-metric value/caption is NOT a heading — it is a figure + mono caption inside the Why-us section. The comparison's column/row heads are `<th>` table semantics, not document headings.
  - **A7 — the deficit figure renders at its final value, no count-up.** The number is `95%` on first paint (spec §8 motion AC bans count-ups; the optional CSS-only render-time mark fill is a designer/engineer concern, not a copy concern). The citation caption is visible mono text, never a tooltip or footnote (A2 §17).

---

## 2. Copy

Render order (spec §4): Hero (LOCKED) → Statement (LOCKED) → **What we do** → **Why us** (deficit metric + comparison, recessed band) → **Convert** (recessed band) → footer (LOCKED). New/changed beats labelled with the spec §5 outcome they satisfy and the §6 field they fill.

### Block: Hero (ANNOUNCE) — LOCKED, carried forward verbatim

No change. Reproduced for the designer's copy-length reference only; the binding source is `home.json` + `HomeHero.tsx`.

- **Status badge**: `Currently taking conversations for Q3.` (D-12, byte-identical, ≤10-word StatusBadge cap)
- **Title**: `Technical consulting for teams shipping with ` *`AI`* `.` (italic `AI`, single `<h1>`)
- **Lede sentence 1**: `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.`
- **Lede sentence 2**: `Most AI projects fail to deliver.`
- **Lede sentence 3** (D-11 hand-off): `[Here's why →](/why-ai)`
- **CTA label / href**: `hello@pouk.ai` → `mailto:hello@pouk.ai`
- **Booking secondary**: `Or grab a time →`
- **Glyph**: "The Signal" pipeline glyph (site-side SVG, `aria-hidden`) — the page's sole pipeline statement (A2 §14). Not content's lane; no copy.

### Block: Statement (ASSERT) — LOCKED, carried forward verbatim

The page's one raised-voice beat. No heading, no CTA, no stat, no attribution. Now sits directly before What we do (no Method beat between).

- **Statement**: `Most teams can build now. Few can ship it and keep it running.`

*(Default: keep, per the LOCKED instruction. I do not propose a sharpening — the line is the page's hinge, it earns its place, and it sets up both the deficit figure ("few can keep it running" / "95% of pilots show no P&L impact") and the comparison ("the integration is the hard part"). Touching it would weaken those two downstream callbacks. Held verbatim.)*

### Block: What we do — THE DISCIPLINES (spec §5 "What we do"; §6 `disciplines`) — `<h2>` #1

The three deliverables made concrete and scannable. Each: discipline name + one true, specific sentence of what it actually is. No adjective soup, no three-word headlines, no decorative icons. Anti-slop guardrail binding. (Carried verbatim from v2.0 — the copy already cleared review; the only change is this is now the page's FIRST `<h2>`, sitting directly under the Statement.)

- **Heading (H2)**: `What we do`

| `id` | `name` | `description` | `link` |
|---|---|---|---|
| `builds` | `Custom AI builds` | `We build the AI system your problem actually needs, wired into the tools and data you already run on.` | none (no sub-page exists) |
| `automations` | `Automations` | `We turn the manual, repeated work between your systems into something that runs without a person in the loop.` | none |
| `advisory` | `Advisory` | `We help you decide what to build, what to skip, and where AI is the wrong tool, before you spend on it.` | none |

*(Each sentence states what the discipline IS in work terms, not adjectives. `builds` carries the integration thesis ("wired into the tools and data you already run on") so the card rhymes with the comparison and the deficit figure's cause. `automations` names the actual unit ("the manual, repeated work between your systems") and the actual outcome ("runs without a person in the loop"). `advisory` carries the candor ("what to skip", "where AI is the wrong tool") so the deliverable that is hardest to make concrete reads as honest counsel, not a retainer upsell. No `link` on any card today; the optional `→` ships only when a real sub-page exists (spec §6). Alternatives for the `advisory` line in §5.)*

**Anti-slop note for the designer**: no vibe icons, no "Powerful / Scalable / Fast" register, no gradient/bordered cards, no equal-weight filler. If a card can't say something true and specific, it doesn't ship (spec §5, direction §4 guardrail). All three say something true and specific.

### Block: Why us — THE CITED DEFICIT METRIC + THE HONEST TRADE-OFF (spec §5 "Why us"; §6 `comparison`) — `<h2>` #2 · recessed band #1

The page's richest below-Hero object and its one quantitative moment. Recessed onto a `--surface-section` band. At its head: **the cited deficit metric** (the one number on the page, with a visible mono citation). Below it: **the honest four-way comparison** where pouk.ai does not win every row. Ends in the inline `/why-ai` link. A *compression* of `vs-alternatives.md`, not a reproduction.

- **Heading (H2)**: `Why pouk.ai`

#### The deficit metric (the cited mark at the head of the exhibit) — `comparison.metric`

The one number on the page. It frames *why building ≠ shipping*: most pilots are built and demoed, then never deliver, because the integration is where they stall. Real, attributable, named source + year. Renders as a single monochrome filled-vs-empty mark with the figure, a one-line label, and a **visible mono micro-caption** stating the source and year (not a footnote, not a tooltip).

- **`value`**: `95%`
- **`label`**: `of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model.`
- **`source`**: `MIT NANDA`
- **`year`**: `2025`
- **Rendered micro-caption** (mono register, visible): `MIT NANDA, The GenAI Divide, 2025`

*(The figure is the MIT NANDA "GenAI Divide" 95% (State of AI in Business 2025): 95% of enterprise generative-AI pilots delivered no measurable P&L impact, and the report's own stated cause is the integration and learning gap, not model quality. It is real, attributable, and already provenance-vetted in this repo's Approved /writing essay (`why-ai-pilots-stall-at-integration.md`) — reusing it on home is compression, not invention. The `label` compresses the essay's longer caption to one home-scale line and keeps the load-bearing clause ("The gap is integration, not the model.") because that single clause is the whole reason the comparison below matters: every alternative is being weighed on the wrong axis if you think the model is the hard part. Zero rounding ("95%", as published), named source (never "industry"), year present. Sourced-citation audit in §6. If Arian prefers a /why-ai-page-consistent figure instead, the Gartner/PwC fallbacks are in §5 — but I recommend MIT NANDA as the tightest fit for THIS beat.)*

#### The honest comparison — `comparison.columns` / `comparison.rows`

- **Lead-in** (one short line before the table): `You have four honest options. Here's when each one is right.`
- **Columns**: `DIY` · `Agency` · `In-house` · `pouk.ai`

| Row label | DIY | Agency | In-house | pouk.ai |
|---|---|---|---|---|
| `Right when` | `The scope is small and bounded and you have the time to build it.` | `The work is a known commodity and the value is in volume.` | `AI is core to your product and the work is permanent.` | `The integration is the hard part and it has to keep running after the demo.` |
| `The risk` | `It stalls at the integration, not the build.` | `Breadth over depth; generic where you needed specific.` | `Takes time to hire for, and may sit idle once the build is done.` | `More than you need for work you could ship yourself.` |
| `You own it after` | `Yes, you built it.` | `Often stays with the agency.` | `Yes, it's your team.` | `Yes, we hand it over for your team to run.` |

- **Link text**: `See when to hire us, and when not to →`
- **Link href**: `/why-ai`

*(Three rows, four columns, `cells.length === columns.length` per row (spec §6 constraint). The honesty is in two places. (1) The **Right when** row: each of DIY / Agency / In-house names a real, common situation where that option is genuinely the right call, in the alternative's own favor, sourced from the Approved `vs-alternatives.md` positions. (2) The **The risk** row concedes pouk.ai's own downside out loud: "More than you need for work you could ship yourself." pouk.ai does NOT win that cell, by design. The **You own it after** row is the one place pouk.ai, DIY, and in-house all answer "yes"; only the agency column reads as a drawback, stated as a fact, not a sneer. Note the deficit figure's cause ("the gap is integration") is paid off immediately by the DIY "The risk" cell ("It stalls at the integration, not the build.") and the pouk.ai "Right when" cell ("the integration is the hard part") — the number and the table argue the same point. The link text mirrors the Approved `/why-ai` heading "When to hire pouk.ai, and when not to" (the em-dash there becomes a comma here, zero-dash house style). Honesty audit in §6. Alternatives for the row count in §5.)*

### Block: Convert — THE EXIT (spec §5 "Convert"; §6 `closingCta`) — `<h2>` #3 · recessed band #2

A `--surface-section` band (band #2 of 2). Restate availability in the existing register, dual CTA, no new urgency or scarcity. Carried verbatim from the v2.0-Approved close (it was already Approved for this exact slot); re-confirmed against the 5-beat arc.

- **Heading (H2)**: `If the hard part is shipping it, let's talk.`
- **Body (availability restate, optional sub-line)**: `Taking on a few engagements this quarter.`
- **Primary CTA label / href**: `hello@pouk.ai` → `mailto:hello@pouk.ai`
- **Booking secondary**: `Or grab a time →` → `https://cal.pouk.ai`

*(The heading callbacks the Statement ("ship it and keep it running"), the deficit figure ("the gap is integration"), and the Why us pouk.ai column ("the integration is the hard part"), so the page closes its own loop before the ask. "Let's talk" is operator-plain, not "Get started" or "Book a demo" (the SaaS register, the named failure mode). The "if" keeps the invitation honest. The availability sub-line restates the single Q3 signal in the closing voice without re-stamping the exact status string and without a fabricated slot count ("a few", categorical). CTAs are the Approved contact-flow pair; mailto stays primary, FS-CF-1. Alternatives for the heading in §5.)*

**Merge-guard note for the designer**: the Why us band (band #1) and this Convert band (band #2) are adjacent in the 5-beat IA. The copy registers are deliberately distinct (a framed quantitative + comparison exhibit vs. a short conversion ask) to help them read as two surface events, not one slab (spec §4 surface rhythm, §8 AC; A2 §16). If they still merge at composition review, the spec's Why-us-only fallback drops Convert to `--bg` (Convert never keeps the band while Why us drops). No copy depends on the band count.

### Block: footer — LOCKED, carried forward verbatim

- **Copy**: `© 2026 pouk.ai · hello@pouk.ai` (the `hello@pouk.ai` substring is a `mailto:` link). No change.

---

## 3. Page-level SEO copy

The page meta is **unchanged** by this revision. The 5-beat sections are body sections on the existing `/` route; they carry no `<title>`, meta, or OG of their own. The `<title>`, `<meta description>`, OG, canonical, and JSON-LD carry forward as Approved and shipping in `home.json` `meta` (spec §6: the `meta` block carries forward).

- **`<title>`**: `pouk.ai — Technical consulting for teams shipping with AI` (56 chars, unchanged)
- **`<meta name="description">`**: `Custom AI builds, automations, and advisory for teams that need to ship. Currently taking conversations for Q3.` (113 chars, unchanged)
- **OG title / OG description**: match `<title>` / `<meta description>` (unchanged)
- **Canonical**: `https://pouk.ai/` (unchanged)
- **Heading hierarchy** (5-beat): exactly one `<h1>` (Hero tagline). Statement emits no heading. **Exactly three `<h2>`s** in DOM order: What we do, Why us, Convert (the Method `<h2>` is removed). The disciplines render three `<h3>` card titles (FeatureCard `titleAs="h3"`) under the What we do `<h2>` — descends cleanly H1 → H2 → H3, no skip (spec §4 hierarchy discipline; R-026 HARD). The deficit-metric value/label/caption are NOT headings (a figure + mono caption inside the Why-us section). The comparison rows and column heads are table semantics (`<th>`), not document headings. No level is skipped.

*(Note: the v2.0 four-`<h2>` shape is superseded by this three-`<h2>` shape — the How we work `<h2>` is gone with the Method beat. The page now carries exactly three `<h2>`s by design, per the spec's 5-beat hierarchy discipline.)*

---

## 4. Voice rationale

One clause per significant line so a future revision argues against a reason, not a vibe.

**What we do — the three disciplines** (carried from v2.0; rationale stands):

- **`Custom AI builds` — "We build the AI system your problem actually needs, wired into the tools and data you already run on."** "Your problem actually needs" rejects off-the-shelf framing; "wired into the tools and data you already run on" is the integration thesis, the same point the deficit figure's cause and the comparison both make. Specific noun (system), specific verb (build, wire), zero adjectives.
- **`Automations` — "We turn the manual, repeated work between your systems into something that runs without a person in the loop."** Names the actual unit ("manual, repeated work between your systems") and outcome ("runs without a person in the loop"). Avoids "workflow optimization", "streamline", "efficiency gains".
- **`Advisory` — "We help you decide what to build, what to skip, and where AI is the wrong tool, before you spend on it."** The hardest discipline to make concrete without reading as a billable-hours upsell. The fix is candor: "what to skip" and "where AI is the wrong tool" are lines a retainer-seller would never write, which is exactly why they read as honest counsel. "Before you spend on it" frames advisory as the thing that saves money.

**Why us — the deficit metric:**

- **`value` "95%" + `label` "of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model."** The number is the one real proof on the page, and it does the framing job the spec demands: it states the deployment gap as a fact (most pilots are built and never deliver) and names the cause (integration, not the model) in the same breath as the discipline cards and the comparison. "Enterprise AI pilots" is the audience's own word for the thing that dies in production; "no measurable business impact" is the honest compression of "no measurable P&L impact" for a mixed reader (P&L kept in the source caption, generalized in the label). "The gap is integration, not the model." is the load-bearing clause: it tells the reader the comparison below is about the right axis. No adjective, no alarm word ("shocking", "staggering") — the number alarms on its own; editorializing it would read as marketing.
- **`source` "MIT NANDA" + `year` "2025" + caption "MIT NANDA, The GenAI Divide, 2025".** Named institution, named report, year. The credibility IS the visible caption (A2 §17), in the mono "reference" register that matches the /why-ai stats provenance bar. Never "industry research", never an unnamed source — that would trip the §3 fabrication floor.

**Why us — the comparison** (carried from v2.0; rationale stands):

- **Lead-in "You have four honest options. Here's when each one is right."** "Honest options" and "when each one is right" prime the two-sided read before the first cell, so the table scans as an assessment, not a scorecard. "Four" includes pouk.ai as one option among four, not the answer the other three lose to.
- **Right when row** — sourced directly from the Approved `vs-alternatives.md` positions, one clause each. DIY "small and bounded and you have the time" (the most generous concession); Agency "known commodity, value is in volume"; In-house "core to your product and permanent". The pouk.ai cell ("the integration is the hard part and it has to keep running after the demo") is the through-line `vs-alternatives.md` closes on, compressed. Under each alternative's stated condition, that alternative wins, not pouk.ai.
- **The risk row** — concedes pouk.ai's own downside ("More than you need for work you could ship yourself"), the single most important cell for credibility: a table where the brand's own column has a real risk reads as honest; one where it doesn't reads as marketing (spec §3 failure mode). DIY's risk ("stalls at the integration, not the build") is the deficit figure's cause restated as the DIY risk rather than a pouk.ai brag — the number and the table reinforce each other. Agency and in-house risks are real and stated without sneer.
- **You own it after row** — the ownership question an engineering leader actually asks. pouk.ai, in-house, and DIY all answer "yes"; only agency reads as a drawback, stated as a fact ("Often stays with the agency."), not a pejorative. This row is where pouk.ai deliberately *ties* rather than wins, reinforcing the candor and inheriting the `vs-alternatives.md` / `/onboarding` "we hand it over, no lock-in" posture.
- **Link "See when to hire us, and when not to →"** — pays off the `/why-ai` heading "When to hire pouk.ai, and when not to". "And when not to" is the candor promise that makes the click feel like reading an honest assessment, not entering a funnel.

**Convert:**

- **Heading "If the hard part is shipping it, let's talk."** Callbacks the Statement, the deficit figure, and the Why us pouk.ai column; the "if" keeps the invitation honest. "Let's talk" is operator-plain, not the SaaS "Get started" register.
- **Availability "Taking on a few engagements this quarter."** Restates the single Q3 signal in the closing voice, categorical ("a few", no fabricated count), no urgency, no "limited", no "!". Restatement, not a second scarcity cue.
- **CTAs "hello@pouk.ai" + "Or grab a time →"** — the Approved contact-flow pair, reused verbatim. mailto primary (FS-CF-1); booking the quiet secondary. The address is the label (operator-grade directness).

**No marketing-speak anywhere** — no "leverage", "seamlessly", "unlock", "empower", "transform", "solutions", "journey", "robust", "cutting-edge". Every line replaces tempting filler with a specific noun or verb. The banned list (agent §4.4) holds.

**One-register check**: all beats sit in the Approved Hero + Statement register, declarative, operator-first, category-honest. The disciplines define, the figure states a fact, the comparison concedes-then-claims, the close invites. No beat shifts into pitch.

---

## 5. Headline alternatives

High-stakes lines for the 5-beat revision: the **deficit figure** (the page's one number, and the binding dependency — alternatives are the *fallback figures* if Arian prefers cross-page consistency), the `advisory` discipline line, the Why us row count, and the Convert heading.

### Why us — the deficit figure (the binding citation; alternatives are real fallback figures, not invented variants)

| Option | Figure + caption | Rationale | Risk |
|---|---|---|---|
| Safest (cross-page consistent) | `85%` — `of AI projects fail to meet business goals.` · `Gartner, 2026` | Already the live `/why-ai` figure (`openingArgument.statsRow`); zero new sourcing; perfect provenance parity with the page the beat links to. | Measures business-goal failure broadly, not the deployment/integration gap specifically; the "why building ≠ shipping" framing is implicit, not stated by the source. |
| Sharpest (recommended) | `95%` — `of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model.` · `MIT NANDA, The GenAI Divide, 2025` | The tightest possible fit: the source's OWN stated cause is the integration gap, so the figure frames *why the honest comparison matters* directly. Already provenance-vetted in the Approved /writing essay (compression, not invention). | A different source than the /why-ai page body (MIT NANDA vs. Gartner) — though it IS the source of the Approved /writing essay, so it is on the repo's provenance bar. Slightly higher number than Gartner; both are real. |
| Weirdest | `12-18%` — `of companies deploying AI capture meaningful ROI. The rest are stuck before production.` · `Gartner, 2026` | Frames the gap from the success side (only the few cross it); the live `/why-ai` hero figure. | An inverse framing (success rate, not failure rate) reads less like a deficit/gap mark; the "stuck before production" clause stretches what Gartner's ROI figure literally says. Holstered. |

**Recommendation: Sharpest (MIT NANDA 95%).** It is the only one of the three whose *published cause* is the integration gap, which is exactly the "why building ≠ shipping/keeping-running" frame the spec requires at this beat's head. It is real, named, year-stamped, and already vetted in this repo. **If Arian prefers Gartner 85% for parity with the /why-ai page body, that is the clean fallback (Safest) and ships without further sourcing.** Both are honest; this is a fit-vs-parity call, Arian's to make (§7 Q2).

### What we do — `advisory` description

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `We advise on AI strategy, build-vs-buy, and where to start.` | Names the advisory surface clearly. | "AI strategy" is the exact phrase the audience distrusts; reads as deck-builder. Rejected. |
| Sharpest (recommended) | `We help you decide what to build, what to skip, and where AI is the wrong tool, before you spend on it.` | Candor makes the soft discipline read as honest counsel, not an upsell. | Longest of the three discipline lines; designer confirms card parity (§6 Flag 1). |
| Weirdest | `Sometimes the honest advice is don't build it. We'll tell you that.` | Maximum candor; the anti-pitch advisory line. | Two sentences for a card body; "don't build it" undersells on a card whose neighbors sell builds. Holstered. |

**Recommendation: Sharpest** (carried from v2.0).

### Why us — row count

| Option | Rows | Rationale | Risk |
|---|---|---|---|
| Safest | `Right when` + `The risk` (2 rows) | The spec's tightest shape; two clean honest dimensions. | Drops the ownership dimension; with the new deficit mark already adding density to the band, 2 rows keeps the exhibit lean. |
| Sharpest (recommended) | `Right when` + `The risk` + `You own it after` (3 rows) | Adds the ownership question (a real operator concern) and a third place pouk.ai deliberately ties rather than wins. | Three rows + the deficit mark is the densest the Why-us band gets; designer confirms it stacks cleanly at 375px AND doesn't crowd the mark (spec `<NEEDS:>` #2). |
| Weirdest | 4 rows incl. `When it breaks` | Most thorough; pure operator-register. | Exceeds the spec's 2-3 cap; over-dense beside the mark. Rejected (over cap). |

**Recommendation: Sharpest** (3 rows), within the 2-3 cap. **Drop to Safest (2 rows) if the deficit mark + 3-row table reads heavy in the recessed band** — the band now carries the mark too, which it did not in v2.0, so the 2-row option is a more live fallback this revision than last. Flagged for the designer (§6 Flag 2) and Arian (§7 Q3).

### Convert — heading

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Ready to talk?` | Shortest, zero risk. | Generic; loses the page-loop callback. |
| Sharpest (recommended) | `If the hard part is shipping it, let's talk.` | Callbacks the Statement, the deficit figure, and the Why us pouk.ai column; the "if" keeps it honest. | One beat longer than a bare CTA. |
| Weirdest | `You've seen the number. You know if this is your problem.` | High-conviction, trusts the reader; "the number" now literally callbacks the deficit mark above. | Assumes a full read; a touch knowing. Holstered (but note: this variant only works BECAUSE the deficit mark now exists — flagged as a live option if Arian wants the close to lean on the figure). |

**Recommendation: Sharpest** (carried from v2.0).

*(No alternatives for the CTA labels — `hello@pouk.ai` and `Or grab a time →` are Approved verbatim in `home.json` + `contact-flow.md`; reused, not re-opened. No alternatives for the Statement — LOCKED, kept verbatim per instruction.)*

---

## 6. Composition-fit flags

For the designer's 5-beat recipe pass (spec §9; the composition file currently carries the 6-beat recipe and must be revised).

- **Flag 1 — discipline card body parity** (carried from v2.0). The three discipline descriptions run ~18 / ~19 / ~20 words. `advisory` (Sharpest) is the longest. All three are single sentences, structurally parallel; the visual line-count may differ by one line at card width. Recommend holding all three; lengths are close. Trim candidate if forced: dropping "before you spend on it" from advisory (NOT recommended — it's the line that reframes advisory as saving money).
- **Flag 2 — the Why-us band now carries the deficit mark AND the comparison.** This is the biggest composition change vs. v2.0: the recessed band is no longer just a table, it is a framed exhibit (mark + caption at the head, then the table). Two implications for the designer: (a) the deficit mark must read as the *head* of the exhibit, not a competing second headline under the `<h2>` "Why pouk.ai"; (b) with the mark added, the 3-row table may make the band dense — if so, the §5 2-row fallback (`Right when` + `The risk`) is the lever, keeping the mark and trimming the table rather than the reverse (the mark is the new mandated element; the third table row is the discretionary one). The mark's caption is short (`MIT NANDA, The GenAI Divide, 2025`), so it adds little width; the value `95%` + one-line label is the visual weight.
- **Flag 3 — comparison at 4 columns × 3 rows on mobile** (carried from v2.0; spec `<NEEDS:>` #2). Confirm the comparison degrades to a stacked-by-alternative layout at ~375px without forced horizontal scroll. Cells are short (longest ~13 words), which helps. Fallback per the composition: a site-side responsive stack, or the `Pull` form. If the `Pull` form is taken, the `Pull` copy is the pouk.ai "Right when" cell expanded to a sentence: `pouk.ai is the right call when the integration is the hard part and it has to keep running after the demo.`
- **Flag 4 — exactly two bands (Why us + Convert), merge-guard.** New vs. v2.0 (which had one band at Convert). Why us is now recessed too. The two bands are adjacent; the copy registers are deliberately distinct (exhibit vs. CTA) to help them read as two surface events. If they merge at review, the spec's Why-us-only fallback drops Convert to `--bg`. No copy depends on the band count (spec §4 surface rhythm; A2 §16).
- **Flag 5 — second `/why-ai` route** (carried from v2.0). The Why us link is the page's second route into `/why-ai` (the first is the Hero D-11 hand-off). Spec §7 permits two on a longer page. Distinct anchor text (`Here's why →` vs `See when to hire us, and when not to →`). Confirmed.
- **Flag 6 — Convert availability sub-line as a quiet supporting line** (carried from v2.0). Confirm `Taking on a few engagements this quarter.` reads as a quiet sub-line under the Convert `<h2>`, not a competing second headline. If the stack feels heavy, the sub-line can drop (the Hero badge carries the single availability signal); the restate is the recommended default (spec §5).
- **Flag 7 — the deficit mark is a single monochrome filled-vs-empty form, not a chart.** Copy-side confirmation for the designer: the spec/direction bind the mark to one filled-vs-empty form (no dashboard, no multi-bar, no axes/legend, no count-up). My copy supplies exactly one figure (`95%`), one label, one caption — nothing that implies a second metric or a chart. No copy pushes toward a chart read.

### Sourced-citation audit — the Why-us deficit figure (spec §8 AC: Arian-verified, content-flagged)

**This is the one true dependency of the revision.** The binding test (spec §5, §8; A2 §17; failure mode §3 "the proof is fabricated"): a real, attributable, published figure with a named source + year, or the mark does not ship.

- **Figure**: `95%` of enterprise generative-AI pilots delivered no measurable P&L impact.
- **Source**: MIT NANDA (MIT Media Lab, Project NANDA), *The GenAI Divide: State of AI in Business 2025*.
- **Year**: 2025.
- **Provenance in this repo**: already sourced and Approved in `meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md` (the launch /writing essay), where it carries a `references[]` entry pointing to the canonical MIT NANDA page (`https://www.media.mit.edu/groups/nanda/overview/`). Reusing it here is **compression, not invention** — the spec's explicit instruction.
- **External corroboration**: widely reported (Fortune, Yahoo Finance, virtualizationreview.com) and traceable to the primary MIT NANDA report. The report's methodology (300 public AI deployments analyzed, ~150 leaders interviewed, ~150-350 surveyed) and its central finding ("Just 5% of integrated AI pilots are extracting millions in value, while the vast majority remain stuck with no measurable P&L impact") are the basis for the 95% figure. The report's own stated cause is the integration/learning gap, not model quality — which is precisely why this figure belongs at the head of THIS beat.
- **No fabrication / no rounding / no anonymizing**: renders as `95%` (as published), sourced `MIT NANDA, 2025` (named institution, never "industry"), year present. The `label` generalizes "P&L impact" to "business impact" for a mixed reader but keeps "P&L impact" in the source-faithful essay; the figure and source are unchanged.

**Verdict: a real, attributable figure exists and genuinely belongs at the head of the home Why-us beat. The mark SHIPS** (it does not drop). **Routes to Arian for the §8 sourced-citation sign-off**, with the one open choice being fit (MIT NANDA 95%, recommended) vs. /why-ai-page parity (Gartner 85%, the §5 Safest fallback). Either is honest and attributable; the mark ships under either.

### Honesty audit — Why us comparison (spec §8 AC: Arian-verified, content-flagged)

The load-bearing check (spec §3 "the comparison is dishonest" failure mode; A2 §17 / direction §12 decision 3). Walking each cell where pouk.ai does NOT win:

- **Right when / DIY** — "The scope is small and bounded and you have the time to build it." A genuine concession: it tells a capable reader to build it themselves under a real, common condition. pouk.ai does not win this cell. ✓
- **Right when / Agency** — "The work is a known commodity and the value is in volume." Genuine: an agency built for throughput is the better call for commodity volume work. pouk.ai does not win this cell. ✓
- **Right when / In-house** — "AI is core to your product and the work is permanent." Genuine: if AI is permanent and core, owning the capability beats renting it. pouk.ai does not win this cell. ✓
- **The risk / pouk.ai** — "More than you need for work you could ship yourself." pouk.ai's own column carries a real, stated downside: it concedes pouk.ai is sometimes the wrong call. ✓
- **You own it after / DIY + In-house** — both answer "Yes" alongside pouk.ai. pouk.ai ties rather than wins. ✓

**Verdict**: pouk.ai wins no row outright. The pouk.ai "The risk" cell is a real self-concession (work you could ship yourself). Every alternative is named at its genuine strength; the table makes none look stupid. The candor is the credential. **Routes to Arian for the §8 honesty sign-off.**

---

## 7. Open questions for Arian

Tight list, defaults proposed where reasonable.

- **Q1 — the deficit figure: confirm MIT NANDA 95% (recommended) or use Gartner 85% for /why-ai parity?** This is the one true dependency. Both are real, attributable, year-stamped, and on this repo's provenance bar (MIT NANDA is the source of the Approved /writing essay; Gartner 85% is the live /why-ai page figure). I recommend **MIT NANDA 95%** because its published cause IS the integration gap, so it frames "building ≠ shipping" directly — the exact job of this beat. Gartner 85% (the §5 Safest fallback) ships with zero new sourcing and perfect parity with the page the beat links to. **Default: MIT NANDA 95%.** Either ships the mark; this is fit-vs-parity, your call.
- **Q2 — the deficit `label` wording.** I generalized the source's "P&L impact" to "no measurable business impact" for a mixed reader, and kept the load-bearing clause "The gap is integration, not the model." Confirm, or restore "P&L impact" verbatim (more precise, slightly more finance-coded). Default: "business impact" in the label, "P&L" preserved in the source caption.
- **Q3 — Why us: 3 rows or 2?** Recommended: 3 rows (`Right when` / `The risk` / `You own it after`). The band now also carries the deficit mark, so if the exhibit reads heavy, drop to 2 rows (keep the mark, trim the third row — see §6 Flag 2). Both are spec-compliant (2-3 rows). Default: 3 rows, drop to 2 only if the composition crowds.
- **Q4 — Why us: comfortable shipping the three concession cells publicly?** Specifically telling readers DIY is right "when the scope is small and bounded and you have the time", and conceding pouk.ai is "More than you need for work you could ship yourself." This is the candor the section trades on (it matches the Approved `/why-ai` `vs-alternatives` posture), but it's a public positioning commitment. Confirm, or I soften specific cells.
- **Q5 — `advisory` discipline line.** Recommended: the candor version ("what to skip, and where AI is the wrong tool, before you spend on it"). Fallback names the surface plainly (§5 Safest). Default: the candor version.
- **Q6 — Convert beat: reuse the v2.0-Approved close verbatim?** Recommended: reuse (heading + availability sub-line + CTA pair were already Approved for this exact slot). Flagged only because the surrounding beats changed (Method removed, Why-us now banded). The copy still lands the close cleanly. Default: reuse verbatim.
- **Q7 — Statement: keep verbatim (default) or accept a sharpening?** Per the LOCKED instruction I default to keeping it. I do NOT propose a change — the line sets up both the deficit figure and the comparison, and is the page's hinge. Default: keep verbatim.

---

## 8. Out of scope

- **The Hero copy** (tagline, lede, D-11 hand-off, status badge, CTA) and the **Statement** — locked, carried forward verbatim, byte-identical (spec §5, §8). Not touched here.
- **The "How we work" / Method beat and its five stage descriptions** — REMOVED from home (A2 §14); retired, not authored here. The Hero glyph is the sole pipeline statement. If the method ever needs prose, it is a `/why-ai` or future page, not a home beat (spec §10).
- **The "The Signal" Hero glyph** — a site-side SVG, not content's lane; reproduced nowhere in copy.
- **The page `<title>` / meta / OG** — unchanged; carried forward (spec §6 `meta` block). Not re-drafted.
- **Reproducing `/why-ai`'s `vs-alternatives` or `openingArgument` stats block** — the Why us table compresses-and-links; the deficit metric is a SINGLE compressed figure, not the four-stat `statsRow` from /why-ai. The full comparison beats and the full stats block stay `/why-ai`'s job (spec §10).
- **Any GATED proof move** — no `Quote`, `TestimonialBlock`, logo wall, "trusted by" strip, case-study teaser, animated stat counter, or a second `Stat` band (spec §3, §8, §10). The deficit figure is the ONE number; no fabricated metrics, client names, or slot counts anywhere.
- **A roles preview, an engagements/ladder preview, a founder/about preview, a FAQ, or a pricing band on `/`** — out of scope per spec §10.
- **Composition** — band placement, the deficit-mark composition, FeatureGrid-vs-stack for the disciplines, table-vs-Pull for the comparison, the merge-guard call, the scroll-reveal grammar, the Disciplines-weight lever — `pouk-ai-designer`'s lane (flagged in §6).
- **The deficit-mark SVG geometry and the optional CSS-only render-time fill** — designer/engineer lane (the mark is a single monochrome filled-vs-empty form; content supplies the figure + label + caption only).
- **Wiring approved copy into `src/content/home.json` / `home.ts`, removing the `howWeWork` block, and adding the optional all-or-nothing `comparison.metric` object** — `pouk-ai-engineer` applies the copy + schema change after Arian flips status to `Approved`.
- **The booking URL value** — engineer's call (contact-flow §6); content owns the label, href is `https://cal.pouk.ai` (FS-CF-2).
- **The `/` OG card content** — governed separately by `features/og-cards.md`.
