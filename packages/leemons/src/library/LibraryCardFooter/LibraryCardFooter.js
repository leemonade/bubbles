import React from 'react';
import PropTypes from 'prop-types';
import { Box, FileIcon, Text } from '@bubbles-ui/components';
import { LibraryCardFooterStyles } from './LibraryCardFooter.styles';
import { capitalize } from 'lodash';

export const LIBRARY_CARD_FOOTER_DEFAULT_PROPS = {};
export const LIBRARY_CARD_FOOTER_PROP_TYPES = {
  fileType: PropTypes.string,
  created: PropTypes.string,
};

const LibraryCardFooter = ({ fileType, created, ...props }) => {
  const { classes, cx } = LibraryCardFooterStyles({});

  const formatDate = () => {
    try {
      return new Date(created).toLocaleDateString('en-GB');
    } catch (e) {
      return new Date(2010, 8, 21).toLocaleDateString('en-GB');
    }
  };

  return (
    <Box className={classes.root}>
      <FileIcon size={12} fileType={fileType} color={'#636D7D'} label={capitalize(fileType)} />
      <Text className={classes.date}>{formatDate()}</Text>
    </Box>
  );
};

LibraryCardFooter.defaultProps = LIBRARY_CARD_FOOTER_DEFAULT_PROPS;
LibraryCardFooter.propTypes = LIBRARY_CARD_FOOTER_PROP_TYPES;

export { LibraryCardFooter };
