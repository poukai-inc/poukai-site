# Spec: Terms of Service

**Route**: `/terms`
**Status**: Approved (2026-06-14) — governance contract for the live page; ratified as part of the final-state push. This spec **legitimizes a page that already shipped** (#122, for Google OAuth verification) — it documents the maintenance contract that should have preceded the build. It is not a request to rebuild the page. No content rebuild is gated on this; the scope-discipline obligations (§5/§8) are the live ones.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved as governance contract)
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout). **Scope note**: this page is the *product's* (`cal.pouk.ai`) legal surface hosted on the marketing domain — at the edge of the masterplan's "marketing site" scope. See `meta/specs/final-state-strategy.md` §5.
**Strategy reference**: `meta/specs/final-state-strategy.md` §5 (legal-surface governance gap), §2 (verdict: REVISE).
**As-shipped reference**: `src/content/terms.json`, `src/pages/terms.astro` (live as of #122).
**Sibling spec**: `meta/specs/pages/privacy.md` (same legal-surface class; same governance rationale).

---

## 0. Why this spec exists (REVISE rationale)

`/terms` shipped in #122 alongside `/privacy` to complete the legal surface Google's OAuth verification expects for the `cal.pouk.ai` scheduling app. Live, content-complete, correctly canonicalized (`https://pouk.ai/terms/`), no PM spec. This spec ratifies the as-shipped page and sets the maintenance contract. The delta from current state is *governance*, not *content* — unless Arian's review surfaces a correction.

## 1. Purpose

`/terms` is the public statement of the terms under which the `cal.pouk.ai` scheduling app is offered and used — acceptable use, the no-warranty/limitation-of-liability posture appropriate to a free self-hosted scheduling tool, the relationship between pouk.ai (operator) and the user, and how the terms change. Its job is to be **clear, accurate, and appropriately scoped** to a scheduling app — not to govern the consulting engagement (that's the SOW's job, off-site) and not to persuade.

## 2. Audience

- **Primary**: A `cal.pouk.ai` user establishing the terms under which they use the app. Secondarily, a Google OAuth verification reviewer who expects a terms surface to exist alongside the privacy policy.
- **Secondary**: A prospect or visitor doing due diligence via the footer "Terms" link. Reassurance, not conversion.

## 3. Success criteria

- **Behavior**: A user/reviewer finds clear, scope-appropriate terms for a scheduling app, with no ambiguity about what the app is, who operates it, and the no-warranty posture. The terms do not over-reach (they do not purport to govern consulting work) and do not under-reach (they cover app use).
- **Signal**: OAuth verification stays granted (terms surface present and coherent). No user confusion about app terms in inbound mail. No conflation of app-terms with engagement-terms.
- **Failure mode**: The terms claim to govern the consulting engagement (scope creep into territory the SOW owns), or contradict `/privacy` on data handling, or acquire marketing voice / a funnel CTA. Opposite failure: the terms are so thin they don't actually establish the operator relationship a reviewer expects.

## 4. Information architecture

The as-shipped IA (from `src/content/terms.json`) is ratified. Sections, in order (as shipped):

1. `SiteShell` — top nav + footer. **No nav item marked current.**
2. Heading + lede + "last updated" date line.
3. Scope / what these terms cover (the `cal.pouk.ai` app; explicitly *not* consulting engagements, which are governed by a separate SOW).
4. Acceptable use.
5. The app's no-warranty / "provided as is" posture appropriate to a free self-hosted tool.
6. Limitation of liability.
7. Relationship to the Privacy Policy (cross-link to `/privacy`).
8. Changes to terms; contact.

**Constraint**: section order and any anchors are stable; new sections may be added, existing anchors not removed/renamed.

## 5. Content requirements

Legal/compliance content — clarity and accuracy outrank brand register. Outcomes:

- **Scope discipline (load-bearing).** The terms govern the **`cal.pouk.ai` scheduling app only**. They explicitly do **not** govern a consulting engagement — that relationship is established by a separate Statement of Work (the `/onboarding` page describes the SOW process; the SOW itself is off-site). A reader must not come away thinking these terms are the contract for hiring pouk.ai.
- **Operator identity.** Names pouk.ai as the operator of `cal.pouk.ai`, consistent with `/privacy` and `/about` v2.1 positioning (no sole-operator framing; legal accuracy outranks register if they conflict).
- **No-warranty + liability posture** appropriate to a free, self-hosted scheduling tool.
- **Consistency with `/privacy`.** Anything the terms say about data handling must not contradict the privacy policy; data specifics live in `/privacy` and are cross-linked, not re-stated divergently.
- **No marketing.** No funnel CTA, no booking CTA, no brand-register display type. Links: internal anchors, `/privacy`, contact address, `cal.pouk.ai`.
- **Accurate "last updated" date**, refreshed on substantive edits.

This spec does not rewrite the shipped copy; if Arian's review finds a scope or consistency error, that correction routes content → engineer as a normal edit against these outcomes.

## 6. Content data shape

The page reads `src/content/terms.json`. Schema (per R-074) validates:

```json
{
  "meta": "object — { title, description, canonical } — canonical MUST be 'https://pouk.ai/terms/' (trailing-slash, CR-1)",
  "heading": "string — page H1",
  "lede": "string — one-paragraph summary",
  "lastUpdated": "string — 'Last updated <date>'; refreshed on substantive edits",
  "sections": "array — each { heading, anchor?, blocks[] }; blocks are strings or { list: string[] }"
}
```

## 7. User flow

- **Entry**: `SiteShell` footer "Terms" link; `/privacy` cross-link; `cal.pouk.ai` app footer; rarely search.
- **Read path**: Reference read — land, scan scope, confirm no-warranty + operator identity, cross-check `/privacy` if needed.
- **Exit**: Back to `cal.pouk.ai`, to `/privacy`, or close. **No funnel exit by design.**

## 8. Acceptance criteria

- [ ] Route renders at `/terms` (served as `/terms/`, trailing-slash).
- [ ] `meta.canonical` is `https://pouk.ai/terms/` (trailing-slash; CR-1 closed 2026-06-13).
- [ ] The terms explicitly scope to the `cal.pouk.ai` app and **explicitly state they do not govern consulting engagements** (SOW handles those).
- [ ] Operator identity (pouk.ai) is named, consistent with `/privacy` and `/about` positioning.
- [ ] A no-warranty / limitation-of-liability posture is present and appropriate to a free self-hosted tool.
- [ ] A cross-link to `/privacy` is present; no data-handling statement contradicts `/privacy`.
- [ ] **No funnel CTA, no booking CTA, no brand-register display type.** Links limited to internal anchors, `/privacy`, contact address, `cal.pouk.ai`.
- [ ] `SiteShell` renders with **no funnel-nav item marked current**.
- [ ] `<title>` and `<meta description>` are factual (app terms), not marketing copy.
- [ ] Content lives in `src/content/terms.json` validated by a Zod schema (R-074/R-076).
- [ ] Lighthouse mobile: Perf ≥ 95, A11y = 100, BP = 100, SEO = 100.
- [ ] No client-side JS beyond the sitewide `BaseLayout` posture; axe-core 0 violations (route in CI coverage per CR-3).
- [ ] **Scope discipline verified** (Arian-verified): the terms do not over-reach into engagement-contract territory.

## 9. Open questions / dependencies

- **App-terms vs. engagement-terms boundary.** Confirm the page's scope language clearly fences off the consulting SOW. This is the one substantive review item; Arian owns the legal assertion.
- **Operator-identity wording** consistency with `/privacy` and `/about` v2.1 (no sole-operator framing). Arian's call; legal accuracy outranks register.
- **R-007 route inventory** amendment owed (shared with `/privacy`, `/scheduling`, `/engagements`, `/writing`) — flagged in `final-state-strategy.md` §7.2.
- **No DS dependency.** Composes inside shipped primitives.

## 10. Out of scope

- Governing the consulting engagement / SOW terms. That relationship is off-site; `/terms` covers the app only.
- Any marketing CTA, funnel hand-off, or booking affordance.
- Brand-register experiments. Restraint-maximal, like `/privacy`.
- Jurisdiction-specific variants. Single English terms at this stage.
- Rewriting the shipped legal copy. This spec ratifies and governs it; substantive authorship is Arian's lane.
- A clickwrap / "I agree" interactive acceptance flow. The app's own consent surface handles acceptance; the marketing-domain `/terms` page is a published-terms reference, not an interactive gate.
