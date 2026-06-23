# Composition: Home

**Route**: `/`
**Status**: APPROVED (Arian, 2026-06-21) — A3 6-beat / artifact-anchor revision; OQ-A1–A6 accepted as specified (CodeBlock vehicle, `language` label kept, automations asymmetry, 95% at `--fs-stat-large` + thin bar retained, close at `--fs-tagline-intimate`, two bands + merge-guard). Engineering proceeds. Artifact code string ships as Candidate A PLACEHOLDER for preview only; production `Built` gated on Arian's confirmed real fragment (AA-1 / spec §7). Supersedes the A2 5-beat recipe retained below.
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-22 — added §A3-4.2 (THE SIGNATURE) + §A3-4.3 (supporting set S2/S3/S4), raising the motion/presence ceiling ~6 → ~7.5 per `meta/direction/home-motion-ceiling.md`. The signature: "The Signal" glyph self-constructs on first paint (draughtsman draw of the pipeline, ~1.5s, once, composed with the hero text stagger as one arrival), then the existing ambient pulse takes over at the byte-identical resting end-state. Supporting set: S2 band-entrance upgrade (rise-and-settle, ~20px/`--easing`/`--dur-slow`), S3 keep T1 deficit draw, S4 one quiet artifact hairline-border warm. New OQs: OQ-A8 (SPA-nav replay suppression), OQ-A9 (S4 cut condition). §A3-4.2 GOVERNS over §A3-4/§A3-4.1 where they disagree on the glyph entrance. *(Prior 2026-06-22 entry: added §A3-4.1, the "raise the floor" micro-interaction layer — T1 deficit draw, T2 press, T3 arrow nudge, T4 disciplines stagger, T5–T8 stillness; MOTION ~5 → ~6.)*
**Governing spec**: `meta/specs/pages/home-amendment-artifact-anchor.md` (APPROVED 2026-06-21, the A3 6-beat / artifact-anchor delta) — §4.1 IA (6-beat arc), §4.2 artifact placement/surface/realness, §4.3–4.6 the four recasts, §6 data shape, §7 dependencies, §190 composition charter. The A3 spec layers on the A2 base spec (`meta/specs/pages/home.md`) — authoritative for everything A3 does not delta.
**Upstream direction**: `meta/direction/home-direction.md` §§23–30 — Amendment A3 (APPROVED by Arian 2026-06-20, §24 = option (a), the real artifact exhibit). A3 §§24–30 govern the deltas; A2 §§14–18 carry forward where A3 does not touch them.
**Approved content draft**: `meta/content/drafts/pages/home-a3-artifact-anchor.md` (v1.0, In review — the A3 copy delta: the four artifact candidates + Candidate A recommended, the re-confirmed MIT NANDA figure, the 2-axis honest cut, the lead-discipline pick, the designed-close options). Layers on `meta/content/drafts/pages/home.md` v3.0 (the A2 base copy this recipe still composes to for the Hero/Statement/disciplines/comparison lengths).
**Asset vocabulary**: `meta/asset-production/illustration-and-motion-brief.md` §B.1 — the deficit-bar vocabulary (filled-vs-empty `currentColor` bar, the empty space IS the argument; static-first, optional CSS-only render-time fill, no count-up, no axes/legend). The artifact exhibit shares the glyph's hairline/mono draftsman hand at a new scale.
**Binding decision**: [D-25](../../decisions/2026-06-16-revoke-zero-js.md) — client JS / hydration / scroll-motion permitted; Lighthouse + HTML weight advisory; **WCAG AA + axe-0-violations + `prefers-reduced-motion` are HARD, merge-blocking.**
**DS version targeted**: `@poukai-inc/ui@2.17.0` (binding reference: `meta/ds-snapshot/llms-full.txt` — and the INSTALLED package at `node_modules/@poukai-inc/ui`, which this revision read directly).

> **READ THE A3 SECTION FIRST.** This file now carries **two** recipes. The authoritative one is the **A3 6-beat / artifact-anchor recipe immediately below** (§§A3-0 … A3-8). It supersedes the A2 5-beat recipe, which is retained underneath (from "## 1. Intent" onward) as the carried-forward base — authoritative only for the beats A3 does not delta (the Hero copy, the Statement, the dual-CTA contract, the heading/band discipline, the mobile/a11y grammar). Where the A3 section and the A2 base disagree, **A3 governs** — exactly the layering the A3 spec and direction use over A2. Engineer: build to the A3 section; consult the A2 base only for an unchanged beat's detail.

---

