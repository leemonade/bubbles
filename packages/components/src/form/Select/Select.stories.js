import React from 'react';
import { Box } from '../../layout';
import { Select } from './Select';
import { SELECT_SIZES, SELECT_ORIENTATIONS, SELECT_VARIANTS } from './Select.constants';
import mdx from './Select.mdx';

export default {
  title: 'Molecules/Form/Select',
  parameters: {
    component: Select,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3649%3A33102',
    },
  },
  argTypes: {
    size: { options: SELECT_SIZES, control: { type: 'select' } },
    orientation: { options: SELECT_ORIENTATIONS, control: { type: 'select' } },
    variant: { options: SELECT_VARIANTS, control: { type: 'select' } },
    onChange: { action: 'Value changed' },
  },
};

const Template = ({ value: valueProp, onChange, ...props }) => {
  const [value, setValue] = React.useState(valueProp);
  return (
    <Box>
      <Select
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e);
          onChange(e);
        }}
      />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  orientation: 'vertical',
  label: 'Label for select',
  placeholder: 'Select one',
  description: 'Optional descriptive text for this select field ',
  help: 'Help text for textarea',
  disabled: false,
  required: true,
  searchable: false,
  creatable: false,
  readOnly: false,
  clearable: 'Clear select field',
  error: 'Descriptive text for error ',
  value: 'Carol Miller',
  data: [
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
      label: 'Bender Bending Rodríguez',
      value: 'Bender Bending Rodríguez',
      description: 'Fascinated with cooking',
    },

    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
      label: 'Carol Miller',
      value: 'Carol Miller',
      description: 'One of the richest people on Earth',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
      label: 'Homer Simpson',
      value: 'Homer Simpson',
      description: 'Overweight, lazy, and often ignorant',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
      label: 'Spongebob Squarepants',
      value: 'Spongebob Squarepants',
      description: 'Not just a sponge',
    },
  ],
};
