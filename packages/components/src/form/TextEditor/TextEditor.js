import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { TextEditorStyles } from './TextEditor.styles';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  value: [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ],
};
export const TEXT_EDITOR_PROP_TYPES = {};

const TextEditor = ({ value, onChange, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value);
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withReact(createEditor()), []);

  const handleOnChange = (val) => {
    setCurrentValue(val);
    if (isFunction(onChange)) onChange(val);
  };

  const { classes, cx } = TextEditorStyles({});

  return (
    <Slate editor={editor} value={currentValue} onChange={handleOnChange}>
      <Editable />
    </Slate>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
