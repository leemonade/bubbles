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
} from '@bubbles-ui/components';
import { isFunction } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import { CalendarNewEventModalStyles } from './CalendarNewEventModal.styles';
import {
  CALENDAR_NEW_EVENT_MODAL_DEFAULT_PROPS,
  CALENDAR_NEW_EVENT_MODAL_PROP_TYPES,
} from './CalendarNewEventModal.constants';

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
    periodRange: [null, null],
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
        <Controller
          control={control}
          name="periodRange"
          rules={{
            validate: (v) => (v[0] && v[1] ? true : errorMessages.periodRange),
          }}
          render={({ field }) => (
            <DatePicker
              label={labels.periodRange}
              placeholder={placeholders.periodRange}
              range
              error={errors.periodRange}
              headerStyle={{ marginTop: isSchoolDay ? 8 : 16 }}
              {...field}
            />
          )}
        />
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
                lightOnly
                headerStyle={{ marginTop: 16 }}
                compact={false}
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
