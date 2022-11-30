import React from 'react';
import { Average } from './Average';
import { AVERAGE_DEFAULT_PROPS } from './Average.constants';
import mdx from './Average.mdx';

export default {
  title: 'Organisms/Feedback/ScoreFronstage/Average',
  parameters: {
    component: Average,
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
  return <Average {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...AVERAGE_DEFAULT_PROPS,
  label: 'Average score',
};
