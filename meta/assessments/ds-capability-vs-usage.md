# Assessment: DS capability vs. site usage — raising the ceiling

**Status**: PROPOSAL — Arian approval required before any build
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**DS version assessed**: `@poukai-inc/ui@2.17.0` (per `meta/ds-snapshot/llms.txt`)
**Scope**: Read-only inventory. No code. No DS authoring. Compositions/proposals follow only on approval.

---

## 0. The one-paragraph read

The site is built from the design system's **editorial spine** — `Hero`, `Section`,
`RoleCard`, `Principle`, `FailureMode`, `Stat`, `Pull`, `Portrait`, `FeatureCard`,
`LinkCard` — and uses them well and with restraint. But it draws on roughly **21 of
the ~130 primitives the DS ships**, and within those 21 it exercises a narrow slice of
the available variants and surfaces. The genuinely dormant power is not "exotic
components we should bolt on" — most of those (PricingTable, DataTable, Sidebar,
Combobox, Carousel) are correctly off-brand for a four-to-eight-page operator site.
The real, brand-safe leverage sits in **four buckets**: (1) the marketing-organism
layer that the DS built *specifically* for this kind of site and we hand-roll instead
(`StatsSection`, `FeatureGrid`, `FailureModeList` we already adopted); (2) the
**attributed-voice register** (`Quote` / `Statement` / `TestimonialBlock`) which is
completely idle and is the single biggest credibility lever a consulting site has;
(3) **surface-band rhythm** (`--surface-section`) — the DS ships a whole elevation tier
for editorial section bands and the site uses *zero* of it, so every page is one flat
plane; and (4) **motion beyond the Hero** — the only motion deployed is `Hero
entrance="stagger"` on two pages. Everything below ranks these honestly and separates
"deploy this" from "the DS ships it but it'd break restraint here."

---

## 1. Coverage matrix

Legend: **Used** = imported and rendered on the live site. **Variant coverage** notes
which props/variants are exercised vs. dormant. Source: grep of `src/**` against
`meta/ds-snapshot/llms-full.txt`.

### 1a. Primitives the site USES (21)

| Primitive | Layer | Where used | Variants/props exercised | Dormant within it |
|---|---|---|---|---|
| `Hero` | molecule | every page (10×) | `size="intimate"`, `align="center"`, `entrance="stagger"`, `illustration`, `bleed="full"`, `status` slot, `cta` | `size="display"` (the DS default!) never used; `variant="no-title"` blocked by spec |
| `StatusBadge` | atom | HomeHero | `status="available"` (legacy pulse) | entire `tone` API (`info/success/warning/danger/accent`), multi-instance use |
| `Button` | atom | HomeHero, NotFound, writing | `size="compact"`, `variant="secondary"`, `asChild` | `size="lg"` loud CTA, `variant="primary"` rarely if ever |
| `Section` | molecule | engagements, onboarding, writing | `size="tight"`, `as="div"` | **no surface band** — `Section` carries none by design; the band tier lives in organisms |
| `Stat` | atom | why-ai, writing | `size="lg"`, `value/caption/source` | `icon` slot (decorative glyph above numeral) never used; `size="md"` |
| `FailureMode` | molecule | why-ai, onboarding | `index`, `title`, body | `indexLabel` (e.g. "FM-01") |
| `FailureModeList` | organism | onboarding | `eyebrow/heading/lede` | `size="tight"`; not used on why-ai (hand-rolled there) |
| `Eyebrow` | atom | engagements, onboarding | default muted | `variant="solid"`, `variant="numbered"` + `numeral` |
| `EmailLink` | atom | engagements, onboarding | default | `variant="muted"` |
| `RoleCard` | molecule | roles | `eyebrow`, `title`, `hiredBy` | icon well, full grid (`RoleGrid` organism not used) |
| `Principle` | molecule | principles | `numeral`, `title` | — (well-covered) |
| `Portrait` | molecule | about | `aspect`, `width`, `alt` | `loading="eager"`/`fetchPriority` for LCP; multi-image (`GalleryGrid`) |
| `Pull` | molecule | writing/[slug] | `variant="sans"` | `variant="serif"` (the default editorial register), `attribution`, `cite` |
| `LinkCard` | molecule | writing | `variant="quiet"` | `variant="default"` (the surface card for grids), `icon`, `external` |
| `FeatureCard` | molecule | engagements | `variant="bordered"`, `icon` | `variant="default"`; not in a `FeatureGrid` (hand-rolled grid) |
| `Input` | atom | writing/index | default | sizes, `invalid` |
| `Link` | atom | several | default | — |
| `Time` | atom | WritingList | default | `format="relative"`, `format="long"` |
| `SiteShell` | organism | ShellWrapper | default | — |
| `Footer` | organism | ShellWrapper | default | — |
| `Wordmark` | atom | via SiteShell | default height=56 | — |

