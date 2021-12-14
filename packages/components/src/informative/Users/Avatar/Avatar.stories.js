import React, { useState } from 'react';
import { Avatar, AVATAR_SIZES, AVATAR_STATE } from './Avatar';
import { StarIcon } from '@heroicons/react/outline';
import mdx from './Avatar.mdx';

export default {
  title: 'Atoms/Informative/Avatar',
  parameters: {
    component: Avatar,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    AvatarImage: { control: { type: 'boolean' } },
    AvatarIcon: { control: { type: 'boolean' } },
    size: { options: AVATAR_SIZES, control: { type: 'select' } },
    state: { options: AVATAR_STATE, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <Avatar {...props}></Avatar>;
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  state: 'normal',
  AvatarImage: true,
  avatarimage:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  alt: 'avatar',
  AvatarIcon: false,
  avataricon: <StarIcon />,
  initials: 'SA',
  personalColor: '#fabada',
};
