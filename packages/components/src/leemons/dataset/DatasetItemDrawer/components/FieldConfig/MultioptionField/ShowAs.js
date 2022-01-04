import React, { useContext } from 'react';
import { get } from 'lodash';
import { Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../../typography';
import { Select } from '../../../../../../form';
import { Controller } from 'react-hook-form';

const ShowAs = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Grid columns={100} align="center">
      <Col span={20}>
        <Text strong color="primary" role="productive">
          {messages.multioptionShowAsLabel}
        </Text>
      </Col>

      <Col span={40}>
        <Controller
          name="config.uiType"
          control={control}
          rules={{
            required: errorMessages.multioptionShowAsRequired,
          }}
          render={({ field }) => (
            <Select
              {...field}
              required
              errors={get(errors, 'config.type')}
              data={selectOptions.fieldMultioptionShowAs}
              placeholder={messages.fieldMultioptionShowAsPlaceholder}
            />
          )}
        />
      </Col>
    </Grid>
  );
};

export { ShowAs };
