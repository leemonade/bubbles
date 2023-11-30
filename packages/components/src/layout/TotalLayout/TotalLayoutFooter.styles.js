import { createStyles } from '@mantine/styles';

const TotalLayoutFooterStyles = createStyles((theme, { showFooterShadow }) => ({
  root: {},
  footer: {
    width: 928,
    backgroundColor: 'white',
    boxShadow: showFooterShadow && '0 -8px 24px rgba(149, 157, 165, 0.2)',
    zIndex: 1,
  },
}));

export { TotalLayoutFooterStyles };
