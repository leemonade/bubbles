import { createStyles } from '@mantine/styles';

export const PopoverStyles = createStyles((theme, { padded }) => {
  return {
    dropdown: {
      padding: padded ? theme.spacing[padded] : 0,
      boxShadow: theme.shadows.shadow03,
    },
  };
});
