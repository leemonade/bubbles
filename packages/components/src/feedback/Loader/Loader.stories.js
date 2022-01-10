import React from 'react';
import { Box } from '@mantine/core';
import { Loader, LOADER_DEFAULT_PROPS } from './Loader';
import { CONTEXT_CONTAINER_PADDED_TYPES } from '../../layout';
import mdx from './Loader.mdx';

export default {
  title: 'Atoms/Feedback/Loader',
  parameters: {
    component: Loader,
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
    padded: { options: CONTEXT_CONTAINER_PADDED_TYPES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <Loader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LOADER_DEFAULT_PROPS,
};
