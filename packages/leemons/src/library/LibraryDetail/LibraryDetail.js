import React from 'react';
import PropTypes from 'prop-types';
import { Box, FileIcon } from '@bubbles-ui/components';
import { LibraryDetailContent, LibraryDetailToolbar, LibraryDetailPlayer } from '../';
import { LibraryDetailStyles } from './LibraryDetail.styles';

export const LIBRARY_DETAIL_VARIANTS = ['media', 'task'];
export const LIBRARY_DETAIL_ROLES = ['owner', 'editor', 'commentor', 'viewer'];

export const LIBRARY_DETAIL_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_PROP_TYPES = {
  asset: PropTypes.shape({
    id: PropTypes.string,
    fileType: PropTypes.string,
    fileExtension: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
    ),
    created: PropTypes.string,
    version: PropTypes.string,
    cover: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
    role: PropTypes.oneOf(LIBRARY_DETAIL_ROLES),
  }),
  variant: PropTypes.oneOf(LIBRARY_DETAIL_VARIANTS),
  toolbarEvents: PropTypes.shape({
    onEdit: PropTypes.func,
    onDuplicate: PropTypes.func,
    onDownload: PropTypes.func,
    onDelete: PropTypes.func,
    onShare: PropTypes.func,
    onAssign: PropTypes.func,
  }),
  onEdit: PropTypes.func,
};

const LibraryDetail = ({ asset, variant, toolbarEvents, onEdit, ...props }) => {
  const { classes, cx } = LibraryDetailStyles({});

  const { id, name, fileType, fileExtension, cover, color, url, description, metadata, tags } =
    asset;

  return (
    <Box className={classes.root}>
      <LibraryDetailToolbar id={id} toolbarEvents={toolbarEvents} onEdit={onEdit} />
      <LibraryDetailPlayer
        fileIcon={
          <FileIcon fileType={fileType} fileExtension={fileExtension} size={64} color={'#B9BEC4'} />
        }
        cover={cover}
        color={color}
        url={url}
        variant={variant}
        name={name}
      />
      <LibraryDetailContent
        description={description}
        metadata={metadata}
        tags={tags}
        fileType={fileType}
        variant={variant}
      />
    </Box>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
