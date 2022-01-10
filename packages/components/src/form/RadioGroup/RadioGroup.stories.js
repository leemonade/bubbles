import React from 'react';
import { Box } from '@mantine/core';
import { RadioGroup, RADIOGROUP_DIRECTIONS, RADIOGROUP_DEFAULT_PROPS } from './RadioGroup';
import mdx from './RadioGroup.mdx';
import { RADIO_VARIANTS } from '../Radio/Radio';
import { AcademicCapIcon } from '@heroicons/react/outline';

export default {
  title: 'Molecules/Form/RadioGroup',
  parameters: {
    component: RadioGroup,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    variant: { options: RADIO_VARIANTS, control: { type: 'select' } },
    direction: { options: RADIOGROUP_DIRECTIONS, control: { type: 'select' } },
    onChange: { action: 'Changed' },
  },
};

const Template = ({ ...props }) => {
  return <RadioGroup {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...RADIOGROUP_DEFAULT_PROPS,
  data: [
    {
      value: 'option1',
      label: 'Label for option 1',
      icon: <AcademicCapIcon height={32} width={32} />,
    },
    {
      value: 'option2',
      label: 'Label for option 2',
      icon: <AcademicCapIcon height={32} width={32} />,
    },
    {
      value: 'option3',
      label: 'Label for option 3',
      icon: <AcademicCapIcon height={32} width={32} />,
      help: 'Help text for option 3',
      helpPosition: 'bottom',
    },
  ],
};
