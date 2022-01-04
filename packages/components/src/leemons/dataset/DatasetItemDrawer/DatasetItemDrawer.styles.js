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
      marginTop: theme.spacing[13] - theme.spacing[7],
      padding: theme.spacing[7],
    },
    divider: {
      marginTop: theme.spacing[5],
      marginBottom: theme.spacing[5],
    },
  };
});
