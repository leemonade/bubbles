import React from 'react';
import { Box, FileIcon, COLORS } from '@bubbles-ui/components';
import { ArchiveIcon } from '@bubbles-ui/icons/solid';
import {
  LibraryCardCover,
  LIBRARY_CARD_COVER_DEFAULT_PROPS,
  LIBRARYCARD_COVER_DIRECTIONS,
} from './LibraryCardCover';
import mdx from './LibraryCardCover.mdx';

export default {
  title: 'leemons/Library/LibraryCardCover',
  parameters: {
    component: LibraryCardCover,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2',
    },
  },
  argTypes: {
    direction: { control: { type: 'select' }, options: LIBRARYCARD_COVER_DIRECTIONS },
    parentHovered: { control: 'boolean' },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Box style={{ width: 287, display: 'inline-block' }}>
      <LibraryCardCover {...props}>{children}</LibraryCardCover>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_COVER_DEFAULT_PROPS,
  fileIcon: <FileIcon fileType={'audio'} size={64} color={COLORS.text06} />,
  color: '#DC5571',
  name: 'El ritmo de la guerra',
  cover:
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  direction: 'horizontal',
  deadlineProps: {
    icon: <ArchiveIcon width={16} height={16} />,
    deadline: new Date('2022-02-20'),
    locale: 'es',
    isNew: false,
  },
  parentHovered: false,
};
