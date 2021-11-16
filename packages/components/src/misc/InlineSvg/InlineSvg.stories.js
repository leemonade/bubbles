import React from 'react';
import { InlineSvg } from './InlineSvg';
import mdx from './InlineSvg.mdx';

export default {
  title: 'Misc/InlineSvg',
  parameters: {
    component: InlineSvg,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = (props) => {
  return <InlineSvg {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  src: 'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/logo_leemons_86b21f7eea.svg',
};
