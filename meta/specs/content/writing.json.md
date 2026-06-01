# Spec: `writing` essay collection content data

**Files**: `src/content/writing/<slug>.md` (or `.mdx`) — one file per essay
**Consumed by**: `src/pages/writing/index.astro` (index) and `src/pages/writing/[slug].astro` (per-essay) — see `meta/specs/pages/writing.md`
**Status**: Approved (2026-05-31)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-31
**Masterplan reference**: Section 4.1 (site layout), 4.4 (long-form content as data), 2A (shape/substance — long-form copy storage is site-owned)
**Proposal reference**: `meta/proposals/conversion-pivot-and-writing-engine.md` — §6.0 (`/why-ai` reference implementation), §6.1 (shareability mechanics), §6.4 (ship/reject editorial bar), §7(d) (ungated email line), §7(e) (launch-earlier override)
**Decisions consumed (Arian-ratified 2026-05-31)**: §7(d) single ungated, hosted, zero-JS email line + RSS; §7(e) launch earlier (the `draft` flag is the banking mechanism); Buttondown is the recommended default email provider, RSS-alone the documented fallback.

---

## 1. Purpose

The `writing` collection is the typed source of truth for the essay corpus rendered at `/writing` (index) and `/writing/[slug]` (per-essay). Unlike the four static pages — each of which stores *one page's substance* as a single JSON file (`why-ai.json`) — `/writing` is an *ongoing corpus of prose with structure* (headings, stat blocks, references) repeated across many files. That is exactly the use case Astro content collections are built for: typed frontmatter validated at build, `getCollection()` to drive the index, `getStaticPaths()` to drive `/writing/[slug]`, and one source for the RSS feed. This spec defines the per-essay frontmatter shape and the editorial bar every essay clears before it ships. Each essay inherits the `/why-ai` shareability template (§6.0): a canonical claim, screenshot-able sourced stat blocks, a quotable line, Article JSON-LD, and a stat-led meta description.

