import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CheckBoxGroupStyles = createStyles((theme, { direction, variant, fullWidth }) => {
  const isDefault = variant === 'default';
  const isBoxed = variant === 'boxed';
  const isRow = direction === 'row';

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    group: {
      alignItems: isRow && 'baseline',
      alignItems: isRow ? (isBoxed ? 'stretch' : 'baseline') : null,
      '> div:not(:last-child)': {
        marginBottom: isDefault && !isRow && pxToRem(11),
        marginRight: isDefault && isRow && pxToRem(theme.spacing[4]),
      },
      '> div': {
        alignItems: isRow && isBoxed ? 'flex-start' : null,
        flex: fullWidth && 1,
      },
      '.mantine-Checkbox-root': {
        flex: fullWidth && `none !important`,
      },
      '.mantine-Checkbox-help': {
        marginTop: isRow ? (isBoxed ? pxToRem(1.5) : null) : null,
      },
    },
  };
});
