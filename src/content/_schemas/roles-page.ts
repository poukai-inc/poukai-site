import { z } from "zod";

/**
 * Page-level copy for /roles (meta, hero, end-CTA, JSON-LD). The four role
 * cards live in the `roles` collection (roles.json); this file holds only the
 * template-level copy extracted per R-076 (no copy hardcoded in .astro).
 */
export const rolesPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(200),
    canonical: z.string().url(),
  }),
  hero: z.object({
    title: z.string(),
    lede: z.string(),
  }),
  endCta: z.object({
    lead: z.string(),
    email: z.string().email(),
    href: z.string().regex(/^mailto:/),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("WebPage"),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export type RolesPage = z.infer<typeof rolesPageSchema>;
