import React, { useContext } from 'react';
import { get } from 'lodash';
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
          onChange({ ...value, value: e.target.value });
        }}
      />
    </Box>
  );
};

const Options = ({ label, addOptionLabel }) => {
  const {
    contextRef: { colOptionsSpans, gridColumn },
    form: {
      control,
      getValues,
      setValue,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  function addNewOption() {
    const values = getValues('config.checkboxValues') || [];
    values.push({ key: new Date().getTime(), value: '' });
    setValue('config.checkboxValues', values);
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
                  errors={get(errors, 'config.checkboxValues')}
                  mapKey="key"
                  render={OptionItem}
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
