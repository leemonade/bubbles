import { createStyles } from '@mantine/styles';

const ImageLoaderStyles = createStyles(
  (theme, { radius, bordered, imageStyles = {}, height, objectFit }) => ({
    root: {
      height,
      ...imageStyles,
    },
    imageWrapper: {
      height,
      borderRadius: bordered && radius,
      img: {
        borderRadius: bordered && radius,
        border: bordered && `1px solid ${theme.other.dropzone.border.color.default}`,
        objectFit: objectFit ? `${objectFit} !important` : 'cover',
      },
    },
    figure: {
      height,
      borderRadius: bordered && radius,
    },
  }),
);

export { ImageLoaderStyles };
