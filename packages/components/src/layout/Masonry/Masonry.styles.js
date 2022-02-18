import { createStyles } from '@mantine/styles';

export const MasonryStyles = createStyles((theme, { fullWidth }) => {
  return {
    root: {
      position: 'relative',
      width: fullWidth && '100%',
    },
    item: {
      transition: 'all .3s ease-out',
    },
  };
});
