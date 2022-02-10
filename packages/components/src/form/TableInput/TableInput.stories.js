import React from 'react';
import { find } from 'lodash';
import { TableInput } from './TableInput';
import { NumberInput, Select, TextInput } from '../../form';
import { ContextContainer } from '../../layout';
import mdx from './TableInput.mdx';
import { TABLE_INPUT_DEFAULT_PROPS } from './TableInput.const';

export default {
  title: 'Organisms/Form/TableInput',
  parameters: {
    component: TableInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/%F0%9F%8D%8B-App-Opensource?node-id=157%3A41880',
    },
  },
  argTypes: {
    onChangeData: { action: 'Data changed' },
  },
};

const Template = ({ ...props }) => {
  return (
    <ContextContainer title="Subjects" description="Standard duration of subjects">
      <TableInput {...props} />
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

const PERIOD_TYPES = [
  { label: 'Month', value: 'month' },
  { label: 'Semester', value: 'semester' },
];

Playground.args = {
  ...TABLE_INPUT_DEFAULT_PROPS,
  columns: [
    {
      Header: 'Period name',
      accessor: 'name',
      input: {
        node: <TextInput />,
        rules: { required: 'Required field' },
      },
    },
    {
      Header: 'Number of periods',
      accessor: 'amount',
      input: {
        node: <NumberInput />,
        rules: { required: 'Required field' },
      },
    },
    {
      Header: 'Period type',
      accessor: 'type',
      input: {
        node: <Select />,
        rules: { required: 'Required field' },
        data: PERIOD_TYPES,
      },
      valueRender: (value) => find(PERIOD_TYPES, { value })['label'],
    },
  ],
  data: [
    {
      id: 1,
      name: 'Anual subject',
      amount: 2,
      type: 'semester',
    },
    {
      id: 2,
      name: 'Bi-monthly subject',
      amount: 2,
      type: 'month',
    },
  ],
  labels: {
    add: 'Add',
    remove: 'Remove',
    edit: 'Edit',
    accept: 'Accept',
    cancel: 'Cancel',
  },
};
