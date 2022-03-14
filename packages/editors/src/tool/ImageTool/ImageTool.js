import PropTypes from 'prop-types';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Image from '@tiptap/extension-image';
import isValidURL from '../../utils/valid-url';

export const IMAGE_TOOL_DEFAULT_PROPS = {
  label: 'Image',
};

export const IMAGE_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const ImageTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    let url = prompt('Enter image URL');

    if (isValidURL(url)) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <Button
      {...props}
      label={label}
      icon={<StarIcon />}
      actived={false}
      onClick={onClickHandler}
    ></Button>
  );
};

ImageTool.defaultProps = IMAGE_TOOL_DEFAULT_PROPS;
ImageTool.propTypes = IMAGE_TOOL_PROP_TYPES;
ImageTool.extensions = [
  Image.configure({
    inline: true,
  }),
];

export { ImageTool };
