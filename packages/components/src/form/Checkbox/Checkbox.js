import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MantineCheckbox, Box } from '@mantine/core';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { CheckboxStyles } from './Checkbox.styles';

export const HELP_POSITIONS = ['right', 'bottom'];
export const CHECKBOX_VARIANTS = ['default', 'boxed'];

const CheckboxIcon = ({ indeterminate, className }) =>
  indeterminate ? (
    <svg width="9" height="4" viewBox="0 0 9 4" fill="none" className={className}>
      <rect y="0.5" width="9" height="3" rx="1" fill="currentColor" />
    </svg>
  ) : (
    <CheckIcon className={className} />
  );

const Checkbox = forwardRef(
  (
    {
      label,
      help,
      helpPosition = HELP_POSITIONS[0],
      variant = CHECKBOX_VARIANTS[0],
      disabled = false,
      indeterminate = false,
      onChange,
      checked = false,
      value,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const { classes, cx } = CheckboxStyles(
      { help, helpPosition, variant, isChecked, disabled },
      { name: 'Checkbox' }
    );

    const onChangeHandler = () => {
      setIsChecked(!isChecked);
      onChange(!isChecked);
    };

    return (
      <Box className={classes.container}>
        <MantineCheckbox
          {...props}
          ref={ref}
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={onChangeHandler}
          checked={isChecked}
          value={value}
          classNames={classes}
          label={label}
          icon={CheckboxIcon}
        />
        {help && (
          <Box className={classes.help} onClick={() => setIsChecked(!isChecked)}>
            {help}
          </Box>
        )}
      </Box>
    );
  }
);

Checkbox.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  helpPosition: PropTypes.oneOf(HELP_POSITIONS),
  variant: PropTypes.oneOf(CHECKBOX_VARIANTS),
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export { Checkbox };
