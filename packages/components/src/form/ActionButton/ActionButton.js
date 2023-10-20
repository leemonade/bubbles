import React, { forwardRef } from 'react';
import { isNil, isString } from 'lodash';
import { Button as MantineButton } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';
import { TooltipComponent } from './components/TooltipComponent';
import {
  ACTION_BUTTON_DEFAULT_PROPS,
  ACTION_BUTTON_PROP_TYPES,
  ACTION_BUTTON_SIZES,
  ACTION_BUTTON_COLORS,
} from './ActionButton.constants';

const ActionButton = forwardRef(
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
ActionButton.displayName = 'ActionButton';

export { ActionButton };
export default ActionButton;
