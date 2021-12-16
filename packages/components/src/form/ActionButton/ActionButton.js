import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton, Tooltip } from '@mantine/core';
import { ActionButtonStyles } from './ActionButton.styles';

export const ACTION_BUTTON_SIZES = ['xs', 'sm'];
export const ACTION_BUTTON_COLORS = ['positive', 'negative'];

export const ActionButton = forwardRef(
  (
    {
      as,
      color: colorProp = 'positive',
      size: sizeProp = 'sm',
      rounded = false,
      variant,
      leftIcon,
      rightIcon,
      showLeftIcon = true,
      showRightIcon = false,
      label,
      sx,
      styles,
      className,
      classNames,
      description,
      ...props
    },
    ref
  ) => {
    const color = ACTION_BUTTON_COLORS.includes(colorProp) ? colorProp : 'positive';
    const size = ACTION_BUTTON_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const buttonLeftIcon = showLeftIcon ? leftIcon : undefined;
    const buttonRightIcon = showRightIcon ? rightIcon : undefined;
    const { classes, cx } = ActionButtonStyles({
      size,
      color,
      iconOnly: !label && (!showLeftIcon || !showRightIcon),
    });

    return label ? (
      <MantineButton
        {...props}
        component={as}
        variant="default"
        leftIcon={buttonLeftIcon}
        rightIcon={buttonRightIcon}
        size={size}
        color={color}
        classNames={classes}
        aria-label={description}
        title={description}
        ref={ref}
      >
        {label}
      </MantineButton>
    ) : (
      <Tooltip position="bottom" label={description} classNames={{ body: classes.tooltipBody }}>
        <MantineButton
          {...props}
          component={as}
          variant="default"
          leftIcon={buttonLeftIcon}
          rightIcon={buttonRightIcon}
          size={size}
          color={color}
          classNames={classes}
          aria-label={description}
          title={description}
          ref={ref}
        ></MantineButton>
      </Tooltip>
    );
  }
);

ActionButton.propTypes = {
  size: PropTypes.oneOf(ACTION_BUTTON_SIZES),
  color: PropTypes.oneOf(ACTION_BUTTON_COLORS),
  //iconOnly: PropTypes.bool,
};
