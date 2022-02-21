import React, { useState } from 'react';
import {
  SearchInput,
  SEARCH_INPUT_DEFAULT_PROPS,
  SEARCH_INPUT_ORIENTATIONS,
  SEARCH_INPUT_SIZES,
} from './SearchInput';
import { TEXT_INPUT_VARIANTS } from '../TextInput';
import mdx from './SearchInput.mdx';

export default {
  title: 'Atoms/Form/SearchInput',
  parameters: {
    component: SearchInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: SEARCH_INPUT_SIZES, control: { type: 'select' } },
    orientation: { options: SEARCH_INPUT_ORIENTATIONS, control: { type: 'select' } },
    variant: { options: TEXT_INPUT_VARIANTS, control: { type: 'select' } },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ onChange, ...props }) => {
  const [value, setValue] = useState(null);
  return (
    <SearchInput
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e);
        onChange(e);
      }}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SEARCH_INPUT_DEFAULT_PROPS,
};
