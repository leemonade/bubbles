import React, { useContext } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { Title } from '../../../../../typography';
import { TranslatorTabs } from '../../../../multilanguage';

const configFieldTypes = {
  text_field: null,
  rich_text: null,
  number: null,
  date: null,
  email: null,
  phone: null,
  link: null,
  multioption: null,
  boolean: null,
  select: null,
  user: null,
  default: null,
};

const FieldConfigLocaleItem = (props) => {
  console.log(props);
  return <Box>Hola</Box>;
};

const FieldConfigLocale = () => {
  const {
    contextRef: { messages, locales, defaultLocale },
    form: { watch },
  } = useContext(DatasetItemDrawerContext);

  const fieldType = watch('config.type');

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[5] })}>
      <Title order={4}>{messages.fieldConfigLocaleTitle}</Title>
      <TranslatorTabs locales={locales} defaultLocale={defaultLocale}>
        <FieldConfigLocaleItem />
      </TranslatorTabs>
    </Box>
  );
};

export { FieldConfigLocale };
