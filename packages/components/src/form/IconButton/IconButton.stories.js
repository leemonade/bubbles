import React from 'react';
import { CalendarIcon, ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { IconButton, ICON_BUTTON_SIZES } from './IconButton';
import mdx from './IconButton.mdx'; 


const sizes = ICON_BUTTON_SIZES.map((size) => (
  <IconButton key={size} size={size}>
    Button {size}
  </IconButton>
));


const getSizes = ({ ...props }) =>
  ICON_BUTTON_SIZES.map((size) => (
    <IconButton key={size} size={size} {...props}>
      Button {size}
    </IconButton>
  ));




export default {
  title: 'Form/IconButton',
  parameters: {
    component: IconButton,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    iconOnly: { control: { type: 'boolean' } },
    size: { options: ICON_BUTTON_SIZES, control: { type: 'select' } }, 
  },
};

const Template = (props) => {
  return <IconButton {...props}>Button</IconButton>;
};

export const DefaultIconButton = Template.bind({});

DefaultIconButton.args = {
  size: 'sm',
  rounded: true,
  rightIcon: <ChevronRightIcon style={{ height: '1.2rem' }} />,
  leftIcon: <ChevronRightIcon style={{ height: '1.2rem' }} />,
};
