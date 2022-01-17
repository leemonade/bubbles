import { createStyles } from '@mantine/styles';

export const TableInputStyles = createStyles((theme, {}) => {
  return {
    root: {},
    inputCell: {
      paddingLeft: theme.spacing[2],
      paddingRight: theme.spacing[2],
    },
    actionCell: {
      textAlign: 'center',
    },
    row: {
      backgroundColor: theme.colors.uiBackground01,
    },
    sortIcon: {
      color: theme.colors.text04,
      cursor: 'move',
    },
  };
});
