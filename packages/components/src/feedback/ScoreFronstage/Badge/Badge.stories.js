import React from 'react';
import { Box } from '@mantine/core';
import { Badge } from './Badge';
import { BADGE_DEFAULT_PROPS } from './Badge.constants';
import mdx from './Badge.mdx';

export default {
  title: 'Organisms/Feedback/ScoreFronstage/Badge',
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
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <Badge {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...BADGE_DEFAULT_PROPS,
};
