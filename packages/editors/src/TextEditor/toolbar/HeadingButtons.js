import React from 'react';
import PropTypes from 'prop-types';
import {
  usePlateEditorRef,
  BlockToolbarButton,
  getPluginType,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_BLOCKQUOTE,
} from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import { HeadingIcon, QuoteIcon } from '@radix-ui/react-icons';

const HeadingButtons = ({ classes }) => {
  const editor = usePlateEditorRef();

  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <Stack className={classes.buttonGroup}>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<HeadingIcon />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<HeadingIcon />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<HeadingIcon />}
        classNames={buttonClassname}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<QuoteIcon />}
        classNames={buttonClassname}
      />
    </Stack>
  );
};

export { HeadingButtons };
