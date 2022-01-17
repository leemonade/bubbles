import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CheckBoxGroupStyles = createStyles(
  (theme, { direction, variant, fullWidth, hasError }) => {
    const isDefault = variant === 'default';
    const isBoxed = variant === 'boxed';
    const isRow = direction === 'row';

    return {
      root: {},
      group: {
        border: hasError ? `1px solid ${theme.colors.fatic01}` : 'none',
        width: fullWidth ? 'auto' : 'fit-content',
        alignItems: isRow && 'baseline',
        alignItems: isRow ? (isBoxed ? 'stretch' : 'baseline') : null,
        position: 'relative',
        '> div:not(:last-of-type)': {
          marginBottom: isDefault && !isRow && pxToRem(11),
          marginRight: isDefault && isRow && pxToRem(theme.spacing[4]),
        },
        '> div:not(:first-of-type)': {
          marginLeft: isBoxed && isRow && '-1px',
          marginTop: isBoxed && !isRow && '-1px',
        },
        '> div': {
          alignItems: isRow && isBoxed ? 'flex-start' : null,
          flex: fullWidth && 1,
        },
        '.mantine-Checkbox-root': {
          flex: fullWidth && `none !important`,
        },
        '.mantine-Checkbox-container': {
          position: 'relative',
        },
        '.mantine-Checkbox-help': {
          marginTop: isRow ? (isBoxed ? pxToRem(1.5) : null) : null,
        },
      },
    };
  }
);
