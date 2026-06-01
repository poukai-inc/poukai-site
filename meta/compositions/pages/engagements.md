# Composition: Engagements

**Route**: `/engagements`
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-31
**Resolutions (Arian, 2026-05-31)**: Per-rung CTA = `<Link variant="default">` (LOCKED, §7 Q1) · rung `eyebrow` = the DESCRIPTIVE stage-marker set "The entry point" / "The proof" / "The build" / "The partnership" (Option B, LOCKED, §7 Q1b — differentiated from the title, which keeps the rung name; flags a `engagements.json.md` §4 schema amendment, §6). Q2 (deRisks weight), Q3 (StatusBadge), Q4 (Hero entrance) remain open.
**Governing spec**: `meta/specs/pages/engagements.md` (Approved 2026-05-31) — §4 IA
**Content draft**: `meta/content/drafts/pages/engagements.md` (v0.1, 2026-05-31) — working copy
**Content-data spec**: `meta/specs/content/engagements.json.md` (Approved 2026-05-31) — binding field contract
**DS version targeted**: `@poukai-inc/ui@2.0.0` (installed; `node_modules/@poukai-inc/ui/dist/llms-full.txt` is the binding reference)

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The rung composes inside `<FeatureCard variant="bordered">`, not `<RoleCard>`.** This is the load-bearing composition call and the answer to the spec §4 / §9 `<NEEDS: confirm RoleCard CTA-slot + dual-prose tolerance>` question. The DS `RoleCard` is a *fixed* molecule (eyebrow "Role 01", title, single `body`, `hiredBy` footer, **no CTA slot**, structural/non-navigational by contract — `llms-full.txt` §RoleCard). It physically cannot host a per-rung CTA or a second prose register. `<FeatureCard variant="bordered">` **can**: it exposes `icon`, `eyebrow`, `title`, a `body` slot that accepts `ReactNode` (so `delivers` + `deRisks` compose as two stacked `<p>`s), and a dedicated `footer` `ReactNode` slot that hosts the per-rung CTA. **No DS gap is needed.** §6 records why this is preferable to filing a `RoleCard`-CTA proposal.
- **A2 — The per-rung CTA renders as `<Link variant="default">`, not `<Button>`.** Spec §3 / §5 demand a *quiet "start here"*, explicitly "not a sales push." A `mailto:` that "opens a mail client, it does not commit to an outcome" is the DS's textbook case for a link affordance over a button (`llms-full.txt` §EmailLink framing). A button-shaped CTA on every rung is exactly the "menu energy" the page must defend against. See §2 and §7 Q1. The `cta.label` from JSON is the visible text; `cta.href` is the locked `mailto:…?subject=<Rung>`.
- **A3 — The climb (ascent rung 1→4) is expressed through composition weight, not a literal connector graphic** — a tightening of the surface band rhythm, the ladder-index arrows, and a per-rung icon that escalates in commitment register. No new tokens, no SVG ladder. See §3.
- **A4 — `delivers` and `deRisks` ship as the split pair** (content-data spec default), composed into the FeatureCard `body` ReactNode as two `<p>`s. The split is invisible-to-DS — FeatureCard's `body` is content-agnostic. If Arian later folds them into one `body` string, the composition is unchanged.
- **A5 — Page chrome (meta, nav, footer) is stored as `src/content/engagements-page.json`** mirroring `roles-page.json` / `why-ai.json`'s `meta` block. Rung substance is the separate `src/content/engagements.json` array (content-data spec). This is an engineer storage detail; flagged only so the composition's two content slots are unambiguous.

---

## 1. Intent

`/engagements` should read as a single deepening relationship described in four breaths, not a price grid scanned for a tier. The reader arrives from `/roles` having matched an archetype, and the page's job is to lower the activation energy of the first email while raising the visible ceiling of the relationship. The scroll should feel like an *ascent*: the first rung (Discovery) sits light and low-commitment, and each subsequent rung lands with slightly more visual weight and a more committed icon, so that by Retainer the reader has felt the relationship deepen without a single number on the page. Density is deliberately restrained — four bordered cards in a single column, generous band rhythm between them, one quiet link per card. The anti-pattern this composition exists to prevent is the four cards reading as *parallel options on a shelf*; every choice below — single-column stack over a grid, link over button, escalating icon register, the ladder-index arrows — reinforces *sequence* over *selection*. Restraint remains the credential: the page competes by being a legible operator, not a conversion funnel.

## 2. Section-by-section composition

The spec §4 IA lists nine units (chrome, hero, ladder index, four rungs, end CTA, footer). This composition mirrors that order exactly. The order in this document IS the render order.

### Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism), wrapped site-side by `ShellWrapper.tsx` for the React-boundary reason documented on `/` (substance carrier, zero shape). Footer slot carries `<Footer>`.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/engagements"                    // marks Engagements current — spec §8 nav AC
    routes={[
      { href: "/why-ai",      label: "Why AI" },
      { href: "/roles",       label: "Roles" },
      { href: "/engagements", label: "Engagements" },   // 4th slot — locked order, spec §9
      { href: "/principles",  label: "Principles" },
      { href: "/about",       label: "About" },
    ]}                                              // Why AI · Roles · Engagements · Principles · About
    footer={
      <Footer
        copyright="© Pouk AI INC <year>"
        email="hello@pouk.ai"
      />                                            // footer link order matches nav — spec §8
    }
  >
    {/* Hero + ladder index + four rungs + end CTA — Sections 2–8 */}
  </SiteShell>
  ```
- **Layout / spacing**: `<SiteShell>` owns header/footer chrome and `--page-pad` internally. The page-content wrapper is `.site-page` (`max-width: var(--content-max)` 64rem, `padding-block` per the site-wide rhythm shift ratified on `/` — `--space-12`). Site does not override SiteShell tokens.
- **Motion**: None at the shell level. Nav/footer link hover is DS-internal (`--easing-link`, `--dur-fast`).
- **Content slot**: `routes[]` is the nav array in `BaseLayout.astro` / `ShellWrapper.tsx` (engineer touch-points cited in spec §8: `src/layouts/BaseLayout.astro:101-106`, `src/components/ShellWrapper.tsx:39-42`). Not JSON-driven; site chrome substance.
- **Brand notes**: Wordmark is always rendered by `<SiteShell>` via `<Wordmark>` — never a string literal. `sitemap.xml` includes `/engagements` (spec §8). Shell renders as static HTML — no `client:*`.

### Section 2 — `Hero` (frame the ladder as a climb, not a menu)

- **DS primitive(s)**: `<Hero>` (molecule), `size="display"`. No `<StatusBadge>` in the `status` slot — see brand notes (the page's availability signal lives on `/` and `/why-ai`; the StatusBadge max-1-per-page budget is best spent there, and a "taking work" badge here tips toward sales energy on an evaluation page).
- **Props (substantive)**:
  ```
  <Hero
    size="display"                                 // landing-class register; the climb wants display weight at the top
    eyebrow="Engagements"                          // content draft §2 Hero
    title="How the work starts, and how it grows"  // draft §2 — the verb framing encodes the climb (spec §5 outcome a)
    lede={
      <>
        Work with pouk.ai starts small and deepens. Discovery, Pilot, Build,
        Retainer — four shapes of one relationship, not four products on a
        shelf. Any kind of work can start at any rung, so you don't have to
        commit to a full build on day one.
      </>
    }                                              // 3 sentences, within Hero 1–3 cap — spec §5 outcomes a/b/c
    // NO cta prop — the rungs carry the CTAs; the end CTA catches the undecided.
    //   A Hero CTA here would pre-empt the per-rung mechanic and add a 5th email affordance.
    // NO status prop — see brand notes.
    // NO illustration — deferred site-wide pending the Pouākai asset (see / composition §6.2). If/when it lands,
    //   /engagements is a future consumer; not blocking this composition.
  />
  ```
- **Layout / spacing**: Hero text column capped at `--hero-max` (38rem) by the DS. Internal rhythm (eyebrow→title `--space-2`-adjacent, title→lede) is DS-owned; not re-tuned. The Hero is the page `<h1>` (`titleAs` default) — confirms the content draft §3 heading-outline requirement (H1 = hero title).
- **Motion**: `entrance="stagger"` is **available** (DS 2.0.0, consumed on `/`) but **not recommended here** — the stagger reads as a doorway flourish on a single-Hero landing page; on an evaluation page whose job is legibility, a quiet static entrance serves better. Default = no entrance animation. If Arian wants parity with `/`, `entrance="stagger"` is a one-prop add (see §7 Q4). Either way: zero JS, CSS-only, gated by `prefers-reduced-motion` via the DS `:root !important` block.
- **Content slot**: `engagements-page.json[meta]` + hardcoded hero prose, or hero prose in the page template (engineer call). The lede is final-copy-pending Arian per content draft §7 Q4.
- **Brand notes**: The negation "**not four products on a shelf**" is the single most load-bearing phrase on the page (content draft §4) — it does the anti-menu work in the reader's first five seconds. Preserve it verbatim in whatever final copy lands. No `<StatusBadge>` — the one-per-page budget and the no-sales-push discipline both argue against it here.

### Section 3 — Ladder index (reinforce sequence)

- **DS primitive(s)**: **None — typographic, not a DS molecule** (spec §4 IA item 3 explicitly says "no DS molecule needed"). A single line of inline `<Link variant="quiet">` anchors joined by literal `→` HTML entities (`&rarr;`). Rendered inside a `<nav aria-label="Engagement ladder">` for landmark clarity (one extra `<nav>`; distinct aria-label from the SiteShell primary nav and footer nav, per the DS Footer disambiguation rule).
- **Props (substantive)**:
  ```
  <nav aria-label="Engagement ladder">
    <Link href="#discovery" variant="quiet">Discovery</Link> →
    <Link href="#pilot"     variant="quiet">Pilot</Link> →
    <Link href="#build"     variant="quiet">Build</Link> →
    <Link href="#retainer"  variant="quiet">Retainer</Link>
  </nav>
  // Optional lead-in "The climb:" — draft §2 marks it designer's-call. RECOMMEND rendering it
  //   as a muted Eyebrow-register label inline, because it names the sequence reading explicitly.
  //   <Eyebrow variant="muted">The climb</Eyebrow> preceding the link row.
  ```
- **Layout / spacing**: Sits directly below the Hero, above the first rung. Gap Hero→index `--space-8` (32px); gap index→first rung `--space-12` (48px) — the larger gap below sets the index apart as a *map* of the climb before the climb begins. The `→` entities inherit body-font metrics (Geist) and read as prose connectors, exactly as the `/` lede-extension arrow does — **not** Lucide `ArrowRight` glyphs (consistency with the ratified `/` decision; the entity reads as part of the typographic flow, a Lucide icon would visually fragment the row).
- **Motion**: None. Anchor hover is DS-internal (`Link variant="quiet"` grows an accent underline on hover via `--easing-link`).
- **Content slot**: The four labels are the rung `title`s; the four hrefs are `#${id}` derived per content-data spec §6 (`#discovery` / `#pilot` / `#build` / `#retainer`). Engineer maps from `engagements.json[].id` — no second source of truth for the slug.
- **Brand notes**: The arrows are the climb cue (content draft §2). This is the typographic spine that makes the four cards read as rungs-you-ascend, not options-you-pick. Deep-link anchors (`/engagements#pilot`) must scroll the corresponding rung above the fold post-scroll (spec §8 AC) — handled by the anchor `id` on each FeatureCard root (Section 4–7).

