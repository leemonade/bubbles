import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TableStyles = createStyles((theme, {}) => {
  const reset = {
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
  };
  return {
    root: {
      ...reset,
      width: '100%',
      borderCollapse: 'collapse',
    },
    tr: {
      ...reset,
      border: `0px solid ${theme.colors.ui02}`,
      borderBottomWidth: 1,
    },
    th: {
      ...reset,
      ...getPaddings(theme.spacing['2'], theme.spacing['3']),
      textAlign: 'left',
    },
    td: {
      ...reset,
      // display: 'inline-flex',
    },
  };
});
