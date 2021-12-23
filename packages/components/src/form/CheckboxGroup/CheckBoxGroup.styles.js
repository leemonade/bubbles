import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CheckboxGroupStyles = createStyles((theme, { direction, variant }) => {
  const isDefault = variant === 'default';
  const isRow = direction === 'row';

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    container: {
      alignItems: isRow && 'baseline',
      gap: isDefault && isRow && pxToRem(theme.spacing[4]),
      display: isRow ? 'inline-flex' : 'inline-block',
      alignItems: isRow && 'stretch',
      '> div': {
        alignItems: isRow && 'flex-start',
        marginBottom: isDefault && !isRow && pxToRem(theme.spacing[4]),
      },
    },
  };
});
