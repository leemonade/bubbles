import React, { useContext } from 'react';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../../typography';

const Options = ({ label }) => {
  const {
    contextRef: { messages },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Box>
      <Grid columns={100} align="center">
        <Col span={20}>
          <Text strong color="primary" role="productive">
            {label}
          </Text>
        </Col>

        <Col span={40}>
          {/*
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
          */}
        </Col>
      </Grid>
    </Box>
  );
};

export { Options };
