import React from 'react';
import { LoginProfileSelector, LOGIN_PROFILE_SELECTOR_DEFAULT_PROPS } from './LoginProfileSelector';
import mdx from './LoginProfileSelector.mdx';

export default {
  title: 'Leemons/Users/Login/LoginProfileSelector',
  parameters: {
    component: LoginProfileSelector,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/%F0%9F%8D%8B-App-Opensource?node-id=58%3A16666',
    },
  },
  argTypes: {
    onSubmit: { action: 'Form submitted' },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <LoginProfileSelector {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LOGIN_PROFILE_SELECTOR_DEFAULT_PROPS,
  labels: {
    title: 'Hi, John Doe',
    description: 'You have two profiles on leemons, please select the one with you want to access',
    remember: 'Always use this profile for quick access',
    help: 'You can easily change later your profile by clicking on your avatar in the sidebar of the application',
    login: 'Log in',
  },
  errorMessages: {
    profile: {
      required: 'Please select a profile',
    },
  },
  profiles: [
    {
      value: 'teacher',
      label: 'Teacher',
      // icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
    {
      value: 'mother',
      label: 'Mother',
      // icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
  ],
};
