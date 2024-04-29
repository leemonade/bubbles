import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive } from '../../theme.mixins';

const RadioGroupStyles = createStyles(
  (
    theme,
    { variant, value, direction, fullWidth, minWidth, activePosition, hasError, rounded },
  ) => {
    const isColumn = direction === 'column';
    const isDefault = variant === 'default' || variant === 'image';
    const isIcon = variant === 'icon';
    const isBoxed = variant === 'boxed';
    const isImage = variant === 'image';

    const radioProps = {
      pointerEvents: 'none'
    };

    if(minWidth && !isIcon) {
      radioProps.paddingRight = 0;
    }

    return {
      root: {
        padding: 0,
        ...getFontExpressive(theme.fontSizes['2']),
        backgroundColor: isDefault ? 'transparent' : null,
        borderRadius: rounded && !isImage ? 4 : 0,
        display: fullWidth ? 'flex' : 'inline-flex',
        flexDirection: direction,
        border: hasError ? `1px solid ${theme.colors.fatic01}` : 'none',
        paddingRight: isIcon && 1,
        gap: isImage && 28,
      },
      label: {
        padding: 0,
        paddingRight: isDefault && !minWidth ? pxToRem(24) : null,
        display: 'flex',
        justifyContent: isIcon && 'center',
        height: '100%',
        alignItems: (isDefault || isBoxed) && 'flex-start',
        whiteSpace: 'unset',
        borderRadius: isImage && 0,
      },
      active: {
        display: !value || isDefault ? 'none' : null,
        boxShadow:
          value && !isDefault
            ? `inset 0 0 0 1px ${
                isIcon ? theme.other.button.border.color.secondary.default : theme.colors.ui01
              }`
            : null,
        borderRadius: rounded && !isImage ? 4 : 0,
        top: 4,
        left: 4,
        bottom: 0,
        height: isColumn ? activePosition.height : 'auto',
        transitionTimingFunction: 'ease-out',
      },
      radio: radioProps,
      control: {
        '&:not(:first-of-type)': {
          border: 'none',
        },
      },
    };
  },
);

export { RadioGroupStyles };
