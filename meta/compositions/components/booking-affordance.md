# Composition: Secondary booking affordance (shared note)

**Scope**: Shared cross-page composition note — the dual-CTA conversion treatment. Governs how the `cal.pouk.ai` booking link sits **beside** the primary `mailto:hello@pouk.ai` affordance at every governed conversion point.
**Status**: PROPOSAL — awaiting Arian approval
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-06-14
**Governing spec**: `meta/specs/features/contact-flow.md` (Approved 2026-06-14) — §4 (governed pattern), §5 (treatment discipline), §8 (acceptance criteria). Backlog item **FSP-3.2**.
**Coupled spec**: `meta/specs/pages/scheduling.md` (the `/scheduling` explainer owns the *app*; this note owns the *booking action in the funnel*).
**DS version targeted**: `@poukai-inc/ui@2.0.0` (`meta/ds-snapshot/llms-full.txt` is the binding reference).
**Consumed by (governed conversion points)**: `/` Hero CTA · `/why-ai` end CTA · `/roles` universal end CTA · `/engagements` end CTA · `/onboarding` end CTA · `SiteShell` footer. **Excluded**: `/principles`, `/about` (trust-loop, `mailto:`-only) · `/privacy`, `/terms`, `/scheduling` (off-funnel).

---

**Assumptions** (flagged for Arian to accept or override):

- **A1 — The booking affordance is a *link*, not a `<Button variant="secondary">`, at the prose/`EmailLink`-register conversion points; it is a `<Button variant="secondary">` only where the primary `mailto:` is already a `<Button>` (i.e. the `/` Hero).** This is the load-bearing call and the one place I diverge from the PM's stated *expectation* (contact-flow §5: "PM expects the booking affordance to reuse the existing `<Button>` shape, a secondary/quiet variant"). My reasoning is in §2 and §6 — short version: the DS register contract says a `mailto:` "opens a mail client, it does not commit to an outcome" and should be a link, not a button (`llms-full.txt` §EmailLink); the same logic applies to a `cal.pouk.ai` link that opens a booking page. **Matching the primary's register** (button beside button on `/`; link beside link everywhere else) is what keeps the secondary subordinate without inventing a second button shape on pages that today carry zero buttons. The PM's "reuse the existing `<Button>` secondary variant" expectation is honored literally on `/` (where the primary *is* a Button) and honored *in spirit* elsewhere. If Arian wants a literal `<Button variant="secondary">` on every conversion point, that is a one-line override per point — see §7 Q1.
- **A2 — The canonical booking URL is `https://cal.pouk.ai`** (contact-flow §9 FS-CF-2: single canonical URL at v1; event-type routing deferred). Defined once as a shared constant/content field (contact-flow §8 AC; R-076 spirit) — engineer's storage mechanism. This note references it as `BOOKING_URL` throughout.
- **A3 — The booking affordance is a plain `<a href>` in every case** — zero JS, no widget, no island, no modal (contact-flow §5, §8; R-009/R-010/R-078). A `<Button asChild><a>` is still a plain anchor under the hood; the DS `asChild` pattern emits an `<a>`, not a hydrated control.
- **A4 — Final CTA copy is content's lane.** Every label below marked `Draft:` is a placeholder to anchor the affordance visually. `pouk-ai-content` authors the real "or grab a time →" variants per surface against contact-flow §5/§6 voice discipline; Arian approves.

---

## 1. Intent

A ready-to-talk prospect at any conversion point should see two doors and feel no push toward either. The `mailto:` door is the one the brand has always opened — wide, low-friction, primary. The `cal.pouk.ai` door is new and *quieter*: present, clearly subordinate, reading as "…or, if you'd rather just talk, grab a time" — never "Book your call today." The composition's whole job is restraint: the booking link must never reach peer visual weight with `mailto:`, never carry urgency or scarcity, and never turn a calm operator-first surface into a funnel that demands a calendar commitment. The two affordances sit on **one line or one tight stack**, primary first, secondary second, with a single connective beat between them — never a wall of buttons.

## 2. The governed pattern (the recipe)

There are exactly **two register contexts** across the site. The booking affordance composes differently in each, but the *hierarchy rule is identical*: primary `mailto:` first, secondary `cal.pouk.ai` second, subordinate, no urgency.

