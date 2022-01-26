import { createStyles } from '@mantine/styles';
// import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';
import {
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components/src/theme.mixins';

export const RuleConditionStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      alignItems: 'center',
      padding: pxToRem(8),
    },
    logicOperator: {
      marginRight: pxToRem(8),
      width: pxToRem(120),
    },
    sourceSelects: {
      marginBottom: pxToRem(-4),
      marginRight: pxToRem(8),
      display: 'flex',
    },
  };
});
