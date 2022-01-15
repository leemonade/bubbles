import React from 'react';
import {
  usePlateEditorRef,
  BlockToolbarButton,
  getPluginType,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_BLOCKQUOTE,
} from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import { H1, H2, H3, DoubleQuotesR } from '@styled-icons/remix-editor';

const HeadingButtons = ({ classes }) => {
  const editor = usePlateEditorRef();

  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <Stack className={classes.buttonGroup}>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<H1 />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<H2 />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<H3 />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<DoubleQuotesR />}
        classNames={buttonClassname}
      />
    </Stack>
  );
};

export { HeadingButtons };
