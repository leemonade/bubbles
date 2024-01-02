import React from 'react';
import {
  CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS,
  CalendarSubNavFilters,
} from './CalendarSubNavFilters';
import mdx from './CalendarSubNavFilters.mdx';
import { mock } from './mock/mock';
import { Box } from '@mantine/core';

export default {
  title: 'Leemons/Calendar/CalendarSubNavFilters',
  parameters: {
    component: CalendarSubNavFilters,
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
  },
};

const Template = ({ children, ...props }) => {
  const [state, setState] = React.useState(mock);
  return (
    <Box style={{ margin: -16, height: '100vh', backgroundColor: '#FCFCFC' }}>
      <Box style={{ width: '300px' }}>
        <CalendarSubNavFilters
          {...props}
          value={state}
          onChange={setState}
          showPageControl={true}
          centers={[
            { label: 'Center 1', value: '1' },
            { label: 'Center 2', value: '2' },
          ]}
          centerValue={1}
        >
          {children}
        </CalendarSubNavFilters>
      </Box>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS,
};
