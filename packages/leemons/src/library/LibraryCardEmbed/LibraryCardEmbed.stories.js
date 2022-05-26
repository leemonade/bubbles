import React from 'react';
import { Box, COLORS } from '@bubbles-ui/components';
import { LibraryCardEmbed } from './LibraryCardEmbed';
import { LIBRARY_CARD_EMBED_DEFAULT_PROPS } from './LibraryCardEmbed.constants';
import mdx from './LibraryCardEmbed.mdx';

export default {
  title: 'leemons/Library/LibraryCardEmbed',
  parameters: {
    component: LibraryCardEmbed,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <LibraryCardEmbed {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_EMBED_DEFAULT_PROPS,
  asset: {
    title: 'PLAYER VIDEO/AUDIO',
    description:
      'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes…',
    color: COLORS.ui01,
    fileType: 'video',
    image:
      'https://images.unsplash.com/photo-1646596504587-c3771cf62e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjkyNjM3OA&ixlib=rb-1.2.1&q=80&w=1080',
    url: 'https://www.youtube.com/watch?v=XfR9iY5y94s&ab_channel=MenAtWorkVEVO',
    metadata: [
      { label: 'Width', value: '1400' },
      { label: 'Height', value: '600' },
      { label: 'Quality', value: '128kb' },
      { label: 'Format', value: 'mp3' },
      { label: 'Duration', value: '10 min' },
      { label: 'Transcript', value: 'Not available' },
    ],
  },
};
