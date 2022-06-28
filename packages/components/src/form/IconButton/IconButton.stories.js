import React from 'react';
import { ChevronRightIcon } from '@bubbles-ui/icons/outline';
import {
  IconButton,
  ICON_BUTTON_SIZES,
  ICON_BUTTON_COLORS,
  ICON_BUTTON_VARIANTS,
  ICON_BUTTON_DEFAULT_PROPS,
} from './IconButton';
import mdx from './IconButton.mdx';

export default {
  title: 'Atoms/Form/IconButton',
  parameters: {
    component: IconButton,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    size: { options: ICON_BUTTON_SIZES, control: { type: 'select' } },
    color: { options: ICON_BUTTON_COLORS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <ChevronRightIcon />
    </IconButton>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ICON_BUTTON_DEFAULT_PROPS,
  rounded: true,
  label: 'Next',
};
