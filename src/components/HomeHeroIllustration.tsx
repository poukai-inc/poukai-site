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

const STYLES = `
  .wb { font-family: var(--font-mono); }
  .wb .grid { stroke: var(--hairline); }
  .wb .axis { stroke: var(--hairline); }
  .wb .node-ring { fill: var(--bg); stroke: currentColor; }
  .wb .node-ring--accent { stroke: var(--accent); }
  .wb .node-dot { fill: currentColor; }
  .wb .node-dot--accent { fill: var(--accent); }
  .wb .trace { fill: none; stroke: var(--fg-muted); }
  .wb .leader { stroke: var(--fg-muted); opacity: 0.55; }
  @media (prefers-reduced-motion: no-preference) {
    .wb .pulse-halo {
      transform-origin: center; transform-box: fill-box;
      animation: wb-pulse 2.8s ease-in-out infinite;
    }
    @keyframes wb-pulse {
      0% { transform: scale(1); opacity: 0.55; }
      100% { transform: scale(2.6); opacity: 0; }
    }
    .wb .signal-pulse {
      stroke-dasharray: 6 200;
      stroke-dashoffset: 206;
      animation: wb-signal 4.2s linear infinite;
    }
    @keyframes wb-signal {
      from { stroke-dashoffset: 206; }
      to { stroke-dashoffset: -200; }
    }
  }
`;

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
    <svg viewBox="40 176 720 250" className="wb" aria-hidden="true" focusable="false">
      <defs>
        <style>{STYLES}</style>
      </defs>

      {/* hairline draftsman grid */}
      <g className="grid" strokeWidth="0.6">
        {GRID_VX.map((x) => (
          <line key={`vx${x}`} x1={x} y1="56" x2={x} y2="464" strokeDasharray="1 6" />
        ))}
        {GRID_HY.map((y) => (
          <line key={`hy${y}`} x1="56" y1={y} x2="744" y2={y} strokeDasharray="1 6" />
        ))}
      </g>

      {/* central axis */}
      <line x1={AX} y1="48" x2={AX} y2="476" className="axis" strokeWidth="0.6" strokeDasharray="1 4" />

      {/* system — trace, signal pulse, leaders, nodes, labels */}
      <g>
        <path d={TRACE_PATH} className="trace" strokeWidth="1.6" />
        <path
          d={TRACE_PATH}
          className="signal-pulse"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {SYSTEM_NODES.map((n) => {
          const { lx, ly } = labelPos(n);
          return (
            <line
              key={`ldr-${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={lx}
              y2={ly + 4}
              className="leader"
              strokeWidth="0.6"
              strokeDasharray="2 3"
            />
          );
        })}

        {SYSTEM_NODES.map((n) => (
          <g key={`node-${n.id}`}>
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

        {SYSTEM_NODES.map((n) => {
          const { lx, ly, anchor } = labelPos(n);
          return (
            <g key={`lbl-${n.id}`}>
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

      {/* caption */}
      <text
        x={AX}
        y="396"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="13"
        fill="var(--fg-muted)"
        letterSpacing="0.18em"
        style={{ textTransform: "uppercase" }}
      >
        pipeline · 5 stages
      </text>
    </svg>
  );
}
