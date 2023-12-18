import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

const ProgressStyles = createStyles(
  (theme, { position, isButton, isActivity, isText, isCurrent, isVisited, state }) => {
    const stepperTheme = theme.other.stepper ?? {};
    const isFirst = position === 'start';
    const isLast = position === 'end';
    const isBetween = position === 'between';

    const getSolidBarHeight = () => {
      if (isBetween) {
        return isButton || isActivity ? 62 : 55;
      }
      return isButton || isActivity ? 42 : 35;
    };

    return {
      root: { minHeight: 20, minWidth: 20 },
      progressContainer: {
        height: 20,
        width: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      pendingBar: {
        position: 'absolute',
        height: getSolidBarHeight(),
        borderLeft: `1px solid ${stepperTheme.background?.color?.default}`,
        zIndex: 0,
        top: isFirst && (isButton ? 4.5 : 4),
        bottom: isLast && (isButton ? 4.5 : 4),
      },
      solidBar: {
        position: 'absolute',
        height: getSolidBarHeight(),
        borderLeft: `1px solid ${stepperTheme.background?.color?.default}`,
        zIndex: 0,
        top: isFirst ? 5 : -5,
        bottom: isLast && 0,
      },
      pendingIcon: {
        height: 12,
        width: 12,
        margin: 4,
        zIndex: 1,
        borderRadius: '50%',
        backgroundColor: stepperTheme.background?.color?.default,
      },
      progressBar: {
        height: 34,
        width: 1,
        backgroundColor: theme.colors.ui01,
        transform: !isText && 'translateY(2px)',
        position: 'relative',
      },
      progressBarCurrent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: isCurrent ? 34 : 0,
        backgroundColor: theme.colors.interactive01,
        transition: 'height 0.2s ease-in-out',
      },
      textBar: {
        height: 34,
        borderLeft: `1px ${state === 'pending' ? 'dashed' : 'solid'} ${theme.colors.ui01}`,
        backgroundColor: theme.colors.ui01,
        zIndex: -1,
      },
      currentIconContainer: {
        width: 16,
        height: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        borderRadius: '50%',
        border: `2px solid ${stepperTheme.background?.color?.completed}`,
        color: stepperTheme.color?.icon || '#0C1F22',
        backgroundColor: theme.stepper?.background?.color?.['active--reverse'] || '#F1FFBD',
      },
      currentIcon: {
        zIndex: 2,
        color: stepperTheme.color?.icon || '#0C1F22',
      },
      completedIcon: {
        backgroundColor: stepperTheme.background?.color?.completed,
        borderRadius: '50%',
        zIndex: 1,
        color: stepperTheme.color?.icon || '#0C1F22',
        padding: 4,
      },
      OKIcon: {
        backgroundColor: theme.colors.fatic02,
        borderRadius: '50%',
        color: theme.colors.mainWhite,
        padding: 4,
        zIndex: 1,
      },
      KOIcon: {
        backgroundColor: theme.colors.fatic01,
        borderRadius: '50%',
        color: theme.colors.mainWhite,
        padding: 4,
        zIndex: 1,
      },
    };
  },
);

export { ProgressStyles };
