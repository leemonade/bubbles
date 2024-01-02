import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, Switch, Text, Stack, ScrollArea } from '@bubbles-ui/components';
import { SubNav } from '@bubbles-ui/extras';
import { forEach } from 'lodash';
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
  onChange: () => {},
  centerOnChange: () => {},
  pageOnChange: () => {},
  onClose: () => {},
  showPageControl: false,
  mainColor: '#ffffff',
  drawerColor: '#ffffff',
  lightMode: false,
};
export const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES = {
  showPageControl: PropTypes.bool,
  mainColor: PropTypes.string,
  drawerColor: PropTypes.string,
  lightMode: PropTypes.bool,
};

const CalendarSubNavFilters = ({
  messages,
  onClose,
  value,
  onChange,
  pages,
  pageValue,
  pageOnChange,
  centers,
  centerValue,
  centerOnChange,
  showPageControl,
  mainColor,
  drawerColor,
  lightMode,
  style,
}) => {
  const { classes, cx } = CalendarSubNavFiltersStyles({},{ name: 'SubnavFilters' });

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
    <Stack className={classes.root} direction="column" spacing={5}>
      {showPageControl ? (
        <Select
          data={pages}
          value={pageValue || pages[0].value}
          onChange={pageOnChange}
        />
      ) : null}

      {centers && centers.length > 1 ? (
        <Stack direction="column" spacing={2}>
          <Text className={classes.subtitle}>
            {messages.centers}
          </Text>
          <Box>
            <Select data={centers} value={centerValue} onChange={centerOnChange} />
          </Box>
        </Stack>
      ) : null}
      
      {value.map(({ calendars, sectionName }, sectionIndex) => (
        <Box key={`${sectionName}-${sectionIndex}`}>
          <Text className={classes.subtitle}>
            {sectionName}
          </Text>
          <Box>
            {calendars.map((calendar, calendarIndex) => (
              <Box key={calendarIndex} className={classes.switchWrapper}>
                <Switch
                  label={calendar.name}
                  checked={calendar.showEvents}
                  onChange={(event) => _onChange(sectionIndex, calendarIndex, event)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

CalendarSubNavFilters.defaultProps = CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS;
CalendarSubNavFilters.propTypes = CALENDAR_SUB_NAV_FILTERS_PROP_TYPES;

export { CalendarSubNavFilters };
