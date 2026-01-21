// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  // Enable the Svelte integration to support Svelte components
  integrations: [svelte()],
  vite: {
    css: {
      modules: {
        localsConvention: "camelCaseOnly"
      },
    },
  }
});
