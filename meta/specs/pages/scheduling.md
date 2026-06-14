# Spec: Scheduling

**Route**: `/scheduling`
**Status**: Approved — governance contract + funnel-role decision locked (2026-06-14). Arian approved the full final-state push and ratified this page's funnel role (see §9 RESOLVED). This spec **legitimizes a page that already shipped** (#122, for Google OAuth verification) and records the maintenance contract; it is not a request to rebuild the page.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved; funnel-role decision flipped "Arian to ratify" → RESOLVED)
**Decisions log**: FS-SCH-1 (funnel role → `/scheduling` stays the OAuth scope-justification / product-explainer surface, off-funnel; `features/contact-flow.md` owns surfacing the booking *action* into the funnel, not `/scheduling`) — resolved via Arian's approval of `meta/specs/final-state-strategy.md` on 2026-06-14.
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout). **Scope note**: dual-purpose page — a `cal.pouk.ai` scope-justification surface (OAuth) *and* a product explainer. See `meta/specs/final-state-strategy.md` §5–§6.
**Strategy reference**: `meta/specs/final-state-strategy.md` §5 (governance gap), §6.1 (the unused booking conversion path), §2 (verdict: REVISE).
**Coupled feature spec**: `meta/specs/features/contact-flow.md` (owns surfacing the booking *action* into the funnel; `/scheduling` does not).
**As-shipped reference**: `src/content/scheduling.json`, `src/pages/scheduling.astro` (live as of #122).

---

## 0. Why this spec exists (REVISE rationale)

`/scheduling` shipped in #122 as the human-readable explainer for the `cal.pouk.ai` scheduling app and as the scope-justification surface Google's OAuth reviewer reads ("How the Google Calendar integration is used"). Live, content-complete, canonicalized (`https://pouk.ai/scheduling/`), no PM spec. Two gaps to close:

1. **Governance** (shared with `/privacy`, `/terms`): an unspecced page tied to a live OAuth grant is a maintenance/compliance risk.
2. **Strategy** (unique to this page): `/scheduling` explains a *conversion product* (`cal.pouk.ai`) but sits off-funnel and unreferenced from the prospect journey. The site has a live booking path it never offers prospects (`final-state-strategy.md` §6.1). This spec resolves `/scheduling`'s role and **hands the booking-action-into-the-funnel job to `features/contact-flow.md`** so the page's OAuth job isn't diluted.

## 1. Purpose

`/scheduling` has **two jobs**, in priority order:

1. **OAuth scope justification (load-bearing).** The "How the Google Calendar integration is used" section is what a Google verification reviewer reads to confirm each requested Calendar scope maps to a real, user-visible feature. This job is compliance-critical and must not be diluted by marketing.
2. **Product explainer.** It tells a `cal.pouk.ai` user (or a prospect who lands here) what the scheduling app is, that it's self-hosted by pouk.ai on Cal.com / Cal.diy, and how to open it. The page links *out* to `cal.pouk.ai` (the app), where booking actually happens.

What `/scheduling` is **not**: it is not the primary surface through which the marketing funnel offers booking. Routing a ready-to-talk prospect through a legal-flavored scope-justification page to reach a booking link is friction. The funnel offers booking *directly* at its conversion points (`features/contact-flow.md`); `/scheduling` is the *explainer/justification*, reached from the footer utility tier and the OAuth surface.

## 2. Audience

- **Primary**: A Google OAuth verification reviewer confirming scope justification. This reviewer's read is compliance-gating.
- **Secondary**: A `cal.pouk.ai` user who wants to understand the app before connecting their calendar, or who needs the link to open it.
- **Tertiary**: A prospect who finds `/scheduling` via the footer and realizes they can book a time. They are a welcome conversion, but the page is not *optimized* as a funnel node — `contact-flow` is.

## 3. Success criteria

- **Behavior**: The OAuth reviewer finds each Calendar scope justified by a named feature and maintains the grant. A user understands what `cal.pouk.ai` does and opens it. A prospect who lands here can reach booking, but the funnel doesn't depend on routing prospects here.
- **Signal**: OAuth verification stays granted. `cal.pouk.ai` open-clicks from this page. No reviewer follow-up on scope justification.
- **Failure modes**:
  - **Scope-justification dilution.** Marketing copy or funnel CTAs crowd the "how the integration is used" section, weakening the compliance read.
  - **Funnel mis-routing.** The site starts treating `/scheduling` as *the* booking path and routes prospects through it, adding friction versus a direct booking CTA at the conversion points.
  - **Drift from `cal.pouk.ai` reality.** The page describes scopes/features the app doesn't have (or omits ones it does) — an OAuth risk, same class as `/privacy`.

## 4. Information architecture

The as-shipped IA (from `src/content/scheduling.json`) is ratified:

1. `SiteShell` — top nav + footer. **No nav item marked current** (legal/product surface, not a funnel-nav destination).
2. `Hero` — title, lede, and a primary CTA **to `cal.pouk.ai`** ("Open cal.pouk.ai →"). This is the page's one action and it is correct — the explainer's job is to send the reader to the app.
3. **Intro** — what `cal.pouk.ai` is; self-hosted by pouk.ai on Cal.com / Cal.diy; Google Calendar integration is optional.
4. **How the Google Calendar integration is used** (scope justification — the load-bearing OAuth section): reading availability, creating booking events, keeping in sync — each a user-visible feature mapped to a scope.
5. **Privacy note** — minimum scopes, no Gmail/Drive/Contacts, Limited Use, cross-link to `/privacy`.
6. `SiteShell` footer.

**Constraint**: the scope-justification section (item 4) is stable and compliance-critical; its feature→scope mapping must stay aligned with `cal.pouk.ai`'s actual consent screen and with `/privacy`.

## 5. Content requirements

Mostly product/compliance content; a light brand-voice is acceptable in the hero (it's a product the brand owns), but the scope-justification section stays factual. Outcomes:

- **Scope justification (load-bearing).** Each described feature (read availability / write booking events / keep in sync) maps to exactly the Calendar scopes `cal.pouk.ai` requests, and the page states the minimum-scope + no-Gmail/Drive/Contacts + Limited Use commitments, consistent with `/privacy`. If `cal.pouk.ai` scopes change, this page and `/privacy` change in the same change-set.
- **Product clarity.** A reader understands what the app is, that pouk.ai self-hosts it, and how to open it.
- **The hero CTA points to `cal.pouk.ai`** (the app), not to `mailto:` and not to a funnel page. This is the explainer→app hand-off and it is correct.
- **Cross-link to `/privacy`** for full data detail; do not re-state divergent data specifics.
- **Restraint on funnel intrusion.** No prospect-funnel CTA (`/why-ai`, `/roles`, etc.) interrupts the scope-justification section. A prospect-facing booking CTA, if ever added here, must not crowd the OAuth section and must be governed by `contact-flow`, not invented on this page.

This spec does not rewrite the shipped copy; corrections route content → engineer against these outcomes.

## 6. Content data shape

The page reads `src/content/scheduling.json` (as shipped). Schema (per R-074) validates:

```json
{
  "meta": "object — { title, description, canonical } — canonical MUST be 'https://pouk.ai/scheduling/' (trailing-slash, CR-1)",
  "hero": "object — { title, lede, cta: { label, href } } — cta.href is 'https://cal.pouk.ai' (the app)",
  "intro": "string[] — what the app is",
  "scopes": "object — { heading, intro, items[] } — items[] each { heading, body }; THE scope-justification block (compliance-load-bearing)",
  "privacyNote": "object — { text, linkLabel, linkHref } — linkHref is '/privacy/'"
}
```

Constraint: `scopes.items[]` is the field the OAuth reviewer reads. Its feature descriptions must stay aligned with `cal.pouk.ai`'s requested scopes and with `/privacy`'s scope list. No new field is required.

## 7. User flow

- **Entry**: `SiteShell` footer "Scheduling" link; `cal.pouk.ai` app / OAuth consent surface; the Google verification console; rarely a prospect from the footer.
- **Read path**: Land → understand the app → either open `cal.pouk.ai` (the action) or read the scope-justification + privacy note (the reviewer/user reference read).
- **Exit / conversion**: Primary exit is `cal.pouk.ai` (open the app). A prospect who books there has converted. **The funnel does not route prospects *into* `/scheduling` to reach booking** — that path is offered directly at funnel conversion points by `contact-flow`. `/scheduling` is reached *from* the footer/OAuth surface, and exits *to* the app.

## 8. Acceptance criteria

- [ ] Route renders at `/scheduling` (served as `/scheduling/`, trailing-slash).
- [ ] `meta.canonical` is `https://pouk.ai/scheduling/` (trailing-slash; CR-1 closed 2026-06-13).
- [ ] The scope-justification section maps each described feature to exactly the Calendar scopes `cal.pouk.ai` requests, consistent with `/privacy`.
- [ ] Minimum-scope + no-Gmail/Drive/Contacts + Limited Use statements are present (or cross-linked to `/privacy` for full detail).
- [ ] The hero CTA links to `https://cal.pouk.ai` (the app), not to `mailto:` and not to a funnel page.
- [ ] A cross-link to `/privacy` is present.
- [ ] **No prospect-funnel CTA interrupts the scope-justification section.** Any future booking CTA on this page is governed by `contact-flow`, not invented here.
- [ ] `SiteShell` renders with **no funnel-nav item marked current**.
- [ ] `<title>` and `<meta description>` describe the scheduling app (factual product copy).
- [ ] Content lives in `src/content/scheduling.json` validated by a Zod schema (R-074/R-076).
- [ ] Lighthouse mobile: Perf ≥ 95, A11y = 100, BP = 100, SEO = 100.
- [ ] No client-side JS beyond the sitewide `BaseLayout` posture; axe-core 0 violations (route in CI coverage per CR-3).
- [ ] **Scope-justification verified** against the live `cal.pouk.ai` consent screen (Arian-verified) — the compliance check.

## 9. Decisions (RESOLVED) + dependencies

- **FS-SCH-1 — Funnel role → off-funnel explainer / OAuth scope-justification. LOCKED (Arian-ratified 2026-06-14).** `/scheduling` is a footer-reached explainer + OAuth scope-justification surface; it is **not** the funnel's booking path. The booking *action* is surfaced directly at funnel conversion points by `features/contact-flow.md` — prospects are not routed through the legal-flavored `/scheduling` page to reach booking. The page's hero CTA still links to `cal.pouk.ai` as the **app** (explainer→app hand-off), which is correct and unchanged. No prospect-funnel CTA is added to `/scheduling`; if one ever is, it must be governed by `contact-flow` and must not crowd the OAuth scope-justification section. The page's load-bearing OAuth job is protected from dilution by this decision.
- **Scope-alignment maintenance rule** (shared with `/privacy`): any `cal.pouk.ai` scope change updates `/scheduling` + `/privacy` in the same change-set. PM recommends an R-NNN standard (engineer authors the requirement text).
- **`cal.pouk.ai` infra status.** This spec assumes the app is live and its scopes are stable. If the app's scopes or hosting model change, this page and `/privacy` are downstream dependencies.
- **R-007 route inventory** amendment owed (shared cluster) — `final-state-strategy.md` §7.2.
- **No DS dependency.** Composes inside shipped `Hero` + `SiteShell` + prose primitives.

## 10. Out of scope

- Becoming the funnel's primary booking path. The direct booking CTA at conversion points (`contact-flow`) owns that; `/scheduling` is the explainer/justification.
- An embedded `cal.com` booking widget on `/scheduling`. The page links *out* to `cal.pouk.ai`; embedding a third-party scheduling iframe/island would violate the zero-JS + client-JS-budget posture (R-009/R-010). Booking happens on the app, not in an embed here.
- Prospect-funnel CTAs interrupting the scope-justification section.
- Brand-register experiments that dilute the compliance read.
- Rewriting the shipped product/compliance copy. This spec ratifies and governs it.
- Jurisdiction-specific or multi-language variants. English-only at this stage.
