import React from 'react';
import { Box } from '@mantine/core';
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
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    orientation: { options: DATE_PICKER_ORIENTATIONS, control: { type: 'select' } },
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <DatePicker {...props}>{children}</DatePicker>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DATE_PICKER_DEFAULT_PROPS,
  label: 'Label for date picker',
  description: 'Optional descriptive text for this date picker ',
  placeholder: 'Pick a date',
  help: 'Help text for date picker',
  error: 'Descriptive text for error ',
};