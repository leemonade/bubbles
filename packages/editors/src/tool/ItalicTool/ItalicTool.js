import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Italic from '@tiptap/extension-italic';

const ItalicTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleItalic().focus().run();
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

ItalicTool.extensions = [Italic];

export { ItalicTool };
