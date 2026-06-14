# Site-wide Final-State Strategy — pouk.ai

**Status**: **Approved (2026-06-14)** — Arian approved the full push and locked the product decisions (see "Locked decisions" below). Phase 0 of the rollout (§8) is complete. The downstream specs are now unblocked for content + designer + engineer.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved; Phase 0 complete)
**Masterplan reference**: Sections 1 (scope), 2A (decision authority — routes and nav are site-owned), 4.1 (site layout), 4.4 (content as data), 6 (cutover)
**Supersedes**: the `meta/backlog.md` "IA restructure — 2026-05-20 planning record" 8-page plan (see §7) — now retired per Arian's approval. Augments — does not override — the masterplan; the route-inventory and `mailto:`-only deltas flagged in §7.2 are ratified by this approval (R-007 amendment text owed from the engineer).

**Locked decisions (Arian, 2026-06-14):**
1. **Scope** — full push; all phases proceed.
2. **FS-CF-1** — `cal.pouk.ai` booking sits BESIDE `mailto:` as a SECONDARY affordance; `mailto:` stays primary/low-friction; never replace, never force a calendar.
3. **FS-OB-1** — `/onboarding` pricing COMPRESSED — "transparent SOW, milestone-based payments", no numerals/day-rates (matches `/engagements` categorical-only).
4. **FS-SCH-1** — `/scheduling` stays the off-funnel OAuth scope-justification / product-explainer page; `features/contact-flow.md` owns surfacing the booking action into the funnel.

Decision IDs are recorded in each downstream spec's "Decisions log" header line and §9 RESOLVED block.

---

## 0. How to read this document

