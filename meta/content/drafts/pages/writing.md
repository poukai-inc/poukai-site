---
route: /writing (index)
status: Approved
version: 0.3
lastUpdated: 2026-05-31
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/writing.md
contentDataSpec: meta/specs/content/writing.json.md
compositionReference: none yet (designer composes after first banked essay drafts land — writing.md §9)
scope: index-page chrome only — essay bodies are separate per-essay deliverables
revisionHistory:
  - version: 0.1
    date: 2026-05-31
    summary: First draft. Email line drafted alongside an RSS-only fallback (Buttondown not yet provisioned). Seed essay (§5c) carried no stat — noted it would ship without a stat block.
  - version: 0.2
    date: 2026-05-31
    driver: Arian resolved Q1 + Q4. Buttondown APPROVED — email line ships; RSS-only demoted to a secondary fallback note. Seed essay must carry one sourced stat + references[] to demonstrate the full /why-ai shareability template.
    changes:
      - Email line CONFIRMED shipping (Buttondown). §2 retention block reframed from "ships only if provisioned" to "ships"; RSS-only framing demoted to a one-line fallback note.
      - Seed essay (§5c) revised — lede now lands one citable stat (MIT NANDA, The GenAI Divide, 2025: 95% of GenAI pilots show no measurable P&L impact, attributed to integration/learning gaps not model quality). Added a screenshot-able statsRow block + a references[] entry (canonical, tracker-stripped, mirroring why-ai.json). Still marked illustrative-only.
      - Q1 (email vs RSS-only) CLOSED. Q4 (seed essay) updated — stat added; still awaits Arian's approval as a separate decision.
  - version: 0.3
    date: 2026-05-31
    driver: Arian greenlit the seed essay as the first banked /writing essay (no longer illustrative-only).
    changes:
      - Seed essay PROMOTED out of §5c to its own full per-essay draft at meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md (full body, MIT NANDA stat block, quotable line, funnelExit → /why-ai, references[], full frontmatter, draft:true banking flag).
      - §5c reframed from "illustrative-only" to a PROMOTED banner pointing at the per-essay draft; the headline/claim/lede/stat preserved as the historical seed.
      - Canonical citation URL landed: https://www.media.mit.edu/groups/nanda/overview/ (primary MIT NANDA source; Fortune press + third-party PDF host rejected as non-primary).
      - Q4 (seed essay) CLOSED on this index draft — it now lives as its own deliverable; the essay's own open questions (funnelExit pick, canonical-URL eyes-on, governing-test sign-off) move to the per-essay draft §7.
---

# Content: Writing (`/writing` index)

**Route**: `/writing` (index surface only)
**Status**: Draft
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-05-31 (v0.3)
**Governing spec**: `meta/specs/pages/writing.md` (section 5 content requirements — index + retention chrome)
**Content-data spec**: `meta/specs/content/writing.json.md` (per-essay frontmatter contract; the email-line + RSS constraints in §6)
**Composition reference**: none yet. Per `writing.md` §9, `pouk-ai-designer` composes the index list treatment and retention block after the first banked essays land.

**Scope of this draft.** This is the **index-page furniture only** — hero, the ungated email line, the RSS label, the seed/empty-state line. It is *not* an essay. Per the task, essays are separate per-essay deliverables, each authored against the §5.2 ship/reject bar and the `writing.json.md` frontmatter contract. §5 of this draft contains **one sample seed-essay headline + claim + lede**, clearly marked as a sample for Arian's approval — it is not a shipped essay and does not flip any `draft` flag.

---

## 1. Drafting notes

