# Composition: Why AI

**Route**: `/why-ai`
**Status**: PROPOSAL — "raise the ceiling" Direction W-A. Awaiting Arian approval. This is the page's **first** composition doc — `/why-ai` was built spec-direct (like `/` originally), so there is nothing to supersede; this ratifies the current build *and* lays the W-A deltas on top.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Governing spec**: `meta/specs/pages/why-ai.json.md` content-data spec + the `/why-ai` IA encoded in `src/content/why-ai.json` and `src/content/failure-modes.json` (the page's spec lives in the content-data contract; see Open Question W4 — PM should confirm the canonical IA home).
**Current build ratified**: `src/pages/why-ai.astro` (decisions D-01..D-05, OMC-V1/V4/V5/V6/V7). This composition carries forward every shipped decision and adds the W-A depth events.
**Reads on**: `meta/assessments/creative-exploration.md` §2 (Direction W-A), `meta/assessments/ds-capability-vs-usage.md` #2/#3/#4 (the organisms ranked for this page), `meta/assessments/imagery-illustration-direction.md` §2 (`/why-ai` stays type-only at the stats; optional feather divider).
**DS version targeted**: `@poukai-inc/ui@2.17.0` (`meta/ds-snapshot/llms-full.txt` is the binding reference).

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The hand-rolled `.stats-row` becomes `<StatsSection fill dividers>`.** The current build wraps bare `<Stat>` atoms in `<div class="stats-row">`. The DS ships `StatsSection` (Section + StatList) for exactly this "by the numbers" editorial moment (ds-capability #3). Refactoring to it gives a region landmark + `aria-labelledby`, removes bespoke CSS, and unlocks the recessed `--surface-section` band (#2) for free. Same `<Stat>` content; strictly an upgrade.
- **A2 — The five `<FailureMode>`s get wrapped in `<FailureModeList heading lede>`.** The current build hand-rolls `<section aria-label>` wrappers around each `<FailureMode>`. `<FailureModeList>` is the DS organism that owns that Section frame + named landmark (ds-capability #4). The `<FailureMode>` children, their `index`/`title`/stats/body, are unchanged.
- **A3 — One existing conviction sentence is promoted to a `<Statement>` at the page pivot.** The current build's `pivot` string and the tail prose already carry the "diagnosis before build" conviction. W-A promotes it to a once-per-page `<Statement>` (italic-serif, `--fs-statement` 28–44px) at the structural pivot from "what's broken" to "what leaders do." This is a *placement* change, not new copy — final wording is Arian's (Open Question W3). It is the page's signature moment.
- **A4 — Exactly ONE `fill` band on the page (W-A floor).** The headline `StatsSection` (beat 3) gets `fill` (the recessed `--surface-section` exhibit). The quartile leaders stats (beat 6) stay on `--bg` (transparent `StatsSection`, no `fill`) so the two stat moments don't both recess. This honors "never stack `--surface-section` adjacent, max 5 bands" by using one. W-B (a second non-adjacent `fill` band on the quartile stats) is the bolder option, held as a fast-follow (Open Question W2).
- **A5 — The hero gains `entrance="stagger"`; the page keeps DS-default `size="display"`.** A diagnosis *should* open loud. The current build passes neither `size` (so DS-default `display` — correct) nor `entrance`. W-A adds the staggered entrance so the page *arrives*. Status/eyebrow stay omitted — this is not the availability surface.
- **A6 — All the citation/TOC/references craft is untouched.** The footnote-superscript citations (D-01), the CSS-only sticky right-rail TOC (D-02), the "Last reviewed" footer (D-03), and the discovery-questions `<blockquote>` (D-04) are already excellent and ship as-is. W-A adds depth events around them; it does not re-engineer them.
- **A7 — Categorical-only is absolute.** Every stat on the page is an existing *cited third-party* figure (MIT NANDA et al.). W-A adds no fabricated proof, no `Quote`, no `TestimonialBlock` (GATED on real permissioned quotes — sales-content-gaps §5). The strike is composition, not borrowed credibility.

---

## 1. Intent

`/why-ai` is the site's strongest argument and, today, its flattest execution — one `--bg` plane from top to bottom, every "by the numbers" moment hand-built, no editorial spine. The reader should arrive at a page that *arrives* (the hero staggers in), reads a tightly-cited opening argument, then hits a **recessed exhibit** — the headline stats sunk into a `--surface-section` band like a quoted figure in a well-set report. They absorb the five failure modes, and at the pivot the page **stops and asserts**, once, in large italic serif: the order is diagnosis-then-build. Then it shows what the top quartile does differently and hands off to a conversation. The intent is to make the argument stop reading as an *essay* and start reading as a *case*: three depth events (an arrival, a recessed exhibit, a stated conviction) on the page that most deserves them, every one built from a DS organism the page should already be using. Density stays high where the argument lives (the cited prose) and opens up at the three depth beats. Restraint guardrail: the depth comes from *one* static recessed band and *one* Statement — not from motion competing with the reader, not from a second illustration vocabulary, not from a single fabricated number.

## 2. Section-by-section composition

The render order below mirrors the current build's section order, with the three W-A depth events inserted. The order in this document IS the render order.

### Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism), wrapped site-side by `ShellWrapper.tsx` (substance carrier, zero shape — the React-boundary pattern documented on `/`). Footer slot carries `<Footer>`.
- **Props (substantive)**: `currentRoute="/why-ai"`; `routes[]` the standing site nav (Why AI · Roles · Engagements · Principles · About); `footer={<Footer copyright="© Pouk AI INC <year>" email="hello@pouk.ai" />}`. Unchanged from every other route.
- **Layout / spacing**: `<SiteShell>` owns header/footer chrome + `--page-pad`. Page-content wrapper is `.site-page` (`max-width: var(--content-max)` 64rem, `padding-block: var(--space-12)`). No SiteShell token override.
- **Motion**: None at shell level. Nav/footer link hover is DS-internal (`--easing-link`, `--dur-fast`).
- **Content slot**: Nav array in `BaseLayout.astro` / `ShellWrapper.tsx`. Page meta from `why-ai.json[meta]` (validated by `_schemas/why-ai.ts`).
- **Brand notes**: Wordmark always rendered by `<SiteShell>` via `<Wordmark>`, never a string literal. `og:type=article` (R-037, per technical-requirements). Shell renders static HTML — no `client:*`.

### Section 2 — `Hero` (the diagnosis opens loud) **[W-A delta: add `entrance="stagger"`]**

- **DS primitive(s)**: `<Hero>` (molecule), DS-default `size="display"`.
- **Props (substantive)**:
  ```
  <Hero
    size="display"                  // DS default — a diagnosis should open at display scale; keep it
    entrance="stagger"              // [W-A DELTA] add the staggered entrance so the page arrives
    title={hero.title}              // why-ai.json[hero.title] — canonical H1 phrasing (OMC-V7)
    lede={hero.lede}                // why-ai.json[hero.lede] — 1-3 sentences
    // NO status — this is not the availability surface (the StatusBadge budget is spent on / )
    // NO eyebrow — the title carries the page; an eyebrow would dilute the opening
    // NO illustration — eagle deferred site-wide (/ §6.2); /why-ai stays type-only (imagery §2)
    // NO cta — the page argues to the end CTA (Section 9), not a hero CTA
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

### Section 4 — Headline stats **[W-A delta: `<StatsSection fill dividers>` — the recessed exhibit]**

- **DS primitive(s)**: `<StatsSection fill dividers>` (organism) replacing the hand-rolled `<div class="stats-row" role="list">`. Children: the existing three (or more) `<Stat size="lg">` atoms, one per `openingArgument.statsRow` entry.
- **Props (substantive)**:
  ```
  <StatsSection
    fill                            // [W-A DELTA] paints the --surface-section recessed band — the page's FIRST depth event
    dividers                        // hairline rules between stats (DS rule: use when count >= 3)
    // heading omitted — this is a pure-data surface (DS: "omit on pure-data surfaces");
    //   the argument prose above already names the moment. No empty landmark — see brand notes.
  >
    {openingArgument.statsRow.map((stat) => (
      <Stat value={stat.value} caption={stat.caption} source={stat.source} size="lg" />
    ))}
  </StatsSection>
  ```
- **Layout / spacing**: `StatsSection` owns its frame: `--space-16` block padding (via Section), `--content-max` max-width, `--page-pad` horizontal, `--surface-section` (`#f8f8fa`) fill. The band bleeds to the editorial content width; it is the page's one recessed exhibit. **This is the single biggest "this page has depth" lever (creative §0 lever #2), and it costs no color and no new token.**
- **Motion**: **None.** Static display-only (DS: "No hover, active, or keyboard interaction; no count-up animations"). The depth comes from the *static recessed band*, not from motion. An intersection-triggered reveal would cost JS (breaks R-079) and animate the argument at a pace that competes with the reader — explicitly locked out (§4).
- **Content slot**: `why-ai.json[openingArgument.statsRow]` — unchanged content, new container.
- **Brand notes**: **A11y note on the omitted heading** — `StatsSection` wires `aria-labelledby` to its `<h2>` only when `heading` is provided. With `heading` omitted the `<section>` is an unnamed region. That is acceptable here because the band is *adjacent to the naming prose* and is pure-data, but if the reviewer wants a named landmark, pass a visually-restrained `heading` (e.g. the existing "by the numbers"-class line) or wrap with an `aria-label`. Designer recommendation: omit the heading (the prose names it); defer to the reviewer's a11y standard if it requires a named region. Flagged in Open Question W4.

### Section 5 — Section heading + five failure modes **[W-A delta: wrap in `<FailureModeList>`]**

- **DS primitive(s)**: `<FailureModeList heading eyebrow lede>` (organism) wrapping the five `<FailureMode>` molecules. Replaces the hand-rolled `<h2>` + `<p>` + `<div class="failure-modes-section">` + per-mode `<section aria-label>`.
- **Props (substantive)**:
  ```
  <FailureModeList
    eyebrow={failureModesIntro.eyebrow?}     // optional — only if the content has one; else omit
    heading={failureModesIntro.heading}      // maps to Section title (the current build's <h2>)
    lede={failureModesIntro.paragraph}       // the current build's intro <p>
  >
    {sortedModes.map((mode) => (
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
    ))}
  </FailureModeList>
  ```
- **Layout / spacing**: `FailureModeList` is a `<Section>` root (`<section>` + `aria-labelledby` from `heading`) with a plain `<div class="list">` child (no gap/padding — the `<FailureMode>` items own their own borders + `--space-10` top padding). `size="default"` = `--space-16` block padding. The five modes read as one ascending catalog, exactly as the spec intends.
- **Motion**: None. No per-mode reveal (locked out, §4).
- **Content slot**: `src/content/failure-modes.json` via the existing content collection, sorted by `index`. Unchanged source.
- **Brand notes**: **The per-mode inline stats stay as the current `.stats-row` (NOT a nested `StatsSection`).** DS rule: "Do NOT nest StatsSection inside another StatsSection" and these stats sit *inside* `<FailureMode>` children, which sit inside `<FailureModeList>`'s `<Section>`. A `StatsSection` here would also recess a second band immediately below the headline `fill` band — violating "never stack adjacent." Keep the per-mode stats as plain `<Stat>` atoms in a `role="list"` row on `--bg`. The one recessed exhibit is the headline band (Section 4); everything below it stays on the page canvas.

### Section 6 — `Statement` — the thesis pivot **[W-A delta: NEW beat — the signature moment]**

- **DS primitive(s)**: `<Statement>` (molecule). Placed at the structural pivot between "here is what's broken" (the failure modes, Section 5) and "here is what the leaders do" (Section 7).
- **Props (substantive)**:
  ```
  <Statement
    statement={pivotStatement}      // Draft: "The diagnosis comes before the build. That is the order pouk.ai works in."
    // as="p" (default) — renders a <div> wrapping a <p>; NOT a heading (emits no h1-h6).
    //   This is correct: the page <h1> lives in the Hero; the Statement is an assertion, not a heading.
    // hairline={true} — RECOMMENDED: adds a 1px top rule + --space-12 padding-top, marking the pivot
    //   as a deliberate editorial break between the two halves of the argument.
    // NO as="blockquote" — this is the brand's own conviction, not an attributed external quote.
    // NO supporting — the line stands alone; a supporting paragraph would dilute the assertion.
  />
  ```
- **Layout / spacing**: Sits on `--bg` (no band — the Statement is *typographic* depth, not surface depth; and a band here would stack adjacent to the Section 4 fill band's rhythm). `--fs-statement` (28–44px), `line-height: 1.2`, `text-wrap: balance`, italic-serif. With `hairline={true}` it carries its own `--space-12` top padding; the gap below to Section 7 is the next Section's block padding. The measure is the DS Statement default (it balances, not full-width).
- **Motion**: **None.** The Statement is static — no entrance, no reveal. The depth is the *scale interval* between the failure-mode body text and the 28–44px italic assertion, not motion. `prefers-reduced-motion` trivially satisfied (nothing to gate).
- **Content slot**: A single string. Designer recommendation: promote the existing `pivot` / tail-prose conviction line; PM/content records its canonical home (Open Question W3). Final wording is Arian's.
- **Brand notes**: **This is the page's signature moment** — the one place the page raises its voice, and it does so in a whisper at scale. DS rule: "Use sparingly — an editorial statement, not a tagline replacement; the page `<h1>` still lives in `<Hero>`." Honored: exactly one `<Statement>` on the page, it is not a heading, it does not replace the hero. After the reader has absorbed the failure modes and before the leaders section, the page stops *reporting* and starts *asserting*. Memorable because it's spare and large at once.

### Section 7 — What the leaders do differently + quartile stats **[mostly unchanged; quartile stats stay on `--bg`]**

- **DS primitive(s)**: `<h2>` + `<p>` + `<ul class="leaders-list">` (the desire engine — keep). The quartile stat row is `<StatsSection>` **without `fill`** (transparent, on `--bg`) — OR kept as the current `.quartile-stats` `role="list"` row (engineer's call; both are valid). Recommendation: adopt `<StatsSection>` *without* `fill` for landmark consistency with Section 4, but the transparency is load-bearing (A4 — no second recessed band in W-A).
- **Props (substantive)**:
  ```
  <h2>{leaders.heading}</h2>
  <p>{leaders.intro}</p>
  <ul class="leaders-list">{leaders.items.map(...)}</ul>
  <p>{leaders.outro}</p>

  <StatsSection dividers>           {/* NO fill — stays on --bg, the second stat moment does not recess (A4) */}
    {leaders.stats.map((stat) => (
      <Stat value={stat.value} caption={stat.caption} size="lg" />
    ))}
  </StatsSection>
  ```
- **Layout / spacing**: The quartile `StatsSection` (no `fill`) sits on `--bg`. This is the deliberate "two stat moments, one recessed" rhythm: the headline stats recess (the problem exhibit); the quartile stats sit on the canvas (the ceiling, stated plainly). If Arian picks W-B (Open Question W2), THIS band gets `fill` and the five failure modes are sandwiched between two non-adjacent recessed exhibits.
- **Motion**: None.
- **Content slot**: `why-ai.json[leaders]`.
- **Brand notes**: The leaders section is the *desire engine* (sales-content-gaps) — keep its content exactly. The only composition question is band budget (A4 / Open Question W2). Default: one band (W-A).

### Section 8 — Where pouk.ai works + discovery questions **[unchanged]**

- **DS primitive(s)**: `<h2>` + `<p>` + the discovery `<blockquote class="discovery-questions">` with an `<ol>` of italic `<li>` questions (D-04).
- **Props (substantive)**: `why-ai.json[whereWorks.heading / .body / .discoveryIntro / .questions / .closing]`.
- **Layout / spacing**: `.why-ai-main` column. Blockquote is inline-italic register, not a band.
- **Motion**: None.
- **Content slot**: `why-ai.json[whereWorks]`.
- **Brand notes**: The inline-italic discovery questions are a deliberate D-04 editorial choice — keep verbatim. This is prospect-aimed (OMC-V1).

### Section 9 — End CTA (dual contact mechanism) **[unchanged]**

- **DS primitive(s)**: The current `.end-cta` block — `mailto:` primary + booking secondary (muted link) conversion pair, plus a navigational hand-off line (Roles read-on). Per `meta/compositions/components/booking-affordance.md` §2 Context B and the contact-flow feature (FS-CF-1).
- **Props (substantive)**: `why-ai.json[endCta.primary / .booking / .secondary]`; `BOOKING_URL` from `src/lib/booking`.
- **Layout / spacing**: Three affordances read as: conversion pair | navigation hand-off. Unchanged.
- **Motion**: None. Link hover DS-internal.
- **Content slot**: `why-ai.json[endCta]`.
- **Brand notes**: The dual mechanism is owned by the contact-flow feature spec, not this composition — do not re-litigate. W-A does not touch the end CTA.

### Section 10 — References + Last reviewed + sticky TOC **[unchanged]**

- **DS primitive(s)**: None new. The `<section class="references">` footnote round-trip (D-01), the `.last-reviewed` line (D-03), and the CSS-only sticky right-rail `<nav class="why-ai-toc">` (D-02).
- **Props (substantive)**: `why-ai.json[references / referencesNote / lastReviewed]`; TOC derived from `sortedModes`.
- **Layout / spacing**: TOC is `position: sticky` on desktop ≥1024px, CSS-only (D-02) — **the one place on this page JS would be tempting and is correctly avoided**. References are an `<ol>` with back-anchors.
- **Motion**: None. (Sticky is CSS layout, not animation.)
- **Content slot**: `why-ai.json[references / referencesNote / lastReviewed]`.
- **Brand notes**: All three are shipped craft (D-01/D-02/D-03). The sticky TOC is CSS-only and stays CSS-only — adding an `IntersectionObserver` scroll-spy would break R-079 for marginal value. Keep it static-sticky.

## 3. Cross-section rhythm

The vertical rhythm of `/why-ai`, top to bottom, and how the one band gives the argument a spine:

1. `<SiteShell>` header — DS-owned.
2. `.site-page` top padding — `--space-12` (48px).
3. `<Hero size="display" entrance="stagger">` — page `<h1>`, DS-owned internal rhythm.
4. Opening argument prose — `--bg`, `--hero-max` measure.
5. **`<StatsSection fill dividers>`** — the one recessed `--surface-section` exhibit. `--space-16` block padding via Section. **This is the page's spine event.**
6. **Back on `--bg`** — `<FailureModeList>` (the five modes), `--space-16` block padding via its Section.
7. **`<Statement hairline>`** on `--bg` — the pivot; `--space-12` top padding from `hairline`. The thesis beat.
8. Leaders section + quartile `<StatsSection>` (**no `fill`** — stays on `--bg`).
9. Where-works + discovery blockquote — `--bg`.
10. End CTA — `--bg`.
11. References + Last reviewed — `--bg`.
12. `.site-page` bottom padding — `--space-12`. `<SiteShell>` footer — DS-owned.

**Rules that span the page:**
- **Exactly one `--surface-section` band (W-A).** The headline stats recess; nothing else does. This honors "max 5 bands, never adjacent" by using the single most-earning band. The two stat moments are deliberately differentiated: the *problem* exhibit recesses (a quoted figure); the *ceiling* exhibit (quartile stats) sits on the canvas. (W-B would add a second non-adjacent band — Open Question W2.)
- **One Statement, on `--bg`, with a hairline.** Typographic depth, not surface depth. The Statement is never on a band — a band plus the italic-serif scale would over-design the pivot.
- **No alternating-surface decoration.** The band earns its place by *clarifying the argument* (a recessed exhibit), not by giving the scroll stripes. One band, placed where it does work.
- **Optional feather divider (deferred).** The imagery direction (§2) allows a single `currentColor` feather companion to a `Divider` on one editorial page — `/why-ai` is a candidate. **Not proposed in this pass** (it should validate on `/404` first per imagery §6 sequence); flagged so a future revision can add at most one feather above the Statement's hairline. Max one per page. See `meta/compositions/components/feather-mark.md` §Placement.

Token compliance: every gap/padding resolves to a published `--space-N` token (`--space-12`, `--space-16`) or is DS-organism-internal. No raw px. No `--space-5/7/9/11`.

## 4. Motion choreography (page-level)

The page ships **zero JavaScript** and one CSS-only entrance animation:

- **Fires on initial render**: the `<Hero entrance="stagger">` reveal — title (150ms) / lede (300ms), CSS keyframes + `animation-delay` + `animation-fill-mode: both`, ~1.05s, zero JS. The "arrival" depth event. This is the *only* motion on the page.
- **Fires on scroll**: **nothing.** No intersection-triggered reveal on the stats band, the failure modes, or the Statement. An `IntersectionObserver` reveal would (a) cost JS, breaking the zero-JS contract (R-079/R-009), and (b) animate the argument at a pace that competes with the reader. **The reveal does not earn its hydration cost** — explicit per the template. The depth comes from the *static recessed band* and the *static Statement*, not from motion.
- **Fires never (locked out)**: scroll-triggered reveals, parallax, scroll-spy on the TOC (it is CSS `position: sticky`, not JS), stats count-up animation (DS forbids it on StatsSection), any animation on the Statement, any `IntersectionObserver`-driven effect. All would require `client:*` and break R-079.
- **Hover micro-interactions** (DS-internal, CSS-only): footnote-ref links, references back-anchors, TOC anchors, end-CTA links, nav/footer links. `--dur-fast` / `--easing-link`.

**`prefers-reduced-motion: reduce` behavior**: the hero stagger collapses via the DS's `:root !important` block in `tokens.css`; nothing else on the page animates, so there is nothing else to gate. No exception. The composition adds no `@media (prefers-reduced-motion)` rule of its own. There is no `StatusBadge` on this page, so the badge-pulse gate is not in play.

## 5. Icon picks (if applicable)

None. `/why-ai` is type-only (imagery direction §2: "the cited-stat rigor *is* the visual weight; an image here dilutes proof"). No Lucide glyphs. The only non-text marks are the footnote superscripts and the references back-anchor `↩` — both typographic characters, not icons. (If a future revision adds the optional feather divider per §3, that is a single decorative SVG, not an icon — see feather-mark composition.)

## 6. DS gaps surfaced

**None.** Every primitive named — `<Hero size="display">`, `<Hero entrance="stagger">`, `<StatsSection fill dividers>`, `<FailureModeList>`, `<FailureMode>`, `<Statement>`, `<Stat>` — ships in `@poukai-inc/ui@2.17.0` today. W-A is a pure-site refactor (adopt the organisms the page hand-rolls) plus three additive depth events. No DS proposal is needed.

**Cross-spec note (not a DS gap):** the `pivotStatement` string needs a canonical home. The current `why-ai.json` has a `pivot` string (rendered as a plain `<p>` today); W-A promotes a conviction line to a `<Statement>`. Whether the Statement text reuses the existing `pivot` string or is a new dedicated `why-ai.json[pivotStatement]` field is a content-data schema call routed to PM/content (Open Question W3 / W4) — not authored here. The `<Statement>` slot is content-agnostic; no DS work is implied.

## 7. Open questions for Arian

1. **W1 — Adopt W-A as specified?** Confirm the three depth events: hero `entrance="stagger"`, headline `<StatsSection fill dividers>`, and the pivot `<Statement>`. (Recommendation: yes — all pure-site, all trace to a depth the page deserves.)
2. **W2 — One band or two?** W-A (one recessed band on the headline stats) is the floor; W-B (the quartile leaders stats ALSO get `fill`, framing the failure modes between two non-adjacent recessed exhibits) is the centerpiece read. (Recommendation: ship W-A; hold W-B as a fast-follow if `/why-ai` should feel like the site's anchor. W-B stays ≤5 bands and non-adjacent, so it is on-contract either way.)
3. **W3 — Statement copy.** The `<Statement>` draft is *"The diagnosis comes before the build. That is the order pouk.ai works in."* — a placement of an existing conviction line. Confirm the wording or supply a replacement. (This is the page's signature moment; final word is yours.)
4. **W4 — IA / schema home.** `/why-ai` has no PM page spec at `meta/specs/pages/why-ai.md` (it lives in the content-data spec + the built JSON). Two sub-questions for PM: (a) should the `<Statement>` text be a new `why-ai.json[pivotStatement]` field or reuse the existing `pivot`? (b) should the headline `StatsSection` carry a named `heading` for landmark a11y, or is the omitted-heading region acceptable per the reviewer's standard? (Recommendation: dedicated field for the Statement; omit the heading unless the reviewer requires a named region.)
5. **W5 — Optional feather divider (defer).** The imagery direction allows one `currentColor` feather above the Statement's hairline. Recommendation: **defer** — validate the feather on `/404` first (imagery §6 sequence), then consider it here in a later revision. Confirm defer, or pull it forward.

This composition reaches `Approved` once W1–W3 have Arian's calls and W4 is routed to PM. W5 can stay deferred.

## 8. Out of scope

- **Final copy.** The Statement text and any `why-ai.json` field changes are content/PM's lane. This composition anchors the Statement visually with a `Draft:` line; it does not author it.
- **The `why-ai.json` schema and `failure-modes.json`.** The engineer/PM own the content-data contract. W-A consumes the existing data; the only schema touch is the optional `pivotStatement` field (Open Question W4), routed to PM.
- **The contact-flow end-CTA mechanism.** Owned by `meta/specs/features/contact-flow.md` + the booking-affordance composition. W-A does not touch it.
- **W-B build.** The two-band option is documented (Open Question W2) but not the W-A floor. If Arian picks W-B, it is a one-prop change (`fill` on the quartile `StatsSection`) — recorded, not pre-built.
- **The feather divider.** Deferred (Open Question W5); the recipe lives in the feather-mark component composition.
- **`Quote` / `TestimonialBlock`.** GATED on real permissioned quotes (sales-content-gaps §5). Not composed against placeholders.
- **DS-side proposal authoring.** None needed — no gap surfaced.
- **Other pages.** `/`, `/engagements`, `/roles`, `/principles`, `/about`, `/onboarding` each have their own composition.
