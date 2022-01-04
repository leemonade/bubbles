import React, { useContext } from 'react';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../context/DatasetItemDrawerContext';
import { Text } from '../../../../typography';
import { Controller } from 'react-hook-form';
import { MultiSelect } from '../../../../form/MultiSelect';

const Centers = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions },
    form: {
      setValue,
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  function onChange(newValue) {
    const index = newValue.indexOf('*');
    if (index > 0) {
      setValue('config.centers', ['*']);
      setValue('config.isAllCenterMode', true);
    } else {
      if (index === 0) newValue.splice(index, 1);
      setValue('config.centers', newValue);
      setValue('config.isAllCenterMode', false);
    }
  }

  return (
    <Box>
      <Grid columns={100} align="center">
        <Col span={20}>
          <Text strong color="primary" role="productive">
            {messages.centerLabel}
          </Text>
        </Col>
        <Col span={40}>
          <Controller
            name="config.centers"
            control={control}
            rules={{
              required: errorMessages.nameRequired,
            }}
            render={({ field }) => (
              <MultiSelect
                {...field}
                required
                errors={errors.centers}
                data={selectOptions.centers}
                onChange={onChange}
              />
            )}
          />
        </Col>
      </Grid>
    </Box>
  );
};

export { Centers };
