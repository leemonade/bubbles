import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const RuleConditionStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      alignItems: 'center',
    },
    logicOperator: {
      marginRight: pxToRem(8),
    },
    input: {
      marginBottom: pxToRem(-4),
      marginRight: pxToRem(8),
    },
    sourceSelects: {
      marginBottom: pxToRem(-4),
      marginRight: pxToRem(8),
      display: 'flex',
    },
  };
});
