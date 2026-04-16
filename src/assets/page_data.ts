export interface PageData {
  readonly title: string;
  readonly longTitle?: string;
  readonly description?: string;
}

const pageData: ReadonlyMap<string, PageData> = new Map([
  ['/', { title: 'The Complete Lojban Language Viewer' }],
  [
    '/chapter01/',
    {
      title: 'Chapter 1',
      longTitle:
        'Chapter 1. Lojban As We Mangle It In Lojbanistan: About This Book',
    },
  ],
  [
    '/chapter02/',
    {
      title: 'Chapter 2',
      longTitle: 'Chapter 2. A Quick Tour of Lojban Grammar, With Diagrams',
    },
  ],
  [
    '/chapter03/',
    {
      title: 'Chapter 3',
      longTitle: 'Chapter 3. The Hills Are Alive With The Sounds Of Lojban',
    },
  ],
  [
    '/chapter04/',
    {
      title: 'Chapter 4',
      longTitle: 'Chapter 4. The Shape Of Words To Come: Lojban Morphology',
    },
  ],
  [
    '/chapter05/',
    {
      title: 'Chapter 5',
      longTitle:
        'Chapter 5. “Pretty Little Girls’ School”: The Structure Of Lojban selbri',
    },
  ],
  [
    '/chapter06/',
    {
      title: 'Chapter 6',
      longTitle: 'Chapter 6. To Speak Of Many Things: The Lojban sumti',
    },
  ],
  [
    '/chapter07/',
    {
      title: 'Chapter 7',
      longTitle:
        'Chapter 7. Brevity Is The Soul Of Language: Pro-sumti And Pro-bridi',
    },
  ],
  [
    '/chapter08/',
    {
      title: 'Chapter 8',
      longTitle:
        'Chapter 8. Relative Clauses, Which Make sumti Even More Complicated',
    },
  ],
  [
    '/chapter09/',
    {
      title: 'Chapter 9',
      longTitle:
        'Chapter 9. To Boston Via The Road Go I, With An Excursion Into The Land Of Modals',
    },
  ],
  [
    '/chapter10/',
    {
      title: 'Chapter 10',
      longTitle:
        'Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System',
    },
  ],
  [
    '/chapter11/',
    {
      title: 'Chapter 11',
      longTitle:
        'Chapter 11. Events, Qualities, Quantities, And Other Vague Words: On Lojban Abstraction',
    },
  ],
  [
    '/chapter12/',
    {
      title: 'Chapter 12',
      longTitle:
        'Chapter 12. Dog House And White House: Determining lujvo Place Structures',
    },
  ],
  [
    '/chapter13/',
    {
      title: 'Chapter 13',
      longTitle:
        'Chapter 13. Oooh! Arrgh! Ugh! Yecch! Attitudinal and Emotional Indicators',
    },
  ],
  [
    '/chapter14/',
    {
      title: 'Chapter 14',
      longTitle:
        'Chapter 14. If Wishes Were Horses: The Lojban Connective System',
    },
  ],
  [
    '/chapter15/',
    {
      title: 'Chapter 15',
      longTitle: 'Chapter 15. “No” Problems: On Lojban Negation',
    },
  ],
  [
    '/chapter16/',
    {
      title: 'Chapter 16',
      longTitle:
        'Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic',
    },
  ],
  [
    '/chapter17/',
    {
      title: 'Chapter 17',
      longTitle:
        'Chapter 17. As Easy As A-B-C? The Lojban Letteral System And Its Uses',
    },
  ],
  [
    '/chapter18/',
    {
      title: 'Chapter 18',
      longTitle: 'Chapter 18. lojbau mekso: Mathematical Expressions in Lojban',
    },
  ],
  [
    '/chapter19/',
    {
      title: 'Chapter 19',
      longTitle:
        'Chapter 19. Putting It All Together: Notes on the Structure of Lojban Texts',
    },
  ],
  [
    '/chapter20/',
    {
      title: 'Chapter 20',
      longTitle: "Chapter 20. A Catalogue of selma'o",
    },
  ],
  [
    '/chapter21/',
    {
      title: 'Chapter 21',
      longTitle: 'Chapter 21. Formal Grammars',
    },
  ],
  ['/glossary/', { title: 'Lojban Word Glossary' }],
  ['/general/', { title: 'General Index' }],
  ['/words/', { title: 'Lojban Words Index' }],
  ['/examples/', { title: 'Examples Index' }],
]);

export default pageData;
