import { createStyles } from '@bubbles-ui/components';

export const ColorToolStyles = createStyles((theme, { color }) => {
  return {
    preview: {
      height: 3,
      width: 15,
      background: color,
      borderRadius: 1,
      transform: 'translateY(5px)',
    },
    inner: {
      flexDirection: 'column',
    },
    leftIcon: {
      transform: 'translateY(8px)',
      '& svg': {
        height: 12,
      },
    },
  };
});
