import { z } from "zod";

/**
 * Schema for src/content/onboarding.json — the four engagement phases
 * rendered on /onboarding (Discovery → Scoping → Build → Handoff).
 *
 * Binding rules (meta/specs/content/onboarding.json.md §4/§6):
 *   - Exactly 4 phase objects; array order IS the arc — must not be re-sorted.
 *   - id values: exactly "discovery" | "scoping" | "build" | "handoff", in that order.
 *   - title values: exactly "Discovery" | "Scoping" | "Build" | "Handoff".
 *   - FS-OB-1 (HARD): zero dollar figures, currency symbols, day-rates, or numeric
 *     prices anywhere. The only permitted numerals are: the `index` ordinal,
 *     categorical time-windows in `duration` (e.g. "1–2 weeks"), and non-price
 *     method figures in prose (e.g. "day-30 check-in", "90-day metric").
 *   - No `price`, `dayRate`, `startsAt`, `range`, or `floor` field permitted.
 *   - No per-phase `cta`, `image`, `icon`, or `featured` field.
 */

/** FS-OB-1 guard: rejects cost language — dollar/currency figures, price idioms.
 *  Permits: ordinals ("1–2 weeks"), method numerals ("day-30", "90-day"). */
const noPriceLanguage = (s: string) =>
  !/[$€£¥]|\bday.?rate\b|\bstarts?\s+at\s+[$€£¥\d]|\bfrom\s+[$€£¥]/i.test(s);
const priceMsg = {
  message:
    "FS-OB-1: no currency symbol, day-rate, or price idiom in onboarding phase fields.",
} as const;

const ALLOWED_IDS = ["discovery", "scoping", "build", "handoff"] as const;
const ALLOWED_TITLES = ["Discovery", "Scoping", "Build", "Handoff"] as const;

/** A single engagement phase object. */
const onboardingPhaseSchema = z.object({
  /** Phase ordinal 1–4. phases[i].index must equal i + 1. */
  index: z.number().int().min(1).max(4),
  /** Kebab-case slug — used directly as the anchor ID on /onboarding. */
  id: z.enum(ALLOWED_IDS),
  /** Bare phase name, sentence-case, no article prefix. */
  title: z.enum(ALLOWED_TITLES),
  /**
   * Optional categorical duration cue (e.g. "1–2 weeks"). No price language.
   * 4–24 characters when present.
   */
  duration: z
    .string()
    .min(4)
    .max(24)
    .refine(noPriceLanguage, priceMsg)
    .optional(),
  /**
   * Prospect-facing phase prose. 80–700 characters. Plain text or markdown
   * bold/italic only (no headings, lists, or links). No price language.
   */
  body: z
    .string()
    .min(80)
    .max(700)
    .refine(noPriceLanguage, priceMsg),
  /**
   * Named artifact or checkpoint this phase produces. 6–80 characters when
   * present. No price language. Must be distinct across all four phases.
   */
  deliverable: z
    .string()
    .min(6)
    .max(80)
    .refine(noPriceLanguage, priceMsg)
    .optional(),
});

/**
 * Top-level schema: a fixed-length ordered array of four phase objects.
 * Order encodes the engagement lifecycle; array must not be re-sorted at
 * render time (meta/specs/content/onboarding.json.md §6).
 */
export const onboardingSchema = z
  .array(onboardingPhaseSchema)
  .length(4)
  .superRefine((phases, ctx) => {
    // index values must be 1, 2, 3, 4 in array order.
    phases.forEach((phase, i) => {
      if (phase.index !== i + 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `phases[${i}].index must be ${i + 1}, got ${phase.index}.`,
          path: [i, "index"],
        });
      }
    });

    // id values must follow the canonical arc order.
    phases.forEach((phase, i) => {
      if (phase.id !== ALLOWED_IDS[i]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `phases[${i}].id must be "${ALLOWED_IDS[i]}", got "${phase.id}". Array order encodes the lifecycle.`,
          path: [i, "id"],
        });
      }
    });

    // title values must follow the canonical arc order.
    phases.forEach((phase, i) => {
      if (phase.title !== ALLOWED_TITLES[i]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `phases[${i}].title must be "${ALLOWED_TITLES[i]}", got "${phase.title}".`,
          path: [i, "title"],
        });
      }
    });

    // deliverable values must be distinct (blur guard).
    const deliverables = phases
      .map((p, i) => ({ i, d: p.deliverable }))
      .filter((x): x is { i: number; d: string } => x.d !== undefined);
    const seen = new Set<string>();
    for (const { i, d } of deliverables) {
      if (seen.has(d)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `phases[${i}].deliverable "${d}" is not unique — blur guard violation (onboarding.json.md §5).`,
          path: [i, "deliverable"],
        });
      }
      seen.add(d);
    }
  });

export type OnboardingPhase = z.infer<typeof onboardingPhaseSchema>;
export type Onboarding = z.infer<typeof onboardingSchema>;
