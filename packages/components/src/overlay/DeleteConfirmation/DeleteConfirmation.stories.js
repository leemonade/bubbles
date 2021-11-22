import React, { useState } from 'react';
import { DeleteConfirmation } from './DeleteConfirmation';
import { Button, Group } from '@mantine/core';

export default {
  title: 'Overlay/Modals/DeleteConfirmation',
  parameters: {
    component: DeleteConfirmation,
  },
};

const Template = (props) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}> Delete </Button>
      </Group>
      <DeleteConfirmation
        {...props}
        opened={opened}
        onClose={() => setOpened(false)}
      />
    </>
  );
};

export const DefaultDeleteConfirmation = Template.bind({});

DefaultDeleteConfirmation.args = {
  modaltitle: 'Eliminar evento',
  description:'Deseas eliminar permanentemente el evento “Work group call for Biology class lorem ipsum”. Esta acción no puede deshacerse',
  labelCancel: 'Cancelar',
  labelDelete:'Eliminar'
};
