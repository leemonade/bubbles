import { createStyles } from '@mantine/styles';

const TotalLayoutStyles = createStyles((theme, { topScroll, showFooterBorder }) => ({
  root: {},
  header: {
    borderBottom: topScroll && '1px solid blue',
  },
  footer: {
    backgroundColor: '#f8f9fb',
    borderTop: showFooterBorder && '3px solid blue',
  },
}));

export { TotalLayoutStyles };
