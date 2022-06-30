import { createStyles } from '@mantine/styles';

export const ColorSwatchStyles = createStyles((theme, { pointerEvents, actived, plain }) => {
  return {
    root: {
      overflow: 'visible',
      pointerEvents: pointerEvents ? pointerEvents : 'all',
      '.mantine-ColorSwatch-overlay': {
        pointerEvents: pointerEvents ? pointerEvents : 'all',
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
