import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getPadding = (size) => {
  switch (size) {
    case 'xs':
      return `${pxToRem(4)} ${pxToRem(12)} ${pxToRem(4)} ${pxToRem(12)}`;
    case 'md':
      return `${pxToRem(8)} ${pxToRem(12)} ${pxToRem(8)} ${pxToRem(12)}`;
    case 'lg':
      return `${pxToRem(12)} ${pxToRem(12)} ${pxToRem(12)} ${pxToRem(12)}`;
    default:
      return `${pxToRem(4)} ${pxToRem(12)} ${pxToRem(4)} ${pxToRem(12)}`;
  }
};

const getTextSize = (theme, size) => {
  switch (size) {
    case 'xs':
      return getFontExpressive(theme.fontSizes[1], 400);
    case 'md':
      return getFontExpressive(theme.fontSizes[2], 400);
    case 'lg':
      return getFontExpressive(theme.fontSizes[3], 400);
    default:
      return getFontProductive(theme.fontSizes[1], 400);
  }
};

const getAvatarSize = (size) => {
  switch (size) {
    case 'xs':
      return 26;
    case 'md':
      return 38;
    default:
      return 26;
  }
};

export const BadgeStyles = createStyles((theme, { size }) => {
  const isLarge = size === 'lg';

  return {
    root: {
      ...getTextSize(theme, size),
      backgroundColor: theme.colors.interactive03h,
      color: theme.colors.text01,
      textTransform: 'none',
      borderRadius: pxToRem(100),
      // padding: getPadding(size),
      paddingLeft: 0,
      height: 'auto',
    },
    inner: {
      overflow: 'unset',
      // marginLeft: 30,
    },
    rightSection: {
      marginLeft: pxToRem(9),
      display: 'flex',
      color: theme.colors.text05,
    },
    // container: {
    //   display: 'flex',
    //   '.mantine-Avatar-root': {
    //     height: getAvatarSize(size),
    //     width: getAvatarSize(size),
    //   },
    // },
    leftSection: {
      marginRight: pxToRem(theme.spacing[2]),
      display: isLarge ? 'none' : 'flex',
      '.mantine-Avatar-root': {
        height: getAvatarSize(size),
        width: getAvatarSize(size),
      },
    },
  };
});
