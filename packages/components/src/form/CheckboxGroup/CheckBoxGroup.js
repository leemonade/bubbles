import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { useId, useDidUpdate } from '@mantine/hooks';
import { BOOLEAN_INPUT_VARIANTS } from '../BooleanInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Stack, STACK_DIRECTIONS } from '../../layout/Stack';
import { CheckBoxGroupStyles } from './CheckBoxGroup.styles';
import {
  InputWrapper,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
} from '../InputWrapper';

export const CHECKBOX_GROUP_DEFAULT_PROPS = {
  label: '',
  description: '',
  help: '',
  required: false,
  error: '',
  orientation: 'vertical',
  direction: 'row',
  size: 'sm',
  variant: 'default',
  fullWidth: false,
  useAria: true,
};

export const CHECKBOX_GROUP_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  /** Controls input size */
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  /** Data shown in the dropdown */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string.isRequired,
      help: PropTypes.string,
      helpPosition: PropTypes.string,
      disabled: PropTypes.bool,
      indeterminate: PropTypes.bool,
      checked: PropTypes.bool,
    })
  ),
  /** Controls the input direction */
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  /** Controls the appearance */
  variant: PropTypes.oneOf(BOOLEAN_INPUT_VARIANTS),
  /** Controls the input orientation */
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  /** Control if input is full width */
  fullWidth: PropTypes.bool,
  /** Function called when value changes */
  onChange: PropTypes.func,
  /** Controls if CheckBoxGroup uses aria role */
  useAria: PropTypes.bool,
};

const CheckBoxGroup = ({
  label,
  description,
  help,
  required,
  error,
  size,
  orientation,
  data,
  variant,
  direction,
  fullWidth,
  onChange,
  headerStyle,
  contentStyle,
  useAria,
  ...props
}) => {
  const uuid = useId();
  const hasError = useMemo(() => !isEmpty(error), [error]);

  const { classes, cx } = CheckBoxGroupStyles(
    { direction, variant, fullWidth, hasError },
    { name: 'CheckBoxGroup' }
  );

  const [selectedValues, setSelectedValues] = useState(
    data.filter(({ checked }) => checked).map(({ value }) => value)
  );

  const handleOnChange = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelectedValues);
    if (isFunction(onChange)) onChange(newSelectedValues);
  };

  useDidUpdate(() => {
    const values = data.map(({ value }) => value);
    selectedValues
      .filter((v) => !values.includes(v))
      .forEach((v) => {
        handleOnChange(v);
      });
  }, [data]);

  return (
    <InputWrapper
      uuid={uuid}
      orientation={orientation}
      label={label}
      size={size}
      description={description}
      help={help}
      error={error}
      required={required}
      headerStyle={headerStyle}
      contentStyle={contentStyle}
    >
      <Stack
        {...props}
        id={uuid}
        className={classes.group}
        direction={direction}
        fullWidth={fullWidth}
      >
        {data.map((item, index) => (
          <Checkbox
            {...item}
            key={index}
            size={size}
            variant={variant}
            checked={selectedValues.includes(item.value)}
            onChange={() => {
              item.onChange && item.onChange(item.value);
              handleOnChange(item.value);
            }}
            useAria={useAria}
          />
        ))}
      </Stack>
    </InputWrapper>
  );
};

CheckBoxGroup.defaultProps = CHECKBOX_GROUP_DEFAULT_PROPS;
CheckBoxGroup.propTypes = CHECKBOX_GROUP_PROP_TYPES;

export { CheckBoxGroup };
