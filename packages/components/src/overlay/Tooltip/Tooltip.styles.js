import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../theme.mixins';

const getSizes = (theme, size) => {
  const spacing = theme.spacing;

  return {
    xs: {
      fontSize: pxToRem(12),
      height: pxToRem(spacing[5]),
      ...getPaddings(spacing[1], spacing[2]),
    },

    sm: {
      fontSize: pxToRem(theme.fontSizes['1']),
      height: pxToRem(spacing[7]),
      ...getPaddings(spacing[1], spacing[3]),
    },
    md: {
      fontSize: pxToRem(theme.fontSizes['2']),
      height: pxToRem(spacing[10]),
      ...getPaddings(spacing[2], spacing[4]),
    },
  }[size];
};

const getColor = (theme, color) => {
  return {
    primary: {
      backgroundColor: theme.colors.interactive01h,
      color: theme.other.button.content.color.primary['default--reverse'],
      '&:hover': {
        backgroundColor: theme.colors.interactive01h,
      },
      '&:active': {
        backgroundColor: theme.colors.interactive01h,
        borderColor: theme.colors.interactive01h,
      },
    },
    secondary: {
      backgroundColor: theme.colors.interactive02h,
      color: theme.other.button.content.color.primary['default--reverse'],
      '&:hover': {
        backgroundColor: theme.colors.interactive02h,
      },
      '&:active': {
        backgroundColor: theme.colors.interactive02,
        borderColor: theme.colors.interactive01,
      },
    },
  }[color];
};

export const TooltipStyles = createStyles((theme, { color, size }) => {
  return {
    root: {},
    arrow: {
      ...getColor(theme, color),
    },
    tooltip: {
      ...getFontExpressive(null, 400),
      ...getColor(theme, color),
      ...getSizes(theme, size),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      svg: {
        marginLeft: pxToRem(5),
      },
    },
  };
});
