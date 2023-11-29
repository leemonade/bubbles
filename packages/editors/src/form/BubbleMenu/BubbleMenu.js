import React, { useContext, useEffect, useRef } from 'react';
import { IconButton, Paper, Stack } from '@bubbles-ui/components';
import { DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';
import { TextEditorContext } from '../TextEditorProvider';
import { BubbleMenuStyles } from './BubbleMenu.styles';

export const BUBBLEMENU_DEFAULT_PROPS = {};
export const BUBBLEMENU_PROP_TYPES = {};

const BubbleMenu = ({ ...props }) => {
  const { editor, currentTool, toolModalOpen, closeToolModal, editToolData } =
    useContext(TextEditorContext);

  const tippyInstance = useRef();

  const shouldShowHandler = ({ editor: e }) =>
    e.isActive('image') ||
    (e.isActive('library') && !toolModalOpen) ||
    (e.isActive('link') && !toolModalOpen);

  const removeHandler = () => {
    if (editor.isActive('library')) {
      editor?.chain().focus().unsetLibrary().run();
      closeToolModal();
      return;
    }
    if (editor.isActive('link')) {
      editor?.chain().focus().unsetLink().run();
      closeToolModal();
    }
  };

  const editHandler = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().extendMarkRange('link').run();
      const { selection } = editor.state;
      const { from, to } = selection;
      const text = editor.state.doc.textBetween(from, to, ' ');
      const { href } = editor.getAttributes('link');
      editToolData('link', { text, href });
      return;
    }

    if (editor.isActive('library')) {
      const content = editor.getAttributes('library');
      editToolData('library', content);
    }
  };

  const { classes, cx } = BubbleMenuStyles({});

  const tippyProps = {
    duration: [150, 0],
    placement: 'bottom',
    zIndex: 10,
    maxWidth: 'none',
    offset: [0, 10],
    ...currentTool.bubbleMenuOptions,
  };

  useEffect(() => {
    if (!tippyInstance.current) return;
    tippyInstance.current.setProps(tippyProps);
  }, [tippyProps]);

  return (
    <BubbleMenuTipTap
      editor={editor}
      shouldShow={shouldShowHandler}
      tippyOptions={{
        ...tippyProps,
        onCreate: (instance) => {
          tippyInstance.current = instance;
        },
      }}
    >
      {!toolModalOpen
        ? (currentTool.toolBubbleMenu &&
            React.cloneElement(currentTool.toolBubbleMenu, {
              editHandler,
              removeHandler,
            })) || (
            <Paper padding={1} shadow="level100" className={classes.root}>
              <Stack spacing={2}>
                <IconButton
                  size="sm"
                  icon={<EditWriteIcon height={20} width={20} />}
                  onClick={editHandler}
                />
                <IconButton
                  size="sm"
                  icon={<DeleteBinIcon height={20} width={20} />}
                  onClick={removeHandler}
                />
              </Stack>
            </Paper>
          )
        : null}
    </BubbleMenuTipTap>
  );
};

BubbleMenu.defaultProps = BUBBLEMENU_DEFAULT_PROPS;
BubbleMenu.propTypes = BUBBLEMENU_PROP_TYPES;

export { BubbleMenu };
