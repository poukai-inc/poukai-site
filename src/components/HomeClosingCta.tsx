/**
 * HomeClosingCta.tsx
 *
 * React wrapper for the closing conversion section (Section 5 — destination
 * homepage). Governed by meta/compositions/pages/home.md §2 Section 5 and
 * meta/specs/pages/home-amendment-destination.md §4/§5.5.
 *
 * Decisions honoured:
 *   - CTASection surface="recessed": the page's ONE --surface-section band
 *     (OQ-1). Verified: Statement + differentiation preview are on --bg.
 *   - Carries the page's SECOND (and final) <h2> via headingAs="h2".
 *   - align="center": DS brand-correct default for end-of-page CTA;
 *     bilateral symmetry signals "this is the conclusion."
 *   - size="default": --space-16 (64px) block padding — the close gets full air.
 *   - Exactly TWO actions (DS rule: Do NOT use more than two actions).
 *     Primary = mailto: (FS-CF-1, primary affordance).
 *     Secondary = cal.pouk.ai booking (subordinate per contact-flow §8).
 *   - Booking is a plain <a href> (no embed/widget needed; static by design).
 *   - Button size="md" matches Hero CTA scale (display-register, RR-2).
 *   - No second StatusBadge (DS rule: max 1 availability badge per page;
 *     the Hero carries it).
 *   - Static — no entrance animation, no scroll trigger (design choice; hydration
 *     not warranted here). [R-079 zero-JS contract superseded by D-25, 2026-06-16.]
 *   - Do NOT wrap in Section (DS anti-pattern: CTASection owns its own frame).
 *
 * Copy passes in via scalar props sourced from src/content/home.json (R-076 HARD).
 * Reuses BOOKING_URL constant from src/lib/booking (FS-CF-2 single canonical URL).
 * Rendered as static HTML at build time — static by design (no hydration needed here).
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16; client JS now permitted,
 * static is the chosen default. a11y + prefers-reduced-motion remain binding.]
 */

import { CTASection, Button } from "@poukai-inc/ui";
import { BOOKING_URL } from "../lib/booking";

interface HomeClosingCtaProps {
  /** Page's second <h2>. */
  heading: string;
  /** Optional availability restate — one short line, no new urgency. */
  body?: string;
  /** Primary mailto: CTA label. */
  ctaLabel: string;
  /** Primary mailto: href. */
  ctaHref: string;
  /** Secondary booking CTA label — "Or grab a time →" (contact-flow §2). */
  bookingLabel: string;
}

export function HomeClosingCta({
  heading,
  body,
  ctaLabel,
  ctaHref,
  bookingLabel,
}: HomeClosingCtaProps) {
  return (
    <CTASection
      surface="recessed"
      size="default"
      align="center"
      headingAs="h2"
      heading={heading}
      body={body}
      actions={
        <>
          {/* Primary: mailto: — FS-CF-1 primary affordance. */}
          <Button asChild size="md">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {/* Secondary: booking — subordinate per contact-flow §8. Plain <a href>, no embed needed. */}
          <Button asChild variant="secondary" size="md">
            <a href={BOOKING_URL}>{bookingLabel}</a>
          </Button>
        </>
      }
    />
  );
}
