import React from 'react';
import { Welcome as Intro } from './Welcome';
import { default as Usage } from './Usage';
import mdx from './Welcome.mdx';

export default {
  title: ' Getting Started',
  component: Intro,
  Usage,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Welcome = () => <Intro />;

export const _UsingTheStorybook = () => <Usage />;
