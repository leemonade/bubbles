import React from 'react';
import { Box } from '@mantine/core';
import {
  UserCards,
  USER_CARDS_DEFAULT_PROPS,
  USER_CARD_VARIANTS,
  USER_CARD_LAYOUT,
} from './UserCards';
import mdx from './UserCards.mdx';

const user = {
  name: 'Marcelina',
  surname: 'Cartes Ramirez',
  avatar:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  rol: 'Tutor',
  email: 'bill.sanders@example.com',
  number: '+31 56 764 893',
  birthday: new Date(),
};

export default {
  title: 'Organisms/Informative/UserCards',
  parameters: {
    component: UserCards,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3701%3A22615',
    },
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: USER_CARD_VARIANTS },
    layout: { control: { type: 'select' }, options: USER_CARD_LAYOUT },
    onChat: { action: 'onChat' },
  },
};

const Template = ({ children, ...props }) => {
  return <UserCards {...props}>{children}</UserCards>;
};

export const Playground = Template.bind({});

Playground.args = {
  user: {
    name: 'Marcelina',
    surname: 'Cartes Ramirez',
    avatar:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    rol: 'Tutor',
    email: 'bill.sanders@example.com',
    number: '+31 56 764 893',
    birthday: new Date(),
  },
  error: 'Contact already added',
  selected: false,
  ...USER_CARDS_DEFAULT_PROPS,
};
