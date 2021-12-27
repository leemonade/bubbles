import React from 'react';
import { Box } from '@mantine/core';
import { ProfileSelector, PROFILE_SELECTOR_DEFAULT_PROPS } from './ProfileSelector';
import mdx from './ProfileSelector.mdx';

export default {
  title: 'Organisms/Form/ProfileSelector',
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
  ...PROFILE_SELECTOR_DEFAULT_PROPS,
};
