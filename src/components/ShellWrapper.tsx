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
 * Footer uses the DS <Footer> organism's `links` prop (FooterLink[]) for the
 * secondary link row — this is the correct slot per llms-full.txt §Footer.
 * Booking link (FS-CF-1, FS-CF-2) rides the utility tier as the lowest-weight
 * treatment: bare label "Book a time", no arrow, no urgency (booking-affordance
 * §2 footer utility tier). /onboarding and /writing surface here as footer-only
 * destinations (not in primary nav per FS-OB-2 / writing.md §9).
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import type { ReactNode } from "react";
import { SiteShell, Footer } from "@poukai-inc/ui";
import { BOOKING_URL } from "../lib/booking";

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
        <Footer
          copyright={`© ${year} pouk.ai`}
          email="hello@pouk.ai"
          linksLabel="Footer navigation"
          links={[
            { href: "/writing",   label: "Writing" },
            { href: "/onboarding", label: "Onboarding" },
            { href: BOOKING_URL,  label: "Book a time", external: true },
            { href: "/privacy",   label: "Privacy" },
            { href: "/terms",     label: "Terms" },
          ]}
        />
      }
    >
      {children}
    </SiteShell>
  );
}
