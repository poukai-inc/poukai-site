# Spec: Visitor-to-conversation flow

**Surfaces affected**: `/`, `/why-ai`, `/roles`, `/engagements`, `/onboarding`, `/principles`, `/about`, `/writing` (+ `/writing/[slug]`), `mailto:hello@pouk.ai`, `cal.pouk.ai` booking
**Status**: Approved (v1.3 — admits `/onboarding`, the dual contact mechanism (`mailto:` + `cal.pouk.ai`), the `/writing` ungated email line as an in-funnel surface, and the final IA: five-item primary nav + two-tier footer)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (v1.3 — final-state push per `meta/specs/final-state-strategy.md`; was 2026-05-31 v1.2)
**Masterplan reference**: Sections 4.1 (site layout), 2A (decision authority), 6 (cutover)
**Decisions log**: D-13 (nav order baseline) — resolved via `meta/decisions/launch-readiness.md` on 2026-05-13. A13 (`/about` flow placement) — resolved via the `/about` PM interview on 2026-05-17. A4 (nav order extension to four items) — resolved same interview. A15a (footer order matches nav) — resolved same interview. **FS-CF-1** (booking beside `mailto:`, secondary), **FS-CF-3** (`mailto:`-only narrowed to dual mechanism), **FS-OB-2** (`/onboarding` footer-tier, not primary nav) — resolved via Arian's approval of `meta/specs/final-state-strategy.md` on 2026-06-14.

---

## v1.3 revision — what changed

v1.3 (2026-06-14) applies the final-state push locked in `meta/specs/final-state-strategy.md` (Arian-approved 2026-06-14). It closes the flow-spec debts flagged in `pages/writing.md` §9 and `pages/engagements.md` §9, and admits the two new final-state surfaces. **Amendment, not rewrite** — all v1.0/v1.1/v1.2 content stands; v1.3 deltas land in the header, §3 (success criteria — dual-mechanism conversion), §4 (new Stage 4½ Onboarding + `/writing` retention loop + conversion-stage dual mechanism), §5 (new hand-offs), §6 (final IA: five-item nav + two-tier footer), §7 (entry-source rows for `/writing`/`/onboarding`), §8 (new ACs), §10 (booking admitted; `/writing` email line confirmed).

