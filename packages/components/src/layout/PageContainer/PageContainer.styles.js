import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const PageContainerStyles = createStyles((theme, {}) => {
  return {
    root: {
      maxWidth: theme.breakpoints['lg'],
      paddingLeft: theme.spacing['8'],
      paddingRight: theme.spacing['5'],
    },
  };
});
