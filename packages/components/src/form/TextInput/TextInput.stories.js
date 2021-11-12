import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

import { TextInput, TINPUT_SIZES, TINPUT_ORIENTATION } from './TextInput';
import mdx from './TextInput.mdx';

export default {
  title: 'Form/Input/TextInput',
  parameters: {
    component: TextInput,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: TINPUT_SIZES, control: { type: 'select' } },
    orientation: { options: TINPUT_ORIENTATION, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <TextInput {...props} rightSection={<XCircleIcon style={{ height: '1.2rem' }} />} />;
};

export const DefaultTextInput = Template.bind({});

DefaultTextInput.args = {
  size: 'sm',
  orientation: 'vertical',
  placeholder: 'Placeholder',
  disabled: false,
  label: 'Label for texfield',
  description: 'Optional descriptive text for this text field ',
  required: true,
  error: 'Descriptive text for error ',
};
