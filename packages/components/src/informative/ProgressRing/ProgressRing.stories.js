import React from 'react';
import { Box } from '@mantine/core';
import { ProgressRing } from './ProgressRing';
import { PROGRESS_RING_DEFAULT_PROPS, PROGRESSRING_SIZES } from './ProgressRing.constants';
import mdx from './ProgressRing.mdx';

export default {
  title: 'Molecules/Informative/ProgressRing',
  parameters: {
    component: ProgressRing,
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
    size: { control: { type: 'select', options: PROGRESSRING_SIZES } },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text',
      },
    },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => <ProgressRing {...props} />;
export const Playground = Template.bind({});

Playground.args = {
  ...PROGRESS_RING_DEFAULT_PROPS,
  // testLabel,
};
