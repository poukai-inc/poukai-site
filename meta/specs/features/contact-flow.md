# Spec: Contact flow — the dual conversion mechanism

**Surfaces affected**: `/` (Hero CTA), `/why-ai` (end CTA), `/roles` (universal end CTA), `/engagements` (per-rung + end CTAs), `/onboarding` (end CTA), `SiteShell` footer. **Not** `/principles`, `/about` (trust-loop pages stay `mailto:`-only — see §10). **Not** the legal trio (`/privacy`, `/terms`, `/scheduling` are off-funnel).
**Status**: Approved — decisions locked, ready for content + designer (2026-06-14). Arian approved the full final-state push and locked the three product decisions this spec carried (see §9 RESOLVED). Remaining items are downstream build dependencies, not open questions. NEW feature spec — the spec `flows/visitor-to-conversation.md` §9 always reserved ("if `mailto:` is later replaced or augmented … a separate `features/contact-flow.md` spec governs that change").
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved; §9 decisions flipped OPEN → RESOLVED)
**Decisions log**: FS-CF-1 (booking sits BESIDE `mailto:` as a secondary affordance; `mailto:` stays primary/low-friction; never replace, never force a calendar), FS-CF-2 (booking-context routing deferred to v2), FS-CF-3 (the `mailto:`-only standing decision is narrowed to a dual mechanism) — all resolved via Arian's approval of `meta/specs/final-state-strategy.md` on 2026-06-14.
**Masterplan reference**: Sections 2A (decision authority — nav/CTA contents are site-owned; shape/substance), 4.3 (client-JS posture — the booking link is a plain `<a>`, zero-JS). **Masterplan delta**: narrows the standing `mailto:`-only contact posture to a dual mechanism — a deliberate, flagged divergence requiring Arian's sign-off (`final-state-strategy.md` §7.2).
**Strategy reference**: `meta/specs/final-state-strategy.md` §1.2 (conversion goal), §3.2 (feature rationale), §6.1 (the unused booking path — highest-leverage underperformance).
**Coupled spec**: `meta/specs/pages/scheduling.md` (the `/scheduling` explainer; `contact-flow` owns the booking *action in the funnel*, `/scheduling` owns the explainer/OAuth job).

---

## 1. Purpose

`contact-flow` defines, **once and centrally**, how the site offers its two conversion mechanisms so that each funnel page doesn't re-decide it ad hoc:

1. **`mailto:hello@pouk.ai`** — the low-commitment path. Always present. The existing, proven mechanism. Carries context where possible (`?subject=` per `/engagements` rungs, archetype as opening line per `/roles`).
2. **`cal.pouk.ai` booking** — the high-commitment path. NEW to the funnel. A prospect who is ready to talk books a real slot against Arian's real availability, converting harder than one who composes an email.

The problem this solves: the site spent effort building and verifying a live, owned, self-hosted scheduling product (`cal.pouk.ai`), and the marketing funnel never points to it — every conversion point hands the visitor only an email composer (`final-state-strategy.md` §6.1). Centralizing the rule (a) surfaces the booking path at the right points, (b) prevents six pages each inventing their own booking-button treatment and breaking the brand's restraint, and (c) keeps the trust-loop pages free of a hard-sell.

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who wires the dual-CTA pattern consistently at every governed conversion point, and `pouk-ai-designer`, who composes the secondary booking affordance beside the primary `mailto:` without breaking restraint.
- **Secondary**: Arian, who uses this spec as the single source of truth for "how does someone start a conversation from any page," and `pouk-ai-content`, who writes the booking-path CTA copy variants.

## 3. Success criteria

