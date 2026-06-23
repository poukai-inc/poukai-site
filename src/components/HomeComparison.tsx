/**
 * HomeComparison.tsx
 *
 * Beat 5 — Why us (second <h2>). THE NUMBER-LED EXHIBIT (A3 recast).
 *
 * Recast from the A2 4-column hairline-per-row table to a NUMBER-LED EXHIBIT
 * (spec §4.5 / A3 §A3-2 Beat 5 / composition §A3-2 Beat 5):
 *
 * 1. DISPLAY NUMBER (95%) — the section's eye-first hero above the cut.
 *    Rendered via DS `<Stat size="lg">` at --fs-stat-large (56–96px).
 *    The `<Stat>` source prop carries the visible mono citation.
 *    One thin currentColor deficit bar retained small beneath (B.1 vocabulary,
 *    static, no count-up, no scroll-fill). Conditional on metric present+complete.
 *    NOT a heading (hierarchy AC).
 *
 * 2. 2-AXIS HONEST CUT — four label+line pairs, NOT a <table>.
 *    Structure: <dl> of four <dt>(label)+<dd>(line) pairs, stance lead-in above,
 *    sparse dividers (one --hairline rule above the pouk.ai row to mark "and here's
 *    us"), rhythm from --space-6/--space-8. Body-register type, NOT shrunk to
 *    table-cell density. Reads top-to-bottom as one argument.
 *
 * Honesty guardrail (spec §4.5 / §3 — binding):
 *   - NO featured pouk.ai row styling (no accent, no bold-only-on-us, no box).
 *   - pouk.ai is last and equal-weight. Its self-conceding line is the candor.
 *   - pouk.ai wins no row outright; the cut concedes a competitor in three positions.
 *
 * DS primitives:
 *   - `<Stat size="lg">` — display numeral at --fs-stat-large + source (mono citation).
 *   - `<Section as="section" title="Why pouk.ai">` — carries <h2> #2.
 *   - `<Text>` — for the stance lead-in and the /why-ai link.
 *   Recessed band (#1 of 2) applied as site-side wrapper (.home-whyus-band) in index.astro.
 *
 * Heading hierarchy (R-026): Section title = <h2> #2.
 *   The display number is a <Stat> figure, NOT a heading.
 *   The 2-axis labels are <dt> elements, NOT headings.
 *
 * Motion: scroll-reveal applied at page level via <ScrollReveal client:visible>.
 *   The WHOLE exhibit (number + cut) reveals as ONE unit (no per-row reveal).
 *   No count-up on 95% — renders final on first paint.
 *   Deficit bar: static for v1 (no CSS fill animation — B.1 spec default static).
 *
 * R-076 HARD: all copy sourced from home.json comparison block (passed as props).
 * No hydration directive — static HTML at build time.
 */

import { Section, Text, Stat } from "@poukai-inc/ui";

interface ComparisonRow {
  /** Alternative label, e.g. "Build it yourself". */
  label: string;
  /** The single honest line for this alternative. */
  line: string;
}

interface ComparisonMetric {
  /** The figure as it renders, e.g. "95%". Rendered at final value on first paint. */
  value: string;
  /** What the figure measures — one line label. */
  label: string;
  /** Named, attributable publisher, e.g. "MIT NANDA". */
  source: string;
  /** Report/publication title, e.g. "The GenAI Divide". */
  reportTitle: string;
  /** Publication year. */
  year: string | number;
}

interface HomeComparisonProps {
  /** The section <h2> heading text. */
  heading: string;
  /**
   * Optional cited deficit number at the head of the exhibit (A3 §A3-2 Beat 5).
   * When present and complete, renders <Stat size="lg"> at --fs-stat-large +
   * the thin deficit bar + visible mono citation.
   * When absent, the exhibit is the 2-axis cut alone (no third state).
   */
  metric?: ComparisonMetric;
  /**
   * The 2-axis honest cut — exactly 4 label+line pairs.
   * Axis 1 (label): Build it yourself / Hire an agency / Hire in-house / pouk.ai.
   * Axis 2 (line): the single honest "right call when..." line.
   * pouk.ai is last and self-conceding (honesty guardrail).
   */
  rows: ComparisonRow[];
  /**
   * One-line stance lead-in above the four pairs.
   * e.g. "Four honest options. pouk.ai is only one of them."
   */
  stance: string;
  /** Inline link to /why-ai at the end of the section. */
  link: { text: string; href: string };
}

