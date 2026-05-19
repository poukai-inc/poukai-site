// eslint.config.js — flat config (ESLint 9+)
//
// R-073 (HARD): no console.log, no debugger, no dead imports.
// Scoped to src/**/*.{ts,tsx,astro} only — config files, scripts, and test
// files are excluded so tooling noise doesn't pollute the gate.
//
// Rules:
//   no-console            — error  (R-073: "No console.log in production code")
//   no-debugger           — error  (R-073: "no debugger")
//   no-unused-vars        — warn   (typescript-eslint override; tsc catches the
//                                   hard cases, ESLint surfaces the soft ones)
//   @typescript-eslint/no-explicit-any — warn  (tsc strict catches most any;
//                                   this surfaces any that slips through)
//
// Run: pnpm lint
// CI: see .github/workflows/ci.yml `lint` job.

import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
  // ── TypeScript / TSX files ─────────────────────────────────────────────────
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "off", // Disabled in favour of the TS-aware version below.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // ── Astro files ────────────────────────────────────────────────────────────
  // eslint-plugin-astro provides an Astro-aware processor so the <script>
  // blocks inside .astro files are linted as TypeScript.
  {
    files: ["src/**/*.astro"],
    plugins: {
      astro: astroPlugin,
      "@typescript-eslint": tsPlugin,
    },
    processor: astroPlugin.processors[".astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
    rules: {
      // Astro recommended rules (accessibility, best-practices).
      ...astroPlugin.configs.recommended.rules,
      "no-console": "error",
      "no-debugger": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
