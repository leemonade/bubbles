import { createStyles } from '@mantine/styles';

export const TabNavListStyles = createStyles((theme, {}, getRef) => {
  return {
    root: {
      display: 'flex',
      flex: 'none',
      position: 'relative',
      borderBottom: `1px solid ${theme.colors.ui01}}`,
    },
    tabsResizer: {
      overflow: 'hidden',
      display: 'flex',
      flex: 1,
    },
    tabsWrapper: {
      transform: 'translate(0)',
      position: 'relative',
      display: 'inline-block',
      flex: 'auto',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'flex',
    },
    navList: {
      position: 'relative',
      transition: 'transform 0.3s',
      flex: 1,
      margin: 0,
      gap: 2,
    },
  };
});
