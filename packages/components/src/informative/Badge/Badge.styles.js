import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getPadding = (size, isMedium, image) => {
  const isMediumImage = !!image && isMedium;

  switch (size) {
    case 'xs':
      return `${pxToRem(4)} ${pxToRem(12)} ${pxToRem(4)} ${pxToRem(12)}`;
    case 'md':
      return `${pxToRem(isMediumImage ? 9 : 8)} ${pxToRem(12)} ${pxToRem(
        isMediumImage ? 9 : 8
      )} ${pxToRem(12)}`;
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

const getColor = (theme, color) => {
  switch (color) {
    case 'solid':
      return {
        backgroundColor: theme.colors.interactive03h,
        borderColor: theme.colors.interactive03h,
      };
    case 'stroke':
      return {
        backgroundColor: theme.colors.mainWhite,
        borderColor: theme.colors.ui01,
        '&:hover': {
          borderColor: theme.colors.text05,
        },
      };
    default:
      return {
        backgroundColor: theme.colors.interactive03h,
        borderColor: theme.colors.interactive03h,
      };
  }
};

export const BadgeStyles = createStyles((theme, { size, color, image }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'xs';
  const isMedium = size === 'md';

  return {
    root: {
      ...getTextSize(theme, size),
      ...getColor(theme, color),
      color: theme.colors.text01,
      textTransform: 'none',
      borderRadius: pxToRem(100),
      padding: getPadding(size, isMedium, image),
      paddingLeft: image && (isSmall ? pxToRem(29) : isMedium ? pxToRem(40) : null),
      height: 'auto',
    },
    inner: {
      overflow: 'unset',
    },
    rightSection: {
      marginLeft: pxToRem(9),
      display: 'flex',
      color: theme.colors.text05,
    },
    container: {
      display: 'inline-flex',
      position: 'relative',
      '.mantine-Avatar-root': {
        display: isLarge ? 'none' : 'flex',
        height: getAvatarSize(size),
        width: getAvatarSize(size),
        position: 'absolute',
        left: isSmall ? pxToRem(-3) : isMedium ? pxToRem(-3) : null,
        top: isMedium && pxToRem(-1),
      },
    },
    closeButton: {
      '&:active': {
        transform: `translateY(${isSmall ? '0.5px' : '1px'})`,
      },
    },
  };
});
