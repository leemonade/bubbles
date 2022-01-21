import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

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
