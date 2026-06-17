---
route: /
feature: home-destination-sections
status: Approved
version: 1.0
lastUpdated: 2026-06-15
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/home-amendment-destination.md (Approved 2026-06-15 — RR-1/RR-2/RR-3 ratified, full section set)
relatedDrafts:
  - meta/content/drafts/pages/home.md (Approved — Hero copy is locked and OUT OF SCOPE here)
  - meta/content/drafts/features/statement-beats.md (Draft — §5 parked `/` line is promoted by RR-3 into this draft's Statement block)
  - meta/content/drafts/features/vs-alternatives.md (Draft — `/why-ai`-bound; this draft COMPRESSES its through-line, does not reproduce its three beats)
  - meta/content/drafts/features/contact-flow.md (Approved — governs the closing dual-CTA copy register)
compositionReference: none yet (designer revises meta/compositions/pages/home.md into a destination recipe after this draft lands — amendment §8)
constraints:
  - ZERO em-dashes (—) and zero en-dash separators in all visible copy. Periods, commas, or hyphens only. (Brand + skill rule, this cycle.)
  - No fabricated metrics, no invented proof, no testimonials.
  - One copy register across all three blocks, matching the Approved /home.md voice.
---

# Content: Home destination sections (`/` — Statement · Why pouk.ai · Closing CTA)

**Route**: `/`
**Status**: Approved — Arian approved all three blocks as recommended (Q1 Sharpest, Q2 mirror link, Q3 keep availability, Q4 "a few") on 2026-06-15. Cleared for `Built`.
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-06-15
**Governing spec**: `meta/specs/pages/home-amendment-destination.md` §4 (the three new sections + content sources), §3 (failure modes), §10 (out of scope)
**Composition reference**: none yet — the designer composes band placement, Statement spacing, and the closing surface against these real copy lengths (amendment §8, §9 OQ-1/OQ-4).

This draft delivers the copy for the **three new sections** the destination amendment authorizes below the locked display Hero: the conviction `Statement` (Section 3), the "Why pouk.ai, specifically" differentiation preview (Section 4), and the closing conversion section (Section 5). The Hero (tagline, lede, status, CTA) and the `SiteShell` chrome are **unchanged and out of scope** — they live in the Approved `meta/content/drafts/pages/home.md` and are not touched here.

The binding brand constraint (amendment §3): the destination must read as the brand's confident front room, **never** as a generic SaaS landing page. Three sections is the minimum set; each previews-and-routes, none reproduces a downstream page. Every line below is written against the "generic SaaS landing page" and "duplicates the funnel" failure modes.

---

## 1. Drafting notes

- **Audience read**: the same first-time operator the Hero greets, now choosing to scroll. They have shipped before, they can build, and they are silently weighing pouk.ai against doing it themselves, hiring an agency, or hiring in-house. The page now has to reward the scroll with one stated conviction and one honest reason, then offer the exit, before the operator decides the page is "another AI advisor" and leaves.
- **Outcome read** (amendment §4):
  - **Section 3 (Statement)** — land the page's one felt assertion in a single italic-serif line: *pouk.ai is a technical partner that ships, not an advisor that decks.* No CTA, no stat, no attribution. Promote and refine the parked `statement-beats.md` §5 candidate (RR-3).
  - **Section 4 (Why pouk.ai, specifically)** — give the visitor who never clicks into the funnel *one* concrete, honest reason pouk.ai beats the alternatives, in a short preview (heading + ~2-3 lines, under ~40 words body), ending in a link to the full comparison on `/why-ai`. Honest trade-off framing, not a brag. Must NOT restate the three `vs-alternatives` beats (amendment §10).
  - **Section 5 (Closing conversion)** — end the page on a conversion. Restate availability in the existing register, offer `mailto:` primary + `cal.pouk.ai` secondary per contact-flow, no second scarcity signal.
- **Voice anchor**: agent §4.1 (direct — lead with the noun, one idea per sentence), §4.2 (operator-first — the reader can build; respect it), §4.4 (no marketing-speak — and the section-specific drift to guard is the "SaaS landing" register), §4.6 (implied confidence over claimed — assert how pouk.ai works; never predict the reader's result). The register target is the Approved `/home.md` lede ("operators who'd rather ship than speculate") and the Approved `vs-alternatives.md` candor posture. One voice across all three blocks.
- **Assumptions** (flag for Arian to accept or override):
  - **A1 — the Statement refines the parked line off its em-dash-free original.** The parked `statement-beats.md` §5 line (`Most teams can build now. Few can ship and keep it running.`) is already two clean period-stopped sentences with no dash. RR-3 promotes it; I recommend it near-verbatim as the Sharpest option, with the period split preserved (it carries no dash, so it satisfies the zero-dash constraint as-is). See §2 + §5.
  - **A2 — the differentiation preview compresses the `vs-alternatives` closing line, not the three beats.** The full draft's through-line (`pouk.ai earns its place when the integration is the hard part and the work has to keep running after handoff`) is the single sentence I compress. The preview names the honest trade-off once, then links out. It does not list DIY / agency / in-house (that is `/why-ai`'s job — amendment §10).
  - **A3 — the closing section reuses the Approved availability register, not a new scarcity line.** The status line `Currently taking conversations for Q3.` is the page's one availability signal. The closing section restates availability without adding a second scarcity cue (amendment §4 Section 5: "recommend reusing the existing availability framing to avoid a second scarcity signal"). I propose a closing line that gestures at the same availability state in the closing register without re-stamping the exact status string (which would read as a literal repeat of the Hero badge two scrolls down).
  - **A4 — the closing CTA copy is the Approved contact-flow line, reused.** The closing dual CTA is `hello@pouk.ai` (primary) + `Or grab a time →` (secondary), both already Approved in `contact-flow.md` §2. This draft does not invent a new CTA register; it states the closing line that precedes them and confirms the labels. `mailto:` stays primary (FS-CF-1).
  - **A5 — heading levels.** The Statement carries no heading (it is a body conviction beat, not a section header — `statement-beats.md` §0 discipline). Section 4 and Section 5 each introduce one `<h2>`, descending cleanly from the single Hero `<h1>` (amendment §5; R-026 no skipped levels). The home.md Flag 3 "H1-only by design" is superseded for the destination (amendment §5, cascade RR-5b).

---

## 2. Copy

Three blocks, in the amendment §5 render order: Hero (unchanged) → **Statement** → **Why pouk.ai** → **Closing CTA** → footer (unchanged). Each block names the amendment section and outcome it satisfies.

### Block: Conviction Statement (amendment §4 Section 3 — the thesis beat)

The page's one raised-voice moment. Italic-serif `Statement` molecule at `--fs-statement`, on `--bg` (no band). One line. No CTA, no stat, no attribution, no quote marks (the `statement-beats.md` §0 Statement discipline).

- **Statement (recommended)**: `Most teams can build now. Few can ship it and keep it running.`

*(Promotes the `statement-beats.md` §5 parked `/` line, lightly sharpened: "ship it and keep it running" replaces "ship and keep it running" so the second sentence's two verbs share one object ("it" = the thing built in sentence one), tightening the build-then-ship logic into a single felt arc. Two short period-stopped sentences, zero dashes. It lands the felt assertion — pouk.ai is a technical partner that ships, not an advisor that decks — as a category line the operator already half-believes: building is cheap now; shipping and operating is the scarce part. Alternatives, including the verbatim parked line, in §5.)*

### Block: "Why pouk.ai, specifically" — differentiation preview (amendment §4 Section 4)

A short preview. Heading + body (under ~40 words) + a link to the full comparison on `/why-ai`. Honest trade-off framing. Compresses the `vs-alternatives.md` through-line; does NOT reproduce the three beats. On `--bg` or the page's one recessed band (designer's call, amendment §9 OQ-1). No `Stat` atoms (the cited stats live on `/why-ai`).

- **Heading (H2)**: `Why pouk.ai, specifically`
- **Body (recommended)**: `You can build this yourself, hire a generic agency, or staff an in-house team. Each is the right call sometimes. pouk.ai earns its place when the hard part is wiring the work into the systems you already run, and keeping it running after the demo.`
- **Link text**: `See when to hire us, and when not to →`
- **Link href**: `/why-ai`

*(Body word count: ~44. Slightly over the ~40-word target — see §6 Flag 1 for the trim candidate. The body names the three alternatives in one clause without explaining them (the explanation is `/why-ai`'s job), concedes that each is sometimes right (the candor posture, not a brag), then states the one pouk.ai condition compressed from `vs-alternatives.md`'s closing line. The link text carries the candor signal forward — "and when not to" is the exact promise that earns the click into the full comparison. Alternatives in §5.)*

### Block: Closing conversion section (amendment §4 Section 5 — the destination's exit)

A short closing beat that restates availability and offers both conversion paths. Reuses the contact-flow dual CTA (`mailto:` primary + `cal.pouk.ai` secondary) and the existing availability register. No urgency, no scarcity, no second scarcity signal beyond the Hero's status line. Optionally on the page's one band if Section 4 did not spend it (designer's call, amendment §9 OQ-1).

- **Closing line (H2)**: `If the hard part is shipping it, let's talk.`
- **Availability line (sub-line, reuses the status register)**: `Taking on a few engagements this quarter.`
- **Primary CTA (unchanged, from contact-flow.md / home.md)**: `hello@pouk.ai` → `mailto:hello@pouk.ai`
- **Secondary CTA (unchanged, from contact-flow.md §2)**: `Or grab a time →` → `https://cal.pouk.ai`

*(The closing line callbacks the Statement and the differentiation preview ("the hard part is shipping it") so the page closes its own loop, then makes the ask in operator-plain language. The availability sub-line gestures at the same Q3 availability the Hero status badge states, in the closing register, without re-stamping the exact status string two scrolls down — it is the same single availability signal, restated, not a second scarcity cue. The CTAs are the Approved contact-flow pair, verbatim; `mailto:` stays primary. Alternatives for the closing line in §5.)*

---

## 3. Page-level SEO copy

**None.** These are body sections on an existing route; they carry no `<title>`, meta, or OG surface of their own. The `/` page meta (`<title>`, `<meta description>`, OG) is owned by the Approved `home.md` §3 and is **unchanged** by this amendment (amendment §6 AC: "OG unchanged unless og-cards is separately revised").

- **Heading hierarchy note**: the page keeps its single Hero `<h1>` (the tagline). This draft introduces exactly two `<h2>` headings — Section 4 (`Why pouk.ai, specifically`) and Section 5 (`If the hard part is shipping it, let's talk.`). The Statement carries **no heading** (it is a body conviction beat). No level is skipped: H1 → H2, H2, with no H3 needed. This supersedes the home.md Flag 3 "H1-only by design" for the destination (amendment §5). Confirmed clean against R-026.

---

## 4. Voice rationale

One clause per significant line so a future revision argues against a reason, not a vibe.

- **Statement — `Most teams can build now. Few can ship it and keep it running.`** Chosen over a direct "we ship, they deck" assertion because the category-observation framing (building is cheap, shipping-and-operating is scarce) lets the reader arrive at pouk.ai's value themselves rather than being told it. It asserts a truth about the market (§4.6 implied confidence), carries no "we", no promise, no future tense. The two-verb second sentence ("ship it and keep it running") is the whole differentiation in five words: not the demo, the operation. Zero dashes by construction (two period-stopped sentences).
- **Statement does not name pouk.ai** — a Statement names a conviction the reader already felt (`statement-beats.md` §0); naming the brand would turn the raised-voice beat into a tagline. The page already said "pouk.ai" in the Hero; the Statement is the page's voice, not a second logo.
- **Why-pouk heading — `Why pouk.ai, specifically`** — the amendment's own section name, kept verbatim because "specifically" is the operative word: it promises the reader the one concrete reason, not a generic value-prop. A bare "Why pouk.ai" would read as a SaaS section header (the named failure mode); "specifically" signals the section respects a reader who has already heard generic pitches.
- **Why-pouk body — "You can build this yourself…"** — opening on the reader's own capability (§4.2 operator-first) and conceding "each is the right call sometimes" is the candor move inherited from `vs-alternatives.md`: a brand confident enough to name the alternatives reads as the one worth hiring. "Earns its place when…" is the implied-confidence register (§4.6), not claimed superiority. The pouk.ai condition ("wiring the work into the systems you already run, and keeping it running after the demo") is the `vs-alternatives.md` closing line compressed to one clause, so the homepage rhymes with the proof on `/why-ai` without reproducing it.
- **Why-pouk link — `See when to hire us, and when not to →`** — mirrors the `vs-alternatives.md` recommended H2 ("When to hire pouk.ai, and when not to") so the link previews the destination's own candor in the destination's own words. "And when not to" is the two-sided promise that makes the click feel like reading an honest assessment, not entering a funnel. The trailing arrow matches the site's affordance grammar (`Here's why →`, `Or grab a time →`). Dash-free: I use a comma where the `vs-alternatives` heading used an em-dash, satisfying the constraint without losing the rhythm.
- **Closing line — `If the hard part is shipping it, let's talk.`** — the conditional opener callbacks both the Statement ("ship it and keep it running") and the differentiation body ("the hard part is wiring…"), closing the page's loop so the reader feels they have arrived rather than been delivered a CTA. "Let's talk" is operator-plain (§4.2), not "Get started" or "Book a demo" (SaaS register, the named failure). The "if" keeps it honest: it only invites the reader for whom the page is actually true.
- **Availability sub-line — `Taking on a few engagements this quarter.`** — reuses the status register ("Currently taking conversations for Q3.") without re-stamping the exact status string two scrolls below the badge that already carries it. "A few engagements this quarter" is the same single availability signal in the closing voice, categorical (no number that implies a fabricated count of slots), no urgency, no "limited", no "!". It is restatement, not a second scarcity cue (amendment §4 Section 5 / contact-flow §5).
- **Closing CTAs — `hello@pouk.ai` + `Or grab a time →`** — the Approved contact-flow pair, reused verbatim. `mailto:` is the primary affordance (FS-CF-1, locked); booking is the quiet subordinate secondary. The page does not stack a third CTA register (amendment §2, contact-flow §5). The address is the label (the established `/home.md` rationale: showing the address removes the click-to-reveal step and reads as operator-grade directness).
- **No marketing-speak anywhere** — no "leverage", "seamlessly", "unlock", "transform", "solutions", "journey", no "Get started free", no feature-grid verbs. The banned list (§4.4) is a REQUEST_CHANGES gate; every line above replaces the tempting filler with a specific noun or verb ("wiring the work into the systems you already run" not "integrate seamlessly").

**One-register check** (one voice across the three blocks): all three sit in the Approved `/home.md` register — declarative, operator-first, category-honest, no fake plurality except the deliberate conversational "let's"/"us" in the CTA register (which contact-flow and home.md already use). The Statement asserts, the preview concedes-then-claims, the close invites. No block shifts into pitch.

---

## 5. Headline alternatives

High-stakes lines: the Statement (the page's one raised-voice line), the differentiation body's opening framing, and the closing line.

### Conviction Statement (the page's defining line)

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Most teams can build now. Few can ship and keep it running.` | The `statement-beats.md` §5 parked line verbatim — zero new claim, RR-3 promotes exactly this. Already dash-free. | The two verbs ("ship", "keep it running") have no shared object, so the build-then-operate logic is slightly looser than it could be. |
| Sharpest (recommended) | `Most teams can build now. Few can ship it and keep it running.` | One-word tightening of the parked line ("ship it") gives both closing verbs a shared object, sharpening the build-then-operate arc without changing the claim. | "It" assumes the reader carries "build" forward across the period; correct on a screen-able single beat, marginally looser if read in isolation. |
| Weirdest | `Anyone can build it now. Almost no one can keep it alive.` | Most arresting; "keep it alive" is vivid operator-register and names the operations gap hardest. | "Keep it alive" verges on dramatic for the brand's restraint; "anyone/almost no one" is a sharper category claim that drifts from the parked line RR-3 promoted into a fresh assertion (would need Arian to authorize a new line over a promotion). |

**Recommendation: the Sharpest option.** It is the parked line RR-3 ratified, improved by one word, still dash-free, still a promotion not an invention.

### Differentiation preview — body opening framing

| Option | Copy (opening) | Rationale | Risk |
|---|---|---|---|
| Safest | `There are three honest alternatives to hiring pouk.ai: doing it yourself, a generic agency, or an in-house team.` | Names the candor up front; "honest alternatives" signals the two-sided read. | "Three honest alternatives" is slightly listy; reads a touch closer to a comparison-table opener than a prose concession. |
| Sharpest (recommended) | `You can build this yourself, hire a generic agency, or staff an in-house team. Each is the right call sometimes.` | Second-person opener respects the operator's capability first; "each is the right call sometimes" is the candor, compressed. Flows straight into the pouk.ai condition. | Slightly over the ~40-word body target once the pouk.ai clause is added (see §6 Flag 1). |
| Weirdest | `Hire pouk.ai last. Build it yourself first if you can, hire an agency if it's commodity work, staff a team if it's permanent.` | Maximum candor; "hire pouk.ai last" is the anti-pitch that disarms a skeptical operator. | "Hire pouk.ai last" risks under-selling on the page whose job is to convert; the second sentence starts listing the three full beats, brushing the "duplicates `/why-ai`" line. Holstered. |

**Recommendation: the Sharpest option**, trimmed per §6 Flag 1 if the designer needs the word budget.

### Closing line

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Ready to talk?` | Shortest, unambiguous, zero risk. | Generic; loses the page-loop callback and reads like any SaaS closer. |
| Sharpest (recommended) | `If the hard part is shipping it, let's talk.` | Callbacks the Statement and the differentiation body; the "if" keeps the invitation honest (only for the reader the page is true for). | Conditional opener is one beat longer than a bare CTA header; the designer should confirm it sits as a closing line, not a paragraph. |
| Weirdest | `You've read the whole page. You already know if this is your problem.` | High-conviction, trusts the reader entirely; very operator. | Two sentences for a closing header; "you've read the whole page" is a touch knowing/meta and assumes a full scroll that not every converter completes. Holstered. |

**Recommendation: the Sharpest option.**

*(No alternatives offered for the CTA labels themselves — `hello@pouk.ai` and `Or grab a time →` are Approved verbatim in `home.md` and `contact-flow.md`; this draft reuses them, it does not re-open them.)*

---

## 6. Composition-fit flags

For the designer's destination-recipe pass (amendment §8 — band placement, Statement spacing, closing surface, 13-14" capture).

- **Flag 1 — differentiation body length (~44 words vs ~40 target).** The recommended body runs ~44 words. If the composition wants the preview at or under ~40, the trim candidate is the concession sentence: `Each is the right call sometimes.` → fold into the first sentence as a trailing clause (`…or staff an in-house team, and each is sometimes the right call.`), saving ~3 words, OR drop "and keeping it running after the demo" from the pouk.ai clause (NOT recommended — that is the load-bearing differentiator). Recommend keeping ~44 and letting the composition hold it; it is still materially shorter than the full `/why-ai` `vs-alternatives` section (amendment §6 AC: preview must be materially shorter and link out — both hold here).
- **Flag 2 — Statement as a single screen-able line.** The recommended Statement is two short sentences (~11 words total). Confirm `--fs-statement` (display italic serif) holds two sentences on one or two lines without reading as a paragraph on a 13-14" laptop. If it strains to two lines awkwardly, the break is natural at the period (sentence 1 / sentence 2 on separate lines) — that is a clean stack, not a wrap. No copy change needed; flagged for the capture.
- **Flag 3 — one band, two candidate sections.** Amendment §9 OQ-1 gives the page's single `--surface-section` band to EITHER the differentiation preview OR the closing section, never both. PM recommendation (OQ-1) is to give the band to the closing section ("this is the moment to act") and keep the Statement and the preview on `--bg`. Copy works under either choice; the closing line and availability sub-line read fine on a recessed band, and the differentiation body reads fine on `--bg`. Designer's final call.
- **Flag 4 — closing line + availability sub-line as a two-line stack.** Section 5 carries a closing H2 line, an availability sub-line, then the dual CTA. Confirm the availability sub-line reads as a quiet supporting line under the closing H2, not as a competing second headline. If the stack feels heavy, the availability sub-line can drop (the Hero status badge already carries the single availability signal) — but the closing restatement is the recommended default (amendment §4 Section 5). Flagged in §7 Q3.
- **Flag 5 — dual CTA appears twice on the page (Hero + close).** This is the second appearance of the `mailto:` + booking pair (amendment §4 Section 5 notes this mirrors the existing Hero-CTA + footer `mailto:` duplication, composition R13). On-brand provided it stays one-primary/one-secondary with no new urgency. Copy holds that discipline; designer confirms the closing CTA does not visually out-weigh the Hero CTA.

---

## 7. Open questions for Arian

Tight list — defaults proposed where reasonable.

- **Q1 — Statement: promote verbatim or take the one-word sharpen?** Recommended: Sharpest (`Most teams can build now. Few can ship it and keep it running.`). The parked-verbatim Safest (`…ship and keep it running.`) is the drop-in if you'd rather promote untouched. Either is dash-free and on-spec.
- **Q2 — differentiation link text.** Recommended: `See when to hire us, and when not to →` (mirrors the `vs-alternatives` H2 candor). If you'd rather the link be plainer, the fallback is `Read the honest comparison →`. Confirm.
- **Q3 — closing availability sub-line: keep or drop?** Recommended: keep `Taking on a few engagements this quarter.` as a quiet restatement in the closing register. If you'd rather not restate availability two scrolls below the Hero badge (to avoid any second-signal read), drop the sub-line and let the closing H2 + dual CTA stand alone. Both are amendment-compliant; the keep is the §4 Section 5 recommendation.
- **Q4 — "a few engagements" categorical framing.** The sub-line says "a few engagements" — categorical, no number, no scarcity word. Confirm you're comfortable with the soft-quantity "a few" (it implies limited capacity without a fabricated slot count). If even "a few" reads as scarcity-adjacent, the neutral fallback is `Open to new engagements this quarter.` (no quantity at all). Recommended: "a few" — it is honest and not a scarcity tactic.

---

## 8. Out of scope

- **The Hero copy** (tagline, lede, D-11 hand-off, status badge, Hero CTA) — locked, owned by the Approved `home.md`, byte-identical at cutover (amendment §2, §6). Not touched here.
- **Reproducing `/why-ai`'s `vs-alternatives` section** — the differentiation preview compresses-and-links the through-line; it does not restate the DIY / agency / in-house beats (amendment §10). The full three beats stay `/why-ai`'s job.
- **Any GATED proof move** — no `Quote`, `TestimonialBlock`, logo bar, "trusted by" strip, case-study teaser, or real-metric stat band (amendment §2, §10). No fabricated metrics, no testimonials in any line above.
- **A roles preview, an engagements/ladder preview, a FAQ, or a founder/about preview on `/`** — explicitly not proposed (amendment §4 "Sections deliberately NOT proposed"). This draft authors none.
- **The page `<title>` / meta / OG copy** — owned by `home.md` §3, unchanged (amendment §6). The `/` OG card is governed separately by `og-cards.md`; if the Statement becomes the page's defining line, that card's copy alignment is an og-cards pass, flagged in amendment §8, not authored here.
- **Composition** — band placement, Statement spacing, the closing surface, button variants, the 13-14" "restrained-destination not SaaS-landing" capture — `pouk-ai-designer`'s lane (flagged in §6).
- **Wiring the approved copy into `src/content/*.json`, `HomeHero.tsx`, or a new section component** — `pouk-ai-engineer` applies the copy after Arian flips status to `Approved`.
- **The booking URL value and shared-constant mechanism** — engineer's call (contact-flow §6); content owns the label, href is `https://cal.pouk.ai` (FS-CF-2, locked single URL).
