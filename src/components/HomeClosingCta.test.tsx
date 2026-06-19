/**
 * HomeClosingCta smoke test.
 *
 * Verifies the structural contract HomeClosingCta hands to the DS CTASection
 * organism. DS is stubbed so this tests only the site-repo wrapper.
 *
 * Governs: meta/compositions/pages/home.md §2 Section 5.
 * Copy source: src/content/home.json closingCta.* (R-076 HARD).
 * Contact-flow: FS-CF-1 (mailto: primary, booking secondary).
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomeClosingCta } from "./HomeClosingCta";

vi.mock("@poukai-inc/ui", () => ({
  CTASection: ({
    heading,
    body,
    actions,
    surface,
    align,
    headingAs: HeadingTag = "h2",
  }: {
    heading?: string;
    body?: React.ReactNode;
    actions?: React.ReactNode;
    surface?: string;
    align?: string;
    headingAs?: keyof JSX.IntrinsicElements;
  }) => (
    <section
      data-testid="cta-section"
      data-surface={surface}
      data-align={align}
    >
      <HeadingTag data-testid="cta-heading">{heading}</HeadingTag>
      {body && <p data-testid="cta-body">{body}</p>}
      <div data-testid="cta-actions">{actions}</div>
    </section>
  ),
  Button: ({
    children,
    asChild,
    variant,
  }: {
    children: React.ReactNode;
    asChild?: boolean;
    variant?: string;
  }) =>
    asChild ? (
      <span data-variant={variant ?? "default"}>{children}</span>
    ) : (
      <button data-variant={variant ?? "default"}>{children}</button>
    ),
}));

const mockProps = {
  heading: "If the hard part is shipping it, let's talk.",
  body: "Taking on a few engagements this quarter.",
  ctaLabel: "hello@pouk.ai",
  ctaHref: "mailto:hello@pouk.ai",
  bookingLabel: "Or grab a time →",
};

describe("HomeClosingCta", () => {
  it("renders without crashing", () => {
    render(<HomeClosingCta {...mockProps} />);
    expect(screen.getByTestId("cta-section")).toBeTruthy();
  });

  it("renders the approved h2 heading verbatim", () => {
    render(<HomeClosingCta {...mockProps} />);
    expect(screen.getByTestId("cta-heading").textContent).toBe(
      "If the hard part is shipping it, let's talk."
    );
  });

  it("renders the availability body line", () => {
    render(<HomeClosingCta {...mockProps} />);
    expect(screen.getByTestId("cta-body").textContent).toBe(
      "Taking on a few engagements this quarter."
    );
  });

  it("uses surface='recessed' — the page's one --surface-section band (OQ-1)", () => {
    render(<HomeClosingCta {...mockProps} />);
    expect(
      screen.getByTestId("cta-section").getAttribute("data-surface")
    ).toBe("recessed");
  });

  it("uses align='center' — DS end-of-page bilateral symmetry convention", () => {
    render(<HomeClosingCta {...mockProps} />);
    expect(screen.getByTestId("cta-section").getAttribute("data-align")).toBe(
      "center"
    );
  });

  it("renders exactly two CTAs: mailto: primary + booking secondary (FS-CF-1)", () => {
    render(<HomeClosingCta {...mockProps} />);
    const actions = screen.getByTestId("cta-actions");
    const anchors = actions.querySelectorAll("a");
    expect(anchors.length).toBe(2);
  });

  it("renders mailto: as the primary CTA (FS-CF-1 primary affordance)", () => {
    render(<HomeClosingCta {...mockProps} />);
    const actions = screen.getByTestId("cta-actions");
    const anchors = actions.querySelectorAll("a");
    expect(anchors[0].getAttribute("href")).toBe("mailto:hello@pouk.ai");
    expect(anchors[0].textContent).toBe("hello@pouk.ai");
  });

  it("renders cal.pouk.ai as the subordinate secondary CTA — plain <a href>, no embed needed", () => {
    render(<HomeClosingCta {...mockProps} />);
    const actions = screen.getByTestId("cta-actions");
    const anchors = actions.querySelectorAll("a");
    // FS-CF-2: single canonical BOOKING_URL constant.
    expect(anchors[1].getAttribute("href")).toBe("https://cal.pouk.ai");
    expect(anchors[1].textContent).toContain("grab a time");
  });

  it("renders without body when body prop is omitted", () => {
    const { heading, ctaLabel, ctaHref, bookingLabel } = mockProps;
    render(
      <HomeClosingCta
        heading={heading}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        bookingLabel={bookingLabel}
      />
    );
    expect(screen.queryByTestId("cta-body")).toBeNull();
  });

  it("contains no em-dash or en-dash characters (brand constraint)", () => {
    render(<HomeClosingCta {...mockProps} />);
    const text = screen.getByTestId("cta-section").textContent ?? "";
    expect(text).not.toContain("—"); // em-dash
    expect(text).not.toContain("–"); // en-dash
  });
});
