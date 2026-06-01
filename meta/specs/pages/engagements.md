# Spec: Engagements

**Route**: `/engagements`
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-31
**Masterplan reference**: Sections 2A (decision authority — routes, nav contents, and the shape/substance rule are site-owned), 4.1 (site layout), 4.4 (long-form content as data)
**Proposal reference**: `meta/proposals/conversion-pivot-and-writing-engine.md` — §2.2 (the upsell ladder), §4 (route-vs-section path), §5 (alignment table), §7 (locked decisions (a)–(c)). This spec is the page-spec realization of that proposal's now-promoted `/engagements` route.
**Locked decisions consumed**: §7(a) — categorical pricing only (no figures); §7(b) — per-rung CTAs; §7(c) — separate `/engagements` route (not `/services`).
**Amends (deferred to a later pass — flagged, not executed here)**: `meta/specs/pages/roles.md` §10 (the pricing/packaging rejection — superseded by §7(a)) and D-08 (the "no per-card CTA" decision — reversed by §7(b)). See §9.

---

## 0. What this page is and why it now exists

The proposal re-opened the brand position on 2026-05-31. The "no pricing/packaging, single restrained `mailto:` exit" posture that `/roles` §10 and `next-pages-priorities.md` §2.6 locked is **superseded** — with a precise new boundary: **shape, not price; ladder, not menu.** `/engagements` is the surface that fills the Evaluation-stage gap the proposal named (§2.1): a visitor who matched themselves to a `/roles` archetype but doesn't know *what working together looks like — scope, sequence, commitment* currently hits a silent drop-off. This page closes that drop-off by making the **unit of work legible** without converting the site into a pricing table.

This is a genuine pivot, not a refinement. The spec's whole job is to let the new conversion mechanic exist while keeping the operator-first register the four live pages were built on. The reconciliation line, carried verbatim from the proposal: the upsell must read as "here is how serious work starts and grows," **never** "here are our packages."

## 1. Purpose

`/engagements` is the Evaluation-stage page. It presents the **engagement-shape ladder** — Discovery → Pilot → Build → Retainer — as four rungs of a single deepening relationship, each described by **what it delivers and what it de-risks**, in work terms, never commercial terms. It is orthogonal to `/roles`: `/roles` answers *what kind of work* (Builder / Automator / Educator / Creator); `/engagements` answers *how a relationship starts small and grows*. Any archetype can be entered at any rung. The conversion event is a visitor emailing in **with a rung already named** ("we'd want to start with a Pilot") — a materially better-qualified lead than the brand-voice-only funnel produced. The page reduces the activation energy of the first email (a small first step is now legible) while raising the relationship ceiling (Build and Retainer are visibly on offer).

## 2. Audience

- **Primary**: An Evaluation-stage prospect who has read `/why-ai` (agreed there is a deployment gap) and `/roles` (self-identified as, say, an Automator) and is now asking "what does working with pouk.ai actually look like — how much do I have to commit on day one, and how does it grow?" They want the *shape* of the relationship made legible before they write. They convert shortly after this page.
- **Secondary**: A returning referrer or prospect who wants a single linkable "here's how we'd work together" URL to attach to a sales reply or an intro DM — the engagement-shape equivalent of a `/roles#automator` deep link. They send the page (or a specific rung anchor) to qualify an introduction.

## 3. Success criteria

