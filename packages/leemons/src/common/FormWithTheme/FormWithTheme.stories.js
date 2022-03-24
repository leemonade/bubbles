import React from 'react';
import { Button } from '@bubbles-ui/components';
import { FORM_WITH_THEME_DEFAULT_PROPS, FormWithTheme } from './FormWithTheme';
import mdx from './FormWithTheme.mdx';
import { mock } from './mock/mock';

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
  const [s, setS] = React.useState(null);
  const a = React.useMemo(() => ({ formData: null }), []);
  const [form, actions] = FormWithTheme(
    mock.compileJsonSchema || mock.jsonSchema,
    mock.compileJsonUI || mock.jsonUI,
    undefined,
    a
  );
  return (
    <>
      {form}

      <Button
        onClick={async () => {
          await actions.submit();
          const fErrors = actions.getErrors();
          const datasetValues = actions.getValues();
          console.log(fErrors, datasetValues);
        }}
      >
        Send
      </Button>
      <Button onClick={() => setS(new Date().getTime())}>SETS</Button>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...FORM_WITH_THEME_DEFAULT_PROPS,
};
