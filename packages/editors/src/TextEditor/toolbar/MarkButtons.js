import React from 'react';
import {
  usePlateEditorRef,
  MarkToolbarButton,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_SUPERSCRIPT,
  MARK_SUBSCRIPT,
} from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Superscript,
  Subscript,
} from '@styled-icons/remix-editor';

const MarkButtons = ({ classes }) => {
  const editor = usePlateEditorRef();
  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <>
      <Stack className={classes.buttonGroup}>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<Bold />}
          classNames={buttonClassname}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<Italic />}
          classNames={buttonClassname}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<Underline />}
          classNames={buttonClassname}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<Strikethrough />}
          classNames={buttonClassname}
        />
      </Stack>
      <Stack className={classes.buttonGroup}>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_SUPERSCRIPT)}
          clear={getPluginType(editor, MARK_SUBSCRIPT)}
          icon={<Superscript />}
          classNames={buttonClassname}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_SUBSCRIPT)}
          clear={getPluginType(editor, MARK_SUPERSCRIPT)}
          icon={<Subscript />}
          classNames={buttonClassname}
        />
      </Stack>
    </>
  );
};

export { MarkButtons };
