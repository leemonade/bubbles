import React from 'react';
import PropTypes from 'prop-types';
import { AlignToolbarButton, usePlateEditorRef } from '@udecode/plate';
import { Stack } from '@bubbles-ui/components';
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons';

const AlignButtons = ({ classes }) => {
  const editor = usePlateEditorRef();
  const buttonClassname = { root: classes.toolbarButton, active: classes.toolbarButtonActive };

  return (
    <Stack className={classes.buttonGroup}>
      <AlignToolbarButton value="left" icon={<TextAlignLeftIcon />} classNames={buttonClassname} />
      <AlignToolbarButton
        value="center"
        icon={<TextAlignCenterIcon />}
        classNames={buttonClassname}
      />
      <AlignToolbarButton
        value="right"
        icon={<TextAlignRightIcon />}
        classNames={buttonClassname}
      />
      <AlignToolbarButton
        value="justify"
        icon={<TextAlignJustifyIcon />}
        classNames={buttonClassname}
      />
    </Stack>
  );
};

export { AlignButtons };
