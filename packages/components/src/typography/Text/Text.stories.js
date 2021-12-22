import React from 'react';
import { TEXT_ROLES } from '.';
import { Text, TEXT_COLORS, TEXT_SIZES, TEXT_TRANSFORMS, DEFAULT_PROPS } from './Text';
import mdx from './Text.mdx';

export default {
  title: 'Atoms/Typography/Text',
  parameters: {
    component: Text,
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
    size: { options: TEXT_SIZES, control: { type: 'select' } },
    color: { options: TEXT_COLORS, control: { type: 'select' } },
    transform: { options: TEXT_TRANSFORMS, control: { type: 'select' } },
    role: { options: TEXT_ROLES, control: { type: 'select' } },
  },
};

const Template = ({ test_text, ...props }) => {
  return <Text {...props}>{test_text}</Text>;
};

export const Playground = Template.bind({});

Playground.args = {
  test_text: 'Test',
  ...DEFAULT_PROPS,
};
