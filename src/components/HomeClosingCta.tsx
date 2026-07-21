/**
 * HomeClosingCta.tsx
 *
 * Beat 6 — Convert (third <h2>). THE DESIGNED CLOSE (A3 recast).
 *
 * Recast from a plain CTA band heading to an AUTHORED TYPOGRAPHIC CLOSE
 * (spec §4.6 / A3 §A3-2 Beat 6 / composition §A3-2 Beat 6):
 *   - The closing line "The demo was never the hard part." renders at
 *     display-adjacent serif italic scale — the Statement's louder sibling.
 *   - Scale: --fs-tagline-intimate (32–52px), --font-serif, italic.
 *   - Applied via site className `.home-convert-close` on the CTASection heading
 *     element — a site-side application of an existing DS token, NOT a new token.
 *   - It remains the `<h2>` element styled large — NOT a second heading.
 *   - This is a diagnosis/conviction, not a CTA verb. The buttons carry the ask.
 *
 * Decisions honoured:
 *   - CTASection surface="recessed": --surface-section band #2 of 2.
 *   - headingAs="h2": the page's third and final <h2>.
 *   - align="center": end-of-page default; centered close + dual CTA.
 *   - size="default": --space-16 block padding.
 *   - Exactly TWO actions (DS rule). Primary = mailto: (FS-CF-1). Secondary = booking.
 *   - No second StatusBadge (DS rule: max 1 per page; Hero carries it).
 *   - Static — no scroll-reveal (the conversion terminus; composition §A3-4).
 *   - Do NOT wrap in Section (DS anti-pattern: CTASection owns its frame).
 *
 * The .home-convert-close className (site.css) applies to the CTASection's
 * heading element via the `headingClassName` prop (if the DS exposes it) or
 * via a CSS descendant selector targeting the heading element role inside
 * .home-convert-close-wrap. See site.css for the approach used.
 *
 * NOTE: CTASection does not expose a headingClassName prop (confirmed against
 * dist/organisms/CTASection). The .home-convert-close wrapper div targets the
 * heading element (h2) rendered inside CTASection via a CSS descendant selector
 * (2-level max, within the no-deeper-than-2-levels rule). This is the same
 * precedent as .about-band h1 (site.css §about) and .about-poukai__heading.
 *
 * Copy passes in via scalar props sourced from src/content/home.json (R-076 HARD).
 * Reuses BOOKING_URL constant from src/lib/booking (FS-CF-2 single canonical URL).
 * Rendered as static HTML at build time.
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16.]
 */

import { CTASection, Button } from "@poukai-inc/ui";
import { BOOKING_URL } from "../lib/booking";

interface HomeClosingCtaProps {
  /** Page's third <h2>. Rendered at display-adjacent serif italic via .home-convert-close. */
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
    /*
     * .home-convert-close-wrap — scopes the h2 serif-scale override.
     * The CSS in site.css targets `.home-convert-close-wrap h2` to apply
     * --fs-tagline-intimate / --font-serif / italic to the heading rendered
     * by CTASection inside this wrapper. Same 2-level selector pattern as
     * .about-band h1 (site.css §about). No !important needed.
     */
    <div className="home-convert-close-wrap">
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
            {/* Secondary: booking — subordinate per contact-flow §8. */}
            <Button asChild variant="secondary" size="md">
              <a href={BOOKING_URL}>{bookingLabel}</a>
            </Button>
          </>
        }
      />
    </div>
  );
}
