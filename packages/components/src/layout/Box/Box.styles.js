import { createStyles } from '@mantine/styles';

export const BoxStyles = createStyles((theme, { padding }) => {
  return {
    root: {
      boxSizing: 'border-box',
      padding: padding && theme.spacing[padding],
    },
  };
});
