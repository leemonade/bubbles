import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Plate,
  createParagraphPlugin,
  createBlockquotePlugin,
  createHeadingPlugin,
  createBasicMarksPlugin,
  createAlignPlugin,
  createIndentPlugin,
  createIndentListPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createExitBreakPlugin,
  createListPlugin,
  HeadingToolbar,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_PARAGRAPH,
  ELEMENT_DEFAULT,
  createPlateUI,
  createPlugins,
} from '@udecode/plate';
import { isFunction } from 'lodash';
import { Box, Stack } from '@bubbles-ui/components';
import { CONFIG } from './config';
import { TextEditorStyles } from './TextEditor.styles';
import { HeadingButtons } from './toolbar/HeadingButtons';
import { AlignButtons } from './toolbar/AlignButtons';
import { IndentButtons } from './toolbar/IndentButtons';
import { MarkButtons } from './toolbar/MarkButtons';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  initialValue: [
    {
      type: ELEMENT_DEFAULT,
      children: [{ text: '' }],
    },
  ],
  placeholder: '',
};
export const TEXT_EDITOR_PROP_TYPES = {};

const TextEditor = ({ value, initialValue, onChange, placeholder, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value || initialValue);
  const { classes } = TextEditorStyles({}, { name: 'TextEditor' });

  const editableProps = {
    placeholder,
    className: classes.editor,
  };

  const plugins = createPlugins(
    [
      // elements
      createParagraphPlugin(), // paragraph element
      createBlockquotePlugin(), // blockquote element
      createHeadingPlugin(), // heading elements

      // marks
      createBasicMarksPlugin(),

      // modifiers
      createResetNodePlugin(CONFIG.resetBlockType),
      createSoftBreakPlugin(CONFIG.softBreak),
      createExitBreakPlugin(CONFIG.exitBreak),

      createAlignPlugin({
        inject: {
          props: {
            validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
          },
        },
      }),
      createListPlugin(),
      createIndentListPlugin(),
      createIndentPlugin({
        inject: {
          props: {
            validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
          },
        },
      }),
    ],
    {
      components: createPlateUI(),
    }
  );

  const handleOnChange = (val) => {
    setCurrentValue(val);
    if (isFunction(onChange)) onChange(val);
  };

  return (
    <Box className={classes.root}>
      <HeadingToolbar className={classes.headingToolbar}>
        <MarkButtons classes={classes} />
        <HeadingButtons classes={classes} />
        <AlignButtons classes={classes} />
        <IndentButtons classes={classes} />
      </HeadingToolbar>
      <Plate
        editableProps={editableProps}
        initialValue={currentValue}
        onChange={handleOnChange}
        plugins={plugins}
        normalizeInitialValue
      />
    </Box>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