- **Audience read**: the index is the *secondary* entry to `/writing` — essays are the front door (deep-linked from a share, a DM, or a long-tail search). A visitor on the index is either a returning subscriber, a peer browsing the corpus, or someone who clicked "Writing" in the footer. The chrome's job is to frame what the corpus *is* (the operator thinking in public, not a newsletter funnel) and offer two low-friction ways to come back (RSS + the ungated email line) — nothing more.
- **Outcome read** (from spec §5):
  - Hero frames the corpus as the operator thinking in public — not "thought leadership" performed, not a content-marketing grid (§4a item 2, §5.3).
  - The email line reads as "the operator's notes," one line, ungated — not "subscribe to unlock" (§5.3, §7(d)).
  - RSS label is plain and reachable.
  - Empty/seed state (if fewer essays than fill the page at launch) doesn't read as decay theatre — the §7(e) accepted risk; copy mitigates it by framing scarcity as deliberate, not abandoned.
- **Voice anchor**: agent §4.2 (operator-first — the reader is a peer, write to them as one), §4.4 (no marketing-speak — "newsletter", "subscribe to my newsletter", "join", "community", "thought leadership" are all the wrong register here), §4.6 (show, don't claim — the corpus proves the thinking; the index doesn't advertise it). Mirrors the `/principles` intro register ("The work is what proves them.") and the `/why-ai` restraint.
- **Assumptions** (flagged for Arian):
  - **A1 — `/writing` is NOT in the primary nav** (resolved, `writing.md` §9 — footer link + essay cross-links only). This draft writes no nav-label copy beyond confirming the footer label is `Writing`.
  - **A2 — the email line SHIPS** (v0.2 — Buttondown approved by Arian). The §2 retention block is the live copy. RSS-alone remains the documented engineering fallback (`writing.json.md` §6) if the zero-JS embed ever proves unworkable, but it is no longer the default path — demoted to a one-line note in §2. See §2.
  - **A3 — the index has a section heading above the essay list.** The spec IA (§4a) lists hero → essay list → retention block. I default the essay list to render under the H1 without a separate H2 (the list *is* the page body), and the retention block as a quiet H2. If the designer wants the list under its own H2, copy is in §2. See §6.
  - **A4 — the sample seed essay in §5 is illustrative, not a ship.** It demonstrates the §5.2 bar is clearable in this voice. Arian approves it (or not) as a *separate* decision from approving this chrome draft.

---

## 2. Copy

The index is hero → essay list → retention block (email line + RSS) → footer. Essay-list *entries* are generated from each essay's frontmatter (`title`, `claim`, `datePublished` per `writing.json.md` §4) — this draft writes the list's framing and the entry *shape*, not the per-essay content.

### Block: Hero (spec §4a item 2, §5.3 — frame the corpus)

- **Eyebrow**: `Writing`
- **Title**: `Notes from the work`
- **Lede**: `Essays on what actually happens when AI meets a real workflow — the failure modes, the fixes, and the patterns that repeat across engagements. Written for operators, sourced where it counts, and meant to be useful whether or not you ever work with pouk.ai.`

*(Lede is 2 sentences. Sentence 1: what the essays are about, in the reader's terms. Sentence 2: who they're for + the sourcing discipline + the §6.4 governing test stated as a promise ("useful whether or not you ever work with pouk.ai"). Title alternatives in §5.)*

### Block: Essay list (spec §4a item 3 — reverse-chronological index)

Purely typographic. No marketing cards, no excerpt walls. Each entry is generated from frontmatter and renders three things:

- **entry.title** → links to `/writing/[slug]`. (From `title` frontmatter.)
- **entry.claim** → the one-line hook beneath the title. (From `claim` frontmatter — the ownable proposition, ≤180 chars.)
- **entry.date** → the publish date, muted. (From `datePublished`, reverse-chronological sort.)

No "read more", no excerpt, no tag chips, no author byline (attribution is Organization-level per `writing.json.md` §5.1). The list reads as an index, not a feed.

