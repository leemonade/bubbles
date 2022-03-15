import PropTypes from 'prop-types';
import Strike from '@tiptap/extension-strike';
import { EditorTextStrikeIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const STRIKE_TOOL_DEFAULT_PROPS = {
  label: 'Strike',
};

export const STRIKE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const StrikeTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().focus().toggleStrike().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorTextStrikeIcon />}
      actived={editor?.isActive('strike')}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

StrikeTool.defaultProps = STRIKE_TOOL_DEFAULT_PROPS;
StrikeTool.propTypes = STRIKE_TOOL_PROP_TYPES;
StrikeTool.extensions = [Strike];

export { StrikeTool };
