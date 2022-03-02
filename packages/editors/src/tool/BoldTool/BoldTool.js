import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import Bold from '@tiptap/extension-bold';
import { BoldToolExtension } from './extension';
import { Button } from '../../form/Button/Button';

const BoldTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.commands.toggleBold();
  };

  return (
    <Button
      {...props}
      icon={<StarIcon />}
      actived={editor?.isActive('bold')}
      onClick={onClickHandler}
    ></Button>
  );
};

BoldTool.extensions = [BoldToolExtension, Bold];

export { BoldTool };