- **Behavior**: A ready-to-talk prospect at any governed conversion point sees both paths and picks the one matching their readiness — email for "let me write a few lines," booking for "let's just talk." Inbound conversations increasingly arrive as booked slots (higher intent) alongside emails. A not-yet-ready prospect is never *forced* toward a calendar — `mailto:` stays the primary, low-friction default.
- **Signal**: Qualitatively — booked `cal.pouk.ai` slots start appearing in Arian's calendar attributable to site traffic; inbound mix shifts toward higher-intent conversations; no prospect reports the booking ask felt pushy. When analytics arrive: booking-link click-through vs. `mailto:` click-through per conversion point, and which pages drive bookings.
- **Failure modes**:
  - **Booking over-push.** The booking CTA outweighs `mailto:`, or appears on trust-loop pages, or carries urgency/scarcity — turning the operator-first brand into a funnel that demands a calendar commitment. Mitigated by §5's primary/secondary discipline and the trust-loop exclusion.
  - **Inconsistent treatment.** Each page styles its own booking affordance differently, breaking the restraint and the brand's consistency. Mitigated by §4's single governed pattern.
  - **Friction increase.** Adding a second CTA clutters the conversion moment and *reduces* conversion. Mitigated by §5 (one primary, one quiet secondary — never a wall of buttons).
  - **Dead/wrong booking link.** The `cal.pouk.ai` link 404s or points at a stale event type. Mitigated by §8 AC (link resolves) and §9 (infra dependency on `cal.pouk.ai`).

## 4. Where each mechanism appears (the governed pattern)

| Surface | `mailto:` | `cal.pouk.ai` booking | Notes |
|---|---|---|---|
| `/` Hero CTA | **Primary** | Secondary (quiet) | Doorway; the booking secondary must not break the holding-page restraint. Stays subordinate to the title (per the home illustration amendment's "title is primary anchor" lock). |
| `/why-ai` end CTA | **Primary** | Secondary | After the discovery-questions block. |
| `/roles` end CTA | **Primary** (role as opening line) | Secondary | Single universal end CTA per D-08; booking is the secondary affordance in that same block — D-08's "no per-card CTA" still holds (no booking link on individual `RoleCard`s). |
| `/engagements` per-rung CTA | **Primary** (`?subject=<Rung>`) | — | Per-rung CTAs stay `mailto:?subject=<Rung>` only (the rung-naming mechanic is the point). Booking appears only at the `/engagements` *end* CTA, not per-rung, to avoid CTA-stacking (the §3 over-push failure the `/engagements` spec already guards). |
| `/engagements` end CTA | **Primary** | Secondary | The undecided-but-ready reader gets both. |
| `/onboarding` end CTA | **Primary** | Secondary | Late-funnel; the booking path is most valuable here (highest readiness). |
| `SiteShell` footer | `mailto:` link | booking link (utility tier) | Both reachable globally from the footer; lowest-weight treatment. |
| `/principles`, `/about` | **`mailto:` only** | **excluded** | Trust-loop pages do not hard-sell a booking. A calendar ask on a character page over-sells. |
| `/privacy`, `/terms`, `/scheduling` | — | — | Off-funnel. `/scheduling` links to `cal.pouk.ai` as the *app*, not as a funnel booking CTA. |

## 5. Treatment discipline (shape constraints — substance the designer composes)

- **One primary, one secondary.** `mailto:` is the primary affordance at every governed point (the proven, low-friction default). `cal.pouk.ai` booking is a quiet secondary — present, clearly subordinate, never a peer-weight or louder call-to-arms. Never more than these two at a conversion point.
- **No urgency, no scarcity.** No "limited slots," no "book now," no exclamation, no countdown. Operator-first restraint, the same register the rest of the site holds. The booking CTA reads as "or grab a time →," not "Book your call today!"
- **Zero-JS.** The booking affordance is a plain `<a href="https://cal.pouk.ai">` (or a specific event-type URL — §9). **No embedded `cal.com` widget, no island, no modal** — that would violate R-009/R-010 (client-JS budget) and R-078 (hydration discipline). Booking happens on `cal.pouk.ai`; the site only links to it.
- **Reuses existing DS.** PM expects the booking affordance to reuse the existing `<Button>` shape (a secondary/quiet variant) beside the primary CTA. If a new variant is genuinely needed, that's a DS proposal Arian files — PM does not author the DS API (masterplan §2A).
- **Trust-loop exclusion is a hard rule**, not a style preference (§4, §10).

## 6. Content data shape

No new `src/content/*.json` dataset. This is a feature spec governing CTA *treatment and placement*, not a content corpus. The booking URL and CTA copy variants live where each page's CTA copy already lives (the page's content JSON / template prose). PM recommendation: define the canonical booking URL (`https://cal.pouk.ai`, or a specific event-type path once chosen) **once** in a shared constant or content field so a change propagates to every conversion point — engineer's call on the mechanism (a shared content value vs. a constant), consistent with R-076 (copy lives in content, not JSX literals).

