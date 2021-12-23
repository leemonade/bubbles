import React from 'react';
import { ChevronRightIcon, ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
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

const Template = ({ test_showLeftIcon, test_showRightIcon, ...props }) => {
  return (
    <ActionButton
      {...props}
      rightIcon={test_showRightIcon ? <ChevronRightIcon /> : null}
      icon={test_showLeftIcon ? <ExpandDiagonalIcon /> : null}
      {...props}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  color: 'positive',
  label: '',
  tooltip: 'Expand',
  rounded: false,
  test_showLeftIcon: true,
  test_showRightIcon: false,
};
