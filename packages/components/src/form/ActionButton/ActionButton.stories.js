import React from 'react';
import { DotsHorizontalIcon, ChevronRightIcon } from '@heroicons/react/outline'; 
import { ActionButton, ATCBUTTON_SIZES, ATCBUTTON_COLORS } from './ActionButton';
import mdx from './ActionButton.mdx';


export default {
  title: 'Form/ActionButton',
  parameters: {
    component: ActionButton,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=3124%3A35264',
    },
  },
  argTypes: {
    showLeftIcon: { control: { type: 'boolean' } },
    showRightIcon: { control: { type: 'boolean' } }, 
    size: { options: ATCBUTTON_SIZES, control: { type: 'select' } },
    color: { options: ATCBUTTON_COLORS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return (
    <ActionButton {...props} rightIcon={<ChevronRightIcon  />} leftIcon={<DotsHorizontalIcon />}>
      {props.label}
    </ActionButton>
  );
};

export const DefaultActionButton = Template.bind({});

DefaultActionButton.args = {
  size: 'sm',
  color: 'positive',
  showLeftIcon: true,
  showRightIcon: false,  
  label: "", 
  description:'Expand',
};