### 1b. Primitives the site DOES NOT use — triaged

**Brand-safe and high-value (the leverage — see §2):**

| Primitive | Layer | Why it's leverage |
|---|---|---|
| `Quote` | molecule | Attributed testimonial, sans roman. The credibility primitive a consulting site needs. **Idle.** |
| `Statement` | molecule | Editorial italic-serif assertion, once per page. The brand's "thesis sentence" moment. **Idle.** |
| `TestimonialBlock` | organism | `Quote` + `Byline` in a `--surface-section` band. Turn-key social proof. **Idle.** |
| `StatsSection` | organism | Section-framed `StatList` — the "by the numbers" band. why-ai hand-rolls a `.stats-row` instead. |
| `StatList` | molecule | Horizontal stat row with optional dividers. Underpins the above. |
| `FeatureGrid` | organism | Section-framed `FeatureCard` grid. engagements hand-rolls the grid in `EngagementsLadder.tsx`. |
| `Byline` | molecule | name + role + Time attribution row. Pairs with Quote and writing posts. |
| `Statement` (warm band) | — | `--bg-warm-accent` editorial band was *retired* 2026-05-18 (see about.astro history). Worth a deliberate re-decision, not silent omission. |
| `Divider` | atom | Hairline section rule — the lightest possible rhythm tool. Idle. |
| `Disclosure` / `Accordion` / `FAQItem` / `FAQSection` | molecule/organism | Native `<details>`, zero-JS. An FAQ is brand-appropriate for engagements/onboarding objection-handling. |
| `Tag` / `TagList` | atom/molecule | Topic labels for writing posts. Brand-safe, currently absent. |
| `MetaList` | molecule | `<dl>` label/value — article sidebars (published / reading time). Brand-safe for writing. |
| `TableOfContents` | molecule | Right-rail anchor nav for long essays. Earns its JS via IntersectionObserver only on long-form. |
| `Mark` | atom | Inline editorial highlight (`--accent-glow`). One-glance emphasis in prose. |
| `Table` | molecule | Semantic comparison/spec tables — could serve a "what's in / out of scope" SOW table. |
| `Figure` | molecule | Captioned image (`<figure>`/`<figcaption>`) for illustrations with provenance. |

**DS ships it, but OFF-BRAND or out-of-scope here (do NOT deploy without a strong reason):**

| Primitive | Why it's off-brand / out of scope for this site |
|---|---|
| `PricingTable` / `PriceTier` | pouk.ai is custom-scoped consulting; published price tiers contradict the operator-first, SOW-per-engagement model. |
| `Carousel` | Auto-advancing slides are marketing-speak motion; restraint brand. Off-brand. |
| `LogoCloud` | "Trusted by" logo wall — only if/when real, founder-approved client logos exist. Borderline; defer. |
| `DataTable` / `ComparisonTable` (sortable) | App-tier interactivity; no place on a static editorial site. |
| `Sidebar` / `DocsLayout` / `DashboardShell` | Docs/app shells. Not this site. |
| `Combobox` / `Select` / `Switch` / `Checkbox` / `Radio` / `DatePicker` / `TimePicker` / `FileUploader` / `Form` | Form/app controls. The site has one email field; full forms aren't in scope. |
| `Toast` / `Dialog` / `Sheet` / `Popover` / `HoverCard` / `Tooltip` / `CommandPalette` / `DropdownMenu` / `ContextMenu` | Overlay/interaction chrome — pulls in hydration, breaks the zero-JS posture for marginal value. |
| `Banner` / `Alert` / `AnnouncementBar` | Product-feedback surfaces. Only if there's a genuine time-sensitive notice (e.g. availability change) — then `AnnouncementBar` is the right tool, but that's a content decision, not a design gap. |
| `CodeBlock` / `Code` / `Kbd` | Only if writing posts ship code. Adopt when content demands, not before. |
| `VideoEmbed` / `AudioPlayer` | No AV content in scope. |
| `Spinner` / `Skeleton` / `ProgressBar` / `EmptyState` / `Pagination` | Async/loading states — a static site has none. |
| `Avatar` | Person disk — `Portrait` is the editorial choice already in use; Avatar is for dense rows. |
| `BlogList` / `BlogPostCard` | The writing index already composes `LinkCard variant="quiet"` deliberately; the DS stub is less refined. Keep current approach. |

