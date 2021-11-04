import { createStyles } from '@mantine/styles';

export const TabsStyles = createStyles((theme, { direction, position }, getRef) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
  };
});
