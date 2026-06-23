/**
 * HomeComparison.test.tsx — smoke tests for Beat 5 (Why us, A3 number-led recast).
 *
 * DS stubbed via vi.mock("@poukai-inc/ui"). Coverage gate: ≥80% lines per R-058.
 *
 * A3 recast: 4-column table → number-led exhibit.
 *   - <Stat size="lg"> for the display number (conditional on metric present)
 *   - <dl> of four <dt>+<dd> pairs (NOT a <table>)
 *   - stance lead-in text above the cut
 *   - /why-ai link below
 *
 * Key contracts tested:
 *   — Section heading h2 renders
 *   — When metric present: <Stat> renders with value, caption, source
 *   — When metric present: thin deficit bar SVG renders aria-hidden
 *   — When metric absent: no <Stat> or bar renders
 *   — <dl> renders with exactly 4 <dt>+<dd> pairs
 *   — stance lead-in text renders
 *   — /why-ai link renders with correct href + text
 *   — No <table> element rendered (A3 recast from table)
 *   — pouk.ai row gets NO featured/accent class (honesty guardrail)
 *   — Last row gets .home-comparison-row--last (sparse divider)
 *   — <Stat> value is NOT a heading element
 */

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HomeComparison } from "./HomeComparison";

// vi.hoisted so Stat spy is available in factory
const { mockStat } = vi.hoisted(() => {
  const mockStat = vi.fn(
    ({
      value,
      caption,
      source,
      size,
    }: {
      value: React.ReactNode;
      caption: React.ReactNode;
      source?: React.ReactNode;
      size?: string;
      align?: string;
    }) => (
      <div data-testid="stat" data-size={size}>
        <span className="stat-value">{value}</span>
        <span className="stat-caption">{caption}</span>
        {source && <span className="stat-source">{source}</span>}
      </div>
    )
  );
  return { mockStat };
});

vi.mock("@poukai-inc/ui", () => ({
  Section: ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title?: string;
    as?: string;
    size?: string;
  }) => (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  ),
  Text: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <p className={className}>{children}</p>,
  Stat: mockStat,
}));

const ROWS = [
  {
    label: "Build it yourself",
    line: "the scope is small and bounded and you have the time.",
  },
  {
    label: "Hire an agency",
    line: "the work is a known commodity and the value is in volume, not depth.",
  },
  {
    label: "Hire in-house",
    line: "AI is core to your product and the work is permanent.",
  },
  {
    label: "pouk.ai",
    line: "the integration is the hard part and it has to keep running after the demo.",
  },
];

const LINK = { text: "See when to hire us, and when not to →", href: "/why-ai" };
const STANCE = "Four honest options. pouk.ai is only one of them.";

const METRIC = {
  value: "95%",
  label: "of enterprise AI pilots deliver no measurable business impact. The gap is integration, not the model.",
  source: "MIT NANDA",
  reportTitle: "The GenAI Divide",
  year: 2025,
};

/* ── Base contracts ───────────────────────────────────────────────────────── */

