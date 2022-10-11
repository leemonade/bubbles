import React, { useState, useEffect } from 'react';
import { Box, Paragraph } from '@bubbles-ui/components';
import { AssetPlayer } from './AssetPlayer';
import { ASSET_PLAYER_DEFAULT_PROPS } from './AssetPlayer.constants';
import mdx from './AssetPlayer.mdx';
import {
  VIDEO_ASSET,
  YOUTUBE_ASSET,
  AUDIO_ASSET,
  IMAGE_ASSET,
  URL_ASSET,
} from '../../library/LibraryCard/mock/data';

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
    test_asset: {
      options: ['video', 'youtube', 'audio', 'image', 'url'],
      control: { type: 'select' },
    },
    float: { options: ['none', 'left', 'right'], control: { type: 'select' } },
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

const Template = ({ test_asset, ...props }) => {
  const [asset, setAsset] = useState(IMAGE_ASSET);

  useEffect(() => {
    switch (test_asset) {
      case 'video':
        setAsset(VIDEO_ASSET);
        break;
      case 'audio':
        setAsset(AUDIO_ASSET);
        break;
      case 'youtube':
        setAsset(YOUTUBE_ASSET);
        break;
      case 'url':
        setAsset(URL_ASSET);
        break;
      default:
        setAsset(IMAGE_ASSET);
    }
  }, [test_asset]);

  return (
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        <AssetPlayer {...props} asset={asset} />
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ASSET_PLAYER_DEFAULT_PROPS,
  test_asset: 'video',
};
