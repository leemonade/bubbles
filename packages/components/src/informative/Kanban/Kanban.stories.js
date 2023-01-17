import React, { useState } from 'react';
import { Kanban, KANBAN_DEFAULT_PROPS } from './Kanban';
import mdx from './Kanban.mdx';
import { mock } from './mock/mock';
import { mockCard } from './mock/mockCard';

export default {
  title: 'BB1/Kanban',
  parameters: {
    component: Kanban,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8315%3A95321',
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
    <Kanban {...props} value={value} onChange={setValue}>
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
