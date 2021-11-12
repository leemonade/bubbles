import React from 'react';
import { Textarea } from './Textarea';
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
   },
};

const Template = (props) => {
  return <Textarea {...props}/>;
};

export const DefaultTextarea = Template.bind({});

DefaultTextarea.args = {
  placeholder: 'Escribe aquí tu comentario',
  disabled: false,
  label: 'Label for texfield',
  description: 'Optional descriptive text for this text field ',
  required: true,
  error: 'Descriptive text error ',
};
