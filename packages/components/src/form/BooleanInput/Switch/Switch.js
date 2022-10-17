import React, { forwardRef } from 'react';
import { Switch as MantineSwitch } from '@mantine/core';
import { SwitchStyles } from './Switch.styles';
import { COLORS } from '../../../theme.tokens';

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
