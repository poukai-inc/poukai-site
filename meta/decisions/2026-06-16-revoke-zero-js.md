# Decision D-25: Revoke the zero-JS / client-JS-posture contract (full removal)

**Status**: Locked (founder decision, ratified 2026-06-16)
**Owner**: Arian (founder, sole approver) · Author: pouk-ai-pm
**Date**: 2026-06-16
**Supersedes**: the client-JS-posture clauses of D-15 / D-16 (the "Matomo + Bugsink only, ≤ 75 KB budget" framing from `2026-05-13-launch-readiness-closed.md`) and the zero-JS implications of D-23 R4.
**Propagates to**: `meta/masterplan.md` §1 (quality-bar row + the Lighthouse-implication line), §4.2A (CI gates), §4.3 (client-JS posture — REVOKED note), §6.1 (parity matrix). Reviewer's parallel revision of `meta/standards/technical-requirements.md` (R-009 / R-078 / R-079 struck; R-013 + HTML-weight gate converted blocking → advisory; a11y + reduced-motion rules retained).

> **Note on numbering**: D-24 is intentionally skipped to avoid collision risk with any in-flight reviewer-lane entry; this revocation is recorded as D-25 to match the masterplan §4.3 cross-reference.

---

## Context

The migration plan was built around a **zero-JS / static-HTML-only** posture: Astro static rendering with no hydration directive as the enforced default (`client:none`), a hard per-page JS budget (≤ 75 KB gzipped, R-010), only two whitelisted first-party scripts (Matomo, Bugsink), and an inline `// hydration: <reason>` justification requirement for anything else. Lighthouse 100 (later relaxed to Perf ≥ 95 / A11y·BP·SEO = 100 in D-14) and a gzipped-HTML-weight ceiling were treated as **hard merge gates** in CI and at cutover.

The founder has determined that this contract is a net limitation: it constrains design and engineering choices in service of a performance posture he no longer wants enforced as a gate.

## Decision

**Full removal of the client-JS / zero-JS contract.**

- **Client-side JS is permitted anywhere, for any reason.** No whitelist, no `// hydration:` justification comment, no per-page JS budget, no zero-JS / static-HTML-only contract. Hydration directives (`client:load`, `client:visible`, `client:only`, etc.), islands, third-party widgets, and embeds (e.g. a Cal.com widget, an accordion that hydrates, a Radix-backed `FAQSection`) are all allowed without ceremony.
- **Lighthouse and HTML weight become advisory, not merge-blocking.** They are tracked for situational awareness; they do not gate a PR or the cutover.
- **Astro static rendering remains the default by choice**, not by mandate — it is still a sensible engineering baseline, but no contract requires it.

## Founder rationale

> "Zero-JS is a limitation; full removal."

## What changed

| Was | Now |
|---|---|
| Zero-JS / static-HTML-only contract (masterplan §4.3; R-009 / R-078 / R-079) | Struck. Client JS unrestricted. |
| ≤ 75 KB gzipped per-page JS budget (R-010); two-script whitelist (Matomo/Bugsink) | Struck. No budget, no whitelist. |
| `// hydration: <reason>` justification required for any non-whitelisted script | Struck. No justification required. |
| Lighthouse (Perf/BP/SEO) as a HARD CI + cutover gate (R-013) | Advisory. Tracked, not blocking. |
| Gzipped HTML-weight ceiling as a HARD gate (R-015, masterplan §6.1) | Advisory. Tracked, not blocking. |

## What survived (still binding)

The revocation does **not** touch accessibility.

- **Accessibility — WCAG AA, axe-core 0 violations on every route — remains a HARD, merge-blocking gate.** Any interactive or hydrated surface introduced under the new freedom must be keyboard-accessible, screen-reader-correct, and axe-clean.
- **`prefers-reduced-motion` remains binding.** All motion (CSS or JS-driven) must collapse under reduced-motion.

These are carried by the reviewer's revised `meta/standards/technical-requirements.md` (the a11y and reduced-motion rule IDs are retained as binding in that doc; R-009 / R-078 / R-079 are struck and R-013 + the HTML-weight gate are converted to advisory there in parallel with this entry).

## Blast radius / cascade

A repo-wide audit (this entry's date) found ~30 files across `meta/specs/`, `meta/compositions/`, and `meta/content/drafts/` asserting the now-revoked contract (zero-JS ACs, `client:*` prohibitions, "Lighthouse 100/100/100/100" as a gate, R-009/R-078/R-079 citations, the ≤ 75 KB budget). The live-work artifacts (the home destination spec, the why-ai amendment, and the home + why-ai compositions) are annotated "superseded by the 2026-06-16 JS revocation" in this pass. The remaining files are catalogued in the PM's cascade list handed to the founder; they are not rewritten in this pass — their stale ACs are non-binding as of this entry, and they are revised opportunistically as each surface is next touched. A reviewer must not block a JS-introducing change on a stale zero-JS AC.

## Verification

- `meta/masterplan.md` §4.3 carries a dated REVOKED note (not deleted) so citing docs still resolve.
- Masterplan §1, §4.2A, §6.1 updated to advisory framing.
- Reviewer confirms R-009/R-078/R-079 struck and R-013 + HTML-weight converted to advisory in `meta/standards/technical-requirements.md`, with a11y + reduced-motion retained as binding. (Reviewer lane — verify on their commit.)
