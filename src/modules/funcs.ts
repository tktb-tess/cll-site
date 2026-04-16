import type { MarkdownHeading } from 'astro';
import type { H2Content, WordData, SearchMode } from './decl';

let json: readonly WordData[] | undefined;

export const searchWords = async (sw: string, sm: SearchMode) => {
  if (!sw) return null;

  if (!json) {
    json = (await import('../assets/glossary.json')).default;
  }
  return json.filter((w) => {
    switch (sm) {
      case 'forward': {
        const wo = w.word.slice(0, sw.length);
        return sw === wo;
      }
      case 'backward': {
        const wo = w.word.slice(-sw.length);
        return sw === wo;
      }
      case 'exact': {
        return sw === w.word;
      }
      case 'partial': {
        return w.word.includes(sw);
      }
      default: {
        const _: never = sm;
      }
    }
  });
};

export const formatNumber = (results: WordData[]) => {
  const len = results.length;
  const num = len ? `${len}` : 'No';
  const word = len === 1 ? 'word' : 'words';
  return `${num} ${word} found`;
};

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

export const getImgData = async (path: string) => {
  const matched = path.match(/chapter(\d+)/);
  if (!matched) return null;
  const str = matched[0];
  if (!str) return null;
  const num = Number.parseInt(matched[1] ?? '');
  if (!Number.isFinite(num)) return null;
  const img = (await import(`../assets/${str}.gif`)).default as ImageMetadata;
  // console.log(img);

  return { src: img, alt: `The picture for chapter ${num}` };
};
