import React from 'react';
import { Menu, MENU_DEFAULT_PROPS, MENU_POSITIONS, MENU_PLACEMENT } from './Menu';
import mdx from './Menu.mdx';
import { StarIcon, DeleteBinIcon, FlagIcon } from '@bubbles-ui/icons/solid/';
import { Stack } from '../../layout/Stack';

export default {
  title: 'BB1/Menu',
  parameters: {
    component: Menu,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    position: { options: MENU_POSITIONS, type: 'select' },
    offset: { control: 'number' },
    withArrow: { control: 'boolean' },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Stack fullWidth style={{ height: '300px' }} alignItems={'center'} justifyContent={'center'}>
      <Menu {...props}>{children}</Menu>
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...MENU_DEFAULT_PROPS,
  items: [
    { children: 'Zone 1' },
    {
      icon: <StarIcon />,
      children: 'Item 1',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <DeleteBinIcon />,
      children: 'Item 2',
      onClick: () => alert('Item 2 clicked'),
    },
    {
      icon: <FlagIcon />,
      children: 'Item 3',
      onClick: () => alert('Item 3 clicked'),
    },
    { divider: true },
    { children: 'Zone 2' },
    {
      icon: <DeleteBinIcon />,
      children: 'Item 1',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <FlagIcon />,
      children: 'Item 2',
      onClick: () => alert('Item 2 clicked'),
    },
  ],
};
