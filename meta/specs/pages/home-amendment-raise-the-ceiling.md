# Amendment: Home — Raise the Ceiling (Display doorway + thesis Statement)

> **SUPERSEDED / CONSOLIDATED 2026-06-19** by the re-specced [`home.md`](./home.md) (In review). RR-1/RR-2 (Hero `size="display"` + proportional CTA) are carried forward intact into `home.md` §4. The §4.2 "no Statement section on `/`" ruling was already superseded by `home-amendment-destination.md` and is now retired entirely (a Statement ships per `home.md` §4 beat 3). Retained for record. Not for build.

**Route**: `/`
**Status**: PROPOSAL — In review (Arian per-page approval required; nothing ships without sign-off)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14
**Branch context**: `explore/raise-the-ceiling`
**Amends**: [`meta/specs/pages/home.md`](./home.md) (Approved) — authoritative for everything not delta'd here; and is itself further delta'd only on the two clauses named in §2.
**Companion amendment (still live)**: [`meta/specs/pages/home-amendment-illustration-and-density.md`](./home-amendment-illustration-and-density.md) (Approved; illustration AC paused per D-17). This amendment **reverses one clause** of that amendment — see §2 and the ratified-decision-reversal flag in §7.
**Source assessments**: `meta/assessments/creative-exploration.md` §1 (Direction H-A "Display doorway", signature moment), `meta/assessments/ds-capability-vs-usage.md` §2 #4 (`Statement` thesis beat), `meta/assessments/imagery-illustration-direction.md` §2 (home feather colophon, optional).
**Masterplan reference**: §4.1 (site layout), §4.3 (zero-JS contract), §6.1 (HTML-weight gate).
**Feather policy**: governed centrally by [`meta/specs/features/feather-motif-policy.md`](../features/feather-motif-policy.md) (this amendment).

---

## 1. Amendment scope

This amendment delta's the post-cutover homepage on three product moves Arian approved in the "raise the ceiling" batch, all pure-site (no real-world evidence, no new tokens, no new DS primitive):

1. **Display doorway (H-A).** Flip the Hero from `size="intimate"` (the 2026-05-17 density decision) to `size="display"` — the DS default marketing register — and step the CTA back up to a proportional size so it does not read undersized against the larger title. This is the single highest-leverage strike on the site: the brand's front door rendered at full height. Structurally **nothing else on the page changes** — the IA lock (single Hero, no further sections, home.md §10) holds.

2. **Thesis Statement beat — placement + conviction outcome (deferred / conditional).** The once-per-page `Statement` editorial beat. On `/`, the IA lock forbids any section below the Hero (home.md §10), so a `Statement` cannot be added as a body section. This amendment records the home thesis-beat decision as **the lede itself carries the conviction** (no separate `Statement` primitive on `/`), and defers any `Statement`-as-section to a future IA re-open Arian has not authorized. See §4.2 — this is a placement *ruling*, not a build instruction to add a section.

3. **Feather colophon (optional, deferred).** The interim figurative beat from the imagery direction — a single small feather mark above the StatusBadge — is recorded here as **governed by the feather-motif policy and held**, consistent with the still-paused illustration AC (D-17). Not built in this cycle unless Arian opts it in. See §4.3.

The base spec's purpose, audience, IA (single Hero, no further sections), content-data shape, user flow, status-line lock (D-12), and lede hand-off lock (D-11) are **intact**.

---

## 2. What this amendment reverses, and what it leaves locked

**Reverses (ratified-decision reversal — Arian must re-ratify; see §7):**

