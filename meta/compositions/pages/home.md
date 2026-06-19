# Composition: Home

**Route**: `/`
**Status**: PROPOSAL — revision 2026-06-15 "destination" (doorway → destination homepage). Awaiting Arian approval. Carries the 2026-06-14 "raise the ceiling" display-doorway Hero forward intact; adds three sections below it (Statement → differentiation preview → closing CTA) per the Approved `home-amendment-destination.md` (RR-1/RR-2/RR-3 ratified 2026-06-15). Supersedes the 2026-06-14 revision's §2 "zero added sections" / §3 "single section break" / §4 "fires never" framing only; every other clause carries forward.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-15
**Governing spec**: `meta/specs/pages/home-amendment-destination.md` (Approved — §4 section list, §5 IA render contract, §6 ACs, §9 OQ-1..OQ-4) — authoritative for everything not composed here. Builds on `meta/specs/pages/home-amendment-raise-the-ceiling.md` (RR-1/RR-2 display Hero, carried forward) and `meta/specs/pages/home.md` (Approved base, §4 IA lock now reversed by the destination amendment).
**DS version targeted (original)**: `@poukai-inc/ui@0.6.1` (with three pending DS-gap proposals — see §6).
**DS version shipped (current, 2026-05-19)**: `@poukai-inc/ui@0.15.0`. The three §6 proposals shipped between 0.7.0 and 0.9.0: `<Hero size="intimate">` (0.7.0), `<Button size="compact">` (0.9.0), `<Hero entrance="stagger">` (0.8.0; consumed on `/` per D-17 + this composition's §2). The illustration-slot proposal stays open via [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40); deferral note above remains in force.
**Ratifies**: shipped implementation in `src/pages/index.astro`, `src/components/HomeHero.tsx`, `src/components/ShellWrapper.tsx`, `src/layouts/BaseLayout.astro` as of 2026-05-16, **plus** the four deltas introduced by Arian's 2026-05-17 direction-pick (engraving Pouākai in-flight, `<Hero size="intimate">`, `<Button size="sm">` on the Hero CTA, `.site-page` padding-block reduced to `--space-12`).
**Supersedes**: the ratified 2026-05-16 revision of this file. Every ratified clause that is not delta'd below remains binding.

> **Superseded by the 2026-06-16 JS revocation (D-25, `meta/decisions/2026-06-16-revoke-zero-js.md`).** Every clause in this composition that asserts "zero hydration / static HTML only / no `client:*`" or invokes the R-079 zero-JS contract (the §2 hydration-model lock, the per-section "Motion: None / zero-JS" notes, the §"Fires never" lock-out tying motion to a `client:*` prohibition, the Lighthouse-100 framing) is no longer binding as a *contract*. Client JS, islands, and scroll-triggered motion are now permitted. The DS-owned `prefers-reduced-motion` collapse and axe accessibility remain binding. Static rendering may still be the designer's chosen default — but it is no longer mandated. Clauses left in place pending revision.

---

> **Cross-page note.** This revision introduces three DS-gaps to `<Hero>` (illustration slot, size prop, and — see §6.3 — a no-op for `<Button>` which already supports `size`). These are **universal contract changes to `<Hero>`**, not home-only overrides. `/roles`, `/principles`, `/why-ai` will compose the same DS gaps once their own spec amendments land. PM-side amendments for those three pages are out of scope here, but the gap proposals filed against `@poukai-inc/ui` must be authored as universal Hero contract changes, not home-specific surfaces. The illustration asset itself is also designed to be reusable — pose direction (right-facing recommended), single SVG/raster file shared across pages, with per-page placement decisions deferred to each page's successor composition.

> **[Deferred 2026-05-17] Illustration consumption deferred to future iteration.** Arian deferred Pouākai SVG production after the rev-4 Gemini A/B did not converge on the brand register. The illustration-slot DS-gap ([poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40)) stays open; maintainers may accept on their own timeline. The asset-production prompt pack at [`meta/asset-production/pouakai-engraving-prompt.md`](../../asset-production/pouakai-engraving-prompt.md) is preserved as the reference state for a future iteration. **For this iteration's bundle ship**: skip the `illustration` prop on `<Hero>` (or pass `undefined`). All other deltas — `size="intimate"`, `<Button size="compact">`, `.site-page` padding `--space-12` — proceed as specified. The §2 illustration content, §6.2 DS-gap entry, and D-17 in the decisions log remain the canonical spec for the future iteration that picks the work back up.

---

> **[PROPOSAL 2026-06-14 — "raise the ceiling" revision H-A + feather colophon.]** This block lays the creative-exploration §1 (Direction H-A) and imagery-direction §2 (home colophon) deltas on top of the Approved 2026-05-17 revision. It reverses exactly two ratified clauses; nothing else changes. Reads on `meta/assessments/creative-exploration.md` §1, `meta/assessments/imagery-illustration-direction.md` §2 / Tier 1, `meta/compositions/components/feather-mark.md` (this pass). DS targeted: `@poukai-inc/ui@2.17.0`.
>
> **[Partially superseded 2026-06-15 by the destination block above.]** This block's Hero deltas (Delta 1 display, Delta 2 proportional CTA, Delta 3 feather) **all carry forward unchanged** — the destination builds beneath them. Only this block's "**zero added sections** (spec §10 unbroken)" guardrail (in Delta 1 and the Restraint-guardrail line below) is **overtaken**: `home-amendment-destination.md` RR-1/RR-2 re-opened the IA, and `/` now renders three sections below the Hero. Read "the page stays a doorway / zero added sections" here as the *then-true* record; the live IA is the destination's five-region render contract (§2/§3/§5).
>
> **Delta 1 — Hero flips `size="intimate"` → `size="display"` (the display doorway).** This is the single highest-leverage strike on the site (creative §1 signature moment): the 8-word tagline lands at `--fs-tagline` (36–68px) instead of `--fs-tagline-intimate` (32–52px), so the italic Instrument-Serif `<em>AI</em>` becomes a genuine typographic event. `size="display"` is *the DS default for marketing pages* — this is choosing the canonical register, not escalating. No copy changes (same 8 words). The page stays a doorway (spec §10 honored — zero added sections); the door is rendered at full height. **Reverses the 2026-05-17 §2 `size="intimate"` decision** (which was made to fit the footer at the fold; see §3 fold math and Open Question H1 below).
>
> **Delta 2 — Hero CTA steps `size="sm"` → `size="md"` (proportional revert).** At `size="intimate"` the title's reduced weight justified a `sm` (32px) CTA. At `display` scale that rationale inverts: a 32px button now reads underweight beneath a 60px serif title. Step the primary `<Button>` back to `size="md"` (44px, the DS page-default rung) so the CTA stays proportional to the larger title — and, as a bonus, `md` is the only rung that clears WCAG 2.5.5 AAA at threshold. Booking secondary stays at `compact` (40px) or `md` to match. **Reverses the 2026-05-17 §2 `size="sm"` CTA decision.** No DS gap — `size` is in the public API.
>
> **Delta 3 (optional, additive) — feather colophon mark.** Per the imagery direction's Tier-1 ruling (the feather is the canonical Pouākai motif, the eagle deferred), an interim figurative beat is available: a single small `currentColor` feather sigil above the `<StatusBadge>`, recipe in `meta/compositions/components/feather-mark.md`. This is the "felt finish" the deferred eagle was meant to deliver, at near-zero byte cost and zero brand risk. It is **additive and opt-in** — Delta 1+2 ship with or without it. If consumed, it is the page's *one deliberate feather moment* (max one per page beyond the Wordmark) and it occupies the top of the stagger sequence visually (see feather-mark §Motion). **Recommendation: ship Delta 1+2 now; ship Delta 3 if Arian wants the colophon (Open Question H2).** This does NOT consume the `Hero illustration` slot — that stays deferred for the eagle (existing §6.2 / D-17). The colophon feather is a small inline sigil above the status line, not the right-column illustration.
>
> **Signature moment (as composed):** *the first 60px of serif.* A first-time visitor from a LinkedIn post lands on the tagline at full display scale, the italic `AI` reading as a real typographic event, then watches the lede and CTA stagger in beneath it (`entrance="stagger"`, already shipped/consumed). The whole strike is the *interval* between a 60px serif title and an 18px lede — spare and large at once. Cost: one prop flip plus a proportional CTA revert. If Delta 3 ships, a single quiet feather sits above it all as the brand's chosen mark.
>
> **Restraint guardrail this bolder move still obeys:** one Hero, one `<h1>`, one `<StatusBadge>`, **zero added sections** (spec §10 unbroken), one Button at `variant="default"`, at most one feather beyond the Wordmark, no color, no new token, no new copy. The strike comes entirely from *scale* (the lever creative §0 names), not from volume.
>
> **Pure-site confirmation:** Delta 1, 2, and 3 are 100% pure-site. `size="display"`, `entrance="stagger"`, and `<Button size="md">` all ship in `@poukai-inc/ui@2.17.0` today; the feather is a site-side inline SVG (not a DS primitive — see feather-mark §6). **No DS gap.** The only dependency is Arian's sign-off on reversing the two 2026-05-17 clauses (and, for Delta 3, the colophon go-ahead).

---

> **[PROPOSAL 2026-06-15 — "destination" revision. Doorway → destination homepage.]** This block lays the `home-amendment-destination.md` (Approved; RR-1/RR-2/RR-3 ratified 2026-06-15) section set on top of the carried-forward display-doorway Hero. It **reverses the single-Hero IA** that every prior revision of this file held: `/` now renders **three sections below the Hero** — a conviction `Statement`, a "Why pouk.ai, specifically" differentiation preview, and a closing conversion section — then the footer. Reads on `home-amendment-destination.md` §4/§5/§6/§9, `creative-exploration.md` §1 (display doorway, surface-band lever), `ds-capability-vs-usage.md` §2 #2 (surface-band rhythm) + #4 (`Statement` beat). DS targeted: `@poukai-inc/ui@2.17.0`.
>
> **What carries forward unchanged**: the entire Hero composition from the 2026-06-14 revision — `<Hero size="display" entrance="stagger">`, the dual CTA (`mailto:` primary + `cal.pouk.ai` secondary), D-11 lede hand-off, D-12 status line, the optional feather colophon. The destination *builds beneath* the Hero; it does not re-open Hero scale, Hero copy, or the contact-flow CTA contract.
>
> **What this revision reverses on this file**: (a) the 2026-06-14 §2 Section 3 "End — no further sections / zero added sections" lock; (b) the §3 "exactly one section break (Hero → footer)" rhythm; (c) the §4 "fires never: scroll-triggered reveal … any animation" framing is *retained* (no new motion ships) but re-scoped to a 5-section page. The IA-lock ratifications those clauses encoded are superseded by `home-amendment-destination.md` RR-1/RR-2.
>
> **The two judgement calls this revision makes (the spec left them to the designer):**
> - **OQ-1 — the page's one `--surface-section` band goes to the Closing CTA section** (`CTASection surface="recessed"`). Statement and differentiation preview both sit on `--bg`. Justification in §2 Section 5 and §3. This is the spec's PM recommendation; I concur and ratify it.
> - **OQ-4 — the `Statement` sits high, immediately after the Hero** (present → assert → justify → convert). Not the `/engagements` summit pattern. Justification in §2 Section 3. This is the spec's PM recommendation; I concur and ratify it.
>
> **Restraint guardrail this destination still obeys (the §3 named failure mode — "the doorway became a generic SaaS landing page"):** five regions total, not a feature grid; **at most one `--surface-section` band on the entire page** (the hard restraint floor — ds-capability §2 #2); one `<h1>` (Hero) with clean descending `<h2>`s; one `Statement` (DS rule: once per page); one availability `StatusBadge` (DS rule: max 1 — it stays in the Hero, the closing section does **not** get a second); the dual CTA appears exactly twice (Hero + close), one-primary/one-secondary each, no third CTA register, no urgency, no scarcity; zero added JS, zero scroll-triggered reveals, zero new tokens, zero fabricated proof (no `Quote`/`TestimonialBlock`/`Stat`/logo bar). The strike comes from *scale, one stated conviction, and a single recessed band at the close* — not from quantity of sections. See §2 Section "the 13–14\" laptop read" note and §3.
>
> **Pure-site confirmation:** every primitive named below ships in `@poukai-inc/ui@2.17.0` today — `Hero size="display"`, `entrance="stagger"`, `Statement`, `Section`, `CTASection surface="recessed"`, `Button`, `StatusBadge`. **No DS gap** (see §6: one near-miss flagged, not invented). The only dependencies are Arian's sign-off and the parallel content drafts (the promoted Statement line, the differentiation-preview compression, the closing-CTA copy) — slot budgets handed to content in §2 and §7.

---

## 0. Preamble — why this composition exists after-the-fact

**[Ratified — original 2026-05-16 clause carries forward.]**

`/` was built directly from `meta/specs/pages/home.md` and the D-11 / D-12 launch-readiness decisions without passing through the Designer stage. The `/review-page home` audit on 2026-05-15 flagged the missing recipe (backlog R03, R04) and a cluster of related ratification gaps (R12, R13, R15, R21, R28, R29, R30). This document is the canonical recipe; it does not propose a redesign. Every choice below ratifies what currently ships, and is the gate any future change to the homepage Hero's internal rhythm, status-line wording, lede-extension treatment, or motion behavior must land against.

**[Added 2026-05-17.]** This revision supersedes the prior version. It carries forward every ratified clause and lays four deltas on top, all sequenced into a single PR per Arian's direction:

1. The Hero gains a Pouākai illustration in the engraving register, in-flight, sourced by Arian via AI-image-generation + curation (PM amendment §6 asset-production owner = Arian via AI tooling).
2. The Hero title slot is reduced via DS-gap **A** (`<Hero size="intimate">`), not via a content-layer rewrite. Title text is **unchanged** (D-12-adjacent: copy stays, only scale changes).
3. The Hero CTA `<Button>` is reduced from default `size="md"` (44px min) to `size="sm"` (32px min). This is a **composition-level** change — no DS-gap needed; `size` is in the public API at `@poukai-inc/ui@0.6.1`.
4. `.site-page` `padding-block` is reduced from `--space-16` (64px) to `--space-12` (48px), bringing the SiteShell hairline footer within the PM amendment §4.3 fold-position targets.

**Assumptions** (carried over from the shipped implementation and the closed decisions, with revision-specific additions):

- The page is a doorway, not a destination. Restraint is the credential.
- D-11 and D-12 (closed 2026-05-13) are binding. The status-line text and the integrated lede-extension hand-off shape are not up for re-negotiation here; only their composition-layer expression is.
- The `<Hero>` molecule from `@poukai-inc/ui@0.6.1` owns the internal vertical rhythm between its `status`, `title`, `lede`, and `cta` slots. The site does not re-tune that rhythm; if a future audit shows a problem, it is a DS proposal, not a site-side override.
- The page ships with zero hydration directives — static HTML only (R-079, masterplan §4.3). Matomo and Bugsink are first-party deferred scripts owned by `BaseLayout.astro`, not by this page composition.
- **[New 2026-05-17]** The Pouākai illustration is sourced by Arian via AI tooling and curated to the brand bar. It is **decorative** (`aria-hidden="true"`) and **static** (no motion of any kind). It does not carry informational weight that would require alt text or `<title>`.
- **[New 2026-05-17]** The `<Hero size="intimate">` and `<Hero illustration>` DS-gaps are filed against `@poukai-inc/ui` and accepted by `@poukai-inc/poukai-ui` maintainers **before** this revision moves to `Built`. The composition is `Approved` on the design side; the engineer waits on DS until both proposals land.

---

## 1. Intent

**[Revised — see additions below.]**

`/` should feel like opening a well-set table before the meal. The reader's eye lands on one tagline rendered in Instrument Serif at the page's display scale, registers the available-status dot pulsing quietly above it, scans a three-sentence lede whose last clause is a hand-off, and either follows the hand-off or starts a conversation — both paths converge on `pouk.ai` being a present, available operator. Density is deliberately low: a single Hero block, generous breathing room above and below, a hairline footer line. The brand earns trust by *not* doing more. If the visitor scrolls past the Hero, they hit the SiteShell footer — that's the page's full length. Any urge to add a section is a brand violation, not a feature.

**[Added 2026-05-17.]** The page now carries a Pouākai engraving — wings spread, mid-flight — as a quiet figurative companion to the Hero text. The title sits at an *intimate* density (smaller than the DS display scale, still primary in the visual hierarchy), and the page-vertical padding is reduced so the SiteShell footer settles within 120px of the fold at 1440×900. Restraint is still the credential; the bird is present, not performing. The reader registers the bird as "this brand chose to draw this" — a single editorial moment per page — rather than as imagery. A returning visitor who saw the wireframe-feeling launch version should now read the page as finished. A first-time visitor who clicks through from a LinkedIn post should not pattern-match the page to "another Astro starter with good typography."

**[Revised 2026-06-15 — destination.]** The doorway framing above (one Hero, footer at the fold, "any urge to add a section is a brand violation") is **superseded for the destination** by `home-amendment-destination.md`. The page is now a place a visitor can read top-to-bottom and leave converted — not only a hand-off to `/why-ai`. The *felt* arc is **present → assert → justify → convert**, in four beats with deliberate air between them: the display Hero announces (unchanged); a single italic-serif `Statement`, set on the bare canvas just below the Hero, says the one thing the brand most wants believed; a short "Why pouk.ai, specifically" preview gives the still-undecided reader one honest reason before any ask; then the page *lands* on a recessed closing band — the one moment of surface depth on the entire page — that restates availability and offers both conversion paths. The reader should feel the page get *more finished*, never more salesy. Density stays deliberately low: the strike is the *interval* between a 60px serif Hero and a 28–44px italic Statement, then the one recessed band at the close — not a stack of marketing modules. The returning-visitor fast read is preserved (Hero + status answer "alive and shipping" in the first screen, exactly as the doorway did); the scroll is a reward, not a tax. The line this composition must not cross is the §3 failure mode — "the doorway became a generic SaaS landing page." Restraint is still the credential; the destination is the brand's confident *front room*, not a feature grid with a logo wall.

---

## 2. Section-by-section composition

**[Revised 2026-06-15 — destination.]** The governing spec's §5 IA (the locked render contract) lists six regions in order: `SiteShell` chrome → `Hero` (display doorway) → `Statement` (conviction) → "Why pouk.ai" differentiation preview → Closing conversion section → `SiteShell` footer. **The order in this document IS the render order.** Sections 1 and 2 (SiteShell + Hero) carry forward from the prior revisions unchanged; Sections 3, 4, 5 are new; the old "Section 3 — End (no further sections)" terminator is retired and replaced by the destination's closing section + footer.

### Section 1 — `SiteShell` (page chrome)

**[Ratified — no delta. Carries forward verbatim from 2026-05-16.]**

- **DS primitive(s)**: `<SiteShell>` (organism) from `@poukai-inc/ui`. Wrapped in the site repo by `ShellWrapper.tsx` *only* because passing JSX as a prop from an `.astro` file across the React boundary breaks esbuild's TypeScript parse of the `.astro` template (see `ShellWrapper.tsx` header comment). `ShellWrapper.tsx` adds zero visual structure — it is a substance carrier, not a composition layer. The DS contract still flows directly: `currentRoute`, `routes[]`, `footer` slot.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/"
    routes={[
      { href: "/why-ai",     label: "Why AI" },
      { href: "/roles",      label: "Roles" },
      { href: "/principles", label: "Principles" },
    ]}                                        // funnel order per D-13
    footer={<p>© <year> pouk.ai · <a href="mailto:hello@pouk.ai">hello@pouk.ai</a></p>}
  >
    {/* Hero block — Section 2 below */}
  </SiteShell>
  ```
- **Layout / spacing**: `<SiteShell>` owns its own header/footer chrome internally. The DS handles `--page-pad` on the outer edge, the wordmark height (`56` per ADR-0008), and the nav gap (`--space-6` per DS internal). The site repo does not override any `<SiteShell>` token. The page-content wrapper between header and footer is `.site-page` in `site.css`, which applies `max-width: var(--content-max)` (64rem) and `padding-block: var(--space-12)` (48px top and bottom — **revised — see §3**).
- **Motion**: None at the SiteShell level. Wordmark and nav links are static. Link hover uses the DS's `--easing-link` internally; no site-side override.
- **Content slot**: Nav route list is hardcoded in `BaseLayout.astro` (`navRoutes` const). The footer line is hardcoded in `ShellWrapper.tsx`. Neither is JSON-driven; both are site substance that the spec authorizes.
- **Brand notes**:
  - The wordmark in the nav is **always rendered by `<SiteShell>` via `<Wordmark>`**, never a string literal. The site does not author or import a replica `<Wordmark>` anywhere. Closes R29.
  - The footer carries the email link verbatim (`mailto:hello@pouk.ai`). This is the **second** appearance of the email on the page (the first is the Hero CTA — see Section 2). This duplication is deliberate. See §3 for the rationale. Closes R13.
  - `<SiteShell>` is rendered as static HTML at build time. No `client:*` directive. Closes R30 (partial — see Section 2).

### Section 2 — `Hero` (the doorway) **[Revised — most of the work]**

- **DS primitive(s)**: `<Hero>` (molecule), with three DS atoms and one decorative SVG slotted into it:
  - `<StatusBadge>` in the `status` slot.
  - A `<Button asChild size="sm"><a>…</a></Button>` (DS atom `<Button>` with the **`size="sm"` prop revised in**) in the `cta` slot.
  - An inline `<a>` (not a DS primitive — plain HTML anchor) embedded in the `lede` prose as the D-11 hand-off. See "Brand notes" for why this is correct.
  - **[New 2026-05-17]** An inline decorative `<svg aria-hidden="true">` (or `<img aria-hidden="true">` if raster) in the new DS-gap **`illustration`** slot. The asset is the Pouākai engraving — see "Illustration asset" below.
  - **[New 2026-05-17]** `<Hero>` is invoked with `size="intimate"` (DS-gap prop — see §6.1). This swaps the title clamp from `--fs-tagline` (36–68px) to the new `--fs-tagline-intimate` token (DS-defined; recommended range `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` — 32–52px). Site does not author the token; DS owns it.
  Wrapped in the site repo by `HomeHero.tsx` for the same React-boundary reason as `ShellWrapper.tsx`. `HomeHero.tsx` adds zero shape — it assembles substance into DS slots.
- **Props (substantive)**:
  ```
  <Hero
    size="intimate"                            // DS-gap §6.1 — new prop, default "display"
    illustration={<PouakaiEngraving />}        // DS-gap §6.2 — new slot, ReactNode, decorative
    status={
      <StatusBadge status="available">
        Currently taking conversations for Q3.
      </StatusBadge>
    }
    title={<>Technical consulting for teams shipping with <em>AI</em>.</>}
    lede={
      <>
        pouk.ai builds custom AI systems, automations, and advisory
        engagements for operators who'd rather ship than speculate.
        Named for Pouākai — the largest eagle that ever flew, hunting
        by stooping from height. Most AI projects fail to deliver.{" "}
        <a href="/why-ai">Here's why →</a>
      </>
    }
    cta={
      <Button asChild size="sm">                {/* revised — was default size="md" */}
        <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
      </Button>
    }
    // align prop: NOT set — DS default. Spec §4 implies a centered-doorway
    // posture, but the shipped page leaves alignment to the DS default and
    // visual-parity passed against pre-cutover index.html. Do not add align="center"
    // unless re-validating against the parity matrix.
  />
  ```

- **Illustration asset (new 2026-05-17)**:
  - **Subject**: Pouākai (Haast's eagle), single bird, **in-flight**. Wings spread — soaring or stooping, designer-side recommendation **soaring** (wings extended horizontally rather than drawn back into a stoop) on the home page. Rationale: the lede already says *"hunting by stooping from height"* — so the text describes the stoop. Having the illustration also stoop is doubly-stating. A soaring posture lets the prose carry the kinetic story while the illustration carries the *presence*. The bird looks across the page, not down at the reader. *(If Arian prefers stooping, a single-asset swap; no other clause changes.)*
  - **Register**: **Engraving / woodcut.** Old-World ornithological-plate adjacent — Audubon, Haeckel, Te Papa Pouākai reconstructions. Single color, black-line on transparent, fine cross-hatching for shading, no decorative flourishes, no ground/sky scenery. The bird and nothing else.
  - **Posture / facing direction**: **Right-facing** by default — head and beak point right, wings extended into the page's right-hand whitespace. **Reasoning for cross-page reusability**: a right-facing bird sits cleanly to the right of left-aligned Hero text and reads as "the bird looking *into* the page's content flow," which works on `/`, `/roles`, `/principles`, and `/why-ai`. A future per-page composition may flip the asset (`transform: scaleX(-1)` is a site-side prerogative; no DS work) if a particular page's layout calls for left-facing.
  - **File format**: **Static SVG, single file**. Justification: (a) inline SVG inherits `currentColor` from `--fg` and inverts cleanly when/if dark mode ships; (b) compresses small (target ≤8KB gzip, ≤6KB brotli) — comfortably within PM amendment §4.1's "+25% HTML weight" envelope; (c) re-usable verbatim across `/roles`, `/principles`, `/why-ai` without per-page raster variants; (d) raster (PNG/WebP) would render engraving line-work more *visually faithfully* but blocks `currentColor` inheritance and is harder to optimize cross-page. **Trade-off acknowledged**: AI-generated engraving output is most natively raster (image-gen models produce pixels). The curation step Arian owns includes vectorizing the curated raster (autotrace or hand-vectorize) into clean SVG. If vectorization quality is poor (engraving lines lose their character), fall back to raster — PNG 2x for retina, AVIF/WebP for delivery. **Recommendation: ship SVG.** Re-open as an open question (§7) if vectorization fights the engraving register.
  - **Color**: Single color, resolves to `--fg` (`#1D1D1F`) via inline `currentColor`. **Never** `--accent`. Never multi-color. The engraving is monochrome by register, not by a styling choice.
  - **Size**: Long-axis target **~280–360px** on desktop. Vertically centered with the Hero text column. On viewports below `--hero-max` (608px), the illustration **hides** (`display: none` via a CSS media query in site CSS, not via JS). Mobile fallback is the text-only Hero that ships today.
  - **Placement**: **Right-side companion to the Hero text** (two-column split inside the Hero container). Hero text occupies the left column (~60% of available width, capped at `--hero-max`); the illustration occupies the right column (~40%). This is exactly what the DS-gap §6.2 `illustration` slot is being proposed to deliver. **Alternative considered and rejected**: a background watermark (Option B from the round-1 proposal) would have lower DS dependency, but a watermark cannot carry an engraving register — the register requires the line-work to be legible at near-full opacity, which a watermark by definition isn't. **A second alternative considered and rejected**: tucking a small sigil above the status badge (Option C from round-1) would have shipped without a layout-level DS-gap, but it does not satisfy PM amendment §5's "felt finish" criterion — too small to register as "this brand has imagery now."
  - **Aria**: `aria-hidden="true"`. The illustration is decorative — it duplicates information the prose already carries (the name Pouākai, the kinetic story). It does not convey state. No `<title>`, no `alt`. Closes PM amendment §4.1 accessibility checkbox.
  - **Motion**: **Static.** No CSS animation, no SVG `<animate>` element, no hover state, no scroll trigger. The bird does not flap. The bird does not fade in. The `prefers-reduced-motion: reduce` gate is trivially satisfied (no animation to disable). R-079 zero-JS contract is preserved.
  - **Asset production owner**: Arian, via AI image-generation + manual curation (PM amendment §6 amended owner). The composition does not specify the prompt, the model, the curation passes, or the vectorization tooling — those are Arian's call. The composition does specify the *output shape*: single SVG, right-facing, soaring, engraving register, monochrome `--fg`, ≤8KB gzip.
  - **Cross-page reusability**: The same SVG file lands at `/roles`, `/principles`, `/why-ai` when those pages' amendments arrive. Each page's successor composition decides placement and whether to flip via CSS `transform`. No per-page raster variants. One asset, one source of truth, ratified here.

- **Layout / spacing**:
  - Internal Hero rhythm — `status → title → lede → cta` — is **owned by `<Hero>` in the DS**. The DS uses `--space-6` (24px, "Hero status-to-title") between status and title, and `--space-8` (32px, "Hero title-to-lede") between title and lede. CTA spacing is DS-internal. The site does not introduce, override, or compensate for any of these. Closes R21.
  - **[Revised 2026-05-17]** Hero text column width is capped at `--hero-max` (38rem / 608px) by the DS. The illustration column sits adjacent at remaining width (up to a DS-owned cap defined as part of the `illustration` slot — see §6.2). The site does not widen the text column.
  - **[Revised 2026-05-17]** The vertical space between the Hero block and the SiteShell footer is governed by `.site-page { padding-block: var(--space-12); }` in `site.css` — **48px top and bottom** of the content area (was 64px). This is a page-level composition decision (not a DS internal). It is consistent with the other three routes once each route's amendment lands; PM-side, the change is a universal site-shell rhythm shift. See §3 for math.
  - **[New 2026-05-17]** Below 720px viewport width, the two-column Hero collapses to a single-column text-only layout (illustration hidden via `display: none` in site CSS). This is a site-side responsive behavior, not a DS prop. Worth being explicit here so a future engineer reading this composition knows the mobile parity target is "today's shipped Hero, unchanged."

- **Motion**:
  - `<StatusBadge status="available">` triggers an automatic CSS keyframe pulse. **No JS, no `client:*` directive, no inline animation override.** The DS's `:root !important` block in `tokens.css` disables the pulse under `prefers-reduced-motion: reduce`. This composition forbids any site-side animation on top of the badge or on the Hero block. Confirms spec §8 AC.
  - **[Revised 2026-05-17 — was: "no entrance animation, would be a JS hydration cost"; faulty premise corrected after recall of holding-page motion]** Hero entrance animation is now consumed on `/` via `<Hero entrance="stagger">` from DS 0.8.0 ([poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) → [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48)). Staggered reveal of status / title / lede / CTA over ~1.05s, CSS-only, R-079 honored. The lockout's old rationale ("would force `client:visible`, breaking R-079") was wrong — the holding page proved the effect is achievable with pure CSS keyframes + `animation-delay` + `animation-fill-mode: both`, zero JS. Intersection-triggered reveal remains locked out (would require IntersectionObserver = JS).
  - **[New 2026-05-17]** The illustration is **static**. No hover state. No scroll trigger. No CSS animation of any kind. CSS-only positioning. R-079 zero-JS still binds. `prefers-reduced-motion: reduce` is trivially satisfied.
  - Link hover (the lede-extension `<a>` and the email anchor inside the `<Button>`) uses the DS's `--easing-link` and `--dur-fast` via `<Hero>`-internal and `<Button>`-internal styling. No site-side override.

- **Content slot**: Homepage prose is **hardcoded in `HomeHero.tsx`**, not driven by a JSON file. Per spec §6 ("The homepage is hardcoded prose in the page template — no JSON file"). The tagline, lede, status-line text, and CTA target are all source-of-truth in `HomeHero.tsx`. Treat that file as the home-content surface for any future copy edit. **[Added 2026-05-17]** The illustration asset path (e.g., `src/assets/pouakai-engraving.svg` or equivalent) is imported by `HomeHero.tsx` and passed to the `illustration` prop. The asset file itself is the source of truth for the engraving.

- **Brand notes**:
  - **Status-line text is locked at `"Currently taking conversations for Q3."`** — verbatim from the pre-cutover `public/index.html` per D-12 (parity AC, byte-identical at cutover). The DS's `llms-full.txt` voice example reads `"Taking conversations for Q3."` (without "Currently"); **the engineer's rendered string is the authoritative one on this page**. A future engineer reading the DS docs MUST NOT normalize toward the DS example. D-12 supersedes the DS voice example for this specific surface. Closes R15.
  - **Lede-extension hand-off renders as `Here's why →` with the literal `→` HTML entity (`&rarr;`)**, not a Lucide `ArrowRight` icon. Ratified as the editorial choice. Rationale: the entity arrow inherits body-font metrics (Geist, `--fs-body` clamp 17–19px) and reads as part of the prose — which is exactly what D-11 demanded ("a single integrated link sentence at the end of the lede, not a tertiary line under the CTA"). A Lucide `ArrowRight` would import as an SVG with a fixed pixel size, introduce a vertical-align fiddle, and visually separate the glyph from the anchor text — re-introducing the "tertiary affordance" feel D-11 explicitly rejected. The trade-off: the entity does not auto-color-invert if we ever ship dark mode, and it cannot animate on hover. Neither trade-off matters at this brand stage; both are revisitable. Closes R12.
  - **Email link appears twice on the page**: once as the Hero CTA `<Button asChild size="sm"><a href="mailto:hello@pouk.ai">hello@pouk.ai</a></Button>`, and once as the SiteShell footer line `<a href="mailto:hello@pouk.ai">hello@pouk.ai</a>`. The DS rules do not forbid this. It is **deliberate**: the Hero CTA is the conversion path (a button-shaped affordance below the lede); the footer line is the chrome-level signal that the site is reachable on every route. Removing either would change behavior the spec authorizes — the Hero CTA serves spec §5 outcome ("email link must remain the primary conversion path"); the footer line is part of `<SiteShell>`'s standing chrome and appears identically on `/why-ai`, `/roles`, `/principles`. **A future deduplication refactor MUST NOT collapse these two surfaces.** Closes R13.
  - **[New 2026-05-17] CTA scale**: the Hero CTA `<Button>` now uses `size="sm"` (32px min height per DS contract) rather than the DS default `size="md"` (44px). Rationale: at `<Hero size="intimate">` the title's reduced visual weight makes the default `md` button feel disproportionately heavy in the Hero composition (Arian's observation). Stepping down to `sm` returns the CTA to *proportional* prominence — still the only Button on the page, still the conversion path, still sentence-case verbatim, still default variant. **Spec §5 conversion-path criterion is preserved**: "email link must remain the primary conversion path" is about *presence and accessibility*, not visual weight. The `sm` button is the same affordance; it is just sized to the new Hero density. **Trade-off acknowledged**: at `sm`, the Button's tap target is 32px minimum, comfortably above the WCAG 2.5.5 AAA 44px guidance and meets the 24px AA floor. On mobile where the Hero collapses to single-column, the `sm` button remains usable (Geist label text is `--fs-meta` 14px, which reads cleanly at this size). **No DS-gap needed** — `size` is in the public API at `@poukai-inc/ui@0.6.1`.
  - **[New 2026-05-17] Title text is unchanged**: `<>Technical consulting for teams shipping with <em>AI</em>.</>` — same 8 words, same italic accent. The softening comes from **scale**, not from a content rewrite. PM amendment §4.2 Lever C (content rewrite) is rejected; Lever A (DS-gap `size`) is chosen.
  - The `<em>AI</em>` inside the title is preserved verbatim from the pre-cutover `index.html`. Instrument Serif italic on the word "AI" is a tactile editorial accent the DS's `<Hero>` title slot renders correctly because `title` accepts `ReactNode`. Do not strip the `<em>`.
  - The Hero is **the only `<Hero>` on the page** (DS rule: "One per page. Do NOT nest Hero inside another Hero.") and the `<StatusBadge>` is **the only StatusBadge on the page** (DS rule: max 1 per page). Both confirmed.
  - The Hero CTA is **the only Button on the page**. Default variant (no `variant="primary"` set). `size="sm"`. One CTA, one conversion path. (DS rule "Maximum one variant='primary' per visual section" — trivially satisfied; the page ships with zero `primary` Buttons.)
  - **No hydration**: `<HomeHero>` and `<ShellWrapper>` both render as static HTML at build time. No `client:load`, `client:idle`, `client:visible`, or `client:only` directive. The page ships zero React runtime. Closes R30.

### Section 3 — `Statement` (the conviction beat) **[NEW 2026-06-15 — destination Section 3 / spec §4 §5.3]**

The page's one raised-voice moment. The single felt assertion — *pouk.ai is a technical partner that ships, not an advisor that decks* — stated once, at editorial scale, so the destination reads as **authored**, not as a list. This is the beat the IA lock specifically forbade; re-opening the lock without it would be re-opening it for the weaker additions only (spec RR-3).

- **DS primitive(s)**: `<Statement>` (molecule). One instance — the **only** `Statement` on the page (DS rule: "use sparingly, once per page"; ds-capability §2 #4 — idle everywhere on the site today). Emits **no heading element** (`--fs-statement`, 28–44px, italic Instrument Serif, `line-height 1.2`, `letter-spacing -0.005em`, `text-wrap: balance`) — so it does **not** disturb the page's h1→h2 hierarchy (see §2 heading-hierarchy note and R-026). It is not an `<h2>`; the first `<h2>` on the page is Section 4.
- **Props (substantive)**:
  ```
  <Statement
    statement={<>…the single conviction line…</>}   // content slot, ~8–14 words — see budget below
    // supporting:  NOT set. The Statement carries no second line on /.
    // as:          "p" (default). NOT "blockquote" — this is the brand's own
    //              assertion, not an attributed external source.
    // hairline:    false (default). NO top rule — see Layout note for why the
    //              bare-canvas turn is the right read here, not a banner.
  />
  ```
- **Layout / spacing**: On `--bg` — **no band** (OQ-1 call: the page's one `--surface-section` band is spent at the close, not here; see §3). Rendered inside a thin site-side wrapper (a `<Section as="div" size="tight">` with no eyebrow/title/lede so its empty-header guard fires and it contributes only block padding, OR a bare site `<div>` on the `.site-page` rhythm — engineer's structural call; the DS `Statement` carries no block padding of its own). The interval **above** the Statement is the load-bearing spacing decision: a generous `--space-16` (64px) gap between the Hero block and the Statement so the assertion reads as a *quiet turn after a breath*, not as a subtitle crowding the Hero. Below the Statement, `--space-16` again into Section 4. Header-block / content max-width: the Statement inherits `--content-max` (64rem) via `.site-page`; the line itself wraps via `text-wrap: balance` and reads best at 1–2 lines (the word budget below enforces this). `hairline={false}` deliberately: a top rule would read as a section divider and start building the "module stack" the §3 failure mode warns against; the bare turn keeps it editorial.
- **Motion**: **None.** The `Statement` is static — no entrance animation, no scroll trigger. The display Hero's `entrance="stagger"` is the page's one entrance moment; adding a second entrance to the Statement would (a) require either DS support the `Statement` molecule does not expose or a site-side scroll trigger (= `IntersectionObserver` = JS, breaking R-079), and (b) dilute the Hero's signature moment. The Statement *arrives by being read*, not by animating. `prefers-reduced-motion`: trivially satisfied (no motion to gate).
- **Content slot**: **net-new draft, content's lane — anchored to an existing parked candidate.** `statement-beats.md` §5 parked the `/` line for the record under the old IA lock: `Most teams can build now. Few can ship and keep it running.` On RR-3 ratification, content promotes that parked line (or supplies a replacement) from "parked / not for build" to an `Approved` Statement draft. No new conviction is invented — the assertion already lives across the lede and the parked line; this section gives it a home. **Slot budget handed to content: one or two short sentences, target 8–14 words total, ideally landing on 1–2 balanced lines at `--fs-statement` on a 13–14" laptop.** No CTA, no stat, no attribution (the `Statement` discipline, `statement-beats.md` §0).
- **Brand notes**:
  - Exactly one `Statement` on the page. It is the page's only editorial-scale line between the Hero `<h1>` and body type — that uniqueness is what makes it read as conviction rather than copy.
  - Do **not** stack a `Pull` on the same surface (DS anti-pattern: "Do NOT stack Pull with `<Statement>` on the same surface"). The page carries no `Pull`.
  - If RR-3 had been *declined* (RR-4 fallback), this section would be absent and the conviction would stay lede-carried; RR-3 is ratified, so it ships.

### Section 4 — "Why pouk.ai, specifically" (the differentiation preview) **[NEW 2026-06-15 — destination Section 4 / spec §4 §5.4]**

Closes the PROOF/DIFFERENTIATION gap the whole site is weakest on (sales-content-gaps §1). A visitor who never clicks into the funnel must still get *one* concrete reason pouk.ai beats the alternatives they're silently weighing (DIY, agency, in-house). A **short preview** — two or three lines of honest trade-off framing — that routes into `/why-ai`'s full `vs-alternatives` section and never reproduces it.

- **DS primitive(s)**: `<Section>` (molecule) — structural wrapper, **no visual surface by design** (this is the OQ-1 trade-off: the band is spent at the close, so this section is type-only on `--bg`). It carries the page's **first `<h2>`** (the Hero owns the only `<h1>`; this is the first heading subdivision below it — clean descending hierarchy, R-026, no skipped levels). The body is short prose with an inline link to `/why-ai`. **No `Stat` atoms** (categorical-only on this preview — the cited stats live on `/why-ai`, reproducing them here would risk the "category proof masquerading as pouk.ai proof" confusion, sales-content-gaps §3). **No `FeatureCard`/`FeatureGrid`** — a card grid here is the single fastest route to the "generic SaaS landing page" failure mode (§3); the preview stays prose, which is the brand's editorial register.
- **Props (substantive)**:
  ```
  <Section
    as="section"                 // region landmark (it has a title → aria-labelledby auto-wired)
    size="default"               // --space-16 (64px) block padding, top + bottom
    title="…"                    // the page's first <h2>; ~3–6 words — see budget. titleAs default "h2".
    // eyebrow:  NOT set. An eyebrow here would add a third type register
    //           between Statement and body and edge toward the module-stack look.
    // lede:     NOT set as a Section prop — the differentiation argument IS the
    //           body, not a sub-lede. Keep the header to title-only.
  >
    {/* body: 2–3 short sentences of honest trade-off framing, ending in an
        inline <a href="/why-ai">…read the full comparison →</a> link.
        Plain prose, not a DS molecule. The → is the literal &rarr; entity to
        match the Hero lede hand-off register (see Section 2 brand notes / R12),
        NOT a Lucide ArrowRight. */}
  </Section>
  ```
- **Layout / spacing**: On `--bg`, no band. `Section size="default"` supplies `--space-16` block padding internally; the cross-section gap into Section 5 is handled by that padding plus the closing `CTASection`'s own frame (see §3 — do not add a manual spacer, and do **not** nest this `Section` inside another `Section`, DS anti-pattern). Header→body gap is DS-owned (`--space-12`). Body prose wraps at the Section header max-width register; keep it to a single short paragraph so it reads as a *preview*, not an essay.
- **Motion**: **None.** No entrance, no scroll reveal (zero-JS contract; creative §1 — "no scroll-triggered reveals"). Link hover on the `/why-ai` anchor uses the DS `--easing-link` / `--dur-fast` internally. `prefers-reduced-motion`: trivially satisfied.
- **Content slot**: **net-new draft, content's lane — derived from an existing approved-track draft.** The full candor framing lives in `vs-alternatives.md` (`/why-ai`-bound: the three alternatives with "X is right when / pouk.ai is right when"). This homepage section is a **compression** of that draft's through-line — its §2 closing ("pouk.ai earns its place when the integration is the hard part and the work has to keep running after handoff") — plus the link to read the full honest comparison on `/why-ai`. **Slot budget handed to content: one `<h2>` of ~3–6 words; body of 2–3 sentences, target 30–55 words total, ending in the inline `/why-ai` link.** It must **not** restate the three full `vs-alternatives` beats — that is `/why-ai`'s job (spec §10; AC: "materially shorter than `/why-ai`'s vs-alternatives section and links to it"). The verifier check is length + link presence.
- **Brand notes**:
  - This is the page's **first and only `<h2>`** (Section 3's `Statement` emits no heading; Section 5's closing CTA carries the second `<h2>` — see hierarchy note). Two `<h2>`s total on the page, both at the same level, no skipped levels.
  - One inline `/why-ai` link here is an *additional, lower-weight* route into `/why-ai` alongside the locked D-11 lede hand-off (spec OQ-3: two routes into `/why-ai` on a longer page is fine; D-11 stays the primary, this is secondary). Do not duplicate the D-11 sentence verbatim — this link carries its own "read the full comparison" register.
  - No card, no grid, no stat, no logo — the preview is prose. If a future revision is tempted toward a 3-up card grid here, that is the §3 failure mode and a spec-level conversation, not a composition tweak.

### Section 5 — Closing conversion section (the destination's exit) **[NEW 2026-06-15 — destination Section 5 / spec §4 §5.5]**

The destination must *end* on a conversion, not trail off. A short closing band that restates availability and offers both conversion paths, so a visitor who read the whole page converts here without scrolling back to the Hero. **This section carries the page's one `--surface-section` band** (OQ-1 call).

- **DS primitive(s)**: `<CTASection surface="recessed">` (organism — the DS's purpose-built "full-width end-of-page conversion band," wraps a `CtaBlock` in a landmark `<section>`). This is the correct vehicle for the page's single recessed band: it is documented as **end-of-page only** ("Do NOT use CTASection mid-page"), which is exactly where it sits, and `surface="recessed"` applies `--surface-section` + a `--hairline` top rule in one move — the band lever from ds-capability §2 #2, deployed once, at the close.
  - **Considered and rejected: `ContactBlock`.** The DS also ships `ContactBlock` (EmailLink + `StatusBadge` slot + actions), which is tempting for a closing contact moment. **Rejected** because (a) it has a `status` slot designed to carry a `StatusBadge`, and the page's one availability `StatusBadge` is locked in the Hero (DS rule: max 1 availability badge per page) — using `ContactBlock`'s status slot would force a second availability badge or leave the slot conspicuously empty; (b) `ContactBlock` has **no surface-band option**, so it cannot carry the OQ-1 band; (c) `CTASection` is the documented end-of-page conversion organism, `ContactBlock` is a "content-section contact moment." `CTASection` wins on all three.
- **Props (substantive)**:
  ```
  <CTASection
    surface="recessed"                 // → --surface-section band + --hairline top rule.
                                       //   This is the page's ONE band (OQ-1). Verifier: built-CSS.
    size="default"                     // --space-16 (64px) block padding — the close gets full air,
                                       //   not "tight"; it is the page's terminal beat.
    align="center"                     // DS brand-correct default for end-of-page CTA: bilateral
                                       //   symmetry signals "this is the conclusion."
    headingAs="h2"                     // the page's SECOND (and final) <h2>. Same level as Section 4.
    heading="…"                        // closing line — ~4–8 words. See budget.
    body={…}                           // optional one-line availability restate — see content note.
    actions={
      <>
        <Button asChild size="md">                        {/* primary — mailto, proportional to display register, matches Hero CTA size */}
          <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
        </Button>
        <Button asChild variant="secondary" size="md">    {/* secondary — booking, subordinate per contact-flow §8 */}
          <a href="https://cal.pouk.ai/…">or grab a time →</a>
        </Button>
      </>
    }                                  // exactly TWO actions (DS rule: "Do NOT use more than two actions").
  />
  ```
- **Layout / spacing**: This is the only `--surface-section` band on the page. `CTASection` owns its own frame and block padding (`--space-16` at `size="default"`) — **do not wrap it in a `Section`** (DS anti-pattern: "Do NOT nest inside another Section — CTASection owns its own frame and block padding") and do not add a manual spacer between Section 4 and it. The `--hairline` top rule the recessed surface paints is the *only* divider on the page; it earns its keep precisely because it is singular — it tells the reader "this is the moment to act" without any other section having claimed a band first. The band runs full-width (the recessed surface bleeds to the viewport edge, content constrained to `--content-max` inside).
- **Motion**: **None.** No entrance, no scroll reveal. The dual CTA is static; `Button` hover/focus uses DS `--dur-fast` / `--easing` internally. The `StatusBadge` pulse does **not** appear here (no second availability badge). `prefers-reduced-motion`: trivially satisfied — no site-added motion.
- **Content slot**: **mechanism existing (`contact-flow.md`), copy is content's lane.** `contact-flow.md` governs the dual-CTA mechanism (`mailto:` primary + `cal.pouk.ai` secondary, the "or grab a time →" register, contact-flow §6); the CTA labels reuse the Hero's register. The closing `heading` and optional `body` are **net-new but should reuse the existing availability framing** to avoid a second scarcity signal (spec §4 Section 5 recommendation). **Slot budget handed to content: `heading` ~4–8 words (the page's second `<h2>`); optional `body` one short line, ≤12 words, restating availability without a new urgency claim; CTA labels per contact-flow.** No urgency, no scarcity, no countdown (contact-flow §5).
- **Brand notes**:
  - This is the **second** appearance of the dual CTA on the page (Hero + close) — deliberate and standard for a scrollable page, mirroring the existing intentional `mailto:` duplication (Hero CTA + footer, R13). It stays one-primary (`mailto:`) / one-secondary (`cal.pouk.ai`); it does **not** stack a third CTA register (spec / contact-flow FS-CF-1).
  - `mailto:` is the primary affordance here too (visual-weight check per contact-flow §8) — booking is the subordinate secondary. Do not let the booking link out-weigh the email.
  - This is now the **third** appearance of the email on the page (Hero CTA + this close + the SiteShell footer line). All three are deliberate and serve distinct jobs (conversion / conversion / standing reachability). A future dedup refactor must not collapse them (R13 extended).
  - No `Stat`, no `Quote`, no scarcity badge, no scheduling embed/iframe — the booking link is a plain `<a href>` (zero-JS; spec AC). No second `StatusBadge`.

### Section 6 — End / `SiteShell` footer **[Revised 2026-06-15 — was "Section 3 — End (no further sections)"]**

The old single-Hero terminator ("No additional sections … adding them is a brand violation") is **retired** by `home-amendment-destination.md` RR-1/RR-2. The page now ends on the closing `CTASection` (Section 5) flowing into the `SiteShell` footer.

- **DS primitive(s)**: None new. The `<SiteShell>` hairline footer (already specified in Section 1) closes the page, exactly as on every other route.
- **Props (substantive)**: None (footer line is carried by `ShellWrapper`, per Section 1).
- **Layout / spacing**: No manual spacer between the closing `CTASection` and the footer — the `CTASection` block padding (`--space-16` bottom) plus the footer's own internal padding handle the interval. `.site-page` `padding-block` (`--space-12`) still wraps the page content area between header and footer; the destination sections live inside it.
- **Motion**: None.
- **Content slot**: Existing — footer `mailto:` + `cal.pouk.ai` per contact-flow footer tier (Section 1).
- **Brand notes**:
  - **The minimum-set discipline is the new lock.** The page renders exactly the §5 IA regions: SiteShell → Hero → Statement → differentiation preview → closing CTA → footer. **No further sections.** Specifically still banned (carried forward from home.md §10 + destination §6): no logo bar / "trusted by" strip, no `Quote`/`TestimonialBlock`/testimonial cards, no carousel, no pricing tiers, no animated stat counter, no `Stat` band, no newsletter signup, no scheduling embed/iframe, no roles preview / role grid, no engagements/ladder preview, no FAQ on `/`, no founder/about preview, no personalization. Adding any of these is a spec-level conversation (a regression toward the §3 failure mode), not a composition revision. The minimum-set test for any future section: *does removing it cost a conversion the funnel can't recover downstream?* (spec §1). Closes R28 for the destination IA.

---

### The 13–14" laptop read — what keeps the destination off the "generic SaaS landing page" line **[NEW 2026-06-15 — the §3 judged criterion]**

The spec's single most important failure mode (§3) is *"the doorway became a generic SaaS landing page."* This is a **judged criterion** — it needs a 13–14" capture (1440×900 and 1440×768) at design review, the same way the raise-the-ceiling display Hero needed one. What keeps this composition on the right side of the line, concretely:

- **Five regions, not modules.** A generic SaaS landing page reads as a *stack of equal-weight modules* (hero, feature trio, logo strip, testimonial row, stat counters, CTA). This page has one loud beat (Hero), one quiet conviction (Statement), one short prose justification, and one recessed close. No two sections share a visual weight; nothing repeats a pattern.
- **One band, at the end only.** The single `--surface-section` band sits at the close (OQ-1). Every other section is on the bare `--bg` canvas. A SaaS landing page alternates bands the whole way down to manufacture "depth"; this page earns depth from *type scale and interval*, and spends its one band as a closing signal. The restraint floor (at most one band) is the difference.
- **No card grid, no stat counters, no logos, no testimonials.** The differentiation preview is *prose with one link*, not a 3-up `FeatureCard` grid — the card grid is the single most SaaS-coded element and it is deliberately absent. No fabricated proof of any kind (categorical-only posture, absolute).
- **The interval is the strike.** The page's memorable moment is the *interval* between a 60px display serif Hero and a 28–44px italic Statement on a bare canvas — spare and large at once (the Apple/Linear/Stripe register, creative §0). That interval cannot be pattern-matched to a SaaS template, which never leaves that much air between a hero and its next beat.
- **It reads more finished, not more salesy.** The referrer test (spec §3 Signal): a person who forwarded the doorway link should look at the destination and think "it got *more* finished," never "it got more salesy." The Statement + one honest trade-off line + a quiet recessed close is a *front room*, not a funnel.

If the 13–14" capture reads as a module stack — if the differentiation preview grows a card grid, if a second band appears, if the Statement reads as a subtitle rather than a turn — the move was applied wrong and the band/section in question is cut before anything else changes.

---

## 3. Cross-section rhythm **[Revised 2026-06-15 — destination: five regions, one band, escalation into the close]**

The vertical rhythm of `/` as a whole, top to bottom. The page is now five render regions inside the `SiteShell` chrome, not a single Hero. The rhythm is built from the published `--space-N` scale only; the one surface event is the recessed band at the close.

1. `<SiteShell>` header — DS-owned internal padding via `--page-pad` (clamp 1.5rem–3rem horizontal), Wordmark height 56px (ADR-0008), nav inline.
2. `.site-page` content area — `padding-block: var(--space-12)` (48px top, 48px bottom). Now wraps **all four content regions** (Hero, Statement, preview, closing CTA), not a single `<HomeHero />`.
3. `<Hero size="display">` internal rhythm — DS-owned: status → `--space-6` → title → `--space-8` → lede → DS-internal → CTA. **At `size="display"` the title clamp is `--fs-tagline` (36–68px)** — the carried-forward raise-the-ceiling register.
4. **Hero → Statement gap: `--space-16` (64px).** A full breath before the conviction line so it reads as a *turn*, not a Hero subtitle.
5. `<Statement>` on `--bg` — DS-owned internal type rhythm (`--fs-statement`, no block padding of its own; the gap tokens above/below carry it). `hairline={false}`.
6. **Statement → differentiation preview gap: `--space-16` (64px).** Symmetric with the gap above the Statement so the conviction sits in equal air on both sides.
7. `<Section size="default">` (differentiation preview) on `--bg` — DS-owned `--space-16` block padding (top + bottom), header→body `--space-12`. Carries the first `<h2>`.
8. **Preview → closing CTA gap: handled by the two frames' own block padding** — the `Section`'s `--space-16` bottom + the `CTASection`'s own frame. No manual spacer. This is the **escalation into the close**: the reader leaves the bare-canvas preview and arrives at the page's one recessed surface.
9. `<CTASection surface="recessed" size="default">` — the page's **one `--surface-section` band**, `--space-16` block padding, `--hairline` top rule. The terminal beat.
10. `.site-page` bottom padding — `--space-12` (48px) — flows into the `<SiteShell>` hairline footer.
11. `<SiteShell>` hairline footer — DS-owned internal padding, single `<p>` line.

**The escalation logic.** The page opens loud (display Hero), drops to a quiet large turn (Statement, bare canvas, equal air both sides), settles into the lowest-key beat (prose preview, bare canvas), then *rises* into the one recessed band at the close — the only surface event, signalling "this is the moment to act." The dynamic is **loud → quiet → quietest → recessed-resolve**, not a flat plane and not an alternating-band staircase. The band is held in reserve for exactly one beat (OQ-1).

### Surface rhythm — the hard restraint floor

- **At most ONE `--surface-section` band on the entire page** (ds-capability §2 #2; spec §6 AC). That band is the closing `CTASection surface="recessed"` (Section 5). **Every other region sits on `--bg`** (`#FBFBFD`): SiteShell chrome, Hero, Statement, differentiation preview. No `--surface`, no `--bg-elevated` is introduced anywhere. The Statement and the preview are explicitly **not** banded (OQ-1) — banding either would either spend the floor early or, if both banded, break the floor outright (a verifier failure).
- The single band is never adjacent to another band (trivially — there is only one), honoring the DS "never stack `--surface-section` adjacent" rule.

### Heading hierarchy (R-026 — no skipped levels) **[NEW]**

The destination is no longer H1-only (the home.md content-draft Flag 3 "H1-only by design" is superseded by `home-amendment-destination.md` §5). Exactly one `<h1>` and two `<h2>`s, descending cleanly with no skipped levels:

- **`<h1>`** — the `<Hero>` title (the only `<h1>`; one per page, DS rule).
- *(no heading)* — the `<Statement>` emits **no heading element** (`--fs-statement` is editorial display, not a heading; DS rule "Statement emits no `<h1>`–`<h6>`"). It sits visually between h1 and h2 in scale but carries no level — so it cannot create a skip.
- **`<h2>` #1** — the "Why pouk.ai, specifically" `Section` title (`titleAs="h2"`, default).
- **`<h2>` #2** — the closing `CTASection` heading (`headingAs="h2"`). Same level as #1.

No `<h3>` appears (no sub-subdivisions). The order is h1 → (Statement, no level) → h2 → h2. Verifier: heading-outline audit shows exactly one h1, two h2, zero skipped levels.

### Mobile collapse behavior (<768px) **[NEW]**

The destination is single-column everywhere; nothing on the page is a desktop multi-column layout that needs to reflow, so the mobile story is mostly "the same stack, narrower." Per section, below `--bp-md` (768px):

- **Hero** — DS-owned collapse (carried forward). At `size="display"` the title clamp scales down via its `clamp()` floor; the stagger entrance still runs (CSS-only). If the optional feather colophon ships, it stays above the StatusBadge. The dual CTA stacks if needed per the DS Hero's own responsive rules. *(The deferred two-column illustration slot is not consumed in this revision, so there is no two-column → stacked reflow to manage on the Hero.)*
- **Statement** — single line of running editorial type at all widths; `--fs-statement`'s `clamp()` floor (28px) and `text-wrap: balance` handle narrow viewports. It will wrap to more lines on mobile — that is fine; the word budget keeps it short. No layout change.
- **Differentiation preview (`Section`)** — single-column prose at all widths; the h2 + body + inline link simply narrow. `--space-16` block padding is preserved (the DS clamps `--page-pad` horizontally). No change.
- **Closing `CTASection`** — `align="center"` holds on mobile; the dual-CTA `actions` row stacks the two buttons vertically below the DS's button-row breakpoint (DS-owned via `CtaBlock`'s action slot). The recessed `--surface-section` band runs full-bleed on mobile too. `mailto:` stays the primary, on top.

No section introduces a site-side media query beyond what the DS primitives already own; the mobile parity target is "the desktop stack, narrowed, with DS-internal reflow." Verifier: 375px and 768px captures show single-column, no horizontal scroll, the recessed band full-bleed, CTAs stacked with `mailto:` first.

### Math at the two target viewports — destination (informational, NOT a fold gate)

The doorway optimized for "footer at the fold" (the prior revision's §4.3 target). **The destination explicitly retires that target** (spec RR-1 accepted that the page now scrolls): a destination is *meant* to be scrolled, and the conversion is repeated at the close so the fold position of the footer no longer carries conversion weight. The table below is a rough height sketch for the HTML-weight / first-screen sanity check, not a fold gate.

| Region | Approx height @ 1440 wide | Notes |
|---|---|---|
| SiteShell header | ~104 | DS chrome. |
| `.site-page` top-pad | 48 | `--space-12`. |
| Hero (`size="display"`) | ~420 | `--fs-tagline` 36–68px title; 8-word tagline 1–2 lines; lede ~88px; status ~32px; CTA pair `md` ~44px; DS internal gaps. |
| gap → Statement | 64 | `--space-16`. |
| Statement | ~110 | `--fs-statement` 28–44px, 1–2 balanced lines. |
| gap → preview | 64 | `--space-16`. |
| Differentiation preview (`Section`) | ~200 | `--space-16` pad top/bottom + h2 + ~3-sentence body. |
| Closing `CTASection` (recessed band) | ~260 | `--space-16` pad + h2 + optional body + dual CTA row. |
| `.site-page` bottom-pad | 48 | `--space-12`. |
| SiteShell footer | ~70 | DS chrome. |
| **Total** | **~1480** | A ~1.6-screen page at 1440×900. First screen still resolves the Hero + status ("alive and shipping") for the returning-visitor fast read; the rest is the rewarded scroll. |

**First-screen guarantee (returning-visitor path, spec §3 Behavior):** the Hero + `StatusBadge` (~570px of content below a ~104px header) sits comfortably within the first screen at 1440×900 — the returning visitor still gets "alive and shipping in under 20s" without scrolling. The destination does not slow that path; it only rewards the one who keeps going.

**HTML-weight gate (spec §6 AC):** a destination *will* add gzipped weight over the doorway. It must still clear the +25% post-cutover envelope (`meta/decisions/2026-05-17-home-illustration-and-density.md`). The added weight is three short text regions plus one `CTASection` — text and one recessed band, no images, no JS — so the delta is small. If the minimum section set ever breaches the budget, the section set is too large; cut before raising the budget (spec §6). Verifier: `gzip -c built.html | wc -c` on the preview.

Token compliance: every spacing value above resolves to a published DS `--space-N` token (`--space-12`, `--space-16` are the only ones this page uses for cross-section rhythm; `--space-6`/`--space-8` are DS-internal to `Hero`/`Section`/`CTASection`). No raw pixels. **Note on `--space-10`**: the prior revision claimed `--space-10` "does not exist" — that was true of the 0.6.1 scale but is **stale**; `@poukai-inc/ui@2.17.0` publishes `--space-10` (2.5rem / 40px). This composition does not *use* `--space-10`, but the old "gap does not exist" assertion should not be relied on by a future reader. The published scale at 2.17.0 is `--space-1, 2, 3, 4, 6, 8, 10, 12, 16, 24, 32` (no `--space-5/7/9/11/...`).

---

## 4. Motion choreography (page-level) **[Revised 2026-06-15 — destination: no new motion across the four added beats]**

**[Destination motion summary.]** The destination adds **zero new motion.** The page's one entrance moment stays the Hero's `entrance="stagger"` (carried forward); the three sections below it — Statement, differentiation preview, closing `CTASection` — are all **static**. There are **no scroll-triggered reveals** on any of them. This is a deliberate composition decision against the zero-JS contract (R-079, masterplan §4.3; creative §1): a scroll-triggered reveal on the Statement or the preview would require an `IntersectionObserver` (= client JS = a `client:*` directive), breaking the zero-JS posture for marginal payoff, and would also dilute the Hero's signature moment by introducing competing entrances. The destination earns its sense of *arrival* from **type scale, interval, and the one recessed band**, not from motion. The added sections do not change the page's motion budget at all: it remains the Hero stagger (on initial render) + DS-internal link/button hover transitions. Every animation is gated by `prefers-reduced-motion: reduce` via the DS `:root !important` block in `tokens.css`; there is no exception and the composition adds no `@media (prefers-reduced-motion)` rule of its own.

The page ships zero JavaScript and one CSS-only animation:

- **`<StatusBadge status="available">` pulse** — DS-owned, runs on initial render, indefinite. Disabled under `prefers-reduced-motion: reduce` via the DS's `:root !important` block in `tokens.css`. No site-side override. No JS trigger. No way for a hydration directive to influence it.
- **Link hover transitions** — DS-owned, run on `:hover` / `:focus-visible`. Uses `--dur-fast` (180ms) and `--easing-link`. Applies to (a) nav links in `<SiteShell>`, (b) the lede-extension `<a href="/why-ai">`, (c) the Hero CTA's `<Button asChild><a>` underline, (d) the footer email link. All four are DS-internal styles; the site does not author transitions. Disabled under `prefers-reduced-motion: reduce`.
- **[New 2026-05-17] Illustration motion**: **none**. The Pouākai engraving is fully static. No CSS keyframes, no SVG `<animate>` elements, no `transform` on hover, no scroll-driven transform, no opacity transition on intersection, no parallax. The CSS is positional only (Flexbox or Grid for the two-column layout, `display: none` below 720px). **`prefers-reduced-motion: reduce` is trivially satisfied** — no motion to gate. Any future urge to animate the bird (a wing-flap, a slow drift, a fade-in on load) is a separate composition revision and must clear the R-079 zero-JS contract and the DS's `:root !important` motion gate. The default for this revision is locked at **static**.

- **[New 2026-06-15] Statement / differentiation preview / closing CTASection motion**: **none.** All three added sections are fully static — no entrance animation, no scroll-triggered reveal, no hover-driven layout shift. Their only motion is the DS-internal link/button hover transition (the `/why-ai` link in the preview; the dual-CTA buttons in the close), which uses `--dur-fast` / `--easing` and is gated by reduced-motion at the DS layer. The closing section does **not** carry a `StatusBadge`, so it adds no pulse.

**Fires on scroll**: nothing. There is no scroll-triggered reveal, no intersection observer, no parallax, no scroll-spy — on any of the five regions. The destination is **meant to be scrolled** (it is no longer a single-screen page; see §3 height sketch), but the scroll reward is *content and the recessed band at the close*, not motion. A scroll-triggered animation on the Statement or preview would force `client:visible` (= `IntersectionObserver` = JS), breaking R-079 for marginal payoff, and would compete with the reader.

**Fires on initial render**: the StatusBadge pulse (CSS keyframes, JS-free) and the Hero `entrance="stagger"`. Nothing else.

**Fires never (locked out by this composition)**: scroll-triggered reveal on any section, parallax, scroll-spy, marquee on the status line, illustration animation of any kind, entrance animation on the Statement / preview / closing CTA, any animation tied to `IntersectionObserver`. All of these would require a `client:*` directive and would violate the spec's "zero client-side JS shipped on `/`" AC and masterplan §4.3.

**Now consumed via DS-gap §6.6 ([poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) → [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48))**: Hero staggered entrance animation runs on `/` via `<Hero entrance="stagger">` from `@poukai-inc/ui@0.8.0`. Status / title / lede / CTA reveal in top-down order, ~1.05s, CSS keyframes + `animation-delay`, gated by `prefers-reduced-motion: reduce` via the DS `:root !important` block. The pre-cutover holding page (`public/index.html`, deleted in commit `9e56cdb`) shipped this exact motion with pure CSS — zero JS, R-079 honored. The original "locked out" rationale for entrance animation was faulty (claimed it required `client:*`); corrected on 2026-05-17 after recall of the holding-page implementation. SiteShell wordmark + footer fade-in are NOT in scope for #47 — separate DS-gap if Arian wants full-page parity.

**`prefers-reduced-motion: reduce` behavior**: every animation on the page (the badge pulse and every link transition) is disabled by the DS's `:root !important` block in `tokens.css`. There is no exception. The composition does not need to instruct the engineer to add a `@media (prefers-reduced-motion)` rule — the DS handles it at the token layer. Closes the R21 motion-choreography concern.

---

## 5. Icon picks (if applicable)

**[Revised 2026-06-15 — destination still uses no Lucide glyphs.]**

None. The homepage uses no Lucide glyphs anywhere, including the four destination beats. The only glyphs on the page are **literal `→` HTML entities** (`&rarr;`): one in the Hero lede-extension hand-off (D-11, carried forward), and one in the differentiation preview's "read the full comparison →" `/why-ai` link (Section 4). Both are typographic characters rendered by the body font — **not** Lucide `ArrowRight` SVGs — so they inherit prose metrics and read as part of the sentence, exactly as the D-11 ruling (R12) demands. The closing `CTASection` "or grab a time →" booking label may carry the same entity arrow per the contact-flow register; it is likewise an entity, not an icon. The Statement carries no glyph. The Pouākai engraving (deferred) is an editorial illustration, not an icon — separate vocabulary.

---

## 6. DS gaps surfaced

### 6.0 Destination revision (2026-06-15) — NEW gaps: **None.**

The destination section set composes entirely from primitives that ship in `@poukai-inc/ui@2.17.0` today: `<Statement>` (Section 3), `<Section>` (Section 4), `<CTASection surface="recessed">` (Section 5), `<Button>` (closing dual CTA), plus the carried-forward `<Hero size="display" entrance="stagger">` and `<StatusBadge>`. The assessments confirm this independently (creative §"DS gaps surfaced" = None; ds-capability §2 = all pure-site). **No DS proposal is needed for the destination.**

**One near-miss flagged, not invented (spec §8 anticipated this).** The spec named one candidate DS gap: "if the designer finds the closing-conversion section wants a `CTASection` surface variant the DS doesn't expose." It does not — `CTASection` already exposes `surface="recessed"` (= `--surface-section` + `--hairline` top rule), which is exactly the OQ-1 band vehicle. So the candidate gap **does not materialize**. The one real composition tension I hit was vehicle *selection*, not a missing primitive: `ContactBlock` would have been the more literal "closing contact moment" organism, but it has **no surface-band option** and a `StatusBadge` slot that would force a second availability badge (DS rule: max 1 per page). That is a reason to choose `CTASection` over `ContactBlock` (see Section 5 "considered and rejected"), **not** a DS gap — both primitives ship; neither needs changing. Per the designer agent definition I am flagging this, not authoring a DS API. **No new token is introduced by any destination section** (spec §6 AC): `--surface-section`, `--hairline`, and the `--space-N` scale are all published.

The historical `<Hero>` gaps below (6.1–6.6) are **all resolved/shipped** and are retained for the record; none is re-opened by the destination revision.

---

### Historical `<Hero>` gaps (raise-the-ceiling / illustration era — all resolved) **[Revised — was "three gaps + one no-op"]**

These three DS-gap proposals were introduced against `@poukai-inc/ui@0.6.1` by the earlier revisions. Authoring DS-side proposal markdown is **out of this composition's scope** per the designer agent definition — Arian decides routing.

**Critical framing: all three gaps are universal `<Hero>` contract changes, not home-only overrides.** They land in the DS once and are composed by `/`, `/roles`, `/principles`, `/why-ai` independently. Each gap's *triggering* page is `/`; the *consuming* pages will follow once their own amendments arrive.

### 6.1 `<Hero size>` prop — universal title-density contract

- **Proposed file path in DS repo**: `proposals/hero-size-prop.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add `size?: "display" | "intimate"` prop on `<Hero>` (default `"display"`, preserves current behavior on every existing consumer). At `"intimate"`, the Hero swaps its title font-size token from `--fs-tagline` (36–68px) to a new DS-defined token `--fs-tagline-intimate` (recommended range `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` — 32–52px). The Hero's internal rhythm tokens (`--space-6` status→title, `--space-8` title→lede) remain unchanged at `"intimate"`. Token addition is a DS-side **minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero (this composition). Future: `/principles` Hero is the most likely next consumer (the lower-density register suits a list page); `/roles` and `/why-ai` are open per their own amendments.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accepts and ships the prop + token before this composition moves from `Approved` to `Built`. The engineer waits.~~ **RESOLVED 2026-05-17**: DS shipped via [poukai-ui#41](https://github.com/poukai-inc/poukai-ui/pull/41) in `@poukai-inc/ui@0.7.0`. Site consumed at commit `38ee1e0` (`size="intimate"` on `<Hero>` in `src/components/HomeHero.tsx`).
- **Workaround if rejected**: Not applicable — proposal accepted and shipped.
- **Live-audit follow-up (2026-05-17)**: at `size="intimate"`, the Hero rhythm tokens (`--space-6` status→title, `--space-8` title→lede) initially read disproportionately generous against the smaller title. The 0.7.0 ship locked rhythm unchanged across size variants per the original proposal — that lock was reversed via follow-up DS-gap §6.5 ([poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44)). **RESOLVED 2026-05-17**: DS shipped via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45) in `@poukai-inc/ui@0.7.1`. Site consumed via bot PR [#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit confirmed: status→title 12px, title→lede 24px desktop / 16px mobile.
- **Density-signal guardrail (designer audit, 2026-05-17)**: `<Hero size="intimate">` is an **intentional density signal**, not a default downgrade. Future page specs adopting it (`/principles`, `/roles`, `/why-ai`) must justify the choice (e.g., editorial-dense page where smaller hero lets body content breathe earlier) rather than inherit from `/`. `display` remains the brand-canonical pattern for landing-class pages.

### 6.2 `<Hero illustration>` slot — universal editorial illustration contract

- **Proposed file path in DS repo**: `proposals/hero-illustration-slot.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add an optional `illustration?: ReactNode` slot on `<Hero>`. Renders to the right of the Hero text column above a DS-owned breakpoint (recommended: `--content-max` 1024px or similar — DS picks). Below the breakpoint, the slot's content is hidden by DS CSS (`display: none`) and the Hero collapses to its existing single-column text layout — i.e., today's behavior is preserved on narrow viewports. The illustration column receives remaining width up to a DS-owned cap; the text column remains capped at `--hero-max` (38rem). Slot consumers pass an inline `<svg>`, `<img>`, or any other ReactNode; the DS does not opinionate on the asset type, only on positioning, breakpoint, and (recommended) a default `aria-hidden` if the consumer doesn't override.
- **Where it appears**: `/` Hero (this composition). Future: any of `/why-ai`, `/roles`, `/principles` that adopts a per-page Pouākai illustration via its own amendment.
- **Motion contract** (must be in the DS proposal): the slot is static by default. The DS does not animate the slot. Any animation a consumer adds inside the slot gates on the DS's `:root !important` `prefers-reduced-motion` block per existing rules.
- **Blocking dependency**: `@poukai-inc/poukai-ui` maintainers accepts and ships the slot before this composition moves from `Approved` to `Built`. The engineer waits.
- **Workaround if rejected**: Compose the illustration site-side as a sibling absolutely-positioned element next to the Hero, with the Hero wrapped in a positioning container. This is a soft violation of "no site-side override of Hero internals" (composition §2 lock) — but it would also work without the DS-gap. **Strongly prefer the DS-gap**; this workaround is here only to document the fallback if `@poukai-inc/poukai-ui` maintainers rejects.

### 6.3 `<Button size>` prop — existing API used interim; new `compact` size proposed

- **Status (revised after live audit 2026-05-17)**: `<Button>` `size` prop is in the public DS API at `@poukai-inc/ui@0.6.1` (`sm` 32px, `md` 44px, `lg` 52px). Partial-ship commit `9076cc4` shipped `<Button size="sm">` on `/`. **Live-page audit revealed the `sm/md` gap (12px) is too coarse**: `md` reads visually too heavy against brand restraint; `sm` reads visually too small against the (currently-default) `<Hero size="display">` title. New DS-gap filed for an intermediate `compact` size — see §6.4 below.
- **Recommendation (composition-level, interim)**: `<Button asChild size="sm">` remains in `src/components/HomeHero.tsx` as a **transitional state** until [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42) ships `size="compact"`. Engineer then flips `size="sm"` → `size="compact"` in the same PR that consumes `<Hero size="intimate">` (poukai-ui#39).
- **Pairing convention (revised)**: When `<Hero size="intimate">` lands, `size="sm"` Button is the proportional default. When `<Hero size="display">` (current default), the new `size="compact"` (~38px) is the proportional default once it ships; `size="md"` remains the DS-default fallback. This is a composition-layer convention, not a DS rule.

### 6.6 `<Hero entrance>` prop — staggered CSS-only reveal on load

- **Proposed file path in DS repo**: `proposals/hero-entrance-stagger.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`. **CLOSED 2026-05-18** via [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48).
- **Scope**: Add `entrance?: "stagger"` prop on `<Hero>`. Default `undefined` (no animation, zero regression). When `"stagger"`, animates status (0ms) / title (150ms, +12px rise) / lede (300ms) / cta (450ms), each rising 8–12px with fade-in over 600–700ms. Total ~1.05s. CSS keyframes only; no JS, no IntersectionObserver. `animation-fill-mode: both` required. Gated by `prefers-reduced-motion: reduce`. **Minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero (this composition). Future: any consumer wanting an editorial-restrained entrance.
- **Source-of-truth precedent**: pre-cutover `public/index.html` (deleted commit `9e56cdb`) shipped exactly this motion. The current composition's old §4 lockout was authored on the faulty premise that entrance animation requires JS; this gap corrects the premise + restores the capability.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accept and ship the prop. Engineer flips `<Hero entrance="stagger">` on consumption.~~ **RESOLVED 2026-05-18**: shipped in `@poukai-inc/ui@0.8.0` via [poukai-ui#48](https://github.com/poukai-inc/poukai-ui/pull/48). Site consumed at commit `882b8b3` (`entrance="stagger"` on `<Hero>` in `src/components/HomeHero.tsx`).

### 6.5 `<Hero size="intimate">` rhythm scaling — follow-up to §6.1

- **Proposed file path in DS repo**: `proposals/hero-intimate-rhythm.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`. **Rev 2 (2026-05-17)** after designer audit: status→title tightened from `--space-4` to `--space-3` (label-relationship register).
- **Scope**: At `<Hero size="intimate">`, scale internal rhythm tighter — status→title `--space-6` → `--space-3` (12px), title→lede `--space-8` → `--space-6` (24px desktop) / `--space-6` → `--space-4` (16px mobile). CTA-gap (`--space-8`) untouched. No new public API; internal Hero CSS change only. **Patch** version bump per ADR-0003.
- **Where it appears**: `/` Hero. Future: any consumer of `<Hero size="intimate">`.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accept and ship the rhythm tweak. Engineer flips zero code on adoption — `pnpm install` after the patch publishes is sufficient.~~ **RESOLVED 2026-05-17**: shipped in `@poukai-inc/ui@0.7.1` via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45). Site consumed via bot PR [#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit confirms tight rhythm renders correctly.
- **Why this is a follow-up, not a #39 amendment**: the original proposal we authored explicitly locked rhythm unchanged at `intimate`. Live audit on 2026-05-17 reversed that call. Audit trail preserved in the §6.5 issue body.

### 6.4 `<Button size="compact">` — universal intermediate-size contract

- **Proposed file path in DS repo**: `proposals/button-size-compact.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add `compact` to the `<Button size>` enum (~38px min-height, between `sm` 32px and `md` 44px). Padding, typography, icon size scaled proportionally. WCAG 2.5.8 AA passes; WCAG 2.5.5 AAA fails (same trade-off as `sm`). Token addition is a DS-side **minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero CTA (this composition, after acceptance). Future: any pouk.ai route or external DS consumer needing editorial-restrained CTA register without dropping to AA-only `sm`.
- **Blocking dependency**: `@poukai-inc/poukai-ui` maintainers accept and ship the size variant before the home Hero CTA flips to `compact`. Engineer waits.
- **Workaround if rejected**: keep `size="sm"` interim (current state). Re-open the editorial-restraint vs proportional-read trade-off in a future composition revision. The composition has a documented fallback path.

### Summary of DS-gap state

| # | Gap | Universal or home-only? | DS-side action needed? | Blocks `Built`? |
|---|---|---|---|---|
| 6.1 | `<Hero size="intimate">` | Universal | Yes — file proposal, ship prop + token, minor version bump | Yes |
| 6.2 | `<Hero illustration>` slot | Universal | Yes — file proposal, ship slot, minor version bump | Yes |
| 6.3 | `<Button size="sm">` on Hero CTA | Composition-level, no DS change | **No** — already in API | No |

---

## 7. Open questions for Arian

### Destination revision (2026-06-15) — open items

The spec's two designer-lane open questions (OQ-1 band placement, OQ-4 Statement placement) are **resolved in this composition** (I took the PM recommendations and ratified them; see below). They are recorded here as *decisions made, confirm-or-override*, not as blockers — per the designer prompt I default and flag rather than ask. Two genuine confirmations remain.

- **D-OQ-1 — band placement: RESOLVED → the one band goes to the Closing CTA.** I give the page's single `--surface-section` band to the closing `CTASection surface="recessed"` (Section 5); the Statement (Section 3) and the differentiation preview (Section 4) sit on `--bg`. **Why**: the recessed band is the page's only surface event, so it should land where it does the most work — signalling "this is the moment to act" at the conversion close (escalation logic, §3). Banding the Statement would make conviction read as a *banner* (off-brand — the Statement wants a quiet bare-canvas turn); banding the preview would spend the floor on the lowest-energy beat and risk the alternating-band SaaS read (§3 failure mode). One band, at the close, is the restrained-destination choice. Confirm or override. *(This is the spec OQ-1 PM recommendation; I concur.)*
- **D-OQ-4 — Statement placement: RESOLVED → high, immediately after the Hero.** The Statement sits as Section 3, right after the Hero (present → assert → justify → convert). **Why**: the page's voice should land *before* the argument, so the reader meets the conviction at full editorial scale while the Hero's authority is still fresh, then gets the justification, then the ask. The alternative — the `/engagements` "summit Statement" pattern (conviction as the last line before the CTA) — suits an *argument* page that earns its conviction over a long scroll; `/` does not run that argument, so the summit pattern would leave the conviction stranded next to the CTA and double the "act now" register at the close. High placement keeps the doorway's job (assert early) intact. Confirm or override. *(This is the spec OQ-4 PM recommendation; I concur.)*
- **D-OQ-A — content dependency (BLOCKS `Built`, not `Approved`).** Three slots need `Approved` content drafts before the destination can be `Built` (spec §6 content-approval AC): (1) the promoted `/` Statement line (`statement-beats.md` §5 parked candidate → real draft); (2) the differentiation-preview compression of `vs-alternatives.md` (new or extended draft); (3) the closing-CTA `heading`/`body` per `contact-flow.md`. Content is drafting in parallel; the slot budgets in §2 and below are handed to them. **Not a blocker for `Approved` on the design side** — the recipe is complete against the budgets — but the engineer waits on `Approved` copy before `Built`. No action needed from Arian beyond awareness.
- **D-OQ-B — closing `align`: default `center`, confirm.** The closing `CTASection` uses the DS brand-correct default `align="center"` (bilateral symmetry = "this is the conclusion"). The rest of the page is left-aligned editorial register. The one centered moment at the very end is the DS's documented end-of-page pattern and reads as a deliberate resolution, not an inconsistency. If Arian prefers the close stay left-aligned (`align="start"`) for register consistency, that is a one-prop override. (Default if no answer: `center`, per the DS end-of-page convention.)

**Content slot budgets handed to content (summary — full detail in §2):**
| Slot | Region | Budget |
|---|---|---|
| Conviction line | Statement (S3) | 1–2 sentences, 8–14 words total, 1–2 balanced lines at `--fs-statement`; no CTA/stat/attribution. |
| Section heading | Differentiation preview (S4) | one `<h2>`, ~3–6 words. |
| Preview body | Differentiation preview (S4) | 2–3 sentences, 30–55 words, ending in inline `/why-ai` link; must not restate the three `vs-alternatives` beats. |
| Closing heading | Closing CTA (S5) | one `<h2>`, ~4–8 words. |
| Closing body (optional) | Closing CTA (S5) | one line, ≤12 words, availability restate, no new urgency. |
| CTA labels | Hero + Closing CTA | per `contact-flow.md` (`mailto:` primary + "or grab a time →" secondary). |

---

### Carried-forward illustration items (deferred — orthogonal to the destination)

**[Revised — carry forward unresolved items from round-1 §6; add new questions from round-2 CTA-scale and cross-page-reusability turns.]** These all concern the deferred Pouākai engraving (D-17), which the destination revision does **not** consume — they remain open on their own track and do not block the destination.

Of the round-1 proposal's six open questions, three are now resolved by Arian's direction-pick:

- ~~Q1 (engraving vs. modern-line)~~ — **engraving**.
- ~~Q2 (in-flight vs. at-rest)~~ — **in-flight** (designer-side sub-recommendation: soaring, not stooping; see §2 illustration asset notes — confirm or override).
- ~~Q3 (commission vs. AI-generated vs. archive)~~ — **AI-generated, curated by Arian**.
- ~~Q4 (title softening — same-day vs. wait for DS)~~ — **wait for DS-gap A (`<Hero size="intimate">`)**.
- ~~Q5 (padding change — bundle or separate)~~ — **bundle into one PR**.

Carried forward / new for round 2:

1. **Does the engraving register *land* at the brand stage, given AI-generated execution?** Engraving line-work is fragile — AI image-gen models can produce engraving-adjacent output, but the line discipline (consistent stroke weight, controlled cross-hatching, no painterly bleeding) is exactly what models struggle with most. The curation step Arian owns is doing the heavy lifting. **If the first round of curated output reads as "cheap AI engraving" rather than "considered ornithological plate," the brand fails on the §5 PM amendment failure-mode test ("the illustration performs"; "softening reads as weakness").** Sub-question: does Arian want a sanity-check pass from the designer agent on the curated asset before it ships, or is this purely Arian's call? (Default if no answer: purely Arian's call. The designer agent's lane is the recipe, not the asset.)

2. **Soaring vs. stooping — confirm the designer's sub-recommendation.** §2 illustration asset notes default to **soaring** (wings extended horizontally) on the rationale that the lede already describes the stoop. If Arian prefers stooping, swap the asset; no other clause changes.

3. **Vectorization quality vs. raster fallback.** §2 illustration asset notes default to **SVG output**. If AI-generated engraving output does not vectorize cleanly (engraving cross-hatch loses character under autotrace), fall back to raster (PNG 2x retina, served as AVIF/WebP). Sub-question: how aggressively does Arian want to insist on SVG vs. accept raster if vectorization is poor? (Default if no answer: prefer SVG, accept raster as fallback. Engineer's call after seeing both.)

4. **Cross-page facing direction — right-facing default.** §2 illustration asset notes default to a **right-facing** bird, on the rationale that right-facing reads as "looking into the page" on left-aligned text layouts. Sub-question: does Arian want the default flipped to left-facing? (Default if no answer: right-facing.)

5. **CTA `size="sm"` on the Hero — confirm the proportional-density framing.** This composition recommends `size="sm"` (32px min) on the Hero CTA because the Hero is now at `size="intimate"`. Sub-question: does Arian want the CTA at `sm` (this composition's recommendation) or at the DS default `md` (preserving today's CTA prominence even after the title shrinks)? (Default if no answer: `sm`. The Hero composition reads as proportionally balanced.) **This is the round-2 new open question on the CTA axis.**

6. **Does any of this affect `/why-ai`, `/roles`, `/principles`?** (Carried forward from round-1 Q6.) The illustration is asset-level reusable — same SVG file lands on all four pages. The DS-gaps (`<Hero size>`, `<Hero illustration>`) are universal contract changes. **Sub-question**: does Arian want the same engraving on all four pages (one asset, four placements), or does he want per-page variations (different birds, different postures, different sizes per page)? **Designer-side recommendation: one asset, four placements.** Per-page variations would multiply asset-production work and dilute the "single chosen mark" brand framing. Confirm or override.

The six illustration items above (1–6) are **deferred on the illustration track** and do not gate the destination revision (the destination consumes no illustration). They reach resolution when the engraving asset work resumes; "deferred pending curated asset" remains an acceptable resolution for item 1.

**For the destination revision to reach `Approved`:** the design-side recipe is complete. The destination items D-OQ-1 and D-OQ-4 are resolved (PM recommendations ratified); D-OQ-B has a sensible default. The only item that needs an explicit Arian call is **confirm-or-override on D-OQ-1, D-OQ-4, D-OQ-B** (each defaults cleanly if he is silent). D-OQ-A (content drafts) blocks `Built`, not `Approved`. So: this composition can flip to `Approved` on Arian's nod to the four destination decisions; it then waits on content for `Built`.

---

## 8. Out of scope **[Revised 2026-06-15 — destination additions.]**

This composition deliberately does not cover:

- **[Added 2026-06-15] Any sixth region or beyond the §5 IA.** The destination is the *minimum* section set that does the conversion job, not a maximal page. Specifically out of scope (carried from home.md §10 + destination §6/§10): no roles preview / role grid, no engagements/ladder preview, no FAQ on `/`, no founder/about preview, no stats band, no logo bar / "trusted by" strip, no `Quote`/`TestimonialBlock`/testimonial cards, no carousel, no pricing tiers, no animated stat counter, no newsletter signup, no scheduling embed/iframe, no personalization, no A/B variants. Adding any is a spec-level conversation (the §3 "generic SaaS landing page" failure mode), not a composition tweak.
- **[Added 2026-06-15] Reproducing any downstream page's body on `/`.** The differentiation preview *compresses-and-links* `/why-ai`'s vs-alternatives; it does not reproduce the three beats. No failure-mode list (that's `/why-ai`), no role cards (`/roles`), no rung ladder (`/engagements`), no FAQ (`/engagements`/`/onboarding`). (spec §10.)
- **[Added 2026-06-15] Self-ID on `/` (spec OQ-2).** A roles-style self-ID nudge on `/` would be a sixth section and a separate Arian decision (PM recommends no). Not composed here.
- **[Added 2026-06-15] The final copy for any destination slot.** The Statement line, the differentiation-preview prose, and the closing-CTA heading/body are content's lane (slot budgets handed in §2/§7). This composition anchors lengths and register, not words. No `Draft:` copy is authored here — content is drafting against the budgets in parallel.
- **[Added 2026-06-15] Re-opening the Hero, D-11, D-12, or the contact-flow CTA contract.** The display Hero (RR-1/RR-2), the lede hand-off, the status line, and the dual-CTA contract are carried forward intact; the destination builds beneath them.
- **[Added 2026-06-15] The `/` OG card.** Governed by `og-cards.md` (fast-follow). If the Statement becomes the page's defining line, the `/` OG copy should align to it when that card is produced — flagged for the og-cards pass, not composed here (spec §8).
- **[Added 2026-06-15] PM cascade annotations (RR-5).** The supersession notes on the raise-the-ceiling §4.2 and the home.md content-draft Flag 3, and routing the new section copy needs to content, are PM obligations (spec §7 RR-5), not this composition's.
- **Future homepage evolution.** If `/` ever needs a featured stat, a customer story, or a proof move beyond the five regions, that is a new spec, new content, new composition — not an amendment here. *(The "adding a section is a brand violation" doorway framing is superseded; the new lock is the minimum-set discipline above.)*
- **Dark-mode behavior.** The DS palette inverts cleanly per its "never pure edges" principle, but dark mode is not shipped. If/when it ships, the lede-extension `→` glyph's color-inversion behavior is a known trade-off (see Section 2 brand notes) that may need revisiting. **[Added 2026-05-17]** Same applies to the engraving asset: inline SVG with `currentColor` inverts cleanly; a raster fallback would need a dark-mode variant. Out of scope until dark mode is.
- **OG image, favicon, apple-touch-icon, robots.txt, sitemap.xml.** These are launch-infrastructure surfaces owned by `BaseLayout.astro` and the site's `public/` directory. Not composition concerns. **[Added 2026-05-17]** The Pouākai engraving might one day be adapted into an OG image or favicon — those are separate surfaces and are decided in their own ratification, not here.
- **Matomo and Bugsink script tags.** Owned by `BaseLayout.astro` and gated on env vars. They are first-party analytics/error-reporting per D-15/D-16 and are *not* page-level composition decisions — they apply uniformly to every route.
- **Visual parity diff against pre-cutover `index.html`.** That is the engineer's cutover-checklist gate (masterplan §6.1), not a composition output. This composition assumes parity already passed.
- **`/why-ai`, `/roles`, `/principles` compositions.** Each is its own document. The funnel-order nav decision (D-13) is referenced here only because `<SiteShell>` carries it on every page; the per-page recipes belong in their own files.
- **[Added 2026-05-17] Per-page illustration variations.** This composition specifies a single shared SVG asset (engraving Pouākai, in-flight, right-facing, soaring). Pose variations per page (e.g., a stooping Pouākai for `/why-ai` because the page is about "why AI projects fail"; a perched Pouākai for `/roles` because the page is about engagement modes) are **explicitly deferred** to each page's future composition. If Arian wants per-page variants, that is a separate decision and a separate set of asset-production rounds.
- **[Added 2026-05-17] Mobile-specific illustration variants.** The composition specifies a single SVG that hides below 720px. Tablet-specific, mobile-portrait-specific, or mobile-landscape-specific variants (smaller crops, simplified line-work, sigil-sized fallbacks) are explicitly **out** — single asset, responsive sizing (or hide), no per-breakpoint variants.
- **[Added 2026-05-17] Asset production specifics.** The composition specifies the *output shape* of the illustration (engraving register, single SVG, monochrome `--fg`, right-facing soaring Pouākai, ≤8KB gzip). It does **not** specify the AI image-generation prompt, the model, the curation passes, the vectorization tool, or the asset's exact pixel-level content. Those are Arian's domain per the round-2 direction (AI-generated, curated). The designer agent does not produce or describe the illustration's pixel-level content.
- **[Added 2026-05-17] DS-side proposal authoring.** Sections 6.1 and 6.2 name and scope two DS-gap proposals. **Authoring the DS-side markdown** (the actual `proposals/hero-size-prop.md` and `proposals/hero-illustration-slot.md` files in the `@poukai-inc/ui` repo) is **not in this composition's scope** per the designer agent definition. Arian decides whether to route each to `@poukai-inc/poukai-ui` maintainers; `@poukai-inc/poukai-ui` maintainers authors the DS-side artifact.
- **[Added 2026-05-17] PM-side amendments for `/why-ai`, `/roles`, `/principles`.** Once this composition is `Approved` and the DS-gaps are in flight, PM-side amendments for the other three routes will need to land before each page's successor composition can consume the new `<Hero>` contract. Sequencing those amendments is `pouk-ai-pm`'s job, not this composition's. Flagged here so a future reader knows the sequence: this composition first, then DS-gaps, then PM-amendments for the other three routes, then each route's composition revision.
