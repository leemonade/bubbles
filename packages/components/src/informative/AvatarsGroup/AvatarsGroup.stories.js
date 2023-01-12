import React from 'react';
import { AVATAR_SIZES } from '../Avatar/Avatar.constants';
import { AvatarsGroup } from './AvatarsGroup';
import { AVATARS_GROUP_DEFAULT_PROPS } from './AvatarsGroup.constants';
import mdx from './AvatarsGroup.mdx';

export default {
  title: 'Atoms/Informative/AvatarsGroup',
  parameters: {
    component: AvatarsGroup,
    docs: {
      page: mdx
    },
    design: {
      type: 'figma'
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    }
  },
  argTypes: {
    size: { options: AVATAR_SIZES, control: { type: 'select' } },
    total: { control: { type: 'number' } }
  }
};

const Template = ({ ...props }) => {
  return <AvatarsGroup {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...AVATARS_GROUP_DEFAULT_PROPS,
  moreThanUsersAsMulti: 2,
  data: [
    { fullName: 'John Doe' },
    { fullName: 'Mary Jane' },
    { fullName: 'Peter Parker' },
    { fullName: 'Will Teacher' },
    { fullName: 'Tony Stark' }
  ]
};
