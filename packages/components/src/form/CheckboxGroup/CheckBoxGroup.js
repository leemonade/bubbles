import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CHECKBOX_VARIANTS } from '../Checkbox/Checkbox';
import { Stack, STACK_DIRECTIONS } from '../../layout/Stack';
import { CheckBoxGroupStyles } from './CheckBoxGroup.styles';
import { useState } from 'react';

export const DEFAULT_PROPS = { direction: 'column', variant: 'default', fullWidth: false };

const CheckBoxGroup = ({ data, variant, direction, fullWidth, onChange, ...props }) => {
  const { classes, cx } = CheckBoxGroupStyles(
    { direction, variant, fullWidth },
    { name: 'CheckBoxGroup' }
  );

  const [selectedValues, setSelectedValues] = useState(
    data.filter(({ checked }) => checked).map(({ value }) => value)
  );

  const onChangeHandler = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onChange && onChange(newSelectedValues);
  };

  return (
    <Stack className={classes.group} direction={direction} fullWidth={fullWidth} {...props}>
      {data.map((item, index) => (
        <Checkbox
          key={index}
          variant={variant}
          {...item}
          onChange={() => onChangeHandler(item.value)}
        />
      ))}
    </Stack>
  );
};

CheckBoxGroup.defaultProps = DEFAULT_PROPS;

CheckBoxGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string.isRequired,
      help: PropTypes.string,
      helpPosition: PropTypes.string,
      disabled: PropTypes.bool,
      indeterminate: PropTypes.bool,
      checked: PropTypes.bool,
    })
  ),
  onChange: PropTypes.func,
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  variant: PropTypes.oneOf(CHECKBOX_VARIANTS),
  fullWidth: PropTypes.bool,
};

export { CheckBoxGroup };
