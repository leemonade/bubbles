import React from 'react';
import { CalendarIcon, ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { IconButton, ICON_BUTTON_SIZES, ICON_BUTTON_COLORS, ICON_BUTTON_VARIANTS } from './IconButton';
import mdx from './IconButton.mdx'; 

export default {
  title: 'Form/IconButton',
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
  return <IconButton {...props} aria-label="Next" title="Next"></IconButton>;
};

export const DefaultIconButton = Template.bind({});

DefaultIconButton.args = {
  size: 'sm',
  rounded: true,
  color: 'positive',
  icon: <ChevronRightIcon height="14" />,
};
