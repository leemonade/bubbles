import { createStyles } from '@mantine/styles';

const TotalLayoutContainerStyles = createStyles((theme, { clean, topScroll, noHeaderShadow }) => ({
  root: {
    height: '100vh',
    backgroundColor: !clean && theme.other.core.color.neutral['50'],
    width: '100%',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-3000px',
      left: 0,
      right: 0,
      height: '3000px',
      boxShadow: topScroll && noHeaderShadow && '0 8px 24px rgba(149, 157, 165, 0.2)',
    },
  },
  header: {
    boxShadow: topScroll && '0 8px 24px rgba(149, 157, 165, 0.2)',
    zIndex: 99,
  },
  footerContainer: {
    backgroundColor: !clean && theme.other.core.color.neutral['50'],
  },
}));

export { TotalLayoutContainerStyles };
