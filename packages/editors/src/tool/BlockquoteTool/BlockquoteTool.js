import PropTypes from 'prop-types';
import { EditorQuotesIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Blockquote from '@tiptap/extension-blockquote';

export const BLOCKQUOTE_TOOL_DEFAULT_PROPS = {
  label: 'Block quote',
};

export const BLOCKQUOTE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const BlockquoteTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleBlockquote().focus().run();
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<EditorQuotesIcon height={16} width={16} />}
      actived={editor?.isActive('blockquote')}
      onClick={onClickHandler}
    ></Button>
  );
};

BlockquoteTool.defaultProps = BLOCKQUOTE_TOOL_DEFAULT_PROPS;
BlockquoteTool.propTypes = BLOCKQUOTE_TOOL_PROP_TYPES;
BlockquoteTool.extensions = [Blockquote];

export { BlockquoteTool };
