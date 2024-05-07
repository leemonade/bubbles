import React, { forwardRef } from 'react';
import { isEmpty, trim } from 'lodash';
import { Avatar as MantineAvatar, Box, Indicator } from '@mantine/core';
import { AvatarStyles, getIndicatorStyle } from './Avatar.styles';
import { stringToHslColor } from '../../helpers';
import {
  AVATAR_DEFAULT_PROPS,
  AVATAR_PROP_TYPES,
  AVATAR_SIZES,
  AVATAR_STATE,
} from './Avatar.constants';

const Avatar = forwardRef(
  (
    {
      image,
      icon,
      color,
      subjectColor,
      initials,
      fullName,
      radius = true,
      size: sizeProp,
      state: stateProp,
      activityStatus,
      showIconAndImage,
      alt,
      customSize,
      ...props
    },
    ref,
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

    const { classes, theme } = AvatarStyles({
      radius,
      color,
      size,
      state,
      activityStatus,
      subjectColor,
      customSize,
    });

    return (
      <Box className={classes.avatarWrapper}>
        <Indicator
          offset={2}
          classNames={{ indicator: classes.indicatorRoot }}
          {...getIndicatorStyle(theme, state)}
        >
          <MantineAvatar
            {...props}
            ref={ref}
            src={image}
            classNames={classes}
            color={color}
            alt={alt}
          >
            {!showIconAndImage && icon ? icon : initials}
          </MantineAvatar>
          {showIconAndImage && icon && <Box className={classes.iconWrapper}>{icon}</Box>}
        </Indicator>
      </Box>
    );
  },
);

Avatar.displayName = 'Avatar';
Avatar.defaultProps = AVATAR_DEFAULT_PROPS;
Avatar.propTypes = AVATAR_PROP_TYPES;

export { Avatar };
