import React, { useState } from 'react';
import {
  SearchInput,
  SEARCH_INPUT_DEFAULT_PROPS,
  SEARCH_INPUT_ORIENTATIONS,
  SEARCH_INPUT_SIZES,
} from './SearchInput';
import { Text } from '../../typography';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3639%3A28968',
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
  const [value, setValue] = useState('');
  return (
    <>
      <SearchInput
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e);
          onChange(e);
        }}
      />
      <Text color="primary" style={{ display: 'block', marginTop: 16 }}>
        {value}
      </Text>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SEARCH_INPUT_DEFAULT_PROPS,
};
