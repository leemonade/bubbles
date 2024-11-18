import React from 'react';
import { Box } from '@bubbles-ui/components';
import { Chip } from './Chip';
import { CHIP_DEFAULT_PROPS } from './Chip.constants';
import mdx from './Chip.mdx';

export default {
  title: 'Atoms/Informative/Chip',
  parameters: {
    component: Chip,
    docs: {
      page: mdx,
    },
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/🍋-App-Opensource?node-id=4271%3A210962',
    // },
  },
  argTypes: {},
};

const Template = ({ ...props }) => (
  <Box style={{ maxWidth: 120 }}>
    <Chip {...props} />
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  ...CHIP_DEFAULT_PROPS,
  subject: 'Mo, 10:30-11:30',
  isHidden: false,
  isCollisionDetected: false,
  truncateLines: 1,
};
