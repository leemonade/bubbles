import React, { forwardRef } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { CheckboxStyles } from './Checkbox.styles';

const CheckboxIcon = ({ indeterminate, className }) =>
  indeterminate ? (
    <svg width="9" height="4" viewBox="0 0 9 4" fill="none" className={className}>
      <rect y="0.5" width="9" height="3" rx="1" fill="currentColor" />
    </svg>
  ) : (
    <CheckIcon className={className} />
  );

const Checkbox = forwardRef(({ disabled, labelPosition, size, useAria, ...props }, ref) => {
  const { classes, cx } = CheckboxStyles({ disabled, labelPosition }, { name: 'Checkbox' });

  return (
    <MantineCheckbox
      {...props}
      ref={ref}
      classNames={classes}
      icon={CheckboxIcon}
      disabled={disabled}
      role={useAria ? 'checkbox' : undefined}
    />
  );
});

export { Checkbox };
