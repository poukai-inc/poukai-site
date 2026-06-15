/**
 * Canonical booking URL — defined once per R-076 (copy/hrefs in content, not
 * scattered as JSX literals). FS-CF-2: single canonical URL at v1; per-archetype
 * or per-rung routing is deferred to a fast-follow.
 *
 * To update the booking URL for the entire site, change it here only.
 */
export const BOOKING_URL = "https://cal.pouk.ai" as const;
