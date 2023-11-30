import { createStyles } from '@mantine/styles';

const TotalLayoutStyles = createStyles((theme, { topScroll }) => ({
  root: {},
  header: {
    boxShadow: topScroll && '0 8px 24px rgba(149, 157, 165, 0.2)',
    zIndex: 1,
  },
  footerContainer: {
    backgroundColor: theme.other.core.color.neutral['50'],
  },
}));

export { TotalLayoutStyles };
