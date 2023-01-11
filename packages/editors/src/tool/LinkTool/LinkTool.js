import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '@bubbles-ui/components';
import Link from '@tiptap/extension-link';
import { useTextEditor } from '../../form/TextEditorProvider';
import { Button, LinkModal } from '../../form/';

export const LINK_TOOL_DEFAULT_PROPS = {
  label: 'Link',
};

export const LINK_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const LinkTool = ({ label, ...props }) => {
  const { editor, readOnly, toolModalOpen, currentTool, editToolData, closeToolModal } =
    useTextEditor();

  if (!editor) return;
  const { selection } = editor.state;
  const { from, to } = selection;
  const selectedText = editor.state.doc.textBetween(from, to, ' ');

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
    editor.chain().focus().extendMarkRange('link').run();
    const { selection } = editor.state;
    const { from, to } = selection;
    const text = editor.state.doc.textBetween(from, to, ' ');
    const href = editor.getAttributes('link').href;
    editToolData('link', { text, href }, !!href);
  };

  const linkModalOpened = useMemo(
    () => currentTool.type === 'link' && toolModalOpen,
    [currentTool, toolModalOpen]
  );

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
          label={label}
          icon={<HyperlinkIcon height={16} width={16} />}
          actived={linkModalOpened || editor?.isActive('link')}
          onClick={handleOnClick}
        />
      }
    >
      <LinkModal
        labels={{
          text: 'Text',
          link: 'URL',
          cancel: 'Cancel',
          add: 'Add link',
          update: 'Update link',
        }}
        placeholders={{ text: 'Introduce un texto', link: 'Introduce un link' }}
        errorMessages={{
          text: 'Text is required',
          link: 'Link is required',
          validURL: 'Link is not valid',
        }}
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