---

## 2. Ranked: dormant power worth deploying

Ranked by **impact ÷ restraint-risk**. Each notes the page/section and whether it's a
pure-site move (compose existing DS) or needs a DS proposal. **All are pure-site
composition** — the DS already ships everything below; nothing here needs a new
primitive.

### #1 — `Quote` + `Byline` (attributed voice) → social proof, brand-safe
**Where**: A single, restrained `TestimonialBlock` (or a bare `Quote`) on `/` below the
hero, on `/engagements` after the rung ladder, and on `/why-ai` to ground a claim in a
real operator's words. **The biggest credibility lever the site is missing** — a
consulting site with zero attributed voice reads as pre-launch. `Quote` is sans roman
(distinct from `Pull`/`Statement` by register), so it won't muddy the editorial type
system. **Restraint check**: one per page, no carousel, real names only — fully on-brand.
**Move**: pure-site. **Gated on**: real, approved client quotes existing (content/PM
input). If none exist yet, this is a content gap, not a design gap — flag and hold.

### #2 — `--surface-section` band rhythm via `StatsSection` / `TestimonialBlock` / `CTASection` / `FeatureGrid(size, surface)` → page depth
**Where**: every editorial page is currently **one flat `--bg` plane** (grep confirms
`--surface-section` appears nowhere in `src/`). The DS ships a four-step elevation
rhythm and a documented rule — "full-width alternating section bands on editorial pages,
max 5 per page." Deploying a *single* recessed band per page (the stats moment on
why-ai, the testimonial on `/`, the closing CTA) gives the scroll a spine without adding
a single color or token. **Restraint check**: the rule itself enforces restraint (max 5,
never adjacent). One band per page is the tasteful floor. **Move**: pure-site — adopt the
organism that owns the band (`StatsSection fill`, `TestimonialBlock`, `CTASection
surface="recessed"`) instead of hand-rolled flat sections.

