import React from 'react';
import { AlarmBellCheckIcon, BoardEducationIcon } from '@bubbles-ui/icons/outline';
import { ActivityAccordion } from './ActivityAccordion';
import { ActivityAccordionPanel } from './panel/ActivityAccordionPanel';
import { ACTIVITY_ACCORDION_DEFAULT_PROPS } from './ActivityAccordion.constants';
import { Box } from '../../layout';
import { Badge } from '../Badge';
import { Paragraph } from '../../typography';
import mdx from './ActivityAccordion.mdx';

export default {
  title: 'Molecules/Informative/ActivityAccordion',
  parameters: {
    component: ActivityAccordion,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors.ui02, padding: theme.spacing[9] })}>
      <ActivityAccordion {...props}>
        <ActivityAccordionPanel
          label="Test 1"
          color="solid"
          icon={<AlarmBellCheckIcon />}
          rightSection={<Badge label="35" size="md" color="stroke" closable={false} />}
        >
          <Box p={20}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </Box>
        </ActivityAccordionPanel>

        <ActivityAccordionPanel
          label="Test 2"
          icon={<BoardEducationIcon />}
          rightSection={<Badge label="Optional" closable={false} />}
        >
          <Box p={20}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </Box>
        </ActivityAccordionPanel>
      </ActivityAccordion>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...ACTIVITY_ACCORDION_DEFAULT_PROPS,
};
