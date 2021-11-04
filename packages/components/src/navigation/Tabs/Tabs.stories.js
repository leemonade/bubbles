import React, { useState, forwardRef } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Box } from '@mantine/core';
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

const Template = ({ position, numberOfTabs, disabled, ...props }) => (
  <Tabs position={position}>
    {[...Array(numberOfTabs).keys()].map((i) => (
      <Tab
        key={i}
        {...props}
        disabled={disabled}
        label={`Tab ${i}`}
        leftIcon={<InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />}
        rightIcon={i === 3 ? <StarIcon style={{ width: 14, color: '#B9BEC4' }} /> : undefined}
      >
        <Box>
          <Paragraph>Content of {i}</Paragraph>
        </Box>
      </Tab>
    ))}
  </Tabs>
);

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  position: 'left',
  numberOfTabs: 40,
  disabled: false,
};
