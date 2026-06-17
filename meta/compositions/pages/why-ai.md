# Composition: Why AI

**Route**: `/why-ai`
**Status**: Approved (2026-06-16 — FULL 5-delta depth pass against the Approved amendment; implemented + reviewed). §7 open questions resolved by the shipped build: Q1 whereWorks.closing replaced with the approved handoff; Q2 single W-A fill band; Q3 discoveryIntro repositioned ahead of the questions blockquote. **Supersedes** the 2026-06-14 W-A draft of this file (which covered 4 deltas and predated the amendment's Approval + the vs-alternatives delta). Every clause of that draft that is not revised below carries forward in substance.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-16
**Governing spec**: `meta/specs/pages/why-ai-amendment-raise-the-ceiling.md` (Approved — all 5 deltas; §2 revised render order, §4 ACs) laid over the base `meta/specs/pages/why-ai.md` (Approved — authoritative for everything not delta'd). The 2026-06-14 draft's "no PM spec exists" note is now stale — the amendment is the canonical spec.
**Content draft**: `meta/content/drafts/features/vs-alternatives.md` (Approved 2026-06-16) — the vs-alternatives copy is final-track. All other page copy is the shipped `src/content/why-ai.json` (unchanged by this composition).
**Current build ratified**: `src/pages/why-ai.astro` (decisions D-01..D-05, OMC-V1/V4/V5/V6/V7). This composition carries forward every shipped decision and adds the five depth/differentiation events.
**Reads on**: `meta/assessments/creative-exploration.md` §2 (Direction W-A), `meta/assessments/ds-capability-vs-usage.md` #2/#3/#4 (the organisms ranked for this page), `meta/assessments/sales-content-gaps.md` §4 #2 (vs-alternatives), `meta/assessments/imagery-illustration-direction.md` §2 (`/why-ai` stays type-only).
**DS version targeted**: `@poukai-inc/ui@2.17.0` (`meta/ds-snapshot/llms-full.txt` is the binding reference).

> **Superseded by the 2026-06-16 JS revocation (D-25, `meta/decisions/2026-06-16-revoke-zero-js.md`).** Every clause asserting "Motion: None / no scroll reveal / IntersectionObserver = JS, breaks R-079" or invoking the zero-JS contract (the per-section Motion notes, the §"Fires never (locked out)" `client:*`/R-079 prohibition, the static-shell-only note) is no longer binding as a *contract*. Client JS, islands, and scroll-triggered motion are now permitted. The DS-owned `prefers-reduced-motion` collapse and axe accessibility remain binding. Static rendering may still be the designer's chosen default — but it is no longer mandated. Clauses left in place pending revision.

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The hand-rolled `.stats-row` opener becomes `<StatsSection fill dividers>`** (amendment §4.2). The current build wraps four bare `<Stat>` atoms in `<div class="stats-row">`. `StatsSection` (Section + StatList) owns exactly this "by the numbers" moment, gives a region landmark, removes bespoke CSS, and paints the one recessed `--surface-section` band. Same `<Stat>` content.
- **A2 — The opening stats band carries FOUR stats, not three.** The shipped `openingArgument.statsRow` has four figures (12–18% / 85% / 15% / $300B). The creative exploration loosely said "3 headline stats"; the actual content is four, and `dividers` is correct at count ≥ 3. The band composes the four existing `<Stat>` atoms unchanged.
- **A3 — The five `<FailureMode>`s get wrapped in `<FailureModeList heading lede>`** (amendment §4.3). The current build hand-rolls a standalone `<h2>`+`<p>` and a flat `<div class="failure-modes-section">`. `FailureModeList` is the DS organism that owns that Section frame + named landmark. The five `FailureMode` children — `index`/`title`/anchors/per-mode stats/body — are unchanged.
- **A4 — One existing conviction sentence is promoted to a `<Statement hairline={false}>` at the pivot** (amendment §4.4). The line "The diagnosis comes before the build. That is the order pouk.ai works in." currently lives at the tail of `whereWorks.closing`; W-A promotes it to a once-per-page `<Statement>` (italic-serif, `--fs-statement`) at the failure-modes→leaders pivot. Placement change, not new copy. **Note this revises the 2026-06-14 draft's `hairline={true}`: house voice (home §2 Section 3, engagements §7.5) sets `hairline={false}` — a top rule reads as a section divider and starts a module stack; the bare turn keeps it editorial.** Final wording is Arian's (§7 Q1).
- **A5 — vs-alternatives renders in `<PrincipleList>` + three `<Principle>` molecules** (amendment §4.5 / §4.5a), inserted in the `whereWorks` block, on `--bg`, no figures, no band. Justified in §2 Section 11 and §6. Copy is the Approved `vs-alternatives.md` draft. NEW delta absent from the 2026-06-14 version.
- **A6 — `whereWorks.discoveryIntro` is repositioned to sit immediately before the discovery `<blockquote>`**, with vs-alternatives inserted before it (resolves the amendment §4.5a / §5 adjacency flag; no copy change — §2 Section 12, §7 Q3).
- **A7 — Exactly ONE `fill` band on the page (W-A floor).** The headline `StatsSection` gets `fill`. The quartile leaders stats stay on `--bg` (transparent `StatsSection`, no `fill`); vs-alternatives stays on `--bg` (no band). Honors "never stack `--surface-section` adjacent, max 5 bands" by using one. W-B (a second non-adjacent `fill` band on the quartile stats) is held as a fast-follow (§7 Q2).
- **A8 — The hero gains `entrance="stagger"`; keeps DS-default `size="display"`** (amendment §4.1). A diagnosis opens loud. Status/eyebrow stay omitted — not the availability surface.
- **A9 — All the citation/TOC/references craft is untouched.** Footnote-superscript citations (D-01), CSS-only sticky TOC (D-02), "Last reviewed" footer (D-03), discovery-questions `<blockquote>` (D-04) ship as-is. vs-alternatives adds **no** cited stats → **no** new References entries (D-01 round-trip stays complete, `references.length(4)` untouched).
- **A10 — Categorical-only is absolute.** Every stat is an existing *cited third-party* figure. No fabricated proof, no `Quote`, no `TestimonialBlock` (GATED — sales-content-gaps §5). vs-alternatives carries zero figures (content §8). The strike is composition, not borrowed credibility.

---

## 1. Intent

`/why-ai` is the site's strongest argument and, today, its flattest execution — one `--bg` plane from top to bottom, every "by the numbers" moment hand-built, no editorial spine. The reader should arrive at a page that *arrives* (the hero staggers in), reads a tightly-cited opening argument, then hits a **recessed exhibit** — the headline stats sunk into a `--surface-section` band like a quoted figure in a well-set report. They absorb the five failure modes (now in a named region), and at the pivot the page **stops and asserts**, once, in large italic serif: the order is diagnosis-then-build. Then it shows what the top quartile does differently, and — at the exact point the reader is silently comparing pouk.ai to the three things they could do instead — it names that comparison **honestly and generously** (vs-alternatives: "X is the right call when… / pouk.ai is the right call when…"), then hands off to the discovery questions and a conversation. The intent is to make the argument stop reading as an *essay* and start reading as a *case*: an arrival, one recessed exhibit, one stated conviction, and one candid differentiation beat — on the page that most deserves them, every one built from a DS organism the page should already be using. Density stays high where the argument lives (the cited prose) and opens at the depth beats. Restraint guardrails: depth comes from *one* static recessed band and *one* Statement (typographic depth, never surface depth) — not from motion competing with the reader, not from a fabricated number; and the differentiation beat wins by candor, never by dunking — no comparison table, no card grid, no competitor-bashing (the §3 named failure mode and the `/engagements` no-comparison-table precedent both bind).

## 2. Section-by-section composition

The amendment §2 revised render order is the spine. **The order in this document IS the render order.** Sections marked **[unchanged]** ratify the current build; sections marked **[DELTA]** compose an approved amendment delta.

### Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism), wrapped site-side by `ShellWrapper.tsx` (substance carrier, zero shape — the React-boundary pattern documented on `/`). Footer slot carries `<Footer>`.
- **Props (substantive)**: `currentRoute="/why-ai"`; `routes[]` the standing site nav (Why AI · Roles · Engagements · Principles · About); `footer={<Footer copyright="© Pouk AI INC <year>" email="hello@pouk.ai" />}`. Unchanged from every other route.
- **Layout / spacing**: `<SiteShell>` owns header/footer chrome + `--page-pad`. Page-content wrapper is `.site-page` (`max-width: var(--content-max)` 64rem, `padding-block: var(--space-12)`). No SiteShell token override.
- **Motion**: None at shell level. Nav/footer link hover is DS-internal (`--easing-link`, `--dur-fast`).
- **Content slot**: Nav array in `BaseLayout.astro` / `ShellWrapper.tsx`. Page meta from `why-ai.json[meta]` (validated by `_schemas/why-ai.ts`).
- **Brand notes**: Wordmark always rendered by `<SiteShell>` via `<Wordmark>`, never a string literal. `og:type=article` (R-037, per technical-requirements). Shell renders static HTML — no `client:*`.

### Section 2 — `Hero` (the diagnosis opens loud) **[DELTA — §4.1 — add `entrance="stagger"`]**

- **DS primitive(s)**: bare `<Hero>` (molecule), DS-default `size="display"` (NOT `HeroSection` — the page composes `<Hero>` directly inside `.site-page`, as today).
- **Props (substantive)**:
  ```
  <Hero
    entrance="stagger"              // §4.1 — NEW. The staggered entrance so the page arrives.
    title={hero.title}              // why-ai.json[hero.title] — canonical H1 phrasing (OMC-V7)
    lede={hero.lede}                // why-ai.json[hero.lede] — 1-3 sentences
    // NO size prop → DS default "display" (--fs-tagline 36–68px). A diagnosis opens loud; do NOT pass
    //   size="intimate". (Passing size="display" explicitly is harmless but redundant; omit per amendment §2 item 2.)
    // NO status — this is not the availability surface (the StatusBadge budget is spent on / )
    // NO eyebrow — the title carries the page; an eyebrow would dilute the opening
    // NO illustration — eagle deferred site-wide (/ §6.2); /why-ai stays type-only (imagery §2)
    // NO cta — the page argues to the end CTA (Section 13), not a hero CTA
  />
  ```
- **Layout / spacing**: Hero text column capped at `--hero-max` (38rem) by the DS. Internal rhythm DS-owned, not re-tuned. The Hero is the page `<h1>` (`titleAs` default).
- **Motion**: `entrance="stagger"` fires on initial render — title (150ms, +12px rise) / lede (300ms), CSS keyframes + `animation-delay`, ~1.05s total, zero JS (the holding-page precedent proved this is pure-CSS). At `display` scale the title's rise reads with more authority because it travels a larger glyph. **`prefers-reduced-motion: reduce`**: collapsed via the DS `:root !important` block; the hero simply appears. **No scroll-triggered reveal anywhere on this page** — see §4.
- **Content slot**: `why-ai.json[hero]`.
- **Brand notes**: The current build passes `<Hero title lede />` with no `size` and no `entrance`. The only W-A change here is the one-prop `entrance="stagger"` add; `size` stays at the DS default `display`. This is the smallest possible delta for the "arrival" depth event.

### Section 3 — Opening argument + inline cited stats **[unchanged]**

- **DS primitive(s)**: None — semantic prose (`<p>`) with footnote-superscript citation links (D-01). The opening paragraph interleaves `openingArgument.intro`, the inline `<strong>` highlights with `<sup class="footnote-ref">` round-trip anchors, and `openingArgument.connectors`.
- **Props (substantive)**: Driven by `why-ai.json[openingArgument]`. The superscript marker derives from `stat.citation` (any digit count), not map position — the existing build's defensive choice; keep it.
- **Layout / spacing**: `.why-ai-main` column. Prose at `--fs-body`, `--hero-max` measure. Gap to the next beat (the stats band) is the band's own block padding — see Section 4.
- **Motion**: None. Footnote-ref link hover is DS-internal / site-link styling.
- **Content slot**: `why-ai.json[openingArgument.intro / .stats / .connectors]`.
- **Brand notes**: The footnote-superscript citation craft is the page's credibility engine and is already excellent — do not touch it. This is the cited-third-party rigor that lets the page strike through composition without fabricating proof.

### Section 4 — Headline stats band (W-A) **[DELTA — §4.2 — `<StatsSection fill dividers>`, the recessed exhibit]**

- **DS primitive(s)**: `<StatsSection fill dividers>` (organism) replacing the hand-rolled `<div class="stats-row" role="list">` + manual `role="listitem"` wrappers. Children: the existing **four** `<Stat size="lg">` atoms (12–18% / 85% / 15% / $300B), one per `openingArgument.statsRow` entry. `StatList` carries the list semantics natively.
- **Props (substantive)**:
  ```
  <StatsSection
    fill                            // §4.2 — paints the --surface-section recessed band. The page's ONE fill band.
    dividers                        // hairline rules between stats (count = 4 ≥ 3 → correct)
    // NO heading → pure-data surface (DS: "omit on pure-data surfaces"). A heading here would inject a stray
    //   <h2> before the real first section <h2> ("Why projects fail…"). The argument prose above (Section 3)
    //   already named the moment. See brand notes for the unnamed-region a11y note.
  >
    {openingArgument.statsRow.map((stat) => (
      <Stat value={stat.value} caption={stat.caption} source={stat.source} size="lg" />
    ))}
  </StatsSection>
  ```
- **Layout / spacing**: `StatsSection` owns its frame: `--space-16` block padding (via Section), `--content-max` max-width, `--page-pad` horizontal, `--surface-section` (`#f8f8fa`) fill. The band bleeds to the editorial content width; it is the page's one recessed exhibit. **This is the single biggest "this page has depth" lever (creative §0 lever #2), and it costs no color and no new token.**
- **Motion**: **None.** Static display-only (DS: "No hover, active, or keyboard interaction; no count-up animations"). The depth comes from the *static recessed band*, not from motion. An intersection-triggered reveal would cost JS (breaks R-079) and animate the argument at a pace that competes with the reader — explicitly locked out (§4).
- **Content slot**: `why-ai.json[openingArgument.statsRow]` — four entries, unchanged content, new container. Same cited figures, same `source` strings, same superscript round-trip (the inline citations live in Section 3's prose).
- **Brand notes**:
  - No fabricated or altered numbers (categorical-only intact — existing cited third-party figures). The refactor removes the bespoke `.stats-row` CSS and the manual list ARIA — `StatsSection`/`StatList` carry correct list semantics natively. Verifier: grep shows no `.stats-row` around the opener stats; exactly one recessed `--surface-section` band on the page.
  - **A11y note on the omitted heading** — `StatsSection` wires `aria-labelledby` to its `<h2>` only when `heading` is provided. With `heading` omitted the `<section>` is an unnamed region. Acceptable here because the band is *adjacent to the naming prose* and is pure-data. If the reviewer's a11y standard requires a named landmark, the fallback is a visually-restrained `heading` or a wrapping `aria-label` — but a `heading` would add a stray `<h2>` ahead of the first real section heading, so prefer `aria-label` if a name is required. Designer recommendation: omit (the prose names it).

### Section 5 — Section heading + five failure modes **[DELTA — §4.3 — wrap in `<FailureModeList>`]**

- **DS primitive(s)**: `<FailureModeList heading lede>` (organism) wrapping the five `<FailureMode>` molecules. Replaces the hand-rolled standalone `<h2>` + `<p>` + flat `<div class="failure-modes-section">`. The standalone heading + lede move *into* the organism props; no standalone `<h2>` remains.
- **Props (substantive)**:
  ```
  <FailureModeList
    heading={failureModesIntro.heading}      // "Why projects fail — the five failure modes" → Section <h2> (titleAs default "h2")
    lede={failureModesIntro.paragraph}       // "Most AI initiatives don't fail because the model… Here's the pattern:"
    // NO eyebrow — the content carries none (why-ai.json[failureModesIntro] = {heading, paragraph} only). Omit.
    // size default "default" (--space-16 block padding).
  >
    {sortedModes.map((mode) => (
      <section id={mode.anchor} aria-label={mode.title}>   {/* anchors RETAINED: #data-readiness … #change-management */}
        <FailureMode index={mode.index} title={mode.title}>
          {mode.stats.length > 0 && (
            /* per-mode stats stay as-is — NOT a second StatsSection (see brand notes) */
            <div class="stats-row" role="list" aria-label={`Statistics for failure mode ${mode.index}`}>
              {mode.stats.map((stat) => (
                <Stat value={stat.value} caption={stat.caption} source={stat.source} size="lg" />
              ))}
            </div>
          )}
          <p>{mode.body}</p>
        </FailureMode>
      </section>
    ))}
  </FailureModeList>
  ```
- **Layout / spacing**: `FailureModeList` is a `<Section>` root (`<section>` + `aria-labelledby` from `heading`) with a plain `<div class="list">` child (no gap/padding — the `<FailureMode>` items own their own borders + top padding). `size="default"` = `--space-16` block padding. On `--bg` (DS: `FailureModeList` inherits `--bg`, no surface override). The five modes read as one ascending catalog.
- **Motion**: None. No per-mode reveal (locked out, §4).
- **Content slot**: `src/content/failure-modes.json` via the existing content collection, sorted by `index`. **Unchanged** — render-side refactor only; the data file is untouched.
- **Brand notes**:
  - `FailureMode` children render `<h3>` titles by default — **correct** under `FailureModeList`'s `<h2>` (no skipped level, R-026).
  - **Anchors are retained on inner `<section id aria-label>` wrappers around each `FailureMode`** so the deep-link anchors (`#data-readiness` … `#change-management`) and the existing per-mode `aria-label` survive — `FailureModeList` does not consume per-item anchors itself. The sticky TOC (Section 10) links to these.
  - **The per-mode inline stats stay as the current `.stats-row` (NOT a nested `StatsSection`).** DS rule "Do NOT nest StatsSection inside another StatsSection / HeroSection," and converting them would paint additional recessed bands below the one `fill` band — breaking the one-band budget (§4.2). They are transparent `--bg` inline stats, not a band. The one recessed exhibit is the headline band (Section 4); everything below stays on the canvas.

### Section 6 — `Statement` (thesis pivot) **[DELTA — §4.4 — NEW beat, the signature moment]**

- **DS primitive(s)**: `<Statement>` (molecule). Exactly **one** on the page (DS: "use sparingly, once per page"; idle everywhere on the site today). Placed at the structural pivot between "here is what's broken" (the failure modes, Section 5) and "here is what the leaders do" (Section 7). Emits **no heading element** — does not disturb the h1→h2 hierarchy.
- **Props (substantive)**:
  ```
  <Statement
    statement={statement}           // the PROMOTED conviction line — see content slot. ~10–14 words, 1–2 balanced lines.
    // as="p" (default) — renders a <div> wrapping a <p>; NOT a heading (emits no h1-h6).
    //   The page <h1> lives in the Hero; the Statement is an assertion, not a heading.
    // hairline={false} (default) — RECOMMENDED OFF. A 1px top rule reads as a section divider and starts
    //   building a "module stack"; the bare turn keeps it editorial. The generous interval above (see Layout)
    //   sets it apart, not a drawn line. (This REVISES the 2026-06-14 draft's hairline={true}; house voice —
    //   home §2 Section 3, engagements §7.5 — sets it false on --bg pivots.)
    // NO as="blockquote" — this is the brand's own conviction, not an attributed external quote.
    // NO supporting — the line stands alone; the failure modes above are its support.
  />
  ```
- **Layout / spacing**: On `--bg` — **no band** (the Statement is *typographic* depth, not surface depth; the page's one band is the stats opener, Section 4, and the Statement is never adjacent to it). `--fs-statement` (28–44px), `line-height: 1.2`, `text-wrap: balance`, italic-serif. Rendered inside a thin site-side wrapper on the `.site-page` rhythm (a bare `<div>` or `<Section as="div" size="tight">` with no header — engineer's structural call; `Statement` carries no block padding of its own). The load-bearing spacing is the interval **above**: a generous `--space-16` (64px) gap from the last `FailureMode` so the assertion reads as a *quiet turn after a breath*, not a subtitle crowding the modes. `--space-16` again below into the leaders `<h2>`. The line balances to 1–2 lines (word budget enforces it).
- **Motion**: **None.** The Statement is static — no entrance, no reveal. The display Hero's stagger is the page's one entrance moment; a second entrance here would need a scroll trigger (`IntersectionObserver` = JS, breaking R-079) and dilute the Hero. The depth is the *scale interval* between body text and the 28–44px italic assertion, not motion. `prefers-reduced-motion` trivially satisfied.
- **Content slot**: **PROMOTION of existing copy, not new copy.** The conviction line already lives at the tail of `whereWorks.closing`: *"The diagnosis comes before the build. That is the order pouk.ai works in."* The move promotes it to the `Statement`. Two engineer-facing consequences: (1) the line is lifted *out* of `whereWorks.closing` and *up* here; (2) `whereWorks.closing` must read cleanly with it removed (D-05 extraction discipline — see Section 14, §7 Q1). If a new `statement` key is added to `why-ai.json`, the engineer wires it; the composition does not author the JSON. **Slot budget handed to content: one or two short sentences, ~10–14 words, 1–2 balanced lines at `--fs-statement`. No stat, no attribution, no quotation marks.** Final wording is Arian's (amendment §4.4).
- **Brand notes**: **This is the page's signature moment** — the one place the page raises its voice, in a whisper at scale. DS rule honored: exactly one `<Statement>`, not a heading, does not replace the hero. After the reader absorbs the failure modes and before the leaders section, the page stops *reporting* and starts *asserting*. Do not stack a `Pull` on the same surface (DS anti-pattern).

### Section 7 — What the leaders do differently + quartile stats **[DELTA — §4.2 "no second band" half; prose unchanged]**

- **DS primitive(s)**: `<h2>` + `<p>` + `<ul class="leaders-list">` (the desire engine — keep). The quartile stat row becomes `<StatsSection dividers>` **without `fill`** (transparent, on `--bg`), replacing the hand-rolled `<div class="quartile-stats" role="list">` — landmark/list consistency with Section 4 while staying on `--bg`. The transparency is load-bearing (A7 — no second recessed band in W-A).
- **Props (substantive)**:
  ```
  <h2>{leaders.heading}</h2>
  <p>{leaders.intro}</p>
  <ul class="leaders-list">{leaders.items.map(...)}</ul>
  <p>{leaders.outro}</p>

  <StatsSection dividers>           {/* NO fill — stays on --bg, the second stat moment does not recess (A7) */}
    {leaders.stats.map((stat) => (
      <Stat value={stat.value} caption={stat.caption} size="lg" />
    ))}
  </StatsSection>
  ```
- **Layout / spacing**: The quartile `StatsSection` (no `fill`) sits on `--bg`. This is the deliberate "two stat moments, one recessed" rhythm: the headline stats recess (the problem exhibit); the quartile stats sit on the canvas (the ceiling, stated plainly). If Arian picks W-B (§7 Q2), THIS band gets `fill` and the five failure modes are sandwiched between two non-adjacent recessed exhibits.
- **Motion**: None.
- **Content slot**: `why-ai.json[leaders]`.
- **Brand notes**: The leaders section is the *desire engine* (sales-content-gaps) — keep its content exactly. The only composition question is band budget (A7 / §7 Q2). Default: one band (W-A).

### Section 8 — "Where pouk.ai works" heading + body **[unchanged]**

- **DS primitive(s)**: None — `<h2>{whereWorks.heading}</h2>` + `<p>{whereWorks.body}</p>`. Unchanged prose.
- **Props (substantive)**: `whereWorks.heading` → section `<h2>` (third section heading: "Where pouk.ai works — business knowledge meets AI tooling"). `whereWorks.body` → the "failure modes are organizational, not technical" paragraph.
- **Layout / spacing**: On `--bg`, `.why-ai-main` column. This `<h2>` opens the `whereWorks` block; vs-alternatives (Section 9) and the discovery questions (Section 11) sit beneath it.
- **Motion**: None.
- **Content slot**: `why-ai.json[whereWorks.heading / .body]`. Unchanged.
- **Brand notes**: `whereWorks` answers "is this for me?" (one-sided fit). vs-alternatives (next) answers "why you and not the obvious alternatives?" (two-sided). The two must not duplicate (amendment §4.5 AC) — `whereWorks` paraphrases the "where we fit" prose; vs-alternatives introduces the DIY/agency/in-house comparison that appears nowhere else.

### Section 9 — vs-alternatives (the differentiation beat) **[DELTA — §4.5 / §4.5a — NEW beat]**

- **DS primitive(s)**: `<PrincipleList heading lede>` (organism) wrapping **three** `<Principle>` molecules (one per alternative: DIY / agency / in-house), plus one trailing `<p>` for the closing line. Inserted after `whereWorks.body` (Section 8) and before the repositioned `discoveryIntro` (Section 10).
- **Vehicle justification (why `PrincipleList`, why it avoids the table/dunking read)**:
  - **It is the DS's positive-register sequenced-editorial organism** — the documented counterpart to `FailureModeList` ("Do NOT use for positive/best-practice content — use `PrincipleList`"). vs-alternatives is *generous assessment*, not failure cataloging, so `FailureModeList` (already used on this page for the actual failures, and failure-toned) is the wrong register. `PrincipleList` carries the right tone: considered, declarative, even-handed.
  - **It is a single-column `<ol>` of editorial items, structurally incapable of reading as a comparison table or card grid.** No columns, no cells, no check/cross axis, no side-by-side. Each `Principle` is a stacked unit: Roman numeral + serif title + body prose. This is the same restraint `/engagements` uses against the comparison-table read (engagements.md §3) — a vertical sequence, not a matrix. No `<table>`, no `FeatureGrid`, no multi-column layout to invite the tabular read the §3 failure mode warns against.
  - **The two-part "right when / pouk.ai when" framing composes as a two-`<p>` body ReactNode** inside each `Principle` (content draft §6 Flag 1 confirms each clause is grammatically self-contained and survives this vehicle). Parallel structure across three items scans as honest assessment, not a sales funnel.
  - **It carries no figures, no band, no stat slot** — `PrincipleList`/`Principle` have no numeric affordance, so the categorical-only / no-Stat / no-band guardrail (amendment §4.5; content §6 Flag 4) is satisfied *structurally*, not just by discipline.
  - **Roman numerals (i / ii / iii) are editorial sequencing, not ranking** — they read as "three considerations," not "tier 1 / tier 2 / tier 3," keeping it off the "options on a shelf" read.
- **Props (substantive)**:
  ```
  <PrincipleList
    heading={vsAlternatives.heading}     // "When to hire pouk.ai — and when not to" → Section <h2>, the page's FOURTH
    //                                      section heading. Satisfies the F-101 link-reciprocity AC (the homepage
    //                                      differentiation preview links here with "See when to hire us, and when not to →").
    //                                      titleAs default "h2".
    lede={vsAlternatives.leadIn}         // the candor-posture line — "pouk.ai isn't the right answer for every AI
    //                                      problem. Most teams weigh three other options first…" PrincipleList passes
    //                                      lede through to its Section, below the <h2>, above the three Principles —
    //                                      exactly where it must land to inoculate the three beats against reading as a pitch.
  >
    <Principle numeral="i" title="Doing it yourself">
      <p>{vsAlternatives.alternatives[0].rightWhen}</p>     {/* DIY right-when — closes the /roles Builder objection */}
      <p>{vsAlternatives.alternatives[0].poukaiWhen}</p>    {/* pouk.ai right-when */}
    </Principle>
    <Principle numeral="ii" title="A generic AI agency">
      <p>{vsAlternatives.alternatives[1].rightWhen}</p>
      <p>{vsAlternatives.alternatives[1].poukaiWhen}</p>
    </Principle>
    <Principle numeral="iii" title="Hiring in-house">
      <p>{vsAlternatives.alternatives[2].rightWhen}</p>
      <p>{vsAlternatives.alternatives[2].poukaiWhen}</p>
    </Principle>
  </PrincipleList>

  {/* closing line — distinct from whereWorks.closing; do NOT collapse them (amendment §4.5a) */}
  <p>{vsAlternatives.closing}</p>      {/* "The pattern underneath all three… the diagnosis starts with a few questions." */}
  ```
  - **Two-part body register**: the `rightWhen` paragraph is primary (full `--fg`); the `poukaiWhen` paragraph follows in the same body. Both at `--fs-body`. **Unlike the `/engagements` deRisks treatment, do NOT mute the second paragraph** — both halves of a two-sided comparison must read at equal weight (muting the pouk.ai clause would tilt the "even-handed" read). No site-side color class.
- **Layout / spacing**: On `--bg` — **no band** (amendment §4.5; content §6 Flag 4). `PrincipleList` (via `Section`) owns block padding (`--space-16`, `size` default). `Principle` items carry hairline `border-top` dividers between them (DS-owned, always present — reinforces "three sequenced considerations" without a grid). Single column, full reading measure. The closing `<p>` sits below at standard prose rhythm, then the repositioned `discoveryIntro` (Section 10).
- **Motion**: **None.** No entrance, no scroll reveal (zero-JS; creative W-A "no scroll-triggered reveals"). No inline links in this section. `prefers-reduced-motion` trivially satisfied.
- **Content slot**: NEW key `vsAlternatives` in `why-ai.json` (engineer authors the JSON + Zod branch per amendment §4.5a; PM specified the shape: `heading`, `leadIn`, `alternatives[3]{name,rightWhen,poukaiWhen}`, `closing`; **no** stat/citation field). Copy is the Approved `vs-alternatives.md` draft. **Slot budgets (already met by the Approved draft)**: `heading` ~6–9 words; `leadIn` 1 sentence; each `rightWhen`+`poukaiWhen` two self-contained clauses (DIY beat is longest, ~4 sentences across the two parts — size the vehicle for it, content §6 Flag 2); `closing` 1–2 sentences. Zero figures.
- **Brand notes**:
  - The three `Principle` **titles** are the bare alternative names (`"Doing it yourself"`, `"A generic AI agency"`, `"Hiring in-house"`). Under `Principle` the title renders at `--fs-card-title` in serif; whether it emits an `<h3>` is a `Principle`-internal call — either way the outline stays clean (H1 → H2×4, with H3 only ever *under* the section H2, no skipped level — content §3 / §6 Flag 3, R-026). Verifier: outline check.
  - Must not duplicate the failure modes or `whereWorks` (amendment §4.5 AC).
  - No named-competitor pejoratives, no logos, no `<table>`, no grid, no check/cross iconography, no band, no `Stat` (content §8). Wins by candor.
  - **F-101 reciprocity is load-bearing**: the `<h2>` answers the homepage link "See when to hire us, and when not to →" in register — a bare "How pouk.ai compares" would NOT satisfy the AC (amendment §4.5). The Approved draft's `When to hire pouk.ai — and when not to` does.

### Section 10 — `whereWorks.discoveryIntro` (repositioned) **[DELTA — §4.5a adjacency resolution]**

- **DS primitive(s)**: None — plain `<p>{whereWorks.discoveryIntro}</p>` ("Four questions pouk.ai walks through before recommending anything:").
- **Resolution of the amendment §4.5a / §5 adjacency flag**: in the current build `discoveryIntro` sits immediately after `whereWorks.body` and reads as the lead-in to the discovery `<blockquote>`. Inserting vs-alternatives (Section 9) *between* `body` and the blockquote would orphan `discoveryIntro` from its blockquote. **Resolution: reposition `discoveryIntro` to sit immediately before the blockquote** — render order becomes `whereWorks.body` (S8) → **vsAlternatives + its closing** (S9) → **`whereWorks.discoveryIntro`** (this section) → discovery `<blockquote>` (S11) → `whereWorks.closing` (S12). This keeps `discoveryIntro` as the direct lead-in to the four questions, which is what its copy ("Four questions pouk.ai walks through…") demands. **No copy change** — only its render position moves down past the vsAlternatives beat. A composition-layer reorder of existing keys, not a content edit, so it does **not** route back to content. (Amendment §4.5a offered exactly this option: "OR the discoveryIntro is repositioned to immediately precede the blockquote" — this composition elects it, the cleaner read. Confirm in §7 Q3.)
- **Layout / spacing**: On `--bg`, standard prose rhythm directly above the blockquote.
- **Motion**: None.
- **Content slot**: `why-ai.json[whereWorks.discoveryIntro]` — unchanged text, moved position.
- **Brand notes**: The one render-order change to existing keys. The engineer reorders the template; the JSON values are untouched.

### Section 11 — Discovery questions blockquote **[unchanged]**

- **DS primitive(s)**: None — inline italic `<blockquote class="discovery-questions"><ol><li><em>…</em></li></ol></blockquote>` (D-04).
- **Props (substantive)**: `whereWorks.questions[]` — four italic questions.
- **Layout / spacing**: On `--bg`, inline-italic register (not a band). Sits directly below the repositioned `discoveryIntro`.
- **Motion**: None.
- **Content slot**: `why-ai.json[whereWorks.questions]`. Unchanged.
- **Brand notes**: D-04 inline-italic treatment preserved verbatim. Prospect-aimed (OMC-V1).

### Section 12 — `whereWorks.closing` **[DELTA-adjacent — text minus the promoted Statement line]**

- **DS primitive(s)**: None — `<p>{whereWorks.closing}</p>`, if retained.
- **Props (substantive)**: `whereWorks.closing` **with the promoted Statement sentence removed** (see Section 6 / §4.4). The current value IS the conviction line now living in the `Statement`. **If the entire `closing` is the promoted line**, either (a) `closing` is emptied and this `<p>` is dropped, or (b) content supplies a short replacement. Content's/Arian's call (amendment §4.4 AC: tail prose must read cleanly with the line removed). Flagged §7 Q1.
- **Layout / spacing**: On `--bg`, if retained.
- **Motion**: None.
- **Content slot**: `why-ai.json[whereWorks.closing]`. Subject to the promotion edit.
- **Brand notes**: D-05 extraction discipline: no dangling reference to the moved sentence.

### Section 13 — End CTA (dual contact mechanism) **[unchanged]**

- **DS primitive(s)**: The current `.end-cta` block — `mailto:` primary + booking secondary (muted link) conversion pair, plus a navigational hand-off line (Roles read-on). Per `meta/compositions/components/booking-affordance.md` §2 Context B and the contact-flow feature (FS-CF-1).
- **Props (substantive)**: `why-ai.json[endCta.primary / .booking / .secondary]`; `BOOKING_URL` from `src/lib/booking`.
- **Layout / spacing**: Three affordances read as: conversion pair | navigation hand-off. On `--bg`. Unchanged.
- **Motion**: None. Link hover DS-internal.
- **Content slot**: `why-ai.json[endCta]`.
- **Brand notes**: The dual mechanism is owned by the contact-flow feature spec, not this composition — do not re-litigate. No `StatusBadge` on this page (the availability budget is spent on `/`). The depth pass does not touch the end CTA.

### Section 14 — References + Last reviewed + sticky TOC **[unchanged]**

- **DS primitive(s)**: None new. The `<section class="references">` footnote round-trip (D-01), the `.last-reviewed` line (D-03), and the CSS-only sticky right-rail `<nav class="why-ai-toc">` (D-02).
- **Props (substantive)**: `why-ai.json[references / referencesNote / lastReviewed]`; TOC derived from `sortedModes`.
- **Layout / spacing**: TOC is `position: sticky` on desktop ≥1024px, CSS-only (D-02) — **the one place on this page JS would be tempting and is correctly avoided**. References are an `<ol>` with back-anchors.
- **Motion**: None. (Sticky is CSS layout, not animation.)
- **Content slot**: `why-ai.json[references / referencesNote / lastReviewed]`.
- **Brand notes**: All three are shipped craft (D-01/D-02/D-03). **vs-alternatives adds no cited stats → no new References entries** — the 4-superscript → 4-References round-trip stays complete and `references.length(4)` is untouched (amendment §4.5 / §4.5a). No new superscripts anywhere on the page. The sticky TOC is CSS-only and stays CSS-only — adding an `IntersectionObserver` scroll-spy would break R-079 for marginal value, and the TOC stays scoped to the five failure-mode anchors (it does **not** gain a vs-alternatives entry — §8). Keep it static-sticky.

### Mobile collapse (the StatsSection band and the vs-alternatives vehicle)

- **The opening `StatsSection fill` band** — `StatList` stacks to a single column below `--bp-md` (768px); the hairline `dividers` rotate from vertical rules to horizontal rules (DS-owned responsive, snapshot `### StatList`). The `--surface-section` fill persists on mobile (the recessed exhibit reads as a stacked, recessed list — still a quoted exhibit, just vertical). `--page-pad` keeps the band inset. The four stats read top-to-bottom; no horizontal scroll, no truncation. The quartile `StatsSection` (Section 7, no fill) stacks identically on `--bg`.
- **The vs-alternatives `PrincipleList`** — already single-column at all widths (it is a vertical `<ol>`, not a grid), so there is no collapse event — it reads identically on mobile and desktop, which is exactly why the vehicle is safe against the comparison-table read at every breakpoint. Each `Principle` (numeral + title + two `<p>`s) stacks naturally; the DIY beat (longest) simply runs taller. The `leadIn` and `closing` are full-measure prose.
- **The sticky TOC** — hidden below 1024px (D-02, CSS-only), so mobile carries no TOC; the page reads as a linear scroll. Unchanged.
- **The Hero stagger** — collapses to static under `prefers-reduced-motion` at every width; on mobile with motion allowed it still fires (title → lede), which is correct — the diagnosis arrives on phones too.

### The 13–14" laptop read — what keeps it a composed CASE, not a flat essay and not a generic SaaS landing

`/why-ai` must read as a **built case** on a 1440×900 / 1440×768 capture (a judged criterion, amendment §3 — "the argument reads as a case, not an essay" *and* "vs-alternatives must not slide into dunking"). What holds it on the right side of both lines, concretely:

- **One loud open, one recessed exhibit, one raised voice — not a uniform essay.** The display Hero stagger announces; the single `--surface-section` stats band is the one moment the page visibly *recesses* its evidence (a quoted exhibit on the scroll); the one italic-serif `Statement` is the one moment the page raises its voice. Three differentiated weights against a calm cited-prose baseline — that is what makes it a *case* with a spine, not a flat well-set essay. No two of those three share a treatment.
- **One band, at the open only.** Exactly one `--surface-section` band (the stats opener). Every other surface — failure modes, Statement, leaders, vs-alternatives, CTA — is on the bare `--bg` canvas. A generic SaaS page alternates bands the whole way down to manufacture depth; this page earns depth from *type scale, the cited-stat rigor, and interval*, and spends its one band as the opening exhibit. The restraint floor (one band) is the difference.
- **vs-alternatives is prose in a vertical `<ol>`, not a matrix.** On the laptop capture the differentiation beat reads as three considered, generous paragraphs under Roman numerals — visibly *editorial*, not a side-by-side us-vs-them grid with check/cross columns. That single structural choice (PrincipleList, not FeatureGrid/Table) is what keeps the page off the "generic SaaS comparison page" line and off the "dunking" line at once: there is nowhere for a logo wall, a tier highlight, or a pejorative column to live.
- **The cited-stat rigor is the visual weight.** No imagery, no decorative color — the four superscript-cited figures and the References round-trip *are* the page's authority. On a 13–14" screen the eye reads "this is sourced," which is the brand's whole credibility posture; an illustration here would dilute proof (imagery-direction §2).

## 3. Cross-section rhythm

The vertical rhythm of `/why-ai`, top to bottom, and how the one band gives the argument a spine:

1. `<SiteShell>` header — DS-owned.
2. `.site-page` top padding — `--space-12` (48px).
3. `<Hero entrance="stagger">` (DS-default `display`) — page `<h1>`, DS-owned internal rhythm. The one motion event.
4. Opening argument prose — `--bg`, `--hero-max` measure.
5. **`<StatsSection fill dividers>`** (4 stats) — the page's ONE recessed `--surface-section` exhibit. `--space-16` block padding. **The spine event.**
6. **Back on `--bg`** — `<FailureModeList>` (the five modes), `--space-16`.
7. **`<Statement hairline={false}>`** on `--bg` — `--space-16` (64px) above and below. The thesis beat, never adjacent to the fill band.
8. "What the leaders do differently" + quartile `<StatsSection dividers>` (**no `fill`** — stays on `--bg`).
9. "Where pouk.ai works" body → **vs-alternatives `<PrincipleList>`** (`--space-16`, `--bg`, no band) → `vsAlternatives.closing` → repositioned `discoveryIntro` → discovery `<blockquote>` → `whereWorks.closing`.
10. End CTA — `--bg`.
11. References (`<h2>`) + Last reviewed — `--bg`.
12. `.site-page` bottom padding — `--space-12`. `<SiteShell>` footer — DS-owned.

**Rules that span the page:**
- **Exactly one `--surface-section` band (W-A).** The headline stats recess; nothing else does. Honors "max 5 bands, never adjacent" by using the single most-earning band. The two stat moments are deliberately differentiated: the *problem* exhibit recesses (a quoted figure); the *ceiling* exhibit (quartile stats) and the differentiation beat (vs-alternatives) sit on the canvas. (W-B would add a second non-adjacent band on the quartile stats — §7 Q2.)
- **One Statement, on `--bg`, `hairline={false}`.** Typographic depth, not surface depth — never on a band, no top rule. A drawn line would start the "module stack" the §3 failure mode warns against; the generous interval above carries the turn.
- **vs-alternatives is type-only on `--bg`, single-column, no figures.** The differentiation beat earns its place by candor, not by a comparison-table or card-grid affordance (the §3 failure mode; the `/engagements` no-comparison-table precedent).
- **Heading hierarchy.** One `<h1>` (Hero). Section `<h2>`s in render order: FailureModeList ("Why projects fail…"), "What the leaders do differently", "Where pouk.ai works", vs-alternatives ("When to hire pouk.ai — and when not to"), References. The `Statement` emits no heading; the two `StatsSection` bands set no `heading` prop (no stray `<h2>`); the three `Principle` titles are molecule titles (H3 only ever *under* the section H2). **No skipped levels** (R-026). Verifier: axe + outline.
- **No new cited stats anywhere.** vs-alternatives is categorical-only; the 4-superscript → 4-References round-trip (D-01) is preserved exactly (`references.length(4)` untouched).
- **Optional feather divider (deferred).** The imagery direction (§2) allows a single `currentColor` feather on one editorial page. **Not proposed in this pass** (validate on `/404` first per imagery §6). Max one per page. See `meta/compositions/components/feather-mark.md`.

Token compliance: every gap/padding resolves to a published `--space-N` token (`--space-12`, `--space-16`) or is DS-organism-internal. No raw px. No `--space-5/7/9/11`.

## 4. Motion choreography (page-level)

The page ships **zero JavaScript** and one CSS-only entrance animation:

- **Fires on initial render**: the `<Hero entrance="stagger">` reveal — title (150ms) / lede (300ms), CSS keyframes + `animation-delay` + `animation-fill-mode: both`, ~1.05s, zero JS. The "arrival" depth event. This is the *only* motion on the page.
- **Fires on scroll**: **nothing.** No intersection-triggered reveal on the stats band, the failure modes, the Statement, or vs-alternatives. An `IntersectionObserver` reveal would (a) cost JS, breaking the zero-JS contract (R-079/R-009), and (b) animate the argument at a pace that competes with the reader. **The reveal does not earn its hydration cost** — explicit per the template. The depth comes from the *static recessed band*, the *static Statement*, and the type scale — not from motion.
- **Fires never (locked out)**: scroll-triggered reveals, parallax, scroll-spy on the TOC (it is CSS `position: sticky`, not JS), stats count-up animation (DS forbids it on StatsSection), any animation on the Statement / `FailureModeList` / `PrincipleList`, any `IntersectionObserver`-driven effect. All would require `client:*` and break R-079.
- **Hover micro-interactions** (DS-internal, CSS-only): footnote-ref links, references back-anchors, TOC anchors, end-CTA links, nav/footer links. `--dur-fast` / `--easing-link`.

**`prefers-reduced-motion: reduce` behavior**: the hero stagger collapses via the DS's `:root !important` block in `tokens.css`; nothing else on the page animates, so there is nothing else to gate. No exception. The composition adds no `@media (prefers-reduced-motion)` rule of its own. There is no `StatusBadge` on this page, so the badge-pulse gate is not in play.

## 5. Icon picks (if applicable)

None. `/why-ai` is type-only (imagery direction §2: "the cited-stat rigor *is* the visual weight; an image here dilutes proof"). No Lucide glyphs in any DS slot — `StatsSection`, `FailureModeList`, `Statement`, and `PrincipleList` carry no icon affordance in this composition, and none is added (`FailureMode` uses Arabic indices, `Principle` uses Roman numerals — neither is an icon). The only non-text marks are the footnote superscripts and the references back-anchor `↩` — typographic characters. (If a future revision adds the optional feather divider per §3, that is a single decorative SVG, not an icon — see feather-mark composition.)

## 6. DS gaps surfaced

**None.** Every primitive named ships in `@poukai-inc/ui@2.17.0` today, verified against `meta/ds-snapshot/llms-full.txt`:

- `Hero` with `entrance="stagger"` — molecule (snapshot `### Hero`; `entrance="stagger"` confirmed, also consumed on `/` and `/engagements`). Bare `<Hero>` (not `HeroSection`) matches the current build.
- `StatsSection` with `fill` + `dividers` — organism (snapshot `### StatsSection`; `fill` boolean default false, `dividers` boolean default false, `children` = `Stat` atoms, optional `heading` omitted).
- `FailureModeList` with `heading` / `lede` — organism (snapshot `### FailureModeList`; `Section`-framed named landmark, `titleAs` default `h2`, children = `FailureMode` nodes; inherits `--bg`, no surface override).
- `Statement` — molecule (snapshot `### Statement`; `statement` required ReactNode, `as="p"` default, `hairline` default false, emits no heading).
- `PrincipleList` + `Principle` — organism + molecule (snapshot `### PrincipleList` / `### Principle`; `PrincipleList` composes `Section` + `<ol>` + `Principle` items, `heading`/`eyebrow`/`lede`/`size` props, min 2 children, dividers always present, inherits `--bg` no surface override; `Principle.numeral` lowercase Roman). The vs-alternatives vehicle. **No DS gap** — `PrincipleList` is the documented positive-register counterpart to `FailureModeList` and the exact fit for the "right when / pouk.ai when" generosity beats.

The depth pass is a pure-site refactor (adopt the organisms the page hand-rolls) plus two additive beats (Statement, vs-alternatives). No DS proposal is needed.

**Recorded vehicle reasoning (vs-alternatives), so it is a conscious call:**
- `MetaList` (`<dl>`, `--fs-meta` 14px micro-type) — rejected: too thin/chrome-like for an editorial differentiation argument; its `label:value` register reads as a spec panel, not prose.
- `FeatureGrid` / `FeatureCard` — rejected: a card grid is the single fastest route to the comparison-table / generic-SaaS read the §3 failure mode and the `/engagements` precedent both forbid.
- `FailureModeList` — rejected: failure register, wrong tone for generous "right when" framing, and already in use on the page for the actual failures.
- `PrincipleList` — chosen: positive editorial register, single-column `<ol>` (no tabular axis), no figures/band/stat slot (constraint-fit by structure).

**Cross-spec note (not a DS gap):** the promoted Statement line needs a canonical JSON home — a new `why-ai.json[statement]` key (engineer authors per amendment §4.5a-style shape change) or reuse of the existing `pivot`. PM/content's call (§7 Q1). The `vsAlternatives` key + Zod branch (shape per amendment §4.5a) is likewise the engineer's to author from the Approved content draft. The `<Statement>` and `<Principle>` slots are content-agnostic; no DS work is implied.

## 7. Open questions for Arian

All five deltas are Approved in the amendment; these are the residual composition calls.

1. **Q1 — Statement promotion + `whereWorks.closing` fate.** The Statement promotes the existing "The diagnosis comes before the build. That is the order pouk.ai works in." line (§4.4). That line currently *is* `whereWorks.closing`. Two sub-decisions: (a) confirm the final Statement wording (content's lane, your sign-off); (b) decide whether `whereWorks.closing` is emptied (the `<p>` drops) or content supplies a short replacement closing for the `whereWorks` block. **Recommendation**: promote the line to the Statement and drop the `whereWorks.closing` `<p>` — the vsAlternatives `closing` + discoveryIntro + blockquote already give the block a strong tail; a replacement risks redundancy. Routes back to content only if you want a replacement line.
2. **Q2 — W-A vs W-B band budget.** Ships **W-A** (one fill band, the stats opener; quartile stats transparent; vs-alternatives on `--bg`). W-B would flip Section 8's quartile `StatsSection` to `fill`, making the page a two-exhibit framed argument (the site's centerpiece read). **Recommendation**: ship W-A; hold W-B as a fast-follow. One-prop change if you elect W-B now.
3. **Q3 — `discoveryIntro` reposition.** I resolved the §4.5a adjacency flag by **repositioning `discoveryIntro` to sit immediately before the discovery blockquote** (after vsAlternatives + its closing), no copy change (§2 Section 10). Confirm — or if you'd rather keep `discoveryIntro` in its current position (immediately after `whereWorks.body`, before vsAlternatives), say so; that alternative reads `discoveryIntro` as a lead-in to vsAlternatives rather than the questions, which fights its "Four questions…" copy and would force a content edit. **Recommendation**: the reposition (chosen here).
4. **Q4 — Optional feather divider (defer).** Recommendation: **defer** — validate the feather on `/404` first (imagery §6). Confirm defer, or pull it forward.

This composition reaches `Approved` once Q1–Q3 have Arian's calls. Q4 can stay deferred.

## 8. Out of scope

- **Final copy.** The Statement wording and any `whereWorks.closing` replacement are content's/Arian's lane. The vs-alternatives copy is the Approved `vs-alternatives.md` draft — this composition anchors it visually, does not author it.
- **Authoring `why-ai.json` / the Zod schema branch.** The engineer adds the `vsAlternatives` key + `whyAiSchema` branch (shape per amendment §4.5a: `heading`, `leadIn`, `alternatives[3]{name,rightWhen,poukaiWhen}`, `closing`; no stat/citation field) and wires the promoted `statement`. The composition specifies the slots; it does not write the JSON or the `.ts`.
- **`failure-modes.json` shape.** Render-only refactor; the data file is untouched (companion content-data spec stands).
- **The sticky TOC contents.** The CSS-only right-rail TOC (D-02) lists the five failure-mode anchors under a "Failure modes" label. It does **not** need a vs-alternatives entry — the TOC is scoped to the failure-mode catalog, not a whole-page section index, and vs-alternatives is a differentiation beat, not a failure mode. Adding it would change the TOC's meaning and require a base-spec D-02 revision. Out of scope unless Arian wants a broader whole-page TOC (a separate decision).
- **The contact-flow end-CTA mechanism.** Owned by `meta/specs/features/contact-flow.md` + the booking-affordance composition. The depth pass does not touch it.
- **W-B build.** The two-band option is documented (§7 Q2) but not the W-A floor. If Arian picks W-B, it is a one-prop change (`fill` on the quartile `StatsSection`) — recorded, not pre-built.
- **The feather divider.** Deferred (§7 Q4); the recipe lives in the feather-mark component composition.
- **`Quote` / `TestimonialBlock`.** GATED on real permissioned quotes (sales-content-gaps §5). Not composed against placeholders.
- **DS-side proposal authoring.** None needed — no gap surfaced.
- **Other pages.** `/`, `/engagements`, `/roles`, `/principles`, `/about`, `/onboarding` each have their own composition.
