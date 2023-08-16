import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

const getBubbleSize = (theme, size) => {
  return {
    lg: {
      minWidth: theme.spacing['6'],
      maxWidth: theme.spacing['6'],
      minHeight: theme.spacing['6'],
      maxHeight: theme.spacing['6'],
    },
    sm: {
      minWidth: theme.spacing.lg,
      maxWidth: theme.spacing.lg,
      minHeight: theme.spacing.lg,
      maxHeight: theme.spacing.lg,
    },
  }[size];
};

const getIconSize = (theme, size) => {
  return {
    lg: { height: theme.spacing['4'] },
    sm: { height: theme.spacing['3'] },
  }[size];
};

export const BulletSubjectStyles = createStyles((theme, { size }) => {
  console.log(theme.other);
  const bubbleSize = getBubbleSize(theme, size);
  const iconSize = getIconSize(theme, size);
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    bubble: {
      ...bubbleSize,
      display: 'grid',
      placeContent: 'center',
      borderRadius: '50%',
      img: {
        filter: 'brightness(0) invert(1)',
        ...iconSize,
      },
    },
  };
});
