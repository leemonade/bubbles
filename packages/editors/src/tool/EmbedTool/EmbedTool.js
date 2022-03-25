import PropTypes from 'prop-types';
import { Embed } from './extension/';
import { useContext } from 'react';
import { TextEditorContext, Button } from '../../form/';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { isValidURL } from '../../utils/';

export const EMBED_TOOL_DEFAULT_PROPS = {
  label: 'Embed',
};

export const EMBED_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const EmbedTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    const url = window.prompt('URL');

    if (isValidURL(url)) {
      editor.chain().focus().setIframe({ src: url }).run();
    }
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon />}
      disabled={editor?.isActive('codeBlock')}
      onClick={onClickHandler}
    ></Button>
  );
};

EmbedTool.defaultProps = EMBED_TOOL_DEFAULT_PROPS;
EmbedTool.propTypes = EMBED_TOOL_PROP_TYPES;

EmbedTool.extensions = [Embed];

export { EmbedTool };
