import React from 'react';
import { LOGIN_PROFILE_SELECTOR_DEFAULT_PROPS, LoginProfileSelector } from './LoginProfileSelector';
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
    centerPlaceholder: 'Select a center',
  },
  errorMessages: {
    profile: {
      required: 'Please select a profile',
    },
  },
  centers: [
    {
      id: 'center1',
      name: 'Centro 1',
      profiles: [
        {
          id: 'teacher',
          name: 'Teacher',
          // icon: <SchoolTeacherMaleIcon height={32} width={32} />,
        },
        {
          id: 'mother',
          name: 'Mother',
          // icon: <SchoolTeacherMaleIcon height={32} width={32} />,
        },
      ],
    },
    {
      id: 'center2',
      name: 'Centro 2',
      profiles: [
        {
          id: 'teacher',
          name: 'Teacher',
          // icon: <SchoolTeacherMaleIcon height={32} width={32} />,
        },
      ],
    },
  ],
};
