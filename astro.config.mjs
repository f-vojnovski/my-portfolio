// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://f-vojnovski.github.io',
});