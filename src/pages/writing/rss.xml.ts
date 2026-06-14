/**
 * /writing/rss.xml — RSS feed for the writing corpus.
 *
 * Generated from the `writing` content collection (writing.json.md §6):
 * non-draft essays only, zero-PII, zero-maintenance, ships day one with the
 * index. One source of truth — the same collection that drives the index and
 * /writing/[slug].
 */

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const essays = await getCollection("writing", ({ data }) => !data.draft);
  const ordered = essays
    .map((entry) => entry.data)
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  // Resolve item links to absolute URLs. @astrojs/rss does not reliably prefix
  // a relative `link` with `site`, and some readers require absolute URLs.
  // Trailing slash mirrors the page canonical (build format: "directory").
  const siteOrigin = context.site ?? new URL("https://pouk.ai");

  return rss({
    title: "pouk.ai — Writing",
    description:
      "Operator-first essays on what happens when AI meets a real workflow — failure modes, fixes, and the patterns that repeat across engagements.",
    // context.site resolves to the configured `site` (https://pouk.ai).
    site: context.site ?? "https://pouk.ai",
    items: ordered.map((essay) => ({
      title: essay.title,
      description: essay.description,
      link: new URL(`/writing/${essay.slug}/`, siteOrigin).href,
      pubDate: new Date(`${essay.datePublished}T00:00:00Z`),
    })),
  });
}
