import React from 'react';
import { DoneCircleIcon } from '@bubbles-ui/icons/outline';
import { Input, INPUT_SIZES } from './Input';
import mdx from './Input.mdx';

export default {
  title: 'BB2/Input',
  parameters: {
    component: Input,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3639%3A28968',
    },
  },
  argTypes: {
    size: { options: INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ test_showRightSection, test_showIcon, ...props }) => {
  return (
    <Input
      {...props}
      placeholder="Placeholder"
      icon={test_showIcon ? <DoneCircleIcon /> : null}
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
  test_showIcon: false,
};
