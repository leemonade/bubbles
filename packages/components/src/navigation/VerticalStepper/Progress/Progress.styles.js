import { createStyles } from '@mantine/styles';

const ProgressStyles = createStyles(
  (theme, { position, isButton, isActivity, isText, isCurrent, isVisited, state }) => {
    const stepperTheme = theme.other.stepper ?? {};
    const isFirst = position === 'start';
    const isLast = position === 'end';
    const isBetween = position === 'between';

    const getBarHeight = () => {
      let height = isButton || isActivity ? 42 : 35;
      if (isBetween) {
        height = isButton || isActivity ? 62 : 55;
      }
      return isLast || isFirst ? Math.round(height / 1.5) : height;
    };

    const getBarPosition = () => {
      let result = 'none';

      if (isLast) result = 'translateY(-70%)';
      if (isFirst) result = 'translateY(70%)';

      return result;
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
        height: getBarHeight(),
        borderLeft: `1px solid ${stepperTheme.background?.color?.default}`,
        zIndex: 0,
        transform: getBarPosition(),
      },
      solidBar: {
        position: 'absolute',
        height: getBarHeight(),
        borderLeft: `1px solid ${stepperTheme.background?.color?.default}`,
        zIndex: 0,
        transform: getBarPosition(),
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
      blockedIconContainer: {
        width: 16,
        height: 16,
        paddingTop: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        background: theme.colors.mainWhite,
      },
      blockedIcon: {
        color: stepperTheme.background?.color?.default,
      },
    };
  },
);

export { ProgressStyles };
