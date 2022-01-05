import React, { useContext } from 'react';
import { get } from 'lodash';
import { Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../../typography';
import { Select } from '../../../../../../form';
import { Controller } from 'react-hook-form';

const ShowAs = ({ label, required, data, placeholder }) => {
  const {
    contextRef: { colSpans, gridColumn },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Grid columns={gridColumn} align="center">
      <Col span={colSpans[0]}>
        <Text strong color="primary" role="productive">
          {label}
        </Text>
      </Col>

      <Col span={colSpans[1]}>
        <Controller
          name="config.uiType"
          control={control}
          rules={{
            required: required,
          }}
          render={({ field }) => (
            <Select
              {...field}
              required
              errors={get(errors, 'config.uiType')}
              data={data}
              placeholder={placeholder}
            />
          )}
        />
      </Col>
    </Grid>
  );
};

export { ShowAs };
