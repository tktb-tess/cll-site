import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';

const map = {
  'chapter-about.html': 'chapter01',
  'chapter-tour.html': 'chapter02',
  'chapter-phonology.html': 'chapter03',
  'chapter-morphology.html': 'chapter04',
  'chapter-selbri.html': 'chapter05',
  'chapter-sumti.html': 'chapter06',
  'chapter-anaphoric-cmavo.html': 'chapter07',
  'chapter-relative-clauses.html': 'chapter08',
  'chapter-sumti-tcita.html': 'chapter09',
  'chapter-tenses.html': 'chapter10',
  'chapter-abstractions.html': 'chapter11',
  'chapter-lujvo.html': 'chapter12',
  'chapter-attitudinals.html': 'chapter13',
  'chapter-connectives.html': 'chapter14',
  'chapter-negation.html': 'chapter15',
  'chapter-quantifiers.html': 'chapter16',
  'chapter-letterals.html': 'chapter17',
  'chapter-mekso.html': 'chapter18',
  'chapter-structure.html': 'chapter19',
  'chapter-catalogue.html': 'chapter20',
  'chapter-grammars.html': 'chapter21',
  'go01.html': 'glossary',
  'ix01.html': 'general',
  'ix02.html': 'words',
  'ix03.html': 'examples',
  'index.html': '../',
} as const;

const keys = Object.keys(map) as unknown as (keyof typeof map)[];

(async () => {
  const fnames = await Array.fromAsync(glob('input/*.md'));
  const tasks = fnames.map(async (f) => {
    const md = await readFile(f, { encoding: 'utf-8' });
    const replaced = md
      .replaceAll(keys[0], map[keys[0]])
      .replaceAll(keys[1], map[keys[1]])
      .replaceAll(keys[2], map[keys[2]])
      .replaceAll(keys[3], map[keys[3]])
      .replaceAll(keys[4], map[keys[4]])
      .replaceAll(keys[5], map[keys[5]])
      .replaceAll(keys[6], map[keys[6]])
      .replaceAll(keys[7], map[keys[7]])
      .replaceAll(keys[8], map[keys[8]])
      .replaceAll(keys[9], map[keys[9]])
      .replaceAll(keys[10], map[keys[10]])
      .replaceAll(keys[11], map[keys[11]])
      .replaceAll(keys[12], map[keys[12]])
      .replaceAll(keys[13], map[keys[13]])
      .replaceAll(keys[14], map[keys[14]])
      .replaceAll(keys[15], map[keys[15]])
      .replaceAll(keys[16], map[keys[16]])
      .replaceAll(keys[17], map[keys[17]])
      .replaceAll(keys[18], map[keys[18]])
      .replaceAll(keys[19], map[keys[19]])
      .replaceAll(keys[20], map[keys[20]])
      .replaceAll(keys[21], map[keys[21]])
      .replaceAll(keys[22], map[keys[22]])
      .replaceAll(keys[23], map[keys[23]])
      .replaceAll(keys[24], map[keys[24]])
      .replaceAll(keys[25], map[keys[25]]);
    console.log(f, 'replaced');
    await mkdir('out', { recursive: true });
    const repf = f.replace('input', 'out');
    console.log(f, 'writing...');
    await writeFile(repf, replaced);
  });
  await Promise.all(tasks);
  console.log('all tasks were successfully executed!');
})();
