import React from 'react';
import { Box } from '@mantine/core';
import { __name__ } from './__name__';
import { __name__(constantCase)_DEFAULT_PROPS } from './__name__.constants';
import mdx from './__name__.mdx';

export default {
  title: '__atomicity__(pascalCase)s/__folder__(pascalCase)/__name__',
  parameters: {
    component: __name__,
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
  return <__name__ {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...__name__(constantCase)_DEFAULT_PROPS,
};
