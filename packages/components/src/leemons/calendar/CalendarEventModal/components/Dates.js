import React from 'react';
import { Box } from '@mantine/core';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
import { Stack } from '../../../../layout';
import { DatePicker, Select, Switch } from '../../../../form';
import { Controller } from 'react-hook-form';
import { TimeInput } from '../../../../form/TimeInput';

const Dates = ({ form, classes, messages, errorMessages, selectData }) => {
  const { control, watch } = form;

  return (
    <Box sx={(theme) => ({ paddingTop: theme.spacing[5] })}>
      <Stack>
        <Box className={classes.icon}>
          <TimeClockCircleIcon />
        </Box>
        <Box>
          {/* FROM */}
          <Stack alignItems="end">
            <Box sx={(theme) => ({ paddingRight: theme.spacing[2] })}>
              <Controller
                name="startDate"
                control={control}
                rules={{
                  required: errorMessages.startDateRequired,
                }}
                render={({ field }) => (
                  <DatePicker label={messages.fromLabel} required {...field} />
                )}
              />
            </Box>
            <Box>
              <Controller
                name="startTime"
                control={control}
                rules={{
                  required: errorMessages.startTimeRequired,
                }}
                render={({ field }) => <TimeInput required {...field} />}
              />
            </Box>
          </Stack>

          {/* TO */}
          <Stack alignItems="end">
            <Box sx={(theme) => ({ paddingRight: theme.spacing[2] })}>
              <Controller
                name="endDate"
                control={control}
                rules={{
                  required: errorMessages.endDateRequired,
                }}
                render={({ field }) => <DatePicker label={messages.toLabel} required {...field} />}
              />
            </Box>
            <Box>
              <Controller
                name="endTime"
                control={control}
                rules={{
                  required: errorMessages.endTimeRequired,
                }}
                render={({ field }) => <TimeInput required {...field} />}
              />
            </Box>
          </Stack>

          {/* REPEAT */}
          <Controller
            name="repeat"
            control={control}
            rules={{
              required: errorMessages.endTimeRequired,
            }}
            render={({ field }) => (
              <Select label={messages.repeatLabel} {...field} data={selectData.repeat} />
            )}
          />

          {/* ALL DAY */}
          <Controller
            name="isAllDay"
            control={control}
            render={({ field }) => (
              <Switch
                {...field}
                label={messages.allDayLabel}
                labelPosition="start"
                checked={field.value}
              />
            )}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export { Dates };
