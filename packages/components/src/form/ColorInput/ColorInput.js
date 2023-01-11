import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { colord } from 'colord';
import { useClickOutside, useId } from '@mantine/hooks';
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
  /** Controls input orientation */
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  /** Controls input size */
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  /** Function called on input focus event */
  onFocus: PropTypes.func,
  /** Function called on input blur event */
  onBlur: PropTypes.func,
  /** Function called when values changes */
  onChange: PropTypes.func,
  /** Controls if color dropdown uses HSL  */
  useHsl: PropTypes.bool,
  /** Controls saturation */
  saturation: PropTypes.number,
  /** Controls lightness */
  lightness: PropTypes.number,
  /** Controls if color dropdown is compact */
  compact: PropTypes.bool,
  /** Controls if color dropdown uses manual inputs */
  manual: PropTypes.bool,
  /** Controls if only shows light colors when using useHsl*/
  lightOnly: PropTypes.bool,
  /** Custom color picker component */
  colorPickerCompoennt: PropTypes.node,
  /** Controls if ColorInput uses aria role */
  useAria: PropTypes.bool,
};

export const COLOR_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
  size: 'md',
  useHsl: false,
  saturation: 50,
  lightness: 50,
  compact: true,
  manual: false,
  lightOnly: false,
  useAria: true,
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
      onFocus = () => {},
      onBlur = () => {},
      onChange = () => {},
      format,
      withSwatches,
      swatches,
      compact,
      fullWidth,
      swatchesForGama,
      swatchesPerRow,
      spacing,
      useHsl,
      lightOnly,
      saturation,
      lightness,
      manual,
      ariaSaturationLabel,
      ariaSliderLabel,
      ariaColorFormat,
      ariaColorValue,
      ariaHueValue,
      colorPickerComponent,
      useAria,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const [opened, setOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const closeRef = useClickOutside(() => setOpened(false));
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
        {...props}
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
                autoComplete="off"
                icon={
                  icon || (
                    <ColorSwatch color={inputValue} onClick={() => setOpened(!opened)} size={18} />
                  )
                }
                onFocus={handleInputFocus}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                spellCheck={false}
              />
            }
            width={colorPickerComponent ? undefined : 200}
            position="bottom-start"
            withArrow
            trapFocus
          >
            <Box style={{ display: 'flex', position: 'relative', zIndex: 999 }} ref={closeRef}>
              {!colorPickerComponent ? (
                <ColorPicker
                  color={inputValue}
                  format={format}
                  withSwatches={withSwatches}
                  compact={compact}
                  fullWidth
                  swatchesForGama={swatchesForGama}
                  swatchesPerRow={swatchesPerRow}
                  spacing={spacing}
                  useHsl={useHsl}
                  lightOnly={lightOnly}
                  saturation={saturation}
                  lightness={lightness}
                  manual={manual}
                  output="hex"
                  ariaSaturationLabel={ariaSaturationLabel}
                  ariaSliderLabel={ariaSliderLabel}
                  ariaColorFormat={ariaColorFormat}
                  ariaColorValue={ariaColorValue}
                  ariaHueValue={ariaHueValue}
                  onChange={setInputValue}
                  role={useAria ? 'input' : undefined}
                />
              ) : (
                React.createElement(colorPickerComponent, {
                  inputValue: inputValue,
                  onChange: setInputValue,
                })
              )}
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
