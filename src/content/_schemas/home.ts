import { z } from "zod";

export const homeSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(160),
    canonical: z.string().url(),
  }),
  hero: z.object({
    /** D-12: byte-identical to former public/index.html status-line. */
    status: z.string(),
    /** Hero title split into three parts so HomeHero.tsx can render <em> on the middle. */
    title: z.object({
      before: z.string(),
      em: z.string(),
      after: z.string(),
    }),
    /** Lede: two declaratives + a lede-extension anchor per D-11. */
    lede: z.object({
      sentence1: z.string(),
      sentence2: z.string(),
      anchor: z.object({
        text: z.string(),
        href: z.string(),
      }),
    }),
    cta: z.object({
      label: z.string(),
      href: z.string(),
    }),
    /** Secondary booking line label — "Or grab a time →" (contact-flow draft §2 / FS-CF-1). */
    bookingLabel: z.string(),
  }),
  /**
   * Conviction Statement (Section 3 — destination amendment §4/§5.3).
   * Single italic-serif line. No CTA, no stat, no attribution.
   * R-076 HARD: copy sourced from JSON, not hardcoded in the component.
   */
  statement: z.object({
    /** The conviction line — two period-stopped sentences, zero dashes. */
    text: z.string(),
  }),
  /**
   * "Why pouk.ai, specifically" differentiation preview (Section 4 — destination §4/§5.4).
   * Short prose ending in an inline /why-ai link. First <h2> on the page.
   * R-076 HARD: copy sourced from JSON.
   */
  differentiation: z.object({
    /** Page's first <h2>. */
    heading: z.string(),
    /** ~44-word body prose — does NOT restate the three vs-alternatives beats. */
    body: z.string(),
    /** Inline link to /why-ai at end of body. */
    link: z.object({
      text: z.string(),
      href: z.string(),
    }),
  }),
  /**
   * Closing conversion section (Section 5 — destination §4/§5.5).
   * Page's one --surface-section band. Second and final <h2>.
   * Dual CTA: mailto: primary + cal.pouk.ai secondary per contact-flow FS-CF-1.
   * R-076 HARD: copy sourced from JSON.
   */
  closingCta: z.object({
    /** Page's second <h2>. */
    heading: z.string(),
    /** Optional availability restate — one short line, no new urgency. */
    body: z.string().optional(),
    /** Primary mailto: CTA label. */
    ctaLabel: z.string(),
    /** Primary mailto: href. */
    ctaHref: z.string(),
    /** Secondary booking CTA label (contact-flow §2 "or grab a time →" register). */
    bookingLabel: z.string(),
  }),
  /** Organization JSON-LD (R-037 + masterplan §6.2). */
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("Organization"),
    name: z.string(),
    url: z.string().url(),
    email: z.string().email(),
    description: z.string(),
    sameAs: z.array(z.string().url()),
  }),
});

export type Home = z.infer<typeof homeSchema>;
