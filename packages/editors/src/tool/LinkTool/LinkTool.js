import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover, useHotkeys } from '@bubbles-ui/components';
import { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button, LinkModal, CardExtension } from '../../form/';
import Link from '@tiptap/extension-link';

export const LINK_TOOL_DEFAULT_PROPS = {
  label: 'Link',
};

export const LINK_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const LinkTool = ({ label, ...props }) => {
  const { editor, library, libraryOnChange, isOpenedLink, setIsOpenedLink } =
    useContext(TextEditorContext);

  document.addEventListener('keydown', (e) => {
    console.log('keydown', e.key);
    if (e.key === 'Escape') {
      setIsOpenedLink(false);
    }
  });

  if (!editor) return;
  const { selection } = editor.state;
  const { from, to } = selection;
  const selectedText = editor.state.doc.textBetween(from, to, '');

  const onClickHandler = ({ text, link, card }) => {
    if (card) {
      editor?.chain().focus().setCard(card).run();
      setIsOpenedLink(false);
      return;
    }
    const textArray = text.split('');
    if (textArray[textArray.length - 1] === ' ') {
      textArray.pop();
    }
    const numberOfCharacters = textArray.length;
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
      .setLink({ href: link })
      .setTextSelection(0)
      .focus()
      .run();
    setIsOpenedLink(false);
  };

  return (
    <Popover
      opened={isOpenedLink}
      onClose={() => {}}
      width={360}
      position="bottom"
      placement="start"
      target={
        <Button
          {...props}
          label={label}
          icon={<HyperlinkIcon height={16} width={16} />}
          actived={isOpenedLink || editor?.isActive('link')}
          onClick={() => {
            editor
              .chain()
              .extendMarkRange('link')
              .focus()
              .updateAttributes('link', { isOpened: !isOpenedLink })
              .run();
            setIsOpenedLink(!isOpenedLink);
          }}
        ></Button>
      }
    >
      <LinkModal
        labels={{
          text: 'Text',
          link: 'Text',
          switch: 'Embed player',
          cancel: 'Cancel',
          add: 'Add link',
          cardInput: 'Item from library',
          selectCard: 'Select item',
        }}
        placeholders={{ text: 'Introduce un texto', link: 'Introduce un link' }}
        errorMessages={{
          text: 'Text is required',
          link: 'Link is required',
          validURL: 'Link is not valid',
        }}
        library={library}
        libraryOnChange={libraryOnChange}
        selectedText={selectedText}
        onCancel={() => {
          editor
            .chain()
            .extendMarkRange('link')
            .focus()
            .updateAttributes('link', { isOpened: false })
            .run();
          setIsOpenedLink(false);
        }}
        onChange={onClickHandler}
      />
    </Popover>
  );
};

LinkTool.defaultProps = LINK_TOOL_DEFAULT_PROPS;
LinkTool.propTypes = LINK_TOOL_PROP_TYPES;
LinkTool.extensions = [
  Link.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        isOpened: {
          default: false,
        },
      };
    },
  }).configure({
    openOnClick: false,
  }),
  CardExtension,
];

export { LinkTool };
