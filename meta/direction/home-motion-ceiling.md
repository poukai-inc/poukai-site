# Home — Motion & Presence Ceiling (Raise the Ceiling, Round 2)

**Type**: Creative direction (Web/Creative Director → Arian for approval). Not a spec, not a composition. Sets the motion/presence *ceiling* and names the *signature*; the designer specs the moves, the engineer builds them.
**Author**: pouk-ai-director
**Date**: 2026-06-22
**Status**: PROPOSAL — Arian's call. Decisive on purpose; override any line.
**Reads on**: `meta/compositions/pages/home.md` §A3-4 / §A3-4.1 (the shipped T1–T8 micro-layer, MOTION dial ~6); `meta/direction/home-direction.md` (A2/A3 — the 6-beat destination); `meta/assessments/creative-exploration.md` (the "restrained AND striking" bar); `meta/asset-production/illustration-and-motion-brief.md` (the monochrome draftsman vocabulary); `src/components/HomeHeroIllustration.tsx` ("The Signal" glyph — the asset the signature lives on); D-25 (JS unblocked; a11y + reduced-motion HARD).
**Supersedes**: nothing is deleted. This *raises* the ceiling §A3-4/§A3-4.1 set the floor at. T1–T4 stay shipped; T5–T8 "leave static" decisions mostly stand. Where this doc and the §A3-4.1 dial (~6) disagree on *how far*, this doc governs — the dial moves to ~7.5.

---

## 0. Why the page still reads flat (the honest diagnosis)

The micro-layer (§A3-4.1) was correct *for what it was*: it raised the **floor**. It added feedback (CTA press), one affordance (arrow nudge), and one storytelling motion (the deficit-bar draw). All real, all tasteful, all subtle. But Arian has said "more" **twice** since — and he's right, because the micro-layer fixed *liveness*, not *presence*. Those are different problems:

- **Liveness** = "does the page respond?" The floor work answered yes. Buttons depress, the gap draws, the arrows lean.
- **Presence** = "does the page *announce itself*? Is there a moment I remember?" The page still answers **no**. Every motion on it is sub-perceptual — a 2px nudge, an 80ms press, a single bar fill two-thirds down the page. Nothing on the home page **arrives with authority**. The strongest asset on the site — "The Signal" glyph, the one genuinely engineered object — enters with a generic fade-and-rise and then sits pulsing a 2px accent dot. It is *under-used*, and it is exactly the thing that should carry the page's presence.

**The structural read:** the page has six beats and the *quality* is high, but the **motion budget is spread evenly and thin** — every beat gets the same quiet reveal, nothing gets a peak. Restraint-done-wrong is *uniformity*. Restraint-done-right is **one bold moment and disciplined stillness around it.** The page currently has the stillness and no bold moment. That's the gap. "More" doesn't mean "more motion everywhere" — it means **concentrate the budget into one signature and let it be genuinely big.**

---

## 1. The new ceiling — one sentence

**Home's motion sits at ~7.5/10 (up from ~6): the page should feel like watching a master draughtsman draw the system live on first paint — one confident, deliberate construction that resolves into a finished diagram — then go completely still, so the rest of the page reads as the calm authority of work already done.**

The felt target: a visitor lands and *watches the instrument build itself*, once, in the first second and a half — and that single moment is what they screenshot and remember. Everything below is quiet by comparison **on purpose**: the signature earns its weight precisely because nothing else competes.

This is bolder than the floor allowed (a real cinematic first-paint, not a fade) and still categorically *not* animated-SaaS — because it is **construction, not decoration**: it draws the actual argument (the pipeline), it happens once, it never loops, and it resolves to the exact static end-state the page would have anyway.

---

## 2. The ONE signature moment

### Chosen: **The Signal glyph self-constructs on first paint — a scrubbed-feeling draughtsman draw of the whole pipeline.**

On load, the Hero's "The Signal" glyph does not fade in finished. It **builds**: the hairline draftsman grid resolves first (the drawing surface), then the trace draws itself stroke-on along the curve OBSERVE→SHIP as if drawn by hand, the five nodes set down in sequence as the trace reaches each, their mono labels register beside them, and the SHIP node lands last and lights its accent — and *only then* does the existing ambient signal-pulse take over as the resting heartbeat. One construction, ~1.2–1.6s, choreographed with the Hero's existing text stagger so the words and the diagram compose *together* into one arrival. Then it is finished, and static-but-for-the-one-pulse forever.

