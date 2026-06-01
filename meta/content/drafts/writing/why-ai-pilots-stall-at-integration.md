---
draftDoc:
  type: per-essay content draft
  status: Approved
  version: 1.0
  date: 2026-05-31
  owner: Arian (founder)
  author: pouk-ai-content
  governingSpec: meta/specs/pages/writing.md (§5 editorial bar) + meta/specs/content/writing.json.md (§4 frontmatter)
  targetFile: src/content/writing/why-ai-pilots-stall-at-integration.md (engineer authors this once approved)
  note: >
    This is the FIRST banked /writing essay, greenlit by Arian 2026-05-31 (promoted from the illustrative
    seed in meta/content/drafts/pages/writing.md §5c). It demonstrates the full /why-ai shareability
    template: a canonical claim, one sourced screenshot-able stat block (MIT NANDA), a quotable line, a
    references[] block mirroring why-ai.json, and the required foot-of-essay funnel link. The two blocks
    below are (1) the essay frontmatter the engineer copies into the real collection file, and (2) the
    Markdown body. Everything outside those two fenced blocks is drafting commentary for Arian and is NOT
    shipped.
---

# Content draft (per-essay): Why AI pilots stall at integration

**Slug**: `why-ai-pilots-stall-at-integration`
**Status**: Approved — shipped as the launch essay (`draft: false`)
**Governing specs**: `meta/specs/pages/writing.md` §5 (editorial bar) · `meta/specs/content/writing.json.md` §4–§5 (frontmatter + validation)
**Target ship file**: `src/content/writing/why-ai-pilots-stall-at-integration.md`

---

## 1. Drafting notes

- **Audience read**: a top-of-funnel reader who hit this via a share, a peer's DM, or a long-tail search ("why AI pilots fail", "AI pilot to production"). Problem-aware, not yet evaluating pouk.ai. They read for their own credibility — they've watched a pilot die in production and want language for *why*. The funnel link at the foot is an earned consequence, not the reason they're here.
- **Claim it owns** (the §5.1 canonical claim): *pilots stall at integration, not at the model.* This is the "pouk.ai take" the essay defends in one sentence and could become a repeatable reference.
- **Why it clears the §5.2 ship/reject bar**:
  - Headline states a claim the body proves (integration, not model, is where pilots stall) — not a payoff the body doesn't deliver.
  - The stat is **sourced and citable** (MIT NANDA, *The GenAI Divide*, 2025) and supports the claim directly — it isn't cherry-picked-to-alarm; it's the load-bearing evidence.
  - Useful to a reader who'll never hire pouk.ai — the "test the seam from day one" takeaway stands alone as advice.
  - One quiet funnel link at the foot (`/why-ai`), earned — no mid-essay CTAs, no urgency, no popups.
  - Reads like an operator who has watched this happen, not a marketing department performing expertise.
  - **Governing test**: would Arian forward this to a respected peer with his name on it and feel it raised his standing? I believe yes — it's a sharp, sourced, non-salesy take on a failure every operator has seen. Arian is the final judge (§5.2 is Arian-verified).
