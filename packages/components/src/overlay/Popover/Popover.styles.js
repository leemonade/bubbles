import { createStyles } from '@mantine/styles';

export const PopoverStyles = createStyles((theme, { padded }) => {
  return {
    dropdown: {
      padding: padded ? theme.spacing[padded] : 0,
      boxShadow: theme.shadows.shadow03,
    },
    closeButton: {
      position: 'absolute',
      top: 7,
      right: 10,
      zIndex: 2,
    },
  };
});
