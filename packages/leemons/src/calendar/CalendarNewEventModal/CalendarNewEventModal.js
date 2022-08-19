import React, { useEffect } from 'react';
import {
  Box,
  Popover,
  Button,
  Autocomplete,
  RadioGroup,
  Checkbox,
  DatePicker,
  ColorInput,
  Stack,
} from '@bubbles-ui/components';
import { isFunction } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import { CalendarNewEventModalStyles } from './CalendarNewEventModal.styles';
import {
  CALENDAR_NEW_EVENT_MODAL_DEFAULT_PROPS,
  CALENDAR_NEW_EVENT_MODAL_PROP_TYPES,
} from './CalendarNewEventModal.constants';
import { ColorPicker } from './';

const CalendarNewEventModal = ({
  opened,
  target,
  labels,
  values,
  placeholders,
  errorMessages,
  suggestions,
  onSubmit,
  ...props
}) => {
  const defaultValues = {
    periodName: values.periodName || '',
    dayType: values.dayType || 'schoolDays',
    withoutOrdinaryDays: values.withoutOrdinaryDays || false,
    startDate: values.startDate || null,
    endDate: values.endDate || null,
    color: values.color || '',
  };

  const {
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const isSchoolDay = watch('dayType') === 'schoolDays';

  const onSubmitHandler = (event) => {
    if (event.dayType !== 'schoolDays') {
      delete event.withoutOrdinaryDays;
      delete event.color;
    }
    isFunction(onSubmit) && onSubmit(event);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(values)]);

  useEffect(() => {
    if (opened) reset(defaultValues);
  }, [opened]);

  const { classes, cx } = CalendarNewEventModalStyles({ isSchoolDay }, { name: 'CalendarModal' });
  return (
    <Popover
      opened={opened}
      target={target}
      position="bottom"
      width={590}
      arrowSize={6}
      withArrow
      withCloseButton={true}
      trapFocus={false}
      withinPortal
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)} className={classes.root}>
        <Controller
          control={control}
          name="periodName"
          rules={{
            required: errorMessages.periodName,
          }}
          render={({ field }) => (
            <Autocomplete
              label={labels.periodName}
              placeholder={placeholders.periodName}
              data={suggestions}
              required
              error={errors.periodName}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="dayType"
          rules={{
            required: errorMessages.dayType,
          }}
          render={({ field }) => (
            <RadioGroup
              data={[
                { value: 'schoolDays', label: labels.schoolDays },
                { value: 'nonSchoolDays', label: labels.nonSchoolDays },
              ]}
              variant="boxed"
              error={errors.dayType}
              rounded
              fullWidth
              required
              className={classes.dayType}
              {...field}
            />
          )}
        />
        {isSchoolDay && (
          <Controller
            control={control}
            name="withoutOrdinaryDays"
            render={({ field }) => (
              <Checkbox
                label={labels.withoutOrdinaryDays}
                className={classes.withoutOrdinaryDays}
                {...field}
                checked={field.value}
              />
            )}
          />
        )}
        <Stack spacing={4} fullWidth>
          <Controller
            control={control}
            name="startDate"
            rules={{
              required: errorMessages.startDate,
            }}
            render={({ field }) => (
              <DatePicker
                label={labels.startDate}
                placeholder={placeholders.startDate}
                error={errors.startDate}
                headerStyle={{ marginTop: isSchoolDay ? 8 : 16, flex: 1 }}
                required
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker
                label={labels.endDate}
                placeholder={placeholders.endDate}
                error={errors.endDate}
                headerStyle={{ marginTop: isSchoolDay ? 8 : 16 }}
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
        </Stack>
        {isSchoolDay && (
          <Controller
            control={control}
            name="color"
            rules={{
              required: errorMessages.color,
            }}
            render={({ field }) => (
              <ColorInput
                label={labels.color}
                placeholder={placeholders.color}
                useHsl
                error={errors.color}
                required
                lightOnly
                headerStyle={{ marginTop: 16 }}
                compact={false}
                colorPickerComponent={ColorPicker}
                {...field}
              />
            )}
          />
        )}
        <Box className={classes.buttonWrapper}>
          <Button type="submit">{labels.add}</Button>
        </Box>
      </form>
    </Popover>
  );
};

CalendarNewEventModal.defaultProps = CALENDAR_NEW_EVENT_MODAL_DEFAULT_PROPS;
CalendarNewEventModal.propTypes = CALENDAR_NEW_EVENT_MODAL_PROP_TYPES;

export { CalendarNewEventModal };
