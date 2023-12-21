import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { EditorContent, useEditor } from '@tiptap/react';
import { Box } from '@bubbles-ui/components';
import PropTypes from 'prop-types';
import { forEach, isFunction, isEqual } from 'lodash';
import History from '@tiptap/extension-history';
import Document from '@tiptap/extension-document';
import Focus from '@tiptap/extension-focus';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import Paragraph from '@tiptap/extension-paragraph';
import { useExtensions } from '../../utils';
import { BubbleMenu } from '../BubbleMenu';
import { Toolbar, HeaderToolbar, TOOLBAR_POSITIONS } from '../Toolbar';
import { TextEditorProvider } from '../TextEditorProvider';
import { TextEditorStyles } from './TextEditor.styles';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  toolbarPosition: TOOLBAR_POSITIONS[0],
};

export const TEXT_EDITOR_PROP_TYPES = {
  content: PropTypes.string,
  onChange: PropTypes.func,
  onSchemaChange: PropTypes.func,
  editorClassname: PropTypes.string,
  toolbarClassname: PropTypes.string,
  editorContainerClassname: PropTypes.string,
  useSchema: PropTypes.bool,
  acceptedTags: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      updateWithoutContent: PropTypes.bool,
    }),
  ),
  toolbarPosition: PropTypes.oneOf(TOOLBAR_POSITIONS),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  children: PropTypes.node,
  toolbarPortal: PropTypes.any,
  scrollRef: PropTypes.any,
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
  useSchema,
  acceptedTags = [],
  toolbarPosition,
  toolbarPortal,
  scrollRef,
}) => {
  const store = React.useRef({
    isFocus: false,
    acceptedTags: acceptedTags.join('|'),
  });
  const [isToolbarReady, setIsToolbarReady] = React.useState(false);
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
      Placeholder.configure({ placeholder }),
      ...extensions,
    ],
    content: '',
  });

  const ref = React.useRef(null);
  const contentChange = React.useRef(null);

  const getEditorJson = () => {
    const originalHTML = document.getElementsByClassName('ProseMirror')[0];
    if (!originalHTML) return {};
    const htmlContent = [...originalHTML.getElementsByTagName('*')].filter(
      (element) => element.tagName !== 'BR',
    );
    const originalJSON = editor.getJSON();

    return {
      ...originalJSON,
      content: originalJSON.content.map((element, index) => {
        element.attrs = { ...element.attrs, index, html: htmlContent[index] };
        return element;
      }),
    };
  };

  const onUpdate = () => {
    const defaultTags = ['paragraph', 'heading'];
    const jsonContent = editor.getJSON();
    let shouldUpdate = false;

    jsonContent.content.forEach((element) => {
      if (!element) return;
      if (defaultTags.includes(element.type) && element.content) {
        shouldUpdate = true;
        return;
      }
      const currentCustomTag = acceptedTags.find((tag) => tag.type === element.type);
      if (currentCustomTag && (currentCustomTag.updateWithoutContent || element.content)) {
        shouldUpdate = true;
      }
    });

    if (!shouldUpdate) return;

    store.current.content = editor.getHTML();

    if (isFunction(onChange) && store.current.content !== content) onChange(store.current.content);
    if (isFunction(onSchemaChange) && useSchema) onSchemaChange(getEditorJson());
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
      return;
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

  function focusEditor() {
    editor.chain().focus();
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
    return () => {};
  }, [editor, handleTransactions]);

  useEffect(() => {
    if (editor) {
      const placeholderExtension = editor.extensionManager.extensions.find(
        (extension) => extension.name === 'placeholder',
      );
      placeholderExtension.options.placeholder = placeholder;
      editor.view.dispatch(editor.state.tr);
    }
  }, [placeholder]);

  React.useEffect(() => {
    if (toolbarPortal) {
      setIsToolbarReady(true);
    }
  }, [toolbarPortal]);

  const ToolbarComponent = React.useMemo(
    () =>
      isToolbarReady
        ? () =>
            createPortal(
              <Toolbar
                toolbarLabel={'Toolbar'}
                className={toolbarClassname}
                toolbarPosition={toolbarPosition}
              >
                {children}
              </Toolbar>,
              toolbarPortal,
            )
        : () => (
            <Toolbar
              toolbarLabel={'Toolbar'}
              className={toolbarClassname}
              toolbarPosition={toolbarPosition}
            >
              {children}
            </Toolbar>
          ),
    [isToolbarReady],
  );

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
          <Box style={{ zIndex: 1 }}>
            <ToolbarComponent />
            <BubbleMenu />
          </Box>
        )}
        <Box
          ref={scrollRef}
          className={cx(classes.editorContainer, editorContainerClassname)}
          style={{ zIndex: 0 }}
        >
          <EditorContent
            editor={editor}
            className={cx(classes.editor, editorClassname)}
            onClick={focusEditor}
          />
        </Box>
      </TextEditorProvider>
    </Box>
  );
};

TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;
TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;

export { TextEditor };
