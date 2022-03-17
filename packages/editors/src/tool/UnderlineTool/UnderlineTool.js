import PropTypes from 'prop-types';
import Underline from '@tiptap/extension-underline';
import { EditorTextUnderlineIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const UNDERLINE_TOOL_DEFAULT_PROPS = {
  label: 'Underline',
};

export const UNDERLINE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const UnderlineTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().focus().toggleUnderline().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorTextUnderlineIcon />}
      actived={editor?.isActive('underline')}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

UnderlineTool.defaultProps = UNDERLINE_TOOL_DEFAULT_PROPS;
UnderlineTool.propTypes = UNDERLINE_TOOL_PROP_TYPES;
UnderlineTool.extensions = [Underline];

export { UnderlineTool };
