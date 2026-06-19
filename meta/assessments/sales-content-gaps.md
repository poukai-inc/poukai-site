# Assessment: Sales / Conversion content gaps

**Type**: PROPOSAL — read-only audit. Arian approval required before any spec is authored or any build begins.
**Status**: Draft (for Arian review)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Branch context**: `explore/raise-the-ceiling`
**Last updated**: 2026-06-14
**Masterplan reference**: §7.3 (`/case-studies` deferral). **Strategy reference**: `meta/specs/final-state-strategy.md` §6.1 (unused booking path), §7.1 (`/work` gated on 2+ permissioned case studies), §7.2 (masterplan deltas). **Flow reference**: `meta/specs/flows/visitor-to-conversation.md` (canonical funnel). **Feature reference**: `meta/specs/features/contact-flow.md` (dual conversion mechanism, Approved).

---

## 0. What this is and is not

Arian's read for this pass: the site is strong on **restraint and method** and weak on **persuasion** — it proves *problem*, *fit*, and *method*, but it never **shows evidence pouk.ai ships**. This is a per-page audit against a B2B high-trust sales funnel, conversion-first.

This is **not** a brand critique. Restraint is the differentiator — the entire positioning is "not another AI advisor," and the site earns that by *not* doing the things generic AI consultancies do (decks, hype, fake urgency, logo soup). Every gap below is filtered through one question: **is this a missing sales move that fits the brand, or would it be off-brand hype?** Those two buckets are kept separate on purpose.

**Hard constraint carried throughout**: the categorical-only posture holds. No fabricated metrics, no invented testimonials, no borrowed logos, no manufactured scarcity. Proof must be **real or earnable** — not manufactured. Where a sales move needs real-world evidence pouk.ai does not have yet, it is tagged GATED and parked, not recommended for immediate build.

---

## 1. The core finding (one paragraph)

The funnel is a beautifully argued **case for the category** that never becomes a **case for pouk.ai specifically**. `/why-ai` proves the market is broken (with cited third-party stats). `/roles` proves pouk.ai understands the shapes of work. `/engagements` and `/onboarding` prove the *method* is sound. `/principles` proves the *character* is sound. But across all nine surfaces there is **not one instance of pouk.ai having actually done the thing** — no outcome, no result, no named or anonymized piece of shipped work, no third-party voice. The reader is asked to believe "we ship" entirely on the strength of the brand's own prose. For a low-priced, low-commitment first step (paid Discovery) this can convert; for the Build and Retainer revenue the funnel is built to climb toward, the missing-evidence gap is the single largest conversion drag. The good news: the highest-leverage fix (point the funnel at the already-built booking product) is **buildable now and already specced** (`contact-flow.md`), and the rest are real/earnable, not off-brand.

---

## 2. Funnel-stage coverage matrix

The five classic B2B sales jobs, scored across the funnel as it stands. Legend: ● strong · ◐ partial · ○ absent.

| Sales job | `/` | `/why-ai` | `/roles` | `/engagements` | `/onboarding` | `/principles` | `/about` | `/writing` |
|---|---|---|---|---|---|---|---|---|
| **DESIRE** (make them want the outcome) | ◐ | ◐ | ◐ | ◐ | ◐ | ○ | ◐ | ◐ |
| **PROOF** (show evidence it ships) | ○ | ◐¹ | ○ | ○ | ○ | ○ | ◐² | ○ |
| **OBJECTION handling** | ○ | ◐ | ◐ | ● | ● | ◐ | ◐ | ○ |
| **URGENCY** (without pushiness) | ◐³ | ○ | ○ | ○ | ○ | ○ | ○ | ◐⁴ |
| **DIFFERENTIATION vs. alternatives** | ◐ | ◐ | ◐ | ◐ | ◐ | ● | ◐ | ◐ |

¹ `/why-ai` proof is *category* proof (third-party stats), not *pouk.ai* proof.
² `/about` "operates at company-grade depth," "wired these tools into production codebases" — assertion of a track record, no instance shown.
³ `/` status line ("taking conversations for Q3") is the one tasteful, real scarcity signal on the site.
⁴ `/writing` retention email line is a soft "come back" loop — desire/urgency-adjacent, not conversion urgency.

**Read of the matrix**: the **PROOF row is almost entirely empty**, and it's the row that matters most for a high-trust, high-ticket service. DIFFERENTIATION is everywhere-partial — implied by tone, never made explicit against the alternatives a buyer is actually weighing (DIY, agency, in-house hire). OBJECTION handling is the site's quiet strength (the entire `/onboarding` + `/engagements` pairing is objection-handling). DESIRE is consistently partial — the work is described in terms of *what it is* far more than *what the buyer gets*.

