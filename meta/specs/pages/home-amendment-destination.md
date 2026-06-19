# Amendment: Home — Destination (re-open the IA lock; doorway → destination)

**Route**: `/`
**Status**: Approved — Arian ratified RR-1, RR-2, RR-3 (full section set) on 2026-06-15. RR-5 cascade obligations executed (see §7).
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-15
**Branch context**: `explore/raise-the-ceiling`
**Amends**: [`meta/specs/pages/home.md`](./home.md) (Approved) — authoritative for everything not delta'd here. This amendment **reverses** that spec's §4 IA lock and §10 "adding sections is a brand violation" ruling.
**Supersedes (on one clause)**: [`meta/specs/pages/home-amendment-raise-the-ceiling.md`](./home-amendment-raise-the-ceiling.md) (PROPOSAL) §4.2 "no `Statement` section on `/`" placement ruling — this amendment re-opens that question. The raise-the-ceiling display-doorway reversal (RR-1 Hero `size="display"`, RR-2 proportional CTA) is **carried forward intact**, not re-litigated.
**Companion (still live)**: [`meta/specs/features/contact-flow.md`](../features/contact-flow.md) (Approved) — governs the `/` Hero dual CTA (`mailto:` primary + `cal.pouk.ai` secondary). This amendment must not alter that contract.
**Feather policy**: governed centrally by [`meta/specs/features/feather-motif-policy.md`](../features/feather-motif-policy.md) (PROPOSAL).
**Source assessments**: `meta/assessments/creative-exploration.md` §1 (Direction H — display doorway, signature moment), `meta/assessments/ds-capability-vs-usage.md` §2 (#2 surface-band rhythm, #4 `Statement` beat — both idle), `meta/assessments/sales-content-gaps.md` §3 `/` + §4 (DESIRE/PROOF gaps; #1 booking, #3 outcome-language).
**Approved-track content map**: `meta/content/drafts/features/statement-beats.md` §5 (parked `/` Statement line), `meta/content/drafts/features/vs-alternatives.md` (`/why-ai`-bound), `meta/content/drafts/features/faq-section.md` (`/engagements` + `/onboarding`-bound), `meta/content/drafts/features/og-cards.md` (`/` card, fast-follow).
**Masterplan reference**: §4.1 (site layout), §4.3 (client-JS posture), §6.1 (HTML-weight gate, parity matrix), §2A (decision authority).

> **Superseded by the 2026-06-16 JS revocation (D-25, `meta/decisions/2026-06-16-revoke-zero-js.md`).** This spec's zero-added-JS / `client:*`-prohibition ACs (§2 locked clause, §6 "Zero added client-side JS" AC) and its HTML-weight + Lighthouse-as-gate ACs (§6) are no longer binding. Client JS is now permitted without restriction; Lighthouse and HTML weight are advisory, not gating. The accessibility (axe 0 violations) and `prefers-reduced-motion` ACs DO survive and remain binding. These clauses are left in place pending a full ACs rewrite; do not block a JS-introducing change on them.

---

## 1. Amendment scope

This amendment does the **biggest brand change on the site**: it converts `/` from a single-Hero **doorway** into a fuller **destination** homepage — a page a visitor can read top-to-bottom and leave converted, instead of a page whose only job is to hand off to `/why-ai`.

It is authored at Arian's explicit request to re-open the homepage IA. It therefore **reverses two ratified rulings** (see §2 and §7): the home.md §4/§10 IA lock ("single Hero, no further sections; adding sections is a brand violation"), and the raise-the-ceiling §4.2 "no `Statement` section on `/`" placement ruling that was *built on top of* that lock.

What it does **not** do:

- It does not touch the Hero's verbal content, the D-11 lede hand-off, or the D-12 status line. The display-scale Hero from the raise-the-ceiling amendment (RR-1/RR-2) **stays first and unchanged**.
- It does not invent net-new content where an approved-track draft already covers the need. Section content is mapped to existing drafts in §4; only genuinely new sections are flagged `net-new — content's lane`.
- It does not add a route, change the nav, or alter the funnel. `/why-ai`, `/roles`, `/engagements`, `/onboarding`, `/about` keep their jobs. The destination homepage **previews and routes into** those pages; it must not duplicate them (see §10).
- It does not author copy, compose recipes, or define DS primitives. PM lane only.

**The binding constraint, restated**: restraint is still the credential. The bar is *restrained AND striking* (creative §0) — a destination that reads as the brand's confident front room, never as a generic SaaS landing page with a feature grid, a logo wall, and three testimonial cards. The minimum set of sections that does the conversion job is the target, not a maximal marketing page. Every section below earns its place against the question: *does removing it cost a conversion the funnel can't recover downstream?*

---

## 2. What this amendment reverses, and what it leaves locked

**Reverses (ratified-decision reversal — Arian must re-ratify; see §7):**

- **home.md §4 IA lock** ("single hero block, a status line, a hairline footer … adding sections is a brand violation"). This amendment authorizes a bounded set of sections **below** the Hero. The single-Hero discipline is replaced by a *restrained-destination* discipline (§4's minimum section set + the failure modes in §3).
- **home.md §10 out-of-scope** ("A services / about / pricing block on `/` … adding sections is a regression"; "A featured-content carousel … the homepage is a doorway"). Specific items inside §10 stay banned (logo bar, testimonial wall, carousel, pricing tiers, personalization, scheduling embed — see §6 and §10 of this amendment); the blanket "no sections at all" is what reverses.
- **home.md §8 negative-assertion ACs** — "no anchor or text node renders between the email-CTA element and the SiteShell footer" and "no additional sections are present." These are **retired** and replaced by §5 of this amendment (which sections must render, in what order).
- **raise-the-ceiling §4.2** — "No `Statement` primitive renders as a section on `/`." This amendment re-opens whether `/` carries a `Statement` section. (The conviction-in-the-lede ruling stays available as a fallback if Arian declines the section — see RR-4.)

**Leaves locked (carried forward, off-limits):**

- **RR-1 / RR-2 (raise-the-ceiling)** — Hero at `size="display"` with a proportional CTA. The destination Hero **is** the display doorway; this amendment builds beneath it, it does not re-open Hero scale. (If raise-the-ceiling is not yet ratified, this amendment's Hero clause inherits whatever Hero scale Arian ratifies there; the section work below is independent of the Hero-scale call.)
- **D-11** — the integrated lede hand-off ending in `Here's why →` to `/why-ai`. The Hero lede is unchanged. (Open question: whether the hand-off stays in the lede or is reinforced by a structural link further down — see §9 OQ-3.)
- **D-12** — status-line text byte-identical at cutover.
- **D-13** — funnel nav order (`Why AI → Roles → Principles`, with `About` appended per the next-pages resolution).
- **contact-flow FS-CF-1** — `/` Hero CTA is `mailto:` primary + `cal.pouk.ai` secondary; `mailto:` stays primary, booking never forced. Any conversion section this amendment adds must obey the same one-primary/one-secondary discipline and must not stack a third CTA register.
- **Zero-added-JS / hydration model** (R-079, masterplan §4.3) and the **one-theme / no-new-token** discipline — locked. Every section below is composable with shipped DS primitives at `@poukai-inc/ui@2.17.0`, CSS-only.
- **Feather max-one rule** (feather-motif-policy §4) — at most one deliberate feather on `/` beyond the Wordmark.
- **Categorical-only / no-fabricated-proof posture** (sales-content-gaps §0, creative §0) — absolute. No invented metrics, no placeholder testimonials, no borrowed logos. `Quote` / `TestimonialBlock` stay **GATED** until real permissioned quotes exist; they are out of scope for this amendment (§10).

---

## 3. Updated success criteria (delta against home.md §3)

The base spec's doorway framing (Behavior / Signal / Failure mode) is **superseded** for `/`. New framing:

- **Behavior**: A first-time visitor lands on the display Hero, then keeps scrolling — and the page rewards the scroll with a short, confident argument for *why pouk.ai specifically*, ending in a conversion affordance. They convert on `/` itself (open `mailto:hello@pouk.ai` or click the `cal.pouk.ai` booking link) **or** enter the funnel deeper than `/why-ai` (e.g. straight to `/roles` self-ID or `/engagements`) with higher conviction than the doorway produced. A returning visitor still gets the fast re-orientation the doorway gave (Hero + status answers "alive and shipping" in under 20s) — the destination must not slow the returning-visitor path.
- **Signal**: Qualitatively — direct visitors scroll past the fold (the doorway never invited a scroll); `mailto:` and `cal.pouk.ai` clicks originate from `/` itself, not only from downstream pages; referrers still forward the link without reservation ("it got *more* finished, not more salesy"). When analytics arrive: scroll-depth past the Hero, on-`/` conversion clicks, and the `/`→`/why-ai` vs `/`→deeper split are the read-outs.
- **Failure modes (new / sharpened):**
  - **"The doorway became a generic SaaS landing page."** The single most important failure to avoid. If `/` grows a feature grid, a "trusted by" strip, three testimonial cards, an animated stat counter, or a "Get started free" hero pattern, the brand's whole "not another AI advisor" position collapses on its own front page. Mitigated by §4 (minimum section set), §2 (locked bans carried forward), and the categorical-only posture.
  - **"The destination buries the conversion."** A doorway converts fast because the CTA is right there. A destination risks pushing the conversion below three scrolls of prose. Mitigated by §5 (the Hero CTA stays; a closing conversion section is mandatory; the page is short).
  - **"The destination duplicates the funnel."** If `/` re-explains the failure modes (`/why-ai`'s job), re-lists the roles (`/roles`'s job), or re-climbs the rungs (`/engagements`'s job), it cannibalizes the pages it should route into and makes the site feel repetitive. Mitigated by §10 (each section previews-and-routes, never reproduces).
  - **"Restraint reversed into volume."** The raise-the-ceiling brief was *raise the ceiling without raising the volume*. Adding sections is the easiest way to break that. The strike must still come from composition, scale, and one stated conviction — not from quantity of sections. Mitigated by §4's minimum-set discipline and the §8 HTML-weight gate.
  - **Carried forward from raise-the-ceiling**: "the door shouts" (display Hero reads loud, not confident) and "softening reversed into brutalism" (display title reads as wall-of-type on a 13–14" laptop) — both still apply to the Hero beat.

---

## 4. Proposed section list (ordered) — the destination homepage

The Hero stays first and unchanged (display doorway per raise-the-ceiling). Below it, the **minimum set** that does the conversion job. Each section names its **job**, the **DS primitive(s)** likely to carry it (all shipped at `@poukai-inc/ui@2.17.0` — confirmed in the assessments), and the **exact content source** (an existing approved-track draft, or `net-new — content's lane`).

This is a PM proposal of *intent and order*. The designer owns the composition recipe (band placement, spacing, exact primitive variants); content owns the words. The order below is the PM recommendation; alternatives are flagged in §9.

### Section 1 — `SiteShell` (chrome) — UNCHANGED
- **Job**: Top nav (funnel order, D-13) + hairline footer (copyright + `mailto:` + `cal.pouk.ai` per contact-flow footer tier).
- **DS**: `SiteShell` organism (via `ShellWrapper`).
- **Content source**: existing — `meta/content/drafts/pages/home.md` footer line; nav routes per BaseLayout. No change.

### Section 2 — `Hero` (the display doorway) — UNCHANGED (carries forward raise-the-ceiling)
- **Job**: Front-door presence + the fast "alive and shipping" read + the primary conversion affordance + the D-11 hand-off into `/why-ai`.
- **DS**: `Hero size="display" entrance="stagger"`, `StatusBadge`, `Button` (proportional CTA), inline lede `<a>`. Per contact-flow: `mailto:` primary + `cal.pouk.ai` secondary in the CTA slot. Optional one feather colophon above the StatusBadge (feather-policy, opt-in).
- **Content source**: existing — `home.md` content draft (tagline, lede, status, CTA), verbatim. The display-scale confirmation is in `statement-beats.md` §6.

### Section 3 — Conviction `Statement` (the thesis beat) — NEW SECTION
- **Job**: The page's one raised-voice moment. States the single felt assertion — *pouk.ai is a technical partner that ships, not an advisor that decks* — once, at editorial scale, so the destination reads as *authored*, not as a list. This is the beat the doorway could not carry (the IA lock forbade it) and the reason re-opening the lock has teeth. It converts the implicit-in-the-lede conviction into an explicit, screenshot-able line.
- **DS**: `Statement` molecule (italic-serif, `--fs-statement`, once per page — idle everywhere on the site today per ds-capability §2 #4). On `--bg` (no band) so it reads as a quiet turn, not a banner.
- **Content source**: **net-new — content's lane**, but **anchored to an existing parked candidate**. `statement-beats.md` §5 parked the `/` line *for the record only* under the IA lock (`Most teams can build now. Few can ship and keep it running.`) and §2 records the felt assertion this section must land. If Arian ratifies RR-3, content promotes that parked line (or supplies a replacement) from "parked" to a real draft. No new conviction is invented — the assertion already exists across the lede and the parked line; this section gives it a home.
- **Restraint note**: exactly one `Statement` on the page. It carries no CTA, no stat, no attribution (the Statement discipline from `statement-beats.md` §0).

### Section 4 — "Why pouk.ai, specifically" — the differentiation preview — NEW SECTION
- **Job**: Close the PROOF/DIFFERENTIATION gap that the whole site is weakest on (sales-content-gaps §1 "a case for the category that never becomes a case for pouk.ai"). On the doorway this gap was acceptable because `/` only had to hand off. On a destination, a visitor who never clicks into the funnel must still get *one* concrete reason pouk.ai beats the alternatives they're silently weighing (DIY, agency, in-house). This section is a **short preview** — two or three lines of honest trade-off framing — that routes into `/why-ai`'s full `vs-alternatives` section, never reproduces it.
- **DS**: type-only on `--bg`, OR a single recessed `--surface-section` band (ds-capability §2 #2 — the site uses zero bands today; one band here is the "this page has depth" lever). Designer's vehicle call. **No `Stat` atoms** (categorical-only on this preview; the cited stats live on `/why-ai`). Could reuse the `FailureMode`/short-prose register, designer's choice.
- **Content source**: **net-new — content's lane**, **derived from an existing approved-track draft**. The full candor framing lives in `vs-alternatives.md` (`/why-ai`-bound, the three alternatives with "X is right when / pouk.ai is right when"). This homepage section is a *compression* of that draft's through-line (its §2 closing: "pouk.ai earns its place when the integration is the hard part and the work has to keep running after handoff") plus a link to read the full honest comparison on `/why-ai`. Content writes the compression; it must not restate the three full beats (that's `/why-ai`'s job — §10).
- **Why this and not a roles preview or a method preview**: differentiation is the single emptiest cell in the sales matrix on `/` (sales-content-gaps §2 — DESIRE/PROOF/DIFFERENTIATION all ◐ or ○ on `/`). One section, aimed at the weakest gap, beats three thin previews of pages the nav already lists.

### Section 5 — Closing conversion section (the destination's exit) — NEW SECTION
- **Job**: The destination must *end* on a conversion, not trail off. A short closing beat that restates availability and offers both conversion paths, so a visitor who read the whole page converts here without scrolling back to the Hero.
- **DS**: a quiet `Section` + the contact-flow dual CTA (`mailto:` primary + `cal.pouk.ai` secondary), reusing the `Button` shape already used in the Hero. Optionally framed by a `CTASection`-style recessed surface **only if** §4 did not already spend the page's one band (max one band per page is the restraint floor; the page should carry at most one `--surface-section` band total). No urgency, no scarcity (contact-flow §5).
- **Content source**: existing — `contact-flow.md` governs the mechanism; the CTA copy variants are content's lane per contact-flow §6 (the "or grab a time →" register). The closing availability line may reuse the status-line register; **net-new** if a distinct closing line is wanted, but recommend reusing the existing availability framing to avoid a second scarcity signal.
- **Restraint note**: this is the second appearance of the dual CTA on the page (Hero + close). That mirrors the existing deliberate `mailto:` duplication (Hero CTA + footer, composition R13) — a closing CTA on a scrollable page is standard and on-brand, *provided* it stays one-primary/one-secondary and carries no new urgency.

### Section 6 — End / `SiteShell` footer — UNCHANGED
- **Job**: Page terminator; global reachability (footer `mailto:` + `cal.pouk.ai`).
- **DS**: `SiteShell` footer.
- **Content source**: existing.

**Recommended order**: Hero → Statement → Why-pouk-specifically → Closing CTA → footer. Rationale: present (Hero) → assert (Statement) → justify (differentiation) → convert (close). The Statement sits high so the page's voice lands before the argument; the differentiation preview sits between conviction and conversion so the reader has a reason *before* the ask.

**Sections deliberately NOT proposed** (kept explicit so the minimum-set discipline is on the record):
- **No roles preview / role grid on `/`** — `/roles` owns self-ID; a preview would duplicate the nav and the page. (Reconsider only if Arian wants `/` to carry self-ID; flagged §9 OQ-2.)
- **No engagements/ladder preview** — `/engagements` owns the climb; a rung preview risks the comparison-table read the engagements page itself guards against.
- **No FAQ on `/`** — `faq-section.md` §8 explicitly scopes the FAQ to `/engagements` + `/onboarding` only; adding one to `/` violates that approved draft's question-set discipline.
- **No founder/about preview** — `/about` is a trust-loop page with OR semantics; previewing it on `/` muddies the funnel.
- **No stats band on `/`** — the cited third-party stats are `/why-ai`'s proof engine; reproducing them on `/` both duplicates the funnel and risks the "category proof masquerading as pouk.ai proof" confusion (sales-content-gaps §3).

---

## 5. Information architecture (the locked render contract)

The shipped page must render exactly these regions, in this order:

1. `SiteShell` chrome (nav + footer).
2. `Hero` (display doorway — unchanged).
3. `Statement` (conviction beat) — *if* RR-3 ratified; otherwise this region is absent and the conviction stays lede-carried (RR-4 fallback).
4. "Why pouk.ai" differentiation preview.
5. Closing conversion section (dual CTA).
6. `SiteShell` footer (terminator).

This replaces the home.md §4 three-block IA and retires the home.md §8 negative assertions. Exactly one `<h1>` (the Hero title) remains; new sections introduce `<h2>` headings as needed, descending cleanly (R-026, no skipped levels — note the page is no longer H1-only; the home.md content-draft Flag 3 "H1-only by design" is superseded for the destination).

---

## 6. New / revised acceptance criteria (additive to home.md §8)

Engineer-checkable. The home.md §8 negative-assertion ACs (no sections; no node between CTA and footer) are **removed**; everything else in home.md §8 (status-line byte-identity, `mailto:` anchor, Hero slots, OG/JSON-LD) carries forward unless contradicted below.

- [ ] Route renders at `/` with the §5 IA regions present and in the specified order.
- [ ] The `Hero` renders first, at the display scale ratified in the raise-the-ceiling amendment, with the dual CTA per contact-flow (`mailto:` primary + `cal.pouk.ai` secondary). Hero verbal content (tagline, lede, status, D-11 hand-off) is byte-identical to the current `/` content draft.
- [ ] If RR-3 is ratified: exactly one `Statement` molecule renders below the Hero; it carries no CTA, no stat, no attribution. If RR-3 is declined: no `Statement` section renders and the conviction stays lede-carried (RR-4).
- [ ] The "Why pouk.ai" section renders as a **preview** — it does not reproduce the three full `vs-alternatives` beats (verifier: the section is materially shorter than `/why-ai`'s vs-alternatives section and links to it).
- [ ] A closing conversion section renders with the contact-flow dual CTA; `mailto:` is the primary affordance and `cal.pouk.ai` is the subordinate secondary at this point too (visual-weight check per contact-flow §8).
- [ ] **No banned element renders**: no logo bar / "trusted by" strip, no testimonial cards or `Quote`/`TestimonialBlock`, no carousel, no pricing tiers, no animated stat counter, no `Stat` band, no newsletter signup, no scheduling embed/iframe, no personalization. (Verifier: DOM review against this list + home.md §10 carried-forward bans.)
- [ ] **At most one `--surface-section` band on the page** (the one-band restraint floor; max never exceeds the ds-capability §2 #2 rule). Verifier: built-CSS review.
- [ ] **Zero added client-side JS** (R-079, masterplan §4.3). No `client:*` directive, no island, no `<script>` beyond the existing first-party Matomo/Bugsink. The booking link is a plain `<a href>` (no Cal widget). Verifier: built-HTML grep + JS-budget measurement.
- [ ] **Lighthouse mobile**: Perf ≥ 95, A11y = 100, BP = 100, SEO = 100 (R-013), every region included. axe-core: 0 violations.
- [ ] **HTML-weight gate**: gzipped `/` HTML stays within the budget the raise-the-ceiling track operates under (the +25% post-cutover envelope per `meta/decisions/2026-05-17-home-illustration-and-density.md`). A destination homepage *will* add weight; it must still clear the gate. If the minimum section set breaches the budget, the section set is too large — cut before raising the budget. Verifier: `gzip -c built.html | wc -c` on the preview (masterplan §6.1).
- [ ] **`prefers-reduced-motion` honored** — Hero `entrance="stagger"` and the StatusBadge pulse collapse via the DS `:root !important` block; no new motion is introduced by any added section (no scroll-triggered reveals — they cost JS and break zero-JS; creative §1). Verifier: reduced-motion capture.
- [ ] **One-theme lock** — the page renders in the single shipped theme; no theme toggle, no dark-mode-only asset. Verifier: visual review.
- [ ] **No new design token** is introduced by the site for any section. If a section genuinely needs a token the DS does not ship, it is flagged as a DS dependency in §9 and the section does not ship until resolved (verifier: built-CSS uses only published `--*` tokens).
- [ ] **Feather max-one** — at most one deliberate feather beyond the Wordmark renders on `/` (feather-policy). Verifier: asset review.
- [ ] **Content-approval artifact** — each new section's copy is evidenced by an `Approved` content draft (the Statement line in a promoted `statement-beats.md` entry; the differentiation preview in a new or extended draft; the closing CTA copy per contact-flow). No section reaches `Built` on unapproved copy (PM DoD §7).
- [ ] OG card for `/` — governed separately by `features/og-cards.md`; the destination does not change the OG contract beyond what that spec covers (the `/` card is fast-follow there). Verifier: OG unchanged unless og-cards is separately revised.

---

## 7. Ratified-decision reversal — Arian must re-ratify

This amendment cannot reach `Approved` until Arian confirms each reversal. Each is a numbered RR with a PM recommendation.

- **RR-1 — Re-open the IA lock (home.md §4/§10).** Authorize a bounded set of sections below the Hero, replacing "single Hero, adding sections is a brand violation" with a "restrained destination" discipline. This is the load-bearing reversal; everything else depends on it. **Recommendation: reverse — but hold the minimum-set line in §4 hard.** The doorway was the right call for a launch holding-page; out of beta, with 12 routes and a funnel, `/` carrying only a hand-off under-uses the brand's best-trafficked surface. The risk is not the re-open; it's scope creep after it. Approve the re-open *and* the §4 minimum set together, or not at all.

- **RR-2 — Retire the home.md §8 negative assertions.** The "no section between CTA and footer" and "no additional sections" ACs are incompatible with a destination and are replaced by §5/§6 of this amendment. **Recommendation: reverse — mechanical consequence of RR-1.** (If RR-1 is declined, RR-2 is moot.)

- **RR-3 — Supersede the raise-the-ceiling §4.2 "no `Statement` section on `/`" ruling.** Allow one `Statement` molecule as the destination's conviction beat (§4 Section 3). **Recommendation: reverse — the Statement is the single highest-value addition.** It is the beat the IA lock specifically forbade; re-opening the lock without using it would be re-opening it for the weaker additions only. It is pure-site (the `Statement` primitive ships today) and content already parked the candidate line.

- **RR-4 — Fallback if RR-3 declined.** If Arian re-opens the IA (RR-1) but does *not* want a `Statement` section, the conviction stays lede-carried per the raise-the-ceiling §4.2 ruling, and Section 3 is omitted; Sections 4–5 still ship. **Recommendation: only take RR-4 if RR-3 feels like too much voice on the front page** — but note that without the Statement, the destination's "authored" quality leans entirely on the differentiation preview, which is a weaker spine.

- **RR-5 — Cascade obligations on approval.** On `Approved`, the PM owes: (a) a supersession annotation on `home-amendment-raise-the-ceiling.md` §4.2 (its no-Statement ruling is now overtaken); (b) a one-line note on the `home.md` content draft Flag 3 (H1-only-by-design is superseded for the destination); (c) routing the new section copy needs to `pouk-ai-content` (promote the parked Statement line; draft the differentiation preview). **Recommendation: accept — these keep the cross-spec record clean.** Not executed in this amendment.

If Arian declines RR-1, this amendment is withdrawn and `/` stays the display doorway (raise-the-ceiling track only).

---

## 8. Open questions / dependencies

- **BLOCKING `Approved` — RR-1 through RR-4 (Arian's calls).** See §7. Nothing downstream proceeds until the re-open and the Statement question are ratified.
- **Sequencing dependency — raise-the-ceiling.** This amendment builds *beneath* the display Hero. If the raise-the-ceiling amendment is not yet ratified, this one can still proceed on the section work, but the Hero clause inherits whatever Hero scale Arian ratifies there. Recommend ratifying raise-the-ceiling (RR-1/RR-2 there) first or in the same pass, so the Hero is settled before the designer composes the sections beneath it.
- **DS dependency — none expected.** Every primitive named (`Hero size="display"`, `entrance="stagger"`, `Statement`, `Section`, `--surface-section` band via an organism, `Button`, optional feather) ships at `@poukai-inc/ui@2.17.0` (confirmed: creative §"DS gaps surfaced" = None; ds-capability §2 = all pure-site). **If** the designer finds the closing-conversion section wants a `CTASection` surface variant the DS doesn't expose, that is the only candidate DS gap — flag to Arian, do not author the DS API (masterplan §2A). No new token may ship without this flag (§6 AC).
- **Content drafts needing approval before `Built`:**
  - `statement-beats.md` — the parked `/` line (§5) must be promoted from "parked / not for build" to a real Statement draft and `Approved` (currently the draft *confirms* no `/` Statement under the old lock). This is a content revision triggered by RR-3.
  - **Net-new differentiation-preview draft** — a compression of `vs-alternatives.md`'s through-line for `/`, with a link to `/why-ai`. Either a new `meta/content/drafts/` file or an extension of an existing one; content's call. Must not reproduce the three full beats.
  - Closing-CTA copy — per `contact-flow.md` §6 (content's lane); may already be covered if the `/` Hero CTA variants are drafted.
- **Composition dependency.** `pouk-ai-designer` revises `meta/compositions/pages/home.md` (currently a single-Hero recipe) into a destination recipe: band placement (max one), Statement spacing, closing-section surface, and the 13–14" capture confirming the page reads as restrained-destination, not SaaS-landing (the §3 failure mode is a judged criterion needing a screenshot).
- **OG implications.** The `/` OG card (og-cards.md, fast-follow) previews the page's claim. If the destination's conviction `Statement` becomes the page's defining line, the `/` OG card copy should align to it when that card is produced — flag for the og-cards content pass; not a blocker for this amendment.
- **Flow-spec note.** `flows/visitor-to-conversation.md` describes `/` as the doorway/first-touch. On approval, that spec needs a one-line note that `/` now also carries an on-page conversion exit (not only a hand-off). Cascade, not blocker — flagged.

---

## 9. Other open questions (non-blocking, designer/content to resolve in their lanes)

- **OQ-1 — band or no band.** §4 allows the differentiation preview *or* the closing section to sit on the page's one `--surface-section` band (never both — one band total). Recommendation: give the band to the closing-conversion section (the band signals "this is the moment to act"); keep the Statement and the differentiation preview on `--bg`. Designer's final call.
- **OQ-2 — does `/` carry self-ID?** PM recommendation is no (roles preview duplicates `/roles`). If Arian wants `/` to carry a light self-ID nudge, that is a fifth section and a separate decision — flag, do not add silently.
- **OQ-3 — D-11 hand-off treatment.** With a full page below it, does the lede's `Here's why →` hand-off stay the only route into `/why-ai`, or does the differentiation preview's link become the primary route in? Recommendation: keep D-11 in the lede unchanged (it's locked) and let the preview's link be an additional, lower-weight route — two routes into `/why-ai` is fine on a longer page. Content/designer confirm.
- **OQ-4 — Statement placement.** §4 recommends the Statement high (right after the Hero). An alternative is placing it as the closing line above the CTA (the "summit Statement" pattern `/engagements` uses). Recommendation: high placement on `/` (the doorway's job is to assert early); the summit pattern suits an argument page that earns the conviction over a scroll, which `/` does not. Designer may test both.

---

## 10. Out of scope

- **Reproducing any downstream page's body on `/`.** The differentiation preview compresses-and-links `/why-ai`'s vs-alternatives; it does not reproduce the three beats. No failure-mode list (that's `/why-ai`), no role cards (that's `/roles`), no rung ladder (that's `/engagements`), no FAQ (that's `/engagements`/`/onboarding` per faq-section.md §8), no founder bio (that's `/about`).
- **Any GATED proof move.** `Quote`, `TestimonialBlock`, a logo bar / "trusted by" strip, a case-study teaser, a real-metric stat band — all GATED on real permissioned evidence pouk.ai does not have yet (sales-content-gaps §4–§5). None ships on `/` until that evidence exists, and even then a *wall* never ships on the front page.
- **Adding a route, changing the nav, or altering the funnel.** This is a `/`-only amendment.
- **Changing the Hero's verbal content, D-11, D-12, or the contact-flow CTA contract.**
- **Re-opening Hero scale (RR-1/RR-2 of raise-the-ceiling).** Carried forward, not re-litigated here.
- **Color, new tokens, scroll-triggered motion, a second figurative element, dark mode, personalization, A/B variants.**
- **Authoring copy, composition recipes, or DS component APIs** (content / designer / `@poukai-inc/poukai-ui` lanes).
- **The OG card content for `/`** (governed by og-cards.md; this amendment only flags the alignment implication in §8).
