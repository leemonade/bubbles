import React, { useContext } from 'react';
import { forEach, get } from 'lodash';
import { Box, Col, Grid } from '@mantine/core';
import { Controller } from 'react-hook-form';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../../typography';
import { SortableList } from '../../../../../../informative';
import { Button, TextInput } from '../../../../../../form';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';

const OptionItem = ({ value, onChange, index }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing[2],
      })}
    >
      <TextInput
        id={value.key}
        value={value.value}
        onChange={(e) => {
          onChange({ ...value, value: e });
        }}
      />
    </Box>
  );
};

const Options = ({ label, addOptionLabel }) => {
  const {
    contextRef: { errorMessages, colOptionsSpans, gridColumn, locales, defaultLocale },
    form: {
      control,
      getValues,
      setValue,
      register,
      unregister,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  function addNewOption() {
    const values = getValues('config.checkboxValues') || [];
    const key = new Date().getTime();
    values.push({ key, value: '' });
    setValue('config.checkboxValues', values);
    forEach(locales, ({ code }) => {
      const config = defaultLocale === code ? { required: errorMessages.optionFieldRequired } : {};
      register(`locales.${code}.schema.frontConfig.checkboxLabels.${key}.label`, config);
    });
  }

  function onRemove({ key }) {
    forEach(locales, ({ code }) => {
      unregister(`locales.${code}.schema.frontConfig.checkboxLabels.${key}.label`);
    });
  }

  return (
    <Box>
      <Grid columns={gridColumn}>
        <Col span={colOptionsSpans[0]}>
          <Text strong color="primary" role="productive">
            {label}
          </Text>
        </Col>

        <Col span={colOptionsSpans[1]}>
          <Controller
            name="config.checkboxValues"
            control={control}
            render={({ field }) => (
              <>
                <SortableList
                  {...field}
                  removable
                  sortable
                  error={get(errors, 'config.checkboxValues')}
                  mapKey="key"
                  render={OptionItem}
                  onRemove={onRemove}
                />
                <Box sx={(theme) => ({ marginLeft: theme.spacing[8] })}>
                  <Button variant="link" leftIcon={<AddCircleIcon />} onClick={addNewOption}>
                    {addOptionLabel}
                  </Button>
                </Box>
              </>
            )}
          />
        </Col>
      </Grid>
    </Box>
  );
};

export { Options };
