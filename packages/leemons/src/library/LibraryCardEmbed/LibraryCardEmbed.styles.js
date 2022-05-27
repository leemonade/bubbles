import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardEmbedStyles = createStyles(
  (theme, { showPlayer, fullScreenMode, color, variant, fileType }) => {
    const isMedia = variant === 'media';
    const isVideo = fileType === 'video';

    return {
      root: {
        borderRadius: showPlayer ? 8 : 4,
        backgroundColor: theme.colors.mainWhite,
        border: `2px solid ${theme.colors.ui02}`,
        width: 'auto',
        minWidth: 420,
      },
      imagePlaceholder: {
        width: 172,
        height: 156,
        backgroundColor: theme.colors.interactive03h,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
        paddingBottom: pxToRem(16),
        paddingRight: pxToRem(16),
      },
      color: {
        backgroundColor: color,
        height: 8,
        width: '100%',
        borderTopRightRadius: 2,
      },
      content: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        paddingInline: pxToRem(12),
        gap: pxToRem(16),
      },
      title: {
        flex: 1,
        fontWeight: 600,
      },
      description: {
        padding: pxToRem(16),
        flex: 1,
      },
      footer: {
        paddingLeft: pxToRem(16),
        paddingBlock: pxToRem(8),
        display: 'flex',
        gap: 24,
      },
      playerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      player: {
        iframe: {
          borderTopRightRadius: fullScreenMode ? 0 : 8,
          borderTopLeftRadius: fullScreenMode ? 0 : 8,
        },
      },
      playerControls: {
        marginBlock: 8,
        marginRight: 12,
        alignSelf: 'end',
        display: 'flex',
        gap: 8,
      },
      controlRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      expandIcon: {
        backgroundColor: 'transparent',
        display: isMedia && !isVideo && 'none',
      },
      duration: {
        marginBlock: 8,
        marginLeft: 12,
        color: theme.colors.text05,
        fontWeight: 500,
      },
      bookmarkButton: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        span: {
          color: theme.colors.text04,
        },
        cursor: 'pointer',
      },
    };
  }
);
