import React, { useState } from 'react';
import {
  MULTI_SELECT_DEFAULT_PROPS,
  MULTI_SELECT_ORIENTATIONS,
  MULTI_SELECT_SIZES,
  MultiSelect,
} from './MultiSelect';
import mdx from './MultiSelect.mdx';

export default {
  title: 'Molecules/Form/MultiSelect',
  parameters: {
    component: MultiSelect,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3649%3A33102',
    },
  },
  argTypes: {
    size: { options: MULTI_SELECT_SIZES, control: { type: 'select' } },
    orientation: { options: MULTI_SELECT_ORIENTATIONS, control: { type: 'select' } },
    onChange: { action: 'Value changed' },
  },
};

const Template = ({ children, data, ...props }) => {
  const [state, setState] = useState([]);
  return (
    <MultiSelect
      {...props}
      value={['Bender Bending Rodríguez']}
      data={[...data, ...state]}
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(q) => setState([...state, q])}
    >
      {children}
    </MultiSelect>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...MULTI_SELECT_DEFAULT_PROPS,
  label: 'Label for select',
  placeholder: 'Select one',
  description: 'Optional descriptive text for this select field ',
  required: true,
  clearable: 'Clear select field',
  error: 'Descriptive text for error ',
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
