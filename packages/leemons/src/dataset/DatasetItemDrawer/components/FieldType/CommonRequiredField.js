import React, { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { Col, Grid, Checkbox } from '@bubbles-ui/components';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';

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
