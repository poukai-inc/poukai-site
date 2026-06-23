/**
 * HomeDisciplines.test.tsx — smoke tests for Beat 4 (What we do, A3 asymmetric recast).
 *
 * DS stubbed via vi.mock("@poukai-inc/ui"). Coverage gate: ≥80% lines per R-058.
 *
 * A3 recast: 3-equal FeatureGrid → asymmetric Section + three FeatureCards.
 * FeatureGrid is no longer used; Section carries the <h2>.
 *
 * Key contracts tested:
 *   — Section heading h2 renders
 *   — All three discipline cards render
 *   — variant="default" (transparent) on every FeatureCard — anti-slop guardrail
 *   — titleAs="h3" on every FeatureCard — heading hierarchy R-026
 *   — icon slot OMITTED on every FeatureCard — anti-slop guardrail
 *   — Lead discipline gets .home-discipline--lead class
 *   — Lead discipline renders first in DOM (reading order = visual order)
 *   — Non-lead disciplines do NOT get .home-discipline--lead
 *   — Without lead prop: all items render in DOM order, no lead class
 *   — No mono ordinals rendered (A2 lever dropped — A3 §A3-2 Beat 4)
 *
 * Note on vi.mock hoisting: vi.mock factories are hoisted above variable
 * declarations, so any spy used inside the factory must be declared with
 * vi.hoisted() — the only safe way to capture calls from inside the factory.
 */

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HomeDisciplines } from "./HomeDisciplines";

// vi.hoisted runs before the module is loaded, making the spy available
// inside the vi.mock factory without the TDZ error.
const { mockFeatureCard } = vi.hoisted(() => {
  const mockFeatureCard = vi.fn(
    ({
      title,
      body,
    }: {
      title: string;
      body: string;
      variant?: string;
      titleAs?: string;
      icon?: unknown;
    }) => (
      <article>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    )
  );
  return { mockFeatureCard };
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
  FeatureCard: mockFeatureCard,
}));

const ITEMS = [
  { id: "builds", name: "Custom AI builds", description: "Full-stack product builds." },
  { id: "automations", name: "Automations", description: "Workflow automation end-to-end." },
  { id: "advisory", name: "Advisory", description: "Strategic technical advisory." },
] as const;

describe("HomeDisciplines", () => {
  it("renders section heading as h2", () => {
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    expect(screen.getByRole("heading", { level: 2, name: "What we do" })).toBeTruthy();
  });

  it("renders all three discipline cards", () => {
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    expect(screen.getByRole("heading", { level: 3, name: "Custom AI builds" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Automations" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Advisory" })).toBeTruthy();
  });

  it("renders each card body description", () => {
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    ITEMS.forEach((item) => {
      expect(screen.getByText(item.description)).toBeTruthy();
    });
  });

  it("passes variant=default (transparent) to every FeatureCard — anti-slop guardrail", () => {
    mockFeatureCard.mockClear();
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    mockFeatureCard.mock.calls.forEach((call) => {
      const props = call[0] as { variant?: string };
      expect(props.variant).toBe("default");
    });
  });

  it("passes titleAs=h3 to every FeatureCard — heading hierarchy R-026", () => {
    mockFeatureCard.mockClear();
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    mockFeatureCard.mock.calls.forEach((call) => {
      const props = call[0] as { titleAs?: string };
      expect(props.titleAs).toBe("h3");
    });
  });

  it("does not pass icon to FeatureCard — anti-slop guardrail", () => {
    mockFeatureCard.mockClear();
    render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    mockFeatureCard.mock.calls.forEach((call) => {
      const props = call[0] as { icon?: unknown };
      expect(props.icon).toBeUndefined();
    });
  });

  it("does not render mono ordinals (A2 lever dropped — A3 §A3-2 Beat 4)", () => {
    const { container } = render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    expect(container.querySelector(".home-discipline-ordinal")).toBeNull();
    // No "01 ·" ordinal text
    expect(container.textContent).not.toMatch(/0[123]\s*·/);
  });
});

describe("HomeDisciplines — asymmetric lead", () => {
  it("gives the lead discipline .home-discipline--lead class", () => {
    const { container } = render(
      <HomeDisciplines heading="What we do" items={ITEMS} lead="automations" />
    );
    const leadEl = container.querySelector(".home-discipline--lead");
    expect(leadEl).toBeTruthy();
    // The lead wrapper should contain the automations card
    expect(leadEl?.textContent).toContain("Automations");
  });

  it("renders the lead discipline first in DOM order", () => {
    const { container } = render(
      <HomeDisciplines heading="What we do" items={ITEMS} lead="automations" />
    );
    const disciplineWrappers = container.querySelectorAll(
      ".home-discipline--lead, .home-discipline"
    );
    // First wrapper must be the lead
    expect(disciplineWrappers[0]?.classList.contains("home-discipline--lead")).toBe(true);
    expect(disciplineWrappers[0]?.textContent).toContain("Automations");
  });

  it("non-lead disciplines do NOT get .home-discipline--lead class", () => {
    const { container } = render(
      <HomeDisciplines heading="What we do" items={ITEMS} lead="automations" />
    );
    // All .home-discipline (without --lead) wrappers
    const nonLeadWrappers = container.querySelectorAll(
      ".home-discipline:not(.home-discipline--lead)"
    );
    expect(nonLeadWrappers.length).toBe(2);
    nonLeadWrappers.forEach((el) => {
      expect(el.classList.contains("home-discipline--lead")).toBe(false);
    });
  });

  it("renders all three cards even with a lead specified", () => {
    render(<HomeDisciplines heading="What we do" items={ITEMS} lead="automations" />);
    expect(screen.getByRole("heading", { level: 3, name: "Custom AI builds" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Automations" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Advisory" })).toBeTruthy();
  });

  it("renders without lead prop: all items in DOM order, no .home-discipline--lead", () => {
    const { container } = render(<HomeDisciplines heading="What we do" items={ITEMS} />);
    expect(container.querySelector(".home-discipline--lead")).toBeNull();
    // All three items still render
    expect(screen.getByText("Full-stack product builds.")).toBeTruthy();
    expect(screen.getByText("Workflow automation end-to-end.")).toBeTruthy();
    expect(screen.getByText("Strategic technical advisory.")).toBeTruthy();
  });

  it("the .home-disciplines wrapper renders with lead-specific modifier class", () => {
    const { container } = render(
      <HomeDisciplines heading="What we do" items={ITEMS} lead="automations" />
    );
    const grid = container.querySelector(".home-disciplines");
    expect(grid?.classList.contains("home-disciplines--lead-automations")).toBe(true);
  });
});
