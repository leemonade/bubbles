import { TextEditorProvider } from '../TextEditorProvider';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { useExtensions } from '../../utils/use-extensions';
import { TextEditorStyles } from './TextEditor.styles';
import { Box } from '@bubbles-ui/components';
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
      <Box className={classes.toolbar}>{children}</Box>

      <EditorContent editor={editor} />
    </TextEditorProvider>
  );
};

export { TextEditor };
