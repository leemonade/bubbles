import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Badge as MantineBadge, Box } from '@mantine/core';
import { BadgeStyles } from './Badge.styles';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { Avatar } from '../Avatar/Avatar';
import { isFunction } from 'lodash';

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
};
export const BADGE_PROP_TYPES = {
  label: PropTypes.node,
  size: PropTypes.oneOf(BADGE_SIZES),
  radius: PropTypes.oneOf(BADGE_RADIUS),
  color: PropTypes.oneOf(BADGE_COLORS),
  severity: PropTypes.oneOf(BADGE_SEVERITIES),
  image: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  className: PropTypes.string,
  useAria: PropTypes.bool,
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
      onClose,
      closable,
      className,
      children,
      onClick,
      useAria,
      ...props
    },
    ref
  ) => {
    if (radius === 'default') {
      image = null;
    }
    if (!label && children) {
      label = children;
    }

    const { classes, cx } = BadgeStyles(
      { size, color, image, radius, severity, hasOnClick: isFunction(onClick) },
      { name: 'Badge' }
    );

    const onClickHandler = () => {
      isFunction(onClick) && onClick();
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
  }
);

Badge.defaultProps = BADGE_DEFAULT_PROPS;
Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
