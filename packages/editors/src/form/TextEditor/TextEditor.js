import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Box } from '@bubbles-ui/components';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import History from '@tiptap/extension-history';
import Document from '@tiptap/extension-document';
import Focus from '@tiptap/extension-focus';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import { useExtensions } from '../../utils';
import { BubbleMenu } from '../BubbleMenu';
import { Toolbar } from '../Toolbar';
import { TextEditorProvider } from '../TextEditorProvider';
import { TextEditorStyles } from './TextEditor.styles';
import { useClickOutside } from '@mantine/hooks';

export const TEXT_EDITOR_PROP_TYPES = {
  content: PropTypes.string,
  library: PropTypes.element,
  onChange: PropTypes.func,
  editorClassname: PropTypes.string,
};

const TextEditor = ({ content, library, children, onChange, editorClassname }) => {
  const store = React.useRef({
    isFocus: false,
  });
  const extensions = useExtensions(children);
  const { classes, cx } = TextEditorStyles({}, { name: 'TextEditor' });
  const editor = useEditor({
    extensions: [Document, Text, Paragraph, Focus, History, ...extensions],
    content: '',
  });

  const ref = useClickOutside(() => {
    if (store.current.isFocus) {
      store.current.isFocus = false;
      onUpdate();
    }
  });

  const onUpdate = () => {
    const html = editor.getHTML();
    if (isFunction(onChange) && html !== content) onChange(html);
  };

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(content);
  }, [editor, content]);

  /*
  useEffect(() => {
    if (editor) {
      console.log(editor);
      editor.on('blur', onUpdate);
      return () => editor.off('blur', onUpdate);
    }
  }, [editor]);
   */

  return (
    <Box
      ref={ref}
      onFocus={() => {
        store.current.isFocus = true;
      }}
    >
      <TextEditorProvider editor={editor} library={library}>
        <Toolbar>{children}</Toolbar>
        <BubbleMenu />
        <EditorContent editor={editor} className={cx(classes.editor, editorClassname)} />
      </TextEditorProvider>
    </Box>
  );
};

TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
