import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import { Box } from '@mantine/core';
import DatasetItemDrawerContext from '../context/DatasetItemDrawerContext';
import { Title } from '../../../../typography';
import { Table } from '../../../../informative';

const Permissions = () => {
  const {
    contextRef: { messages, errorMessages, selectOptions, colSpans, gridColumn },
    form: {
      setValue,
      control,
      formState: { errors },
    },
  } = useContext(DatasetItemDrawerContext);

  // config.permissions

  const tableHeaders = useMemo(
    () => [
      {
        Header: t('profile'),
        accessor: 'name',
        className: 'text-left',
      },
      {
        Header: t('view'),
        accessor: 'view',
      },
      {
        Header: t('edit'),
        accessor: 'edit',
      },
    ],
    [t]
  );

  function onChangeData(event) {
    if (event.changedField === 'view') {
      if (event.newData[event.itemIndex].edit.checked) {
        setTimeout(() => {
          setStateProfiles({
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
        setStateProfiles({
          profiles: update(event.newData, {
            [event.itemIndex]: {
              view: { checked: { $set: true } },
            },
          }),
        });
      }
    }
  }

  let itemProfilesById = {};
  if (item && item.frontConfig) {
    itemProfilesById = _.keyBy(item.frontConfig.permissions, 'id');
  }
  // ES: Seteamos los perfiles con las opciones que hubiera guardadas si no habia dejamos a false
  setStateProfiles({
    profiles: map(data.items, (profile) => ({
      ...profile,
      view: {
        type: 'checkbox',
        checked: itemProfilesById[profile.id]?.view || false,
      },
      edit: {
        type: 'checkbox',
        checked: itemProfilesById[profile.id]?.edit || false,
      },
    })),
  });

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing[5] })}>
      <Title order={4}>{messages.fieldPermissionsTitle}</Title>
      <Table
        columns={tableHeaders}
        data={profiles}
        setData={setProfiles}
        onChangeData={onChangeData}
      />
    </Box>
  );
};

export { Permissions };
