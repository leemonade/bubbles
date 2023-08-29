import { createStyles, pxToRem } from '@bubbles-ui/components';

export const AssetPlayerStyles = createStyles(
  (
    theme,
    { width, media, styles, framed, viewPDF, mediaRatio, showPlayer, canPlay, useAudioCard }
  ) => {
    const isWidthNum = /^\d+$/.test(width);

    let framedProps = {};

    if (framed) {
      framedProps = {
        borderRadius: 8,
        border: `2px solid ${theme.colors.ui02}`,
        overflow: 'hidden',
      };
    }

    const useMediaRatio =
      !media.isURL && !media.isImage && !media.isPDF && !(media.isAudio && useAudioCard);

    return {
      rootWrapper: {
        width: isWidthNum ? pxToRem(width) : width,
        height: media.isPDF && viewPDF && '100%',
      },
      root: {
        position: 'relative',
        height: media.isPDF && viewPDF ? '100%' : useMediaRatio && 0,
        width: '100%',
        paddingBottom: useMediaRatio && `${mediaRatio * 100}%`, // 16/9 aspect ratio
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
        userSelect: 'none',
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
      pdfCover: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(.jpg)',
        position: 'relative',
      },
      pdfDownloadIcon: {
        position: 'absolute',
        height: 24,
        width: 24,
        bottom: 10,
        right: 16,
        color: theme.other.global.content.color.icon['default--reverse'],
        cursor: 'pointer',
        '&:active': {
          transform: 'translateY(2px)',
        },
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
        position: 'absolute',
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
