import React from 'react';
import { Box } from '@mantine/core';
import { MainNav } from './MainNav';
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
  argTypes: {},
};

const Template = (props) => {
  return (
    <Box style={{ margin: '-15px', maxWidth: 250 }}>
      <MainNav {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  menuData: MENU_DATA,
};
