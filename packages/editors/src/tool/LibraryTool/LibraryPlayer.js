import { useEffect } from 'react';
import { Box } from '@bubbles-ui/components';
import PropTypes from 'prop-types';
import { AssetPlayer, LibraryCardEmbed, LibraryCard } from '@bubbles-ui/leemons';
import { isEmpty } from 'lodash';
import { NodeViewWrapper } from '@tiptap/react';

export const LIBRARY_PLAYER_DISPLAYS = ['card', 'player'];
export const LIBRARY_PLAYER_ALIGNS = ['left', 'center', 'right'];

export const LIBRARY_PLAYER_DEFAULT_PROPS = {
  node: {
    attrs: {
      asset: null,
      width: '100%',
      display: 'card',
      align: 'left',
    },
  },
};

export const LIBRARY_PLAYER_PROP_TYPES = {
  node: PropTypes.shape({
    attrs: PropTypes.shape({
      asset: PropTypes.any,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      display: PropTypes.oneOf(LIBRARY_PLAYER_DISPLAYS),
      align: PropTypes.oneOf(LIBRARY_PLAYER_ALIGNS),
    }),
  }),
};

export const LibraryPlayer = ({
  node: {
    attrs: { asset, width, display, align },
  },
}) => {
  const isWidthNum = /^\d+$/.test(width);
  const widthProp = isWidthNum ? `${width}px` : width;

  const getDisplay = () => {
    if (display === 'embed') {
      return (
        <Box style={{ width: widthProp }}>
          <LibraryCardEmbed asset={asset} />
        </Box>
      );
    }

    if (display === 'player') {
      return (
        <AssetPlayer
          asset={asset}
          width={width}
          framed={!['image'].includes(asset.fileType)}
          controlBar
        />
      );
    }

    return (
      <Box style={{ width: widthProp, userSelect: 'none' }}>
        <LibraryCard asset={asset} shadow={false} />
      </Box>
    );
  };

  /*
style={{
            display: 'flex',
            justifyContent: align,
            marginTop: 20,
            margiBottom: 20,
            marginLeft: ['left'].includes(align) ? 0 : 20,
            marginRight: ['right'].includes(align) ? 0 : 20,
          }}
  */
  return (
    <NodeViewWrapper className="library-extension">
      {!asset || isEmpty(asset) ? (
        <div>No Asset found</div>
      ) : (
        <Box
          style={{
            display: 'flex',
            justifyContent: align,
            marginTop: 20,
            margiBottom: 20,
            marginLeft: ['left'].includes(align) ? 0 : 20,
            marginRight: ['right'].includes(align) ? 0 : 20,
          }}
        >
          {getDisplay()}
        </Box>
      )}
    </NodeViewWrapper>
  );
};