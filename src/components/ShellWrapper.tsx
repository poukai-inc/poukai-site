/**
 * ShellWrapper.tsx
 *
 * Thin React wrapper around SiteShell that owns the footer construction.
 * Lives in the site repo because:
 *   - The footer content (copyright year, contact email) is site-specific.
 *   - Passing JSX as a prop from an .astro file to a React component causes
 *     esbuild to parse the entire .astro template as TypeScript, which breaks
 *     on HTML attributes like <link as="font"> in the <head> section.
 *   - By wrapping SiteShell here, BaseLayout.astro passes only scalar props
 *     (strings, numbers, plain arrays) — no JSX prop values cross the boundary.
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import type { ReactNode } from "react";
import { SiteShell } from "@poukai-inc/ui";

interface NavRoute {
  href: string;
  label: string;
}

interface ShellWrapperProps {
  currentRoute: string;
  routes: NavRoute[];
  year: number;
  children: ReactNode;
}

export function ShellWrapper({ currentRoute, routes, year, children }: ShellWrapperProps) {
  return (
    <SiteShell
      currentRoute={currentRoute}
      routes={routes}
      footer={
        // Footer link order matches the primary nav, plus Writing + RSS — the
        // /writing entry points (it is absent from the primary nav by design,
        // writing.md §9). RSS reaches the feed at /writing/rss.xml.
        <p>
          {"© "}{year}{" pouk.ai · "}
          <a href="/why-ai">Why AI</a>{" · "}
          <a href="/roles">Roles</a>{" · "}
          <a href="/engagements">Engagements</a>{" · "}
          <a href="/principles">Principles</a>{" · "}
          <a href="/about">About</a>{" · "}
          <a href="/writing">Writing</a>{" · "}
          <a href="/writing/rss.xml">RSS</a>{" · "}
          <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
        </p>
      }
    >
      {children}
    </SiteShell>
  );
}