### Context A — Button-register conversion point (the `/` Hero only)

The `/` Hero already carries the primary `mailto:` as a `<Button asChild size="sm">` (home composition §2). Here the booking affordance matches that register as a **secondary-variant Button**, so the two read as a primary/secondary button pair — the DS's own documented dual-action pattern (`llms-full.txt` CtaBlock/CTASection examples: `<><Button>…</Button><Button variant="secondary">…</Button></>`).

```
// Primary stays exactly as home composition §2 ratifies it:
<Button asChild size="sm">                        {/* default variant = primary register */}
  <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
</Button>

// Secondary booking affordance, beside it:
<Button asChild size="sm" variant="secondary">    {/* secondary variant — subordinate by DS contract */}
  <a href={BOOKING_URL}>Draft: or grab a time →</a>
</Button>
```

- **Order**: `mailto:` Button first (DOM + visual), booking Button second. On `/`, both remain subordinate to the Hero title (home composition's "title is primary anchor" lock; contact-flow §4 note).
- **Size parity**: booking Button matches the primary's `size="sm"` (home composition §2 delta). Never larger. A larger or `variant="primary"` booking Button would break the one-primary-per-section DS rule (`llms-full.txt` Button) and the contact-flow §5 subordination rule.
- **Layout**: the two Buttons sit in a flex row with `gap: --space-3` (12px) at desktop; collapse to a stack with `gap: --space-3` below `--bp-md` (768px), `mailto:` on top. This is a site-side wrapper around the Hero `cta` slot's two children, not a DS override.
- **This is the only place a booking *Button* appears.** Everywhere else, Context B.

### Context B — Link-register conversion point (every other governed point)

`/why-ai`, `/roles`, `/engagements`, `/onboarding` end CTAs are prose-and-link moments today (why-ai end CTA is a muted `<p>` + `<a>`; engagements end CTA is a muted line + `<EmailLink>`; about's is a muted line). The primary here is a `mailto:` **link** (`<EmailLink variant="default">` or the existing inline `<a>`). The booking affordance matches that register as a **sibling link** — not a button.

```
// Primary mailto link (per each page's existing end-CTA composition):
<EmailLink email="hello@pouk.ai" variant="default" />
//   or the page's existing inline <a href="mailto:…"> pattern (why-ai)

// Secondary booking link, beside/below it:
<a href={BOOKING_URL} class="booking-link">Draft: or grab a time →</a>
//   plain anchor — inherits the global two-layer underline rule (tokens.css);
//   same hover/focus affordance as every other anchor. Zero JS.
```

- **Order**: `mailto:` primary first, booking link second. Always.
- **Subordination mechanism**: the booking link is rendered in the **muted register** — either as a trailing clause on the same muted `<p>` as the lead line, or as a second muted line directly beneath the primary. The primary `mailto:` carries the `variant="default"` (full `--fg`, the discoverable conversion path); the booking link sits in `--fg-muted` body context (a quiet "or"). This subordinates booking *typographically* without a second button shape, satisfying contact-flow §8's "booking does not equal or exceed the `mailto:` CTA" check.
- **No `<Button>` here.** Introducing a button on these pages — even a secondary one — would add doorway-volume to surfaces the brand has deliberately kept button-free (about composition §2: "A `<Button>` here would re-introduce doorway-volume"). The link register is the correct subordination tool. See §6 for why this honors the PM expectation in spirit.
- **Single connective beat.** The two affordances read as one offer with an "or": e.g. *"Email `hello@pouk.ai` — or grab a time."* One line, or two muted lines, never two stacked buttons. Contact-flow §5: "one primary, one quiet secondary — never a wall of buttons."

### `SiteShell` footer — utility tier (global, lowest weight)

- The footer is DS-owned (`<Footer>` molecule). It composes `copyright` + `email` (rendered `<EmailLink variant="muted">`) + an **optional secondary link row** (`llms-full.txt` Footer: "copyright + email + optional secondary link row").
- The booking link rides the **secondary link row** as a muted utility link beside the existing email — lowest-weight treatment on the page (contact-flow §4: "utility tier," §8 AC: "footer exposes both a `mailto:` and a `cal.pouk.ai` link in the utility tier").
- **DS dependency to confirm**: whether the shipped `<Footer>` secondary-link-row slot accepts an arbitrary `<a>` (it should, per the snapshot). If the footer's secondary row is a fixed nav-link set with no free slot, that is a small DS gap — see §6. **Recommendation: confirm against the installed `<Footer>` API before build; do not assume.**

## 3. Spacing / order / hierarchy summary

| Axis | Rule | Token / mechanism |
|---|---|---|
| **Order** | `mailto:` primary always first (DOM + visual); booking second. | n/a (authoring order) |
| **Button-pair gap (`/` only)** | Between the two Hero Buttons. | `--space-3` (12px) row gap; stack below `--bp-md` |
| **Link-register gap (Context B)** | Between primary line and the booking clause/line. | inline " — " connective, or `--space-2`/`--space-3` if a separate muted line |
| **Weight** | Booking never ≥ `mailto:`. Button pages: secondary variant, same size. Link pages: muted register vs. default register. | DS `variant="secondary"` (Button) / `--fg-muted` (link) |
| **Urgency** | None. No "now", no scarcity, no exclamation, no countdown. | copy discipline (content lane) |
| **Count** | Exactly two affordances per conversion point. Never a third. | composition rule |

## 4. Motion / reduced-motion / zero-JS posture

- **Zero JS.** Every booking affordance is a plain `<a href>` (or `<Button asChild><a>` which emits a plain anchor). No `cal.com` widget, no iframe, no island, no modal, no `client:*` directive (contact-flow §5/§8; R-009/R-010/R-078). Booking happens on `cal.pouk.ai`; the site only links.
- **Motion**: none intrinsic. The only motion is the **DS-internal link/Button hover** — the two-layer underline grow (`--dur-mid`, `--easing-link`) on link-register affordances, and the Button hover/`:active translateY` on the `/` Hero buttons. All DS-owned; no site-side animation.
- **`prefers-reduced-motion: reduce`**: every hover transition is gated by the DS `:root !important` block in `tokens.css`. No exception, no site-side `@media` rule needed. There is no entrance animation, no pulse, no scroll trigger on any booking affordance.

## 5. Per-surface application (cross-reference)

Each consuming page's composition references this note for the booking affordance; this note does not restate each page's full end-CTA recipe.

- **`/` Hero** — Context A (button pair). Home composition §2 owns the Hero recipe; this note adds the secondary booking Button beside the existing `mailto:` Button. **Home composition revision owed** to consume this (flagged; not authored here — home composition is `Approved` and predates contact-flow).
- **`/why-ai` end CTA** — Context B. Booking link as a muted clause/line beneath the existing `<p>` + `<a>` end CTA. why-ai page revision owed.
- **`/roles` end CTA** — Context B. Single universal end CTA (D-08); booking is the secondary link in that same block. **No booking link on individual `RoleCard`s** (D-08, contact-flow §8). roles composition revision owed.
- **`/engagements` end CTA** — Context B. Booking link beside the existing `<EmailLink>` in the `Section size="tight"` end block (engagements composition §2 Section 8). **No per-rung booking link** (contact-flow §8 — per-rung CTAs stay `mailto:?subject=<Rung>` only). engagements composition revision owed.
- **`/onboarding` end CTA** — Context B. **Composed in full in `meta/compositions/pages/onboarding.md` §2 (End CTA section), which consumes this note.** This is the one consuming page authored in the same pass as this note (FSP-4.2).
- **`SiteShell` footer** — utility tier. Booking link on the `<Footer>` secondary link row, global.

## 6. DS gaps surfaced

**None for the affordance itself.** The DS ships everything required:

- **`<Button variant="secondary">` exists.** Confirmed in `meta/ds-snapshot/llms-full.txt`: Button "variant union (primary / secondary / ghost)" (§IconButton, line ~204), the one-primary-per-section rule implies a non-primary sibling (§Button, line ~197), and the DS's own dual-action examples use it verbatim (`actions={<><Button>…</Button><Button variant="secondary">…</Button></>}`, CtaBlock/CTASection/Menu examples). **No DS proposal is needed** to put a secondary booking Button on `/`.
- **`<EmailLink>` and plain `<a>`** cover the link-register points (Context B). Both ship today.
- **`<Footer>` composes an "optional secondary link row"** (§Footer) — the utility-tier slot for the booking link. **One thing to confirm, not assume**: that the shipped `<Footer>` exposes that row as a free `<a>` slot rather than a fixed nav-link enum. If it is fixed, the booking link cannot ride the footer without a small DS change. *Conditional gap (only if confirmation fails)*: a `<Footer>` secondary-link-row slot that accepts an arbitrary anchor. Framed from the composition need: "the footer utility tier must expose both a `mailto:` and one additional utility `<a>` (the booking link)." **Recommendation: confirm the `<Footer>` API at build; do not file a proposal speculatively.** Drafting any DS-side API is out of this note's lane (designer agent definition) — Arian routes it if confirmation fails.

**On the PM's `<Button variant="secondary">` expectation (contact-flow §5).** The PM expected the booking affordance to reuse the existing `<Button>` secondary variant. I honor that **literally on `/`** (button beside button) and **in spirit on the Context-B pages** (a *subordinate link* beside the *primary link*), because:
1. The DS register contract treats a `mailto:` as a link, not a button ("it opens a mail client, it does not commit to an outcome" — §EmailLink). A `cal.pouk.ai` link is the same register: it opens a booking page. Matching the primary's register is the DS-correct subordination move.
2. The Context-B pages ship **zero buttons today** (why-ai, engagements, about end CTAs are all prose+link). Dropping a secondary Button onto them would add the exact doorway-volume those compositions deliberately removed (about composition §2 brand note). The link register subordinates *without* introducing a new shape.
3. Contact-flow §5's binding rule is *"one primary, one quiet secondary, never a peer-weight, never a wall of buttons."* A muted sibling link satisfies that more faithfully than a second button would.

This is a recommendation, not a DS gap. If Arian prefers a literal secondary Button everywhere, §7 Q1 captures the override — it requires no DS work either (the variant exists), only a register change on the Context-B pages.

## 7. Open questions for Arian

1. **Register split (A1) — confirm.** Recommendation: secondary **Button** on `/` (button beside button), secondary **link** on every Context-B end CTA (link beside link). Alternative: literal `<Button variant="secondary">` at every governed point, per the PM's stated expectation. Recommend the split — it keeps the button-free pages button-free and is the DS-correct register match. (Default if no answer: the split.)
2. **Footer slot — confirm the `<Footer>` API** exposes a free secondary-link-row `<a>` slot for the booking link. If it does not, this becomes a small conditional DS gap (§6); Arian routes it. (Default: confirm at build; treat as no-gap unless the API says otherwise.)
3. **Connective copy** — the "or" beat ("— or grab a time →") is content's lane; flagged only so the *shape* (one connected offer, not two separate CTAs) is approved here. (Default: content authors; composition locks the one-offer shape.)

## 8. Out of scope

- **Final CTA copy** (the per-surface "or grab a time →" variants). Content lane; Arian-approved.
- **Booking-context routing** (archetype/rung in the `cal.pouk.ai` URL). Deferred to v2 per contact-flow §9 FS-CF-2; v1 ships the single canonical `BOOKING_URL`.
- **Any embedded scheduling widget / iframe / island / modal.** Permanently out (zero-JS).
- **A booking affordance on `/principles`, `/about`** (trust-loop) or **`/privacy`, `/terms`, `/scheduling`** (off-funnel). Hard exclusion (contact-flow §4/§10).
- **Per-rung booking on `/engagements`** and **per-card booking on `/roles`**. Out (contact-flow §8; D-08).
- **The per-page end-CTA recipes themselves** beyond the booking affordance. Each consuming page's composition owns its end CTA; this note owns only the booking-beside-`mailto:` treatment. The home/why-ai/roles/engagements composition revisions to consume this note are flagged in §5, not authored here. `/onboarding` is the exception — its end CTA is composed in full in `onboarding.md`, consuming this note.
- **Authoring any DS-side API.** If the footer-slot confirmation fails, the proposal describes the gap, not the solution shape; Arian routes it to `@poukai-inc/poukai-ui` maintainers.
