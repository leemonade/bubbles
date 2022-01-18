import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Popover as MantinePopover } from '@mantine/core';
import { PopoverStyles } from './Popover.styles';

export const POPOVER_DEFAULT_PROPS = {
  padded: false,
};
export const POPOVER_PROP_TYPES = {
  padded: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

const Popover = forwardRef(({ padded, ...props }, ref) => {
  const { classes, cx } = PopoverStyles({ padded });

  return <MantinePopover {...props} ref={ref} classNames={classes} />;
});

Popover.defaultProps = POPOVER_DEFAULT_PROPS;
Popover.propTypes = POPOVER_PROP_TYPES;

export { Popover };
