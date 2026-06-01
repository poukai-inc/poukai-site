# Proposal: Re-open the brand position — upsell hierarchy, the engagement-shape layer, and `/writing` as the retention/virality engine

**Status**: Resolved (brand re-decision approved; §7(a)–(e) locked 2026-05-31). Spec authoring unblocked.
**Owner**: Arian (founder) · Authors: pouk-ai-pm (architecture) + web-strategy pass (content strategy)
**Last updated**: 2026-05-31
**Masterplan reference**: §2A (shape/substance, decision authority, site-owned routes/nav/copy), §4.1 (site layout)
**Amends**: `meta/proposals/next-pages-priorities.md` (§0 table, §2.4, §2.6, §5), `meta/specs/pages/roles.md` (§10), `meta/specs/flows/visitor-to-conversation.md` (funnel stages + §10 out-of-scope)
**Decision source**: PM interview with Arian, 2026-05-31 — two authorized decisions: (1) re-open the brand position toward an explicit upsell hierarchy / conversion-oriented funnel; (2) promote `/writing` ahead of the parked `/case-studies` as the next growth lever.

---

## 0. The two decisions this proposal records

1. **Re-open the brand position.** The "no marketing-speak / no pricing-or-packaging / single restrained `mailto:` exit" posture was locked. Arian has chosen to re-open it and add an explicit upselling content hierarchy and a more conversion-oriented funnel. Authorized; this proposal is the re-decision of record.
2. **`/writing` is the next lever.** Promoted ahead of `/case-studies` (which stays parked behind a customer-permission gate). `/writing` is the retention + virality engine.

This proposal is the prioritization + re-decision step. It does **not** author final copy (pouk-ai-content) or composition (pouk-ai-designer), and it does not write the full `/engagements` or `/writing` page specs — those follow once Arian resolves the open decisions in §7.

---

## 1. Brand re-decision record

**What changed.** Two resolved artifacts treated as locked the interpretation of "operator-first" as *consultative* — "let me understand your problem first," never "pick a tier":

- **`meta/specs/pages/roles.md` §10** rejects, verbatim, "Per-role pricing, packaging tiers, or 'starts at $X' displays. The brand is 'let me understand your problem first,' not 'pick a tier.'"
- **`meta/proposals/next-pages-priorities.md` §2.6** rated a `/engagements` (services/pricing/packaging) page **Skip**, because it "contradicts the stated `/roles` brand position" and "Don't ship against a stated brand position without re-deciding the brand position first." The §0 table and §5 ("Always Skip") record the same, naming the unlock condition: *"Reconsider only if Arian re-decides the `/roles` brand position."*

Arian has now exercised exactly that named override. **Both §2.6's "Skip" and roles.md §10's pricing/packaging rejection are superseded** (not deleted — superseded, with a precise new boundary in §4). The engagement-shape / packaging layer and an explicit upsell content hierarchy are **in scope as of 2026-05-31**.

**The new posture, honestly stated.** This is a real pivot. The four live pages were built on a "trust-by-typography, the brand competes by being a person" thesis. We are now adding a *conversion-oriented funnel with an explicit upsell ladder*. The reconciliation that keeps this from breaking the brand: **shape, not price; ladder, not menu.** pouk.ai can make the *unit of work* legible (discovery → pilot → build → retainer) without converting `/roles` into a pricing table. The operator-first register survives only if the upsell reads as "here is how serious work starts and grows," not "here are our packages." How far toward dollar figures we go is the load-bearing open call deferred to §7(a) — this proposal does not pre-decide it.

---

## 2. Upselling content hierarchy

Map visitor intent at each funnel stage to the offering that serves it, then layer the newly-authorized engagement-shape ladder on top as the upsell mechanic. The four offerings remain the `/roles` archetypes — **Builder, Automator, Educator, Creator** (`src/content/roles.json`). The new layer is the *engagement shape* — how a single relationship deepens over time.

### 2.1 Intent → offering, stage by stage

