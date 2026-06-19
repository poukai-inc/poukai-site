import { z } from "zod";

const statSchema = z.object({
  value: z.string(),
  caption: z.string(),
  source: z.string().optional(),
});

export const whyAiSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(220),
    canonical: z.string().url(),
  }),
  hero: z.object({
    title: z.string(),
    lede: z.string(),
  }),
  /**
   * Opening argument: 4 stat highlights interleaved with 4 connector strings
   * inside one paragraph. Citation indices map 1:1 to references[].
   * statsRow renders below as <Stat> components.
   */
  openingArgument: z.object({
    intro: z.string(),
    stats: z
      .array(
        z.object({
          highlight: z.string(),
          citation: z.number().int().positive(),
        })
      )
      .length(4),
    connectors: z.array(z.string()).length(4),
    statsRow: z.array(statSchema).length(4),
  }),
  pivot: z.string(),
  failureModesIntro: z.object({
    heading: z.string(),
    paragraph: z.string(),
  }),
  leaders: z.object({
    heading: z.string(),
    intro: z.string(),
    items: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .length(4),
    outro: z.string(),
    stats: z.array(statSchema).length(3),
  }),
  /** Promoted conviction line — renders as <Statement> at the failure-modes→leaders pivot. (R-076) */
  statement: z.string(),
  whereWorks: z.object({
    heading: z.string(),
    body: z.string(),
    discoveryIntro: z.string(),
    questions: z.array(z.string()).length(4),
    /** Non-conviction handoff line — the promoted Statement sentence has moved to `statement`. */
    closing: z.string(),
  }),
  /**
   * vs-alternatives differentiation beat — renders as <PrincipleList> in the whereWorks block.
   * Categorical only: no stat/citation fields (D-01 round-trip stays complete). (R-076)
   * Shape per amendment §4.5a.
   */
  vsAlternatives: z.object({
    heading: z.string(),
    leadIn: z.string(),
    /** Exactly 3 alternatives: DIY / generic AI agency / in-house, in that order. */
    alternatives: z
      .array(
        z.object({
          name: z.string(),
          rightWhen: z.string(),
          poukaiWhen: z.string(),
        })
      )
      .length(3),
    closing: z.string(),
  }),
  endCta: z.object({
    primary: z.object({
      lead: z.string(),
      email: z.string().email(),
      href: z.string().regex(/^mailto:/),
    }),
    secondary: z.object({
      lead: z.string(),
      anchor: z.object({
        text: z.string(),
        href: z.string(),
      }),
    }),
    /** Booking secondary — label for the muted "Or grab a time →" link (FS-CF-1, Context B). */
    booking: z.object({
      label: z.string(),
    }),
  }),
  references: z
    .array(
      z.object({
        index: z.number().int().positive(),
        title: z.string(),
        source: z.string(),
        url: z.string().url(),
      })
    )
    .length(4),
  referencesNote: z.string(),
  lastReviewed: z.object({
    date: z.string(),
    lead: z.string(),
    email: z.string().email(),
    href: z.string().regex(/^mailto:/),
    suffix: z.string(),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("Article"),
    headline: z.string(),
    description: z.string(),
    url: z.string().url(),
    author: z.object({
      "@type": z.string(),
      name: z.string(),
      url: z.string().url(),
    }),
    publisher: z.object({
      "@type": z.string(),
      name: z.string(),
      url: z.string().url(),
    }),
    datePublished: z.string(),
    dateModified: z.string(),
  }),
})
  // Every opening-argument citation must resolve to a real reference index —
  // the page renders `#ref-${stat.citation}` anchors that point into
  // references[]. Without this guard an author typo yields a dead footnote
  // anchor that ships green (the per-array `.length(4)` checks don't catch a
  // mismatch between the two). (backlog CR-8)
  .superRefine((data, ctx) => {
    const refIndices = new Set(data.references.map((r) => r.index));
    data.openingArgument.stats.forEach((stat, i) => {
      if (!refIndices.has(stat.citation)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `openingArgument.stats[${i}].citation=${stat.citation} has no matching references[].index.`,
          path: ["openingArgument", "stats", i, "citation"],
        });
      }
    });
  });

export type WhyAi = z.infer<typeof whyAiSchema>;
