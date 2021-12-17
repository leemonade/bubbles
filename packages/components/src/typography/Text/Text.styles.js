import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TextStyles = createStyles((theme, { role, transform }) => {
  let fontStyles = {};
  switch (role) {
    case 'productive':
      fontStyles = getFontProductive();
      break;
    case 'expressive':
      fontStyles = getFontExpressive();
      break;
    default:
      break;
  }

  return {
    root: {
      ...fontStyles,
      textTransform: transform,
    },
  };
});
