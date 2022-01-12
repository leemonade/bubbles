import React, { useContext } from 'react';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../../context/DatasetItemDrawerContext';
import { TextField } from './TextField';
import { RichTextField } from './RichTextField';
import { DateField } from './DateField';
import { MultioptionField } from './MultioptionField';
import { BooleanField } from './BooleanField';
import { SelectField } from './SelectField';
import { UserField } from './UserField';

const configFieldTypes = {
  text_field: <TextField />,
  rich_text: <RichTextField />,
  number: null,
  date: <DateField />,
  email: null,
  phone: null,
  link: null,
  multioption: <MultioptionField />,
  boolean: <BooleanField />,
  select: <SelectField />,
  user: <UserField />,
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
