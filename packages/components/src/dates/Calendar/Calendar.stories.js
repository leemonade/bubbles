import React, { useState } from 'react';
import { Box } from '@mantine/core';
import { Calendar, CALENDAR_DEFAULT_PROPS, CALENDAR_LEVELS, CALENDAR_FIRST_DAYS } from './Calendar';
import mdx from './Calendar.mdx';

export default {
  title: 'Molecules/Dates/Calendar',
  parameters: {
    component: Calendar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3640%3A33370',
    },
  },
  argTypes: {
    initialLevel: { options: CALENDAR_LEVELS, control: { type: 'select' } },
    firstDayOfWeek: { options: CALENDAR_FIRST_DAYS, control: { type: 'select' } },
    amountOfMonths: { control: { type: 'number' } },
    onChange: { action: 'Date selected' },
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
  },
};

const Template = ({ value, ...props }) => {
  const [selected, setSelected] = useState(value);
  return <Calendar {...props} value={selected} onChange={setSelected} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CALENDAR_DEFAULT_PROPS,
};
