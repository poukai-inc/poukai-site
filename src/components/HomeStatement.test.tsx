/**
 * HomeStatement smoke test.
 *
 * Verifies the structural contract HomeStatement hands to the DS Statement
 * molecule. DS is stubbed so this tests only the site-repo wrapper.
 *
 * Governs: meta/compositions/pages/home.md §2 Section 3.
 * Copy source: src/content/home.json statement.text (R-076 HARD).
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomeStatement } from "./HomeStatement";

vi.mock("@poukai-inc/ui", () => ({
  Statement: ({
    statement,
    hairline,
  }: {
    statement?: React.ReactNode;
    hairline?: boolean;
  }) => (
    <div data-testid="statement" data-hairline={String(hairline)}>
      {statement}
    </div>
  ),
}));

const STATEMENT_TEXT =
  "Most teams can build now. Few can ship it and keep it running.";

describe("HomeStatement", () => {
  it("renders without crashing", () => {
    render(<HomeStatement text={STATEMENT_TEXT} />);
    expect(screen.getByTestId("statement")).toBeTruthy();
  });

  it("renders the approved conviction copy verbatim", () => {
    render(<HomeStatement text={STATEMENT_TEXT} />);
    expect(screen.getByTestId("statement").textContent).toBe(STATEMENT_TEXT);
  });

  it("passes hairline={false} — no top rule (bare-canvas turn, not a banner)", () => {
    render(<HomeStatement text={STATEMENT_TEXT} />);
    // The composition mandates hairline=false so the Statement reads as a quiet
    // turn, not a section divider. DS uses this to suppress the decorative top rule.
    expect(screen.getByTestId("statement").getAttribute("data-hairline")).toBe(
      "false"
    );
  });

  it("contains no em-dash or en-dash characters (brand constraint)", () => {
    render(<HomeStatement text={STATEMENT_TEXT} />);
    const text = screen.getByTestId("statement").textContent ?? "";
    expect(text).not.toContain("—"); // em-dash
    expect(text).not.toContain("–"); // en-dash
  });
});
