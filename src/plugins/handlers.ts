import type { PhrasingContent, Table } from 'mdast';
import type { Element, ElementContent, Text } from 'hast';
import type { ContainerDirective, TextDirective } from 'mdast-util-directive';
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

const emptyText: Text = {
  type: 'text',
  value: '',
};

const ipaRender = (mdNode: TextDirective): Element => ({
  type: 'element',
  tagName: 'span',
  properties: {
    class: ['font-ipa'],
  },
  children: mdNode.children.map(phrasingToHast),
});

const _textDirectiveH = (node: TextDirective): ElementContent => {
  if (node.name === 'ipa') {
    return ipaRender(node);
  } else {
    const hast = toHast(node, { allowDangerousHtml: true });
    if (hast.type === 'root' || hast.type === 'doctype') {
      return emptyText;
    } else if (hast.type === 'element' && hast.tagName === 'script') {
      return emptyText;
    } else {
      return hast;
    }
  }
};

const phrasingToHast = (mdNode: PhrasingContent): ElementContent => {
  if (mdNode.type === 'textDirective') {
    return _textDirectiveH(mdNode);
  } else {
    const hast = toHast(mdNode, { allowDangerousHtml: true });

    if (hast.type === 'root' || hast.type === 'doctype') {
      return emptyText;
    } else if (hast.type === 'element' && hast.tagName === 'script') {
      return emptyText;
    } else {
      return hast;
    }
  }
};

export const tableHandler: Handler = (_, node: Table) => {
  const [head, ...body] = node.children;
  const ths = head.children.map(
    (th): Element => ({
      type: 'element',
      tagName: 'th',
      properties: {},
      children: th.children.map(phrasingToHast),
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
        children: td.children.map(phrasingToHast),
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

export const containerDirectiveHandler: Handler = (
  _,
  node: ContainerDirective,
) => {
  if (node.name === 'jbomupli') {
    const tables = node.children.filter((node) => node.type === 'table');
    const langPosition = (() => {
      const j = node.attributes?.jbo;
      if (!j) return [0];
      const p = JSON.parse(j);
      return v.parse(langPositionSchema, p);
    })();
    const className = node.attributes?.class ?? '';
    return tables.map((table) => {
      const trs = table.children.slice(1);
      const maxCol = trs
        .map((tr) => tr.children.length)
        .reduce((prev, cur) => Math.max(prev, cur), 0);

      const whole: Element = {
        type: 'element',
        tagName: 'div',
        properties: {
          class: ['jbomupli', className],
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
          const children = cont.map(phrasingToHast);

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
  } else {
    const hast = toHast(node, { allowDangerousHtml: true });

    if (hast.type === 'root' || hast.type === 'doctype') {
      return emptyText;
    } else if (hast.type === 'element' && hast.tagName === 'script') {
      return emptyText;
    } else {
      return hast;
    }
  }
};

export const textDirectiveHandler: Handler = (_, node: TextDirective) => {
  return _textDirectiveH(node);
};

