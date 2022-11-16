import React, { forwardRef, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isNil } from 'lodash';
import { colord } from 'colord';
import { ColorPicker as MantineColorPicker, HueSlider } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { NumberInput } from '../NumberInput';
import { Box, Stack } from '../../layout';
import { ColorSwatch } from './ColorSwatch/ColorSwatch';
import { ColorPickerStyles } from './ColorPicker.styles';

export const COLOR_PICKER_FORMATS = ['hex', 'rgba', 'rgb', 'hsla', 'hsl'];

export const COLOR_PICKER_DEFAULT_PROPS = {
  color: '#000',
  withSwatches: false,
  fullWidth: false,
  compact: false,
  useHsl: false,
  swatchesForGama: 8,
  swatchesPerRow: 7,
  spacing: 5,
  format: COLOR_PICKER_FORMATS[0],
  saturation: 50,
  lightness: 50,
  manual: true,
  lightOnly: false,
  autoComplete: 'off',
  ariaSaturationLabel: 'Saturation',
  ariaSliderLabel: 'Slider',
  ariaColorFormat: 'Color format',
  ariaColorValue: 'Color value',
  ariaHueValue: 'HUE value',
};

export const ColorPicker = forwardRef(
  (
    {
      color: colorProp,
      format: formatProp,
      withSwatches,
      swatches: swatchesProp,
      compact,
      fullWidth,
      swatchesForGama,
      swatchesPerRow,
      spacing,
      useHsl,
      lightOnly,
      saturation: saturationProp,
      lightness: lightnessProp,
      manual,
      ariaSaturationLabel,
      ariaSliderLabel,
      ariaColorFormat,
      ariaColorValue,
      ariaHueValue,
      ...props
    },
    ref
  ) => {
    if (swatchesForGama > 14) {
      swatchesForGama = 14;
    }
    swatchesPerRow = useHsl ? swatchesForGama : swatchesPerRow;

    const { classes, cx } = ColorPickerStyles(
      {
        swatchesPerRow,
        compact,
        spacing,
        fullWidth,
        useHsl,
        withSwatches,
      },
      { name: 'ColorPicker' }
    );

    const [value, setColor] = useState(colorProp);
    const [format, setFormat] = useState(formatProp);
    const [hue, setHue] = useState(null);
    const [lightness, setLightness] = useState(lightnessProp);
    const [saturation, setSaturation] = useState(saturationProp);
    const [debouncedHue] = useDebouncedValue(hue, 100);

    const swatches = useMemo(() => {
      return (
        swatchesProp ||
        [...Array(14)].map((_, i) => {
          const h = Math.floor((180 / swatchesForGama) * i);
          return `hsl(${h}, ${saturation}%, ${lightness}%)`;
        })
      );
    }, [swatchesProp]);

    const determineFormat = () => {
      if (value[0] === '#') {
        return 'hex';
      }
      for (let i = 1; i < COLOR_PICKER_FORMATS.length; i++) {
        if (value.includes(COLOR_PICKER_FORMATS[i])) {
          // debugger;
          const asd = value.includes(COLOR_PICKER_FORMATS[i]);
          return COLOR_PICKER_FORMATS[i];
        }
      }
      return 'hex';
    };

    useEffect(() => {
      if (colorProp !== value) {
        setColor(colorProp);
      }
    }, [colorProp]);

    useEffect(() => {
      if (formatProp !== format) {
        setFormat(formatProp);
      }
    }, [formatProp]);

    useEffect(() => setSaturation(saturationProp), [saturationProp]);
    useEffect(() => setLightness(lightnessProp), [lightnessProp]);

    useEffect(() => {
      // debugger;
      if (
        !isNil(debouncedHue) &&
        !isNil(lightness) &&
        !isNil(saturation) &&
        debouncedHue > -1 &&
        lightness > -1 &&
        saturation > -1
      ) {
        const newColor = `hsl(${debouncedHue}, ${saturation}%, ${lightness}%)`;
        setFormat('hsl');
        setColor(newColor);
      }
    }, [lightness, debouncedHue, saturation]);

    useEffect(() => {
      if (useHsl && !hue) {
        setHue(colord(value).toHsl().h);
        setLightness(lightness || 50);
      }
    }, [useHsl, lightness]);

    useEffect(() => {
      // const newFormat = determineFormat();
      // if (newFormat !== format) setFormat(newFormat);
      const valueHex = colord(value).toHex();
      const colorHex = colord(colorProp).toHex();

      if (valueHex !== colorHex && isFunction(props.onChange)) {
        if (props.output && props.output === 'hex') {
          props.onChange(colord(value).toHex());
        } else {
          props.onChange(value);
        }
      }
    }, [value]);

    return (
      <Box className={classes.root}>
        {useHsl ? (
          <Box className={classes.wrapper}>
            <Box className={classes.swatchesWrapper}>
              <Box className={cx(classes.swatches, 'lightness')} style={{ margin: 0 }}>
                {[...Array(!compact ? 4 : 1)].map((_, i) => {
                  const light = 50 + 10 * i;
                  const color = `hsl(${hue}, ${saturation}%, ${light}%)`;
                  return (
                    <ColorSwatch
                      className={cx(classes.swatches, {
                        [classes.lightness]: !compact,
                        [classes.monocolor]: compact,
                      })}
                      key={i}
                      color={color}
                      onClick={() => !compact && setLightness(light)}
                      autoComplete="off"
                      plain
                    />
                  );
                })}
              </Box>

              {!compact && !lightOnly && (
                <Box className={classes.swatches} style={{ margin: 0 }}>
                  {[...Array(4)].map((_, i) => {
                    const light = 40 - 10 * i;
                    const color = `hsl(${hue}, ${saturation}%, ${light}%)`;
                    return (
                      <ColorSwatch
                        className={cx(classes.swatch, classes.lightness)}
                        key={i}
                        color={color}
                        onClick={() => setLightness(light)}
                        autoComplete="off"
                        plain
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
            {withSwatches && (
              <Box className={cx(classes.swatches, { [classes.body]: useHsl })}>
                {[...Array(swatchesForGama)].map((_, i) => {
                  const h = Math.floor((360 / swatchesForGama) * i);
                  const color = `hsl(${h}, ${saturation}%, ${lightness}%)`;
                  return (
                    <ColorSwatch
                      className={classes.swatch}
                      key={i}
                      color={color}
                      onClick={() => setHue(h)}
                      actived={hue === h}
                      autoComplete="off"
                    />
                  );
                })}
              </Box>
            )}

            <Stack className={classes.hue} spacing={3} alignItems="center">
              <Box style={{ flex: 1 }}>
                <HueSlider
                  autoComplete="off"
                  value={hue}
                  onChange={setHue}
                  size="sm"
                  aria-label={ariaSliderLabel}
                  onChangeEnd={() => {}}
                />
              </Box>
              {manual && (
                <Box style={{ width: 75 }}>
                  <NumberInput
                    autoComplete="off"
                    value={hue}
                    onChange={setHue}
                    size="xs"
                    ariaLabel={ariaHueValue}
                  />
                </Box>
              )}
            </Stack>
          </Box>
        ) : (
          <Box className={classes.wrapper}>
            <MantineColorPicker
              {...props}
              format={format}
              classNames={classes}
              value={value}
              fullWidth="true"
              swatches={withSwatches && swatches}
              onChange={setColor}
              autoComplete="off"
              saturationLabel={ariaSaturationLabel}
              hueLabel={ariaSliderLabel}
            />
            {manual && (
              <Box className={classes.manual}>
                <Stack spacing={2}>
                  <Box style={{ width: 100, flex: 'auto' }}>
                    <Select
                      data={COLOR_PICKER_FORMATS}
                      value={format}
                      onChange={setFormat}
                      className={classes.format}
                      autoComplete="off"
                      ariaLabel={ariaColorFormat}
                    />
                  </Box>
                  <Box>
                    <TextInput
                      autoComplete="off"
                      value={value}
                      onChange={setColor}
                      ariaLabel={ariaColorValue}
                    />
                  </Box>
                </Stack>
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  }
);

ColorPicker.defaultProps = COLOR_PICKER_DEFAULT_PROPS;

ColorPicker.propTypes = {
  useHsl: PropTypes.bool,
  compact: PropTypes.bool,
  swatches: PropTypes.arrayOf(PropTypes.string),
  swatchesForGama: PropTypes.number,
  swatchesPerRow: PropTypes.number,
  spacing: PropTypes.number,
  fullWidth: PropTypes.bool,
  format: PropTypes.oneOf(COLOR_PICKER_FORMATS),
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  manual: PropTypes.bool,
  lightOnly: PropTypes.bool,
  autoComplete: PropTypes.string,
  ariaSaturationLabel: PropTypes.string,
  ariaSliderLabel: PropTypes.string,
  ariaColorFormat: PropTypes.string,
  ariaColorValue: PropTypes.string,
  ariaHueValue: PropTypes.string,
};
