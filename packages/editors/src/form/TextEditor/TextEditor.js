import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Box } from '@bubbles-ui/components';
import PropTypes from 'prop-types';
import { forEach, isFunction, isObject } from 'lodash';
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

  const ref = React.useRef(null);
  const contentChange = React.useRef(null);

  const onUpdate = () => {
    let html = editor.getHTML();
    const match = html.match(/<(?:h[1-6]|p).+>(.+?)<\/(?:h[1-6]|p)>/);
    if (!Boolean(match) || (isObject(match) && match[1] === '')) {
      html = null;
    }
    store.current.html = html;

    if (isFunction(onChange) && store.current.html !== content) onChange(store.current.html);
  };

  useEffect(() => {
    if (!editor) return;
    if (content !== store.current.html) {
      store.current.html = content;
      editor.commands.setContent(content || '');
    }
  }, [editor, content]);

  function getPath(element, acc = []) {
    acc.push(element);
    if (element.parentNode) {
      return getPath(element.parentNode, acc);
    }
    return acc;
  }

  function updateIfOutside(e) {
    let isOutside = true;
    const path = getPath(e.target);
    forEach(path, (node) => {
      if (node === ref.current || node.classList?.contains('mantine-Popover-wrapper')) {
        isOutside = false;
      }
    });
    if (store.current.isFocus && isOutside) {
      store.current.isFocus = false;
      onUpdate();
    }
  }

  useEffect(() => {
    document.addEventListener('click', updateIfOutside);
    return () => {
      document.removeEventListener('click', updateIfOutside);
    };
  });

  const handleTransactions = (e) => {
    if (contentChange.current) {
      clearTimeout(contentChange.current);
    }

    contentChange.current = setTimeout(() => {
      onUpdate();
    }, 500);
  };

  useEffect(() => {
    if (editor) {
      editor.on('transaction', handleTransactions);
      return () => editor.off('transaction', handleTransactions);
    }
  }, [editor]);

  return (
    <Box
      ref={ref}
      onFocus={() => {
        store.current.isFocus = true;
      }}
    >
      <TextEditorProvider editor={editor} library={library}>
        <Toolbar toolbarLabel={'Toolbar'}>{children}</Toolbar>
        <BubbleMenu />
        <EditorContent editor={editor} className={cx(classes.editor, editorClassname)} />
      </TextEditorProvider>
    </Box>
  );
};

TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
