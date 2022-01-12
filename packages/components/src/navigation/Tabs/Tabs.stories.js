import React, { useState } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Box, Group, NumberInput, Paper } from '@mantine/core';
import { Paragraph } from '../../typography';
import { Tabs } from './Tabs';

import mdx from './Tabs.mdx';
import { Tab } from './Tab/Tab';
import { TabPane } from './TabPanelList/TabPane';

export default {
  title: 'Organisms/Navigation/Tabs',
  parameters: {
    component: Tabs,
    docs: {
      page: mdx,
    },
    design: {
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3629%3A23241',
      type: 'figma',
    },
  },
  argTypes: {},
};

const Template = ({ position, disabled, ...props }) => {
  const [numberOfTabs, setNumberOfTabs] = useState(3);
  return (
    <Group noWrap>
      <Box style={{ width: '80%' }}>
        <Tabs position={position} forceRender>
          {[...Array(numberOfTabs).keys()].map((i) => (
            <TabPane
              {...props}
              key={i}
              disabled={disabled}
              label={`Tab ${i}`}
              notification={i === 5 ? i : undefined}
              error={i === 2}
              warning={i === 3}
              leftIcon={<InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />}
              rightIcon={i === 3 ? <StarIcon style={{ width: 14, color: '#B9BEC4' }} /> : undefined}
            >
              <Paragraph>Content of {i}</Paragraph>
            </TabPane>
          ))}
        </Tabs>
      </Box>
      <Paper padding="md" shadow="xs" style={{ width: 150 }}>
        <NumberInput
          placeholder="Number of tabs"
          label="Number of tabs"
          value={numberOfTabs}
          onChange={(val) => setNumberOfTabs(val)}
        />
      </Paper>
    </Group>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  position: 'left',
  disabled: false,
};

const SimpleTemplate = ({ ...props }) => {
  return (
    <Tabs {...props}>
      <Tab label="First">
        <Box>
          <Paragraph>Content of First tab</Paragraph>
        </Box>
      </Tab>
      <Tab label="Second" disabled>
        <Box>
          <Paragraph>Content of Second tab</Paragraph>
        </Box>
      </Tab>
    </Tabs>
  );
};

export const SimpleTab = SimpleTemplate.bind({});
SimpleTab.args = {
  usePageLayout: true,
  panelColor: 'solid',
};
