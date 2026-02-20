// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import { cdHandler, tableHandler, tdHandler } from './plugins/handlers';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte()],
  server: {
    port: 8000,
  },
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective],
    rehypePlugins: [rehypeKatex],
    remarkRehype: {
      handlers: {
        table: tableHandler,
        containerDirective: cdHandler,
        textDirective: tdHandler,
      },
    },
    smartypants: false,
  },
});
