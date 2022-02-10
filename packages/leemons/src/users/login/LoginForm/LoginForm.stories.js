import React from 'react';
import { LOGIN_FORM_ERROR_MESSAGES, LOGIN_FORM_MESSAGES, LoginForm } from './LoginForm';
import mdx from './LoginForm.mdx';

export default {
  title: 'Leemons/Users/Login/LoginForm',
  parameters: {
    component: LoginForm,
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
  return <LoginForm {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  recoverUrl: '#',
  loading: false,
  formError: '',
  labels: {
    title: 'Login to your account',
    username: 'Email',
    password: 'Password',
    remember: "I can't remember my password",
    login: 'Log in',
    signup: 'I am not registered',
  },
  placeholders: {
    username: 'Your email',
    password: 'Your password',
  },
  errorMessages: {
    username: { required: 'Field required', invalidFormat: 'Invalid format' },
    password: { required: 'Field required' },
  },
};
