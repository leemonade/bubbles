import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Avatar as MantineAvatar, Text } from '@mantine/core';
import { ExclamationIcon } from '@heroicons/react/solid';
import { Box } from '../../layout';
import { AvatarStyles } from './Avatar.styles';

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg'];
export const AVATAR_STATE = ['normal', 'alert', 'notifications', 'error'];

const Avatar = forwardRef(
  (
    { image, icon, color, initials, size: sizeProp = 'sm', state: stateProp = 'normal', ...props },
    ref
  ) => {
    const size = AVATAR_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const state = AVATAR_STATE.includes(stateProp) ? stateProp : 'normal';

    const { classes, cx } = AvatarStyles({ color, size });

    return image ? (
      <Box className={classes.avatarWrapper}>
        <MantineAvatar
          {...props}
          ref={ref}
          src={image}
          classNames={classes}
          size={size}
          state={state}
        />
        {state === 'notifications' && (
          <Text componet="span" className={classes.avatarBadgeNumber}>
            2
          </Text>
        )}
        {state === 'alert' && <Text componet="span" className={classes.avatarBadge} />}
        {state === 'error' && (
          <Text componet="span" className={classes.avatarError}>
            <ExclamationIcon />{' '}
          </Text>
        )}
      </Box>
    ) : (
      <Box className={classes.avatarWrapper}>
        <MantineAvatar
          {...props}
          ref={ref}
          size={size}
          state={state}
          classNames={classes}
          className={cx(classes, classes.avatarsolid)}
          color={color}
        >
          {icon ? icon : initials}
        </MantineAvatar>
        {state === 'notifications' && (
          <Text componet="span" className={classes.avatarBadgeNumber}>
            2
          </Text>
        )}
        {state === 'alert' && <Text componet="span" className={classes.avatarBadge} />}
        {state === 'error' && (
          <Text componet="span" className={classes.avatarError}>
            <ExclamationIcon />{' '}
          </Text>
        )}
      </Box>
    );
  }
);

Avatar.propTypes = {
  image: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SIZES),
  state: PropTypes.oneOf(AVATAR_STATE),
  color: PropTypes.string,
  initials: PropTypes.string,
  icon: PropTypes.any,
};

export { Avatar };
