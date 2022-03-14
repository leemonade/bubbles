import React from 'react';
import { RegisterPasswordForm } from './RegisterPasswordForm';
import mdx from './RegisterPasswordForm.mdx';

export default {
  title: 'Leemons/Users/RegisterPassword/RegisterPasswordForm',
  parameters: {
    component: RegisterPasswordForm,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Mt7Ne7X1aHI7pqhXbaF85w/App-Opensource-Backup?node-id=550%3A34163',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    onSubmit: { action: 'Form submitted' },
  },
};

const Template = ({ ...props }) => {
  return <RegisterPasswordForm {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  recoverUrl: '#',
  loading: false,
  formError: '',
  labels: {
    title: 'Create your password',
    password: 'Password',
    repeatPassword: 'Repeat password',
    setPassword: 'Set password',
  },
  placeholders: {
    password: 'Your password',
    repeatPassword: 'Repeat your password',
  },
  errorMessages: {
    password: { required: 'Field required' },
    repeatPassword: { required: 'Field required' },
    passwordMatch: 'Passwords not match',
  },
};
