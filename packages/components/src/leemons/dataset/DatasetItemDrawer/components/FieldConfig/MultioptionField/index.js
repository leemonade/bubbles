import React, { useContext, useEffect } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import { ShowAs } from './ShowAs';
import { MinMax } from '../common/MinMax';
import { Divider } from '../../../../../../layout';
import { Options } from '../common/Options';

const MultioptionField = () => {
  const {
    contextRef: { messages, classes },
    form: { watch, unregister },
  } = useContext(DatasetItemDrawerContext);

  const uiType = watch('config.uiType');

  useEffect(() => {
    const subscription = watch(({ config: { uiType } }, { name }) => {
      if (name === 'config.uiType' && uiType === 'radio') {
        unregister('config.minItems');
        unregister('config.maxItems');
      }
    });
    return () => subscription.unsubscribe();
  }, [uiType]);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <ShowAs />
      {uiType && uiType !== 'radio' ? (
        <MinMax
          label={messages.fieldMultioptionLimitsLabel}
          minLabel={messages.fieldMultioptionLimitsMinLabel}
          maxLabel={messages.fieldMultioptionLimitsMaxLabel}
          min="config.minItems"
          max="config.maxItems"
        />
      ) : null}

      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
        <Options />
      </Box>
    </Box>
  );
};

export { MultioptionField };
