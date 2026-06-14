# Spec: Privacy Policy

**Route**: `/privacy`
**Status**: Approved (2026-06-14) — governance contract for the live page; ratified as part of the final-state push. This spec **legitimizes a page that already shipped** (#122, for Google OAuth verification) — it documents the maintenance contract that should have preceded the build. It is not a request to rebuild the page. No content rebuild is gated on this; the maintenance rules and the scope-alignment AC (§8) are the live obligations.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-06-14 (Approved as governance contract)
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout). **Scope note**: this page is the *product's* (`cal.pouk.ai`) legal surface hosted on the marketing domain — it sits at the edge of the masterplan's "marketing site" scope. See `meta/specs/final-state-strategy.md` §5.
**Strategy reference**: `meta/specs/final-state-strategy.md` §5 (legal-surface governance gap), §2 (verdict: REVISE).
**As-shipped reference**: `src/content/privacy.json`, `src/pages/privacy.astro` (live as of #122).

---

## 0. Why this spec exists (REVISE rationale)

`/privacy` shipped in #122 to satisfy Google's OAuth verification for the `cal.pouk.ai` scheduling app, which requests Google Calendar and basic-profile scopes. The page is live, content-complete, correctly canonicalized (`https://pouk.ai/privacy/`), and carries the security-header stack. **It had no PM spec.** That is a governance hole with one acute risk: Google's reviewers read this page, and a future edit that drifts the stated data practices out of alignment with the scopes `cal.pouk.ai` actually requests can cost the OAuth grant. This spec pins the contract so an edit cannot silently break verification.

This is an **amendment-class delta document**: it ratifies the as-shipped page and sets the rules for keeping it true. The delta from current state is *governance*, not *content* — unless Arian's review of the live copy surfaces a correction.

## 1. Purpose

`/privacy` is the public, authoritative statement of how the `cal.pouk.ai` scheduling app accesses, uses, stores, retains, and deletes Google user data — written to satisfy (a) the Google API Services User Data Policy (including Limited Use), (b) the OAuth verification reviewer, and (c) any `cal.pouk.ai` user who wants to know what the app does with their calendar. It is a trust-and-compliance surface, not a marketing surface. Its job is to be **factually accurate, scope-aligned, and verifiable** — never persuasive.

## 2. Audience

- **Primary**: A Google OAuth verification reviewer assessing whether the requested Calendar + profile scopes are justified and whether data handling complies with the User Data Policy. This reviewer's read gates the `cal.pouk.ai` grant.
- **Secondary**: A `cal.pouk.ai` user (someone Arian schedules with, or Arian himself) checking what data the app touches and how to disconnect/delete it.
- **Tertiary**: A prospect or visitor who clicked the footer "Privacy" link out of due diligence. They should leave reassured the operation is legitimate and restrained — but this page is not asked to convert them.

## 3. Success criteria

- **Behavior**: The OAuth reviewer finds every requested scope justified by a named, user-visible feature, finds the Limited Use commitment stated, and approves/maintains the grant. A user finds the disconnect/delete path. No reader is confused about whether non-Calendar Google data is touched (it is not).
- **Signal**: OAuth verification stays granted. No reviewer follow-up requesting clarification of data practices. No user confusion in inbound mail about what `cal.pouk.ai` accesses.
- **Failure mode**: The policy claims a practice the app doesn't follow, or omits a scope the app does request, or drifts out of alignment after a `cal.pouk.ai` scope change — any of which is an OAuth-revocation risk. Opposite failure: the page acquires marketing voice, a funnel CTA, or brand-register experiments that read as untrustworthy on a legal surface.

## 4. Information architecture

The as-shipped IA (from `src/content/privacy.json`) is sound and is ratified. Sections, in order:

1. `SiteShell` — top nav + footer. **No nav item marked current** (legal pages are not funnel destinations; they should not light up a funnel-nav item).
2. Heading + lede + "last updated" date line.
3. **Who this covers** (`#scope`) — names `cal.pouk.ai` (built on Cal.com / Cal.diy), the data-controller contact.
4. **Google user data we access** (`#google-data`) — the exact Calendar read/write + basic-profile scopes, and the explicit statement that no Gmail/Drive/Contacts/other data is accessed.
5. **How we use this data** (`#use`) — feature-by-feature use mapping.
6. Subsequent sections as shipped: storage, retention, sharing/disclosure, Limited Use commitment, user controls (disconnect/delete), changes-to-policy, contact.

**Constraint**: section order and anchors are stable. New sections may be added; existing anchors must not be removed or renamed (they may be linked from `/scheduling`, the OAuth console, or external due-diligence notes).

## 5. Content requirements

The copy is **legal/compliance content, not marketing content** — the brand-voice contract that governs funnel pages does *not* fully apply here; clarity and accuracy outrank register. Outcomes the copy must hit:

- **Scope-alignment (load-bearing).** Every Google scope the page describes must match exactly what `cal.pouk.ai` requests in its OAuth consent screen — no more, no less. The page asserts: Calendar events + busy/free (read), Calendar events (write), basic profile (name + email). It asserts **no Gmail, Drive, Contacts, or other Google data** is accessed. If `cal.pouk.ai`'s scopes ever change, this page changes in the same commit (see §9 maintenance rule).
- **Limited Use commitment.** The page states that pouk.ai's use of Google data follows the Google API Services User Data Policy including the Limited Use requirements (data used only to provide/improve the user-facing feature; not for ads; not sold; no human reading except as permitted).
- **Feature-mapped use.** Each scope maps to a feature a user can see (read → real availability; write → booking event creation/update/cancel; sync → live schedule). No use beyond scheduling.
- **Data lifecycle clarity.** What is stored, where, how long, and how a user disconnects and requests deletion — in plain language, actionable.
- **Controller identity + contact.** A reachable contact for data-controller questions (`hello@pouk.ai` or `security@pouk.ai` per the existing security.txt).
- **No marketing.** No funnel CTA, no `mailto:hello@pouk.ai` framed as "let's talk," no booking CTA, no brand-register display type, no Pouākai flourish. The only links are: internal anchors, the security/contact address, `cal.pouk.ai`, and `/terms`.
- **Accuracy of the "last updated" date.** Updated on every substantive edit.

This spec does **not** rewrite the shipped copy. If Arian's review finds a scope-alignment error or omission, that correction routes content → engineer as a normal edit; the spec's outcomes above are the acceptance bar for that correction.

## 6. Content data shape

The page reads `src/content/privacy.json` (as shipped). The schema (in `src/content/_schemas/`, per R-074) must validate:

```json
{
  "meta": "object — { title, description, canonical } — canonical MUST be trailing-slash 'https://pouk.ai/privacy/' (CR-1)",
  "heading": "string — page H1",
  "lede": "string — one-paragraph summary",
  "lastUpdated": "string — human-readable 'Last updated <date>'; updated on every substantive edit",
  "sections": "array — each { heading, anchor, blocks[] }; blocks are strings or { list: string[] } for bulleted scope lists"
}
```

Constraint: the `google-data` section's scope list is the schema's load-bearing field — it is the assertion the OAuth reviewer checks. No new field is required; the maintenance rule (§9) governs its accuracy, not the schema.

## 7. User flow

- **Entry**: From the `SiteShell` footer "Privacy" link; from the `/scheduling` page's privacy note; from the `cal.pouk.ai` OAuth consent screen / app listing; from the Google verification console; rarely from search.
- **Read path**: Reviewer/user lands → scans scope section → confirms feature mapping + Limited Use → finds disconnect/delete path. This is a reference read, not a funnel read.
- **Exit**: Back to `cal.pouk.ai`, to `/terms`, or close. **There is no funnel exit and there should not be** — this page does not route prospects into the marketing funnel.

## 8. Acceptance criteria

- [ ] Route renders at `/privacy` (served as `/privacy/`, trailing-slash).
- [ ] `meta.canonical` is `https://pouk.ai/privacy/` (trailing-slash; CR-1 closed 2026-06-13).
- [ ] The Google-data section lists exactly the scopes `cal.pouk.ai` requests (Calendar read, Calendar write, basic profile) and **explicitly states no Gmail/Drive/Contacts/other access**.
- [ ] The Limited Use / Google API Services User Data Policy commitment is present.
- [ ] Each scope maps to a named, user-visible feature.
- [ ] A disconnect-and-delete path is documented and actionable.
- [ ] A data-controller contact address is present.
- [ ] **No funnel CTA, no booking CTA, no brand-register display type** appears on the page. Only links: internal anchors, contact address, `cal.pouk.ai`, `/terms`.
- [ ] `SiteShell` renders with **no funnel-nav item marked current**.
- [ ] `<title>` and `<meta description>` are factual and name the scheduling-app data scope (not marketing copy).
- [ ] Content lives in `src/content/privacy.json` validated by a Zod schema (R-074/R-076).
- [ ] Lighthouse mobile: Perf ≥ 95, A11y = 100, BP = 100, SEO = 100.
- [ ] No client-side JS beyond the sitewide first-party `BaseLayout` posture; axe-core 0 violations (route now in CI coverage per CR-3).
- [ ] **Scope-alignment is verified against the live `cal.pouk.ai` consent screen** (Arian-verified) — the load-bearing compliance check.

## 9. Open questions / dependencies

- **Maintenance rule (the load-bearing dependency).** Any change to `cal.pouk.ai`'s requested OAuth scopes **must** update `src/content/privacy.json`'s scope section in the same change-set. PM recommendation: record this as a standing rule in `meta/standards/technical-requirements.md` (a new R-NNN for "legal-page ↔ OAuth-scope alignment") — engineer/reviewer authors the requirement text; PM flags the need here. Until then, the reviewer enforces it manually.
- **Controller identity wording.** The as-shipped copy describes pouk.ai as "an independent technical consultancy." Confirm this aligns with `/about` v2.1's company-register positioning (it should — both avoid sole-operator framing). Arian's call if any wording shift is wanted; legal accuracy outranks register if they conflict.
- **R-007 route inventory.** `/privacy` is one of the routes that shipped outside R-007's five-route enumeration. R-007 amendment owed (flagged in `final-state-strategy.md` §7.2; engineer's lane to author the requirement text).
- **No DS dependency.** Page composes inside `SiteShell` + standard prose primitives already shipped.

## 10. Out of scope

- Any marketing CTA, funnel hand-off, or booking affordance on `/privacy`. It is off-funnel by design.
- Brand-register experiments (display type, saturated color, Pouākai illustration). Legal pages are restraint-maximal.
- A cookie-consent banner — the site is cookieless (Matomo cookieless, no `_pk_*` cookies); none is required at launch. Re-evaluate only if a tracking-cookie is ever introduced.
- A separate GDPR/CCPA jurisdiction-specific variant. English-only, single policy at this stage; revisit if `cal.pouk.ai` materially expands its user base into a jurisdiction requiring a distinct notice.
- Rewriting the shipped legal copy. This spec ratifies and governs it; substantive legal-copy authorship is Arian's lane (he owns the compliance assertions).
- Per-essay/per-page personalization, analytics dashboards, or A/B variants. None apply to a legal surface.
