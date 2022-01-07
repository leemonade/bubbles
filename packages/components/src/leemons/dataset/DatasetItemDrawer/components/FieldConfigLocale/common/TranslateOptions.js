import React, { useContext, useEffect, useState } from 'react';
import { findIndex, forEach, isArray, isEqual } from 'lodash';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import FieldConfigLocaleContext from '../context/FieldConfigLocale';
import { Text, Title } from '../../../../../../typography';
import { Button, TextInput } from '../../../../../../form';
import { Stack } from '../../../../../../layout';
import { Drawer } from '../../../../../../overlay';

const TranslateOptions = () => {
  const [opened, setOpened] = useState(false);
  const {
    contextRef: { messages, errorMessages, selectOptions, gridColumn, colSpans },
    form: {
      watch,
      setValue,
      getValues,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);
  const {
    currentLocale: { code, label },
  } = useContext(FieldConfigLocaleContext);

  const checkboxValues = watch('config.checkboxValues');
  const checkboxLabels = watch(`locales.${code}.schema.frontConfig.checkboxLabels`);

  function getLabelIndexByKey(key) {
    return findIndex(checkboxLabels, ({ key: _key }) => key === _key);
  }

  function inputCheckboxChange(event, index) {
    const value = getValues(`locales.${code}.schema.frontConfig.checkboxLabels`);
    value[index].label = event.target.value;
    setValue(`locales.${code}.schema.frontConfig.checkboxLabels`, value);
  }

  useEffect(() => {
    if (isArray(checkboxValues)) {
      const checkLabels = [];
      forEach(checkboxValues, ({ key }) => {
        const index = getLabelIndexByKey(key);
        if (index < 0) {
          checkLabels.push({ key, label: '' });
        } else {
          checkLabels.push(checkboxLabels[index]);
        }
      });
      if (!isEqual(checkLabels, checkboxLabels)) {
        setValue(`locales.${code}.schema.frontConfig.checkboxLabels`, checkLabels);
      }
    }
  }, [checkboxValues]);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <Stack direction="row" alignItems="baseline" spacing={4}>
        <Box>
          <Button variant="link" onClick={() => setOpened(true)}>
            {messages.translateOptionsButtonLabel}
          </Button>
        </Box>
        <Text role="productive" size="xs">
          {messages.translateOptionsHelpLabel}
        </Text>
      </Stack>
      <Drawer opened={opened} onClose={() => setOpened(false)} size={715} close noOverlay>
        <Title order={4}>{messages.translateOptionsModalTitle}</Title>
        <Box sx={(theme) => ({ marginTop: theme.spacing[4], marginBottom: theme.spacing[4] })}>
          <Text>{messages.translateOptionsModalDescription}</Text>
        </Box>
        <Box sx={(theme) => ({ marginBottom: theme.spacing[4] })}>
          <Grid columns={100}>
            <Col span={35}>
              <Text color="primary">{messages.translateOptionsValueColLabel}</Text>
            </Col>
            <Col span={65}>
              <Text color="primary">
                {messages.translateOptionsTranslationColLabel.replace('{code}', label)}
              </Text>
            </Col>
          </Grid>
        </Box>
        {checkboxValues
          ? checkboxValues.map(({ key, value }) => {
              const index = getLabelIndexByKey(key);

              if (index < 0) return null;

              const labelValue = getValues(
                `locales.${code}.schema.frontConfig.checkboxLabels[${index}].label`
              );

              return (
                <Grid columns={100} align="center">
                  <Col span={35}>
                    <Text>{value}</Text>
                  </Col>
                  <Col span={65}>
                    <TextInput value={labelValue} onChange={(e) => inputCheckboxChange(e, index)} />
                  </Col>
                </Grid>
              );
            })
          : null}
      </Drawer>
    </Box>
  );
};

export { TranslateOptions };
