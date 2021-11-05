import React from 'react';
import { CalendarIcon, ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { IconButtonS, ICON_BUTTONS_SIZES, ICON_BUTTONS_COLORS, ICON_BUTTONS_VARIANTS } from './IconButtonS';


export default {
  title: 'Form/IconButtonS',
  parameters: {
    component: IconButtonS,
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    size: { options: ICON_BUTTONS_SIZES, control: { type: 'select' } },
    color: { options: ICON_BUTTONS_COLORS, control: { type: 'select' } }, 
  },
};

const Template = (props) => {
  return <IconButtonS {...props}></IconButtonS>;
};

export const DefaultIconButtonS = Template.bind({});

DefaultIconButtonS.args = {
  size: 'sm',
  rounded: true,
  color: 'positive', 
  leftIcon: <ChevronRightIcon style={{ height: '1.4rem' }} />,
};