| Funnel stage | Visitor intent | Page that serves it | Offering surfaced |
|---|---|---|---|
| **Problem-aware** | "Our AI work isn't paying off and I don't know why" | `/why-ai` | The diagnosis: five failure modes, the deployment gap |
| **Solution-aware** | "What shape of help fixes my situation?" | `/roles` | The four archetypes — Builder / Automator / Educator / Creator |
| **Evaluation** | "What does working together look like — scope, sequence, commitment?" | **NEW: engagement-shape layer** (`/engagements` or a `/roles` section — §4) | The upsell ladder: discovery → pilot → build → retainer |
| **Trust** | "How do they work / who runs this?" | `/principles` and/or `/about` (parallel, OR semantics) | The operating principles; the operator |
| **Action** | "I'm ready to start a conversation" | `mailto:hello@pouk.ai` (P2: `/contact`, locked) | The conversation |

The first two and last two rows are built and approved. **The Evaluation row is the gap this re-open fills.** Today a visitor who matched to "Builder" but wants to understand how the relationship works and grows hits a silent drop-off — next-pages §2.6 named it: *"A reader who has matched themselves to 'Builder' but doesn't know whether they can afford pouk.ai is currently a silent drop-off."*

### 2.2 The upsell ladder (engagement-shape layer)

The archetypes answer *what kind of work*. The ladder answers *how a relationship deepens*. These are orthogonal: any archetype can be entered at any rung. The ladder is the upsell spine.

| Rung | Engagement shape | Visitor's implicit question | Upsell motion |
|---|---|---|---|
| 1 | **Discovery** | "Can you even diagnose my situation?" | Low-commitment entry. Maps to the `/why-ai` four discovery questions ("The diagnosis comes before the build"). |
| 2 | **Pilot** | "Prove it on one workflow before I commit" | Land-and-expand. Mirrors the `/why-ai` leaders pattern: "Start with one team, measure, adjust, then expand." |
| 3 | **Build** | "Ship the real system into production" | Core deliverable. Maps to `about.json`: "engineered, shipped, and supported... systems an in-house team can run, not decks." |
| 4 | **Retainer** | "Keep it running and evolving" | Recurring revenue / retention. The relationship that compounds. |

**How a visitor climbs it.** A problem-aware visitor reads `/why-ai`, self-identifies on `/roles` (say, Automator), then sees they don't have to commit to a six-figure build on day one — they can start at **Discovery** or **Pilot** and climb. The ladder *reduces* the activation energy of the first email (makes "small first step" legible) while *raising* the relationship ceiling (Build, Retainer visibly on offer). pouk.ai already works this way (`/why-ai`: "diagnosis comes before the build"); we are *documenting* an existing sequence, not inventing a sales gimmick.

**The brand guardrail.** The ladder is described in **work terms, not commercial terms** at v1: what each rung *delivers* and *de-risks*, not what it costs. "Discovery" is "four questions and a written diagnosis," not "$5k engagement." Whether to attach dollar figures or "starts at" framing is the §7(a) open decision — explicitly not resolved here.

---

## 3. Expanding sitemap

Every route, current and proposed, with funnel role and SEO role. Statuses reflect this re-open.

