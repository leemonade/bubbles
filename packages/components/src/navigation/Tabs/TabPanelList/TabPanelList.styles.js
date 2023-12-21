import { createStyles } from '@mantine/styles';

const TabPanelListStyles = createStyles((theme, { position, animated }, getRef) => ({
  root: {
    flex: 'auto',
    display: 'flex',
    height: '100%',
    maxWidth: '100%',
  },
  content: {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
  },
}));

export { TabPanelListStyles };
