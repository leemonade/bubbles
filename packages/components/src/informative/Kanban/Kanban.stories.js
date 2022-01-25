import React, { useState } from 'react';
import { Kanban, KANBAN_DEFAULT_PROPS } from './Kanban';
import mdx from './Kanban.mdx';
import { mock } from './mock/mock';
import { mock as mockCard } from '../../leemons/KanbanTaskCard/mock/mock';
import { KanbanTaskCard } from '../../leemons/KanbanTaskCard';

export default {
  title: 'Organisms/Informative/Kanban',
  parameters: {
    component: Kanban,
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
  const [value, setValue] = useState(mock);
  return (
    <Kanban
      {...props}
      value={value}
      onChange={setValue}
      itemRender={(props) => <KanbanTaskCard config={mockCard} {...props} />}
    >
      {children}
    </Kanban>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...KANBAN_DEFAULT_PROPS,
};
