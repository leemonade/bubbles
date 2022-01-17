import React, { useState } from 'react';
import { SORTABLE_LIST_DEFAULT_PROPS, SortableList } from './SortableList';
import mdx from './SortableList.mdx';

export default {
  title: 'Molecules/Informative/SortableList',
  parameters: {
    component: SortableList,
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
  const [state, setState] = useState(['Gatitos', 'Perritos', 'Hamsters']);
  return (
    <SortableList {...props} onChange={setState} value={state}>
      {children}
    </SortableList>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...SORTABLE_LIST_DEFAULT_PROPS,
};
