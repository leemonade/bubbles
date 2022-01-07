import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Badge as MantineBadge, Box } from '@mantine/core';
import { BadgeStyles } from './Badge.styles';
import { XIcon } from '@heroicons/react/solid';
import { Avatar } from '../Avatar/Avatar';

export const BADGE_SIZES = ['xs', 'md', 'lg'];
export const BADGE_COLORS = ['solid', 'stroke'];
export const BADGE_RADIUS = ['default', 'rounded'];

export const BADGE_DEFAULT_PROPS = {
  size: 'xs',
  color: 'solid',
  radius: 'rounded',
};
export const BADGE_PROP_TYPES = {
  label: PropTypes.node,
  size: PropTypes.oneOf(BADGE_SIZES),
  radius: PropTypes.oneOf(BADGE_RADIUS),
  color: PropTypes.oneOf(BADGE_COLORS),
  image: PropTypes.string,
  onClose: PropTypes.func,
};

const Badge = forwardRef(({ label, size, radius, image, color, onClose, ...props }, ref) => {
  if (radius === 'default') {
    image = null;
  }

  const { classes, cx } = BadgeStyles({ size, color, image, radius });

  return (
    <Box className={classes.container}>
      {image && <Avatar image={image} />}
      <MantineBadge
        rightSection={
          <XIcon className={classes.closeButton} height={15} width={15} onClick={onClose} />
        }
        {...props}
        ref={ref}
        classNames={classes}
      >
        {label}
      </MantineBadge>
    </Box>
  );
});

Badge.defaultProps = BADGE_DEFAULT_PROPS;

Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
