# Spec Backlog

This directory holds product specs authored by `pouk-ai-pm` for the pouk.ai marketing site: `pages/` for routes, `features/` for cross-page capabilities, `content/` for JSON data schemas, and `flows/` for visitor journeys.

This file is the running, prioritized list of every spec authored under `meta/specs/`. Distinct from the parent `meta/backlog.md`, which tracks launch blockers, DNS, and approved verbatim copy — **this file tracks specs only**: what's drafted, what's approved, what's blocked, what's next. The agent updates it whenever a spec is added, moved in priority, or moves through `Draft → In review → Approved → Built → Live`.

> **2026-05-13 — Decisions D-01 through D-13 resolved.** All spec-side decisions tracked in `meta/decisions/launch-readiness.md` were closed on 2026-05-13. Every spec listed below has had its `Status` field flipped from `Draft` to `Approved`. The remaining dependencies are now framed as **Dependencies blocking `Built`**, primarily DS molecule availability in `@poukai-inc/ui@0.1.0` and a handful of Arian-owned final copy lifts. See each spec's "Decisions log" line for the IDs that touched it.

---

## Status legend

- **Draft** — written by PM, not yet reviewed by Arian.
- **In review** — under Arian's review; open questions in section 9 of the spec.
- **Approved** — Arian has signed off; engineer can build.
- **Built** — engineer has shipped to a preview deploy.
- **Live** — running under the canonical domain.

---

## Active specs (priority order)

### Page specs — the four routes

1. **`pages/why-ai.md`** — `Approved`
   - Why this priority: Top-of-funnel thesis page. The biggest content lift; the page that frames why anyone hires pouk.ai. Per the funnel order (Why AI → Roles → Principles → contact) this is the most leveraged page to ship first.
   - Decisions applied: D-01 (citation style), D-02 (sticky desktop TOC), D-03 (dataset-vintage footer), D-04 (discovery-questions callout), D-05 (stats extraction).
   - Dependencies blocking `Built`: DS `FailureMode` molecule + `Stat` atom shipped in `@poukai-inc/ui@0.1.0`; `content/failure-modes.json.md` spec also `Approved` (same content lifecycle — now satisfied); Arian-owned rewrite of the 500%/61% sentences post-extraction; final copy on end CTA.

2. **`pages/roles.md`** — `Approved`
   - Why this priority: Self-identification page. Once a prospect agrees with `/why-ai`, they need to match their problem to a service shape. Single page with anchor links recommended (`#builder`, `#automator`, etc.) over four sub-routes — defended in the spec.
   - Decisions applied: D-06 (Lucide picks: hammer / workflow / graduation-cap / clapperboard), D-07 (eyebrow "The <Role>"; title bare role name), D-08 (universal end CTA only).
   - Dependencies blocking `Built`: DS `RoleCard` molecule shipped (with no required CTA slot); `content/roles.json.md` spec also `Approved` — now satisfied; verbatim copy lift from `meta/backlog.md`.

3. **`pages/principles.md`** — `Approved`
   - Why this priority: Trust closer. Once a prospect has self-identified, they triangulate whether pouk.ai is the operator they want in the room. Single long-scroll page with anchor IDs recommended over per-principle routes — defended in the spec.
   - Decisions applied: D-09 (page heading "Principles"), D-10 (Instrument Serif italic bookends; sans for the ten principles).
   - Dependencies blocking `Built`: DS `Principle` molecule shipped; bookend typography mapping accessible from site CSS; `content/principles.json.md` spec also `Approved` — now satisfied; verbatim copy lift from `meta/backlog.md`.

