import { useContext } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { EditorIndentIncreaseIcon, EditorIndentDecreaseIcon } from '@bubbles-ui/icons/solid';
import { Indent } from './extension';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const INDENT_TOOL_TYPES = ['indent', 'outdent'];

export const INDENT_TOOL_DEFAULT_PROPS = {
  type: 'indent',
};

export const INDENT_TOOL_PROP_TYPES = {
  type: PropTypes.oneOf(INDENT_TOOL_TYPES),
  label: PropTypes.string,
};

const IndentTool = ({ type, label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    if (type === 'indent') {
      editor?.chain().focus().indent().run();
    }
    if (type === 'outdent') {
      editor?.chain().focus().outdent().run();
    }
  };

  const getTypeIcon = () => {
    if (type === 'outdent') return <EditorIndentDecreaseIcon height={16} width={16} />;
    return <EditorIndentIncreaseIcon height={16} width={16} />;
  };

  return (
    <Button
      {...props}
      label={label || capitalize(type)}
      icon={getTypeIcon()}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

IndentTool.defaultProps = INDENT_TOOL_DEFAULT_PROPS;
IndentTool.propTypes = INDENT_TOOL_PROP_TYPES;

IndentTool.extensions = [Indent];

export { IndentTool };
