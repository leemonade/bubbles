import React from 'react';
import {
  ADD_CURRICULUM_FORM_ERROR_MESSAGES,
  ADD_CURRICULUM_FORM_MESSAGES,
  AddCurriculumForm,
} from './AddCurriculumForm';
import mdx from './AddCurriculumForm.mdx';

export default {
  title: 'Leemons/Curriculum/New/AddCurriculumForm',
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
  messages: ADD_CURRICULUM_FORM_MESSAGES,
  errorMessages: ADD_CURRICULUM_FORM_ERROR_MESSAGES,
};
