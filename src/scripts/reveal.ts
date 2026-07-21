/**
 * reveal.ts — site-wide section scroll-reveal.
 *
 * Mechanism:
 *   1. An inline gating script in BaseLayout.astro <head> adds class="reveal-on"
 *      to <html> ONLY when JS runs AND prefers-reduced-motion: no-preference.
 *      Without that class, [data-reveal] is fully visible (no hidden state).
 *   2. This module observes all [data-reveal] elements, adds .is-visible when
 *      each enters the viewport (once — then unobserves). Effect: opacity 0→1 +
 *      translateY(10px)→0, ~500ms ease-out, driven entirely by CSS.
 *   3. Re-inits on astro:page-load (fires on initial load AND after each SPA
 *      navigation via <ClientRouter />), so reveals work after in-site nav.
 *
 * Stagger: elements with [data-reveal-stagger] observe their children instead of
 * the container, assigning --reveal-i CSS custom property per-child so CSS can
 * delay each step (transition-delay: calc(var(--reveal-i,0) * 60ms)).
 *
 * Safety contract (no blank-content guarantee):
 *   - Base CSS: [data-reveal] has NO hidden state (opacity/transform are unset).
 *   - Hidden state: .reveal-on [data-reveal] → opacity:0; transform:translateY(10px).
 *     This only applies when the gating class is present (JS ran, motion allowed).
 *   - Reduced-motion: @media (prefers-reduced-motion:reduce) [data-reveal] →
 *     opacity:1!important; transform:none!important (belt-and-suspenders in CSS).
 *   - No JS: gating class never added → content always visible.
 */

function buildObserver(): IntersectionObserver {
  return new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    },
    {
      // Trigger when ~10% of element is in view.
      threshold: 0.1,
      // Start reveal slightly before element hits the viewport bottom edge.
      rootMargin: "0px 0px -48px 0px",
    }
  );
}

function initReveal(): void {
  // If the gating class is absent (reduced-motion, no-JS path), do nothing.
  // Content is already visible; starting an observer would be harmless but wasteful.
  if (!document.documentElement.classList.contains("reveal-on")) return;

  const obs = buildObserver();

  // Plain sections — observe the element itself.
  const plain = document.querySelectorAll<HTMLElement>(
    "[data-reveal]:not([data-reveal-stagger])"
  );
  for (const el of plain) {
    obs.observe(el);
  }

  // Stagger containers — observe each child, assign --reveal-i per-child so CSS
  // can apply transition-delay: calc(var(--reveal-i, 0) * 60ms).
  const staggerContainers = document.querySelectorAll<HTMLElement>(
    "[data-reveal-stagger]"
  );
  for (const container of staggerContainers) {
    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.setProperty("--reveal-i", String(i));
      child.setAttribute("data-reveal", "");
      obs.observe(child);
    });
  }
}

// Initial load: run directly. This deferred module can register AFTER
// astro:page-load has already fired on first load, so relying on that event
// alone leaves the first page with no observer (in-view [data-reveal] elements
// stuck hidden). initReveal is idempotent — re-observing an already-revealed
// element simply re-confirms .is-visible and unobserves — so running it here
// and again on astro:page-load is safe.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReveal, { once: true });
} else {
  initReveal();
}

// Re-init after every SPA navigation via Astro's <ClientRouter />.
document.addEventListener("astro:page-load", initReveal);
