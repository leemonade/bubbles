import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const PaperStyles = createStyles((theme, { padding, radius, shadow }) => {
  const getShadows = (shadow) => {
    switch (shadow) {
      case 'level100':
        return theme.shadows.shadow100;
      case 'level01':
        return theme.shadows.shadow01;
      case 'level02':
        return theme.shadows.shadow02;
      case 'level03':
        return theme.shadows.shadow03;
      case 'none':
        return null;
      default:
        return theme.shadows.shadow100;
    }
  };

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'inline-flex',
      boxShadow: getShadows(shadow),
    },
  };
});
