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
  const assetWithoutDescription = { ...asset, description: undefined };

  return (
    <Box style={{ display: 'flex' }}>
      <Box style={{ width: 287 }}>
        <LibraryCard {...props} asset={showImage ? asset : assetWithoutCover}>
          {children}
        </LibraryCard>
      </Box>
      <Box style={{ width: 287, marginLeft: 24 }}>
        <LibraryCard
          {...props}
          asset={
            showImage ? assetWithoutDescription : { ...assetWithoutCover, description: undefined }
          }
        >
          {children}
        </LibraryCard>
      </Box>
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
    description:
      'This is a very large description of the book Rythim of War, the fourth book in The Stormlight Archive.',
    metadata: [
      { label: 'Quality', value: '128kb' },
      { label: 'Format', value: 'mp3' },
      { label: 'Duration', value: '10 min' },
      { label: 'Transcript', value: 'Not available' },
    ],
    tags: ['Fantasy', 'Adventure', 'Fiction'],
    cover:
      'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  },
  variant: 'media',
  showImage: true,
};