- **Behavior**: The visitor reads the ladder top to bottom, recognizes which rung matches their readiness-to-commit (most self-select Discovery or Pilot as the entry, registering Build and Retainer as where it goes), and emails `hello@pouk.ai` via a **per-rung CTA** with that rung named — or copies a rung anchor URL into an intro. A reader leaves understanding that they do not have to commit to a full Build on day one.
- **Signal**: Qualitatively — inbound emails open with "we'd want to start with a Discovery" or "interested in a Pilot on one workflow," and arrive carrying *both* an archetype (from `/roles`) and an engagement shape (from `/engagements`). Referrers send rung-anchor deep links. When analytics arrive: scroll depth across the four rungs, and which per-rung CTA draws the most inbound, are the primary read-outs.
- **Failure modes**:
  - **Reads as a pricing menu.** The page lands as "pick a tier" rather than "here is how work starts and grows." This is the brand-break the re-open was authorized to risk and must defend against — it reintroduces the "marketing menu" failure `/roles` §3 guards against, and corrodes the operator-first differentiation. Mitigated by §5's categorical-only contract and the work-terms (not commercial-terms) register, and by §5's CTA voice discipline.
  - **Rungs blur.** A reader cannot tell Discovery from Pilot, or Build from Retainer, because each rung's "delivers / de-risks" framing is too vague. Each rung must claim a distinct unit of work and a distinct implicit question (§5). Two rungs reading as the same commitment is a failure.
  - **Dollar-figure leakage.** Any figure, "starts at," range, or anchor price appears on the page — violating §7(a) and the surviving clause of roles.md §10. A single number breaks the categorical contract.
  - **CTA over-push.** The per-rung CTAs (the more menu-energy option per §7(b)) tip into urgency, scarcity, or banner-energy ("limited Q3 slots," multiple stacked buttons). The per-rung affordance is a quiet "start here," not a sales push. Voice discipline at the copy stage is load-bearing.

## 4. Information architecture

**Opinionated call: one page, four ladder rungs rendered as cards, with anchor IDs (`#discovery`, `#pilot`, `#build`, `#retainer`). Not four routes, and not a section appended to `/roles`** (§7(c) locked the separate route; the rungs are read together as a single climbing sequence, exactly the compare-and-sequence job `/roles` does for archetypes). The page mirrors the `/roles` IA discipline — hero, a ladder index, four cards in fixed order, end CTA — with one deliberate departure: **each rung carries its own CTA** (§7(b)), which `/roles` does not (D-08). That departure is the reconciliation flagged in §9.

1. `SiteShell` — top nav (Engagements marked current) + hairline footer. Nav order recommendation in §9 (PM recommends `Why AI → Roles → Engagements → Principles → About`).
2. `Hero` — eyebrow ("Engagements"), title, lede that frames the four rungs as how a single relationship starts small and deepens — explicitly *not* a price list, explicitly orthogonal to the `/roles` archetypes (any archetype, any rung).
3. **Ladder index (recommended)** — a one-line jump nav listing the four rungs in order, each linking to its anchor. Purely typographic, no DS molecule needed. Reinforces the *sequence* reading (these are rungs you climb, not options you pick from a shelf).
4. **Rung — Discovery.** Anchor `#discovery`. What it delivers + what it de-risks (categorical, no price). Per-rung CTA. Likely composes inside a `RoleCard`-style molecule (eyebrow + title + body + a "de-risks" line + CTA) — see §6 and the DS note below.
5. **Rung — Pilot.** Anchor `#pilot`. Delivers + de-risks. Per-rung CTA.
6. **Rung — Build.** Anchor `#build`. Delivers + de-risks. Per-rung CTA.
7. **Rung — Retainer.** Anchor `#retainer`. Delivers + de-risks. Per-rung CTA.
8. **End CTA** — a single closing block framing the universal contact path for a reader who is ready but hasn't picked a rung (`<a href="mailto:hello@pouk.ai">`). This does **not** replace the per-rung CTAs; it catches the undecided reader. Differentiated in wording from `/roles`'s and `/principles`'s end CTAs.
9. `SiteShell` footer — global chrome, unchanged.

**DS-recipe note (site-side need only — flag for `@poukai-inc/poukai-ui` maintainers if a new recipe is required).** The ladder rung most likely composes inside the existing `RoleCard` molecule (eyebrow + title + body), or a `Stat` / `Principle`-style primitive, **plus a CTA slot**. Two site-side needs surface: (a) the rung card needs to render *two* prose registers (a "delivers" block and a "de-risks" block) where `RoleCard` renders one (`body`); (b) the rung card needs an **active CTA slot** that `/roles` deliberately leaves empty (D-08). If `RoleCard` already exposes an optional CTA slot and tolerates a second prose block (or the "de-risks" line folds into `body`), no new DS work is needed and the page composes inside existing primitives. If it does not, this is a **site-side recipe need** to be filed at `meta/proposals/ds-side/` by Arian's decision — PM does not author the DS component API (masterplan §2A; agent §1). Marked `<NEEDS: confirm RoleCard CTA-slot + dual-prose-block tolerance, else a ds-side recipe request>`. See §9.

