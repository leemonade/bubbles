import { TextEditorProvider } from '../TextEditorProvider';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { useExtensions } from '../../utils/use-extensions';
import { TextEditorStyles } from './TextEditor.styles';
import { Toolbar } from '../Toolbar/Toolbar';
import { BubbleMenu } from '../BubbleMenu/BubbleMenu';
import CardExtension from '../Card/extension';
import PropTypes from 'prop-types';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';

export const TEXT_EDITOR_PROP_TYPES = {
  content: PropTypes.string,
};

const TextEditor = ({ content, children }) => {
  const extensions = useExtensions(children);
  const { classes } = TextEditorStyles({});
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Paragraph.configure({
        HTMLAttributes: {
          class: classes.paragraph,
        },
      }),
      CardExtension,
      ...extensions,
    ],
    content: '',
  });

  const addCard = () => {
    editor
      ?.chain()
      .focus()
      .setCard({
        title: 'El imperio romano',
        description:
          'No se que no se cuantos el imperio romano duro la tira de tiempo y por eso ahora estoy haciendo esta descripcion muy larga',
        fileType: 'video',
      })
      .run();
  };

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(content);
  }, [editor, content]);

  return (
    <TextEditorProvider editor={editor}>
      <Toolbar>
        {children}
        <div onClick={addCard}>añadir card</div>
      </Toolbar>
      <BubbleMenu />
      <EditorContent editor={editor} className={classes.editor} />
    </TextEditorProvider>
  );
};

export { TextEditor };
