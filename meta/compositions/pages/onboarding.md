# Composition: Onboarding

**Route**: `/onboarding` (served `/onboarding/`, trailing-slash)
**Status**: PROPOSAL — awaiting Arian approval
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14 (eyebrow resolved — Arian restored "How we work together"; §2 Section 2, §6 DS gap)
**Governing spec**: `meta/specs/pages/onboarding.md` (Approved 2026-06-14) — §4 IA
**Content-data spec**: `meta/specs/content/onboarding.json.md` (Approved 2026-06-14) — binding field contract for `src/content/onboarding.json`
**Coupled feature spec**: `meta/specs/features/contact-flow.md` (Approved 2026-06-14) — owns the end-CTA dual mechanism
**Coupled composition**: `meta/compositions/components/booking-affordance.md` (PROPOSAL, this pass) — the end-CTA booking link
**Content draft**: not yet authored. `pouk-ai-content` drafts the four phase bodies + hero/end-CTA prose against the spec §5 OUTCOMES after this composition lands. See §7 / §8 — real copy lengths may shift density (per the designer prompt, composing against placeholders is a code smell; flagged).
**DS version targeted**: `@poukai-inc/ui@2.11.2` (`meta/ds-snapshot/llms-full.txt` is the binding reference; the snapshot reports 2.11.2 — earlier revisions of this header cited 2.0.0, corrected here).
**Backlog item**: FSP-4.2.

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The four phase sections compose in `<FailureModeList>` + `<FailureMode>`**, the exact `/why-ai` register the PM expects (spec §4, §6; content-data §9). `<FailureMode index title>{children}` renders a zero-padded Arabic numeral + declarative title + prose body — the "numbered section: index + title + prose" molecule. `<FailureModeList>` supplies the Section frame (eyebrow + heading + lede + landmark) so the four phases read as one ascending arc, exactly as the five failure modes do on `/why-ai`. **No new DS molecule is needed** (§6). The molecule's semantic name is "failure mode," but its *shape* is "numbered editorial section" — the PM and content-data specs both nominate it explicitly; see §6 for the naming-vs-shape note.
- **A2 — `deliverable` folds into the phase `body` as a trailing emphasized line**, not a separate DS slot. `<FailureMode>` renders one prose block (children). The content-data spec anticipates this exactly ("if the molecule renders one prose block, `deliverable` may fold into `body` — a composition/DS call" — content-data §9). The deliverable is the concreteness that does the reassurance work (spec §5), so it gets visual emphasis as the phase's closing beat — a `<strong>`-led line inside the body (`Deliverable: Discovery Brief`), not a structural field. See §2.
- **A3 — `duration` (optional categorical time-window) renders as a muted lead-in inside the body**, near the phase title — a small "1–2 weeks" cue that reinforces the arc without a price. It is on-register (categorical, no figure — FS-OB-1). If a phase omits `duration`, nothing renders. See §2.
- **A4 — The phase index (spec §4 IA item 3) is typographic, not a DS molecule** — a one-line jump-nav of four anchor links, identical in register to the `/engagements` ladder index (engagements composition §2 Section 3). Reinforces "phases you move through," not "options you pick."
- **A5 — Hero is `size="display"`, no `StatusBadge`** — same posture as `/engagements` (the availability badge's one-per-page budget is spent on `/` and `/why-ai`; an availability signal on a late-funnel operational-reassurance page tips toward sales energy). See §2 Hero brand notes.
- **A6 — Pricing posture lives in the Scoping phase body as prose** (FS-OB-1; content-data §4), not a standalone block. The optional spec §4 IA item 8 (standalone pricing block) is **not** composed — PM lean and FS-OB-1 both fold it into Scoping. See §2 Scoping + §8.
- **A7 — Page chrome storage** (meta block, hero prose, end-CTA prose) lives as page-template prose or a small `onboarding-page.json` wrapper, mirroring `why-ai.json`'s non-failure-mode prose handling. Engineer's storage call (content-data §4, §9). The four-phase array stays a clean `src/content/onboarding.json`.

---

## 1. Intent

`/onboarding` should read as a calm, legible walk through the first six weeks of working with pouk.ai — an *arc*, not a brochure. The reader arrives late-funnel, holding one last objection ("will this be chaotic, unscoped, unaccountable?"), and the page answers it the way the brand answers everything: by showing the actual operating model with specificity, not by claiming reassurance. The scroll feels like moving *through* a sequence — Discovery, Scoping, Build, Handoff — each phase a numbered editorial section with a named deliverable as its closing beat, so the reader accumulates evidence of structure as they descend. Density is restrained and faster-paced than `/about` (spec §5): four numbered sections in a single column, generous band rhythm, one quiet end CTA. The page borrows the `/why-ai` numbered-section register wholesale — deliberately, so a reader who has already read `/why-ai` feels the continuity (the funnel is one voice). The single load-bearing risk the composition guards against is the page reading as *generic process* — every phase must land its concrete deliverable; the deliverable line is what converts method into evidence, and the composition gives it visual weight for exactly that reason.

## 2. Section-by-section composition

The spec §4 IA lists ten units (chrome, hero, phase index, four phase sections, optional pricing block, end CTA, chrome footer). This composition mirrors that order. The optional pricing block (item 8) is folded into Scoping per A6. The order in this document IS the render order.

### Section 1 — `SiteShell` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism), wrapped site-side by `ShellWrapper.tsx` for the React-boundary reason documented on `/` (substance carrier, zero shape). Footer slot carries `<Footer>`.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute={undefined}                        // /onboarding is NOT a primary-nav item (FS-OB-2). No nav item marked current.
    routes={[
      { href: "/why-ai",      label: "Why AI" },
      { href: "/roles",       label: "Roles" },
      { href: "/engagements", label: "Engagements" },
      { href: "/principles",  label: "Principles" },
      { href: "/about",       label: "About" },
    ]}                                              // five-item primary nav, unchanged (FS-OB-2 — /onboarding stays off primary nav)
    footer={
      <Footer
        copyright="© Pouk AI INC <year>"
        email="hello@pouk.ai"
        // booking link rides the secondary link row — see booking-affordance §2 (footer utility tier)
      />
    }
  >
    {/* Hero + phase index + four phases + end CTA — Sections 2–8 */}
  </SiteShell>
  ```
- **Layout / spacing**: `<SiteShell>` owns header/footer chrome and `--page-pad` internally. Page-content wrapper is `.site-page` (`max-width: var(--content-max)` 64rem, `padding-block: var(--space-12)` — site-wide rhythm shift ratified on `/`). No SiteShell token override.
- **Motion**: None at shell level. Nav/footer link hover is DS-internal (`--easing-link`, `--dur-fast`).
- **Content slot**: `routes[]` is the nav array in `BaseLayout.astro` / `ShellWrapper.tsx`. Not JSON-driven; site chrome substance.
- **Brand notes**:
  - Wordmark always rendered by `<SiteShell>` via `<Wordmark>` — never a string literal.
  - **`/onboarding` is off the primary nav (FS-OB-2)** — reached from the footer utility tier and the `/engagements → /onboarding` hand-off. No nav item is marked current (consistent with off-nav pages; spec §4 IA item 1).
  - `/onboarding` is added to the footer utility tier and `sitemap.xml` (spec §8). The footer booking link (booking-affordance note) and the `/onboarding` utility link are distinct: one is a funnel booking CTA, one is a route link.
  - Shell renders as static HTML — no `client:*`.

### Section 2 — `Hero` (frame the six weeks)

- **DS primitive(s)**: `<Eyebrow as="p" variant="muted">` (atom) placed **directly above** `<Hero>` (molecule, `size="display"`). No `<StatusBadge>` (A5). No `cta` slot — the page has one end CTA (spec §4 item 9; §5 "one quiet end CTA"); a Hero CTA would pre-empt it and add a second conversion affordance to a page whose register is operational reassurance, not doorway.
- **EYEBROW — RESOLVED (Arian, 2026-06-14, final-state push).** Arian decided to **restore the eyebrow "How we work together"** above the Hero while keeping exactly one clean `<h1>` (spec §4 item 2; §8 single-`<h1>` AC). **The DS titled `<Hero>` has no eyebrow slot** — at `@poukai-inc/ui@2.11.2`, `eyebrow` is valid only on `variant="no-title"`, which emits *no* heading element at all (DS snapshot Hero §, lines 359–367). So `<Hero eyebrow="…" title="…" />` is **not buildable today**. The interim ships the eyebrow as the **`<Eyebrow>` DS atom** above the Hero (the same atom `/engagements` already uses for its ladder-index lead-in, and this page uses for its phase index — §2 Section 3). This is boundary-clean: the atom owns the eyebrow's *shape* (font, tracking, color, weight); the page owns only *placement + one spacing token*. The durable fix is the DS proposal at `meta/proposals/ds-side/hero-eyebrow-with-title.md` (status `drafted`; `/onboarding` is now its live driving case). When the DS slot lands, this collapses to a single `<Hero eyebrow="How we work together" title="…" lede="…" />` and the sibling atom retires (proposal §8 step 4). See §6.
- **Props (substantive)**:
  ```
  <Eyebrow as="p" variant="muted">How we work together</Eyebrow>  {/* INTERIM — page eyebrow above the Hero (spec §4 item 2; Arian 2026-06-14).
                                                                       Shape owned by the DS atom; no site CSS shadowing. Migrates into
                                                                       the Hero eyebrow slot when hero-eyebrow-with-title.md lands. */}
  <Hero
    size="display"                                  // landing-class register at the top of the read
    title="Draft: What saying yes looks like"       // content lane — title is the page <h1> (spec §8: exactly one <h1>)
    lede={
      // Draft direction (spec §5): "Saying yes to pouk.ai starts a four-phase engagement:
      //   discovery, scoping, build, handoff. Here's what the first six weeks actually look like."
      // 1–3 sentences, prospect-facing. Final copy content lane.
      <>Draft: the first six weeks, in concrete terms, from your standpoint.</>
    }
    // NO eyebrow PROP — not available on the titled variant at 2.11.2 (see EYEBROW note above).
    // NO status — A5. NO cta — end CTA carries the single conversion moment.
    // NO illustration — deferred site-wide pending the Pouākai asset (/ composition §6.2);
    //   /onboarding is a future consumer, not a blocker.
  />
  ```
- **Layout / spacing**: The interim `<Eyebrow>` sits directly above the Hero with a `--space-2` (8px) gap below it — the DS's own eyebrow→title rhythm (snapshot line 119; Section header contract line 529), applied site-side as the one composition-owned gap. The `<Eyebrow>` atom owns `margin: 0` (DS contract — "the consuming molecule owns spacing"), so the page sets the single gap; no other site CSS. Hero text column capped at `--hero-max` (38rem) by the DS. Internal Hero rhythm (title→lede) is DS-owned; not re-tuned. The Hero is the page `<h1>` (titleAs default — spec §8 single-`<h1>` AC). The eyebrow renders as a `<p>` (`as="p"`), not a heading — it does not enter the heading hierarchy (single-`<h1>` AC preserved).
- **Motion**: `entrance="stagger"` is **available** but **not recommended** here — same call as `/engagements` (the stagger is a doorway flourish; this is an evaluation page whose job is calm legibility). Default = no entrance animation. If Arian wants parity with `/`, one-prop add (§7 Q3). Either way: zero JS, CSS-only, gated by `prefers-reduced-motion` via the DS `:root !important` block. **Interim-eyebrow note**: because the eyebrow is a sibling atom above the Hero (not a Hero slot) until the DS proposal lands, it sits *outside* any `entrance="stagger"` group — it would not animate with the title/lede. Negligible while the recommended default is static; flagged so a future stagger opt-in is a conscious choice. Resolves automatically when the eyebrow moves into the Hero slot.
- **Content slot**: hero prose (incl. the eyebrow words "How we work together") in the page template or `onboarding-page.json[meta/hero]` (A7, engineer call). Final copy Arian-pending; the eyebrow *text* is Arian's decision ("How we work together"), the eyebrow *mechanism* is this composition's call (interim atom → DS slot).
- **Brand notes**: The eyebrow "How we work together" names the page's function as a quiet structural label above the title — the same page-function register `/engagements` carries in its ladder-index lead-in, now lifted to the Hero. It must render as a non-heading (`<Eyebrow as="p">`) so the page keeps exactly one `<h1>` (spec §8 AC). The lede frames the page as *what saying yes looks like* — concrete, prospect-facing, not consultant-advice (spec §5 audience flip, the load-bearing move). The word **"seamless" is likely banned** (spec §5 / §8 AC) — show seamlessness through the named phases and deliverables, don't claim it. No marketing-speak, no fake-plurality "we"-as-team.

### Section 3 — Phase index (reinforce the sequence)

- **DS primitive(s)**: **None — typographic, not a DS molecule** (A4; mirrors `/engagements` ladder index, engagements composition §2 Section 3). A single line of inline `<Link variant="quiet">` anchors joined by literal `→` HTML entities (`&rarr;`), inside a `<nav aria-label="Engagement phases">` for landmark clarity (distinct aria-label from the SiteShell primary nav and footer nav).
- **Props (substantive)**:
  ```
  <nav aria-label="Engagement phases">
    <Link href="#discovery" variant="quiet">Discovery</Link> →
    <Link href="#scoping"   variant="quiet">Scoping</Link> →
    <Link href="#build"     variant="quiet">Build</Link> →
    <Link href="#handoff"   variant="quiet">Handoff</Link>
  </nav>
  // Optional muted lead-in label (e.g. <Eyebrow variant="muted">The first six weeks</Eyebrow>)
  //   preceding the link row — RECOMMEND it: it names the sequence reading explicitly,
  //   same move as /engagements' "The climb" eyebrow. Content-drafter confirms the label words.
  ```
- **Layout / spacing**: Sits directly below the Hero, above the first phase. Gap Hero→index `--space-8` (32px); gap index→first phase `--space-12` (48px) — the larger gap below sets the index apart as a *map* of the arc before the arc begins (identical rhythm to `/engagements`).
- **Motion**: None. Anchor hover is DS-internal (`Link variant="quiet"` grows an accent underline via `--easing-link`).
- **Content slot**: The four labels are the phase `title`s; the four hrefs are `#${id}` derived per content-data §7 (`#discovery` / `#scoping` / `#build` / `#handoff`). Engineer maps from `onboarding.json[].id` — no second source of truth for the slug (content-data §7: must not re-derive from `title`).
- **Brand notes**: The arrows are the sequence cue. This is the typographic spine that makes the four phases read as a path you move through, not options you pick (spec §4 item 3). Deep-link anchors (`/onboarding#scoping`) must scroll the corresponding phase above the fold post-scroll (spec §8 AC) — handled by the anchor `id` on each phase section root (Sections 4–7).

### Section 4 — Phase: Discovery (`#discovery`)

- **DS primitive(s)**: `<FailureMode index={1} title="Discovery">` inside the page's `<FailureModeList>` frame (see "List frame" below). Each phase is wrapped in a `<section id={id}>` so the anchor target carries the landmark, exactly as `/why-ai` wraps each `<FailureMode>` in `<section id={mode.anchor}>`.
- **List frame** (wraps all four phases — Sections 4–7):
  ```
  <FailureModeList
    eyebrow="Draft: How an engagement runs"        // content lane — Section eyebrow above the four phases
    heading="Draft: The four phases"               // content lane — the <h2> over the phase set
    titleAs="h2"                                    // phases' <h3> descend cleanly from this <h2>, under the Hero <h1>
    // lede optional — content-drafter's call; keep it short if present
  >
    {/* four <section id> + <FailureMode> children, in fixed array order */}
  </FailureModeList>
  ```
- **Props (substantive)** — per phase, iterating `onboarding.json[]`:
  ```
  <section id="discovery" aria-label="Discovery">
    <FailureMode index={1} title="Discovery">       {/* index is the typed number; auto zero-pads to "01" */}
      <p class="phase-duration">1–2 weeks</p>        {/* onboarding.json[0].duration, muted — A3; omit if absent */}
      <p>{phase.body}</p>                            {/* onboarding.json[0].body — prospect-facing prose */}
      <p class="phase-deliverable">
        <strong>Deliverable:</strong> Discovery Brief {/* onboarding.json[0].deliverable — A2, emphasized closing beat */}
      </p>
    </FailureMode>
  </section>
  ```
- **Deliverable treatment (A2)**: the `deliverable` renders as the phase's **closing line**, `<strong>`-led, in full `--fg` (it is the concreteness that does the reassurance work — spec §5). It is *not* a separate DS slot; `<FailureMode>` renders one children block and the deliverable is the last child. If `deliverable` is absent on a phase, the line is omitted. **One site-side class** (`.phase-deliverable`) for the closing-line treatment — an application of existing tokens (spacing/weight), not a new token, not a DS override (`<FailureMode>` children are content-agnostic, same posture as `/why-ai`'s `<p>{mode.body}</p>` children).
- **Duration treatment (A3)**: `.phase-duration` renders the categorical time-window in `--fg-muted` at `--fs-meta`, near the title — a small arc cue. Categorical only, no figure (FS-OB-1). Site-side class, existing tokens.
- **Layout / spacing**: `<FailureMode>` owns its own index/title/body rhythm and inter-item borders (the `/why-ai` register — items "own their own borders and spacing," `<FailureModeList>` adds no gap). Between-phase rhythm is the `<FailureModeList>` `<div class="list">` border treatment, identical to `/why-ai`. No site-side gap override.
- **Motion**: None. `<FailureMode>` is a static editorial molecule — no hover, no interactivity. The index span is `aria-hidden` (DS contract).
- **Content slot**: `src/content/onboarding.json[0]` (Discovery). One array entry → one `<FailureMode>`. Engineer iterates the array in fixed order (content-data §6: must not re-sort; order encodes the lifecycle). No per-phase conditional logic (content-data §3 success criterion) beyond the optional-field presence checks (`duration`/`deliverable`).
- **Brand notes**: Discovery is the arc's first beat — diagnosis before build, the paid-Discovery posture, the four discovery questions echoing `/why-ai` (content-data §5). The Discovery Brief deliverable is the concrete proof that the engagement starts with a written diagnosis, not a blind build (spec §3 failure-mode guard against "generic process"). Title is the bare phase name "Discovery" (content-data §4 — declarative noun phrase, satisfies `<FailureMode>` "titles should be declarative noun phrases").