CTA copy variants (the "or grab a time →" line per surface) are authored by `pouk-ai-content` against §5's voice discipline and land in each affected page's content source.

## 7. User flow

- **Entry**: The prospect is already at a funnel conversion point (end of `/why-ai`, `/roles`, `/engagements`, `/onboarding`, or the `/` Hero) — `contact-flow` does not create new entry points; it governs the exits.
- **Decision**: The prospect picks readiness-matched path — `mailto:` for asynchronous "let me write," booking for synchronous "let's talk." Both are valid conversions.
- **Exit / conversion**: `mailto:hello@pouk.ai` (composes an email, often context-carrying) **or** `cal.pouk.ai` (books a slot). Either counts as the canonical conversion (`flows/visitor-to-conversation.md` §5). A booked slot is the higher-intent signal.

## 8. Acceptance criteria

- [ ] At each **governed funnel conversion point** in §4 (`/` Hero, `/why-ai` end, `/roles` end, `/engagements` end, `/onboarding` end), both a `mailto:hello@pouk.ai` affordance and a `cal.pouk.ai` booking affordance render.
- [ ] At every governed point, `mailto:` is the **primary** affordance and booking is a **clearly subordinate secondary** (visual-weight check: booking does not equal or exceed the `mailto:` CTA; on `/` the title remains the primary anchor over both).
- [ ] **No booking affordance renders on `/principles` or `/about`** (trust-loop exclusion) — those pages keep their existing `mailto:`-only end CTA.
- [ ] **No booking affordance renders on `/privacy` or `/terms`.** `/scheduling`'s hero CTA links to `cal.pouk.ai` as the app explainer (governed by `pages/scheduling.md`), not as a funnel booking CTA.
- [ ] `/engagements` **per-rung** CTAs remain `mailto:hello@pouk.ai?subject=<Rung>` only — **no per-rung booking link** (booking appears only at the `/engagements` end CTA). D-08's "no per-card CTA" on `/roles` is not loosened (no booking link on individual `RoleCard`s).
- [ ] The booking affordance is a plain `<a href>` to the canonical `cal.pouk.ai` URL — **no embedded scheduling widget, no hydrated island, no modal** (R-009/R-010/R-078).
- [ ] The booking URL resolves (no 404; points at the live `cal.pouk.ai` or a valid event-type path).
- [ ] No booking CTA carries urgency, scarcity, exclamation, or stacked multiple buttons (§5 voice discipline).
- [ ] The `SiteShell` footer exposes both a `mailto:` and a `cal.pouk.ai` link in the utility tier.
- [ ] The canonical booking URL is defined once (shared constant/field), not duplicated as a literal across pages (R-076 spirit).
- [ ] Every affected route still passes Lighthouse (Perf ≥ 95, A11y/BP/SEO = 100), ships zero added client-JS, and passes axe-core 0 violations.
- [ ] CTA copy variants source from content (not JSX literals) and meet §5's voice discipline (Arian-verified).

## 9. Decisions (RESOLVED) + dependencies

**RESOLVED (Arian-ratified 2026-06-14, via approval of `final-state-strategy.md`):**

