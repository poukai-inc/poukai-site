/**
 * AboutBand.tsx
 *
 * React wrapper that assembles the /about page's portrait band. All copy is
 * passed in via props from about.astro (sourced from src/content/about.json,
 * validated by src/content/_schemas/about.ts). R-076 HARD: no hardcoded copy
 * in component templates.
 *
 * Composition recipe: meta/compositions/pages/about.md §2 Unit 2.
 *
 * Rendered as static HTML at build time — static by design (no hydration needed here).
 * [R-079 zero-JS contract superseded by D-25, 2026-06-16; client JS now permitted,
 * static is the chosen default. a11y + prefers-reduced-motion remain binding.]
 */

import { Hero, Portrait, type AspectRatio } from "@poukai-inc/ui";

interface AboutBandProps {
  portraitSrc: string;
  portraitAlt: string;
  portraitAspect: AspectRatio;
  portraitWidth: number;
  portraitCaption: string;
  displayStatement: string;
  supportingLine: string;
}

export function AboutBand({
  portraitSrc,
  portraitAlt,
  portraitAspect,
  portraitWidth,
  portraitCaption,
  displayStatement,
  supportingLine,
}: AboutBandProps) {
  return (
    <div className="about-band">
      <Hero
        bleed="full"
        entrance="stagger"
        illustration={
          <Portrait
            src={portraitSrc}
            alt={portraitAlt}
            aspect={portraitAspect}
            width={portraitWidth}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 720px) 100vw, 45vw"
          />
        }
        title={<>{displayStatement}</>}
        lede={<>{supportingLine}</>}
      />
      <p className="about-band__caption">{portraitCaption}</p>
    </div>
  );
}
