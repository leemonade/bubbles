import React, { useState, forwardRef } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Box, Paper, Group, NumberInput } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Paragraph } from './../../typography';
import { PageContainer } from './../../layout';
import { Tabs } from './Tabs';
import { TabPane as Tab } from './TabPanelList/TabPane';
import mdx from './Tabs.mdx';

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
  const [numberOfTabs, setNumberOfTabs] = useState(10);
  return (
    <Group noWrap>
      <Box style={{ width: '80%' }}>
        <Tabs position={position}>
          {[...Array(numberOfTabs).keys()].map((i) => (
            <Tab
              key={i}
              {...props}
              disabled={disabled}
              label={`Tab ${i}`}
              notification={i === 5 ? i : undefined}
              hasError={i === 2}
              leftIcon={<InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />}
              rightIcon={i === 3 ? <StarIcon style={{ width: 14, color: '#B9BEC4' }} /> : undefined}
            >
              <Box>
                <Paragraph>Content of {i}</Paragraph>
              </Box>
            </Tab>
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
