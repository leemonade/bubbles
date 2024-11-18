import React, { forwardRef } from 'react';
import { isNil } from 'lodash';
import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { IconButtonStyles } from './IconButton.styles';
import {
  ICON_BUTTON_COLORS,
  ICON_BUTTON_DEFAULT_PROPS,
  ICON_BUTTON_VARIANTS,
  ICON_BUTTON_PROP_TYPES,
} from './IconButton.constants';

const IconButton = forwardRef(
  (
    {
      color: colorProp,
      size,
      variant: variantProp,
      rounded,
      sx,
      icon,
      styles,
      className,
      label,
      children,
      useAria,
      ...props
    },
    ref,
  ) => {
    const radius = rounded ? 'xl' : 'xs';
    const color = ICON_BUTTON_COLORS.includes(colorProp)
      ? colorProp
      : ICON_BUTTON_DEFAULT_PROPS.color;
    const variant = ICON_BUTTON_VARIANTS.includes(variantProp)
      ? variantProp
      : ICON_BUTTON_DEFAULT_PROPS.variant;
    const { classes, cx } = IconButtonStyles({ color, size, variant });

    return (
      <MantineActionIcon
        {...props}
        title={label}
        aria-label={label}
        variant={variant}
        radius={radius}
        size={size}
        className={cx(classes.root, className)}
        ref={ref}
        role={useAria ? 'button' : undefined}
      >
        {!isNil(icon) ? icon : children}
      </MantineActionIcon>
    );
  },
);

IconButton.defaultProps = ICON_BUTTON_DEFAULT_PROPS;
IconButton.propTypes = ICON_BUTTON_PROP_TYPES;
IconButton.displayName = 'IconButton';

export { IconButton };
export default IconButton;
