import { createStyles } from '@mantine/styles';

export const TabPanelListStyles = createStyles((theme, { position, animated }, getRef) => {
  return {
    root: {
      flex: 'auto',
      display: 'flex',
      height: '100%',
    },
    content: {
      display: 'flex',
      width: '100%',
    },
  };
});
