import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Badge as MantineBadge } from '@mantine/core';
import { BadgeStyles } from './Badge.styles';
import { XIcon } from '@heroicons/react/solid';
import { IconButton } from '../../form/IconButton';
import { Avatar } from '../Avatar/Avatar';

export const BADGE_SIZES = ['xs', 'md', 'lg'];

export const BADGE_DEFAULT_PROPS = {
  label: 'Badge',
  size: 'xs',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
};
export const BADGE_PROP_TYPES = {
  label: PropTypes.node,
  size: PropTypes.oneOf(BADGE_SIZES),
  image: PropTypes.string,
};

const Badge = forwardRef(({ label, size, image, ...props }, ref) => {
  const { classes, cx } = BadgeStyles({ size });

  const avatar = <Avatar image={image} />;

  return (
    <MantineBadge
      leftSection={image ? avatar : null}
      rightSection={<XIcon height={15} width={15} />}
      {...props}
      ref={ref}
      classNames={classes}
    >
      {label}
    </MantineBadge>
  );
});

Badge.defaultProps = BADGE_DEFAULT_PROPS;

Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
