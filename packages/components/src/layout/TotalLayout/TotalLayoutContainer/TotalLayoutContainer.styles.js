import { createStyles } from '@mantine/styles';

const TotalLayoutContainerStyles = createStyles((theme, { topScroll }) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.other.core.color.neutral['50'],
  },
  header: {
    boxShadow: topScroll && '0 8px 24px rgba(149, 157, 165, 0.2)',
    zIndex: 1,
  },
  footerContainer: {
    backgroundColor: theme.other.core.color.neutral['50'],
  },
}));

export { TotalLayoutContainerStyles };