### Section 5 — Phase: Scoping (`#scoping`)

- **DS primitive(s)**: `<FailureMode index={2} title="Scoping">` inside the `<FailureModeList>` frame, wrapped in `<section id="scoping" aria-label="Scoping">`. Identical shape to Section 4.
- **Props (substantive)**: As Section 4 with `index={2}`, `title="Scoping"`, `id="scoping"`. `duration` = `onboarding.json[1].duration` (if present, e.g. "1 week"). `body` = `onboarding.json[1].body`. `deliverable` = "Statement of Work".
- **Layout / spacing / motion**: As Section 4.
- **Content slot**: `onboarding.json[1]`.
- **Brand notes**: Scoping turns the Discovery Brief into a Statement of Work and makes the engagement's boundaries legible (content-data §5). **The categorical pricing posture lives here, in `body`** (A6; FS-OB-1; content-data §4): "transparent SOW, milestone-based payments" — **no numerals, no day-rate, no currency**. There is no standalone pricing block (spec §4 item 8 folded in). The deliverable is the SOW; the fear removed is "this will balloon / I won't know what I'm paying for." A future engineer must not introduce a price figure or a separate pricing block here — that is a brand break, not a layout improvement (FS-OB-1, content-data §6 binding rule).

### Section 6 — Phase: Build (`#build`)

