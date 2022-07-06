import { createStyles } from '@mantine/styles';

export const PaginatedListStyles = createStyles((theme, { style }) => {
  return {
    root: {
      position: 'relative',
      ...style,
    },
  };
});
