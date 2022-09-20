import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const RadioStyles = createStyles(
  (theme, { variant, help, helpPosition, checked, icon, children, label }) => {
    const isIcon = variant === 'icon';
    const isDefault = variant === 'default';
    const isBoxed = variant === 'boxed';
    const isBottom = helpPosition === 'bottom';
    const isRight = helpPosition === 'right';
    const hasIcon = !!icon;
    const hasLabel = !!children || !!label;

    return {
      root: {
        ...getFontExpressive(theme.fontSizes['2']),
      },
      radioWrapper: {
        padding: 16,
        alignItems: isBottom && 'flex-start',
        // backgroundColor: !isDefault && (checked ? 'white' : theme.colors.interactive03),
        // border: !isDefault && (checked ? `1px solid ${theme.colors.ui01}` : `1px solid transparent`),
      },
      radio: {
        display: isIcon ? 'none' : null,
        '&:checked': {
          background: theme.colors.ui02,
          border: `1px solid ${theme.colors.interactive01d}`,
          '::before': {
            backgroundColor: theme.colors.interactive01,
          },
        },
      },
      container: {
        display: 'flex',
        flexDirection: isBottom || isIcon ? 'column' : null,
        alignItems: isIcon ? 'center' : 'baseline',
      },
      title: {
        ...getFontProductive(theme.fontSizes['2'], 500),
        marginTop: help !== '' && isBottom ? pxToRem(1.5) : null,
        color: isIcon ? (checked ? theme.colors.text01 : theme.colors.text02) : theme.colors.text01,
        lineHeight: pxToRem(17),
      },
      icon: {
        color: checked ? theme.colors.interactive01h : theme.colors.text05,
        marginBottom: isIcon && hasLabel && 10,
        display: isIcon && !hasIcon && 'none',
      },
      help: {
        ...getFontProductive(theme.fontSizes[isBoxed ? '2' : '1'], isBoxed ? 500 : 400),
        lineHeight: isDefault ? pxToRem(16) : pxToRem(17),
        color: theme.colors.text02,
        marginLeft: isRight ? pxToRem(theme.spacing[4]) : null,
        marginTop: isBottom ? pxToRem(theme.spacing[1]) : null,
      },
      inner: {
        display: isIcon && 'none',
      },
      label: {
        alignItems: help !== '' && isBottom ? 'flex-start' : null,
        justifyContent: isIcon ? 'center' : null,
        userSelect: 'none',
        marginLeft: isIcon && 0,
      },
    };
  }
);
