import { TextEditorProvider } from '../TextEditorProvider';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useExtensions } from '../../utils/use-extensions';

export const TEXT_EDITOR_PROP_TYPES = {
  content: PropTypes.string,
};

const TextEditor = ({ content, children }) => {
  const extensions = useExtensions(children);
  const editor = useEditor({
    extensions: [...extensions, StarterKit],
    content: '',
  });

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(content);
  }, [editor, content]);

  return (
    <TextEditorProvider editor={editor}>
      <div>{children}</div>

      <EditorContent editor={editor} />
    </TextEditorProvider>
  );
};

export { TextEditor };