### #3 — `StatsSection` + `StatList` → replace the hand-rolled stats on `/why-ai`
**Where**: `why-ai.astro` currently hand-builds `<div class="stats-row">` wrappers
around bare `<Stat>` atoms. The DS ships `StatsSection` (Section + StatList, with
`dividers` and `fill`) for exactly this "by the numbers" moment. Adopting it removes
bespoke CSS, gives proper landmark + `aria-labelledby` semantics, and unlocks the
recessed band (#2) for free. **Restraint check**: same content, less custom code, more
correct semantics — strictly an upgrade. **Move**: pure-site, refactor.

### #4 — `Statement` → the page thesis sentence
**Where**: `/` (one assertion under the hero), `/why-ai` (the editorial claim the
failure modes argue toward), `/about` (the band already renders a `displayStatement`
string *through Hero* — `Statement` is the purpose-built primitive for exactly that
italic-serif assertion). It's a once-per-page editorial beat that reads as confidence,
not marketing. **Restraint check**: the DS doc literally says "use sparingly, once per
page" — restraint is built in. **Move**: pure-site. Note `/about` already approximates
this; worth a deliberate look at whether `Statement` is the cleaner expression.

### #5 — `FeatureGrid` → wrap the engagements ladder
**Where**: `EngagementsLadder.tsx` hand-rolls a grid around `FeatureCard` molecules.
`FeatureGrid` is the section-framed organism built for this (heading/eyebrow/lede +
responsive grid + landmark). **Restraint check**: identical visual result, correct
semantics, less bespoke layout CSS. **Move**: pure-site refactor. Lower rank than #1–4
only because the current hand-roll already looks right — this is hygiene + future-proofing
more than a visible lift.

### #6 — `Disclosure` / `FAQSection` → objection-handling, zero-JS
**Where**: `/engagements` and `/onboarding` both answer implicit buyer questions in prose;
a small `FAQSection` (native `<details>`, no hydration) would let a scanning operator jump
to "how does pricing work / what's the timeline / what do you need from us." **Restraint
check**: native `<details>` = zero JS, honours the zero-JS contract; FAQs are operator-
practical, not marketing fluff — on-brand if the copy stays declarative. **Move**: pure-
site. **Gated on**: PM/content deciding the Q&A pairs are worth surfacing as an FAQ vs.
keeping as prose.

### #7 — Writing-post editorial enrichment: `Pull variant="serif"` + `Byline` + `MetaList` + `Tag`/`TagList` + (long-form) `TableOfContents`
**Where**: `writing/[slug]`. Today posts use only `Pull variant="sans"` and `Stat`. The
DS ships a full long-form kit: `Pull variant="serif"` (the *default* editorial register,
currently overridden to sans), `Byline` (author + date), `MetaList` (published / reading
time sidebar), `Tag`/`TagList` (topics), and `TableOfContents` (right-rail anchor nav,
the one item here that earns its JS — and only on genuinely long essays). **Restraint
check**: each is a quiet editorial primitive; deploy as content length warrants, not all
at once. **Move**: pure-site. TableOfContents is the only hydration cost — justify per-
post by length.

---

## 3. Honest notes on what's NOT leverage

- **Most unused primitives are correctly unused.** ~80 of the ~110 idle primitives are
  app/form/overlay/loading chrome that have no place on a static operator-first marketing
  site. Listing them as "missed" would be noise. They're in §1b's off-brand table so the
  judgement is on the record, not because they're recommendations.
- **`Hero size="display"` is never used** — every page opts into `size="intimate"`. That's
  a deliberate, coherent "quiet doorway" posture, not an oversight. Flagging only so the
  choice stays conscious: if any page wants a louder front door, the DS default is there.
- **`StatusBadge tone` API is fully dormant** but rightly so — the site has one
  availability signal (the legacy `status="available"` pulse), which is the correct,
  restrained use. The generic `tone` badges are for list/table rows the site doesn't have.
- **The warm-accent band (`--bg-warm-accent`) was deliberately retired** (about.astro,
  2026-05-18). Re-introducing it anywhere is a *founder brand decision*, not a capability
  gap — noted so the retirement stays intentional rather than forgotten.
- **`LogoCloud` is the one borderline call.** It's brand-safe *only* with real,
  founder-approved client logos. Until those exist it would be theatre. Deferred, not
  recommended.

---

## 4. If approved — next artefacts (not built here)

Each approved item becomes a composition doc (or a revision to an existing one) under
`meta/compositions/`, traced to its PM spec. None requires a DS proposal — the DS already
ships every primitive named above. Suggested order mirrors the ranking:

1. `Quote`/`TestimonialBlock` placement — **needs a content/PM input first** (real quotes).
2. `--surface-section` band-rhythm pass across `/`, `/why-ai`, `/engagements`.
3. `StatsSection` refactor of `/why-ai`.
4. `Statement` thesis-line on `/`, `/why-ai`, reconcile with `/about`.
5. `FeatureGrid` refactor of `/engagements`.
6. `FAQSection` on `/engagements` + `/onboarding` — **needs PM/content Q&A pairs**.
7. Writing long-form kit (`Pull serif`, `Byline`, `MetaList`, `Tag`, `TableOfContents`).

---

## 5. Open questions for Arian

1. **Real quotes?** #1 (the highest-impact item) is blocked on whether approved,
   attributable client testimonials exist. If not, it's a content gap to route to PM —
   confirm so I don't compose against placeholders.
2. **Band rhythm appetite.** Are you open to one recessed `--surface-section` band per
   page (#2), or is the deliberate flat-plane look a brand choice I should leave alone?
3. **Warm band.** Re-open the retired `--bg-warm-accent` editorial band, or keep it
   retired? (Affects whether `Statement`/`Banner warning` ever sit on warm.)
4. **FAQ.** Is objection-handling something you'd surface as an FAQ (#6), or keep folded
   into prose?
