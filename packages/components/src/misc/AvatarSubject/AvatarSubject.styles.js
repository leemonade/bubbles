import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

const getBubbleSize = (theme, size) => {
  return {
    xs: {
      minWidth: theme.spacing['2'],
      maxWidth: theme.spacing['2'],
      minHeight: theme.spacing['2'],
      maxHeight: theme.spacing['2'],
    },
    sm: {
      minWidth: theme.spacing['4'],
      maxWidth: theme.spacing['4'],
      minHeight: theme.spacing['4'],
      maxHeight: theme.spacing['4'],
    },
    md: {
      minWidth: theme.spacing['5'],
      maxWidth: theme.spacing['5'],
      minHeight: theme.spacing['5'],
      maxHeight: theme.spacing['5'],
    },
    lg: {
      minWidth: theme.spacing['7'],
      maxWidth: theme.spacing['7'],
      minHeight: theme.spacing['7'],
      maxHeight: theme.spacing['7'],
    },
    xlg: {
      minWidth: theme.spacing['11'],
      maxWidth: theme.spacing['11'],
      minHeight: theme.spacing['11'],
      maxHeight: theme.spacing['11'],
    },
  }[size];
};

const getIconSize = (theme, size) => {
  return {
    xs: { height: '0px' },
    sm: { height: theme.spacing['3'] },
    md: { height: theme.spacing['4'] },
    lg: { height: theme.spacing['5'] },
    xlg: { height: theme.spacing['8'] },
  }[size];
};

export const AvatarSubjectStyles = createStyles((theme, { size }) => {
  console.log(theme);
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
