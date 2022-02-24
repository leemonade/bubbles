import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { ColorPickerStyles } from './ColorPicker.styles';
import { ColorPicker as MantineColorPicker, HueSlider, Space } from '@mantine/core';
import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { NumberInput } from '../NumberInput';
import { Box, Stack } from '../../layout';
import { ColorSwatch } from './ColorSwatch/ColorSwatch';
import { colord } from 'colord';

export const COLOR_PICKER_FORMATS = ['hex', 'rgba', 'rgb', 'hsla', 'hsl'];
export const COLOR_PICKER_SWATCHES = [
  '#DB6B6B',
  '#D9A2C0',
  '#EB9584',
  '#E3AB6F',
  '#C7B3A9',
  '#E8C642',
  '#F3E45C',
  '#3F70CC',
  '#4F96FF',
  '#5E54CC',
  '#9175E5',
  '#71C995',
  '#96CE82',
  '#84CC16',
];

export const COLOR_PICKER_DEFAULT_PROPS = {
  color: '#000',
  withSwatches: true,
  fullWidth: false,
  compact: false,
  useHsl: false,
  swatchesForGama: 8,
  swatchesPerRow: 7,
  spacing: 5,
  format: COLOR_PICKER_FORMATS[0],
};

export const ColorPicker = forwardRef(
  (
    {
      color: colorProp,
      format: formatProp,
      withSwatches,
      swatches,
      compact,
      fullWidth,
      swatchesForGama,
      swatchesPerRow,
      spacing,
      useHsl,
      ...props
    },
    ref
  ) => {
    if (swatchesForGama > 14) {
      swatchesForGama = 14;
    }
    swatchesPerRow = useHsl ? swatchesForGama : swatchesPerRow;
    swatches = swatches || COLOR_PICKER_SWATCHES;

    const { classes, cx } = ColorPickerStyles(
      {
        swatchesPerRow,
        compact,
        spacing,
        fullWidth,
        useHsl,
      },
      { name: 'ColorPicker' }
    );

    const [value, setColor] = useState(colorProp);
    const [format, setFormat] = useState(formatProp);
    const [hue, setHue] = useState(null);
    const [lightness, setLightness] = useState(null);

    const determineFormat = () => {
      if (value[0] === '#') {
        return 'hex';
      }
      for (let i = 1; i < COLOR_PICKER_FORMATS.length; i++) {
        if (value.includes(COLOR_PICKER_FORMATS[i])) {
          debugger;
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

    useEffect(() => {
      if (hue > 0) {
        setFormat('hsl');
        setColor(`hsl(${hue}, 100%, 50%)`);
      }
    }, [hue]);

    useEffect(() => {
      if (hue > 0 && lightness > -1) {
        setFormat('hsl');
        setColor(`hsl(${hue}, 100%, ${lightness}%)`);
      }
    }, [lightness, hue]);

    useEffect(() => {
      if (useHsl && !hue) {
        setHue(colord(value).toHsl().h);
        setLightness(50);
      }
    }, [useHsl]);

    useEffect(() => {
      if (value !== colorProp && isFunction(props.onChange)) {
        props.onChange(value);
      }
      const newFormat = determineFormat();
      if (newFormat !== format) setFormat(newFormat);
    }, [value]);

    return (
      <Box className={classes.root}>
        {useHsl ? (
          <Box className={classes.hsl}>
            <Box className={`${classes.swatches} lightness`} style={{ margin: 0 }}>
              {[...Array(!compact ? 4 : 1)].map((_, i) => {
                const lightness = 50 + 10 * i;
                const color = `hsl(${hue}, 100%, ${lightness}%)`;
                return (
                  <ColorSwatch
                    className={`${classes.swatch} ${classes.lightness}`}
                    key={i}
                    color={color}
                    onClick={() => !compact && setLightness(lightness)}
                    autoComplete="false"
                  />
                );
              })}
            </Box>
            {!compact && (
              <Box className={classes.swatches} style={{ margin: 0 }}>
                {[...Array(4)].map((_, i) => {
                  const lightness = 40 - 10 * i;
                  const color = `hsl(${hue}, 100%, ${lightness}%)`;
                  return (
                    <ColorSwatch
                      className={`${classes.swatch} ${classes.lightness}`}
                      key={i}
                      color={color}
                      onClick={() => setLightness(lightness)}
                      autoComplete="false"
                    />
                  );
                })}
              </Box>
            )}
            <Box className={classes.sliders}>
              <Box className={classes.swatches}>
                {[...Array(swatchesForGama)].map((_, i) => {
                  const h = (360 / swatchesForGama) * i;
                  const color = `hsl(${h}, 100%, 50%)`;
                  return (
                    <ColorSwatch
                      className={classes.swatch}
                      key={i}
                      color={color}
                      onClick={() => setHue(h)}
                      actived={hue === h}
                      autoComplete="false"
                    />
                  );
                })}
              </Box>
              <Space h="sm"></Space>
              <Stack className={classes.hue} spacing={3} alignItems="center">
                <Box style={{ flex: 1 }}>
                  <HueSlider autoComplete="false" value={hue} onChange={setHue} size="sm" />
                </Box>
                <Box style={{ width: 75 }}>
                  <NumberInput autoComplete="false" value={hue} onChange={setHue} size="xs" />
                </Box>
              </Stack>
            </Box>
          </Box>
        ) : (
          <>
            <MantineColorPicker
              {...props}
              format={format}
              classNames={classes}
              value={value}
              fullWidth="true"
              swatches={withSwatches && swatches}
              onChange={(e) => setColor(e)}
              autoComplete="false"
            />
            <Box className={classes.manual}>
              <Stack spacing={2}>
                <Box style={{ width: 100, flex: 'auto' }}>
                  <Select
                    data={COLOR_PICKER_FORMATS}
                    value={format}
                    onChange={setFormat}
                    className={classes.format}
                    autoComplete="false"
                  />
                </Box>
                <Box>
                  <TextInput autoComplete="false" value={value} onChange={setColor} />
                </Box>
              </Stack>
            </Box>
          </>
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
};
