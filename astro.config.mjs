// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import { cdHandler, tableHandler, tdHandler } from './plugins/handlers';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
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
