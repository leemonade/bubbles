import React from 'react';
import { Box } from '@mantine/core';
import { TextInput, RadioGroup } from '../../form';
import {
  ContextContainer,
  CONTEXT_CONTAINER_DEFAULT_PROPS,
  CONTEXT_CONTAINER_PADDED_TYPES,
} from './ContextContainer';
import mdx from './ContextContainer.mdx';

export default {
  title: 'Atoms/Layout/ContextContainer',
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
  return (
    <ContextContainer {...props}>
      <TextInput
        label="Label for text field"
        description="Optional descriptive text for this text field "
      />
      <RadioGroup data={RADIO_DATA} />
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CONTEXT_CONTAINER_DEFAULT_PROPS,
};
