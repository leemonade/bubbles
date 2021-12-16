import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { TextInput, TEXT_INPUT_SIZES, TEXT_INPUT_ORIENTATION } from './TextInput';
import mdx from './TextInput.mdx';

export default {
  title: 'Molecules/Form/TextInput',
  parameters: {
    component: TextInput,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: TEXT_INPUT_SIZES, control: { type: 'select' } },
    orientation: { options: TEXT_INPUT_ORIENTATION, control: { type: 'select' } },
  },
};

const Template = ({ test_showRightSection, ...props }) => {
  return (
    <TextInput
      {...props}
      rightSection={test_showRightSection ? <XCircleIcon style={{ height: '1.2rem' }} /> : null}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  orientation: 'vertical',
  placeholder: 'Placeholder',
  disabled: false,
  required: true,
  label: 'Label for text field',
  description: 'Optional descriptive text for this text field ',
  error: 'Descriptive text for error ',
  test_showRightSection: false,
};
