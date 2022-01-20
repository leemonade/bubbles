import React from 'react';
import { CalendarEventModalStyles } from './CalendarEventModal.styles';
import { Drawer } from '../../../overlay';
import { Controller, useForm } from 'react-hook-form';
import { RadioGroup, TextInput } from '../../../form';
import { Box } from '@mantine/core';
import { get } from 'lodash';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
import { Stack } from '../../../layout';

export const CALENDAR_EVENT_MODAL_DEFAULT_PROPS = {
  opened: false,
  onClose: () => {},
  messages: {
    titlePlaceholder: 'Event title',
  },
  errorMessages: {
    titleRequired: 'Field is required',
  },
};
export const CALENDAR_EVENT_MODAL_PROP_TYPES = {};

const CalendarEventModal = ({
  opened,
  onClose,
  eventTypes,
  forceType,
  messages,
  errorMessages,
  ...props
}) => {
  const { classes, cx } = CalendarEventModalStyles({});

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    unregister,
    trigger,
    formState: { errors, isSubmitted },
  } = useForm();

  function onSubmit() {}

  return (
    <Drawer size={360} empty className={classes.root} onClose={onClose} opened={opened}>
      <Box sx={(theme) => ({ padding: theme.spacing[4], paddingTop: theme.spacing[12] })}>
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
                    variant="boxed"
                    direction={eventTypes.length < 3 ? 'row' : 'column'}
                    {...field}
                    fullWidth
                    onChange={(e) => console.log(e)}
                    data={eventTypes}
                  />
                )}
              />
            </Box>
          ) : null}

          <Box sx={(theme) => ({ paddingTop: theme.spacing[5] })}>
            <Stack>
              <Box className={classes.icon}>
                <TimeClockCircleIcon />
              </Box>
              <Box>Miau</Box>
            </Stack>
          </Box>
          {/*
          <FormControl className="w-full" formError={_.get(errors, `startDate`)}>
            <Input
              type="date"
              className="w-full"
              outlined={true}
              {...register(`startDate`, {
                required: tCommon('required'),
              })}
            />
          </FormControl>
          {!isAllDay ? (
            <FormControl className="w-full" formError={_.get(errors, `startTime`)}>
              <Input
                type="time"
                className="w-full"
                outlined={true}
                {...register(`startTime`, {
                  required: tCommon('required'),
                })}
              />
            </FormControl>
          ) : null}
          <FormControl className="w-full" formError={_.get(errors, `endDate`)}>
            <Input
              type="date"
              className="w-full"
              outlined={true}
              {...register(`endDate`, {
                required: tCommon('required'),
              })}
            />
          </FormControl>
          {!isAllDay ? (
            <FormControl className="w-full" formError={_.get(errors, `endTime`)}>
              <Input
                type="time"
                className="w-full"
                outlined={true}
                {...register(`endTime`, {
                  required: tCommon('required'),
                })}
              />
            </FormControl>
          ) : null}
          <FormControl labelPosition="right" label={t('all_day')}>
            <Checkbox
              color="secondary"
              checked={watch('isAllDay')}
              onChange={(e) => setValue('isAllDay', e.target.checked)}
            />
          </FormControl>
          <Select
            outlined
            {...register(`repeat`, {
              required: tCommon('required'),
            })}
          >
            <option value="dont_repeat">{t('repeat.dont_repeat')}</option>
            <option value="every_day">{t('repeat.every_day')}</option>
            <option value="every_week">{t('repeat.every_week')}</option>
            <option value="every_month">{t('repeat.every_month')}</option>
            <option value="every_year">{t('repeat.every_year')}</option>
          </Select>
          {eventTypeComponent.current && eventTypeComponent.current.Component ? (
            <eventTypeComponent.current.Component
              event={event}
              isEditing={true}
              allFormData={watch()}
              data={watch('data')}
              tCommon={tCommon}
              form={{
                register: (ref, options) => register(`data.${ref}`, options),
                setValue: (ref, value, options) => setValue(`data.${ref}`, value, options),
                getValues: (refs) => {
                  if (_.isArray(refs)) return getValues(_.map(refs, (ref) => `data.${ref}`));
                  return getValues(`data.${refs}`);
                },
                watch: (refs, options) => {
                  if (_.isFunction(refs)) {
                    return watch(refs, options);
                  }
                  if (_.isArray(refs)) {
                    return watch(
                      _.map(refs, (ref) => `data.${ref}`),
                      options
                    );
                  }
                  return watch(`data.${refs}`, options);
                },
                unregister: (refs) => {
                  if (_.isArray(refs)) return unregister(_.map(refs, (ref) => `data.${ref}`));
                  return unregister(`data.${refs}`);
                },
                trigger: (refs) => {
                  if (_.isArray(refs)) return trigger(_.map(refs, (ref) => `data.${ref}`));
                  return trigger(`data.${refs}`);
                },
                formState: { errors: errors ? errors.data : {}, isSubmitted },
              }}
            />
          ) : null}
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
          {isNew ? (
            <Button color="primary" className="mt-4">
              {t('save')}
            </Button>
          ) : null}
          {!isNew && isOwner ? (
            <Button color="primary" className="mt-4">
              {t('update')}
            </Button>
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
