import { Anchor, Text, List } from '@mantine/core';
import React from 'react';
import { Breadcrumbs, BREADCRUMBS_DEFAULT_PROPS } from './Breadcrumbs';
import mdx from './Breadcrumbs.mdx';

export default {
  title: 'BB1/Breadcrumbs',
  parameters: {
    component: Breadcrumbs,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3621%3A23005',
    },
  },
};

const Template = ({ ...props }) => {
  return <Breadcrumbs {...props} />;
};
export const Playground = Template.bind({});

Playground.args = {
  ...BREADCRUMBS_DEFAULT_PROPS,
  items: [
    { label: 'Mantine', href: 'https://mantine.dev' },
    { label: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { label: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
    { label: 'use-id' },
  ],
};
