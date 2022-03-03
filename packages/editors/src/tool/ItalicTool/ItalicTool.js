import PropTypes from 'prop-types';
import Italic from '@tiptap/extension-italic';
import { StarIcon } from '@bubbles-ui/icons/solid';
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
    editor.chain().toggleItalic().focus().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon />}
      actived={editor?.isActive('italic')}
      onClick={onClickHandler}
    ></Button>
  );
};

ItalicTool.defaultProps = ITALIC_TOOL_DEFAULT_PROPS;
ItalicTool.propTypes = ITALIC_TOOL_PROP_TYPES;
ItalicTool.extensions = [Italic];

export { ItalicTool };
