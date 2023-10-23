import React, { forwardRef } from 'react';
import { isNil, isString } from 'lodash';
import { Button as MantineButton } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';
import { Tooltip } from '../../overlay';
import {
  ACTION_BUTTON_SIZES,
  ACTION_BUTTON_COLORS,
  ACTION_BUTTON_DEFAULT_PROPS,
  ACTION_BUTTON_PROP_TYPES,
} from './ActionButton.constants';

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
        active,
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