**Stack note (engineer's final call).** PM recommends **Astro content collections** (Markdown or MDX bodies with typed frontmatter), because a corpus of N essays with per-essay frontmatter + RSS generation is precisely what content collections serve, and because `@astrojs/rss` reads a collection directly. The Markdown-vs-MDX sub-choice is the engineer's, driven by whether `statsRow` blocks embed inline (MDX) or live as a frontmatter array (Markdown). The JSON-per-essay pattern `why-ai.json` uses is *not* recommended for a multi-essay corpus. This recommendation does not bind — long-form storage is site-owned (masterplan §2A); the engineer records the final decision before build (`writing.md` §6 / §9). If a non-collection store is chosen, the frontmatter fields and validation rules below carry over unchanged as the per-essay field contract.

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who reads this spec to define the content collection schema, author the index and `[slug]` templates, wire the RSS feed, and validate frontmatter at build.
- **Secondary**: `pouk-ai-content` and Arian, who author each essay's frontmatter + body against this shape and the §5 editorial bar (`writing.md` §5).

## 3. Success criteria

- **Behavior**: The engineer defines one collection schema; every essay validates against it at build. `draft: true` essays are banked (excluded from index, build output, and RSS) until flipped. Each essay's `funnelExit` produces a foot-of-essay internal link into the funnel; each essay's `references[]` renders canonical-URL citations matching the `/why-ai` pattern. Arian/content can add an essay by dropping one file that conforms to the schema.
- **Signal**: Zero per-essay branches in the templates. Every non-draft essay has a claim-shaped slug, a `funnelExit`, and (if it carries stats) a `references[]` array. The RSS feed reads from the same collection with no second source. No `/writing/post-N`-style slug exists.
- **Failure mode**: The schema permits an essay with no `funnelExit` (a dead-end), an unsourced stat essay with no `references[]`, or a `post-N` slug — any of which breaks the shareability/retention contract the corpus exists to deliver. An essay that validates structurally but fails the §5 editorial bar is a content failure caught at the Arian-verified gate, not the schema.

## 4. Schema — per-essay frontmatter

Each essay is one file (`src/content/writing/<slug>.md` or `.mdx`). The frontmatter shape:

```jsonc
// frontmatter per essay
{
  "title": "string — claim-led essay title. Required. Becomes the <h1> and the <title> (suffixed '— pouk.ai'). States the canonical claim the essay owns. No clickbait/payoff headline the essay doesn't deliver (§5).",
  "slug": "string — claim-shaped, kebab-case. Required. Drives /writing/[slug]. e.g. 'why-ai-pilots-stall-at-integration'. NEVER 'post-N' or a date-only slug. Unique across the collection.",
  "claim": "string — the one ownable proposition the essay defends (§6.1). Required. One sentence. Drives the index one-liner/hook and seeds the meta description. If the claim can't be named in a sentence, the essay isn't ready.",
  "description": "string — stat-led/claim-led meta description. Required. ≤155 characters. Brand-voice. Drives <meta name='description'> and the OG description.",
  "datePublished": "ISO 8601 date (YYYY-MM-DD). Required. Drives RSS, Article JSON-LD datePublished, and reverse-chronological index sort.",
  "dateModified": "ISO 8601 date (YYYY-MM-DD). Required. Drives Article JSON-LD dateModified. May equal datePublished.",
  "draft": "boolean — optional, default false. The BANKING mechanism (§7(e)): draft:true excludes the essay from the index, the build output, and RSS while essays are banked, then flips to false to release. Banked drafts are how the launch-earlier override ships the largest possible corpus.",
  "funnelExit": {
    "text": "string — the foot-of-essay internal-link label. Required. e.g. 'Roles →' or 'Why AI →'. The quiet, earned, single funnel link (§5.3) — not a banner.",
    "href": "string — the internal-link-spine target. Required. One of '/why-ai' or a '/roles#<anchor>' (anchors: '#builder' | '#automator' | '#educator' | '#creator'). MAY also be '/engagements' or a '/engagements#<rung>' anchor once /engagements is live (engagement anchors: '#discovery' | '#pilot' | '#build' | '#retainer'). Internal path only — no external URL."
  },
  "references": "array — optional; { index, title, source, url } objects mirroring why-ai.json references (sourced, click-tracker-stripped to CANONICAL destinations). REQUIRED IF the essay carries any stat. Drives the references block + the implicit citation URLs.",
  "ogClaim": "string — optional. The single line rendered on the per-essay OG card (the shareability unit). Falls back to `claim` if absent. ≤100 characters so it fits the card. Distinct from `description` (meta) — `ogClaim` is the social-card hook.",
  "ogImage": "string — optional path to a per-essay OG card image; falls back to public/og.png if absent (per-essay card generation may be a fast-follow — writing.md §9)."
}
// body: Markdown/MDX prose — the argument, screenshot-able statsRow blocks (value + caption + attributed source), and at least one quotable line.
```

**`references[]` element shape — mirrors `why-ai.json` exactly:**

```jsonc
{
  "index": "number — 1-based citation index. Required. Unique and contiguous within the array (1, 2, 3 …).",
  "title": "string — the cited work's title. Required.",
  "source": "string — the publisher/source name (e.g. 'Gartner', 'PwC', 'CT Labs'). Required.",
  "url": "string — the CANONICAL destination URL, stripped of email/marketing click-trackers (the referencesNote discipline). Required. Absolute https URL."
}
```

An essay carrying `references[]` SHOULD also surface a `referencesNote` (the `/why-ai` pattern: "Source URLs cleaned from email click-trackers to canonical destinations.") — author it as a constant in the references-block composition or as an optional frontmatter string at the engineer's discretion; it is not required per-essay frontmatter.

## 5. Validation and constraints

Engineer enforces the structural rules at build (content-collection `schema` via zod is the natural fit). The editorial rules are Arian-verified at the content gate, not engineer-checkable.

### 5.1 Structural (engineer-enforced)

- `title`: required, non-empty. 10–110 characters.
- `slug`: required; matches `/^[a-z0-9]+(?:-[a-z0-9]+)*$/`; unique across the collection; **must not match `/^post-?\d+$/` or be date-only** (no `post-7`, no `2026-05-31`). Claim-shaped.
- `claim`: required, non-empty. One sentence; 20–180 characters; no trailing CTA.
- `description`: required; **≤155 characters**; non-empty.
- `datePublished`, `dateModified`: required; valid ISO 8601 `YYYY-MM-DD`; `dateModified >= datePublished`.
- `draft`: boolean; defaults to `false` when absent. `draft: true` MUST be excluded from index, `getStaticPaths()`, sitemap, and RSS.
- `funnelExit`: required object; `text` non-empty (4–40 chars); `href` matches one of `^/why-ai$`, `^/roles#(builder|automator|educator|creator)$`, `^/engagements$`, or `^/engagements#(discovery|pilot|build|retainer)$`. **Every non-draft essay must have a valid `funnelExit` — no dead-ends.**
- `references`: optional array; each element has `index` (1-based, contiguous, unique), `title`, `source`, `url` (absolute `https://`). **Required if the essay body contains any stat block** — an unsourced stat essay fails validation/review.
- `ogClaim`: optional; ≤100 characters; falls back to `claim`.
- `ogImage`: optional path; falls back to `public/og.png`.
- **No additional frontmatter fields** beyond those in section 4 without a spec update. In particular, no `author` field (attribution is Organization-level pouk.ai per the `/why-ai` JSON-LD; guest-author bylines are out of scope — `writing.md` §10), no `tags`/`category` taxonomy surface at v1, no view-counter/reaction state.

### 5.2 Editorial bar — the ship/reject test (§6.4, Arian-verified)

Every essay clears this gate before its `draft` flag flips to `false`. Folded in verbatim from proposal §6.4 / `writing.md` §5.2:

| On the right side of the line (ship) | Over the line (reject) |
|---|---|
| Headline (`title`) states a claim the essay actually proves | Headline promises a payoff the essay doesn't deliver |
| Stats are sourced and citable (`references[]` canonical) | Stats vague, unsourced, or cherry-picked to alarm |
| Useful even to a reader who will never hire pouk.ai | Useless unless you book a call; content is a teaser |
| One quiet `mailto:`/role link, earned at the end (`funnelExit`) | Multiple CTAs, urgency, "limited spots," popups |
| Reads like an operator thinking in public | Reads like a marketing dept performing expertise |

**Governing test (Arian-verified):** *would Arian forward this essay to a peer he respects, with his name on it, and feel it raised his standing?* If yes, the `draft` flag may flip to `false` and the essay ships. If it only works as clickbait, it stays unpublished — and the corpus protects the `/principles` Integrity stance the rest of the site spends ten principles establishing. The re-open buys one funnel link at the foot of a genuinely useful essay; it does not buy a sentence Arian wouldn't say to a peer's face. Same line `/why-ai` already holds.

### 5.3 Shareability units (per essay — present in frontmatter or body)

- **A canonical claim** — the `claim` field; named in one sentence.
- **Screenshot-able stat blocks** — in the body, reproducing the `statsRow` pattern (value + caption + attributed source), self-contained for a zero-context screenshot.
- **Sourced data, canonical URLs** — the `references[]` array; required when stats are present.
- **At least one quotable line** — in the body, engineered to be lifted verbatim, `/principles` register.
- **A claim-shaped slug** — the `slug` field; never `post-N`.
- **OG card + Article JSON-LD** — the `ogClaim`/`ogImage`/`description` fields drive the OG card; Article JSON-LD is rendered by the `[slug]` template per the `/why-ai` shape.

## 6. RSS + email-line constraints

- **RSS feed** is generated from this collection (`@astrojs/rss` or equivalent), reachable (e.g. `/writing/rss.xml` — exact path engineer's call), validates, and includes **only non-draft** essays. Zero-PII, zero-maintenance. Ships day one with the index.
- **The ungated email line (§7(d))** is a single optional line ("get new essays by email") rendered via a plain `<form action="…" method="post">` that POSTs directly to a hosted provider — **no JS, no hydrated island, no popup/modal/gate**. **Recommended default provider: Buttondown**, which exposes a zero-JS `<form action>` POST embed that satisfies the zero-JS constraint. Buttondown is a recommended default, **not a hard dependency** — any provider that accepts a plain zero-JS `<form action>` POST and renders an acceptable hosted confirmation qualifies. **RSS-alone is the documented fallback**: if no provider meets the zero-JS bar (or Arian doesn't provision an account), the email line is deferred and RSS ships alone. Provider provisioning is Arian's/engineer's call.

## 7. Acceptance criteria

- [ ] A `writing` content collection (or the engineer-chosen equivalent store) exists with a build-validated schema matching section 4.
- [ ] Each essay file carries all required frontmatter: `title`, `slug`, `claim`, `description`, `datePublished`, `dateModified`, `funnelExit` (`text` + `href`).
- [ ] `slug` values are claim-shaped, kebab-case, unique, and match none of the rejected patterns (`post-N`, date-only).
- [ ] `description` is ≤155 characters for every essay.
- [ ] `datePublished`/`dateModified` are valid ISO `YYYY-MM-DD`; `dateModified >= datePublished`.
- [ ] `draft: true` essays are excluded from the index, the build output, the sitemap, and the RSS feed.
- [ ] Every non-draft essay has a valid `funnelExit.href` (one of `/why-ai`, `/roles#<role>`, `/engagements`, `/engagements#<rung>`) — **no essay is a dead-end**.
- [ ] Every essay containing a stat block carries a `references[]` array; each element has `index` (1-based, contiguous), `title`, `source`, and an absolute canonical `url`.
- [ ] `ogClaim` (≤100 chars) drives the OG card line when present; falls back to `claim`. `ogImage` drives the per-essay OG card when present; falls back to `public/og.png`.
- [ ] No disallowed frontmatter fields are present (no per-essay `author` byline, no `tags`/`category` taxonomy, no stateful counters).
- [ ] The RSS feed reads from this collection, validates, and includes only non-draft essays.
- [ ] The ungated email line, if shipped, is a plain zero-JS `<form action>` POST (Buttondown-default or equivalent) — no popup/modal/gate, no hydrated island; else the RSS-alone fallback ships and the email line is deferred.
- [ ] Each shipped (non-draft) essay clears the §5.2 ship/reject table and the governing test (Arian-verified).

## 8. Open questions / dependencies

The email-provider default (Buttondown), the ungated-line constraint, and the launch-earlier/banking mechanism are **locked** (Arian-ratified 2026-05-31). Remaining dependencies:

- **Stack pick — engineer's final call (§1 / `writing.md` §6, §9).** Astro content collections (PM recommendation) vs. MDX vs. JSON; Markdown-vs-MDX sub-choice driven by inline `statsRow` embedding. The engineer records the decision before build. The frontmatter field contract above is store-agnostic.
- **Buttondown account provisioning.** Buttondown is the recommended default; if Arian doesn't provision an account (or the zero-JS `<form action>` embed proves unworkable), RSS-alone ships as the documented fallback and the email line is deferred. Provisioning is Arian's call.
- **Per-essay OG cards.** PM recommends per-essay OG cards (the shareability unit). If automated per-essay card generation isn't ready at v1, the `ogImage` → `public/og.png` fallback ships, with automated cards as a fast-follow (`writing.md` §9). Confirm v1 scope with Arian/engineer.
- **DS reuse.** The essay template is expected to reuse the existing `/why-ai` stat/reference primitives (`writing.md` §4 DS note); confirm those primitives are reusable for arbitrary essays. If not, a `meta/proposals/ds-side/` request is Arian's call — PM does not author the DS API (masterplan §2A).
- **`referencesNote` placement.** Whether `referencesNote` is a per-essay frontmatter string or a composition constant is the engineer's call (§4).

## 9. Out of scope

- **Gating, popups, modals, interstitials, or any JS-driven email capture.** §7(d) approves exactly one ungated, hosted, zero-JS line. Everything more aggressive stays rejected.
- **Drip sequences, list segmentation, marketing automation, a content-calendar surface.** RSS + one optional email line + disciplined `funnelExit` links is the whole retention surface.
- **Comments, reactions, social-share-button widgets, view counters, or any stateful/JS field on essays.** Zero-JS contract; sharing is manual (screenshot, copy-link) by design.
- **Per-essay author bylines** beyond Organization-level (pouk.ai) JSON-LD. No `author` frontmatter field; revisit only if a guest-author model is introduced.
- **A `tags`/`category` taxonomy or a tag-archive surface.** Reverse-chronological index only at v1.
- **A pricing/figure field of any kind.** Essays may discuss the offering only via the quiet `funnelExit` link; no commercial figures in frontmatter.
- **Translation / i18n fields.** English-only at launch.
- **Final copy and visual composition.** `pouk-ai-content` (essay bodies + frontmatter copy) and `pouk-ai-designer` (index/essay composition) lanes respectively.
