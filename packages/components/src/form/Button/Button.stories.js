/* eslint-disable react/prop-types */
import React from 'react';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { Button } from './Button';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_DEFAULT_PROPS,
} from './Button.constants';
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
    size: { options: BUTTON_SIZES, control: { type: 'select' } },
    color: { options: BUTTON_COLORS, control: { type: 'select' } },
    variant: { options: BUTTON_VARIANTS, control: { type: 'select' } },
  },
};

const Template = ({
  label,
  rightIcon,
  leftIcon,
  testShowLeftIcon,
  testShowRightIcon,
  ...props
}) => {
  const buttonLeftIcon = testShowLeftIcon ? leftIcon : undefined;
  const buttonRightIcon = testShowRightIcon ? rightIcon : undefined;

  return (
    <Button {...props} rightIcon={buttonRightIcon} leftIcon={buttonLeftIcon}>
      {label}
    </Button>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Button',
  ...BUTTON_DEFAULT_PROPS,
  rightIcon: <AddIcon />,
  leftIcon: <AddIcon />,
  testShowLeftIcon: false,
  testShowRightIcon: false,
};
