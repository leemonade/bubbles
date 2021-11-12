import React from 'react';
import { Textarea, TAINPUT_ORIENTATION } from './Textarea';
import mdx from './Textarea.mdx';

export default {
  title: 'Form/Input/Textarea',
  parameters: {
    component: Textarea,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    orientation: { options: TAINPUT_ORIENTATION, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <Textarea {...props}/>;
};

export const DefaultTextarea = Template.bind({});

DefaultTextarea.args = {
  placeholder: 'Escribe aquí tu comentario',
  disabled: false,
  orientation: 'vertical',
  label: 'Label for texfield',
  description: 'Optional descriptive text for this text field ',
  required: true,
  error: 'Descriptive text error ',
};
