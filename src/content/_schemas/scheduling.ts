import { z } from "zod";

/**
 * Schema for /scheduling — the public description of the cal.pouk.ai scheduling
 * app and its Google Calendar integration (#122).
 *
 * Purpose: a no-login-wall page on the pouk.ai authorized domain that plainly
 * describes what the app does and how it uses the requested Google Calendar
 * scopes. It backstops the Google OAuth consent-screen homepage requirement and
 * gives /privacy + /terms a sibling that names the integration in product terms.
 *
 * Copy lives in content JSON (R-076) and is validated here (R-074).
 */

const featureSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

export const schedulingSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(200),
    canonical: z.string().url(),
  }),
  hero: z.object({
    title: z.string().min(1),
    lede: z.string().min(1),
    cta: z.object({
      label: z.string().min(1),
      href: z.string().url(),
    }),
  }),
  intro: z.array(z.string()).min(1),
  scopes: z.object({
    heading: z.string().min(1),
    intro: z.string().min(1),
    items: z.array(featureSchema).min(1),
  }),
  privacyNote: z.object({
    text: z.string(),
    linkLabel: z.string(),
    linkHref: z.string(),
  }),
});

export type Scheduling = z.infer<typeof schedulingSchema>;
