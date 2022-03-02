import React from 'react';
import { Button, BUTTON_DEFAULT_PROPS } from './Button';
import { StarIcon } from '@bubbles-ui/icons/solid/';

export default {
  title: 'Atom/Form/Button',
  parameters: {
    component: Button,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = ({ ...props }) => {
  return <Button {...props}></Button>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...BUTTON_DEFAULT_PROPS,
  icon: <StarIcon />,
  label: 'Star',
};
