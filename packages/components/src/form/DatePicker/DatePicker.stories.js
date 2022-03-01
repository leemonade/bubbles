import React, { useState } from 'react';
import { DatePicker, DATE_PICKER_DEFAULT_PROPS, DATE_PICKER_ORIENTATIONS } from './DatePicker';
import mdx from './DatePicker.mdx';

export default {
  title: 'Molecules/Form/DatePicker',
  parameters: {
    component: DatePicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    orientation: { options: DATE_PICKER_ORIENTATIONS, control: { type: 'select' } },
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ onChange, ...props }) => {
  const [value, setValue] = useState(null);
  return (
    <DatePicker
      {...props}
      value={value}
      onChange={(e) => {
        onChange(e);
        setValue(e);
      }}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...DATE_PICKER_DEFAULT_PROPS,
  label: 'Label for date picker',
  description: 'Optional descriptive text for this date picker ',
  placeholder: 'Pick a date',
  help: 'Help text for date picker',
  error: 'Descriptive text for error ',
};
