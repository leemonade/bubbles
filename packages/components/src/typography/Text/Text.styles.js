import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TextStyles = createStyles((theme, { role, transform, color, strong }) => {
  let fontStyles = {};
  switch (role) {
    case 'productive':
      fontStyles = getFontProductive(null, strong && 600);
      break;
    case 'expressive':
      fontStyles = getFontExpressive(null, strong && 600);
      break;
    default:
      break;
  }

  const colors = {
    primary: theme.colors.text01,
    secondary: theme.colors.text02,
    tertiary: theme.colors.text03,
    interactive: theme.colors.interactive01,
  };

  return {
    root: {
      ...fontStyles,
      textTransform: transform,
      color: colors[color] || theme.colors.text02,
    },
  };
});
