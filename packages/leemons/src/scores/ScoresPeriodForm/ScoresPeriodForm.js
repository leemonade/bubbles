import React, { useState } from 'react';
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
} from '@bubbles-ui/components';
import { Controller, useForm } from 'react-hook-form';
import { ScoresPeriodFormStyles } from './ScoresPeriodForm.styles';
import {
  SCORES_PERIOD_FORM_DEFAULT_PROPS,
  SCORES_PERIOD_FORM_PROP_TYPES,
} from './ScoresPeriodForm.constants';
import { SearchIcon, PluginCalendarIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

const ScoresPeriodForm = ({ value, fields, labels, errorMessages, onSubmit, onSave, ...props }) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [periodName, setPeriodName] = useState('');
  const [shareWithTeachers, setShareWithTeachers] = useState(false);
  const { ref: periodWrapperRef, width: periodWrapperWidth } = useElementSize();

  const defaultValues = {
    ...value,
  };

  const {
    control,
    handleSubmit,
    getValues,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({ defaultValues });

  const renderSelects = () => {
    const selects = fields.map((field, index) => {
      const { name, placeholder, data, required } = field;

      return (
        <Controller
          key={`${name}-${index}`}
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field: { onChange, ...field } }) => (
            <Select
              placeholder={placeholder}
              error={errors[name]}
              data={data}
              required={!!required}
              onChange={(value) => onChangeHandler(value, onChange)}
              {...field}
            />
          )}
        />
      );
    });
    return selects;
  };

  const onSubmitHandler = (formValue) => {
    isFunction(onSubmit) && onSubmit(formValue);
  };

  const onSaveHandler = () => {
    const formValue = getValues();
    isFunction(onSave) && onSave(periodName, shareWithTeachers, formValue);
    setOpenPopover(false);
  };

  const onChangeHandler = (value, onChange) => {
    onChange(value);
    if (!validateDates()) return;
    const formValue = getValues();
    const requiredFields = fields.filter((field) => field.required).map((field) => field.name);
    requiredFields.push('startDate', 'endDate');
    const requiredFieldsCompleted = requiredFields.every((field) => formValue[field]);
    setOpenPopover(requiredFieldsCompleted);
  };

  const validateDates = () => {
    const { startDate, endDate } = getValues();
    if (!startDate || !endDate) return false;
    if (startDate > endDate) {
      setError('startDate', {
        type: 'custom',
        message: errorMessages.validateStartDate || 'Invalid start date',
      });
    } else {
      clearErrors('startDate');
    }
    if (endDate < startDate) {
      setError('endDate', {
        type: 'custom',
        message: errorMessages.validateEndDate || 'Invalid end date',
      });
    } else {
      clearErrors('endDate');
    }
    return startDate < endDate;
  };

  const { classes, cx } = ScoresPeriodFormStyles(
    { periodWrapperWidth },
    { name: 'ScoresPeriodForm' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.formWrapper}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box className={classes.selectWrapper}>{renderSelects()}</Box>
          <Popover
            opened={openPopover}
            onClose={() => setOpenPopover(false)}
            position="bottom"
            placement="start"
            style={{ width: '100%' }}
            withArrow
            trapFocus={false}
            target={
              <Box ref={periodWrapperRef} className={classes.periodWrapper}>
                <Controller
                  control={control}
                  name="startDate"
                  rules={{
                    required: errorMessages.startDate || 'Required Field',
                  }}
                  render={({ field: { onChange, ...field } }) => (
                    <DatePicker
                      label={labels.startDate}
                      error={errors.startDate}
                      required
                      headerStyle={{ flex: 'none' }}
                      onChange={(value) => onChangeHandler(value, onChange)}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="endDate"
                  rules={{
                    required: errorMessages.endDate || 'Required Field',
                  }}
                  render={({ field: { onChange, ...field } }) => (
                    <DatePicker
                      label={labels.endDate}
                      error={errors.endDate}
                      required
                      headerStyle={{ flex: 'none' }}
                      onChange={(value) => onChangeHandler(value, onChange)}
                      {...field}
                    />
                  )}
                />
              </Box>
            }
          >
            <Box className={classes.popover}>
              <Box className={classes.popoverTitle}>
                <PluginCalendarIcon height={24} width={24} />
                <Text color="primary" size="md">
                  {labels.newPeriod}
                </Text>
                <IconButton icon={<RemoveIcon />} onClick={() => setOpenPopover(false)} />
              </Box>
              <Box className={classes.popoverContent}>
                <TextInput value={periodName} onChange={setPeriodName} />
                <Switch
                  size="md"
                  label={labels.shareWithTeachers}
                  value={shareWithTeachers}
                  onChange={setShareWithTeachers}
                ></Switch>
                <Button fullWidth position="center" onClick={onSaveHandler}>
                  {labels.saveButton}
                </Button>
              </Box>
            </Box>
          </Popover>
          <Box className={classes.buttonWrapper}>
            <Button
              type="submit"
              color="secondary"
              position="left"
              style={{ width: '100%' }}
              rightIcon={<SearchIcon />}
              rounded
            >
              {labels.submit}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

ScoresPeriodForm.defaultProps = SCORES_PERIOD_FORM_DEFAULT_PROPS;
ScoresPeriodForm.propTypes = SCORES_PERIOD_FORM_PROP_TYPES;

export { ScoresPeriodForm };
