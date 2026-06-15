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
 * Hero posture: editorial-doorway → size="intimate" + entrance="stagger" per
 * meta/decisions/2026-05-19-hero-stagger-scope.md.
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import { Hero, StatusBadge, Button } from "@poukai-inc/ui";
import { BOOKING_URL } from "../lib/booking";

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
    <Hero
      size="intimate"
      entrance="stagger"
      status={
        <StatusBadge status="available">{status}</StatusBadge>
      }
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
          <a href={ledeAnchorHref}>{ledeAnchorText}</a>
        </>
      }
      cta={
        /* Context A — button-beside-button (booking-affordance §2 Context A).
           mailto: Button is primary (default variant); booking Button is secondary variant.
           Both are size="compact" to match the existing Hero CTA rung.
           Both subordinate to the Hero title (home composition "title is primary anchor"). */
        <>
          <Button asChild size="compact">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <Button asChild size="compact" variant="secondary">
            <a href={BOOKING_URL}>{bookingLabel}</a>
          </Button>
        </>
      }
    />
  );
}
