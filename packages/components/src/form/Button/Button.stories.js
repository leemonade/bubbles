import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
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
      url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
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

const Template = (props) => {
  return <Button {...props}>Button Label</Button>;
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  color: 'primary',
  variant: 'default',
  rounded: false,
  showLeftIcon: false,
  showRightIcon: false,
  rightIcon: <ChevronRightIcon style={{ height: '1.2rem' }} />,
  leftIcon: <ChevronRightIcon style={{ height: '1.2rem' }} />,
};
