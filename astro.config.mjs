// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import { remarkJbomupli } from './src/modules/remark_plugin';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 8000,
  },
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkDirective, remarkJbomupli, remarkMath],
    rehypePlugins: [rehypeKatex],
    smartypants: false,
  },
});
