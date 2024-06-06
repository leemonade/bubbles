import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const MenuStyles = createStyles((theme, { dropdownWidth }) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
  },
  body: {
    boxShadow: theme.shadows.shadow03,
  },
  dropdown: {
    width: dropdownWidth || 'auto',
  },
}));
