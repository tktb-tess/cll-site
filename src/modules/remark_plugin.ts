/// <reference types="mdast-util-directive" />
import type { PhrasingContent, Root } from 'mdast';
import type { Element, ElementContent, Text } from 'hast';
import { visit } from 'unist-util-visit';
import type { ContainerDirectiveData } from 'mdast-util-directive';

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

export const remarkJbomupli = (config?: Config) => {
  return (tree: Root) => {
    const className = config?.className ?? 'jbomupli';
    visit(tree, 'containerDirective', (node) => {
      if (node.name !== className) return;
      const table = node.children.at(0);
      if (table?.type !== 'table') return;
      const trs = table.children.slice(1);
      const maxCol = Math.max(...trs.map((tr) => tr.children.length));

      const whole: Required<ContainerDirectiveData> = {
        hName: 'div',
        hProperties: {
          class: [className],
        },
        hChildren: [],
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
        whole.hChildren.push(col);
      }
      node.data = whole;
    });
  };
};
