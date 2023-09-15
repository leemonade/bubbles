import React from 'react';
import { Chip, CHIP_DEFAULT_PROPS } from './Chip';
import mdx from './Chip.mdx';

export default {
  title: 'Molecules/Navigation/Chip',
  parameters: {
    component: Chip,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3621%3A23005',
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['menu', 'xs', 'sm', 'md'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
    children: {
      control: { type: 'text' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    ...CHIP_DEFAULT_PROPS,
  },
};

const Template = ({ ...props }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return <Chip {...props} onChange={() => setIsChecked(!isChecked)} checked={isChecked} />;
};
export const Playground = Template.bind({});

Playground.args = {
  ...CHIP_DEFAULT_PROPS,
};
