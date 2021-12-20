import React from 'react';
import { Box } from '@mantine/core';
import { Radio } from './Radio';
import mdx from './Radio.mdx';
import { HELP_TEXT_POSITIONS, RADIO_VARIANTS } from './Radio';
import { AcademicCapIcon } from '@heroicons/react/outline';

export default {
  title: 'Atoms/Form/Radio',
  parameters: {
    component: Radio,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3642%3A2657',
    },
  },
  argTypes: {
    variant: { options: RADIO_VARIANTS, control: { type: 'select' } },
    helpTextPosition: { options: HELP_TEXT_POSITIONS, control: { type: 'select' } },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Radio {...props}>{children}</Radio>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'Radio button label',
  variant: 'default',
  withHelpText: false,
  helpText: 'Help text',
  helpTextPosition: 'right',
  icon: <AcademicCapIcon height={32} width={32} />,
};
