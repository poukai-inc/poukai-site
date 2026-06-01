import { z } from "zod";

/**
 * Page-level chrome for /engagements (meta, hero, ladder index, end-CTA,
 * JSON-LD). The four rung cards live in the `engagements` collection
 * (engagements.json); this file holds only the template-level copy extracted
 * per R-076 (no copy hardcoded in .astro).
 *
 * Categorical-only contract (engagements.md §7(a) / engagements.json.md §5):
 * no figure, currency, "starts at", or range may appear in any field. Enforced
 * here by a shared guard so a price string can't silently land in chrome copy.
 */

/** Categorical-only guard (engagements.md §7(a)). Rejects any digit/currency and
 *  the PRICE IDIOMS "starts at <figure>" / "from <currency>" — but not the plain
 *  verb phrase "start at" (e.g. "start at any rung"), which carries no price. */
const noFigures = (s: string) =>
  !/[$€£¥]|\d|\bstarts?\s+at\s+[$€£¥\d]|\bfrom\s+[$€£¥]/i.test(s);
const refineMsg = {
  message:
    "Categorical-only: no figures, currency, 'starts at', or ranges (engagements.md §7(a)).",
} as const;
/** Categorical string with no length bound. */
const categorical = z.string().refine(noFigures, refineMsg);
/** Categorical string capped at `max` chars (length applied before refine). */
const categoricalMax = (max: number) =>
  z.string().max(max).refine(noFigures, refineMsg);

export const engagementsPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: categoricalMax(155),
    canonical: z.string().url(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    title: categorical,
    lede: categorical,
  }),
  ladderIndex: z.object({
    leadIn: z.string(),
  }),
  endCta: z.object({
    lead: categorical,
    email: z.string().email(),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("WebPage"),
    name: z.string(),
    description: categorical,
    url: z.string().url(),
  }),
});

export type EngagementsPage = z.infer<typeof engagementsPageSchema>;
