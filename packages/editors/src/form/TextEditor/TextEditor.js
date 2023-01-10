import React, { useCallback, useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Box } from '@bubbles-ui/components';
import PropTypes from 'prop-types';
import { forEach, isFunction, isObject, isEqual } from 'lodash';
import History from '@tiptap/extension-history';
import Document from '@tiptap/extension-document';
import Focus from '@tiptap/extension-focus';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
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
  onSchemaChange: PropTypes.func,
  editorClassname: PropTypes.string,
  toolbarClassname: PropTypes.string,
  editorContainerClassname: PropTypes.string,
  useJSON: PropTypes.bool,
};

const TextEditor = ({
  content,
  children,
  onChange,
  onSchemaChange,
  editorClassname,
  toolbarClassname,
  editorContainerClassname,
  placeholder,
  readOnly,
  useJSON,
}) => {
  const store = React.useRef({
    isFocus: false,
  });
  const extensions = useExtensions(children);
  const { classes, cx } = TextEditorStyles({}, { name: 'TextEditor' });
  const editor = useEditor({
    editable: !readOnly,
    extensions: [
      Document,
      Text,
      Paragraph,
      Focus,
      History,
      Placeholder.configure({ placeholder: placeholder }),
      ...extensions,
    ],
    content: '',
  });

  const ref = React.useRef(null);
  const contentChange = React.useRef(null);

  const onUpdate = () => {
    let newContent = useJSON ? editor.getJSON() : editor.getHTML();

    if (!useJSON) {
      const match = newContent.match(/<(?:h[1-6]|p).+>(.+?)<\/(?:h[1-6]|p)>/);
      if (!Boolean(match) || (isObject(match) && match[1] === '')) {
        newContent = null;
      }
    }

    store.current.content = newContent;

    if (isFunction(onChange) && store.current.content !== content) onChange(store.current.content);
    if (isFunction(onSchemaChange)) onSchemaChange(editor.getJSON());
  };

  useEffect(() => {
    if (!editor) return;
    if (!isEqual(content, store.current.content)) {
      store.current.content = content;
      editor.commands.setContent(content || '');
    }
  }, [editor, content]);

  useEffect(() => {
    if (!editor) {
      return undefined;
    }

    editor.setEditable(!readOnly);
  }, [editor, readOnly]);

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
  }, [editor, handleTransactions]);

  useEffect(() => {
    if (editor) {
      const placeholderExtension = editor.extensionManager.extensions.find(
        (extension) => extension.name === 'placeholder'
      );
      placeholderExtension.options['placeholder'] = placeholder;
      editor.view.dispatch(editor.state.tr);
    }
  }, [placeholder]);

  return (
    <Box
      ref={ref}
      onFocus={() => {
        store.current.isFocus = true;
      }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <TextEditorProvider editor={editor} readOnly={readOnly}>
        {readOnly ? null : (
          <>
            <Toolbar toolbarLabel={'Toolbar'} className={toolbarClassname}>
              {children}
            </Toolbar>
            <BubbleMenu />
          </>
        )}
        <Box className={cx(classes.editorContainer, editorContainerClassname)}>
          <EditorContent editor={editor} className={cx(classes.editor, editorClassname)} />
        </Box>
      </TextEditorProvider>
    </Box>
  );
};

TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
