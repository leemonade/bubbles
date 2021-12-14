import React from 'react';
import { ChevronRightIcon } from '@bubbles/icons/outline';
import { Button, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_COLORS } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Atoms/Form/Button',
  parameters: {
    component: Button,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3637%3A27251',
    },
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    showLeftIcon: { control: { type: 'boolean' } },
    showRightIcon: { control: { type: 'boolean' } },
    size: { options: BUTTON_SIZES, control: { type: 'select' } },
    color: { options: BUTTON_COLORS, control: { type: 'select' } },
    variant: { options: BUTTON_VARIANTS, control: { type: 'select' } },
  },
};

const Template = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Button',
  size: 'sm',
  color: 'primary',
  variant: 'default',
  rounded: false,
  showLeftIcon: false,
  showRightIcon: false,
  rightIcon: <ChevronRightIcon />,
  leftIcon: <ChevronRightIcon />,
};
