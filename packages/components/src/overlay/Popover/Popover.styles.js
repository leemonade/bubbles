import { createStyles } from '@mantine/styles';

const PopoverStyles = createStyles((theme, { padded, clean, styles }) => {
  let shadowProps = {};

  if (clean) {
    shadowProps = {
      boxShadow: 'none',
      border: 'none',
    };
  }

  return {
    dropdown: {
      padding: padded ? theme.spacing[padded] : 0,
      boxShadow: theme.shadows.shadow03,
      ...shadowProps,
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

export { PopoverStyles };
