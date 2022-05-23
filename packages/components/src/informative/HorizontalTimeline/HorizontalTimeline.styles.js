import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const HorizontalTimelineStyles = createStyles(
  (theme, { color, EVENT_WIDTH, rootStyles }) => {
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
      event: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: EVENT_WIDTH,
      },
      dot: {
        height: 15,
        width: 15,
        borderRadius: '50%',
        border: `1px dashed ${isPositive ? theme.colors.mainWhite : theme.colors.interactive02h}`,
      },
      eventInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
      },
      intervalLabel: {
        whiteSpace: 'nowrap',
        color: isPositive && theme.colors.text07,
      },
      intervalDate: {
        whiteSpace: 'nowrap',
        color: isPositive && theme.colors.text07,
      },
      progress: {
        position: 'absolute',
        borderTopColor: isPositive ? theme.colors.mainWhite : theme.colors.interactive02,
        borderTopWidth: 1,
        borderTopStyle: 'dashed',
        top: '7px',
        right: 'calc(50% + 7px)',
        zIndex: 0,
      },
      completedProgress: {},
    };
  }
);
