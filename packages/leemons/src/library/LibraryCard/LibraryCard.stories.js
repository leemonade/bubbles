import React from 'react';
import { Box, Stack } from '@bubbles-ui/components';
import { ArchiveIcon, StarIcon, DeleteBinIcon, FlagIcon } from '@bubbles-ui/icons/solid';
import { LibraryCard } from './LibraryCard';
import { LIBRARY_CARD_DEFAULT_PROPS, LIBRARYCARD_VARIANTS } from './LibraryCard.constants';
import mdx from './LibraryCard.mdx';
import { AUDIO_ASSET, URL_ASSET, TASK_ASSET } from './mock/data';

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
        <Box style={{ width: 322 }}>
          <LibraryCard
            {...props}
            asset={showImage ? asset : assetWithoutCover}
            deadlineProps={deadlineProps}
            variant={variant}
          />
        </Box>
      ) : (
        <>
          <Box style={{ width: 322 }}>
            <LibraryCard
              {...props}
              asset={showImage ? asset : assetWithoutCover}
              deadlineProps={deadlineProps}
              variant={variant}
            />
          </Box>
          <Box style={{ width: 322 }}>
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
          <Box style={{ width: 322 }}>
            <LibraryCard
              {...props}
              asset={showImage ? URL_ASSET : { ...URL_ASSET, cover: undefined }}
              variant="bookmark"
            />
          </Box>
          <Box style={{ width: 322 }}>
            <LibraryCard
              {...props}
              asset={showImage ? TASK_ASSET : { ...TASK_ASSET, cover: undefined }}
              variant="task"
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
  asset: AUDIO_ASSET,
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
  menuItems: [
    {
      icon: <StarIcon />,
      children: 'Item 1',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <DeleteBinIcon />,
      children: 'Item 2',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <FlagIcon />,
      children: 'Item 3',
      onClick: () => alert('Item 3 clicked'),
    },
  ],
};
