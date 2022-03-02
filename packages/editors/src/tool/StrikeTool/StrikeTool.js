import { StarIcon } from '@bubbles-ui/icons/solid';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import Strike from '@tiptap/extension-strike';

const StrikeTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {
    editor.chain().toggleStrike().focus().run();
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

StrikeTool.extensions = [Strike];

export { StrikeTool };
