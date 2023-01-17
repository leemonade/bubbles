import React from 'react';
import { Box } from '@mantine/core';
import { AutocompleteUser, AUTOCOMPLETEUSER_DEFAULT_PROPS } from './AutocompleteUser';
import mdx from './AutocompleteUser.mdx';

export default {
  title: 'BB1/AutocompleteUser',
  parameters: {
    component: AutocompleteUser,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <AutocompleteUser {...props}>{children}</AutocompleteUser>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...AUTOCOMPLETEUSER_DEFAULT_PROPS,
  label: 'Student',
  placeholder: 'Search for a student',
  data: [
    {
      value: 'Ana Alonso',
      name: 'Ana Alonso',
      label: 'Ana Alonso',
      surnames: 'Garcia',
      rol: 'Student',
      email: 'ana@ana.com',
      number: '+34 123 345 678',
      birthday: new Date(),
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Antonia Hidalgo',
      name: 'Antonia Hidalgo',
      label: 'Antonia Hidalgo',
      surnames: 'Garcia',
      rol: 'Student',
      email: 'antonia@antonia.com',
      number: '+34 123 345 678',
      birthday: new Date(),
      avatar:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Maria Merino',
      name: 'Maria Merino',
      label: 'Maria Merino',
      surnames: 'Garcia',
      rol: 'Student',
      email: 'maria@maria.com',
      number: '+34 123 345 678',
      birthday: new Date(),
      avatar:
        'https://images.unsplash.com/photo-1641324379143-81128cbb7ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTgxMDY1Ng&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      value: 'Miles Morales',
      name: 'Miles Morales',
      label: 'Miles Morales',
      surnames: 'Garcia',
      rol: 'Student',
      email: 'maria@maria.com',
      number: '+34 123 345 678',
      birthday: new Date(),
      avatar:
        'https://images.unsplash.com/photo-1641664434328-6fe8a810e882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTg5MjUyMw&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ],
  nothingFoundLabel: 'No maches found',
  itemPadding: 4,
  ariaLabel: 'Student',
};
