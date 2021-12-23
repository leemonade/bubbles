import React, { useState } from 'react';
import { DetailPanel } from './DetailPanel';
import { Group, Box, Divider } from '@mantine/core';

import { Button } from '../../form';
import mdx from './DetailPanel.mdx';
import { Tabs } from '../../navigation/Tabs/Tabs';
import { TabPane as Tab } from '../../navigation/Tabs/TabPanelList/TabPane';

export default {
  title: 'Organisms/Overlay/Panels/Details',
  parameters: {
    component: DetailPanel,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    layoutButtonsRight: { control: { type: 'boolean' } },
    ActionBack: { control: { type: 'boolean' } },
    ActionExpand: { control: { type: 'boolean' } },
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
          <Tab key="1" label="Family">
            <Box></Box>
          </Tab>
          <Tab key="2" label="Notes">
            <Box></Box>
          </Tab>
        </Tabs>
      </DetailPanel>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  layoutButtonsRight: false,
  title: '',
  ActionBack: true,
  LabelActionBack: 'Back',
  ActionExpand: true,
  LabelActionExpand: 'Expand',
};
