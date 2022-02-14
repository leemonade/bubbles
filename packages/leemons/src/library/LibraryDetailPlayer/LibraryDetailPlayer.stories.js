import React from 'react';
import { Box, FileIcon, COLORS } from '@bubbles-ui/components';
import { LibraryDetailPlayer, LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS } from './LibraryDetailPlayer';
import mdx from './LibraryDetailPlayer.mdx';

export default {
  title: 'leemons/Library/LibraryDetailPlayer',
  parameters: {
    component: LibraryDetailPlayer,
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

const Template = ({ children, ...props }) => {
  return <LibraryDetailPlayer {...props}>{children}</LibraryDetailPlayer>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS,
  fileIcon: <FileIcon fileType={'audio'} size={64} color={COLORS.text06} />,
  cover:
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  color: '#DC5571',
};