## 5. Content requirements

The substance is drafted by `pouk-ai-content` after this spec lands. Outcomes the copy must hit:

- **The hero lede must communicate** (a) these are four shapes a single relationship takes as it deepens, not four products to choose between; (b) the ladder is orthogonal to the `/roles` archetypes — any archetype can start at any rung; (c) the reader does not have to commit to the full build on day one. No marketing-speak filler; operator-first register throughout.
- **Categorical only — no figures (§7(a), locked).** Each rung is described by *what it delivers* and *what it de-risks*, in work terms. "Discovery" is "a short, focused diagnosis and a written read of which failure mode you're in," **not** "$5k." No dollar figures, no "starts at," no ranges, no price anchors anywhere on the page, the rung cards, the CTAs, or the meta surfaces. This is the surviving clause of roles.md §10 and the load-bearing brand guardrail.
- **Each rung must claim a distinct unit of work and a distinct implicit question** (per proposal §2.2). The four rungs and the questions they answer:
  - **Discovery** — implicit question: "Can you even diagnose my situation?" Low-commitment entry. Maps to the `/why-ai` four discovery questions and "the diagnosis comes before the build." Delivers a focused diagnosis; de-risks committing to a build before the problem is understood.
  - **Pilot** — implicit question: "Prove it on one workflow before I commit." Land-and-expand. Mirrors the `/why-ai` leaders pattern ("start with one team, measure, adjust, then expand"). Delivers a working result on one scoped workflow; de-risks a full rollout against an unproven approach.
  - **Build** — implicit question: "Ship the real system into production." Core deliverable. Maps to the `/about` posture ("engineered, shipped, and supported — systems an in-house team can run, not decks"). Delivers a production system; de-risks the deployment gap `/why-ai` diagnoses.
  - **Retainer** — implicit question: "Keep it running and evolving." The relationship that compounds. Delivers ongoing operation and iteration; de-risks a shipped system decaying or stalling after handoff.
  - If two rungs' "delivers / de-risks" framing could fit the same reader's readiness-to-commit, the copy is wrong (the §3 blur failure mode).
- **Per-rung CTA copy (§7(b), locked — and the most menu-energy move on the site).** Each rung gets its own "start here" affordance. The copy must read as a quiet invitation, not a sales push: no urgency, no scarcity ("limited slots"), no exclamation, no stacked CTAs per rung. The register is the same operator-first restraint the rest of the site holds — "this is how a Pilot starts," not "Book your Pilot now." The rung name is carried into the conversation (see §6 for the `mailto:` subject-prefill mechanic). Voice discipline here is explicitly load-bearing per §7(b)'s cascade note.
- **The ladder must read as a climb, not a shelf.** The copy and the index must reinforce sequence and deepening (Discovery → Pilot → Build → Retainer), not parallel selection. "Most relationships start at Discovery or Pilot and grow" is the right framing; "choose the package that fits" is the wrong one.
- **End CTA** must not over-engineer the contact step for the undecided reader. A single muted line + email is enough — the brand competes by being a person, not by a conversion funnel.

`Draft:` Hero lede direction (illustration only — Arian writes the final): "Work with pouk.ai starts small and grows. Discovery, Pilot, Build, Retainer — four rungs of one relationship, not four products on a shelf. Start wherever your problem sits." Direction only.

`Draft:` Per-rung CTA direction (illustration only): "Start with a Pilot →" linking to `mailto:hello@pouk.ai?subject=Pilot`. Direction only — the subject-prefill mechanic is specified in §6; final wording is Arian's.

## 6. Content data shape

