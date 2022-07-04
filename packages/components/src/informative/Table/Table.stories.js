import React, { useState } from 'react';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3652%3A33521',
    },
  },
  argTypes: {
    onChangeData: { action: 'Data changed' },
  },
};

const Template = ({ data, onChangeData, ...props }) => {
  const [tableData, setTableData] = useState(data);
  return (
    <Table
      {...props}
      data={tableData}
      onChangeData={(val) => {
        onChangeData(val);
        setTableData(val.newData);
      }}
    />
  );
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
      Header: 'Edit',
      accessor: 'edit',
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
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Calendar',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: true, type: 'checkbox' },
    },
    {
      plugin: 'Calendar - Kanban',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Academic Portfolio',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: true, type: 'checkbox' },
    },
    {
      plugin: 'Academic Portfolio - Programs',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Academic Portfolio - Subjects',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Academic Portfolio - Tree',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Centers',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Users',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
    {
      plugin: 'Users - Profiles',
      view: { checked: false, type: 'checkbox' },
      edit: { checked: false, type: 'checkbox' },
      admin: { checked: false, type: 'checkbox' },
    },
  ],
};
