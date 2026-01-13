// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 8000,
  },
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkToc, { heading: 'contents', maxDepth: 4 }], remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
