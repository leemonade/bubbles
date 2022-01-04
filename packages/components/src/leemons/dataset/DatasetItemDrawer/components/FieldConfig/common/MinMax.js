import React, { useContext } from 'react';
import { get } from 'lodash';
import { Box, Col, Grid } from '@mantine/core';

import { Controller } from 'react-hook-form';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { Text } from '../../../../../../typography';
import { NumberInput } from '../../../../../../form';

const MinMax = ({ label, minLabel, maxLabel, min, max, children }) => {
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
            {label}
          </Text>
        </Col>

        <Col span={40}>
          <Grid columns={100} align="center">
            <Col span={50}>
              <Grid columns={100} align="center">
                <Col span={30}>
                  <Text color="primary" role="productive">
                    {minLabel}
                  </Text>
                </Col>
                <Col span={70}>
                  <Controller
                    name={min}
                    control={control}
                    render={({ field }) => <NumberInput error={get(errors, min)} {...field} />}
                  />
                </Col>
              </Grid>
            </Col>
            <Col span={50}>
              <Grid columns={100} align="center">
                <Col span={30}>
                  <Text color="primary" role="productive">
                    {maxLabel}
                  </Text>
                </Col>
                <Col span={70}>
                  <Controller
                    name={max}
                    control={control}
                    render={({ field }) => <NumberInput error={get(errors, max)} {...field} />}
                  />
                </Col>
              </Grid>
            </Col>
          </Grid>
        </Col>
        <Col span={40}>{children}</Col>
      </Grid>
    </Box>
  );
};

export { MinMax };