- **Hero `size="intimate"` → `size="display"`.** The 2026-05-17 decision (D-17 / poukai-ui#39, `home-amendment-illustration-and-density.md` §4.2 Lever A) shrank the title to fit the footer at the fold and to soften a "brutalist" read. H-A reverses that density call. The creative assessment's argument: at display scale the title becomes the page's confident front-door presence; the interval between a display-scale serif tagline and the body lede *is* the restrained-and-striking target. The trade-off the original decision optimized for (footer at the fold) inverts — display scale pushes the footer ~80px lower. **Arian must decide which wins: footer-at-the-fold (keep intimate) or front-door presence (go display).** Designer + PM recommendation: presence wins.
- **CTA `size="sm"`/`size="compact"` → a proportional larger size.** The CTA step-down (`home-amendment-illustration-and-density.md` §4.4, poukai-ui#42) was made *because* the title had shrunk. At display scale the rationale inverts — the CTA must step back up to stay proportional. The exact size is the designer's composition call (the DS sizes available are the menu); this amendment fixes the *intent* (proportional to a display title), not the token.

**Leaves locked (off-limits, same as the prior amendment §2):**

- D-11 (integrated lede-extension hand-off shape, ending in the `/why-ai` link sentence) — locked.
- D-12 (status-line text byte-identical at cutover) — locked.
- D-13 (funnel nav order) — locked.
- IA: single Hero, no further sections — locked (this is what blocks a `Statement` section on `/`).
- SiteShell nav, badge motion — locked. (The zero-JS / hydration-model R-079 clause is no longer a lock — see annotation below.)
> Superseded by D-25 (2026-06-16 JS revocation): the R-079 zero-JS / hydration lock is revoked; client JS permitted. a11y + reduced-motion remain binding.
- The `entrance="stagger"` choreography already shipping on `/` — unchanged (it stays on; at display scale it simply reads with more authority).
- Email-link duplication (Hero CTA + footer) — locked per composition R13.

---

## 3. Updated success criteria (delta against §3 of base spec)

Base spec framing (Behavior / Signal / Failure mode) carries over. This amendment adds one dimension and one failure mode:

- **Front-door presence (new).** A first-time visitor arriving from a LinkedIn post lands on a tagline rendered at full display scale, with the italic `AI` as a genuine typographic event, and the lede + CTA staggering in beneath it. The page reads as the brand's deliberate front door, not as a tasteful-but-quiet principle list. Restraint stays the binding constraint: the strike comes from *scale and interval*, not from volume, color, or added elements. Verbally the page is unchanged (same 8-word tagline).
- **Failure mode added — "the door shouts."** If the display title reads as the homepage getting louder rather than more confident — if it crowds the lede, dwarfs the CTA into invisibility, or makes the page feel like a splash screen — the move was applied wrong. Display scale must read as *spare and large at once*, the Apple/Linear/Stripe register, never as a hero banner.
- **Failure mode sharpened — "softening reversed into brutalism."** The original density amendment existed because the display title read brutalist on a 13–14" laptop. Reversing it risks reintroducing exactly that. The mitigation is the proportional CTA revert and the `entrance="stagger"` already in place; the designer must confirm on a 13–14" capture that display scale reads as presence, not as wall-of-type. This is the load-bearing risk of the reversal.

---

## 4. New / revised acceptance criteria

Additive to the base spec §8 and the prior amendment §4. The designer's composition revision and the engineer's implementation must satisfy these for the direction Arian ratifies.

### 4.1 Display doorway (H-A)

- [ ] The Hero renders at `size="display"` (the DS default marketing register), not `size="intimate"`. Verifier: DOM/props inspection of the `<Hero>` on `/`; the title clamp resolves to the display-scale token, not the intimate-scale token.
- [ ] The Hero CTA renders at a size proportional to the display title — stepped back up from the interim `sm`/`compact`. Verifier: the CTA is visually subordinate to the title but reads as a confident affordance, not an undersized link; squint test at 1440×900 — title is primary anchor, CTA is clearly an actionable element, not a footnote. Exact DS size is the designer's call.
- [ ] `entrance="stagger"` remains on; the choreography (status → title → lede → CTA) is unchanged. Verifier: no change to the stagger config; reduced-motion still collapses it via the DS `:root !important` block (R-030).
- [ ] **No structural change**: exactly one `<Hero>`, one `<h1>`, one `<StatusBadge>`, one Hero `mailto:` CTA, zero sections between Hero and SiteShell footer (home.md §8 negative assertion holds). Verifier: DOM inspection.
- [ ] Display scale reads as presence, not brutalism, on a 13–14" laptop (1440×900 and 1440×768). Verifier: designer + Arian review of side-by-side captures vs. the current intimate build. This is a judged criterion; the screenshot diff is the evidence.
- [ ] **HTML-weight + Lighthouse advisory.** Lighthouse mobile (R-013) and HTML-weight delta are tracked for situational awareness, not as merge gates. A pure prop flip should be byte-neutral. Verifier: lighthouse-ci + weight measurement on the preview (advisory only).
> Superseded by D-25 (2026-06-16 JS revocation): Lighthouse (R-013) + HTML-weight converted blocking → advisory; client JS permitted. a11y + reduced-motion remain binding.

### 4.2 Thesis Statement — placement ruling (no build delta on `/`)

> **SUPERSEDED 2026-06-15** by [`home-amendment-destination.md`](./home-amendment-destination.md) (Approved, RR-3). Arian re-opened the IA lock; a `Statement` section now ships on `/` as the destination homepage's conviction beat. The "no Statement section on `/`" ruling below applied only under the now-reversed single-Hero IA lock and is retained for record.

- [ ] **No `Statement` primitive renders as a section on `/`.** The IA lock (single Hero, no further sections) is authoritative; the thesis conviction lives in the **lede** (per D-11), not in a separate `Statement` molecule. Verifier: DOM inspection confirms no `Statement`/section between Hero and footer (this is the same negative assertion as home.md §8, restated so the cross-page `Statement` pass does not get misapplied to `/`).
- [ ] **Conviction outcome the lede must land (content's lane, recorded here as intent).** The home lede already carries the category-problem hand-off ("Most AI projects fail to deliver. Here's why →", D-11). The raise-the-ceiling conviction outcome for `/` is: a returning visitor and a first-time visitor both leave the doorway with the single felt assertion that **pouk.ai is a technical partner that ships, not an advisor that decks** — carried by the existing tagline + lede at display scale, not by an added line. Content does **not** add a sentence; the display-scale rendering *is* how the existing conviction lands harder. If Arian later wants an explicit `Statement` on `/`, that requires re-opening the IA lock (home.md §10) — out of scope here.

### 4.3 Feather colophon (optional, deferred — governed by feather policy)

- [ ] **Default: not built this cycle.** Consistent with the paused illustration AC (D-17), the home page stays type-only unless Arian opts the feather colophon in. Verifier: no feather mark on `/` unless Arian's sign-off on this amendment explicitly enables §4.3.
- [ ] **If Arian opts in**: a single small feather mark may sit above the StatusBadge as the one deliberate feather moment on the page, governed entirely by [`features/feather-motif-policy.md`](../features/feather-motif-policy.md) (max one deliberate feather per page beyond the Wordmark; inline `currentColor` SVG; `aria-hidden="true"`; zero-JS; reduced-motion N/A as it is static). It must not introduce a second figurative element, must not duplicate the StatusBadge's "alive" job, and must not push the title off its primary-anchor role. Verifier: the feather-policy ACs (that spec §6) plus DOM inspection.

---

## 5. Open questions / dependencies

- **Ratified-decision reversal — Arian's call (BLOCKING `Approved`).** Reversing `size="intimate"` → `size="display"` (and the proportional CTA revert) overturns the 2026-05-17 density decision and one clause of `home-amendment-illustration-and-density.md`. This amendment cannot reach `Approved` until Arian re-ratifies presence-over-fold. See §7.
- **DS dependency — none.** `size="display"` and `entrance="stagger"` ship in `@poukai-inc/ui` today (assessment confirms `@2.17.0`). The CTA size revert consumes existing `<Button>` sizes. No DS proposal needed. The feather colophon, if opted in, needs the site-side feather SVG extraction tracked in `features/feather-motif-policy.md`, not a DS change.
- **Companion-amendment reconciliation.** On `Approved`, the `home-amendment-illustration-and-density.md` §4.2 (intimate) and §4.4 (compact CTA) clauses are superseded for `/`. PM owes a one-line annotation on that amendment recording the supersession (not executed here — flagged so the cross-spec record stays clean).
- **Composition revision.** `pouk-ai-designer` revises `meta/compositions/pages/home.md` for the display title + proportional CTA + (optional) feather colophon. Real render at display scale on 13–14" drives the final CTA size pick.
- **Content.** No new copy required for §4.1/§4.2 (the conviction is carried by the existing tagline/lede at display scale). Content is only pulled in if Arian re-opens the IA lock for an explicit `Statement` (not in scope).

## 6. Out of scope

- Adding any section below the Hero (IA lock). A `Statement` *section* on `/` is explicitly out of scope.
- The Pouākai eagle illustration (D-17 deferred; demoted to optional anchor per `features/feather-motif-policy.md`).
- Any color, new token, scroll-triggered motion, or second figurative element.
- Per-visitor/per-referrer variation; zero personalization.
- The OG card for `/` — governed separately by [`features/og-cards.md`](../features/og-cards.md).
- Re-opening D-11 / D-12 / D-13.

## 7. Ratified-decision reversal — Arian must re-ratify

This amendment **reverses a ratified decision** and cannot reach `Approved` until Arian confirms:

- **RR-1 — Hero scale.** Reverse the 2026-05-17 `<Hero size="intimate">` decision (D-17 path, poukai-ui#39) back to `<Hero size="display">`, accepting that the footer drops ~80px lower (footer-at-the-fold is no longer a hard target). Recommendation: **reverse — presence wins.**
- **RR-2 — CTA scale.** Reverse the coupled CTA step-down (`home-amendment-illustration-and-density.md` §4.4 / poukai-ui#42) to a size proportional to a display title. Recommendation: **reverse — proportional to display.**

If Arian declines RR-1, the whole H-A direction is moot (intimate stays, the page is unchanged) and this amendment is withdrawn. If Arian accepts RR-1 but not RR-2, the designer must reconcile an undersized CTA against a display title (not recommended).