- **Voice anchor**: agent §4.2 (operator-first — assume the reader has shipped a pilot; don't define "integration" or "production"), §4.4 (no marketing-speak), §4.6 (concrete artifacts — "the data that wasn't where the pilot assumed", not "data challenges"). Mirrors the `/why-ai` register and the `/principles` quotable cadence ("the diagnosis comes before the build").
- **Funnel exit decision** (`funnelExit`, required, §5.3): **`/why-ai`** chosen. Rationale: `/why-ai` is the diagnosis hub that names integration as one of the five failure modes — this essay *is* a deep-dive on that failure mode, so the natural next step for a problem-aware reader is the full diagnosis, not a specific archetype yet. Alternatives considered: `/roles#automator` (the Automator is the systems-integration archetype — a defensible alternative if Arian wants the essay to point at the *who* rather than the *fuller why*) and `/engagements#pilot` (once `/engagements` is live — the Pilot rung is literally about de-risking a workflow before rollout, a strong thematic match). I recommend `/why-ai` for v1 and note `/engagements#pilot` as the fast-follow once that route ships. See §4 Q1.
- **Assumptions**:
  - **A1 — one stat, foregrounded.** The essay carries exactly one screenshot-able stat block (the MIT NANDA 95%). One sourced, well-placed stat beats three thin ones for the screenshot-share unit (the `/why-ai` `statsRow` discipline). More stats can come in a longer body; this draft keeps the spine tight.
  - **A2 — `draft: true` at author time.** The frontmatter ships with `draft: true` so it's banked, not live, until Arian flips it (§7(e) banking mechanism). Approval of *this content draft* and flipping the *frontmatter `draft` flag* are two separate acts.
  - **A3 — body length.** ~480 words. Long enough to prove the claim and host the stat + quotable line; short enough to read in one sitting and survive a screenshot of the stat block. The designer composes the stat block per the `/why-ai` `statsRow` pattern.

---

## 2. Essay frontmatter (engineer copies this into the collection file)

Per `writing.json.md` §4. The engineer transcribes this into `src/content/writing/why-ai-pilots-stall-at-integration.md` frontmatter once Arian approves the copy.

```yaml
title: "Why AI pilots stall at integration"
slug: "why-ai-pilots-stall-at-integration"
claim: "Most AI pilots don't fail on the model — they fail at the seam where the model meets the systems it has to live in."
description: "MIT found 95% of enterprise GenAI pilots delivered no P&L impact. The cause isn't model quality — it's the integration seam pilots scope out."
datePublished: "2026-05-31"
dateModified: "2026-05-31"
draft: true
funnelExit:
  text: "Why AI →"
  href: "/why-ai"
ogClaim: "Pilots stall at integration, not at the model."
# ogImage: omitted — falls back to public/og.png until per-essay cards are automated (writing.md §9)
references:
  - index: 1
    title: "The GenAI Divide: State of AI in Business 2025"
    source: "MIT NANDA"
    url: "https://www.media.mit.edu/groups/nanda/overview/"
```

**Frontmatter field notes**:
- `description` is 138 chars (≤155 cap, §5.1). Stat-led + claim-led, brand-voice, no CTA.
- `claim` is 117 chars (within the 20–180 bound), one sentence, no trailing CTA.
- `ogClaim` is 47 chars (≤100 cap), the social-card hook — punchier than the meta description, distinct from it per `writing.json.md` §4.
- `funnelExit.text` is `Why AI →` (8 chars, within 4–40 bound); `href` is `/why-ai`, a valid funnel target (`^/why-ai$`).
- `references[1].url` — see §3 (canonical-URL decision). The essay carries a stat, so `references[]` is **required** (§5.1) — present.
- `draft: true` — banked until Arian flips it. Approving this draft ≠ flipping the flag.

---

## 3. Canonical URL decision (the citation chase)

**Landed URL**: `https://www.media.mit.edu/groups/nanda/overview/`

- This is the **canonical MIT-owned NANDA project page** — the redirect target of `nanda.media.mit.edu` (which 302-redirects to `www.media.mit.edu/groups/nanda/overview/`). It is the primary institutional home of the NANDA initiative that authored *The GenAI Divide*.
- **Rejected — Fortune press coverage** (`fortune.com/2025/08/18/...`). Per the `referencesNote` discipline and Arian's instruction, the citation points at the primary MIT source, not secondary press.
- **Rejected — third-party PDF host** (`mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf`). The report PDF circulates on this non-MIT host; it is *not* a primary source, so it's not the canonical citation. If the engineer wants to surface a direct-PDF link in the references composition *in addition to* the canonical MIT page, that's a composition call — but the `references[].url` of record is the MIT-owned page.
- **`referencesNote`** (the `/why-ai` constant): "Source URLs cleaned from email click-trackers to canonical destinations." Applies — the MIT URL is the clean canonical destination.
- **One open item (Q2)**: I could not fully load the MIT NANDA page through the fetch tool (the host closed the socket twice — a tooling issue, not a dead link; the 302 from `nanda.media.mit.edu` to this URL resolved cleanly). Recommend the engineer/Arian do a final eyes-on confirmation that `https://www.media.mit.edu/groups/nanda/overview/` resolves and is the right canonical home at ship time, and swap to a more specific report-landing URL on `media.mit.edu` if MIT publishes one. The source name (`MIT NANDA`) and the stat are solid regardless.

---

## 4. Essay body (Markdown — ships in the collection file)

The body below is the shipping prose. The `statsRow` block is rendered by the designer per the `/why-ai` `statsRow` pattern (value + caption + attributed source) — in the body it's marked so the engineer/designer know where the stat molecule lands. The single foot-of-essay funnel link is the `funnelExit` (rendered from frontmatter, not hand-written in the body — shown here in brackets for context only).

```markdown
A pilot that works in a demo and dies in production isn't a model problem. The model was fine. What broke was everything around it.

This is the most expensive misread in enterprise AI right now, and there's finally a number on it. MIT's NANDA initiative studied 300 public AI deployments, surveyed 350 employees, and interviewed 150 leaders. The finding:

<!-- statsRow: value="95%" caption="of enterprise generative-AI pilots delivered no measurable P&L impact — the barrier is the integration and learning gap, not model quality" source="MIT NANDA, The GenAI Divide, 2025" -->

Ninety-five percent. Not because the models were weak — most of these pilots ran on the same frontier models that work fine for individuals every day. They stalled because the tools never learned the workflow they were dropped into, and never got wired into the systems they were supposed to serve.

That's the seam. It's where the data wasn't where the pilot assumed it would be. Where the permissions nobody owned blocked the one integration that mattered. Where the workflow the team had to abandon to use the new thing quietly won, because people route around friction. The model demo answered "can the model do this?" — and that was never the question that decided whether it shipped.

Here's the structural trap. Pilots are scoped to prove the model, so they're de-scoped on exactly the parts that decide production: the plumbing, the handoffs, the permissioning, the people whose job changes. The pilot succeeds on its own terms and fails on the only terms that matter. The result is a graveyard of working demos — each one a screenshot of success that never became a system.

The fix isn't a better model. It's refusing to scope the seam out of the pilot in the first place.

That means treating integration as the thing being tested, not the thing assumed away. Pick one workflow. Wire the pilot into the real data, the real permissions, the real handoffs — the messy parts — from day one. Measure against the baseline that workflow runs at today. If the pilot can't survive contact with the systems it has to live in, you want to know that in week three, not after the rollout budget is committed. A pilot that ducks the seam isn't lower-risk. It's the same risk, paid later.

[funnelExit: "Why AI →" → /why-ai]
```

**Quotable line** (the §5.1 lift-able sentence, engineered to be screenshotted/pasted): *"A pilot that ducks the seam isn't lower-risk. It's the same risk, paid later."* Backup quotable: *"The pilot succeeds on its own terms and fails on the only terms that matter."*

**Screenshot unit**: the `95%` `statsRow` block — value + caption + source, self-contained, carries the MIT source back implicitly (the `/why-ai` share mechanic). This is the highest-leverage B2B-social share artifact in the essay.

---

## 5. Page-level SEO / meta (per-essay, §5.4)

- **`<title>`**: `Why AI pilots stall at integration — pouk.ai` (44 chars; claim-led, `— pouk.ai` suffix per `writing.json.md` §4.)
- **`<meta name="description">`**: from frontmatter `description` — `MIT found 95% of enterprise GenAI pilots delivered no P&L impact. The cause isn't model quality — it's the integration seam pilots scope out.` (138 chars.)
- **OG title**: `Why AI pilots stall at integration` (drops the `— pouk.ai` for the share context; the claim is the hook.)
- **OG description**: from `ogClaim` expanded — `Pilots stall at integration, not at the model. MIT: 95% of enterprise GenAI pilots show no P&L impact.` (101 chars; under the 200 OG cap, stat-led.)
- **OG image**: `public/og.png` fallback (per-essay card is a fast-follow, `writing.md` §9).
- **Canonical**: `https://pouk.ai/writing/why-ai-pilots-stall-at-integration`
- **Article JSON-LD**: rendered by the `[slug]` template per the `/why-ai` Article shape — `headline` = title, `description` = meta description, `url` = canonical, `author`/`publisher` = Organization pouk.ai, `datePublished`/`dateModified` from frontmatter. (Engineer wires; copy fields are the frontmatter strings above.)
- **Heading hierarchy**: exactly one H1 (the essay title, from frontmatter). The body runs as prose under the H1 with no forced H2s at this length; if the designer wants a section break, it descends cleanly to H2. No skipped levels.

---

## 6. Composition-fit flags (for the designer)

- **Flag 1 — the stat block is the screenshot unit.** The `statsRow` (95% / caption / MIT NANDA source) must reproduce the `/why-ai` `statsRow` molecule so it survives a zero-context screenshot. It's placed early (after the second paragraph) so a skimming sharer hits it fast. Don't bury it below the fold.
- **Flag 2 — one funnel link, at the foot, from frontmatter.** The `funnelExit` ("Why AI →" → `/why-ai`) renders once, at the end, muted. No mid-essay CTA, no banner. If the designer's essay template repeats the email line at the foot (optional per `writing.md` §4b item 6), that's the zero-JS hosted form — separate from the funnel link.
- **Flag 3 — body length is ~480 words.** Real length for the designer to compose density against (per `writing.md` §9, real essay lengths drive composition). If it reads short next to a future longer essay, that's fine — a tight, sourced essay is on-brand; padding it would break the §5.2 bar.
- **Flag 4 — references block.** One reference (MIT NANDA). Renders per the `/why-ai` references pattern with the `referencesNote` constant. The `[1]` citation marker in the stat caption/source ties to the references entry.

---

## 7. Open questions for Arian

- **Q1 — funnel exit: `/why-ai` (recommended) vs. `/roles#automator` vs. `/engagements#pilot`.** I chose `/why-ai` — the essay is a deep-dive on the integration failure mode `/why-ai` names, so the full diagnosis is the natural next step for a problem-aware reader. `/roles#automator` points at the systems-integration archetype (the *who*); `/engagements#pilot` points at the Pilot rung (literally de-risking a workflow before rollout — a strong match, available once `/engagements` ships). Recommend `/why-ai` for v1, swap to or add `/engagements#pilot` as a fast-follow. Your call — one frontmatter line.
- **Q2 — confirm the canonical MIT URL.** I landed `https://www.media.mit.edu/groups/nanda/overview/` (the primary MIT NANDA page; the redirect target of `nanda.media.mit.edu`). The fetch tool couldn't fully load the page (host closed the socket — tooling, not a dead link), so recommend a final eyes-on check at ship time, and a swap to a more specific MIT report-landing URL if one exists. Source name (`MIT NANDA`) and the stat are solid regardless. The third-party PDF (`mlq.ai/...`) and Fortune coverage are both deliberately rejected as non-primary.
- **Q3 — governing-test sign-off (§5.2, Arian-verified).** Would you forward this to a respected peer with your name on it? That's the gate that flips `draft: true` → `false`. I believe it clears the bar; you're the judge.
- **Q4 — `dateModified`/`datePublished`.** Set to `2026-05-31` (today) as placeholders. If the essay banks for a while before launch, set `datePublished` to the actual launch date at flip time so the RSS + Article schema reflect the real publish date.

---

## 8. Out of scope

- **Flipping `draft: true` → `false`.** That's Arian's act after the §5.2 governing-test sign-off — separate from approving this content draft.
- **The collection-file authoring, RSS wiring, Article JSON-LD rendering, OG-card generation** — engineering (`writing.json.md` §6–§7).
- **A per-essay OG card image** — falls back to `public/og.png` until per-essay cards are automated (`writing.md` §9).
- **Additional stats / a longer body** — one sourced stat is the spine by design (A1); expansion is a future revision if the essay earns it.
- **Composition, stat-block rhythm, references treatment, foot-of-essay layout** — `pouk-ai-designer`'s lane (§6 flags hand these off).
