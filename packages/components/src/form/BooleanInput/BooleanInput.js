import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Box } from '../../layout/Box';
import { InputWrapper } from '../InputWrapper';
import { Text } from '../../typography';
import { Checkbox } from './Checkbox/Checkbox';
import { Switch } from './Switch/Switch';
import { BooleanInputStyles } from './BooleanInput.styles';

export const BOOLEAN_INPUT_HELP_POSITIONS = ['right', 'bottom'];
export const BOOLEAN_INPUT_VARIANTS = ['default', 'boxed'];
export const BOOLEAN_INPUT_DISPLAYS = ['checkbox', 'switch'];
export const BOOLEAN_INPUT_SIZES = ['xs', 'sm', 'md'];
export const BOOLEAN_INPUT_LABEL_POSITIONS = ['start', 'end'];

export const BOOLEAN_INPUT_PROP_TYPES = {
  /** Control the position of the help text */
  helpPosition: PropTypes.oneOf(BOOLEAN_INPUT_HELP_POSITIONS),
  /** Controls the position of the label */
  labelPosition: PropTypes.oneOf(BOOLEAN_INPUT_LABEL_POSITIONS),
  /** Controls the appearance */
  variant: PropTypes.oneOf(BOOLEAN_INPUT_VARIANTS),
  /** Controls the displayed input */
  display: PropTypes.oneOf(BOOLEAN_INPUT_DISPLAYS),
  /** Controls the indeterminate state */
  indeterminate: PropTypes.bool,
  /** Controls the disabled state */
  disabled: PropTypes.bool,
  /** Function called when the value changes */
  onChange: PropTypes.func,
  /** Input label */
  label: PropTypes.string,
  /** Input help */
  help: PropTypes.string,
  /** Input boolean value*/
  checked: PropTypes.bool,
  /** Controls if it is a ProSwitch or not */
  isPro: PropTypes.bool,
  /** Controls the input size */
  size: PropTypes.oneOf(BOOLEAN_INPUT_SIZES),
  /** Controls if BooleanInput uses aria role */
  useAria: PropTypes.bool,
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
  useAria: true,
  isPro: false,
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
      size,
      label,
      onChange,
      indeterminate,
      useAria,
      isPro,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleOnChange = (event) => {
      if (!props.disabled) {
        setIsChecked(!isChecked);
        if (isFunction(onChange)) onChange(!isChecked, event);
      }
    };

    const { classes, cx } = BooleanInputStyles(
      { help, helpPosition, variant, isChecked, isPro },
      { name: 'BooleanInput' }
    );

    return (
      <InputWrapper
        className={classes.wrapper}
        description={description}
        error={error}
        size={size === 'md' ? 'sm' : size}
      >
        <Box className={classes.root}>
          {display === BOOLEAN_INPUT_DISPLAYS[0] ? (
            <Checkbox
              {...props}
              ref={ref}
              size={size}
              label={required ? `${label} *` : label}
              checked={isChecked}
              onChange={handleOnChange}
              indeterminate={indeterminate}
              useAria={useAria}
            />
          ) : (
            <Switch
              {...props}
              ref={ref}
              size={size}
              label={required ? `${label} *` : label}
              checked={isChecked}
              onChange={handleOnChange}
              useAria={useAria}
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
