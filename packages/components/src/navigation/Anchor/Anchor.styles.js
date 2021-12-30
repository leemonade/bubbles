import { createStyles } from '@mantine/styles';

export const AnchorStyles = createStyles((theme, {}) => {
  return {
    root: {
      textDecoration: 'underline',
      color: theme.colors.interactive01,
      cursor: 'pointer',
    },
  };
});
