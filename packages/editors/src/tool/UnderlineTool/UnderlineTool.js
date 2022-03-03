import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Underline from '@tiptap/extension-underline';

const UnderlineTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleUnderline().focus().run();
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

UnderlineTool.extensions = [Underline];

export { UnderlineTool };
