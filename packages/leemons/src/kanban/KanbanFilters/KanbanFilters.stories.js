import React from 'react';
import { Box } from '@bubbles-ui/components';
import { KanbanFilters, KANBAN_FILTERS_DEFAULT_PROPS } from './KanbanFilters';
import mdx from './KanbanFilters.mdx';

export default {
  title: 'Organisms/Calendar/KanbanFilters',
  parameters: {
    component: KanbanFilters,
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

const Template = ({ children, ...props }) => {
  return <KanbanFilters {...props}>{children}</KanbanFilters>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...KANBAN_FILTERS_DEFAULT_PROPS,
};
