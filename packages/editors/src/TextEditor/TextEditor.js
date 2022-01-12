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
  usePlateEditorRef,
  BlockToolbarButton,
  getPluginType,
  HeadingToolbar,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_BLOCKQUOTE,
  createPlateUI,
  createPlugins,
} from '@udecode/plate';
import { isFunction } from 'lodash';
import { LayoutHeadlineIcon } from '@bubbles-ui/icons/solid';
import { HeadingIcon, QuoteIcon } from '@radix-ui/react-icons';
import { TextEditorStyles } from './TextEditor.styles';

export const TEXT_EDITOR_DEFAULT_PROPS = {
  initialValue: [
    {
      children: [
        {
          text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
        },
      ],
    },
  ],
  placeholder: '',
};
export const TEXT_EDITOR_PROP_TYPES = {};

const BasicElementToolbarButtons = () => {
  const { classes } = TextEditorStyles({});
  const editor = usePlateEditorRef();

  return (
    <>
      <BlockToolbarButton
        classNames={{ root: classes.toolbarButton }}
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LayoutHeadlineIcon />}
      />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H2)} icon={<HeadingIcon />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H3)} icon={<HeadingIcon />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H4)} icon={<HeadingIcon />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H5)} icon={<HeadingIcon />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_H6)} icon={<HeadingIcon />} />
      <BlockToolbarButton type={getPluginType(editor, ELEMENT_BLOCKQUOTE)} icon={<QuoteIcon />} />
    </>
  );
};

const TextEditor = ({ value, initialValue, onChange, placeholder, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value || initialValue);
  const { classes } = TextEditorStyles({});

  const editableProps = {
    placeholder,
    className: classes.root,
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
    <>
      <HeadingToolbar>
        <BasicElementToolbarButtons />
      </HeadingToolbar>
      <Plate
        editableProps={editableProps}
        initialValue={currentValue}
        onChange={handleOnChange}
        plugins={plugins}
      />
    </>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
