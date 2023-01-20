import { createStyles, pxToRem } from '@bubbles-ui/components';

export const AssetPlayerStyles = createStyles(
  (theme, { width, media, styles, framed, mediaRatio, showPlayer, canPlay }) => {
    const isWidthNum = /^\d+$/.test(width);

    let framedProps = {};

    if (framed) {
      framedProps = {
        borderRadius: 8,
        border: `2px solid ${theme.colors.ui02}`,
        overflow: 'hidden',
      };
    }

    return {
      root: {
        position: 'relative',
        height: !media.isURL && 0,
        width: isWidthNum ? pxToRem(width) : width,
        paddingBottom: !media.isURL && `${mediaRatio * 100}%`, // 16/9 aspect ratio
        ...styles,
        ...framedProps,
      },
      coverWrapper: {
        position: 'absolute',
        cursor: canPlay && 'pointer',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: showPlayer && 'none',
      },
      coverShadow: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1000,
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
        display: canPlay ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: showPlayer ? 0 : 1,
        transition: 'opacity 200ms',
      },
      playIcon: {
        color: 'white',
      },
      playerWrapper: {
        position: 'absolute',
        height: '100%',
        width: '100%',
      },
      // ICONS ··································································
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
      expandIcon: {
        backgroundColor: 'transparent',
      },
    };
  }
);
