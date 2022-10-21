import React, { forwardRef } from 'react';
import { Switch as MantineSwitch } from '@mantine/core';
import { SwitchStyles } from './Switch.styles';
import { mergeWith } from 'lodash';

const Switch = forwardRef(
  ({ labelPosition, size, disabled, useAria, classNames, ...props }, ref) => {
    const { classes, cx } = SwitchStyles({ size, labelPosition, disabled }, { name: 'Switch' });

    const mergedClasses = mergeWith({ ...classes }, { ...classNames }, (obj, src) => {
      if (obj) return `${obj} ${src}`;
      return src;
    });

    return (
      <MantineSwitch
        {...props}
        ref={ref}
        size={size}
        classNames={mergedClasses}
        disabled={disabled}
        role={useAria ? 'switch' : undefined}
      />
    );
  }
);

export { Switch };
