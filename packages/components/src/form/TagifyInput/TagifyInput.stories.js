import React from 'react';
import { Box } from '@mantine/core';
import { TagifyInput, DEFAULT_PROPS, TAGIFY_SIZES } from './TagifyInput';
import mdx from './TagifyInput.mdx';

export default {
  title: 'Molecules/Form/TagifyInput',
  parameters: {
    component: TagifyInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: TAGIFY_SIZES, control: { type: 'select' } },
    onChange: { action: 'Input changed' },
  },
};

const Template = ({ ...props }) => {
  return <TagifyInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DEFAULT_PROPS,
  value: `This is a textarea which mixes text with [[{"value":"tags"}]].
To add a [[{"value":"tag"}]], type <em>@</em> and a (Latin) character. Here's a [[{"value":"readonly", "readonly":true}]] tag.
<br>
<small>(Only tags from the <em>whitelist</em> are allowed. <em>Whitelist</em> contains names of Southpark characters.)</small
<br>
<small>(Open this demo in a full-window to be able to type new-line returns)</small>`,
  settings: {
    pattern: /@/, // <- must define "patten" in mixed mode
    dropdown: {
      enabled: 1,
      position: 'text',
    },
    whitelist: [
      { id: 100, value: 'kenny', title: 'Kenny McCormick' },
      { id: 101, value: 'cartman', title: 'Eric Cartman' },
      { id: 102, value: 'kyle', title: 'Kyle Broflovski' },
      { id: 103, value: 'token', title: 'Token Black' },
      { id: 104, value: 'jimmy', title: 'Jimmy Valmer' },
      { id: 105, value: 'butters', title: 'Butters Stotch' },
      { id: 106, value: 'stan', title: 'Stan Marsh' },
      { id: 107, value: 'randy', title: 'Randy Marsh' },
      { id: 108, value: 'Mr. Garrison', title: 'POTUS' },
      { id: 109, value: 'Mr. Mackey', title: "M'Kay" },
    ],
  },
};
