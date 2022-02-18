import React from 'react';
import { Box } from '@mantine/core';
import {
  Badge,
  BADGE_DEFAULT_PROPS,
  BADGE_SIZES,
  BADGE_COLORS,
  BADGE_RADIUS,
  BADGE_SEVERITIES,
} from './Badge';
import mdx from './Badge.mdx';

export default {
  title: 'Molecules/Informative/Badge',
  parameters: {
    component: Badge,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3629%3A23186',
    },
  },
  argTypes: {
    size: { control: { type: 'select' }, options: BADGE_SIZES },
    radius: { control: { type: 'select' }, options: BADGE_RADIUS },
    color: { control: { type: 'select' }, options: BADGE_COLORS },
    severity: { control: { type: 'select' }, options: BADGE_SEVERITIES },
    onClose: { action: 'closed' },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ marginLeft: 20, marginTop: 20 }}>
      <Badge {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...BADGE_DEFAULT_PROPS,
  label: 'Badge',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
};
