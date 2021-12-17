import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ColorPickerStyles = createStyles((theme, {colors }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    swatches: {
      'div': {
        boxShadow: 'none',
      },
      '.mantine-ColorPicker-swatch': {
        borderRadius: '50%',
      },
    }
  };
});
