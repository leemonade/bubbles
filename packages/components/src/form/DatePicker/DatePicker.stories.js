import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, ContextContainer } from '../../layout';
import { Button } from '../../form';
import { DATE_PICKER_DEFAULT_PROPS, DATE_PICKER_ORIENTATIONS, DatePicker } from './DatePicker';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3640%3A33370',
    },
  },
  argTypes: {
    orientation: { options: DATE_PICKER_ORIENTATIONS, control: { type: 'select' } },
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
    value: { control: { type: 'date' } },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ value, onChange: onChangeAction, ...props }) => {
  const defaultValues = { date: value ? new Date(value) : null };

  const { control, reset } = useForm({ defaultValues });

  return (
    <Controller
      name="date"
      control={control}
      render={({ field: { onChange, ...field } }) => (
        <DatePicker
          {...props}
          {...field}
          onChange={(e) => {
            onChange(e);
            onChangeAction(e);
          }}
        />
      )}
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
  locale: 'ES',
  readOnly: false,
  value: new Date(),
  withTime: true,
};
