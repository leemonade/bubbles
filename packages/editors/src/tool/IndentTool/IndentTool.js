import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import { Indent } from './extension/';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { StarIcon, LadybugIcon } from '@bubbles-ui/icons/solid';
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
    if (type === 'outdent') return <LadybugIcon />;
    return <StarIcon />;
  };

  return (
    <Button
      {...props}
      label={label || capitalize(type)}
      icon={getTypeIcon()}
      onClick={onClickHandler}
    ></Button>
  );
};

IndentTool.defaultProps = INDENT_TOOL_DEFAULT_PROPS;
IndentTool.propTypes = INDENT_TOOL_PROP_TYPES;

IndentTool.extensions = [Indent];

export { IndentTool };
