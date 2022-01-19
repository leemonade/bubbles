import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isArray, isEmpty, isFunction, isString } from 'lodash';
import { Box, useId, InputWrapper } from '@bubbles-ui/components';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { TextEditorStyles } from './TextEditor.styles';
import { Toolbar } from './Toolbar/Toolbar';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  placeholder: '',
  toolbars: { style: true, align: true, list: true, history: true, heading: true },
  label: '',
  description: '',
  help: '',
  required: false,
  error: '',
};
export const TEXT_EDITOR_PROP_TYPES = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  toolbars: PropTypes.shape({
    style: PropTypes.bool,
    color: PropTypes.bool,
    heading: PropTypes.bool,
    align: PropTypes.bool,
    list: PropTypes.bool,
  }),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

const TextEditor = ({
  label,
  description,
  help,
  error,
  required,
  value,
  onChange,
  placeholder,
  toolbars,
  ...props
}) => {
  const uuid = useId();
  const [currentValue, setCurrentValue] = useState();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: '',
  });

  useEffect(() => {
    if (isString(value) && editor && value !== setCurrentValue) {
      setCurrentValue(value);
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const onUpdate = () => {
    if (isFunction(onChange)) onChange(editor.getHTML());
  };

  useEffect(() => {
    if (editor) {
      editor.on('update', onUpdate);
      return () => editor.off('update', onUpdate);
    }
  }, [editor]);

  // ··································································
  // STYLES
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const { classes } = TextEditorStyles({ hasError }, { name: 'TextEditor' });

  return (
    <InputWrapper
      label={label}
      description={description}
      error={error}
      help={help}
      required={required}
    >
      <Box className={classes.root}>
        <Toolbar editor={editor} blocks={toolbars} />
        <Box className={classes.editor}>
          <EditorContent editor={editor} />
        </Box>
      </Box>
    </InputWrapper>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