export function HomeComparison({
  heading,
  metric,
  rows,
  stance,
  link,
}: HomeComparisonProps) {
  return (
    <Section
      as="section"
      size="default"
      title={heading}
      /* No eyebrow, no lede — the deficit number or the stance lead-in is the opener. */
    >
      {/* ── DISPLAY NUMBER BLOCK ──────────────────────────────────────────────
          Conditional on metric present and complete (all-or-nothing, spec §4.5).
          Renders ONLY when all five fields are non-empty.
          If metric is absent, nothing renders here and the cut stands alone. */}
      {metric && metric.value && metric.label && metric.source && metric.year && (
        <div className="home-deficit-block">
          {/* DS <Stat size="lg"> — display numeral at --fs-stat-large (56–96px).
              value: the figure rendered at display scale (NOT a heading).
              caption: what the figure measures (the label line).
              source: the visible mono citation — "MIT NANDA, The GenAI Divide, 2025".
              Stat renders source in --fs-micro/--font-mono/--fg-muted register natively. */}
          <Stat
            size="lg"
            value={metric.value}
            caption={metric.label}
            source={`${metric.source}, ${metric.reportTitle}, ${metric.year}`}
          />

          {/* Thin currentColor deficit bar — B.1 vocabulary. Secondary to the number.
              aria-hidden: <Stat> above carries all accessible meaning.
              STATIC: no CSS fill animation, no count-up (spec §8 / composition §A3-4).
              One thin horizontal bar; the vast inked field against the thin empty
              sliver is the visceral reinforcement of the display number. */}
          <svg
            className="home-deficit__bar"
            aria-hidden="true"
            viewBox="0 0 400 8"
            preserveAspectRatio="none"
            role="presentation"
          >
            {/* Track outline — full width, thin */}
            <rect
              x="0"
              y="0"
              width="400"
              height="8"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Inked segment — 95% of the track width.
                T1 — deficit-bar scroll-draw: .home-deficit__bar-ink is targeted
                by CSS to animate scaleX 0→1 when .home-whyus-band.is-visible.
                transform-origin: left center so the fill draws left-to-right.
                Resting state (no .reveal-on): scaleX(1) — full bar always visible
                in no-JS / reduced-motion paths. */}
            <rect
              className="home-deficit__bar-ink"
              x="0"
              y="0"
              width="380"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </div>
      )}

      {/* ── STANCE LEAD-IN ────────────────────────────────────────────────────
          One-line opener above the four pairs. Sets candor before the first row. */}
      <Text size="body" className="home-comparison-stance">
        {stance}
      </Text>

      {/* ── 2-AXIS HONEST CUT — four <dt>+<dd> pairs ─────────────────────────
          NOT a <table> (A3 recast from A2 table — spec §4.5).
          Structure: <dl> so <dt> = alternative label, <dd> = honest line.
          pouk.ai is last. Sparse dividers: one --hairline rule above the final
          (pouk.ai) row only via .home-comparison-row--last.
          Rhythm from --space-6/--space-8 (site.css), no hairline per row.
          pouk.ai row gets NO accent/box/bold-only styling — honesty guardrail. */}
      <dl className="home-comparison-cut">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`home-comparison-row${index === rows.length - 1 ? " home-comparison-row--last" : ""}`}
          >
            <dt className="home-comparison-row__label">{row.label}</dt>
            <dd className="home-comparison-row__line">{row.line}</dd>
          </div>
        ))}
      </dl>

      {/* ── /WHY-AI LINK ──────────────────────────────────────────────────────
          Second /why-ai appearance (first is the Hero D-11 hand-off).
          Distinct anchor text; a compression of /why-ai's vs-alternatives.
          T3 — link-arrow nudge: trailing → wrapped in aria-hidden span so
          only the glyph translates on hover/focus-visible; text + underline
          untouched. Same pattern as the Hero lede hand-off link. */}
      <Text size="body" className="home-comparison-link">
        <a href={link.href} className="home-editorial-link">
          {link.text.replace(/\s*→$/, "")}
          {" "}
          <span className="home-link-arrow" aria-hidden="true">→</span>
        </a>
      </Text>
    </Section>
  );
}
