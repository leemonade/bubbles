import React from 'react';
import { Badge } from './Badge';
import { BADGE_DEFAULT_PROPS } from './Badge.constants';
import mdx from './Badge.mdx';

export default {
  title: 'BB2/ScoreFronstage/Badge',
  parameters: {
    component: Badge,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <Badge {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...BADGE_DEFAULT_PROPS,
};