**Why this is the signature and the others aren't — specific to pouk.ai:**

- **It is the brand's actual thesis made kinetic.** The whole positioning is "we *ship the system* and keep it running." The glyph *is* the system (observe→model→plan→act→ship). Drawing it into existence on arrival is the single most on-brand motion the site could possibly have: the page literally *builds the pipeline in front of you*. No other candidate is the thesis itself — they're all dressing on top of it.
- **It leans on the one true asset.** The glyph is already the best thing on the site and is currently squandered — it arrives like every other beat and then idles. The signature should *be* the asset, not a new thing competing with it. This concentrates presence exactly where the craft already is.
- **It reads as "draughtsman," not "SaaS."** The reference is a technical pen completing a schematic — confident, monochrome, hairline, once. That is the engraving/draftsman register the asset brief already mandates (`illustration-and-motion-brief.md §0A`). A stroke-on draw of a hairline trace is *the* canonical "authored by someone exacting" motion. It cannot be mistaken for parallax-everything or a hero video loop, because it's a single ink-line completing itself.
- **It costs zero fabrication and zero new vocabulary.** Same glyph, same nodes, same labels, same end-state. We are animating the *assembly* of an object that already ships — pure presence, no new content, no new asset, no new risk to the honesty floor.

**Why the rejected candidates are weaker here:**

