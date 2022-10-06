import { createStyles } from '@mantine/styles';

export const ImageLoaderStyles = createStyles((theme, { radius, imageStyles = {}, height }) => {
  return {
    root: {
      height,
      ...imageStyles,
    },
    imageWrapper: {
      height,
    },
    figure: {
      height,
    },
  };
});
