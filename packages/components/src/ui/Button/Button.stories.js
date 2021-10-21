import React from 'react';
import { Button } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    component: Button,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: 'tertiary',
};

export const Danger = Template.bind({});
Danger.args = {
  kind: 'danger',
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: 'ghost',
};