### Section 4 — Rung: Discovery (`#discovery`)

- **DS primitive(s)**: `<FeatureCard variant="bordered">` (molecule). The rung shape:
  - `icon` slot — Lucide glyph (see §5), `size={24}`, decorative (DS wraps in `aria-hidden` span).
  - `eyebrow` — **the descriptive stage marker** `"The entry point"` (Option B, RESOLVED 2026-05-31, §7 Q1b; Arian killed the eyebrow=title name-repeat and chose the descriptive set over the numeric one). It is a climb cue, **differentiated from the title** (which keeps the rung name `Discovery`). Auto-wrapped in `<Eyebrow variant="muted">` by FeatureCard. The slot is unchanged — only the substance differs. (This supersedes the prior "eyebrow = bare rung name" lock and flags a `engagements.json.md` §4 schema amendment — see §7 Q1b / §6.)
  - `title` — `"Discovery"`, `titleAs="h2"` (the rung title carries the H2; descends cleanly from the Hero H1 — content draft §3 / Flag 3).
  - `body` — a `ReactNode` composing the two prose registers as two `<p>`s: the `delivers` paragraph (full `--fg` color), then the `deRisks` paragraph. See "Dual-prose treatment" below.
  - `footer` — the per-rung CTA as `<Link variant="default" href={cta.href}>{cta.label}</Link>`.
- **Props (substantive)**:
  ```
  <FeatureCard
    variant="bordered"
    id="discovery"                                 // anchor target — matches engagements.json[].id, content-data §6
    icon={<Icon icon={Search} size={24} aria-hidden="true" />}   // §5 icon pick
    eyebrow="The entry point"                      // engagements.json[].eyebrow — DESCRIPTIVE STAGE MARKER (Option B, resolved §7 Q1b), not the rung name
    title="Discovery"                              // engagements.json[].title — keeps the bare rung name
    titleAs="h2"
    body={
      <>
        <p>{rung.delivers}</p>                      {/* engagements.json[].delivers */}
        <p className="rung-derisks">{rung.deRisks}</p>   {/* engagements.json[].deRisks */}
      </>
    }
    footer={
      <Link variant="default" href="mailto:hello@pouk.ai?subject=Discovery">
        Start with Discovery
      </Link>                                       // engagements.json[].cta.{label,href} — locked subject=Discovery
    }
  />
  ```
