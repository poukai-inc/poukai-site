/**
 * HomeHeroIllustration.tsx
 *
 * "The Signal" — the home Hero's right-column illustration.
 *
 * The Pouākai abstracted as an agentic pipeline: five waypoints
 * (observe → model → plan → act → ship) on a hairline draftsman trace,
 * with an accent signal pulse travelling the curve and a soft halo on the
 * final SHIP node. A technical glyph that reads as a system diagram, not a
 * depicted bird.
 *
 * Ported from the approved standalone artifact (WorkingBird mode="system").
 * Inline SVG + CSS-only animation — no canvas, no rAF loop, no hydration.
 * Rendered to static HTML at build time; the ambient motion runs entirely in
 * CSS and is disabled under prefers-reduced-motion (D-25: client JS permitted,
 * but this asset needs none; a11y + reduced-motion remain binding).
 *
 * Decorative: the SVG is aria-hidden — the OBSERVE→SHIP labels restate the
 * pipeline the hero copy already carries, so they add no semantic content.
 * Depends on global DS tokens (--accent, --accent-glow, --fg, --fg-muted,
 * --hairline, --bg, --font-mono).
 *
 * Placement: passed to the DS <Hero illustration> slot. The DS renders it in
 * the right column above 720px and hides the column below 720px (single-column
 * fallback owned by the DS Hero).
 *
 * THE SIGNATURE (§A3-4.2) — "The Signal" self-constructs on first paint.
 *
 * Construction CSS lives entirely in site.css §"The Signal" inside the
 * existing @media (prefers-reduced-motion: no-preference) block. This file
 * only adds the construction class names to each sub-element so CSS can
 * address them individually:
 *
 *   .wb-grid-axis     — grid <g> + axis <line>   → fade 0→1 (0–200ms)
 *   .wb-trace         — trace <path>              → stroke-dashoffset L→0 (160→1040ms)
 *   .wb-node-N        — each node <g> (0-indexed) → opacity + micro-scale, per-node delay
 *   .wb-label-N       — each label <g>            → opacity, per-label delay
 *   .wb-leader-N      — each leader <line>        → opacity, per-leader delay
 *   .wb-caption       — caption <text>            → opacity, ~1120ms
 *
 * The ambient signal-pulse and pulse-halo already live in the
 * prefers-reduced-motion: no-preference block. Their animation-delay is set to
 * ~1200ms in site.css so they begin AFTER the construction completes.
 *
 * Reduced-motion / no-JS: the construction CSS only applies inside the media
 * query. Outside it the resting state — the finished diagram — renders
 * immediately. The trace's stroke-dashoffset start-state (L) is only set inside
 * the media query, never as a base style. A no-JS or reduced-motion visitor
 * always sees the completed diagram.
 *
 * Double-arrival resolution (§A3-4.2 §4 / §5 S1):
 * The DS Hero entrance="stagger" fades the illustration wrapper in at ~600ms
 * (index 4 of the stagger ladder). To prevent a whole-glyph fade concurrent
 * with the construction, the .home-hero-split__aside wrapper is set to
 * opacity: 1 from the start (the DS stagger slot no-ops on this element)
 * via the .wb-visible-immediately class. The construction then owns each
 * sub-element's opacity individually — one arrival, not a fade-then-draw.
 * See site.css §"The Signal" for the override that no-ops the DS slot fade.
 */

const AX = 400; // vertical axis

interface SystemNode {
  id: string;
  label: string;
  num: string;
  x: number;
  y: number;
  side: -1 | 0 | 1;
  ly: number;
  accent?: boolean;
}

// Five waypoints along the bird's anatomy, each an agentic-system stage.
const SYSTEM_NODES: readonly SystemNode[] = [
  { id: "observe", label: "OBSERVE", num: "01", x: 224, y: 256, side: -1, ly: -38 },
  { id: "model", label: "MODEL", num: "02", x: 320, y: 232, side: -1, ly: -38 },
  { id: "plan", label: "PLAN", num: "03", x: 400, y: 296, side: 0, ly: 56 },
  { id: "act", label: "ACT", num: "04", x: 480, y: 232, side: 1, ly: -38 },
  { id: "ship", label: "SHIP", num: "05", x: 576, y: 256, side: 1, ly: -38, accent: true },
];

const N = SYSTEM_NODES;

// System trace — one smooth curve through the five nodes.
const TRACE_PATH = `
  M ${N[0].x} ${N[0].y}
  C ${N[0].x + 40} ${N[0].y - 10}, ${N[1].x - 40} ${N[1].y + 10}, ${N[1].x} ${N[1].y}
  C ${N[1].x + 40} ${N[1].y + 10}, ${N[2].x - 40} ${N[2].y - 10}, ${N[2].x} ${N[2].y}
  C ${N[2].x + 40} ${N[2].y - 10}, ${N[3].x - 40} ${N[3].y + 10}, ${N[3].x} ${N[3].y}
  C ${N[3].x + 40} ${N[3].y + 10}, ${N[4].x - 40} ${N[4].y - 10}, ${N[4].x} ${N[4].y}
`;

const GRID_VX = [80, 200, 320, 400, 480, 600, 720];
const GRID_HY = [120, 220, 320, 420];

// The `.wb` styles + keyframes live in src/styles/site.css, NOT inline here.
// An inline <style> inside the SVG is blocked by the production CSP
// (style-src 'self'; see csp-compat-check.mjs / CR-4) — it would fail the gate
// AND strip the animation in production. Keeping them in the first-party
// stylesheet keeps the diagram styled and animated under 'self'.

