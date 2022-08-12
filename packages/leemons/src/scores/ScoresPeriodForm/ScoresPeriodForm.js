import React, { useEffect, useState } from 'react';
import {
  Box,
  Select,
  Button,
  DatePicker,
  Popover,
  Text,
  useElementSize,
  IconButton,
  TextInput,
  Switch,
  useId,
} from '@bubbles-ui/components';
import { Controller, useForm } from 'react-hook-form';
import { ScoresPeriodFormStyles } from './ScoresPeriodForm.styles';
import {
  SCORES_PERIOD_FORM_DEFAULT_PROPS,
  SCORES_PERIOD_FORM_PROP_TYPES,
} from './ScoresPeriodForm.constants';
import {
  SearchIcon,
  PluginCalendarIcon,
  RemoveIcon,
  ChevDownIcon,
} from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

function Periods({ periods, cx, classes, locale, watch, setValue, labels, onPeriodSelect }) {
  const startDate = watch('startDate')?.getTime();
  const endDate = watch('endDate')?.getTime();

  if (!periods?.length) {
    return null;
  }

  return (
    <Box className={classes.periodsList}>
      <Text role="productive" strong color="soft" size="xs" transform="uppercase">
        {labels?.evaluations}
      </Text>
      {periods?.map((period) => {
        return (
          <Box
            className={cx(classes.period, {
              [classes.selectedPeriod]:
                startDate === period.startDate.getTime() && endDate === period.endDate.getTime(),
            })}
            key={period.id}
            onClick={() => {
              if (_.isFunction(onPeriodSelect)) {
                onPeriodSelect(period);
              }
              setValue('startDate', period.startDate);
              setValue('endDate', period.endDate);
            }}
          >
            <Text color="primary" strong>
              {period.name}
            </Text>
            <Text color="quartiary">
              {period.startDate?.toLocaleDateString(locale)} -{' '}
              {period.endDate.toLocaleDateString(locale)}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

function RenderSelects({ fields, control, errors, clearLabel }) {
  return React.useMemo(() => {
    const selects = fields.map((field, index) => {
      const { name, placeholder, data, required, disabled, label, ...props } = field;

      return (
        <Controller
          // EN: The key should change if the value changes, otherwise the component will not re-render.
          // ES: El key debe cambiar si el valor cambia, de lo contrario el componente no se renderizará.
          key={`${name}-${index}`}
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field }) => {
            React.useEffect(() => {
              if (field.value && !data.some((item) => item.value === field.value)) {
                field.onChange(null);
              }
            }, [data]);

            return (
              <Select
                {...props}
                placeholder={placeholder}
                error={errors[name]}
                label={label}
                clearable={!required && clearLabel}
                data={data}
                disabled={disabled}
                required={!!required}
                {...field}
              />
            );
          }}
        />
      );
    });

    return selects;
  }, [fields, control, errors]);
}

const ScoresPeriodForm = ({
  value,
  fields,
  labels,
  errorMessages,
  onSubmit,
  onSave,
  allowCreate,
  periods,
  locale,
  onChange,
  onPeriodSelect,
  ...props
}) => {
  const [isSavingPeriod, setIsSavingPeriod] = useState(false);
  const { ref: periodWrapperRef, width: periodWrapperWidth } = useElementSize();

  const defaultValues = {
    ...value,
  };

  const {
    control,
    handleSubmit,
    getValues,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    if (isFunction(onChange)) {
      const subscription = watch((value) => {
        onChange(value);
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [watch, onChange]);

  const onSubmitHandler = ({ periodName, shareWithTeachers, ...formValue }) => {
    isFunction(onSubmit) && onSubmit(formValue);
  };

  const onSaveHandler = (formValue) => {
    const { periodName, shareWithTeachers, ...values } = formValue;
    isFunction(onSave) && onSave(periodName, !!shareWithTeachers, values);
    // setIsSavingPeriod(false);
  };

  const { classes, cx } = ScoresPeriodFormStyles(
    { periodWrapperWidth, isSavingPeriod },
    { name: 'ScoresPeriodForm' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.formWrapper}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box className={classes.selectWrapper}>
            <RenderSelects fields={fields} control={control} errors={errors} clearLabel={'clear'} />
          </Box>
          {!allowCreate && (
            <Periods
              labels={labels}
              periods={periods}
              cx={cx}
              classes={classes}
              locale={locale}
              watch={watch}
              setValue={setValue}
              onPeriodSelect={onPeriodSelect}
            />
          )}

          {!allowCreate && (
            <Box className={classes.customPeriodTitle}>
              <Text role="productive" strong color="soft" size="xs" transform="uppercase">
                {labels?.customPeriod}
              </Text>
            </Box>
          )}
          <Box ref={periodWrapperRef} className={classes.periodWrapper}>
            <Controller
              control={control}
              name="startDate"
              rules={{
                required: errorMessages.startDate || 'Required Field',
                validate: (value) => {
                  const endDate = getValues('endDate');

                  if (!endDate) {
                    return true;
                  }

                  if (value > endDate) {
                    return errorMessages.validateStartDate || 'Invalid start date';
                  }

                  return true;
                },
              }}
              render={({ field }) => (
                <DatePicker
                  label={labels.startDate}
                  error={errors.startDate}
                  required
                  locale={locale}
                  maxDate={watch('endDate')}
                  headerStyle={{ flex: 'none' }}
                  {...field}
                  onChange={(value) => {
                    if (!value) {
                      field.onChange(value);
                      return;
                    }
                    const date = new Date(value);

                    date.setHours(0, 0, 0, 0);

                    field.onChange(date);
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="endDate"
              rules={{
                required: errorMessages.endDate || 'Required Field',
                validate: (value) => {
                  const startDate = getValues('startDate');

                  if (!startDate) {
                    return true;
                  }

                  if (value < startDate) {
                    return errorMessages.validateEndDate || 'Invalid end date';
                  }

                  return true;
                },
              }}
              render={({ field }) => (
                <DatePicker
                  label={labels.endDate}
                  error={errors.endDate}
                  required
                  locale={locale}
                  minDate={watch('startDate')}
                  headerStyle={{ flex: 'none' }}
                  {...field}
                  onChange={(value) => {
                    if (!value) {
                      field.onChange(value);
                      return;
                    }

                    const date = new Date(value);

                    date.setHours(0, 0, 0, 0);

                    field.onChange(date);
                  }}
                />
              )}
            />
          </Box>
          {allowCreate ? (
            <Box className={classes.createContent}>
              <Controller
                control={control}
                name="periodName"
                rules={{
                  required: errorMessages.periodName || 'Required Field',
                }}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label={labels?.periodName}
                    required
                    error={errors.periodName}
                  />
                )}
              />
              <Controller
                control={control}
                name="shareWithTeachers"
                render={({ field }) => (
                  <Switch
                    {...field}
                    size="md"
                    label={labels.shareWithTeachers}
                    checked={field.value}
                  ></Switch>
                )}
              />
              <Button fullWidth position="center" onClick={handleSubmit(onSaveHandler)}>
                {labels.saveButton}
              </Button>
            </Box>
          ) : (
            <Box className={classes.buttonWrapper}>
              <Button type="submit" position="center" fullWidth rightIcon={<SearchIcon />}>
                {labels.submit}
              </Button>
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
};

ScoresPeriodForm.defaultProps = SCORES_PERIOD_FORM_DEFAULT_PROPS;
ScoresPeriodForm.propTypes = SCORES_PERIOD_FORM_PROP_TYPES;

export { ScoresPeriodForm };
