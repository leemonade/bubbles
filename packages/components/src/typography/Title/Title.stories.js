import React from 'react';
import { Box } from '@mantine/core';
import { Title, TITLE_DEFAULT_PROPS, TITLE_COLORS, TITLE_TRANSFORMS } from './Title';
import mdx from './Title.mdx';

export default {
  title: 'BB1/Title',
  parameters: {
    component: Title,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3511%3A21971',
    },
  },
  argTypes: {
    order: { options: [1, 2, 3, 4, 5, 6], control: { type: 'select' } },
    color: { options: TITLE_COLORS, control: { type: 'select' } },
    transform: { options: TITLE_TRANSFORMS, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Title {...props}>Type scale desktop</Title>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TITLE_DEFAULT_PROPS,
};
