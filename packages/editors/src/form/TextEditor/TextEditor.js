import { TextEditorProvider } from '../TextEditorProvider';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { useExtensions } from '../../utils/use-extensions';
import { TextEditorStyles } from './TextEditor.styles';
import { Toolbar } from '../Toolbar/Toolbar';
import { BubbleMenu } from '../BubbleMenu/BubbleMenu';
import History from '@tiptap/extension-history';
import PropTypes from 'prop-types';
import Document from '@tiptap/extension-document';
import Focus from '@tiptap/extension-focus';
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
      Focus.configure({
        mode: 'deepest',
      }),
      History,
      ...extensions,
    ],
    content: '',
  });

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(content);
  }, [editor, content]);

  return (
    <TextEditorProvider editor={editor}>
      <Toolbar>{children}</Toolbar>
      <BubbleMenu />
      <EditorContent editor={editor} className={classes.editor} />
    </TextEditorProvider>
  );
};

export { TextEditor };
