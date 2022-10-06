import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { LibraryPlayer } from './LibraryPlayer';

const Library = Node.create({
  name: 'library', // unique name for the Node
  group: 'block', // belongs to the 'block' group of extensions
  selectable: true, // so we can select the video
  draggable: true, // so we can drag the video
  atom: true, // is a single unit
  addAttributes() {
    return {
      asset: {
        default: {},
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(LibraryPlayer);
  },
});
