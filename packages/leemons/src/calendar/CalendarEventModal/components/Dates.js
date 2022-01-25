import React from 'react';
import { get } from 'lodash';
import { Controller } from 'react-hook-form';
import {
  Box,
  Col,
  ContextContainer,
  DatePicker,
  Grid,
  Select,
  Switch,
  TimeInput,
} from '@bubbles-ui/components';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';

const Dates = ({ form, classes, messages, errorMessages, selectData, disabled, onlyOneDate }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = form;

  const isAllDay = watch('isAllDay');

  return (
    <Box sx={(theme) => ({ paddingTop: theme.spacing[5] })}>
      <Grid columns={100} gutter={0}>
        <Col span={10} className={classes.icon}>
          <TimeClockCircleIcon />
        </Col>
        <Col span={90}>
          <ContextContainer>
            {/* FROM */}
            <Grid columns={100} gutter={0} className={classes.inputsDatesContainer}>
              <Col span={isAllDay ? 100 : 70}>
                <Controller
                  name="startDate"
                  control={control}
                  rules={{
                    required: errorMessages.startDateRequired,
                  }}
                  render={({ field }) => (
                    <DatePicker
                      size="xs"
                      disabled={disabled}
                      error={get(errors, 'startDate')}
                      label={messages.fromLabel}
                      required
                      {...field}
                    />
                  )}
                />
              </Col>
              {!isAllDay ? (
                <Col span={30} sx={(theme) => ({ paddingLeft: theme.spacing[2] })}>
                  <Controller
                    name="startTime"
                    control={control}
                    rules={{
                      required: errorMessages.startTimeRequired,
                    }}
                    render={({ field }) => (
                      <TimeInput
                        disabled={disabled}
                        error={get(errors, 'startTime')}
                        size="xs"
                        required
                        {...field}
                        value={field.value || new Date()}
                      />
                    )}
                  />
                </Col>
              ) : null}
            </Grid>

            {/* TO */}
            {!onlyOneDate ? (
              <Grid columns={100} gutter={0} className={classes.inputsDatesContainer}>
                <Col span={isAllDay ? 100 : 70}>
                  <Controller
                    name="endDate"
                    control={control}
                    rules={{
                      required: errorMessages.endDateRequired,
                    }}
                    render={({ field }) => (
                      <DatePicker
                        error={get(errors, 'endDate')}
                        size="xs"
                        disabled={disabled}
                        label={messages.toLabel}
                        required
                        {...field}
                      />
                    )}
                  />
                </Col>
                {!isAllDay ? (
                  <Col span={30} sx={(theme) => ({ paddingLeft: theme.spacing[2] })}>
                    <Controller
                      name="endTime"
                      control={control}
                      rules={{
                        required: errorMessages.endTimeRequired,
                      }}
                      render={({ field }) => (
                        <TimeInput
                          disabled={disabled}
                          error={get(errors, 'endTime')}
                          size="xs"
                          required
                          {...field}
                          value={field.value || new Date()}
                        />
                      )}
                    />
                  </Col>
                ) : null}
              </Grid>
            ) : null}

            {/* REPEAT */}
            <Controller
              name="repeat"
              control={control}
              rules={{
                required: errorMessages.endTimeRequired,
              }}
              render={({ field }) => (
                <Select
                  error={get(errors, 'repeat')}
                  size="xs"
                  disabled={disabled}
                  label={messages.repeatLabel}
                  {...field}
                  data={selectData.repeat}
                />
              )}
            />

            {/* ALL DAY */}
            <Controller
              name="isAllDay"
              control={control}
              render={({ field }) => (
                <Switch
                  {...field}
                  disabled={disabled}
                  error={get(errors, 'isAllDay')}
                  label={messages.allDayLabel}
                  labelPosition="start"
                  checked={field.value}
                />
              )}
            />
          </ContextContainer>
        </Col>
      </Grid>
    </Box>
  );
};

export { Dates };
