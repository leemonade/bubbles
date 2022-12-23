import React from 'react';
import { Box } from '@bubbles-ui/components';
import { SchemaNav } from './SchemaNav';
import { SCHEMA_NAV_DEFAULT_PROPS } from './SchemaNav.constants';
import mdx from './SchemaNav.mdx';

export default {
  title: 'Molecules/Navigation/SchemaNav',
  parameters: {
    component: SchemaNav,
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
  return <SchemaNav {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...SCHEMA_NAV_DEFAULT_PROPS,
};
