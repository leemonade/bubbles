import PropTypes from 'prop-types';
import { EditorProgrammingCodeIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import CodeBlock from '@tiptap/extension-code-block';

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
      icon={<EditorProgrammingCodeIcon />}
      actived={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

CodeTool.defaultProps = CODE_TOOL_DEFAULT_PROPS;
CodeTool.propTypes = CODE_TOOL_PROP_TYPES;
CodeTool.extensions = [CodeBlock];

export { CodeTool };
