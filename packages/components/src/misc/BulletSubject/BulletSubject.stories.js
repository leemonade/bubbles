import React from 'react';
import { Box } from '@mantine/core';
import { BulletSubject } from './BulletSubject';
import { BULLET_SUBJECT_DEFAULT_PROPS, BULLET_SUBJECT_SIZES } from './BulletSubject.constants';
import mdx from './BulletSubject.mdx';

export default {
  title: 'Atoms/Informative/BulletSubject',
  parameters: {
    component: BulletSubject,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    size: {
      options: [...BULLET_SUBJECT_SIZES],
      control: { type: 'radio' },
    },
    // color: {
    //   control: { type: 'color' },
    // },
  },
};

const Template = ({ ...props }) => {
  return <BulletSubject {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...BULLET_SUBJECT_DEFAULT_PROPS,
};
