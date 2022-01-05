import React, { useContext } from 'react';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../context/DatasetItemDrawerContext';
import { Text } from '../../../../typography';
import { Controller } from 'react-hook-form';
import { MultiSelect } from '../../../../form/MultiSelect';

const Centers = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions, colSpans, gridColumn },
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
      <Grid columns={gridColumn} align="center">
        <Col span={colSpans[0]}>
          <Text strong color="primary" role="productive">
            {messages.centerLabel}
          </Text>
        </Col>
        <Col span={colSpans[1]}>
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
