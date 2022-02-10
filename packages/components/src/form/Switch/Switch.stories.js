import React from 'react';
import { Box } from '@mantine/core';
import { Switch, SWITCH_DEFAULT_PROPS } from './Switch';
import {
  BOOLEAN_INPUT_HELP_POSITIONS,
  BOOLEAN_INPUT_VARIANTS,
  BOOLEAN_INPUT_LABEL_POSITIONS,
  BOOLEAN_INPUT_SIZES,
} from '../BooleanInput';
import mdx from './Switch.mdx';

export default {
  title: 'Molecules/Form/Switch',
  parameters: {
    component: Switch,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'Value changed' },
    helpPosition: { options: BOOLEAN_INPUT_HELP_POSITIONS, control: { type: 'select' } },
    variant: { options: BOOLEAN_INPUT_VARIANTS, control: { type: 'select' } },
    labelPosition: { options: BOOLEAN_INPUT_LABEL_POSITIONS, control: { type: 'select' } },
    size: { options: BOOLEAN_INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <Switch {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SWITCH_DEFAULT_PROPS,
  label: 'Hello world',
};
