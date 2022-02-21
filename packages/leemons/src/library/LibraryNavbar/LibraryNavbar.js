import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, FileUpload, Button, Text, Paper } from '@bubbles-ui/components';
import { PluginLeebraryIcon } from '@bubbles-ui/icons/solid';
import { CloudUploadIcon } from '@bubbles-ui/icons/outline';
import { LibraryNavbarStyles } from './LibraryNavbar.styles';

export const LIBRARY_NAVBAR_DEFAULT_PROPS = {};
export const LIBRARY_NAVBAR_PROP_TYPES = {
  labels: PropTypes.shape({
    uploadButton: PropTypes.string,
    quickAcces: PropTypes.string,
    createNewTitle: PropTypes.string,
  }),
};

const LibraryNavbar = ({
  labels,
  categories,
  selectedCategory,
  onNav,
  onFile,
  onNew,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { classes, cx } = LibraryNavbarStyles({ isExpanded }, { name: 'LibraryNavbar' });
  return (
    <Box className={classes.root}>
      <Paper className={classes.navbarTop}>
        <Stack className={classes.header} spacing={2} alignItems={'center'}>
          <PluginLeebraryIcon height={24} width={24} />
          <Text className={classes.title}>{'Library'}</Text>
        </Stack>
        <Box className={classes.uploadButton}>
          <Button rightIcon={<CloudUploadIcon />} onClick={() => setIsExpanded(true)}>
            {labels.uploadButton}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

LibraryNavbar.defaultProps = LIBRARY_NAVBAR_DEFAULT_PROPS;
LibraryNavbar.propTypes = LIBRARY_NAVBAR_PROP_TYPES;

export { LibraryNavbar };
