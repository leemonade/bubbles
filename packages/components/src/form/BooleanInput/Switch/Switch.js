import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch as MantineSwitch } from '@mantine/core';
import { SwitchStyles } from './Switch.styles';

const Switch = forwardRef(({ labelPosition, size, disabled, useAria, ...props }, ref) => {
  const { classes, cx } = SwitchStyles({ size, labelPosition, disabled }, { name: 'Switch' });

  return (
    <MantineSwitch
      {...props}
      ref={ref}
      size={size}
      classNames={classes}
      disabled={disabled}
      role={useAria ? 'switch' : undefined}
    />
  );
});

export { Switch };
