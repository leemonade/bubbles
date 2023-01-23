import React, { useContext } from 'react';
import { BubbleMenuStyles } from './BubbleMenu.styles';
import { IconButton, Paper, Stack } from '@bubbles-ui/components';
import { TextEditorContext } from '../../form/';
import { DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const BUBBLEMENU_DEFAULT_PROPS = {};

export const BUBBLEMENU_PROP_TYPES = {};

const BubbleMenu = ({ ...props }) => {
  const { editor, currentTool, toolModalOpen, closeToolModal, editToolData } =
    useContext(TextEditorContext);

  const tippyInstance = useRef();

  const shouldShowHandler = ({ editor }) => {
    if (editor.isActive('image')) {
      return true;
    }
    if (editor.isActive('library') && !toolModalOpen) {
      return true;
    }
    if (editor.isActive('link') && !toolModalOpen) {
      return true;
    }
    return false;
  };

  const removeHandler = () => {
    if (editor.isActive('library')) {
      editor?.chain().focus().unsetLibrary().run();
      closeToolModal();
      return;
    }
    if (editor.isActive('link')) {
      editor?.chain().focus().unsetLink().run();
      closeToolModal();
      return;
    }
  };

  const editHandler = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().extendMarkRange('link').run();
      const { selection } = editor.state;
      const { from, to } = selection;
      const text = editor.state.doc.textBetween(from, to, ' ');
      const href = editor.getAttributes('link').href;
      editToolData('link', { text, href });
      return;
    }

    if (editor.isActive('library')) {
      const content = editor.getAttributes('library');
      editToolData('library', content);
      return;
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
