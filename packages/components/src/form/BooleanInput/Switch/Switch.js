import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { mergeWith } from 'lodash';
import { Switch as MantineSwitch } from '@mantine/core';
import { SwitchStyles } from './Switch.styles';

const Switch = forwardRef(
  ({ labelPosition, size, disabled, useAria, classNames, ...props }, ref) => {
    const { classes } = SwitchStyles({ size, labelPosition, disabled }, { name: 'Switch' });

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
  },
);

Switch.displayName = 'BooleanSwitch';
Switch.propTypes = {
  labelPosition: PropTypes.string,
  size: PropTypes.any,
  useAria: PropTypes.bool,
  classNames: PropTypes.any,
  disabled: PropTypes.bool,
};

export { Switch };
