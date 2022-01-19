import React from 'react';
import { CalendarSubNavFiltersStyles } from './CalendarSubNavFilters.styles';
import { Box } from '@mantine/core';
import { SubNav } from '../../../navigation';
import { ProSwitch } from '../../../form/ProSwitch';
import { Text } from '../../../typography';

export const CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS = {
  onChange: () => {},
};
export const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES = {};

const CalendarSubNavFilters = ({ value, onChange, ...props }) => {
  const { classes, cx } = CalendarSubNavFiltersStyles({});

  function _onChange(sectionIndex, calendarIndex, checked) {}

  console.log(value);

  return (
    <SubNav item={{ label: 'Calendar' }} subItems={[]}>
      <Box
        sx={(theme) => ({
          margin: theme.spacing[5],
        })}
      >
        {value.map(({ calendars, sectionName }, sectionIndex) => (
          <Box
            sx={(theme) => ({
              marginTop: theme.spacing[6],
            })}
            key={`${sectionName}-${sectionIndex}`}
          >
            <Box>
              <Text strong size="xs" sx={(theme) => ({ color: theme.colors.text08 })}>
                {sectionName}
              </Text>
            </Box>
            <Box
              sx={(theme) => ({
                marginTop: theme.spacing[5],
              })}
            >
              {calendars.map((calendar, calendarIndex) => (
                <Box
                  sx={(theme) => ({ marginTop: theme.spacing[4], marginBottom: theme.spacing[4] })}
                  key={calendarIndex}
                >
                  <ProSwitch
                    classNames={classes}
                    label={calendar.name}
                    color={calendar.bgColor}
                    checked={calendar.showEvents}
                    icon={calendar.icon ? <img src={calendar.icon} /> : null}
                    onChange={(event) => _onChange(sectionIndex, calendarIndex, event)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </SubNav>
  );
};

CalendarSubNavFilters.defaultProps = CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS;
CalendarSubNavFilters.propTypes = CALENDAR_SUB_NAV_FILTERS_PROP_TYPES;

export { CalendarSubNavFilters };
