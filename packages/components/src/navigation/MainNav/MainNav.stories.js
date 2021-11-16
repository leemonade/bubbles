import React from 'react';
import { MainNav } from './MainNav';
import mdx from './MainNav.mdx';

export default {
  title: 'Navigation/MainNav',
  parameters: {
    component: MainNav,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = (props) => {
  return <MainNav {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {};