- **Dual-prose treatment**: `delivers` is the primary register — full `--fg` body color, `--fs-body`. `deRisks` is the *removed-fear* line — composed as a second `<p>` in the same `body` slot, visually differentiated by `--fg-muted` color (the DS's secondary-text token — "de-risks" is a supporting clarification, not the primary claim) and the FeatureCard `body→` internal gap `--space-3`. **This requires one site-side class** (`.rung-derisks { color: var(--fg-muted); }`) on the second paragraph — a color application of an existing token, *not* a new token and *not* a DS override (FeatureCard's `body` is content-agnostic by contract). If Arian prefers both registers at full `--fg` weight, drop the class; the composition still holds. See §7 Q2.
- **Layout / spacing**: FeatureCard `bordered` padding is `--space-6` (24px) all sides (DS-owned). Internal gap stack is DS-owned (icon→title `--space-6`, eyebrow→title `--space-2`, title→body `--space-3`, body→footer `--space-6`). Between-rung spacing is the cross-section band rhythm — see §3.
- **Motion**: None intrinsic. FeatureCard is "structural only, no hover, no interactivity" (DS) — the only interactive element is the footer `<Link>`, whose hover underline is DS-internal. The card itself does **not** become a click target (it is not a `LinkCard`) — correct, because only the CTA should be clickable, not the whole rung.
- **Content slot**: `src/content/engagements.json[0]` (Discovery). One array entry → one FeatureCard. The engineer iterates the array; no per-rung conditional logic (content-data spec §3 success criterion).
- **Brand notes**: The card is bordered (`--surface` fill, 1px `--hairline`, `--radius-3`) — the bordered variant gives each rung a contained, legible unit without the click-target affordance of a LinkCard. Discovery is the lowest-commitment rung; its icon (`Search`) and its position at the top of the climb set the light entry register.

### Section 5 — Rung: Pilot (`#pilot`)

- **DS primitive(s)**: `<FeatureCard variant="bordered">`, identical shape to Section 4.
- **Props (substantive)**: As Section 4, with `id="pilot"`, `eyebrow="The proof"` (descriptive stage marker, §7 Q1b), `title="Pilot"`, `icon={<Icon icon={FlaskConical} size={24} aria-hidden="true" />}` (§5), `footer` `<Link href="mailto:hello@pouk.ai?subject=Pilot">Start with a Pilot</Link>`. `body` = `engagements.json[1].delivers` + `.deRisks`.
- **Layout / spacing**: As Section 4. Band rhythm per §3.
- **Motion**: None intrinsic; footer link hover DS-internal.
- **Content slot**: `engagements.json[1]`.
- **Brand notes**: Pilot is the second entry rung (most readers self-select Discovery or Pilot — spec §3). `FlaskConical` reads "prove it on one workflow" without the gear/robot AI cliché.

### Section 6 — Rung: Build (`#build`)

- **DS primitive(s)**: `<FeatureCard variant="bordered">`, identical shape.
- **Props (substantive)**: `id="build"`, `eyebrow="The build"` (descriptive stage marker, §7 Q1b), `title="Build"`, `icon={<Icon icon={Hammer} size={24} aria-hidden="true" />}` (§5), `footer` `<Link href="mailto:hello@pouk.ai?subject=Build">Start a Build</Link>`. `body` = `engagements.json[2].delivers` + `.deRisks`.
- **Layout / spacing**: As Section 4. This is the rung where the climb's weight crosses from "entry" to "committed" — see §3 for the band-rhythm cue.
- **Motion**: None intrinsic; footer link hover DS-internal.
- **Content slot**: `engagements.json[2]`.
- **Brand notes**: `Hammer` is the same glyph `roles.json` uses for the Builder archetype — deliberate cross-surface continuity (Build the rung and Builder the archetype share the production-system register). Operator-concrete, no AI cliché. The CTA verb shifts from "Start with" to "Start a" (content draft §4) — a committed build, not a small first step. **Eyebrow/title near-repeat note**: this is the one rung where the descriptive eyebrow (`"The build"`) and the title (`"Build"`) are near-identical. The distinction is carried by the DS register difference — the eyebrow renders muted, uppercase, tracked via `<Eyebrow variant="muted">`; the title renders at card-title scale in the title register — exactly as the other three rungs differentiate eyebrow from title. It reads as a deliberate stage label above the name, not an accidental duplicate. (If Arian later wants more separation, a content tweak to the Build eyebrow — e.g. "The production system" — is a one-word substance change routed through the content-data spec, not a composition change.)

### Section 7 — Rung: Retainer (`#retainer`)

- **DS primitive(s)**: `<FeatureCard variant="bordered">`, identical shape.
- **Props (substantive)**: `id="retainer"`, `eyebrow="The partnership"` (descriptive stage marker, §7 Q1b), `title="Retainer"`, `icon={<Icon icon={RefreshCw} size={24} aria-hidden="true" />}` (§5), `footer` `<Link href="mailto:hello@pouk.ai?subject=Retainer">Talk about a Retainer</Link>`. `body` = `engagements.json[3].delivers` + `.deRisks`.
- **Layout / spacing**: As Section 4. Top of the climb — the heaviest band rhythm (see §3) lands the relationship's ceiling.
- **Motion**: None intrinsic; footer link hover DS-internal.
- **Content slot**: `engagements.json[3]`.
- **Brand notes**: `RefreshCw` reads "ongoing operation and iteration / keep it running" — the compounding relationship. The CTA verb shifts again to "Talk about" (content draft §4 / §7 Q2) — a retainer is a conversation, not a checkout. This is the one CTA that breaks the "Start" parallel; the composition endorses the break (it reinforces sequence-not-shelf — the fourth rung is qualitatively different).

