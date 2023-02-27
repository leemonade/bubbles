import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const PageContainerStyles = createStyles((theme, { fullWidth }) => {
  return {
    root: {
      width: '100%',
      maxWidth: !fullWidth && theme.breakpoints['xl'],
      paddingLeft: theme.spacing['8'],
      paddingRight: theme.spacing['5'],
    },
  };
});
