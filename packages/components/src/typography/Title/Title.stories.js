import React from 'react';
import { Box } from '@mantine/core';
import { Title } from './Title';
import mdx from './Title.mdx';

export default {
  title: 'Atoms/Typography/Title',
  parameters: {
    component: Title,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    order: { options: [1, 2, 3, 4, 5, 6], control: { type: 'select' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Title {...props}>Type scale desktop</Title>;
};

export const Playground = Template.bind({});

Playground.args = {
  order: 1,
};
