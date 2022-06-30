import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Popover as MantinePopover } from '@mantine/core';
import { PopoverStyles } from './Popover.styles';

export const POPOVER_POSITIONS = ['bottom', 'left', 'right', 'top'];
export const POPOVER_PLACEMENTS = ['center', 'end', 'start'];

export const POPOVER_DEFAULT_PROPS = {
  padded: false,
};
export const POPOVER_PROP_TYPES = {
  opened: PropTypes.bool,
  target: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(POPOVER_POSITIONS),
  placement: PropTypes.oneOf(POPOVER_PLACEMENTS),
  withArrow: PropTypes.bool,
  withCloseButton: PropTypes.bool,
  padded: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onClose: PropTypes.func,
};

const Popover = forwardRef(({ padded, ...props }, ref) => {
  const { classes, cx } = PopoverStyles({ padded });

  return <MantinePopover {...props} ref={ref} classNames={classes} />;
});

Popover.defaultProps = POPOVER_DEFAULT_PROPS;
Popover.propTypes = POPOVER_PROP_TYPES;

export { Popover };
