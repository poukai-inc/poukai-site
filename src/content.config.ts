import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

/* ---------- Stat sub-schema (shared by failure-modes) ---------- */

const statSchema = z.object({
  value: z.string(),
  caption: z.string(),
  source: z.string().optional(),
});

/* ---------- Roles ---------- */

const rolesCollection = defineCollection({
  loader: file("src/content/roles.json"),
  schema: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    hiredBy: z.string(),
    icon: z.enum(["hammer", "workflow", "graduation-cap", "clapperboard"]),
  }),
});

/* ---------- Engagements ---------- */
// Four engagement-shape rungs (Discovery → Pilot → Build → Retainer).
// Array order encodes the climb — the page must NOT re-sort at render.
// Categorical-only (engagements.json.md §5): no figure / currency / "starts at"
// / range may appear in any field. Enforced field-by-field below.

// Categorical-only guard (engagements.json.md §7(a)). Rejects any digit or
// currency symbol (a single figure breaks the contract), and the PRICE IDIOMS
// "starts at <figure>" / "from <currency>" — but NOT the ordinary verb phrase
// "start at" (e.g. "start at any rung"), which carries no price.
const noFigures = (s: string) =>
  !/[$€£¥]|\d|\bstarts?\s+at\s+[$€£¥\d]|\bfrom\s+[$€£¥]/i.test(s);
// Length bounds must be applied on the base ZodString BEFORE .refine() (which
// returns a ZodEffects with no .min()/.max()). This helper composes them.
const categorical = (min: number, max: number) =>
  z
    .string()
    .min(min)
    .max(max)
    .refine(noFigures, {
      message:
        "Categorical-only: no figures, currency, 'starts at', or ranges (engagements.json.md §7(a)).",
    });

const engagementsCollection = defineCollection({
  loader: file("src/content/engagements.json"),
  schema: z
    .object({
      id: z.enum(["discovery", "pilot", "build", "retainer"]),
      // Eyebrow is a descriptive stage marker, NOT the rung name (engagements.md
      // §7 Q1b, Option B LOCKED). Must differ from the title (case-insensitive),
      // 2–24 chars, categorical-only.
      eyebrow: categorical(2, 24),
      title: z.enum(["Discovery", "Pilot", "Build", "Retainer"]),
      delivers: categorical(60, 600),
      deRisks: categorical(40, 280),
      cta: z.object({
        label: categorical(8, 60),
        // LOCKED shape: mailto:hello@pouk.ai?subject=<Rung>, subject ∈ rung titles.
        href: z
          .string()
          .regex(/^mailto:hello@pouk\.ai\?subject=(Discovery|Pilot|Build|Retainer)$/),
      }),
    })
    // Eyebrow MUST NOT equal the rung title (engagements.json.md §5) — the marker
    // labels the stage, it does not repeat the name.
    .refine((d) => d.eyebrow.toLowerCase() !== d.title.toLowerCase(), {
      message: "Rung eyebrow must differ from its title (engagements.json.md §5).",
      path: ["eyebrow"],
    })
    // cta.href subject must match the rung title 1:1 (engagements.json.md §5).
    .refine((d) => d.cta.href.endsWith(`?subject=${d.title}`), {
      message: "cta.href subject must equal the rung title (engagements.json.md §5).",
      path: ["cta", "href"],
    }),
});

/* ---------- Writing (essay corpus) ---------- */
// Per-essay Markdown with typed frontmatter (writing.json.md §4). Astro content
// collections chosen as the store (writing.json.md §1 stack note — engineer's
// call, recorded here): typed frontmatter validated at build, getCollection()
// for the index, getStaticPaths() for /writing/[slug], single RSS source.
// Markdown (not MDX): stat blocks live as a frontmatter `statsRow` array
// rendered by the template, so the body stays plain prose (lighter than MDX).

const writingReferenceSchema = z.object({
  index: z.number().int().positive(),
  title: z.string(),
  source: z.string(),
  url: z.string().url(),
});

const writingStatSchema = z.object({
  value: z.string(),
  caption: z.string(),
  source: z.string().optional(),
});

const writingCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/writing" }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      // claim-shaped, kebab-case; never post-N or date-only (writing.json.md §5.1).
      slug: z
        .string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
        .refine((s) => !/^post-?\d+$/.test(s), "Slug must not be post-N.")
        .refine(
          (s) => !/^\d{4}-\d{2}-\d{2}$/.test(s),
          "Slug must not be date-only."
        ),
      claim: z.string().min(20).max(180),
      description: z.string().max(155),
      datePublished: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      dateModified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      draft: z.boolean().default(false),
      funnelExit: z.object({
        text: z.string().min(4).max(40),
        href: z
          .string()
          .regex(
            /^(\/why-ai|\/roles#(builder|automator|educator|creator)|\/engagements|\/engagements#(discovery|pilot|build|retainer))$/
          ),
      }),
      // Optional foregrounded stat blocks (the /why-ai statsRow pattern). When
      // present, references[] is required (validated by superRefine below).
      statsRow: z.array(writingStatSchema).optional(),
      references: z.array(writingReferenceSchema).optional(),
      ogClaim: z.string().max(100).optional(),
      ogImage: z.string().optional(),
      // The single lift-able quotable line (writing.json.md §5.1). Rendered as
      // <Pull variant="sans"> by the [slug] template (composition §2B).
      pull: z.string().optional(),
    })
    .refine((d) => d.dateModified >= d.datePublished, {
      message: "dateModified must be >= datePublished.",
      path: ["dateModified"],
    })
    .refine((d) => !(d.statsRow && d.statsRow.length > 0) || !!d.references, {
      message: "An essay carrying a stat block must carry references[].",
      path: ["references"],
    }),
});

/* ---------- Principles ---------- */
// principles.json is a single object (not an array), so we use a custom loader
// approach: wrap in a virtual collection via the file loader by treating the
// whole file as a single "entry". We import it directly in the page instead.
// See src/pages/principles.astro for the direct import pattern.

/* ---------- Failure Modes ---------- */

const failureModesCollection = defineCollection({
  loader: file("src/content/failure-modes.json"),
  schema: z.object({
    index: z.number().int().min(1).max(5),
    title: z.string(),
    anchor: z.string(),
    body: z.string(),
    stats: z.array(statSchema).default([]),
  }),
});

export const collections = {
  roles: rolesCollection,
  "failure-modes": failureModesCollection,
  engagements: engagementsCollection,
  writing: writingCollection,
};
