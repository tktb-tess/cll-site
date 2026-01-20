import type { PhrasingContent, Table } from 'mdast';
import type { Element, ElementContent, Node, Text } from 'hast';
import type { ContainerDirective } from 'mdast-util-directive';
import { visit } from 'unist-util-visit';
import type { Handler } from 'mdast-util-to-hast';

const dummy = {} as unknown as Element;

visit(dummy, 'element', (node) => {});

const phrasingToText = (child: PhrasingContent): ElementContent => {
  const emptyText: Text = {
    type: 'text',
    value: '',
  };
  switch (child.type) {
    case 'break': {
      return {
        type: 'element',
        tagName: 'br',
        properties: {},
        children: [],
      };
    }
    case 'delete': {
      return {
        type: 'element',
        tagName: 's',
        properties: {},
        children: child.children.map(phrasingToText),
      };
    }
    case 'emphasis': {
      return {
        type: 'element',
        tagName: 'em',
        properties: {},
        children: child.children.map(phrasingToText),
      };
    }
    case 'html': {
      return {
        type: 'raw',
        value: child.value,
      };
    }
    case 'inlineCode': {
      return {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [
          {
            type: 'text',
            value: child.value,
          },
        ],
      };
    }
    case 'link': {
      return {
        type: 'element',
        tagName: 'a',
        properties: {
          href: child.url,
        },
        children: child.children.map(phrasingToText),
      };
    }
    case 'strong': {
      return {
        type: 'element',
        tagName: 'strong',
        properties: {},
        children: child.children.map(phrasingToText),
      };
    }
    case 'text': {
      return {
        type: 'text',
        value: child.value,
      };
    }
    case 'inlineMath': {
      const data = child.data ?? {};
      return {
        type: 'element',
        tagName: data.hName ?? 'code',
        properties: data.hProperties ?? {},
        children: data.hChildren ?? [],
      };
    }
    case 'textDirective': {
      const data = child.data ?? {};
      return {
        type: 'element',
        tagName: data.hName ?? 'div',
        properties: data.hProperties ?? child.attributes ?? {},
        children: data.hChildren ?? child.children.map(phrasingToText),
      };
    }
    case 'image': {
      const data = child.data ?? {};
      return {
        type: 'element',
        tagName: 'img',
        properties: {
          src: child.url,
          alt: child.alt,
          title: child.title,
        },
        children: data.hChildren ?? [],
      };
    }
    default: {
      return emptyText;
    }
  }
};

export interface Config {
  className: string;
}

export const tableHandler: Handler = (_, node: Table) => {
  const [head, ...body] = node.children;
  const headTr: Element = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: head.children.map(
      (th): Element => ({
        type: 'element',
        tagName: 'th',
        properties: {},
        children: th.children.map(phrasingToText),
      }),
    ),
  };

  const cond =
    Math.max(
      ...headTr.children
        .filter((x) => x.type === 'element')
        .map(({ children }) => children.length),
    ) > 0;

  const thead: Element | null = cond
    ? {
        type: 'element',
        tagName: 'thead',
        properties: {},
        children: [headTr],
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
      class: ['table-scrollable'],
    },
    children: [table],
  };
};

export const jbomupliHandler: Handler = (
  _,
  node: ContainerDirective,
  parent,
) => {
  const className = 'jbomupli';
  if (node.name !== className) return;
  const table = node.children.at(0);
  if (table?.type !== 'table') return;
  const trs = table.children.slice(1);
  const maxCol = Math.max(...trs.map((tr) => tr.children.length));

  const whole: Element = {
    type: 'element',
    tagName: 'div',
    properties: {
      class: [className],
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
    for (const tr of trs) {
      const cont = tr.children.at(i)?.children ?? [];
      const children = cont.map(phrasingToText);
      col.children.push({
        type: 'element',
        tagName: 'p',
        properties: {},
        children,
      });
    }
    whole.children.push(col);
  }
  return whole;
};
