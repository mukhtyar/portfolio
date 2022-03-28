// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Svelte renderer to support Svelte components.
  buildOptions: {
    sitemap: true,
  },
  renderers: ["@astrojs/renderer-svelte"],
  vite: {
    css: {
      modules: {
        localsConvention: "camelCaseOnly"
      },
    },
  }
});
