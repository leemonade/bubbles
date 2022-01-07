import React, { useContext, useEffect, useState } from 'react';
import { keyBy, map } from 'lodash';
import { Box } from '@mantine/core';
import update from 'immutability-helper';
import DatasetItemDrawerContext from '../context/DatasetItemDrawerContext';
import { Title } from '../../../../typography';
import { Table } from '../../../../informative';

const Permissions = () => {
  const [data, setData] = useState([]);

  const {
    contextRef: { messages, errorMessages, profiles, selectOptions, colSpans, gridColumn },
    form: {
      setValue,
      getValues,
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  const tableHeaders = [
    {
      Header: messages.permissionsProfileLabel,
      accessor: 'name',
      className: 'text-left',
    },
    {
      Header: messages.permissionsViewLabel,
      accessor: 'view',
    },
    {
      Header: messages.permissionsEditLabel,
      accessor: 'edit',
    },
  ];

  useEffect(() => {
    // ES: Cada vez que se modifique algo de los permisos lo comunicamos arriba
    setValue(
      'config.permissions',
      map(data, (profile) => ({
        id: profile.id,
        roles: profile.roles,
        view: profile.view.checked,
        edit: profile.edit.checked,
      }))
    );
  }, [data]);

  function onChangeData(event) {
    if (event.changedField === 'view') {
      if (event.newData[event.itemIndex].edit.checked) {
        setTimeout(() => {
          setData({
            profiles: update(event.newData, {
              [event.itemIndex]: {
                view: { checked: { $set: true } },
              },
            }),
          });
        }, 10);
      }
    }
    if (event.changedField === 'edit') {
      if (event.newItem.checked) {
        setData({
          profiles: update(event.newData, {
            [event.itemIndex]: {
              view: { checked: { $set: true } },
            },
          }),
        });
      }
    }
  }

  useEffect(() => {
    let itemProfilesById = keyBy(getValues('config.permissions'), 'id');
    // ES: Seteamos los perfiles con las opciones que hubiera guardadas si no habia dejamos a false
    setData(
      map(profiles, (profile) => ({
        ...profile,
        view: {
          type: 'checkbox',
          checked: itemProfilesById[profile.id]?.view || false,
        },
        edit: {
          type: 'checkbox',
          checked: itemProfilesById[profile.id]?.edit || false,
        },
      }))
    );
  }, [profiles]);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[5] })}>
      <Title order={4}>{messages.fieldPermissionsTitle}</Title>
      <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
        <Table columns={tableHeaders} data={data} setData={setData} onChangeData={onChangeData} />
      </Box>
    </Box>
  );
};

export { Permissions };
