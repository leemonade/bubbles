import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const StepStyles = createStyles(
  (theme, { isButton, isText, isActive, isCompleted, isChild, showChild, childRange }) => {
    const stepHeight = isButton ? 56 : isText ? 32 : 44;
    const childHeight = childRange ? 32 * (childRange[1] - childRange[0] + 1) : 0;

    return {
      root: {
        paddingLeft: !isChild ? 24 : 40,
        paddingTop: !isChild ? (isText ? 6 : 12) : 4,
        paddingBottom: isText ? 6 : 12,
        paddingRight: 8,
        display: isChild && !showChild ? 'none' : 'flex',
        alignItems: isButton && 'center',
        position: 'relative',
        height: !isChild ? stepHeight : 32,
      },
      labelContainer: {
        flex: 1,
        paddingRight: 26,
      },
      label: {
        fontWeight: 500,
        color: !isActive ? theme.colors.text04 : theme.colors.text01,
      },
      badge: {
        marginLeft: '12px',
      },
      isCompletedBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: isCompleted ? stepHeight + childHeight : 0,
        overflow: 'hidden',
        transition: 'height 0.2s ease-in-out',
        backgroundColor: theme.colors.interactive03,
        zIndex: -1,
      },
    };
  }
);
