import React, { useContext, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '@bubbles-ui/components';
import Link from '@tiptap/extension-link';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button, LinkModal } from '../../form/';

export const LINK_TOOL_DEFAULT_PROPS = {
  label: 'Link',
};

export const LINK_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const LinkTool = ({ label, ...props }) => {
  const { editor, library, readOnly, libraryOnChange, linkModalOpened, editLink, closeLinkModal } =
    useContext(TextEditorContext);

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

      closeLinkModal();
    },
    [editor]
  );

  const handleOnClick = () => {
    editor.chain().focus().extendMarkRange('link').run();
    const { selection } = editor.state;
    const { from, to } = selection;
    const text = editor.state.doc.textBetween(from, to, ' ');
    const href = editor.getAttributes('link').href;
    editLink(text, href);
  };

  if (readOnly) return null;

  return (
    <Popover
      opened={linkModalOpened}
      onClose={() => {}}
      width={360}
      position="bottom"
      placement="start"
      target={
        <Button
          {...props}
          label={label}
          icon={<HyperlinkIcon height={16} width={16} />}
          actived={linkModalOpened || editor?.isActive('link')}
          onClick={handleOnClick}
        ></Button>
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
        useCase="link"
        library={library}
        libraryOnChange={libraryOnChange}
        selectedText={selectedText}
        onCancel={() => closeLinkModal()}
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
