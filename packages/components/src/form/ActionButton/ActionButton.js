import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isNil, isString } from 'lodash';
import { Button as MantineButton } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';
import { Tooltip } from '../../overlay';

export const ACTION_BUTTON_SIZES = ['xs', 'sm'];
export const ACTION_BUTTON_COLORS = ['positive', 'negative'];

const TooltipComponent = ({ children, tooltip }) => {
  return isString(tooltip) && tooltip !== '' ? (
    <Tooltip position="bottom" label={tooltip} withArrow={false} color="secondary">
      {children}
    </Tooltip>
  ) : (
    <>{children}</>
  );
};

export const ActionButton = forwardRef(
  (
    {
      as,
      color: colorProp = 'positive',
      size: sizeProp = 'sm',
      rounded = false,
      variant,
      icon,
      leftIcon,
      rightIcon,
      label,
      tooltip,
      sx,
      styles,
      className,
      classNames,
      ...props
    },
    ref
  ) => {
    const color = ACTION_BUTTON_COLORS.includes(colorProp) ? colorProp : 'positive';
    const size = ACTION_BUTTON_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const radius = rounded ? 'xl' : 'xs';
    const { classes, cx } = ActionButtonStyles({
      size,
      color,
      iconOnly: isNil(label) || (isString(label) && label === ''),
    });

    return (
      <TooltipComponent tooltip={tooltip}>
        <MantineButton
          {...props}
          component={as}
          variant="default"
          leftIcon={icon || leftIcon}
          rightIcon={rightIcon}
          size={size}
          color={color}
          classNames={classes}
          aria-label={tooltip || ''}
          title={tooltip || ''}
          radius={radius}
          ref={ref}
        >
          {label}
        </MantineButton>
      </TooltipComponent>
    );
  }
);

ActionButton.propTypes = {
  size: PropTypes.oneOf(ACTION_BUTTON_SIZES),
  color: PropTypes.oneOf(ACTION_BUTTON_COLORS),
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
