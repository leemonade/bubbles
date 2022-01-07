import React, { useContext } from 'react';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import FieldConfigLocaleContext from '../context/FieldConfigLocale';
import { Text } from '../../../../../../typography';
import { Controller } from 'react-hook-form';
import { TextInput } from '../../../../../../form';
import { get } from 'lodash';

const SelectPlaceholder = ({ label }) => {
  const {
    contextRef: { gridColumn, colSpans },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);
  const {
    currentLocale: { code },
    currentLocaleIsDefaultLocale,
  } = useContext(FieldConfigLocaleContext);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <Grid columns={gridColumn} align="center">
        <Col span={colSpans[0]}>
          <Text strong color="primary" role="productive">
            {label}
          </Text>
        </Col>

        <Col span={colSpans[1] + colSpans[2]}>
          <Controller
            name={`locales.${code}.schema.selectPlaceholder`}
            control={control}
            render={({ field }) => (
              <TextInput
                required={currentLocaleIsDefaultLocale}
                error={get(errors, `locales.${code}.schema.selectPlaceholder`)}
                {...field}
              />
            )}
          />
        </Col>
      </Grid>
    </Box>
  );
};

export { SelectPlaceholder };