- **DS primitive(s)**: `<FailureMode index={3} title="Build">` inside the frame, wrapped in `<section id="build" aria-label="Build">`. Identical shape.
- **Props (substantive)**: As Section 4 with `index={3}`, `title="Build"`, `id="build"`. `duration` = `onboarding.json[2].duration` (if present). `body` = `onboarding.json[2].body`. `deliverable` = "a working production system" (or as authored).
- **Layout / spacing / motion**: As Section 4.
- **Content slot**: `onboarding.json[2]`.
- **Brand notes**: Build shows what shipping looks like inside the prospect's stack — layered delivery (prototype on sample data → real-data integration → testing/iteration), quality metrics from day one (content-data §5). Echoes the `/why-ai` leaders pattern (start small, measure, expand) and the `/about` "systems an in-house team can run, not decks" posture — deliberate cross-funnel vocabulary continuity. The deliverable is a working production system; the fear removed is "we'll get a demo, not a deployment" (the deployment gap `/why-ai` diagnoses).

### Section 7 — Phase: Handoff (`#handoff`)

- **DS primitive(s)**: `<FailureMode index={4} title="Handoff">` inside the frame, wrapped in `<section id="handoff" aria-label="Handoff">`. Identical shape.
- **Props (substantive)**: As Section 4 with `index={4}`, `title="Handoff"`, `id="handoff"`. `duration` = `onboarding.json[3].duration` (if present). `body` = `onboarding.json[3].body`. `deliverable` = "a live walkthrough + day-30 check-in" (or as authored).
- **Layout / spacing / motion**: As Section 4. This is the last phase — directly above the end CTA (the largest gap above the CTA lands the close; see §3).
- **Content slot**: `onboarding.json[3]`.
- **Brand notes**: Handoff establishes what the prospect's in-house team owns when the engagement ends — documentation, a live walkthrough (not a screen recording), the scheduled **day-30 check-in** (content-data §5). Conveys that pouk.ai builds for the client to run, not for lock-in, and that the day-30 check-in is where a natural next engagement often begins (the soft tie to `/engagements`'s Retainer rung). The deliverable is ownership + the check-in; the fear removed is "they'll ship it and disappear." The "day-30" and any "90-day metric" figures are *method* numerals, on-register and permitted (content-data §6); no *cost* figure appears.

