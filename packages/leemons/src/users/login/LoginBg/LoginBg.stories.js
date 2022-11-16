import React from 'react';
import { LoginBg, LOGIN_BG_DEFAULT_PROPS } from './LoginBg';
import mdx from './LoginBg.mdx';

export default {
  title: 'Leemons/Users/Login/LoginBg',
  parameters: {
    component: LoginBg,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/%F0%9F%8D%8B-App-Opensource?node-id=58%3A16848',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    accentColor: { control: { type: 'color' } },
    logoUrl: { control: { type: 'text' } },
  },
};

const Template = ({ ...props }) => {
  return <LoginBg {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LOGIN_BG_DEFAULT_PROPS,
  quote:
    'I don’t know the meaning of half those long words, and, what’s more, I don’t believe you do either!',
  author: 'Alice in Wonderland, Lewis Carrol',
};
