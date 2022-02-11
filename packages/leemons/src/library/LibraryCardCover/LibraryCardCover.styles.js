import { createStyles, pxToRem, getFontExpressive } from '@bubbles-ui/components';

export const LibraryCardCoverStyles = createStyles((theme, { color, height, blur, direction }) => {
  const isVertical = direction === 'vertical';

  const getDeadlineStyles = () => {
    if (!isVertical) {
      return {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        right: 0,
        zIndex: 2,
      };
    }

    return {
      marginBottom: pxToRem(4),
      marginInline: pxToRem(6),
    };
  };

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      position: 'relative',
      height: height,
      width: '100%',
      borderRadius: '4px 2px 0 0',
    },
    title: {
      fontWeight: 600,
      lineHeight: pxToRem(20),
      padding: pxToRem(12),
      backgroundColor: isVertical && 'white',
    },
    blurryBox: {
      display: 'flex',
      flexDirection: 'column',
      width: isVertical ? '100%' : '50%',
      height: '100%',
      position: 'absolute',
      bottom: isVertical && 0,
      zIndex: 1,
      background: !isVertical && 'rgba(246, 245, 247, 0.75)',
      backdropFilter: !isVertical && `blur(${blur}px)`,
      justifyContent: isVertical ? 'flex-end' : 'space-between',
      borderRadius: '4px 0 0 0',
    },
    deadline: {
      ...getDeadlineStyles(),
    },
    color: {
      width: '100%',
      height: pxToRem(8),
      backgroundColor: color,
      transition: 'all 0.2s ease-out',
      borderRadius: '2px 0 0 0',
    },
    fileIcon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: theme.colors.interactive03h,
      padding: isVertical
        ? `${pxToRem(0)} ${pxToRem(16)} ${pxToRem(90)} ${pxToRem(16)}`
        : pxToRem(16),
      borderRadius: '4px 2px 0 0',
    },
  };
});
