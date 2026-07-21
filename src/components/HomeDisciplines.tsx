/**
 * HomeDisciplines.tsx
 *
 * Beat 4 — What we do (first <h2>). THE DISCIPLINES — ASYMMETRIC (A3 recast).
 *
 * Recast from the A2 3-equal FeatureGrid to an ASYMMETRIC lead-plus-two
 * (spec §4.4 / A3 §A3-2 Beat 4 / composition §A3-2 Beat 4):
 *   - Lead discipline (disciplines.lead = "automations") occupies the full
 *     top row at a larger title scale with more block padding.
 *   - Two subordinate disciplines (builds + advisory) share the row beneath
 *     at a step down in scale.
 *   - DOM order = lead first, then the rest, matching visual hierarchy and
 *     screen-reader reading order.
 *   - Stacks single-column at <768px, lead still first.
 *
 * A3 drops the A2 "mono ordinal lever" (01·/02·/03·) — the asymmetric
 * composition IS the real fix; ordinals were the in-medium soft-middle patch.
 *
 * DS primitives:
 *   - `<Section title="What we do">` — carries the <h2> #1.
 *   - Three `<FeatureCard variant="default" titleAs="h3">` — transparent,
 *     no icon, honest one-sentence bodies. NOT FeatureGrid (which hard-codes
 *     equal minmax columns; an asymmetric lead+two needs a custom grid).
 *
 * Anti-slop guardrail (spec §4.4, binding):
 *   - variant="default" — TRANSPARENT. No border, no radius, no surface fill.
 *   - icon slot: OMITTED. No decorative/vibe icons.
 *   - No three-word headlines; each body is one true, specific sentence.
 *   - Do NOT mix default and bordered variants (DS rule).
 *
 * Heading hierarchy (R-026): Section title = <h2> #1.
 *   FeatureCard titleAs="h3" descends cleanly h2→h3, no skip.
 *
 * Asymmetric CSS (site.css — .home-disciplines / .home-discipline*):
 *   The site-side CSS grid positions the lead full-width and the subordinates
 *   side-by-side. Lead gets --fs-card-title scale + more padding via the
 *   .home-discipline--lead class. Tokens only; no raw px for cross-beat spacing.
 *
 * Motion: scroll-reveal applied at page level via <ScrollReveal client:visible>.
 *   The WHOLE block reveals as ONE unit (no per-card stagger — spec §8 AC).
 *
 * R-076 HARD: all copy sourced from home.json disciplines block (passed as props).
 * No hydration directive — static HTML at build time.
 */

import { Section, FeatureCard } from "@poukai-inc/ui";

interface DisciplineItem {
  id: string;
  name: string;
  description: string;
  link?: { text: string; href: string };
}

interface HomeDisciplinesProps {
  /** The section <h2> heading text. */
  heading: string;
  /** Exactly 3 disciplines: builds / automations / advisory. */
  items: readonly DisciplineItem[];
  /**
   * Optional id of the lead discipline for asymmetric layout (A3 spec §6).
   * When present, the matching item occupies the full top row at larger scale.
   * If omitted, items render in order without asymmetric weighting.
   */
  lead?: string;
  /**
   * When true, adds data-reveal-stagger to the disciplines grid so the
   * site-wide reveal observer (src/scripts/reveal.ts) staggers each card
   * individually instead of revealing the whole block at once.
   * Composition §A3-4 default: false (whole-unit reveal).
   */
  stagger?: boolean;
}

export function HomeDisciplines({ heading, items, lead, stagger = false }: HomeDisciplinesProps) {
  /* Separate the lead item from the subordinates. DOM order: lead first, then rest.
     Reading order matches visual hierarchy so keyboard + AT users get the same
     sequence as sighted users (composition §A3-2 Beat 4). */
  const leadItem = lead ? items.find((item) => item.id === lead) : undefined;
  const restItems = lead ? items.filter((item) => item.id !== lead) : items;

  /* CSS class suffix for the lead modifier — avoids including untrusted id in className. */
  const leadClass = leadItem ? `home-disciplines--lead-${leadItem.id}` : "";

  return (
    <Section
      as="section"
      size="default"
      title={heading}
      /* No eyebrow, no lede — the three sentences are the content. */
    >
      <div
        className={`home-disciplines${leadClass ? ` ${leadClass}` : ""}`}
        {...(stagger ? { "data-reveal-stagger": "" } : {})}
      >
        {/* LEAD discipline — full top row, larger title scale, more padding. */}
        {leadItem && (
          <div className="home-discipline home-discipline--lead">
            <FeatureCard
              variant="default"
              /* TRANSPARENT — no border, no radius, no surface fill. Anti-slop guardrail. */
              titleAs="h3"
              /* h3 descends cleanly under What-we-do <h2>; R-026. */
              title={leadItem.name}
              body={leadItem.description}
              /* icon: OMITTED — anti-slop guardrail (composition §A3-2 Beat 4 / spec §4.4). */
              /* footer: OMITTED — no real sub-page exists today. */
            />
          </div>
        )}

        {/* SUBORDINATE disciplines — side-by-side beneath the lead, step down in scale. */}
        {restItems.map((item) => (
          <div key={item.id} className="home-discipline">
            <FeatureCard
              variant="default"
              titleAs="h3"
              title={item.name}
              body={item.description}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