### Section 8 — End CTA (catch the undecided-but-ready reader)

- **DS primitive(s)**: A muted closing line + `<EmailLink>`. **`<EmailLink variant="default" email="hello@pouk.ai" />`** is the exact-fit primitive — it is the canonical `mailto:` "reach out" affordance, distinct register from the per-rung `<Link>` CTAs (which carry rung-specific subjects) and from a Button. The lead line is plain prose (`<p>`).
- **Props (substantive)**:
  ```
  <Section size="tight" as="div">                  {/* tight band — the close, not a major section */}
    <p>
      Not sure which rung is yours? Say where your problem sits and we'll
      find the right place to start.
    </p>                                            {/* content draft §2 end-CTA lead */}
    <EmailLink email="hello@pouk.ai" variant="default" />
    {/* NO ?subject= — the undecided reader hasn't picked a rung; the universal path stays bare.
       This is the deliberate divergence from the per-rung CTAs. Content draft §2. */}
  </Section>
  ```
- **Layout / spacing**: Sits below the Retainer rung with the page's largest gap above (`--space-16`, 64px — see §3) to separate "the climb" from "the catch-all." `Section size="tight"` gives `--space-12` block padding. The lead line caps at `--hero-max` (the `.lede` measure); `EmailLink` sits below it with a `--space-4` gap.
- **Motion**: None. `EmailLink` hover underline is DS-internal.
- **Content slot**: `engagements-page.json[endCta]` or hardcoded; final copy Arian-pending. The end-CTA wording is differentiated from `/roles`, `/principles`, `/why-ai`, `/about` per the content draft §4 differentiation audit — it is the only end CTA framed around *rung indecision* (spec AC).
- **Brand notes**: This does **not** replace the per-rung CTAs (spec §4 IA item 8) — it catches the reader who scrolled all four rungs without picking one. Single muted line + email, no second affordance, no urgency. The brand competes by being a person.

### Section 9 — `SiteShell` footer (global chrome)

- **DS primitive(s)**: `<Footer>` inside the `<SiteShell>` footer slot (specified in Section 1). Unchanged from every other route.
- **Props (substantive)**: `copyright`, `email="hello@pouk.ai"`. Footer link order matches nav (spec §8). This is the second `mailto:` on the page (after the end CTA and the four rung CTAs) — deliberate standing chrome, consistent with `/`.
- **Layout / spacing**: DS-owned. Hairline rule + `--page-pad` from SiteShell's `.footer` scope.
- **Motion**: None.
- **Content slot**: Hardcoded chrome substance.
- **Brand notes**: No Wordmark inside `<Footer>` (DS rule). Footer email is `variant="muted"` (DS default inside Footer).

## 3. Cross-section rhythm

The vertical rhythm of `/engagements`, top to bottom, and how it encodes the *climb*:

1. `<SiteShell>` header — DS-owned.
2. `.site-page` top padding — `--space-12` (48px), consistent with the site-wide rhythm.
3. `<Hero size="display">` — DS-owned internal rhythm. Page `<h1>`.
4. Hero → ladder index gap — `--space-8` (32px).
5. Ladder index → first rung gap — `--space-12` (48px) — sets the map apart from the climb.
6. **The four rungs, single-column, with an escalating band gap (the ascent cue):**
   - Discovery → Pilot gap: `--space-12` (48px)
   - Pilot → Build gap: `--space-12` (48px)
   - Build → Retainer gap: `--space-16` (64px) — the one widened gap, marking the crossing from "entry/proof" rungs into the "committed/compounding" rungs. This is the single clearest *ascent* signal in the layout: the reader feels the relationship deepen as the gap opens before Build→Retainer.
7. Last rung (Retainer) → End CTA gap — `--space-16` (64px) — separates the climb from the catch-all.
8. End CTA (`Section size="tight"`) — `--space-12` block padding.
9. `.site-page` bottom padding — `--space-12`.
10. `<SiteShell>` footer — DS-owned.

