/**
 * HomeHero.tsx
 *
 * React wrapper assembling the homepage Hero. All copy passes in via scalar
 * props (sourced from src/content/home.json, validated by
 * src/content/_schemas/home.ts). R-076 HARD: no hardcoded copy in component
 * templates.
 *
 * Decisions honoured:
 *   D-11 — integrated lede-extension link sentence at end of lede, href="/why-ai".
 *   D-12 — status-line text from public/index.html ("Currently taking conversations for Q3.").
 *   FS-CF-1 — mailto: is primary; booking is a quiet secondary Button (Context A,
 *     booking-affordance §2). The two sit as a button-beside-button pair — the
 *     only surface on the site where booking is a <Button>. All other end CTAs
 *     use a muted link (Context B). Both remain subordinate to the Hero title.
 *
 * Hero posture: display doorway → size="display" + entrance="stagger" per
 * RR-1 (ratified-decision reversal, raise-the-ceiling Phase 1).
 *
 * Rendered as static HTML at build time — static by design (no hydration needed here).
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16; client JS now permitted,
 * static is the chosen default. a11y + prefers-reduced-motion remain binding.]
 */

import { Hero, StatusBadge, Button } from "@poukai-inc/ui";
import { BOOKING_URL } from "../lib/booking";
import { HomeHeroIllustration } from "./HomeHeroIllustration";

interface HomeHeroProps {
  status: string;
  titleBefore: string;
  titleEm: string;
  titleAfter: string;
  ledeSentence1: string;
  ledeSentence2: string;
  ledeAnchorText: string;
  ledeAnchorHref: string;
  ctaLabel: string;
  ctaHref: string;
  /** Secondary booking line label — "Or grab a time →" (contact-flow draft §2). */
  bookingLabel: string;
}

export function HomeHero({
  status,
  titleBefore,
  titleEm,
  titleAfter,
  ledeSentence1,
  ledeSentence2,
  ledeAnchorText,
  ledeAnchorHref,
  ctaLabel,
  ctaHref,
  bookingLabel,
}: HomeHeroProps) {
  return (
    /* Asymmetric split: hero text left, "The Signal" illustration right.
       Owned here (.home-hero-split in site.css) rather than via the DS Hero
       `illustration` slot — that slot's two-column rule is gated on
       @media(--bp-md), an unresolved PostCSS custom-media the DS ships, which
       browsers ignore (it stacks). Single-column below 768px; illustration
       hidden there. */
    <div className="home-hero-split">
      <Hero
        size="display"
        entrance="stagger"
      status={<StatusBadge status="available">{status}</StatusBadge>}
      title={
        <>
          {titleBefore}
          <em>{titleEm}</em>
          {titleAfter}
        </>
      }
      lede={
        <>
          {ledeSentence1}{" "}
          {ledeSentence2}{" "}
          {/* T3 — link-arrow nudge. The trailing → is wrapped in aria-hidden so
              only the glyph translates; the link text + DS underline are untouched.
              The text prop from home.json ends with " →" — split it here so the
              JSON copy stays clean and the span is a pure presentational wrapper.
              CSS in site.css animates .home-link-arrow via translateX on :hover/:focus-visible. */}
          <a href={ledeAnchorHref} className="home-editorial-link">
            {ledeAnchorText.replace(/\s*→$/, "")}
            {" "}
            <span className="home-link-arrow" aria-hidden="true">→</span>
          </a>
        </>
      }
      cta={
        /* Context A — button-beside-button (booking-affordance §2 Context A).
           mailto: Button is primary (default variant); booking Button is secondary variant.
           RR-1/RR-2: size="md" matches display-scale Hero (was "compact" at intimate scale).
           Both subordinate to the Hero title (home composition "title is primary anchor"). */
        /* The DS Hero `cta` slot wrapper is `inline-flex` with no gap (built for a
           single CTA). The button-beside-button pair needs its own gapped flex
           container, else the two buttons abut. flex-wrap lets them stack on
           narrow viewports instead of overflowing. (--space-3 = DS button-row gap.) */
        <span className="home-hero-cta-pair">
          <Button asChild size="md">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <Button asChild size="md" variant="secondary">
            <a href={BOOKING_URL}>{bookingLabel}</a>
          </Button>
        </span>
      }
      />
      <div className="home-hero-split__aside">
        <HomeHeroIllustration />
      </div>
    </div>
  );
}
