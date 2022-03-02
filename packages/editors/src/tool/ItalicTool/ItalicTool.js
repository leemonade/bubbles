import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import Italic from '@tiptap/extension-italic';
import { ItalicToolExtension } from './extension';
import { Button } from '../../form/Button/Button';

const ItalicTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.commands.toggleItalic();
  };

  return (
    <Button
      {...props}
      icon={<StarIcon />}
      actived={editor?.isActive('italic')}
      onClick={onClickHandler}
    ></Button>
  );
};

ItalicTool.extensions = [ItalicToolExtension, Italic];

export { ItalicTool };
