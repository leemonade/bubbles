import { createStyles } from '@mantine/styles';

export const ColorSwatchStyles = createStyles((theme, { actived, plain }) => {
  return {
    root: {
      overflow: 'visible',
      pointerEvents: 'none',
      '.mantine-ColorSwatch-overlay': {
        pointerEvents: 'none',
        cursor: 'pointer'
      },
      '.mantine-ColorSwatch-shadowOverlay': {
        // outline: actived ? '2px solid white' : null,
        boxShadow: actived
          ? '0 0 0 4px rgb(0 0 0 / 15%)'
          : plain
            ? 'none'
            : 'rgb(0 0 0 / 10%) 0px 0px 0px 1px inset, rgb(0 0 0 / 0%) 0px 0px 4px inset;'
      }
    }
  };
});
