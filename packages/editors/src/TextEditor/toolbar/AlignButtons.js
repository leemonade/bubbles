import React from 'react';
import PropTypes from 'prop-types';
import { AlignToolbarButton, usePlateEditorRef } from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import { AlignLeft, AlignRight, AlignCenter, AlignJustify } from '@styled-icons/remix-editor';

const AlignButtons = ({ classes }) => {
  const editor = usePlateEditorRef();
  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <Stack className={classes.buttonGroup}>
      <AlignToolbarButton value="left" icon={<AlignLeft />} classNames={buttonClassname} />
      <AlignToolbarButton value="center" icon={<AlignCenter />} classNames={buttonClassname} />
      <AlignToolbarButton value="right" icon={<AlignRight />} classNames={buttonClassname} />
      <AlignToolbarButton value="justify" icon={<AlignJustify />} classNames={buttonClassname} />
    </Stack>
  );
};

export { AlignButtons };
