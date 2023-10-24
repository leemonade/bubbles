import React from 'react';
import { ChevronRightIcon } from '@bubbles-ui/icons/outline';
import { IconButton } from './IconButton';
import {
  ICON_BUTTON_SIZES,
  ICON_BUTTON_COLORS,
  ICON_BUTTON_VARIANTS,
  ICON_BUTTON_DEFAULT_PROPS,
} from './IconButton.constants';
import mdx from './IconButton.mdx';

export default {
  title: 'Atoms/Form/IconButton',
  parameters: {
    component: IconButton,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3637%3A29378',
    },
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    size: { options: ICON_BUTTON_SIZES, control: { type: 'select' } },
    color: { options: ICON_BUTTON_COLORS, control: { type: 'select' } },
    variant: { options: ICON_BUTTON_VARIANTS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => (
  <IconButton {...props}>
    <ChevronRightIcon />
  </IconButton>
);

export const Playground = Template.bind({});

Playground.args = {
  ...ICON_BUTTON_DEFAULT_PROPS,
  rounded: true,
  label: 'Next',
};