---

## 3. Per-page gap detail

### `/` (home) — the doorway
- **Strength**: restraint is the credential; the Q3 status line is real, tasteful urgency. The lede hand-off into `/why-ai` is clean.
- **Gap (DESIRE)**: the lede sells the category problem ("most AI projects fail") before it sells the reader's *upside*. The reader's first emotional beat is fear, not desire.
- **Gap (PROOF)**: zero — by design, and correctly. The home spec explicitly bans a logo bar / testimonial block (`pages/home.md` §10). **Do not touch.** The doorway stays a doorway.
- **Buildable-now**: the booking secondary CTA (already specced in `contact-flow.md` §4) — the home Hero currently offers only `mailto:`. This is live-spec, not a new gap.

### `/why-ai` — the diagnosis
- **Strength**: the strongest *persuasion* page on the site. Cited stats, named sources, the leaders-vs-laggards quantified gap (1.7× / 3.6× / 2.7×). This is real proof — but it's proof that *the category problem and the winning pattern are real*, not that pouk.ai delivers them.
- **Gap (PROOF — the pivotal one)**: the page says "This is the gap pouk.ai works in" and "The diagnosis comes before the build. That is the order pouk.ai works in" — then ends. The reader has been shown, with rigor, what good looks like, and is given **no evidence pouk.ai has produced it**. The natural next question — "okay, show me you've done this" — has no answer on the page or anywhere downstream.
- **Gap (DESIRE)**: the "what the leaders do differently" section is the desire engine and it's good; it could carry a single concrete "what a fixed workflow looks like" beat to convert abstract pattern into felt outcome.

### `/roles` — self-identification
- **Strength**: the "Hired by" lines are sharp self-identification triggers — genuinely good conversion design.
- **Gap (PROOF)**: each role describes capability ("Builds custom solutions…") with no instance of that capability exercised. A reader self-identifies as "the Automator's client" and gets no proof pouk.ai has automated anything.
- **Gap (DIFFERENTIATION)**: the Builder card concedes the tools "collapsed what used to take a dev team six months into days" — which, unhandled, invites the objection "then why not DIY with Lovable myself?" The card states the capability but never closes the *why-you-not-me* loop.

### `/engagements` — evaluation / the ladder
- **Strength**: the `deRisks` field on every rung is **textbook risk-reversal** ("the first thing you buy is clarity, not a bet"). This is the best sales writing on the site and it is fully on-brand.
- **Gap (PROOF)**: the ladder describes the shape of work convincingly but shows no rung ever climbed. "Proves the approach on a single workflow" — for whom? With what result?
- **Gap (DESIRE)**: rungs are described in process terms ("a working result on one scoped workflow") more than outcome terms ("the workflow that was costing you X now runs itself"). Categorical-only outcome language is available without inventing a number.

### `/onboarding` — operational reassurance
- **Strength**: pure objection-handling — answers "will this be chaotic / unaccountable?" with named deliverables, paid Discovery (handles the "free spec work" suspicion), the day-30 check-in. Method-as-evidence, exactly as `final-state-strategy.md` §3.1 intends.
- **Gap (PROOF)**: method-as-evidence is the *substitute* for real evidence here, which is the right call pre-case-study — but it is still a description of how pouk.ai *would* run, not how an engagement *did* run. This is the page that would most benefit from a single real walkthrough later (GATED).

### `/principles` — trust loop (character)
- **Strength**: the most explicit differentiation on the site — the conclusion ("These principles are not faked. They are built — one project, one decision at a time — and the work is the only thing that proves them") is a deliberate anti-hype stance that *is* the differentiator.
- **Gap (PROOF — self-inflicted tension)**: the page repeatedly stakes its credibility on "the work is what proves them" / "the work is the only thing that proves them" — and then the site **never shows the work**. The page writes a check the funnel can't cash. This is the sharpest illustration of the core finding: pouk.ai has *named proof as the thing that matters* and then omitted it.
- **Correctly excluded**: no booking CTA here (trust-loop pages stay `mailto:`-only). Do not add sales pressure to this page.

### `/about` — trust loop (operator)
- **Strength**: first-person operator voice; the Pouākai origin handled with restraint. "builds AI that ships" is the desire/differentiation anchor.
- **Gap (PROOF)**: "operates at company-grade depth," "a consultancy that has wired these tools into production codebases can do it again" — these are **track-record assertions with no instance**. This is the most defensible place on the site to host *one* real, permissioned reference later (GATED), because the operator page is where a buyer asks "who has this person actually done this for?"