> **This A2 base (everything from "## 1. Intent" down) supersedes** the Approved 6-beat recipe of this same file. **Delta, not rewrite** — the diff against what shipped (`src/components/Home*.tsx`, `src/pages/index.astro`, `src/styles/site.css`):
> 1. **Beat 3 "How we work" / `HomeMethod` is REMOVED** (A2 §14). The Hero "The Signal" glyph is the page's sole pipeline statement. The component, its `howWeWork` content block, schema block, and `index.astro` wiring all come out (engineer's lane). The `<h2>` count drops 4 → **3**.
> 2. **Surface rhythm goes from ONE band (Convert only) to TWO recessed bands** — Why us (new, band #1) + Convert (carried, band #2) — with a merge-guard (§3, §4).
> 3. **The Why-us beat gains a cited deficit mark at its head** (A2 §17): one monochrome filled-vs-empty `currentColor` SVG in the B.1 vocabulary + a visible mono citation caption, composed with the existing comparison table as ONE exhibit (Beat 4 below).
> 4. **The Disciplines-weight lever** is now LIVE (not held): Statement→Disciplines are two rests in a row (Method gone). I spend the lever — Beat 3 gets more typographic presence (mono-numeral hairline structure, larger discipline names). Composition-only; no new illustration vocabulary, no band, no icons.
> **Carried forward LOCKED**: Hero (copy + "The Signal" glyph + `entrance="stagger"`), Statement, the contact-flow dual-CTA contract, D-11/D-12/D-13/D-17, the anti-slop floor, the one quiet scroll-reveal grammar. **No feather colophon** (removed at Arian's request — A2 §12.A2; the prior recipe's Beat-1 feather instruction is RETIRED — see Beat 1). **No eagle** (D-17 closed).

---
---

# A3 — Home composition: the 6-beat / artifact-anchor recipe (AUTHORITATIVE)

> **This is the live recipe.** It revises the A2 5-beat recipe (retained below from "## 1. Intent") to the A3 6-beat / artifact-anchor IA, the same way the A3 spec layered onto the A2 spec: a delta that *supersedes in place*. Section numbers below carry the `A3-` prefix to keep them distinct from the A2 base's `§1…§8`. The order of beats in §A3-2 IS the render order. Empty subsections are written `None.`

---

## A3-0. Assumptions (flagged for Arian — accept or override at review)

Label everything provisional up front; the recipe stands on these.

- **AA-1 — The artifact code string is a NON-FINAL PLACEHOLDER; its PRESENTATION is real.** Per Arian's locked decision, the artifact beat composes against content **Candidate A** (the retry-with-backoff TypeScript wrapper, content draft Deliverable 1, verbatim) as a clearly-marked PLACEHOLDER, so Arian can see the beat rendered before committing real content. The **exhibit's presentation** (surface, type, scale, framing, motion, a11y) is fully composed and real regardless of the final string. The **code string itself is provisional** pending Arian's confirmation of a genuinely real, publishable fragment (binding-realness gate, spec §4.2 — no fake ships to production; the placeholder is for preview/evaluation only). **No artifact beat reaches `Built`-to-production on an unconfirmed fragment** (spec §7); a preview/staging render of Candidate A to evaluate the composition is the explicit, bounded exception this assumption authorizes.
- **AA-2 — MAJOR DS FINDING that revises the spec's premise: `@poukai-inc/ui@2.17.0` SHIPS a real `CodeBlock` molecule.** The A3 spec (§7/§30), the direction (§30), and the content draft all premise on "no DS code/artifact primitive exists → ship site-side `<pre><code>`." **Reading the INSTALLED package contradicts this.** `dist/index.d.ts:101` exports `{ CodeBlock, type CodeBlockProps }`; `dist/molecules/CodeBlock/CodeBlock.d.ts` and `dist/CodeBlock-*.js` ship the runtime; `llms-full.txt §CodeBlock` (l.3143) and `llms.txt` (l.120) both document it. It is a **semantic `<figure>` root + optional header bar (language label + copy button) + scrollable `<pre><code>` pane + optional `<figcaption>`, with NO syntax highlighting shipped** (consumer injects markup) — i.e. monochrome by default, exactly the engraved-code target. **This is the correct vehicle for the artifact beat and it changes the recipe** (see §A3-2 Beat 4 and the §A3-6 reconciliation). I am NOT authoring a DS API or a proposal — the primitive already exists; I am composing with what ships. The spec/direction/content "no primitive" language is **stale** and flagged for Arian to ratify (§A3-7 OQ-A1).
- **AA-3 — `CodeBlock` is rendered DECORATIVE for this beat: `hideCopy` + `aria-hidden` host with a real `<figcaption>` accessible label.** The artifact is an *exhibit* (a felt object that says "they ship this"), not a utility the reader copies. So: pass `hideCopy` (suppress the copy button → no interactive control, keeps the "engraved object, not dev-tool" read), and supply the accessible context via the content `label` (spec §6 `artifact.label`) rendered as / wired to the figure's accessible name. The code text remains **real selectable `<pre><code>`**, not an image (spec §8). See §A3-2 Beat 4 for the exact a11y wiring.
- **AA-4 — Compose to the A3 content draft + the A2 base lengths.** Unchanged Hero/Statement copy from `home.md` v3.0; the A3 deltas (Candidate A artifact, MIT NANDA 95% at display scale, the 2-axis cut, `disciplines.lead`, the designed close) from `home-a3-artifact-anchor.md` v1.0. No `Draft:` copy authored here except the explicitly-labelled placeholder note on the artifact string (which is content's Candidate A, not mine).
- **AA-5 — Lead discipline = `automations` (Arian's override of content's `builds` rec).** `disciplines.lead = "automations"`. automations carries the most weight/span/position; builds + advisory subordinate. The composition is layout-agnostic to *which* id leads (it reads `disciplines.lead`), so this is a one-value change with no structural cost; §A3-2 Beat 5 composes the asymmetry around `automations`.
- **AA-6 — Convert close = "The demo was never the hard part."** (content Deliverable 5 "Weirdest" option, Arian's pick). Display-adjacent serif, authored editorial moment; dual-CTA beneath unchanged; availability sub-line "Taking on a few engagements this quarter." kept (default keep).
- **AA-7 — Reuse the shipped `ScrollReveal` island.** The reveal grammar now applies to **four** below-hero beats (Statement, Artifact, What-we-do, Why-us); Convert stays static (terminus). One island, four usages; its CSS gate + reduced-motion no-op are already correct.
- **AA-8 — The two-band floor is unchanged (Why-us + Convert).** The artifact is an **inset object on `--bg`, NOT a third band** — and the DS token system makes this clean (see §A3-2 Beat 4 / §A3-6): `--surface` is the *recessed inline* tier (the DS literally names "code blocks" as its use), `--surface-section` is the *band* tier. The artifact on `--surface` reads as a recessed object; the two bands stay on `--surface-section`. Different elevation tiers = the artifact cannot read or count as a third band.

---

## A3-1. Intent

`/` still reads like a senior engineer's commit message (direction §0) — but A3 fixes the structural flaw the audit named: the A2 page is *one medium (editorial type on near-white) repeated, with no real visual object below the Hero except a thin deficit bar.* The reader should now meet the page as **one authored object with two real visual moments bracketing three composed exhibits**: the leaned-in Hero glyph at the top, the **artifact exhibit** as the mid-page engage peak, then the asymmetric disciplines, the number-led Why-us exhibit, and the designed close. The felt arc is **announce → assert → artifact → what we do → why us → convert** (six beats). The single most important change from A2 is that **the soft middle is filled by a real object, not more type**: scrolling past the Statement, the reader meets a small, beautifully-set, monochrome fragment of genuine engineering work and thinks *"oh — they actually ship this."* The artifact is the highest-craft object on the page; it must read as **engraved code in the page's own hand (the same hairline/mono draftsman register as the glyph), never as an IDE screenshot, a dev-tool landing embed, or rainbow-syntax sample.** Density stays deliberately low — the strike is the `--space-16` interval, the two recessed bands, and now the one real artifact, never the quantity of sections or louder chrome (spec §3 "restraint reversed into volume"). The line the page must not cross gains a new live instance alongside the fabricated-metric floor: **a fabricated artifact** — worse than no artifact (spec §3). The code string is a labelled placeholder until Arian confirms a real fragment; the presentation is real either way.

---

## A3-2. Section-by-section composition

Render order: `SiteShell` chrome → **Hero (ANNOUNCE, glyph leaned in)** → **Statement (ASSERT)** → **Artifact exhibit (THE ANCHOR · NEW)** → **What we do (DISCIPLINES, asymmetric)** → **Why us (number-led EXHIBIT)** → **Convert (designed CLOSE)** → `SiteShell` footer. **This order IS the render order.**

### Beat 0 — `SiteShell` (page chrome) — UNCHANGED

- **DS primitive(s)**: `<SiteShell>` via `BaseLayout.astro` (`currentRoute="/"`). Nav (funnel order, D-13) + hairline footer.
- **Props (substantive)**: `currentRoute="/"`; nav `[Why AI, Roles, Principles]`; footer `© <year> pouk.ai · hello@pouk.ai` (the address a `mailto:`). Unchanged from live.
- **Layout / spacing**: shell owns `--page-pad` + Wordmark. Content wrapper `.site-page` (`max-width: --content-max`; `padding-block: --space-12`). No token overridden.
- **Motion**: none at shell level (nav/footer hover uses DS `--easing-link`/`--dur-mid`).
- **Content slot**: nav route list + footer line (authorized site substance).
- **Brand notes**: nav wordmark is **always** `SiteShell`'s `<Wordmark>`, never a string. Footer `mailto:` is one of three deliberate email appearances (Hero CTA, Convert, footer) — a dedup refactor must not collapse them.

### Beat 1 — Hero — ANNOUNCE — glyph LEANED IN (craft/scale only; content LOCKED; NO feather)

The strongest asset, now *leaned into* per A3 §28 / spec §4.3. Content is byte-identical (OBSERVE→SHIP labels, `pipeline · 5 stages` caption, signal-pulse — A2 §14). The lean-in is **craft and scale only, no content change, no new motion.**

- **DS primitive(s)**: `<Hero size="display" entrance="stagger">` carrying `<StatusBadge status="available">` (status slot), two `<Button asChild size="md">` wrapping `<a>` (mailto primary + booking secondary), the inline `<a href="/why-ai">` D-11 lede hand-off, and the site-side "The Signal" SVG (`aria-hidden`) in the right column. Wrapped site-side by `HomeHero.tsx` + `HomeHeroIllustration.tsx`. **All copy + glyph content byte-identical to live; reproduced nowhere here.**
- **Props (substantive)**: `size="display"`, `entrance="stagger"`; `status` = the D-12 byte-identical badge (≤10 words, no feather sibling); `title` = the single `<h1>` with italic `AI`; `lede` = sentences 1–2 + `Here's why →` hand-off; `cta` = mailto primary + booking secondary (`Or grab a time →`).
- **The lean-in (the A3 craft delta) — three composition moves, all scale/craft, zero content or motion change:**
  1. **More presence in the right column.** Today (`site.css §home-hero-split`) the desktop split is `minmax(0, 34rem)` text + `minmax(0, 1fr)` illustration at ≥1024px, capped to 68rem, with `gap: --space-8`. **Lean-in: give the glyph more column.** Recommend shifting the desktop split toward the glyph — e.g. text `minmax(0, 32rem)` + illustration `minmax(0, 1fr)` so the glyph renders larger within the same capped pair — and/or tightening the gap to `--space-6` so the glyph sits closer and reads as paired-with, not appended-to, the title. The glyph's own `viewBox` (`40 176 720 250`, cropped to the pipeline band) is unchanged; it simply occupies more rendered width. (Exact column values are the engineer's tuning within these tokens; the direction is *more glyph*.)
  2. **Finer hairline detail at the larger scale.** At more width, the existing `strokeWidth` values (grid `0.6`, trace `1.6`, leader `0.6`) read finer/more deliberate — no value change needed; the scale increase IS the "finer hairline" the direction asks for. Do **not** thicken strokes (that coarsens, not refines).
  3. **It is the SAME HAND as the artifact** (Beat 4): hairline + mono + monochrome. Leaning into the glyph and introducing the artifact in the same register is what makes the page read as one authored object with two real visual moments. Compose them to rhyme (both `--font-mono`, both `currentColor`, both on the page's quiet ground).
- **Layout / spacing**: internal Hero rhythm DS-owned. Gap into Beat 2 (Statement): **`--space-16`** via `.home-statement-gap` (shipped).
- **Motion**: `entrance="stagger"` (the one entrance event, CSS-only, reduced-motion-gated). `StatusBadge status="available"` triggers the DS pulse automatically — **do not add CSS on top** (DS rule). Glyph keeps its existing CSS signal-pulse (the one ambient heartbeat). **Lean-in adds NO motion** — it is scale/craft only (spec §4.3: "no new motion, no draw-on").
- **Content slot**: `home.json` `hero` block + the two SVG assets. Unchanged.
- **Brand notes**: the glyph is the page's SOLE pipeline statement (A2 §14). No feather, no eagle (D-17 closed). One `<Hero>`, one `<h1>`, one `<StatusBadge>`. `Button` labels sentence-case; two actions only; mailto address is the label.

### Beat 2 — Statement — ASSERT — UNCHANGED

The one raised-voice beat, carried verbatim. It now sits **directly before the Artifact** — the Statement asserts "few can ship it and keep it running," and the artifact immediately *shows* it. A tighter, more earned hinge than A2's Statement→Disciplines.

- **DS primitive(s)**: `<Statement hairline={false}>` via `HomeStatement.tsx` (live). The only `Statement` on the page. Emits no heading (`--fs-statement` 28–44px, italic Instrument Serif, `text-wrap: balance`).
- **Props (substantive)**: `statement={<>{statement.text}</>}`, `hairline={false}`, `as="p"`. No `supporting`. Unchanged.
- **Layout / spacing**: on `--bg`, no band. `.home-statement-gap` (`padding-block: --space-16`). Gap into the Artifact below: **`--space-16`** (cross-beat turn).
- **Motion**: scroll-reveal (fade + 8–12px rise, once, `--dur-slow`, `--easing`, whole unit) via `<ScrollReveal client:visible>`. Reveal #1 of four below-hero. Collapses under reduced-motion.
- **Content slot**: `home.json` `statement.text` (~10 words).
- **Brand notes**: do **not** stack a `Pull` on the same surface (DS anti-pattern). The Statement is the page's only editorial-scale line between the `<h1>` and body type — that uniqueness is what makes it read as conviction. The new adjacency (Statement → real artifact) is the A3 payoff: assertion immediately followed by proof.

### Beat 3 — Artifact exhibit — THE ANCHOR · NEW — the mid-page engage peak (NO `<h2>`)

**The central A3 move and the highest-craft object on the page.** One genuine, minimal engineering artifact rendered as **real selectable `<pre><code>` text on a recessed inset object surface**, monochrome, mono, in the page's existing hairline hand — the same hand as the glyph at a new scale. It reads as an *exhibit framed within the `--bg` flow*, **not** a third full-bleed band, **not** an IDE/editor embed, **not** a screenshot. Static (no typing, cursor, or scroll-draw). It carries **no document heading** (it is an exhibit, not a titled section).

- **DS primitive(s)**: `<CodeBlock>` (molecule — **confirmed shipping in 2.17.0**, AA-2). This is the recipe's biggest change from the spec's site-side-`<pre><code>` instruction: the DS ships exactly the right primitive (semantic `<figure>` + scrollable `<pre><code>` + optional `<figcaption>`, **no syntax highlighting** → monochrome by default), so we compose with it instead of hand-rolling a `<pre>`. Wrapped site-side by a new thin `HomeArtifact.tsx` (engineer's lane) that owns the inset-surface wrapper + the reveal + the placeholder note.
- **Props (substantive)** — the PLACEHOLDER render (content Candidate A, AA-1; the `code` string is provisional, the rest is real):
  ```
  {/* Beat 3 — Artifact exhibit. Inset OBJECT surface on --bg (NOT a band). */}
  {/* PLACEHOLDER CODE STRING (content Candidate A, retry-with-backoff wrapper) — */}
  {/* provisional pending Arian's confirmed real fragment (spec §4.2 realness gate). */}
  {/* Presentation below is REAL regardless of the final string. */}
  <div class="home-artifact">          {/* inset object: --surface, hairline, radius, max-width capped */}
    <CodeBlock
      language="typescript"            {/* artifact.language — header-bar label + a11y context, NOT a syntax theme */}
      hideCopy                         {/* AA-3: decorative exhibit, not a copy utility → no interactive control */}
      caption="integration.ts — keeping it running, not just standing it up"  {/* artifact.caption — mono <figcaption>; NOT an <h2> */}
      aria-label="Example fragment: a retry wrapper around a flaky upstream integration"  {/* artifact.label — accessible name on the <figure> */}
    >
  {`// keep it running after the demo:
  // retry the transient, surface the rest
  async function call(input: Input) {
    for (let attempt = 1; ; attempt++) {
      try {
        return await upstream(input)
      } catch (err) {
        if (!isTransient(err) || attempt === 3) throw err
        await sleep(250 * 2 ** attempt)
      }
    }
  }`}
    </CodeBlock>
  </div>
  ```
  - **Why `CodeBlock` over a hand-rolled `<pre>`:** it is the DS-blessed semantic `<figure>`/`<pre><code>`/`<figcaption>` composition, it ships **no syntax highlighter** (the spec's hard "monochrome, no rainbow syntax" requirement is the primitive's *default*, not something we must police), and it consumes the right tokens (`--surface`, `--hairline`, `--radius-3`, `--font-mono`, `--fs-meta/--fs-micro`, `--fg/--fg-muted`). Using it is *more* on-contract than hand-rolling.
  - **`hideCopy` is load-bearing (AA-3):** the header bar then renders only the `language` label (DS rule: "header bar only renders when `language` is set or copy is visible"). A language label + no copy button reads as a *quiet exhibit caption*, not a code widget. If even the language label pushes the "dev-tool" read at visual review, drop `language` too (the header bar then disappears entirely, leaving a pure framed `<pre>` + `<figcaption>`) — see §A3-7 OQ-A2.
  - **The `caption` (`artifact.caption`)** renders as the DS `<figcaption>` in `--fs-micro`/`--font-mono`/`--fg-muted` — mono reference register, the same hand as the glyph caption and the deficit caption. **It is NOT an `<h2>` and emits no heading** (spec §4.1 hierarchy; content Flag 4). The page keeps exactly three `<h2>`s.
  - **The `aria-label` (`artifact.label`)** gives the `<figure>` its accessible name so a screen-reader user gets "Example fragment: a retry wrapper…" context; the code text is real and selectable beneath it. (Engineer's structural call whether to wire the label via `aria-label` on the `CodeBlock` `<figure>` root, which spreads `...rest`, or a visually-hidden element — both satisfy a11y; the requirement is a real accessible name + real `<pre><code>` text.)
- **Layout / spacing — the inset OBJECT, NOT a band (the §A3-6 reconciliation made concrete):**
  - **Surface tier = `--surface` (recessed INLINE), NOT `--surface-section` (band).** The DS elevation rhythm is explicit (`llms-full.txt` l.17/44): `--surface` is for *recessed inline elements — the DS literally names "code blocks"*; `--surface-section` is *only* for full-width alternating section bands. **`CodeBlock` ships on `--surface` by its own token contract.** This is the clean, DS-sanctioned answer to the inset-object-vs-third-band question: the artifact lives one elevation tier *below the page* on `--surface`, while the two bands live on `--surface-section`. Different tiers ⇒ the artifact **cannot read as, or count as, a third band.**
  - **It does NOT go full-bleed.** Unlike `.home-whyus-band` (which breaks out to `100vw`), the artifact wrapper stays **inside `.site-page`** and is **capped narrower than the content column** (recommend `max-width: ~44rem`, `margin-inline: auto`) so it reads as a *framed object centered in the canvas*, with `--bg` visible on both sides — the visual signature of "object," not "band."
  - **Inset framing**: the `.home-artifact` wrapper (or `CodeBlock`'s own root) carries `--surface` bg, `1px solid --hairline`, `--radius-3` (8px) — the DS recessed-inline treatment. `CodeBlock` already applies this via its token contract; the wrapper's job is the width cap + the centering + the cross-beat margins.
  - **Cross-beat spacing**: Statement → Artifact `--space-16`; Artifact → What-we-do `--space-16`. The artifact is a full beat, so it gets full cross-beat turns on both sides (unlike the *intra-exhibit* `--space-8` inside Why-us).
  - **Width / mobile**: the longest line of Candidate A is 44 chars (content Flag 1). At `--fs-meta` mono on a ~44rem cap this does not force horizontal scroll at desktop; at 375px the `CodeBlock` pane is `overflow-x: auto` by the DS (scrollable `<pre>`), but the chosen fragment is narrow enough (≤44 chars) to render without scroll at mobile body width. **Hard requirement on the FINAL fragment (spec §192): longest line stays narrow enough to read at 375px without horizontal scroll, or it wraps legibly.** Candidate A satisfies this; a wider real fragment must be trimmed/wrapped (content + designer pick one that fits).
- **Motion**: scroll-reveal (the standard fade + 8–12px rise, once, `--dur-slow`, `--easing`, the whole `CodeBlock` as ONE unit) via the shipped island. Reveal #2 of four. **Static otherwise — NO typing animation, NO cursor blink, NO scroll-draw, NO line-by-line reveal** (spec §8 / direction §30). It is real code presented, not performed. Collapses to fully static under reduced-motion.
- **Content slot**: `home.json` `artifact` block (`language` + `code` + `caption` + `label`) — the new optional all-or-nothing block (spec §6). **The whole beat renders only if `artifact` is present and complete**; if omitted (no real fragment confirmed), the beat does not ship and the page falls back per the no-fake fallback (§A3-2 Beat 5 carries the mid-page weight; see §A3-6). For preview/evaluation, `artifact` is populated with Candidate A as the labelled placeholder (AA-1).
- **Brand notes**:
  - **Must NOT read as a dev-tool/IDE embed or a code-editor screenshot** (spec §3 new failure mode). Mitigations baked in: `hideCopy` (no widget chrome), monochrome (`CodeBlock` ships no highlighting), `--surface` recessed-inline tier (engraved, not floating-card — no drop shadow, no elevated chrome), narrow centered object (not full-bleed), one small fragment (not a wall). If at review it still reads as a tool embed, the levers are: drop the `language` label (kill the header bar entirely), then reduce to fewer lines.
  - **Monochrome, accent never at rest** (anti-slop floor). Candidate A has no color dependency. If Arian ever swaps to the diff candidate (content D), add/remove render via **weight/opacity/glyph, NEVER red/green color** (content Flag 3) — but Candidate A is the recommended monochrome-safe pick and carries no diff-color problem.
  - **Same hand as the glyph** — hairline + mono + `currentColor`. The two real visual moments (glyph, artifact) rhyme; the page reads as one authored object.
  - **NOT the returned Method beat** (spec §2): no prose pipeline, no five-stage `<ol>`. The artifact depicts *real work*, not the method.

### Beat 4 — What we do — THE DISCIPLINES (`<h2>` #1) — RECAST ASYMMETRIC (automations leads)

Recast from the A2 3-equal `FeatureGrid` to an **asymmetric lead-plus-two** (spec §4.4 / direction §26(i)): one discipline carries more scale/span/position, the other two subordinate. **Lead = `automations`** (AA-5, Arian's override of content's `builds` rec). Still transparent, icon-less, honest one-sentence bodies — *designed, not gridded.* The A2 "Disciplines-weight lever" (mono ordinals + hairline) is **superseded** by this real asymmetric composition — the lever was the in-medium half-measure A3 replaces.

- **DS primitive(s)**: a `<Section title="What we do">` (carries `<h2>` #1) wrapping a site-side asymmetric layout of three `<FeatureCard variant="default" titleAs="h3">` (transparent, no icon), via a recast `HomeDisciplines.tsx`. **Not `FeatureGrid columns={3}`** — a 3-equal grid is the symmetry A3 explicitly drops (direction §26(i): "the 3-equal-cards layout is itself a mild SaaS tell"). The asymmetry is a site-side CSS grid on published tokens (no DS override of `FeatureCard` internals).
  - *Why `Section`+`FeatureCard` over `FeatureGrid`:* `FeatureGrid` hard-codes equal `minmax` columns; an asymmetric lead+two needs a custom grid template, so we drop the grid organism and lay out the three `FeatureCard`s ourselves inside a `Section`. `FeatureCard` stays the card vehicle (transparent default variant, `titleAs="h3"`).
- **Props (substantive)** — asymmetry driven by `disciplines.lead`:
  ```
  <Section as="section" size="default" title="What we do">   {/* <h2> #1 */}
    <div class="home-disciplines home-disciplines--lead-automations">
      {/* LEAD — automations: larger title rung, spans the full width / top row */}
      <div class="home-discipline home-discipline--lead">
        <FeatureCard variant="default" titleAs="h3"
          title="Automations"
          body="We turn the manual, repeated work between your systems into something that runs without a person in the loop." />
      </div>
      {/* SUBORDINATE — builds + advisory: smaller rung, side-by-side beneath the lead */}
      <div class="home-discipline">
        <FeatureCard variant="default" titleAs="h3"
          title="Custom AI builds"
          body="We build the AI system your problem actually needs, wired into the tools and data you already run on." />
      </div>
      <div class="home-discipline">
        <FeatureCard variant="default" titleAs="h3"
          title="Advisory"
          body="We help you decide what to build, what to skip, and where AI is the wrong tool, before you spend on it." />
      </div>
    </div>
  </Section>
  ```
  - **The asymmetric weights (site-side CSS, published tokens only):**
    - **Position/span**: a CSS grid where the **lead (automations) occupies the full top row** and **builds + advisory share the row beneath** (a 1-up over 2-up). At <768px all three stack single-column with the lead still first.
    - **Scale**: the lead's `<h3>` title sized up one editorial rung relative to the subordinates — recommend the lead at `--fs-card-title` register (the DS card-title rung, 24–32px, `--font-serif`) and the two subordinates at a step down (still `<h3>` semantically; the visual size is the site className's job, within `FeatureCard`'s allowance). DOM order remains automations → builds → advisory so the `<h3>` reading order matches the visual hierarchy.
    - **Air**: the lead gets more block padding around it (`--space-8`) than the subordinate pair gap (`--space-6`), so the eye lands on automations first.
  - **No mono-ordinal lever** — the A2 `01 · / 02 · / 03 ·` ordinals are dropped (they were the in-medium soft-middle patch; the asymmetric composition is the real A3 fix, and the mid-page artifact now carries the engage peak the ordinals were compensating for). One fewer decorative element = more restraint.
- **Layout / spacing**: on `--bg`, **no band**. `Section size="default"` block padding `--space-16`. Gap into Why-us: `--space-16`.
- **Motion**: scroll-reveal — fade + 8–12px rise, once, `--dur-slow`, `--easing`, **the whole disciplines block as ONE unit** (no per-card stagger — spec §8 AC). Reveal #3 of four.
- **Content slot**: `home.json` `disciplines` — `heading` + `lead` (= `"automations"`, the new optional marker, spec §6) + `items[3]` (each `name` + one-sentence `description`; `link` optional, absent on all three).
- **Brand notes**:
  - **Anti-slop guardrail (binding):** transparent variant, **no icons**, no three-word headlines, no gradient/bordered cards, no equal-weight filler (spec §4.4). The asymmetry is *composition* (scale/span/position), not decoration. Do not mix `default`/`bordered` (DS rule).
  - **The lead is `automations`** — automations' line ("runs without a person in the loop") is the one the operator should map their problem to first (Arian's call). builds + advisory are real and subordinate.
  - **Fallback if the asymmetry reads as imbalance/SaaS at review**: dial the scale delta down (lead at +0 rung, keep only the span/position asymmetry), then — last resort — `Section` + an editorial stacked `MetaList`. Flag at review, do not pre-build (§A3-7 OQ-A3).
  - **No-fake-artifact fallback hook**: if the artifact beat is dropped (no real fragment), this beat **absorbs the mid-page weight** per spec §4.2(i) — the lead discipline scales up further to carry the engage peak. Composes cleanly because the asymmetry already establishes a focal point (§A3-6).

### Beat 5 — Why us — THE NUMBER-LED EXHIBIT (`<h2>` #2) — RECAST table → exhibit · recessed band #1

Recast from the A2 4-column hairline-per-row table to a **number-led exhibit** (spec §4.5 / direction §25): the **MIT NANDA 95% at true display scale** as the section's eye-first hero ABOVE the cut, then the **2-axis honest cut** (four label+line pairs, fewer words/bigger type) with **sparse structural dividers + negative space** instead of a hairline on every row. **Recessed band #1 of 2.** No featured-pouk.ai-column tilt (there is no column — guard it).

- **The display number — the section's eye-first hero (the page's one big number):**
  - **Scale = the DS `--fs-stat-large` ramp (56–96px)** or `--fs-stat` (44–72px) — the genuine display-number tier (`llms-full.txt` l.110–111). The spec says "true display scale, the biggest single number on the page" → recommend **`--fs-stat-large`** (one per section at most, which this is). This is bigger than A2's `--fs-h2` treatment — A3 makes "loud" literal.
  - **Vehicle**: the DS `<Stat>` atom is the on-contract way to render a cited numeral ("Requires a caption … `source` should be citation only", `llms-full.txt §Stat`). Compose the number as `<Stat value="95%" caption=… size="lg">` with the source line carrying the mono citation — OR keep the shipped site-side `<figure>` (value + label + `<figcaption>`) sized up to `--fs-stat-large`. **Recommend `<Stat size="lg">`** since it is the DS's purpose-built cited-numeral atom and renders the source in the mono register natively; the engineer chooses, the requirement is display-scale + visible mono citation. The number is a figure, **NOT an `<h2>`/`<h3>`** (hierarchy AC).
  - **The deficit bar (B.1 mark) becomes secondary, not the hero.** In A2 the bar was the visual; in A3 the **number** is the visual and the bar is optional supporting texture. Recommend **keep one thin `currentColor` filled-vs-empty bar** beneath/beside the number as quiet reinforcement (the shipped `.home-deficit__bar`), OR drop it entirely so the number stands alone at display scale (cleaner; the number is now loud enough to not need the bar). **Default: number at `--fs-stat-large` + the thin bar retained small; drop the bar if it competes with the number at review** (§A3-7 OQ-A4). No count-up — renders final on first paint.
  - **The visible mono citation** (`MIT NANDA, The GenAI Divide, 2025`) renders in `--font-mono`/`--fs-micro`/`--fg-muted` directly beneath the number — never a tooltip/footnote (spec §4.5 binding). The credibility IS the visible caption.
  - **Conditional render**: the whole number block renders only if `comparison.metric` is present + complete; omitted → the exhibit is the 2-axis cut alone (spec §4.5, no third state).
- **The 2-axis honest cut — four label+line pairs, NOT a 4-column grid (content Deliverable 3, ship as drafted):**
  - **Structure**: a vertical stack of **four rows**, each = an alternative label (`Build it yourself` / `Hire an agency` / `Hire in-house` / `pouk.ai`) + its one honest line ("the right call when…"). pouk.ai is **last and self-conceding** (content Deliverable 3). Above the four rows sits the one-line stance lead-in (`Four honest options. pouk.ai is only one of them.`). Below: the inline `/why-ai` link (`See when to hire us, and when not to →`).
  - **Vehicle**: a site-side semantic structure — recommend a `<dl>` (label = `<dt>`, line = `<dd>`) per pair, or four `<div>` rows. **NOT a `<table>`** (the A2 table is what A3 drops) and **NOT the DS `ComparisonTable`** (pricing-matrix shape, wrong register — stays rejected). The recast `HomeComparison.tsx` swaps its `<table>` for this four-pair stack.
  - **Sparse dividers + negative space, NOT a hairline per row**: at most one or two `--hairline` structural rules (e.g. a single rule under the lead-in, and/or above the pouk.ai row to mark "and here's us"), with rhythm carried by **`--space-6`/`--space-8` between pairs** rather than a border on each. This is the spec's "rhythm from whitespace, not a doc table" (§4.5). The per-row hairline that made A2 read as a spec-sheet is **removed**.
  - **Fewer words, bigger type**: the four lines render at `--fs-body` (not shrunk to table-cell density); the alternative labels at a slightly larger/heavier rung (`--fs-meta` bold or `--fs-body` semibold) so each pair reads as a stance, not a cell. The cut reads top-to-bottom as one argument.
  - **No featured-pouk.ai-column tilt — guard it** (spec §4.5 honesty guardrail): there is no column to feature, but the *pouk.ai row* must not get heavier visual weight than the other three (no accent, no bold-only-on-us, no box). It is last and equal-weight; its self-conceding line ("more than you need for work you could ship yourself") is the candor. pouk.ai wins no row outright.
- **DS primitive(s)**:
  - The recessed band: a **site-side full-bleed wrapper** `.home-whyus-band` applying `--surface-section` (shipped; `Section` has no `surface` prop, A2). Inside it:
  - `<Section as="section" size="default" title="Why pouk.ai">` (`<h2>` #2) wrapping, in order: the display-number block (`<Stat size="lg">` or the sized-up `<figure>`, conditional), the stance lead-in (`<Text>`), the four-pair 2-axis cut, the inline `/why-ai` `<a>`.
- **Layout / spacing**:
  - **The band**: full-bleed `--surface-section`; content inset to `--content-max`. `Section size="default"` supplies `--space-16` block padding (the air the band needs to read as a framed event).
  - **Intra-exhibit rhythm**: `<h2>` → number `--space-12` (DS Section header gap); number (citation) → lead-in `--space-8`; lead-in → first pair `--space-6`; between pairs `--space-6`; cut → link `--space-6`. The number→cut binding interval (`--space-8`) is deliberately **tighter** than the `--space-16` cross-beat turns so the number + cut read as ONE exhibit.
  - **375px**: the number scales via its `clamp()`; the four pairs **stack cleanly with no wide grid to break** — this resolves the A2 mobile-degradation `<NEEDS:>` flag outright (content Flag 5: there is no longer a 4-column table to reflow). No horizontal scroll.
- **Motion**: scroll-reveal — fade + 8–12px rise, once, `--dur-slow`, `--easing`, **the whole exhibit (number + cut) as ONE unit** (reveal #4 of four). No per-row reveal, no count-up of `95%` (final on first paint). If the thin bar is retained, NO scroll-driven fill (static; an optional CSS-only render-time fill is permitted but **default static**, B.1 — §A3-7 OQ-A4). Collapses under reduced-motion to the fully static exhibit.
- **Content slot**: `home.json` `comparison` — `heading` + optional `metric` (value/label/source/year) + the 2-axis rows + `link`. (Schema shape note for the engineer: the 2-axis cut is four label+line pairs, not a 4×3 `columns`/`rows` matrix — the `comparison` block's row form changes from the A2 table to the four-pair stance; the `metric` sub-block is unchanged in shape, only rendered at display scale. Exact mapping is the engineer's lane against spec §6; the honesty audit + citation audit are Arian-verified.)
- **Brand notes**:
  - **The number is the hero, the cut is the stance** (spec §4.5). Display-scale number + visible mono citation + four honest pairs + pouk.ai last and self-conceding.
  - **Honesty is load-bearing** — pouk.ai does not win every axis; no featured tilt (guarded above).
  - **Second `/why-ai` route** (first is the Hero D-11 hand-off); distinct anchor text; a *compression* of `/why-ai`'s vs-alternatives, not a reproduction.

### Beat 6 — Convert — THE DESIGNED CLOSE (`<h2>` #3) — RECAST · recessed band #2

Recast from a plain CTA band to an **authored typographic close** (spec §4.6 / direction §27): the closing line is the page's **last serif beat at display-adjacent scale**, the Statement's louder sibling, deliberately composed — not a heading + two buttons on a tint. **Close = "The demo was never the hard part."** (AA-6). Dual-CTA beneath unchanged. **Recessed band #2 of 2.**

- **DS primitive(s)**: `<CTASection surface="recessed">` (the DS end-of-page conversion band; `surface="recessed"` applies `--surface-section` + a `--hairline` top rule in one move — confirmed). Via a recast `HomeClosingCta.tsx`. (`ContactBlock` stays rejected — it has a `StatusBadge` slot that would force a second availability badge, locked to the Hero.)
- **The designed close — the A3 craft delta:**
  - **Scale**: the heading renders at **display-adjacent serif** — the Statement's louder sibling. The Statement is `--fs-statement` (28–44px); the close should read as its *louder* sibling, so recommend **`--fs-tagline-intimate` (32–52px), `--font-serif`, italic** — one rung above the Statement, below the Hero `--fs-tagline`. This is a site-side className on the `CTASection` heading (published token; the DS does not ship a serif-display heading on `CTASection` by default, so the scale/serif treatment is a site CSS application of an existing token, not a new token). It remains the `<h2>` element styled large — **not** a second heading (content Flag 6).
  - **Register**: "The demo was never the hard part." is a *diagnosis/conviction*, not a CTA verb — it leans on the artifact ("keep it running after the demo") and the MIT NANDA cause, and lands as the page's final belief. Serif italic at display-adjacent scale, centered (`align="center"`, the end-of-page default), with the dual CTA beneath as the quiet ask.
- **Props (substantive)**:
  ```
  <CTASection
    surface="recessed"           {/* --surface-section band #2 + --hairline top rule */}
    size="default"               {/* --space-16 block padding */}
    align="center"               {/* end-of-page default */}
    headingAs="h2"               {/* the page's THIRD and final <h2> */}
    heading="The demo was never the hard part."   {/* AA-6; rendered display-adjacent serif italic via .home-convert-close className */}
    body={<>Taking on a few engagements this quarter.</>}   {/* availability sub-line, kept (AA-6); quiet, no new urgency */}
    actions={/* mailto primary + booking secondary, both <Button asChild size="md"> */}
  />
  ```
  - The display-adjacent serif treatment is applied via a site className on the heading (e.g. `.home-convert-close`) using `--fs-tagline-intimate`/`--font-serif`/italic — the same site-clamp precedent the codebase already uses for one-shot editorial scale (`.about-poukai__heading`, `.principles-bookend`). No DS override, no new token.
- **Layout / spacing**: the **second** `--surface-section` band. `CTASection` owns its frame + `--space-16` block padding — **do not wrap in a `Section`** (DS anti-pattern). See §A3-3 merge-guard for the Why-us→Convert adjacency. Full-bleed band; content constrained to `--content-max`. Below into `.site-page` bottom-pad → footer.
- **Motion**: **scroll-reveal NONE** (it is the terminus the reader scrolls *to*). Static on arrival. `Button` hover/focus uses DS `--dur-fast`/`--easing`. No `StatusBadge`. Collapses trivially under reduced-motion.
- **Content slot**: `home.json` `closingCta` — `heading` (= the close) + optional `body` (= the availability sub-line) + CTA labels/hrefs per `contact-flow.md`.
- **Brand notes**: second dual-CTA appearance (Hero + close), mailto primary / booking secondary, no third register, no urgency/scarcity (FS-CF-1). The band stays; the *moment* gets crafted. `mailto:` is the primary affordance; booking must not out-weigh it. No `Stat`, `Quote`, scarcity badge, or scheduling embed.

---

## A3-3. Cross-section rhythm

Top to bottom — six beats inside the `SiteShell` chrome, built from the published `--space-N` scale only (no `--space-5/7/9/11`; they don't exist), with **two** `--surface-section` bands and **one** `--surface` inset object.

1. `<SiteShell>` header — DS chrome.
2. `.site-page` — `padding-block: --space-12`, wrapping all six beats.
3. **Hero** (display, glyph leaned in) → **`--space-16`** → **Statement** (`--bg`, `hairline={false}`) → **`--space-16`** → **[INSET OBJECT on `--surface`] Artifact** (`CodeBlock`, capped ~44rem, centered, NOT full-bleed, no `<h2>`) → **`--space-16`** → **What we do** (asymmetric, automations leads, `--bg`, `<h2>` #1) → **`--space-16`** → **[BAND #1 on `--surface-section`] Why us** (number-led exhibit, `<h2>` #2) → **`--space-16` return-to-`--bg` + band boundary** → **[BAND #2 on `--surface-section`] Convert** (designed close, `<h2>` #3).
4. `.site-page` bottom-pad (`--space-12`) → footer.

**The `--space-16` interval discipline (the strike).** Every cross-beat turn is `--space-16` (64px). Exceptions are *intra-exhibit* only: inside Why-us the number→cut binding is `--space-8`. No raw px; `--space-16`/`--space-12` cross-beat, `--space-6`/`--space-8` intra-section.

**The escalation logic (6-beat).** Loud (display Hero + leaned-in glyph) → quiet turn (Statement) → **the eye meets a real object (Artifact — the mid-page engage peak)** → composed substance (asymmetric disciplines, `--bg`) → **first band: the number-led Why-us exhibit** → **second band: the designed close.** The variety is now **distributed**, not front/back-loaded (direction §29) — the soft middle is gone because a real object lives in it.

### Surface rhythm — three elevation tiers, two bands, one inset object (the band-count answer)

- **Three distinct tiers, by the DS elevation rhythm:** `--bg` (Hero, Statement, What-we-do — the page canvas) · `--surface` (the Artifact inset object — recessed *inline*, one tier below `--bg`) · `--surface-section` (Why-us band #1, Convert band #2 — the *only* tier permitted as a section divider). **The artifact on `--surface` is categorically not a band** — the DS forbids `--surface` as a section divider (`llms-full.txt` l.18/44) and reserves `--surface-section` for bands. This is the clean resolution of spec §4.2's inset-object-vs-third-band question: the token system itself distinguishes them. **No escalation to Arian needed** — the artifact frames legibly as an object on `--surface` without any third full band. (The escalation clause in spec §4.2/§190 only fires if the only legible framing were a full band; it is not — see §A3-6.)
- **Exactly TWO `--surface-section` bands** (spec §4.1 AC; A2 §16): Why us (#1, site-side wrapper) + Convert (#2, `CTASection surface="recessed"`). **No third band, ever.** Hero/Statement/What-we-do on `--bg`; Artifact on `--surface`.
- **The two bands are adjacent (Why us → Convert) and must read as two distinct surface events, not one slab.** Primary treatment (carried from A2, shipped): (1) full `--space-16` return-to-`--bg` between them (the `.home-convert-gap` div, shipped — the band wrapper closes, `--bg` shows for a 64px turn, then `CTASection` opens its band); (2) the Convert band's own `--hairline` top rule; (3) distinct registers (Why-us = number-led exhibit, left-register; Convert = centered designed close).
- **Merge-guard / Why-us-only fallback (binding, spec §4.6 / A2 §16):** if at visual review (13–14" + 375px) the two recessed bands still read as one slab, the fallback is **Why us KEEPS the band; Convert DROPS to `--bg`** (total then exactly one band, at Why us; the designed-close composition survives whichever surface — its serif scale + `--hairline` top rule carry the close on `--bg` too). Never the reverse. **Specify two bands as primary; record which shipped at review.**

### Heading hierarchy (R-026 — no skipped levels)

- **`<h1>`** — the `<Hero>` title (only `<h1>`).
- *(no heading)* — the `<Statement>` emits none.
- *(no heading)* — **the Artifact beat emits NO `<h2>`** (spec §4.1; content Flag 4). Its `caption` is the DS `<figcaption>` (mono, non-heading); its `label` is the figure's accessible name. Neither is a document heading.
- **`<h2>` #1** — What we do (`Section` title). The three discipline titles are `<h3>` (`FeatureCard titleAs="h3"`) beneath it.
- **`<h2>` #2** — Why us (`Section` title). The display number is a `<Stat>`/`<figure>` figure, **not** a heading. The 2-axis labels are `<dt>`/text, **not** headings.
- **`<h2>` #3** — Convert (`CTASection headingAs="h2"`, styled display-adjacent serif — the heading styled large, NOT a second heading).

**Exactly one `<h1>` + three `<h2>`s** (What we do, Why us, Convert), `<h3>`s only beneath `<h2>` #1, no skips. **Identical count to A2 — the artifact adds a beat but no heading.** Verifier: heading-order audit (1×h1 + 3×h2).

### Mobile collapse (<`--bp-md` 768px; hard-checked at 375px)

- **Hero** — DS collapse; glyph hidden <1024px (decorative, per `.home-hero-split__aside`). The lean-in only affects ≥1024px column sizing; mobile is unchanged.
- **Statement** — single line at all widths.
- **Artifact** — the `CodeBlock` `<pre>` is the load-bearing mobile case: it is `overflow-x: auto` (DS), but Candidate A's longest line (44 chars) at `--fs-meta` mono renders **without horizontal scroll** at 375px. The inset wrapper's `~44rem` cap is `width: 100%` below that, with `--bg` padding either side. **Hard on the final fragment: narrow enough to read at 375px or it wraps legibly** (spec §192).
- **What we do** — the asymmetric grid **stacks single-column** at <768px (lead automations first, then builds, then advisory), DOM order preserved.
- **Why us** — the display number scales via `clamp()`; the **four 2-axis pairs stack cleanly** (no wide grid to break — resolves the A2 `<NEEDS:>`). No horizontal scroll.
- **Convert** — `align="center"`; dual-CTA stacks (DS), `mailto:` first; band full-bleed.

No section introduces a media query beyond the asymmetric-grid stack and the (unchanged) band full-bleeds. Verifier: 375px + 13–14" captures show single-column, **no horizontal scroll on any beat**, the artifact legible as a centered object (not a band), both bands full-bleed (or Why-us-only if the fallback shipped), the display number dominant, CTAs stacked with `mailto:` first.

---

## A3-4. Motion choreography (page-level)

D-25 permits client JS / hydration / scroll motion. The page carries one quiet scroll-reveal grammar (now **four** below-hero beats, up from three) + the carried Hero motion. Every animation gates on `prefers-reduced-motion: reduce` via the DS `:root !important` block AND the site reveal gate (HARD, D-25); **no exception.** **The "raise the floor" micro-interaction layer (§A3-4.1, added 2026-06-21) adds exactly two new motions on top of this baseline — the deficit-bar scroll-draw (T1) and the link-arrow nudge (T3) — plus a DS-native press confirm (T2) and the already-shipped Disciplines stagger (T4). Read §A3-4.1 for the full per-touch spec; the baseline below is unchanged.**

**Fires on initial render:**
- **Hero `entrance="stagger"`** — status/title/lede/cta top-down, CSS keyframes (DS). The one entrance event. (The lean-in adds NO motion — scale/craft only.)
- **"The Signal" glyph CSS signal-pulse** — the one ambient heartbeat. No CSS on top of the `StatusBadge` pulse (DS rule).

**Fires on scroll (the one grammar):**
- **A single consistent quiet reveal on exactly FOUR beats — Statement, Artifact, What we do, Why us.** Each reveals **once**, fade + 8–12px rise, `--dur-slow` (600ms), `--easing`, via the shipped `[data-reveal]` IO grammar. Three of the four reveal as **one unit**: the **Statement**, the **Artifact** (the whole `CodeBlock` — never line-by-line, never typing), and the **Why-us exhibit** (number + cut together). **The What-we-do (Disciplines) beat is the ONE exception**: it reveals with a per-card stagger (`[data-reveal-stagger]`, 60ms step, ≤120ms total — Arian's 2026-06-21 override; §A3-4.1 T4) so the lead discipline arrives before the subordinates, reinforcing the asymmetry. **Convert does NOT reveal** (terminus). **The Why-us deficit bar draws its 0→95% fill on the same scroll-into-view event** (§A3-4.1 T1 — the page's one storytelling motion). No parallax, count-ups (incl. the `95%`), horizontal-scroll, hover-move beyond DS-native affordances + the T3 arrow nudge, glyph draw-on.

**Mechanism.** Unchanged from shipped: `ScrollReveal` toggles `data-revealed`; the fade+rise is CSS reading `--dur-slow`/`--easing`; pre-reveal is a no-op under reduced-motion (content visible, not hidden-awaiting-JS).

**`prefers-reduced-motion: reduce` (HARD).** Every motion collapses to the **fully static, fully legible page**: Hero stagger off, glyph pulse off, the four reveals present-on-load, the display number at final value, the artifact fully rendered and static, both bands present, nothing animating. **No exception.**

**Fires never (locked out):** parallax, scroll-jacking, scroll-spy, marquee, count-ups (incl. the `95%`), any reveal on the Hero beyond its stagger, **any artifact motion (typing, cursor blink, scroll-draw, line-reveal)**, draw-on/flap/drift of the glyph, horizontal-scroll sections, hover-move beyond DS-native affordances. (Note: per-child stagger is permitted on exactly ONE beat — the Disciplines, Arian's 2026-06-21 override — and nowhere else. See §A3-4.1.)

---

## A3-4.1. The "raise the floor" micro-interaction + motion layer (REVISION — 2026-06-21)

> **Why this section exists.** Arian found the approved page "a little too flat" — the editorial restraint reads as *correct* but not yet *crafted*. This layer adds the smallest set of **motivated** touches that removes the flatness without tipping the page into "generic animated SaaS landing." Dial target: **MOTION ~6** (from ~5), variance/density unchanged. Every touch below is (a) motivated by hierarchy / storytelling / feedback / state, (b) reduced-motion-safe (collapses to the static end-state), (c) restraint-guarded (a one-line reason it stays editorial). The audit floor is respected: the site-wide `[data-reveal]` grammar, the Hero `entrance="stagger"`, the glyph signal-pulse, and the `StatusBadge` pulse all **already ship** — this layer does **not** duplicate them. It builds on them.
>
> **The governing principle for this layer: motion as the page's draughtsman finishing a drawing — confident, quiet, once.** Nothing loops (except the one ambient glyph heartbeat that already ships). Nothing bounces. Nothing fades in twice. The accent (`#0071e3`) never appears at rest — only on link-hover underline and focus, exactly as today.

### The set, ranked by leverage (highest "removes flat" / lowest risk first)

**T1 — Deficit-bar scroll-draw (Why-us, Beat 5) — the one storytelling motion. [HIGHEST LEVERAGE]**
- **What it is**: the thin `currentColor` deficit bar (`.home-deficit__bar`, currently static at 95% fill) draws its inked segment open from 0 → 95% width as the Why-us exhibit enters view. The empty-track outline is present from the start; only the *inked* segment grows. The `95%` numeral does **not** count up — it is final on first paint (locked out, anti-slop). One draw, once, then static forever.
- **Communicates**: *the gap opens exactly as the reader arrives at it* — the page's one quantitative claim ("95% of GenAI pilots fail to ship") made felt instead of merely stated. This is the B.1 brief's single genuinely-motivated JS motion, now unblocked (D-25).
- **Trigger**: scroll-into-view. Reuse the existing `[data-reveal]` IntersectionObserver — the bar fill keys off the **same `.is-visible` class** the Why-us band wrapper already receives (`.home-whyus-band[data-reveal].is-visible .home-deficit__bar`). No second observer, no new island.
- **Tokens**: the inked-segment width transition runs at **`--dur-slow` (600ms)** + **`--easing`** (expo-out — the same entrance hand as the reveal). The bar fill should begin *after* the band's own fade+rise settles — add a `transition-delay` of roughly `--dur-mid` (240ms) so the band arrives, then the gap draws. (Engineer tunes the delay; the intent is "band lands, then the bar inks open," not simultaneous.)
- **Reduced-motion fallback**: the bar renders at full 95% fill immediately (no draw). Already guaranteed twice — the `[data-reveal]` reduced-motion block forces the wrapper visible, and the bar's own width must default to its final value with the transition only applying under `.reveal-on`. **The inked segment's resting CSS must be the final width** (so no-JS / reduced-motion shows the complete bar); the draw is a `.reveal-on … :not(.is-visible)` start-state of `width/transform: 0` → final on `.is-visible`. Mirror the exact safety contract of `[data-reveal]` (no blank/zero state without `.reveal-on`).
- **Restraint guardrail**: monochrome, hairline, one idea (the gap), one draw, tied to the page's core claim — editorial, not dashboard. It animates the *argument*, not a numeral. This is the one place the page earns a storytelling motion; spending it here is what keeps the rest of the page quiet.
- **OQ-A4 interaction**: this only ships if the bar is retained (OQ-A4 default = keep the bar). If Arian drops the bar at review (number-alone), T1 is dropped with it — the number does not count up.

**T2 — CTA tactile press + confirm the DS press reaches the link buttons (Hero + Convert). [HIGH LEVERAGE, ~zero cost]**
- **What it is**: the four CTA buttons (Hero mailto + booking, Convert mailto + booking) get a tactile `:active` press — `transform: translateY(1px)` at `--dur-press` (80ms). **This is DS-native** (`Button` `:active` ships `translateY(1px)` at `--dur-press` per the button ladder / LinkCard parity). The "touch" here is mostly a **verification task**: confirm the press actually renders on `<Button asChild><a></a></Button>` (the `asChild` Slot must forward `:active` to the rendered `<a>` — if the press is being swallowed because the styled element is the anchor, that is the flat-feeling gap). If DS-native press already reaches the anchors, T2 is "verify only, ship nothing."
- **Communicates**: *the button acknowledges the click* — basic tactile feedback. A CTA that doesn't depress feels dead; this is the cheapest credibility win.
- **Trigger**: `:active` (press).
- **Tokens**: `--dur-press` (80ms), no custom easing (DS-native). Do not add hover lift, shadow, or color fill — hover stays the DS default (no transform; the buttons are already solid primary/secondary).
- **Reduced-motion fallback**: `:active` transforms are gated by the DS `:root !important` reduced-motion block — collapses to no transform. No exception.
- **Restraint guardrail**: 1px, 80ms, press-only. No hover animation on the buttons at all (a CTA that springs on hover reads SaaS). The press is felt under the finger, not seen across the page.

**T3 — Link-arrow nudge on the inline editorial links (Hero lede hand-off, Why-us "see when to hire us →"). [MEDIUM LEVERAGE, low cost]**
- **What it is**: the trailing `→` glyph in the two inline editorial links nudges right by ~2–3px on hover/focus. The link text and its DS two-layer underline are untouched (the hairline→accent underline grow already ships and stays). **Only the arrow glyph translates**, via a site-side `<span aria-hidden="true">→</span>` wrapper inside the anchor that gets `transform: translateX(2px)` on `a:hover/:focus-visible`.
- **Communicates**: *forward motion — "this leads somewhere"* — the arrow leans toward its destination, an affordance that says the link is a hand-off, not a footnote.
- **Trigger**: hover + focus-visible (keyboard parity is required — same nudge on `:focus-visible`).
- **Tokens**: `transform` transition at **`--dur-fast` (180ms)** + **`--easing-link`** (matches the underline-grow hand so the arrow and underline move as one gesture).
- **Reduced-motion fallback**: collapses to no transform (arrow static; underline still grows — the underline grow is the DS's own reduced-motion-safe affordance). Gate the arrow transform under `prefers-reduced-motion: no-preference`.
- **Restraint guardrail**: 2–3px, one axis, mirrors the underline's existing motion language. The arrow already exists in the copy; we are animating the punctuation, not adding chrome. Apply to the **two inline editorial links only** — NOT to the CTA buttons (their arrows are inside solid buttons; nudging them would fight the press) and NOT to the booking links (kept quiet/subordinate).
- **Scope note**: the Hero lede `Here's why →` and the Why-us `See when to hire us, and when not to →` are the two links that earn this. The Convert booking `Or grab a time →` is a CTA-adjacent secondary and stays without nudge.

**T4 — Disciplines per-card stagger (Beat 4) — CONFIRM the already-approved override. [LOW NEW WORK]**
- **What it is**: the three discipline cards reveal in sequence (lead, then the two subordinates) rather than as one block — `[data-reveal-stagger]`, 60ms step. **This already ships** (index.astro passes `stagger`; Arian overrode the whole-unit default 2026-06-21). It is the page's one permitted per-child stagger.
- **Communicates**: *hierarchy — the lead discipline (automations) arrives first, the subordinates follow* — the stagger reinforces the asymmetric lead+two composition. The sequence IS the hierarchy.
- **Trigger**: scroll-into-view (existing `[data-reveal-stagger]` path).
- **Tokens**: 60ms step (`calc(var(--reveal-i) * 60ms)` delay), each child fades+rises on the `[data-reveal]` 0.5s/`--easing` transition. Max 3 children = ≤120ms total stagger — well inside restraint.
- **Reduced-motion fallback**: all cards present-on-load, no stagger (the `[data-reveal]` reduced-motion block + `transition-delay: 0`). Already guaranteed.
- **Restraint guardrail**: capped at the lead + two, ≤120ms total, once. This is the ONLY beat with per-child stagger; every other reveal stays whole-unit. Keeping it singular is what stops the page reading as "everything animates in sequence." No change needed — this entry exists to record it as the deliberate, bounded exception.

**T5 — Disciplines row hover affordance (Beat 4) — EVALUATED, RECOMMEND LEAVE STATIC (reject). [low value, real risk]**
- **What it is (the candidate)**: a hover affordance on the three discipline rows — a left hairline-accent slide, a faint `--surface` tint, or a 1px lift.
- **Recommendation: REJECT — leave the rows static.** Reasoning: the discipline rows are **non-interactive** (no `link` on any item today — `FeatureCard` with no footer/href, "no states, no hover, no interactivity" is the DS contract). A hover affordance on a non-clickable element is **un-motivated** — it signals "clickable" where nothing is clickable, which is worse than flat: it is a false affordance (and a mild a11y/expectation miss). The DS explicitly ships `FeatureCard` stateless for this reason; the interactive sibling is `LinkCard`. If/when a discipline gains a real sub-page link, revisit with a `LinkCard` (which ships its own DS hover: border-color→accent, `:active` press) — but that is a content/IA change, not a motion touch. Until then, the stagger (T4) gives the disciplines their life; hover would be decoration. **This is the "less is more" call: the row that doesn't go anywhere shouldn't light up.**

**T6 — Statement (Beat 2) — CONFIRM LEAVE STATIC (beyond its existing reveal). [no work]**
- **Recommendation: LEAVE STATIC.** The Statement is the page's one raised-voice conviction beat; stillness IS its register. It already gets the quiet `[data-reveal]` fade+rise (reveal #1) as its single entrance — that is exactly enough. Any additional motion (emphasis pulse, word-by-word reveal, hover) would undercut the conviction. The lightest-possible touch is the one it already has. No change.

**T7 — Code artifact (Beat 3) — CONFIRM LEAVE STATIC (beyond its existing reveal). [no work]**
- **Recommendation: LEAVE STATIC.** The artifact's entire thesis is "this is real engineering work, presented — not performed." It already reveals as one unit via `[data-reveal]` (reveal #2). The spec hard-locks out typing, cursor blink, scroll-draw, and line-by-line reveal (§8 / §A3-4 "fires never"). A one-time reveal of the "keep it running" lines was considered and **rejected**: line-by-line reveal performs the code (the exact failure mode — IDE/dev-tool theatre) and contradicts the engraved-object intent. The whole-unit fade+rise it has is the correct and only motion. No change.

**T8 — Why-us band entrance depth touch — EVALUATED, RECOMMEND LEAVE AS-IS (reject the extra). [low value]**
- **What it is (the candidate)**: a subtle depth cue on the recessed `--surface-section` band as it enters — e.g. the band surface fading in slightly behind the content, or a brief shadow/inset.
- **Recommendation: REJECT the extra depth motion.** The band already arrives via the `[data-reveal]` fade+rise (reveal #4), and T1 (the deficit-bar draw) is the band's authored motion moment. Adding a surface-depth animation on top would be two motions competing in one beat and risks a shadow/elevation read the recessed-inline contract forbids (recessed = engraved, no drop shadow). The band's recess is a static surface fact (`--surface-section`); it should not animate its own elevation. The reveal + the bar-draw are sufficient. No change.

### Net change this layer ships

Only **two** genuinely new motions reach the engineer: **T1** (deficit-bar scroll-draw) and **T3** (link-arrow nudge). **T2** is a verify-and-confirm of DS-native press (likely zero code). **T4** is already shipped (recorded as the bounded exception). **T5–T8** are explicit "leave static" decisions. That is the smallest set that lifts MOTION to ~6: one storytelling motion, one affordance nudge, one tactile confirm — and disciplined stillness everywhere else. The page still reads as a senior engineer's commit message; it now also reads as *finished*.

### Real-browser (Playwright) verification required

The Astro/DS preview tool renders static HTML and **cannot execute IntersectionObserver, scroll, or `:active`/`:hover` states** — so the following MUST be verified in a real browser (Playwright), not the preview:
- **T1** — the deficit bar must (i) draw 0→95% on scroll-into-view, (ii) render full at 95% immediately under `prefers-reduced-motion: reduce` and with JS disabled, (iii) not re-draw on scroll-back. **IO-dependent — preview cannot show this.**
- **T2** — the `:active` press must actually depress the rendered `<a>` inside each `Button asChild` (all four CTAs), and must flatten under reduced-motion. **State-dependent — preview cannot show this.**
- **T3** — the arrow nudge must fire on both `:hover` AND `:focus-visible` (keyboard), on the two inline editorial links only, and must not move under reduced-motion. **State-dependent — preview cannot show this.**
- **T4** — confirm the three cards stagger (≤120ms total) on scroll-into-view and arrive together under reduced-motion. **IO-dependent.**
- **Axe / heading-order** unaffected (no DOM/heading change); a quick axe pass after T1/T3 land confirms the arrow `<span aria-hidden>` and the bar `aria-hidden` add no violations.

### Implementation-detail flags for the engineer (not new motion — accuracy notes)

- The shared reveal transition in `site.css` is currently a **literal `0.5s cubic-bezier(0.16, 1, 0.3, 1)`**, i.e. the values of `--dur-slow`-adjacent (it is 500ms, not the 600ms `--dur-slow` token) and `--easing` inlined rather than referenced. T1 should reference the **tokens by name** (`--dur-slow`, `--easing`) for the bar draw so the new motion is on-contract even though the existing reveal predates that discipline. (Flagging the literal so the engineer doesn't copy 0.5s; use `--dur-slow`.)
- T1's bar-draw keys off the **existing** `.home-whyus-band[data-reveal].is-visible` class — no new JS, no second observer, no new island. It is a CSS descendant rule on the class the IO already toggles.
- T3's arrow wrapper is a site-side `<span aria-hidden="true">→</span>` inside the existing anchors in `HomeHero.tsx` (lede) and `HomeComparison.tsx` (why-ai link); the visible link text is unchanged, the `→` simply moves into a span so it can transform independently of the text + underline.

---

## A3-4.2. THE SIGNATURE — "The Signal" self-constructs on first paint (REVISION — 2026-06-22, raises the ceiling to ~7.5)

> **Why this section exists.** The creative director raised the home motion/presence ceiling from ~6 to ~7.5 (`meta/direction/home-motion-ceiling.md`). The diagnosis: §A3-4.1 fixed *liveness*, not *presence* — the budget is spread thin and even, with no peak. The fix is **one signature moment plus a disciplined supporting set**: the Hero "The Signal" glyph **self-constructs on first paint** — a draughtsman draw of the whole pipeline, composed with the existing Hero text stagger as *one arrival* (~1.2–1.6s, **once**), then the existing ambient `wb-signal`/`wb-pulse` loops take over and the glyph holds forever at the **byte-identical resting end-state it ships today.**
>
> **This subsection GOVERNS over §A3-4 / §A3-4.1 where they disagree on the Hero glyph's entrance.** §A3-4 says "the lean-in adds NO motion"; §A3-4.2 supersedes that for the glyph's *construction* (the lean-in's scale/craft is unchanged; the entrance is now a draw). Everything else in §A3-4 / §A3-4.1 stands: T1 deficit draw, T2 press, T3 arrow nudge, T4 disciplines stagger, T5–T8 stillness. The supporting-set deltas this raise introduces (S2 band-entrance upgrade, S4 artifact hover) are specified in §A3-4.3 below.
>
> **The contract, one sentence:** a visitor lands and *watches the instrument build itself* — one confident line and five points, drawn, not animated — and that single moment is what they remember; everything else on the page is quiet **on purpose** so the signature carries the weight.
>
> **The single sharpest test (the director's bar):** a senior engineer watching it must think *"someone drew that, exactly,"* never *"nice animation."* If it ever reads as decoration, pull it back toward fewer, slower, more deliberate strokes. No glow, no sparkle, no shimmer, no gradient-sweep, no accent-trail, no flourish — the construction draws in `currentColor` ink, not light.

### 1. The real elements being animated (read against `HomeHeroIllustration.tsx`)

The construction sequences the glyph's **actual** SVG layers, in their existing paint order, with their existing token bindings (`src/styles/site.css §"The Signal"`). Nothing about the resting markup, geometry, viewBox (`40 176 720 250`), or token bindings changes — the draw animates the *assembly* of an object that already ships:

| Layer | Real elements (`HomeHeroIllustration.tsx`) | Resting paint (`site.css`) | Construction role |
|---|---|---|---|
| **Grid** | `<g class="grid">` — 7 vertical + 4 horizontal hairlines, `strokeDasharray="1 6"`, `strokeWidth 0.6` | `stroke: --hairline` | The drawing surface resolves first (fade). |
| **Axis** | central `<line class="axis">`, `strokeDasharray="1 4"` | `stroke: --hairline` | Resolves with the grid (same fade group). |
| **Trace** | `<path class="trace">` through all 5 nodes (`TRACE_PATH`, one smooth C-curve), `strokeWidth 1.6` | `stroke: --fg-muted`, `fill: none` | **The one confident line** — draws stroke-on OBSERVE→SHIP. |
| **Nodes** | 5 × `<g>`: `node-ring` (r 5.6, fill `--bg`, stroke currentColor) + `node-dot` (r 2.6, fill currentColor); SHIP adds `node-ring--accent` (stroke `--accent`) + `node-dot--accent` (fill `--accent`) | per-node | **The five points** — set down in sequence as the trace reaches each. |
| **Leaders** | 5 × `<line class="leader">`, `strokeDasharray="2 3"`, opacity 0.55 | `stroke: --fg-muted` | Register with each node's label (fade, paired to node). |
| **Labels** | 5 × `<g>`: mono `num` (`01`–`05`) + mono `label` (`OBSERVE`…`SHIP`); SHIP fill `--accent` | `--font-mono` | Register beside each node just after it lands (fade). |
| **Caption** | `pipeline · 5 stages`, mono, `--fg-muted` | static | Resolves last, with/just after the SHIP label. |
| **Ambient (already shipping)** | `signal-pulse` (`wb-signal` 4.2s linear, dash `6 200`) + `pulse-halo` (`wb-pulse` 2.8s) | both inside `@media (prefers-reduced-motion: no-preference)` | The resting heartbeat — **suppressed during the build, released after.** |

### 2. The draw mechanism (named, concrete)

- **The trace draws via the `stroke-dasharray` / `stroke-dashoffset` "line-draw" technique** (the canonical draughtsman draw): set `stroke-dasharray` to the path's own total length `L` and animate `stroke-dashoffset` from `L` → `0`, so the single 1.6px `--fg-muted` line inks itself along the curve OBSERVE→SHIP. `L` is the rendered length of `TRACE_PATH` (measured once via `getTotalLength()` and written to a CSS var `--trace-len`, OR hard-set to a constant slightly above the path length — the path is fixed geometry, ~520–560 user units; either is fine, the engineer measures). **This must not collide with the ambient `signal-pulse`**, which is a *separate* `<path>` already using `stroke-dasharray: 6 200` — the construction draws the **`.trace` path only**; the `signal-pulse` path stays `opacity: 0` (or its animation `paused`) until the build completes, then its existing `wb-signal` loop begins. Two different paths, two different dash treatments, never on the same element.
- **Grid, axis, leaders, labels, caption, nodes draw via opacity** (fade-in, not stroke-draw): hairline dashed grid lines do not read as "drawn" with a stroke-on (they are dashes, not a continuous stroke), so they **resolve by opacity** `0 → 1`. The nodes "set down" by opacity `0 → 1` with a *micro* scale settle (`scale(0.6) → scale(1)`, transform-box `fill-box`, transform-origin center — same technique the existing `pulse-halo` uses) so each point *lands* rather than blinks. Confident ease-out, **no overshoot** (no `scale(1.1)` bounce — the director bans springs outright).
- **All of it lives inside the existing `@media (prefers-reduced-motion: no-preference)` block in `site.css`** — the same block that already gates `wb-pulse` and `wb-signal`. This is the load-bearing reduced-motion guarantee (§4 below): outside that media query, the resting CSS is the finished diagram with zero construction styles, so reduced-motion and no-JS render the final state with no extra work.

### 3. The timeline (concrete ms offsets; total ≈ 1.5s, inside the ~1.2–1.6s budget)

`t=0` is first paint of the Hero (the same instant the DS stagger begins). The construction is **its own CSS timeline keyed by `animation-delay`**, *not* re-driven by JS per-frame — it runs as CSS keyframe animations on the glyph's sub-elements, started on mount (see §5 for the trigger). The DS Hero text stagger runs its own internal ladder in parallel (status idx0 → title idx1 → lede idx2 → cta idx3 → illustration idx4 @ 600ms); the construction is timed to **interlock** with it (§ choreography below).

| t (ms) | Event | Token / value | Notes |
|---|---|---|---|
| **0–200** | **Grid + axis resolve** (opacity 0→1). The drawing surface appears. | `--dur-mid` (240ms), `--easing` | Starts on mount; the surface is the first thing down, as a draughtsman tapes the paper before drawing. |
| **160** | **Trace begins drawing** (stroke-dashoffset L→0). | starts at +160ms | Overlaps the tail of the grid fade so the line begins on a settling surface, not an empty box. |
| **160 → ~1040** | **Trace draws** along the full curve. | `--dur-slow` ×1.4 ≈ **880ms** of draw, `--easing` (confident expo-out; reads "drawn," settles, no bounce) | The single longest gesture — the "one confident line." The expo-out means it moves with intent and eases into SHIP, never linear-mechanical, never springy. |
| **per-node, keyed to trace progress** | **Nodes set down in sequence** as the trace reaches each. | per-node `animation-delay`, each node `--dur-mid` (240ms) opacity+micro-scale | **Delay formula:** node *i* (i = 0..4) lands at `traceStart + (i+1)/5 × traceDuration` ≈ `160 + (i+1) × 176ms` → **OBSERVE ≈ 336ms, MODEL ≈ 512ms, PLAN ≈ 688ms, ACT ≈ 864ms, SHIP ≈ 1040ms.** Each node lands as the inking line arrives at its coordinate. |
| **node-land + ~80ms** | **Leader + mono labels register** beside each node, just after it lands. | each `--dur-fast` (180ms) opacity fade, `--easing` | Label/leader for node *i* delayed `node_i + 80ms` (`--dur-press` worth of beat) so the point sets, *then* its name registers — the draughtsman labels after placing. |
| **~1040** | **SHIP node lands LAST and lights its accent.** | node ring `--accent` + dot `--accent` + label `--accent`, all already in the resting markup — they simply fade up with the SHIP node | The climax. The one accent on the page arrives **here, once**, as the terminus — not introduced by motion at rest (it is the node's own resting fill, revealed by the build). |
| **~1120** | **SHIP label `05 / SHIP` + caption `pipeline · 5 stages` register.** | `--dur-fast`, `--easing` | The diagram is now complete. |
| **~1200** | **Ambient handoff:** `signal-pulse` (`wb-signal`) + `pulse-halo` (`wb-pulse`) begin as the resting heartbeat. | existing loops, `animation-delay: ~1200ms` so they start *after* the build, not during | The construction ends; the diagram holds at the byte-identical resting state forever, but-for the one ambient pulse. |
| **end ≈ 1200–1500** | Total construction complete well inside the **1.6s** ceiling. | — | If tuning runs long, shorten the trace-draw multiplier (1.4→1.2) before touching node spacing; the line is the hero, keep it readable. |

**Delay formula (clean form), for the engineer:**
```
TRACE_START   = 160ms
TRACE_DUR     = 880ms                 (= --dur-slow × ~1.45; the one long gesture)
node_land(i)  = TRACE_START + (i+1)/5 × TRACE_DUR     // i = 0..4 → 336,512,688,864,1040ms
label_in(i)   = node_land(i) + 80ms                  // --dur-press beat after the point sets
AMBIENT_START = node_land(4) + 160ms ≈ 1200ms        // signal-pulse + halo begin here
```
All durations reference DS tokens (`--dur-mid`, `--dur-fast`, `--dur-slow`, `--dur-press`); the only computed values are the per-node delays (a multiple of the trace duration). No raw easing — every curve is `--easing` (expo-out). No `--space-N` involved (this is time, not layout).

### 4. Choreography with the Hero text stagger (S1) — the decision

**Decision: the glyph build is its OWN CSS timeline, started on mount, timed by `animation-delay` to interlock with the DS stagger — NOT keyed frame-by-frame to the DS stagger.** Rationale: the DS owns the text stagger internally (status/title/lede/cta/illustration at fixed 0/150/300/450/600ms) and exposes no per-slot hook to drive a custom sub-timeline; trying to chain off it is fragile. Instead we run the construction as an independent, mount-triggered timeline whose **offsets are chosen so the two read as one gesture.** The interlock:

- The DS fades the **title** in around its index-1 slot (~150–300ms) and settles it by ~750ms (150ms delay + 600ms `--dur-slow` entrance). The construction's **trace is mid-draw** through this window (160→1040ms) and the **SHIP climax lands at ~1040ms — as / just after the title settles.** That is the contract from the direction (§3.S1): *the glyph reaches its SHIP-node climax as the title settles.*
- The DS's own index-4 illustration slot (the 600ms whole-glyph fade) is **superseded by the construction** for this asset: instead of the glyph fading in as one block at 600ms, the *surface* is already resolving by 200ms and the *line is drawing through* the 600ms mark. The engineer must ensure the DS's illustration-slot fade does not double up with the construction — either let the construction own the glyph's opacity (the glyph wrapper starts visible; the *sub-elements* animate), or set the illustration slot to no-op for this asset. (Engineer's structural call; the requirement is **one** arrival, not a fade-then-draw.)
- **The felt result:** words and diagram compose *together* — status/title arrive as the surface tapes down and the line starts; the lede/CTA settle as the line completes and the points set; SHIP lights as the title lands. One gesture, not "text staggered, then a separate glyph animation."

### 5. Once-only + trigger + SPA-nav decision (HARD)

- **The construction plays exactly ONCE, on mount/first paint. It never replays on re-scroll, never loops.** It is *not* wired to the `[data-reveal]` IntersectionObserver (that grammar is for below-hero beats and can re-fire on scroll-back into view) — the Hero is above the fold and the build is a paint event, not a scroll event.
- **Trigger:** the construction runs as CSS keyframe animations that play on element mount (the default — a keyframe animation with `animation-fill-mode: both` runs once when the element renders, then holds its end-state). The glyph is server-rendered static HTML; the animation is the additive CSS layer that runs at paint. **No JS is required to *start* it** (CSS animations auto-run on paint) — the only optional JS is measuring `getTotalLength()` for `--trace-len` if a constant isn't hard-coded. This keeps the signature inside the zero-JS-preferred posture: it is CSS-first, paint-triggered, no island, no observer.
- **`animation-fill-mode: both` (or `forwards`) on every construction keyframe is load-bearing:** it makes each sub-element hold its drawn end-state after the single play, so nothing snaps back. Combined with the resting CSS *already* being the final state, the glyph is correct whether the animation runs, is mid-run, or never runs.
- **SPA / `astro:page-load` decision: DO NOT re-run the construction on client-side nav back to `/`.** The signature is a *first-impression* moment; replaying it on every return to home would make it read as a loop/gimmick (the director's "no second loop" line). If the site uses Astro view transitions / client routing, the construction must be gated to **first document load only** (e.g. a one-shot guard, or simply relying on full-page nav for `/`). If the engineer cannot cheaply suppress replay on `astro:page-load`, the acceptable fallback is to let it replay **only** on a genuine full page load and treat SPA-return as showing the finished diagram immediately (no build). **Default: build once on first load; finished diagram on every subsequent SPA return.** Flag to Arian as OQ-A8 if the routing makes one-shot suppression non-trivial.

### 6. Reduced-motion + no-JS fallback (HARD, merge-blocking — the exact resting end-state)

**This is the hardest line and it is already structurally guaranteed by where the construction CSS lives.** The construction styles live **entirely inside `@media (prefers-reduced-motion: no-preference)`** (the same block that today gates `wb-pulse` + `wb-signal`). Therefore:

- **Under `prefers-reduced-motion: reduce`:** none of the construction keyframes apply. The glyph renders in its **finished static state immediately** — grid + axis (`--hairline`), full trace (`--fg-muted`, 1.6px, complete), all five nodes set (rings `--bg`/currentColor, dots currentColor, SHIP accent), all five leaders (opacity 0.55) + mono labels, the caption — **and the `signal-pulse` / `pulse-halo` ambient loops are also off** (they live in the same `no-preference` block, already gated today). The page resolves to the byte-identical static diagram with no motion. No draw, no fade, no stagger.
- **No-JS / pre-hydration:** the glyph is server-rendered static HTML (it already is — `HomeHeroIllustration` renders to static markup at build time, no hydration). The finished diagram is the **default rendered state**; the construction is a pure CSS progressive enhancement that *adds* the draw when motion is allowed and JS-measurement (if used) is present. If `getTotalLength()` measurement is used for `--trace-len` and JS is off, the trace must default to **fully drawn** (`stroke-dashoffset: 0`, i.e. the resting state) — the dash-draw start-state (`offset: L`) must ONLY be applied inside the motion-allowed path, never as a base style, exactly mirroring the §A3-4.1 T1 deficit-bar safety contract (*"no blank/zero state without the motion gate"*). **A no-JS visitor must never see an undrawn or invisible trace.**
- **The exact resting end-state (byte-identical to today):** it is precisely what `HomeHeroIllustration.tsx` + `site.css §"The Signal"` render right now — this composition changes **zero** resting markup, geometry, or token bindings. The construction is additive-only. **Verifier contract: the reduced-motion render and the no-JS render must be pixel-identical to the current shipped glyph** (the construction adds nothing at rest; it only animates the *arrival* at that exact state).
- The glyph stays **`aria-hidden="true"`** (unchanged) — the OBSERVE→SHIP labels restate the pipeline the hero copy already carries, so the construction adds presence, not information; a screen-reader user loses nothing.
- **CLS zero:** the construction draws *within* the glyph's already-reserved, aspect-stable column (fixed viewBox, fixed Hero illustration slot) — it is paint-only inside a fixed box. No layout shift, no reflow. (The §A3-4 lean-in's column-sizing is unchanged and orthogonal.)

### 7. The restraint anchors on the signature itself (the director's hard stops)

- **One confident line + five points. Nothing else.** No glow trail on the drawing line, no sparkle as nodes land, no shimmer, no gradient-sweep, no light. Ink (`currentColor`/`--fg-muted`), not light.
- **No bounce / spring / overshoot.** Every curve is `--easing` (expo-out) — confident, settles, exact. A spring on the node set-down would read instantly as toy-SaaS; nodes scale `0.6→1`, never past 1.
- **The accent arrives once, at SHIP, as the terminus** — it is the node's own resting fill revealed by the build, not a motion-introduced color. No accent anywhere else in the construction; the construction draws monochrome and the SHIP accent is the single point of arrival (consistent with "no motion introduces accent at rest").
- **One arrival, not two.** The text and the glyph compose as a single gesture; the engineer must prevent a DS-illustration-slot fade *plus* a construction (the double-fade tell).
- **After ~1.2–1.5s it is finished and still** — only the one ambient `signal-pulse`/`pulse-halo` heartbeat continues (the page's sole loop). The construction never repeats.

---

## A3-4.3. The supporting set (subordinate to the signature) — S2 / S3 / S4

The supporting moves exist to make the page feel *composed around* the signature, never to add competing peaks. **S1 is folded into §A3-4.2 §4 (the choreography).** S2/S3/S4 below are deltas to the §A3-4 / §A3-4.1 baseline.

### S2 — Band ENTRANCE upgrade: "rise-and-settle," not a flat fade (the four below-hero reveals)

Replace the uniform fade + 8–12px rise on the below-hero beats (Statement, Artifact, What-we-do, Why-us) with a more **authored** arrival: a longer travel that *lands with intent* via a single non-bouncy ease-out. **This is a timing/distance/easing change to the EXISTING `[data-reveal]` reveal — NOT a new mechanism, NOT a new island, NOT a new observer.** It reuses the shipped IO and the `.reveal-on [data-reveal]` → `.is-visible` CSS path (`site.css §[data-reveal]`).

- **Distance:** rise travel goes from the current **8–12px → ~20px** (`translateY(20px)` start-state → `translateY(0)`). Longer travel reads as "landing," not "un-hiding." Keep it a single Y-axis translate; no scale, no fade-from-side.
- **Easing:** **`--easing`** (expo-out, `cubic-bezier(0.16,1,0.3,1)`) — a confident ease-out that *arrives and settles*, never bounces. (Flag for the engineer: the shipped reveal currently inlines a literal `cubic-bezier(0.16,1,0.3,1)` at `0.5s`; S2 should reference the **token `--easing`** by name and the **`--dur-slow` token**, not the inlined literals — same on-contract correction §A3-4.1's implementation-flags note already calls for.)
- **Duration:** **`--dur-slow` (600ms)** (up from the inlined 500ms). The extra 100ms + the longer travel is what turns a "reveal" into an "arrival." Opacity fades `0→1` across the same 600ms.
- **Still once, still whole-unit.** Each beat reveals once; no re-fire on scroll-back. Three of four reveal as one unit (Statement, Artifact, Why-us). **The ONE permitted exception is unchanged: the Disciplines per-card stagger (T4, §A3-4.1) stays** — 60ms step, ≤120ms total, the lead arrives first. S2 changes that beat's *distance/easing/duration* too (20px / `--easing` / `--dur-slow`), but keeps its stagger.
- **Reduced-motion:** unchanged and already guaranteed — the `[data-reveal]` reduced-motion block forces all beats present-on-load (no travel, no fade). S2 adds no new motion path, so it inherits the existing gate. No-JS: content visible (the safety contract holds; the 20px start-state applies only under `.reveal-on` + motion-allowed).
- **What S2 is NOT:** not parallax, not scroll-scrub, not a per-element stagger beyond T4, not a depth/shadow cue (T8 stays rejected). It is the same fade+rise, tuned to land harder. Subtle — the difference between a reveal and an arrival.

### S3 — Keep the deficit-bar draw (T1) as the page's deliberate SECOND storytelling beat — NO CHANGE

**Confirmed: T1 stays exactly as specified in §A3-4.1.** The deficit bar draws its inked segment 0→95% on scroll-into-view (`--dur-slow` + `--easing`, delayed `--dur-mid` so the band settles first), `95%` numeral never counts up, once, then static. With the signature now anchoring the top, T1 reads as the page's deliberate **second beat** (top: the system builds itself; mid: the gap opens). It remains the only place besides the signature where motion *tells the argument*. **Do not add a third storytelling motion — two is the composition.** No change; subject to OQ-A4 (ships only if the bar is retained).

### S4 — ONE quiet Artifact hover: a hairline-border warm on the code exhibit ONLY

The Artifact `CodeBlock` (Beat 3) is a framed object a curious reader mouses toward to read the code — so acknowledging the cursor is *motivated* (unlike the non-interactive discipline rows, which correctly stay dead, T5). **One** very quiet hover affordance:

- **Treatment:** the artifact frame's **hairline border warms** `--hairline → --fg-muted` (a quiet darkening of the 1px frame stroke, NOT a color, NOT the accent), on `:hover` / `:focus-within` of the `.home-artifact` wrapper. Border-color transition only — **no transform, no lift, no shadow, no scale.**
- **Token:** `border-color` transition at **`--dur-fast` (180ms)** + **`--easing`**. (Mirrors the DS `LinkCard`/`FeatureCard` border-warm hand — `border-color var(--dur-fast) var(--easing)` — but lands on `--fg-muted`, not `--accent`, because the exhibit is decorative, not a link.)
- **Alternative if even the warm reads "clickable":** a 1px inset settle is the fallback the director named, but the border-warm is the cleaner pick (less motion, no geometry change). **Either way: NEVER a card lift, NEVER the accent.**
- **CUT CONDITION (binding):** if at visual review the hover makes the artifact read as a **clickable widget**, cut it entirely — the static exhibit is the safe default. The artifact must never imply it is a button/link (it has `hideCopy`, no href; a hover that suggests interaction is a false affordance). Flag at review (OQ-A9).
- **Reduced-motion:** the `border-color` transition collapses to instant via the DS `:root` reduced-motion clamp (the warm still applies on hover, just without the 180ms tween — acceptable; it is a color shift, not a motion). No-JS: pure CSS `:hover`, works without JS.
- **The CODE itself never performs** (T7 holds): S4 is the **frame only**, not the code. No typing, no cursor, no line-reveal, no scroll-draw. The hover touches the wrapper's border; the `<pre><code>` is inert.

### Stillness anchors (re-stated so the engineer does not over-reach)

These do NOT move (carried from §A3-4 / §A3-4.1 / the direction §4, re-stated as the signature's load-bearing counterweight):

- **Statement still** beyond its one S2 reveal (no mask-reveal, no word-by-word, no emphasis pulse — T6).
- **Artifact CODE never performs** — S4 is the frame's border only; the code is presented, not performed (T7).
- **The `95%` numeral never counts up** — final on first paint; the *bar* draws (S3/T1), the *numeral* does not tick.
- **Discipline rows dead on hover** — non-interactive, no hover affordance (T5). (The disciplines' only motion is the T4 stagger on entrance.)
- **Convert static on arrival** — the terminus reveals nothing (no S2 reveal on Convert; it is where the reader lands).
- **No motion introduces accent at rest** — the SHIP accent arrives once via the build and then holds as a static fill; nothing else animates color. The accent (`#0071e3`) appears only at SHIP, on link-hover underline, and on focus — never as ambient motion.
- **The `--space-16` cross-beat interval is unchanged** — the signature is *time*, not *layout*; it adds zero spacing change. The strike (the 64px interval + two bands + one inset object) is untouched.

### Verify-ability note for the engineer (HARD — the preview tool cannot show this)

The Astro/DS preview renders static HTML and **cannot execute first-paint animation, IntersectionObserver, scroll, `:active`, or `:hover`.** The signature and supporting set MUST be verified in a real browser via **Playwright**, not the preview:

- **Signature (the build):** capture the glyph **mid-construction** vs **final** (two screenshots at e.g. t≈500ms and t≈1600ms) and assert they differ; **assert the `.trace` path's `stroke-dashoffset` animates from full (`L`/`--trace-len`) → `0`** over the draw window; assert nodes gain opacity in OBSERVE→SHIP order; assert the SHIP accent appears last.
- **Reduced-motion:** under `prefers-reduced-motion: reduce`, assert the glyph renders its **final state immediately** (trace `stroke-dashoffset: 0`, all nodes opacity 1, ambient loops off) — and assert this render is **pixel-identical to the current shipped glyph** (byte-identical end-state contract).
- **Once-only:** assert the construction plays **once** on mount and does **not** re-run on scroll-away-and-back; if SPA nav is in play, assert it does not replay on `astro:page-load` return to `/` (or shows the finished diagram immediately).
- **No-JS:** with JS disabled, assert the trace renders fully drawn (no invisible/undrawn line) — the finished diagram is the default.
- **S2:** assert the four below-hero reveals travel ~20px and use `--easing`/`--dur-slow` (not the old 8–12px/500ms literals); assert Disciplines still stagger (T4) and Convert does not reveal.
- **S4:** assert the artifact frame's `border-color` warms on `:hover` AND `:focus-within`, with no transform/lift; assert it flattens (or is absent) under the cut condition / reduced-motion clamp.
- **CLS:** assert the construction induces **zero layout shift** (paint-only inside the fixed glyph box).

A `scripts/verify-motion.mjs` Playwright harness already exists in the repo root (untracked) — the engineer wires these assertions there or in the Playwright suite.

---

## A3-5. Icon picks (if applicable)

**None.** The homepage uses no Lucide glyphs. `FeatureCard` `icon` slots stay omitted (anti-slop guardrail, Beat 4). The only glyphs are literal `→` HTML entities in the body font (Hero lede hand-off, Hero + Convert booking, the Why-us `See when to hire us, and when not to →`). "The Signal" glyph and the (optional) Why-us deficit bar are editorial `currentColor` SVG marks — the page's one illustrative hand, now joined at a new scale by the artifact's mono `<pre><code>` (same hand: hairline + mono + monochrome). The artifact is **not** an icon and the `CodeBlock` copy button is suppressed (`hideCopy`) so no affordance icon ships.

---

## A3-6. DS gaps surfaced (and the corrected DS premise)

**No DS gap blocks this composition — and the spec's central DS premise is OUTDATED.**

- **CORRECTED PREMISE — `CodeBlock` ships in 2.17.0 (AA-2).** The spec (§7/§30), direction (§30), and content draft instruct shipping the artifact as a **site-side `<pre><code>`** because "no DS code/artifact primitive exists." **This is false against the installed package.** `@poukai-inc/ui@2.17.0` exports a real `CodeBlock` molecule (semantic `<figure>` + scrollable `<pre><code>` + optional `<figcaption>` + optional header bar, **no syntax highlighting** → monochrome by default, on the `--surface` recessed-inline tier). It is *more* on-contract than a hand-rolled `<pre>` and is the vehicle this recipe specifies. **This is not a DS gap and not a proposal** — the primitive exists; I compose with it. The "no primitive / ship site-side" language in the spec/direction/content is **stale and flagged for Arian to ratify** (§A3-7 OQ-A1). (Per the awareness-only flag the spec carried: a recurring code exhibit would justify a DS primitive — it turns out the DS maintainers already shipped one. No escalation owed.)
- **The inset-object-vs-third-band question is RESOLVED by the token system, not escalated.** Spec §4.2/§190 says: if the artifact can *only* be framed legibly as a full band, escalate to Arian. It cannot-only — the DS elevation rhythm gives a recessed *inline* tier (`--surface`, whose documented use is literally "code blocks") that is categorically distinct from the band tier (`--surface-section`). `CodeBlock` on `--surface`, capped narrow and centered, reads as a framed object within the `--bg` flow, with `--bg` visible on both sides. **No third band; no escalation.** (Recorded here per the charter's "flag it rather than assume" instruction: I did not need the escalation, because the legible framing exists at the correct tier.)
- **No-fake fallback (binding, spec §4.2):** if Arian confirms no real fragment can be published, the `artifact` block is omitted, the beat does not render, and the **asymmetric What-we-do (Beat 4) absorbs the mid-page weight** (lead discipline scales up further) — no fabricated stand-in, no eagle (D-17 closed), no second illustration vocabulary. The placeholder (Candidate A) is for preview/evaluation only and never reaches production unconfirmed (AA-1).
- **`ComparisonTable` (carried awareness-only):** still not a gap to escalate — the 2-axis cut is a four-pair editorial stance, not a pricing matrix; the site-side `<dl>`/stack is correct.

Per the designer lane, the above are flags, not authored DS APIs. Arian decides any routing (notably the stale-premise ratification, OQ-A1).

---

## A3-7. Open questions for Arian

Tight list; defaults proposed so each closes on a nod.

- **OQ-A1 (the one that matters) — ratify the corrected DS premise: compose the artifact with the shipping `CodeBlock` molecule, NOT a hand-rolled site-side `<pre><code>`.** The spec/direction/content all premise on "no DS code primitive"; the installed `@poukai-inc/ui@2.17.0` ships `CodeBlock` (AA-2/§A3-6). It is the on-contract, monochrome-by-default, recessed-inline vehicle. **Default: use `CodeBlock`** (`hideCopy`, `language` label, mono `caption`, `aria-label`). The stale "no primitive / ship site-side" language in the upstream docs is flagged for you to ratify through the normal path (PM/direction own their edits; I do not edit them). If you'd rather hold to a hand-rolled `<pre>` for any reason, say so and I'll respec Beat 3 site-side — but `CodeBlock` is strictly better here.
- **OQ-A2 — artifact header bar: keep the `language` label, or drop it for a pure framed `<pre>` + caption?** `hideCopy` is fixed (decorative exhibit, no copy widget). With `language="typescript"` the DS renders a small language label in the header bar — quiet, but it is one notch toward "code widget." **Default: keep the `language` label** (it reads as a tasteful filetype tag and aids a11y context); drop it if the header bar reads as dev-tool chrome at visual review (then the block is a pure framed `<pre>` + mono `<figcaption>`).
- **OQ-A3 — asymmetric disciplines weight: confirm the 1-up (automations) over 2-up (builds, advisory) with the lead at `--fs-card-title` scale.** Composition-only, automations leads (your override). **Default: ship as specified.** Fallback if it reads imbalanced/SaaS: dial the scale delta to 0 (keep span/position asymmetry only), then last-resort an editorial `MetaList` stack.
- **OQ-A4 — Why-us number: display scale = `--fs-stat-large` (56–96px), and keep or drop the thin deficit bar?** The number is now the hero (not the bar). **Default: `--fs-stat-large` number + the thin `currentColor` bar retained small beneath it; drop the bar if it competes with the number at review** (the number alone at display scale is cleaner). No count-up either way; if a bar fill is ever added it is CSS-only, render-time, reduced-motion-safe — default static (B.1).
- **OQ-A5 — Convert close scale: `--fs-tagline-intimate` (32–52px) serif italic, the Statement's louder sibling.** "The demo was never the hard part." rendered one rung above the Statement. **Default: `--fs-tagline-intimate` serif italic, centered, the `<h2>` styled large (not a second heading).** Dial to `--fs-statement` if it crowds the Hero's `--fs-tagline` at desktop.
- **OQ-A6 — two-band approach + merge-guard (carried from A2):** TWO bands (Why us + Convert) separated by `--space-16` return-to-`--bg` + the Convert `--hairline` top rule + distinct registers. **Default: ship two bands; drop Convert to `--bg` only if the captures show a merged slab.**

- **OQ-A7 — ratify the SIGNATURE: the Hero glyph self-constructs on first paint (§A3-4.2).** The creative director raised the ceiling to ~7.5 and named this as the one signature move; the director's handoff (§7) asks you the single decision: *do you want the glyph to build itself on first paint as the page's signature presence?* **Default: YES — build it** (the thesis made kinetic, the asset you already own, one memorable moment, zero new asset, byte-identical resting end-state, reduced-motion/no-JS safe). If you'd rather hold the page quieter, say so and the ambition caps at S1–S2 (richer arrival, no construction). The mechanism (stroke-dashoffset draw + sequenced node opacity, ~1.5s, once) is specified and build-ready in §A3-4.2.
- **OQ-A8 — SPA-nav replay (§A3-4.2 §5): suppress the construction on `astro:page-load` return to `/`?** **Default: build once on first full load; show the finished diagram immediately on every subsequent SPA return** (the signature is a first-impression moment, not a per-visit loop — the director's "no second loop"). If the routing makes one-shot suppression non-trivial, the engineer flags it; the acceptable fallback is full-load-only build, SPA-return = finished diagram.
- **OQ-A9 — S4 artifact hover (§A3-4.3): ship the hairline-border warm, or leave the exhibit fully static?** **Default: ship the quiet `--hairline → --fg-muted` border-warm on `:hover`/`:focus-within` (180ms, no transform).** Hard cut condition: if at visual review it makes the artifact read as a clickable widget, cut it — static exhibit is the safe default. The code itself never performs either way (T7 holds).

**Blocking dependencies (block `Built`-to-production, not `Approved`):**
- **The real artifact fragment (spec §7, content Q1).** The artifact beat ships to production only on Arian's confirmed real + publishable fragment. Until then it renders Candidate A as a labelled placeholder for preview/evaluation only (AA-1). No production `Built` on an unconfirmed fragment.
- **The A3 content draft (`home-a3-artifact-anchor.md` v1.0) is In review** — its MIT NANDA re-confirmation, the 2-axis honesty audit, the lead-discipline call (you overrode to automations), and the close line route to you. The engineer builds each beat only on Approved copy (PM DoD).

This composition flips to `Approved` on your nod to OQ-A1–OQ-A9 (each defaults cleanly if silent — including OQ-A7, the signature, default YES); the artifact's production realness remains a separate `Built` gate.

---

## A3-8. References (real-world tasteful code/artifact exhibits)

Per Arian's ask — a concrete visual reference set for the restrained-monochrome-engraved-code target, *before* committing real content. Each: what to borrow, what to avoid. (Cited from how these sites present code on marketing/editorial surfaces; treat as taste anchors, not layouts to copy — the brand thesis is anti-pattern-matching.)

- **Stripe — docs/marketing code panels (stripe.com, docs.stripe.com).** *Borrow:* small, real, runnable-looking fragments treated as first-class objects with generous margin; the code is *the* hero of the panel, not decoration. *Avoid:* Stripe's signature multi-language tabbed panel and its colored syntax — our target is monochrome and single-fragment; no tabs, no rainbow tokens, no live-editable feel.
- **Vercel — `vercel.com` snippet blocks.** *Borrow:* the dark, ultra-restrained mono panel with a single quiet filetype/label and a copy affordance that recedes; the "engraved" calm. *Avoid:* the elevated/floating card with shadow and the occasional gradient frame — ours is recessed (`--surface`, no shadow), and we suppress the copy button (`hideCopy`) so no widget chrome reads.
- **Resend — `resend.com` hero code sample.** *Borrow:* one tiny, real send-an-email fragment as the literal proof of "this is what using us looks like" — exactly our "they actually ship this" intent, achieved with a handful of lines. *Avoid:* the bright accent-on-keyword syntax coloring — we keep accent never-at-rest and emphasis via weight/opacity only.
- **Fly.io — `fly.io` config/CLI fragments in editorial flow.** *Borrow:* config and command fragments set as plain monospaced objects inside prose, reading as an engineer's notebook rather than a product screenshot; high realness, low chrome. *Avoid:* terminal-window chrome (traffic-light dots, title bars) dressing the code as a screenshot — the spec bans decorative terminal/browser chrome outright; ours is a clean recessed `<figure>`, no faux-window.

**The shared anti-pattern all four guard against (and our hard floor):** the **IDE-screenshot / dev-tool-landing-page read** — colored syntax, a faux editor or terminal window, a wall of code, a blinking cursor, line numbers as decoration. Our artifact is the opposite: one small real fragment, monochrome, on a recessed inline surface, in the page's own hairline/mono hand, copy suppressed, static — engraved code, not a code editor.

---

**Assumptions** (A2 base recipe — superseded by §A3-0 above; retained for the unchanged beats' provenance):

- **A1 — Compose to the Approved content draft (v3.0), not placeholders.** Its copy and lengths drive density: the 3 disciplines at ~18–20 words; the deficit mark = `95%` + a ~16-word label + the mono caption `MIT NANDA, The GenAI Divide, 2025`; the 4×3 comparison with sentence cells; the Convert heading + one-line restate. No `Draft:` copy is authored here. (Content draft is In review, not yet Approved — this composition can reach `Approved` independently; the engineer does not `Build` any beat on unapproved copy, per PM DoD.)
- **A2 — The Why-us recessed surface is a SITE-SIDE `--surface-section` wrapper, not a DS `Section surface` prop.** Confirmed against the DS: `Section` has **no `surface` prop**; only `CTASection`, `StatsSection` (`fill`), `NewsletterSection` (`surface`), and `Pull`'s host `Section` (`tone="section"`) expose `--surface-section`. The Why-us beat is a `Section` (not a CTA), so its band is a thin site-side full-bleed wrapper applying `--surface-section`. This is fine for one page (A2 §21). Awareness-only DS flag in §6.
- **A3 — The deficit figure is MIT NANDA 95% (content draft §A2/§6 audit, recommended).** The mark + caption render only if `comparison.metric` is present and complete (binding citation, spec §5/§8). If Arian picks the Gartner-85% parity fallback (content §5), the composition is byte-identical — only the value/label/caption strings change. If `metric` is omitted entirely, the mark does not render and the exhibit is the table alone (the recipe degrades cleanly — §4 Beat 4).
- **A4 — Reuse the shipped `ScrollReveal` island as-is.** The four-beat reveal grammar drops to **three** below-hero beats (Statement, Disciplines, Why us); Convert stays static (terminus). The island, its CSS gate, and its reduced-motion no-op are already built and correct (`ScrollReveal.tsx` + `site.css` §scroll-reveal) — no change beyond removing the Method usage.
- **A5 — NO feather colophon.** The prior recipe shipped a `sigil` feather above the StatusBadge. A2 §12.A2 removed it at Arian's request. This revision specifies the Hero right column is "The Signal" glyph ONLY; the feather instruction is retired. (If the live `HomeHero.tsx` still renders a feather, removing it is the engineer's lane — flagged §7 OQ-3.)
- **A6 — The shipped mobile comparison degradation (dimension-first, self-labelled cells) is the contract, not the prior "four blocks by alternative" wording.** See §4 Beat 4 / §3 mobile — the shipped layout is axe-clean with no horizontal scroll, which is the binding AC; the "by alternative" phrasing in the old recipe is superseded by what actually degrades cleanly in pure CSS.

---

## 1. Intent

`/` should still read like a senior engineer's commit message: spare, exact, every line load-bearing (direction §0). The reader lands on the display-scale serif tagline beside "The Signal" glyph, registers "alive, reachable, ships," and is rewarded for scrolling with a short confident argument that is now **shorter and sharper** than the 6-beat version: *here is the conviction, here is the substance, here is the honest evidence* — landing on a calm conversion. The felt arc is **announce → assert → what we do → why us → convert** — five beats. The biggest composition change from the 6-beat page is the **gravitational center has moved**: with the Method beat gone, the page's two strongest visual moments are the Hero glyph (top) and the **Why-us exhibit** (lower third) — the one number, the one deficit mark, the framed comparison, recessed onto its own band. That exhibit is where I spend the most weight; it must land as a *framed quantitative exhibit*, not as another text block on a slightly different background (A2 §15). The honest tension A2 names is the soft middle — Statement and Disciplines are now two rests in a row — so I **spend the Disciplines-weight lever**: Beat 3 carries mono-numeral hairline structure and larger discipline names to read as a *composed* beat, not a plain 3-up, bridging the gap the Method left. Density stays deliberately low; the strike is the `--space-16` (64px) interval between beats and the two recessed bands breaking the all-`--bg` monotony, never the quantity of sections. The line this page must not cross is unchanged — spec §3 "it became a generic SaaS landing page," and the new live instance of the anti-slop floor: a fabricated number. The deficit figure is real and cited or the mark does not ship.

---

## 2. Section-by-section composition

The governing spec's §4 IA lists, in render order: `SiteShell` chrome → **Hero (ANNOUNCE)** → **Statement (ASSERT)** → **What we do (DISCIPLINES)** → **Why us (DEFICIT MARK + COMPARISON)** → **Convert (EXIT)** → `SiteShell` footer. **The order in this document IS the render order.**

### Section 0 — `SiteShell` (page chrome) — UNCHANGED

- **DS primitive(s)**: `<SiteShell>` (organism) via `BaseLayout.astro` (the live wiring; `currentRoute="/"` is passed through). Provides nav (funnel order, D-13) + hairline footer.
- **Props (substantive)**: `currentRoute="/"`; routes `[Why AI, Roles, Principles]` in funnel order; footer line `© <year> pouk.ai · hello@pouk.ai` (the `hello@pouk.ai` substring a `mailto:`). Unchanged from the live build.
- **Layout / spacing**: `<SiteShell>` owns its chrome (`--page-pad`, Wordmark per ADR-0008). The content wrapper is `.site-page` (`max-width: --content-max` 64rem; `padding-block: --space-12` 48px). No DS token overridden.
- **Motion**: None at shell level. Nav/footer link hover uses DS `--easing-link` / `--dur-mid` internally.
- **Content slot**: Nav route list + footer line (site substance, authorized).
- **Brand notes**: Nav wordmark is **always** `SiteShell`'s own `<Wordmark>`, never a string and never a second instance. Footer `mailto:` is the standing-reachability appearance (one of three deliberate email appearances — Hero CTA, Convert, footer; a dedup refactor must not collapse them).

### Beat 1 — Hero — ANNOUNCE — UNCHANGED (glyph stays; NO feather)

The strongest asset on the site, carried forward intact. **No recomposition.** The one change vs. the prior recipe is a removal: the `sigil` feather colophon is gone (A2 §12.A2). The right column is "The Signal" glyph only.

- **DS primitive(s)**: `<Hero size="display" entrance="stagger">` (molecule) carrying: `<StatusBadge status="available">` in the `status` slot; two `<Button asChild size="md">` wrapping `<a>` (mailto primary + booking secondary); an inline `<a href="/why-ai">` as the D-11 lede hand-off; the site-side "The Signal" SVG glyph (`aria-hidden`, with its OBSERVE→…→SHIP labels, `pipeline · 5 stages` caption, and CSS signal-pulse). Wrapped site-side by `HomeHero.tsx`. **All copy + the glyph are byte-identical to the live build — reproduced nowhere here; the binding source is `home.json` + `HomeHero.tsx` + `HomeHeroIllustration.tsx`.**
- **Props (substantive)**: `size="display"`, `entrance="stagger"`; status = `<StatusBadge status="available">Currently taking conversations for Q3.</StatusBadge>` (D-12, byte-identical, ≤10 words — **no feather sibling node**); title = the single `<h1>` with italic `AI`; lede = sentences 1–2 + the `Here's why →` `/why-ai` hand-off (D-11); cta = mailto primary + booking secondary (`Or grab a time →`). The Hero illustration/right-column slot carries "The Signal" glyph, unchanged.
- **Layout / spacing**: Internal Hero rhythm (status → title → lede → cta) is **DS-owned**. Gap from the Hero block into Beat 2 (Statement): **`--space-16` (64px)** via `.home-statement-gap` (already shipped) — a full breath so the Statement reads as a turn, not a Hero subtitle.
- **Motion**: `entrance="stagger"` (the page's one entrance event, CSS-only, DS-gated by reduced-motion). `StatusBadge status="available"` triggers the DS pulse automatically — **do not add CSS animation on top** (DS rule). "The Signal" glyph keeps its existing CSS signal-pulse (the one ambient "heartbeat"). No site-side motion override anywhere in the Hero.
- **Content slot**: `home.json` `hero` block + the two site-side SVG assets. Unchanged.
- **Brand notes**:
  - **The glyph is the page's SOLE pipeline statement** (A2 §14). The prior recipe's "glyph rhymes with the Method section" continuity obligation is **retired** — there is no Method section to rhyme with. The glyph simply states the pipeline; that is enough.
  - **No feather colophon, no eagle anywhere on the page** (A2 §12.A2; D-17). The Hero right column is "The Signal" glyph only. If the live Hero still renders the feather, its removal is the engineer's lane (§7 OQ-3).
  - One `<Hero>`, one `<h1>`, one `<StatusBadge>`. `Button` labels sentence-case. Two actions only. The mailto address is the CTA label.

### Beat 2 — Statement — ASSERT — UNCHANGED

The page's one raised-voice beat: the single conviction at editorial scale, said once. Carried forward verbatim. It now sits **directly before What we do** (no Method between) — a tighter hinge.

- **DS primitive(s)**: `<Statement hairline={false}>` (molecule) via `HomeStatement.tsx` (live). The **only** `Statement` on the page (DS rule). Emits **no heading element** (`--fs-statement` 28–44px, italic Instrument Serif, `text-wrap: balance`) — does not disturb the h1→h2 hierarchy.
- **Props (substantive)**: `statement={<>{statement.text}</>}`, `hairline={false}` (no top rule; the bare-canvas turn is editorial, not a divider), `as="p"` default (the brand's own assertion, not an attributed quote). No `supporting` (single conviction line). Unchanged.
- **Layout / spacing**: On `--bg`, **no band**. Wrapped in `.home-statement-gap` (`padding-block: --space-16`, 64px — shipped) so the conviction sits in symmetric breathing room on both sides. `hairline={false}` deliberately: a top rule would start building the "module stack" the §3 failure mode warns against.
- **Motion**: **Scroll-reveal — single fade + 8–12px rise, once, `--dur-slow` (600ms), `--easing`**, whole unit (no per-child stagger). Via the shipped `<ScrollReveal client:visible>` island. Collapses fully under `prefers-reduced-motion`. (This is the first of the **three** below-hero reveals — was four; the Method usage is removed.)
- **Content slot**: `home.json` `statement.text`. ~10 words, 1–2 balanced lines.
- **Brand notes**: Do **not** stack a `Pull` on the same surface (DS anti-pattern: "Do NOT stack Pull with Statement on the same surface"). The page carries no `Pull` (unless the Beat 4 fallback is taken — and that `Pull` sits on the recessed Why-us band, not adjacent to the Statement, so the anti-pattern is not tripped). The Statement is the page's only editorial-scale line between the Hero `<h1>` and body type — that uniqueness is what makes it read as conviction.

### Beat 3 — What we do — THE DISCIPLINES (`<h2>` #1) — LEVER SPENT

The three deliverables made concrete and scannable: builds / automations / advisory. **Composed as the disciplined transparent 3-up `FeatureGrid` — carried from the shipped `HomeDisciplines.tsx`, with the Disciplines-weight lever now SPENT** (A2 §15 / spec §4 note). This is the soft-middle decision: I am spending it.

**Decision + rationale.** With Method gone, Statement→Disciplines are two rests in a row — a genuine sag risk (A2 §22). The lever (composition-only, no new vocabulary): give Disciplines **more typographic presence** so it reads as a *composed* beat rather than a plain 3-up. I keep the transparent, icon-less `FeatureGrid columns={3}` (the anti-slop guardrail and the shipped vehicle are both right) and add **hairline + mono-numeral structure**: a mono ordinal prefix per discipline (`01 / 02 / 03`) in the `--font-mono` reference register, and the discipline name at a larger editorial size, optionally separated by a `--hairline` rule per column. This echoes the Hero glyph's mono caption register (the brand's "reference / label / system" tissue, direction §6) **without** introducing any new illustration — it is type and a hairline, nothing more. The mono numeral is a typographic character, not an icon (the icon slot stays omitted). This is the same lever the spec authorizes and the same register the (now-removed) Method beat used — so the visual idea isn't lost, it migrates up into Disciplines.

- **DS primitive(s)**: `<FeatureGrid columns={3}>` (organism — wraps `Section`, carries the first `<h2>`) + three `<FeatureCard variant="default">` (transparent, no icon), via `HomeDisciplines.tsx`. The mono ordinal + the larger name treatment + the optional column hairline are **site-side CSS** on the rendered card (a className), using published tokens only (`--font-mono`, `--fs-*`, `--hairline`) — no new token, no DS override of `FeatureCard`'s internals.
- **Props (substantive)**:
  ```
  <FeatureGrid columns={3} heading="What we do" size="default">
    <FeatureCard variant="default" titleAs="h3"
      title="Custom AI builds"
      body="We build the AI system your problem actually needs, wired into the tools and data you already run on." />
    <FeatureCard variant="default" titleAs="h3"
      title="Automations"
      body="We turn the manual, repeated work between your systems into something that runs without a person in the loop." />
    <FeatureCard variant="default" titleAs="h3"
      title="Advisory"
      body="We help you decide what to build, what to skip, and where AI is the wrong tool, before you spend on it." />
  </FeatureGrid>
  ```
  - **The lever (site-side CSS, no DS change):** a mono ordinal (`01 · / 02 · / 03 ·`) rendered above or inline-leading each `title`, `--font-mono` `--fs-meta`/`--fs-micro`, `--fg-muted` — the same register as the shipped `.home-method-stage__label`. The `title` itself is sized up one editorial rung within `FeatureCard`'s allowance (a site className on the card; the DS `FeatureCard` title is the consumer's content). An optional `--hairline` left/top rule per column adds the "hairline structure" the lever calls for. **Constraint:** the ordinal must be `aria-hidden` (decorative) or composed so it doesn't pollute the `<h3>` accessible name — recommend a decorative `<span aria-hidden>` sibling, not inside the `<h3>` text. (Engineer's structural call; both satisfy a11y.)
- **Layout / spacing**: On `--bg`, **no band**. `FeatureGrid columns={3}` = `minmax(16rem, 1fr)` columns, **collapses to one column on mobile via `auto-fit`** (DS-owned, no site media query). `size="default"` block padding `--space-16`. The three bodies run ~18 / ~19 / ~20 words — structurally parallel single sentences; the ~1-line variance at card width is acceptable, hold all three (content §6 Flag 1; I concur).
- **Motion**: **Scroll-reveal — same fade + 8–12px rise, once, `--dur-slow`, `--easing`, whole grid as one unit** (no per-card stagger — spec §8 AC). Via the shipped island. Collapses under reduced-motion. The mono ordinals and hairlines are static (type + rule, no motion).
- **Content slot**: `home.json` `disciplines` — `heading` + `items[3]` (each `name` + one-sentence `description`; `link` optional, absent on all three today).
- **Brand notes**:
  - **Anti-slop guardrail (binding):** transparent variant, **no icons**, no three-word headlines, no gradient/bordered cards. The lever is type and hairline ONLY — adding a mono numeral and bumping the name size does not breach the floor (it is not decoration, it is the brand's mono reference register). Do **not** mix `default` and `bordered` (DS rule).
  - **The lever is composition-only.** No new illustration vocabulary, no band on this beat, no icons (A2 §15). If review shows the lever pushed Disciplines toward "loud," dial back to the mono numeral alone (drop the column hairline) before anything else.
  - Fallback if the grid still reads generic even with the lever: `Section` + `MetaList` (a `<dl>` of name→sentence) **or** three `Principle` blocks in an editorial stack. One-section swap; flag at review, do not pre-build (§7 OQ-2).

### Beat 4 — Why us — THE CITED DEFICIT MARK + THE HONEST COMPARISON (`<h2>` #2) — THE BIG NEW WORK · recessed band #1

The page's richest below-Hero object and its one quantitative moment. **Recessed onto a `--surface-section` band (band #1 of 2).** Composed as **ONE framed exhibit**: the cited deficit mark at its head, then the honest comparison below it, reading as a single composed object — not two stacked blocks. This is the biggest new composition work in the 5-beat revision.

**The exhibit-as-one-object principle (the core of this beat).** The mark and the table must read as *one exhibit under one `<h2>`*, not as "a stat, then separately a table." Three composition moves enforce that unity:
1. **Shared frame, shared inset.** The recessed band is the frame. Inside it, the mark and the table share one content column (`--content-max` inner) with a single left edge, so the eye reads top-to-bottom as one exhibit. The mark sits in the band's head region; the table directly below it in the same column.
2. **One vertical rhythm, tighter than a cross-beat turn.** The mark→table interval is an *intra-exhibit* gap (`--space-8`, 32px), deliberately **smaller** than the `--space-16` cross-beat turns — so the mark and table read as bound, not as two beats. The `<h2>` "Why pouk.ai" → mark gap is the DS Section header gap (`--space-12`); mark → lead-in/table is `--space-8`; table → `/why-ai` link is `--space-6` (the shipped value).
3. **Argument hand-off.** The mark states the *why* (the deployment gap is real; the gap is integration, not the model); the table answers *what to do about it* (when each option is right). The copy already pays this off (the DIY "The risk" cell restates the mark's cause). The composition reinforces it by keeping them in one frame so the reader experiences number-then-table as a single argument.

**The deficit mark — composition (B.1 vocabulary, single monochrome filled-vs-empty form).** A **site-side inline `<svg currentColor aria-hidden>`** in the established `/why-ai` B.1 vocabulary (`asset-production` §B.1): **one** filled-vs-empty bar where the empty space IS the argument. NOT a chart (no axes, no legend, no gridlines), NOT a dashboard, NOT multiple bars, NOT a count-up. Concretely:
- **Form**: a single horizontal 100%-track. The inked segment = `currentColor` solid (or dense hatching, B.1's option) representing the *failure* proportion (`95%`); the remainder is hairline outline only (the ~5% that succeeds). The vast inked field against the thin empty sliver is the visceral statement of the gap. (Orientation: the inked majority IS the deficit — 95% fail; compose so the ink reads as "the gap," consistent with B.1 where "the empty space is the argument." If Arian reads the polarity as confusing — ink = bad — the alternate is inking the 5% success sliver against a 95% empty track; recommend ink = the 95% failure, since the figure's headline is the failure. §7 OQ-4.)
- **The figure**: `95%` rendered as visible text adjacent to / overlaid on the mark, at editorial scale (this is the one number on the page; it renders at its **final value on first paint** — NO count-up, spec §8 AC). The figure is **not** a heading (it is a figure inside the section, not an `<h2>`/`<h3>` — hierarchy AC).
- **The label**: one line, ~16 words — `of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model.` (`comparison.metric.label`). Body register.
- **The micro-caption (the binding citation, VISIBLE)**: `MIT NANDA, The GenAI Divide, 2025` in the **mono register** (`--font-mono`, `--fs-micro`, `--fg-muted`) — visible text directly beneath the mark/figure. **Never a tooltip, never a footnote** (A2 §17; spec §8 AC). The credibility IS the visible caption. This is the same mono "reference" register as the shipped method label and the glyph caption.
- **Semantics**: the mark + figure + label + caption compose as a `<figure>` with the caption in a `<figcaption>` (recommended) — clean a11y, the figure is decorative-supported-by-real-text. The `95%` and label are real text (screen-reader-read); the SVG bar is `aria-hidden` (the text carries the meaning).
- **Conditional render (binding):** the entire mark+figure+label+caption block renders **only if `comparison.metric` is present and complete** in `home.json` (value/label/source/year all non-empty). If `metric` is omitted, **nothing renders at the head** and the exhibit is the comparison table alone (spec §5/§8 — "no number, no mark," there is no third state). The recipe degrades to exactly the shipped 6-beat Why-us composition in that case.

**The comparison — carried from the shipped `HomeComparison.tsx`.** The honest four-way comparison (DIY / Agency / In-house / pouk.ai), 3 rows, where pouk.ai does not win every row, as a **site-side semantic `<table>`** with `<th scope="col">` on the alternatives, `<th scope="row">` on the dimensions, and a visually-hidden `<caption>` for axe (`td-headers-attr`, `th-has-data-cells`, `scope-attr-valid`). Ends in the inline `/why-ai` link (the second route; distinct anchor text). **`ComparisonTable` (DS organism) stays rejected** — it is a pricing-matrix shape (sticky header, `featured` tier, short cell values) with no documented mobile stack; the honest sentence comparison is not a pricing matrix. This is resolved and shipped; not re-opened.

- **DS primitive(s)**:
  - The recessed band: a **site-side full-bleed wrapper** applying `--surface-section` (Section has no `surface` prop — A2). Inside it:
  - `<Section as="section" title="Why pouk.ai">` (carries `<h2>` #2) wrapping, in order: the site-side deficit `<figure>` (conditional), the `<Text>` lead-in, the site-side semantic `<table>` (`HomeComparison.tsx`), and the inline `/why-ai` `<a>`.
  - `<Text>` for the lead-in and the link (matching the shipped component).
- **Props (substantive)**:
  ```
  {/* site-side recessed wrapper: full-bleed, background: --surface-section, content inset to --content-max */}
  <div class="home-whyus-band">
    <Section as="section" size="default" title="Why pouk.ai">
      {/* HEAD OF EXHIBIT — conditional on comparison.metric present+complete */}
      <figure class="home-deficit">
        <svg aria-hidden="true" /* single filled-vs-empty 100% track, currentColor; 95% inked */ />
        <p class="home-deficit__value">95%</p>                {/* final value on first paint; NOT a heading */}
        <p class="home-deficit__label">of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model.</p>
        <figcaption class="home-deficit__caption">MIT NANDA, The GenAI Divide, 2025</figcaption>  {/* mono, VISIBLE */}
      </figure>

      {/* COMPARISON — HomeComparison.tsx body, unchanged */}
      <Text className="home-comparison-leadin">You have four honest options. Here's when each one is right.</Text>
      <table class="home-comparison-table"> … 4 cols × 3 rows, scope headers, sr-only caption … </table>
      <Text className="home-comparison-link"><a href="/why-ai">See when to hire us, and when not to →</a></Text>
    </Section>
  </div>
  ```
  - **Composition note:** the deficit `<figure>` is a **new site-side block at the head of `HomeComparison`** (or a sibling rendered before it inside the same `Section`). Cleanest: extend `HomeComparison` to accept an optional `metric` prop and render the `<figure>` when present, so the exhibit is one component (one `Section`, one `<h2>`, mark + table together). That keeps the exhibit literally one object in the DOM. (Engineer's structural call; the recipe requires only that they share one `Section`/`<h2>` and read as one exhibit.)
- **Layout / spacing**:
  - **The band**: full-bleed `--surface-section`; content inset to `--content-max`. `Section size="default"` supplies `--space-16` block padding inside the band (the air the band needs to read as a framed event, not a thin stripe).
  - **Intra-exhibit rhythm** (the unity moves above): `<h2>` → figure `--space-12` (DS Section header gap); figure (caption) → lead-in `--space-8`; lead-in → table `--space-6` (shipped); table → link `--space-6` (shipped). The mark→table `--space-8` is deliberately **tighter** than the `--space-16` cross-beat turns so the exhibit reads bound.
  - Cells use `--fg` on the band; row/column hairlines via `--hairline` (shipped). The cells are short sentences (longest ~13 words) — legible on desktop, compact when stacked.
- **Motion**:
  - **Section scroll-reveal — same fade + 8–12px rise, once, `--dur-slow`, `--easing`, the whole exhibit (mark + table) as ONE unit** (via the shipped island). No per-row, no per-element reveal — the exhibit reveals as one object, reinforcing the "one exhibit" read.
  - **Optional deficit-mark CSS-only render-time fill** (B.1 technique): the inked segment may grow 0→final width via a render-time `@keyframes`, `--dur-slow` + `--easing`, **on first paint** (not scroll-driven, no JS). It is *inside* the section that scroll-reveals, so the fill plays once as the exhibit settles. **Hard:** NO count-up of the number (renders at `95%` immediately); NO scroll-driven JS on the mark; collapses to the **full static mark at final fill** under `prefers-reduced-motion`. **Recommendation: ship the mark STATIC for v1** (B.1's own recommendation — the spareness of the inked field against the empty sliver lands with no motion; the fill is "add only if it earns it"). The fill is an optional enhancement, Arian's call (§7 OQ-5).
- **Content slot**: `home.json` `comparison` — `heading` + optional `metric` (value/label/source/year) + `columns[4]` + `rows[3]` + `link`. The honesty audit and the sourced-citation audit (content §6) are Arian-verified.
- **Brand notes**:
  - **The mark is a single monochrome filled-vs-empty form, NOT a chart** (spec §10; A2 §17). One bar, one figure, one caption. No axes, no legend, no second metric, no dashboard, no multi-bar. Monochrome `currentColor` only — the accent never appears at rest (anti-slop floor).
  - **Honesty is load-bearing** (spec §3; direction §12 decision 3). pouk.ai does not win every row; do **not** highlight/feature the pouk.ai column (no `featured` styling — one more reason `ComparisonTable` is wrong). The composition must not re-tilt the candor visually.
  - **Second `/why-ai` route** (first is the Hero D-11 hand-off); distinct anchor text; spec §7 permits two on a longer page. It is a **compression** of `/why-ai`'s vs-alternatives, not a reproduction.
  - **Lighter fallback (named, not pre-built):** if the mark + 3-row table reads heavy in the band at review, the lever is **keep the mark, drop the comparison's third row to 2** (content §5/§6 Flag 2 — the mark is the new mandated element; the third row is discretionary). Only if even that reads heavy: drop the table to `Section` + `<Pull variant="sans">` lifting the pouk.ai verdict (content §6 Flag 3 copy) — but the `Pull` keeps the mark above it, and sits on the recessed band (not adjacent to the Statement, so the anti-pattern is not tripped). This loses the per-alternative candor, so it is the last resort.

### Beat 5 — Convert — THE EXIT (`<h2>` #3) — UNCHANGED · recessed band #2

The destination ends on a conversion — restate availability, offer both paths, no scroll-back. **Carries the page's second `--surface-section` band.** Carried from the shipped `HomeClosingCta.tsx` (was Beat 6, now Beat 5; `<h2>` #4 → `<h2>` #3).

- **DS primitive(s)**: `<CTASection surface="recessed">` (organism — the DS's purpose-built end-of-page conversion band; documented end-of-page only — exactly where it sits). `surface="recessed"` applies `--surface-section` + a `--hairline` top rule in one move (confirmed DS snapshot l.1217). Via `HomeClosingCta.tsx`.
  - **`ContactBlock` stays rejected**: it has a `StatusBadge status` slot (would force a second availability badge — locked to the Hero, DS max 1) and no surface-band option. `CTASection` wins.
- **Props (substantive)**:
  ```
  <CTASection
    surface="recessed"           // --surface-section band + --hairline top rule. Band #2.
    size="default"               // --space-16 block padding
    align="center"               // end-of-page brand default
    headingAs="h2"               // the page's THIRD (and final) <h2>
    heading="If the hard part is shipping it, let's talk."     // Approved draft; callbacks Statement + Beat 4
    body={<>Taking on a few engagements this quarter.</>}      // optional one-line availability restate, no new urgency
    actions={/* mailto primary + booking secondary, both <Button asChild size="md"> */}
  />
  ```
- **Layout / spacing**: The **second** `--surface-section` band. `CTASection` owns its own frame + block padding (`--space-16`) — **do not wrap in a `Section`** (DS anti-pattern). See §3 merge-guard for the Why-us→Convert adjacency treatment. Band runs full-bleed; content constrained to `--content-max`. Below into `.site-page` bottom-pad (`--space-12`) → footer.
- **Motion**: **Scroll-reveal: NONE** (it is the terminus the reader scrolls *to*; revealing it means it's fading in as they arrive at the ask). Static on arrival. `Button` hover/focus uses DS `--dur-fast`/`--easing`. No `StatusBadge` here (no second badge). Collapses trivially under reduced-motion (no site motion to gate).
- **Content slot**: `home.json` `closingCta` — `heading` + optional `body` + CTA labels/hrefs per `contact-flow.md`.
- **Brand notes**: Second appearance of the dual CTA (Hero + close), one-primary (mailto) / one-secondary (booking), no third register, no urgency, no scarcity (FS-CF-1). Third deliberate email appearance (Hero CTA + this + footer) — distinct jobs; a dedup refactor must not collapse them. `mailto:` is the primary affordance; booking must not out-weigh it. No `Stat`, `Quote`, scarcity badge, or scheduling embed.

---

## 3. Cross-section rhythm

Top to bottom — five beats inside the `SiteShell` chrome, built from the published `--space-N` scale only, with **two** surface events (the recessed Why-us band + the recessed Convert band).

1. `<SiteShell>` header — DS-owned chrome.
2. `.site-page` content area — `padding-block: --space-12` (48px), wrapping all five beats.
3. **Hero** (`size="display"`, internal rhythm DS-owned) → **`--space-16`** → **Statement** (on `--bg`, `hairline={false}`) → **`--space-16`** → **What we do** (`FeatureGrid size="default"`, `--space-16` block pad, `<h2>` #1, lever spent) → **`--space-16`** → **[BAND #1] Why us** (site-side `--surface-section` wrapper + `Section size="default"`, the deficit-mark + comparison exhibit, `<h2>` #2) → **`--space-16` air + band boundary** → **[BAND #2] Convert** (`CTASection surface="recessed"`, `<h2>` #3).
4. `.site-page` bottom-pad (`--space-12`) → `<SiteShell>` hairline footer.

**The `--space-16` interval discipline (the strike).** Every cross-beat turn is `--space-16` (64px) — the direction §6 interval that keeps density low even with the new exhibit. The exception is *inside* the Why-us exhibit, where the mark→table interval is deliberately **tighter** (`--space-8`) to bind them as one object (§2 Beat 4). No raw px anywhere; `--space-16`/`--space-12` are the cross-beat tokens; `--space-6`/`--space-8` are intra-section.

**The escalation logic (5-beat).** Loud (display Hero + glyph) → quiet turn (Statement, bare canvas) → composed substance (Disciplines, lever-weighted, on `--bg`) → **first surface event: the Why-us exhibit recesses** (the eye re-engages inside a framed band with the page's one number) → **second surface event: the Convert band** (resolve, act). The variety is front-loaded (Hero glyph) and back-loaded (the two bands + the exhibit), with the lever-weighted Disciplines bridging the middle (A2 §15).

### Surface rhythm — the two-band floor + merge-guard

- **Exactly TWO `--surface-section` bands** (spec §8 AC; A2 §16): Why us (band #1, site-side wrapper) + Convert (band #2, `CTASection surface="recessed"`). Hero, Statement, What we do all on `--bg`. **No third band, ever.**
- **The two bands are adjacent** in the IA (Why us → Convert) and **must read as two distinct surface events, not one merged slab** (spec §3 failure mode). **The treatment I am specifying (primary):**
  1. **Full `--space-16` air between them** on `--bg` — i.e. the Why-us band ends, the page returns to `--bg` for a full 64px turn, then the Convert band begins. The two bands do NOT touch; `--bg` shows between them. (This is the single most important separator — the eye sees the canvas return.)
  2. **The Convert band's own `--hairline` top rule** (`CTASection surface="recessed"` renders it automatically) — a crisp edge announcing "new surface."
  3. **Distinct content registers** — Why us is a dense framed quantitative + comparison *exhibit*; Convert is a centered, sparse *conversion ask*. Different internal density and `align` (Why-us left-register exhibit vs. Convert `align="center"`) make them read as different kinds of object.
- **Engineering note for the gap:** the Why-us site-side band wrapper must **not** bleed its `--surface-section` straight into the `CTASection`. The `--space-16` return-to-`--bg` between them is load-bearing — the band wrapper closes, `.site-page` `--bg` shows for the turn, then `CTASection` opens its own band. If the wrapper and the CTASection abut with no `--bg` between, they slab.
- **Merge-guard / Why-us-only fallback (binding, spec §8 / A2 §16):** if at composition/visual review (13–14" + 375px captures) the two recessed beats still read as one continuous slab despite the three separators above, the fallback is: **Why us KEEPS the band; Convert DROPS to `--bg`** (total then = exactly one band, at Why us). Convert never keeps the band while Why us drops — Why us is the framed exhibit that needs the recess; Convert is fine on `--bg` with its own `--hairline` top rule for the closing edge. **I am specifying the two-band approach as primary, with the Why-us-only drop as the named fallback.** Record which shipped at visual review.

### Heading hierarchy (R-026 — no skipped levels)

- **`<h1>`** — the `<Hero>` title (the only `<h1>`).
- *(no heading)* — the `<Statement>` emits no heading element.
- **`<h2>` #1** — What we do (`FeatureGrid` heading → `Section` title).
- **`<h3>` ×3** — the three discipline card titles (`FeatureCard titleAs="h3"`) under `<h2>` #1. (The lever's mono ordinals are decorative `aria-hidden` spans, NOT headings — they must not pollute the `<h3>` accessible name.)
- **`<h2>` #2** — Why us (`Section` title). The deficit figure/label/caption are a `<figure>`/`<figcaption>`, **not** headings. The comparison's column/row heads are table semantics (`<th>`), **not** document headings.
- **`<h2>` #3** — Convert (`CTASection headingAs="h2"`).

**Exactly one `<h1>` + three `<h2>`s** in DOM order (What we do, Why us, Convert), `<h3>`s only beneath their `<h2>`, no skips. (The 6-beat page's fourth `<h2>` — How we work — is gone.) Verifier: heading-order audit (must count 1×h1 + 3×h2).

### Mobile collapse behavior (<`--bp-md` 768px; hard-checked at 375px)

- **Hero** — DS-owned collapse; `size="display"` `clamp()` floor; stagger CSS-only. "The Signal" glyph reflows per the shipped Hero. (No feather to place — removed.) Dual CTA stacks per DS.
- **Statement** — single line at all widths; `--fs-statement` `clamp()` + `text-wrap: balance`.
- **What we do** — `FeatureGrid` **collapses to one column** via `auto-fit` (DS-owned). The lever's mono ordinals + larger names reflow with the stacked cards; the optional column hairline becomes a top hairline per stacked card (site CSS) or drops on mobile — engineer's call (keep it quiet).
- **Why us** — **the load-bearing mobile case.** (a) The **deficit mark** (single bar + figure + label + caption) is intrinsically narrow-friendly — a horizontal bar scales to full width; the figure, label, and mono caption stack. No horizontal scroll. (b) The **comparison table** reflows via the shipped `site.css` `@media (max-width: 768px)` block to a **dimension-first stacked layout**: `display:block` on table parts, `thead` hidden, each `<td>` self-labels its alternative via `data-col::before`, each row-header acts as a section separator. **NO horizontal scroll.** axe-clean (the `<th scope>`/`<caption>` semantics persist regardless of the visual reflow). **Note (A6):** this shipped degradation is *dimension-first with self-labelled cells*, not the prior recipe's "four blocks grouped by alternative" (pure CSS cannot regroup table rows into column groups without JS — the shipped CSS comments document this). The dimension-first stack satisfies the binding AC (no h-scroll, AA) and is the contract; the "by alternative" wording is superseded.
- **Convert** — `align="center"` holds; dual-CTA row stacks (DS-owned via `CtaBlock`); recessed band full-bleed; `mailto:` first.

No section introduces a site-side media query beyond Beat 4's comparison reflow (shipped) and the Beat 3 lever's optional hairline tidy. Verifier: 375px + 13–14" captures show single-column, **no horizontal scroll on any beat**, both bands full-bleed (or Why-us-only if the merge-guard fallback shipped), the deficit mark legible, CTAs stacked with `mailto:` first.

---

## 4. Motion choreography (page-level)

D-25 permits client JS, hydration, and scroll-triggered motion. The page carries one quiet scroll-reveal grammar (now on **three** below-hero beats, down from four) plus the carried-forward Hero motion plus one optional CSS-only mark fill. Every animation gates on `prefers-reduced-motion: reduce` via the DS `:root !important` block AND the site `ScrollReveal` gate (HARD, D-25); **no exception**.

**Fires on initial render:**
- **Hero `entrance="stagger"`** — status / title / lede / cta reveal top-down, CSS keyframes (DS-owned). Carried forward. The page's one entrance event.
- **"The Signal" glyph CSS signal-pulse** — DS/site-owned, the page's one ambient "heartbeat." Do not add CSS on top of the `StatusBadge` pulse (DS rule). (No feather to be static — removed.)
- **Optional: the deficit-mark CSS-only fill** — the inked bar grows 0→final on first paint, `--dur-slow` + `--easing`, no JS, gated by reduced-motion → full static fill. **Default: ship static** (B.1 recommendation; §7 OQ-5). NO count-up of `95%` (renders final on first paint).

**Fires on scroll (the one grammar):**
- **A single consistent quiet reveal on exactly THREE beats — Statement, What we do, Why us.** Each reveals **once**, as **one unit** (no staggered children, no per-row/per-card/per-element sequence), fade + 8–12px rise, `--dur-slow` (600ms), `--easing`. Via the shipped `ScrollReveal` `client:visible` island (one component, three usages). The **Why-us exhibit reveals as one object** (mark + table together) — this is what makes it land as one exhibit, not two blocks. The Convert band does **not** reveal (terminus). No parallax, no count-ups, no horizontal-scroll, no hover-move beyond DS-native affordances, no draw-on of the glyph.

**Mechanism.** Unchanged from the shipped build: the `ScrollReveal` island toggles `data-revealed`; the fade+rise is CSS reading `--dur-slow` + `--easing` from `site.css`; the pre-reveal state is a no-op under reduced-motion (content visible, not hidden-awaiting-JS). The deficit-mark fill, if enabled, is a separate render-time `@keyframes` on the bar's inked segment (no scroll trigger, no JS).

**`prefers-reduced-motion: reduce` behavior (HARD).** Every motion collapses to the **fully static, fully legible page**: Hero stagger off, glyph pulse off, the three scroll-reveals present-on-load, the deficit mark at full fill, `95%` at final value, both bands present, nothing animating. The site reveal's reduced-motion branch is "render visible, do nothing" (shipped `ScrollReveal` + the `@media (prefers-reduced-motion)` `!important` collapse in `site.css`). The deficit-fill `@keyframes` must be wrapped in the same reduced-motion guard. **No exception.**

**Fires never (locked out):** parallax, scroll-jacking, scroll-spy, marquee, **count-ups (including the `95%` figure)**, per-child stagger on any beat, any reveal on the Hero beyond its own stagger, **scroll-driven JS on the deficit mark**, draw-on/flap/drift of the glyph, horizontal-scroll sections, hover-move beyond DS-native affordances.

---

## 5. Icon picks (if applicable)

**None.** The homepage uses no Lucide glyphs. `FeatureCard` `icon` slots are deliberately omitted (anti-slop guardrail, Beat 3). The only glyphs are **literal `→` HTML entities** rendered by the body font (the Hero lede hand-off `Here's why →`, the Hero + Convert booking `Or grab a time →`, the Why-us `See when to hire us, and when not to →`). The Beat-3 lever's mono ordinals (`01 · / 02 · / 03 ·`) are typographic characters in `--font-mono`, not icons (and are `aria-hidden`). "The Signal" glyph and the Why-us deficit mark are editorial `currentColor` SVG marks (the page's one illustrative vocabulary — the glyph's hairline/mono draftsman hand + the deficit bar in the same register), not Lucide affordance icons.

---

## 6. DS gaps surfaced

**None that block the composition.** The 5-beat arc composes from primitives shipping in `@poukai-inc/ui@2.17.0`: `Hero size="display" entrance="stagger"`, `StatusBadge`, `Button`, `Statement`, `Section`, `FeatureGrid`, `FeatureCard`, `Text`, `CTASection surface="recessed"`, `SiteShell`/`Wordmark` — plus site-side inline SVGs ("The Signal" glyph, the deficit mark), one site-side `--surface-section` wrapper (Why-us band), the Beat-3 lever CSS, and the shipped `ScrollReveal` island. No new token: `--surface-section`, `--hairline`, `--dur-slow`, `--easing`, `--font-mono`, `--fs-*`, and the `--space-N` scale are all published.

**Two awareness-only flags (not blockers, not for escalation now — Arian's call, §7):**

- **Recessed non-CTA `Section` (A2 §21).** The Why-us band needs a recessed surface, but `Section` exposes **no `surface` prop** (confirmed DS snapshot: only `CTASection`, `StatsSection.fill`, `NewsletterSection.surface`, and `Pull`'s host `Section.tone="section"` carry `--surface-section`). A **site-side `--surface-section` wrapper is correct for this one page.** If recessed *non-CTA* sections recur across pouk.ai pages, a `Section surface="recessed"` prop (matching `CTASection`'s API) would be the clean long-term fix — a defensible maintainer enhancement, framed from the composition need (a non-CTA editorial section that must recess onto a band). **Do not escalate now**; one page does not establish the pattern.

- **`ComparisonTable` mobile degradation (carried from the 6-beat recipe).** Still not a DS gap to escalate — `ComparisonTable` is a pricing-matrix organism with no mobile stack; the honest sentence comparison is not a pricing matrix, so the site-side table is correct regardless. If the honest-comparison pattern recurs across pages, a "responsive stacked degradation for `ComparisonTable` below `--bp-md`" enhancement would benefit any consumer — file only if a second page needs it.

The deficit mark is correctly a **site-side inline SVG** in the B.1 vocabulary, **not** a DS primitive: the DS ships no chart component by design (a single monochrome filled-vs-empty mark is editorial, not a chart organism). No DS gap there.

Per the designer agent definition, the above are *flags*, not authored DS APIs. Arian decides any routing.

---

## 7. Open questions for Arian

Tight list; defaults proposed so each closes on a nod.

- **OQ-1 — Two-band approach + merge-guard fallback: confirm.** I specify TWO recessed bands (Why us + Convert) separated by full `--space-16` return-to-`--bg` + the Convert `--hairline` top rule + distinct registers (§3). Merge-guard fallback if they still slab at visual review: **Why us keeps the band, Convert drops to `--bg`** (never the reverse). **Default: ship two bands; drop Convert to `--bg` only if the 13–14"/375px captures show a merged slab.**
- **OQ-2 — Beat 3 Disciplines lever: confirm I spent it (mono ordinals + larger names + optional column hairline), composition-only.** I judge the soft-middle risk real enough to spend the lever now rather than hold it. Fallback if review reads it as "loud": dial back to the mono numeral alone, then to the plain transparent grid, then (last) the `MetaList`/`Principle` editorial stack. **Default: ship the lever as specified.**
- **OQ-3 — Confirm the feather colophon is removed from the live Hero.** A2 §12.A2 removed it; this recipe specifies "The Signal" glyph only in the right column. If `HomeHero.tsx` still renders the `sigil` feather, its removal is the engineer's lane on build. **Default: no feather anywhere on `/`.**
- **OQ-4 — Deficit-mark polarity: ink the 95% failure (recommended) or ink the 5% success sliver against an empty track?** B.1 says "the empty space is the argument"; the figure's headline is the *failure* (95%), so I recommend the inked majority = the 95% deficit, with the thin empty remainder = the ~5% that succeeds. Alternate (ink the small success sliver) is the more literal "empty space is the argument" but buries the 95% headline. **Default: ink the 95% failure field.**
- **OQ-5 — Deficit-mark motion: static (recommended) or the optional CSS-only render-time fill?** B.1 recommends static for v1 (the spareness lands with no motion); the fill is "add only if it earns it," no JS, reduced-motion-safe, no count-up either way. **Default: static for v1.**

Content dependency (not a blocker for `Approved`; blocks `Built`): the content draft (`meta/content/drafts/pages/home.md` v3.0) is **In review**, not yet Approved — its §6 sourced-citation audit (MIT NANDA 95%) and honesty audit route to Arian. The engineer builds the Why-us mark only once `comparison.metric` is Approved-and-complete; if the citation is dropped, the mark does not render and the exhibit is the table alone (§2 Beat 4, binding).

This composition flips to `Approved` on Arian's nod to OQ-1–OQ-5 (each defaults cleanly if silent).

---

## 8. Out of scope

- **Any beat beyond the five in spec §4** — no roles/engagements/about/FAQ/stats preview, no logo wall, no `Quote`/`TestimonialBlock`, no carousel, no pricing, no newsletter, no scheduling embed, no second metric. **Specifically NOT re-adding the removed "How we work" / Method beat** (A2 §14 — the glyph is the sole pipeline statement; if the method ever needs prose, it is a `/why-ai` or future page, not a home beat).
- **A third `--surface-section` band** (the floor is exactly two; A2 §16). Recessing Hero, Statement, or What we do.
- **The deficit mark as anything other than a single monochrome filled-vs-empty form** — no dashboard, no multi-bar chart, no axes/legend, no second metric, no count-up of the figure.
- **Re-opening the Hero, "The Signal" glyph, D-11, D-12, D-13, or the contact-flow CTA contract** — all carried forward LOCKED.
- **The "The Signal" glyph geometry** (LOCKED, Hero) and **the deficit-mark SVG geometry + the optional CSS-only fill implementation** (the recipe fixes vocabulary, form, polarity, and motion grammar; the exact SVG path geometry and the `@keyframes` are the engineer's lane, within B.1).
- **Final copy for any beat** — content's lane (the deficit figure/label/caption, the 3 disciplines, the comparison cells, the Convert heading/body). This composition anchors arrangement and register, authors no copy.
- **`src/content/_schemas/home.ts` + `home.json` wiring** — removing the `howWeWork` block, adding the optional all-or-nothing `comparison.metric` object, removing the `HomeMethod` import + wiring from `index.astro` — engineer's lane (spec §6).
- **The Pouākai eagle / feather** (D-17 closed; feather removed A2 §12.A2; not reintroduced); Māori ornament; any figurative element beyond the Signal glyph + the single Why-us deficit mark.
- **Color, new tokens, dark mode, a theme toggle, parallax, or any motion beyond the §4 grammar + the optional CSS-only mark fill.**
- **`/why-ai`, `/roles`, `/principles` compositions** — each its own document.
- **DS-side proposal authoring** — §6 surfaces no blocker; the two awareness-only flags would, if Arian routes them, be authored DS-side by maintainers, not here.
