import React, { useState } from 'react';
import { DetailPanel } from './DetailPanel';
import { Group, Box, Divider } from '@mantine/core';
import { TabPanel, Tabs } from '../../navigation';
import { Button } from '../../form';
import mdx from './DetailPanel.mdx';

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
          <TabPanel key="1" label="Family">
            <Box></Box>
          </TabPanel>
          <TabPanel key="2" label="Notes">
            <Box></Box>
          </TabPanel>
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
