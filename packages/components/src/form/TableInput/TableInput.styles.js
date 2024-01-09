import { createStyles } from '@mantine/styles';

const TableInputStyles = createStyles((theme, { hasError, disabled, rowStyles }) => ({
  root: {},
  tHead: {
    '&:after': !disabled && {
      content: '"@"',
      display: 'block',
      lineHeight: '16px',
      textIndent: -99999,
    },
  },
  wrapper: {
    border: hasError && `1px solid ${theme.colors.fatic01}`,
    borderRadius: 4,
    padding: hasError && theme.spacing[1],
    marginBottom: hasError && theme.spacing[1],
  },
  inputCell: {
    paddingLeft: theme.spacing[2],
    paddingRight: theme.spacing[2],
    verticalAlign: 'top !important',
  },
  actionCell: {
    textAlign: 'center',
  },
  row: {
    backgroundColor: theme.colors.uiBackground01,
    ...rowStyles,
  },
  rowDragging: {
    display: 'table',
    boxShadow: theme.shadows.shadow03,
    paddingLeft: 10,
  },
  sortIcon: {
    color: theme.colors.ui01,
    cursor: 'grab',
    paddingTop: theme.spacing[3],
  },
}));

export { TableInputStyles };
