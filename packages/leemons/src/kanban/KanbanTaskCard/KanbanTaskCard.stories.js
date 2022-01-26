import React from 'react';
import { Box } from '@mantine/core';
import { KanbanTaskCard, KANBAN_TASK_CARD_DEFAULT_PROPS } from './KanbanTaskCard';
import mdx from './KanbanTaskCard.mdx';

export default {
  title: 'Organisms/Leemons/KanbanTaskCard',
  parameters: {
    component: KanbanTaskCard,
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
  return <KanbanTaskCard {...props}>{children}</KanbanTaskCard>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...KANBAN_TASK_CARD_DEFAULT_PROPS,
};
