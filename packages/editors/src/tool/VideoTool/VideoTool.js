import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from '@tiptap/extension-image';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { Button, TextEditorContext } from '../../form/';
import { isValidURL } from '../../utils/';

export const VIDEO_TOOL_DEFAULT_PROPS = {
  label: 'Image',
};

export const VIDEO_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const VideoTool = ({ label, ...props }) => {
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

VideoTool.defaultProps = VIDEO_TOOL_DEFAULT_PROPS;
VideoTool.propTypes = VIDEO_TOOL_PROP_TYPES;
VideoTool.extensions = [
  Image.configure({
    inline: true,
  }),
];

export { VideoTool };
