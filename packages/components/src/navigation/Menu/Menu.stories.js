import React from 'react';
import { Menu, MENU_DEFAULT_PROPS, MENU_POSITIONS, MENU_PLACEMENT } from './Menu';
import mdx from './Menu.mdx';
import { StarIcon, DeleteBinIcon, FlagIcon } from '@bubbles-ui/icons/solid/';
import { Stack } from '../../layout/Stack';

export default {
  title: 'Atoms/Navigation/Menu',
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
    placement: { options: MENU_PLACEMENT, type: 'select' },
    gutter: { control: 'number' },
    withArrow: { control: 'boolean' },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Stack fullWidth style={{ height: '300px', marginLeft: '200px' }} alignItems={'center'}>
      <Menu {...props}>{children}</Menu>
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...MENU_DEFAULT_PROPS,
  items: [
    {
      icon: <StarIcon />,
      children: 'Item 1',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <DeleteBinIcon />,
      children: 'Item 2',
      onClick: () => alert('Item 1 clicked'),
    },
    {
      icon: <FlagIcon />,
      children: 'Item 3',
      onClick: () => alert('Item 3 clicked'),
    },
  ],
};
