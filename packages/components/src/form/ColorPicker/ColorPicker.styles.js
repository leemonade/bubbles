import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getCompactHue = (theme, compact) => {
  if (!compact) return {};
  return {
    display: 'flex',
    flexDirection: compact ? 'row' : 'column',
    alignItems: 'center',
    '.mantine-ColorPicker-swatches.lightness': {
      flex: '1 1 25%',
      '.mantine-ColorPicker-swatch': {
        width: '100%',
        paddingBottom: '100%',
        boxSizing: 'border-box',
      },
    },
    '.mantine-ColorPicker-sliders': {
      flex: `1 1 calc(75% - ${pxToRem(theme.spacing[4])})`,
      boxSizing: 'border-box',
    },
  };
};

export const ColorPickerStyles = createStyles(
  (theme, { swatchesPerRow, spacing, compact, fullWidth, useHsl }) => {
    return {
      root: {
        ...getFontExpressive(theme.fontSizes['2']),
        width: !fullWidth && (useHsl && compact ? pxToRem(354) : pxToRem(264)),
        '.mantine-ColorPicker-sliderOverlay, .mantine-ColorSlider-sliderOverlay': {
          boxShadow: 'none !important'
        },
      },
      swatches: {
        boxSizing: 'border-box',
        margin: pxToRem(spacing * -1),
        display: 'flex',
        flexWrap: 'wrap',
        padding: !useHsl && `0 ${pxToRem(theme.spacing[4])} ${pxToRem(theme.spacing[4])}`,
      },
      swatch: {
        width: `calc(${100 / swatchesPerRow}% - ${pxToRem(spacing * 2)})`,
        height: 0,
        paddingBottom: `calc(${100 / swatchesPerRow}% - ${pxToRem(spacing * 2)})`,
        margin: pxToRem(spacing),
        boxSizing: 'content-box',
        borderRadius: 0,
        borderRadius: '100%',
        '.mantine-ColorSwatch-overlay': {
          borderRadius: '100%',
        },
        '.mantine-ColorSwatch-shadowOverlay': {
          boxShadow: 'none',
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
        padding: pxToRem(theme.spacing[4]),
        marginBottom: !compact && pxToRem(-5),
      },
      hue: {
        display: 'flex',
        alignItems: 'center',
        '.mantine-ColorSlider-slider': {
          flex: '1 1 100%',
        },
      },
      hueInput: {
        flex: `1 1 ${pxToRem(120)}`,
        marginLeft: pxToRem(theme.spacing[3]),
      },
      body: {
        padding: 0,
      },
      slider: {
        height: pxToRem(8),
      },
      thumb: {
        width: pxToRem(8),
        height: pxToRem(8),
        transform: `translateY(-${pxToRem(1)})`,
      },
      saturation: {
        height: compact ? pxToRem(106) : pxToRem(198),
      },
      manual: {
        display: 'flex',
        padding: `0 ${pxToRem(theme.spacing[4])} ${pxToRem(theme.spacing[4])}`,
      },
      format: {
        flex: `1 1 ${pxToRem(90)}`,
        marginRight: pxToRem(theme.spacing[2]),
      },
      preview: {
        marginTop: `${pxToRem(theme.spacing[4])}`,
        marginRight: `${pxToRem(theme.spacing[4])}`,
        marginLeft: `-${pxToRem(theme.spacing[3])}`,
        width: pxToRem(24),
        height: pxToRem(24),
      },
      hsl: {
        ...getCompactHue(theme, compact),
      },
    };
  }
);
