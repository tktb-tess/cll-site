// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/cll-site/',
  site: 'https://tktb-tess.github.io',
  vite: {
    plugins: [tailwindcss()],
  }
});
