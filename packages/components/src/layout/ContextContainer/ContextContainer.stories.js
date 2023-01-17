import React from 'react';
import { Box } from '@mantine/core';
import { TextInput, NumberInput, RadioGroup, Checkbox } from '../../form';
import {
  ContextContainer,
  CONTEXT_CONTAINER_DEFAULT_PROPS,
  CONTEXT_CONTAINER_PADDED_TYPES,
} from './ContextContainer';
import { Stack } from '../Stack';
import mdx from './ContextContainer.mdx';

export default {
  title: 'BB1/ContextContainer',
  parameters: {
    component: ContextContainer,
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
    padded: { options: CONTEXT_CONTAINER_PADDED_TYPES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  const RADIO_DATA = [
    {
      value: 'option1',
      label: 'Label for option 1',
    },
    {
      value: 'option2',
      label: 'Label for option 2',
    },
    {
      value: 'option3',
      label: 'Label for option 3',
    },
  ];

  const headerInputStyle = { width: 300 };

  return (
    <ContextContainer {...props}>
      <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
      <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CONTEXT_CONTAINER_DEFAULT_PROPS,
  title: 'Subjects',
  subtitle: '',
};
