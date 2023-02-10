import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const RadioStyles = createStyles(
  (theme, { variant, help, helpPosition, checked, icon, image, children, label }) => {
    const isIcon = variant === 'icon';
    const isDefault = variant === 'default';
    const isImage = variant === 'image';
    const isBoxed = variant === 'boxed';
    const isBottom = helpPosition === 'bottom';
    const isRight = helpPosition === 'right';
    const hasIcon = !!icon;
    const hasImage = !!image;
    const hasLabel = !!children || !!label;
    const radioTheme = theme.other.radio;

    return {
      imageWrapper: {
        display: isImage && 'flex',
        alignItems: isImage && 'center',
        gap: isImage && 16,
        cursor: isImage && 'pointer',
      },
      root: {
        padding: 14,
        display: isIcon && 'flex',
        justifyContent: isIcon && 'center',
        alignItems: isIcon && 'center',
        pointerEvents: 'none',
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
        alignItems: isIcon || isImage ? 'center' : 'baseline',
      },
      title: {
        ...getFontProductive(theme.fontSizes['2'], 500),
        marginTop: help !== '' && isBottom ? pxToRem(1.5) : null,
        color: isIcon ? (checked ? theme.colors.text01 : theme.colors.text02) : theme.colors.text01,
        lineHeight: pxToRem(17),
        whiteSpace: 'nowrap',
      },
      help: {
        ...getFontProductive(theme.fontSizes[isBoxed ? '2' : '1'], isBoxed ? 500 : 400),
        lineHeight: isDefault ? pxToRem(16) : pxToRem(17),
        color: theme.colors.text02,
        marginLeft: hasLabel && isRight ? pxToRem(theme.spacing[4]) : null,
        marginTop: hasLabel && isBottom ? pxToRem(theme.spacing[1]) : null,
        textAlign: 'left',
      },
      radio: {
        height: 20,
        width: 20,
        '&:checked': {
          backgroundColor: radioTheme.background.color.selected,
          border: `1px solid ${radioTheme.border.color.selected}`,
        },
        cursor: 'pointer',
      },
      icon: {
        color: checked ? radioTheme.content.color.selected : theme.colors.text05,
        marginBottom: isIcon && hasLabel && 10,
        display: ((isIcon && !hasIcon) || (isImage && !hasImage)) && 'none',
        lineHeight: 0,
      },
      inner: {
        display: isIcon && 'none',
      },
    };
  }
);
