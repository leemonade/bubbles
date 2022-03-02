import React, { useEffect, useState } from 'react';
import { ColorTool } from '../../tool/ColorTool/ColorTool';
import { GroupTool } from '../ButtonGroup/ButtonGroup';
import { TransfromsTool } from '../../tool/TransformsTool/TransformsTool';
import { TextEditor } from './TextEditor';
// import mdx from './TextEditor.mdx';

export default {
  title: 'Atom/Form/TextEditor',
  parameters: {
    component: TextEditor,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return (
    <TextEditor {...props}>
      <ColorTool></ColorTool>
      <TransfromsTool></TransfromsTool>
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  content: '<div>hola mundo</div>',
};
