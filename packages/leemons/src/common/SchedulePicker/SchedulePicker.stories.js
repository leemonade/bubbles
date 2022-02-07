import React from 'react';
import { SchedulePicker, SCHEDULE_PICKER_DEFAULT_PROPS } from './SchedulePicker';
import {
  ContextContainer,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
} from '@bubbles-ui/components';
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

const Template = ({ ...props }) => {
  return (
    <ContextContainer direction="row">
      <SchedulePicker {...props} />
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCHEDULE_PICKER_DEFAULT_PROPS,
  labels: {
    input: 'Class schedule',
    checkboxLabel: 'Same time slot for each class',
    groupLabel: 'Días de clase',
    schedule: 'Horario',
    divider: 'a',
    useCustomDates: 'Use custom dates',
    startDate: 'Start date',
    endDate: 'End date',
  },
  errorMessages: {
    invalidSchedule: 'The class must have a duration',
    invalidDates: 'The finish time must be later than the start time',
  },
  helps: {
    input: 'Select the class schedule',
  },
  placeholders: {
    input: 'Select a class schedule',
    startDate: 'Please select a start date',
    endDate: 'Please select an end date',
  },
  value: {
    days: [
      {
        day: 'monday',
        dayWeek: 0,
        duration: 119,
        end: '09:00',
        start: '07:00',
      },
      {
        day: 'wednesday',
        dayWeek: 2,
        duration: 60,
        end: '12:00',
        start: '11:00',
      },
      {
        day: 'friday',
        dayWeek: 4,
        duration: 60,
        end: '11:00',
        start: '10:00',
      },
    ],
    endDate: null,
    startDate: null,
    useCustomDates: false,
  },
};