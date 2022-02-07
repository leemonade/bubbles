import React from 'react';
import { Box, FileIcon } from '@bubbles-ui/components';
import { COLORS as colors } from '@bubbles-ui/components/src/theme.tokens';
import { LibraryCardCover, LIBRARY_CARD_COVER_DEFAULT_PROPS } from './LibraryCardCover';
import { LIBRARYCARD_VARIANTS } from '../';
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
    variant: { control: { type: 'select' }, options: LIBRARYCARD_VARIANTS },
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
  fileIcon: <FileIcon fileType={'audio'} size={64} color={colors.text06} />,
  color: '#DC5571',
  name: 'El ritmo de la guerra',
  cover:
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  blur: 20,
  variant: 'media',
};
