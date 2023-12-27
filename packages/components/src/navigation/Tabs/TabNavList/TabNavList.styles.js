import { createStyles } from '@mantine/styles';

const TabNavListStyles = createStyles((theme, {}, getRef) => {
  const tabTheme = theme.other.tab;
  const coreTheme = theme.other.core;

  return {
    root: {
      display: 'flex',
      flex: 'none',
      position: 'relative',
      borderBottom: `1px solid ${coreTheme.color.neutral[200]}}`,
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
      padding: '3px 0 0 0',
    },
    navList: {
      position: 'relative',
      transition: 'transform 0.3s',
      flex: 1,
      margin: 0,
      gap: 0
      // gap: tabTheme.spacing.gap,
    },
  };
});

export { TabNavListStyles };