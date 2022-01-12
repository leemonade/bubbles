import React, { useContext } from 'react';
import { Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Controller } from 'react-hook-form';
import { Checkbox } from '../../../../../form';

const CommonRequiredField = () => {
  const {
    contextRef: { messages },
    form: { control },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Grid columns={100} align="center">
      <Col span={50}>
        <Controller
          name="config.required"
          control={control}
          render={({ field }) => <Checkbox label={messages.textFieldRequiredLabel} {...field} />}
        />
      </Col>
    </Grid>
  );
};

export { CommonRequiredField };
