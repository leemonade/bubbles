import { createStyles } from '@mantine/styles';

export const ImageLoaderStyles = createStyles((theme, { radius, imageStyles = {}, display }) => {
  return {
    root: {
      ...imageStyles,
    },
  };
});