4. **`pages/home.md`** — `Approved`
   - Why this priority: The post-cutover homepage. Defines the doorway behavior — preserves the holding page's restraint while adding the `/why-ai` lede hand-off. Ships last because it depends on the other three pages existing for its links to mean anything.
   - Decisions applied: D-11 (integrated lede-extension link sentence), D-12 (status-line copy verbatim from current `index.html` at cutover).
   - Dependencies blocking `Built`: DS `Hero` molecule + `SiteShell` organism shipped; `SiteShell` current-route handling on `/`; visual-parity gate per masterplan section 6.1 (screenshot diff vs. current `index.html`, including byte-identical status-line text); brand assets (`og.png`, `apple-touch-icon.png`, favicon, robots.txt, sitemap.xml).

### Content data specs

5. **`content/roles.json.md`** — `Approved`
   - Why this priority: Required for `pages/roles.md` to ship. Schema is small and stable.
   - Decisions applied: D-06 (`icon` allowed values locked to four kebab-case Lucide identifiers), D-07 (`eyebrow` shape locked to "The <Role>"; `title` is the bare role name), D-08 (no `cta` field permitted).
   - Dependencies blocking `Built`: DS `RoleCard.icon` slot resolution pattern confirmed with engineer; verbatim copy lift from `meta/backlog.md`.

6. **`content/principles.json.md`** — `Approved`
   - Why this priority: Required for `pages/principles.md` to ship. Schema includes the editorial bookends as top-level fields alongside the principles array — opinionated call defended in the spec.
   - Decisions applied: D-09 / D-10 confirm `intro` and `conclusion` as top-level fields and the `numeral` field for the ten principles — schema unchanged.
   - Dependencies blocking `Built`: DS `Principle` molecule shipped; verbatim copy lift from `meta/backlog.md`.

7. **`content/failure-modes.json.md`** — `Approved`
   - Why this priority: Required for `pages/why-ai.md` to ship. Schema includes a per-failure-mode `stats` array (default `[]`) so the 500% and 61% figures render as `Stat` atoms rather than inline bold — opinionated call defended in the spec.
   - Decisions applied: D-05 (typed `stats` array locked; 500% extracted from Failure Mode 2 body, 61% extracted from Failure Mode 5 body).
   - Dependencies blocking `Built`: DS `FailureMode` molecule + `Stat` atom shipped; Arian-approved rewrite of the body sentences from which 500% and 61% were extracted; Arian-picked canonical attribution strings for `stats[].source`.

### Flow specs

8. **`flows/visitor-to-conversation.md`** — `Approved`
   - Why this priority: Connective tissue across the four page specs. Locks the nav order (Why AI → Roles → Principles), the inter-page hand-offs, and the conversion definition. Without it, each page spec is independently sensible but the funnel is theoretical.
   - Decisions applied: D-13 (nav order: Why AI · Roles · Principles, with cascade to sitemap and footer).
   - Dependencies blocking `Built`: DS `SiteShell` shipped; engineer wires sitemap and footer ordering consistent with nav.

---

### Final-state push specs (added 2026-06-14 — APPROVED, Arian-ratified)

Authored against [`final-state-strategy.md`](final-state-strategy.md), **approved by Arian 2026-06-14** (full push; product decisions FS-CF-1, FS-OB-1, FS-SCH-1 locked). All specs below are now `Approved` and unblocked for content / designer / engineer. See `final-state-strategy.md` §8 for the rollout and §2 for the page-by-page verdict.

9. **`final-state-strategy.md`** — **`Approved`** (2026-06-14)
   - The keystone. Site-wide final-state strategy: per-page verdicts, new pages, final IA, rollout, retirement of the stale 2026-05-20 8-page plan. Phase 0 complete; downstream unblocked.

