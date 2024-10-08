import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://danielsan1990.github.io',
  base: 'peludogs',
  resolve: {
    alias: {
      'astro/errors': 'astro/dist/errors.js'
    }
  },
  output: 'static',
});
