import React from 'react';
import { Box } from '@mantine/core';
import { Badge, BADGE_DEFAULT_PROPS, BADGE_SIZES, BADGE_COLORS } from './Badge';
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
    color: { control: { type: 'select' }, options: BADGE_COLORS },
    onClose: { action: 'closed' },
  },
};

const Template = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Badge',
  ...BADGE_DEFAULT_PROPS,
};
