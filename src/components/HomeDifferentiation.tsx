/**
 * HomeDifferentiation.tsx
 *
 * React wrapper for the "Why pouk.ai, specifically" differentiation preview
 * (Section 4 — destination homepage). Governed by
 * meta/compositions/pages/home.md §2 Section 4 and
 * meta/specs/pages/home-amendment-destination.md §4/§5.4.
 *
 * Decisions honoured:
 *   - Carries the page's FIRST <h2> (titleAs="h2", Section default).
 *   - On --bg (no band). OQ-1 resolved: the one --surface-section band
 *     goes to the closing CTASection.
 *   - Body is short prose ending in an inline <a href="/why-ai"> link.
 *   - The → arrow is the literal &rarr; entity, NOT a Lucide ArrowRight
 *     icon — matches the Hero lede hand-off register (R12 / D-11).
 *   - No Stat atoms, no FeatureCard grid (categorical-only on this preview).
 *   - size="default" supplies --space-16 (64px) block padding top + bottom.
 *   - as="section" for the region landmark (aria-labelledby auto-wired by DS).
 *   - Static — no entrance animation, no scroll trigger (design choice; hydration
 *     not warranted here). [R-079 zero-JS contract superseded by D-25, 2026-06-16.]
 *
 * Copy passes in via scalar props sourced from src/content/home.json (R-076 HARD).
 * Rendered as static HTML at build time — static by design (no hydration needed here).
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16; client JS now permitted,
 * static is the chosen default. a11y + prefers-reduced-motion remain binding.]
 */

import { Section } from "@poukai-inc/ui";

interface HomeDifferentiationProps {
  /** Page's first <h2>. */
  heading: string;
  /** ~44-word body prose. Does NOT restate the three vs-alternatives beats. */
  body: string;
  /** Inline link text to /why-ai — carries the &rarr; entity per the copy draft. */
  linkText: string;
  /** Link href — /why-ai. */
  linkHref: string;
}

export function HomeDifferentiation({
  heading,
  body,
  linkText,
  linkHref,
}: HomeDifferentiationProps) {
  return (
    <Section
      as="section"
      size="default"
      title={heading}
    >
      <p>
        {body}{" "}
        <a href={linkHref}>{linkText}</a>
      </p>
    </Section>
  );
}
