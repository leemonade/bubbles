import React, { forwardRef } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { CheckboxStyles } from './Checkbox.styles';

const Checkbox = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = CheckboxStyles({});

  return <MantineCheckbox ref={ref} className={classes.root} {...props} />;
});

export { Checkbox };
