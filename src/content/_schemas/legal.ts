import { z } from "zod";

/**
 * Shared schema for the site's legal / policy pages (/privacy, /terms).
 *
 * These are utility pages, not brand-governed marketing pages — they carry no
 * PM spec or composition recipe. They exist to satisfy the Google OAuth
 * verification requirements for the cal.pouk.ai Calendar integration (#122):
 * a publicly reachable Privacy Policy (and recommended Terms) on the pouk.ai
 * authorized domain, with no login wall.
 *
 * Copy still lives in content JSON (R-076) and is validated here (R-074).
 *
 * A section's prose is an ordered list of `blocks`. Each block is either a
 * paragraph string or a bullet list (`{ list: string[] }`), letting a policy
 * mix narrative and enumerated clauses without inline-HTML copy. `links` render
 * as a labelled reference list beneath the section — this is how the required
 * outbound links (e.g. the Google API Services User Data Policy) are surfaced
 * without embedding markup in the copy.
 */

const blockSchema = z.union([
  z.string(),
  z.object({ list: z.array(z.string()).min(1) }),
]);

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().url(),
});

const sectionSchema = z.object({
  heading: z.string().min(1),
  anchor: z.string().min(1),
  blocks: z.array(blockSchema).min(1),
  links: z.array(linkSchema).optional(),
});

export const legalPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(200),
    canonical: z.string().url(),
  }),
  heading: z.string().min(1),
  lede: z.string().min(1),
  lastUpdated: z.string().min(1),
  sections: z.array(sectionSchema).min(1),
  contact: z.object({
    text: z.string(),
    email: z.string().email(),
    href: z.string().regex(/^mailto:/),
  }),
});

export type LegalPage = z.infer<typeof legalPageSchema>;
export type LegalBlock = z.infer<typeof blockSchema>;