- **`/onboarding` admitted as Stage 4½ (Onboarding / operational reassurance)**, between Evaluation (`/engagements`, Stage 3b) and the trust loop (Stage 4). It answers the prospect's last pre-conversion question — "what does saying yes actually look like operationally?" — with the four-phase model. Numbered 4½ to preserve the reviewable diff (Stages 4 and 5 keep their numbers). Reached from the `/engagements → /onboarding` hand-off, the footer utility tier, and the `/writing` spine — **not** the primary nav (FS-OB-2).
- **`/writing` admitted as a top-of-funnel + retention surface.** Essays are the dominant deep-link front door; the internal-link spine drains each essay back into `/why-ai → /roles → /engagements → /onboarding → convert`. The single ungated, zero-JS "get new essays by email" line + RSS are the retention mechanism (already narrowed IN at v1.2; v1.3 records `/writing`'s funnel position explicitly, not just the email-line exception).
- **Dual conversion mechanism (FS-CF-1, FS-CF-3).** Conversion (Stage 5) now has two mechanisms: `mailto:hello@pouk.ai` (primary, low-friction — unchanged) and `cal.pouk.ai` booking (secondary, high-intent — new). Booking sits *beside* `mailto:`, never replaces it, never forces a calendar. Governed centrally by `meta/specs/features/contact-flow.md`. Trust-loop pages (`/principles`, `/about`) stay `mailto:`-only; the legal trio stays off-funnel.
- **Final IA recorded (§6).** Primary nav unchanged at five items (`Why AI · Roles · Engagements · Principles · About`). Footer becomes two-tier: a funnel-mirror row (matching nav) + a utility row (`Writing · Onboarding · Scheduling · Privacy · Terms` + RSS + the `cal.pouk.ai` booking link).

---

## v1.2 revision — what changed

v1.2 (2026-05-31) applies the cascade amendment authorized by `meta/proposals/conversion-pivot-and-writing-engine.md` (the brand re-open, §7(a)–(e) locked 2026-05-31):

- **New Evaluation stage (Stage 3b)** served by `/engagements`, inserted between self-identification (`/roles`, Stage 3) and the trust loop (Stage 4). It carries the upsell ladder (discovery → pilot → build → retainer) and is the funnel fix the re-open was authorized to deliver. Existing Stage 4 (trust loop) and Stage 5 (conversion) keep their numbers; the new stage is numbered 3b to preserve the reviewable diff.
- **§10 out-of-scope narrowed**: a single ungated, zero-JS "get new essays by email" line on `/writing` moves from rejected to in-scope (proposal §7(d) = d1). Popups, modals, gated lead-magnets, and on-site hydrated capture forms stay out.
- **Surfaces affected** extended to include `/engagements` and `/writing`.
- Per-rung CTAs on the `/engagements` ladder are scoped to `/engagements` only; `/roles` keeps D-08 (no per-card CTA). See `meta/specs/pages/roles.md` D-08 scope clarification.

All v1.0 and v1.1 content stands. v1.2 deltas land in the header block, §4 (new Stage 3b), and §10.

---

## v1.1 revision — what changed

v1.0 (2026-05-13) defined the flow across four surfaces (`/`, `/why-ai`, `/roles`, `/principles`). v1.1 admits `/about` as a fifth surface and revises the trust-loop stage from a single page to **parallel pages with OR semantics**. Per A13 in the `/about` PM interview:

- `/about` joins the trust-loop stage alongside `/principles`. Prospects pick one or the other — not forced through both.
- `/about` is documented as **the recommended primary URL for referrer-intro, founder-DM, and email-signature contexts** (a documented entry-source role distinct from the in-funnel trust-loop role).
- The canonical funnel stays at five stages (first touch → diagnosis → self-identification → trust loop → conversion); only the trust-loop stage gets the OR semantics.
- Top nav adds `/about` as the fourth item — order becomes `Why AI → Roles → Principles → About` (A4).
- Footer link order matches nav (A15a).
- Sitemap adds `/about` as a fifth route.

All other v1.0 content stands. v1.1 deltas land in §3, §4 (new sub-stage 4b), §5 (new hand-off rows), §6 (nav order update), §7 (new entry-source row), §8 (new ACs). v1.0 paragraphs that don't change are left unedited so the diff is reviewable.

---

## 1. Purpose

This spec defines the prospect journey across the four-route site, from first touch to a conversation with Arian. It's the connective tissue that the four page specs (`pages/home.md`, `pages/why-ai.md`, `pages/roles.md`, `pages/principles.md`) hang from — it answers "what order do these pages read in, what hand-offs exist between them, and what counts as a conversion?" The flow is opinionated: every page is funnel-aware, every link between pages is deliberate, and every dead-end is a defect.

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who reads this spec to wire inter-page links, the `SiteShell` route order, and the homepage hand-off correctly.
- **Secondary**: Arian, who uses this flow as the brief for how to talk about the site to prospects ("read why-ai first, then roles, then principles").

## 3. Success criteria

- **Behavior**: A first-time visitor follows the canonical path **`/` → `/why-ai` → `/roles` → `/engagements` → `/onboarding` → convert**, with **`/principles` or `/about` (one or the other, not both)** reached as a trust-loop closer either pre- or post-conversion. **Convert** = `mailto:hello@pouk.ai` (primary) **or** a `cal.pouk.ai` booking (secondary, v1.3). A returning visitor follows a shorter path (`/roles` / `/engagements` / `/onboarding` / `/principles` / `/about` → convert). A `/writing` reader re-enters the canonical path via the essay spine.
- **Signal**: Qualitatively — inbound arrives with funnel-aware context ("I read your why-ai page, we're in failure mode 3, Builder seems right, we'd want to start with a Pilot, and your day-30 check-in is exactly what we lacked"); referrer DMs cite specific anchors; `/about` rather than `/principles` for operator-intros; **booked slots start appearing attributable to site traffic (the new high-intent signal)**; essays get cited/forwarded (the `/writing` virality signal). When analytics arrive, the cross-page click-through pattern matches the canonical path on the majority of multi-page sessions; the trust-loop OR semantics holds; booking-vs-`mailto:` mix is the new conversion read-out.
- **Failure mode**: A visitor lands on any page directly (deep link, referrer DM) and **cannot find the next step**. Opposite failure: the funnel is so prescriptive that a reader who just wanted to read `/principles` / `/about` feels pushed into a sales path. v1.1 failure: prospects forced through *both* trust-loop pages. **v1.3 failures**: a booking CTA appears on a trust-loop page or outweighs `mailto:` (over-push — FS-CF-1); a booking calendar is *forced* on a not-yet-ready prospect; or a `/writing` essay dead-ends with no spine back into the funnel.

## 4. The canonical journey

Five stages, mapped to entry source, page sequence, and conversion event.

### Stage 1 — First touch (`/`)

- **Entry sources**: Direct (`pouk.ai` typed), LinkedIn / X profile bio link, email signature on a sent message, search ("pouk ai", "pouk ai consulting").
- **What happens**: Visitor reads the tagline + lede + status + email link. Two acceptable exits — click into `/why-ai` from the lede hand-off link, or email immediately. A third valid outcome is the visitor leaving with the brand registered, intent to return.
- **Spec reference**: `meta/specs/pages/home.md`.

### Stage 2 — Diagnosis (`/why-ai`)

- **Entry sources**: From `/` via the lede hand-off; direct (LinkedIn share, founder DM, X post linking to `/why-ai`); search ("AI deployment gap", "why AI projects fail").
- **What happens**: Visitor reads the opening argument, scans failure modes, deep-reads two or three, scrolls through the leaders pattern and consulting angle, lands on the discovery questions and end CTA. Two exits — click into `/roles` (the engineer wires a clear "next: which role fits your situation? →" link at the bottom of `/why-ai`), or email directly with reference to a stat or failure mode.
- **Spec reference**: `meta/specs/pages/why-ai.md`.

### Stage 3 — Self-identification (`/roles`)

- **Entry sources**: From `/why-ai` end-of-page next-step link; from a referrer's DM that includes a role anchor (e.g., `pouk.ai/roles#automator`); from the top nav.
- **What happens**: Visitor scans the four roles, matches their situation to a "Hired by" line, reads that role's body, scrolls to the end CTA. Primary exit — `mailto:hello@pouk.ai` with the role name carried as the opening line of the email.
- **Spec reference**: `meta/specs/pages/roles.md`.

### Stage 3b — Evaluation (`/engagements`)

**Added 2026-05-31** per `meta/proposals/conversion-pivot-and-writing-engine.md` §2.1 + §5 (the brand re-open). The Evaluation stage sits between self-identification (`/roles`) and the trust loop: a visitor who has matched themselves to an archetype but doesn't yet know *what shape the work takes* — scope, sequence, commitment — was previously a silent drop-off (next-pages §2.6). `/engagements` closes that gap with the upsell ladder (discovery → pilot → build → retainer), described in work terms, categorical-only, no dollar figures (proposal §7(a) = a1).

- **Entry sources**: From `/roles` end-of-page hand-off ("here's how we'd work together →"); from a referrer DM linking the ladder for a prospect weighing commitment; from the top nav (`/engagements` slots into nav per proposal §7(c)). Rarely a first touch — this is mid-funnel, post-self-identification.
- **What happens**: Visitor reads the four engagement rungs, locates the entry point that matches their readiness (a low-commitment Discovery or Pilot rather than a six-figure Build on day one), and converts **with a rung already named** ("we'd want to start with a Pilot"). Each rung carries its own per-rung "start here" CTA (proposal §7(b) = b2 — scoped to `/engagements`, not `/roles`; D-08 still holds for `/roles` role-cards). Primary exit — `mailto:hello@pouk.ai` carrying both the archetype (from `/roles`) and the rung as the opening line of the email, materially better-qualified than a brand-voice-only lead.
- **Position in the funnel**: Between Stage 3 (`/roles`) and Stage 4 (trust loop). A visitor may climb directly from `/engagements` to `mailto:`, or detour through the trust loop (`/principles` / `/about`) before converting. Both are valid.
- **Spec reference**: `meta/specs/pages/engagements.md` (authored under the re-decision of record above).

### Stage 4 — Trust loop (`/principles` and/or `/about`)

**v1.1**: trust-loop stage carries two parallel pages. Prospects pick one — not forced through both. Each page closes a different trust question: `/principles` answers "how does pouk.ai work?"; `/about` answers "who runs this?" A prospect with the *how* question reads `/principles`; a prospect with the *who* question reads `/about`; some prospects have neither question and skip the stage entirely; few prospects have both.

#### Stage 4a — Trust loop via `/principles` (how does pouk.ai work?)

- **Entry sources**: From the top nav (a prospect mid-conversation closing the trust loop); from a referrer's DM linking to a specific principle anchor; from a social share screenshot; rarely as a first touch.
- **What happens**: Visitor reads the intro, scans the ten principles, close-reads two or three, reaches the conclusion. Exit is often **no immediate click** — a quiet trust-up that converts on a subsequent email (next day, next week). Some readers email immediately citing a principle by number.
- **Position in the funnel**: `/principles` is **either pre- or post-`mailto:`**. Pre-email readers are de-risking the consultant. Post-email readers are reading after a first reply from Arian, validating their choice. Both are valid.
- **Spec reference**: `meta/specs/pages/principles.md`.

#### Stage 4b — Trust loop via `/about` (who runs pouk.ai?)

- **Entry sources**: From the top nav (a prospect mid-conversation closing the trust loop via the founder-introduction route); from a referrer DM that introduces Arian-the-operator ("read his about, then ping me back"); from Arian's email signature, LinkedIn bio, or X bio (per the documented primary-URL role below); rarely as a first touch from cold search.
- **What happens**: Visitor reads the hero eyebrow + lede, then the three sections (the arc, why pouk.ai, Pouākai origin) in first-person voice for the first two sections and brand-voice declarative for the third. Read-target ~2 minutes / ~450 words. Exit is often a `mailto:` click with higher conviction (the prose closed the operator-introduction question), or back to the funnel via the top nav, or close with intent to convert later.
- **Position in the funnel**: `/about` is **either pre- or post-`mailto:`**, same as `/principles`. Pre-email readers are de-risking who-they're-writing-to. Post-email readers are reading after a first reply from Arian, validating the operator. Both are valid.
- **Documented primary-URL role (A13)**: `/about` is the recommended primary URL for **referrer intros, founder DMs, and email-signature contexts**. Arian's outgoing communications (LinkedIn DMs, cold outreach replies, email signatures) point at `/about` rather than `/` when the goal is to introduce the operator. The canonical first-touch URL for cold prospect traffic remains `/`; the referrer-mediated first-touch URL is `/about`.
- **Spec reference**: `meta/specs/pages/about.md`.

#### Trust-loop OR semantics

Most multi-page sessions touch *one* of `/principles` / `/about`, not both. This is by design — both pages do trust work, but they answer different questions; forcing a prospect through both is funnel inflation. A prospect who reads both is fine (no penalty), but the engineer does not wire any link or cue that suggests "now read the other one." Each trust-loop page funnels to convert (Stage 5) or back to the canonical funnel via top nav.

### Stage 4½ — Onboarding / operational reassurance (`/onboarding`)

**Added 2026-06-14 (v1.3)** per `meta/specs/final-state-strategy.md` §3.1 + §6.2. The Onboarding stage sits between Evaluation (`/engagements`, Stage 3b) and the trust loop (Stage 4). It answers the prospect's last pre-conversion objection — *"if I say yes, will this be a chaotic, unscoped, unaccountable engagement?"* — with pouk.ai's four-phase operating model (Discovery → Scoping → Build → Handoff), prospect-facing, categorical-only (no figures, FS-OB-1). It is the operational sibling of `/engagements`: `/engagements` answers *how the relationship is shaped commercially*; `/onboarding` answers *how the work actually runs*. Numbered 4½ to preserve the reviewable diff (Stages 4 and 5 keep their numbers).

- **Entry sources**: From the `/engagements → /onboarding` end-of-page hand-off ("here's what saying yes looks like →"); from a referrer DM linking the page (or a phase anchor) to de-risk an intro for a stakeholder; from the footer utility tier; from a `/writing` essay's internal-link spine when the essay lands on a late-funnel reader. Reached **not** via the primary nav (FS-OB-2 — five-item nav unchanged). Rarely a cold first touch — this is late-funnel.
- **What happens**: Visitor reads the four phases, registers a structured, accountable method (named deliverables, the paid Discovery, the day-30 check-in), and converts (Stage 5) with materially lower perceived risk — often referencing a phase ("we'd want to start with your Discovery"). A reader may also detour to the trust loop (`/principles` / `/about`) for the character read before converting.
- **Position in the funnel**: Between Stage 3b (`/engagements`) and Stage 4 (trust loop). A visitor may convert directly from `/onboarding`, or detour through the trust loop first. Both are valid.
- **Spec reference**: `meta/specs/pages/onboarding.md`.

### The `/writing` retention + virality loop (parallel surface, not a numbered stage)

**Recorded 2026-06-14 (v1.3)** — `/writing` was admitted as a surface at v1.2 (the email-line narrowing); v1.3 records its funnel *position*. `/writing` is **not** a numbered funnel stage — it is a parallel **top-of-funnel + retention** surface. Essays (`/writing/[slug]`) are the dominant deep-link front door (search, LinkedIn/X shares, peer citations). Each essay's internal-link spine drains the reader back into the canonical funnel (`/why-ai` or `/roles#anchor`, and optionally `/engagements`/`/onboarding`). The ungated, zero-JS "get new essays by email" line + RSS are the retention mechanism — a non-converting first-time reader subscribes and re-enters on a later essay with conviction accrued. `/writing` does direct-conversion work only incidentally; its job is to feed and re-feed the funnel.

- **Entry sources**: Deep-link to a specific `/writing/[slug]` (dominant); the `/writing` index (secondary — footer link, RSS, a returning subscriber).
- **What happens**: Reader consumes an essay, screenshots/cites a stat or quotable line (virality), and either follows the spine into the funnel, subscribes (retention), or banks trust.
- **Position in the funnel**: Parallel front door + retention loop; re-enters the canonical funnel via the essay spine. Reached via the footer utility tier, not the primary nav (its v1.2/`pages/writing.md` §9 decision).
- **Spec reference**: `meta/specs/pages/writing.md`.

### Stage 5 — Conversion (`mailto:hello@pouk.ai` **or** `cal.pouk.ai` booking)

**v1.3**: conversion now has **two mechanisms**, governed centrally by `meta/specs/features/contact-flow.md` (FS-CF-1, FS-CF-3):

- **`mailto:hello@pouk.ai` — primary, low-friction (unchanged).** The proven path. Carries context where possible (`?subject=<Rung>` from `/engagements`, role-as-opening-line from `/roles`, phase from `/onboarding`).
- **`cal.pouk.ai` booking — secondary, high-intent (new).** A prospect who is ready to talk books a real slot. Sits **beside** `mailto:` as a clearly subordinate secondary affordance at the governed conversion points (`/` Hero, `/why-ai` end, `/roles` end, `/engagements` end, `/onboarding` end, footer). **Never** replaces `mailto:`; **never** forces a calendar; **never** appears on the trust-loop pages (`/principles`, `/about` stay `mailto:`-only) or the legal trio (off-funnel).

- **What counts as conversion**: A first email to `hello@pouk.ai` **or a booked `cal.pouk.ai` slot** from a prospect not previously in conversation, or a LinkedIn DM equivalent. A booked slot is the higher-intent signal. Volume target is qualitative for now — Arian's read of inbound quality and reply rate.
- **What does not count**: A page view, a click to social, a click to a citation URL on `/why-ai`, a click to `cal.pouk.ai` that does not complete a booking. These are funnel inputs, not conversions.

## 5. Inter-page hand-offs

Each hand-off below is a specific link the engineer must wire. These are the funnel's mechanics — without them, the flow is theoretical.

| From | To | Trigger | Spec location |
| --- | --- | --- | --- |
| `/` | `/why-ai` | Lede sentence ends in "Most AI projects fail to deliver. Here's why →" | `pages/home.md` section 5 |
| `/why-ai` | `/roles` | End-of-page next-step link below the references section ("Next: which role fits your situation? →") | `pages/why-ai.md` section 4 (footer-of-page next step) |
| `/roles` | `/engagements` | End-of-page next-step link ("here's how we'd work together →") — shipped #116 | `pages/engagements.md` §7 |
| `/engagements` | `/onboarding` | **v1.3** End-of-page hand-off ("here's what saying yes looks like →") | `pages/onboarding.md` §7 |
| `/why-ai` | convert (`mailto:` + booking) | End CTA after the discovery questions block | `pages/why-ai.md` §4 + `features/contact-flow.md` §4 |
| `/roles` | convert (`mailto:` + booking) | Universal end CTA after the four `RoleCard`s | `pages/roles.md` §4 + `features/contact-flow.md` §4 |
| `/engagements` | convert (`mailto:?subject=<Rung>` per-rung; `mailto:` + booking at end CTA) | Per-rung CTAs + end CTA | `pages/engagements.md` §4 + `features/contact-flow.md` §4 |
| `/onboarding` | convert (`mailto:` + booking) | End CTA | `pages/onboarding.md` §4 + `features/contact-flow.md` §4 |
| `/principles` | `mailto:` (only — no booking) | Minimal end-CTA line below the conclusion | `pages/principles.md` section 4 |
| `/about` | `mailto:` (only — no booking) | Minimal end-CTA line below section 3 (Pouākai origin) | `pages/about.md` section 4 item 6 |
| `/writing/[slug]` | `/why-ai` or `/roles#anchor` (opt. `/engagements`/`/onboarding`) | Foot-of-essay internal-link spine | `pages/writing.md` §4b / §5.3 |
| `/scheduling` | `cal.pouk.ai` (the app) | Hero CTA — explainer→app hand-off, not a funnel CTA (FS-SCH-1) | `pages/scheduling.md` §4 |
| Any | Any | Top nav via `SiteShell`, order: Why AI → Roles → Engagements → Principles → About | This spec, section 6 |
| Any | utility pages | Footer utility tier: Writing · Onboarding · Scheduling · Privacy · Terms + RSS + `cal.pouk.ai` | This spec, section 6 (v1.3) |
| Any | `/` | `SiteShell` wordmark click | `pages/home.md` section 8 |

**Dual-mechanism convention (v1.3, FS-CF-1).** At every "convert" hand-off above, `mailto:hello@pouk.ai` is the **primary** affordance and `cal.pouk.ai` booking is a **secondary** affordance beside it — except `/principles` and `/about`, which stay `mailto:`-only (no booking on trust-loop pages), and the legal trio, which is off-funnel. The booking treatment is governed centrally by `features/contact-flow.md`, not re-decided per page.

**Negative hand-offs (deliberately not wired)**:

- `/principles` → `/about` and `/about` → `/principles`: no inline link, no "see also" cue. Per A13 OR semantics, the two trust-loop pages are parallel, not sequential. Top nav is the connecting tissue if a prospect wants both; no in-body affordance. (v1.1.)
- `/about` → `/roles` and `/about` → `/why-ai`: no end-of-page next-step link. `/about` is trust-loop, not funnel-forward. Top nav covers re-entry to the funnel. (v1.1.)
- **A booking CTA on `/principles` or `/about`** (v1.3, FS-CF-1) — trust-loop pages stay `mailto:`-only; a calendar ask on a character page over-sells.
- **The legal trio (`/privacy`, `/terms`, `/scheduling`) → funnel** (v1.3) — off-funnel; `/scheduling`'s only outbound is to `cal.pouk.ai` (the app), not into the prospect funnel (FS-SCH-1).

The masterplan section 2A reserves nav contents as **site repo's** decision. The order below is this spec's recommendation; Arian's call (ratified at five items via FS-CF/FS-OB approvals 2026-06-14).

## 6. Top-nav order

**v1.0 baseline (D-13)**: nav order is `Why AI`, `Roles`, `Principles` — funnel order, left-to-right. Rationale: a first-time visitor scans the nav left-to-right; placing the diagnosis page first signals where the journey starts. A returning visitor uses the nav as a jump table; the funnel order is still the most defensible default since it matches the canonical path. Alternative orders considered and rejected: alphabetical (`Principles, Roles, Why AI` — meaningless to a prospect); commercial-first (`Roles, Why AI, Principles` — leads with services); reverse-funnel `Principles → Roles → Why AI` — front-loads character at the cost of diagnosis.

**v1.1 extension (A4)**: nav order is `Why AI`, `Roles`, `Principles`, `About` — funnel pages cluster left, trust-loop pages cluster right. `/about` slots fourth (rightmost) for two reasons: (a) it preserves the D-13 funnel-order baseline intact, and (b) the trust-loop pages (`/principles` and `/about`) naturally cluster as the right-end of the nav, separating funnel-forward affordances from trust-loop affordances. A first-time visitor reads the nav left-to-right and sees the funnel; a returning visitor jumps to the right-end for trust pages. Alternative orders considered and rejected: `Why AI · Roles · About · Principles` (interleaves the trust-loop pair — breaks the cluster); `About · Why AI · Roles · Principles` (leads with the operator — over-personalises before the prospect has agreed to the problem).

**v1.2 (shipped 2026-05-31)**: nav order is `Why AI · Roles · Engagements · Principles · About` — `/engagements` slots fourth, immediately after `/roles`, preserving funnel order (diagnosis → self-ID → evaluation) and keeping the trust-loop pair (`/principles`, `/about`) clustered at the right end. Resolved in `pages/engagements.md` §9.

**v1.3 final IA (2026-06-14)**: the **primary nav stays at five items** — `Why AI · Roles · Engagements · Principles · About` — unchanged. `/onboarding` and `/writing` do **not** enter the primary nav (FS-OB-2; `pages/writing.md` §9): both are deep-read surfaces reached by hand-off, footer, and deep link, not top-nav destinations. Adding them would crowd the bar and dilute the funnel signal.

The **footer becomes two-tier** (v1.3):
- **Funnel-mirror row** — matches the primary nav order exactly: `Why AI · Roles · Engagements · Principles · About` (A15a — footer mirrors nav).
- **Utility row** (lower-weight) — `Writing · Onboarding · Scheduling · Privacy · Terms`, plus the RSS feed link and the `cal.pouk.ai` booking link. This is where the non-nav surfaces live: the deep-read funnel pages (`/writing`, `/onboarding`), the product explainer (`/scheduling`), and the legal pages (`/privacy`, `/terms`). The legal links in the footer also satisfy a Google OAuth-verification expectation (privacy policy reachable from the site root). Exact footer composition (one row vs. two, visual tier separation) is the designer's call; this spec fixes *what is reachable and in what grouping*.

The homepage `/` is reachable via the `SiteShell` wordmark, not a separate "Home" nav item. This is consistent with the holding page's restraint and with `pages/home.md` section 4.

**Cascade**: `sitemap.xml` lists every public route (the funnel five + `/onboarding`, `/writing` (+ non-draft `/writing/[slug]`), `/scheduling`, `/privacy`, `/terms`; `/404` excluded). The footer funnel-mirror row matches nav order; the utility row carries the rest. Engineer wires sitemap and footer consistent with this.

## 7. Entry-source distribution (assumed, pre-analytics)

These are working assumptions, not measured truth — re-baseline once analytics are in place.

- **`/` direct** — highest single share of first-touches for **cold prospect traffic**. Search ("pouk ai", "pouk ai consulting"), typed-URL, and LinkedIn-bio clicks all land here.
- **`/about` direct** — highest single share of first-touches for **referrer-mediated and founder-mediated traffic** (v1.1 documented role, A13). Founder DMs, email signatures, LinkedIn replies, and cold-outreach replies point here. Distinct from `/` in that the inbound has a referrer context; the prospect already knows who Arian is by name before they click.
- **`/why-ai` deep links** — meaningful share once Arian starts sharing the page publicly (LinkedIn posts, X threads). Likely the second-largest source after `/` direct.
- **`/roles` deep links** — moderate share; mostly from referrers ("I think you need their Automator work — `pouk.ai/roles#automator`").
- **`/principles` deep links** — low absolute volume, high quality. Mostly social shares of single-principle screenshots.
- **`/writing/[slug]` deep links (v1.3)** — expected to grow into a meaningful top-of-funnel source as the corpus and Arian's distribution build (6–12 month SEO horizon). Essays are the dominant front door for `/writing`; the index `/writing` is a secondary entry. Re-feeds the funnel via the essay spine.
- **`/onboarding` (v1.3)** — low first-touch volume; predominantly reached *within-session* from the `/engagements` hand-off, or as a referrer-sent URL to de-risk an intro for a stakeholder. Late-funnel, not a cold front door.

Implication for engineer: every page must be **self-sufficient at first touch** — a clear path forward, the email address one click away, brand identity unmistakable. The `SiteShell` is the floor of that contract on every page. v1.1 implication for Arian: outgoing communications (DM, signature, LinkedIn reply) point at `/about` when introducing the operator and at `/` when introducing the brand cold. Both are valid; the split is contextual.

## 8. Acceptance criteria

v1.0 ACs (unchanged):

- [ ] `/` includes a lede-embedded link to `/why-ai` per `pages/home.md` section 5.
- [ ] `/why-ai` includes a next-step link to `/roles` below the references section.
- [ ] `/why-ai` includes a `mailto:hello@pouk.ai` link in the end CTA.
- [ ] `/roles` includes a `mailto:hello@pouk.ai` link in the end CTA.
- [ ] `/principles` includes a `mailto:hello@pouk.ai` link in the end-CTA line.
- [ ] `SiteShell` wordmark links to `/` on every page.
- [ ] Each route, on first touch with no referrer, has at least one visible next-step (a nav link, an inter-page link, or `mailto:`) above the fold on mobile.
- [ ] No page on the site is a dead-end — every page either funnels to `mailto:` or offers a clearly-labeled next page.
- [ ] Deep-link anchors (`/roles#builder`, `/principles#momentum`, `/why-ai#governance`) function and the matching content is above the fold post-scroll.

v1.0 AC superseded (kept for diff reviewability):

- [ ] ~~`SiteShell` top nav exposes `/why-ai`, `/roles`, `/principles` in that order on every page.~~ Superseded by v1.1 AC below.
- [ ] ~~No "back to home" link is required from `/why-ai`, `/roles`, or `/principles` — the `SiteShell` wordmark covers that affordance.~~ Superseded by v1.1 AC below (extends to `/about`).

v1.1 ACs (new, atomic with `/about` deploy):

- [ ] `SiteShell` top nav exposes `/why-ai`, `/roles`, `/principles`, `/about` in that order on every page (A4).
- [ ] `SiteShell` footer link list exposes the same four routes in the same order (A15a).
- [ ] `sitemap.xml` includes all five routes: `/`, `/why-ai`, `/roles`, `/principles`, `/about`.
- [ ] `/about` includes a `mailto:hello@pouk.ai` link in the end-CTA line per `pages/about.md` section 4 item 6.
- [ ] No `<a href>` from `/principles` body to `/about` body and no `<a href>` from `/about` body to `/principles` body — the two trust-loop pages are parallel, not sequential. Top nav is the only inter-trust-loop affordance.
- [ ] No "back to home" link is required from `/why-ai`, `/roles`, `/principles`, or `/about` — the `SiteShell` wordmark covers that affordance on all five routes.
- [ ] On the `/about` route, the `SiteShell` top nav highlights `About` as current (not `Principles`, not `Why AI`).
- [ ] `/about` does *not* include an end-of-page next-step link to `/roles` or `/why-ai`. Trust-loop pages are funnel-rest, not funnel-forward; top nav handles re-entry.

v1.3 ACs (new — final-state push):

- [ ] `SiteShell` top nav exposes exactly five items in order: `Why AI · Roles · Engagements · Principles · About`. Neither `/onboarding` nor `/writing` appears in the primary nav (FS-OB-2; `pages/writing.md` §9).
- [ ] The `SiteShell` footer carries a funnel-mirror row (matching nav order) **and** a utility row exposing `/writing`, `/onboarding`, `/scheduling`, `/privacy`, `/terms`, the RSS link, and the `cal.pouk.ai` booking link.
- [ ] `/engagements` exposes an end-of-page hand-off link to `/onboarding` ("here's what saying yes looks like →").
- [ ] At each governed conversion point (`/` Hero, `/why-ai` end, `/roles` end, `/engagements` end, `/onboarding` end), both a `mailto:hello@pouk.ai` (primary) and a `cal.pouk.ai` booking (secondary) affordance render, with booking clearly subordinate (FS-CF-1; enforced in detail by `features/contact-flow.md` §8).
- [ ] **No `cal.pouk.ai` booking affordance renders on `/principles` or `/about`** — both stay `mailto:`-only.
- [ ] **No funnel CTA (email or booking) renders on `/privacy` or `/terms`;** `/scheduling`'s hero CTA links to `cal.pouk.ai` as the app, not as a funnel CTA (FS-SCH-1).
- [ ] Every non-draft `/writing/[slug]` ends with an internal-link spine into `/why-ai` or a `/roles#anchor` (no dead-end essays).
- [ ] `sitemap.xml` includes `/`, `/why-ai`, `/roles`, `/engagements`, `/onboarding`, `/principles`, `/about`, `/writing` (+ non-draft `/writing/[slug]`), `/scheduling`, `/privacy`, `/terms`; `/404` excluded.
- [ ] No page on the site is a dead-end — every funnel page funnels to convert or a clearly-labeled next page; every essay carries the spine; the legal trio links to `cal.pouk.ai` / between legal pages.

## 9. Open questions / dependencies

The original draft's open question (nav order) was resolved via `meta/decisions/launch-readiness.md` on 2026-05-13. See decision D-13.

Remaining dependencies blocking `Built`:

- **Email address — locked.** `hello@pouk.ai` is the single contact point. LinkedIn DM is a secondary channel handled outside the site (linked from `SiteShell` footer per masterplan section 3.2 if `SiteShell` exposes social links; otherwise not surfaced).
- **DS dependency — `SiteShell`.** Required to enforce the nav order and the wordmark hand-off on every page. In scope for DS Phase 1.3.
- **Analytics — out of scope.** This spec relies on qualitative signals (inbound email content, referrer cite patterns) at launch. Once analytics arrive, this spec's section 3 and 7 should be revisited against measured data.
- **Contact-flow extension — now `Approved` (v1.3).** `meta/specs/features/contact-flow.md` is `Approved` (2026-06-14) and governs the dual mechanism (`mailto:` primary + `cal.pouk.ai` booking secondary). This flow spec defers all booking-treatment specifics to it; the dual-mechanism rows in §5 and the conversion definition in §4 Stage 5 are the flow-level record. (Supersedes the original "backlog candidate" framing.)
- **`/onboarding` build (v1.3).** `meta/specs/pages/onboarding.md` is `Approved`; the `/engagements → /onboarding` hand-off and the Stage 4½ position are recorded here. The page's content/composition/build are tracked in the final-state-push rollout (`final-state-strategy.md` §8 Phase 4).
- **Page out-of-scope cascade (owed).** The `mailto:`-only out-of-scope lines in `pages/{home,why-ai,roles,engagements}.md` narrow to admit booking — a PM amendment pass flagged in `contact-flow.md` §9, not executed in this flow spec.

## 10. Out of scope

- Funnel analytics, A/B testing infrastructure, conversion-rate optimization. Qualitative signal only at launch (Matomo / Vercel Analytics excepted per the standards).
- A "next intake" / waitlist flow. The brand competes by being a person; calendared availability now lives in `cal.pouk.ai` (the booking secondary), not a waitlist.
- Lead-magnet downloads, gated content, or email-capture forms — **narrowed 2026-05-31** per `meta/proposals/conversion-pivot-and-writing-engine.md` §7(d) = d1. A **single ungated, zero-JS "get new essays by email" line on `/writing`** (optional, hosted form, no popup/modal/gate, framed as the operator's notes) is **IN scope**. Still **OUT of scope**: popups, modals, gated lead-magnet downloads, drip sequences, and email-capture *forms hydrated on the site*. RSS ships alongside the email line. The narrowing applies to `/writing` only.
- **Replacing `mailto:` with booking, or forcing a calendar (v1.3).** `cal.pouk.ai` booking is admitted as a **secondary** affordance beside `mailto:` at governed conversion points (FS-CF-1) — it never replaces `mailto:`, never appears on trust-loop pages, and is never forced. An **embedded scheduling widget / island** on the marketing site stays OUT (zero-JS, R-009); booking happens on `cal.pouk.ai`, linked to. Booking-context routing (archetype/rung in the booking URL) is deferred to v2 (FS-CF-2).
- Multi-step contact form, intro questionnaire, or on-site scheduling embed.
- Cross-domain funnel tracking (LinkedIn → site, X → site). Out of scope.
- Personalization based on referrer or visit count.
- Internationalization / regional flows. English-only at launch.
