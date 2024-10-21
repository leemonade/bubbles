import React from 'react';
import { Typing } from './Typing';
import { TYPING_DEFAULT_PROPS } from './Typing.constants';
import mdx from './Typing.mdx';
import { Text } from '../Text';

export default {
  title: 'Atoms/Typography/Typing',
  parameters: {
    component: Typing,
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
  return (
    <Text>
      <Typing {...props} />
    </Text>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TYPING_DEFAULT_PROPS,
  strings: ['Search for products', 'Search for categories', 'Search for brands'],
};
