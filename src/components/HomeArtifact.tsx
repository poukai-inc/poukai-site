/**
 * HomeArtifact.tsx
 *
 * Beat 3 — Artifact exhibit (A3 6-beat arc). THE ANCHOR · NEW.
 *
 * ⚠ PLACEHOLDER NOTE (AA-1 / spec §4.2 / composition §A3-0 AA-1):
 *   The `code` string in home.json currently ships content Candidate A
 *   (the retry-with-backoff TypeScript wrapper) as a NON-FINAL PLACEHOLDER
 *   for Arian's preview/evaluation of this beat's PRESENTATION. The exhibit's
 *   surface, type, framing, scale, and a11y are real regardless of the final
 *   string. The code string itself is provisional pending Arian's confirmation
 *   of a genuinely real, publishable fragment (spec §7 / §A3-7 OQ-A1).
 *   NO artifact beat reaches production Built on an unconfirmed fragment.
 *   When Arian confirms a real fragment, update home.json artifact.code only.
 *
 * Composition (spec §4.2 / §A3-2 Beat 3):
 *   - DS `<CodeBlock>` molecule — semantic <figure> + scrollable <pre><code>
 *     + optional <figcaption>. Ships NO syntax highlighting → monochrome by
 *     default. On --surface recessed-inline tier (categorically not a band).
 *   - `hideCopy` — decorative exhibit, not a copy utility (AA-3). The header
 *     bar then renders only the language label (quiet exhibit tag, not widget).
 *   - `aria-label` on the CodeBlock <figure> root for accessible context.
 *   - `.home-artifact` wrapper: --surface bg, 1px --hairline border,
 *     --radius-3, max-width ~44rem, margin-inline:auto — inset OBJECT,
 *     NOT full-bleed, NOT a third --surface-section band.
 *   - Renders only if the `artifact` block is present and complete (all-or-nothing).
 *     If absent, the beat does not render — no fake fallback, no placeholder UI.
 *   - Static — NO typing animation, NO cursor blink, NO scroll-draw, NO line
 *     reveal. Real code presented, not performed.
 *
 * Heading hierarchy (R-026, spec §4.1):
 *   - Emits NO heading element. The caption is a DS <figcaption>, not an <h2>.
 *     The page keeps exactly 3 <h2>s (What we do, Why us, Convert).
 *
 * DS used: `CodeBlock` from @poukai-inc/ui@2.17.0 (confirmed in dist/index.d.ts:101
 *   and dist/molecules/CodeBlock/CodeBlock.d.ts — semantic <figure>/scrollable
 *   <pre><code>/<figcaption>, no syntax highlighting, monochrome by default).
 *
 * Motion: scroll-reveal applied at page level via <ScrollReveal client:visible>.
 *   This component is static. Reveal is one-shot, reduced-motion collapses to
 *   immediately visible (ScrollReveal gate).
 *
 * R-076 HARD: all copy sourced from home.json artifact block (passed as props).
 * No hydration directive — static HTML at build time.
 */

import { CodeBlock } from "@poukai-inc/ui";

interface HomeArtifactProps {
  /** Language identifier, e.g. "typescript". Used as the header-bar label. */
  language: string;
  /** The code fragment verbatim. Real selectable <pre><code> text, not an image. */
  code: string;
  /**
   * Optional mono-register caption rendered as DS <figcaption>.
   * File path, attribution, or one-line frame. Must NOT be an <h2>.
   */
  caption?: string;
  /**
   * Accessible name for the <figure> root — screen-reader context for the exhibit.
   * e.g. "Example fragment: a retry wrapper around a flaky upstream integration"
   */
  label: string;
}

export function HomeArtifact({ language, code, caption, label }: HomeArtifactProps) {
  return (
    /*
     * .home-artifact — inset OBJECT on --surface (NOT a --surface-section band).
     * Width-capped and centered so --bg canvas shows on both sides — the visual
     * signature of "object," not "band." Cross-beat spacing (--space-16 above
     * and below) is owned by index.astro's wrapper div.
     * CSS lives in src/styles/site.css under "Home Artifact".
     */
    <div className="home-artifact">
      <CodeBlock
        language={language}
        hideCopy
        caption={caption}
        aria-label={label}
      >
        {code}
      </CodeBlock>
    </div>
  );
}
