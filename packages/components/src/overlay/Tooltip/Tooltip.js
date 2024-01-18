import React from 'react';
import { Tooltip as MantineTooltip } from '@mantine/core';
import { TooltipStyles } from './Tooltip.styles';
import {
  TOOLTIP_DEFAULT_PROPS,
  TOOLTIP_PROP_TYPES,
  TOOLTIP_SIZES,
  TOOLTIP_COLORS,
  TOOLTIP_POSITION,
} from './Tooltip.constants';

const Tooltip = ({ size, color, position, withArrow, useAria, withinPortal, ...props }) => {
  size = TOOLTIP_SIZES.includes(size) ? size : 'sm';
  color = TOOLTIP_COLORS.includes(color) ? color : 'primary';
  position = TOOLTIP_POSITION.includes(position) ? position : 'top';

  const { classes, cx } = TooltipStyles({ size, color });

  return (
    <MantineTooltip
      {...props}
      classNames={classes}
      position={position}
      size={size}
      arrowSize={4}
      withArrow={withArrow}
      withinPortal={withinPortal}
      role={useAria ? 'tooltip' : undefined}
    />
  );
};

Tooltip.propTypes = TOOLTIP_PROP_TYPES;
Tooltip.defaultProps = TOOLTIP_DEFAULT_PROPS;

export { Tooltip };
