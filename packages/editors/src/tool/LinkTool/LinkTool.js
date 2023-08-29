import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '@bubbles-ui/components';
import Link from '@tiptap/extension-link';
import { useTextEditor } from '../../form/TextEditorProvider';
import { Button, LinkModal } from '../../form/';
import { LinkBubbleMenu } from './LinkBubbleMenu/LinkBubbleMenu';

export const LINK_TOOL_DEFAULT_PROPS = {
  labels: {
    label: 'Link',
    text: 'Text',
    link: 'URL',
    cancel: 'Cancel',
    add: 'Add link',
    update: 'Update link',
  },
  placeholders: {
    text: 'Enter a text',
    link: 'Enter a link',
  },
  errorMessages: {
    text: 'Text is required',
    link: 'Link is required',
    validURL: 'Link is not valid',
  },
};

export const LINK_TOOL_PROP_TYPES = {
  labels: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    cancel: PropTypes.string,
    add: PropTypes.string,
    update: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    label: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    validURL: PropTypes.string,
  }),
};

const LinkTool = ({ labels, placeholders, errorMessages, ...props }) => {
  const {
    editor,
    toolModalOpen,
    currentTool,
    openBubbleMenu,
    closeBubbleMenu,
    editToolData,
    closeToolModal,
  } = useTextEditor();

  if (!editor) return;
  const { selection } = editor.state;
  const { from, to } = selection;
  const selectedText = editor.state.doc.textBetween(from, to, ' ');

  const getLinkAttributes = (editor) => {
    editor.chain().focus().extendMarkRange('link').run();
    const { selection } = editor.state;
    const { from, to } = selection;
    const text = editor.state.doc.textBetween(from, to, ' ');
    const href = editor.getAttributes('link').href;
    return { text, href };
  };

  const onClickHandler = useCallback(
    ({ text, link }) => {
      const numberOfCharacters = text.split('').length;
      const cursorPosition = editor.commands.command(({ state }) => {
        const anchor = state.selection.anchor;
        const from = state.selection.ranges[0].$from.pos;
        return anchor !== from ? from : anchor;
      });
      const range = { from: cursorPosition, to: cursorPosition + numberOfCharacters };

      editor
        .chain()
        .insertContent(text)
        .setTextSelection(range)
        .setLink({ href: link, target: '_blank' })
        .setTextSelection({ from: range.to, to: range.to })
        .run();

      closeToolModal();
    },
    [editor]
  );

  const handleOnClick = () => {
    const { text, href } = getLinkAttributes(editor);
    editToolData('link', { text, href }, !!href, <LinkBubbleMenu editor={editor} />);
  };

  const linkModalOpened = useMemo(
    () => currentTool.type === 'link' && toolModalOpen,
    [currentTool, toolModalOpen]
  );

  useEffect(() => {
    if (editor.isActive('link')) {
      const { text, href } = getLinkAttributes(editor);
      openBubbleMenu(
        'link',
        { text, href },
        !!href,
        <LinkBubbleMenu editor={editor} getLinkAttributes={getLinkAttributes} />
      );
    } else {
      closeBubbleMenu();
      closeToolModal();
    }
  }, [editor.isActive('link')]);

  return (
    <Popover
      opened={linkModalOpened}
      onClose={() => {}}
      width={360}
      position="top"
      placement="start"
      target={
        <Button
          {...props}
          label={labels.label}
          icon={<HyperlinkIcon height={16} width={16} />}
          actived={linkModalOpened || editor?.isActive('link')}
          onClick={handleOnClick}
        />
      }
    >
      <LinkModal
        labels={labels}
        placeholders={placeholders}
        errorMessages={errorMessages}
        selectedText={selectedText}
        onCancel={() => closeToolModal()}
        onChange={onClickHandler}
      />
    </Popover>
  );
};

LinkTool.defaultProps = LINK_TOOL_DEFAULT_PROPS;
LinkTool.propTypes = LINK_TOOL_PROP_TYPES;
LinkTool.extensions = [
  Link.configure({
    openOnClick: false,
  }),
];

export { LinkTool };
