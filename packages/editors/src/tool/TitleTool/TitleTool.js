import PropTypes from 'prop-types';
import Heading from '@tiptap/extension-heading';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { StarIcon, LadybugIcon, MusicNoteIcon } from '@bubbles-ui/icons/solid';
import { Button } from '../../form/Button/Button';

export const TITLE_TOOL_DEFAULT_PROPS = {
  level: 1,
};

export const TITLE_TOOL_PROP_TYPES = {
  level: PropTypes.number,
  label: PropTypes.string,
};

const TitleTool = ({ level, label, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  if (level < 1 || level > 3) {
    level = 1;
  }

  const onClickHandler = () => {
    editor?.chain().focus().toggleHeading({ level: level }).run();
  };

  const getDefaultLabel = () => {
    switch (level) {
      case 1:
        return 'Title';
      case 2:
        return 'Subtitle';
      case 3:
        return 'Sub-subtitle';
      default:
        return 'Title';
    }
  };

  const getLevelIcon = () => {
    if (level === 1) return <StarIcon />;
    if (level === 2) return <LadybugIcon />;
    if (level === 3) return <MusicNoteIcon />;
  };

  return (
    <Button
      {...props}
      label={label || getDefaultLabel()}
      icon={getLevelIcon()}
      actived={editor?.isActive('heading', { level: level })}
      onClick={onClickHandler}
    ></Button>
  );
};

TitleTool.defaultProps = TITLE_TOOL_DEFAULT_PROPS;
TitleTool.propTypes = TITLE_TOOL_PROP_TYPES;

TitleTool.extensions = [Heading];

export { TitleTool };
