import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const SpotlightStyles = createStyles((theme, {}) => {
  return {
    actionBody: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
  };
});