Recommend the rungs are stored in **`src/content/engagements.json`**, shaped like `roles.json` — a top-level **array of four rung objects**, ordered Discovery → Pilot → Build → Retainer. Order is significant; it determines render order and encodes the climb. No top-level wrapper object; the file is the array. This mirrors the `roles.json` content-as-data discipline (masterplan §4.4) and gives the engineer a single import that maps onto four rung cards with no per-rung conditional logic. The full content-data spec is **authored and `Approved` at `meta/specs/content/engagements.json.md`** (2026-05-31); the shape below is the recommendation it formalizes — defer to that spec for the binding field contract, validation rules, and the locked `cta.href` shape.

```jsonc
[
  {
    "id": "string — kebab-case rung slug. Required. Used directly as the anchor on /engagements (e.g., 'discovery' → '#discovery'). Unique. Allowed values: 'discovery' | 'pilot' | 'build' | 'retainer'.",
    "eyebrow": "string — short label above the rung title. Required. Plain text. Recommended shape: the rung name or a 'Rung N' / sequence cue — exact convention is a content + designer call, to be locked in the engagements.json content spec.",
    "title": "string — the bare rung name. Required. Plain text. One of 'Discovery' | 'Pilot' | 'Build' | 'Retainer'. Sentence-case.",
    "delivers": "string — what this rung delivers, in work terms. Required. Plain text or lightweight markdown (bold/italic only). NO figures, NO 'starts at', NO price language (§7(a)).",
    "deRisks": "string — what this rung de-risks for the buyer. Required. Plain text. One sentence. NO figures/price language.",
    "cta": {
      "label": "string — the per-rung CTA copy (§7(b)). Operator-first register; no urgency/scarcity. Final wording Arian-approved.",
      "href": "string — mailto target with the rung pre-named. Recommended: 'mailto:hello@pouk.ai?subject=<Rung>' (see note). NO scheduling/booking URL — mailto only."
    }
  }
]
```

**`delivers` + `deRisks` as two fields** is the one shape difference from `roles.json` (which carries a single `body`). If the DS rung recipe renders one prose block, these MAY be authored as a single `body` field instead — that is a composition/DS call (§4 DS-recipe note), not a content-substance call. The categorical-only constraint binds whichever shape lands.

**The `cta` field is the deliberate divergence from `roles.json`**, which forbids a per-card `cta` (D-08). It exists here because §7(b) reverses D-08 for `/engagements`. The `engagements.json` content spec must document this divergence so the schema discipline isn't read as a regression. See §9.

**Per-rung `mailto:` subject-prefill mechanic (LOCKED, Arian-ratified 2026-05-31).** Each rung's CTA targets `mailto:hello@pouk.ai?subject=<Rung>` (e.g., `?subject=Pilot`), so the inbound email arrives with the rung named in the subject line — the engagement-shape equivalent of the `/roles` "role as opening line" mechanic. The exact-shape contract (`?subject=Discovery` / `Pilot` / `Build` / `Retainer`, pairing 1:1 with each rung `id`) is formalized in `meta/specs/content/engagements.json.md`. The `?body=` prefill and a future `/contact` handoff are out of scope at v1. No scheduling widget, no contact form — `mailto:` only, consistent with the rest of the site.

**Meta surfaces.** `<title>` function-named (`Engagements — pouk.ai`). `<meta name="description">` brand-voice, ≤155 chars, names the ladder as how the relationship starts and grows — **no figures**. OG image reuses `public/og.png` (no `/engagements`-specific card at v1). Canonical `https://pouk.ai/engagements`. JSON-LD: none required at v1 (this is a service-shape page, not an Article; if a `Service`/`OfferCatalog` schema is later considered, note that `schema.org/Offer` typically expects price — authoring it without price is fine, but the categorical-only constraint means no `price`/`priceSpecification` fields. Flagged in §9 as a deliberate omission, not an oversight).

## 7. User flow

