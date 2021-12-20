import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ColorPickerStyles = createStyles((theme, { swatchesPerRow, spacing }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    swatches: {
      boxSizing: 'border-box',
      margin: pxToRem(spacing * -1),
      display: 'flex',
      flexWrap: 'wrap',
    },
    swatch: {
      width: `calc(${100 / swatchesPerRow}% - ${pxToRem(spacing * 2)})`,
      height: 0,
      paddingBottom: `calc(${100 / swatchesPerRow}% - ${pxToRem(spacing * 2)})`,
      margin: pxToRem(spacing),
      boxSizing: 'content-box',
      borderRadius: 0,
      '.mantine-ColorSwatch-overlay': {
        borderRadius: '100%',
      },
    },

    lightness: {
      width: `calc(${100 / 4}%)`,
      paddingBottom: `calc(${100 / 4}%)`,
      margin: 0,
      '.mantine-ColorSwatch-overlay': {
        borderRadius: 0,
      },
    },
    sliders: {
      padding: theme.spacing[4],
    },
    hue: {
      display: 'flex',
      alignItems: 'center',
      '.mantine-ColorSlider-slider': {
        flex: '1 1 100%'
      },
    },
  };
});
