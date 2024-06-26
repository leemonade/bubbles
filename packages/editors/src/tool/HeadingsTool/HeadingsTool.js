import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from '@tiptap/extension-heading';
import { Select, Box } from '@bubbles-ui/components';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { HeadingsToolStyles } from './HeadingsTool.styles';
import { SelectItem } from './SelectItem';

export const HEADINGS_TOOL_DEFAULT_PROPS = {
  labels: {
    label: '',
    title1: 'Title 1',
    title2: 'Title 2',
    title3: 'Title 3',
    paragraph: 'Paragraph',
  },
};

export const HEADINGS_TOOL_PROP_TYPES = {
  labels: PropTypes.shape({
    label: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    paragraph: PropTypes.string,
  }),
};

const HeadingsTool = ({ labels }) => {
  const [level, setLevel] = useState(0);
  const { editor } = useContext(TextEditorContext);

  const VALUES = [
    { label: labels.title1, value: 1 },
    { label: labels.title2, value: 2 },
    { label: labels.title3, value: 3 },
    { label: labels.paragraph, value: 0 },
  ];

  const handleOnChange = (value) => {
    setLevel(value);

    if (Number(value) === 0) {
      editor?.chain().focus().setParagraph().run();
    } else {
      editor
        ?.chain()
        .focus()
        .toggleHeading({ level: Number(value) })
        .run();
    }
  };

  const handleOnSelection = ({ editor: e }) => {
    let activeLevel = 0;
    [1, 2, 3].every((item) => {
      if (e?.isActive('heading', { level: item })) {
        activeLevel = item;
        return false;
      }
      return true;
    });
    setLevel(activeLevel);
  };

  useEffect(() => {
    if (editor) {
      editor.on('selectionUpdate', handleOnSelection);
    }

    return () => {
      if (editor) {
        editor.off('selectionUpdate', handleOnSelection);
      }
    };
  }, [editor]);

  const { classes } = HeadingsToolStyles({}, 'HeadingsTool');

  return (
    <Box className={classes.root}>
      <Select
        data={VALUES}
        value={level}
        onChange={handleOnChange}
        itemComponent={SelectItem}
        style={{ minWidth: 170 }}
      />
    </Box>
  );
};

HeadingsTool.defaultProps = HEADINGS_TOOL_DEFAULT_PROPS;
HeadingsTool.propTypes = HEADINGS_TOOL_PROP_TYPES;

HeadingsTool.extensions = [Heading];

export { HeadingsTool };
