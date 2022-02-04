import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ImageLoaderStyles = createStyles((theme, { radius, imageStyles }) => {
  const getImageStyles = () => {
    if (imageStyles) return imageStyles;
    return {};
  };

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    inheritRadius: {
      ...getImageStyles(),
      borderRadius: radius || 'inherit',
      '& *': {
        borderRadius: 'inherit',
      },
    },
  };
});
