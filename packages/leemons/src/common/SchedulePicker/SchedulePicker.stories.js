import React from 'react';
import { SchedulePicker, SCHEDULE_PICKER_DEFAULT_PROPS } from './SchedulePicker';
import { INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATIONS } from '@bubbles-ui/components';
import mdx from './SchedulePicker.mdx';

export default {
  title: 'leemons/Common/SchedulePicker',
  parameters: {
    component: SchedulePicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <SchedulePicker {...props}>{children}</SchedulePicker>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCHEDULE_PICKER_DEFAULT_PROPS,
  labels: {
    inputWrapper: 'Class schedule',
    checkboxLabel: 'Same time slot for each class',
    groupLabel: 'Días de clase',
    schedule: 'Horario',
    divider: 'a',
  },
  errorMessages: {
    invalidSchedule: 'La duracion de la clase tiene que ser mayor a 0',
  },
  helps: {
    inputWrapper: 'Select the class schedule',
  },
  placeholders: {
    input: 'Select a class schedule',
  },
};
