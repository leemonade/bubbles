import React from 'react';
import { ChevronRightIcon, ExpandDiagonalIcon } from '@bubbles/icons/outline';
import { ActionButton, ACTION_BUTTON_SIZES, ACTION_BUTTON_COLORS } from './ActionButton';
import mdx from './ActionButton.mdx';

export default {
  title: 'Atoms/Form/ActionButton',
  parameters: {
    component: ActionButton,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB?embed_host=share&kind=&node-id=3637%3A27254&viewer=1',
    },
  },
  argTypes: {
    showLeftIcon: { control: { type: 'boolean' } },
    showRightIcon: { control: { type: 'boolean' } },
    size: { options: ACTION_BUTTON_SIZES, control: { type: 'select' } },
    color: { options: ACTION_BUTTON_COLORS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return (
    <ActionButton {...props} rightIcon={<ChevronRightIcon />} leftIcon={<ExpandDiagonalIcon />}>
      {props.label}
    </ActionButton>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  color: 'positive',
  showLeftIcon: true,
  showRightIcon: false,
  label: '',
  description: 'Expand',
};
