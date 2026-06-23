/**
 * HomeArtifact.test.tsx — smoke tests for Beat 3 (Artifact exhibit, A3).
 *
 * DS stubbed via vi.mock("@poukai-inc/ui"). Coverage gate: ≥80% lines per R-058.
 *
 * Key contracts tested:
 *   — .home-artifact wrapper renders
 *   — CodeBlock receives the correct language, hideCopy, caption, aria-label props
 *   — The code string renders as real text inside <pre><code> (not an image)
 *   — caption renders as <figcaption> (not a heading element)
 *   — aria-label accessible name wires through to the <figure>
 *   — Component renders nothing incorrectly when given all four props
 *   — hideCopy is passed (copy button suppressed — AA-3)
 *
 * The CodeBlock stub renders a <figure> with a <pre><code> and optional
 * <figcaption>, mirroring the DS CodeBlock's semantic structure, so the
 * heading-hierarchy and selectable-text contracts can be verified.
 */

import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HomeArtifact } from "./HomeArtifact";

// vi.hoisted so the spy is available inside the factory.
const { mockCodeBlock } = vi.hoisted(() => {
  const mockCodeBlock = vi.fn(
    ({
      children,
      language,
      caption,
      hideCopy,
      ...rest
    }: {
      children: React.ReactNode;
      language?: string;
      caption?: React.ReactNode;
      hideCopy?: boolean;
      [key: string]: unknown;
    }) => (
      <figure aria-label={rest["aria-label"] as string | undefined}>
        {language && (
          <div className="code-block-header">
            <span className="code-block-language">{language}</span>
            {/* hideCopy=true means no copy button rendered */}
            {!hideCopy && <button type="button">Copy</button>}
          </div>
        )}
        <pre>
          <code>{children}</code>
        </pre>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  );
  return { mockCodeBlock };
});

vi.mock("@poukai-inc/ui", () => ({
  CodeBlock: mockCodeBlock,
}));

const PROPS = {
  language: "typescript",
  code: "async function call(input: Input) {\n  return await upstream(input)\n}",
  caption: "integration.ts — keeping it running, not just standing it up",
  label: "Example fragment: a retry wrapper around a flaky upstream integration",
};

describe("HomeArtifact", () => {
  it("renders the .home-artifact wrapper", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    expect(container.querySelector(".home-artifact")).toBeTruthy();
  });

  it("renders a <figure> root element (CodeBlock semantic structure)", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    expect(container.querySelector("figure")).toBeTruthy();
  });

  it("renders the code as real selectable text inside <pre><code> (not an image)", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    const pre = container.querySelector("pre");
    const code = container.querySelector("pre code");
    expect(pre).toBeTruthy();
    expect(code).toBeTruthy();
    expect(code?.textContent).toContain("upstream(input)");
    // Must NOT be an <img>
    expect(container.querySelector("img")).toBeNull();
  });

  it("passes the language prop to CodeBlock", () => {
    mockCodeBlock.mockClear();
    render(<HomeArtifact {...PROPS} />);
    const props = mockCodeBlock.mock.calls[0][0] as { language?: string };
    expect(props.language).toBe("typescript");
  });

  it("passes hideCopy to CodeBlock (copy button suppressed — AA-3)", () => {
    mockCodeBlock.mockClear();
    render(<HomeArtifact {...PROPS} />);
    const callProps = mockCodeBlock.mock.calls[0][0] as { hideCopy?: boolean };
    expect(callProps.hideCopy).toBe(true);
    // Confirm no copy button in the output (stub respects hideCopy=true)
    const { container } = render(<HomeArtifact {...PROPS} />);
    expect(container.querySelector("button")).toBeNull();
  });

  it("passes caption to CodeBlock and renders it as <figcaption> (NOT a heading)", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    const figcaption = container.querySelector("figcaption");
    expect(figcaption).toBeTruthy();
    expect(figcaption?.textContent).toContain("integration.ts");
    // Must NOT be any heading element
    const tag = figcaption?.tagName.toLowerCase();
    expect(["h1", "h2", "h3", "h4", "h5", "h6"]).not.toContain(tag);
  });

  it("wires aria-label to the <figure> for accessible name", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("aria-label")).toBe(PROPS.label);
  });

  it("renders without caption when caption is omitted", () => {
    const { language, code, label } = PROPS;
    const { container } = render(
      <HomeArtifact language={language} code={code} label={label} />
    );
    // Should render without throwing; no <figcaption>
    expect(container.querySelector(".home-artifact")).toBeTruthy();
    expect(container.querySelector("figcaption")).toBeNull();
  });

  it("renders the language label in the header bar when language is provided", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    const langLabel = container.querySelector(".code-block-language");
    expect(langLabel?.textContent).toBe("typescript");
  });

  it("does not render a heading element anywhere — no <h2> emitted", () => {
    const { container } = render(<HomeArtifact {...PROPS} />);
    expect(container.querySelector("h1")).toBeNull();
    expect(container.querySelector("h2")).toBeNull();
    expect(container.querySelector("h3")).toBeNull();
  });
});
