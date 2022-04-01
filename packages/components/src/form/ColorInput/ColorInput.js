import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { ColorInput as MantineColorInput } from '@mantine/core';
import { colord } from 'colord';
import { useId } from '@mantine/hooks';
import { ColorSwatch } from '../ColorPicker/ColorSwatch/ColorSwatch';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Paragraph } from '../../typography';
import { Input } from '../../form/Input';
import { Popover } from '../../overlay';
import { Box } from '../../layout';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
} from '../InputWrapper';
import { ColorInputStyles } from './ColorInput.styles';

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

const ARROW_OFFSET = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 21,
  xl: 25,
};

export const COLOR_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onlyHue: PropTypes.bool,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
};

export const COLOR_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
  size: 'sm',
  onlyHue: false,
  saturation: 50,
  lightness: 50,
};

const ColorInput = forwardRef(
  (
    {
      error,
      size,
      label,
      orientation,
      description,
      help,
      readOnly,
      required,
      headerStyle,
      contentStyle,
      headerClassName,
      contentClassName,
      disabled,
      value,
      icon,
      placeholder,
      onlyHue,
      saturation,
      lightness,
      onFocus = () => {},
      onBlur = () => {},
      onChange = () => {},
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const [opened, setOpened] = useState(false);
    const [lastValidValue, setLastValidValue] = useState('#FFFFFF');
    const [inputValue, setInputValue] = useState('');
    const { classes, cx, theme } = ColorInputStyles({ size }, { name: 'ColorInput' });

    useEffect(() => {
      if (value !== inputValue && colord(value).isValid()) {
        setInputValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (inputValue !== lastValidValue && colord(inputValue).isValid()) {
        setLastValidValue(inputValue);
      }
    }, [inputValue]);

    useEffect(() => {
      isFunction(onChange) && onChange(lastValidValue);
    }, [lastValidValue]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleInputFocus = (event) => {
      isFunction(onFocus) && onFocus(event);
      setTimeout(() => setInputValue(lastValidValue), 0);
      setOpened(true);
    };

    const handleInputKeyDown = (event) => {
      setOpened(false);
    };

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        error={error}
        label={label}
        description={description}
        orientation={orientation}
        required={required}
        help={help}
        headerStyle={headerStyle}
        contentStyle={contentStyle}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
      >
        {readOnly ? (
          <Paragraph clean>{value || ''}</Paragraph>
        ) : (
          <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            target={
              <Input
                id={uuid}
                ref={ref}
                size={size}
                value={inputValue}
                disabled={disabled}
                placeholder={placeholder}
                invalid={!isEmpty(error)}
                autoComplete="false"
                icon={
                  icon || (
                    <ColorSwatch
                      color={lastValidValue}
                      size={theme.fn.size({ size, sizes: SWATCH_SIZES })}
                    />
                  )
                }
                onFocus={handleInputFocus}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                spellCheck={false}
              />
            }
            width={200}
            position="bottom"
            placement="start"
            withArrow
          >
            <Box style={{ display: 'flex', position: 'relative', zIndex: 999 }}>
              <ColorPicker
                {...props}
                useHsl={onlyHue}
                saturation={saturation}
                lightness={lightness}
                compact
                output="hex"
                onChange={setInputValue}
                color={lastValidValue}
                fullWidth
              />
            </Box>
          </Popover>
        )}
        {/*
        <MantineColorInput
          {...props}
          ref={ref}
          size={size}
          classNames={classes}
          autoComplete="off"
          error={!isEmpty(error)}
        />
    */}
      </InputWrapper>
    );
  }
);

ColorInput.defaultProps = COLOR_INPUT_DEFAULT_PROPS;
ColorInput.propTypes = COLOR_INPUT_PROP_TYPES;

export { ColorInput };
