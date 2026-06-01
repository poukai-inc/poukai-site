import { z } from "zod";

/**
 * Page-level chrome for the /writing index (meta, hero, retention block,
 * JSON-LD). Per-essay substance lives in the `writing` content collection;
 * this file holds only the index template copy (R-076 — no copy in .astro).
 */
export const writingPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(155),
    canonical: z.string().url(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
  }),
  retention: z.object({
    emailLine: z.string(),
    emailPlaceholder: z.string(),
    emailButton: z.string(),
    rssLabel: z.string(),
    rssFallbackLine: z.string(),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("CollectionPage"),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export type WritingPage = z.infer<typeof writingPageSchema>;
