import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, trim } from 'lodash';
import { Avatar as MantineAvatar, Box, Text } from '@mantine/core';
import { ExclamationIcon } from '@heroicons/react/solid';
import { AvatarStyles } from './Avatar.styles';
import { stringToHslColor } from '../../helpers';

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg'];
export const AVATAR_STATE = ['normal', 'alert', 'notifications', 'error'];

const Avatar = forwardRef(
  ({ image, icon, color, initials, fullName, size: sizeProp, state: stateProp, ...props }, ref) => {
    const size = AVATAR_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const state = AVATAR_STATE.includes(stateProp) ? stateProp : 'normal';

    if (!initials && !!fullName && !isEmpty(trim(fullName))) {
      const texts = fullName.split(' ');
      initials = `${texts[0][0].toUpperCase()}${texts[1] ? texts[1][0].toUpperCase() : ''}`;
    }
    if (!color) {
      if (!!fullName && !isEmpty(trim(fullName))) {
        color = stringToHslColor(fullName, 50, 50);
      } else {
        color = '#FFFFFF';
      }
    }

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

Avatar.defaultProps = {
  size: 'sm',
  state: 'normal',
};

Avatar.propTypes = {
  image: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SIZES),
  state: PropTypes.oneOf(AVATAR_STATE),
  color: PropTypes.string,
  initials: PropTypes.string,
  fullName: PropTypes.string,
  icon: PropTypes.any,
};

export { Avatar };
