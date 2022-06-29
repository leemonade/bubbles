import React from 'react';
import { Box } from '@mantine/core';
import { Calification } from './Calification';
import { CALIFICATION_DEFAULT_PROPS, CALIFICATION_ORIENTATIONS } from './Calification.constants';
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
  argTypes: {
    orientation: { control: { type: 'select' }, options: CALIFICATION_ORIENTATIONS },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box>
      <Calification {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...CALIFICATION_DEFAULT_PROPS,
  minimumGrade: 5,
  grade: 5,
};
