import PropTypes from 'prop-types';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { Popover, Box } from '@bubbles-ui/components';
import { useState, useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import { LinkModal } from '../../form/LinkModal/LinkModal';
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

  const onClickHandler = ({ text, link }) => {
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
      onClose={() => setIsOpened(false)}
      width={360}
      position="bottom"
      placement="start"
      target={
        <Button
          {...props}
          label={label}
          icon={<HyperlinkIcon />}
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
LinkTool.extensions = [Link];

export { LinkTool };
