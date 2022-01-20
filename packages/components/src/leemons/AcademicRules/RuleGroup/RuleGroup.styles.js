import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const RuleGroupStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
  };
});
