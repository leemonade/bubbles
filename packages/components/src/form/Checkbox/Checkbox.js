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

export { Checkbox };
