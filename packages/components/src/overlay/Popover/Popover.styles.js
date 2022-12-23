import { createStyles } from '@mantine/styles';

export const PopoverStyles = createStyles((theme, { padded, styles }) => {
  return {
    dropdown: {
      padding: padded ? theme.spacing[padded] : 0,
      boxShadow: theme.shadows.shadow03,
      ...styles,
    },
    closeButton: {
      position: 'absolute',
      top: 7,
      right: 10,
      zIndex: 2,
    },
  };
});
