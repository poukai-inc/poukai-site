import { z } from "zod";

export const homeSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(160),
    canonical: z.string().url(),
  }),
  /**
   * Artifact exhibit (Beat 3 — A3 6-beat arc). OPTIONAL and ALL-OR-NOTHING.
   * Omit entirely if no real, publishable engineering fragment is confirmed.
   * When present, language + code + label are ALL required and non-empty.
   * caption is optional (rendered as <figcaption>).
   *
   * Realness (real syntax + real content pouk.ai stands behind) is
   * human-verified (Arian-confirmed per spec §4.2/§6), NOT Zod-enforceable.
   * The schema enforces completeness only — a partial artifact must fail.
   *
   * NOTE: The current home.json ships content Candidate A as a NON-FINAL
   * PLACEHOLDER for preview/evaluation (AA-1). Production Built is gated
   * on Arian's confirmed real fragment (spec §7 / composition §A3-7 OQ-A1).
   */
  artifact: z
    .object({
      /** Language identifier, e.g. "typescript" | "yaml" | "python". */
      language: z.string().min(1),
      /** The real fragment verbatim. Must be real selectable <pre><code> text. */
      code: z.string().min(1),
      /** Optional mono-register caption rendered as <figcaption>. NOT an <h2>. */
      caption: z.string().optional(),
      /** Accessible name for the <figure> region (screen-reader context). */
      label: z.string().min(1),
    })
    .optional(),
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
   * Conviction Statement (Beat 2 — 5-beat arc).
   * Single italic-serif line. No CTA, no stat, no attribution.
   * R-076 HARD: copy sourced from JSON, not hardcoded in the component.
   */
  statement: z.object({
    /** The conviction line — two period-stopped sentences, zero dashes. */
    text: z.string(),
  }),
  /**
   * What we do — THE DISCIPLINES (Beat 3, first <h2>).
   * Three deliverables: builds / automations / advisory.
   * Each carries a name + one true, specific sentence (anti-slop guardrail binding).
   * R-076 HARD: copy sourced from JSON.
   *
   * NOTE: howWeWork block removed — A2 §14. Method beat dropped from the 5-beat IA.
   * The Hero "The Signal" glyph is now the page's sole pipeline statement.
   */
  disciplines: z
    .object({
      /** Page's first <h2>. */
      heading: z.string(),
      /**
       * Optional lead discipline id for the asymmetric layout (A3 §4.4 / spec §6).
       * When present, must equal one of items[].id.
       * If omitted, the designer picks a lead at composition time.
       */
      lead: z.enum(["builds", "automations", "advisory"]).optional(),
      items: z
        .array(
          z.object({
            /** Slug: one of the three canonical discipline ids. */
            id: z.enum(["builds", "automations", "advisory"]),
            /** Discipline display name. */
            name: z.string(),
            /**
             * One true, specific sentence. No adjective soup. Anti-slop guardrail.
             * Zero dashes.
             */
            description: z.string(),
            /** Optional — only when a real sub-page exists today. Omit entirely otherwise. */
            link: z
              .object({
                text: z.string(),
                href: z.string(),
              })
              .optional(),
          })
        )
        .length(3),
    })
    .refine(
      (d) => d.lead === undefined || d.items.some((item) => item.id === d.lead),
      { message: "disciplines.lead must equal one of disciplines.items[].id" }
    ),
  /**
   * Why us — THE NUMBER-LED EXHIBIT (Beat 5, second <h2>, A3 6-beat arc).
   * Recast from 4-column table to 2-axis honest cut (spec §4.5 / A3 §A3-2 Beat 5).
   *
   * metric — optional all-or-nothing cited deficit number block (unchanged in shape).
   *   When present, ALL of value / label / source / reportTitle / year required + non-empty.
   *   Rendered at --fs-stat-large via <Stat size="lg">.
   *
   * rows — the 2-axis honest cut: exactly 4 label+line pairs
   *   (Build it yourself / Hire an agency / Hire in-house / pouk.ai).
   *   NOT a 4×N matrix — each row is one alternative label + its single honest line.
   *   Honesty: pouk.ai last + self-conceding; Arian-verified; not Zod-enforceable.
   *
   * stance — the one-line lead-in above the four pairs.
   * link — the inline /why-ai hand-off below.
   *
   * R-076 HARD: copy sourced from JSON.
   */
  comparison: z.object({
    /** Page's second <h2>. */
    heading: z.string(),
    /**
     * OPTIONAL cited deficit number at the head of the exhibit (A2 §17, A3 §A3-2 Beat 5).
     * Omit entirely if no real, attributable, named-source figure is available.
     * When present, ALL of value / label / source / reportTitle / year are REQUIRED and non-empty.
     * The micro-caption renders as VISIBLE text: `${source}, ${reportTitle}, ${year}`.
     */
    metric: z
      .object({
        /** The figure as it renders, e.g. "95%" — real, source-supported, zero rounding beyond source. */
        value: z.string().min(1),
        /** What the figure measures — one line, no adjective soup. */
        label: z.string().min(1),
        /** Named, attributable publisher — NO "industry" / anonymous sources. */
        source: z.string().min(1),
        /** Report/publication title for the micro-caption. */
        reportTitle: z.string().min(1),
        /** Publication year. */
        year: z.union([z.string().min(1), z.number().int()]),
      })
      .optional(),
    /**
     * The 2-axis honest cut: exactly 4 label+line pairs.
     * Axis 1 (label): Build it yourself / Hire an agency / Hire in-house / pouk.ai.
     * Axis 2 (line): the single honest "right call when..." line per alternative.
     * pouk.ai is last and self-conceding (honesty guardrail, human-verified).
     * NOT a table row with cells — each entry is one alternative + one line.
     */
    rows: z
      .array(
        z.object({
          /** Alternative label, e.g. "Build it yourself". */
          label: z.string().min(1),
          /** The single honest line for this alternative. */
          line: z.string().min(1),
        })
      )
      .length(4),
    /**
     * One-line stance lead-in above the four pairs.
     * e.g. "Four honest options. pouk.ai is only one of them."
     */
    stance: z.string().min(1),
    /** Inline link to /why-ai at the end of the section. */
    link: z.object({
      text: z.string(),
      href: z.string(),
    }),
  }),
  /**
   * Closing conversion section (Beat 5 — recessed band #2).
   * Third and final <h2>. Dual CTA: mailto: primary + cal.pouk.ai secondary per contact-flow FS-CF-1.
   * R-076 HARD: copy sourced from JSON.
   */
  closingCta: z.object({
    /** Page's third <h2>. */
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
