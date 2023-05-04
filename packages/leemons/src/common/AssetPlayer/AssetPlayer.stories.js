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
  PDF_ASSET,
  AFRAME_ASSET,
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
      options: ['video', 'youtube', 'audio', 'image', 'url', 'pdf', '3d'],
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
      case 'pdf':
        setAsset(PDF_ASSET);
        break;
      case '3d':
        setAsset(AFRAME_ASSET);

        setTimeout(() => {
          setAsset({
            ...AFRAME_ASSET,
            name: 'Holaaa',
            metadata: [
              { label: 'bgFromColor', value: '#FABADA' },
              { label: 'bgToColor', value: '#BADADA' },
            ],
          });
        }, 3000);

        break;
      default:
        setAsset(IMAGE_ASSET);
    }
  }, [test_asset]);

  return <AssetPlayer {...props} asset={asset} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ASSET_PLAYER_DEFAULT_PROPS,
  test_asset: 'video',
  pdfLabels: {
    pageLabel: 'Página',
    paginatorLabel: 'de',
    schemaLabel: 'Esquema',
  },
};
