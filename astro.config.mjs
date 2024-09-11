import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  publicDir: 'public',
  site: 'https://astro-blog-tutorial-bc.netlify.app',
  integrations: [preact()]
});