import PropTypes from 'prop-types';
import Bold from '@tiptap/extension-bold';
import { EditorTextBoldIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const BOLD_TOOL_DEFAULT_PROPS = {
  label: 'Bold',
};

export const BOLD_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const BoldTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().focus().toggleBold().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorTextBoldIcon height={16} width={16} />}
      actived={editor?.isActive('bold')}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

BoldTool.defaultProps = BOLD_TOOL_DEFAULT_PROPS;
BoldTool.propTypes = BOLD_TOOL_PROP_TYPES;
BoldTool.extensions = [Bold];

export { BoldTool };
