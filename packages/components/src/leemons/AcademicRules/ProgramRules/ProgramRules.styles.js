import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const ProgramRulesStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
  };
});
