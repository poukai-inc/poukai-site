/**
 * EngagementsLadder.tsx
 *
 * Site-side React component that renders the four engagement-shape rungs as
 * <FeatureCard variant="bordered"> molecules with their Lucide icon slots and
 * per-rung CTA <Link>s. Lives in the site repo because:
 *   - Lucide is a direct site dep (not re-exported by @poukai-inc/ui per masterplan 2A)
 *   - JSX in Astro frontmatter can't resolve dynamic component names
 *
 * Composition: meta/compositions/pages/engagements.md (Sections 4–7).
 *   - FeatureCard (NOT RoleCard — RoleCard has no CTA slot, no dual prose).
 *   - Single-column climb, escalating band gap (CSS, .engagements-ladder).
 *   - body = delivers <p> + deRisks <p> (deRisks muted via .rung-derisks).
 *   - footer = <Link variant="default"> per-rung mailto CTA (quiet, not Button).
 *   - icons escalate the commitment register: Search → FlaskConical → Hammer → RefreshCw.
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import { FeatureCard, Link } from "@poukai-inc/ui";
import { Search, FlaskConical, Hammer, RefreshCw } from "lucide-react";

type RungId = "discovery" | "pilot" | "build" | "retainer";

interface Rung {
  id: RungId;
  eyebrow: string;
  title: string;
  delivers: string;
  deRisks: string;
  cta: { label: string; href: string };
}

interface EngagementsLadderProps {
  rungs: Rung[];
}

/** Per-rung Lucide glyph (composition §5). size=24 per FeatureCard guidance. */
function RungIcon({ id }: { id: RungId }) {
  const iconProps = { size: 24, "aria-hidden": true as const };
  if (id === "discovery") return <Search {...iconProps} />;
  if (id === "pilot") return <FlaskConical {...iconProps} />;
  if (id === "build") return <Hammer {...iconProps} />;
  if (id === "retainer") return <RefreshCw {...iconProps} />;
  return null;
}

export function EngagementsLadder({ rungs }: EngagementsLadderProps) {
  return (
    <div className="engagements-ladder">
      {rungs.map((rung) => (
        <FeatureCard
          key={rung.id}
          id={rung.id}
          variant="bordered"
          icon={<RungIcon id={rung.id} />}
          eyebrow={rung.eyebrow}
          title={rung.title}
          titleAs="h2"
          body={
            <>
              <p>{rung.delivers}</p>
              <p className="rung-derisks">{rung.deRisks}</p>
            </>
          }
          footer={
            <Link href={rung.cta.href} variant="default">
              {rung.cta.label}
            </Link>
          }
        />
      ))}
    </div>
  );
}
