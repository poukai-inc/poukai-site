# Composition: Writing (index + essay template)

**Route**: `/writing` (index) + `/writing/[slug]` (per-essay)
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-31
**Resolutions (Arian, 2026-05-31)**: Index Hero = `size="intimate"` (LOCKED, §7 Q1) · quotable line = `<Pull variant="sans">` (LOCKED, §7 Q2) · index empty-state = silence, no apology banner (LOCKED, §7 Q3) · email line ships as native zero-JS `<form action>`, Buttondown approved, RSS-only is the documented fallback (LOCKED, §7 Q4). Q5 (essay-foot email form), Q6 (RSS glyph) remain open.
**Governing spec**: `meta/specs/pages/writing.md` (Approved 2026-05-31) — §4 IA (4a index, 4b essay)
**Content draft**: `meta/content/drafts/pages/writing.md` (v0.1, 2026-05-31) — index chrome only; essays are separate per-essay deliverables
**Content-data spec**: `meta/specs/content/writing.json.md` (Approved 2026-05-31) — per-essay frontmatter + RSS/email-line constraints
**Reference implementation**: `/why-ai` (`src/content/why-ai.json`) — the shareability template every essay inherits (spec §6.0)
**DS version targeted**: `@poukai-inc/ui@2.0.0` (installed; `node_modules/@poukai-inc/ui/dist/llms-full.txt` is the binding reference)

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The essay list composes as `<LinkCard variant="quiet">` per entry.** This is the load-bearing index call. `LinkCard variant="quiet"` is the DS's purpose-built "dense vertical list" primitive (`llms-full.txt` §LinkCard): `<a>` root (whole entry routes to `/writing/[slug]`), `--bg` background, hairline rule on top only, no radius, `eyebrow`/`title`/`titleAs`/`body`/`footer` slots, hover = top-border accent shift. It reads as an *index*, not a content-marketing grid — exactly spec §4a item 3 / draft §2. It also resolves the draft Flag 1 heading concern: `title` renders as `titleAs` (set to `h3`, not a section heading), so the index emits one H1 (hero) and no per-essay headings.
- **A2 — The ungated email line is a plain `<form action method="post">` with a bare `<Input type="email">` atom + `<Button type="submit">` — NOT the DS `<Form>` molecule.** Critical: the DS `<Form>` molecule (`llms-full.txt` §Form) *requires* an `onSubmit` handler and *prevents default browser submit* — it is inherently a hydrated JS component and would break the zero-JS contract (spec §8, §7(d)). The zero-JS path is a native `<form action="<buttondown-url>" method="post">` posting directly to the hosted provider, composed from the static-safe `<Input>` and `<Button>` atoms (both render as plain HTML; only `<Form>`'s onSubmit is JS). See §2 Index-Section-4 and §6.
- **A3 — The essay template inherits `/why-ai`'s stat/reference vocabulary verbatim**: `<Stat>` for screenshot-able stat blocks, a references list mirroring `why-ai.json.references[]` + `referencesNote`, Article JSON-LD per the `why-ai.json.jsonLd` shape. This answers the spec §4b `<NEEDS: confirm /why-ai stat/reference primitives are reusable for arbitrary essays>` — they are. No DS gap.
- **A4 — Essay bodies are Markdown/MDX (engineer's stack pick, spec §6 open).** Composition is store-agnostic: it specifies *which DS primitive each authored block maps to*, whether the stat block is an inline MDX `<Stat>` or a frontmatter-array-driven `<Stat>` row. The engineer's Markdown-vs-MDX choice drives the authoring ergonomics, not the rendered composition.
- **A5 — RSS ships day one; the email line SHIPS as the native zero-JS `<form action>` (Buttondown approved by Arian, 2026-05-31 — §7 Q4).** The `<form action>` recipe (Index-Section-4 primary) is the shipping path; the RSS-only fallback recipe remains documented for the embed-unworkable contingency only. *(Supersedes the original "ships only if provisioned" framing — provisioning is confirmed.)*
- **A6 — `/writing` is NOT in the primary nav** (resolved, spec §9) — reached via footer link + essay cross-links. The composition adds `Writing` to the `<Footer links>` row, not the SiteShell `routes[]`.

---

## 1. Intent

`/writing` is the one surface that does retention and virality rather than direct conversion, and the composition's whole job is to make every essay feel like *an operator forwarding their own field notes* — useful enough to screenshot, sourced enough to cite, quiet enough to never read as marketing. The **index** should feel like a clean, scannable index of sharp claims — a reverse-chron list where each entry is a claim worth clicking, with nothing between the reader and the essays (no excerpt walls, no cards-as-ads, no "subscribe to unlock"). The **essay template** is where the shareability work lands: it inherits `/why-ai`'s proven rhythm — a claim-shaped `<h1>`, body prose punctuated by self-contained stat blocks engineered to survive a screenshot into a slide deck, one quotable line set apart in the editorial register, a sourced references list, and — quietly, only at the foot — a single earned funnel link. The reader's eye should move: claim → argument → the screenshot moment (a stat block) → the lift-able line → references → and only then the quiet exit into the funnel. Restraint is the differentiation: the page earns the pass-along by being genuinely useful on the reader's terms, and the conversion is a consequence, never the reason.

## 2. Section-by-section composition

Two surfaces. The order in each sub-section IS the render order.

---

### 2A. Index — `/writing`

#### Index Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism) + `<Footer>` in the footer slot, wrapped site-side by `ShellWrapper.tsx`.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/writing"                        // marks Writing current on /writing AND /writing/[slug] — spec §8
    routes={[ /* Why AI · Roles · Engagements · Principles · About — /writing is NOT in primary nav, spec §9 */ ]}
    footer={
      <Footer
        copyright="© Pouk AI INC <year>"
        email="hello@pouk.ai"
        links={[
          { href: "/writing",          label: "Writing" },       // footer link — the primary nav-absent entry point
          { href: "/writing/rss.xml",  label: "RSS" },           // RSS reachable from footer (spec §4a item 5 / §8)
        ]}
        linksLabel="Footer"
      />
    }
  >
    {/* Hero + essay list + retention block — Index Sections 2–4 */}
  </SiteShell>
  ```
- **Layout / spacing**: `.site-page` (`--content-max` 64rem, `--space-12` block padding), consistent with every route.
- **Motion**: None at shell level.
- **Content slot**: Footer links carry `Writing` + `RSS`. The `currentRoute` must match `/writing` for both the index and `/writing/[slug]` so the footer marks Writing current across the surface (spec §8).
- **Brand notes**: Wordmark via `<SiteShell>` only. The RSS link in the footer is the global feed entry (the index retention block, Section 4, may also surface it — designer call, both permitted). `sitemap.xml` includes `/writing` and every non-draft `/writing/[slug]` (spec §8).

#### Index Section 2 — `Hero` (frame the corpus)

- **DS primitive(s)**: `<Hero>`. Recommend **`size="intimate"`** here (the lower-density register the DS earmarks for "principle lists" and low-density doorways — `llms-full.txt` §Hero). The index is a quiet list page, not a landing page; the intimate title lets the essay list breathe earlier. This is a *justified* density signal per the `/` composition's density-guardrail note, not an inherited downgrade — the justification is "editorial index where the list is the substance."
- **Props (substantive)**:
  ```
  <Hero
    size="intimate"
    eyebrow="Writing"                              // draft §2 Hero
    title="Notes from the work"                    // draft §2 (recommended) — kills the "thought leadership" read
    lede={
      <>
        Essays on what actually happens when AI meets a real workflow — the
        failure modes, the fixes, and the patterns that repeat across
        engagements. Written for operators, sourced where it counts, and meant
        to be useful whether or not you ever work with pouk.ai.
      </>
    }                                              // 2 sentences, within Hero 1–3 cap — spec §4a item 2 / §5.3
    // NO status, NO cta, NO illustration.
  />
  ```
- **Layout / spacing**: Hero text column capped at `--hero-max` (38rem). Hero is the page `<h1>` (draft §3). Gap Hero → essay list `--space-16` (64px) — the list is the page body; the generous gap sets it apart from the framing.
- **Motion**: Static. No `entrance="stagger"` (an index page wants calm). Reduced-motion trivially satisfied.
- **Content slot**: Index hero prose is page-chrome substance (hardcoded in the index template or a small `writing-index.json` `meta` block — engineer call). `<title>`: `Writing — pouk.ai`; meta description per draft §3.
- **Brand notes**: "**useful whether or not you ever work with pouk.ai**" (draft §4) is the line that distinguishes this corpus from marketing — preserve it. Title `Notes from the work` is recommended over plain `Writing` (draft §7 Q3 — Arian's call; both hold).

#### Index Section 3 — Essay list (reverse-chronological index)

- **DS primitive(s)**: `<LinkCard variant="quiet">`, one per non-draft essay, rendered in a vertical list. **No grid** — a vertical stack reads as an index; a grid reads as a content-marketing wall (spec §4a item 3, draft §2).
- **Props (substantive)** (per essay, from frontmatter):
  ```
  {essays.map((essay) => (
    <LinkCard
      variant="quiet"
      href={`/writing/${essay.slug}`}              // whole entry is the click target — frontmatter.slug
      title={essay.title}                          // frontmatter.title (claim-led)
      titleAs="h3"                                 // NOT a section heading — draft Flag 1 / §3 heading outline
      body={essay.claim}                           // frontmatter.claim — the one-line hook beneath the title
      footer={<Time dateTime={essay.datePublished} format="absolute" />}  // muted date, DS <Time> atom
    />
  ))}
  ```
- **Layout / spacing**: `LinkCard variant="quiet"` provides its own top-hairline rule + `--space-4` block padding per entry — the entries stack with a 1px rule between them, no card fills, no radius. The list container needs no extra gap (the quiet variant's padding + top-border IS the rhythm). Reverse-chronological sort by `datePublished` (content-data spec §5.1). Optional list lead-in: draft §2 recommends none ("the hero already framed the corpus"); if scannability wants a label, a single muted `<Eyebrow>Essays</Eyebrow>` above the list — **recommend none**.
- **Motion**: Per-entry hover = DS-internal top-border accent shift (`--dur-mid`, `--easing-link`) + `:active` `translateY(1px)` at `--dur-press`. No site-side motion. Reduced-motion-gated by the DS.
- **Content slot**: `getCollection('writing')` filtered to non-draft, sorted reverse-chron (content-data spec §3/§5.1). One entry → one LinkCard. `draft: true` essays are excluded (spec §8).
- **Brand notes**: Three things per entry only — title (`<a>`), claim (one line), date (muted) — per draft §2. **No** "read more", no excerpt, no tag chips, no author byline (attribution is Organization-level — content-data spec §5.1). The `<Time>` atom emits semantic `<time datetime>` and pairs with the muted footer register. The LinkCard's "no nested interactive elements" rule is honored: the date is a non-interactive `<Time>`, not a link. **Empty/seed state**: per draft §4/§7 Q2, render **no "more coming" apology** — a short list of sharp essays reads as deliberate; an apology manufactures the decay-theatre read. The §7(e) mitigation is banked essays, not filler copy. (See §7 Q3.)

#### Index Section 4 — Retention block (ungated email line + RSS)

- **DS primitive(s)**: A plain native `<form action method="post">` (NOT the DS `<Form>` molecule — see A2/§6), composing a bare `<Input type="email">` atom + `<Button type="submit" size="compact">`; plus an RSS `<Link>`. A muted lead line (`<p>`) frames it.
- **Props (substantive)** (email line — ships only if Buttondown provisioned):
  ```
  <Section size="tight" as="div">
    <p>New essays, by email when they land. No list, no pitch — just the notes.</p>   {/* draft §2 retention line */}
    <form action="https://buttondown.com/api/emails/embed-subscribe/<handle>" method="post">
      {/* native form, no onSubmit, no JS — posts straight to the hosted provider */}
      <label htmlFor="bd-email" className="visually-hidden">Email address</label>
      <Input id="bd-email" type="email" name="email" placeholder="you@company.com" required />
      <Button type="submit" size="compact">Subscribe</Button>
    </form>
    <Link href="/writing/rss.xml" variant="muted-link">RSS</Link>                       {/* the feed link */}
  </Section>
  ```
  RSS-only fallback (if Buttondown not provisioned — content-data spec §6):
  ```
  <Section size="tight" as="div">
    <p>Follow new essays by RSS.</p>                                                   {/* draft §2 fallback line */}
    <Link href="/writing/rss.xml" variant="muted-link">RSS</Link>
  </Section>
  ```
- **Layout / spacing**: One retention block, **once, low on the page** (PM default, spec §4a item 4) — below the essay list, above the footer. `Section size="tight"` = `--space-12` block padding. The email `<Input>` + `<Button size="compact">` sit on one row (the DS pairs `Input size` with `Button size` on the same height ladder — use `Input size="md"` against `Button size="compact"`-40px, or `Input size="sm"` against a `sm` button; recommend `compact` button as the editorial-quiet CTA register). RSS link sits adjacent or just below. Gap list → retention block `--space-16` (64px).
- **Motion**: None. Button `:active` press (`--dur-press`) and link hover are DS-internal, reduced-motion-gated.
- **Content slot**: Static chrome (draft §2). The Buttondown `action` URL is Arian-provisioned infra (out of composition scope; engineer wires).
- **Brand notes**: "**No list, no pitch — just the notes.**" (draft §4) is the load-bearing anti-funnel line — without it, even an ungated form reads as a newsletter signup. Button label `Subscribe` is plain and honest (draft §4/§7 Q5); the line above carries the anti-funnel register so the button can stay plain. **Zero-JS, zero-gate**: native `<form action>`, no popup, no modal, no interstitial, no hydrated island (spec §8, §7(d)). The visually-hidden `<label>` gives the input an accessible name without visible chrome (the DS ships `<VisuallyHidden>`; use it or a `.visually-hidden` utility). `Input` uses `--bg-elevated` (#FFFFFF) fill by DS contract — the one permitted white surface, correct here as a form field rises above the page.

#### Index Section 5 — `SiteShell` footer

- **DS primitive(s)**: `<Footer>` (specified in Index Section 1). Carries the `Writing` + `RSS` links.
- **Brand notes**: Footer link order is consistent across the surface. RSS reachable from the footer (spec §8). No Wordmark in Footer.

---

### 2B. Essay template — `/writing/[slug]`

Inherits the `/why-ai` shareability template (spec §6.0). Every essay carries these units in order.

#### Essay Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell currentRoute="/writing">` + `<Footer>` — identical to the index (so Writing is marked current on essays too, spec §8). Same `routes[]` (Writing absent from primary nav), same footer links.
- **Brand notes**: One `<SiteShell>` per page. Static HTML.

#### Essay Section 2 — Essay hero (`<h1>` = the canonical claim)

- **DS primitive(s)**: `<Hero size="display">`. The essay's `<h1>` is the highest-stakes shareability unit (it states the claim the essay owns and must survive being pasted into a DM) — it earns the `display` register, not `intimate`. The one-line hook/lede sits in the Hero `lede` slot.
- **Props (substantive)**:
  ```
  <Hero
    size="display"
    eyebrow={<Time dateTime={frontmatter.datePublished} format="long" />}   {/* "May 2026" — quiet dateline as eyebrow */}
    title={frontmatter.title}                       // claim-led <h1> — frontmatter.title (content-data spec §4)
    lede={frontmatter.claim}                         // the one-line hook that survives a context-free paste — frontmatter.claim
    // NO status, NO cta — the funnel link lives at the FOOT (the earned exit), never the top.
  />
  ```
- **Layout / spacing**: Hero owns the page `<h1>` (exactly one per essay — spec §8). Text column `--hero-max`. Using the `eyebrow` slot for the dateline gives a quiet publish-date signal at the top without a heading.
- **Motion**: Static (no stagger on a reading page).
- **Content slot**: `frontmatter.title` / `.claim` / `.datePublished`. The `<title>` tag is `${frontmatter.title} — pouk.ai`; meta description = `frontmatter.description` (≤155, content-data spec §4).
- **Brand notes**: The claim-as-`<h1>` is the §5.1 shareability mechanic — preserve it as the title verbatim. No CTA at the top: the offering is "the answer to the essay, never the reason for it" (spec §1) — the funnel link is earned at the foot only.

#### Essay Section 3 — Body (argument + stat blocks + quotable line)

The body is authored prose (Markdown/MDX). The composition specifies which DS primitive each *authored block type* maps to. The body column caps at `--hero-max` (38rem) for prose measure (matching `/why-ai`, `Pull`, `FieldNote`, `Section` header).

- **Prose** → the engineer's prose wrapper (DS `<Prose>` if used on `/why-ai`, else the site prose scope). `--fs-body`, `--fg`, line-height 1.55.
- **Screenshot-able stat block** → **`<Stat>`** (DS atom): `value` (numeral or numeral+unit) + caption + `source` (citation). This is the `/why-ai` `statsRow` pattern (`why-ai.json.statsRow` → `Stat value/caption/source`). Each stat block is **self-contained for a zero-context screenshot** (spec §5.1) — value, caption, attributed source all in one bordered/legible unit. DS constraints honored: **max 4 `<Stat>` per section, max 1 `size="lg"` per section** (`llms-full.txt` §Stat). For a single foregrounded stat, `size="lg"`; for a row of 2–4, default size. The `source` must name the citation (e.g. "Gartner, 2026"), pairing with the references list (Section 4).
  ```
  // Single foregrounded stat (the screenshot moment):
  <Stat size="lg" value="85%" caption="of AI projects fail to meet business goals" source="Gartner, 2026" />
  // Row of supporting stats (max 4):
  <div className="stats-row"> {/* the /why-ai statsRow layout — site-side flex/grid, existing pattern */}
    <Stat value="12–18%" caption="capture meaningful ROI" source="Gartner, 2026" />
    <Stat value="$300B"  caption="AI venture funding, Q1 2026" source="CT Labs, 2026" />
  </div>
  ```
- **Quotable line** → **`<Pull variant="sans">`** (DS molecule): the lift-able sentence, set apart in the editorial register. **`variant="sans"`** (Geist roman), *not* `serif` — the spec anchors the quotable line to the `/principles` register ("the diagnosis comes before the build"), which is operator-grade/technical, and the DS earmarks `variant="sans"` for "technical or operator-grade content where Instrument Serif feels mismatched." Left rule (3px `--hairline`), `--fs-pull` (20–26px), `--space-8` block margin. **Not** a `<Statement>` (that is a once-per-page brand assertion, and the page's display moment already lives in the Hero — using `<Statement>` would create a competing display beat). One `<Pull>` per essay minimum (spec §5.1 "at least one quotable line"); more than 3 is editorial judgment, not a constraint.
  ```
  <Pull variant="sans">A pilot that works in a demo and dies in production isn't a model problem.</Pull>
  ```
- **Inline technical aside** (optional, if an essay needs a caveat/data footnote) → **`<FieldNote>`** (DS molecule) — 1px left rule, quieter than Pull, for a sourced caveat inline with body copy. Optional per essay.
- **Layout / spacing**: Body single-column, `--hero-max` prose measure. `<Stat>` rows and `<Pull>` sit in the prose flow with their DS-owned block margins (`Pull` = `--space-8` above/below; adjacent `<p>` margin adds for ~48px editorial rhythm). Hero → body gap `--space-16` (64px).
- **Motion**: None. Static editorial primitives (`Stat`, `Pull`, `FieldNote` are all static by DS contract). Reduced-motion trivially satisfied.
- **Content slot**: The essay body (MDX inline `<Stat>`/`<Pull>`, or frontmatter `statsRow` array rendered by the template — engineer's stack pick, spec §6). Stats and the quotable line are authored per-essay against the §5.1 mechanics.
- **Brand notes**: The stat block is "the highest-leverage B2B-social share unit" (spec §5.1) — it must survive a screenshot with zero context, so each `<Stat>` carries its own `source`. Any essay carrying a stat **must** carry a references list (Section 4) — unsourced stats fail the editorial bar (content-data spec §5.1/§5.2). The quotable line is "written on purpose" (spec §5.1) — the composition gives it the `<Pull>` treatment so it is visually liftable.

#### Essay Section 4 — References (sourced citations, canonical URLs)

- **DS primitive(s)**: Mirror the `/why-ai` references composition exactly — an ordered list of `{ index, title, source, url }` citations + a `referencesNote`. The `/why-ai` page already ships this (from `why-ai.json.references[]` + `.referencesNote`); reuse that site-side composition verbatim. Citations render as numbered entries with the source name and a canonical external `<Link target="_blank">` (DS auto-applies `rel="noopener noreferrer"`).
- **Props (substantive)**:
  ```
  // Reuse the /why-ai references block. Per reference (frontmatter.references[]):
  //   [{index}] {title} — {source}. <Link href={url} target="_blank">{url-or-source}</Link>
  // Plus the referencesNote constant: "Source URLs cleaned from email click-trackers to canonical destinations."
  ```
- **Layout / spacing**: Below the body, above the funnel spine. `--fs-meta` register, `--fg-muted` for the note. Body → references gap `--space-16` (64px). References → funnel-spine gap `--space-12` (48px).
- **Motion**: None.
- **Content slot**: `frontmatter.references[]` (content-data spec §4 — `{ index, title, source, url }`, mirroring `why-ai.json`). Required for any essay carrying a stat (spec §8). `referencesNote` is a composition constant or optional frontmatter (engineer call — content-data spec §4).
- **Brand notes**: Canonical URLs only (click-trackers stripped — the `referencesNote` discipline). Sourced essays earn inbound links — the virality input (spec §5.1). This block is **non-negotiable for any essay carrying stats** (spec §4b item 4).

#### Essay Section 5 — Internal-link spine (foot-of-essay funnel link, REQUIRED)

- **DS primitive(s)**: A single quiet `<Link variant="default">` (for an internal route) or `<EmailLink>` (for a `mailto:`), framed by a muted lead line (`<p>`). **One link, earned, at the foot** — not a banner, not stacked CTAs (spec §5.3, §6.4).
- **Props (substantive)**:
  ```
  <Section size="tight" as="div">
    {/* lead line is per-essay editorial; the link is the frontmatter.funnelExit */}
    <Link href={frontmatter.funnelExit.href} variant="default">
      {frontmatter.funnelExit.text}                {/* e.g. "Why AI →" / "Roles →" / "Pilot →" */}
    </Link>
  </Section>
  ```
- **Layout / spacing**: The last content block before the footer. `Section size="tight"` = `--space-12` padding. The `→` in the link text is the literal HTML entity (consistent with `/why-ai`'s `Roles →` and the `/` lede arrow — body-font metrics, not a Lucide glyph).
- **Motion**: None. Link hover DS-internal.
- **Content slot**: `frontmatter.funnelExit.{text,href}` (content-data spec §4). `href` is one of `/why-ai`, `/roles#<role>`, `/engagements`, or `/engagements#<rung>` (validated, content-data spec §5.1). **Every non-draft essay must have a valid `funnelExit` — no dead-ends** (spec §8).
- **Brand notes**: This is "the highest-ROI retention + conversion mechanic" and is **required** (spec §4b item 5). The quiet, single, earned funnel link of §6.4 — not a banner, not urgency, not stacked CTAs. The internal-link spine carries the conversion intent downstream to `/why-ai → /roles → mailto:` (or now `/engagements`). The composition does **not** add a second CTA, a mid-essay link, or any urgency affordance.

#### Essay Section 6 — Retention line (optional, per essay)

- **DS primitive(s)**: The same ungated email line treatment as Index Section 4 (plain `<form action>`, zero-JS), MAY repeat at essay foot (spec §4b item 6, designer call). **Recommend: do not repeat the email form on essays** — the foot-of-essay funnel spine (Section 5) is the essay's single earned exit, and stacking an email form beneath it dilutes that one quiet link toward "stacked CTAs" (the §6.4 reject column). The global RSS link in the footer is sufficient retention chrome on essays. If Arian wants it, the recipe is identical to Index Section 4. See §7 Q4.
- **Brand notes**: Keeping the essay foot to a single funnel link preserves the "one quiet exit" discipline. RSS is global (footer).

#### Essay Section 7 — `SiteShell` footer

- **DS primitive(s)**: `<Footer>` (specified in Essay Section 1). Same as index.

#### Essay meta / JSON-LD (not a visible section — head infrastructure)

- **Article JSON-LD** per the `why-ai.json.jsonLd` shape: `@type: Article`, `headline` (= `frontmatter.title`), `description`, `url` (canonical `/writing/[slug]`), `author`/`publisher` Organization pouk.ai, `datePublished`, `dateModified` (spec §5.4, content-data spec §5.3). Engineer renders from frontmatter.
- **OG**: per-essay OG title/description from `frontmatter`; OG image from `frontmatter.ogImage` when set, else `public/og.png` fallback (spec §9, content-data spec §4). `ogClaim` drives the per-essay card line when cards are automated (fast-follow per spec §9).
- **Canonical**: `https://pouk.ai/writing/[slug]`.

## 3. Cross-section rhythm

**Index** vertical rhythm:
1. SiteShell header (DS-owned) → `.site-page` `--space-12` top pad.
2. `<Hero size="intimate">` (page `<h1>`).
3. Hero → essay list `--space-16` (64px) — list is the body.
4. Essay list — `<LinkCard variant="quiet">` stack; per-entry top-hairline + `--space-4` padding IS the inter-entry rhythm (no extra gap). Reverse-chron.
5. List → retention block `--space-16` (64px).
6. Retention block (`Section size="tight"`, `--space-12` padding) — once, low on the page.
7. `.site-page` bottom pad `--space-12` → SiteShell footer (DS-owned).

**Essay** vertical rhythm:
1. SiteShell header → `.site-page` `--space-12` top pad.
2. `<Hero size="display">` (page `<h1>` = claim) → body `--space-16` (64px).
3. Body — `--hero-max` prose measure; `<Stat>` rows and `<Pull variant="sans">` punctuate with DS-owned block margins (`Pull` `--space-8`).
4. Body → references `--space-16` (64px).
5. References → funnel spine `--space-12` (48px).
6. Funnel spine (`Section size="tight"`) — the single earned exit.
7. `.site-page` bottom pad `--space-12` → SiteShell footer.

**Rules that span both surfaces:**
- **Prose measure is `--hero-max` (38rem)** everywhere text reads at body speed — index hero lede, essay hero lede, essay body, `<Pull>`, references. Consistent with `/why-ai`. Stat rows may exceed the prose measure (a 2–4 `<Stat>` row can use the wider `--content-max` if the design wants the stats to spread — engineer/designer call; default is prose-measure for screenshot framing).
- **No nested interactive elements** (DS LinkCard hard rule): index entries are whole-card links with a non-interactive `<Time>` footer; essay body links are inline prose `<a>` only; the funnel spine is one `<Link>`.
- **One `<h1>` per surface**: index → hero title; essay → hero title (the claim). The essay-list entries are `titleAs="h3"`, NOT headings (draft Flag 1 / §3). Stat captions, Pull, references are not headings.
- **Token compliance**: every gap is a published `--space-N` (`--space-4`, `--space-12`, `--space-16`). No `--space-5/7/9/11`, no raw px.

## 4. Motion choreography (page-level)

Both surfaces ship **zero JavaScript** and **zero composition-level animation**:

- **Fires on initial render**: nothing. No Hero stagger (both surfaces are reading/scanning pages; the stagger is a doorway flourish).
- **Fires on scroll**: nothing. No intersection-triggered reveal on the essay list or on stat blocks. A scroll reveal on stat blocks would require `IntersectionObserver` = JS, breaking the zero-JS AC (spec §8) — and stat blocks must be screenshot-able at any scroll position, which a fade-in-on-intersection would fight. **The reveal does not earn its hydration cost.**
- **Fires never (locked out)**: scroll reveal, parallax, scroll-spy, view counters, reading-progress bars, social-share-button widgets, comment/reaction state, animated stat counters (`NumberFormat` has "no animated counters" by DS contract anyway), any `client:*` directive, any hydrated email form.
- **Hover micro-interactions** (DS-internal, CSS-only, reduced-motion-gated): LinkCard top-border accent shift + `:active` translateY; prose/funnel/RSS `<Link>` underline grow; `EmailLink` underline grow; `<Button type="submit">` `:active` press; nav/footer hover.

**`prefers-reduced-motion: reduce`**: every animation (all link/card hover transitions, the button press) is disabled by the DS `:root !important` block in `tokens.css`. No exception, no site-side `@media` rule needed. No StatusBadge on either surface, so no badge-pulse gate.

## 5. Icon picks

Minimal. The corpus competes by being typographic, not iconographic.

- **Essay-list entries**: **no per-entry icon.** A LinkCard `icon` slot exists, but an icon per essay would push the index toward a content-marketing grid (the exact failure mode). Entries are title + claim + date only (draft §2). None.
- **Funnel-spine link / `/why-ai` `Roles →`**: the literal `→` **HTML entity**, not a Lucide `ArrowRight` — consistent with the ratified `/` and `/why-ai` arrow decision (body-font metrics, reads as prose).
- **RSS link**: the bare text label `RSS` (draft §2). **Optionally** a leading Lucide **`Rss`** glyph at `size={16}` (`--icon-sm`, pairs with `--fs-meta`), decorative `aria-hidden`, if the designer wants a feed affordance — recommend the bare label for restraint; the `Rss` glyph is an acceptable quiet addition if Arian wants the conventional feed cue. (Draft §2 says "the bare `RSS` (or a feed glyph + `RSS`)".)
- **Email-line submit button**: no icon — plain `Subscribe` label.
- **Stat / Pull / references**: no icons (DS `<Stat>`, `<Pull>`, references are typographic).

## 6. DS gaps surfaced

**None.** Both surfaces assemble from existing `@poukai-inc/ui@2.0.0` primitives. The spec §4b open question — `<NEEDS: confirm /why-ai stat/reference primitives are reusable for arbitrary essays>` — is **confirmed reusable**: `<Stat>`, the references composition, and the Article JSON-LD shape are all content-agnostic and already ship on `/why-ai`.

One **anti-gap** worth recording so the engineer does not reach for the wrong primitive:

- **The ungated email line must NOT use the DS `<Form>` molecule.** `<Form>` (`llms-full.txt` §Form) *requires* an `onSubmit: (data) => void | Promise<void>` handler and *prevents default browser submit* — it is a hydrated JS component by contract. Using it would force a `client:*` directive and break the zero-JS AC (spec §8, §7(d)). The zero-JS path is a **native `<form action method="post">`** posting directly to Buttondown, composed from the static-safe `<Input>` and `<Button>` atoms (which render as plain HTML; only `<Form>`'s `onSubmit` is the JS surface). This is a *composition* decision, not a DS gap — the right primitives exist; the wrong one (`<Form>`) must simply be avoided. If a future requirement needs client-side validation/feedback on the email line, *that* would be a zero-JS-contract conversation (and likely a `client:*` exception request to the reviewer), not a DS gap.

No `meta/proposals/ds-side/` request is needed for either surface.

## 7. Open questions for Arian

- **Q1 — Index Hero `size="intimate"` vs. `display`. — RESOLVED 2026-05-31 (Arian): `size="intimate"`, LOCKED.** The index Hero is `intimate` (low-density list page; lets the essay list breathe earlier). Essay heroes stay `display` (the claim-`<h1>` earns full weight). The split is binding; §2A Index-Section-2 and §2B Essay-Section-2 already reflect it.
- **Q2 — Quotable line as `<Pull variant="sans">` vs. `serif`. — RESOLVED 2026-05-31 (Arian): `<Pull variant="sans">`, LOCKED.** The quotable line renders in the operator-grade `variant="sans"` register (anchored to `/principles`), not Instrument Serif italic. §2B Essay-Section-3 already reflects it. (A per-essay `serif` override remains technically possible but is not the default and needs an explicit per-essay call.)
- **Q3 — Empty/seed state on the index: silence vs. an expectation-setting line. — RESOLVED 2026-05-31 (Arian): SILENCE (no apology banner), LOCKED.** The index renders **no** "more essays coming" copy — a short list of sharp essays reads as deliberate; the §7(e) decay-theatre mitigation is banked essays, not filler. §2A Index-Section-3 brand notes already reflect it.
- **Q4 — Email line SHIPS as the native zero-JS `<form action>`. — RESOLVED 2026-05-31 (Arian): Buttondown APPROVED; the `<form action>` recipe is PRIMARY, RSS-only is the documented fallback.** The ungated email line ships day one as the native `<form action method="post">` posting to Buttondown (Index-Section-4 primary recipe), zero-JS, no `<Form>` molecule (§6 anti-gap). The RSS-only fallback (Index-Section-4 fallback recipe) remains documented for the contingency that the embed proves unworkable, but it is no longer the default path — the email line is now a shipping unit, not a conditional. This supersedes A5's "ships only if provisioned" framing: provisioning is confirmed.
- **Q5 — Repeat the email form at essay foot (not recommended) vs. funnel-spine-only.** *(Open — not in Arian's 2026-05-31 resolution batch.)* I recommend the essay foot carries ONLY the single funnel-spine link — stacking an email form beneath it dilutes the "one quiet exit" discipline toward stacked CTAs. RSS stays global (footer). If you want the email form on essays too, the recipe is Index Section 4 repeated. Recommend funnel-spine-only on essays. Your call.
- **Q6 — RSS link: bare `RSS` label (recommended) vs. `Rss` glyph + label.** *(Open — not in Arian's 2026-05-31 resolution batch.)* Bare label is the restrained pick; the conventional feed glyph (`Rss` at 16px) is an acceptable quiet addition. Recommend bare. Your call. (Matches content draft §2 designer-call note.)

## 8. Out of scope

- **Essay bodies and final copy.** Each `/writing/[slug]` essay is a separate per-essay deliverable (body, stat blocks, quotable line, references, frontmatter) authored against the §5.2 ship/reject bar. The content draft's §5c sample seed essay is illustrative only. This composition specifies the *template*, not any essay's words.
- **The content-collection schema, RSS-feed generation, the Buttondown `<form action>` URL, the stack pick (collections vs MDX vs JSON), `getStaticPaths()`, `getCollection()`.** All engineering, per content-data spec §6/§8 and spec §6. The composition is store-agnostic.
- **Buttondown provisioning.** Arian's call; if not provisioned, the RSS-only fallback ships (Index Section 4) and the email line is deferred (content-data spec §6).
- **Per-essay OG card generation.** Recommended as the shareability unit (spec §5.1); if not automated at v1, `ogImage` → `public/og.png` fallback ships, with automated cards as a fast-follow (spec §9). The composition consumes `ogImage`/`ogClaim`; it does not generate cards.
- **Article JSON-LD authoring beyond the `/why-ai` shape mirror.** The shape is `why-ai.json.jsonLd`; the engineer renders it from frontmatter. Not a composition-authored artifact.
- **The `visitor-to-conversation.md` flow-spec amendment** (admit `/writing` + the ungated line). Owned by PM, per spec §9.
- **Cadence commitment** (the §7(e) post-launch obligation). Arian's, tracked in the backlog, not a composition deliverable.
- **Nav placement.** Resolved: `/writing` is footer + essay cross-links only (spec §9). The composition adds it to `<Footer links>`, not the primary nav.
- **DS-side proposal authoring.** §6 records no gap needs filing.
- **The `/`, `/why-ai`, `/roles`, `/engagements`, `/principles`, `/about` compositions.** Each is its own document. `/why-ai` is the reference implementation this template inherits from.
