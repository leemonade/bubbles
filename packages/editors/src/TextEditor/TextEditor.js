import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Plate,
  createParagraphPlugin,
  createBlockquotePlugin,
  createHeadingPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createAlignPlugin,
  HeadingToolbar,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_PARAGRAPH,
  ELEMENT_BLOCKQUOTE,
  createPlateUI,
  createPlugins,
} from '@udecode/plate';
import { isFunction } from 'lodash';
import { Box, Stack } from '@bubbles-ui/components';
import { TextEditorStyles } from './TextEditor.styles';
import { HeadingButtons } from './toolbar/HeadingButtons';
import { AlignButtons } from './toolbar/AlignButtons';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  initialValue: [
    {
      type: ELEMENT_PARAGRAPH,
      children: [{ text: '' }],
    },
  ],
  placeholder: 'Type ...',
};
export const TEXT_EDITOR_PROP_TYPES = {};

const TextEditor = ({ value, initialValue, onChange, placeholder, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value || initialValue);
  const { classes } = TextEditorStyles({});

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
      createBoldPlugin(), // bold mark
      createItalicPlugin(), // italic mark
      createUnderlinePlugin(), // underline mark
      createStrikethroughPlugin(), // strikethrough mark

      // modifiers
      createAlignPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              ELEMENT_H1,
              ELEMENT_H2,
              ELEMENT_H3,
              ELEMENT_H4,
              ELEMENT_H5,
              ELEMENT_H6,
            ],
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
        <HeadingButtons classes={classes} />
        <AlignButtons classes={classes} />
      </HeadingToolbar>
      <Plate
        editableProps={editableProps}
        initialValue={currentValue}
        onChange={handleOnChange}
        plugins={plugins}
      />
    </Box>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
