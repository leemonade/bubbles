import React from 'react';
import { get, isArray, isFunction, keyBy, map } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import {
  ActionButton,
  Box,
  Button,
  Col,
  Divider,
  Drawer,
  Grid,
  RadioGroup,
  Select,
  TextInput,
} from '@bubbles-ui/components';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { Dates } from './components/Dates';
import { CalendarEventModalStyles } from './CalendarEventModal.styles';

export const CALENDAR_EVENT_MODAL_DEFAULT_PROPS = {
  opened: false,
  onClose: () => {},
  onRemove: () => {},
  onSubmit: () => {},
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
    calendarPlaceholder: 'Select calendar',
  },
  errorMessages: {
    titleRequired: 'Field is required',
    startDateRequired: 'Field is required',
    startTimeRequired: 'Field is required',
    endDateRequired: 'Field is required',
    endTimeRequired: 'Field is required',
    calendarRequired: 'Field is required',
    typeRequired: 'Field is required',
  },
};
export const CALENDAR_EVENT_MODAL_PROP_TYPES = {};

function MyController(props) {
  return <Controller {...props} name={`data.${props.name}`} />;
}

const CalendarEventModal = (props) => {
  const { classes, cx } = CalendarEventModalStyles({});

  const {
    opened,
    onClose,
    onRemove,
    selectData,
    forceType,
    messages,
    errorMessages,
    components,
    isNew,
    isOwner,
    fromCalendar,
    onSubmit,
    defaultValues,
  } = props;

  const form = useForm({ defaultValues });
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
  const eventTypesByValue = keyBy(selectData.eventTypes, 'value');
  const onlyOneDate = eventTypesByValue[type]?.onlyOneDate;
  const config = eventTypesByValue[type]?.config;

  React.useEffect(() => console.log('type:', type), [type]);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (onlyOneDate) {
        if (name === 'startDate') {
          setValue('endDate', value.startDate);
        }
        if (name === 'startTime') {
          setValue('endTime', value.startTime);
        }
      }
    });
    return () => subscription.unsubscribe();
  });

  let Component = () => null;
  let hasComponent = false;

  if (type && components && components[type]) {
    Component = components[type];
    hasComponent = true;
  }

  const disabled = !isNew && !isOwner;

  return (
    <Drawer
      size={360}
      empty
      className={classes.root}
      onClose={onClose}
      opened={opened}
      header={
        !isNew && (!fromCalendar || isOwner) ? (
          <ActionButton icon={<DeleteBinIcon />} onClick={onRemove} />
        ) : null
      }
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing[4],
          paddingTop: theme.spacing[12],
          paddingBottom: '76px',
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Controller
            name="title"
            control={control}
            rules={{
              required: errorMessages.titleRequired,
            }}
            render={({ field }) => (
              <TextInput
                disabled={disabled}
                placeholder={config.titlePlaceholder || messages.titlePlaceholder}
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
                rules={{
                  required: errorMessages.typeRequired,
                }}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    disabled={disabled}
                    variant="icon"
                    direction={selectData.eventTypes.length < 3 ? 'row' : 'column'}
                    fullWidth
                    error={get(errors, 'type')}
                    data={selectData.eventTypes}
                  />
                )}
              />
            </Box>
          ) : null}

          <Dates
            {...props}
            form={form}
            classes={classes}
            disabled={disabled}
            onlyOneDate={onlyOneDate}
            config={config}
          />

          {hasComponent ? (
            <Box className={classes.divider}>
              <Divider />
            </Box>
          ) : null}

          <Component
            isEditing={true}
            allFormData={watch()}
            data={watch('data')}
            classes={classes}
            disabled={disabled}
            allProps={props}
            form={{
              Controller: MyController,
              control,
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

          {isNew || (!isNew && isOwner) ? (
            <>
              <Box className={classes.divider}>
                <Divider />
              </Box>

              <Box>
                <Grid columns={100} gutter={0}>
                  <Col span={10} className={classes.icon}>
                    <PluginCalendarIcon />
                  </Col>
                  <Col span={90}>
                    <Controller
                      name="calendar"
                      control={control}
                      rules={{
                        required: errorMessages.calendarRequired,
                      }}
                      render={({ field }) => (
                        <Select
                          size="xs"
                          disabled={disabled}
                          placeholder={messages.calendarPlaceholder}
                          {...field}
                          required
                          error={get(errors, 'calendar')}
                          data={selectData.calendars}
                        />
                      )}
                    />
                  </Col>
                </Grid>
              </Box>
            </>
          ) : null}

          <Box className={classes.actionButtonsContainer}>
            <Button type="button" variant="light" compact onClick={onClose}>
              {messages.cancelButtonLabel}
            </Button>
            {isNew ? <Button type="submit">{messages.saveButtonLabel}</Button> : null}
            {!isNew && isOwner ? <Button type="submit">{messages.updateButtonLabel}</Button> : null}
          </Box>
        </form>
      </Box>
    </Drawer>
  );
};

CalendarEventModal.defaultProps = CALENDAR_EVENT_MODAL_DEFAULT_PROPS;
CalendarEventModal.propTypes = CALENDAR_EVENT_MODAL_PROP_TYPES;

export { CalendarEventModal };
