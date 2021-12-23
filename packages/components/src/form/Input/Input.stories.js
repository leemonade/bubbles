import React from 'react';
import { DoneCircleIcon } from '@bubbles-ui/icons/outline';
import { Input, INPUT_SIZES } from './Input';
import mdx from './Input.mdx';

export default {
  title: 'Atoms/Form/Input',
  parameters: {
    component: Input,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ test_showRightSection, ...props }) => {
  return (
    <Input
      {...props}
      placeholder="Placeholder"
      rightSection={test_showRightSection ? <DoneCircleIcon /> : null}
    />
  );
};
export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  invalid: false,
  disabled: false,
  test_showRightSection: false,
};
