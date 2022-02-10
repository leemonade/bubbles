import React, { useState } from 'react';
import { ScheduleForm, SCHEDULE_FORM_DEFAULT_PROPS } from './ScheduleForm';
import mdx from './ScheduleForm.mdx';

export default {
  title: 'leemons/common/SchedulePicker/ScheduleForm',
  parameters: {
    component: ScheduleForm,
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
  },
};

const Template = ({ children, ...props }) => {
  const [openForm, setOpenForm] = useState(false);
  const [oneScheduleOnly, setOneScheduleOnly] = useState(true);
  const [oneDayOnlyValue, setOneDayOnlyValue] = useState({
    start: new Date(),
    end: new Date(),
    error: false,
  });
  return (
    <ScheduleForm
      {...props}
      setOpenForm={setOpenForm}
      oneDayOnlyValue={oneDayOnlyValue}
      setOneDayOnlyValue={setOneDayOnlyValue}
      oneScheduleOnly={oneScheduleOnly}
      setOneScheduleOnly={setOneScheduleOnly}
    >
      {children}
    </ScheduleForm>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCHEDULE_FORM_DEFAULT_PROPS,
  savedSchedule: {
    useCustomDates: false,
    startDate: null,
    endDate: null,
    days: [],
  },
  labels: {
    checkboxLabel: 'Same time slot for each class',
    groupLabel: 'Días de clase',
    schedule: 'Horario',
    divider: 'a',
    useCustomDates: 'Use custom dates',
    startDate: 'Start date',
    endDate: 'End date',
  },
  placeholders: {
    startDate: 'Please select a start date',
    endDate: 'Please select an end date',
  },
  errorMessages: {
    invalidSchedule: 'La duracion de la clase tiene que ser mayor a 0',
    invalidDates: 'La fecha de inicio debe ser menor a la fecha de fin',
  },
  localeWeekdays: [
    {
      label: 'Lunes',
      value: { index: 0, start: '', end: '' },
      day: 'monday',
    },
    {
      label: 'Martes',
      value: { index: 1, start: '', end: '' },
      day: 'tuesday',
    },
    {
      label: 'Miércoles',
      value: { index: 2, start: '', end: '' },
      day: 'wednesday',
    },
    {
      label: 'Jueves',
      value: { index: 3, start: '', end: '' },
      day: 'thursday',
    },
    {
      label: 'Viernes',
      value: { index: 4, start: '', end: '' },
      day: 'friday',
    },
    {
      label: 'Sábado',
      value: { index: 5, start: '', end: '' },
      day: 'saturday',
    },
    {
      label: 'Domingo',
      value: { index: 6, start: '', end: '' },
      day: 'sunday',
    },
  ],
};
