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

function Periods({ periods, cx, classes, locale, watch, setValue }) {
  const startDate = watch('startDate')?.getTime();
  const endDate = watch('endDate')?.getTime();

  return periods?.map((period) => {
    return (
      <Box
        className={cx(classes.period, {
          [classes.selectedPeriod]:
            startDate === period.startDate.getTime() && endDate === period.endDate.getTime(),
        })}
        key={period.id}
        onClick={() => {
          setValue('startDate', period.startDate);
          setValue('endDate', period.endDate);
        }}
      >
        <Text color="quartiary">
          {period.startDate?.toLocaleDateString(locale)} -{' '}
          {period.endDate.toLocaleDateString(locale)}
        </Text>
        <Text color="primary" strong>
          {period.name}
        </Text>
      </Box>
    );
  });
}

function RenderSelects({ fields, control, errors, clearLabel }) {
  return React.useMemo(() => {
    const id = Date.now();

    const selects = fields.map((field, index) => {
      const { name, placeholder, data, required, disabled, label } = field;

      return (
        <Controller
          // EN: The key should change if the value changes, otherwise the component will not re-render.
          // ES: El key debe cambiar si el valor cambia, de lo contrario el componente no se renderizará.
          key={`${name}-${index}-${id}`}
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field }) => (
            <Select
              placeholder={placeholder}
              error={errors[name]}
              label={label}
              clearable={!required && clearLabel}
              data={data}
              disabled={disabled}
              required={!!required}
              {...field}
            />
          )}
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
                  // onChange={(value) => onChangeHandler(value, onChange)}
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
            {!allowCreate && (
              <Periods
                periods={periods}
                cx={cx}
                classes={classes}
                locale={locale}
                watch={watch}
                setValue={setValue}
              />
            )}
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