- **FS-CF-1 — Replace vs. beside → BESIDE, `mailto:` primary. LOCKED.** `cal.pouk.ai` booking sits beside `mailto:` as a **secondary** affordance; `mailto:` stays the primary, low-friction default at every governed conversion point. Booking is never a replacement and the site never forces a calendar on a prospect who isn't ready. Rationale: preserves the proven low-friction path while adding a high-intent option; matches the operator-first "we don't push" register. (This applies uniformly — including the bottom-funnel `/onboarding` end CTA; the PM's earlier "booking-primary at bottom-funnel" option was not taken. `mailto:` primary everywhere.)
- **FS-CF-2 — Booking-context routing → DEFERRED to v2. LOCKED.** v1 ships a single canonical booking URL (`https://cal.pouk.ai`). Whether the link later carries archetype/rung context (analogous to `mailto:?subject=`) is a Cal.com event-type-routing infra question, deferred to a fast-follow. Rationale: not a launch blocker; the `?subject=` context already rides the primary `mailto:` path.
- **FS-CF-3 — Narrowing the `mailto:`-only standing decision → APPROVED. LOCKED.** The `mailto:`-only posture recorded across the masterplan, the flow spec, and every page's out-of-scope is narrowed to a dual mechanism (`mailto:` + `cal.pouk.ai` booking, per FS-CF-1). This is the one place the final-state strategy *changes* a standing decision rather than extending it, and Arian signed off on it explicitly. Cascade owed: `flows/visitor-to-conversation.md` v1.3 (authored this pass) and the `mailto:`-only out-of-scope lines in `pages/{home,why-ai,roles,engagements}.md` (PM amendment pass — flagged below, not executed in this spec).

**Handoffs / dependencies:**

- **`cal.pouk.ai` infra** must be live and stable (it is, per #122 / the `/scheduling` page). If the booking URL or event-type structure changes, this feature is a downstream dependency.
- **DS**: likely none — reuses the existing `<Button>` (secondary variant). If a quiet-secondary variant doesn't exist, Arian files a DS proposal; PM flags the site-side need, does not author the DS API.
- **Content draft** (`pouk-ai-content`): the booking-path CTA copy variants per surface.
- **Composition** (`pouk-ai-designer`): how the secondary booking affordance sits beside the primary `mailto:` CTA at each point without breaking restraint; recorded in the relevant page compositions (or a shared composition note).
- **Flow-spec v1.3**: admit the dual mechanism into `flows/visitor-to-conversation.md` §5/§9/§10 (PM, rollout Phase 2).
- **Cascade to page specs**: on approval, the `mailto:`-only out-of-scope lines in `pages/home.md`, `why-ai.md`, `roles.md`, `engagements.md` narrow to admit booking (PM amendment pass — flagged, not executed in this spec).

## 10. Out of scope

- **A booking affordance on `/principles` or `/about`.** Trust-loop pages stay `mailto:`-only — hard rule, not a style call.
- **A booking affordance on the legal trio** (`/privacy`, `/terms`, `/scheduling` as funnel CTAs). Off-funnel.
- **An embedded `cal.com` scheduling widget / iframe / island** anywhere on the marketing site. Zero-JS; booking happens on `cal.pouk.ai`, linked to.
- **Replacing `mailto:`.** The email path stays; this augments, it does not remove (FS-CF-1, locked beside-not-replace). Booking is never primary and never forced.
- **Per-rung booking links on `/engagements`** (CTA-stacking) and **per-card booking links on `/roles`** (D-08).
- **Booking-context routing (archetype/rung in the booking URL)** at v1 — deferred to a fast-follow.
- **A contact form or intro questionnaire.** The two mechanisms are `mailto:` and `cal.pouk.ai` booking; nothing else.
- **Scheduling-availability display on the marketing site** ("next opening: …"). Availability lives in `cal.pouk.ai`; the site links to it.
- **Authoring the DS button-variant API.** Site-side need only; DS is `@poukai-inc/poukai-ui` maintainers' domain.
- **Final CTA copy and visual composition.** Content and designer lanes.
