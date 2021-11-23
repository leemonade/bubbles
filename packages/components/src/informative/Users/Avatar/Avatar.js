import React, { forwardRef, useState } from 'react';
import { Box, Text, Avatar as MantineAvatar } from '@mantine/core';
import { ExclamationIcon } from '@heroicons/react/solid';
import { AvatarStyles } from './Avatar.styles';


export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg'];
export const AVATAR_STATE = ['normal', 'alert', 'notifications', 'error'];
export const Avatar = forwardRef(({ radius, size: sizeProp = 'sm', state: stateProp = 'normal', ...props }, ref) => {
  const color = props.personalColor;
  const size = AVATAR_SIZES.includes(sizeProp) ? sizeProp : 'sm';
  const state = AVATAR_STATE.includes(stateProp) ? stateProp : 'normal';

  const { classes, cx } = AvatarStyles({ color, size });
  {
    console.log(color);
  }
  return (
    <>
      {props.AvatarImage ? (
        <Box className={classes.avatarWrapper}>
          <MantineAvatar
            {...props}
            ref={ref}
            src={props.avatarimage}
            alt={props.alt}
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
        <MantineAvatar
          {...props}
          ref={ref}
          size={size}
          state={state}
          classNames={classes}
          color={color}
        >
          {props.AvatarIcon ? props.avataricon : props.initials}
        </MantineAvatar>
      )}
    </>
  );
});