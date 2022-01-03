import React from 'react';
import { Box } from '@mantine/core';
import {
  UserDisplayItem,
  USER_DISPLAY_ITEM_DEFAULT_PROPS,
  USER_DISPLAY_ITEM_VARIANTS,
  USER_DISPLAY_ITEM_LAYOUT,
} from './UserDisplayItem';
import mdx from './UserDisplayItem.mdx';

export default {
  title: 'Molecules/Informative/UserDisplayItem',
  parameters: {
    component: UserDisplayItem,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=1130%3A25568',
    },
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: USER_DISPLAY_ITEM_VARIANTS },
    layout: { control: { type: 'select' }, options: USER_DISPLAY_ITEM_LAYOUT },
  },
};

const Template = ({ children, ...props }) => {
  return <UserDisplayItem {...props}>{children}</UserDisplayItem>;
};

export const Playground = Template.bind({});

Playground.args = {
  name: 'Ana Maria',
  surname: 'Lopez Vilchez',
  avatar:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  rol: 'Tutor',
  email: 'bill.sanders@example.com',
  ...USER_DISPLAY_ITEM_DEFAULT_PROPS,
};
