import type { PhrasingContent, Table } from 'mdast';
import type { Element, ElementContent } from 'hast';
import type { ContainerDirective } from 'mdast-util-directive';
import type { Handler } from 'mdast-util-to-hast';
import { toHast } from 'mdast-util-to-hast';
import * as v from 'valibot';

export const langPositionSchema = v.pipe(
  v.union([
    v.array(v.number()),
    v.array(v.pipe(v.tuple([v.number(), v.number()]), v.readonly())),
  ]),
  v.readonly(),
);

export type LangPosition = v.InferOutput<typeof langPositionSchema>;

const phrasingToText = (child: PhrasingContent): ElementContent => {
  const hast = toHast(child, { allowDangerousHtml: true });
  if (hast.type !== 'doctype' && hast.type !== 'root') {
    return hast;
  } else {
    return {
      type: 'text',
      value: '',
    };
  }
};

export const tableHandler: Handler = (_, node: Table) => {
  const [head, ...body] = node.children;
  const ths = head.children.map(
    (th): Element => ({
      type: 'element',
      tagName: 'th',
      properties: {},
      children: th.children.map(phrasingToText),
    }),
  );

  const cond = ths.some((th) => th.children.length > 0);

  const thead: Element | null = cond
    ? {
        type: 'element',
        tagName: 'thead',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'tr',
            properties: {},
            children: ths,
          },
        ],
      }
    : null;

  const bodyTrs = body.map(
    (row): Element => ({
      type: 'element',
      tagName: 'tr',
      properties: {},
      children: row.children.map((td) => ({
        type: 'element',
        tagName: 'td',
        properties: {},
        children: td.children.map(phrasingToText),
      })),
    }),
  );

  const tbody: Element = {
    type: 'element',
    tagName: 'tbody',
    properties: {},
    children: bodyTrs,
  };

  const table: Element = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: thead ? [thead, tbody] : [tbody],
  };

  return {
    type: 'element',
    tagName: 'div',
    properties: {
      class: ['table-container'],
    },
    children: [table],
  };
};

export const jbomupliHandler: Handler = (_, node: ContainerDirective) => {
  const className = 'jbomupli';
  if (node.name !== className) return;
  const tables = node.children.filter((node) => node.type === 'table');
  const langPosition = (() => {
    const j = node.attributes?.jbo ?? `[0]`;
    const p = JSON.parse(j);
    return v.parse(langPositionSchema, p);
  })();
  const class_ = node.attributes?.class ?? null;
  return tables.map((table) => {
    const trs = table.children.slice(1);
    const maxCol = Math.max(...trs.map((tr) => tr.children.length));

    const whole: Element = {
      type: 'element',
      tagName: 'div',
      properties: {
        class: class_ ? ['jbomupli', class_] : ['jbomupli'],
      },
      children: [],
    };
    for (let i = 0; i < maxCol; i++) {
      const col: Element = {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: [],
      };
      for (const [j, tr] of trs.entries()) {
        const cont = tr.children.at(i)?.children ?? [];
        const children = cont.map(phrasingToText);

        const isJbo =
          langPosition.findIndex((pos) => {
            if (typeof pos === 'number') {
              return pos === j;
            } else {
              pos[0] === j && pos[1] === i;
            }
          }) > -1;
        col.children.push({
          type: 'element',
          tagName: 'p',
          properties: {
            lang: isJbo ? 'jbo' : undefined,
          },
          children,
        });
      }
      whole.children.push(col);
    }
    return whole;
  });
};
