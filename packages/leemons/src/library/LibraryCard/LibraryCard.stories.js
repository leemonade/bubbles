import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryCard, LIBRARY_CARD_DEFAULT_PROPS, LIBRARYCARD_VARIANTS } from './LibraryCard';
import mdx from './LibraryCard.mdx';

export default {
  title: 'leemons/Library/LibraryCard',
  parameters: {
    component: LibraryCard,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2',
    },
  },
  argTypes: {
    showImage: { control: 'boolean' },
    variant: { control: { type: 'select' }, options: LIBRARYCARD_VARIANTS },
  },
};

const Template = ({ children, asset, showImage, ...props }) => {
  const assetWithoutCover = { ...asset, cover: undefined };

  return (
    <Box style={{ width: 287, display: 'inline-block' }}>
      <LibraryCard {...props} asset={showImage ? asset : assetWithoutCover}>
        {children}
      </LibraryCard>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_DEFAULT_PROPS,
  asset: {
    color: '#DC5571',
    name: 'El ritmo de la guerra',
    fileType: 'audio',
    cover:
      'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  },
  variant: 'media',
  showImage: true,
};
