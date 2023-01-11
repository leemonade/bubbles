import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

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
        boxSizing: 'border-box'
      }
    },
    '.mantine-ColorPicker-sliders': {
      flex: `1 1 calc(75% - ${pxToRem(theme.spacing[4])})`,
      boxSizing: 'border-box'
    }
  };
};

export const ColorPickerStyles = createStyles(
  (theme, { swatchesPerRow, spacing, compact, fullWidth, useHsl, withSwatches }) => {
    return {
      root: {
        width: !fullWidth ? (useHsl && compact ? pxToRem(354) : pxToRem(264)) : '100%',
        '.mantine-ColorPicker-sliderOverlay, .mantine-ColorSlider-sliderOverlay': {
          boxShadow: 'none !important'
        },
        paddingBottom: pxToRem(theme.spacing[3])
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing[3]
      },
      swatches: {
        boxSizing: 'border-box',
        margin: pxToRem(spacing * -1),
        display: 'flex',
        flexWrap: 'wrap',
        padding: !useHsl && `0 ${pxToRem(theme.spacing[3])}`
      },
      swatchesWrapper: {
        // marginBottom: pxToRem(theme.spacing[3]),
        overflow: 'hidden',
        borderRadius: 4
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
          borderRadius: '100%'
        },
        '.mantine-ColorSwatch-shadowOverlay': {
          boxShadow: 'none'
        }
      },
      lightness: {
        width: `calc(${100 / 4}%)`,
        paddingBottom: `calc(${100 / 4}%)`,
        margin: 0,
        '.mantine-ColorSwatch-overlay': {
          borderRadius: 0
        }
      },
      monocolor: {
        height: compact ? pxToRem(106) : pxToRem(198),
        width: '100%',
        margin: 0,
        '.mantine-ColorSwatch-overlay': {
          borderRadius: 0
        }
      },
      sliders: {
        // padding: pxToRem(theme.spacing[3]),
        // marginBottom: !compact && pxToRem(-5),
        // marginTop: !compact && pxToRem(theme.spacing[3]),
      },
      hue: {
        flex: 1,
        width: '100%',
        // marginTop: !compact && pxToRem(theme.spacing[3]),
        padding: useHsl && `0 ${pxToRem(theme.spacing[3])}`
      },
      hueInput: {
        flex: `1 1 ${pxToRem(120)}`,
        marginLeft: pxToRem(theme.spacing[3])
      },
      body: {
        padding: `0 ${pxToRem(theme.spacing[3])}`
      },
      slider: {
        // height: pxToRem(8),
      },
      thumb: {
        // width: pxToRem(8),
        // height: pxToRem(8),
        // transform: `translateY(-${pxToRem(1)})`,
      },
      saturation: {
        height: compact ? pxToRem(106) : pxToRem(198),
        margin: 0,
        overflow: 'hidden',
        // marginLeft: 5,
        // marginTop: 5,
        // top: -5,
        // left: -5,
        // right: -5,
        // bottom: -5,
        // marginBottom: pxToRem(theme.spacing[4]),
        '.mantine-ColorPicker-saturationOverlay': {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }
      },
      manual: {
        display: 'flex',
        padding: !useHsl && `0 ${pxToRem(theme.spacing[3])}`
        // paddingTop: !withSwatches
        //  ? compact
        //    ? pxToRem(theme.spacing[4])
        //    : pxToRem(theme.spacing[4])
        //  : pxToRem(theme.spacing[3]),
      },
      format: {
        flex: 1,
        marginRight: pxToRem(theme.spacing[2])
      },
      preview: {
        marginTop: `${pxToRem(theme.spacing[4])}`,
        marginRight: `${pxToRem(theme.spacing[4])}`,
        marginLeft: `-${pxToRem(theme.spacing[3])}`,
        width: pxToRem(24),
        height: pxToRem(24)
      },
      hsl: {
        ...getCompactHue(theme, compact)
      }
    };
  }
);
