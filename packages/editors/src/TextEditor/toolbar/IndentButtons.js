import React from 'react';
import {
  usePlateEditorRef,
  ToolbarButton,
  toggleIndentList,
  outdentList,
  indent,
} from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import {
  ListOrdered,
  ListUnordered,
  IndentDecrease,
  IndentIncrease,
} from '@styled-icons/remix-editor';

const IndentButtons = ({ classes }) => {
  const editor = usePlateEditorRef();

  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <Stack className={classes.buttonGroup}>
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          toggleIndentList(editor, {
            listStyleType: 'disc',
          });
        }}
        icon={<ListUnordered />}
        classNames={buttonClassname}
      />
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          toggleIndentList(editor, {
            listStyleType: 'decimal',
          });
        }}
        icon={<ListOrdered />}
        classNames={buttonClassname}
      />
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          outdentList(editor);
        }}
        icon={<IndentDecrease />}
        classNames={buttonClassname}
      />
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          indent(editor);
        }}
        icon={<IndentIncrease />}
        classNames={buttonClassname}
      />
    </Stack>
  );
};

export { IndentButtons };
