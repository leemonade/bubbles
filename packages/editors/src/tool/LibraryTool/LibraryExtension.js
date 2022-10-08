import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer, mergeAttributes } from '@tiptap/react';
import { LibraryPlayer } from './LibraryPlayer';

export const LibraryExtension = Node.create({
  name: 'library', // unique name for the Node
  group: 'block', // belongs to the 'block' group of extensions
  selectable: true, // so we can select the Card
  draggable: true, // so we can drag the Card
  atom: true, // is a single unit

  addAttributes() {
    return {
      asset: {
        default: {},
        parseHTML: (element) => JSON.parse(element.getAttribute('asset')),
        renderHTML: (attributes) => ({ asset: JSON.stringify(attributes.asset) }),
      },
      width: {
        default: '100%',
      },
      display: {
        default: 'card',
      },
      align: {
        default: 'left',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'library',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['library', mergeAttributes(HTMLAttributes)];
  },

  addCommands() {
    return {
      setLibrary:
        (attributes) =>
        ({ commands }) => {
          return commands.insertContent({ type: this.name, attrs: attributes });
        },
      unsetLibrary:
        (attributes) =>
        ({ commands }) => {
          return commands.deleteSelection();
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(LibraryPlayer);
  },
});
