import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const AssetPlayerStyles = createStyles(
  (theme, { height, width, styles, showPlayer, color, seconds }) => {
    const isHeightNum = /^\d+$/.test(height);
    const isWidthNum = /^\d+$/.test(width);

    return {
      root: {
        height: isHeightNum ? pxToRem(height) : height,
        width: isWidthNum ? pxToRem(width) : width,
        ...styles,
      },
      playerWrapper: {
        position: 'relative',
        height: '100%',
        width: '100%',
      },
      cover: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: showPlayer ? -1 : 1,
      },
      color: {
        backgroundColor: color,
        height: 8,
        position: 'absolute',
        zIndex: showPlayer ? -1 : 1,
        bottom: 0,
        width: '100%',
      },
      reactPlayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
      },
      progressBarWrapper: {
        position: 'absolute',
        bottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        left: 8,
        right: 8,
      },
      progressBar: {
        WebkitAppearance: 'none',
        height: pxToRem(8),
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
      },
      duration: {
        color: theme.colors.mainWhite,
        minWidth: seconds < 3600 ? pxToRem(30) : pxToRem(46),
      },
      progressBarValue: {
        height: '100%',
        backgroundColor: '#fff',
        transition: 'width 0.1s linear',
        position: 'relative',
      },
      seekSlider: {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'transparent',
        height: pxToRem(8),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 0,
        cursor: 'pointer',
        '::-webkit-slider-thumb': {
          visibility: 'hidden',
          WebkitAppearance: 'none',
          appearance: 'none',
          width: pxToRem(8),
          height: pxToRem(8),
          borderRadius: '50%',
          backgroundColor: theme.colors.mainBlack,
          cursor: 'pointer',
        },
        '::-moz-range-thumb': {
          visibility: 'hidden',
          MozAppearance: 'none',
          appearance: 'none',
          width: pxToRem(8),
          height: pxToRem(8),
          borderRadius: '50%',
          backgroundColor: theme.colors.mainBlack,
          cursor: 'pointer',
        },
      },
      audioIcon: {
        position: 'absolute',
        bottom: 30,
        left: 10,
      },
      fileIcon: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: theme.colors.interactive03h,
        padding: pxToRem(16),
        borderRadius: '4px 2px 0 0',
      },
    };
  }
);
