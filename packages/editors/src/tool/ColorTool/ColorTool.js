import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import { useContext, Children } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import Underline from '@tiptap/extension-underline';
import { ColorToolExtension } from './extension';
import { Button } from '../../form/Button/Button';

const ColorTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  /*useEffect(() => {
    if (!editor) return;
    editor.extensionManager = new ExtensionManager(
      editor.extensionManager.extensions.concat(Underline),
      editor
    );
    editor.commandManager = new CommandManager({
      editor,
    });
    console.log(editor);
  }, [editor]);
  */

  const onClickHandler = () => {
    editor.commands.toggleUnderline();
  };

  return (
    <Button
      {...props}
      icon={<ExpandDiagonalIcon />}
      actived={editor?.isActive('underline')}
      onClick={onClickHandler}
    ></Button>
  );
};

ColorTool.extensions = [ColorToolExtension, Underline];

export { ColorTool };
