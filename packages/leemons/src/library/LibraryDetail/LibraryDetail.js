import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { LibraryDetailContent, LibraryDetailToolbar, LibraryDetailPlayer } from '../';
import { LibraryDetailStyles } from './LibraryDetail.styles';

export const LIBRARY_DETAILS_VARIANTS = ['media', 'task'];

export const LIBRARY_DETAIL_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_PROP_TYPES = {};

const LibraryDetail = ({
  description,
  metadata,
  tags,
  fileType,
  fileIcon,
  cover,
  color,
  ...props
}) => {
  const { classes, cx } = LibraryDetailStyles({});

  return (
    <Box className={classes.root}>
      <LibraryDetailToolbar />
      <LibraryDetailPlayer fileIcon={fileIcon} cover={cover} color={color} />
      <LibraryDetailContent
        description={description}
        metadata={metadata}
        tags={tags}
        fileType={fileType}
      />
    </Box>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
