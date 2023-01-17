import React from 'react';
import { ChevronRightIcon, ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import {
  ActionButton,
  ACTION_BUTTON_SIZES,
  ACTION_BUTTON_COLORS,
  ACTION_BUTTON_DEFAULT_PROPS,
} from './ActionButton';
import mdx from './ActionButton.mdx';

export default {
  title: 'BB2/ActionButton',
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
  ...ACTION_BUTTON_DEFAULT_PROPS,
  tooltip: 'Expand',
  test_showLeftIcon: true,
  test_showRightIcon: false,
};
