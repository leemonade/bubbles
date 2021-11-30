import React from 'react';
import { CalendarIcon, ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/outline';
import {
  IconButton,
  ICON_BUTTON_SIZES,
  ICON_BUTTON_COLORS,
  ICON_BUTTON_VARIANTS,
} from './IconButton';
import mdx from './IconButton.mdx';

export default {
  title: 'Form/IconButton',
  docs: {
    page: mdx,
  },
  parameters: {
    component: IconButton,
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    size: { options: ICON_BUTTON_SIZES, control: { type: 'select' } },
    color: { options: ICON_BUTTON_COLORS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return (
    <IconButton {...props}>
      <ChevronRightIcon />
    </IconButton>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  rounded: true,
  color: 'positive',
  label: 'Next',
};