**Rules that span the page:**
- **Single column, not a grid.** Four rungs stack vertically — a grid would read as "pick a tile," a stack reads as "climb the rungs." This is the most important sequence-not-shelf decision after the link-over-button call. (FeatureCard supports both; the stack is the deliberate composition choice.)
- **Categorical-only layout (spec §7(a), load-bearing).** No layout affordance implies a figure: no price row, no "from" slot, no comparison table, no tier-highlight ("most popular"), no per-rung badge. The `body` slot carries `delivers` + `deRisks` and nothing else. A future engineer must not add a price/figure cell — that is a brand break, not a layout improvement.
- **Escalating icon register** (§5) — the four glyphs ascend from light diagnosis (`Search`) to compounding operation (`RefreshCw`), reinforcing the climb at the glyph level.
- **Descriptive stage-marker eyebrows** (RESOLVED 2026-05-31, §7 Q1b — Option B) — the rung `eyebrow` is the descriptive progression **"The entry point" → "The proof" → "The build" → "The partnership"**, differentiated from the `title` (which keeps the rung name). This is the fourth climb cue, alongside the single-column stack, the gap escalation, and the icon escalation. The descriptive set carries the climb *semantically* (a relationship that begins, gets proven, gets built, then compounds) rather than by ordinal — which reads even more clearly as one deepening relationship and even less like parallel tiers than the numeric set would have. It holds firmly on the right side of the sequence-not-shelf line.
- **No alternating surface bands.** Unlike an editorial page, `/engagements` keeps every rung on the same bordered-card treatment (`--surface` fill); the rhythm comes from the gap escalation, not from `--surface-section` band alternation. (Reserving `--surface-section` avoids the "comparison table" read that bands would invite.)

Token compliance: every gap above resolves to a published `--space-N` token (`--space-8`, `--space-12`, `--space-16`). No `--space-5/7/9/11`. No raw px. The escalating gap uses only the two stops the DS publishes between 32px and 64px (`--space-12`, `--space-16`) — there is no token between them, so the "ascent" is a two-step escalation, not a continuous ramp. That is a DS-imposed constraint, honored, not worked around.

## 4. Motion choreography (page-level)

The page ships **zero JavaScript** and (by default) **zero composition-level animation**:

- **Fires on initial render**: nothing, by default. (`<Hero entrance="stagger">` is available and would fire a CSS-only staggered reveal if Arian opts in — see §2 / §7 Q4. It is *not* recommended for this evaluation page.)
- **Fires on scroll**: nothing. No intersection-triggered reveal, no parallax, no scroll-spy. An intersection reveal on the rungs would (a) require `IntersectionObserver` = JS, breaking the zero-JS AC (spec §8), and (b) animate the climb in a way that competes with the reader's own pace. The climb is expressed through static layout weight (§3), not motion. **The reveal does not earn its hydration cost** — explicit per the template requirement.
- **Fires never (locked out)**: scroll-triggered reveal, parallax, any `IntersectionObserver`-driven motion, any animation on the FeatureCards, any CSS animation on the per-rung CTAs.
- **Hover micro-interactions** (DS-internal, CSS-only): the ladder-index `Link variant="quiet"` underline grow, the per-rung footer `Link variant="default"` underline grow, the `EmailLink` underline grow, nav/footer link hover. All use `--dur-mid` / `--easing-link` and are gated by `prefers-reduced-motion: reduce` via the DS `:root !important` block.

**`prefers-reduced-motion: reduce` behavior**: every animation on the page (the optional Hero stagger, all link-hover transitions) is disabled by the DS's `:root !important` block in `tokens.css`. No exception. The composition adds no `@media (prefers-reduced-motion)` rule of its own — the DS handles it at the token layer. There is no StatusBadge on this page, so the badge-pulse gate is not in play here.

## 5. Icon picks

Per-rung Lucide glyph for the `FeatureCard.icon` slot, chosen to *escalate the commitment register* up the climb and to avoid AI cliché (no `Bot`, no `Cpu`, no `Sparkles`, no gear). All at `size={24}`, decorative (`aria-hidden="true"`), inheriting `--fg` via `currentColor`.

- `discovery` → **`Search`** — a focused diagnosis; "which failure mode you're in." Direct, concrete, the lightest-commitment glyph. (Magnifier = examine before you build.)
- `pilot` → **`FlaskConical`** — prove it on one scoped workflow; a controlled test before rollout. Reads "experiment / measured trial," not "rocket-launch pilot" (which would imply scale, the wrong register for a land-and-expand rung).
- `build` → **`Hammer`** — the production system, engineered and shipped. **Deliberately the same glyph `roles.json` assigns the Builder archetype** — cross-surface continuity: the Build rung and the Builder archetype share the "ship the real thing" register. Operator-concrete.
- `retainer` → **`RefreshCw`** — ongoing operation and iteration; "keep it running and evolving as the tools move underneath it." The cyclical arrows read "compounding / continuous," distinguishing a retainer from a one-off. (Chosen over `Repeat` — `RefreshCw` reads "maintain + renew," `Repeat` reads "loop," and the rung is about evolution, not repetition.)

