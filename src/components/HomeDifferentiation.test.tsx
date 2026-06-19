/**
 * HomeDifferentiation smoke test.
 *
 * Verifies the structural contract HomeDifferentiation hands to the DS Section
 * molecule. DS is stubbed so this tests only the site-repo wrapper.
 *
 * Governs: meta/compositions/pages/home.md §2 Section 4.
 * Copy source: src/content/home.json differentiation.* (R-076 HARD).
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomeDifferentiation } from "./HomeDifferentiation";

vi.mock("@poukai-inc/ui", () => ({
  Section: ({
    as: _as,
    size: _size,
    title,
    children,
  }: {
    as?: string;
    size?: string;
    title?: React.ReactNode;
    children?: React.ReactNode;
  }) => (
    <section data-testid="section">
      <h2 data-testid="section-title">{title}</h2>
      <div data-testid="section-body">{children}</div>
    </section>
  ),
}));

const mockProps = {
  heading: "Why pouk.ai, specifically",
  body: "You can build this yourself, hire a generic agency, or staff an in-house team. Each is the right call sometimes. pouk.ai earns its place when the hard part is wiring the work into the systems you already run, and keeping it running after the demo.",
  linkText: "See when to hire us, and when not to →",
  linkHref: "/why-ai",
};

describe("HomeDifferentiation", () => {
  it("renders without crashing", () => {
    render(<HomeDifferentiation {...mockProps} />);
    expect(screen.getByTestId("section")).toBeTruthy();
  });

  it("renders the approved h2 heading verbatim", () => {
    render(<HomeDifferentiation {...mockProps} />);
    expect(screen.getByTestId("section-title").textContent).toBe(
      "Why pouk.ai, specifically"
    );
  });

  it("renders the body prose", () => {
    render(<HomeDifferentiation {...mockProps} />);
    const body = screen.getByTestId("section-body");
    expect(body.textContent).toContain("pouk.ai earns its place");
    expect(body.textContent).toContain("keeping it running after the demo");
  });

  it("renders exactly one inline link to /why-ai", () => {
    render(<HomeDifferentiation {...mockProps} />);
    const body = screen.getByTestId("section-body");
    const anchors = body.querySelectorAll("a");
    expect(anchors.length).toBe(1);
    expect(anchors[0].getAttribute("href")).toBe("/why-ai");
  });

  it("uses the &rarr; entity in the link text (not a Lucide icon)", () => {
    render(<HomeDifferentiation {...mockProps} />);
    const body = screen.getByTestId("section-body");
    const anchor = body.querySelector("a");
    // The → arrow must be a typographic entity inheriting prose metrics,
    // not an SVG icon (R12 / D-11 editorial register).
    expect(anchor?.textContent).toContain("→");
  });

  it("contains no em-dash or en-dash characters (brand constraint)", () => {
    render(<HomeDifferentiation {...mockProps} />);
    const text = screen.getByTestId("section").textContent ?? "";
    expect(text).not.toContain("—"); // em-dash
    expect(text).not.toContain("–"); // en-dash
  });
});
