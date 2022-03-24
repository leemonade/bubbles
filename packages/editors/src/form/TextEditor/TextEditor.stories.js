import React from 'react';
import {
  ColorTool,
  HeadingsTool,
  TransformsTool,
  CodeQuoteTool,
  TextAlignTool,
  ScriptsTool,
  ListIndentTool,
  LeemonsTool,
} from '../../tool/';
import { Box } from '@bubbles-ui/components';
import { TextEditor } from './TextEditor';

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
      <TransformsTool />
      <HeadingsTool paragraph={false} />
      <ListIndentTool />
      <LeemonsTool />
      <CodeQuoteTool />
      <TextAlignTool />
      <ScriptsTool />
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  library: <Box>Library component</Box>,
  content:
    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
};
