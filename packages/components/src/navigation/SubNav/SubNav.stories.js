import React from 'react';
import { SubNav } from './SubNav';
import mdx from './SubNav.mdx';
import { MENU_DATA } from '../MainNav/mocks/menu';

export default {
  title: 'BB1/SubNav',
  parameters: {
    component: SubNav,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = (props) => {
  return <SubNav {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  item: MENU_DATA[0],
  subItems: MENU_DATA[0].children,
  activeItem: MENU_DATA[0].children[0],
};
