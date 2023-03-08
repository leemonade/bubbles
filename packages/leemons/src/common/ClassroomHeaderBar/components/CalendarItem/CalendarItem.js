import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';

const CalendarItem = ({ calendar, calendarLabel, classes }) => {
  return (
    <Box className={classes.infoWrapper}>
      <PluginCalendarIcon height={20} width={20} style={{ minHeight: 20, minWidth: 20 }} />
      <TextClamp lines={1}>
        <Text color="interactive" className={classes.label}>
          {calendarLabel}
        </Text>
      </TextClamp>
    </Box>
  );
};

CalendarItem.defaultProps = {};
CalendarItem.propTypes = {};

export { CalendarItem };
