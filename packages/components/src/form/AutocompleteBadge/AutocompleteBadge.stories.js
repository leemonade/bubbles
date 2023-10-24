/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { AutocompleteBadge } from './AutocompleteBadge';
import { AUTOCOMPLETEBADGE_DEFAULT_PROPS } from './AutocompleteBadge.constants';
import mdx from './AutocompleteBadge.mdx';

export default {
  title: 'Organisms/Form/AutocompleteBadge',
  parameters: {
    component: AutocompleteBadge,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

// eslint-disable-next-line react/prop-types
const Template = ({ children, ...props }) => (
  <AutocompleteBadge {...props}>{children}</AutocompleteBadge>
);

export const Playground = Template.bind({});

Playground.args = {
  ...AUTOCOMPLETEBADGE_DEFAULT_PROPS,
  label: 'Student',
  placeholder: 'Search for a student',
  data: [
    {
      value: 'Ana Alonso',
      name: 'Ana Alonso',
      label: 'Ana Alonso',
      children: 'Ana Alonso',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Antonia Hidalgo',
      name: 'Antonia Hidalgo',
      label: 'Antonia Hidalgo',
      children: 'Antonia Hidalgo',
      avatar:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Maria Merino',
      name: 'Maria Merino',
      label: 'Maria Merino',
      children: 'Maria Merino',
      avatar:
        'https://images.unsplash.com/photo-1641324379143-81128cbb7ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTgxMDY1Ng&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      value: 'Miles Morales',
      name: 'Miles Morales',
      label: 'Miles Morales',
      children: 'Miles Morales',
      avatar:
        'https://images.unsplash.com/photo-1641664434328-6fe8a810e882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTg5MjUyMw&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ],
  nothingFoundLabel: 'No maches found',
  itemPadding: 4,
  ariaLabel: 'Student',
};
