import React, { useContext, useEffect } from 'react';
import { difference, forEach, get } from 'lodash';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../typography';
import { Controller } from 'react-hook-form';
import { Select } from '../../../../../form';
import { TextField } from './TextField';
import { CommonRequiredField } from './CommonRequiredField';

const fieldsByType = {
  text_field: [
    'config.required',
    'config.masked',
    'config.maxLength',
    'config.minLength',
    'config.onlyNumbers',
  ],
  rich_text: ['config.required', 'config.maxLength', 'config.minLength'],
  number: ['config.required'],
  date: ['config.required', 'config.minDate', 'config.maxDate'],
  email: ['config.required'],
  phone: ['config.required'],
  link: ['config.required'],
  multioption: [
    'config.required',
    'config.uiType',
    'config.minItems',
    'config.maxItems',
    'config.checkboxValues',
  ],
  boolean: ['config.required', 'config.uiType', 'config.initialStatus'],
  select: ['config.required', 'config.checkboxValues'],
  user: ['config.required', 'config.center'],
};
const configFieldTypes = {
  text_field: <TextField />,
  rich_text: <CommonRequiredField />,
  number: <CommonRequiredField />,
  date: <CommonRequiredField />,
  email: <CommonRequiredField />,
  phone: <CommonRequiredField />,
  link: <CommonRequiredField />,
  multioption: <CommonRequiredField />,
  boolean: <CommonRequiredField />,
  select: <CommonRequiredField />,
  user: <CommonRequiredField />,
  default: null,
};

const FieldType = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions, colSpans, gridColumn },
    form: {
      watch,
      control,
      unregister,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  const fieldType = watch('config.type');

  useEffect(() => {
    const subscription = watch(({ config: { type } }, { name }) => {
      if (name === 'config.type' && type !== fieldType) {
        const oldFields = fieldsByType[fieldType] || [];
        const newFields = fieldsByType[type] || [];
        const fieldsToRemove = difference(oldFields, newFields);
        forEach(fieldsToRemove, (field) => {
          unregister(field);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [fieldType]);

  return (
    <Box>
      <Grid columns={gridColumn} align="center">
        <Col span={colSpans[0]}>
          <Text strong color="primary" role="productive">
            {messages.fieldTypeLabel}
          </Text>
        </Col>
        <Col span={colSpans[1]}>
          <Controller
            name="config.type"
            control={control}
            rules={{
              required: errorMessages.fieldTypeRequired,
            }}
            render={({ field }) => (
              <Select
                {...field}
                required
                errors={get(errors, 'config.type')}
                data={selectOptions.fieldTypes}
                placeholder={messages.fieldTypePlaceholder}
              />
            )}
          />
        </Col>
        <Col span={colSpans[2]}>
          {configFieldTypes[fieldType] ? configFieldTypes[fieldType] : configFieldTypes.default}
        </Col>
      </Grid>
    </Box>
  );
};

export { FieldType };