### Section 8 — End CTA (the single conversion moment)

- **DS primitive(s)**: A muted closing line + the **dual contact mechanism** per `meta/compositions/components/booking-affordance.md` Context B. Primary = `<EmailLink variant="default" email="hello@pouk.ai" />`; secondary = a quiet booking `<a href={BOOKING_URL}>`. The lead line is plain prose (`<p>`). Composed inside `<Section size="tight" as="div">` (the close, not a major section — mirrors `/engagements` end CTA, engagements composition §2 Section 8).
- **Props (substantive)**:
  ```
  <Section size="tight" as="div">                    {/* tight band — the close */}
    <p>
      Draft: Seen how the work runs? Tell us where your problem sits.
    </p>                                              {/* content lane — end-CTA lead, differentiated from /engagements, /roles, /principles (spec §8 AC) */}

    {/* Dual mechanism — booking-affordance §2 Context B: primary mailto link, secondary booking link */}
    <p class="end-cta-affordances">
      <EmailLink email="hello@pouk.ai" variant="default" />
      {" — "}
      <a href={BOOKING_URL} class="booking-link">Draft: or grab a time →</a>
    </p>
    {/* mailto primary (full --fg), booking secondary (muted register). One connected offer, no urgency.
       NO ?subject= — late-funnel reader; the universal path stays bare (booking-flow §4: /onboarding end CTA = primary mailto + secondary booking). */}
  </Section>
  ```