- **Entry**: From `/roles` end-of-page next-step link (the proposal §5 adds "`/roles` → `/engagements`" as a new hand-off — a reader who matched an archetype clicks through to see how the relationship runs); from a referrer DM containing a rung anchor (`pouk.ai/engagements#pilot`); from the top nav. A cold deep-link visitor reads sequentially top-to-bottom.
- **Read path**: Hero (frames the ladder as a climb, not a menu) → scan ladder index → read Discovery and Pilot (the entry rungs most self-select) → register Build and Retainer as where it goes → reach the per-rung CTA at their chosen rung, or the end CTA if undecided.
- **Exit / conversion**: A **per-rung** `mailto:hello@pouk.ai` (with the rung pre-named via `?subject=`) is the primary exit — the new conversion mechanic. Secondary exits: the universal end CTA for an undecided-but-ready reader; back into the funnel via top nav; a return visit later via a rung anchor that converts on a subsequent email. The inbound email now carries both archetype (from `/roles`) and rung (from here) — the better-qualified lead the re-open was authorized to produce (proposal §5).

## 8. Acceptance criteria

Structural ACs:

- [ ] Route renders at `/engagements` (not `/services`, per §7(c)).
- [ ] All IA units in §4 (items 1–9) are present and ordered as specified.
- [ ] Four rung cards render in the order Discovery → Pilot → Build → Retainer.
- [ ] Each rung has an anchor ID matching its `id` slug — `#discovery`, `#pilot`, `#build`, `#retainer`.
- [ ] Ladder index (IA item 3) renders four links, each pointing to its corresponding rung anchor.
- [ ] Deep-link anchor URLs (`/engagements#pilot`, etc.) scroll to the corresponding rung card, visible above the fold post-scroll.

Categorical-pricing ACs (§7(a) — load-bearing):

- [ ] **No dollar figure, currency symbol, numeric price, "starts at", "from $", or price range appears anywhere on the page** — rung cards, CTAs, hero, end CTA, or meta surfaces. (Surviving clause of roles.md §10.)
- [ ] Each rung is described by what it *delivers* and what it *de-risks*, in work terms, not commercial terms.
- [ ] The four rungs are mutually distinguishable on the dimensions of (a) what is delivered and (b) what is de-risked / what readiness-to-commit each answers. No two rungs read as the same commitment.

Per-rung CTA ACs (§7(b) — reverses roles.md D-08 for this route):

- [ ] **Each rung card renders its own CTA** — a per-rung "start here" affordance. (This is the deliberate reversal of D-08, scoped to `/engagements` only; `/roles` retains its no-per-card-CTA rule.)
- [ ] Each per-rung CTA is a `<a href="mailto:hello@pouk.ai?subject=<Rung>">` (or the alternative mechanic Arian locks per §9), carrying the rung name into the conversation.
- [ ] No per-rung CTA carries urgency, scarcity ("limited slots"), exclamation, or stacked multiple buttons — operator-first restraint per §5.
- [ ] A single universal end CTA also renders (IA item 8) for the undecided-but-ready reader, with `<a href="mailto:hello@pouk.ai">`, wording differentiated from `/roles` and `/principles` end CTAs.

Content-data ACs:

- [ ] Page reads its rungs from `src/content/engagements.json` (recommended path) — an array of exactly 4 rung objects in fixed order.
- [ ] Content conforms to the shape in §6 (or the formalized `engagements.json` content spec once authored).
- [ ] No per-rung pricing field exists in the JSON (no `price`, `startsAt`, `range`). The `cta` field is present and is the documented intentional divergence from `roles.json`'s D-08 no-CTA rule.

Nav / cross-surface ACs:

- [ ] `SiteShell` top nav exposes the locked route order **`Why AI · Roles · Engagements · Principles · About`** (§9, resolved) with `Engagements` present in the 4th slot and marked current on `/engagements`. Engineer touch-points: `src/layouts/BaseLayout.astro:101-106`, `src/components/ShellWrapper.tsx:39-42`.
- [ ] `SiteShell` footer link order matches the nav order.
- [ ] `sitemap.xml` includes `/engagements`.
- [ ] `/roles` exposes an end-of-page next-step link to `/engagements` (the new hand-off, proposal §5). [Lands when the roles.md amendment ships — see §9; tracked here as the cross-surface dependency, not built unilaterally.]

Meta / SEO ACs:

