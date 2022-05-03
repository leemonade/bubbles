import React from 'react';
import { Box } from '@bubbles-ui/components';
import { AssetPlayer } from './AssetPlayer';
import { ASSET_PLAYER_DEFAULT_PROPS } from './AssetPlayer.constants';
import mdx from './AssetPlayer.mdx';

export default {
  title: 'leemons/Common/AssetPlayer',
  parameters: {
    component: AssetPlayer,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    fileType: { options: ['audio', 'video', 'image'], control: 'select' },
    onReady: { action: 'onReady' },
    onStart: { action: 'onStart' },
    onPlay: { action: 'onPlay' },
    onProgress: { action: 'onProgress' },
    onPause: { action: 'onPause' },
    onEnded: { action: 'onEnded' },
    onSeek: { action: 'onSeek' },
    onError: { action: 'onError' },
  },
};

const Template = ({ asset, fileType, ...props }) => {
  asset.fileType = fileType;
  return <AssetPlayer {...props} asset={asset} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ASSET_PLAYER_DEFAULT_PROPS,
  asset: {
    id: '001',
    name: 'Asset 001',
    description: 'This is the Asset 001',
    subtitle: 'This is the subtitle of the Asset 001',
    color: '#FABADA',
    cover:
      'https://images.unsplash.com/photo-1570201420046-782349fc3059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDg5NDMyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    url: 'https://www.youtube.com/watch?v=XfR9iY5y94s&ab_channel=MenAtWorkVEVO',
  },
  fileType: 'video',
  height: '50vh',
  width: '100%',
};
