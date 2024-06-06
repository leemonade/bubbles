import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

const getStepHeight = (isButton, isText, isActivity) => {
  if (isButton) return 56;
  if (isText) return 32;
  if (isActivity) return 54;
  return 44;
};

const StepStyles = createStyles(
  (
    theme,

    {
      isButton,
      isText,
      isActive,
      isActivity,
      isChild,
      showChild,
      childRange,
      isVisited,
      isCompleted,
      isChildActive,
    },
  ) => {
    const stepperTheme = theme.other.stepper ?? {};
    const stepHeight = getStepHeight(isButton, isText, isActivity);
    const childHeight = childRange ? 32 * (childRange[1] - childRange[0] + 1) : 0;
    const getLabelColor = () => {
      let color = stepperTheme.content?.color?.default;
      if (isActivity) {
        theme.colors.interactive01;
      } else if (isActive) {
        color = stepperTheme.content?.color?.active;
      } else if (isCompleted) {
        color = stepperTheme.content?.color?.completed;
      }
      return color ?? '#000';
    };
    return {
      root: {
        paddingLeft: !isChild ? 0 : 40,
        paddingTop: !isChild ? (isText ? 6 : isActivity ? 4 : 12) : 4,
        paddingBottom: isText ? 6 : isActivity ? 4 : 12,
        paddingRight: 8,
        display: isChild && !showChild ? 'none' : 'flex',
        alignItems: isButton && 'center',
        position: 'relative',
      },
      defaultVariant: {
        minHeight: isChild ? 32 : stepHeight,
        height: isChild && 32,
        display: isChild && !showChild ? 'none' : 'flex',
        paddingRight: 8,
        position: 'relative',
        paddingLeft: isChild ? 40 : 0,
        paddingTop: isChild ? 4 : 12,
        paddingBottom: 12,
      },
      buttonVariant: {
        minHeight: stepHeight,
        display: 'flex',
        paddingRight: 8,
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 0,
        paddingTop: 12,
        paddingBottom: 12,
      },
      textVariant: {
        minHeight: stepHeight,
        display: 'flex',
        paddingRight: 8,
        position: 'relative',
        paddingLeft: 24,
        paddingTop: 6,
        paddingBottom: 6,
      },
      activityVariant: {
        height: isChild ? 32 : stepHeight,
        display: 'flex',
        paddingRight: 8,
        position: 'relative',
        alignItems: 'center',
        paddingLeft: 24,
        paddingTop: 8,
        paddingBottom: 8,
      },
      labelContainer: {
        flex: 1,
        paddingLeft: 10,
        lineHeight: '16px',
      },
      activityStep: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px',
        border: `1px solid ${isActive ? theme.colors.interactive01h : theme.colors.ui01}`,
        borderRadius: 4,
        backgroundColor: theme.colors.mainWhite,
      },
      activityBadge: {
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        span: {
          color: theme.colors.text01,
        },
      },
      label: {
        fontWeight: isActive ? 500 : 400,
        color: getLabelColor(),
      },
      badge: {
        marginLeft: '12px',
      },
      isVisitedBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: isVisited
          ? stepHeight + (isChildActive || isActive || isCompleted ? childHeight : 0)
          : 0,
        overflow: 'hidden',
        transition: 'height 0.2s ease-in-out',
        backgroundColor: theme.other.core.color.neutral['50'],
        zIndex: -1,
      },
    };
  },
);

export { StepStyles };
