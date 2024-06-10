import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, Switch, Text, Stack, TextClamp } from '@bubbles-ui/components';
import { forEach, noop } from 'lodash';
import { CalendarSubNavFiltersStyles } from './CalendarSubNavFilters.styles';

export const CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS = {
  messages: {
    title: 'Calendar',
    centers: 'Centers',
    closeTooltip: 'Close',
  },
  pages: [
    { label: 'Calendar', value: 'calendar' },
    { label: 'Schedule', value: 'schedule' },
  ],
  centers: [],
  onChange: noop,
  centerOnChange: noop,
  pageOnChange: noop,
  topZone: <></>,
};
export const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES = {
  showPageControl: PropTypes.bool,
  messages: PropTypes.shape({
    title: PropTypes.string,
    centers: PropTypes.string,
    closeTooltip: PropTypes.string,
  }),
  pages: PropTypes.array,
  pageValue: PropTypes.string,
  pageOnChange: PropTypes.func,
  centers: PropTypes.array,
  centerValue: PropTypes.string,
  centerOnChange: PropTypes.func,
  value: PropTypes.array,
  onChange: PropTypes.func,
  topZone: PropTypes.node,
};

const CalendarSubNavFilters = ({
  messages,
  value,
  onChange,
  pages,
  pageValue,
  pageOnChange,
  centers,
  centerValue,
  centerOnChange,
  showPageControl,
  topZone,
}) => {
  const { classes } = CalendarSubNavFiltersStyles({}, { name: 'SubnavFilters' });
  const [, setR] = useState();
  const ref = useRef({});

  function _onChange(sectionIndex, calendarIndex, checked) {
    value[sectionIndex].calendars[calendarIndex].showEvents = checked;
    onChange(value);
  }

  async function checkIcons() {
    if (value) {
      forEach(value, ({ calendars }) => {
        forEach(calendars, (calendar) => {
          if (calendar.icon) {
            fetch(calendar.icon)
              .then((response) => {
                if (response.status >= 400) {
                  throw new Error('Bad response from server');
                }
                ref.current[calendar.icon] = true;
                setR(new Date().getTime() + Math.floor(Math.random() * 10000) + 1);
              })
              .catch((err) => {
                ref.current[calendar.icon] = false;
                setR(new Date().getTime() + Math.floor(Math.random() * 10000) + 1);
              });
          }
        });
      });
    }
  }

  React.useEffect(() => {
    checkIcons();
  }, [JSON.stringify(value)]);

  return (
    <Box className={classes.root}>
      {topZone}
      {showPageControl ? (
        <Select data={pages} value={pageValue || pages[0].value} onChange={pageOnChange} />
      ) : null}
      {centers && centers.length > 1 ? (
        <Stack direction="column" spacing={2}>
          <Text className={classes.subtitle}>{messages.centers}</Text>
          <Box>
            <Select data={centers} value={centerValue} onChange={centerOnChange} />
          </Box>
        </Stack>
      ) : null}
      {value.map(({ calendars, sectionName }, sectionIndex) => (
        <Box key={`${sectionName}-${sectionIndex}`}>
          <Text className={classes.subtitle}>{sectionName}</Text>
          <Box>
            {calendars.map((calendar, calendarIndex) => (
              <Box
                key={calendar.id ?? calendar._id ?? calendarIndex}
                className={classes.switchWrapper}
              >
                <Switch
                  label={
                    <TextClamp lines={1}>
                      <Text>{calendar.name}</Text>
                    </TextClamp>
                  }
                  checked={calendar.showEvents}
                  bgColor={calendar.bgColor}
                  borderColor={calendar.bgColor}
                  onChange={(event) => _onChange(sectionIndex, calendarIndex, event)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

CalendarSubNavFilters.defaultProps = CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS;
CalendarSubNavFilters.propTypes = CALENDAR_SUB_NAV_FILTERS_PROP_TYPES;

export { CalendarSubNavFilters };
