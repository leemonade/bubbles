import { createStyles } from '@mantine/styles';

export const ImageLoaderStyles = createStyles((theme, { radius, imageStyles = {}, display }) => {
  return {
    root: {
      background: '#000',
      ...imageStyles,
      borderRadius: radius || 'inherit',
      '& *': {
        borderRadius: 'inherit',
      },
    },
  };
});
