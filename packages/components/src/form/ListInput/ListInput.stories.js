import React from 'react';
import { LIST_INPUT_DEFAULT_PROPS, ListInput } from './ListInput';
import mdx from './ListInput.mdx';

export default {
  title: 'Molecules/Form/ListInput',
  parameters: {
    component: ListInput,
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

function ListInputRender({ t, ...props }) {
  console.log(props);
  return 'Gatito';
}

const Template = ({ children, ...props }) => {
  return (
    <ListInput {...props} canAdd>
      {children}
    </ListInput>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...LIST_INPUT_DEFAULT_PROPS,
};
