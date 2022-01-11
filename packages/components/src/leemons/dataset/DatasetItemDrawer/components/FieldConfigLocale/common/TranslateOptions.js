import React, { useContext, useEffect } from 'react';
import { forEach, get, isArray, isEqual } from 'lodash';
import { Box, Col, Grid } from '@mantine/core';
import DatasetItemDrawerContext from '../../../context/DatasetItemDrawerContext';
import FieldConfigLocaleContext from '../context/FieldConfigLocale';
import { Text, Title } from '../../../../../../typography';
import { Button, TextInput } from '../../../../../../form';
import { Stack } from '../../../../../../layout';
import { Drawer } from '../../../../../../overlay';
import { IconError, IconSuccess, IconWarning } from '../../../../../../assets/FaticIcons';
import { Controller } from 'react-hook-form';

const TranslateOptions = () => {
  const {
    contextRef,
    render,
    form: {
      watch,
      setValue,
      getValues,
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  const {
    currentLocale: { code, label },
    currentLocaleIsDefaultLocale,
  } = useContext(FieldConfigLocaleContext);

  const { messages, errorMessages, translateOptionsModalOpened } = contextRef;

  const labelsKey = `locales.${code}.schema.frontConfig.checkboxLabels`;

  const hasErrors = !!get(errors, labelsKey);
  const hasWarnings = currentLocaleIsDefaultLocale;

  const checkboxValues = watch('config.checkboxValues');

  const opened = translateOptionsModalOpened[code];

  function setOpened(val) {
    contextRef.translateOptionsModalOpened[code] = val;
    render();
  }

  useEffect(() => {
    if (isArray(checkboxValues)) {
      const checkboxLabels = getValues(labelsKey);
      const checkLabels = {};
      forEach(checkboxValues, ({ key }) => {
        if (!checkboxLabels || !checkboxLabels[key]) {
          checkLabels[key] = { key, label: '' };
        } else {
          checkLabels[key] = checkboxLabels[key];
        }
      });
      if (!isEqual(checkLabels, checkboxLabels)) {
        setValue(`locales.${code}.schema.frontConfig.checkboxLabels`, checkLabels);
      }
    }
  }, [JSON.stringify(checkboxValues)]);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
      <Stack direction="row" alignItems="baseline" spacing={4}>
        <Stack alignItems="center">
          <Button variant="link" onClick={() => setOpened(true)}>
            {messages.translateOptionsButtonLabel}
          </Button>
          {hasErrors ? <IconError /> : hasWarnings ? <IconWarning /> : <IconSuccess />}
        </Stack>
        <Text role="productive" size="xs">
          {messages.translateOptionsHelpLabel}
        </Text>
      </Stack>
      <Drawer opened={opened} onClose={() => setOpened(false)} size={715} close>
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
              return (
                <Grid columns={100} align="center">
                  <Col span={35}>
                    <Text>{value}</Text>
                  </Col>
                  <Col span={65}>
                    <Controller
                      name={`locales.${code}.schema.frontConfig.checkboxLabels.${key}.label`}
                      control={control}
                      rules={
                        currentLocaleIsDefaultLocale
                          ? {
                              required: errorMessages.localeLabelRequired,
                            }
                          : {}
                      }
                      render={({ field }) => (
                        <TextInput
                          required={currentLocaleIsDefaultLocale}
                          error={get(
                            errors,
                            `locales.${code}.schema.frontConfig.checkboxLabels.${key}.label`
                          )}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Grid>
              );
            })
          : null}
        <Box sx={(theme) => ({ marginTop: theme.spacing[4], alignItems: 'end' })}>
          <Button onClick={() => setOpened(false)}>
            {messages.translateOptionsContinueButtonLabel}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export { TranslateOptions };
