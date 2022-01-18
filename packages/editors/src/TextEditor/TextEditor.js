import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createAlignPlugin,
  createBasicMarksPlugin,
  createBlockquotePlugin,
  createDeserializeAstPlugin,
  createDeserializeHtmlPlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createIndentListPlugin,
  createIndentPlugin,
  createListPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlateEditor,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSoftBreakPlugin,
  deserializeHtml,
  ELEMENT_DEFAULT,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  Plate,
  serializeHtml,
  withProps,
} from '@udecode/plate';
import { isArray, isEmpty, isFunction, isString } from 'lodash';
import { Box, useId } from '@bubbles-ui/components';
import { CONFIG } from './config';
import { TextEditorStyles } from './TextEditor.styles';
import { createFontColorPlugin } from './plugins/font';
import { FontButtons } from './toolbar/FontButtons';
import { HeadingButtons } from './toolbar/HeadingButtons';
import { AlignButtons } from './toolbar/AlignButtons';
import { IndentButtons } from './toolbar/IndentButtons';
import { MarkButtons } from './toolbar/MarkButtons';

export const TEXT_EDITOR_FORMATS = ['raw', 'html'];

export const TEXT_EDITOR_DEFAULT_PROPS = {
  placeholder: '',
  input: TEXT_EDITOR_FORMATS[1],
  output: TEXT_EDITOR_FORMATS[1],
};
export const TEXT_EDITOR_PROP_TYPES = {
  placeholder: PropTypes.string,
  input: PropTypes.oneOf(TEXT_EDITOR_FORMATS),
  output: PropTypes.oneOf(TEXT_EDITOR_FORMATS),
};

const DESERIALIZERS = {
  html: deserializeHtml,
  raw: (editor, { element }) => element,
};

const SERIALIZERS = {
  html: serializeHtml,
  raw: (editor, { nodes }) => nodes,
};

const PLUGINS = [
  // elements
  createParagraphPlugin(), // paragraph element
  createBlockquotePlugin(), // blockquote element
  createHeadingPlugin(), // heading elements

  // marks
  createBasicMarksPlugin(),
  createFontColorPlugin(),

  // modifiers
  createNodeIdPlugin(),
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
];

const BASIC_COMPONENTS = createPlateUI();

const TextEditor = ({ value, onChange, placeholder, output, input, ...props }) => {
  const uuid = useId();
  const [currentValue, setCurrentValue] = useState();
  const { classes } = TextEditorStyles({}, { name: 'TextEditor' });

  const editableProps = {
    placeholder,
    className: classes.editor,
  };

  let components = {
    ...BASIC_COMPONENTS,
    [ELEMENT_H1]: withProps(BASIC_COMPONENTS[ELEMENT_H1], {
      className: classes.title,
    }),
    [ELEMENT_H2]: withProps(BASIC_COMPONENTS[ELEMENT_H2], {
      className: classes.title,
    }),
    [ELEMENT_H3]: withProps(BASIC_COMPONENTS[ELEMENT_H3], {
      className: classes.title,
    }),
    // customize your components by plugin key
  };

  const plugins = createPlugins(
    [
      ...PLUGINS,
      createDeserializeHtmlPlugin({ plugins: PLUGINS }),
      createDeserializeAstPlugin({ plugins: PLUGINS }),
    ],
    {
      components,
    }
  );

  function resetNodes(editor, options) {
    const children = [...editor.children];
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      editor.apply({ type: 'remove_node', path: [0], node });
    }

    if (options.nodes) {
      const nodes = !isArray(options.nodes) ? [options.nodes] : options.nodes;
      for (let i = 0; i < nodes.length; i++) {
        editor.apply({ type: 'insert_node', path: [i], node: nodes[i] });
      }
    }

    /*
    const point = options.at && Point.isPoint(options.at) ? options.at : Editor.end(editor, []);
    if (point) Transforms.select(editor, point);
    *
     */
  }

  const editor = createPlateEditor({ plugins, components });

  useEffect(() => {
    if (isEmpty(value)) {
      setCurrentValue([
        {
          type: ELEMENT_DEFAULT,
          children: [{ text: '' }],
        },
      ]);
    } else if (!isEmpty(input) && isString(value)) {
      const deserializer = DESERIALIZERS[input] || deserializeHtml;
      setCurrentValue(deserializer(editor, { element: value }));
    } else {
      setCurrentValue(value);
    }
  }, [input, value]);

  useEffect(() => {
    resetNodes(editor, { nodes: currentValue });
  }, [currentValue]);

  const handleOnChange = (nodes) => {
    if (isFunction(onChange)) {
      if (!isEmpty(output)) {
        const serializer = SERIALIZERS[output] || serializeHtml;
        onChange(serializer(editor, { nodes }));
      } else {
        onChange(nodes);
      }
    }
  };

  return (
    <Box className={classes.root}>
      {!isEmpty(currentValue) && (
        <>
          <HeadingToolbar className={classes.headingToolbar}>
            <MarkButtons classes={classes} />
            <FontButtons classes={classes} />
            <HeadingButtons classes={classes} />
            <AlignButtons classes={classes} />
            <IndentButtons classes={classes} />
          </HeadingToolbar>
          <Plate
            id={uuid}
            editor={editor}
            editableProps={editableProps}
            value={currentValue}
            onChange={handleOnChange}
            plugins={plugins}
          />
        </>
      )}
    </Box>
  );
};

TextEditor.defaultProps = TEXT_EDITOR_DEFAULT_PROPS;
TextEditor.propTypes = TEXT_EDITOR_PROP_TYPES;

export { TextEditor };
