// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import { containerDirectiveHandler, tableHandler } from './src/plugins/handlers';

export default defineConfig({
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
        containerDirective: containerDirectiveHandler,
      },
    },
    smartypants: false,
  },
});
