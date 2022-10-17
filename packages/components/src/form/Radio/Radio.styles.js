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
        padding: 16,
        display: isIcon && 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      labelWrapper: {
        display: 'flex',
        alignItems: 'center',
      },
      label: {
        // This is really the container used for label, icon and help
        cursor: 'pointer',
        paddingLeft: isIcon && 0,
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
      help: {
        ...getFontProductive(theme.fontSizes[isBoxed ? '2' : '1'], isBoxed ? 500 : 400),
        lineHeight: isDefault ? pxToRem(16) : pxToRem(17),
        color: theme.colors.text02,
        marginLeft: isRight ? pxToRem(theme.spacing[4]) : null,
        marginTop: isBottom ? pxToRem(theme.spacing[1]) : null,
      },
      radio: {
        height: 20,
        width: 20,
        '&:checked': {
          backgroundColor: theme.colors.ui02,
          border: `1px solid ${theme.colors.interactive01d}`,
        },
      },
      icon: {
        color: checked ? theme.colors.interactive01 : theme.colors.text05,
        marginBottom: isIcon && hasLabel && 10,
        display: isIcon && !hasIcon && 'none',
        height: isIcon && 32,
        width: isIcon && 32,
        svg: {
          width: isIcon && 32,
          height: isIcon && 32,
        },
      },
      inner: {
        display: isIcon && 'none',
      },
    };
  }
);
