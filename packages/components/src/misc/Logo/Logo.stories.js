import React from 'react';
import { Logo, LOGO_VARIANTS } from './Logo';
import mdx from './Logo.mdx';

export default {
  title: 'BB1/Logo',
  parameters: {
    component: Logo,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3637%3A27125',
    },
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: LOGO_VARIANTS },
  },
};

const Template = (props) => {
  return <Logo {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  variant: LOGO_VARIANTS[0],
  isotype: false,
};
