import React from 'react';
import { Box, Select, Button, DatePicker } from '@bubbles-ui/components';
import { Controller, useForm } from 'react-hook-form';
import { ScoresPeriodFormStyles } from './ScoresPeriodForm.styles';
import {
  SCORES_PERIOD_FORM_DEFAULT_PROPS,
  SCORES_PERIOD_FORM_PROP_TYPES,
} from './ScoresPeriodForm.constants';
import { SearchIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

const ScoresPeriodForm = ({ value, fields, labels, errorMessages, onSubmit, onSave, ...props }) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderSelects = () => {
    const selects = fields.map((field, index) => {
      const { name, placeholder, data, required } = field;

      return (
        <Controller
          key={`${name}-${index}`}
          control={control}
          name={name}
          render={({ field: fieldProps }) => (
            <Select
              placeholder={placeholder}
              error={errors.name}
              data={data}
              required={!!required}
              {...fieldProps}
            />
          )}
        />
      );
    });
    return selects;
  };

  const submitHandler = (formValue) => {
    console.log(formValue);
    isFunction(onSubmit) && onSubmit();
  };

  const { classes, cx } = ScoresPeriodFormStyles({}, { name: 'ScoresPeriodForm' });
  return (
    <Box className={classes.root}>
      <Box className={classes.formWrapper}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Box className={classes.selectWrapper}>{renderSelects()}</Box>
          <Box className={classes.periodWrapper}>
            <Controller
              control={control}
              name="startDate"
              rules={{ required: errorMessages.startDate || 'Required Field' }}
              render={({ field: fieldProps }) => (
                <DatePicker
                  label={labels.startDate}
                  error={errors.startDate}
                  required
                  {...fieldProps}
                />
              )}
            />
            <Controller
              control={control}
              name="endDate"
              rules={{ required: errorMessages.endDate || 'Required Field' }}
              render={({ field: fieldProps }) => (
                <DatePicker
                  label={labels.endDate}
                  error={errors.endDate}
                  required
                  {...fieldProps}
                />
              )}
            />
          </Box>
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
