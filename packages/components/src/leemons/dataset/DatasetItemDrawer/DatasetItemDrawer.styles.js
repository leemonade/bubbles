import { createStyles } from '@mantine/styles';

export const DatasetItemDrawerStyles = createStyles((theme, {}) => {
  return {
    grid: {
      margin: 0,
    },
    leftColContainer: {
      height: '100vh',
      backgroundColor: theme.colors.ui02,
    },
    rightColContainer: {
      height: '100vh',
      padding: theme.spacing[7],
      paddingTop: theme.spacing[13],
      overflowY: 'auto',
    },
    divider: {
      marginTop: theme.spacing[5],
      marginBottom: theme.spacing[5],
    },
  };
});
