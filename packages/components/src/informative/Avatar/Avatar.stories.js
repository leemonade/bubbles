import React from 'react';
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=1130%3A25568',
    },
  },
  argTypes: {
    size: { options: AVATAR_SIZES, control: { type: 'select' } },
    state: { options: AVATAR_STATE, control: { type: 'select' } },
  },
};

const Template = ({ test_showIcon, test_showImage, image, icon, ...props }) => {
  return (
    <Avatar image={test_showImage ? image : null} icon={test_showIcon ? icon : null} {...props} />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  state: 'normal',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  alt: 'Avatar of a woman',
  icon: <StarIcon />,
  fullName: 'Pepe el del pueblo',
  test_showIcon: false,
  test_showImage: true,
};
