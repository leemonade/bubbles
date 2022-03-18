import PropTypes from 'prop-types';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import lowlight from 'lowlight';
import { Button } from '../../form/Button/Button';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { EditorProgrammingCodeIcon } from '@bubbles-ui/icons/solid';

export const CODE_TOOL_DEFAULT_PROPS = {
  label: 'Code block',
};

export const CODE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const CodeTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorProgrammingCodeIcon height={16} width={16} />}
      actived={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

CodeTool.defaultProps = CODE_TOOL_DEFAULT_PROPS;
CodeTool.propTypes = CODE_TOOL_PROP_TYPES;
CodeTool.extensions = [CodeBlockLowlight.configure({ lowlight })];

export { CodeTool };
