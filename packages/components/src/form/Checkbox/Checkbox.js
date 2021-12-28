<<<<<<< HEAD
import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MantineCheckbox, Box } from '@mantine/core';
import { CheckboxStyles } from './Checkbox.styles';

export const HELP_POSITIONS = ['right', 'bottom'];
export const CHECKBOX_VARIANTS = ['default', 'boxed'];

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
      { help, helpPosition, variant, isChecked },
      { name: 'Checkbox' }
    );

    const onChangeHandler = () => {
      setIsChecked(!isChecked);
      onChange(!isChecked);
    };

    return (
      <Box className={classes.container} ref={ref}>
        <MantineCheckbox
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={onChangeHandler}
          checked={isChecked}
          value={value}
          {...props}
          classNames={classes}
          label={label}
        ></MantineCheckbox>
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
=======
import React, { forwardRef } from 'react';
import { isBoolean } from 'lodash';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { CheckboxStyles } from './Checkbox.styles';

const Checkbox = forwardRef(({ checked, value, ...props }, ref) => {
  const { classes, cx } = CheckboxStyles({});

  return (
    <MantineCheckbox
      checked={isBoolean(checked) ? checked : value}
      ref={ref}
      className={classes.root}
      {...props}
    />
  );
});
>>>>>>> 5108b358ca1c0e0571b1e9cc513d39e37dfa838d

export { Checkbox };
