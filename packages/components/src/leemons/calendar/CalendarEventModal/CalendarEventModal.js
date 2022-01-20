import React from 'react';
import { CalendarEventModalStyles } from './CalendarEventModal.styles';
import { Drawer } from '../../../overlay';
import { Controller, useForm } from 'react-hook-form';
import { Button, RadioGroup, Select, TextInput } from '../../../form';

import { get, isArray, isFunction, map } from 'lodash';
import { Dates } from './components/Dates';
import { Box, Divider, Stack } from '../../../layout';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';

export const CALENDAR_EVENT_MODAL_DEFAULT_PROPS = {
  opened: false,
  onClose: () => {},
  selectData: {
    repeat: [
      { label: "Don't repeat", value: 'dont_repeat' },
      { label: 'Every day', value: 'every_day' },
      { label: 'Every week', value: 'every_week' },
      { label: 'Every month', value: 'every_month' },
      { label: 'Every year', value: 'every_year' },
    ],
    calendars: [],
    eventTypes: [],
  },
  messages: {
    fromLabel: 'From',
    toLabel: 'To',
    repeatLabel: 'Repeat',
    allDayLabel: 'All day',
    titlePlaceholder: 'Event title',
    cancelButtonLabel: 'Cancel',
    saveButtonLabel: 'Save',
    updateButtonLabel: 'Update',
  },
  errorMessages: {
    titleRequired: 'Field is required',
    startDateRequired: 'Field is required',
    startTimeRequired: 'Field is required',
    endDateRequired: 'Field is required',
    endTimeRequired: 'Field is required',
  },
};
export const CALENDAR_EVENT_MODAL_PROP_TYPES = {};

const CalendarEventModal = (props) => {
  const { classes, cx } = CalendarEventModalStyles({});

  const {
    opened,
    onClose,
    selectData,
    forceType,
    messages,
    errorMessages,
    components,
    isNew,
    isOwner,
  } = props;

  const form = useForm();
  const {
    watch,
    control,
    trigger,
    register,
    setValue,
    getValues,
    unregister,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = form;

  const type = watch('type');

  let Component = () => null;
  let hasComponent = false;

  if (type && components && components[type]) {
    Component = components[type];
    hasComponent = true;
  }

  function onSubmit() {}

  return (
    <Drawer size={360} empty className={classes.root} onClose={onClose} opened={opened}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing[4],
          paddingTop: theme.spacing[12],
          paddingBottom: '76px',
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: errorMessages.titleRequired,
            }}
            render={({ field }) => (
              <TextInput
                placeholder={messages.titlePlaceholder}
                error={get(errors, 'title')}
                required
                {...field}
              />
            )}
          />

          {!forceType ? (
            <Box sx={(theme) => ({ paddingTop: theme.spacing[4] })}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    variant="boxed"
                    direction={selectData.eventTypes.length < 3 ? 'row' : 'column'}
                    fullWidth
                    data={selectData.eventTypes}
                  />
                )}
              />
            </Box>
          ) : null}

          <Dates {...props} form={form} classes={classes} />

          {hasComponent ? (
            <Box className={classes.divider}>
              <Divider />
            </Box>
          ) : null}

          <Component
            isEditing={true}
            allFormData={watch()}
            data={watch('data')}
            form={{
              control: {
                ...control,
                register: (ref, options) => control.register(`data.${ref}`, options),
                unregister: (refs) => {
                  if (isArray(refs)) return control.unregister(map(refs, (ref) => `data.${ref}`));
                  return control.unregister(`data.${refs}`);
                },
              },
              register: (ref, options) => register(`data.${ref}`, options),
              setValue: (ref, value, options) => setValue(`data.${ref}`, value, options),
              getValues: (refs) => {
                if (isArray(refs)) return getValues(map(refs, (ref) => `data.${ref}`));
                return getValues(`data.${refs}`);
              },
              watch: (refs, options) => {
                if (isFunction(refs)) {
                  return watch(refs, options);
                }
                if (isArray(refs)) {
                  return watch(
                    map(refs, (ref) => `data.${ref}`),
                    options
                  );
                }
                return watch(`data.${refs}`, options);
              },
              unregister: (refs) => {
                if (isArray(refs)) return unregister(map(refs, (ref) => `data.${ref}`));
                return unregister(`data.${refs}`);
              },
              trigger: (refs) => {
                if (isArray(refs)) return trigger(map(refs, (ref) => `data.${ref}`));
                return trigger(`data.${refs}`);
              },
              formState: { errors: errors ? errors.data : {}, isSubmitted },
            }}
          />

          <Box className={classes.divider}>
            <Divider />
          </Box>

          <Stack>
            <Box className={classes.icon}>
              <PluginCalendarIcon />
            </Box>
            <Box>
              <Controller
                name="calendar"
                control={control}
                render={({ field }) => <Select {...field} data={selectData.calendars} />}
              />
            </Box>
          </Stack>

          <Box className={classes.actionButtonsContainer}>
            <Button type="button" variant="link" onClick={onClose}>
              {messages.cancelButtonLabel}
            </Button>
            {isNew ? <Button type="submit">{messages.saveButtonLabel}</Button> : null}
            {!isNew && isOwner ? <Button type="submit">{messages.updateButtonLabel}</Button> : null}
          </Box>

          {/*

          {calendarData && calendarData.ownerCalendars ? (
            <Select
              outlined
              {...register(`calendar`, {
                required: tCommon('required'),
              })}
            >
              {calendarData.ownerCalendars.map((calendar) => (
                <option key={calendar.id} value={calendar.key}>
                  {getCalendarNameWithConfigAndSession(calendar, calendarData, session)}
                </option>
              ))}
            </Select>
          ) : null}

          {!isNew ? (
            <Button type="button" color="error" className="mt-4" onClick={removeEvent}>
              Borrar T
            </Button>
          ) : null}
          */}
        </form>
      </Box>
    </Drawer>
  );
};

CalendarEventModal.defaultProps = CALENDAR_EVENT_MODAL_DEFAULT_PROPS;
CalendarEventModal.propTypes = CALENDAR_EVENT_MODAL_PROP_TYPES;

export { CalendarEventModal };
