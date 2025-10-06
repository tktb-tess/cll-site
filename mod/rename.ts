import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';

const paths = globSync('src/pages/*.md');

const renameArr = [
  ['chapter-about.gif', 'chapter01.gif'],
  ['chapter-tour.gif', 'chapter02.gif'],
  ['chapter-phonology.gif', 'chapter03.gif'],
  ['chapter-morphology.gif', 'chapter04.gif'],
  ['chapter-selbri.gif', 'chapter05.gif'],
  ['chapter-sumti.gif', 'chapter06.gif'],
  ['chapter-anaphoric-cmavo.gif', 'chapter07.gif'],
  ['chapter-relative-clauses.gif', 'chapter08.gif'],
  ['chapter-sumti-tcita.gif', 'chapter09.gif'],
  ['chapter-tenses.gif', 'chapter10.gif'],
  ['chapter-abstractions.gif', 'chapter11.gif'],
  ['chapter-lujvo.gif', 'chapter12.gif'],
  ['chapter-attitudinals.gif', 'chapter13.gif'],
  ['chapter-connectives.gif', 'chapter14.gif'],
  ['chapter-negation.gif', 'chapter15.gif'],
  ['chapter-quantifiers.gif', 'chapter16.gif'],
  ['chapter-letterals.gif', 'chapter17.gif'],
  ['chapter-mekso.gif', 'chapter18.gif'],
  ['chapter-structure.gif', 'chapter19.gif'],
  ['chapter-catalogue.gif', 'chapter20.gif'],
  ['chapter-grammars.gif', 'chapter21.gif'],
] as const;

const tasks = paths.map(async (path) => {
  let md = await readFile(path, { encoding: 'utf-8' });
  renameArr.forEach(([a, b]) => {
    md = md.replaceAll(a, b);
  });
  md = md.replace(/(?:---\n+)?\|\sThe\sComplete.+$/s, '');
  const name = path.split('\\').at(-1);
  await writeFile(`out/${name}`, md);
});

const tasks2 = renameArr.map(async ([alt, neue]) => {
  const gif = await readFile(`src/assets/${alt}`);
  await writeFile(`out/assets/${neue}`, gif);
});

await Promise.all([...tasks, ...tasks2]);
