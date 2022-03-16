import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { LibraryShareStyles } from './LibraryShare.styles';
import { LIBRARY_SHARE_DEFAULT_PROPS, LIBRARY_SHARE_PROP_TYPES } from './LibraryShare.constants';

const LibraryShare = ({ ...props }) => {
  const { classes, cx } = LibraryShareStyles({}, { name: 'LibraryShare' });

  return <Box className={classes.root}>Library share</Box>;
};

LibraryShare.defaultProps = LIBRARY_SHARE_DEFAULT_PROPS;
LibraryShare.propTypes = LIBRARY_SHARE_PROP_TYPES;

export { LibraryShare };
