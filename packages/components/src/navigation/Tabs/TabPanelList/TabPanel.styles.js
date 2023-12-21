import { createStyles } from '@mantine/styles';

const TabPanelStyles = createStyles((theme, { active }, getRef) => ({
  root: {
    width: '100%',
    flex: 'none',
    display: 'flex',
  },
}));

export { TabPanelStyles };
