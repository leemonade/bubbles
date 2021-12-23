import React, { forwardRef, useState } from 'react';
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
      checked,
      childrenData,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    if (childrenData) {
      variant = 'default';
    }

    const { classes, cx } = CheckboxStyles(
      { helpPosition, variant, isChecked },
      { name: 'Checkbox' }
    );

    return (
      <Group className={classes.mainContainer}>
        <MantineCheckbox
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={(e) => setIsChecked(e.target.checked)}
          checked={isChecked}
          {...props}
          ref={ref}
          classNames={classes}
        ></MantineCheckbox>
        <Box>
          <Box className={classes.container}>
            <Box className={classes.label}>{label}</Box>
            {help !== '' && <Box className={classes.help}>{help}</Box>}
          </Box>
          {childrenData && (
            <Box className={classes.childrens}>
              {childrenData.map((item, index) => (
                <Checkbox key={index} variant={variant} {...item} />
              ))}
            </Box>
          )}
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
  childrenData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      help: PropTypes.string,
      helpPosition: PropTypes.string,
    })
  ),
};

export { Checkbox };