- **Layout / spacing**: Sits below the Handoff phase with the page's largest gap above (`--space-16`, 64px — see §3) to separate "the arc" from "the close." `Section size="tight"` gives `--space-12` block padding. The lead line caps at `--hero-max`. The affordance line sits below it with a `--space-4` gap. The booking link's muted treatment and the inline " — " connective subordinate it beneath the primary `<EmailLink>` (booking-affordance §3).
- **Motion**: None. `EmailLink` and the booking `<a>` hover underline are DS-internal, reduced-motion-gated.
- **Content slot**: `onboarding-page.json[endCta]` or hardcoded (A7); final copy Arian-pending. **End-CTA wording must be differentiated** from `/engagements`, `/roles`, `/principles` (spec §8 AC) — it is the only end CTA framed around *having seen how the work runs* (operational reassurance), the page's distinct conversion angle.
- **Brand notes**: One quiet end CTA, no phase-level CTAs, no urgency, no stacked buttons (spec §5; §10). The booking affordance is most valuable here — highest readiness (contact-flow §4) — but `mailto:` stays **primary** (FS-CF-1 LOCKED: `mailto:` primary everywhere, including bottom-funnel; the "booking-primary at bottom-funnel" option was explicitly not taken). The booking link is the quiet secondary, not the loud default. Single muted line + dual affordance, nothing more.

### Section 9 — `SiteShell` footer (global chrome)

- **DS primitive(s)**: `<Footer>` inside the `<SiteShell>` footer slot (specified in Section 1). Carries the footer booking link on the secondary link row (booking-affordance §2, utility tier) plus the `/onboarding` route link in the utility tier (spec §8).
- **Props (substantive)**: `copyright`, `email="hello@pouk.ai"`. Footer email is `variant="muted"` (DS default inside Footer). This is the second `mailto:` on the page (after the end CTA) — deliberate standing chrome, consistent with every route.
- **Layout / spacing**: DS-owned. Hairline rule + `--page-pad` from SiteShell's `.footer` scope.
- **Motion**: None.
- **Content slot**: Hardcoded chrome substance.
- **Brand notes**: No Wordmark inside `<Footer>` (DS rule). The footer booking link is the lowest-weight booking treatment on the site (contact-flow §4 utility tier).

## 3. Cross-section rhythm

The vertical rhythm of `/onboarding`, top to bottom — a calm descent through the arc:

