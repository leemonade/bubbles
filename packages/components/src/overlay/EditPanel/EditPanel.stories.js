import React, { useState, Children } from 'react';
import { EditPanel, DrawerBody} from './EditPanel';
import { Button, Group, Box, Divider, } from '@mantine/core';
import mdx from './EditPanel.mdx'; 
import { InputWrapper } from '../../form/InputWrapper/InputWrapper'; 


export default {
  title: 'Overlay/EditPanel',
  parameters: {
    component: EditPanel,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
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
          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
        </Box>
        <Divider/>
        <Box>

          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
          <InputWrapper
            label="label"
            orientation="horizontal"
            as="input"
            description="Descripción de este campo"
          ></InputWrapper>
        </Box>
      </EditPanel>
    </>
  );
};

export const DefaultEditPanel = Template.bind({});

DefaultEditPanel.args = { 
  title: 'Edit Panel',  
  ActionBack: true,
  ActionExpand: true,
  ActionEdit: true,
  ActionDelete: true,
  ActionMore: true,
};