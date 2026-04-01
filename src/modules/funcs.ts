export const searchModes = ['forward', 'backward', 'exact', 'partial'] as const;

export type SearchMode = (typeof searchModes)[number];

export const isMode = (str: unknown) =>
  str === 'forward' ||
  str === 'backward' ||
  str === 'exact' ||
  str === 'partial';

export interface WordData {
  readonly word: string;
  readonly contents: string[];
}

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