1. `<SiteShell>` header — DS-owned.
2. `.site-page` top padding — `--space-12` (48px), site-wide rhythm.
3. `<Hero size="display">` — DS-owned internal rhythm. Page `<h1>`.
4. Hero → phase index gap — `--space-8` (32px).
5. Phase index → first phase gap — `--space-12` (48px) — sets the map apart from the arc.
6. **The four phases, single-column, inside `<FailureModeList>`** — inter-phase rhythm is the DS `<FailureMode>` border/spacing treatment (the `/why-ai` register), not a site-side gap. The four phases read as one ascending sequence by virtue of the numbered index (01–04) + the typographic spine, exactly as `/why-ai`'s five failure modes read as one taxonomy.
7. Last phase (Handoff) → End CTA gap — `--space-16` (64px) — separates the arc from the close (mirrors `/engagements` Retainer→end-CTA gap).
8. End CTA (`Section size="tight"`) — `--space-12` block padding.
9. `.site-page` bottom padding — `--space-12`.
10. `<SiteShell>` footer — DS-owned.

**Rules that span the page:**
- **Single column, not a grid.** The four phases stack vertically — a grid would read as "pick a phase," a stack reads as "move through the arc." This is the same sequence-not-shelf discipline as `/engagements`, and the `<FailureModeList>` register enforces it natively (it is a vertical catalog, not a grid).
- **Categorical-only, no figures (FS-OB-1, load-bearing).** No price row, no day-rate, no currency symbol, no figure cell anywhere — including the folded-in Scoping pricing posture (categorical prose only). The only numerals on the page are the phase indices (01–04), categorical durations ("1–2 weeks"), and non-price method figures in prose ("day-30 check-in", "90-day metric"). A cost figure is a brand break (content-data §6).
- **No alternating surface bands.** The page sits on `--bg` throughout (like `/why-ai`); the `<FailureMode>` borders carry the rhythm, not `--surface-section` band alternation. (Reserving bands avoids the "comparison table" read, same reasoning as `/engagements`.)
- **Numbered editorial register throughout.** Hero `<h1>` → `<FailureModeList>` `<h2>` → four `<FailureMode>` `<h3>` titles → end CTA. No skipped heading levels (spec §8 AC).

Token compliance: every gap above resolves to a published `--space-N` token (`--space-8`, `--space-12`, `--space-16`). No `--space-5/7/9/11`, no raw px. The two site-side classes (`.phase-deliverable`, `.phase-duration`) apply existing weight/color/spacing tokens only — no new tokens, no DS override.

## 4. Motion choreography (page-level)

The page ships **zero JavaScript** and (by default) **zero composition-level animation**:

- **Fires on initial render**: nothing, by default. (`<Hero entrance="stagger">` is available and would fire a CSS-only staggered reveal if Arian opts in — §2 / §7 Q3. Not recommended for this evaluation page — same call as `/engagements`.)
- **Fires on scroll**: nothing. No intersection-triggered reveal, no parallax, no scroll-spy. An intersection reveal on the four phases would (a) require `IntersectionObserver` = JS, breaking the zero-JS AC (spec §8), and (b) animate the arc in a way that competes with the reader's own pace. The arc is expressed through static layout (the numbered index + the `<FailureMode>` sequence), not motion. **The reveal does not earn its hydration cost** — explicit per the template requirement.
- **Fires never (locked out)**: scroll-triggered reveal, parallax, any `IntersectionObserver`-driven motion, any animation on the `<FailureMode>` phases, any CSS animation on the phase index or end-CTA affordances.
- **Hover micro-interactions** (DS-internal, CSS-only): the phase-index `Link variant="quiet"` underline grow, the end-CTA `EmailLink` and booking-link underline grow, nav/footer link hover. All use `--dur-mid` / `--easing-link`.

**`prefers-reduced-motion: reduce` behavior**: every animation on the page (the optional Hero stagger, all link-hover transitions) is disabled by the DS's `:root !important` block in `tokens.css`. No exception; the composition adds no `@media (prefers-reduced-motion)` rule of its own. There is no `StatusBadge` on this page (A5), so the badge-pulse gate is not in play. Spec §8 AC ("`prefers-reduced-motion` honored on any composition motion, CSS-only") is satisfied trivially — there is no composition-authored motion at all.

## 5. Icon picks

**None.** `/onboarding` uses no Lucide glyphs. The numbered-section register (`<FailureMode>` index 01–04) and the typographic phase index carry the sequence; the page is type, like `/why-ai`. Adding per-phase icons would (a) diverge from the `/why-ai` `FailureMode` register the PM explicitly nominated, and (b) push the page toward the `/engagements` *card* register (which uses escalating per-rung icons) — but `/onboarding` is the *operational run* expressed as numbered prose sections, not the *commercial shape* expressed as bordered cards. The content-data spec confirms this: "the phase section is typographic (the `FailureMode` register)" — no `icon` field exists in `onboarding.json` (content-data §10, out of scope). The absence is composition-load-bearing. A future maintainer who wants per-phase icons is making a register change, not a composition tweak — a spec-level conversation.

## 6. DS gaps surfaced

**One gap: a Hero eyebrow slot on the default (titled) variant.**

