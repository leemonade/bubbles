import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { InputWrapper } from '../InputWrapper';
import { Text } from '../../typography';
import { Checkbox } from './Checkbox/Checkbox';
import { Switch } from './Switch/Switch';
import { BooleanInputStyles } from './BooleanInput.styles';

export const BOOLEAN_INPUT_HELP_POSITIONS = ['right', 'bottom'];
export const BOOLEAN_INPUT_VARIANTS = ['default', 'boxed'];
export const BOOLEAN_INPUT_DISPLAYS = ['checkbox', 'switch'];
export const BOOLEAN_INPUT_SIZES = ['sm', 'md'];
export const BOOLEAN_INPUT_LABEL_POSITIONS = ['start', 'end'];

export const BOOLEAN_INPUT_PROP_TYPES = {
  helpPosition: PropTypes.oneOf(BOOLEAN_INPUT_HELP_POSITIONS),
  labelPosition: PropTypes.oneOf(BOOLEAN_INPUT_LABEL_POSITIONS),
  variant: PropTypes.oneOf(BOOLEAN_INPUT_VARIANTS),
  display: PropTypes.oneOf(BOOLEAN_INPUT_DISPLAYS),
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  checked: PropTypes.bool,
};

export const BOOLEAN_INPUT_DEFAULT_PROPS = {
  size: BOOLEAN_INPUT_SIZES[1],
  labelPosition: BOOLEAN_INPUT_LABEL_POSITIONS[1],
  helpPosition: BOOLEAN_INPUT_HELP_POSITIONS[0],
  variant: BOOLEAN_INPUT_VARIANTS[0],
  display: BOOLEAN_INPUT_DISPLAYS[0],
  indeterminate: false,
  disabled: false,
  checked: false,
  required: false,
  description: '',
  label: '',
  help: '',
  error: '',
};

const BooleanInput = forwardRef(
  (
    {
      description,
      error,
      checked,
      help,
      required,
      helpPosition,
      variant,
      display,
      label,
      onChange,
      indeterminate,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
      if (isFunction(onChange)) onChange(!isChecked);
    };

    const { classes, cx } = BooleanInputStyles(
      { help, helpPosition, variant, isChecked },
      { name: 'BooleanInput' }
    );

    return (
      <InputWrapper className={classes.wrapper} description={description} error={error}>
        <Box className={classes.root}>
          {display === BOOLEAN_INPUT_DISPLAYS[0] ? (
            <Checkbox
              {...props}
              ref={ref}
              label={required ? `${label} *` : label}
              checked={isChecked}
              onChange={handleOnChange}
              indeterminate={indeterminate}
            />
          ) : (
            <Switch
              {...props}
              ref={ref}
              label={required ? `${label} *` : label}
              checked={isChecked}
              onChange={handleOnChange}
            />
          )}
          {help && (
            <Box className={classes.help}>
              <Text role="productive" onClick={() => setIsChecked(!isChecked)}>
                {help}
              </Text>
            </Box>
          )}
        </Box>
      </InputWrapper>
    );
  }
);

BooleanInput.defaultProps = BOOLEAN_INPUT_DEFAULT_PROPS;
BooleanInput.propTypes = BOOLEAN_INPUT_PROP_TYPES;

export { BooleanInput };