export interface WordData {
  word: string;
  contents: string[];
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
