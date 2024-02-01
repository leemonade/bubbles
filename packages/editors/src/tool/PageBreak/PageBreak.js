import { Node, mergeAttributes } from '@tiptap/core';

const PageBreak = Node.create({
  name: 'pageBreak',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      class: {
        default: 'page-break',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div.page-break',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setPageBreak:
        () =>
        ({ commands }) =>
          commands.insertContent({
            type: this.name,
            attrs: { class: 'page-break' },
          }),
    };
  },
});

export { PageBreak };
