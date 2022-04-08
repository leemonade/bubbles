import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const HorizontalTimelineStyles = createStyles((theme, { color, rootStyles }) => {
  const isPositive = color === 'positive';

  return {
    root: {
      ...rootStyles,
    },
    timelineContainer: {
      width: '100%',
      position: 'relative',
      height: 51,
    },
    dot: {
      height: 15,
      width: 15,
      borderRadius: '50%',
      border: `1px dashed ${isPositive ? theme.colors.mainWhite : theme.colors.interactive02h}`,
      position: 'absolute',
    },
    interval: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bottom: -35,
    },
    intervalLabel: {
      whiteSpace: 'nowrap',
    },
    intervalDate: {
      whiteSpace: 'nowrap',
    },
    progress: {
      position: 'absolute',
      borderTopColor: isPositive ? theme.colors.mainWhite : theme.colors.interactive02,
      borderTopWidth: 1,
      borderTopStyle: 'dashed',
      top: '50%',
      right: 'calc(0% + 15px)',
      zIndex: 0,
    },
  };
});
