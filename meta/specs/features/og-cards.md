# Spec: OG cards (per-page + per-essay typographic share cards)

**Surfaces affected**: every marketing route's `og:image` / `twitter:image`, with priority on `/why-ai`, `/engagements`, `/writing` (index), and `/writing/[slug]` (per-essay). The shared `public/og.png` fallback stays for the rest.
**Status**: PROPOSAL — In review (Arian approval required; typographic card direction + per-page requirements defined here, asset generation is asset-production's lane)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Source assessments**: `meta/assessments/sales-content-gaps.md` §4 #4 (per-essay OG card — the funnel's shareability unit, cheapest proof-gate to clear), `meta/assessments/imagery-illustration-direction.md` §2 (per-page + per-essay typographic OG cards = the two image moves that lift conversion; both composable now, zero illustration risk).
**Companion specs**: `meta/specs/pages/writing.md` §5.1/§5.4/§6 (per-essay OG = non-negotiable shareability mechanic), `meta/specs/content/writing.json.md` (`ogImage`/`ogClaim` frontmatter), `meta/specs/features/feather-motif-policy.md` (the feather corner mark, optional).
**Standards**: R-037 (OG/Twitter meta; `og:image` must be an existing 1200×630 PNG in `public/`). **Asset prompts**: `meta/asset-production/engagements-writing-graphics-prompt.md` (Assets A/B/C, prompt-ready — direction approved here, not re-drafted).
**Masterplan reference**: §2A (`og.png` is site-owned marketing artwork, not a brand primitive; assets live in `public/`), §7.1 (`og.png` contract).

---

## 1. Purpose

When a pouk.ai page is shared into Slack, LinkedIn, X, or iMessage, the unfurl is the first — sometimes only — impression. Today every route falls back to the single shared `public/og.png`, so every share looks generic and a `/why-ai` link reads identically to a `/writing` essay. The two image moves that actually lift conversion (per both wave-1 audits) are **per-page typographic OG cards** for the marketing routes and **per-essay typographic OG cards** for `/writing/[slug]` — and both are *composable now*: pure type on a flat field, zero illustration, zero Lighthouse impact (the OG image is referenced by meta only, never fetched by the page itself). For `/writing`, the per-essay card carrying the essay's claim + a sourced stat is the funnel's shareability unit and the cheapest proof-gate the site can clear. This spec defines what each card must communicate, the typographic-restraint register, and the per-page priority — it does not write the generation prompts (already authored) and does not authorize illustration on the cards.

## 2. Audience

