import PropTypes from 'prop-types';
import Italic from '@tiptap/extension-italic';
import { EditorTextItalicIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const ITALIC_TOOL_DEFAULT_PROPS = {
  label: 'Italic',
};

export const ITALIC_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const ItalicTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().focus().toggleItalic().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorTextItalicIcon height={16} width={16} />}
      actived={editor?.isActive('italic')}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

ItalicTool.defaultProps = ITALIC_TOOL_DEFAULT_PROPS;
ItalicTool.propTypes = ITALIC_TOOL_PROP_TYPES;
ItalicTool.extensions = [Italic];

export { ItalicTool };
