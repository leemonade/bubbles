import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isNil, isString } from 'lodash';
import { Button as MantineButton } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';
import { Tooltip } from '../../overlay/Tooltip';

export const ACTION_BUTTON_SIZES = ['xs', 'sm'];
export const ACTION_BUTTON_COLORS = ['positive', 'negative'];
export const ACTION_BUTTON_VARIANTS = ['default', 'solid'];

export const ACTION_BUTTON_DEFAULT_PROPS = {
  color: ACTION_BUTTON_COLORS[0],
  size: ACTION_BUTTON_SIZES[1],
  variant: ACTION_BUTTON_VARIANTS[0],
  label: '',
  rounded: false,
  active: false,
};
export const ACTION_BUTTON_PROP_TYPES = {
  size: PropTypes.oneOf(ACTION_BUTTON_SIZES),
  color: PropTypes.oneOf(ACTION_BUTTON_COLORS),
  variant: PropTypes.oneOf(ACTION_BUTTON_VARIANTS),
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  active: PropTypes.bool,
};

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
    const radius = rounded ? 'xl' : 'xs';
    const { classes, cx } = ActionButtonStyles(
      {
        size,
        color,
        variant,
        iconOnly: isNil(label) || (isString(label) && label === ''),
        active,
      },
      { name: 'ActionButton' }
    );

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
          style={style}
          ref={ref}
        >
          {label}
        </MantineButton>
      </TooltipComponent>
    );
  }
);

ActionButton.defaultProps = ACTION_BUTTON_DEFAULT_PROPS;
ActionButton.propTypes = ACTION_BUTTON_PROP_TYPES;
