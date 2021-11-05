import React, { useState, forwardRef } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Box, Paper, Group, NumberInput } from '@mantine/core';
import { Paragraph } from './../../typography';
import { Tabs } from './Tabs';
import { TabPane as Tab } from './TabPanelList/TabPane';
import mdx from './Tabs.mdx';

export default {
  title: 'Navigation/Tabs',
  parameters: {
    component: Tabs,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = ({ position, disabled, ...props }) => {
  const [numberOfTabs, setNumberOfTabs] = useState(40);
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

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  position: 'left',
  disabled: false,
};
