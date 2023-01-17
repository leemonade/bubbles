import React from 'react';
import { Box } from '../../layout';
import { TEXT_ROLES } from '.';
import { Text, TEXT_COLORS, TEXT_DEFAULT_PROPS, TEXT_SIZES, TEXT_TRANSFORMS } from './Text';
import mdx from './Text.mdx';

export default {
  title: 'BB1/Text',
  parameters: {
    component: Text,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3511%3A21971',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    size: { options: TEXT_SIZES, control: { type: 'select' } },
    color: { options: TEXT_COLORS, control: { type: 'select' } },
    transform: { options: TEXT_TRANSFORMS, control: { type: 'select' } },
    role: { options: TEXT_ROLES, control: { type: 'select' } },
  },
};

const Template = ({ test_text, ...props }) => {
  return (
    <Box style={{ width: 300 }}>
      <Text {...props}>{test_text}</Text>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  test_text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel augue sed ante molestie pharetra. Aliquam facilisis venenatis iaculis',
  ...TEXT_DEFAULT_PROPS,
};
