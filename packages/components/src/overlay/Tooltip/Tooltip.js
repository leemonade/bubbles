import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MantineTooltip } from '@mantine/core';
import { TooltipStyles } from './Tooltip.styles';

export const TOOLTIP_SIZES = ['xs', 'sm', 'md'];
export const TOOLTIP_COLORS = ['primary', 'secondary'];
export const TOOLTIP_POSITION = ['top', 'left', 'right', 'bottom'];
export const TOOLTIP_PLACEMENT = ['start', 'center', 'end'];

const Tooltip = ({
  size = 'xs',
  color = 'primary',
  position = 'top',
  placement = 'center',
  withArrow = 'true',
  useAria,
  ...props
}) => {
  size = TOOLTIP_SIZES.includes(size) ? size : 'xs';
  color = TOOLTIP_COLORS.includes(color) ? color : 'primary';
  position = TOOLTIP_POSITION.includes(position) ? position : 'top';
  placement = TOOLTIP_PLACEMENT.includes(placement) ? placement : 'center';

  const { classes, cx } = TooltipStyles({ size, color });

  return (
    <MantineTooltip
      {...props}
      classNames={classes}
      position={position}
      placement={placement}
      size={size}
      arrowSize={4}
      withArrow={withArrow}
      withinPortal={false}
      role={useAria ? 'tooltip' : undefined}
      // allowPointerEvents={false}
    />
  );
};

Tooltip.propTypes = {
  /** Controls the size */
  size: PropTypes.oneOf(TOOLTIP_SIZES),
  /** Controls the color */
  color: PropTypes.oneOf(TOOLTIP_COLORS),
  /** Controls the position relative to the target element  */
  position: PropTypes.oneOf(TOOLTIP_POSITION),
  /** Controls the placement relative to the target element  */
  placement: PropTypes.oneOf(TOOLTIP_PLACEMENT),
  /** Controls if has arrow or not */
  withArrow: PropTypes.bool,
};

export { Tooltip };
