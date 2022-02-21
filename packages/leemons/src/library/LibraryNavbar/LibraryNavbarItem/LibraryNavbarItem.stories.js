import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryNavbarItem, LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS } from './LibraryNavbarItem';
import mdx from './LibraryNavbarItem.mdx';
import { PluginKimIcon } from '@bubbles-ui/icons/solid/';

export default {
  title: 'leemons/Library/LibraryNavbar/LibraryNavbarItem',
  parameters: {
    component: LibraryNavbarItem,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=6696%3A72630',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <LibraryNavbarItem {...props}>{children}</LibraryNavbarItem>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS,
  icon: <PluginKimIcon height={16} width={16} />,
  label: 'Default',
};
