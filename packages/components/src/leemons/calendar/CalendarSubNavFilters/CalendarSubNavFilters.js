import React from 'react';
import { CalendarSubNavFiltersStyles } from './CalendarSubNavFilters.styles';
import { Box } from '@mantine/core';
import { SubNav } from '../../../navigation';

export const CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS = {
  onChange: () => {},
};
export const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES = {};

const CalendarSubNavFilters = ({ value, onChange, ...props }) => {
  const { classes, cx } = CalendarSubNavFiltersStyles({});

  console.log(value);

  return (
    <SubNav item={{ label: 'Calendar' }} subItems={[]}>
      {value.map(({ calendars, sectionName }, index) => (
        <Box key={`${sectionName}-${index}`}>
          <Box>{sectionName}</Box>
          <Box>{calendars.map((calendar) => null)}</Box>
        </Box>
      ))}
    </SubNav>
  );
};

CalendarSubNavFilters.defaultProps = CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS;
CalendarSubNavFilters.propTypes = CALENDAR_SUB_NAV_FILTERS_PROP_TYPES;

export { CalendarSubNavFilters };
