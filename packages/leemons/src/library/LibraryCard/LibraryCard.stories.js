import React from 'react';
import { Box, Stack } from '@bubbles-ui/components';
import { ArchiveIcon, StarIcon, DeleteBinIcon, FlagIcon } from '@bubbles-ui/icons/solid';
import { LibraryCard } from './LibraryCard';
import { LIBRARY_CARD_DEFAULT_PROPS, LIBRARYCARD_VARIANTS } from './LibraryCard.constants';
import { LIBRARYCARD_ASSIGMENT_ROLES } from '../Library.constants';
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
    role: { control: { type: 'select' }, options: LIBRARYCARD_ASSIGMENT_ROLES },
    onAction: { action: 'onAction' },
  },
};

const Template = ({
  showImage,
  showDescription,
  showAction,
  showAssigment,
  children,
  asset,
  assigment,
  deadlineProps,
  variant,
  action,
  ...props
}) => {
  const isBookmark = variant === 'bookmark';

  const assetToRender = {
    cover: showImage ? (isBookmark ? URL_ASSET.cover : asset.cover) : undefined,
    description: showDescription ? asset.description : undefined,
  };

  return (
    <Box style={{ width: 322 }}>
      <LibraryCard
        {...props}
        asset={isBookmark ? { ...URL_ASSET, ...assetToRender } : { ...asset, ...assetToRender }}
        deadlineProps={deadlineProps}
        assigment={showAssigment ? assigment : null}
        variant={variant}
        action={showAction ? action : undefined}
      />
    </Box>

    // <Stack spacing={5}>
    //   {variant === 'assigment' ? (
    //     <Box style={{ width: 322 }}>
    //       <LibraryCard
    //         {...props}
    //         asset={showImage ? asset : assetWithoutCover}
    //         deadlineProps={deadlineProps}
    //         variant={variant}
    //       />
    //     </Box>
    //   ) : (
    //     <>
    //       <Box style={{ width: 322 }}>
    //         <LibraryCard
    //           {...props}
    //           asset={showImage ? asset : assetWithoutCover}
    //           deadlineProps={deadlineProps}
    //           variant={variant}
    //         />
    //       </Box>
    //       <Box style={{ width: 322 }}>
    //         <LibraryCard
    //           {...props}
    //           asset={
    //             showImage
    //               ? assetWithoutDescription
    //               : { ...assetWithoutCover, description: undefined }
    //           }
    //           action={action}
    //           variant={variant}
    //         />
    //       </Box>
    //       <Box style={{ width: 322 }}>
    //         <LibraryCard
    //           {...props}
    //           asset={showImage ? URL_ASSET : { ...URL_ASSET, cover: undefined }}
    //           variant="bookmark"
    //         />
    //       </Box>
    //     </>
    //   )}
    // </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  showImage: true,
  showDescription: true,
  showAction: false,
  showAssigment: true,
  variant: 'media',
  action: 'View feedback',
  badge: '',
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
  deadlineProps: {
    icon: <ArchiveIcon width={16} height={16} />,
    deadline: new Date('2022-02-20'),
    locale: 'es',
    labels: {
      new: 'New',
      deadline: 'Deadline',
    },
  },

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
