import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '../../theme.mixins';

const getPadding = (size, isMedium, image, severity) => {
  const isMediumImage = !!image && isMedium;
  const isDefault = severity === 'default';

  switch (size) {
    case 'xs':
      return `${pxToRem(isDefault ? 4 : 1)} ${pxToRem(9)} ${pxToRem(isDefault ? 4 : 1)} ${pxToRem(
        9,
      )}`;
    case 'md':
      return `${pxToRem(isMediumImage ? 9 : 8)} ${pxToRem(12)} ${pxToRem(
        isMediumImage ? 9 : 8,
      )} ${pxToRem(12)}`;
    case 'lg':
      return `${pxToRem(12)} ${pxToRem(12)} ${pxToRem(12)} ${pxToRem(12)}`;
    default:
      return `${pxToRem(4)} ${pxToRem(9)} ${pxToRem(4)} ${pxToRem(12)}`;
  }
};

const getTextSize = (theme, size) => {
  switch (size) {
    case 'xs':
      return getFontProductive(theme.fontSizes[1], 400);
    case 'md':
      return getFontProductive(theme.fontSizes[2], 400);
    case 'lg':
      return getFontProductive(theme.fontSizes[3], 400);
    default:
      return getFontProductive(theme.fontSizes[1], 400);
  }
};

const getColor = (theme, color) => {
  switch (color) {
    case 'solid':
      return {
        backgroundColor: theme.colors.interactive03,
        borderColor: theme.colors.interactive03,
        '&:hover': {
          backgroundColor: theme.colors.interactive03h,
        },
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

export const BadgeStyles = createStyles(
  (theme, { size, color, image, radius, severity, hasOnClick, labelStyles }) => {
    const isLarge = size === 'lg';
    const isSmall = size === 'xs';
    const isMedium = size === 'md';
    const isRounded = radius === 'rounded';

    const getSeverity = () => {
      switch (severity) {
        case 'success':
          return {
            color: theme.colors.fatic02,
            backgroundColor: theme.colors.fatic02v0,
            borderColor: theme.colors.fatic02,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: theme.colors.fatic02v0,
            },
          };
        case 'warning':
          return {
            color: theme.colors.fatic03,
            backgroundColor: theme.colors.fatic03v0,
            borderColor: theme.colors.fatic03,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: theme.colors.fatic03v0,
            },
          };
        case 'error':
          return {
            color: theme.colors.fatic01,
            backgroundColor: theme.colors.fatic01v0,
            borderColor: theme.colors.fatic01,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: theme.colors.fatic01v0,
            },
          };
      }
    };

    return {
      root: {
        // ...getTextSize(theme, size),
        // ...getColor(theme, color),
        // color: theme.colors.text01,
        // textTransform: 'none',
        // borderRadius: isRounded ? pxToRem(100) : pxToRem(4),
        // padding: getPadding(size, isMedium, image),
        // paddingLeft: image && (isSmall ? pxToRem(29) : isMedium ? pxToRem(40) : null),
        // height: 'auto',
      },
      badgeRoot: {
        ...getTextSize(theme, size),
        ...getColor(theme, color),
        letterSpacing: 0,
        color: theme.colors.text01,
        textTransform: 'none',
        borderRadius: isRounded ? pxToRem(100) : pxToRem(4),
        padding: getPadding(size, isMedium, image, severity),
        paddingLeft: image && (isSmall ? pxToRem(29) : isMedium ? pxToRem(40) : null),
        height: 'auto',
        cursor: hasOnClick && 'pointer',
        ...getSeverity(),
      },
      inner: {
        overflow: 'unset',
        ...labelStyles,
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
          position: 'absolute',
          left: pxToRem(-3),
          top: isMedium ? pxToRem(-0.7) : pxToRem(-0.15),
        },
      },
      closeButton: {
        cursor: 'pointer',
        '&:active': {
          transform: `translateY(${isSmall ? '0.5px' : '1px'})`,
        },
      },
    };
  },
);