- [ ] `<title>` renders as `Engagements — pouk.ai` (separator content-drafter's call).
- [ ] `<meta name="description">` is brand-voice, ≤155 chars, contains no figures.
- [ ] OG image reuses `public/og.png` (no `/engagements`-specific card at v1).
- [ ] Canonical URL is `https://pouk.ai/engagements`.

Quality ACs:

- [ ] Lighthouse mobile: 100/100/100/100.
- [ ] **No client-side JS shipped on `/engagements`.** The per-rung CTAs are plain `<a href="mailto:">` — no hydrated island, no JS-driven subject construction.
- [ ] `prefers-reduced-motion` honored on any composition motion (CSS-only).
- [ ] axe-core passes with 0 violations.
- [ ] Color contrast on rung cards, per-rung CTAs, and end CTA meets WCAG AA.

Process ACs:

- [ ] Spec section 5 outcomes are met by the shipped copy (Arian-verified).
- [ ] This spec is at status `Approved` before engineer build begins.
- [ ] The `engagements.json` content-data spec is authored and `Approved` before build (§9).
- [ ] The roles.md §10 + D-08 amendments are landed (or explicitly sequenced) before or alongside this page's deploy (§9).

## 9. Open questions / dependencies

Spec is `Approved` (2026-05-31). The decisions that gated approval are resolved below; genuinely-open handoff items remain flagged for the engineer/designer/Arian.

**RESOLVED (Arian-ratified 2026-05-31):**

- **RESOLVED — Nav placement / order.** `/engagements` enters the primary nav **4th**; the order is now **`Why AI · Roles · Engagements · Principles · About`** (the PM recommendation, locked). `/engagements` slots immediately after `/roles`, preserving funnel order (diagnosis → self-ID → evaluation) and keeping the trust-loop pair (`/principles`, `/about`) clustered at the right end. The alternative (placing `/engagements` after the trust-loop pair) is rejected — it divorces evaluation from self-identification. Engineer touch-points for this nav change: `src/layouts/BaseLayout.astro:101-106` and `src/components/ShellWrapper.tsx:39-42` (cited, not edited — code is the engineer's lane). The coupled `visitor-to-conversation.md` flow-spec revision (admit `/engagements` as a surface + the Evaluation stage + the `/roles → /engagements` hand-off) remains owed as the flow-spec pass — see still-open items below.
- **RESOLVED — Per-rung CTA target mechanic.** Locked to **`mailto:hello@pouk.ai?subject=<Rung>`** (e.g. `?subject=Pilot`), so inbound arrives rung-named — the engagement-shape equivalent of the `/roles` role-as-opening-line mechanic. Zero-JS, no infra. The exact-shape contract (`?subject=Discovery` / `Pilot` / `Build` / `Retainer`, pairing 1:1 with each rung `id`) is formalized in **`meta/specs/content/engagements.json.md`** §4–§6. The `?body=` prefill and a future `/contact`-query-param handoff are out of scope at v1.
- **RESOLVED — `engagements.json` content-data spec.** Authored and `Approved` at **`meta/specs/content/engagements.json.md`** (2026-05-31). It formalizes the §6 shape: the array-length-4 / fixed-order rule, the categorical-only validation, the `delivers`/`deRisks` split, the `cta` divergence from `roles.json` D-08, and the locked `mailto:…?subject=<Rung>` href contract.

**STILL OPEN (engineer/designer/Arian handoff):**

- **roles.md §10 + D-08 reconciliation (deferred to the amendments pass — flagged here, not executed in this spec).** §7(a) supersedes roles.md §10's blanket pricing/packaging rejection but **retains** its dollar-figure rejection; §7(b) **reverses** roles.md D-08's "no per-card CTA" — *scoped to `/engagements`*. Two edits are owed and must be sequenced before or alongside this page's deploy: (1) roles.md §10 rewritten (not deleted) to draw the new boundary and cross-reference this spec + the proposal; (2) roles.md D-08 annotated to record that the no-per-card-CTA rule still holds for `/roles` but is reversed for `/engagements` per §7(b). PM does not edit roles.md inside this spec — that is the amendments pass. **Dependency, not a blocker on authoring this page**, but a blocker on a clean cross-spec record at deploy.
- **`engagements.json` content-data spec.** A `meta/specs/content/engagements.json.md` (sibling to `roles.json.md`) should formalize the §6 shape — field constraints, the categorical-only validation, the `cta` divergence record, and the array-length-4 / fixed-order rules. Owed before engineer build. PM authors next.
- **Nav placement / order — site-owned, Arian's call (masterplan §2A).** PM recommendation: **`Why AI → Roles → Engagements → Principles → About`** — slots `/engagements` fourth, immediately after `/roles`, preserving funnel order (diagnosis → self-ID → evaluation) and keeping the trust-loop pair (`/principles`, `/about`) clustered at the right end. This perturbs the locked `Why AI → Roles → Principles → About` order from `visitor-to-conversation.md` §6 by inserting one slot mid-list. Alternative considered: place `/engagements` after the trust-loop pair (`… Principles → About → Engagements`) — rejected, it divorces evaluation from self-identification. The `visitor-to-conversation.md` flow spec needs a revision to admit `/engagements` as a sixth surface + the Evaluation stage + the new `/roles → /engagements` hand-off; flagged as a coupled flow-spec edit.
- **DS rung recipe — site-side need; file a `ds-side/` request only if confirmed missing. STILL OPEN.** Per §4: the rung card likely composes inside the existing `RoleCard` (or `Stat`/`Principle`) primitive **plus an active CTA slot** and possibly a second prose block (`delivers` + `deRisks`). Engineer/DS to confirm whether `RoleCard` already exposes an optional CTA slot (recall roles.md §9 already raised the inverse question — whether `RoleCard` *requires* a CTA) and tolerates dual prose. If yes: no DS work, composes inside existing primitives. If no: Arian decides whether to file a `meta/proposals/ds-side/` recipe request — PM does not author the DS API (masterplan §2A; agent §1). `<NEEDS: confirm RoleCard CTA-slot + dual-prose tolerance>`.
- **Designer composition.** With this spec `Approved`, `pouk-ai-designer` composes the ladder into a recipe in `meta/compositions/pages/engagements.md` once the content draft lands — including how the four rungs render the *climb* (is there a visual ascent/connection between rungs, or four discrete cards?), where the per-rung CTA sits within each card, and the rung-index treatment. PM defers all composition specifics to it.
- **Content draft.** `pouk-ai-content` authors against §5 outcomes (next consumer of this `Approved` spec). The categorical-only discipline and the per-rung CTA voice restraint are the load-bearing copy bets; Arian verifies the drafts against §5 before they land in `engagements.json`.
- **`Service`/`Offer` JSON-LD deliberately omitted at v1.** Standard `schema.org/Offer` expects a `price`; authoring engagement schema without price fields is the deliberate consequence of §7(a). Recorded as an intentional omission, not an oversight — revisit only if commercial-intent SEO demands structured data and Arian re-opens the figures question.

## 10. Out of scope

- **Any dollar figure, "starts at," price range, or numeric anchor** (§7(a)). The page is categorical-only; pricing disclosure is a separate, un-taken decision (proposal §7(a) options a2/a3 were rejected).
- **A fifth rung.** Four rungs are fixed per the proposal ladder (§2.2). A new rung requires a proposal update and a re-spec.
- **Per-rung sub-routes** (`/engagements/pilot`, etc.). Anchor-based for v1; promotion to sub-routes is a future call, gated on a rung growing substantial unique content.
- **A booking / scheduling integration per rung.** Per-rung `mailto:` only; no calendar embed, no Calendly. The brand competes by being a person.
- **A contact form or intro questionnaire on `/engagements`.** `mailto:` only, consistent with the rest of the site.
- **Folding the ladder into `/roles` as a section** (proposal §7(c) option c2). The separate route is locked; this spec does not re-open that.
- **Editing roles.md §10 / D-08 inside this spec.** That is the amendments pass (§9). This spec flags the reconciliation; it does not execute it.
- **Authoring the DS rung-card component API.** Site-side need only; DS API is `@poukai-inc/poukai-ui` maintainers' domain (masterplan §2A).
- **Final copy and visual composition.** `pouk-ai-content` and `pouk-ai-designer` lanes respectively.
