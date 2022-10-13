import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const RadioGroupStyles = createStyles(
  (theme, { variant, value, direction, fullWidth, activePosition, hasError, rounded }) => {
    const isColumn = direction === 'column';
    const isDefault = variant == 'default';
    const isIcon = variant == 'icon';
    const isBoxed = variant === 'boxed';

    return {
      root: {
        padding: 0,
        ...getFontExpressive(theme.fontSizes['2']),
        backgroundColor: isDefault ? 'transparent' : null,
        borderRadius: rounded ? 4 : 0,
        display: fullWidth ? 'flex' : 'inline-flex',
        flexDirection: direction,
        border: hasError ? `1px solid ${theme.colors.fatic01}` : 'none',
        paddingRight: isIcon && 1,
      },
      label: {
        padding: 0,
        paddingRight: isDefault ? pxToRem(24) : null,
        display: 'flex',
        justifyContent: isIcon && 'center',
        height: '100%',
        alignItems: (isDefault || isBoxed) && 'flex-start',
      },
      active: {
        display: !value || isDefault ? 'none' : null,
        boxShadow:
          value && !isDefault
            ? `inset 0 0 0 1px ${isIcon ? theme.colors.interactive01d : theme.colors.ui01}`
            : null,
        borderRadius: rounded ? 4 : 0,
        top: 4,
        left: 4,
        bottom: 0,
        height: isColumn ? activePosition.height : 'auto',
        transitionTimingFunction: 'ease-out',
      },
      radio: {
        pointerEvents: 'none',
      },
      control: {
        '&:not(:first-of-type)': {
          border: 'none',
        },
      },
    };
  }
);