| Route | Status (post-re-open) | Funnel role | SEO role |
|---|---|---|---|
| `/` | **Live** | First touch; brand registration; `mailto:` entry | Brand/navigational ("pouk ai") |
| `/why-ai` | **Live** | Diagnosis (problem-aware) | Long-tail thesis ("why AI projects fail", "AI deployment gap") — strongest organic surface today |
| `/roles` | **Live** | Self-identification (solution-aware) | Service-shape queries; deep-linkable anchors (`#builder`…`#creator`) |
| `/principles` | **Live** | Trust loop (how pouk.ai works) | Low-volume, high-quality; single-principle social shares |
| `/about` | **Live** | Trust loop (who runs pouk.ai); referrer-intro primary URL | `schema.org/Person`; name SEO ceded to LinkedIn/X by design |
| `/404` | **Live** | Salvage / re-route | None (noindex) |
| `/contact` | **Locked-next (P2)** — unchanged | Terminal conversion node | Navigational ("pouk ai contact") |
| `/writing` | **NOW-PROMOTED** (was Skip-until-cadence) | Top-of-funnel + re-engagement/retention loop; not on the direct conversion path | **Primary new SEO surface** — long-tail essay queries; the virality/retention engine |
| `/engagements` *(or a `/roles` section — §4)* | **NOW-PROMOTED** (was Skip, §2.6) | Evaluation stage; the upsell-ladder surface | Commercial-intent queries ("AI consulting engagement", "AI pilot scope") — currently unserved |
| `/case-studies` | **Conditional (parked)** — now *behind* `/writing` | Proof gap | Outcome/customer queries; per-role proof clusters |
| `/uses` · `/stack` | **Still rejected** (next-pages §2.7) | n/a — speaks to peers, not prospects | n/a |
| Per-role sub-routes (`/roles/builder`…) | **Still rejected for now** (roles.md §10, next-pages §2.8) | Would fragment the compare-and-choose surface | n/a until a role has 600+ words of unique substance |

**Priority order this proposal sets (amending next-pages §5):**
1. `/engagements`-or-`/roles`-extension — the re-open's load-bearing funnel fix (unblocks Evaluation)
2. `/writing` — the named growth lever, promoted ahead of `/case-studies`
3. `/contact` (P2, unchanged)
4. `/case-studies` (conditional, parked — re-promote on first citable customer)

Recommend sequencing the engagement-shape re-spec *before* `/writing`: it is the funnel fix the re-open was authorized to deliver, and `/writing` carries a cadence dependency (next-pages §2.4 — a writing surface with two posts "looks abandoned") that must be satisfied before launch. Arian can override; both are in scope.

---

## 4. The `/roles` + `/engagements` re-spec path

**The structural question the re-open forces:** does the engagement-shape ladder become a **new `/engagements` route** or a **section appended to `/roles`**? (next-pages §2.6: "M as its own page; S as a section appended to `/roles`.")

### Option A — Separate `/engagements` route
- **For:** Clean separation of *what shape of work* (`/roles`) from *how the relationship runs* (`/engagements`). A dedicated commercial-intent SEO surface. A linkable "here's how we'd work together" URL for sales replies. Keeps `/roles` a pure self-diagnostic.
- **Against:** Adds a sixth route and a nav slot (perturbs the locked `Why AI → Roles → Principles → About` order). Splits the Evaluation read across a click. Higher effort (M).

