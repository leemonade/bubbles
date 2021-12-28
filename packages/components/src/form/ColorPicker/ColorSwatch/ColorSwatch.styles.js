import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const ColorSwatchStyles = createStyles((theme, { actived }) => {
  return {
    root: {
      overflow: 'visible',
      pointerEvents: 'none',
      '.mantine-ColorSwatch-overlay': {
        pointerEvents: 'all',
        cursor: 'pointer',
      },
      '.mantine-ColorSwatch-shadowOverlay': {
        outline: actived ? '2px solid white' : null,
        boxShadow: actived ? '0 0 0 4px rgba(0,0,0,.25)' : 'none',
      },
    },
  };
});
