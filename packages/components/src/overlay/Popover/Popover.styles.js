import { createStyles } from '@mantine/styles';

export const PopoverStyles = createStyles((theme, { padded }) => {
  return {
    root: {},
    body: {
      boxShadow: theme.shadows.shadow03,
    },
    inner: {
      padding: padded ? theme.spacing[padded] : 0,
    },
  };
});
