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
  text_field: ['config.required', 'config.masked'],
  rich_text: ['config.required'],
  number: ['config.required'],
  date: ['config.required'],
  email: ['config.required'],
  phone: ['config.required'],
  link: ['config.required'],
  multioption: ['config.required'],
  boolean: ['config.required'],
  select: ['config.required'],
  user: ['config.required'],
};

const FieldType = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions },
    form: {
      watch,
      control,
      unregister,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  const fieldType = watch('config.type');

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
      <Grid columns={100} align="center">
        <Col span={20}>
          <Text strong color="primary">
            {messages.fieldTypeLabel}
          </Text>
        </Col>
        <Col span={40}>
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
        <Col span={40}>
          {configFieldTypes[fieldType] ? configFieldTypes[fieldType] : configFieldTypes.default}
        </Col>
      </Grid>
    </Box>
  );
};

export { FieldType };
