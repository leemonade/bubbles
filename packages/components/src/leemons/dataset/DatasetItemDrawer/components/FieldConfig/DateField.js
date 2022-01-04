import React, { useContext } from 'react';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../typography';
import { Controller } from 'react-hook-form';

const DateField = () => {
  const {
    contextRef: { messages },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <Grid columns={100} align="center">
        <Col span={20}>
          <Text strong color="primary" role="productive">
            {messages.fieldDateLabel}
          </Text>
        </Col>

        <Col span={40}>
          <Grid columns={100} align="center">
            <Col span={50}>
              <Grid columns={100} align="center">
                <Col span={30}>
                  <Text color="primary" role="productive">
                    {messages.fieldDateMinLabel}
                  </Text>
                </Col>
                <Col span={70}>
                  <Controller
                    name="config.minDate"
                    control={control}
                    render={({ field }) => <>Min date here</>}
                  />
                </Col>
              </Grid>
            </Col>
            <Col span={50}>
              <Grid columns={100} align="center">
                <Col span={30}>
                  <Text color="primary" role="productive">
                    {messages.fieldDateMaxLabel}
                  </Text>
                </Col>
                <Col span={70}>
                  <Controller
                    name="config.maxDate"
                    control={control}
                    render={({ field }) => <>Max date here</>}
                  />
                </Col>
              </Grid>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </Box>
  );
};

export { DateField };
