import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryDetail } from './LibraryDetail';
import { LIBRARY_DETAIL_DEFAULT_PROPS, LIBRARY_DETAIL_VARIANTS } from './LibraryDetail.constants';
import mdx from './LibraryDetail.mdx';
import { VIDEO_ASSET } from '../LibraryCard/mock/data';

export default {
  title: 'leemons/Library/LibraryDetail',
  parameters: {
    component: LibraryDetail,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=6757%3A75141',
    },
  },
  argTypes: {
    variant: { options: LIBRARY_DETAIL_VARIANTS, control: { type: 'select' } },
    onEdit: { action: 'onEdit' },
    onDuplicate: { action: 'onDuplicate' },
    onDownload: { action: 'onDownload' },
    onDelete: { action: 'onDelete' },
    onShare: { action: 'onShare' },
    onAssign: { action: 'onAssign' },
  },
};

const Template = ({ children, asset, ...props }) => {
  const audioAsset = {
    ...asset,
    fileType: 'audio',
    url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
  };

  return (
    <Box style={{ display: 'flex', gap: 30 }}>
      <Box style={{ width: 360 }}>
        <LibraryDetail {...props} asset={asset}>
          {children}
        </LibraryDetail>
      </Box>
      <Box style={{ width: 360 }}>
        <LibraryDetail {...props} asset={audioAsset}>
          {children}
        </LibraryDetail>
      </Box>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_DETAIL_DEFAULT_PROPS,
  asset: VIDEO_ASSET,
};
