export interface WordData {
  readonly word: string;
  readonly contents: string[];
}

export interface H4Content {
  readonly text: string;
  readonly url: string;
}

export interface H3Content {
  readonly text: string;
  readonly url: string;
  readonly h4: H4Content[];
}

export interface H2Content {
  readonly text: string;
  readonly url: string;
  readonly h3: H3Content[];
}

export const searchModes = ['forward', 'backward', 'exact', 'partial'] as const;

export type SearchMode = (typeof searchModes)[number];

export const isMode = (str: unknown) =>
  str === 'forward' ||
  str === 'backward' ||
  str === 'exact' ||
  str === 'partial';
