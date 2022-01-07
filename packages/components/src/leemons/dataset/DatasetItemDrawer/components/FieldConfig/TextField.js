import React, { useContext } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Checkbox } from '../../../../../form';
import { Controller } from 'react-hook-form';
import { MinMax } from './common/MinMax';

const TextField = () => {
  const {
    contextRef: { messages },
    form: {
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <MinMax
        label={messages.fieldLengthLabel}
        minLabel={messages.fieldLengthMinLabel}
        maxLabel={messages.fieldLengthMaxLabel}
        min="config.minLength"
        max="config.maxLength"
      >
        <Controller
          name="config.onlyNumbers"
          control={control}
          render={({ field }) => (
            <Checkbox label={messages.fieldLengthOnlyNumbersLabel} {...field} />
          )}
        />
      </MinMax>
    </Box>
  );
};

export { TextField };
