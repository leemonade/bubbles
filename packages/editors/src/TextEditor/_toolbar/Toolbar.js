import React from 'react';
import PropTypes from 'prop-types';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  H1,
  H2,
  H3,
  DoubleQuotesR,
  ListOrdered,
  ListUnordered,
} from '@styled-icons/remix-editor';
import { Undo, Redo } from '@styled-icons/boxicons-regular';
import { Box, Stack, ActionButton } from '@bubbles-ui/components';
import { ToolbarStyles } from './Toolbar.styles';

const Toolbar = ({ editor, blocks }) => {
  if (!editor) {
    return null;
  }

  // ··································································
  // STYLES

  const { classes } = ToolbarStyles({}, { name: 'TextEditorToolbar' });

  return (
    <Box className={classes.root}>
      {blocks.history && (
        <Stack className={classes.buttonGroup}>
          <ActionButton
            onClick={() => editor.chain().focus().undo().run()}
            icon={<Undo />}
            tooltip="Undo"
          />
          <ActionButton
            onClick={() => editor.chain().focus().redo().run()}
            icon={<Redo />}
            tooltip="Redo"
          />
        </Stack>
      )}
      {blocks.style && (
        <Stack className={classes.buttonGroup}>
          <ActionButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            variant={editor.isActive('bold') ? 'solid' : 'default'}
            icon={<Bold />}
            tooltip="Bold"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            variant={editor.isActive('italic') ? 'solid' : 'default'}
            icon={<Italic />}
            tooltip="Italic"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            variant={editor.isActive('underline') ? 'solid' : 'default'}
            icon={<Underline />}
            tooltip="Underline"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            variant={editor.isActive('strike') ? 'solid' : 'default'}
            icon={<Strikethrough />}
            tooltip="Strike"
          />
        </Stack>
      )}
      {blocks.color && <Stack className={classes.buttonGroup}></Stack>}
      {blocks.heading && (
        <Stack className={classes.buttonGroup}>
          <ActionButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            variant={editor.isActive('heading', { level: 1 }) ? 'solid' : 'default'}
            icon={<H1 />}
            tooltip="Heading 1"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            variant={editor.isActive('heading', { level: 2 }) ? 'solid' : 'default'}
            icon={<H2 />}
            tooltip="Heading 2"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            variant={editor.isActive('heading', { level: 3 }) ? 'solid' : 'default'}
            icon={<H3 />}
            tooltip="Heading 3"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            variant={editor.isActive('blockquote') ? 'solid' : 'default'}
            icon={<DoubleQuotesR />}
            tooltip="Blockquote"
          />
        </Stack>
      )}
      {blocks.align && (
        <Stack className={classes.buttonGroup}>
          <ActionButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            variant={editor.isActive({ textAlign: 'left' }) ? 'solid' : 'default'}
            icon={<AlignLeft />}
            tooltip="Align left"
          />
          <ActionButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            variant={editor.isActive({ textAlign: 'center' }) ? 'solid' : 'default'}
            icon={<AlignCenter />}
            tooltip="Align center"
          />
          <ActionButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            variant={editor.isActive({ textAlign: 'right' }) ? 'solid' : 'default'}
            icon={<AlignRight />}
            tooltip="Align right"
          />
          <ActionButton
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            variant={editor.isActive({ textAlign: 'justify' }) ? 'solid' : 'default'}
            icon={<AlignJustify />}
            tooltip="Align justify"
          />
        </Stack>
      )}
      {blocks.list && (
        <Stack className={classes.buttonGroup}>
          <ActionButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            variant={editor.isActive('bulletList') ? 'solid' : 'default'}
            icon={<ListUnordered />}
            tooltip="Unordered list"
          />
          <ActionButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            variant={editor.isActive('orderedList') ? 'solid' : 'default'}
            icon={<ListOrdered />}
            tooltip="Ordered list"
          />
        </Stack>
      )}
    </Box>
  );
};

Toolbar.defaultProps = {
  blocks: {},
};

Toolbar.propTypes = {
  editor: PropTypes.any,
  blocks: PropTypes.object,
};

export { Toolbar };
