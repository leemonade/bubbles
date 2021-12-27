import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MantineCheckbox, Box, Group } from '@mantine/core';
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
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const { classes, cx } = CheckboxStyles(
      { help, helpPosition, variant, isChecked },
      { name: 'Checkbox' }
    );

    return (
      <Group className={classes.mainContainer} ref={ref} onClick={() => setIsChecked(!isChecked)}>
        <MantineCheckbox
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={(e) => setIsChecked(e.target.checked)}
          checked={isChecked}
          {...props}
          classNames={classes}
        ></MantineCheckbox>
        <Box className={classes.container}>
          <Box className={classes.label}>{label}</Box>
          {help !== '' && <Box className={classes.help}>{help}</Box>}
        </Box>
      </Group>
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
};

export { Checkbox };
