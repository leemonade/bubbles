import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import Strike from '@tiptap/extension-strike';
import { StrikeToolExtension } from './extension';
import { Button } from '../../form/Button/Button';

const StrikeTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.commands.toggleStrike();
  };

  return (
    <Button
      {...props}
      icon={<StarIcon />}
      actived={editor?.isActive('strike')}
      onClick={onClickHandler}
    ></Button>
  );
};

StrikeTool.extensions = [StrikeToolExtension, Strike];

export { StrikeTool };
