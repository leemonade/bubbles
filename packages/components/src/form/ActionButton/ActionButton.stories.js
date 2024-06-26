import React from 'react';
import { ChevronRightIcon, ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import { ActionButton } from './ActionButton';
import {
  ACTION_BUTTON_SIZES,
  ACTION_BUTTON_COLORS,
  ACTION_BUTTON_DEFAULT_PROPS,
} from './ActionButton.constants';
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
    size: { options: ACTION_BUTTON_SIZES, control: { type: 'select' } },
    color: { options: ACTION_BUTTON_COLORS, control: { type: 'select' } },
  },
};

const Template = ({ testShowLeftIcon, testShowRightIcon, ...props }) => {
  return (
    <ActionButton
      {...props}
      rightIcon={testShowRightIcon ? <ChevronRightIcon /> : null}
      icon={testShowLeftIcon ? <ExpandDiagonalIcon /> : null}
      {...props}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ACTION_BUTTON_DEFAULT_PROPS,
  tooltip: 'Expand',
  testShowLeftIcon: true,
  testShowRightIcon: false,
};
