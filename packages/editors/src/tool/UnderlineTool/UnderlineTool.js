import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import Underline from '@tiptap/extension-underline';
import { UnderlineToolExtension } from './extension';
import { Button } from '../../form/Button/Button';

const UnderlineTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.commands.toggleUnderline();
  };

  return (
    <Button
      {...props}
      icon={<StarIcon />}
      actived={editor?.isActive('underline')}
      onClick={onClickHandler}
    ></Button>
  );
};

UnderlineTool.extensions = [UnderlineToolExtension, Underline];

export { UnderlineTool };
