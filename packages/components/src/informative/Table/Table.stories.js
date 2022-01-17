import React, { useState } from 'react';
import { Box } from '@mantine/core';
import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import { Stack } from '../../layout';
import { ActionButton } from '../../form';
import { Table, TABLE_DEFAULT_PROPS } from './Table';
import mdx from './Table.mdx';

export default {
  title: 'Atoms/Informative/Table',
  parameters: {
    component: Table,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    onChangeData: { action: 'Data changed' },
  },
};

const Template = ({ data, ...props }) => {
  const [tableData, setTableData] = useState(data);
  return <Table {...props} data={tableData} onChangeData={(val) => setTableData(val.newData)} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TABLE_DEFAULT_PROPS,
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ],
  data: [
    {
      name: 'Admin',
      description:
        'General managers for the system, has a wide range of permissions except for installing and uninstalling leemons',
      actions: (
        <Stack justifyContent="end" fullWidth>
          <ActionButton tooltip="Open" icon={<ExpandDiagonalIcon />} />
        </Stack>
      ),
    },
    {
      name: 'Manager',
      description:
        'Manages platform users for administrative purposes (logins, deletions, edits and notifications)',
      actions: (
        <Stack justifyContent="end" fullWidth>
          <ActionButton tooltip="Open" icon={<ExpandDiagonalIcon />} />
        </Stack>
      ),
    },
  ],
};

export const CheckboxCell = Template.bind({});

CheckboxCell.args = {
  ...TABLE_DEFAULT_PROPS,
  columns: [
    {
      Header: 'Plugin',
      accessor: 'plugin',
    },
    {
      Header: 'View',
      accessor: 'view',
    },
    {
      Header: 'Admin',
      accessor: 'admin',
    },
  ],
  data: [
    {
      plugin: 'Classroom',
      view: { checked: true, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Calendar',
      view: { checked: true, type: 'checkbox' },
      admin: { checked: true, type: 'checkbox' },
    },
  ],
};
