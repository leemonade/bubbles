import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isNil, isString } from 'lodash';
import { Button as MantineButton } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';
import { Tooltip } from '../../overlay';

export const ACTION_BUTTON_SIZES = ['sm', 'md'];
export const ACTION_BUTTON_COLORS = ['primary', 'negative', 'phatic'];

export const ACTION_BUTTON_DEFAULT_PROPS = {
  color: ACTION_BUTTON_COLORS[0],
  size: ACTION_BUTTON_SIZES[1],
  label: '',
  rounded: false,
  useAria: true,
};
export const ACTION_BUTTON_PROP_TYPES = {
  /** Controls the size */
  size: PropTypes.oneOf(ACTION_BUTTON_SIZES),
  /** Control the color */
  color: PropTypes.oneOf(ACTION_BUTTON_COLORS),
  /** Control the tooltip of the button */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Controls if ActionButton uses aria role */
  useAria: PropTypes.bool,
  /** Aria label for ActionButton */
  ariaLabel: PropTypes.string,
};

const TooltipComponent = ({ children, tooltip, useAria }) => {
  return isString(tooltip) && tooltip !== '' ? (
    <Tooltip
      position="bottom"
      label={tooltip}
      withArrow={false}
      useAria={useAria}
      color="secondary"
    >
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
      color: colorProp,
      size: sizeProp,
      rounded,
      variant,
      icon,
      leftIcon,
      rightIcon,
      label,
      tooltip,
      sx,
      styles,
      style,
      className,
      classNames,
      active,
      useAria,
      ariaLabel,
      children,
      ...props
    },
    ref
  ) => {
    const color = ACTION_BUTTON_COLORS.includes(colorProp)
      ? colorProp
      : ACTION_BUTTON_DEFAULT_PROPS.color;
    const size = ACTION_BUTTON_SIZES.includes(sizeProp)
      ? sizeProp
      : ACTION_BUTTON_DEFAULT_PROPS.size;
    const radius = rounded ? 'rounded' : 'md';
    const { classes } = ActionButtonStyles(
      {
        size,
        color,
        iconOnly: isNil(label) || (isString(label) && label === ''),
        radius,
      },
      { classNames, name: 'ActionButton' }
    );

    return (
      <TooltipComponent tooltip={tooltip} useAria={useAria}>
        <MantineButton
          {...props}
          component={as}
          variant="default"
          leftIcon={icon || leftIcon}
          rightIcon={rightIcon}
          size={size}
          color={color}
          className={className}
          classNames={classes}
          aria-label={tooltip || label || ariaLabel || undefined}
          // title={tooltip || ''}
          // radius={radius}
          style={style}
          ref={ref}
          role={useAria ? 'button' : undefined}
        >
          {label}
          {children}
        </MantineButton>
      </TooltipComponent>
    );
  }
);

ActionButton.defaultProps = ACTION_BUTTON_DEFAULT_PROPS;
ActionButton.propTypes = ACTION_BUTTON_PROP_TYPES;
