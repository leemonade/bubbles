import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MantineTooltip } from '@mantine/core';
import { TooltipStyles } from './Tooltip.styles';

export const TOOLTIP_SIZES = ['xs', 'sm'];
export const TOOLTIP_COLORS = ['primary', 'secondary'];
export const TOOLTIP_POSITION = ['top', 'left', 'right', 'bottom'];
export const TOOLTIP_PLACEMENT = ['start', 'center', 'end'];

const Tooltip = ({
    size= 'xs',
    color= 'primary',
    position= 'top',
    placement= 'center',
    withArrow= 'true',
    ...props 
  }) => {

  size = TOOLTIP_SIZES.includes(size) ? size : 'xs';
  color = TOOLTIP_COLORS.includes(color) ? color : 'primary';
  position = TOOLTIP_POSITION.includes(position) ? position : 'top';
  placement = TOOLTIP_PLACEMENT.includes(placement) ? placement : 'center';
  
  const { classes, cx } = TooltipStyles({ size, color });

  return (
    <>
      <MantineTooltip 
      {...props} 
      classNames={classes} 
      position={position} 
      placement={placement} 
      size={size} 
      arrowSize={4}
      withArrow={withArrow}
      />
    </>
  );
};

Tooltip.propTypes = {
  size: PropTypes.oneOf(TOOLTIP_SIZES),
  color: PropTypes.oneOf(TOOLTIP_COLORS),
  position: PropTypes.oneOf(TOOLTIP_POSITION),
  placement: PropTypes.oneOf(TOOLTIP_PLACEMENT),
  withArrow: PropTypes.bool
};

export { Tooltip };
