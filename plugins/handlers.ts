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

const _tdHandler = (node: TextDirective): ElementContent => {
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
    return _tdHandler(mdNode);
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

  const cols = bodyTrs
    .map((tr) => tr.children.length)
    .reduce((p, c) => Math.max(p, c), 1);

  const table: Element = {
    type: 'element',
    tagName: 'table',
    properties: {
      style: `--cols: ${cols};`,
    },
    children: thead ? [thead, tbody] : [tbody],
  };

  return table;
};

export const cdHandler: Handler = (_, node: ContainerDirective) => {
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
        .reduce((p, c) => Math.max(p, c), 0);

      const jbomupli: Element = {
        type: 'element',
        tagName: 'div',
        properties: {
          class: ['jbomupli', className],
        },
        children: [],
      };

      for (let j = 0; j < maxCol; j++) {
        const col: Element = {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: [],
        };

        for (const [i, tr] of trs.entries()) {
          const cont = tr.children.at(j)?.children ?? [];
          const children = cont.map(phrasingToHast);

          const isJbo =
            langPosition.findIndex((pos) => {
              if (typeof pos === 'number') {
                return pos === i;
              } else {
                pos[0] === i && pos[1] === j;
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
        jbomupli.children.push(col);
      }

      const stTexts: Element[] = trs
        .map((tr) => {
          const hast = toHast(tr, { allowDangerousHtml: true });

          switch (hast.type) {
            case 'comment':
            case 'doctype':
            case 'root': {
              return emptyText;
            }
            case 'element': {
              if (hast.tagName === 'td' || hast.tagName === 'th') {
                return hast.children;
              }
              return hast;
            }
            case 'text':
            case 'raw': {
              return hast;
            }
          }
        })
        .flat(1)
        .map((tr, i) => {
          const isJbo =
            langPosition.findIndex((pos) => {
              if (typeof pos === 'number') {
                return pos === i;
              }

              return false;
            }) > -1;
          return {
            type: 'element',
            tagName: 'p',
            properties: {
              class: ['jbomupli-for-sr'],
              lang: isJbo ? 'jbo' : undefined,
            },
            children: [tr],
          };
        });

      const whole: Element = {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: [jbomupli, ...stTexts],
      };

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

export const tdHandler: Handler = (_, node: TextDirective) => {
  return _tdHandler(node);
};
