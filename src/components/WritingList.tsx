/**
 * WritingList.tsx
 *
 * Site-side React component that renders the reverse-chronological essay index
 * as a vertical stack of <LinkCard variant="quiet"> entries. Lives in the site
 * repo (not the DS) because it composes DS primitives with a per-essay <Time>
 * footer — and because passing component-valued JSX (the <Time> footer node)
 * through a .astro `.map()` makes esbuild parse the whole template as TS and
 * fail (the same React-boundary reason RolesGrid / ShellWrapper exist).
 *
 * Each entry: title (h3) + claim one-liner (body) + muted date (footer <Time>).
 * Whole card is the click target to /writing/[slug]. No per-entry icon — an
 * icon per essay would push the index toward a content-marketing grid
 * (composition §5). Rendered as static HTML at build time — no hydration.
 */

import { LinkCard, Time } from "@poukai-inc/ui";

interface EssayListItem {
  slug: string;
  title: string;
  claim: string;
  datePublished: string;
}

interface WritingListProps {
  essays: EssayListItem[];
}

export function WritingList({ essays }: WritingListProps) {
  return (
    <div className="writing-list">
      {essays.map((essay) => (
        <LinkCard
          key={essay.slug}
          variant="quiet"
          href={`/writing/${essay.slug}`}
          title={essay.title}
          titleAs="h3"
          body={essay.claim}
          footer={<Time dateTime={essay.datePublished} format="long" />}
        />
      ))}
    </div>
  );
}
