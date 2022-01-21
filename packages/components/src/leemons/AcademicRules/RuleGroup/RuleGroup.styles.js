import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const RuleGroupStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      padding: pxToRem(8),
    },
    draggableGroup: {
      backgroundColor: '#eee',
      border: '2px dotted #ccc',
      borderRadius: pxToRem(4),
    },
    logicOperator: {
      marginRight: pxToRem(8),
      width: pxToRem(120),
    },
    input: {
      marginBottom: pxToRem(-4),
      marginRight: pxToRem(8),
    },
    pepito: {
      display: 'flex',
      padding: pxToRem(8),
    },
  };
});
