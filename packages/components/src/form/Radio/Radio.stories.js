import React, { useEffect, useState } from 'react';
import { Box, Space } from '@mantine/core';
import { Radio } from './Radio';
import mdx from './Radio.mdx';
import { RADIO_HELP_POSITIONS, RADIO_VARIANTS } from './Radio';
import { StarIcon } from '@bubbles-ui/icons/solid';

export default {
  title: 'Atoms/Form/Radio',
  parameters: {
    component: Radio,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3642%3A26575',
    },
  },
  argTypes: {
    variant: { options: RADIO_VARIANTS, control: { type: 'select' } },
    helpPosition: { options: RADIO_HELP_POSITIONS, control: { type: 'select' } },
    onChange: { action: 'Checked' },
  },
};

const Template = ({ children, checked: _checked, onChange: _onChange, ...props }) => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = (value) => {
    _onChange(value);
    setChecked(value);
  };

  useEffect(() => {
    handleOnChange(_checked);
  }, [_checked]);

  return (
    <Radio {...props} checked={checked} onChange={handleOnChange} name="test">
      {children}
    </Radio>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  checked: false,
  children: 'Radio button label',
  variant: 'default',
  disabled: false,
  help: 'Help text',
  helpPosition: 'right',
  icon: <StarIcon height={32} width={32} />,
  image:
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  imageHeight: 100,
};
