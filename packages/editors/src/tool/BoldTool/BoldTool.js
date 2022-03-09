import PropTypes from 'prop-types';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Bold from '@tiptap/extension-bold';

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
      icon={<StarIcon />}
      actived={editor?.isActive('bold')}
      onClick={onClickHandler}
    ></Button>
  );
};

BoldTool.defaultProps = BOLD_TOOL_DEFAULT_PROPS;
BoldTool.propTypes = BOLD_TOOL_PROP_TYPES;
BoldTool.extensions = [Bold];

export { BoldTool };
