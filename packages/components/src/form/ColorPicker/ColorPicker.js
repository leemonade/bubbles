import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ColorPickerStyles } from './ColorPicker.styles';
import {
  Box,
  ColorPicker as MantineColorPicker,
  HueSlider,
  NumberInput,
  Space,
} from '@mantine/core';
import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { ColorSwatch } from './ColorSwatch/ColorSwatch';

export const COLOR_PICKER_FORMAT = ['hex', 'rgba', 'rgb', 'hsl', 'hsla'];
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

export const ColorPicker = forwardRef(
  (
    {
      color = '#000',
      withSwatches = true,
      swatches,
      compact,
      fullWidth = false,
      swatchesForGama = 8,
      swatchesPerRow = 7,
      spacing = 5,
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

    const oldFormat = useRef();
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

    const [value, setColor] = useState('#000');
    const [format, setFormat] = useState('hex');
    const [hue, setHue] = useState(30);
    const [lightness, setLightness] = useState(50);

    useEffect(() => {
      setFormat('hsl');
      setColor(`hsl(${hue}, 100%, 50%)`);
    }, [hue]);

    useEffect(() => {
      setFormat('hsl');
      setColor(`hsl(${hue}, 100%, ${lightness}%)`);
    }, [lightness]);

    useEffect(() => {
      props.onChange && props.onChange(value);
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
                  ></ColorSwatch>
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
                    ></ColorSwatch>
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
                    ></ColorSwatch>
                  );
                })}
              </Box>
              <Space h="md"></Space>
              <Box className={classes.hue}>
                <HueSlider value={hue} onChange={setHue} size="sm"></HueSlider>
                <NumberInput value={hue} onChange={setHue} className={classes.hueInput} />
              </Box>
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
              swatches={!compact && swatches}
              onChange={(e) => setColor(e)}
            />
            <Box className={classes.manual}>
              <Select
                data={COLOR_PICKER_FORMAT}
                value={format}
                onChange={setFormat}
                className={classes.format}
              />
              <TextInput value={value} onChange={setColor} />
            </Box>
          </>
        )}
      </Box>
    );
  }
);

ColorPicker.propTypes = {
  useHsl: PropTypes.bool,
  compact: PropTypes.bool,
  swatches: PropTypes.arrayOf(PropTypes.string),
  swatchesForGama: PropTypes.number,
  swatchesPerRow: PropTypes.number,
  spacing: PropTypes.number,
  fullWidth: PropTypes.bool,
};
