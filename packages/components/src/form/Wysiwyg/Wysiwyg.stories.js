import React from 'react';
import { Wysiwyg, WYSIWYG_DEFAULT_PROPS } from './Wysiwyg';
import mdx from './Wysiwyg.mdx';

export default {
  title: 'Molecules/Form/Wysiwyg',
  parameters: {
    component: Wysiwyg,
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
  const [value, setValue] = React.useState('Miau <b>Texto de prueba</b> lol');
  return (
    <>
      <Wysiwyg value={value} onChange={setValue} {...props}>
        {children}
      </Wysiwyg>
      {value}
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // mySelectProp: 'Hello'
  ...WYSIWYG_DEFAULT_PROPS,
};
