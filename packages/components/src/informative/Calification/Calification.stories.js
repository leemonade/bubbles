import React from 'react';
import { Box } from '@mantine/core';
import { Calification } from './Calification';
import { CALIFICATION_DEFAULT_PROPS } from './Calification.constants';
import mdx from './Calification.mdx';

export default {
  title: 'Atoms/Informative/Calification',
  parameters: {
    component: Calification,
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
  return <Calification {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...CALIFICATION_DEFAULT_PROPS,
};