### Option B — Section appended to `/roles`
- **For:** Lower effort (S). Keeps solution-aware → evaluation on one scroll. No nav perturbation.
- **Against:** Contradicts roles.md §4's "one page, four `RoleCard`s" IA and §10's rejection (expected — this is the spec we're re-opening), so a heavier roles.md re-spec. Risks `/roles` reading as "a marketing menu rather than a self-diagnostic" — the failure mode roles.md §3 names.

### What must change in roles.md §10 (either way)
§10 currently reads: "Per-role pricing, packaging tiers, or 'starts at $X' displays. The brand is 'let me understand your problem first,' not 'pick a tier.'" This re-decision requires §10 be **rewritten, not deleted**, to draw the new boundary:
- **Removed:** the blanket rejection of packaging/engagement-shape framing.
- **Retained (unless §7(a) says otherwise):** the rejection of *dollar-figure* "starts at $X" displays — the re-open authorizes the *ladder* (categorical: discovery/pilot/build/retainer), not necessarily *prices*.
- **New cross-reference:** §10 points to this proposal as the re-decision of record, and (under Option A) hands engagement-shape content to the new `/engagements` spec.

### Recommendation
**Option A (separate `/engagements` route), with Option B as the fast fallback.** The ladder is a commercial surface with a distinct intent (Evaluation) and a distinct SEO job (commercial-intent queries currently unserved). Co-locating on `/roles` reintroduces the "marketing menu" failure mode roles.md §3 guards against. Cost is one nav slot + M-effort — acceptable for the funnel's load-bearing gap. If Arian's priority is speed-to-conversion-fix over surface cleanliness, B is defensible. This is §7(c).

---

## 5. Alignment table — page → funnel stage → next conversion action

| Page | Funnel stage served | Next conversion action it drives | Status |
|---|---|---|---|
| `/` | First touch | Click into `/why-ai` (lede hand-off) OR `mailto:` | Live |
| `/why-ai` | Problem-aware (diagnosis) | Click into `/roles` OR `mailto:` | Live |
| `/roles` | Solution-aware (self-identification) | **NEW:** click into `/engagements` (Option A) OR `mailto:` with role name | Live; re-spec pending |
| `/engagements` *(or `/roles` §)* | **Evaluation (upsell ladder)** | `mailto:` with a *rung* named ("interested in a Pilot") OR climb to `/contact` (P2) | **NOW-PROMOTED** |
| `/principles` | Trust loop (how) | `mailto:` (often deferred — quiet trust-up) | Live |
| `/about` | Trust loop (who) | `mailto:` with higher conviction; referrer-intro entry | Live |
| `/writing` | Top-of-funnel / retention loop | Re-engagement: subscribe/return, then down-funnel into `/why-ai` or `/roles` | **NOW-PROMOTED** |
| `/contact` | Action (terminal) | Email / LinkedIn DM | Locked-next (P2) |
| `/case-studies` | Proof (between diagnosis and self-ID) | Reinforces `/roles` self-ID, then `mailto:` | Conditional (parked) |

**The one new conversion mechanic the re-open introduces:** `/engagements` lets a visitor convert *with a rung already named* ("we'd want to start with a Pilot"), the way `/roles` lets them convert with a *role* named. An inbound email now arrives with both *which archetype* and *which engagement shape* — a materially better-qualified lead than the brand-voice-only funnel produced.

---

## 6. Content strategy — `/writing` as the retention + virality lever

**Scope note.** Arian asked to retire the vague term "contagiousness." It bundled three different mechanics under one label; they need different bets. This section defines each precisely — **Shareability** (does a single page earn a pass-along?), **Virality** (does pass-along compound into a loop?), and **Retention** (does a non-converting visitor come back?) — then draws the conversion line. Every recommendation is sized for one operator. The governing constraint throughout is the cadence gate from `next-pages-priorities.md` §2.4: **≥1 essay/month sustained, or the surface reads as decay theatre and is worse than not shipping it.** Shareability and Virality both assume that gate is met.

### 6.0 `/why-ai` is the reference implementation
`/why-ai` is the site's most shareable asset for reasons that are concrete and reproducible:
- **Citable stats with attributed sources** — the `statsRow` block (12–18% ROI / Gartner; 85% fail / Gartner; 15% profitability / PwC; $300B funding / CT Labs) gives a reader a number *and* a source to repeat without doing their own research. That is the unit of shareability.
- **A clean, claimable URL** — `pouk.ai/why-ai` reads as a canonical destination, not a blog post that scrolls away.
- **A one-line hook** — "Most AI projects fail to deliver. Here's why →" is a complete promise that survives being pasted into a DM with no context.
- **Infrastructure that renders the share** — `jsonLd` Article schema, a stat-led meta description, click-tracker-stripped canonical citations. `/writing` succeeds only if every essay inherits this template.

### 6.1 Shareability — engineering a page worth passing on
**Definition.** The property of a *single* page that makes one reader forward it to one other person. Per-artifact, binary per reader, upstream of virality.

A reader forwards a page when it makes *them* look informed. Shareability is generosity, engineered. Mechanics to build into every essay:
1. **A canonical claim the essay owns** — one defensible, repeatable proposition that becomes "the pouk.ai take on X." If you can't name the claim in a sentence before writing, it isn't ready.
2. **Screenshot-able stat blocks** — reproduce the `statsRow` pattern: value + caption + attributed source, self-contained, surviving a screenshot into a slide deck with zero context. The screenshot is the highest-leverage B2B-social share unit; the attributed source carries the URL back implicitly.
3. **Data they can cite, sources cleaned to canonical** — carry the `referencesNote` discipline. Sourced essays earn inbound links (the virality input); unsourced ones get ignored.
4. **Quotable lines** — one or two sentences engineered to be lifted verbatim, in the `/principles` register ("The diagnosis comes before the build"). Write one on purpose.
5. **OG card + Article JSON-LD per essay** — non-negotiable; §2.4 prices it as one-time engineering. Reuse the `/why-ai` `jsonLd` Article shape.
6. **A clean, claim-shaped slug** — `/writing/why-ai-pilots-stall-at-integration`, not `/writing/post-7`.

**Voice line:** every mechanic serves the reader's credibility, never a growth hack. No "you won't believe," no listicle padding, no manufactured controversy. The restraint is the moat.

### 6.2 Virality — the realistic loop for a one-operator B2B consultancy
**Definition.** The *loop*: shares compounding into more reach without proportional new effort. For B2B consulting this is **not** consumer K-factor growth-hacking — it's a slow citation-and-referral flywheel:

```
useful, sourced essay
  → cited / linked by other writers, repackaged into slides, forwarded in DMs
  → inbound backlinks + branded social mentions
  → SEO authority on long-tail queries + direct referral traffic
  → lands on /writing essay
  → internal links carry the reader into the funnel (/why-ai → /roles → mailto:)
  → conversation (→ and an operator/peer reader may cite the essay themselves — the loop-closing step)
```

**Honest ceiling and timeframe:**
- **Ceiling: modest, and that's fine.** Never consumer-scale. A realistic ceiling is a trickle of *high-intent* referral/search visitors — dozens, not thousands, per essay per month at maturity. The unit economics work at tiny volume because one engagement is large.
- **Timeframe: 6–12 months before SEO compounds.** §2.4's "six months from being able to credibly run a writing surface" is right. Near-zero output for ~6 months; budget for it.
- **Biggest lever is Arian's own distribution.** The essay is the durable asset; Arian posting it into his LinkedIn/X network is the ignition. SEO is the long tail that keeps it earning after the social spike fades.

**Cadence is the on/off switch for this entire bet** — the flywheel needs fresh essays to keep the re-share rate above the decay rate. Recommendation: **do not launch `/writing` until three drafts are banked and a confirmed monthly cadence exists.** Until then, ship single sharp essays as `/why-ai`-adjacent sub-pages (e.g. `/why-ai-data-readiness-audit`) — ~80% of the SEO benefit, zero cadence commitment, no decay risk.

### 6.3 Retention — bringing the non-converting visitor back
**Definition.** Re-engagement of the visitor who read, "trusted up," and left *without emailing* — the second valid funnel outcome the flow names. Most first-time B2B visitors aren't ready day one; retention converts "not yet" into "came back," where a meaningful share of consulting conversions originate.

```
visitor reads an essay, doesn't email
  → low-friction capture (RSS and/or email)
  → next essay ships on a predictable cadence
  → returning visitor re-enters via the new essay
  → internal links route deeper (/why-ai → /roles → mailto:)
  → on the Nth return, with conviction accrued, they convert
```

**Minimum viable mechanics — and only these:**
1. **RSS feed** — §2.4 prices it as one-time eng. Zero-PII, zero-maintenance, fits the operator/peer audience. Ship day one.
2. **Email capture — handled with care.** *This is in tension with `visitor-to-conversation.md` §10*, which lists "email-capture forms" and "lead-magnet downloads" as out of scope. Recommendation: a single ungated optional "get new essays by email" line — no popup, no modal, no gate, pointing at a hosted form (Buttondown/similar) keeping the page zero-JS. Framed as the operator's notes, not a newsletter funnel. **A genuine re-open call for Arian to ratify (§7d)**; RSS-alone is the fallback.
3. **Internal linking from every essay into the funnel** — highest-ROI retention *and* conversion mechanic, no new infra. Each essay ends with a contextual link into `/why-ai` or the relevant `/roles#anchor`. The corpus becomes a wide top-of-funnel draining toward the `/why-ai → /roles → mailto:` spine.
4. **Predictable cadence as the retention contract** — RSS/email are plumbing; the monthly cadence *is* the retention mechanic.

**Skip:** no drip sequences, no segmentation, no marketing automation, no content-calendar theater. RSS + one optional email line + disciplined internal links is the whole retention surface.

### 6.4 Conversion strategy now that the brand is re-opened — where the line is
The re-open legitimizes `/writing` doing funnel work the trust-loop pages were forbidden from. The risk: a thought-leadership surface that drives toward offerings is one bad incentive from clickbait, and clickbait breaks the operator-first voice that *is* pouk.ai's differentiation.

How essays drive toward offerings legitimately: **lead with the reader's problem, exit to the matching role** (the `/why-ai` pattern — diagnose a real failure mode, then "Roles →"). **The offering is the *answer to the essay*, never the *reason for it*.** The CTA is a quiet earned consequence — the single muted `mailto:`/role line, not a banner.

**Tests an essay must pass before it ships:**

| On the right side of the line | Over the line (reject) |
|---|---|
| Headline states a claim the essay actually proves | Headline promises a payoff the essay doesn't deliver |
| Stats are sourced and citable | Stats vague, unsourced, or cherry-picked to alarm |
| Useful even to a reader who will never hire pouk.ai | Useless unless you book a call; content is a teaser |
| One quiet `mailto:`/role link, earned at the end | Multiple CTAs, urgency, "limited spots," popups |
| Reads like an operator thinking in public | Reads like a marketing dept performing expertise |

**Governing test:** *would Arian forward this essay to a peer he respects, with his name on it, and feel it raised his standing?* If yes, it's on the right side. If it only works as click-bait, it fails — and corrodes the `/principles` Integrity stance the rest of the site spends ten principles establishing. The re-open buys a funnel link at the foot of a genuinely useful essay. It does not buy a sentence the operator wouldn't say to a peer's face. Same line `/why-ai` already holds.

---

## 7. Open decisions for Arian — RESOLVED 2026-05-31

Interactive resolution pass with Arian. All five locked:

| # | Decision | Locked choice | Cascade |
|---|---|---|---|
| **(a)** | Pricing granularity | **a1 — Categorical only.** Name the shapes + what each delivers, no figures. | roles.md §10's "starts at $X" / dollar-figure rejection **survives intact**; only the blanket packaging/engagement-shape rejection is removed. |
| **(b)** | CTA aggressiveness | **b2 — Per-rung CTAs.** Each ladder rung gets its own "start here" affordance. | **Reverses roles.md D-08** ("no per-card CTA"). The `/engagements` spec must define per-rung CTA copy/affordance; reconcile D-08 at spec-time. Note: this is the more menu-energy option — voice discipline at copy stage is load-bearing. |
| **(c)** | Route vs. section | **c1 — Separate `/engagements` route.** Named `/engagements` (not `/services`). | New nav slot; nav order to be decided at spec-time (recommend `Why AI → Roles → Engagements → Principles → About`, keeping funnel order). M-effort. |
| **(d)** | Email capture on `/writing` | **d1 — Approve ungated email line.** Single optional hosted (Buttondown-style), zero-JS, no popup/gate. | **Amends `visitor-to-conversation.md` §10** out-of-scope list — email capture moves from rejected to "ungated only." RSS still ships alongside. |
| **(e)** | `/writing` launch gate | **e2 — Launch earlier.** Ship when built; do not block on the 3-drafts/cadence gate. | **Accepts the decay risk** next-pages §2.4 + §6.2 flagged: an under-fed writing surface destroys its own shareability. Mitigation to carry into the spec: launch with the largest possible banked-essay count Arian can reach, and treat cadence as a tracked post-launch obligation, not a hope. Recorded as a deliberate founder override of the PM/strategy recommendation (e1). |

Original option framing retained below for the record.

---

Load-bearing founder calls the two decisions force. **Not answered here** — each framed with options.

**(a) Pricing granularity — how far up the commercial-disclosure ladder?**
- **(a1) Categorical only** — name the shapes (discovery/pilot/build/retainer) + what each delivers, *no* figures. Lowest brand risk; preserves "understand your problem first." Default if unsure.
- **(a2) "Starts at" anchoring** — a single floor per rung. Qualifies harder, filters low-budget inbound, but is exactly what roles.md §10 rejected — highest register risk.
- **(a3) Full dollar ranges per rung** — most conversion-aggressive, furthest from operator-first.
This answer determines how much of roles.md §10 survives.

**(b) CTA aggressiveness — how hard can the funnel push before the brand breaks?**
- **(b1) Hold current restraint** — single muted `mailto:` line. Brand-safe; least lift.
- **(b2) Per-rung CTAs** — each ladder rung gets its own "start here" (reverses roles.md D-08's "no per-card CTA"). More mechanic, more menu-energy.
- **(b3) Primary CTA with urgency** — leans on the live "taking conversations for Q3" status as scarcity. Most aggressive; closest to the "another AI advisor" failure the brand defends against.

**(c) Route vs. section — does the engagement-shape layer get its own URL?**
- **(c1) Separate `/engagements` route** (recommended) — clean intent separation, new nav slot, M-effort.
- **(c2) Section on `/roles`** — faster, no nav change, heavier roles.md re-spec, "marketing menu" risk.
- **(c3) Naming** (if c1): `/engagements` reads operator-first; `/services` reads conventional-agency but wins more commercial-intent SEO. Naming is site-owned but brand-load-bearing.

**(d) Email capture on `/writing` — ratify or decline.** Adding even an ungated email line contradicts `visitor-to-conversation.md` §10's out-of-scope list. Options: **(d1)** approve the single ungated optional line (hosted, zero-JS); **(d2)** RSS-only, no email. Touches a stated constraint — needs an explicit call, not a silent add.

**(e) `/writing` launch gate — confirm the cadence trigger.** Per §2.4 and §6.2: **do not launch until three drafts are banked + a confirmed ≥1/month cadence.** Options: **(e1)** accept the gate, ship interim `/why-ai`-adjacent sub-pages until met; **(e2)** launch earlier and accept decay risk. Recommendation: (e1).

---

## 8. What this proposal does not cover

- **Final copy** for the engagement-shape layer or `/writing` — `pouk-ai-content`'s lane once specs are approved.
- **Composition / visual density** — `pouk-ai-designer`'s lane.
- **Full `/engagements` and `/writing` page specs** — follow once Arian resolves §7(a)–(e). `/writing` re-inherits next-pages §2.4's open stack call (content-collection vs. MDX vs. JSON) + the cadence dependency, closed at spec-time.
- **DS primitive needs** — none identified; the ladder likely composes inside existing `RoleCard`/`Stat`/`Principle` recipes. The engagement-shape spec confirms and files a `meta/proposals/ds-side/` request if not.
- **The roles.md §10 rewrite itself** — this proposal *authorizes* it and specifies the boundary; the edit lands when §7(a) granularity is chosen (it determines which clauses survive).

---

**Files this proposal amends on approval:** `meta/proposals/next-pages-priorities.md` (§0 table rows for `/engagements`, `/writing`, `/case-studies`; §2.4, §2.6, §5), `meta/specs/pages/roles.md` (§10), `meta/specs/flows/visitor-to-conversation.md` (add Evaluation stage; reconcile §10 out-of-scope re: email capture). **None land until Arian flips this proposal to Approved and resolves §7(a)–(e).**
