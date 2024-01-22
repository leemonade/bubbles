import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Badge as MantineBadge, Box } from '@mantine/core';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';
import { BadgeStyles } from './Badge.styles';
import { Avatar } from '../Avatar/Avatar';

export const BADGE_SIZES = ['xs', 'md', 'lg'];
export const BADGE_COLORS = ['solid', 'stroke'];
export const BADGE_RADIUS = ['default', 'rounded'];
export const BADGE_SEVERITIES = ['default', 'success', 'warning', 'error'];

export const BADGE_DEFAULT_PROPS = {
  size: 'xs',
  color: 'solid',
  severity: 'default',
  radius: 'rounded',
  closable: true,
  useAria: true,
  labelStyles: {},
};
export const BADGE_PROP_TYPES = {
  label: PropTypes.node,
  size: PropTypes.oneOf(BADGE_SIZES),
  radius: PropTypes.oneOf(BADGE_RADIUS),
  color: PropTypes.oneOf(BADGE_COLORS),
  severity: PropTypes.oneOf(BADGE_SEVERITIES),
  labelStyles: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  className: PropTypes.string,
  useAria: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const Badge = forwardRef(
  (
    {
      label,
      size,
      radius,
      image,
      alt,
      color,
      severity,
      labelStyles,
      onClose,
      closable,
      className,
      children,
      onClick,
      disableHover,
      useAria,
      ...props
    },
    ref,
  ) => {
    if (radius === 'default') {
      image = null;
    }
    if (!label && children) {
      label = children;
    }

    const { classes, cx } = BadgeStyles(
      {
        size,
        color,
        image,
        radius,
        disableHover,
        severity,
        hasOnClick: isFunction(onClick),
        labelStyles,
      },
      { name: 'Badge' },
    );

    const onClickHandler = () => {
      if (isFunction(onClick)) onClick();
    };

    return (
      <Box className={cx(classes.container, className)} onClick={onClickHandler}>
        {image && <Avatar image={image} size={size === 'md' ? 'sm' : size} alt={alt} />}
        <MantineBadge
          rightSection={
            closable ? <RemoveIcon className={classes.closeButton} onClick={onClose} /> : null
          }
          {...props}
          ref={ref}
          classNames={classes}
          className={classes.badgeRoot}
          role={useAria ? 'status' : undefined}
        >
          {label}
        </MantineBadge>
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
Badge.defaultProps = BADGE_DEFAULT_PROPS;
Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
