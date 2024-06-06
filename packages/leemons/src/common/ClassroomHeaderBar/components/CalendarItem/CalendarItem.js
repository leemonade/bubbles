import React from 'react';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';

const CalendarItem = ({ calendar, calendarLabel, classes }) => {
  return (
    <Box className={classes.infoWrapper}>
      <PluginCalendarIcon height={15} width={15} style={{ minHeight: 15, minWidth: 15 }} />
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
