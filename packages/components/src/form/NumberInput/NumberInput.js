import React, { forwardRef } from 'react';
import { NumberInputStyles } from './NumberInput.styles';
import { NumberInput as MantineNumberInput } from '@mantine/core';

const NumberInput = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = NumberInputStyles({});

  return <MantineNumberInput ref={ref} className={classes.root} {...props} />;
});

export { NumberInput };
