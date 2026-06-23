/**
 * HomeStatement.tsx
 *
 * React wrapper for the conviction Statement (Section 3 — destination homepage).
 * Governed by meta/compositions/pages/home.md §2 Section 3 and
 * meta/specs/pages/home-amendment-destination.md §4/§5.3.
 *
 * Decisions honoured:
 *   - Emits NO heading element (Statement emits no <h1>–<h6>, DS rule).
 *     Page heading hierarchy: h1 (Hero) → h2 (Section 4) → h2 (Section 5).
 *   - hairline={false}: bare-canvas turn, not a banner. The interval above/below
 *     (--space-16, 64px) carries the weight, not a rule.
 *   - as="p" (default): brand's own assertion, not an external quotation.
 *   - No CTA, no stat, no attribution (statement-beats.md §0 discipline).
 *   - On --bg (no band). The page's one --surface-section band is the CTASection.
 *   - Scroll-reveal: wrapped in <ScrollReveal> at the page level (index.astro) so
 *     the reveal grammar is owned by one island, not duplicated per component.
 *     This component itself is static; the fade+rise is the island's job.
 *
 * Copy passes in via scalar prop sourced from src/content/home.json (R-076 HARD).
 * Rendered as static HTML at build time — static by design (no hydration needed here).
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16; client JS now permitted,
 * static is the chosen default. a11y + prefers-reduced-motion remain binding.]
 */

import { Statement } from "@poukai-inc/ui";

interface HomeStatementProps {
  /** The conviction line. Two period-stopped sentences, zero dashes. */
  text: string;
}

export function HomeStatement({ text }: HomeStatementProps) {
  return (
    <Statement
      statement={<>{text}</>}
      hairline={false}
    />
  );
}
