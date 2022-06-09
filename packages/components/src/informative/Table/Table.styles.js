import { createStyles } from '@mantine/styles';
import { getPaddings } from '../../theme.mixins';

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
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    tr: {
      ...reset,
      '& td, & th': {
        borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
      },
    },
    trSelectable: {
      '& td, & th': {
        borderTop: '1px solid transparent',
      },
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.colors.ui03,
      },
    },
    trActive: {
      '& td': {
        borderColor: theme.colors.interactive01d,
        backgroundColor: theme.colors.interactive01v1,
        borderBottom: `1px solid ${theme.colors.interactive01d}`,
      },
      '& td:first-of-type': {
        borderLeft: `1px solid ${theme.colors.interactive01d}`,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
      },
      '& td:last-child': {
        borderRight: `1px solid ${theme.colors.interactive01d}`,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
      },
    },
    th: {
      ...reset,
      ...getPaddings(theme.spacing['2'], theme.spacing['3']),
      textAlign: 'left',
    },
    td: {
      ...reset,
      verticalAlign: 'middle',
      // display: 'inline-flex',
    },
  };
});