- **Need**: an `eyebrow` slot on the default/titled `<Hero>` — an eyebrow rendered above the title while the title remains the page `<h1>`. At `@poukai-inc/ui@2.11.2` the titled Hero has no eyebrow slot; `eyebrow` is valid only on `variant="no-title"`, which emits no heading element (DS snapshot, Hero §, lines 359–367). There is no installed mechanism that renders an eyebrow above a titled `<h1>` Hero.
- **Where it appears**: §2 Section 2 (the Hero), to carry Arian's restored eyebrow "How we work together."
- **Workaround (interim, ships now)**: place the `<Eyebrow as="p" variant="muted">` DS atom directly above the `<Hero>` with a single `--space-2` gap (§2 Section 2). Boundary-clean — the atom owns the eyebrow's shape; the page owns only placement + one spacing token. No site CSS shadowing, no new token, no DS override.
- **Proposal**: `meta/proposals/ds-side/hero-eyebrow-with-title.md` (status `drafted`, `suggested_resolution: minor`). The proposal pre-existed (originally filed for `/404`, never opened as a GitHub issue); refreshed 2026-06-14 to DS 2.11.2 with `/onboarding` as the live driving case and the recurring multi-page nature documented. **Other titled-Hero pages share the latent need** (`/engagements`, `/roles`, `/why-ai`, `/principles`, `/about` all ship `<Hero title lede>` with no eyebrow; `engagements.astro` already documents the constraint) — none require it today, but the register is multi-page, which strengthens the DS-slot case over per-page interims. When the slot lands, §2 collapses to `<Hero eyebrow="How we work together" title="…" />` and the sibling atom retires.

The rest of the composition assembles entirely from existing `@poukai-inc/ui@2.11.2` primitives: `<SiteShell>`, `<Footer>`, `<Hero>`, `<Eyebrow>`, `<Link variant="quiet">`, `<FailureModeList>`, `<FailureMode>`, `<Section size="tight">`, `<EmailLink>`, plus the booking `<a>` (booking-affordance note, no gap there).

Recorded reasoning so the remaining choices are conscious decisions, not oversights:

- **`<FailureMode>` / `<FailureModeList>` is the right molecule — naming vs. shape.** The molecule's semantic *name* is "failure mode," but its *shape* is "numbered editorial section: typed-integer index (zero-padded 01) + declarative-noun-phrase title + prose children." The four onboarding phases are exactly that shape. Both the page spec (§4, §6) and the content-data spec (§9) nominate this molecule explicitly; the `/why-ai` page already proves the pattern (five `<FailureMode>`s in a `<FailureModeList>`, each in a `<section id>`). The DS draws a hard line between `FailureMode` (Arabic index, enumerated cases) and `Principle` (Roman numeral, editorial sequencing) — the onboarding phases are an *enumerated, ordinal* sequence (01→04, an arc), so `FailureMode`'s Arabic-numeral register is the correct one, not `Principle`'s Roman numerals. **The semantic-name mismatch ("failure mode" describing a positive engagement phase) is cosmetic, not structural** — `<FailureMode>` renders no "failure" word; it renders an index, a title, and children. The DS guidance "Do NOT use for positive/best-practice content — use `PrincipleList`" (`FailureModeList`) is worth flagging: it nudges positive content toward `PrincipleList`. **I weighed `PrincipleList` and rejected it** — its Roman-numeral register reads as *philosophical/editorial principles* (the `/principles` page's own register), not a *numbered process arc*; the onboarding phases are an ordinal lifecycle (first, then, then, finally), which Arabic numerals encode and Roman numerals muddy. The PM and content specs both land on `FailureMode`; this composition concurs. See §7 Q2 — if Arian reads the `FailureModeList` "no positive content" guidance as binding, the fallback is `PrincipleList` (Roman numerals) or a DS proposal for a neutral `<ProcessStep>`/`<PhaseList>` molecule; **recommendation: use `FailureMode` as the specs nominate** — no DS work, ships today, matches `/why-ai`.
- **`deliverable` + `duration` fold into `body` — no new slot.** `<FailureMode>` children are content-agnostic (the `/why-ai` precedent slots `<Stat>` rows + `<p>` freely). The deliverable closing line and the duration lead-in are two extra child elements with site-side classes applying existing tokens — not new DS slots, not DS overrides (content-data §9 anticipates this exact fold).
- **No new token, no DS override.** The only site-side CSS is `.phase-deliverable` (weight/spacing of existing tokens) and `.phase-duration` (`--fg-muted` / `--fs-meta`), plus the `.booking-link` muted register from the booking-affordance note. All are applications of existing tokens.

**Cross-reference (not a DS gap)**: the end-CTA booking affordance depends on `meta/compositions/components/booking-affordance.md`, whose §6 surfaces one *conditional* gap (the `<Footer>` secondary-link-row slot, to confirm not assume). That is the footer's concern, recorded there; `/onboarding`'s page body has no gap.

## 7. Open questions for Arian