### `/writing` — top-of-funnel + retention
- **Strength**: essays-as-proof-of-thinking is itself a form of evidence (it shows pouk.ai *thinks* like a practitioner). The ungated email line is the right retention move.
- **Gap (PROOF)**: thinking-proof is not shipping-proof. An essay that walked through a *real* (anonymized, permissioned) engagement would be the single highest-value piece of content the site could carry — and it's the lowest-friction path to a case study (GATED, but the cheapest gate to clear; see §4 move #4).

---

## 4. Ranked sales moves worth adding

Ranked by **conversion impact × inverse effort**, each tagged with the real input it needs and its brand-fit verdict. Top of list = do first.

### Buildable NOW (no real-world evidence required)

**#1 — Activate the booking path everywhere it's specced (and verify it's live).**
- **Impact**: Highest. The site built a real scheduling product (`cal.pouk.ai`) and the funnel barely points at it; a booked slot is the highest-intent conversion signal available (`final-state-strategy.md` §6.1).
- **Effort**: Low — already fully specced in `contact-flow.md` (Approved). This is an *execution-status* gap, not a new spec.
- **Real input needed**: none (infra exists). Just confirm every governed conversion point renders the secondary booking CTA and the link resolves.
- **Brand-fit**: ✅ Fits — "or grab a time →" register, secondary/quiet, no scarcity. Already brand-checked in `contact-flow.md` §5.
- **Gated?** No. PM action: confirm build status against `contact-flow.md` §8 ACs; if any conversion point is missing it, that's an engineer ticket, not a PM gap.

**#2 — "Why pouk.ai vs. the alternatives" — an explicit differentiation surface.**
- **Impact**: High. Every buyer is silently comparing pouk.ai to (a) DIY with Lovable/Claude, (b) a generic AI agency, (c) hiring in-house. The site *implies* its edge but never names the comparison — and the Builder card actively invites the DIY objection without closing it (§3 `/roles`).
- **Effort**: Medium. New spec; reuses existing primitives (likely the `/why-ai` `FailureMode` or `/engagements` rung register). No new DS.
- **Real input needed**: none — this is positioning Arian already holds, made explicit. Categorical, no metrics.
- **Brand-fit**: ✅ Fits **if** written as honest trade-off framing ("DIY is right when…; pouk.ai is right when…"), ❌ off-brand if written as a competitor-bashing comparison table. The brand wins by candor, not by dunking.
- **Gated?** No. **Recommendation**: fold into `/engagements` or `/why-ai` as a section before spinning up a new route — adding a route needs Arian + masterplan update (the 8-page IA was retired for good reasons, `final-state-strategy.md` §7.1).

**#3 — Outcome-first language pass on `/roles` + `/engagements` (desire lift, no new evidence).**
- **Impact**: Medium-High. Converts process descriptions ("a working result on one scoped workflow") into felt-outcome descriptions ("the workflow that was eating a day a week, running itself") — categorical, no invented number. Lifts DESIRE across the two most commercial pages.
- **Effort**: Low. Copy-direction change within existing content shape; a content-draft revision, not a new page.
- **Real input needed**: none — categorical outcome framing only. **Hard guardrail**: no specific metrics unless real.
- **Brand-fit**: ✅ Fits — operator-first outcome language is on-brand; the line to not cross is fabricated specificity.
- **Gated?** No.

### GATED — needs real-world evidence pouk.ai does not have yet (or founder sign-off)

**#4 — One anonymized engagement walkthrough, published as a `/writing` essay.**
- **Impact**: Very High. The single highest-value content the site could carry — it's the first time the funnel would *show* pouk.ai shipping. Doubles as the seed of an eventual case study and re-feeds the whole funnel via the essay spine.
- **Effort**: Medium (writing) once the input exists.
- **Real input needed**: **one real engagement + client permission to describe it** (even anonymized). This is the cheapest proof-gate to clear because anonymization lowers the permission bar vs. a named case study.
- **Brand-fit**: ✅ Fits perfectly — "Notes from the work" is literally what `/writing` is for (`writing-page.json` lede).
- **Gated?** **YES** — gated on a real engagement + founder/client permission. This is the recommended *first* proof move the moment an engagement closes.

