import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer, mergeAttributes } from '@tiptap/react';
import { keys, uniq, isEmpty } from 'lodash';
import { IMAGE_ASSET, VIDEO_ASSET, AUDIO_ASSET, URL_ASSET } from './mock/data';
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
        // renderHTML: (attributes) => ({ asset: JSON.stringify(attributes.asset) }),
        renderHTML: ({ asset: { canAccess, tags, metadata, ...asset } }) => ({
          ...asset,
          tags: JSON.stringify(tags || []),
          metadata: JSON.stringify(metadata || []),
        }),
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
        getAttrs: (element) => {
          const assetKeys = keys({ ...VIDEO_ASSET, ...AUDIO_ASSET, ...IMAGE_ASSET, ...URL_ASSET });
          const asset = assetKeys.reduce((prev, curr) => {
            const attr = element.getAttribute(curr);
            if (attr) {
              prev[curr] = attr;
            }
            return prev;
          }, {});

          if (!isEmpty(asset)) {
            asset.tags = asset.tags ? JSON.parse(asset.tags) : [];
            asset.metadata = asset.metadata ? JSON.parse(asset.metadata) : [];
            element.setAttribute('asset', JSON.stringify(asset));
          }

          return true;
        },
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