- **Primary**: The downstream sharer and recipient — a prospect who sees a pouk.ai link unfurl in a channel and forms a snap judgment of "considered / generic." Secondarily, the peer who screenshots a `/writing` stat card into a deck (the virality unit).
- **Secondary**: `pouk-ai-engineer` (wires per-route `og:image` and the per-essay `ogImage` frontmatter fallback chain) and whoever generates the cards via the existing asset-production prompts (Arian's lane / asset-production).

## 3. Success criteria

- **Behavior**: A shared pouk.ai link unfurls with an on-brand typographic card that names *that page's* claim — a `/why-ai` share previews the deployment-gap thesis, a `/writing` essay previews the essay's claim + a sourced stat — so the recipient clicks knowing what they'll get. A peer screenshots an essay's stat card and forwards it with their own name on it.
- **Signal**: Qualitatively — shared links look "considered" not "default"; essay stat cards appear in third-party decks/DMs (the §6.2 flywheel). When analytics arrive, referral CTR on shared links and citation frequency of essay cards are the read-outs.
- **Failure mode**: A card slides into AI-slop or illustration noise (mesh gradient, stock art, a literal eagle) — self-refuting for a brand that sells against exactly that; or a card ships at wrong dimensions / oversized, breaking the unfurl or the R-037 contract; or a per-essay card fabricates a stat the essay doesn't actually source (categorical-only / proof-integrity break). A generic-but-clean fallback is *better* than a wrong or off-brand card.

## 4. Card requirements (the direction — per surface)

All cards: **1200×630 PNG, sRGB, flat field, typographic-first** in the brand register (Geist / Instrument Serif per the type system), monochrome-or-near, no photography, no illustration except the optional feather corner mark (§4.5). Asset generation uses the existing prompts in `engagements-writing-graphics-prompt.md` (Assets A/B/C); this spec sets the *content outcome* per card, not the visual recipe.

### 4.1 `/writing/[slug]` — per-essay card (highest priority)
- The card communicates the essay's **canonical claim** (the one-sentence proposition the essay owns, from `writing.json` `claim`) and, where the essay carries one, **one sourced stat** (value + short caption) reproduced from the essay's stat blocks — the screenshot-able proof unit (writing.md §5.1).
- The stat on the card must be a **real, sourced figure that actually appears in the essay** — never a number invented for the card. Categorical-only / proof-integrity binds the card as it binds the prose (sales-gap §5; imagery §5 #10).
- Drives off the `ogImage` frontmatter; falls back to `public/og.png` if a per-essay card isn't generated yet (writing.md §9 — fallback acceptable at v1, per-essay cards a fast-follow).

### 4.2 `/why-ai` — per-page card
- Communicates the **deployment-gap thesis** in one claim line, optionally anchored by one of the page's existing cited headline stats (e.g., the 12–18% ROI figure) — a real, already-on-page sourced number, never a new one. This is the site's most shareable page (writing.md §6.0); its card should be the strongest non-essay card.

### 4.3 `/engagements` — per-page card
- Communicates the **ladder-as-relationship** framing (the four rungs as one deepening relationship, not a price list) in one claim line. **No figures** (categorical-only §7(a) binds the card too — engagements.md §6 currently reuses `og.png`; this spec upgrades it to a typographic card, still figure-free).

### 4.4 `/writing` index + remaining marketing routes
- `/writing` index: a typographic card naming the corpus as the operator's notes (Asset B).
- `/`, `/roles`, `/principles`, `/about`, `/onboarding`: per-page typographic cards are **desirable but lower priority**; the shared `public/og.png` fallback is acceptable until each is produced. Each card, when made, names that page's one-line purpose in the brand register.

### 4.5 Optional feather corner mark
- A card MAY carry the Pouākai feather as a small corner mark, governed by `features/feather-motif-policy.md` (the OG-corner use is an enumerated feather slot there). It is decoration-by-restraint, not illustration; if it ever reads as performing, drop it. The card works type-only without it.

## 5. Acceptance criteria

- [ ] Every marketing route emits the full R-037 OG/Twitter meta set (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`). Verifier: parse the eight tags per route (R-037 already requires this; this spec upgrades the *image* per surface).
- [ ] Every `og:image` references an **existing 1200×630 PNG in `public/`** (R-037). No missing/misshaped images; if a per-page/per-essay card isn't generated, the route references `public/og.png` (correct fallback, not a broken link). Verifier: fetch each `og:image` URL → 200, dimensions 1200×630.
- [ ] `/why-ai`, `/engagements`, and `/writing` (index) reference **their own typographic cards** (Assets A/B + the why-ai card), not the shared fallback. Verifier: each route's `og:image` resolves to its dedicated card file.
- [ ] `/writing/[slug]` references a **per-essay card when `ogImage` frontmatter is set**, else falls back to `public/og.png` (writing.md §9). Verifier: an essay with `ogImage` set unfurls its card; one without falls back cleanly.
- [ ] Every per-essay card's stat (where present) is a **real sourced figure that appears in the essay body** — no card-only invented numbers. Verifier (Arian): card stat matches an in-essay sourced stat.
- [ ] All cards are **typographic-first, no photography, no AI-slop, no illustration** beyond the optional policy-governed feather corner (§4.5). Verifier (Arian): cards reviewed against the imagery §5 do-not list.
- [ ] **Zero page-weight / Lighthouse impact**: OG cards are referenced by `<meta>` only and are never fetched by the page itself; they do not count against LCP/HTML-weight (R-014/R-015). Verifier: Network panel confirms the page does not request its own OG image.
- [ ] `/engagements` card carries **no figures** (categorical-only §7(a)). Verifier: card review.
- [ ] Card files live in `public/` (e.g., `public/og-why-ai.png`, `public/og-engagements.png`, `public/og-writing.png`, `public/og-writing-<slug>.png`), per masterplan §2A. Verifier: directory listing.

## 6. Open questions / dependencies

- **Generation pipeline — Arian / asset-production.** The cards are produced via the existing prompts (`engagements-writing-graphics-prompt.md` Assets A/B/C). Whether per-essay cards are **hand-generated per essay** or **build-time templated** (e.g., an SVG→PNG template populated from frontmatter `claim`/`ogClaim`/stat) is an engineer/asset call — recorded here as the v1-vs-fast-follow seam (writing.md §9). PM recommendation: ship the three per-page cards (A/B + why-ai) now (hand-generated, cheap); decide per-essay automation when the corpus grows past a handful. `<NEEDS: Arian/engineer decide per-essay card generation: manual at v1 vs. build-time template>`.
- **DS dependency — none.** OG cards are `public/` assets referenced via `BaseLayout` meta; no DS primitive involved.
- **Feather corner — gated on feather policy.** §4.5 depends on `features/feather-motif-policy.md` being approved and the feather SVG extracted.
- **Per-page card priority.** §4.4 lower-priority cards (`/`, `/roles`, `/principles`, `/about`, `/onboarding`) are a backlog fast-follow; the fallback is correct until then — not a blocker.
- **Existing standards alignment.** R-037 already mandates the meta set + 1200×630 PNG; this spec is the *content/priority* layer on top, not a new technical requirement. No standards change owed.

## 7. Out of scope

- The OG-card generation **prompts** — already authored in `engagements-writing-graphics-prompt.md`; this spec approves the *direction*, not the prompts.
- Any photography, illustration, mesh gradient, or AI-slop on a card (imagery §5 do-not list; the feather corner is the only sanctioned mark, optional).
- Invented stats or claims on a card (categorical-only / proof-integrity).
- Dynamic/personalized OG images per referrer or viewer.
- A `<meta>`-driven image the page itself fetches (would add page weight for no benefit).
- Animated or video OG content.
- Changing R-037 (this spec layers on it).
- Final card artwork production (asset-production / Arian's lane).
