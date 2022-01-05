import React, { useContext, useEffect } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Divider } from '../../../../../layout';
import { Options } from './common/Options';

const SelectField = () => {
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
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box sx={(theme) => ({ marginTop: theme.spacing[2] })}>
        <Options
          label={messages.fieldSelectOptionsLabel}
          addOptionLabel={messages.fieldSelectAddOptionsLabel}
        />
      </Box>
    </Box>
  );
};

export { SelectField };
