import React from 'react';
import { Box, Stack } from '@bubbles-ui/components';
import { ArchiveIcon } from '@bubbles-ui/icons/solid';
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
    onAction: { action: 'onAction' },
  },
};

const Template = ({ children, asset, showImage, action, deadlineProps, variant, ...props }) => {
  const assetWithoutCover = { ...asset, cover: undefined };
  const assetWithoutDescription = { ...asset, description: undefined };

  return (
    <Stack spacing={5}>
      {variant === 'assigment' ? (
        <Box style={{ width: 287 }}>
          <LibraryCard
            {...props}
            asset={showImage ? asset : assetWithoutCover}
            deadlineProps={deadlineProps}
            variant={variant}
          />
        </Box>
      ) : (
        <>
          <Box style={{ width: 287 }}>
            <LibraryCard
              {...props}
              asset={showImage ? asset : assetWithoutCover}
              deadlineProps={deadlineProps}
              variant={variant}
            />
          </Box>
          <Box style={{ width: 287 }}>
            <LibraryCard
              {...props}
              asset={
                showImage
                  ? assetWithoutDescription
                  : { ...assetWithoutCover, description: undefined }
              }
              action={action}
              variant={variant}
            />
          </Box>
        </>
      )}
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_DEFAULT_PROPS,
  asset: {
    color: '#DC5571',
    name: 'El ritmo de la guerra',
    fileType: 'audio',
    created: '2022-02-04T16:26:31.485Z',
    description:
      'This is a very large description of the book Rythim of War, the fourth book in The Stormlight Archive.',
    subtitle: '',
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
  assigment: {
    completed: 0.3,
    submission: 15,
    total: 24,
    subject: {
      name: 'Maths - 1025 - GB',
    },
    avgTime: 933,
    avgAttempts: 3,
  },
  variant: 'media',
  showImage: true,
  deadlineProps: {
    icon: <ArchiveIcon width={16} height={16} />,
    deadline: new Date('2022-02-20'),
    locale: 'es',
    isNew: false,
  },
  action: 'View feedback',
};
