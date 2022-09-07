import React, { forwardRef } from 'react';
import { Popover as MantinePopover } from '@mantine/core';
import { PopoverStyles } from './Popover.styles';
import { POPOVER_DEFAULT_PROPS, POPOVER_PROP_TYPES } from './Popover.constants';

const Popover = forwardRef(({ padded, target, children, ...props }, ref) => {
  const { classes, cx } = PopoverStyles({ padded });

  return (
    <MantinePopover {...props} ref={ref} classNames={classes}>
      <MantinePopover.Target>{target}</MantinePopover.Target>
      <MantinePopover.Dropdown>{children}</MantinePopover.Dropdown>
    </MantinePopover>
  );
});

Popover.defaultProps = POPOVER_DEFAULT_PROPS;
Popover.propTypes = POPOVER_PROP_TYPES;

export { Popover };