- **Optional list lead-in (designer's call whether to render)**: none recommended. The hero already framed the corpus; a "Latest essays" label would be redundant chrome. If the designer wants a label for scannability, use `Essays` (plain, not "Latest Posts" / "From the blog").

### Block: Retention — email line (spec §4a item 4, §7(d) — ungated, one line)

**Ships** (v0.2 — Buttondown approved). Plain `<form action="…" method="post">` posting to Buttondown, zero-JS, no popup, no modal, no gate.

- **Line**: `New essays, by email when they land. No list, no pitch — just the notes.`
- **Field placeholder**: `you@company.com`
- **Submit button label**: `Subscribe`

*(Fallback note: if the Buttondown zero-JS embed ever proves unworkable, RSS ships alone and this line is deferred — `writing.json.md` §6. That's an engineering fallback, not the planned path; the email line is the default now.)*

*(The line is the "operator's notes" framing the spec demands — "New essays, by email" is the offer; "No list, no pitch — just the notes" is the disavowal of newsletter-funnel energy. Button reads `Subscribe` because that's the plain, honest verb for what the action does; the *line above it* carries the anti-funnel register so the button doesn't have to. Alternative button label in §5 if `Subscribe` reads too newsletter-y for Arian.)*

### Block: Retention — RSS (spec §4a item 4 — the feed link)

- **RSS label**: `RSS`
- **Render note**: the RSS link is global (may also/instead live in the footer per `writing.md` §4a item 5 — designer/engineer call). Label is the bare `RSS` (or a feed glyph + `RSS`); no "Subscribe to our RSS feed!" expansion. RSS ships alongside the email line — both retention paths are live; RSS is for the reader who prefers a feed reader to their inbox.
- **Fallback-only line (renders only in the RSS-alone fallback, if the email line is ever deferred)**: `Follow new essays by RSS.` — not the default; the email line carries the primary retention offer now.

### Block: Seed / empty state (spec §3 / §7(e) — the decay-theatre mitigation)

For launch, when the corpus is small (the §7(e) accepted risk: shipping under-fed). This line renders **only if** the designer/engineer needs filler when the list is short, OR as a standing one-line frame that makes a small corpus read as deliberate rather than abandoned. Two variants:

- **If the list is genuinely empty at first render (unlikely — §7(e) mitigation is "launch with the largest banked count")**: `First essays are landing shortly. Subscribe or follow by RSS to catch them.`
- **Standing frame (recommended — renders regardless of count, reinforces deliberate scarcity)**: none on the index by default. The hero lede already frames the corpus; an apologetic "more coming" line would *create* the decay-theatre read it's trying to prevent. Recommend NO empty-state apology copy — a short list of sharp essays reads as deliberate; a "watch this space" banner reads as abandoned. See §7 Q2.

### Block: Page title + meta (spec §5.4 applies per-essay; index meta below)

- **`<title>`**: `Writing — pouk.ai`
- **`<meta name="description">`**: `Operator-first essays on what happens when AI meets a real workflow — failure modes, fixes, and the patterns that repeat across engagements.` (137 chars; under 155, declarative, no figures, no CTA.)

---

## 3. Page-level SEO copy

- **`<title>`**: `Writing — pouk.ai` (17 chars; function-named, front-loads the page noun.)
- **`<meta name="description">`**: `Operator-first essays on what happens when AI meets a real workflow — failure modes, fixes, and the patterns that repeat across engagements.` (137 chars.)
- **OG title**: `Writing — pouk.ai` (the index OG is low-stakes; essays carry their own per-essay OG per `writing.json.md` §4. Matching `<title>` is fine here.)
- **OG description**: matches `<meta description>` (137 chars, under the 200 cap).
- **Canonical**: `https://pouk.ai/writing`
- **OG image**: `public/og.png` fallback for the index (per-essay cards are the shareability unit, not the index — `writing.json.md` §4).
- **JSON-LD**: index needs none at v1 (Article JSON-LD is per-essay, on `/writing/[slug]`, per `writing.json.md` §5.3). A `Blog`/`CollectionPage` schema is a later call; not authored here.
- **Heading hierarchy**: exactly one H1 — the Hero title (`Notes from the work`). The retention block heading (if rendered) is an H2. The essay-list entry titles are **not** page headings (they're links in a list, not section headings) — confirm with the designer that list entries render as `<a>` inside list items, not as `<h2>`/`<h3>`, so the index doesn't emit one heading per essay and break the outline. See §6.

---

## 4. Voice rationale

- **Hero title — `Notes from the work`** — chosen over "Writing", "Essays", "Insights", "The pouk.ai blog". "Notes" is the deliberately modest register the spec demands (the operator thinking in public, not performing thought leadership). "From the work" ties the writing to the actual engagements — these aren't think-pieces, they're field notes from shipping. Rejects "Insights"/"Perspectives" (consultancy-speak) and "Blog" (undersells, and reads as a content-marketing surface). Mirrors `about.json`'s "engineered, shipped, and supported" register: the work is the source.
- **Hero lede — "useful whether or not you ever work with pouk.ai"** — states the §6.4 governing test *as a public promise*. It's the single line that most distinguishes this corpus from marketing content: the essays earn their keep on the reader's terms, not pouk.ai's. "Sourced where it counts" signals the citable-stats discipline without belaboring it. "What actually happens when AI meets a real workflow" is the operator's framing of the subject — concrete (a real workflow), not abstract ("AI transformation").
- **Email line — "No list, no pitch — just the notes."** — this is the load-bearing anti-funnel phrase. "No list" disavows the email-list-as-asset growth move; "no pitch" promises the emails won't sell; "just the notes" reframes the whole thing as the operator forwarding their own work. It's the copy-level enforcement of §7(d)'s "framed as the operator's notes, not a newsletter funnel." Without this line, even an ungated form reads as a newsletter signup.
- **Email button — `Subscribe`** — plain and honest; the action *is* a subscribe. I deliberately did NOT dress it up ("Get the notes", "Send me essays") because cute button copy on a one-line ungated form tips toward the funnel energy the line above just disavowed. The restraint is the point. Alternative in §5 if Arian disagrees.
- **RSS label — `RSS`** — bare. The audience (operators, peers) knows what RSS is (agent §4.2 — don't explain what the reader already knows). "Subscribe to our RSS feed" would over-explain to exactly the audience that doesn't need it.
- **No empty-state apology** — the strongest copy decision on the page is the *absence* of a "more coming soon" line. Per §7(e), a small corpus is the accepted risk; the mitigation is banking essays, not apologizing for scarcity. A "watch this space" banner manufactures the decay-theatre read. Silence + a few sharp essays reads as deliberate restraint. (See §7 Q2 — Arian's call.)

---

## 5. Headline alternatives + sample seed essay

### 5a. Hero title alternatives

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Writing` | Plain, function-named, matches the eyebrow and nav label. | Says nothing about the register; reads as a bare blog index. Defensible but flat. |
| Sharpest (recommended) | `Notes from the work` | Modest, operator-first, ties writing to shipping. Kills the "thought leadership" read in three words. | Slightly oblique on a cold visit; the lede resolves it immediately. |
| Weirdest | `The operator thinks out loud` | Direct, self-aware, very on-voice with the spec's own framing. | First-person-ish ("the operator") is a register the static pages don't use; could read as precious. Rejected unless Arian wants the wink. |

### 5b. Email-line button alternatives

| Option | Copy | Note |
|---|---|---|
| Safest (recommended) | `Subscribe` | Plain verb; the line above carries the anti-funnel framing. |
| Alt | `Get new essays` | Slightly warmer, still honest; risks tipping toward marketing-button energy. |
| Avoid | `Join` / `Sign me up` | Newsletter-funnel register — rejected per §7(d). |

### 5c. Seed essay — PROMOTED to a full per-essay draft (v0.3)

> **PROMOTED (v0.3, 2026-05-31).** Arian greenlit this as the **first banked `/writing` essay** — no longer illustrative-only. The full per-essay draft (complete body, MIT NANDA stat block, quotable line, `funnelExit`, `references[]`, full frontmatter) now lives at its own file:
>
> **`meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md`**
>
> That file is the source of record for the essay. The headline + claim + lede + stat below are **preserved here as the historical seed** that the full draft grew from; for the shipping copy, defer to the per-essay draft. The canonical citation URL landed at `https://www.media.mit.edu/groups/nanda/overview/` (primary MIT NANDA source, not Fortune press — see the per-essay draft §3).

**Historical seed (superseded by the full per-essay draft above):** what follows is the original headline + claim + lede + stat block + reference, shaped to the `writing.json.md` §4 frontmatter — the spine the full draft was built on.

- **title** (claim-led `<h1>` + `<title>`): `Why AI pilots stall at integration`
- **slug**: `why-ai-pilots-stall-at-integration` *(claim-shaped, kebab-case; not `post-N` — passes `writing.json.md` §5.1)*
- **claim** (the one ownable proposition, drives the index one-liner): `Most AI pilots don't fail on the model — they fail at the seam where the model meets the systems it has to live in.`
- **lede** (≤120 words; survives being pasted into a DM with no context):

  `A pilot that works in a demo and dies in production isn't a model problem. The model was fine. MIT's 2025 study of enterprise AI found 95% of generative-AI pilots delivered no measurable impact on the P&L — and pinned the cause not on model quality but on the integration gap: tools that never learned the workflow they were dropped into. That's the seam — the data that wasn't where the pilot assumed, the permissions nobody owned, the workflow the team had to abandon to use the new thing. Pilots get scoped to prove the model and de-scoped on the parts that decide whether it ships. The fix isn't a better model. It's testing the seam from day one, not assuming it away.`

- **stat block** (`statsRow` pattern — value + caption + attributed source, self-contained for a zero-context screenshot, mirrors `why-ai.json` `statsRow`):

  | value | caption | source |
  |---|---|---|
  | `95%` | `of enterprise generative-AI pilots show no measurable P&L impact — the cause is the integration gap, not model quality` | `MIT NANDA, 2025` |

- **references[]** (canonical, tracker-stripped, mirroring `why-ai.json` references; `referencesNote` discipline applies):

  ```jsonc
  [
    {
      "index": 1,
      "title": "The GenAI Divide: State of AI in Business 2025",
      "source": "MIT NANDA",
      "url": "https://nanda.media.mit.edu/"
    }
  ]
  ```

  *(URL is the canonical MIT NANDA destination. The engineer/Arian should confirm the report's stable canonical link at ship time — the report has circulated via Fortune and other secondary coverage; the citation must point at the primary MIT source, not the press write-up, per the `referencesNote` discipline. Flagged in §7 Q4.)*

- **Why it clears the §5.2 bar** (the demonstration): the headline states a claim the body proves (integration, not model, is where pilots stall); the stat is **sourced and citable** (MIT NANDA, canonical URL), not vague or cherry-picked-to-alarm — and it directly supports the claim rather than decorating it; it leads with the reader's problem (a demo that dies in production), not the offering; it's useful to a reader who'll never hire pouk.ai (the "test the seam from day one" takeaway stands alone); the funnel exit is a single quiet foot-of-essay link (`funnelExit: { text: "Why AI →", href: "/why-ai" }` — this essay maps onto the `/why-ai` integration failure mode, or `/engagements#pilot` once live); and it reads like an operator who has watched this happen, not a marketing department. **Quotable line candidate** (the §5.1 lift-able sentence): *"A pilot that works in a demo and dies in production isn't a model problem."* **Screenshot unit**: the `95%` stat block is the share artifact — value + caption + source, self-contained, carries the source back implicitly (the `/why-ai` mechanic). The essay now demonstrates the full template; a real ship needs only the body fleshed out around this spine, the `funnelExit` wired, and the canonical MIT URL confirmed (Q4).

---

## 6. Composition-fit flags

For the designer's pass (`meta/compositions/pages/writing.md`).

- **Flag 1 — essay-list entries are not headings.** Each list entry renders title (as `<a>`), claim (one line), date (muted). Confirm entries are *not* `<h2>`/`<h3>` — one heading per essay would bloat the outline and there'd be no single section structure. The index H1 is the hero title; the list is body. (§3 heading-hierarchy note.)
- **Flag 2 — email line is one line, zero-JS.** The copy is one line + a placeholder + a button. It must compose as a plain `<form action>` (no hydrated island, no popup/modal). If the designer's layout wants the email line and RSS clustered into a single "retention" footer-of-page block, the copy supports that (line + `Subscribe` + `RSS` sit together). Placement is the designer's call; PM default is once, low on the page (`writing.md` §4a item 4).
- **Flag 3 — no empty-state filler.** I recommend NO "more coming" copy (§2, §4). If the designer feels the index looks bare at launch with few essays, the fix is layout density (tighter list, the retention block doing visual work), not apology copy. Flagged so the absence is a conscious composition decision.
- **Flag 4 — RSS placement.** RSS label may live in the retention block, the footer, or both (`writing.md` §4a/§5). Copy is the bare `RSS` either way; no placement-specific wording needed.

---

## 7. Open questions for Arian

- **Q1 — email line vs RSS-only. CLOSED (v0.2).** Buttondown approved — the email line ships; RSS ships alongside it; the RSS-alone framing is demoted to an engineering fallback note (§2). No open decision.
- **Q2 — empty-state copy: apology line or silence?** I strongly recommend silence (no "more essays coming" banner) — it's the §7(e) decay-theatre mitigation done right. But if you'd rather set explicit expectations at launch, the line is drafted (`First essays are landing shortly…`). Recommend against it; your call. (Still open — not in the resolution batch.)
- **Q3 — hero title: `Notes from the work` vs. plain `Writing`.** I recommend `Notes from the work` (kills the thought-leadership read). `Writing` is the safe fallback that matches the eyebrow/footer label. Quick decision; everything else holds either way. (Still open.)
- **Q4 — the seed essay. CLOSED (v0.3) — promoted to its own deliverable.** You greenlit it as the first banked `/writing` essay. The full per-essay draft now lives at **`meta/content/drafts/writing/why-ai-pilots-stall-at-integration.md`** (full body, MIT NANDA stat block, quotable line, `funnelExit → /why-ai`, `references[]`, full frontmatter, `draft: true` banking flag). The canonical citation landed at `https://www.media.mit.edu/groups/nanda/overview/` (primary MIT NANDA, not Fortune). The essay's own remaining open questions (funnel-exit pick, a final eyes-on of the canonical URL, the §5.2 governing-test sign-off that flips `draft: false`) now live in that draft's §7 — not here. This index-chrome draft no longer carries the essay.
- **Q5 — `Subscribe` button label.** Plain and honest, or do you want `Get new essays`? I recommend `Subscribe` (the line above carries the anti-funnel register so the button can be plain). Minor; flagging because it's the one word on the page closest to newsletter territory. (Still open.)

---

## 8. Out of scope

- **Essay bodies.** Every `/writing/[slug]` essay is a separate per-essay deliverable, authored against the §5.2 ship/reject bar and the `writing.json.md` frontmatter contract. The §5c sample is illustrative only.
- **The frontmatter contract, the RSS-feed generation, the Buttondown form action, the stack pick (collections vs MDX vs JSON)** — engineering, per `writing.json.md` §6/§8.
- **Nav placement** — resolved: `/writing` is footer + essay cross-links only, not primary nav (`writing.md` §9). No nav-label copy authored beyond confirming `Writing`.
- **Per-essay OG cards, Article JSON-LD, the `referencesNote` placement** — per-essay engineering/composition, not index chrome.
- **Composition, list density, the retention-block layout, the email-line placement** — `pouk-ai-designer`'s lane (§6 hands these off).
- **Cadence commitment** — the §7(e) post-launch obligation is Arian's, tracked in the backlog, not a copy deliverable.
- **The `visitor-to-conversation.md` flow-spec amendment** — flagged in `writing.md` §9, owned by PM, not content.
