import React from 'react';
import { Box } from '@mantine/core';
import { Calification } from './Calification';
import { CALIFICATION_DEFAULT_PROPS, CALIFICATION_ORIENTATIONS } from './Calification.constants';
import mdx from './Calification.mdx';

export default {
  title: 'BB1/Calification',
  parameters: {
    component: Calification,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8215%3A104591',
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
