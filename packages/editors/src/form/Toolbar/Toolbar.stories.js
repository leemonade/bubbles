import { Toolbar, TOOLBAR_DEFAULT_PROPS } from './Toolbar';
import { TextEditor } from '../TextEditor/TextEditor';
import { ColorTool } from '../../tool/ColorTool/ColorTool';
import { TransformsTool } from '../../tool/TransformsTool/TransformsTool';

export default {
  title: 'Atom/Form/Toolbar',
  parameters: {
    component: Toolbar,
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

const Template = ({ content, ...props }) => {
  return (
    <TextEditor content={content}>
      <Toolbar {...props}>
        <ColorTool />
        <TransformsTool />
        <TransformsTool />
        <TransformsTool />
        <TransformsTool />
      </Toolbar>
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...TOOLBAR_DEFAULT_PROPS,
  content:
    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
};
