import React from 'react';
import { Box, Spotlight } from '@bubbles-ui/components';
import { MainNav, MAIN_NAV_DEFAULT_PROPS } from './MainNav';
import mdx from './MainNav.mdx';
import { MENU_DATA } from './mocks/menu';

export default {
  title: 'Organisms/Navigation/MainNav',
  parameters: {
    component: MainNav,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3510%3A37946',
    },
  },
  argTypes: {
    logoUrl: { control: { type: 'text' } },
    onOpen: { action: 'OpenSubNav' },
    onClose: { action: 'CloseSubNav' },
    onPin: { action: 'PinSubNav' },
  },
};

const Template = ({ ...props }) => (
  <Box style={{ margin: '-15px', width: 52 }}>
    <Spotlight data={props.menuData}>
      <MainNav {...props} />
    </Spotlight>
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  ...MAIN_NAV_DEFAULT_PROPS,
  menuData: MENU_DATA,
  subNavWidth: 250,
};
