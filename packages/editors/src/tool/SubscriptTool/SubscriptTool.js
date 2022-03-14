import PropTypes from 'prop-types';
import { Subscript } from '@tiptap/extension-subscript';
import { EditorSubscriptIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';

export const SUBSCRIPTTOOL_TOOL_DEFAULT_PROPS = {
  label: 'Subscript',
};

export const SUBSCRIPTTOOL_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const SubscriptTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleSubscript().focus().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorSubscriptIcon />}
      actived={editor?.isActive('subscript')}
      onClick={onClickHandler}
    ></Button>
  );
};

SubscriptTool.defaultProps = SUBSCRIPTTOOL_TOOL_DEFAULT_PROPS;
SubscriptTool.propTypes = SUBSCRIPTTOOL_TOOL_PROP_TYPES;
SubscriptTool.extensions = [Subscript];

export { SubscriptTool };
