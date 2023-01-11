import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const AssetPlayerStyles = createStyles(
  (theme, { width, styles, framed, fullScreenMode, mediaRatio }) => {
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
        ...styles,
      },
      playerRoot: {
        width: isWidthNum ? pxToRem(width) : width,
        display: 'flex',
        flexDirection: 'column',
        ...framedProps,
      },
      playerWrapper: {
        position: 'relative',
        height: 0,
        width: '100%',
        paddingBottom: `${mediaRatio * 100}%`, // 16/9 aspect ratio
        overflow: 'hidden',
      },
      cover: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1,
      },
      reactPlayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: 0,
        iframe: {
          borderTopRightRadius: fullScreenMode ? 0 : framed ? 8 : 0,
          borderTopLeftRadius: fullScreenMode ? 0 : framed ? 8 : 0,
        },
      },
      duration: {
        color: theme.colors.mainWhite,
        minWidth: pxToRem(46),
      },
      // PROGRESS BAR ···························································
      progressBarWrapper: {
        position: 'absolute',
        bottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        left: 8,
        right: 8,
        zIndex: 2,
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
      progressBarValue: {
        height: '100%',
        backgroundColor: '#fff',
        transition: 'width 0.1s linear',
        position: 'relative',
      },
      progressBarSeekSlider: {
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
      // CONTROLS BAR ···························································
      controlBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      controlBarControls: {
        marginBlock: 8,
        marginRight: 12,
        alignSelf: 'end',
        display: 'flex',
        gap: 8,
      },
      controlBarDuration: {
        marginBlock: 8,
        marginLeft: 12,
        color: theme.colors.text05,
        fontWeight: 500,
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
