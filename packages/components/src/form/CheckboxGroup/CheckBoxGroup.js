import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { useUuid } from '@mantine/hooks';
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
};

export const CHECKBOX_GROUP_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
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
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  variant: PropTypes.oneOf(BOOLEAN_INPUT_VARIANTS),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
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
  ...props
}) => {
  const uuid = useUuid();
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
            variant={variant}
            onChange={() => {
              item.onChange && item.onChange(item.value);
              handleOnChange(item.value);
            }}
          />
        ))}
      </Stack>
    </InputWrapper>
  );
};

CheckBoxGroup.defaultProps = CHECKBOX_GROUP_DEFAULT_PROPS;
CheckBoxGroup.propTypes = CHECKBOX_GROUP_PROP_TYPES;

export { CheckBoxGroup };