- **Scroll-scrubbed / pinned-and-scrubbed hero or Artifact (scroll-jacking the glyph build, or pinning the code exhibit).** Rejected. Scrubbing the glyph to scroll *traps the reader at the top* and makes the signature depend on a scroll gesture the page's calm doesn't want. The signature should hit on *first paint* — the LinkedIn-click visitor sees it before they touch the wheel. Pinning the Artifact is worse: the artifact's entire thesis (§A3-4.1 T7) is "real work *presented, not performed*" — scrubbing it betrays that. Scroll-scrub is the most generic "we added GSAP" tell on the board; reject it outright.
- **Scroll-linked depth/parallax across the bands.** Rejected hard — this is the named failure mode (§5). Parallax-on-everything is the single clearest "generic animated SaaS landing" signal. It also fights the `--space-16` interval discipline that *is* the page's strike.
- **The pipeline glyph becoming a scroll-driven narrative (stages animating as you scroll).** Tempting and on-thesis, but rejected: it would re-introduce the exact redundancy A2 spent a whole amendment removing (the glyph already *fully states* the pipeline; making the reader scrub through its stages re-tells the same idea slowly). It also pulls the signature *down the page* and *onto scroll* — both wrong. The build belongs at the top, on paint, all at once.
- **Statement / number mask-reveal.** Too small to be *the* signature, and the Statement's whole register is stillness (§A3-4.1 T6) — animating it undercuts the conviction. The 95% number must never count up (locked). A mask-reveal here would be a nice secondary at best; it can't carry the page.
- **Cinematic first-paint of the *whole hero* (text choreography as the signature).** This is close — and it's the *runner-up* — but the words alone aren't distinctive enough to be the memorable thing; every good site staggers its hero text. The distinctive asset is the *glyph*. So: keep and upgrade the hero text choreography (it's part of the supporting set, §3.S1) but make the **glyph build the climax of it**, not a co-equal. The signature is the glyph drawing; the text stagger is its setup.

**The single most important constraint on the signature:** it must read as **one deliberate construction, not a busy animation.** The draughtsman draws *one* confident line and sets *five* points — it does not sparkle, sweep, glow-trail, or flourish. If it ever feels "animated" rather than "drawn," it has failed. The test: a senior engineer watching it should think *"someone drew that exactly,"* never *"nice animation."*

---

## 3. The supporting motion set (richer than T1–T3, beneath the signature, never competing)

These exist to make the page feel *composed* around the signature — not to add peaks. Each is bolder than the floor's sub-perceptual touches but stays subordinate.

- **S1 — Hero text choreography upgraded to compose *with* the glyph build (the signature's setup).** Keep `entrance="stagger"` but treat the whole hero — status, title, lede, CTA, *and* the glyph construction — as **one choreographed arrival**, timed so the glyph reaches its SHIP-node climax as (or just after) the title settles. Today the text staggers and the glyph fades independently; they should read as *one gesture*. This is the difference between "things appeared" and "the page composed itself." The title rise can travel a touch further / land a touch more deliberately at display scale (it's a big glyph now — let it earn the entrance). Bolder than T-baseline; still CSS-cheap.

- **S2 — A real band *entrance* — rise-and-settle, not a flat fade — on the below-hero beats.** Replace the uniform 8–12px fade+rise with a slightly more authored entrance: a marginally longer travel with a settle (a single, non-bouncy ease-out that *arrives* rather than appears), still once, still whole-unit. The point is that scrolling should feel like beats **landing** with intent, not content un-hiding. Subtle, but it's the difference between a reveal and an *arrival*. (Reuse the existing IO; this is an easing/distance/timing change, not a new mechanism.) **No stagger except the one already-permitted Disciplines beat (T4).**

- **S3 — Keep and slightly deepen the deficit-bar draw (T1) as the page's *second* moment.** T1 stays — it's the one mid-page storytelling motion and it's correct. With the signature now anchoring the top, T1 reads as the page's deliberate *second beat* (top: the system builds; mid: the gap opens). Let it keep its `--dur-slow` draw; this is the only place besides the signature where motion *tells the argument*. Do not add a third storytelling motion — two is the composition.

- **S4 — Earned hover depth where it's now warranted (and only there).** The CTA press (T2) and the inline-link arrow nudge (T3) stay. One *additional* warranted touch: the **Artifact exhibit** may take a single, very quiet hover affordance — a hairline-border warm or a 1px settle — *because* it's a framed object a curious reader will mouse toward to read the code, so acknowledging the cursor is motivated (unlike the non-interactive discipline rows, which correctly stay dead per T5). Keep it to a hairline; the artifact must never lift like a card. If it reads at all as "clickable widget," cut it — the static exhibit is the safe default.

**That's the whole set: one signature + four supporting moves + the two storytelling beats (signature build, deficit draw). Everything else stays still.**

---

## 4. What stays still (the restraint anchors — these must NOT move)

The signature only reads as deliberate because the page around it is disciplined. These are load-bearing stillness:

- **The Statement stays still** (beyond its one quiet reveal). It is the page's raised-voice conviction; stillness *is* its register. No mask-reveal, no word-by-word, no emphasis pulse. (§A3-4.1 T6 holds.)
- **The Artifact code stays *presented, not performed*.** No typing, no cursor blink, no scroll-draw, no line-by-line. The one allowed touch is S4's quiet hover acknowledgment — the *code itself* never animates. (§A3-4.1 T7 holds; this is the hardest line — a code exhibit that "types itself" is the dev-tool-theatre failure.)
- **The 95% number never counts up.** Final on first paint, always. The *bar* draws (S3); the *numeral* does not tick. (Locked.)
- **The discipline rows stay dead on hover.** Non-interactive elements get no hover affordance — a false affordance is worse than flat. (§A3-4.1 T5 holds.)
- **The Convert close stays static on arrival.** It's the terminus the reader scrolls *to*; it does not reveal or animate. The page ends in stillness — the calm of work already done.
- **The recessed bands do not animate their own elevation.** Recess is a static surface fact, not a motion. (§A3-4.1 T8 holds.)
- **The `--space-16` interval and the monochrome floor do not move.** No motion introduces color (accent stays off at rest), and no motion compresses or violates the spacing rhythm that *is* the page's strike.

**The principle:** exactly **one** thing on the page constructs itself (the signature), exactly **one** thing tells a second story (the deficit draw), and **everything else arrives quietly and then holds perfectly still.** That ratio — one bold, one supporting-story, the rest disciplined — is the whole design.

---

## 5. The line I will not cross (the failure mode, named concretely)

If any of these appear, we have become a generic animated SaaS landing and betrayed the voice. The designer/engineer should treat each as a hard stop:

- **No scroll-jacking / pinned-scrub that traps the reader.** The reader's scroll is theirs. The signature fires on *paint*, not scroll; nothing pins the viewport, hijacks the wheel, or gates progress on a scrubbed timeline.
- **No parallax. Anywhere.** Not on the bands, not on the glyph, not on the artifact. Parallax-on-everything is *the* tell. Zero.
- **No count-ups** (the 95%, or anything). A ticking numeral animates drama, not information.
- **No bouncy / spring / overshoot easing.** The draughtsman is exact. Everything resolves with a confident ease-out that *settles*, never bounces. A spring on anything reads instantly as toy-SaaS.
- **No glow, shimmer, sparkle, gradient-sweep, or accent-trail.** The signal-pulse's existing single accent is the *only* accent motion; the construction draws in `currentColor` ink, not light. No "AI" glow.
- **No motion without meaning.** Every move must draw the argument (signature, deficit), set the arrival (hero choreography, band entrance), or acknowledge an interaction (press, nudge, artifact hover). If a motion is there "for life," it's cut.
- **No second loop.** The glyph's signal-pulse is the *only* ambient/looping motion on the page. The construction happens **once** and never repeats (no replay on scroll-back into view). Two loops is a dashboard.
- **The signature must never read "animated."** The single sharpest test: if a watching engineer's reaction is *"nice animation"* rather than *"someone drew that, exactly,"* it has crossed the line — pull it back toward fewer, slower, more deliberate strokes.

---

## 6. Reduced-motion + a11y stance (every bold move degrades — non-negotiable)

**The principle: the signature is an *enhancement on top of a page that is already complete and correct without it.* Reduced-motion and no-JS users get the finished diagram, instantly, losing nothing but the construction.**

- **`prefers-reduced-motion: reduce` → the glyph renders fully constructed on first paint, static, with the resting signal-pulse off** (the pulse is already reduced-motion-gated). No draw, no stagger, no band-arrival travel, no deficit draw, no hover transforms — the entire page resolves to its static end-state, fully legible. This is HARD and merge-blocking (D-25), no exception.
- **No-JS / pre-hydration → the finished glyph is the default rendered state**, exactly as it ships today. The construction is a progressive enhancement that *adds* the draw when motion is allowed; it never gates the diagram's existence on JS. The glyph's resting CSS must be the finished state (mirror the T1 safety contract: final state is the default; the animation is the additive layer).
- **The glyph stays `aria-hidden`** — the OBSERVE→SHIP labels restate the pipeline the hero copy already carries, so the construction adds presence, not information; a screen-reader user loses nothing.
- **Axe-clean, WCAG AA, keyboard parity** on every interactive surface (CTA press, link nudge, artifact hover all keyboard/`:focus-visible`-correct), unchanged from the floor.
- **The construction must not induce layout shift** — it draws *within* the glyph's already-reserved column (aspect-stable), so CLS stays zero. The draw is paint-only inside a fixed box.

---

## 7. Handoff

- **→ Arian**: this raises the dial from ~6 to ~7.5 and names the signature. The one decision that matters: **do you want the glyph to *build itself* on first paint as the page's signature presence?** Default recommendation: yes — it's the thesis made kinetic, it's the asset you already own, and it's the one move that gives the page a memorable moment without a single new asset or fabricated claim. If you'd rather hold the page quieter, say so and I'll cap the ambition at S1–S2 (richer arrival, no construction) — but my strong recommendation is the build.
- **→ PM (`pouk-ai-pm`)**: on Arian's nod, this is your upstream input to amend the home spec's motion section — the signature (glyph construction on paint, choreographed with the hero entrance, once, reduced-motion-safe) plus the supporting set S1–S4 and the stillness anchors. Turn the *intent* here into engineer-checkable AC (timing budgets, the reduced-motion end-state, the no-replay rule, CLS-zero). I'm not writing the AC.
- **→ Designer (`pouk-ai-designer`)**: yours to choreograph — the exact draw mechanism (stroke-dashoffset on the trace, node set-down sequence, label register timing), the precise timing curve and total duration within the ~1.2–1.6s budget, and how the glyph climax interlocks with the hero text stagger (S1). Hold the "draughtsman not animation" bar. The mechanism is your call; the *feeling* (one confident construction, then stillness) is the contract.
- **→ Engineer**: CSS-first if it can hold the draughtsman quality (stroke-dash draw + sequenced node opacity is CSS-reachable); JS only if the choreography genuinely needs it (D-25 permits it). Whatever the technique: finished-state-is-default, reduced-motion collapses to static, fires once on paint, no replay, CLS zero, glyph stays `aria-hidden`.

**File**: `/Users/arianzargaran/Desktop/poukai org/poukai-site/meta/direction/home-motion-ceiling.md`