The site is out of beta. It is no longer "the four-route holding-page replacement" the masterplan scoped — it has grown to **twelve routes** across three jobs (a marketing funnel, a writing engine, and a product's legal surface). This document defines the **final shape** Arian is approving toward: which pages stay, which change, which are cut, what is added, and in what order it ships.

This is a strategy, not a menu. Where I see the site underperforming the conversion goal, I say so and propose the fix. The single biggest finding is in §1.3: **the site now has a live scheduling product (`cal.pouk.ai`) and a `/scheduling` page, but the marketing funnel still ends at `mailto:` and never offers the booking path.** Closing that gap is the highest-leverage move available and it threads through most of this document.

Read order: §1 (purpose + the conversion model), §2 (page-by-page verdict table — the skimmable core), §3 (new pages), §4 (final IA / nav), §5 (the legal-surface governance gap), §6 (where the site underperforms), §7 (masterplan + stale-plan reconciliation), §8 (rollout sequence).

---

## 1. Strategic purpose, out of beta

### 1.1 Who the site is for

Unchanged from the brand context and grounded in `flows/visitor-to-conversation.md`: **founders, operators, and engineering leaders at growing companies who need a technical partner that ships.** The site exists to convert that person from a cold or referred visitor into a conversation with Arian. The differentiation is constant across every page: pouk.ai competes by *shipping*, not by deck-building. Every surface must make it harder to walk away thinking "another AI advisor."

Out of beta, one audience expands: the site now also serves **`cal.pouk.ai` users** (anyone Arian schedules with) via the OAuth-required legal surface (`/privacy`, `/terms`, `/scheduling`). That is a distinct, non-marketing audience — see §5. The marketing funnel and the product-legal surface share a domain and a brand, but they are two jobs and must be governed as two jobs.

### 1.2 The one conversion goal

**A qualified conversation with Arian.** This is the canonical conversion event from `flows/visitor-to-conversation.md` §5, and it does not change. What changes out of beta is the *mechanism* by which a visitor starts that conversation. Today the funnel offers exactly one mechanism — `mailto:hello@pouk.ai`. The site now owns a second, higher-intent mechanism it does not yet use in the funnel: **booking a time at `cal.pouk.ai`.** The final-state funnel offers both, with `mailto:` as the low-commitment path and `cal.pouk.ai` as the high-commitment path. See §3 (`features/contact-flow`) and §6.1.

Conversion quality, not just volume, is the read-out (per the flow spec): an inbound that arrives carrying an archetype (`/roles`), an engagement rung (`/engagements`), and now optionally a booked slot (`cal.pouk.ai`) is materially better-qualified than a brand-voice-only email.

### 1.3 The visitor journey, end to end (final state)

This extends `flows/visitor-to-conversation.md` (Approved v1.2) — it does not reinvent it. The canonical five-stage funnel (first touch → diagnosis → self-identification → evaluation → trust loop → conversion) stands. Final state adds three things the flow spec already anticipates or now needs:

1. **A top-of-funnel + retention loop** via `/writing` (already shipped, flow-spec amendment owed per `pages/writing.md` §9). Essays are the dominant deep-link front door; the internal-link spine drains every essay back into `/why-ai → /roles → /engagements → convert`.
2. **An onboarding-reassurance stage** (proposed `/onboarding`, §3) that answers the prospect's last pre-conversion question: *"if I say yes, what do the first six weeks actually look like?"* It sits late in the funnel, after `/engagements`, as the final de-risking read before the email or the booking.
3. **A second conversion mechanism** (`cal.pouk.ai` booking) surfaced at the funnel's conversion points alongside `mailto:`, governed by a new `features/contact-flow.md` spec (§3).

End-to-end final-state path (canonical, cold prospect):

```
/ (doorway)
  → /why-ai (diagnosis: there is an expensive problem)
  → /roles (self-ID: which shape of help is mine)
  → /engagements (evaluation: how the relationship starts small and grows)
  → /onboarding (reassurance: what saying yes actually looks like)        ← NEW
  → /principles OR /about (trust loop: how we work / who we are)
  → CONVERT: mailto:hello@pouk.ai  OR  book at cal.pouk.ai                ← booking is NEW to the funnel

Parallel front door:  /writing/[essay] → internal-link spine → re-enters above

Off-funnel surface:   /privacy · /terms · /scheduling  (cal.pouk.ai users, not prospects — §5)
```

The two trust-loop pages keep their OR semantics (one or the other, not both). `/writing` keeps its retention/virality job, not a direct-conversion job. `/404` keeps its salvage job. The legal trio stays off the funnel entirely.

---

## 2. Page-by-page verdict

Every shipped route gets a verdict: **KEEP AS-IS** (no spec change), **REVISE** (an amendment is owed; delta-spec written this pass), or **CUT**. Twelve routes. No route is cut — the site has no dead weight, but several routes have governance or conversion gaps that REVISE closes.

| Route | Verdict | One-line rationale |
|---|---|---|
| `/` | **REVISE** | Doorway is right, but it must surface the second conversion mechanism (booking) once `contact-flow` lands, and its illustration amendment is still `paused` (not failed). Light delta. |
| `/why-ai` | **KEEP AS-IS** | The most shareable, best-built page on the site (`pages/writing.md` §6.0 names it the reference implementation). Funnel role unchanged. Only the existing flow-spec amendment (add `/engagements` hand-off) touches it, and that's a flow-spec edit, not a page edit. |
| `/roles` | **KEEP AS-IS** | Self-identification page is sound; the `/roles → /engagements` hand-off already shipped (#116). D-08 (no per-card CTA) holds. No further change. |
| `/engagements` | **KEEP AS-IS** | Shipped 2026-05-31 against an Approved spec; it *is* the evaluation stage. It already absorbed what the stale `/solutions` plan wanted (§7). No change. |
| `/principles` | **KEEP AS-IS** | Trust closer, sound. No change beyond the global contact-mechanism question, which `contact-flow` governs centrally, not per-page. |
| `/about` | **KEEP AS-IS** | v2.1 is the register-lead surface; recently and heavily specced. No strategic gap. The `mailto:`-only CTA stays `mailto:`-only on `/about` (trust-loop pages should not hard-sell a booking). |
| `/writing` (+`[slug]`) | **REVISE** | Strong engine, but two governance debts are owed and now overdue: the `visitor-to-conversation.md` amendment (admit `/writing` + the ungated email line) and a content-data spec status reconciliation. The page itself is built; the REVISE is to close the flow-spec + cross-ref gaps named in `pages/writing.md` §9. |
| `/onboarding` | **NEW (proposed)** | The funnel's missing reassurance stage — see §3. Specced in-backlog (NPP-1) but never given a real spec. |
| `/privacy` | **REVISE** | Shipped for OAuth verification with **no PM spec** — a governance hole. It must be legitimized by a spec so it's defensible to Google's reviewers and to future edits. See §5. |
| `/terms` | **REVISE** | Same as `/privacy`: shipped, no spec, governance hole. See §5. |
| `/scheduling` | **REVISE** | Same governance hole, plus a *strategic* gap: it's the `cal.pouk.ai` explainer and the most natural home for the booking conversion path, but it currently sits off-funnel and unreferenced. Spec it, and decide its funnel relationship (§5 + §6.1). |
| `/404` | **KEEP AS-IS** | Salvage page, recently specced and Approved. Its body link list should add `/engagements` once nav settles, but that's a one-line content edit tracked in its own spec, not a strategic REVISE. |

**Summary:** 5 KEEP, 6 REVISE, 1 NEW, 0 CUT. The REVISE cluster splits cleanly: `/` and `/writing` are *light deltas* (surface a mechanism / close a flow-spec debt); `/privacy`, `/terms`, `/scheduling` are *governance legitimization* (write the spec that should have preceded the build); `/scheduling` additionally carries a *strategic* decision (its funnel role).

---

## 3. New pages proposed

I propose exactly **one** net-new route and **one** cross-page feature spec. I am deliberately not proposing `/solutions`, `/enterprise`, `/work`, or `/careers` (the stale 2026-05-20 plan) — §7 explains why each fails to earn its place now.

### 3.1 `/onboarding` — the reassurance stage (NEW route, P1)

- **Purpose**: Answer the prospect's last pre-conversion question — *"if I hire pouk.ai, what do the first six weeks actually look like?"* Reframes a four-phase consulting-engagement framework (Discovery → Scoping → Build → Handoff) as pouk.ai's actual operating model, in prospect-facing voice. Source content and founder brief are in `meta/backlog.md` NPP-1 (2026-05-19).
- **Where it sits**: Late funnel, after `/engagements` (evaluation) and before/beside the trust loop. A prospect who has agreed there's a problem, found their archetype, and understood the engagement shapes now de-risks the *operational* unknown ("will this be chaotic?") before they write. It is the operational sibling of `/engagements`: `/engagements` answers *how the relationship is shaped commercially*; `/onboarding` answers *how the work actually runs*.
- **Why it earns its place**: It converts the strongest objection a serious prospect holds at the bottom of the funnel — fear of a messy, unscoped, unaccountable engagement — into evidence of method (named phases, named owners, a day-30 check-in). It reinforces the core differentiation (pouk.ai *ships*, with structure) on the exact surface where a prospect is deciding to commit. It reuses the `/why-ai` `FailureMode`-style numbered-section pattern, so the DS cost is near zero. It is the only new page that directly advances the conversion goal without waiting on assets (unlike `/work`) or splitting an audience (unlike `/careers`).
- **Priority**: **P1.** Highest-value net-new page. Ships after the legal-surface governance debt (P0) is cleared, because a defensible site precedes an expanded one.
- **Product decisions — RESOLVED (Arian, 2026-06-14):** pricing → **COMPRESS** to "transparent SOW, milestone-based payments", no numerals (FS-OB-1 — matches `/engagements` categorical-only; naming day-rates invites tier-shopping); nav placement → **footer-utility tier + funnel cross-links, NOT primary nav** (FS-OB-2 — late-funnel deep-read, nav stays at five). Route count 12→13 (R-007 amendment owed from the engineer).

### 3.2 `features/contact-flow.md` — the second conversion mechanism (NEW feature spec, P1)

- **Surfaces affected**: `/` Hero CTA, `/why-ai` end CTA, `/roles` end CTA, `/engagements` per-rung + end CTAs, `/onboarding` end CTA, `SiteShell` footer, `/scheduling`. Not `/principles` or `/about` (trust-loop pages stay `mailto:`-only — a booking CTA on a character page over-sells).
- **Purpose**: Define, once and centrally, how the site offers its **two** conversion mechanisms — `mailto:hello@pouk.ai` (low-commitment) and `cal.pouk.ai` booking (high-commitment) — so each funnel page doesn't re-decide it ad hoc. This is the spec the original `flows/visitor-to-conversation.md` §9 always reserved ("if `mailto:` is later replaced or augmented … a separate `features/contact-flow.md` spec governs that change"). Out of beta, with `cal.pouk.ai` live, that day has arrived.
- **Why it earns its place**: The single largest conversion underperformance on the site (§6.1) is that a live, owned, high-intent booking product exists and the funnel never points to it. A prospect at the bottom of the funnel who is *ready to talk* is currently handed only an email composer — higher friction and lower intent-capture than a booking link. Centralizing the rule prevents the failure mode of six pages each inventing their own booking-button treatment and breaking the brand's restraint.
- **Priority**: **P1**, ships with or just after `/onboarding`. It is a feature spec (no new route), so it is pure-content + light-engineering, not a DS-blocked build.
- **Open product decisions for the spec** (flagged): does booking *replace* or *sit beside* `mailto:` at each conversion point (PM lean: **beside, with `mailto:` primary and booking secondary** — preserves the low-friction path while adding the high-intent one; never force a calendar on someone not ready); does the `cal.pouk.ai` link carry context (archetype/rung) the way `mailto:?subject=` does (PM lean: defer to v2 — Cal.com event-type routing is an infra question, not a launch blocker); zero-JS posture (the link is a plain `<a href="https://cal.pouk.ai">` — no embed, no widget, no island — per R-009).

**No other new routes.** The site is twelve routes growing to thirteen. Restraint is the brand; route sprawl is the anti-brand. Any further route (`/work`, `/case-studies`, `/careers`) requires its own backlog re-open with the gating condition met (§7).

---

## 4. Final information architecture / nav

Grounded in `flows/visitor-to-conversation.md` §6 (Approved nav order) and the `/engagements` spec's resolved nav decision (`Why AI · Roles · Engagements · Principles · About`).

### 4.1 Primary nav (`SiteShell` top nav)

**`Why AI · Roles · Engagements · Principles · About`** — five items, unchanged from the `/engagements` resolution. Funnel pages cluster left (diagnosis → self-ID → evaluation); trust-loop pages cluster right (`Principles`, `About`). The wordmark links to `/` (no "Home" item). This is correct and final; I am not proposing to add `/onboarding`, `/writing`, or any legal page to the primary nav — that would crowd the bar and dilute the funnel signal.

### 4.2 Footer (`SiteShell` footer)

Two tiers, because the footer now serves two jobs (funnel mirror + utility surface):

- **Funnel mirror** (matches primary nav order): `Why AI · Roles · Engagements · Principles · About`.
- **Utility row** (new, lower-weight): `Writing · Onboarding · Scheduling · Privacy · Terms` + the RSS link. This is where the non-nav surfaces live — the deep-read funnel pages (`/writing`, `/onboarding`), the product explainer (`/scheduling`), and the legal pages (`/privacy`, `/terms`). The legal links in the footer also satisfy a Google OAuth-verification expectation (privacy policy reachable from the site root).

The exact footer composition (one row vs. two, visual separation of tiers) is the designer's call; this spec defines *what is reachable from the footer and in what grouping*, not the visual treatment.

### 4.3 Cross-page hand-off links (the funnel's mechanics)

The hand-offs from `flows/visitor-to-conversation.md` §5 stand, plus the final-state additions:

| From | To | Status |
|---|---|---|
| `/` | `/why-ai` | Live (lede hand-off) |
| `/why-ai` | `/roles` | Live |
| `/roles` | `/engagements` | Live (#116) |
| `/engagements` | `/onboarding` | **NEW** — "here's what saying yes looks like →" (ships with `/onboarding`) |
| `/onboarding` | trust loop / convert | **NEW** — ends at the dual contact mechanism |
| `/writing/[slug]` | `/why-ai` or `/roles#anchor` (or `/engagements`) | Live (internal-link spine) |
| Every conversion point | `mailto:` **and** `cal.pouk.ai` | **NEW** — governed by `features/contact-flow.md` |
| `/scheduling` | `cal.pouk.ai` | Live (it's the explainer→app link) |
| Any | `/` | `SiteShell` wordmark |

Deliberately **not** wired (negative hand-offs, preserved): `/principles ↔ /about` (parallel trust-loop, OR semantics); legal pages → funnel (the legal trio is off-funnel — it links only to `cal.pouk.ai` and between the legal pages); a booking CTA on `/principles` or `/about` (trust pages don't hard-sell).

---

## 5. The legal-surface governance gap (P0)

`/privacy`, `/terms`, and `/scheduling` shipped in #122 for Google OAuth verification of the `cal.pouk.ai` scheduling app. They are live, content-complete, and correctly carry trailing-slash canonicals and the security-header stack. **But none has a PM spec.** That is a governance hole with three consequences:

1. **Defensibility.** Google's OAuth verification reviewers read the privacy policy and the scope-justification page (`/scheduling`). If a future edit drifts the privacy copy out of alignment with the actual scopes `cal.pouk.ai` requests, verification can be revoked. A spec pins the contract: *what the page must assert, and why, so an edit can't silently break OAuth standing.*
2. **Lane clarity.** These pages straddle the masterplan's "marketing site" scope. They are the *product's* legal surface hosted on the marketing domain. Without a spec saying so, a future agent could "improve" them with funnel CTAs or brand-register experiments that are actively harmful on a legal page. The spec draws the boundary: **off-funnel, factual, restraint-maximal, scope-accurate.**
3. **Standards coverage.** R-007 (canonical routes) was written for five routes; these three (plus `/engagements`, `/writing`, `/404`) ship outside it. The legal-page specs are the place to record that R-007 needs a route-inventory amendment (flagged in §7).

I am writing **three governance specs this pass** (`pages/privacy.md`, `pages/terms.md`, `pages/scheduling.md`) as REVISE-class delta documents that legitimize what shipped and set the maintenance contract. They are P0 — not because the pages are broken (they work), but because an *unspecced legal surface tied to a live OAuth grant* is the highest-risk ungoverned thing on the site. A defensible site precedes an expanded one.

The one *strategic* (not just governance) question lives on `/scheduling`: it is the natural home of the booking conversion path, yet it sits off-funnel today. The `pages/scheduling.md` spec resolves this by keeping `/scheduling` primarily a product explainer / scope-justification page (its OAuth job is load-bearing and must not be diluted), while `features/contact-flow.md` owns surfacing the *booking action* into the funnel directly (not by routing prospects through the legal-flavored `/scheduling` page). Two jobs, two specs.

---

## 6. Where the site underperforms the conversion goal (and the fix)

Per the brief: be decisive about underperformance. Three findings, in priority order.

### 6.1 The funnel ignores the live booking product (highest leverage)

**Finding.** `cal.pouk.ai` is live, owned, self-hosted, and high-intent — a prospect who books has converted harder than one who emails. The marketing funnel never references it. Every conversion point hands the visitor a `mailto:` and nothing else. This is a conversion mechanism the site already paid to build and does not use.

**Fix.** `features/contact-flow.md` (§3.2) surfaces `cal.pouk.ai` as the high-commitment path beside `mailto:` at every funnel conversion point except the trust-loop pages. P1.

### 6.2 The funnel has no operational-reassurance stage

**Finding.** The funnel proves the problem (`/why-ai`), the fit (`/roles`), and the commercial shape (`/engagements`), but never the *operational* one. A serious B2B buyer's last objection is "will this be a chaotic, unaccountable engagement?" — and the site is silent on it. That silence is where late-funnel prospects stall.

**Fix.** `/onboarding` (§3.1) answers it with method-as-evidence. P1.

### 6.3 Two flow-spec debts are overdue and leave the funnel record incoherent

**Finding.** `pages/writing.md` §9 and `pages/engagements.md` §9 both flag owed amendments to `flows/visitor-to-conversation.md` (admit `/engagements` as a surface + the Evaluation stage was partially done in v1.2; admit `/writing` + the ungated email line is *not* done). Until the flow spec reflects the shipped reality, the canonical funnel record contradicts the live site — which is exactly the "two agents reconcile against the spec" failure the workflow warns about.

**Fix.** A flow-spec pass (v1.3) admitting `/writing`, `/onboarding`, the dual contact mechanism, and the final IA. Tracked in the rollout (§8) and the backlog. P1, low effort, pure-PM.

---

## 7. Reconciliation: the stale 8-page plan + masterplan deltas

### 7.1 Retiring the 2026-05-20 IA restructure

The `meta/backlog.md` "IA restructure — 2026-05-20 planning record" proposed an 8-page IA (`/solutions`, `/enterprise`, `/work`, `/careers` replacing/augmenting the funnel). **I recommend retiring it.** It was authored before the 2026-05-31 conversion pivot and the live site has diverged from it. Page by page:

- **`/solutions` (was: replace `/roles`)** — **Retired.** `/engagements` already shipped as the "what working together looks like" surface, and `/roles` already works as self-identification. The "capabilities vs. taxonomy" reframe `/solutions` chased is moot; `/roles` + `/engagements` together cover it. Renaming a live, working, deep-linked route (`/roles#automator` anchors are in referrer DMs) for a framing nicety is a regression, not an improvement.
- **`/enterprise` (was: 7 production pillars, buyer-objection page)** — **Deferred, not retired.** The production-grade objection is real, but it overlaps heavily with `/onboarding` (method-as-evidence) and `/why-ai` (the integration/governance failure modes). PM position: fold the strongest production-pillar content into `/onboarding`'s Build/Handoff phases rather than spawn a route. Re-open as a standalone route only if `/onboarding` proves insufficient to carry the objection. Not in final-state scope this pass.
- **`/work` (was: case studies)** — **Deferred (build-blocked, correctly).** Needs 2+ real, permissioned case studies to exist. Same gate as the masterplan's `/case-studies` deferral (§7.3) and `meta/specs/backlog.md`. Re-open when there's a case to show *and* founder permission. Not in final-state scope.
- **`/careers` (was: hiring + Roles reframed for candidates)** — **Deferred.** Splitting the funnel audience (buyers) with a talent audience (candidates) is a real future need, but it is not on the conversion path and pouk.ai's `/about` v2.1 deliberately does not declare team size — a careers page collides with that positioning until the company's hiring story is decided. Re-open when hiring is an active, public motion. Not in final-state scope.

Net: the conversion-pivot work (`/engagements`, `/writing`) already delivered the funnel improvement the 8-page plan was reaching for, by a better route. Final state adds `/onboarding` + `contact-flow` instead.

### 7.2 Masterplan deltas to flag for Arian

Per the masterplan-is-canonical rule, I surface — not quietly diverge — these gaps:

- **Masterplan §1 / §4.1 scope says "four pages" (`/`, `/why-ai`, `/roles`, `/principles`).** The live site has twelve. The masterplan's four-route framing is historically true and operationally stale. **Recommend**: a masterplan note acknowledging the route inventory has grown via approved specs (`/about`, `/engagements`, `/writing`, `/404`) and OAuth necessity (`/privacy`, `/terms`, `/scheduling`), with `meta/specs/` as the live route registry. Arian ratifies.
- **R-007 (technical-requirements) enumerates five canonical routes.** It already absorbed `/about` and `/404`; it does not list `/engagements`, `/writing`, `/privacy`, `/terms`, `/scheduling`. **Recommend**: an R-007 amendment to the current twelve-route inventory (engineer's lane to author the requirement text; PM flags the need here and in each new page spec's §9). The CI-coverage gap this caused was already caught and fixed (CR-3, 2026-06-13) — the requirement text just needs to catch up to the gates.
- **`mailto:`-only contact posture** appears across the masterplan, the flow spec, and every page spec's out-of-scope. `features/contact-flow.md` narrows it (adds `cal.pouk.ai` booking). This is a deliberate, flagged divergence requiring Arian's sign-off — it is the one place this strategy changes a standing decision rather than extending it.

---

## 8. Rollout sequence

Ordered phases with dependencies and per-phase lane attribution (which agent does what). Grouped by page/feature. The governing principle: **legitimize before you expand, and ship pure-PM/content/engineering work before DS-blocked work.**

### Phase 0 — Approve this strategy (gate)

- **Lane**: Arian. Approve §2 verdicts, §3 new pages, §4 IA, §5 governance approach, §7 retirement of the 8-page plan, and the §7.2 masterplan deltas. Nothing downstream starts until this is `Approved`.
- **Dependency**: none. This is the keystone.

### Phase 1 — Legal-surface governance (P0; no new build, just specs)

Legitimize what already shipped. Highest risk, lowest effort.

- **P1.1 — `pages/privacy.md`** (PM, written this pass — `Draft`). Pins the privacy contract to the actual `cal.pouk.ai` scopes; sets the OAuth-alignment maintenance rule.
- **P1.2 — `pages/terms.md`** (PM, written this pass — `Draft`). Pins the terms scope and the off-funnel boundary.
- **P1.3 — `pages/scheduling.md`** (PM, written this pass — `Draft`). Pins the scope-justification contract; defers the booking-action surfacing to `contact-flow`.
- **Lanes after approval**: these are spec-only legitimizations of live pages — **no content draft, no composition, no engineering build** needed unless an Arian review of the live copy surfaces a correction. If it does, that correction routes content → engineer as a normal edit.
- **Dependencies**: Phase 0. No DS dependency. No content/designer dependency unless copy corrections surface.

### Phase 2 — Flow-spec reconciliation (P1; pure-PM)

- **P2.1 — `flows/visitor-to-conversation.md` v1.3** (PM). Admit `/writing` (+ ungated email line), `/onboarding`, the dual contact mechanism, the final IA (§4), and the utility-footer tier. Closes the §6.3 debts.
- **Dependencies**: Phase 0. Best landed before Phase 3 so the new pages build against a coherent flow record. No DS, content, or engineering dependency.

### Phase 3 — The second conversion mechanism (P1; content + light engineering)

- **P3.1 — `features/contact-flow.md`** (PM, written this pass — `Draft`). Defines the dual-mechanism contract.
- **P3.2 — Content** (`pouk-ai-content`): CTA copy variants for the booking path beside `mailto:` at each affected conversion point. Light lift — a handful of lines.
- **P3.3 — Composition** (`pouk-ai-designer`): how a secondary booking affordance sits beside the primary `mailto:` CTA without breaking restraint. Likely reuses the existing `<Button>` shape (secondary variant) — confirm no DS gap.
- **P3.4 — Build** (`pouk-ai-engineer`): plain `<a href="https://cal.pouk.ai">` at the governed conversion points; zero-JS; CI route coverage already exists for the affected pages.
- **Dependencies**: Phase 0; Phase 2 recommended-before. DS: likely none (existing `<Button>` secondary). If a new button variant is needed, that's a DS proposal Arian files (not PM).

### Phase 4 — `/onboarding` (P1; the full lane)

- **P4.1 — `pages/onboarding.md`** (PM). Author against NPP-1 source + founder brief; resolve the pricing-section and nav-placement decisions (§3.1). `Draft` → Arian → `Approved`.
- **P4.2 — `content/onboarding.json.md`** (PM). Content-data spec for the four-phase structure.
- **P4.3 — Content** (`pouk-ai-content`): the prospect-facing four-phase prose, brand-voice, against the §5 outcomes.
- **P4.4 — Composition** (`pouk-ai-designer`): four numbered phase sections (likely the `/why-ai` `FailureMode`-register pattern), end CTA via `contact-flow`. Files a DS proposal only if the phase pattern needs a new molecule (PM expects reuse).
- **P4.5 — Build** (`pouk-ai-engineer`): `src/pages/onboarding.astro` + content JSON + schema; add to nav-utility/footer; add to all four CI route lists; R-007 amendment.
- **Dependencies**: Phase 0; `contact-flow` (Phase 3) for the end CTA; recommended after the flow-spec pass (Phase 2). DS: probably none (reuses `/why-ai` primitives) — confirm at composition.

### Phase 5 — `/` and `/writing` light revisions (P2)

- **P5.1 — `/` REVISE**: surface the booking mechanism via `contact-flow` (folds into Phase 3); the illustration amendment stays `paused` per the existing home-amendment doc until Arian re-opens the asset. No new spec needed beyond the contact-flow touch.
- **P5.2 — `/writing` REVISE**: closes with the Phase 2 flow-spec amendment + the content-data spec status reconciliation; the page build is done. Largely a documentation/cross-ref close-out.
- **Dependencies**: Phases 2 and 3.

### Phase 6 — Deferred / gated (not in this push)

- `/enterprise` — re-open only if `/onboarding` under-carries the production objection.
- `/work` — gated on 2+ permissioned case studies.
- `/careers` — gated on an active public hiring motion + an `/about`-positioning reconciliation.
- Per-essay OG cards, Buttondown provisioning, booking-context routing (`cal.pouk.ai` event-type per archetype) — all post-launch fast-follows, owner Arian/engineer.

### Rollout summary by lane

| Phase | What | Needs content? | Needs designer? | Pure-eng? | DS-blocked? |
|---|---|---|---|---|---|
| 0 | Approve strategy | no | no | no | no |
| 1 | Legal-surface specs (P0) | only if copy correction | no | no | no |
| 2 | Flow-spec v1.3 (P1) | no | no | no | no |
| 3 | `contact-flow` (P1) | yes (CTA lines) | yes (secondary affordance) | mostly | no (likely) |
| 4 | `/onboarding` (P1) | yes (full page) | yes (phase sections) | yes | no (likely) |
| 5 | `/` + `/writing` revise (P2) | minimal | minimal | yes | no |
| 6 | Deferred/gated | — | — | — | varies |

Critical path: **Phase 0 → Phase 1 (P0 governance) → Phase 2 (flow record) → Phase 3 (booking) → Phase 4 (`/onboarding`) → Phase 5.** Phases 3 and 4 can overlap once Phase 2 lands, since `/onboarding`'s end CTA consumes `contact-flow`.

---

## 9. What this strategy deliberately does not do

- It does not add `/solutions`, `/enterprise`, `/work`, or `/careers` — §7.
- It does not change `/why-ai`, `/roles`, `/engagements`, `/about`, or `/principles` page content — they're sound.
- It does not redefine the conversion goal — a qualified conversation with Arian stands; only the mechanisms expand.
- It does not author DS component APIs, final copy, or visual composition — those are the DS / content / designer lanes.
- It does not touch the zero-JS, Lighthouse, a11y, or security standards — every new surface inherits the existing R-NNN bar.
- It does not pre-decide the flagged product questions (onboarding pricing display, booking-beside-vs-replace, scheduling funnel role) — those land in the per-page/feature specs for Arian to resolve.
```
