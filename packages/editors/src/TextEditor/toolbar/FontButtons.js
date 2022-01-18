import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@bubbles-ui/components';
import { ColorPickerToolbarDropdown } from '../plugins/font';
import { FontColor } from '@styled-icons/remix-editor';

const FontButtons = ({ classes }) => {
  const buttonClassnames = { root: classes.toolbarButton, active: classes.toolbarButtonActive };
  const dropdownClassNames = { root: classes.toolbarDropdown };

  return (
    <Stack className={classes.buttonGroup}>
      <ColorPickerToolbarDropdown
        icon={<FontColor />}
        classNames={dropdownClassNames}
        buttonClassnames={buttonClassnames}
      />
    </Stack>
  );
};

export { FontButtons };
