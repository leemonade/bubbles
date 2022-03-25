import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { Button } from '../../form/Button/Button';

export const PARAGRAPH_TOOL_DEFAULT_PROPS = {
  label: 'Paragraph',
};

export const PARAGRAPH_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const ParagraphTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor?.chain().focus().setParagraph().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon height={16} width={16} />}
      onClick={onClickHandler}
    ></Button>
  );
};

ParagraphTool.defaultProps = PARAGRAPH_TOOL_DEFAULT_PROPS;
ParagraphTool.propTypes = PARAGRAPH_TOOL_PROP_TYPES;

ParagraphTool.extensions = [];

export { ParagraphTool };
