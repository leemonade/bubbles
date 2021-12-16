import React from 'react';
import { AddCurriculumForm, LOGIN_FORM_ERROR_MESSAGES, LOGIN_FORM_MESSAGES } from './AddCurriculumForm';
import mdx from './AddCurriculumForm.mdx';

export default {
  title: 'Leemons/AddCurriculumForm',
  parameters: {
    component: AddCurriculumForm,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    onSubmit: { action: 'Form submitted' },
  },
};

const Template = ({ children, ...props }) => {
  return <AddCurriculumForm {...props}>{children}</AddCurriculumForm>;
};

export const Playground = Template.bind({});

Playground.args = {
  recoverUrl: '#',
  isLoading: false,
  formError: '',
  messages: LOGIN_FORM_MESSAGES,
  errorMessages: LOGIN_FORM_ERROR_MESSAGES,
};
