import React from 'react';
import { Box } from '@mantine/core';
import { ProfileSelector, PROFILE_SELECTOR_DEFAULT_PROPS } from './ProfileSelector';
import mdx from './ProfileSelector.mdx';
import SchoolTeacherMaleIcon from '@bubbles-ui/icons/outline/SchoolTeacherMaleIcon';

export default {
  title: 'Leemons/Users/Login/ProfileSelector',
  parameters: {
    component: ProfileSelector,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onSubmit: { action: 'Form submitted' },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <ProfileSelector {...props}>{children}</ProfileSelector>;
};

export const Playground = Template.bind({});

Playground.args = {
  name: 'John Doe',
  description: 'You have two profiles on leemons, please select the one with you want to access',
  radioGroupData: [
    {
      value: 'teacher',
      label: 'Teacher',
      icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
    {
      value: 'mother',
      label: 'Mother',
      icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
  ],
  checkBoxLabel: 'Always use this profile for quick access',
  lowerHelp:
    'You can easily change later your profile by clicking on your avatar in the sidebar of the application',
  buttonLabel: 'Log in',
  ...PROFILE_SELECTOR_DEFAULT_PROPS,
};
