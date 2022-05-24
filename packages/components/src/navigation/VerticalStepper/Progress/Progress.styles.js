import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';
export const ProgressStyles = createStyles(
  (theme, { position, isButton, isActivity, isText, isCurrent, isVisited, state }) => {
    const isFirst = position === 'start';
    const isLast = position === 'end';
    const isBetween = position === 'between';

    const getSolidBarHeight = () => {
      if (isBetween) {
        return isButton || isActivity ? 56 : 44;
      }
      return isButton || isActivity ? 38 : 32;
    };

    const getPendingBarHeight = () => {
      if (isBetween) {
        return isButton || isActivity ? 55 : 43;
      }
      return isButton || isActivity ? 33 : 27;
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
        height: getPendingBarHeight(),
        borderLeft: `1px dashed ${theme.colors.ui01}`,
        zIndex: -1,
        top: isFirst && (isButton ? 4.5 : 4),
        bottom: isLast && (isButton ? 4.5 : 4),
      },
      solidBar: {
        position: 'absolute',
        height: getSolidBarHeight(),
        borderLeft: `1px solid ${theme.colors.ui01}`,
        backgroundColor: theme.colors.ui01,
        zIndex: -1,
        top: isFirst && 0,
        bottom: isLast && 0,
      },
      pending: {
        height: 12,
        width: 12,
        margin: 4,
        borderRadius: '50%',
        border: `1.5px solid ${theme.colors.text06}`,
        backgroundColor: theme.colors.mainWhite,
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
      currentIcon: {
        color: theme.colors.interactive01,
        backgroundColor: isVisited ? theme.colors.interactive03 : theme.colors.mainWhite,
      },
      completedIcon: {
        color: theme.colors.text06,
        padding: 4,
        backgroundColor: theme.colors.interactive03,
      },
      OKIcon: {
        backgroundColor: theme.colors.fatic02,
        borderRadius: '50%',
        color: theme.colors.mainWhite,
        padding: 4,
      },
      KOIcon: {
        backgroundColor: theme.colors.fatic01,
        borderRadius: '50%',
        color: theme.colors.mainWhite,
        padding: 4,
      },
    };
  }
);
