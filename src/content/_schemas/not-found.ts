import { z } from "zod";

/**
 * Page-level copy for /404 (meta, hero incl. CTA, suggested-route list).
 * Extracted per R-076 (no copy hardcoded in .astro). Behavioural flags
 * (robots, omitCanonicalLink) stay in the template — they are not copy.
 */
export const notFoundSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(200),
    canonical: z.string().url(),
  }),
  hero: z.object({
    title: z.string(),
    lede: z.string(),
    ctaText: z.string(),
    ctaHref: z.string(),
  }),
  suggestions: z
    .array(
      z.object({
        label: z.string(),
        descriptor: z.string(),
        href: z.string(),
      })
    )
    .length(3),
});

export type NotFound = z.infer<typeof notFoundSchema>;
