import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
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
  InputWrapper
} from '../InputWrapper';
import { ColorInputStyles } from './ColorInput.styles';

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36
};

const ARROW_OFFSET = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 21,
  xl: 25
};

export const COLOR_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  useHsl: PropTypes.bool,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  compact: PropTypes.bool,
  manual: PropTypes.bool
};

export const COLOR_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
  size: 'sm',
  useHsl: false,
  saturation: 50,
  lightness: 50,
  compact: true,
  manual: false
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
      useHsl,
      saturation,
      lightness,
      compact,
      onFocus = () => {
      },
      onBlur = () => {
      },
      onChange = () => {
      },
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const [opened, setOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { classes, cx, theme } = ColorInputStyles({ size }, { name: 'ColorInput' });

    useEffect(() => {
      if (value !== inputValue && colord(value).isValid()) {
        setInputValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (colord(inputValue).isValid()) {
        isFunction(onChange) && onChange(inputValue);
      }
    }, [inputValue]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleInputFocus = (event) => {
      isFunction(onFocus) && onFocus(event);
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
                autoComplete='false'
                icon={
                  icon || (
                    <ColorSwatch
                      pointerEvents='none'
                      color={inputValue}
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
            position='bottom'
            placement='start'
            withArrow
          >
            <Box style={{ display: 'flex', position: 'relative', zIndex: 999 }}>
              <ColorPicker
                {...props}
                useHsl={useHsl}
                saturation={saturation}
                lightness={lightness}
                compact={compact}
                output='hex'
                onChange={setInputValue}
                color={inputValue}
                fullWidth
              />
            </Box>
          </Popover>
        )}
      </InputWrapper>
    );
  }
);

ColorInput.defaultProps = COLOR_INPUT_DEFAULT_PROPS;
ColorInput.propTypes = COLOR_INPUT_PROP_TYPES;

export { ColorInput };
