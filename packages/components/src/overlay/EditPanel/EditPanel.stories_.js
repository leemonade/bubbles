import React, { useState } from 'react';
import { Group, Divider } from '@mantine/core';
import { Box } from '../../layout';
import { Button, InputWrapper } from '../../form';
import { EditPanel } from './EditPanel';
import mdx from './EditPanel.mdx';

export default {
  title: 'Organisms/Overlay/Panels/Edit',
  parameters: {
    component: EditPanel,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    layoutButtonsRight: { control: { type: 'boolean' } },
    ActionBack: { control: { type: 'boolean' } },
    ActionExpand: { control: { type: 'boolean' } },
    ActionEdit: { control: { type: 'boolean' } },
    ActionDelete: { control: { type: 'boolean' } },
    ActionMore: { control: { type: 'boolean' } },
  },
};

const Template = (props) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Edit Panel</Button>
      </Group>
      <EditPanel
        {...props}
        opened={opened}
        onClose={() => setOpened(false)}
        EditPanelTitle={props.title}
      >
        <Box>
          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
        </Box>
        <Divider />
      </EditPanel>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  layoutButtonsRight: false,
  title: 'Edit Panel',
  ActionBack: true,
  LabelActionBack: 'Back',
  ActionExpand: true,
  LabelActionExpand: 'Expand',
  ActionEdit: true,
  LabelActionEdit: 'Edit',
  ActionDelete: true,
  LabelActionDelete: 'Delete',
  ActionMore: true,
  LabelActionMore: 'More',
};
