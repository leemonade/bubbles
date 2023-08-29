import React from 'react';
import {
  ColorTool,
  HeadingsTool,
  TransformsTool,
  CodeQuoteTool,
  TextAlignTool,
  ScriptsTool,
  ListIndentTool,
  LinkTool,
} from '../../tool/';
import { Box } from '@bubbles-ui/components';
import { TextEditor, TEXT_EDITOR_DEFAULT_PROPS } from './TextEditor';
import mdx from './TextEditor.mdx';
import { labels } from './mock/data';
import { TOOLBAR_POSITIONS } from '../Toolbar';

export default {
  title: 'Organism/Form/TextEditor',
  parameters: {
    component: TextEditor,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    toolbarPosition: { options: TOOLBAR_POSITIONS, control: { type: 'select' } },
  },
};

const Template = ({ onChange, ...props }) => {
  return (
    <TextEditor
      {...props}
      onChange={(e) => {
        // console.log(e);
        onChange(e);
      }}
    >
      <HeadingsTool paragraph={false} labels={labels.headingsTool} />
      <ColorTool label={labels.colorTool} />
      <TransformsTool labels={labels.transformsTool} />
      <ListIndentTool labels={labels.listIndentTool} />
      <LinkTool {...labels.linkTool} />
      <CodeQuoteTool labels={labels.codequoteTool} />
      <TextAlignTool labels={labels.textAlignTool} />
      <ScriptsTool labels={labels.scriptsTool} />
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_DEFAULT_PROPS,
  library: <Box>Library component</Box>,
  content:
    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
  readOnly: false,
};
