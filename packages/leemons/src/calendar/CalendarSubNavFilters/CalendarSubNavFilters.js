import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ImageLoader,
  ProSwitch,
  SegmentedControl,
  Select,
  SubNav,
  Text,
} from '@bubbles-ui/components';
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
};
export const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES = {
  showPageControl: PropTypes.bool
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
  style,
}) => {
  const { classes, cx } = CalendarSubNavFiltersStyles({}, { name: 'SubnavFilters' });

  function _onChange(sectionIndex, calendarIndex, checked) {
    value[sectionIndex].calendars[calendarIndex].showEvents = checked;
    onChange(value);
  }

  return (
    <>
      <SubNav
        item={{ label: messages.title }}
        style={{ position: 'static' }}
        className={classes.subNav}
        subItems={[]}
        width={'100%'}
        open={true}
        messages={messages}
        onClose={onClose}
      >
        <Box
          sx={(theme) => ({
            margin: theme.spacing[5],
            paddingBottom: '80px',
          })}
        >
          {showPageControl && (
            <SegmentedControl
              data={pages}
              value={pageValue}
              onChange={pageOnChange}
              classNames={{
                root: classes.segmentRoot,
                label: classes.segmentLabel,
                active: classes.segmentActive,
                labelActive: classes.segmentLabelActive,
                control: classes.segmentControl,
              }}
            />
          )}
          {centers && centers.length > 1 ? (
            <Box
              sx={(theme) => ({
                marginTop: theme.spacing[6],
              })}
            >
              <Text strong size="xs" sx={(theme) => ({ color: theme.colors.text08 })}>
                {messages.centers}
              </Text>
              <Box
                sx={(theme) => ({
                  marginTop: theme.spacing[5],
                })}
              >
                <Select data={centers} value={centerValue} onChange={centerOnChange} />
              </Box>
            </Box>
          ) : null}
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
                    sx={(theme) => ({
                      marginTop: theme.spacing[4],
                      marginBottom: theme.spacing[4],
                    })}
                    key={calendarIndex}
                  >
                    <ProSwitch
                      classNames={{
                        label: classes.switchLabel,
                      }}
                      label={calendar.name}
                      color={calendar.bgColor}
                      checked={calendar.showEvents}
                      icon={
                        calendar.icon ? (
                          <Box className={classes.icon}>
                            <ImageLoader
                              height="12px"
                              imageStyles={{
                                width: 12,
                              }}
                              src={calendar.icon}
                              forceImage
                            />
                          </Box>
                        ) : null
                      }
                      onChange={(event) => _onChange(sectionIndex, calendarIndex, event)}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </SubNav>
    </>
  );
};

CalendarSubNavFilters.defaultProps = CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS;
CalendarSubNavFilters.propTypes = CALENDAR_SUB_NAV_FILTERS_PROP_TYPES;

export { CalendarSubNavFilters };