**#5 — A single real reference / quote on `/about` (operator track-record proof).**
- **Impact**: High at the trust-loop close — answers "who has this person actually done this for?" right where the buyer asks it.
- **Effort**: Low once the input exists.
- **Real input needed**: **one real, permissioned testimonial or named reference.** No invented testimonials — categorical posture holds absolutely here.
- **Brand-fit**: ◐ Conditional — *one* quietly-placed real quote fits; a testimonial *wall* is off-brand (slides toward "another agency"). Keep it to one, restrained.
- **Gated?** **YES** — gated on a real permissioned quote. Until then, `/about`'s method-and-track-record-assertion language is the honest placeholder.

**#6 — `/work` (case studies surface).**
- **Impact**: High for Build/Retainer-tier conversion — the dedicated proof destination.
- **Effort**: High (new route + content model + design + build).
- **Real input needed**: **2+ real, permissioned case studies** (the standing gate — `final-state-strategy.md` §7.1, masterplan §7.3, `meta/specs/backlog.md`).
- **Brand-fit**: ✅ Fits if restrained (outcome + method, not a logo parade).
- **Gated?** **YES — already correctly deferred.** Do not re-open until 2+ cases exist *and* permission is secured. Move #4 (one anonymized essay) is the lighter-weight precursor; ship that first, let it accumulate into #6.

**#7 — Quantified outcome / results beat (real metrics).**
- **Impact**: High — a single real "cut X from Y to Z" lands harder than any prose.
- **Effort**: Low once the number exists.
- **Real input needed**: **one real, measured, permissioned result.** Note: `/engagements` and `/onboarding` already promise measurement ("baseline you set up front," "tracked from the first day") — so a real number is a *product* of the method, earnable by design, not a stretch.
- **Brand-fit**: ✅ Fits — the brand already valorizes measurement; showing one real number is consistent, not hype. ❌ off-brand the instant a number is rounded-up or invented.
- **Gated?** **YES** — gated on a real measured outcome + permission. Pairs naturally with #4 and #6.

---

## 5. What is deliberately NOT recommended (off-brand hype — do not build)

Kept explicit so the audit can't be misread as "add more sales pressure."

- **Logo bar / "trusted by" strip** — banned on `/` for good reason; off-brand everywhere until real logos exist *and* permission, and even then risks "another agency."
- **Testimonial wall** — one restrained real quote (#5) yes; a wall, no.
- **Manufactured urgency / scarcity** — no countdowns, no "limited Q3 slots left," no "book now." The Q3 status line is the *only* scarcity signal and it's real; do not escalate it. (`contact-flow.md` §5 already bars this.)
- **Booking CTA on trust-loop pages** (`/principles`, `/about`) — a calendar ask on a character page over-sells. Already a hard rule.
- **Fabricated or rounded metrics, invented testimonials, borrowed logos** — categorical-only posture. Non-negotiable.
- **Pop-ups, modals, gated lead-magnets, hydrated capture forms** — out of scope per flow spec §10; off-brand and against the zero-JS contract.
- **A new `/work` or `/case-studies` route before evidence exists** — adding a route needs Arian + a masterplan update; the gate is content, not spec.

---

## 6. Recommended sequence

1. **Now (no gate)**: confirm/finish #1 (booking path live at every conversion point) — verify against `contact-flow.md` §8.
2. **Now (no gate, pure PM/content)**: #3 (outcome-language pass) and #2 (vs.-alternatives section, folded into an existing page) — both are spec/content work needing no evidence.
3. **First engagement closes**: #4 (one anonymized walkthrough essay) — the first real proof, lightest gate.
4. **As evidence accrues**: #7 (one real metric), then #5 (one real quote on `/about`), then #6 (`/work`, once 2+ cases + permission).

Moves 1–3 are **buildable now**; moves 4–7 are **GATED on real-world evidence pouk.ai does not have yet** and must not ship manufactured substitutes.

---

## 7. Open questions for Arian

- **#2 placement**: fold "vs. alternatives" into `/engagements` or `/why-ai` (PM recommendation), or is this worth a route? (A route needs your sign-off + masterplan update.)
- **#1 status**: is the booking secondary CTA actually live at every `contact-flow.md` §4 point, or is any conversion point still `mailto:`-only? (Determines whether #1 is "done" or an engineer ticket.)
- **Evidence pipeline**: is there a closed engagement today that could seed #4 (anonymized essay) with permission? That single decision unlocks the entire GATED tier.
- **Approval**: this is a PROPOSAL. No spec is authored and no build begins on moves #2–#7 until you approve and set priority.
