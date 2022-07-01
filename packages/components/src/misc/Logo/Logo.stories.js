import React from 'react';
import { Logo, LOGO_VARIANTS } from './Logo';
import mdx from './Logo.mdx';

export default {
  title: 'Atoms/Misc/Logo',
  parameters: {
    component: Logo,
    docs: {
      page: mdx,
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