10. **`pages/privacy.md`** — **`Approved`** (governance contract) · **P0**
    - Legitimizes the live OAuth privacy page (#122). Pins scope-alignment to `cal.pouk.ai`'s actual scopes so an edit can't break Google verification. Spec-only; no rebuild gated on it.
    - Live obligation: scope-alignment verified against the consent screen (Arian); maintenance rule (scope change ⇒ same-commit page update). R-007 route-inventory amendment owed (engineer).

11. **`pages/terms.md`** — **`Approved`** (governance contract) · **P0**
    - Legitimizes the live OAuth terms page (#122). Fences app-terms off from the consulting SOW. Spec-only.
    - Live obligation: app-terms-vs-engagement-terms boundary held (Arian). R-007 amendment owed.

12. **`pages/scheduling.md`** — **`Approved`** · **P0**
    - Legitimizes the `cal.pouk.ai` explainer + OAuth scope-justification page (#122); funnel-role RESOLVED (FS-SCH-1 — off-funnel explainer; `contact-flow` owns the booking action, not `/scheduling`).
    - Live obligation: scope-justification verified against the consent screen (Arian). Coupled with `features/contact-flow.md`.

13. **`features/contact-flow.md`** — **`Approved`** (decisions locked) · **P1**
    - NEW feature spec. Adds `cal.pouk.ai` booking as the high-intent path BESIDE `mailto:` (secondary, never replace/force — FS-CF-1) at governed conversion points (not trust-loop, not legal). Closes the biggest conversion underperformance. Decisions FS-CF-1/2/3 RESOLVED.
    - Ready for: content (CTA copy variants) + designer (secondary affordance). Reuses existing `<Button>` (likely no DS gap). Cascade owed: narrow `mailto:`-only out-of-scope lines in `pages/{home,why-ai,roles,engagements}.md` (PM amendment pass).

14. **`pages/onboarding.md`** — **`Approved`** (decisions locked) · **P1**
    - NEW route (12→13). The funnel's operational-reassurance stage — four-phase model (Discovery → Scoping → Build → Handoff), prospect-facing. Decisions FS-OB-1 (pricing compressed, no figures) + FS-OB-2 (footer-tier, not primary nav) RESOLVED.
    - Ready for: content + designer + engineer. Depends on `features/contact-flow.md` (end CTA) + `content/onboarding.json.md` (below, `Approved`). R-007 amendment; reuses `/why-ai` `FailureMode` register (likely no DS gap).

15. **`flows/visitor-to-conversation.md`** — **`Approved` (v1.3)** (2026-06-14) · **P1**
    - v1.3 amendment (not rewrite): admits `/onboarding` (Stage 4½), the `/writing` retention/virality loop, the dual contact mechanism (`mailto:` + `cal.pouk.ai`), and the final IA (five-item nav + two-tier footer). Closes the overdue debts from `pages/writing.md` §9 and `pages/engagements.md` §9.

16. **`content/onboarding.json.md`** — **`Approved`** (2026-06-14) · **P1**
    - Four-phase content-data spec (Discovery → Scoping → Build → Handoff). Categorical-only (FS-OB-1 — no figures). Defines the array shape + per-phase content-requirement OUTCOMES; prose is the content agent's lane. Required before `/onboarding` engineer build.

**Owed next from PM (flagged, not yet authored — non-blocking for content/designer to start):**
- **Page out-of-scope cascade** — narrow the `mailto:`-only lines in `pages/{home,why-ai,roles,engagements}.md` to admit the booking secondary (per `contact-flow.md` §9). A small amendment pass; does not block the content/designer lanes on `contact-flow`.
- **R-007 route-inventory amendment** — engineer's lane to author the requirement text (12→13 routes); PM flags it across the new specs.

---

### Raise-the-ceiling Phase 1 specs (added 2026-06-14 — PROPOSAL, awaiting Arian per-page approval)

Authored against the wave-1 assessments (`meta/assessments/ds-capability-vs-usage.md`, `sales-content-gaps.md`, `creative-exploration.md`, `imagery-illustration-direction.md`). Arian approved the **full Phase-1 batch in principle** (all pure-site, no real-world evidence) + the feather-as-motif resolution; each spec below is a PROPOSAL pending **per-page sign-off**. **Three items reverse ratified decisions** and need explicit re-ratification (flagged ⚠ below). All are pure-site — **no DS gap surfaced** (every primitive named ships in `@poukai-inc/ui@2.17.0`). Owners: PM authored; content drafts copy/answers; designer composes; engineer builds.

17. **`pages/home-amendment-raise-the-ceiling.md`** — **PROPOSAL / In review** · **P1** · ⚠ reverses ratified decision
    - Display doorway (H-A): `Hero size="intimate"` → `size="display"` + proportional CTA revert. Thesis conviction stays in the lede (IA lock forbids a `Statement` section on `/`). Feather colophon optional/deferred.
    - **⚠ Re-ratify**: RR-1 (reverse 2026-05-17 `size="intimate"` density decision / D-17 path / poukai-ui#39 — footer drops ~80px, presence-over-fold); RR-2 (reverse coupled CTA step-down poukai-ui#42). Recommendation: reverse both. Supersedes `home-amendment-illustration-and-density.md` §4.2/§4.4 for `/` (annotation owed).
    - Ready for: designer (composition revision) on Arian sign-off. No content/DS dependency.

18. **`pages/why-ai-amendment-raise-the-ceiling.md`** — **PROPOSAL / In review** · **P1**
    - Depth pass (W-A): hero stagger + one recessed `StatsSection fill` band + `FailureModeList` refactor + thesis `Statement` pivot + **vs-alternatives section** (sales-gap #2, resolved: fold into `/why-ai`, NOT a new route). W-B (two bands) held as fast-follow.
    - No ratified reversal (page has no composition doc — one is owed). Statement copy = promotion of existing tail line (Arian confirms). vs-alternatives copy = content's lane (honest trade-off, categorical, no dunking, no metrics).
    - Ready for: content (Statement line + vs-alternatives) + designer (new composition doc).

19. **`pages/engagements-amendment-raise-the-ceiling.md`** — **PROPOSAL / In review** · **P1** · ⚠ reverses ratified decision
    - Climb-arrives (E-A): hero stagger + summit `Statement` + outcome-language pass (→ #21) + FAQSection (→ #22). E-B (ceiling stat) rejected. No band (categorical-only / no-comparison-table holds).
    - **⚠ Re-ratify**: RR-3 (reverse engagements.md §7 Q4 "hero static"). Recommendation: stagger on (CSS-only, revertible).
    - Ready for: content (Statement + outcome copy) + designer (composition revision; `compositions/pages/engagements.md` → Pending revision on Approved).

20. **`features/outcome-language-pass.md`** — **PROPOSAL / In review** · **P2**
    - Copy-direction pass on `/roles` (role `body`/`hiredBy`) + `/engagements` (rung `delivers`/`deRisks`): process → felt-outcome register. **Hard guardrail: NO invented metrics** (categorical only). No schema/IA change.
    - Ready for: content drafts; Arian approves against the no-metrics guardrail. No DS/designer dependency.

21. **`features/faq-section.md`** — **PROPOSAL / In review** · **P2**
    - Zero-JS native `<details>` objection-handling on `/engagements` + `/onboarding`. Question sets DECIDED (4 per page — see spec §4). Answers = content's lane (declarative, categorical, short, no CTA).
    - Ready for: content (answers) + designer (placement). Engineer picks the FAQ register — native `<details>` is the sensible default; a hydrated disclosure is permitted (D-25, 2026-06-16 JS revocation) provided it stays keyboard-operable and axe-clean (a11y + reduced-motion remain binding). [Earlier "zero-JS native `<details>` (else plain semantic)" mandate superseded by D-25; Lighthouse/HTML-weight advisory.]

22. **`features/og-cards.md`** — **PROPOSAL / In review** · **P2**
    - Per-page + per-essay typographic OG cards (sales-gap #4 / writing.md §6.1). Priority: `/writing/[slug]` (claim + real sourced stat) > `/why-ai` > `/engagements` (figure-free) > `/writing` index > remaining routes (fallback OK). Typographic-only, no illustration except optional feather corner. Zero page-weight.
    - Layers on R-037 (no standards change). Generation = asset-production prompts (Assets A/B/C, already authored). Open: per-essay manual-vs-templated generation (engineer/Arian).

23. **`features/feather-motif-policy.md`** — **PROPOSAL / In review** · **P1** (central imagery decision — gates the others' feather use)
    - Three-tier ruling: Tier 1 feather = canonical Pouākai motif (max one deliberate per page beyond the Wordmark; inline `currentColor` SVG; static; `aria-hidden`); Tier 2 eagle = optional deferred **unblocked** anchor (demoted from D-17 deferral, not retired); Tier 3 banned (literal eagle as recurring decoration; ALL Māori surface ornament, ever; second figurative vocabulary).
    - **Central decision** — `/` colophon, OG feather corner, `/404`, editorial-divider feather all follow from it. Feather SVG extraction = engineer. No DS gap (isotype geometry already in Wordmark).

**Statement thesis beats (deliverable #2) — where they live:**
- `/why-ai` — `Statement` pivot beat, spec'd in #18 §4.4 (between failure modes and leaders section).
- `/engagements` — summit `Statement` beat, spec'd in #19 §4.2 (between Retainer rung and end CTA).
- `/` — **no `Statement` section** (IA lock); conviction carried by the lede at display scale, ruled in #17 §4.2.
(No separate "statement-beats" spec — the once-per-page placement + conviction-outcome is recorded in each page amendment.)

**Owed next from PM (flagged, non-blocking):**
- Annotate `home-amendment-illustration-and-density.md` §4.2/§4.4 as superseded-for-`/` once #17 is Approved.
- On `/why-ai` amendment Approved: ensure `compositions/pages/why-ai.md` is authored (designer) — page currently has no composition doc.

---

## Not yet specced (future work surfaced this pass)

Items that surfaced while writing the active specs but are out of launch scope. Listed here so they don't get lost.

- ~~**`features/contact-flow.md`**~~ — **Authored + Approved 2026-06-14** (see item 13 above). The "if/when `mailto:` is augmented" trigger fired: `cal.pouk.ai` booking is now the secondary mechanism beside `mailto:`. No longer a future item.
- **`features/site-shell-nav.md`** — only if the `SiteShell`'s consumption pattern (nav contents, social links in footer, current-route highlighting) becomes complex enough to need its own spec. For now, covered in `pages/home.md` and `flows/visitor-to-conversation.md`.
- **`features/seo-meta.md`** — per-page `<title>`, `<meta description>`, OG image, JSON-LD definitions consolidated. For launch, each page spec covers its own meta in acceptance criteria (sections 8). Promote to a feature spec if the engineer asks for it.
- **`flows/post-launch-iteration.md`** — once analytics arrive, the rules for revising the funnel based on measured behavior. Defer until there's at least one quarter of inbound data.
- **`flows/referrer-loop.md`** — how a referrer (past client, friend, investor) sends an intro to a prospect. Currently covered implicitly via deep-link anchors (`/roles#automator`, `/principles#integrity`). Promote to a spec if the referral motion becomes a primary growth channel.
- **`pages/case-studies.md`** — premature; pouk.ai is too early. Re-open when there's a real case to show *and* founder approval per masterplan section 7.3.
- **Brand-asset readiness spec** — `og.png`, `apple-touch-icon.png`, favicon, robots.txt, sitemap.xml — currently tracked in the parent `meta/backlog.md` as launch blockers, not here. If they slip, lift to a launch-cutover spec.

---

## Spec lifecycle hygiene

- A spec is **Draft** the moment it's authored.
- A spec moves to **In review** when Arian has eyes on it, regardless of how many open questions remain.
- A spec reaches **Approved** only when every dependency in its section 9 is resolved and Arian has set the status field manually.
- A spec is **Built** when the engineer has shipped it to a Vercel preview and the acceptance-criteria checklist is fully green.
- A spec is **Live** when the canonical domain `pouk.ai` serves it.

This file is updated by the PM whenever a new spec is authored or a status field changes. The engineer reads it as the table of contents for `meta/specs/`.
