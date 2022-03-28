import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { TextEditor } from '../TextEditor/TextEditor';
import { ColorTool } from '../../tool/ColorTool/ColorTool';
import { BoldTool } from '../../tool/BoldTool/BoldTool';
import { StrikeTool } from '../../tool/StrikeTool/StrikeTool';
import { UnderlineTool } from '../../tool/UnderlineTool/UnderlineTool';

export default {
  title: 'Atom/Form/ButtonGroup',
  parameters: {
    component: ButtonGroup,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    numberOfTools: {
      control: {
        type: 'number',
        min: 1,
        max: 3,
      },
    },
  },
};

const Template = ({ content, numberOfTools, concatGroup, ...props }) => {
  return (
    <TextEditor content={content}>
      <ButtonGroup {...props}>
        <ColorTool></ColorTool>
        {numberOfTools > 1 && <ColorTool></ColorTool>}
        {numberOfTools > 2 && <ColorTool></ColorTool>}
        {concatGroup && (
          <ButtonGroup>
            <BoldTool />
            <StrikeTool />
            <UnderlineTool />
          </ButtonGroup>
        )}
      </ButtonGroup>
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  numberOfTools: 3,
  concatGroup: false,
  content:
    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
};
