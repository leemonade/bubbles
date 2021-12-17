import React, {useState} from 'react';
import {Group, TextInput, Select} from '@mantine/core';
import { ColorPicker, FORMAT_COLOR_PICKER, SWATCHES_COLOR_PICKER } from './ColorPicker';
import mdx from './ColorPicker.mdx';

export default {
  title: 'Form/ColorPicker',
  parameters: {
    component: ColorPicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
       url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    format: { options: FORMAT_COLOR_PICKER, control: { type: 'select' } },
  },
};

const Template = ({ 
  format, 
  ...props
 }) => {

  const [value, onChange] = useState('#000');
  const [formatValue, setFormatValue] = useState(format)

  return (
    <Group direction="column">
      <ColorPicker 
        {...props}
        format={format}
        defaultValue={value}
        value={value} 
        onChange={onChange}
      />
      <Select data={FORMAT_COLOR_PICKER} onChange={onChange}/>
      <TextInput value={value} onChange={e => onChange(e.target.value)}/>
    </Group>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  format: 'hex',
  withPicker: true,
  withswatches: true
};