1. **Deliverable + duration fold (A2/A3) — confirm.** Recommendation: `deliverable` renders as an emphasized closing line inside each phase body (`<strong>Deliverable:</strong> …`), and `duration` as a muted lead-in — both inside `<FailureMode>` children, no new DS slot. Alternative: deliverable folded plainly into prose with no visual emphasis (less reassurance weight). Recommend the emphasized closing line — the deliverable is the concreteness that converts method into evidence (spec §5). (Default if no answer: emphasized closing line + muted duration.)
2. **`FailureMode` vs. `PrincipleList` for the phases — confirm the molecule.** Recommendation: `<FailureMode>`/`<FailureModeList>` (Arabic 01–04, the `/why-ai` register the PM + content specs both nominate). The `FailureModeList` doc carries a "do NOT use for positive content" nudge; I read that as guidance against mis-registering *editorial principles*, not a bar on a *numbered process arc* — and the specs override it by naming the molecule. If Arian reads it as binding, fallbacks are `PrincipleList` (Roman numerals — I think wrong register) or a DS proposal for a neutral `<PhaseList>`/`<ProcessStep>` molecule (new DS work, blocks build). **Recommend `FailureMode`.** (Default if no answer: `FailureMode`, per the specs.)
3. **Hero entrance: static (recommended) vs. `entrance="stagger"` for parity with `/`.** Recommend static — same call as `/engagements`; this is an evaluation page whose job is calm legibility, not a doorway flourish. One-prop add if you want parity. Either way: zero JS, reduced-motion-gated. (Default if no answer: static.)
4. **No `StatusBadge` (A5) — confirm.** Recommendation: leave the availability badge off `/onboarding` (one-per-page budget spent on `/` and `/why-ai`; an availability signal on a late-funnel reassurance page tips toward "book now"). If Arian wants an availability signal here, a single `<StatusBadge status="available">` could sit in the Hero `status` slot — but it tips the register toward sales. (Default if no answer: no badge.)
5. **Hero eyebrow — RESOLVED (Arian, 2026-06-14).** Arian restored the eyebrow "How we work together" above the Hero with a single clean `<h1>`. The titled DS Hero has no eyebrow slot at 2.11.2, so the interim is the `<Eyebrow as="p" variant="muted">` DS atom above the Hero (§2 Section 2; §6 gap), and the durable fix is the drafted DS proposal `hero-eyebrow-with-title.md`. *Remaining sub-decision for Arian (non-blocking):* whether to open the DS issue now (durable fix, async) or ship only the interim for the final-state push and open the issue later. Recommendation: ship the interim now (it's boundary-clean and unblocks the page), open the DS issue when the final-state push settles — the eyebrow looks identical to the reader either way. (Default if no answer: interim ships; DS issue stays `drafted` at Arian's gate.)
6. **Content draft does not yet exist.** This composition anchors the phases against the spec §5 OUTCOMES and `Draft:` placeholders. Per the designer prompt, composing against placeholders is a flagged code smell — the real phase-body and end-CTA copy lengths may shift density (e.g. a long Scoping body that carries the folded pricing posture may want a paragraph break). **Recommend content drafts before this composition reaches `Built`**; the composition is `Approved`-able on the design side now, with a re-check pass when copy lands. (Default if no answer: approve the recipe; re-verify density when content lands.)

## 8. Out of scope

- **Final copy.** The Hero title/lede/eyebrow, the four phase bodies/deliverables, the phase-index label, and the end-CTA lead are content's lane (drafted by `pouk-ai-content` against spec §5 OUTCOMES, Arian-verified). This composition anchors them visually with `Draft:` placeholders; it does not author or approve them.
- **The `onboarding.json` file.** The engineer authors `src/content/onboarding.json` from the approved content draft, validated by the Zod schema at `src/content/_schemas/onboarding.ts` (content-data §8 AC). The composition consumes the array; it does not write it.
- **Any price/figure affordance or standalone pricing block.** No layout slot, cell, row, or block implies a number; the categorical pricing posture lives in the Scoping `body` as prose (FS-OB-1, A6). Permanently out (spec §10, content-data §10).
- **Per-phase CTAs, per-phase sub-routes, per-phase icons/imagery.** One quiet end CTA via contact-flow; anchor-based four-phase single page; typographic register. All out (spec §10, content-data §10).
- **A scheduling embed / contact form / iframe / modal.** The end CTA is `mailto:` + a plain `<a>` to `cal.pouk.ai` (booking-affordance note); zero-JS, no widget (spec §10; R-009).
- **The booking-affordance treatment itself.** Owned by `meta/compositions/components/booking-affordance.md`; this composition consumes it for the end CTA and footer, it does not re-specify the dual-CTA discipline.
- **Cross-surface edits**: the `/engagements → /onboarding` hand-off link (spec §8 AC — lands with this page, engineer/PM lane), the R-007 route-count amendment (12→13, engineer authors), the footer-utility + sitemap addition, and the flow-spec v1.3 admission. The composition cites them; it does not implement them.
- **JSON-LD type.** `Article` / `HowTo` / none — engineer's call (spec §9; content-data §9). If `HowTo`, no price/offers fields (categorical-only). Page-template metadata, not a composition concern.
- **A primary-nav slot for `/onboarding`.** Footer-utility + funnel cross-links per FS-OB-2; the composition marks no nav item current. Arian may override.
- **DS-side proposal authoring.** §6 records one gap (the Hero eyebrow slot); the proposal is drafted at `meta/proposals/ds-side/hero-eyebrow-with-title.md` (status `drafted` — Arian's gate to open the issue). This composition describes the *gap and interim* only; authoring the DS Hero API is `@poukai-inc/poukai-ui` maintainers' lane. Likewise, if Arian rejects A1 (the `FailureMode` molecule) and wants a neutral `<PhaseList>`, that DS API is theirs to author.
- **`/`, `/why-ai`, `/roles`, `/engagements`, `/principles`, `/about` compositions.** Each is its own document. The booking-affordance note flags the revisions those pages owe to consume the dual mechanism; sequencing them is PM/Arian's call, not this composition's.
