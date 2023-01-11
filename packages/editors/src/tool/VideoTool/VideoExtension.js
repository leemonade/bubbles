import { Node, mergeAttributes } from '@tiptap/core';

const Video = Node.create({
  name: 'video', // unique name for the Node
  group: 'block', // belongs to the 'block' group of extensions
  selectable: true, // so we can select the video
  draggable: true, // so we can drag the video
  atom: true, // is a single unit

  parseHTML() {
    return [
      {
        tag: 'video',
      },
    ];
  },
  addAttributes() {
    return {
      src: {
        default: null,
      },
    };
  },
  addNodeView() {
    return ({ editor, node }) => {
      const iframe = document.createElement('iframe');
      iframe.width = '640';
      iframe.height = '360';
      iframe.frameborder = '0';
      iframe.allowfullscreen = '';
      iframe.src = node.attrs.src;
      return {
        dom: iframe,
      };
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ['video', mergeAttributes(HTMLAttributes)];
  },
});