describe("HomeComparison", () => {
  it("renders the section heading as h2", () => {
    render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(screen.getByRole("heading", { level: 2, name: "Why pouk.ai" })).toBeTruthy();
  });

  it("renders the stance lead-in text", () => {
    render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(screen.getByText(STANCE)).toBeTruthy();
  });

  it("renders a <dl> element (NOT a <table>)", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(container.querySelector("dl")).toBeTruthy();
    // Hard: no <table> in the A3 recast
    expect(container.querySelector("table")).toBeNull();
  });

  it("renders exactly 4 <dt> elements (alternative labels)", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    const dts = container.querySelectorAll("dt");
    expect(dts.length).toBe(4);
  });

  it("renders exactly 4 <dd> elements (honest lines)", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    const dds = container.querySelectorAll("dd");
    expect(dds.length).toBe(4);
  });

  it("renders all four alternative labels as <dt>", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    const dts = Array.from(container.querySelectorAll("dt")).map((el) => el.textContent);
    ROWS.forEach((row) => {
      expect(dts).toContain(row.label);
    });
  });

  it("renders all four honest lines as <dd>", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    const dds = Array.from(container.querySelectorAll("dd")).map((el) => el.textContent);
    ROWS.forEach((row) => {
      expect(dds).toContain(row.line);
    });
  });

  it("renders the /why-ai link with correct href and text", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    // T3: the trailing → is in an aria-hidden span so the accessible name
    // is the text without the arrow (the glyph is intentionally decorative).
    // Accessible name = LINK.text with the " →" suffix stripped.
    const accessibleText = LINK.text.replace(/\s*→$/, "");
    const link = screen.getByRole("link", { name: accessibleText });
    expect(link.getAttribute("href")).toBe("/why-ai");
    // Verify the arrow span is aria-hidden (T3 structural check).
    const arrowSpan = container.querySelector(".home-link-arrow");
    expect(arrowSpan?.getAttribute("aria-hidden")).toBe("true");
    expect(arrowSpan?.textContent).toBe("→");
  });

  it("applies .home-comparison-row--last to the final row only", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    const lastRows = container.querySelectorAll(".home-comparison-row--last");
    expect(lastRows.length).toBe(1);
    // The last row must contain the pouk.ai label
    expect(lastRows[0]?.textContent).toContain("pouk.ai");
  });

  it("does NOT apply featured/accent class to the pouk.ai row — honesty guardrail", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    // No featured classes anywhere
    expect(container.querySelectorAll(".featured, [data-featured]").length).toBe(0);
    // pouk.ai dt must not have any special accent class
    const dts = container.querySelectorAll("dt");
    const poukaiDt = Array.from(dts).find((el) => el.textContent === "pouk.ai");
    expect(poukaiDt?.className).not.toContain("accent");
    expect(poukaiDt?.className).not.toContain("featured");
  });
});

/* ── Display number — metric present ────────────────────────────────────────── */

describe("HomeComparison — display number (metric present)", () => {
  it("renders <Stat> when metric is provided", () => {
    render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    expect(screen.getByTestId("stat")).toBeTruthy();
  });

  it("passes size='lg' to <Stat>", () => {
    mockStat.mockClear();
    render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    const props = mockStat.mock.calls[0][0] as { size?: string };
    expect(props.size).toBe("lg");
  });

  it("passes the value '95%' to <Stat>", () => {
    render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    const valueEl = document.querySelector(".stat-value");
    expect(valueEl?.textContent).toBe("95%");
  });

  it("<Stat> value is NOT a heading element", () => {
    render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    const statEl = screen.getByTestId("stat");
    // The stat root is a <div>; no heading inside it
    expect(statEl.querySelector("h1, h2, h3, h4, h5, h6")).toBeNull();
  });

  it("passes the visible mono citation as source to <Stat>", () => {
    render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    const sourceEl = document.querySelector(".stat-source");
    expect(sourceEl?.textContent).toContain("MIT NANDA");
    expect(sourceEl?.textContent).toContain("The GenAI Divide");
    expect(sourceEl?.textContent).toContain("2025");
  });

  it("renders the thin deficit bar SVG with aria-hidden", () => {
    const { container } = render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    const svg = container.querySelector(".home-deficit__bar");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("renders the deficit block wrapper when metric is present", () => {
    const { container } = render(
      <HomeComparison
        heading="Why pouk.ai"
        metric={METRIC}
        rows={ROWS}
        stance={STANCE}
        link={LINK}
      />
    );
    expect(container.querySelector(".home-deficit-block")).toBeTruthy();
  });
});

/* ── Display number — metric absent ─────────────────────────────────────────── */

describe("HomeComparison — display number (metric absent)", () => {
  it("renders no <Stat> when metric is omitted", () => {
    render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(document.querySelector("[data-testid='stat']")).toBeNull();
  });

  it("renders no deficit block when metric is omitted", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(container.querySelector(".home-deficit-block")).toBeNull();
  });

  it("still renders the <dl> cut when metric is absent", () => {
    const { container } = render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    expect(container.querySelector("dl")).toBeTruthy();
    expect(container.querySelectorAll("dt").length).toBe(4);
  });

  it("still renders the /why-ai link when metric is absent", () => {
    render(
      <HomeComparison heading="Why pouk.ai" rows={ROWS} stance={STANCE} link={LINK} />
    );
    // T3: accessible name excludes the aria-hidden → span (same as primary link test).
    const accessibleText = LINK.text.replace(/\s*→$/, "");
    expect(screen.getByRole("link", { name: accessibleText })).toBeTruthy();
  });
});
