import React, { forwardRef } from 'react';
import { isEmpty, trim } from 'lodash';
import { Avatar as MantineAvatar, Box, Text } from '@mantine/core';
import { ExclamationIcon } from '@heroicons/react/solid';
import { AvatarStyles } from './Avatar.styles';
import { stringToHslColor } from '../../helpers';
import {
  AVATAR_DEFAULT_PROPS,
  AVATAR_PROP_TYPES,
  AVATAR_SIZES,
  AVATAR_STATE
} from './Avatar.constants';

const Avatar = forwardRef(
  (
    {
      image,
      icon,
      color,
      initials,
      fullName,
      size: sizeProp,
      state: stateProp,
      activityStatus,
      alt,
      ...props
    },
    ref
  ) => {
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

    const renderState = () => {
      return {
        notifications: (
          <Text componet='span' className={classes.avatarBadgeNumber}>
            2
          </Text>
        ),
        alert: <Text componet='span' className={classes.avatarBadge} />,
        error: (
          <Text componet='span' className={classes.avatarError}>
            <ExclamationIcon />{' '}
          </Text>
        ),
        activity: <Box className={classes.avatarActivity}></Box>
      }[state];
    };

    const { classes, cx } = AvatarStyles({ color, size, activityStatus });
    return image ? (
      <Box className={classes.avatarWrapper}>
        <MantineAvatar
          {...props}
          ref={ref}
          src={image}
          classNames={classes}
          className={cx(classes, classes.avatarsolid)}
          color={color}
          size={size}
          state={state}
          alt={alt}
        >
          {icon ? icon : initials}
        </MantineAvatar>
        {renderState()}
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
          alt={alt}
        >
          {icon ? icon : initials}
        </MantineAvatar>
        {renderState()}
      </Box>
    );
  }
);

Avatar.defaultProps = AVATAR_DEFAULT_PROPS;

Avatar.propTypes = AVATAR_PROP_TYPES;

export { Avatar };
