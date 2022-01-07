import { createStyles } from '@mantine/styles';

export const DropdownStyles = createStyles((theme, {}, getRef) => {
  return {
    root: {
      paddingLeft: theme.spacing['3'],
      display: 'flex',
      alignItems: 'center',
      // paddingBottom: theme.spacing['2'],
    },
  };
});
