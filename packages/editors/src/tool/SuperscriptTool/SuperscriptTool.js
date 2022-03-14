import PropTypes from 'prop-types';
import { Superscript } from '@tiptap/extension-superscript';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const SUPERSCRIPT_TOOL_DEFAULT_PROPS = {
  label: 'Superscript',
};

export const SUPERSCRIPT_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const SuperscriptTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleSuperscript().focus().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon />}
      actived={editor?.isActive('superscript')}
      onClick={onClickHandler}
    ></Button>
  );
};

SuperscriptTool.defaultProps = SUPERSCRIPT_TOOL_DEFAULT_PROPS;
SuperscriptTool.propTypes = SUPERSCRIPT_TOOL_PROP_TYPES;
SuperscriptTool.extensions = [Superscript];

export { SuperscriptTool };
