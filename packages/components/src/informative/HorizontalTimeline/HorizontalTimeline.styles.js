import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const HorizontalTimelineStyles = createStyles((theme, { color }) => {
  const isPositive = color === 'positive';

  return {
    root: {
      width: '100%',
      height: 55,
      position: 'relative',
    },
    interval: {
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: 500,
    },
    dot: {
      height: 15,
      width: 15,
      borderRadius: '50%',
      border: `1px dashed ${isPositive ? theme.colors.mainWhite : theme.colors.interactive02h}`,
      marginBottom: 8,
      backgroundColor: '#333',
      zIndex: 2,
    },
    progress: {
      position: 'absolute',
      height: 0,
      borderTopColor: isPositive ? theme.colors.mainWhite : theme.colors.interactive02,
      borderTopWidth: 1,
      borderTopStyle: 'dashed',
      top: 6,
      zIndex: 0,
    },
  };
});
