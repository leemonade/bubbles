import React, { useContext } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { CommonRequiredField } from '../FieldType/CommonRequiredField';
import { TextField } from './TextField';
import { RichTextField } from './RichTextField';
import { DateField } from './DateField';
import { MultioptionField } from './MultioptionField';

const configFieldTypes = {
  text_field: <TextField />,
  rich_text: <RichTextField />,
  number: null,
  date: <DateField />,
  email: null,
  phone: null,
  link: null,
  multioption: <MultioptionField />,
  boolean: <CommonRequiredField />,
  select: <CommonRequiredField />,
  user: <CommonRequiredField />,
  default: null,
};

const FieldConfig = () => {
  const {
    form: { watch },
  } = useContext(DatasetItemDrawerContext);

  const fieldType = watch('config.type');

  return (
    <Box>
      {configFieldTypes[fieldType] ? configFieldTypes[fieldType] : configFieldTypes.default}
    </Box>
  );
};

export { FieldConfig };
