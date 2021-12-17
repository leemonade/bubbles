import React from 'react';
import { SubNav } from './SubNav';
import mdx from './SubNav.mdx';

export default {
  title: 'Organisms/Navigation/SubNav',
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

Playground.args = {};
