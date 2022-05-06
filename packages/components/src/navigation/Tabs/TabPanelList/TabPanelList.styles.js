import { createStyles } from '@mantine/styles';

export const TabPanelListStyles = createStyles((theme, { position, animated }, getRef) => {
  return {
    root: {
      flex: 'auto',
      display: 'flex',
    },
    content: {
      display: 'flex',
      width: '100%',
    },
  };
});
