import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

const LoaderStyles = createStyles((theme) => {
  const loaderTheme = theme.other.core;

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      svg: {
        stroke: loaderTheme.color.primary['300'],
      },
    },
  };
});

export { LoaderStyles };
