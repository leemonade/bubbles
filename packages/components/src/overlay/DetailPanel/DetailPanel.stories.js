import React, { useState  } from 'react';
import { DetailPanel } from './DetailPanel';
import { Button, Group, Box, Divider, } from '@mantine/core';
import mdx from './DetailPanel.mdx'; 
import { InputWrapper } from '../../form/InputWrapper/InputWrapper'; 
import Translator from './../../leemons/Translator/Translator'
import { Tabs } from '../../navigation/Tabs/Tabs';
import { TabPane as Tab } from '../../navigation/Tabs/TabPanelList/TabPane';


export default {
  title: 'Overlay/Panels/Details',
  parameters: {
    component: DetailPanel,
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
        <Button onClick={() => setOpened(true)}>Open Details Panel</Button>
      </Group>
      <DetailPanel
        {...props}
        opened={opened}
        onClose={() => setOpened(false)}
        DetailPanelTitle={props.title}
      >
        <Tabs>
          <Tab
            key="1"
            label="Family"
          >
            <Box>
              
            </Box>
          </Tab>
          <Tab key="2" label="Notes">
            <Box>
               
            </Box>
          </Tab>
 
        </Tabs>
      </DetailPanel>
    </>
  );
};

export const DefaultDetailPanel = Template.bind({});

DefaultDetailPanel.args = { 
  title: '',  
  ActionBack: true,
  ActionExpand: true,
  ActionEdit: true,
  ActionDelete: true,
  ActionMore: true,
};