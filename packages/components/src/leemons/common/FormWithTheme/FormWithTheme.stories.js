import React from 'react';
import { FORM_WITH_THEME_DEFAULT_PROPS, FormWithTheme } from './FormWithTheme';
import mdx from './FormWithTheme.mdx';
import { mock } from './mock/mock';
import { Button } from '../../../form';

export default {
  title: 'Leemons/Common/FormWithTheme',
  parameters: {
    component: FormWithTheme,
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
  const [form, actions] = FormWithTheme(mock.compileJsonSchema, mock.compileJsonUI);
  return (
    <>
      {form}
      <Button onClick={() => actions.submit()}>Send</Button>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...FORM_WITH_THEME_DEFAULT_PROPS,
};
