# Spec: Writing

**Route**: `/writing` (index) + `/writing/[slug]` (per-essay)
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-31
**Masterplan reference**: Sections 2A (decision authority — routes, nav contents, long-form copy, SEO/JSON-LD are site-owned; shape/substance rule), 4.1 (site layout), 4.4 (long-form content as data)
**Proposal reference**: `meta/proposals/conversion-pivot-and-writing-engine.md` — §3 (sitemap, `/writing` now-promoted), §5 (alignment), §6 (the content strategy: shareability / virality / retention), §6.0 (`/why-ai` as the reference implementation), §6.4 (the ship/reject editorial line), §7(d) (ungated email line), §7(e) (launch-earlier override).
**Locked decisions consumed**: §7(d) — single ungated, hosted, zero-JS email line + RSS; §7(e) — launch earlier, do not gate on the 3-drafts/cadence trigger (a deliberate founder override of the PM/strategy recommendation e1).
**Amends (flagged, deferred to the flow-spec pass)**: `meta/specs/flows/visitor-to-conversation.md` §10 (email-capture moves from "out of scope" to "ungated only", per §7(d)); the flow's surface list + entry-source table (add `/writing` as a top-of-funnel / retention surface). See §9.

---

## 0. What this page is and why it now exists

`/writing` is the **retention + virality engine** the proposal promoted ahead of the parked `/case-studies` (§3). It is the one surface in the site that does *top-of-funnel and re-engagement* work, not direct conversion. Its job is to turn a non-converting first-time visitor ("read, trusted up, left without emailing") into a returning visitor who re-enters the funnel on the Nth visit with conviction accrued — and to manufacture the slow citation-and-referral flywheel a one-operator B2B consultancy can realistically run (§6.2: modest ceiling, 6–12 month SEO horizon, Arian's own distribution as the ignition).

The reference implementation already exists: **`/why-ai` is the most shareable asset on the site** (§6.0) — citable stats with attributed sources, a claimable URL, a one-line hook, and the `jsonLd` Article + stat-led meta infrastructure that renders the share. Every `/writing` essay inherits that template. `/writing` succeeds only if each essay reproduces it.

## 1. Purpose

`/writing` is a corpus of operator-first essays, each engineered to be **shared** (a single page worth passing on), to feed a **virality** loop (sourced essays earn citations and backlinks that compound into long-tail SEO + referral traffic), and to drive **retention** (RSS + an ungated email line + an internal-link spine that drains every essay toward the `/why-ai → /roles → mailto:` funnel). The index page (`/writing`) lists the essays; each essay lives at `/writing/[slug]` with a claim-shaped slug. The conversion the page drives is indirect and earned: an essay leads with the reader's problem and exits — quietly, at the end — to the matching role or a single `mailto:`. The offering is the *answer to the essay, never the reason for it* (§6.4).

## 2. Audience

- **Primary**: A top-of-funnel reader who found an essay via search (long-tail query), a LinkedIn/X share from Arian's network, or a peer's citation/DM. They are problem-aware or merely curious, not yet evaluating pouk.ai. They read for their own credibility; the funnel link at the foot is a quiet earned consequence.
- **Secondary**: A returning non-converting visitor — read the site before, didn't email, subscribed via RSS or the email line — re-entering through a new essay. The retention case. A meaningful share of consulting conversions originate from "not yet → came back."
- **Tertiary**: An operator/peer Arian respects who reads an essay and *cites it themselves* — the loop-closing step of §6.2's flywheel. The essay must be useful enough, and sourced well enough, that a peer would forward it with their own name on it.

## 3. Success criteria

- **Behavior**: A reader lands on an essay (usually deep, via share or search), reads it, screenshots a stat block or lifts a quotable line, and either (a) follows the foot-of-essay internal link into `/why-ai` or a `/roles#anchor`, (b) subscribes via RSS or the ungated email line to come back, or (c) closes the tab having banked trust and a citable artifact. Over time, returning readers re-enter on new essays and convert on a later visit.
- **Signal**: Qualitatively — essays get cited/linked by other writers, screenshotted into decks, forwarded in DMs; inbound emails reference an essay ("your piece on why pilots stall is exactly us"); Arian's own shares of an essay spark the initial spike. When analytics arrive: referral + organic-search traffic to `/writing/*`, RSS/email subscriber count, and internal-link click-through from essays into `/why-ai` / `/roles` are the read-outs. The governing qualitative test (§6.4): **would Arian forward this essay to a peer he respects, with his name on it, and feel it raised his standing?**
- **Failure modes**:
  - **Decay theatre (the §7(e) risk, now accepted).** The surface launches under-fed and stalls — two essays, no cadence, "looks abandoned" (next-pages §2.4). The re-open accepted this risk by launching early; the mitigation (§9) is launch with the largest possible banked-essay count and treat cadence as a tracked post-launch obligation, not a hope. This is the load-bearing failure mode of the launch-earlier override.
  - **Clickbait drift.** An essay leads with the offering instead of the reader's problem, promises a payoff it doesn't deliver, stacks CTAs, or manufactures controversy — breaking the operator-first voice that *is* pouk.ai's differentiation and corroding the `/principles` Integrity stance. Mitigated by §5's editorial bar (the §6.4 ship/reject table).
  - **Unshareable essay.** No canonical claim, no sourced/screenshot-able stat block, no quotable line, no OG card / Article JSON-LD, a `/writing/post-7`-style slug. The essay loads but earns no pass-along. Mitigated by §5's shareability mechanics.
  - **Dead-end essay.** An essay with no internal link into the funnel — a wide top-of-funnel with no drain. Mitigated by the internal-link-spine requirement (§5).
  - **Email line becomes a gate.** The approved ungated line mutates into a popup/modal/interstitial, or ships as a hydrated JS island — violating §7(d) and the zero-JS contract. Mitigated by §6's hosted-form-action requirement and §8's zero-JS ACs.

## 4. Information architecture

Two surfaces: an **index** (`/writing`) and a **per-essay template** (`/writing/[slug]`).

### 4a. Index — `/writing`

1. `SiteShell` — top nav (Writing marked current) + hairline footer. Nav placement in §9.
2. `Hero` — eyebrow ("Writing"), title, lede framing the corpus as the operator thinking in public (not a newsletter funnel, not "thought leadership" performed). Operator-first register.
3. **Essay list** — reverse-chronological list of essays, each entry: title (links to `/writing/[slug]`), a one-line claim/hook, and a date. Purely typographic; no marketing cards, no excerpt walls. The list reads as an index, not a content-marketing grid.
4. **Retention block** — the **ungated email line** (§7(d)) + a link to the **RSS feed**. A single optional line ("get new essays by email" + the feed icon/link), framed as the operator's notes. No popup, no modal, no gate. Hosted form action (Buttondown-style), zero-JS. Placement is the designer's call; PM default is once, low on the page, never an interstitial.
5. `SiteShell` footer — global chrome. The RSS feed link may also live in the footer (designer/engineer call).

### 4b. Essay — `/writing/[slug]`

Inherits the `/why-ai` shareability template (§6.0). The exact composition is the designer's, but every essay must carry these units:

1. `SiteShell` — top nav + footer.
2. **Essay hero** — `<h1>` carrying the essay's title, which states the **canonical claim the essay owns** (a defensible proposition, nameable in one sentence). A one-line hook/lede that survives being pasted into a DM with no context.
3. **Body** — the argument. Within it, **screenshot-able stat blocks** reproducing the `/why-ai` `statsRow` pattern (value + caption + attributed source), self-contained enough to survive a screenshot into a slide deck with zero context. **Sourced, citable data** with sources cleaned to canonical (the `referencesNote` discipline). At least one **quotable line** engineered to be lifted verbatim, in the `/principles` register.
4. **References** — sourced citations with canonical URLs (the `/why-ai` references + `referencesNote` pattern). Non-negotiable for any essay carrying stats.
5. **Internal-link spine (foot of essay)** — every essay ends with a contextual link into the funnel: `/why-ai` or the relevant `/roles#anchor` (and, once live, optionally `/engagements`). This is the highest-ROI retention + conversion mechanic and is **required**, not optional. The quiet, earned, single funnel link of §6.4 — not a banner, not stacked CTAs.
6. **Retention line (optional, per essay)** — the ungated email line may repeat at essay foot (designer call); same zero-JS hosted-form constraint. The RSS link is global (footer).
7. `SiteShell` footer.

**DS note (site-side only).** The essay template most likely composes inside existing `/why-ai` primitives — the `statsRow` / `Stat` block, body prose, references block, end-CTA line. No new DS primitive is anticipated. If the essay template surfaces a need the `/why-ai` primitives don't cover, it is a site-side need filed at `meta/proposals/ds-side/` by Arian's decision; PM does not author the DS API (masterplan §2A). `<NEEDS: confirm /why-ai stat/reference primitives are reusable for arbitrary essays>`.

## 5. Content requirements

The substance is drafted by `pouk-ai-content` (per essay) after this spec lands. `/writing` differs from the four static pages: it is an ongoing corpus, so §5 defines the **editorial bar every essay must clear**, not the copy of one page.

### 5.1 Shareability mechanics (per essay, from §6.1) — all required

- **A canonical claim the essay owns.** One defensible, repeatable proposition that becomes "the pouk.ai take on X." If the claim can't be named in a sentence before writing, the essay isn't ready.
- **Screenshot-able stat blocks.** Reproduce the `statsRow` pattern: value + caption + attributed source, self-contained, surviving a screenshot with zero context. The screenshot is the highest-leverage B2B-social share unit.
- **Sourced, citable data, canonical URLs.** Carry the `referencesNote` discipline (sources cleaned of click-trackers to canonical destinations). Sourced essays earn inbound links — the virality input. Unsourced essays get ignored.
- **At least one quotable line.** One or two sentences engineered to be lifted verbatim, in the `/principles` register ("the diagnosis comes before the build"). Written on purpose.
- **A clean, claim-shaped slug.** `/writing/why-ai-pilots-stall-at-integration`, never `/writing/post-7`.
- **OG card + Article JSON-LD per essay.** Reuse the `/why-ai` `jsonLd` Article shape and a stat-led meta description. Non-negotiable (§6.1).

### 5.2 The editorial line — the ship/reject test (from §6.4)

Every essay must clear this bar before it ships. This table is the editorial gate (folded in from proposal §6.4):

| On the right side of the line (ship) | Over the line (reject) |
|---|---|
| Headline states a claim the essay actually proves | Headline promises a payoff the essay doesn't deliver |
| Stats are sourced and citable | Stats vague, unsourced, or cherry-picked to alarm |
| Useful even to a reader who will never hire pouk.ai | Useless unless you book a call; content is a teaser |
| One quiet `mailto:`/role link, earned at the end | Multiple CTAs, urgency, "limited spots," popups |
| Reads like an operator thinking in public | Reads like a marketing dept performing expertise |

**Governing test:** would Arian forward this essay to a peer he respects, with his name on it, and feel it raised his standing? If yes, it ships. If it only works as clickbait, it fails — and corrodes the Integrity stance the rest of the site spends ten principles establishing. The re-open buys a funnel link at the foot of a genuinely useful essay; it does not buy a sentence Arian wouldn't say to a peer's face. Same line `/why-ai` already holds.

### 5.3 Conversion register

- **Lead with the reader's problem; exit to the matching role.** The `/why-ai` pattern: diagnose a real failure mode, then "Roles →". The offering is the answer to the essay, never the reason for it.
- **One quiet funnel link at the foot.** A single muted `mailto:` or `/roles#anchor` (or `/why-ai`) line — the internal-link spine. No banners, no mid-essay CTAs, no urgency.
- **Index + retention copy** frames the corpus as the operator's notes, not a newsletter funnel. The email line is "get new essays by email," not "subscribe to unlock."

### 5.4 Meta surfaces (per essay)

- `<title>`: essay-specific, claim-led, `… — pouk.ai`.
- `<meta name="description">`: stat-led / claim-led, ≤155 chars, brand-voice.
- OG title/description match; OG image — see §6 (per-essay OG card is the shareability unit; a generic fallback is acceptable at v1 if per-essay cards aren't yet automated — flagged in §9).
- Canonical: `https://pouk.ai/writing/[slug]`.
- Article JSON-LD per the `/why-ai` shape (`@type: Article`, headline, description, url, author/publisher Organization pouk.ai, datePublished, dateModified).

## 6. Content data shape

**Open stack decision (flagged — an engineering call, not a PM lock).** The proposal carries forward next-pages §2.4's unresolved question: do essays live as **Astro content collections**, **MDX**, or **JSON** (the pattern `why-ai.json` uses)? This is an engineering decision per the shape/substance rule (masterplan §2A — long-form copy storage is site-owned). PM recommendation and rationale below; the engineer makes the final call and records it.

**PM recommendation: Astro content collections for `/writing/[slug]`.** Rationale:

- A corpus of N essays with per-essay frontmatter (title, slug, date, description, claim, references) is exactly the use case content collections are built for — typed frontmatter, a schema enforced at build, `getCollection()` to drive the index and `getStaticPaths()` to drive `/writing/[slug]`, and RSS generation from the same collection.
- The four static pages store *one page's substance* as JSON (`why-ai.json`); an essay corpus needs *prose with structure* (headings, stat blocks, references) repeated across many files — better served by Markdown/MDX bodies with typed frontmatter than by hand-shaped JSON per essay.
- Content collections give the RSS feed (§7(d)) a single source — `@astrojs/rss` reads the collection directly.
- If the essay bodies need richer embedded structure than Markdown (e.g., the `statsRow` molecule inline), **MDX** is the variant to reach for; if Markdown + a frontmatter `statsRow` array suffices, plain Markdown collections are lighter. PM defers the Markdown-vs-MDX sub-choice to the engineer.

**Recommended collection shape (frontmatter), to be formalized in a `content/writing.md` content-data spec:**

```jsonc
// frontmatter per essay (src/content/writing/<slug>.md or .mdx)
{
  "title": "string — claim-led essay title; becomes <h1> and <title>. Required.",
  "slug": "string — claim-shaped, kebab-case. Required. Drives /writing/[slug]. No 'post-N' slugs.",
  "claim": "string — the canonical one-sentence claim the essay owns (§5.1). Required. Drives the index one-liner + meta description seed.",
  "description": "string — stat-led/claim-led meta description, ≤155 chars. Required.",
  "datePublished": "ISO date — required. Drives RSS + Article JSON-LD + index sort.",
  "dateModified": "ISO date — required. Drives Article JSON-LD.",
  "draft": "boolean — optional. Excludes from build/index/RSS while banking essays (§7(e) mitigation: bank drafts, ship when ready).",
  "ogImage": "string — optional path to a per-essay OG card; falls back to public/og.png if absent (§9).",
  "references": "array — optional; { index, title, source, url } objects mirroring why-ai.json references. Required IF the essay carries stats.",
  "funnelExit": "object — required. { text, href } for the foot-of-essay internal-link spine, e.g. { 'Roles →', '/roles#automator' } or a /why-ai link."
}
// body: Markdown/MDX prose, including statsRow blocks and the quotable line.
```

**RSS feed.** Generated from the collection (`@astrojs/rss` or equivalent), at `/writing/rss.xml` (or `/rss.xml` — engineer call). Zero-PII, zero-maintenance (§6.3). Ships day one alongside the index.

**The ungated email line (§7(d)).** A single optional line pointing at a **hosted form (Buttondown-style) via a plain `<form action="…" method="post">`** — the form posts directly to the hosted provider, no JS, no hydrated island, no popup/modal/gate. The page stays zero-JS. This is the one approved deviation from `visitor-to-conversation.md` §10's "no email-capture" rule, scoped to ungated-only. RSS-alone is the fallback if the hosted form can't meet the zero-JS bar.

## 7. User flow

- **Entry**: Deep-link to a specific `/writing/[slug]` is the dominant entry — from a LinkedIn/X share (Arian's distribution is the ignition, §6.2), a peer's DM/citation, or a long-tail search query. The index `/writing` is a secondary entry (top nav, footer RSS link, a returning subscriber). Cold first-touch on the index is rare; essays are the front door.
- **Read path (essay)**: hook/`<h1>` (claim registers) → body with stat blocks (the screenshot moment) → quotable line → references → foot-of-essay internal-link spine. A sharer screenshots a stat block or lifts the quotable line mid-read; a retention-minded reader hits the email line / RSS; a down-funnel reader follows the spine into `/why-ai` or `/roles#anchor`.
- **Exit / re-engagement / conversion**: Four valid outcomes — (a) follow the internal-link spine into the funnel (the down-funnel exit); (b) subscribe via RSS or the email line (the retention exit — "came back" later); (c) screenshot/cite/forward the essay (the virality exit — feeds new entries); (d) close with trust banked. Direct `mailto:` conversion off an essay happens but is not the primary job — `/writing` is top-of-funnel + retention, not a conversion node (proposal §5). The funnel spine carries the conversion intent downstream to `/why-ai → /roles → mailto:`.

## 8. Acceptance criteria

Structural ACs — index:

- [ ] Route renders at `/writing`.
- [ ] Index lists essays reverse-chronologically; each entry links to its `/writing/[slug]`, shows the claim one-liner and date.
- [ ] `draft: true` essays are excluded from the index, the build output, and RSS.
- [ ] The ungated email line renders once on the index (IA 4a item 4) with the RSS feed link.

Structural ACs — essay template:

- [ ] Route renders at `/writing/[slug]` for each non-draft essay via `getStaticPaths()`.
- [ ] Each essay has exactly one `<h1>` carrying the essay title / canonical claim.
- [ ] Each essay carries the shareability units present where applicable: at least one screenshot-able stat block (value + caption + attributed source) for any essay using stats; a references block with canonical URLs for any essay using stats; at least one quotable line.
- [ ] Each essay ends with the internal-link spine — a contextual link into `/why-ai` or a `/roles#anchor` (the `funnelExit` frontmatter). **No essay is a dead-end.**
- [ ] Slugs are claim-shaped (kebab-case); no `/writing/post-N`-style slugs exist.

Retention-mechanics ACs:

- [ ] An RSS feed is generated from the writing collection and is reachable (e.g., `/writing/rss.xml`), validates, and includes all non-draft essays.
- [ ] The ungated email line is a plain `<form action="…">` posting to a hosted provider — **no popup, no modal, no interstitial, no gate** (§7(d)).
- [ ] The email line ships **zero client-side JS** — no hydrated island, no JS-driven submission. (If the hosted form cannot meet zero-JS, the RSS-alone fallback ships and the email line is deferred — §9.)
- [ ] Internal-link-spine clicks route into the existing funnel (`/why-ai`, `/roles#anchor`); the links resolve and the anchors land above the fold post-scroll.

Shareability / SEO ACs (per essay):

- [ ] `<title>` is essay-specific and claim-led (`… — pouk.ai`).
- [ ] `<meta name="description">` is stat-led/claim-led, ≤155 chars.
- [ ] Article JSON-LD renders per essay, matching the `/why-ai` Article shape (headline, description, url, author/publisher Organization pouk.ai, datePublished, dateModified).
- [ ] OG title/description render per essay; a per-essay OG card renders when `ogImage` is set, else falls back to `public/og.png` (§9).
- [ ] Canonical URL is `https://pouk.ai/writing/[slug]` per essay.

Editorial ACs (Arian-verified, not engineer-checkable — recorded for the content gate):

- [ ] Each shipped essay clears the §5.2 ship/reject table (Arian-verified).
- [ ] Each shipped essay passes the governing test (§5.2 / §6.4) — Arian would forward it to a respected peer with his name on it.

Nav / cross-surface ACs:

- [ ] `SiteShell` top nav exposes `Writing` (placement per §9) and marks it current on `/writing` and `/writing/[slug]`.
- [ ] `SiteShell` footer link order matches nav; the RSS link is reachable (footer or index).
- [ ] `sitemap.xml` includes `/writing` and every non-draft `/writing/[slug]`.

Quality ACs:

- [ ] Lighthouse mobile: 100/100/100/100 on the index and on essay pages.
- [ ] **Zero client-side JS on essay pages** — including the email line (hosted `<form action>`, not a hydrated island). Motion, if any, is CSS-only.
- [ ] `prefers-reduced-motion` honored on any composition motion.
- [ ] axe-core passes with 0 violations on the index and essay pages.
- [ ] Color contrast on stat blocks, references, the email line, and the funnel-spine link meets WCAG AA.

Launch-gate AC (§7(e) override):

- [ ] At launch, the corpus contains the **largest banked-essay count Arian can reach** (not the 3-draft minimum — the gate is waived per §7(e)). The exact launch count is Arian's call; the mitigation is "as many as possible, not two."
- [ ] A cadence commitment (target ≥1 essay/month) is recorded as a tracked post-launch obligation (§9), owned by Arian — not a build AC, but the named mitigation for the accepted decay risk.

Process ACs:

- [ ] The open stack decision (§6) is recorded by the engineer before build.
- [ ] The `content/writing.md` content-data spec is authored and `Approved` before build (§9).
- [ ] `visitor-to-conversation.md` §10 + surface list are amended to admit the ungated email line and `/writing` (§9), before or alongside this page's deploy.
- [ ] This spec is at status `Approved` before engineer build begins.

## 9. Open questions / dependencies

Spec is `Approved` (2026-05-31). The decisions that gated approval are resolved below; the §7(e) override and the genuinely-open handoff items (stack pick, designer composition, content drafts, flow-spec amendment, OG cards) remain flagged.

**RESOLVED (Arian-ratified 2026-05-31):**

- **RESOLVED — Nav placement.** `/writing` does **NOT** enter the primary nav. It is reached via a **footer link + essay cross-links** (the internal-link spine and `/why-ai`-adjacent references). Rationale: `/writing` is a mid-funnel / top-of-funnel + retention surface reached predominantly by deep link (essays are the front door, §7 user flow); it is not on the direct conversion path (proposal §5), so it does not earn a primary-nav slot, and keeping it out avoids crowding the bar — which now carries `/engagements` at five items (`Why AI · Roles · Engagements · Principles · About`). The RSS feed link lives in the footer alongside. Engineer touch-points for the footer link (and to confirm `/writing` is absent from the primary nav array): `src/layouts/BaseLayout.astro:101-106` and `src/components/ShellWrapper.tsx:39-42` (cited, not edited — code is the engineer's lane).
- **RESOLVED — Email provider + zero-JS line (§7(d)).** Default provider is **Buttondown**, which exposes a zero-JS `<form action>` POST embed that satisfies the zero-JS constraint. Buttondown is the recommended default, **not a hard dependency** — any provider accepting a plain zero-JS `<form action>` POST qualifies. **RSS-alone is the documented fallback**: if Arian doesn't provision an account (or the embed proves unworkable), the email line is deferred and RSS ships alone. The binding constraint (single ungated line, hosted `<form action>`, no JS/popup/modal/gate) and the Buttondown default are formalized in `meta/specs/content/writing.json.md` §6. Account provisioning is Arian's call (see still-open below).
- **RESOLVED — `content/writing.md` content-data spec.** Authored and `Approved` at **`meta/specs/content/writing.json.md`** (2026-05-31). It formalizes the per-essay frontmatter shape (`title`, `slug`, `claim`, `description`, `datePublished`/`dateModified`, `draft` banking flag, `funnelExit`, `references[]`, `ogClaim`/`ogImage`), the `references[]` `{ index, title, source, url }` shape mirroring `why-ai.json`, the §6.4 ship/reject editorial bar as validation rules, the RSS-source rule, and the claim-shaped-slug constraint.

**STILL OPEN (engineer/designer/Arian handoff):**

- **§7(e) launch-earlier override — recorded as a deliberate founder decision against the PM/strategy recommendation.** The proposal (§6.2) and next-pages §2.4 recommended **not** launching until three drafts are banked and a confirmed ≥1/month cadence exists (option e1), because an under-fed writing surface destroys its own shareability ("decay theatre"). Arian overrode this (e2): **launch when built.** This spec honors the override and bakes in the mitigation the proposal §7(e) cascade specified: **(1)** launch with the *largest possible banked-essay count* Arian can reach (the `draft` frontmatter flag exists precisely to bank-then-release); **(2)** treat cadence as a **tracked post-launch obligation**, not a hope — a real commitment Arian owns, surfaced in the backlog as a recurring obligation, not an aspiration. The decay risk is knowingly accepted; this is the record of that acceptance.
- **Open stack decision — engineer's call (§6), STILL OPEN.** Astro content collections (PM recommendation) vs. MDX vs. JSON. The engineer records the decision before build. Markdown-vs-MDX sub-choice deferred to the engineer (driven by whether stat blocks embed inline). PM recommendation stands but does not bind (masterplan §2A — long-form storage is site-owned). The `content/writing.json.md` field contract is store-agnostic and carries over whichever store is chosen.
- **Buttondown account provisioning — Arian's call.** Buttondown is the locked recommended default (resolved above). Whether Arian provisions an account is still open; if he doesn't (or the zero-JS embed proves unworkable), the documented RSS-alone fallback ships and the email line is deferred.
- **`visitor-to-conversation.md` amendment (flagged, deferred to the flow-spec pass).** Two edits owed: (1) §10's out-of-scope list moves "email-capture forms" from rejected to **"ungated only"** per §7(d) — the single hosted line is now permitted, popups/modals/gates remain rejected; (2) the flow's surface list + entry-source table admit `/writing` as a top-of-funnel + retention surface (essays as the dominant deep-link entry; the internal-link spine as the down-funnel hand-off). PM does not edit the flow spec inside this page spec — that is the flow-spec pass. Dependency on a clean cross-spec record at deploy.
- **Per-essay OG cards.** PM recommends per-essay OG cards (the shareability unit, §6.1). If per-essay card generation isn't automated at v1, the `ogImage` fallback to `public/og.png` is acceptable for launch, with automated per-essay cards as a fast-follow. Confirm the v1 scope with Arian/engineer.
- **Designer composition.** With this spec `Approved`, `pouk-ai-designer` composes the index list treatment and the essay template (stat-block rhythm, references treatment, the foot-of-essay spine, the email-line placement) in `meta/compositions/pages/writing.md` once the first banked essay drafts land. Real essay lengths drive density. PM defers composition specifics to it.
- **Content drafts.** `pouk-ai-content` authors essays against the §5 editorial bar (next consumer of this `Approved` spec). The corpus is the bet; the §5.2 ship/reject table is the gate every essay clears. The largest-possible banked-essay set landing before launch is the §7(e) mitigation, not an approval gate on this spec.
- **`/engagements` interaction.** Once `/engagements` is live, the internal-link spine MAY also point essays at `/engagements` where the essay's argument lands on an Evaluation-stage reader. Non-blocking; noted so the `funnelExit` field is not over-constrained to `/why-ai` and `/roles` only.

## 10. Out of scope

- **Gating, popups, modals, interstitials, or any JS-driven email capture.** §7(d) approves exactly one ungated, hosted, zero-JS line. Everything more aggressive stays rejected (the surviving spirit of `visitor-to-conversation.md` §10).
- **Drip sequences, list segmentation, marketing automation, a content calendar surface.** §6.3: RSS + one optional email line + disciplined internal links is the whole retention surface. No automation.
- **Comments, reactions, social-share-button widgets, view counters, or any stateful/JS feature on essays.** Zero-JS contract. Sharing is manual (screenshot, copy-link, paste) by design — the share infrastructure is the OG card + clean slug, not a button.
- **Clickbait / engagement-bait registers** — "you won't believe," listicle padding, manufactured controversy, payoff headlines the essay doesn't deliver. The §5.2 line rejects these; they corrode the differentiation.
- **A `/case-studies`-style proof surface inside `/writing`.** `/case-studies` stays parked behind a customer-permission gate (proposal §3); `/writing` is essays, not customer stories.
- **Waiting for the 3-draft / cadence gate before launch.** §7(e) waived it. Launch early with max banked essays; cadence is a post-launch obligation (§9), not a launch gate.
- **Per-essay author bylines beyond the Organization-level JSON-LD.** The corpus is pouk.ai's; author attribution is the Organization, consistent with `/why-ai`. (Revisit only if a guest-author model is ever introduced — out of scope now.)
- **Editing `visitor-to-conversation.md` inside this spec.** That is the flow-spec pass (§9). This spec flags the amendment; it does not execute it.
- **Recommending a specific email/RSS vendor unprompted.** Provider selection is Arian's/engineer's call (agent §9); PM specifies the zero-JS constraint, not the tool.
- **Final copy and visual composition.** `pouk-ai-content` and `pouk-ai-designer` lanes respectively.
