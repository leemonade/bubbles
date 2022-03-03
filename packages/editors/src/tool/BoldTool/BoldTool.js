import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Bold from '@tiptap/extension-bold';

const BoldTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleBold().focus().run();
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

BoldTool.extensions = [Bold];

export { BoldTool };
