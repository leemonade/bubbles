import React from 'react';
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
  placeholders,
  errorMessages,
  suggestions,
  onSubmit,
  ...props
}) => {
  const defaultValues = {
    periodName: '',
    dayType: '',
    withoutOrdinaryDays: false,
    startDate: null,
    endDate: null,
    color: '',
  };

  const {
    watch,
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

  const { classes, cx } = CalendarNewEventModalStyles({ isSchoolDay }, { name: 'CalendarModal' });
  return (
    <Popover
      opened={opened}
      target={target}
      position="bottom"
      arrowSize={6}
      withArrow
      withCloseButton={false}
      trapFocus={false}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)} className={classes.root}>
        <Controller
          control={control}
          name="periodName"
          rules={{
            validate: (v) => (v[0] ? true : errorMessages.periodName),
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
              />
            )}
          />
        )}
        <Stack spacing={4}>
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
                headerStyle={{ marginTop: isSchoolDay ? 8 : 16 }}
                required
                {...field}
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
