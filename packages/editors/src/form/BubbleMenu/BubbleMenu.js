import React, { useContext, useMemo } from 'react';
import { BubbleMenuStyles } from './BubbleMenu.styles';
import { IconButton, Paper, Select, Stack } from '@bubbles-ui/components';
import { TextEditorContext } from '../../form/';
import { DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';

export const BUBBLEMENU_DEFAULT_PROPS = {};

export const BUBBLEMENU_PROP_TYPES = {};

const BubbleMenu = ({ ...props }) => {
  const { editor, editLink, linkModalOpened, editLibrary, libraryModalOpened } =
    useContext(TextEditorContext);

  const shouldShowHandler = ({ editor }) => {
    if (editor.isActive('image')) {
      return true;
    }
    if (editor.isActive('library') && !libraryModalOpened) {
      return true;
    }
    if (editor.isActive('link') && !linkModalOpened) {
      return true;
    }

    return false;
  };

  const removeHandler = () => {
    if (editor.isActive('library')) {
      editor?.chain().focus().unsetLibrary().run();
    }
    if (editor.isActive('link')) {
      editor?.chain().focus().unsetLink().run();
    }
  };

  const editHandler = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().extendMarkRange('link').run();
      const { selection } = editor.state;
      const { from, to } = selection;
      const text = editor.state.doc.textBetween(from, to, ' ');
      const href = editor.getAttributes('link').href;
      editLink(text, href);
    }

    if (editor.isActive('library')) {
      const content = editor.getAttributes('library');
      editLibrary(content);
    }
  };

  const getData = () => {
    return [
      { value: 'card', label: 'Show as card' },
      { value: 'fullwidth', label: 'Full width' },
    ];
  };

  const showSizeSelect = () => {
    if (editor?.isActive('link')) {
      return false;
    }
    if (editor?.isActive('library')) {
      return false;
    }
    return true;
  };

  const getOnChangeHandler = (value) => {};

  const { classes, cx } = BubbleMenuStyles({});

  return (
    <BubbleMenuTipTap
      editor={editor}
      shouldShow={shouldShowHandler}
      tippyOptions={{ duration: 100, placement: 'bottom-start', zIndex: 1000 }}
    >
      {!linkModalOpened && !libraryModalOpened ? (
        <Paper padding={1} shadow="level100" className={classes.root}>
          <Stack spacing={2}>
            <IconButton
              size="xs"
              icon={<EditWriteIcon height={20} width={20} />}
              onClick={editHandler}
            />
            {showSizeSelect() && (
              <Select
                size="xs"
                defaultValue="auto"
                data={getData()}
                zIndex={9999}
                onChange={getOnChangeHandler}
              />
            )}
            <IconButton
              size="xs"
              icon={<DeleteBinIcon height={20} width={20} />}
              onClick={removeHandler}
            />
          </Stack>
        </Paper>
      ) : null}
    </BubbleMenuTipTap>
  );
};

BubbleMenu.defaultProps = BUBBLEMENU_DEFAULT_PROPS;
BubbleMenu.propTypes = BUBBLEMENU_PROP_TYPES;

export { BubbleMenu };
