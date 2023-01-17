import React from 'react';
import { Item } from './Item';
import { Dropdown } from './Dropdown';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { DROPDOWN_DEFAULT_PROPS } from './Dropdown.constants';
import mdx from './Dropdown.mdx';

export default {
  title: 'BB2/Dropdown',
  parameters: {
    component: Dropdown,
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

const Template = ({ data, ...props }) => {
  return (
    <Dropdown {...props}>
      {data.map((item) => (
        <Item {...item} />
      ))}
    </Dropdown>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...DROPDOWN_DEFAULT_PROPS,
  data: [
    { group: true, label: 'Group item 1' },
    {
      label: 'Item 1',
    },
    {
      label: 'Item 2',
      image:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      label: 'Item 3',
      'data-selected': true,
    },
    { group: true },
    {
      label: 'Item 1',
      icon: <StarIcon />,
    },
    {
      label: 'Item 2',
    },
  ],
};
