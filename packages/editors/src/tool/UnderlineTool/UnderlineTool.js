import PropTypes from 'prop-types';
import Underline from '@tiptap/extension-underline';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import { Label } from 'styled-icons/material-twotone';

export const UNDERLINE_TOOL_DEFAULT_PROPS = {
  label: 'Underline',
};

export const UNDERLINE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const UnderlineTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleUnderline().focus().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon />}
      actived={editor?.isActive('underline')}
      onClick={onClickHandler}
    ></Button>
  );
};

UnderlineTool.defaultProps = UNDERLINE_TOOL_DEFAULT_PROPS;
UnderlineTool.propTypes = UNDERLINE_TOOL_PROP_TYPES;
UnderlineTool.extensions = [Underline];

export { UnderlineTool };
