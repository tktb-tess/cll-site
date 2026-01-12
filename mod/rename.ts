import { readFile, writeFile } from 'node:fs/promises';
import { globSync, mkdirSync } from 'node:fs';

const paths = globSync('src/pages/*.md');
mkdirSync('.arc/pages', { recursive: true });

const tasks = paths.map(async (path) => {
  const file = await readFile(path, { encoding: 'utf-8' });

  const replaced = file
    .replace(
      /(prev|next):\s\/(chapter\d{2}|general|glossary|index|words)/g,
      (_, prevOrNext: string, dirname: string) => `${prevOrNext}: /${dirname}/`
    )
    .replace(
      /(\[[^\[\]]+\])\((chapter\d{2}|general|glossary|index|words)([^\s]*)(\s"[^"]*")?\)/g,
      (_, linkname: string, dirname: string, id: string, alt?: string) =>
        `${linkname}(/${dirname}/${id}${alt ?? ''})`
    )
    .replace(/\\\[([^\]]+[^\\])\]/g, (_, $1: string) => `\\\[${$1}\\\]`)
    .replace(/_([^_]+)_/g, (_, $1: string) => `*${$1}*`)
    .replace(/###\s(Example\s[\d.]+)/g, (_, $1: string) => `##### ${$1}`);

  const fName = path.split('/').at(-1);
  await writeFile(`.arc/pages/${fName}`, replaced);
  console.log(path, 'finished');
});

await Promise.all(tasks);
