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
  VideoTool,
} from '../../tool/';
import { Box } from '@bubbles-ui/components';
import { TextEditor } from './TextEditor';
import mdx from './TextEditor.mdx';

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
  },
};

const Template = ({ onChange, ...props }) => {
  return (
    <TextEditor
      {...props}
      onChange={(e) => {
        console.log(e);
        onChange(e);
      }}
    >
      <ColorTool />
      <TransformsTool />
      <HeadingsTool paragraph={false} />
      <ListIndentTool />
      <LinkTool />
      <VideoTool />
      <CodeQuoteTool />
      <TextAlignTool />
      <ScriptsTool />
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  library: <Box>Library component</Box>,
  // content:
  //  '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
  content: {
    content: [
      {
        attrs: {
          indent: 0,
          level: 1,
          textAlign: 'left',
        },
        content: [
          {
            text: 'Vá',
            type: 'text',
          },
          {
            marks: [
              {
                attrs: { color: '#FF00FF' },
                type: 'textStyle',
              },
            ],
            text: 'mono',
            type: 'text',
          },
          {
            text: 's',
            type: 'text',
          },
        ],
        type: 'heading',
      },
      {
        attrs: {
          indent: 0,
          textAlign: 'left',
        },
        content: [
          {
            text: 'Esto es un link',
            type: 'text',
          },
        ],
        type: 'paragraph',
      },
    ],
    type: 'doc',
  },
  useJSON: false,
  readOnly: false,
};
