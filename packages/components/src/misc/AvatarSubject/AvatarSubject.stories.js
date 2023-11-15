import React from 'react';
import { AvatarSubject } from './AvatarSubject';
import { AVATAR_SUBJECT_DEFAULT_PROPS, AVATAR_SUBJECT_SIZES } from './AvatarSubject.constants';
import mdx from './AvatarSubject.mdx';

export default {
  title: 'Atoms/Informative/AvatarSubject',
  parameters: {
    component: AvatarSubject,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: {
      options: [...AVATAR_SUBJECT_SIZES],
      control: { type: 'radio' },
    },
  },
};

const Template = ({ ...props }) => <AvatarSubject {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  ...AVATAR_SUBJECT_DEFAULT_PROPS,
  color: 'rgba(255,147,0,1)',
};