**Eyebrow as a fourth climb cue (RESOLVED 2026-05-31, §7 Q1b — Option B, descriptive set).** The prior version of this note rejected numbering the rungs on the grounds that the content-data spec locked `eyebrow` = bare rung name. **That lock is now reversed by Arian, and he chose the DESCRIPTIVE marker set over the numeric one**: `"The entry point"` (Discovery) → `"The proof"` (Pilot) → `"The build"` (Build) → `"The partnership"` (Retainer). This makes the eyebrow a *fourth* sequence cue alongside the escalating band gap (§3), the escalating icon register (this section), and the ladder-index arrows (§2 Section 3). The descriptive set is the stronger pick: a numeric "Rung 01/02/03/04" risks a faint "tier 1/tier 2" menu read, whereas the descriptive markers name the *stage of the relationship* and so reinforce "one relationship deepening" rather than "options on a shelf." The icons carry the *commitment-register* escalation; the eyebrow markers carry the *relationship-stage* escalation. They reinforce, not duplicate. (One nuance: the Build rung's eyebrow `"The build"` and title `"Build"` are near-identical — the visual differentiation between the muted Eyebrow register and the serif/sans title register carries the distinction, exactly as for the other three; see §2 Section 6 brand note.)

## 6. DS gaps surfaced

**None.** The composition assembles entirely from existing `@poukai-inc/ui@2.0.0` primitives. The spec §4 / §9 open question — `<NEEDS: confirm RoleCard CTA-slot + dual-prose tolerance>` — is **resolved by composing the rung in `<FeatureCard variant="bordered">` instead of `<RoleCard>`**, not by extending the DS.

Recorded reasoning so this is a conscious decision, not an oversight:

- **`RoleCard` is the wrong primitive and should not be extended for this.** `RoleCard`'s contract (`llms-full.txt` §RoleCard) is fixed: eyebrow "Role 01" / "Role 02" (Title-Case "Role" + zero-padded numeral), single `body`, `hiredBy` footer with " · " separators, structural/non-navigational, min-2/max-6 in a grid. It carries *archetype-listing* semantics that conflict with the engagement-ladder register, has **no CTA slot**, and admits **no second prose block**. Filing a `RoleCard`-CTA + dual-prose DS proposal would (a) load CTA semantics onto a molecule the DS deliberately keeps non-navigational, and (b) duplicate a shape `<FeatureCard>` already ships. The `roles.json` D-08 "no per-card CTA" rule for `/roles` therefore stays intact — `/engagements` doesn't reverse it *in the DS*, it simply uses a different molecule.
- **`<FeatureCard variant="bordered">` already provides the exact shape**: `icon` + `eyebrow` + `title`/`titleAs` + `body` (ReactNode → dual prose) + `footer` (ReactNode → per-rung CTA). It is explicitly "structural, no click target" (so the card doesn't become a competing link), and "for capability/service grids where items are peers" — the engagement rungs are precisely service-shapes. The one nuance: FeatureCard's doc register is "peers, not a numbered sequence." Our composition uses it in a *sequence* (the climb), which we encode through layout (single-column stack + escalating gap + escalating icon, §3/§5), not through a DS sequencing prop. That is a composition-level use of a structural primitive — within bounds, since FeatureCard carries no anti-sequence enforcement (unlike, say, mixing it with RoleCard, which the DS forbids).
- **No new token, no DS override.** The only site-side CSS is `.rung-derisks { color: var(--fg-muted); }` — an application of an existing token to differentiate the de-risks line, which the DS permits (FeatureCard `body` is content-agnostic). If even that is unwanted, it drops with zero structural change.

**Cross-spec dependency surfaced (not a DS gap) — content-data spec amendment owed.** The §7 Q1b resolution (eyebrow = descriptive stage marker, not the rung name) **diverges from `meta/specs/content/engagements.json.md` §4**, which currently locks `eyebrow` to the bare rung name and validates `eyebrow` ∈ {`Discovery`,`Pilot`,`Build`,`Retainer`} pairing 1:1 with `title`. That schema field constraint and its validation rule must be amended to admit the **locked descriptive marker set**: `eyebrow` ∈ {`"The entry point"`, `"The proof"`, `"The build"`, `"The partnership"`}, pairing 1:1 with the rung `id` in that order (entry point→discovery, proof→pilot, build→build, partnership→retainer). **This is a PM-owned schema change, routed back to `engagements.json.md` — not authored here** (composition does not edit content-data specs). Flagged so the engineer does not author `engagements.json` against the now-superseded eyebrow lock, and so the cross-spec record stays clean at deploy. No DS work is implied — the `<FeatureCard>` `eyebrow` slot is content-agnostic and unchanged.

**Conditional gap (only if Arian rejects A1/A2).** If Arian wants the rung to read specifically as a *numbered RoleCard-style* unit (Role-01 register) **and** carry a CTA, that shape does not exist in the DS and would be a genuine gap. In that case: file a `meta/proposals/ds-side/rolecard-cta-slot.md` request framed from the composition need (a structural listing card that carries an optional quiet CTA affordance + an optional second prose register), routed by Arian's decision to `@poukai-inc/poukai-ui` maintainers. **Recommendation: do not file it** — `<FeatureCard>` is the better fit and ships today. This bullet exists only to document the fallback per the spec §9 "if no, Arian decides whether to file" instruction. (Drafting the DS-side API is out of this composition's lane; the proposal would describe the gap, not the solution shape.)

## 7. Open questions for Arian

- **Q1 — Per-rung CTA as `<Link>` (recommended) vs. `<Button>`. — RESOLVED 2026-05-31 (Arian): `<Link variant="default">`, LOCKED.** Each rung CTA renders as a quiet `<Link variant="default">` mailto affordance, not a button. The `<Button asChild size="compact">` alternative is rejected. This is now binding for the composition; §2 (Sections 4–7) and §4 already reflect it.
- **Q1b — Rung `eyebrow` semantic: descriptive STAGE MARKER, not the rung name. — RESOLVED 2026-05-31 (Arian): the DESCRIPTIVE set (Option B), LOCKED.** Arian killed the eyebrow-equals-title name-repeat and chose the **descriptive** marker set over the numeric one. The `eyebrow` slot now carries the relationship-stage progression — `"The entry point"` (Discovery) → `"The proof"` (Pilot) → `"The build"` (Build) → `"The partnership"` (Retainer); the **`title` keeps the bare rung name** (`Discovery` / `Pilot` / `Build` / `Retainer`). **Composition impact: none structural** — the `<FeatureCard>` `eyebrow` slot already exists and is content-agnostic; only the *substance that fills it* changes. Downstream consequences reconciled in this revision: (a) §2 Sections 4–7 eyebrow-slot notes + props updated to the descriptive set; (b) the §5 fourth-climb-cue note reframed — the descriptive set carries the climb semantically (a relationship that begins, gets proven, gets built, then compounds), a stronger sequence-not-shelf read than ordinals; (c) the Build rung's `"The build"` eyebrow / `"Build"` title near-repeat is handled by the DS register difference (muted Eyebrow vs. title scale — §2 Section 6 brand note); (d) this diverges from the content-data spec `engagements.json.md` §4 (which locks `eyebrow` = bare rung name) — **flag for PM**: amend the `eyebrow` constraint + validation to the locked descriptive set {`"The entry point"`,`"The proof"`,`"The build"`,`"The partnership"`}, pairing 1:1 with `id` (schema-field change, routes back to `engagements.json.md`, not authored here). See §6 note.
- **Q2 — `deRisks` line muted (recommended) vs. full-weight.** The composition renders `deRisks` in `--fg-muted` to subordinate the removed-fear line beneath the `delivers` claim (one site-side class, existing token). Alternative: both registers at full `--fg`. Recommend muted — it reads as a clarifying second beat, not a competing claim. Your call.
- **Q3 — No `<StatusBadge>` on this page (recommended).** I left the availability badge off `/engagements` (it lives on `/` and `/why-ai`; the one-per-page budget and the no-sales-push discipline both argue against it on an evaluation page). If you'd rather signal availability here too, a single `<StatusBadge status="available">` could sit in the Hero `status` slot — but it tips the page toward "book now." Recommend leaving it off. Your call.
- **Q4 — Hero entrance: static (recommended) vs. `entrance="stagger"` for parity with `/`.** Recommend static — the stagger is a doorway flourish that suits the homepage, not an evaluation page whose job is calm legibility. One-prop add if you want parity. Your call. (Either way: zero JS, reduced-motion-gated.)

## 8. Out of scope

- **Final copy.** The Hero title/lede, the four `delivers`/`deRisks` strings, the four `cta.label`s, and the end-CTA lead are content draft v0.1, Arian-pending. This composition anchors them visually; it does not author or approve them.
- **The `engagements.json` file and the `?subject=` mechanic.** The engineer authors `src/content/engagements.json` from the approved content draft; the `id`/`eyebrow`/`title`/`cta.href` are locked by the content-data spec. The composition consumes the array; it does not write it.
- **Any price/figure affordance.** No layout slot, cell, badge, or row implies a number (spec §7(a)). Explicitly out, permanently.
- **A fifth rung, per-rung sub-routes, booking/scheduling, contact forms.** Out per spec §10. Anchor-based four-rung ladder, `mailto:` only.
- **The Pouākai illustration.** Deferred site-wide pending the asset (`/` composition §6.2). `/engagements` is a future consumer of the `<Hero illustration>` slot, not a blocker on this composition.
- **Nav-order implementation, the `/roles → /engagements` hand-off link, and the roles.md §10 / D-08 reconciliation.** Cross-surface edits owned by PM/engineer per spec §9. The composition cites the locked nav order; it does not implement it.
- **DS-side proposal authoring.** §6 records that no gap needs filing. If Arian rejects A1/A2 and wants a RoleCard-CTA primitive, authoring that DS API is `@poukai-inc/poukai-ui` maintainers' lane; this composition would describe the gap only.
- **`/why-ai`, `/roles`, `/principles`, `/`, `/about` compositions.** Each is its own document.
