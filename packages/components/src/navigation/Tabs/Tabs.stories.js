import React, { useState } from 'react';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/solid';
import { Group, NumberInput } from '@mantine/core';
import { Box, Paper } from './../../layout';
import { Paragraph } from './../../typography';
import { TabPanel } from './TabPanelList/TabPanel';
import { Tabs } from './Tabs';
import mdx from './Tabs.mdx';

export default {
  title: 'BB1/Tabs',
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
          <Box>
            <Box>
              {[...Array(numberOfTabs).keys()].map((i) => (
                <TabPanel
                  {...props}
                  key={i}
                  disabled={disabled}
                  label={`Tab ${i}`}
                  notification={i === 5 ? i : undefined}
                  error={i === 2}
                  warning={i === 3}
                  leftIcon={<InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />}
                  rightIcon={
                    i === 3 ? <StarIcon style={{ width: 14, color: '#B9BEC4' }} /> : undefined
                  }
                >
                  <Paragraph>Content of {i}</Paragraph>

                  <Box style={{ width: '80%' }}>
                    <Tabs position={position} forceRender>
                      <Box>
                        <Box>
                          {[...Array(numberOfTabs).keys()].map((i) => (
                            <TabPanel
                              {...props}
                              key={i}
                              disabled={disabled}
                              label={`Tab ${i}`}
                              notification={i === 5 ? i : undefined}
                              error={i === 2}
                              warning={i === 3}
                              leftIcon={
                                <InformationCircleIcon style={{ width: 14, color: '#B9BEC4' }} />
                              }
                              rightIcon={
                                i === 3 ? (
                                  <StarIcon style={{ width: 14, color: '#B9BEC4' }} />
                                ) : undefined
                              }
                            >
                              <Paragraph>Content of {i}</Paragraph>
                            </TabPanel>
                          ))}
                        </Box>
                      </Box>
                    </Tabs>
                  </Box>
                </TabPanel>
              ))}
            </Box>
          </Box>
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

const SimpleTemplate = ({ position, disabled, ...props }) => {
  return (
    <Box style={{ height: '100vh', margin: -15 }}>
      <Paper style={{ width: 400 }} fullHeight>
        <Tabs {...props} fullHeight>
          <TabPanel label="First">
            <Box>
              {[...Array(5).keys()].map((i) => (
                <Paragraph key={`p${i}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Paragraph>
              ))}
            </Box>
          </TabPanel>
          <TabPanel label="Second" disabled>
            <Box>
              <Paragraph>Content of Second tab</Paragraph>
            </Box>
          </TabPanel>
        </Tabs>
      </Paper>
    </Box>
  );
};

export const SimpleTab = SimpleTemplate.bind({});
SimpleTab.args = {
  usePageLayout: true,
  panelColor: 'solid',
};
