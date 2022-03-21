import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover } from '@bubbles-ui/components';
import { useState, useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import { LinkModal } from '../../form/LinkModal/LinkModal';
import CardExtension from '../../form/Card/extension';
import Link from '@tiptap/extension-link';

export const LINK_TOOL_DEFAULT_PROPS = {
  label: 'Link',
};

export const LINK_TOOL_PROP_TYPES = {
  label: PropTypes.string,
};

const LinkTool = ({ label, ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const [isOpened, setIsOpened] = useState(false);

  const onClickHandler = ({ text, link, embed, card }) => {
    if (card) {
      editor?.chain().focus().setCard(card).run();
      setIsOpened(false);
      return;
    }
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
      .setLink({ href: link })
      .focus()
      .run();
    setIsOpened(false);
  };

  return (
    <Popover
      opened={isOpened}
      onClose={() => {}}
      width={360}
      position="bottom"
      placement="start"
      target={
        <Button
          {...props}
          label={label}
          icon={<HyperlinkIcon height={16} width={16} />}
          actived={isOpened}
          onClick={() => setIsOpened(!isOpened)}
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
        onCancel={() => setIsOpened(false)}
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
  CardExtension,
];

export { LinkTool };