function labelPos(n: SystemNode) {
  const lx = n.side === 0 ? AX : n.x + n.side * 60;
  const ly = n.y + n.ly;
  const anchor: "middle" | "start" | "end" =
    n.side === 0 ? "middle" : n.side < 0 ? "end" : "start";
  return { lx, ly, anchor };
}

export function HomeHeroIllustration() {
  return (
    // viewBox cropped to the pipeline band, not the full source canvas
    // ("0 0 800 520"). The art clustered its nodes/labels in y194..365 but
    // stranded the caption at y500, leaving a dead lower third that read as
    // wasted space. With the caption pulled up to y396 (below) the live content
    // is y176..420, so this tight viewBox makes the diagram a dense band with
    // no internal dead space.
    //
    // wb-visible-immediately: overrides the DS Hero stagger slot (index 4,
    // ~600ms whole-glyph fade) so the glyph wrapper stays at opacity:1 from
    // paint. The construction owns each sub-element's opacity instead.
    // Without this, the DS would fade the whole SVG in as one block concurrently
    // with the construction, producing a double-arrival (fade-then-draw).
    <svg viewBox="40 176 720 250" className="wb wb-visible-immediately" aria-hidden="true" focusable="false">

      {/* hairline draftsman grid + axis — resolve first (fade 0→1, 0–200ms).
          Both grouped under .wb-grid-axis so CSS can address them as one unit. */}
      <g className="grid wb-grid-axis" strokeWidth="0.6">
        {GRID_VX.map((x) => (
          <line key={`vx${x}`} x1={x} y1="56" x2={x} y2="464" strokeDasharray="1 6" />
        ))}
        {GRID_HY.map((y) => (
          <line key={`hy${y}`} x1="56" y1={y} x2="744" y2={y} strokeDasharray="1 6" />
        ))}
      </g>

      {/* central axis — same fade group as the grid */}
      <line x1={AX} y1="48" x2={AX} y2="476" className="axis wb-grid-axis" strokeWidth="0.6" strokeDasharray="1 4" />

      {/* system — trace, signal pulse, leaders, nodes, labels */}
      <g>
        {/* THE ONE CONFIDENT LINE — draws stroke-on OBSERVE→SHIP.
            stroke-dasharray/offset set in site.css inside no-preference block only.
            Resting state (outside media query): fully drawn (no dash offset). */}
        <path d={TRACE_PATH} className="trace wb-trace" strokeWidth="1.6" />

        {/* Ambient signal pulse — suppressed (opacity:0, animation paused) during
            the construction build; animation-delay:~1200ms releases it after. */}
        <path
          d={TRACE_PATH}
          className="signal-pulse"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Leaders — fade in paired with each node (+80ms after node lands).
            wb-leader-N class drives per-leader animation-delay in site.css. */}
        {SYSTEM_NODES.map((n, i) => {
          const { lx, ly } = labelPos(n);
          return (
            <line
              key={`ldr-${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={lx}
              y2={ly + 4}
              className={`leader wb-leader-${i}`}
              strokeWidth="0.6"
              strokeDasharray="2 3"
            />
          );
        })}

        {/* Nodes — set down in sequence as the trace reaches each.
            opacity 0→1 + micro-scale 0.6→1 (no overshoot).
            wb-node-N class drives per-node animation-delay in site.css.
            transform-box:fill-box + transform-origin:center ensures the scale
            is centered on the node, not the SVG root. */}
        {SYSTEM_NODES.map((n, i) => (
          <g key={`node-${n.id}`} className={`wb-node-${i}`}>
            {n.accent && (
              <circle cx={n.x} cy={n.y} r="7" fill="var(--accent-glow)" className="pulse-halo" />
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r="5.6"
              className={n.accent ? "node-ring node-ring--accent" : "node-ring"}
              strokeWidth="1.9"
            />
            <circle cx={n.x} cy={n.y} r="2.6" className={n.accent ? "node-dot--accent" : "node-dot"} />
          </g>
        ))}

        {/* Labels — fade in just after each node lands (+80ms).
            wb-label-N class drives per-label animation-delay in site.css.
            SHIP label (i=4) carries --accent fill (the resting fill, revealed
            by the build — not a motion-introduced color). */}
        {SYSTEM_NODES.map((n, i) => {
          const { lx, ly, anchor } = labelPos(n);
          return (
            <g key={`lbl-${n.id}`} className={`wb-label-${i}`}>
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                fontFamily="var(--font-mono)"
                fontSize="14"
                fill={n.accent ? "var(--accent)" : "var(--fg-muted)"}
                letterSpacing="0.12em"
              >
                {n.num}
              </text>
              <text
                x={lx}
                y={ly + 18}
                textAnchor={anchor}
                fontFamily="var(--font-mono)"
                fontSize="16"
                fontWeight="500"
                fill={n.accent ? "var(--accent)" : "var(--fg)"}
                letterSpacing="0.06em"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </g>

      {/* caption — resolves last (~1120ms), after SHIP label registers. */}
      <text
        x={AX}
        y="396"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="13"
        fill="var(--fg-muted)"
        letterSpacing="0.18em"
        className="wb-caption"
        style={{ textTransform: "uppercase" }}
      >
        pipeline · 5 stages
      </text>
    </svg>
  );
}
