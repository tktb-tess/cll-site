import type { MarkdownHeading } from 'astro';
import type { H2Content } from './decl';

export const getContents = (headings: MarkdownHeading[], path: string) => {
  const contents: H2Content[] = [];
  const filtered = headings.filter(({ depth }) => depth < 5);
  for (const { depth, text, slug } of filtered) {
    switch (depth) {
      case 2: {
        contents.push({
          text: text,
          url: `${path}#${slug}`,
          h3: [],
        });
        break;
      }
      case 3: {
        if (contents.length === 0) {
          contents.push({
            text: '',
            url: '',
            h3: [],
          });
        }
        const last = contents.at(-1)!;
        last.h3.push({
          text: text,
          url: `${path}#${slug}`,
          h4: [],
        });
        break;
      }
      case 4: {
        if (contents.length === 0) {
          contents.push({
            text: '',
            url: '',
            h3: [],
          });
        }
        const h2last = contents.at(-1)!;
        if (h2last.h3.length === 0) {
          h2last.h3.push({
            text: '',
            url: '',
            h4: [],
          });
        }
        const last = h2last.h3.at(-1)!;
        last.h4.push({
          text,
          url: `${path}#${slug}`,
        });
        break;
      }
      default: {
        throw Error('Unexpected heading', { cause: { depth, text, slug } });
      }
    }
  }
  return contents;
};
