import React from 'react';
import { Node } from '@tiptap/core';
import { mergeAttributes, ReactNodeViewRenderer } from '@tiptap/react';
import { Card } from '../Card';

const CardExtension = Node.create({
  name: 'cardExtension',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      title: {
        default: '',
      },
      description: {
        default: '',
      },
      color: {
        default: '',
      },
      fileType: {
        default: '',
      },
      image: {
        default: '',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'card-extension',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['card-extension', mergeAttributes(HTMLAttributes)];
  },

  addCommands() {
    return {
      setCard:
        (attributes) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs: attributes }),
      unsetCard:
        (attributes) =>
        ({ commands }) =>
          commands.deleteSelection(),
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(Card);
  },
});

export { CardExtension };
