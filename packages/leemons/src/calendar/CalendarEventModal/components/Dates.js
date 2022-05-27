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

const Dates = ({
  form,
  classes,
  messages,
  errorMessages,
  config,
  selectData,
  disabled,
  readOnly,
  onlyOneDate,
}) => {
  const {
    control,
    watch,
    formState: { errors },
  } = form;

  const type = watch('type');
  const isAllDay = watch('isAllDay');
  const hideInCalendar = watch('data.hideInCalendar');

  let dateRequired = true;
  if (type === 'plugins.calendar.task') {
    if (hideInCalendar) dateRequired = false;
  }

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
                    validate: (e) => {
                      if (dateRequired && !e) return errorMessages.startDateRequired;
                      return true;
                    },
                  }}
                  render={({ field }) => (
                    <DatePicker
                      size="xs"
                      readOnly={readOnly}
                      disabled={disabled}
                      error={get(errors, 'startDate')}
                      label={config?.fromLabel || messages.fromLabel}
                      required={dateRequired}
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
                      validate: (e) => {
                        if (dateRequired && !e) return errorMessages.startTimeRequired;
                        return true;
                      },
                    }}
                    render={({ field }) => {
                      if (!field.value) {
                        field.onChange(new Date());
                      }
                      return (
                        <TimeInput
                          readOnly={readOnly}
                          disabled={disabled}
                          error={get(errors, 'startTime')}
                          size="xs"
                          required={dateRequired}
                          {...field}
                          value={field.value || new Date()}
                        />
                      );
                    }}
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
                      validate: (e) => {
                        if (dateRequired && !e) return errorMessages.endDateRequired;
                        return true;
                      },
                    }}
                    render={({ field }) => (
                      <DatePicker
                        error={get(errors, 'endDate')}
                        size="xs"
                        disabled={disabled}
                        readOnly={readOnly}
                        label={messages.toLabel}
                        required={dateRequired}
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
                        validate: (e) => {
                          if (dateRequired && !e) return errorMessages.endTimeRequired;
                          return true;
                        },
                      }}
                      render={({ field }) => {
                        if (!field.value) {
                          field.onChange(new Date());
                        }
                        return (
                          <TimeInput
                            readOnly={readOnly}
                            disabled={disabled}
                            error={get(errors, 'endTime')}
                            size="xs"
                            required={dateRequired}
                            {...field}
                            value={field.value || new Date()}
                          />
                        );
                      }}
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
                  readOnly={readOnly}
                  label={messages.repeatLabel}
                  {...field}
                  data={selectData.repeat}
                />
              )}
            />

            {/* ALL DAY */}
            {!config?.hideAllDay ? (
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
            ) : null}
          </ContextContainer>
        </Col>
      </Grid>
    </Box>
  );
};

export { Dates };
